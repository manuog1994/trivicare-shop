<template>
    <div class="container pt-100 pb-100">
        <!-- Numero de pedido -->
        <div class="mb-5">
            <h2>Detalle del pedido</h2>
        </div>
        <!-- Datos del pedido -->
        <div>
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h4>Datos del pedido</h4>
                    <p>Fecha: {{ order.order_date }}</p>
                    <p>Estado: {{ getState(order) }}</p>
                    <p>Estado de pago: {{ getPaymentState(order) }}</p>
                </div>
                <div class="col-lg-4 mb-4">
                    <h4>Datos del cliente</h4>
                    <p v-if="user.name != 'deleted'">Nombre:{{ user.name }} {{ user.lastname }}</p>
                    <p>Correo: {{ email }}</p>
                    <p v-if="user.phone != 0">Teléfono: {{ user.phone }}</p>
                    <p v-else>Sus datos han sido eliminados</p>
                </div>
                <div class="col-lg-4 mb-4">
                    <h4>Datos de envío</h4>
                    <p v-if="user.address != 'deleted'">Dirección: {{ user.address }}</p>
                    <p v-if="user.city != 'deleted'">Ciudad: {{ user.city }}</p>
                    <p v-if="user.state != 'deleted'">Provincia: {{ user.state }}</p>
                    <p v-if="user.zipcode != 0">Código postal: {{ user.zipcode }}</p>
                    <p v-else>Sus datos han sido eliminados</p>
                </div>
            </div>
        </div>
        <!-- Tabla de productos -->
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in this.products" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.cartQuantity }}</td>
                        <td>
                            <span v-if="product.discount < 0">
                                {{ (product.price_base * 1.21).toFixed(2) }} &euro;
                            </span>
                            <span v-else>
                                {{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;
                            </span>
                        </td>
                        <td>{{ (product.total * 1.21).toFixed(2) }} &euro;</td>
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
                        <div>{{ (order.total * 1.21).toFixed(2) }} &euro;</div>
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
                        <div v-if="order.shipping == 0" style="font-size:20px;">{{ (order.total * 1.21).toFixed(2) }} &euro;</div>
                        <div v-else style="font-size:20px;">{{ ((parseFloat(order.total) * 1.21) + parseFloat(order.shipping)).toFixed(2) }} &euro;</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Boton descargar factura -->
        <div class="d-flex justify-content-end mt-5">
            <button class="btn btn-primary" @click.prevent="getUrl(order)">Descargar factura</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            order: {},
            products: [],
            id: this.$route.params.id,
            users: [],
            user: {},
            email: ''
        }
    },

    mounted() {
        this.getOrder();
        //this.getUserName();
    },

    methods: {
        async getOrder() {
            await this.$axios.get('/api/orders?filter[id]=' + this.id)
                .then(response => {
                    const orders = response.data.data;
                    orders.map(order => {
                        if (order.id == this.id) {
                            this.order = order;
                            this.products = JSON.parse(order.products);
                            this.email = order.user.email;
                            const user_profiles = order.user.user_profile;
                            user_profiles.map(user_profile => {
                                if(user_profile.id == order.user_profile_id) {
                                    this.user = user_profile;
                                    this.fullName = user_profile.name + ' ' + user_profile.lastname;
                                }
                            })
                        }
                    })
                    //console.log(orders)
                })
                .catch(error => {
                    //console.log(error)
                })
        },

        discountedPrice(product) {
            return product.price_base - (product.price_base * product.discount / 100)
        },

        async getUserName() {
            await this.$axios.get('/api/users')
                .then(response => {
                    this.users = response.data.data;
                })
                .catch(error => {
                    //console.log(error);
                });
        },

        // getName() {
        //     const order = this.order;
        //     console.log(order);
        //     let users = this.users;
        //     console.log(users)
        //     return users.filter(user => {
        //         if (user.id == order.user_profile_id) {
        //             return user;
        //         }
        //     }).map(user => {
        //         this.user = user;

        //         this.fullName = user.name + ' ' + user.lastname;
        //     });
        // },

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
            if (order.paid == 'PENDIENTE') {
                return 'Pendiente';
            } else if (order.paid == 'PROCESANDO') {
                return 'Procesando';
            } else if (order.paid == 'PAGADO') {
                return 'Pagado';
            } else if (order.paid == 'RECHAZADO') {
                return 'Rechazado';
            } else if (order.paid == 'CONTRAREEMBOLSO') {
                return 'Contra reembolso';
            } else if (order.paid == 'TRANSFERENCIA') {
                return 'Transferencia';
            }
        },


        async getUrl(order){
            //console.log(order);
            let FileDownload = require('js-file-download');
            await this.$axios.get('/api/invoices/' + order.invoice.id, {
                responseType: 'blob'
            }).then(response => {
                FileDownload(response.data, order.invoice.filename);
            });
        },

    },

}
</script>

<style>

</style>