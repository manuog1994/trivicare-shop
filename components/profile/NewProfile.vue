<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <form @submit.prevent="createProfile" class="row" ref="newprofile">
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Nombre</label>
                    <input name="name" type="text" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Apellidos</label>
                    <input name="lastname" type="text" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Dirección</label>
                    <input name="address" type="text" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Opcional</label>
                    <input name="optional_address" type="text">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">País</label>
                    <select class="form-select rounded-0" aria-label="Default select example" name="country" @change="getStates" required>
                        <option disabled selected>Seleccione su país</option>
                        <option v-for="country in paises" :key="country.id" :value="country.name">{{ country.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">Provincia</label>
                    <select class="form-select rounded-0" aria-label="Default select example" name="state" @change="getCities" required>
                        <option disabled selected>Seleccione su provincia</option>
                        <option v-for="state in provincias" :key="'state'+state.id" :value="state.name">{{ state.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="billing-info">
                    <label for="">Ciudad</label>
                    <select class="form-select rounded-0" aria-label="Default select example" name="city" required>
                        <option disabled selected>Seleccione su ciudad</option>
                        <option v-for="city in cities" :key="'city'+city.name" :value="city.name">{{ city.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="billing-info">
                    <label>Código Postal</label>
                    <input name="zipcode" type="number" required>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <div class="billing-info">
                    <label>Teléfono</label>
                    <input name="phone" type="number" required>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="billing-info">
                    <label>DNI</label>
                    <input name="dni" type="text" required>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import provincias from '@/data/provincias.json'
import ciudades from '@/data/ciudades.json'
export default {
    data() {
        return {
            checked: false,
            disabled: true,
            paises: [
                { id: 28, name: 'España' }
            ],
            ciudades,
            provincias,
            cities: [],
            error: null,           
        }
    },

    mounted() {
        this.$axios.get('/sanctum/csrf-cookie');
    },
    
    methods: {
        getStates(e) {
            const country_name = e.target.value
            const country_id = this.paises.find(country => country.name === country_name).id
            this.provincias = this.provincias.data.filter(state => state.id_country === country_id)
        },
        getCities(e) {
            const states_name = e.target.value
            const state_id = this.provincias.find(state => state.name === states_name).id
            this.cities = this.ciudades.data.filter(city => city.id_state === state_id)
        },

        async createProfile() {
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
        },
    }
}
</script>

<style>

</style>