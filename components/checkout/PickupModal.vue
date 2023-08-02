<template>
    <modal name="pickup-point" :width="size" height="auto" :scrollable="true">
        <div class="p-3 p-md-5">
            <div class="p-3">
                <h2 class="text-center">Puntos de Recogida</h2>
            </div>
            <div class="p-2">
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" @change="selectedLocation">
                    <option selected disabled>Seleccione un punto de recogida</option>
                    <option v-for="location in locations.states" :value="location.id" :key="location.id">
                        {{ location.city }}, {{ location.state }}
                    </option>
                </select>
            </div>
            <div v-for="pickup in location.pickup_points" :key="pickup.id" class="p-3 border d-flex align-items-center cursor-pointer mb-2" @click="sendOption(pickup)">
                <p class="form-check-label" :for="pickup + pickup.id">
                    <span>
                        <strong>{{ pickup.name }}</strong>
                    </span>
                    <br/>
                    <span>
                        {{ pickup.address }}
                    </span>
                    <br/>
                    <span>
                        {{ location.city }}, {{ location.state }}
                    </span>
                    <br/>
                    <span>
                        <strong>Horario:</strong> {{ pickup.hours }}
                    </span>
                    <br/>
                    <span>
                        <strong>Teléfono:</strong> {{ pickup.phone }}
                    </span>
                </p>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    props: ['size'],

    data() {
        return {
            locations: [],
            location: '',
            pickupId: 0,
            disabled: true,
            pickupSelected: '',
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

        sendOption(pickup) {
            this.$store.commit('SET_PICKUP_ID', pickup.id);
            this.$store.commit('SET_SHIPPING_METHOD', 'pickup-point');
            this.$store.commit('SET_STEP4', true)
            this.$router.push({ query: { reserve: this.$route.query.reserve, step: 4 } })
            this.$modal.hide('pickup-point');
        }
    }
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;

    &:hover {
        background-color: #2AB5B2;
    }
}

.active {
    background-color: #2AB5B2;
}
</style>