<template>
    <div class="container mt-3 mt-lg-5 pb-100">
        <div class="row">
            <div class="col-12">
                <div class="mt-3 d-flex justify-content-center">
                    <img src="/payment/success.webp" alt="imagen no disponible" width="80">
                </div>
                <div>
                    <h2 class="text-center mt-3">Gracias por tu pedido 😊</h2>
                    <p class="text-center mt-3">Quedamos a la espera de recibir el pago. A continuación tienes un resumen de tu pedido:</p>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <div class="mt-4">
                            <div class="row">
                                <!-- Mostrar datos y dirección del cliente -->
                                <div class="col-12 col-md-6 mt-4">
                                    <h4 class="m-1 p-0">Datos del cliente</h4>
                                    <p class="m-1 p-0"><strong>Nombre:</strong> {{ orderHistory.guest?.name }}</p>
                                    <p class="m-1 p-0"><strong>Apellidos:</strong> {{ orderHistory.guest?.lastname }}</p>
                                    <p class="m-1 p-0"><strong>Email:</strong> {{ orderHistory.guest?.email }}</p>
                                    <p class="m-1 p-0"><strong>Teléfono:</strong> {{ orderHistory.guest?.phone }}</p>
                                    <p class="m-1 p-0"><strong>DNI/NIE/NIF:</strong> {{ orderHistory.guest?.dni }}</p>
                                </div>
                                
                                <!-- Mostrar dirección -->
                                <div class="col-12 col-md-6 mt-4">
                                    <h4 class="m-1 p-0">Dirección</h4>
                                    <p class="m-1 p-0"><strong>Dirección:</strong> {{ orderHistory.guest?.address }}</p>
                                    <p class="m-1 p-0"><strong>Código postal:</strong> {{ orderHistory.guest?.zipcode }}</p>
                                    <p class="m-1 p-0"><strong>Ciudad:</strong> {{ orderHistory.guest?.city }}</p>
                                    <p class="m-1 p-0"><strong>Provincia:</strong> {{ orderHistory.guest?.state }}</p>
                                    <p class="m-1 p-0"><strong>País:</strong> {{ orderHistory.guest?.country }}</p>
                                </div>
                            </div>


                            <!-- Mostrar una tabla con los productos cantidad y precio -->
                            <div class="table-responsive mt-4">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Producto(s)</th>
                                            <th scope="col">Cantidad(es)</th>
                                            <th scope="col">Precio(s) por unidad</th>
                                            <th scope="col">Precio(s) total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in orderHistory.cart" :key="'item' + item.id">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.cartQuantity }}</td>
                                            <td>{{ (item.price_base * 1.21)?.toFixed(2) }} €</td>
                                            <td> {{ ((item.price_base * item.cartQuantity) * 1.21)?.toFixed(2) }} €</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <!-- Mostrar el desglose -->
                                <div class="mt-4 text-end">
                                    <p class="p-0 m-1"><strong>Subtotal:</strong> {{ orderHistory.subtotal?.toFixed(2) }} €</p>
                                    <p class="p-0 m-1"><strong>IVA:</strong> {{ (orderHistory.subtotal * 21 / 100)?.toFixed(2) }} €</p>
                                    <p class="p-0 m-1"><strong>Envío:</strong> {{ orderHistory?.shippingAmount }} €</p>
                                    <p v-if="orderHistory.cupon?.discount" class="p-0 m-1"><strong>Cupón:</strong> {{ orderHistory.cupon?.discount }} %</p>
                                    <p class="p-0 m-1 fs-5"><strong>Total:</strong> {{ ((orderHistory?.total * 1.21) + orderHistory?.shippingAmount)?.toFixed(2) }} €</p>
                                </div>

                            </div>

                            <!-- Aviso -->
                            <div class="mt-4">
                                <p class="text-center">
                                    <i class="fa fa-warning"></i>
                                    Recibirás un correo electrónico con la confirmación de tu pedido y las instrucciones de pago, mira en la bandeja de spam si no lo localizas o ponte en contacto con nosotros. Gracias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false,
        }
    },

    computed: {
        total() {
            return this.$store.getters.getTotal * 1.21;
        },
        shippingAmount() {
            return this.$store.getters.getShippingAmount;
        },

        guestStore() {
            return this.$store.getters.getGuest;
        },

        orderHistory() {
            return this.$store.getters.getOrderHistory;
        }
    },

    beforeMount() {
        // Guardar datos en la variable orderHistory de la store
        if(this.guestStore != null) {
            this.$store.commit('SET_ORDER_HISTORY', {
                guest: this.$store.getters.getGuest,
                cart: this.$store.getters.getCart,
                subtotal: this.$store.getters.getSubTotal,
                total: this.$store.getters.getTotal,
                shippingAmount: this.$store.getters.getShippingAmount,
                cupon: this.$store.getters.getCupon,
                paymentMethod: this.$store.getters.getPaymentMethod,
                shippingMethod: this.$store.getters.getShippingMethod,
            });
        }
    },

    mounted() {
        this.orderComplete();
    },

    methods: {
        orderComplete() {
            this.$store.commit('CLEAR_GUEST');
            this.$store.commit('CLEAR_CART');
            this.$store.commit('CLEAR_CUPON');
            this.$store.commit('SET_STEP2', false);
            this.$store.commit('SET_STEP3', false);
            this.$store.commit('SET_STEP4', false);
            this.$store.commit('CLEAR_GUEST', {});
            this.$store.commit('SET_PAYMENT_METHOD', '');
            this.$store.commit('SET_SHIPPING_METHOD', '');
            this.$store.commit('SET_PICKUP_ID', '');
            this.$store.commit('SET_DURATION', 0);
            this.$store.commit('SET_USER_PROFILE_ID', '');
            this.$store.commit('SET_RESERVE', '');
            this.$store.commit('CLEAR_CUPON', {});
            this.$store.commit('SET_ORDER_ID', '');
            this.$store.commit('SET_PAYMENT_METHOD', '');
            this.$store.commit('SET_SHIPPING_METHOD', '');
            this.$store.commit('SET_SHIPPING_AMOUNT', 0);
            this.$store.commit('SET_CONDITIONS_STORE', false);
            this.$store.commit('SET_NEWSLETTER_STORE', false);
            this.$store.commit('SET_INVOICE_PAPER', false);
            this.$store.commit('SET_NOTE', '');
            this.$store.commit('SET_BIZUM_PAGE', false);
            this.$store.commit('SET_EXCLUSIVE_PRODUCTS', []);
        },
    }
}
</script>

<style>

</style>