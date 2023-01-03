<template>
    <client-only>
        <div class="home-cosmetics">
            <Nav />
            <div class="login-register-area pt-5 pb-100">
                <div class="container">
                    <div class="login-register-tab-list nav">
                        <button @click="comA('All')" :class="{ active: isActive === 'All' }" title="Ver todos los productos">
                            Todos los productos
                        </button>
                        <button @click="comA('Create')" :class="{ active: isActive === 'Create' }" title="Crear producto">
                            Crear producto
                        </button>
                        <button @click="comA('Orders')" :class="{ active: isActive === 'Orders' }" title="Pedidos">
                            Pedidos
                        </button>
                        <button @click="comA('OrdersHistory')" :class="{ active: isActive === 'OrdersHistory' }" title="Historial de pedidos">
                            Historial de Pedidos
                        </button>
                        <button @click="comA('Coupons')" :class="{ active: isActive === 'Coupons' }" title="Cupones">
                            Cupones
                        </button>
                    </div>
                    <div class="row">
                        <div class="">
                            <component :is="isActive" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    auth: true,

    components: {
        TheHeader: () => import("@/components/TheHeader"),
        TheFooter: () => import("@/components/TheFooter"),
        Nav: () => import("@/components/crud/Nav"),
        All: () => import("@/components/crud/All"),
        Create: () => import("@/components/crud/Create"),
        Orders: () => import("@/components/crud/Orders"),
        OrdersHistory: () => import("@/components/crud/OrdersHistory"),
        Coupons: () => import("@/components/crud/Coupons"),
     },

    data() {
        return {
            isActive: "All",
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
            }, 2000);
        });
    },

    methods: {
        comA(item) {
            this.isActive = item;
        },

        head() {
            return {
                title: "Panel de Control",
            }
        }
    }
}
</script>

<style>

</style>