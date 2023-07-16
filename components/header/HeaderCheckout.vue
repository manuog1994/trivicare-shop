<template>
    <header class="sticky-top">
        <nav class="bg-light pt-2 pb-2 pt-md-4 pb-md-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6 d-flex align-items-center">
                        <n-link to="/">
                            <nuxt-img loading="lazy" provider="customProvider" src="nuxt/TriviCare_byn Positivo.svg" width="200" alt="logo"/>
                        </n-link>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <a href="https://api.whatsapp.com/send?phone=+34613036942&text=Hola,%20estoy%20en%20la%20web%20y%20quisiera%20m%C3%A1s%20informacion%20sobre..." class="whatsapp" target="_blank" title="Enlace a conversación de WhatsApp">
                            <i class="fa fa-whatsapp whatsapp-icon"></i>
                        </a>
                        <nuxt-link to="/" class="out-link" :class="{'hidden': orderComplete ? false : true}" title="Salir al menú principal">
                            <i class="fa fa-sign-out out-icon"></i>
                        </nuxt-link>
                        <a @click="cancelOrder" class="cancel" :class="{'hidden': orderComplete ? true : false}" title="Cancelar pedido">
                            <i class="fa fa-times-circle cancel-icon"></i>
                        </a>
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

.whatsapp {
  width:50px;
  height:50px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  display: block;
  text-align: center;
  font-size:30px;
  padding-top: 1px;
}

.cancel {
  width:50px;
  height:50px;
  background-color: #DD88B8;
  color:#FFF;
  border-radius:50px;
  text-align: center;
  font-size:30px;
  margin-left: 1rem;
}

.out-link {
  width:50px;
  height:50px;
  background-color: #2AB5B2;
  color:#FFF;
  border-radius:50px;
  text-align: center;
  font-size:30px;
  margin-left: 1rem;
}

.whatsapp-icon {
  margin-top:9px;
}
.cancel-icon {
  margin-top: 10px;
}
.out-icon {
  margin-top: 11px;
  margin-left: 5px;
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
                        this.$router.push({ path: '/' });
                    }
                })
            }
        }

    };
</script>
