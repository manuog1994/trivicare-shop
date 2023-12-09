<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <form @submit.prevent="createProfile" class="row" ref="newprofile">
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Nombre*</label>
                    <input class="form-control" name="name" type="text" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Apellidos*</label>
                    <input class="form-control" name="lastname" type="text" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Dirección*</label>
                    <input class="form-control" name="address" type="text" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Opcional</label>
                    <input class="form-control" name="optional_address" type="text">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">País*</label>
                    <input class="form-control" name="country" type="text" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">Provincia*</label>
                    <input class="form-control" name="state" type="text" required>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="billing-info">
                    <label for="">Ciudad*</label>
                    <input class="form-control" name="city" type="text" required>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="billing-info">
                    <label>Código Postal*</label>
                    <input class="form-control" name="zipcode" type="number" required>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <div class="billing-info">
                    <label>Teléfono*</label>
                    <input class="form-control" name="phone" type="number" required>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="billing-info">
                    <label>DNI/NIE/NIF*</label>
                    <input class="form-control" name="dni" type="text" required>
                </div>
            </div>
        </form>
        <div class="d-flex justify-content-end mt-3">
            <button @click="createProfile" class="btn rounded-0 text-info">Guardar</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            checked: false,
            disabled: true,
            error: null,
        }
    },

    mounted() {
        this.$axios.get('/sanctum/csrf-cookie');
    },
    
    methods: {
        async createProfile() {
            if(this.$refs.newprofile.checkValidity()){
                this.$refs.newprofile.classList.remove('was-validated')
                const form = this.$refs.newprofile
                const formData = new FormData(form)
                formData.append('user_id', this.$auth.user.id)
                await this.$axios.post('/api/register-profile', formData)
                .then(res => {
                    this.$refs.newprofile.reset()
                    this.$notify({ type: 'success', text: 'Dirección creada correctamente' })
                    this.$auth.fetchUser()
                    this.error = null
                }).catch(err => {
                    this.error = err.response.data.message;
                })
                this.$root.$emit('newUserAddress', false)
            }else{
                this.$refs.newprofile.classList.add('was-validated')
            }
        },
    }
}
</script>

<style>

</style>