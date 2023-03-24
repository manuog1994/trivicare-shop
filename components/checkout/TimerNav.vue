<template>
    <div class="container-fluid bg-dark">
        <div class="text-white text-center p-2">
            <span v-if="orderComplete == false">Su pedido será cancelado en {{ countdown }}</span>
            <span v-if="orderComplete == true">Gracias por su confianza</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: '',
            interval: '',
            duration: 0,
            orderComplete: false,
        }
    },

    beforeMount() {
        this.$root.$on('duration', data => {
            this.duration = data;
        })

        this.$root.$on('orderComplete', data => {
            this.orderComplete = data;
        })
    },


    async mounted() {
        const duration = this.$store.getters.getDuration;
        this.startTimer(duration);
    },

    watch: {
        orderComplete() {
            if (this.orderComplete == true) {
                // parar el startTimer
                clearInterval(this.interval);
                this.interval = null;
                this.$store.commit('SET_DURATION', 0);
            }
        }
    },

    methods: {
        // countdown of 10 minutes
        startTimer(duration) {
        if (duration == null || duration == undefined) {
                //this.$router.push({ path: '/cart'})
            }
            let timer = duration, minutes, seconds;
            this.interval = setInterval(() => {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                let count = minutes + ":" + seconds;

                this.countdown = count;

                if (this.orderComplete == true) {
                    this.timer = 0;
                }

                let store = this.$store.commit('SET_DURATION', timer);

                if (--timer < 0) {
                    timer = 0;
                    this.$store.commit('SET_STEP2', false);
                    this.$store.commit('SET_STEP3', false);
                    this.$store.commit('SET_STEP4', false);
                    this.$store.commit('CLEAR_GUEST', {});
                    this.$store.commit('SET_PAYMENT_METHOD', '');
                    this.$store.commit('SET_SHIPPING_METHOD', '');
                    this.$store.commit('SET_PICKUP_ID', '');
                    this.$store.commit('SET_DURATION', 0);
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
                    this.$root.$emit('cancelOrder', true);
                    window.onbeforeunload = null;
                    window.history.pushState(null, '', window.location.href);
                    window.location.href = '/cart';
                    }
            }, 1000);
        },


    }
}
</script>

<style>

</style>