<template>
    <client-only>
        <div class="container-fluid d-flex justify-content-center align-items-center bg-light" style="height:100vh;">
            <div v-if="paymentIntent != null" class="card p-5 text-center shadow">
                <div class="d-flex justify-content-center mb-5">
                    <img src="/payment/success.webp" alt="success.webp" width="60">
                </div>
                <h1 v-if="paymentIntent.length == 23">Hemos recibido su pedido. Gracias por confiar en nosotros.</h1>
                <h1 v-else>Ha realizado su pago con éxito, Gracias por su pedido</h1>
                <p class="mt-2">En unos minutos recibirá la factura y confirmación de su pedido, en el correo electrónico indicado en su cuenta.</p>
                <p>Revise su bandeja de entrada y si no la ve dirijase a su carpeta de Spam.</p>
                <p>La página se redirigirá a sus pedidos en {{ counter }} segundo(s), si no es así <n-link class="text-primary text-decoration-underline" to="/my-orders">pulse aquí</n-link>.</p>
            </div>
        </div>
    </client-only>
</template>

<script>

export default {
    auth: true,

    data() {
        return {
            paymentIntent: null,
            counter: 10,
        }
    },

    beforeMount() {
        const url = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
        if (url == null) {
            this.$router.push('/cart');
        }else {
            this.paymentIntent = url;
        }
    },

    mounted() {
        if(this.paymentIntent != null) {
            this.orderPaid();
            this.countdown();
        }
    },

    methods: {
        async orderPaid () {
            const token_id = this.paymentIntent;
            await this.$axios.post('/api/order-paid/' + token_id)
                .then((res) => {
                    console.log(res.data)
                    this.$store.commit('CLEAR_CART');
                    this.$store.commit('CLEAR_CUPON');
                }).catch((err) => {
                    console.log(err)
                });
        },

        // countdown of 10 seconds to redirect to my-orders
        countdown() {
            const interval = setInterval(() => {
                this.counter--;
                if (this.counter === 0) {
                    clearInterval(interval);
                    this.$router.push('/my-orders');
                }
            }, 1000);
        }

    },
}
</script>

<style>

</style>