<template>
    <client-only>
        <div>
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <NavBottom/>
            <div id="post-nav" class="" @click="closeMenus">
                <div class="container-fluid">
                    <div class="p-5 text-center">
                        <div class="d-flex justify-content-center">
                            <img src="/payment/osotriste.webp" alt="success.webp" width="250">
                        </div>
                        <h1>Se ha cancelado su pedido.</h1>
                        <p class=" fs-5">Sentimos que hayas decidido cancelar tu pedido, lo bueno es que siempre podrás hacer uno nuevo 😌 </p>
                    </div>
                </div>
                <TheFooter/>
            </div>
        </div>
    </client-only>
</template>

<script>

export default {
    auth: false,

    data() {
        return {
            loading: false,
            searchChildren: '',
            closeMenu: false,
        }
    },

    components: {
        HeaderWithTopbar: () => import('@/components/HeaderWithTopbar.vue'),
        TheHeader: () => import('@/components/TheHeader.vue'),
        NavBottom: () => import('@/components/NavBottom.vue'),
        TheFooter: () => import('@/components/TheFooter.vue'),
    },

    mounted() {
        this.$store.commit('SET_STEP2', false);
        this.$store.commit('SET_STEP3', false);
        this.$store.commit('SET_STEP4', false);
        this.$store.commit('CLEAR_GUEST', {});
        this.$store.commit('SET_PAYMENT_METHOD', '');
        this.$store.commit('SET_SHIPPING_METHOD', '');
        this.$store.commit('SET_PICKUP_ID', '');
        this.$store.commit('SET_DURATION', 0);
        this.$store.commit('SET_USER_PROFILE_ID', '');
        this.$store.commit('SET_RESERVE', '');
        this.$store.commit('CLEAR_CUPON', {});
        this.$store.commit('SET_ORDER_ID', '');
        this.$store.commit('SET_PAYMENT_METHOD', '');
        this.$store.commit('SET_SHIPPING_METHOD', '');
        this.$store.commit('SET_SHIPPING_AMOUNT', 0);
        this.$store.commit('SET_CONDITIONS_STORE', false);
        this.$store.commit('SET_NEWSLETTER_STORE', false);
        this.$store.commit('SET_INVOICE_PAPER', false);
        this.$store.commit('SET_NOTE', '');
    },

    methods: {
        closeMenus() {
            this.searchOpacity(false);
            this.$root.$emit('closeMenu', this.closeMenu);
        },

        searchOpacity(searchFather) {
            if (searchFather == true) {
                document.getElementById("post-nav").classList.add("search-screen");
            } else {
                document.getElementById("post-nav").classList.remove("search-screen");
            }
        }

    },

    head() {
        return {
            titleTemplate: 'Su pedido ha sido cancelado | TriviCare Natural Cosmetics',
        }
    }

}
</script>

<style>

</style>