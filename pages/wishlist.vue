<template>
    <client-only>
        <div class="cart-page-wrapper">
            <NavBottom/>
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>                    
            <div id="post-nav" class="" @click="closeMenus">
                <Breadcrumb pageTitle="Lista de deseos" />
                <WishListContainer />
                <TheFooter />
            </div>    
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            WishListContainer: () => import("@/components/WishListContainer"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        data() {
            return {
                searchChildren: '',
            }
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
                titleTemplate: "Lista de Deseos | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/wishlist' }
                // ],
            }
        },
    };
</script>
