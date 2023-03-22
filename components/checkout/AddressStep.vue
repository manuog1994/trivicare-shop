<template>
    <div v-if="url == 2 && step2 == true">
        <div v-if="newUserAddress == false">
            <div class="text-center">
                <h3>Seleccione una dirección de envio</h3>
            </div>
            <div v-if="$auth.loggedIn == true">
                <div v-for="profile in $auth?.user?.user_profile" :key="profile.id" class="border bg-gray-2 mt-2">
                    <div class="form-check text-center ms-3 ms-md-5 p-3 align-items-center">
                        <input class="form-check-input" type="radio" :value="profile.id" ref="userProfileId" name="address" :id="'flexRadio' + profile.id">
                        <label class="form-check-label" :for="'flexRadio' + profile.id">
                            <strong>{{ profile.name }} {{ profile.lastname }},</strong>
    
                            {{ profile.address }},
    
                            {{ profile.optional_address }} {{ profile.zipcode }}
    
                            {{ profile.city }}, {{ profile.state }}, {{ profile.country }}
                        </label> 
                    </div>
                </div>
                <div class="text-decoration-underline mt-3 text-center">
                    <a @click="newUserAddress = true">Deseo enviarlo a otra dirección</a>
                </div>

                <div class="mt-3">
                    <div class="w-100">
                        <label>Nota para el pedido (Opcional)</label>
                        <textarea class="form-control" name="note" v-model="note" rows="3"></textarea>
                    </div>
                </div>

                <div class="mt-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="true" id="invoice_paper" v-model="invoice_paper">
                        <label class="form-check-label" for="flexCheckDefault">
                            Marque esta casilla si desea recibir la factura imprimida en papel.
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="newUserAddress == true" class="ms-md-5 me-md-5">
            <div class="text-center">
                <h3>Introduzca su dirección</h3>
            </div>
            <NewProfile />
        </div>
        <div v-if="$auth.loggedIn == false">
            <div class="text-center">
                <h3>Introduzca su dirección</h3>
            </div>
            <NewGuest :saveGuest="saveGuest" @savGuest="handleSaveGuest"/>
        </div>
        <div class="ms-md-5 me-md-5 mt-5 d-flex justify-content-center">
            <button v-if="newUserAddress == false" @click="nextStep" class="btn btn-theme">Continuar</button>
            <button v-if="newUserAddress == true" @click="newUserAddress = false" class="btn bg-trivi-red">Cancelar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stepEmail: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            stepAddress: false,
            userAddress: false,
            newUserAddress: false,
            saveGuest: false,
            url: '',
            userProfileId: '',
            note: '',
            invoice_paper: false,
        }
    },

    components: {
        NewProfile : () => import('~/components/profile/NewProfile.vue'),
        NewGuest : () => import('~/components/profile/NewGuest.vue'),
    },

    computed: {
        emailStore() {
            return this.$store.getters.getGuest.email;
        },

        guestStore() {
            return this.$store.getters.getGuest;
        },

        reserve() {
            return this.$store.getters.getReserve;
        },

        step2() {
            return this.$store.getters.getStep2;
        },

        step3() {
            return this.$store.getters.getStep3;
        },

        step4() {
            return this.$store.getters.getStep4;
        },
    },

    beforeMount() {
        this.$root.$on('newUserAddress', (newUserAddress) => {
            this.newUserAddress = newUserAddress;
        });
    },

    mounted() {
        if (!this.$auth.user.user_profile) {
            this.newUserAddress = true;
        }
        const url = new URLSearchParams(window.location.search).get('step');
        this.url = url;

        if (this.step2 == false) {
            this.$router.push({ query: { reserve: this.reserve, step: 1 } });
        }
    },

    watch: {
        // escuchar cambios en la query
        '$route.query.step': function (val) {
            this.url = val;
        },
    },

    methods: {
        async sendAddress() {
            this.stepAddress = true;
            this.$emit('stepAddress', this.stepAddress);
        },

        nextStep() {
            if (this.emailStore) {
                this.saveGuest = true;
            }

            this.$refs.userProfileId.forEach((element) => {
                if (element.checked) {
                    this.userProfileId = element.value;
                }
            });
            console.log(this.userProfileId)
            if (this.userProfileId) {
                this.$store.commit('SET_USER_PROFILE_ID', this.userProfileId);
                this.$store.commit('SET_NOTE', this.note);
                this.$store.commit('SET_INVOICE_PAPER', this.invoice_paper);
            }

            this.$store.commit('SET_STEP3', true);
            this.$router.push({ query: { reserve: this.reserve, step: 3 } });
        },

        handleSaveGuest(saveGuest) {
            // recibe el evento del componente hijo
            this.saveGuest = saveGuest;
            //console.log(this.saveGuest)
        },
    },

}
</script>

<style>

</style>