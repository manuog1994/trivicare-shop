<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderCheckout containerClass="container-fluid" />
            <CheckoutContainer />
            <TheFooter />
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,

        components: {
            CheckoutContainer: () => import("@/components/CheckoutContainer"),
            TheFooter: () => import("@/components/TheFooter"),
            HeaderCheckout: () => import("@/components/header/HeaderCheckout"),
        },

        async mounted() {
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

            if(this.$axios.onError(error => {
                const code = error.response.status;
                if (code == 401) {
                    this.$auth.logout();
                }
            }));

        },

        head() {
            return {
                titleTemplate: "Resumen de tu Pedido | TriviCare Natural Cosmetics",
                script: [
                    { 
                        src: 'https://www.paypal.com/sdk/js?client-id=' + process.env.PAYPAL_CLIENT_ID + '&currency=EUR&disable-funding=sofort,card&enable-funding=paylater&locale=es_ES',
                        async: true, 
                    }
                ]
            }
        },
    };
</script>


