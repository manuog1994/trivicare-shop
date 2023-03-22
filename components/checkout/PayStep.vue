<template>
    <div v-if="url == 4 && step4 == true">
        <div class="text-center">
            <h3>Seleccione un método de pago</h3>
        </div>
        <div class="p-4 p-md-4">
            <div v-for="method in methods" :key="method.name" class="border bg-gray-2 p-3 mb-2">
                <div class="row">
                    <div class="col-6">
                        <div class="form-check d-flex align-items-center">
                            <input class="form-check-input mb-1" type="radio" name="payment" ref="payment" :id="'pay' + method.value" :value="method.value">
                            <label class="form-check-label ms-2" :for="'pay' + method.value">
                                {{ method.name }}
                            </label>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center align-items-center">
                        <img class="ms-2" :src="method.img" alt="metodos de pago" :width="method.witdh" height="auto"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="ms-md-5 me-md-5 mt-2 d-flex justify-content-center">
            <button @click="nextStep" class="btn btn-theme">Hacer pedido</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payment: '',
            url: '',
            methods: [
                {
                    name: 'Tarjeta de débito o crédito',
                    img: '/payment/tarjetas.webp',
                    value: 'redsys',
                    witdh: '150px',
                },

                {
                    name: 'Bizum',
                    img: '/payment/bizum.webp',
                    value: 'bizum',
                    witdh: '100px',
                },

                {
                    name: 'Transferencia bancaria',
                    img: '/payment/transfer_bank.webp',
                    value: 'transfer_bank',
                    witdh: '80px',
                },
                
                {
                    name: 'PayPal',
                    img: '/payment/paypal.svg',
                    value: 'paypal',
                    witdh: '100px',
                },

                {
                    name: 'Pago en 3 plazos sin intereses',
                    img: '/payment/paypal.svg',
                    value: 'paylater',
                    witdh: '100px',
                },
            ],
        };
    },
    
    computed: {
        guestStore() {
            return this.$store.getters.getGuest;
        },

        step4() {
            return this.$store.getters.getStep4;
        },
    },

    mounted() {
        const url = new URLSearchParams(window.location.search).get('step');
        this.url = url
    },

    watch: {
        '$route.query.step': function (val) {
            this.url = val;
        },
    },

    methods: {
        nextStep() {
            this.$refs.payment.forEach((element) => {
                if(element.checked) {
                    this.payment = element.value;
                }
            });
           
            this.$store.commit('SET_PAYMENT_METHOD', this.payment);
            this.$root.$emit('payment', this.$store.getters.getPaymentMethod);
        }
    }
}
</script>

<style>
.bg-color-resumen {
    background-color: #F6F6F6;
}
</style>