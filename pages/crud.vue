<template>
    <div class="home-cosmetics" v-if="role == 'admin'">
        <Nav />
        <div class="login-register-area pt-5 pb-100">
            <div class="container">
                <div class="login-register-tab-list nav">
                    <button @click="comA('All')" :class="{ active: isActive === 'All' }" >
                        Todos los productos
                    </button>
                    <button @click="comA('Create')" :class="{ active: isActive === 'Create' }" >
                        Crear producto
                    </button>
                    <button @click="comA('Orders')" :class="{ active: isActive === 'Orders' }" >
                        Pedidos
                    </button>
                    <button @click="comA('OrdersHistory')" :class="{ active: isActive === 'OrdersHistory' }" >
                        Historial de Pedidos
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
     },

    data() {
        return {
            role: '',
            isActive: "All",
        }
    },

    mounted() {
        this.getRoles();
    },

    methods: {
        getRoles() {
            const roles = this.$auth.user.roles;

            roles.map((role) => {
                this.role = role.name;
            })

            if (this.role != 'admin') {
                this.$router.push('/error');
            }
        },

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