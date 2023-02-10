<template>
    <div>
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-5">Añade una nota a tu pedido</a></h3>
        </div>
        <div id="my-account-5" class="panel-collapse collapse" data-bs-parent="#faq">
            <div class="panel-body">
                <div class="p-4 p-md-5">
                    <div class="mb-2">
                        <h4 class="mb-4">Aquí puedes dejarnos una nota sobre tu pedido (es opcional)</h4>
                        <textarea v-model="note" name="note" id="note" cols="20" rows="5" placeholder="Escribe aquí tu nota"></textarea>
                    </div>
                    <div class="mt-5">
                        <h5 class="mb-4">En TriviCare Natural Cosmetics pensamos en el medio ambiente, es por ello que no incluimos la factura en papel en vuestros pedidos, pero si os es imprescindible podeís marcar la siguiente opción:</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="1" id="invoice" v-model="invoice_paper">
                            <label class="form-check-label" for="invoice">
                                Incluir factura en papel
                            </label>
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
            note: '',
            invoice_paper: false
        }
    },

    watch: {
        note() {
            this.$emit('note', this.note);
        },

        invoice_paper() {
            this.$emit('invoicePaper', this.invoice_paper);
        }
    },
}
</script>

<style>

</style>