<template>
    <client-only>
        <div class="shop-page-wrapper">
            <TheHeader />
            <Breadcrumb pageTitle="Detalle del pedido" />
                <div class="container pt-100 pb-100">
                    <!-- Numero de pedido -->
                    <div class="mb-4">
                        <h2>Detalle del pedido {{ order.id }}</h2>
                    </div>
                    <!-- Datos del pedido -->
                    <div>
                        <div class="d-flex justify-content-around mb-5">
                            <div class="mr-5">
                                <h4>Datos del pedido</h4>
                                <p>Fecha: {{ order.order_date }}</p>
                                <p>Estado: {{ getState(order) }}</p>
                                <p>Estado de pago: {{ getPaymentState(order) }}</p>
                            </div>
                            <div class="mr-5">
                                <h4>Datos del cliente</h4>
                                <p>Nombre: {{ getName(order) }}</p>
                                <p>Correo: {{ user.user }}</p>
                                <p>Teléfono: {{ user.phone }}</p>
                            </div>
                            <div class="mr-5">
                                <h4>Datos de envío</h4>
                                <p>Dirección: {{ user.address }}</p>
                                <p>Ciudad: {{ user.city }}</p>
                                <p>Estado: {{ user.state }}</p>
                                <p>Código postal: {{ user.zipcode }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Tabla de productos -->
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in this.products" :key="product.id">
                                    <th scope="row">{{ product.id }}</th>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.cartQuantity }}</td>
                                    <td>
                                        <span v-if="product.discount < 0">
                                            {{ product.price }}
                                        </span>
                                        <span v-else>
                                            {{ discountedPrice(product).toFixed(2) }} &euro;
                                        </span>
                                        <span class="old ms-2" v-if="product.discount != null">
                                            {{ product.price }} &euro;
                                        </span>
                                    </td>
                                    <td>{{ (product.total).toFixed(2) }} &euro;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Total del pedido -->
                    <div>
                        <div class="d-flex justify-content-end mt-4">
                            <div class="d-flex flex-column">
                                <div class="d-flex justify-content-between mb-2">
                                    <div class="me-2 fw-bold">Subtotal:</div>
                                    <div>{{ order.total }} &euro;</div>
                                </div>
                                <div v-if="order.coupon" class="d-flex justify-content-between mb-2">
                                    <div class="me-2 fw-bold">Cupón:</div>
                                    <div>{{ order.coupon }} </div>
                                </div>
                                <div class="d-flex justify-content-evenly mb-2">
                                    <div class="me-2">
                                        <p class="fw-bold">Gastos de envío:</p>
                                    </div>
                                    <div v-if="order.shipping == 0">
                                        <p class="text-danger ms-4">Gratis</p>
                                    </div>
                                    <div v-else>
                                        <p class="text-danger ms-4">{{ order.shipping }} &euro;</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <div class="me-2 fs-4 fw-bold">Total:</div>
                                    <div v-if="order.shipping == 0" style="font-size:20px;">{{ order.total }} &euro;</div>
                                    <div v-else style="font-size:20px;">{{ parseFloat(order.total) + parseFloat(order.shipping) }} &euro;</div>
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

    components: {
        TheHeader: () => import('@/components/TheHeader'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        TheFooter: () => import('@/components/TheFooter'),
    },

    data() {
        return {
            order: {},
            products: [],
            id: this.$route.params.id,
            users: [],
            user: {},
        }
    },

    mounted() {
        this.getOrder();
        this.getUserName();
    },

    methods: {
        async getOrder() {
            await this.$axios.get('/api/orders/' + this.id)
                .then(response => {
                    this.order = response.data.data
                    this.products = JSON.parse(this.order.products);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },

        async getUserName() {
            await this.$axios.get('/api/users')
                .then(response => {
                    this.users = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getName(order) {
            let users = this.users;
            return users.filter(user => {
                if (user.id == order.user_profile_id) {
                    return user;
                }
            }).map(user => {
                this.user = user;
                return user.name + ' ' + user.lastname;
            }).toString();
        },

        getState(order) {
            if (order.status == 1) {
                return 'Recibido';
            } else if (order.status == 2) {
                return 'Preparando';
            } else if (order.status == 3) {
                return 'Enviado';
            } else if (order.status == 4) {
                return 'Entregado';
            } else {
                return 'Cancelado';
            }
        },

        getPaymentState(order) {
            if (order.paid == 1) {
                return 'Pendiente';
            } else if (order.paid == 2) {
                return 'Procesando';
            } else if (order.paid == 3) {
                return 'Pagado';
            }
        },

    },

}
</script>

<style scoped>

.old {
    text-decoration: line-through;
    color: #999;
}

</style>