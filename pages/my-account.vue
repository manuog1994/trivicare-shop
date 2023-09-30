<template>
    <client-only>
        <div class="shop-page-wrapper">
            <NavBottom/>
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <Breadcrumb pageTitle="Mi perfil" />
                <MyAccountContainer/>
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>


<script>
    import Swal from 'sweetalert2'
    export default {
        auth: true,

        data() {
            return {
                disabled: true,
                checked: false,
                searchChildren: '',
                unauthorized: '',
             }
        },

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            MyAccountContainer: () => import("@/components/MyAccountContainer"),
            TheFooter: () => import("@/components/TheFooter"),
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
                titleTemplate: "Mi Cuenta | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/my-account' }
                // ],
            }
        },

    }
</script>