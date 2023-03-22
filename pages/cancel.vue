<template>
    <client-only>
        <div>
            <div class="container-fluid d-flex justify-content-center align-items-center" style="height:100vh;">
                <div class="card p-5 text-center shadow">
                    <div class="d-flex justify-content-center mb-5">
                        <img src="/payment/error.webp" alt="success.webp" width="60">
                    </div>
                    <h1>Ha ocurrido un problema al procesar su pedido.</h1>
                    <p class="mt-2">Si has recibido el correo de confirmación, puede ignorar esta pantalla. De lo contrario es posible que se le haya hecho el cobro, pero no se le haya mandado la confirmación, si es así un técnico se pondrá en contacto usted en la mayor brevedad posible, ya que este problema manda una incidencia automáticamente.</p>
                    <p v-if="counter">La página se redireccionará en {{ countdownNumbers }} segundo(s), si no es así <n-link class="text-primary text-decoration-underline" to="/">pulse aquí</n-link>.</p>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>

export default {
    auth: false,

    data() {
        return {
            counter: false,
            countdownNumbers: '',
        }
    },

    mounted() {
        this.countdown(10);
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
    },

    methods: {
        // countdown of 10 seconds to redirect to my-orders
        countdown(counter) {
            const interval = setInterval(() => {
                this.counter = true;
                this.countdownNumbers = counter;
                counter--;
                if (counter === 0) {
                    clearInterval(interval);
                    this.$router.push('/');
                }
            }, 1000);
        },

        head() {
            return {
                titleTemplate: 'Su pedido ha sido cancelado | TriviCare Natural Cosmetics',
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/success' }
                // ],
            }
        }

    },
}
</script>

<style>

</style>