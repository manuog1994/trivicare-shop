<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <Auth />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        middleware: 'auth',

        pageTransition: 'slide-fade',

         components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            Auth: () => import("@/components/Auth"),
            TheFooter: () => import("@/components/TheFooter"),
        },



        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
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
                titleTemplate: "Iniciar sesión / Regístrate | TriviCare Natural Cosmetics",
                link: [
                    { rel: 'cannonical', href: 'https://trivicare.com/login'},
                ],
            }
        }
    };
</script>
