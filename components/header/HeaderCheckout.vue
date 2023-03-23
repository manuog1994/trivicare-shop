<template>
    <header class="sticky-top">
        <nav class="bg-trivi-red pt-2 pb-2 pt-md-4 pb-md-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6 d-flex align-items-center">
                        <img src="/img/TriviCare_byn Negativo.png" alt="logo" style="width: 30vw; max-width: 180px; height: auto;">
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <a href="https://api.whatsapp.com/send?phone=34613036942&text=Hola,%20quisiera%20informaci%C3%B3n..." class="btn btn-sm text-white me-4" style="background-color: #03C100;" target="_blank">
                            <i class="fa fa-whatsapp"></i>
                            WhatsApp
                        </a>
                        <nuxt-link to="/" class="btn btn-sm bg-trivi-blue text-white" :class="{'hidden': orderComplete ? false : true}">
                            <i class="fa fa-sign-out"></i>
                            Salir
                        </nuxt-link>
                        <button @click="cancelOrder" class="btn btn-sm bg-trivi-purple text-white" :class="{'hidden': orderComplete ? true : false}">
                            <i class="fa fa-times-circle"></i>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <TimerNav/>
    </header>

</template>

<style lang="scss" scoped>
.nav-timer{
    position: fixed;
    top: 0;
    left: 0;
    width: min-content;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

</style>

<script>
    import Swal from 'sweetalert2';
    export default {
        auth: false,

        data() {
            return {
                orderComplete: false,
            }
        },

        components: {
            TimerNav: () => import('@/components/checkout/TimerNav.vue'),
        },


        beforeMount() {
            this.$root.$on('orderComplete', (data) => {
                this.orderComplete = data;
            });
        },

        methods: {
            cancelOrder() {
                // confirmar cancelación
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: "¡No podrás revertir esta acción!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sí, cancelar pedido',
                    cancelButtonText: 'No, continuar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // cancelar pedido
                        this.$store.commit('SET_STEP2', false);
                        this.$store.commit('SET_STEP3', false);
                        this.$store.commit('SET_STEP4', false);
                        this.$store.commit('CLEAR_GUEST', {});
                        this.$store.commit('SET_PAYMENT_METHOD', '');
                        this.$store.commit('SET_SHIPPING_METHOD', '');
                        this.$store.commit('SET_PICKUP_ID', '');
                        this.$store.commit('SET_DURATION', 900);
                        this.$store.commit('SET_USER_PROFILE_ID', '');
                        this.$store.commit('SET_RESERVE', '');
                        this.$store.commit('CLEAR_CUPON', {});
                        this.$store.commit('SET_ORDER_ID', '');
                        this.$store.commit('SET_PAYMENT_METHOD', '');
                        this.$store.commit('SET_SHIPPING_METHOD', '');
                        this.$store.commit('SET_SHIPPING_AMOUNT', 0);
                        this.$store.commit('SET_CONDITIONS_STORE', false);
                        this.$store.commit('SET_NEWSLETTER_STORE', false);
                        this.$store.commit('SET_INVOICE_PAPER', false);
                        this.$store.commit('SET_NOTE', '');
                        window.onbeforeunload = null;
                        window.history.pushState(null, '', window.location.href);
                        this.$router.push('/');
                    }
                })
            }
        }

    };
</script>
