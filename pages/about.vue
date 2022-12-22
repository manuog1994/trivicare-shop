<template>
    <div class="about-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <Breadcrumb pageTitle="about us" />
        <WelcomeMessage class="pt-100 pb-95" />
        <BannerStyleOne class="pb-70" />
        <AboutMission />
        <FunFact />
        <TeamMembers />
        <BrandLogoCarousel />
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
</template>

<script>
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'), 
            Breadcrumb: () => import('@/components/Breadcrumb'), 
            WelcomeMessage: () => import('@/components/WelcomeMessage'), 
            BannerStyleOne: () => import('@/components/banner/BannerStyleOne'), 
            AboutMission: () => import('@/components/AboutMission'), 
            FunFact: () => import('@/components/FunFact'), 
            TeamMembers: () => import('@/components/TeamMembers'), 
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'), 
            TheFooter: () => import('@/components/TheFooter'),
            VueIfBot,
            CookieConsent 
        },
        head() {
            return {
                title: "Sobre Nosotros",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Somos una empresa de cosmética natural y ecológica, con productos de alta calidad y con ingredientes naturales y ecológicos.'
                    }
                ],
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
        }
    };
</script>
