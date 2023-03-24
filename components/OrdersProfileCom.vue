<template>
    <div class="container login-register-area pt-100 pb-100">
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
                    <tbody v-if="orders?.length > 0">
                        <tr v-for="order in orders" :key="order.id">
                            <th scope="row">{{ order.id }}</th>
                            <td>{{ getName(order) }}</td>
                            <td v-if="order.paid == 'PENDIENTE'">Pendiente</td>
                            <td v-if="order.paid == 'PROCESANDO'">Procesando</td>
                            <td v-if="order.paid == 'PAGADO'">Pagado</td>
                            <td v-if="order.paid == 'RECHAZADO'">Rechazado</td>
                            <td v-if="order.paid == 'CONTRAREEMBOLSO'">Contra reembolso</td>
                            <td v-if="order.paid == 'TRANSFERENCIA'">Transferencia</td>
                            <td>{{ getState(order) }}</td>
                            <td>{{ order.order_date }}</td>
                            <td>
                                <n-link :to="`/orders/${order.id}`" class="btn btn-primary">
                                    <i class="pe-7s-look"></i>
                                </n-link>
                                <a v-if="order.paid == 'PAGADO' || order.paid == 'CONTRAREEMBOLSO' || order.paid == 'TRANSFERENCIA' && order.invoice != null" @click.prevent="getUrl(order)" class="btn btn-warning">
                                    <i class="pe-7s-download"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No tiene pedidos.</td>
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
    data() {
        return {
            orders: '',
            pagination: {},
            id: this.$route.params.id,
        }
    },

    head() {
        return {
            title: 'Mis Pedidos',
        }
    },

    mounted() {
        this.getOrder();
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
                this.getOrder();
            }, 500);
        },
    },

    methods: {
        async getOrder() {
            await this.$axios.get('/api/orders?perPage=10&page=' + this.page + '&sort=-id&filter[user_id]=' + this.id)
                .then(response => {
                    this.orders = response.data.data
                    const paginations = response.data
                    this.pagination = {
                        links: paginations['meta'].links,
                        current_page: paginations['meta'].current_page,
                        last_page: paginations['meta'].last_page,
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },

        changePage(url) {
            this.$router.replace({
                query: {
                    page : url.split('page=')[1]
                }
            });
        },

        getState(order) {
            if(order.status == 1) {
                return 'Recibido';
            } else if(order.status == 2) {
                return 'Preparando';
            } else if(order.status == 3) {
                return 'Enviado'
            } else if(order.status == 4) {
                return 'Entregado'
            } else if(order.status == 5) {
                return 'Cancelado'
            }
        },

        getName(order) {
            let profiles = order.user.user_profile;
            return profiles.filter((profile) => {
                return profile
            }).map((profile) => {
                return profile.name + ' ' + profile.lastname
            }).toString();
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