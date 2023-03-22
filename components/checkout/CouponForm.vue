<template>
    <div>
        <label for="button-addon2">Cupón de descuento</label>
        <div>
            <p v-if="error" class="text-danger">{{ error }}</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Introduzca su cupón" aria-label="Cupón de descuento" aria-describedby="button-addon2" v-model="inputCupons">
                <button class="btn bg-trivi-blue" @click.prevent="getCupons" id="button-addon2">Aplicar</button>
            </div>
            <p v-if="success" class="text-success">{{ success }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cupons: [],
            cupon: {},
            inputCupons: '',
            error: '',
            success: '',
        }
    },

    methods: {
        async getCupons() {
            await this.$axios.get('/api/cupons')
            .then(response => {
                this.cupons = response.data.data;
                this.cupons.forEach(cupon => {
                        if (cupon.code == this.inputCupons && cupon.status == 2 && cupon.validity > new Date().toISOString().slice(0, 10) ) {
                            this.cupon = cupon;
                            this.$store.commit('SET_CUPON', this.cupon);
                            this.error = '';
                            this.inputCupons = '';
                            this.success = 'Cupón aplicado correctamente';
                        } else if (cupon.code == this.inputCupons && cupon.status == 1) {
                            this.error = 'Este cupón ya ha sido utilizado';
                            this.inputCupons = '';
                        } else if (cupon.code == this.inputCupons && cupon.validity < new Date().toISOString().slice(0, 10)) {
                            this.error = 'Este cupón ha caducado';
                            this.inputCupons = '';
                        }
                    })
                })
        },
    }
}
</script>

<style>

</style>