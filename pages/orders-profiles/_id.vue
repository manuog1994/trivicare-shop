<template>
    <client-only>
        <div class="shop-page-wrapper" v-if="role == 'admin'">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <OrdersProfileCom />
                <TheFooter />
            </div>
        </div>
    </client-only>

</template>


<script>
    export default {
        auth: true,

        data() {
            return {
                searchChildren: '',
                role: '',
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
            this.getRoles();

            if(this.$axios.onError(error => {
                const code = error.response.status;
                if (code === 401) {
                    this.unauthorized = true;
                }
            }));
        },

        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'),
            OrdersProfileCom: () => import('@/components/OrdersProfileCom'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        watch: {
            unauthorized() {
                if (this.unauthorized == true) {
                    this.$auth.logout();
                }
            }
        },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },

            getRoles() {
                const roles = this.$auth.user.roles;

                roles.map((role) => {
                    this.role = role.name;
                })

                if (this.role != 'admin') {
                    this.$router.push('/error');
                }
            },

            searchOpacity(searchFather) {
                if (searchFather == true) {
                    this.searchChildren = true;
                } else {
                    this.searchChildren = false;
                }
            },

        }



    }
</script>