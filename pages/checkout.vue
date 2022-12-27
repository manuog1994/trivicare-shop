<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <CheckoutContainer />
                <TheFooter />
                <VueIfBot>
                    <CookieConsent>
                        <template slot="message">
                            <span>
                                Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra 
                                <a class="text-info" href="/privacy-policy">Política de Cookies</a>.
                            </span>
                        </template>
                        <template slot="button">
                            <button class="btn border-1">Aceptar</button>
                        </template>
                    </CookieConsent>
                </VueIfBot> 
            </div>
        </div>
    </client-only>
</template>

<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        middleware: 'auth',

        pageTransition: 'slide-fade',


        data() {
            return {
                searchChildren: '',
            }
        },
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            CheckoutContainer: () => import("@/components/CheckoutContainer"),
            TheFooter: () => import("@/components/TheFooter"),
            CookieConsent,
            VueIfBot
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 1000);
            });
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
            this.$auth.fetchUser();
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
                title: "Resumen de tu Pedido",
            }
        },
    };
</script>


