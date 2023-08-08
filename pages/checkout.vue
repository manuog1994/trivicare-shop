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
            if (this.$store.state.reserve != this.$route.query.reserve) {
                this.$router.push('/');
            }

            if (this.$store.state.step2 != true && this.$route.query.step != 2) {
                this.$router.push({ query: { reserve: this.$store.state.reserve, step: 1 } });
            }

            if (this.$store.state.step3 != true && this.$route.query.step != 3) {
                this.$router.push({ query: { reserve: this.$store.state.reserve, step: 1 } });
            }

            if (this.$store.state.step4 != true && this.$route.query.step != 4) {
                this.$router.push({ query: { reserve: this.$store.state.reserve, step: 1 } });
            }

            window.onbeforeunload = function() {
                return "¿Estás seguro de que quieres salir?";
            }
            
            // evitar que se use el botón de atrás
            window.location.hash = 'no-back-button';
            window.location.hash = 'Again-No-back-button' //chrome
            window.onhashchange = function () { window.location.hash = 'no-back-button'; }

            // mostrar mensaje de confirmación al salir de la página

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


