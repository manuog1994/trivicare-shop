<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Autentificación" />
        
        <div class="login-register-area pt-100 pb-100">
            <div class="container">
                <div class="login-register-tab-list nav">
                    <button @click="comA('Login')" :class="{ active: isActive === 'Login' }" title="Iniciar sesión">
                        Iniciar Sessión
                    </button>
                    <button @click="comA('Register')" :class="{ active: isActive === 'Register' }" title="Registrarte">
                        Regístrate
                    </button>
                </div>
                <div class="row">
                    <div class="col-lg-7 col-12 ms-auto me-auto">
                        <component :is="isActive" />
                    </div>
                </div>
            </div>
        </div>
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
    import HeaderWithTopbar from "@/components/HeaderWithTopbar";
    import Login from "@/components/Login";
    import Register from "@/components/Register";
    import Breadcrumb from "@/components/Breadcrumb";
    import TheFooter from "@/components/TheFooter";
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
         components: {
            HeaderWithTopbar,
            Login,
            Register,
            Breadcrumb,
            TheFooter,
            CookieConsent,
            VueIfBot
        },

        data() {
            return {
                isActive: "Login",
            };
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

        methods: {
            comA(item) {
                this.isActive = item;
            }
        },
        head() {
            return {
                title: "Iniciar Sessión / Regístrate"
            }
        }
    };
</script>
