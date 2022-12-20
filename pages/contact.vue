<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="contacto" />
        <ContactInfo />
        <Location />
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
                    <button class="btn border-1" title="Aceptar">Aceptar</button>
                </template>
            </CookieConsent>
        </VueIfBot>
    </div>
</template>

<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        auth: false,

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            ContactInfo: () => import("@/components/ContactInfo"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
            Location: () => import("@/components/Location"),
            CookieConsent,
            VueIfBot
        },
        head() {
            return {
                title: "Contacto",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Puede contactar con nosotros a través de este formulario o enviándonos un correo electrónico a info@trivicare.com, te atenderemos lo antes posible.'
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
