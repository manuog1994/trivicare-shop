<template>
    <div>
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Seleccione un método de pago </a></h3>
        </div>
        <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
            <div class="panel-body">
                <div class="p-4 p-md-5">
                    <div class="row d-flex align-items-center">
                        <div class="col-6">
                            <div class="form-check mb-2 d-flex align-items-center">
                                <input class="form-check-input mb-1" type="radio" name="payment" id="card_payment" v-model="payment" value="card">
                                <label class="form-check-label ms-2" for="card_payment">
                                    Pago por tarjeta
                                </label>
                            </div>
                        </div>
                        <div class="row col-6">
                            <div class="">
                                <img class="ms-2" src="/payment/metodosdepago.webp" alt="metodos-de-pago.webp" width="100%"/>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 d-flex align-items-center">
                        <div class="col-6">
                            <div class="form-check d-flex align-items-center">
                                <input class="form-check-input mb-1" type="radio" name="payment" id="paypal_payment" v-model="payment" value="paypal">
                                <label class="form-check-label ms-2" for="paypal_payment">
                                    Pago por Paypal
                                </label>
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-center">
                            <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payment: '',
        }
    },

    watch: {
        payment() {
            document.getElementById('my-account-4').classList.remove('collapse');
            this.$emit('payment', this.payment)
        },
    },
    
}
</script>

<style>

</style>