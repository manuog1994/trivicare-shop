<template>
    <client-only>
        <div class="terms-conditions-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <Breadcrumb pageTitle="Políticas de cookies" />
                <CookiesPolicyContent />
                <TheFooter />       
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            CookiesPolicyContent: () => import('@/components/CookiesPolicyContent'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                searchChildren: '',
            }
        },

        head() {
            return {
                titleTemplate: "Términos & Condiciones | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/cookies-policy'},
                // ],
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
        }
    };
</script>