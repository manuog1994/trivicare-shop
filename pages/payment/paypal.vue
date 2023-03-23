<template>
    <div>
        <client-only>
            <HeaderCheckout />
            <div class="container pt-100 pb-100">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-center mt-2">
                                        <img src="/payment/paypal.svg" alt="logo de paypal" width="200">
                                    </div>
                                    <div class="col-12 text-center">
                                        <p>Pulse el botón que sea de su preferencia para el modo de pago y siga las indicaciones que le muestra Paypal, cuando el pedido sea confirmado será redirigido con la confirmación o cancelación de su pedido.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-center mt-3">
                                        <Paypal :load="initPaypal"/>
                                    </div>
                                </div>
                                <SmallLoading v-if="loading == true"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TheFooter />
        </client-only>
    </div>
</template>

<script>
export default {
    auth:false,
    middleware: 'paypal',
    
    data() {
        return {
            paypal: false,
            initPaypal: false,
            loading: false,
        }
    },

    components: {
        HeaderCheckout: () => import('@/components/header/HeaderCheckout.vue'),
        TheFooter: () => import('@/components/TheFooter.vue'),
        Paypal: () => import('@/components/checkout/Paypal.vue'),
        SmallLoading: () => import('@/components/loaders/SmallLoading.vue'),
    },

    computed: {
        paypalPage() {
            return this.$store.state.paypalPage;
        },
    },

    beforeMount() {
        if (this.paypalPage == false) {
            this.$router.push('/checkout');
        } else {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.initPaypal = true;
            }, 5000);
        }

        // eliminar bloqueo de boton recargar y boton atras
        window.onbeforeunload = null;
        window.history.pushState(null, '', window.location.href);
    },

    
    head() {
        return {
            titleTemplate: "Pago con Paypal | TriviCare Natural Cosmetics",
            script: [
                { 
                    src: 'https://www.paypal.com/sdk/js?client-id=' + process.env.PAYPAL_CLIENT_ID + '&currency=EUR&disable-funding=sofort,card&enable-funding=paylater&locale=es_ES',
                    async: true, 
                }
            ]
        }
    },
}
</script>

<style>

</style>