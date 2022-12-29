<template>
    <client-only>
        <div class="home-cosmetics">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <HeroSliderSix />
                <Intro />
                <ServicePolicyFour />
                <ProductWrapperCosmetics />
                <BrandLogoCarousel />
                <Info />
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
                            <button class="btn border-1" title="Aceptar">Aceptar</button>
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
    import { useTestStore } from '../stores/TestStore';

    export default {
        auth: false,

        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            HeroSliderSix: () => import("@/components/hero/HeroSliderSix"),
            ProductWrapperCosmetics: () => import("@/components/product/ProductWrapperCosmetics"),
            BrandLogoCarousel: () => import("@/components/BrandLogoCarousel"),
            Info: () => import("@/components/Info"),
            ServicePolicyFour: () => import("@/components/policy/ServicePolicyFour"),
            TheFooter: () => import("@/components/TheFooter"),
            Intro: () => import("@/components/Intro"),
            CookieConsent,
            VueIfBot,

        },

        data() {
            return {
                show: false,
                test: '',
                searchChildren: '',
                closeMenu: false,
            }
        },

        mounted() {
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
                title: 'Cuidamos de tú piel | Cosmética natural y ecológica',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'La cosmética natural y ecológica es la mejor opción para cuidar de tu piel. Descubre una nueva forma de belleza natural con nuestra marca de cosméticos ecológicos. Nuestra tienda online ofrece una selección única de productos naturales y orgánicos para tu cuidado diario de la piel, el cabello y la salud. Encuentra los mejores productos ecológicos a precios accesibles para llevar tu cuidado de la belleza al siguiente nivel.'
                    }
                ],            
            }
        },
        
    };
</script>

<style>
.background-color-banner {
    background-color: #ffb1b1;
}


.search-screen {
    opacity: .5 !important;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    display: flex;
    padding: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-top: 1px solid rgb(69, 69, 69);
    color: rgb(0, 0, 0);
}
.cookie-consent button {
    border: 1px solid rgb(57, 57, 57);
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
}
</style>


