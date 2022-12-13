<template>
    <client-only>
        <div class="home-cosmetics">
            <TheHeader />
            <HeroSliderSix />
            <transition name="intro" mode="out-in"><Intro /></transition>
            <ServicePolicyFour />
            <!-- <TestimonialOne /> -->
            <ProductWrapperCosmetics />
            <!-- <BannerStyleFour /> -->
            <!-- <InstagramPostWrapper /> -->
            <!-- <BlogWrapper /> -->

            
            <TheFooter />
            <VueIfBot>
                <CookieConsent>
                    <template slot="message">
                        <span>
                            Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra 
                            <a class="text-info" href="/politica-de-cookies">Política de Cookies</a>.
                        </span>
                    </template>
                    <template slot="button">
                        <button class="btn border-1">Aceptar</button>
                    </template>
                </CookieConsent>
            </VueIfBot>
        </div>
    </client-only>
</template>

<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'


    export default {
        auth: false,
        transition: {
            name: 'fade',
            mode: 'out-in'
        },

        components: {
            TheHeader: () => import("@/components/TheHeader"),
            HeroSliderSix: () => import("@/components/hero/HeroSliderSix"),
            ProductWrapperCosmetics: () => import("@/components/product/ProductWrapperCosmetics"),
            ServicePolicyFour: () => import("@/components/policy/ServicePolicyFour"),
            // TestimonialOne: () => import("@/components/TestimonialOne"),
            // InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
            // BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import("@/components/TheFooter"),
            Intro: () => import("@/components/Intro"),
            CookieConsent,
            VueIfBot
        },

        data() {
            return {
                show: false,
            }
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
            this.$auth.fetchUser();
        },

        head() {
            return {
                title: 'Tienda de cosmética natural y ecológica | Cosmética natural y ecológica',
            }
        },
    };
</script>

<style>
.intro-enter-active, .intro-leave-active {
    transition: opacity 5s ease;
    transition-delay: 3s;
}
.intro-enter, .intro-leave-active {
    opacity: 0
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


