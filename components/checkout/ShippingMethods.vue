<template>
    <div>
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-4">Selecciona una opción de envío </a></h3>
        </div>
        <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
            <div class="panel-body">
                <div class="p-4 p-md-5">
                    <div>
                        <div v-if="total * 1.21 < 50">
                            <div class="row d-flex align-items-center">
                                <div class="col-4 d-flex align-items-center">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input mb-1" type="radio" name="shipping" id="correos" v-model="shippingMethod" value="correos">
                                        <label class="form-check-label ms-2" for="correos">
                                            Envío por Correos 48h/72h
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-flex justify-content-center">
                                        <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <p>
                                            <strong>
                                                +6,95 &euro;
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4 d-flex align-items-center">
                                <div class="col-4">
                                    <div class="form-check">
                                        <input class="form-check-input mb-1" type="radio" name="shipping" id="gls" v-model="shippingMethod" value="gls">
                                        <label class="form-check-label ms-2" for="gls">
                                            Envío por GLS 24h/48h
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-flex justify-content-center">
                                        <img src="/payment/gls.webp" alt="gls.webp" width="100px"/>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <p>
                                            <strong>+8,95 &euro;</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4 d-flex align-items-center">
                                <div class="col-4">
                                    <div class="form-check">
                                        <input class="form-check-input mb-1" type="radio" name="shipping" id="pickup-point" v-model="shippingMethod" value="pickup-point">
                                        <label class="form-check-label ms-2" for="pickup-point">
                                            Punto de Recogida
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-flex justify-content-center">
                                        <img src="/payment/pickup-point.webp" alt="pickup-point.webp" width="60px"/>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <p>
                                            <strong>Gratis</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="row mt-4 d-flex align-items-center">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input mb-1" type="radio" name="shipping" id="correos" v-model="shippingMethod" value="correos">
                                        <label class="form-check-label ms-2" for="correos">
                                            Envío Gratis
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex justify-content-center">
                                        <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PickupModal @pickupId="handlePickup"/>
    </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            required: true
        },
    },

    data() {
        return {
            shippingMethod: '',
            payment: '',
            pickup_id: '',
        }
    },

    components: {
        PickupModal: () => import('@/components/checkout/PickupModal.vue')
    },

    watch: {
        shippingMethod() {
            if(this.shippingMethod != 'pickup-point'){
                this.$emit('shippingMethod', this.shippingMethod, this.pickup_id);
                document.getElementById('end-select').disabled = false;
                document.getElementById('my-account-5').classList.remove('collapse');
                document.getElementById('my-account-4').classList.add('collapse');
                document.getElementById('my-account-3').classList.add('collapse');
                document.getElementById('my-account-1').classList.add('collapse');
            }else {
                this.$modal.show('pickup-point')
            }

        },

        pickup_id() {
            this.$emit('pickup_id', this.pickup_id)
        }
    },

    methods: {
        handlePickup(pickupId) {
            this.pickup_id = pickupId;
            this.$emit('shippingMethod', this.shippingMethod, this.pickup_id);
            document.getElementById('end-select').disabled = false;
            document.getElementById('my-account-5').classList.remove('collapse');
            document.getElementById('my-account-4').classList.add('collapse');
            document.getElementById('my-account-3').classList.add('collapse');
            document.getElementById('my-account-1').classList.add('collapse');
        }
    }

}
</script>

<style>

</style>