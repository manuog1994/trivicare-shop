<template>
    <div>
        <form @submit.prevent="createUser" class="row" ref="guestform" :class="{'hidden': formHidden ? false : true}">
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Nombre</label>
                    <input name="name" type="text" v-model="guest.name" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Apellidos</label>
                    <input name="lastname" type="text" v-model="guest.lastname" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Dirección</label>
                    <input name="address" type="text" v-model="guest.address" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Opcional</label>
                    <input name="optional_address" v-model="guest.optional_address" type="text">
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Email</label>
                    <input name="email" type="text" v-model="guest.email" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">País</label>
                    <select class="form-select rounded-0" aria-label="Default select example" name="country" v-model="guest.country" @change="getStates" required>
                        <option disabled selected>Seleccione su país</option>
                        <option v-for="country in paises" :key="country.id" :value="country.name">{{ country.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">Provincia</label>
                    <select class="form-select rounded-0" aria-label="Default select example" name="state" v-model="guest.state" @change="getCities" required>
                        <option disabled selected>Seleccione su provincia</option>
                        <option v-for="state in provincias" :key="'state'+state.id" :value="state.name">{{ state.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="billing-info">
                    <label for="">Ciudad</label>
                    <select class="form-select rounded-0" aria-label="Default select example" name="city" v-model="guest.city" required>
                        <option disabled selected>Seleccione su ciudad</option>
                        <option v-for="city in cities" :key="'city'+city.name" :value="city.name">{{ city.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="billing-info">
                    <label>Código Postal</label>
                    <input name="zipcode" type="number" v-model="guest.zipcode" required>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <div class="billing-info">
                    <label>Teléfono</label>
                    <input name="phone" type="number" v-model="guest.phone" required>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="billing-info">
                    <label>DNI</label>
                    <input name="dni" type="text" v-model="guest.dni" required>
                </div>
            </div>
            <div class="form-check ms-3 mb-4">
                <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" v-model="checked">
                <label class="form-check-label" for="flexCheckDefault">
                    Acepto los <n-link class="text-info" to="/terms-conditions">términos y condiciones</n-link>.
                </label>
            </div>
            <div class="billing-btn">
                <button class="btn btn-form" :class="{'disabled': checked ? false : true}" type="submit" title="Guardar">Guardar</button>
            </div>
        </form>
        <div class="row" :class="{'hidden': formHidden ? true : false}">
            <div class="col-10 p-4 m-auto">
                <div>
                    <p>Nombre y Apellidos: 
                        <strong>{{ guestStore.name }} {{ guestStore.lastname }}</strong>
                    </p>                                                    
                </div>
                <div>
                    <p>Dirección: 
                        <strong>{{ guestStore.address }}, {{ guestStore.optional_address }} {{ guestStore.zipcode }}, {{ guestStore.city }}, {{ guestStore.state }}, {{ guestStore.country }}</strong>
                    </p>                                                    
                </div>
                <div>
                    <p>Email: 
                        <strong>{{ guestStore.email }}</strong>
                    </p>                                                    
                </div>
                <div>
                    <p>Teléfono: 
                        <strong>{{ guestStore.phone }}</strong>
                    </p>                                                    
                </div>
                <div>
                    <p>DNI: 
                        <strong>{{ guestStore.dni }}</strong>
                    </p>                                                    
                </div>
            </div>
            <div class="col-10 p-4">
                <div class="billing-btn">
                    <a @click="deleteGuest" type="submit" title="Editar">Eliminar</a>
                </div>
            </div>
        </div>
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
                {
                    id: 28,
                    name: 'España'
                }
            ],
            provincias,
            ciudades,
            cities: [],
            guest: {},
            formHidden: true,
        }
    },

    computed: {
        guestStore() {
            return this.$store.getters.getGuest;
        }
    },

    methods: {
        createUser() {
            //console.log(this.guest);
            this.$store.commit('SET_GUEST', this.guest);
            this.formHidden = false;
            this.$refs.guestform.reset();
            document.getElementById('titleSelect').innerHTML = 'Su dirección de envío';
            document.getElementById('my-account-3').classList.remove('collapse');
            //console.log(this.guestStore);
        },

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

        deleteGuest() {
            this.$store.commit('CLEAR_GUEST');
            this.formHidden = true;
            document.getElementById('titleSelect').innerHTML = 'Introduzca sus datos de envío';
        },
    }
}
</script>

<style>

</style>