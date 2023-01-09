<template>
    <modal name="suggestionsModal" width="800px" :scrollable="true" height=auto>
        <div v-if="form == true" >
            <div class="text-center">
                <h4>Nos gusta escuchar a nuestros clientes, ¿Qué nos quieres sugerir?</h4>
            </div>
            <form @submit.prevent="sendForm" ref="sendform">
                <div class="mb-2">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" required>
                </div>
                <div class="mb-2">
                    <label for="email">Email</label>
                    <input type="email" name="email" required>
                </div>
                <div class="mb-2">
                    <label for="type">Tipo de Sugerencia</label>
                    <select class="form-select rounded-0" name="type" required>
                        <option selected disabled>Seleccione una opción</option>
                        <option value="Sugerencia sobre la Web">Sugerencia sobre la Web</option>
                        <option value="Sugerencia sobre Productos">Sugerencia sobre Productos</option>
                        <option value="Sugerencia sobre Servicios">Sugerencia sobre Servicios</option>
                        <option value="Queja">Queja</option>
                        <option value="Reclamo">Reclamo</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="message">Mensaje</label>
                    <textarea name="message" cols="30" rows="6" required></textarea>
                </div>
                <div class="mb-2 d-flex justify-content-center">
                    <button type="submit" class="btn btn-theme rounded-0">Enviar</button>
                </div>
            </form>
        </div>

        <div v-if="form == false">
            <div class="text-center p-5">
                <div class="mt-3 mb-3">
                    <img src="~/static/payment/success.webp" alt="success" width="50">
                </div>
                <div>
                    <h4>Tu sugerencia a sido enviada</h4>
                    <p>Gracias, por aportar tu granito de arena.</p>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            form: true,
        }
    },

    methods: {
        async sendForm() {
            const form = this.$refs.sendform;
            const formData = new FormData(form);
            await this.$axios.post('/api/suggestions', formData)
            .then(() => {
                this.$refs.sendform.reset();
                this.form = false;
                setTimeout(() => {
                    this.$modal.hide('suggestionsModal');
                    this.form = true;
                }, 5000);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss">


</style>