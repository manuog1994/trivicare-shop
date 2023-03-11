<template>
    <div>
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Seleccione un método de pago </a></h3>
        </div>
        <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
            <div class="panel-body">
                <div class="p-4 p-md-5">
                    <div class="row mt-4 d-flex align-items-center">
                        <div class="col-6">
                            <div class="form-check d-flex align-items-center">
                                <input class="form-check-input mb-1" type="radio" name="payment" id="paypal_payment" v-model="payment" value="paypal">
                                <label class="form-check-label ms-2" for="paypal_payment">
                                    Pago por Paypal o Tarjeta
                                </label>
                            </div>
                        </div>
                        <div class="col-6 d-flex flex-column align-items-center">
                            <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                            <img class="ms-2" src="/payment/metodosdepago.webp" alt="metodos de pago" width="200px" height="auto"/>
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