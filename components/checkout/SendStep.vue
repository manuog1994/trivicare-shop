<template>
    <div v-if="url == 3 && step3 == true">
        <div class="text-center">
            <h3>Seleccione un método de envío</h3>
        </div>
        <div class="p-4 p-md-4">
            <div v-for="shipping in shippings" :key="shipping.value" class="border bg-gray p-3 mb-2 cursor-pointer" :class="{'hidden': shipping.hidden ? true : false, 'active': shippingSelect?.value == shipping.value}">
                <div class="row" @click="shippingSelect = shipping">
                    <div class="col-6 d-flex justify-content-start align-items-center">
                        <div class="form-check">
                            <p class="form-check-label" :for="'flex' + shipping.name">
                                {{ shipping.name }}
                            </p>
                        </div>
                    </div>
                    <div class="col-6 text-end">
                        <p v-if="shipping.price > 0"><strong>{{ shipping.price }} &euro;</strong></p>
                        <p v-if="shipping.price == 0"><strong>Gratis</strong></p>
                    </div>
                 </div>
            </div>
        </div>

        <div class="text-center">
            <span class="text-danger" :class="{'hidden': error ? false : true}"><i>Para continuar debe seleccionar un método de envio.</i></span>
        </div>
            
        <div class="ms-md-5 me-md-5 mt-2 d-flex justify-content-center">
            <button @click="nextStep" class="btn btn-theme">Continuar</button>
        </div>
        <PickupModal :size="size" @pickupId="handlePickup"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shippingMethod: '',
            shippingAmount: 0,
            url: '',
            error: false,
            errorMsg: '',
            shippingSelect: '',
            size: 0,
            shippings: [
                {
                    name: 'Envío estándar (3-5 días)',
                    price: 4.95,
                    value: 'standar',
                    hidden: false,
                },
                {
                    name: 'Envío rápido (24-48 horas)',
                    price: 5.95,
                    value: 'faster',
                },
                {
                    name: 'Envío urgente (24 horas)',
                    price: 6.95,
                    value: 'urgent',
                },
                {
                    name: 'Punto de Recogida',
                    price: 0,
                    value: 'pickup-point',
                },
                {
                    name: 'Envío Gratis (3 a 5 días)',
                    price: 0,
                    value: 'free',
                    hidden: true,
                },
            ],
        }
    },

    components: {
        PickupModal: () => import('@/components/checkout/PickupModal.vue'),
    },

    computed: {
        total() {
            return this.$store.getters.getTotal * 1.21;
        },

        guestStore() {
            return this.$store.getters.getGuest;
        },

        step1() {
            return this.$store.getters.getStep1;
        },

        step2() {
            return this.$store.getters.getStep2;
        },

        step3() {
            return this.$store.getters.getStep3;
        },

        step4() {
            return this.$store.getters.getStep4;
        },
    },

    mounted() {
        const url = new URLSearchParams(window.location.search).get('step');
        this.url = url;

        if (this.total > 50) {
            this.shippings[0].hidden = true;
            this.shippings[4].hidden = false;
        } else {
            this.shippings[4].hidden = true;
        }

        if(window.innerWidth < 780){
            this.size = 350
        }else{
            this.size = 800
        }
    },

    watch: {
        '$route.query.step': function (val) {
            this.url = val;
        },
    },

    methods: {
        handlePickup(pickupId) {
            //console.log(pickupId);
            this.$store.commit('setPickup', pickupId);
            this.$store.commit('setShippingMethod', this.shippingMethod);
        },

        nextStep() {
            this.error = false;
            this.shippingMethod = this.shippingSelect.value;
            this.shippingAmount = this.shippingSelect.price;
            
            this.$store.commit('SET_SHIPPING_METHOD', this.shippingMethod);
            this.$store.commit('SET_SHIPPING_AMOUNT', this.shippingAmount);

            if (this.shippingMethod == 'pickup-point') {
                this.$modal.show('pickup-point');
            } else if (!this.shippingMethod == '') {
                this.$store.commit('SET_STEP4', true);
                window.scrollTo(0, 0);
                this.$router.push({ query: { reserve: this.$route.query.reserve, step: 4 } });
            } else {
                this.error = true;
            }
        },
    },

}
</script>

<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;

    &:hover {
        background-color: #2AB5B2;
    }
}

.active {
    background-color: #2AB5B2;
}
</style>