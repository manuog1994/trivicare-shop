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
            const products = JSON.stringify(this.$store.getters.getCart);
            const cupon = this.$store.getters.getCupon;
            await this.$axios.post('/api/orders', {
                name: this.guestStore.name,
                lastname: this.guestStore.lastname,
                email: this.guestStore.email,
                phone: this.guestStore.phone,
                address: this.guestStore.address,
                city: this.guestStore.city,
                state: this.guestStore.state,
                zipcode: this.guestStore.zipcode,
                country: this.guestStore.country,
                dni: this.guestStore.dni,
                user_id: this.$auth?.user?.id || null,
                user_profile_id: this.$store.getters?.getUserProfileId || null,
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
            }).then((res) => {
                this.$root.$emit('orderComplete', true)
                this.confirmed = true;
                window.onbeforeunload = null;
                window.history.pushState(null, '', window.location.href);
            }).catch((err) => {
                console.log(err);
            })

        },

    }
}
</script>

<style>

</style>