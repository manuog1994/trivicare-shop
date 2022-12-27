<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
        <div id="post-nav" class="" @click="closeMenus">
            <NavBottom/>
            <ForgotPasswordContainer />
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
  </template>
  
<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
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
            CookieConsent,
            VueIfBot,
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
                title: 'Recuperar contraseña',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Recuperar contraseña'
                    }
                ]
            }
        },
  
    }
</script>
  
