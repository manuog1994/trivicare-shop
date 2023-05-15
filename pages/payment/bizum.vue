<template>
    <div>
        <HeaderCheckout />
        <div class="container pt-100 pb-100" v-if="confirmed == false">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="mt-3 d-flex justify-content-center">
                                <img src="/payment/bizum.webp" alt="logo de bizum" width="200">
                            </div>
                            <div>
                                <p class="text-center mt-3">Para realizar el pago por Bizum, envíe el importe de <strong class="fs-5">{{ (total + shippingAmount).toFixed(2) }} &euro;</strong> al siguiente número:</p>
                                <p class="text-center mt-3 fs-5"><strong>613 03 69 42</strong></p>
                                <p class="text-center mt-3">Indicando en el concepto su <strong class="fs-6">DNI,NIF o NIE</strong></p>
                                <p class="text-center mt-3">Pulse <strong class="fs-6">Confirmar</strong> para realizar su pedido.</p>
                            </div>
                            <div class="mt-4 d-flex justify-content-center">
                                <form @submit.prevent="createOrder">
                                    <button class="fs-6 btn bg-trivi-green text-white" type="submit">
                                        Confirmar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SuccessOrder v-else />
        <TheFooter />
    </div>
</template>

<script>
export default {
    auth:false,
    middleware: 'bizum',

    data() {
        return {
            confirmed: false,
        }
    },

    components: {
        HeaderCheckout: () => import('@/components/header/HeaderCheckout.vue'),
        TheFooter: () => import('@/components/TheFooter.vue'),
        SuccessOrder: () => import('@/components/checkout/SuccessOrder.vue'),
    },

    computed: {
        total() {
            return this.$store.getters.getTotal * 1.21;
        },
        shippingAmount() {
            return this.$store.getters.getShippingAmount;
        },

        guestStore() {
            return this.$store.getters.getGuest;
        },
    },

    methods: {
        async createOrder() {
            if(this.guestStore?.length != 0) {
                await this.$axios.post('/api/guest-store', this.guestStore)
                .then(res => {
                    const resp = res.data.data;
                    const guest = { ...this.guestStore, id: resp.id}
                    this.$store.dispatch('addIdToGuest', guest);
                    const products = JSON.stringify(this.$store.getters.getCart);
                    const cupon = this.$store.getters.getCupon;
                    this.$axios.post('/api/orders', {
                        guest_id: this.guestStore.id,
                        user_id: this.guestStore.user_id,
                        user_profile_id: this.guestStore.user_profile_id,
                        products: products,
                        subTotal: this.$store.getters.getSubTotal,
                        total: this.$store.getters.getTotal,
                        coupon: cupon.code,
                        shipping: this.$store.getters.getShippingAmount,
                        shipping_method: this.$store.getters.getShippingMethod,
                        note: this.$store.getters.getNote,
                        invoice_paper: this.$store.getters.getInvoicePaper,
                        token_id: this.token_id,
                        token_reserve: this.$store.getters.getReserve,
                        payment_method: this.$store.getters.getPaymentMethod,
                        pickup_point: this.$store.getters.getPickUpId,
                    }).then(() => {
                        this.orderComplete();
                        this.$root.$emit('orderComplete', true)
                        this.confirmed = true;
                    }).catch((err) => {
                        console.log(err);
                    })
                }).catch(err => {

                });
            } else {

                const products = JSON.stringify(this.$store.getters.getCart);
                const cupon = this.$store.getters.getCupon;
                await this.$axios.post('/api/orders', {
                    guest_id: null,
                    user_id: this.$auth.user.id,
                    user_profile_id: this.$store.getters.getUserProfileId,
                    products: products,
                    subTotal: this.$store.getters.getSubTotal,
                    total: this.$store.getters.getTotal,
                    coupon: cupon.code,
                    shipping: this.$store.getters.getShippingAmount,
                    shipping_method: this.$store.getters.getShippingMethod,
                    note: this.$store.getters.getNote,
                    invoice_paper: this.$store.getters.getInvoicePaper,
                    token_id: this.token_id,
                    token_reserve: this.$store.getters.getReserve,
                    payment_method: this.$store.getters.getPaymentMethod,
                    pickup_point: this.$store.getters.getPickUpId,
                }).then(() => {
                    this.orderComplete();
                    this.$root.$emit('orderComplete', true)
                    this.confirmed = true;
                    window.onbeforeunload = null;
                    window.history.pushState(null, '', window.location.href);
                }).catch((err) => {

                })
            }

        },
        orderComplete() {
            this.$store.commit('CLEAR_GUEST');
            this.$store.commit('CLEAR_CART');
            this.$store.commit('CLEAR_CUPON');
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
            this.$store.commit('SET_BIZUM_PAGE', false);

        }
    }
}
</script>

<style>

</style>