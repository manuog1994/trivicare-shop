<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Autentificación" />
        
        <div class="login-register-area pt-100 pb-100">
            <div class="container">
                <div class="login-register-tab-list nav">
                    <button @click="comA('Login')" :class="{ active: isActive === 'Login' }" >
                        Iniciar Sessión
                    </button>
                    <button @click="comA('Register')" :class="{ active: isActive === 'Register' }" >
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
    </div>
</template>

<script>
    import HeaderWithTopbar from "@/components/HeaderWithTopbar";
    import Login from "@/components/Login";
    import Register from "@/components/Register";
    import Breadcrumb from "@/components/Breadcrumb";
    import TheFooter from "@/components/TheFooter";
    export default {
         components: {
            HeaderWithTopbar,
            Login,
            Register,
            Breadcrumb,
            TheFooter
        },
        transition: {
            name: 'fade',
            mode: 'out-in'
        },

        data() {
            return {
                isActive: "Login",
            };
        },

        mounted() {
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
