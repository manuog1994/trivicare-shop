<template>
    <client-only>
        <div>
            <Loading v-if="loading" />
            <div v-if="paymentIntent != null" class="container-fluid d-flex justify-content-center align-items-center" style="height:100vh;">
                <div v-if="loading == false" class="card p-5 text-center shadow">
                    <div class="d-flex justify-content-center mb-5">
                        <img src="/payment/success.webp" alt="success.webp" width="60">
                    </div>
                    <h1 v-if="paymentIntent.length == 23">Hemos recibido su pedido. Gracias por confiar en nosotros.</h1>
                    <h1 v-else>Ha realizado su pago con éxito, Gracias por su pedido</h1>
                    <p class="mt-2">En unos minutos recibirá la factura y confirmación de su pedido, en el correo electrónico indicado en su cuenta.</p>
                    <p>Revise su bandeja de entrada y si no la ve dirijase a su carpeta de Spam.</p>
                    <p v-if="counter">La página se redireccionará en {{ countdownNumbers }} segundo(s), si no es así <n-link class="text-primary text-decoration-underline" to="/">pulse aquí</n-link>.</p>
                </div>
            </div>
            <div v-if="error" class="container-fluid d-flex justify-content-center align-items-center" style="height:100vh;">
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
    middleware: 'token',
    auth: false,

    async asyncData ({ req }) {
        if(!req) {
            const visitorIP = 'No IP'
            return { visitorIP }
        } else {
            const visitorIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
            return { visitorIP }
        }
    },

    components: {
        Loading: () => import('~/components/Loading.vue'),
    },

    beforeCreate() {
        this.loading = true;
    },

    data() {
        return {
            paymentIntent: null,
            counter: false,
            countdownNumbers: '',
            loading: true,
            error: false,
        }
    },

    beforeMount() {
        const url = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
        if (url != null) {
            this.paymentIntent = url;
        }
    },

    async mounted() {
        if(this.paymentIntent != null) {
            this.orderPaid();
        }

        await this.$axios.post('/api/visit', {
            ip_address: 'No IP',
            page_visited: 'success',
        })
    },

    methods: {
        async orderPaid () {
            const token_id = this.paymentIntent;
            await this.$axios.post('/api/order-paid/' + token_id)
                .then((res) => {
                    console.log(res.data);
                    this.loading = false;
                    this.countdown(10);
                    this.$store.commit('CLEAR_GUEST');
                    this.$store.commit('CLEAR_CART');
                    this.$store.commit('CLEAR_CUPON');
                }).catch((err) => {
                    console.log(err.response.data)
                    this.loading = false;
                    this.countdown(20);
                    this.paymentIntent = null;
                    this.error = ('Ha ocurrido un error, por favor intente nuevamente más tarde.');
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })
                });
        },

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
                titleTemplate: 'Estamos procesando su pago... | TriviCare Natural Cosmetics',
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