<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
        <div id="post-nav" class="" @click="closeMenus">
            <NavBottom/>
            <ForgotPasswordContainer />
            <TheFooter />       
        </div>
    </div>
  </template>
  
<script>
    import ForgotPasswordContainer from '../components/ForgotPasswordContainer.vue'
    export default {
        auth: false,

        data() {
            return {
                searchChildren: '',
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 500)
            })
        },

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar.vue"),
            TheHeader: () => import("@/components/TheHeader.vue"),
            NavBottom: () => import("@/components/NavBottom.vue"),
            TheFooter: () => import("@/components/TheFooter.vue"),
            ForgotPasswordContainer
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
                titleTemplate: 'Recuperar contraseña | TriviCare Natural Cosmetics',
                link: [
                    { rel: 'cannonical', href: 'https://trivicare.com/forgot-password' }
                ],
            }
        },
  
    }
</script>
  
