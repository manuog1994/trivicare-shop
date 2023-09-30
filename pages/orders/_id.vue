<template>
    <client-only>
        <div class="shop-page-wrapper">
            <NavBottom />
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity" />
            <div id="post-nav" class="" @click="closeMenus">
                <Breadcrumb pageTitle="Mis Pedidos" />
                <OrdersCom />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>

export default {
    auth: true,

    components: {
        TheHeader: () => import('@/components/TheHeader'),
        HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
        OrdersCom: () => import('@/components/OrdersCom'),
        NavBottom: () => import('@/components/NavBottom'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        TheFooter: () => import('@/components/TheFooter'),
    },

    data() {
        return {
            searchChildren: '',
            unauthorized: '',
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.$nuxt.$loading.finish();
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
        closeMenus() {
            this.searchOpacity(false);
            this.$root.$emit('closeMenu', this.closeMenu);
        },

        searchOpacity(searchFather) {
            if (searchFather == true) {
                document.getElementById('post-nav').classList.add('search-screen');
            } else {
                document.getElementById('post-nav').classList.remove('search-screen');
            }
        },
    },

    head() {
        return {
            titleTemplate: 'Mis Pedidos | TriviCare Natural Cosmetics',
        };
    },

}
</script>

<style scoped>

.old {
    text-decoration: line-through;
    color: #999;
}

</style>