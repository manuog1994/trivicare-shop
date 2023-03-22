<template>
    <modal name="pickup-point" width="800px" height="auto" :scrollable="true">
        <div class="p-md-5">
            <div class="p-2">
                <h2>Puntos de Recogida</h2>
            </div>
            <div class="p-2">
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" @change="selectedLocation">
                    <option selected disabled>Seleccione un punto de recogida</option>
                    <option v-for="location in locations.states" :value="location.id" :key="location.id">
                        {{ location.city }}, {{ location.state }}
                    </option>
                </select>
            </div>
            <div v-for="pickup in location.pickup_points" :key="pickup.id" class="p-2 border d-flex justify-content-md-evenly align-items-center">
                <input class="form-check-input me-2 m-md-0" type="radio" :name="pickup + pickup.id" :id="pickup.id" @click="values">
                <label class="form-check-label" :for="pickup + pickup.id">
                    <p>
                        <strong>{{ pickup.name }}</strong>
                    </p>
                    <p>
                        {{ pickup.address }}
                    </p>
                    <p>
                        {{ location.city }}, {{ location.state }}
                    </p>
                    <p>
                        <strong>Horario:</strong> {{ pickup.hours }}
                    </p>
                    <p>
                        <strong>Teléfono:</strong> {{ pickup.phone }}
                    </p>
                </label>
            </div>
            <div class="d-flex justify-content-end p-2">
                <a @click.prevent="sendOption" class="btn btn-primary rounded-0" :class="{'disabled' : disabled ? true : false}">Enviar selección</a>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            locations: [],
            location: '',
            pickupId: 0,
            disabled: true,
        }
    },

    mounted() {
        this.getLocations();
    },

    watch: {
        pickupId() {
            if(this.pickupId != 0){
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        }
    },


    methods: {
        getLocations() {
            this.$axios.get('/api/locations').then(response => {
                this.locations = response.data;
            });
        },

        selectedLocation(e) {
            const locationId = e.target.value;
            this.location = this.locations.states.find(location => location.id == locationId);
        },

        values(e) {
            //convertir en number
            const number = parseInt(e.target.id);
            this.pickupId = number;
        },

        sendOption() {
            this.$store.commit('SET_PICKUP_ID', this.pickupId);
            this.$store.commit('SET_SHIPPING_METHOD', 'pickup-point');
            this.$store.commit('SET_STEP4', true)
            this.$router.push({ query: { reserve: this.$route.query.reserve, step: 4 } })
            this.$modal.hide('pickup-point');
        }
    }
}
</script>

<style>

</style>