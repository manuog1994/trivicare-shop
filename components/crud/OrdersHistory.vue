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
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-if="orders.length > 0">
                        <tr v-for="order in orders" :key="order.id">
                            <th scope="row">{{ order.id }}</th>
                            <td>
                                <n-link :to="`/orders-profiles/${order.user_id}`">{{ getName(order) }}</n-link>
                            </td>
                            <td v-if="order.paid == 1">Pendiente</td>
                            <td v-if="order.paid == 2">En Proceso</td>
                            <td v-if="order.paid == 3">Pagado</td>
                            <td v-if="order.paid == 4">Rechazado</td>
                            <td v-if="order.status == 4">Entregado</td>
                            <td v-else>Cancelado</td>
                            <td>{{ order.order_date }}</td>
                            <td>
                                <n-link :to="`/orders/${order.id}`" class="btn btn-primary">
                                    <i class="pe-7s-look"></i>
                                </n-link>
                                <a v-if="order.paid == 3 && order.invoice != null" @click.prevent="getUrl(order)" class="btn btn-warning">
                                    <i class="pe-7s-download"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay pedidos pendientes.</td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center mt-5">
                    <nav aria-label="...">
                        <ul class="pagination-custom">
                            <client-only>
                                <li v-for="pagination_link in pagination.links" :key=" 'pagination_link-' + pagination_link.label" class="page-link-custom"
                                :class="{
                                    'disabled' : pagination_link.url == null,
                                    'active' : pagination_link.active == true
                                }">
                                    <a class="page-link" v-html="pagination_link.label" style="cursor: pointer;" @click.prevent="changePage(pagination_link.url)"></a>
                                </li>
                            </client-only>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: true,

    data() {
        return {
            orders: [],
            users: [],
            order: {},
            user: {},
            pagination: {},
        }
    },

    mounted() {
        this.getOrders();
        this.getUserName();
    },

    computed: {
        page() {
            let page = this.$route.query.page ?? 1;

            if(page > this.pagination.last_page){
                this.$router.replace({
                    query: {
                        page: this.pagination.last_page
                    }
                })
                this.$router.push();
                return this.pagination.last_page;
            }

            return page;
        },
    },

    watch: {
        page() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 500);
            });
            setTimeout(() => {
                this.getOrders();
            }, 500);
        },
    },


    methods: {
        async getOrders() {
            const response = await this.$axios.get('/api/orders?perPage=10&sort=-id&page=' + this.page + '&history[status]=' );
            this.orders = response.data.data;
            const paginations = response.data;
            this.pagination = {
                    links: paginations['meta'].links,
                    current_page: paginations['meta'].current_page,
                    last_page: paginations['meta'].last_page,
            }
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


        changePage(url) {
            this.$router.replace({
                query: {
                    page : url.split('page=')[1]
                }
            });
        },

        async getUrl(order){
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