<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado Pago</th>
                        <th scope="col">Estado Pedido</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Factura</th>
                        </tr>
                    </thead>
                    <tbody v-if="orders.length > 0">
                        <tr v-for="order in orders" :key="order.id">
                            <th scope="row">{{ order.id }}</th>
                            <td>{{ getName(order) }}</td>
                            <td v-if="order.paid == 1">Pendiente</td>
                            <td v-if="order.paid == 2">En Proceso</td>
                            <td v-if="order.paid == 3">Pagado</td>
                            <td>
                                <select class="form-select" :value="order.status" @change="updateStatus" @click="loadOrder(order)">
                                    <option value="1">Pendiente</option>
                                    <option value="2">En Proceso</option>
                                    <option value="3">Enviado</option>
                                    <option value="4">Entregado</option>
                                </select>
                            </td>
                            <td>{{ order.order_date }}</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay pedidos pendientes.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
            users: [],
            order: {},
            user: {},
        }
    },

    mounted() {
        this.getOrders();
        this.getUserName();
    },


    methods: {
        async getOrders() {
            const response = await this.$axios.get('/api/orders');

            
            const data = response.data.data;

            data.filter((order) => {
                if(order.status == 1 || order.status == 2 || order.status == 3) {
                    this.orders.push(order);
                }
            });
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
                return user.name + ' ' + user.lastname;
            }).toString();
        },

        loadOrder(order) {
            this.order = order;
        },

        async updateStatus(e) {
            const status = e.target.value;
            await this.$axios.put('/api/orders/status/' + this.order.id, {
                status: status
            }).then(() => this.$notify({ title: 'El estado del pedido ha sido actualizado'}));
        }
    },
}
</script>

<style>

</style>