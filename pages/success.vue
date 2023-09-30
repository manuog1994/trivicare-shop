<template>
    <client-only>
        <div>
            <NavBottom/>
            <BigLoader v-if="loading" />
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <div class="container mt-3 mt-lg-5 pb-100">
                    <div class="row">
                        <div class="col-12">
                            <div class="mt-3 d-flex justify-content-center">
                                <img src="/payment/success.webp" alt="imagen no disponible" width="80">
                            </div>
                            <div>
                                <h2 class="text-center mt-3">Gracias por tu pedido 😊</h2>
                                <p class="text-center mt-3">Hemos recibido su pago correctamente, en unos minutos recibirá un correo electrónico con la factura adjunta. A continuación tienes un resumen de tu pedido:</p>
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
                                                Si no recibes el correo electrónico en unos minutos, revisa la carpeta de spam o ponte en contacto con nosotros.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TheFooter />
        </div>
    </client-only>
</template>

<script>
export default {
    auth:false,
    // middleware: 'token',

    data() {
        return {
            loading: false,
            searchChildren: '',
            closeMenu: false,
        }
    },

    components: {
        HeaderWithTopbar: () => import('@/components/HeaderWithTopbar.vue'),
        TheHeader: () => import('@/components/TheHeader.vue'),
        NavBottom: () => import('@/components/NavBottom.vue'),
        TheFooter: () => import('@/components/TheFooter.vue'),
        BigLoader: () => import('@/components/loaders/BigLoader.vue'),
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
        //Comprobar si el parametro de la url order_id es igual al de la store
        if(this.$route.query.order_id != this.$store.getters.getOrderId) {
            // Si no es igual, redirigir a la página de inicio
            this.$router.push('/');
        }

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

        },

        closeMenus() {
            this.searchOpacity(false);
            this.$root.$emit('closeMenu', this.closeMenu);
        },

        searchOpacity(searchFather) {
            if (searchFather == true) {
                document.getElementById("post-nav").classList.add("search-screen");
            } else {
                document.getElementById("post-nav").classList.remove("search-screen");
            }
        }
    },

    head() {
        return {
            titleTemplate: 'Gracias por tu pedido 😊 | TriviCare Natural Cosmetics',
        }
    }
}
</script>

<style>

</style>