<template>
    <client-only>
        <div class="home-cosmetics">
            <Nav />
            <div class="login-register-area pt-5 pb-100">
                <div class="container">
                    <div class="d-flex justify-content-center mb-5">
                        <select class="form-select" @change="openOption">
                            <option value="All" @click="comA('All')" :class="{ active: isActive === 'All' }">Todos los productos</option>
                            <option value="Create" @click="comA('Create')" :class="{ active: isActive === 'Create' }">Crear producto</option>
                            <option value="Orders" @click="comA('Orders')" :class="{ active: isActive === 'Orders' }">Pedidos</option>
                            <option value="OrdersHistory" @click="comA('OrdersHistory')" :class="{ active: isActive === 'OrdersHistory' }">Historial de pedidos</option>
                            <option value="Coupons" @click="comA('Coupons')" :class="{ active: isActive === 'Coupons' }">Cupones</option>
                            <option value="NewInvoice" @click="comA('NewInvoice')" :class="{ active: isActive === 'NewInvoice' }">Nueva Factura</option>
                            <option value="FormReview" @click="comA('FormReview')" :class="{ active: isActive === 'FormReview' }">Formulario de valoración</option>
                        </select>
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
        NewInvoice: () => import("@/components/crud/NewInvoice"),
        FormReview: () => import("@/components/crud/FormReview"), 
     },

    data() {
        return {
            isActive: "All",
            unauthorized: '',
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
            }, 2000);
        });

        if(this.$axios.onError(error => {
            const code = error.response.status;
            if (code === 401) {
                this.unauthorized = true;
            }
        }));
    },

    watch: {
        unauthorized() {
            if (this.unauthorized == true) {
                this.$auth.logout();
            }
        }
    },

    methods: {
        comA(item) {
            this.isActive = item;
        },

        openOption(e) {
            let option = e.target.value;
            this.comA(option);
        },

    },

    head() {
        return {
            title: "Panel de Control",
        }
    }
}
</script>

<style>

</style>