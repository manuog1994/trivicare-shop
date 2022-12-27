<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity" />
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
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
        TheFooter: () => import('@/components/TheFooter'),
    },

    data() {
        return {
            searchChildren: '',
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.$nuxt.$loading.finish();
            }, 2000);
        });
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

}
</script>

<style scoped>

.old {
    text-decoration: line-through;
    color: #999;
}

</style>