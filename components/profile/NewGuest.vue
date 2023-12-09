<template>
    <div>
        <form @submit.prevent="createUser" class="row" ref="guestform" :class="{'hidden': guestStore.address == null ? false : true}">
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Nombre*</label>
                    <input class="form-control" name="name" type="text" v-model="guest.name" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Apellidos*</label>
                    <input class="form-control" name="lastname" type="text" v-model="guest.lastname" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Dirección*</label>
                    <input class="form-control" name="address" type="text" v-model="guest.address" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Dirección 2 (Opcional)</label>
                    <input class="form-control" name="optional_address" v-model="guest.optional_address" type="text">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">País*</label>
                    <input class="form-control" name="country" v-model="guest.country" type="text" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">Provincia*</label>
                    <input class="form-control" name="state" v-model="guest.state" type="text" required>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="billing-info">
                    <label for="">Ciudad*</label>
                    <input class="form-control" name="city" v-model="guest.city" type="text" required>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="billing-info">
                    <label>Código Postal*</label>
                    <input class="form-control" name="zipcode" type="number" v-model="guest.zipcode" required>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <div class="billing-info">
                    <label>Teléfono*</label>
                    <input class="form-control" name="phone" type="number" v-model="guest.phone" required>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="billing-info">
                    <label>DNI/NIE/NIF*</label>
                    <input class="form-control" name="dni" type="text" v-model="guest.dni" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Nota para el pedido (Opcional)</label>
                    <textarea class="form-control" name="note" v-model="note" rows="3"></textarea>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 mt-2">
                <div class="billing-info">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="true" id="invoice_paper" v-model="invoice_paper">
                        <label class="form-check-label" for="flexCheckDefault">
                            Marque esta casilla si desea recibir la factura imprimida en papel.
                        </label>
                    </div>
                </div>
            </div>
        </form>
        <div v-if="errorForm == true" class="d-flex justify-content-center">
            <span class="text-danger text-center"><i>Para seguir con la compra, debe completar todos los campos requeridos en el formulario.</i></span>
        </div>
        <div :class="{'hidden': !guestStore.address ? true : false }" class="">
            <div class="card w-75 m-auto">
                <div class="card-body">
                    <div class="text-center">
                        <span>
                            <strong>{{ guestStore.name }} {{ guestStore.lastname }}</strong>
                        </span>
                    </div>
                    <div class="text-center">
                        <span>
                            {{ guestStore.address }}
                        </span>
                    </div>
                    <div class="text-center" v-if="guestStore.optional_address">
                        <span>
                            {{ guestStore.optional_address }}
                        </span>
                    </div>
                    <div class="text-center">
                        <span>
                            {{ guestStore.zipcode }}, {{ guestStore.city }}, {{ guestStore.state }}, {{ guestStore.country }}
                        </span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="text-center">
                        <button class="btn bg-trivi-red text-white" @click="deleteGuest">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        saveGuest: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            checked: false,
            disabled: true,
            guest: {},
            formHidden: true,
            invoice_paper: false,
            note: '',
            errorForm: false,
        }
    },

    computed: {
        guestStore() {
            return this.$store.getters.getGuest;
        }
    },

    mounted() {
        this.$emit('savGuest', false);
    },

    watch: {
        saveGuest() {
            if (this.saveGuest == true) {
                this.createUser();
            }
        },
    },

    methods: {
        createUser() {
            // validar formulario con $refs y guardar en store
            if (!this.guestStore.name && !this.guestStore.lastname && !this.guestStore.address && !this.guestStore.state && !this.guestStore.city && !this.guestStore.zipcode && !this.guestStore.phone && !this.guestStore.dni) {
                if (this.$refs.guestform.checkValidity()) {
                    this.errorForm = false;
                    this.$refs.guestform.classList.remove('was-validated')
                    this.guest.email = this.$store.getters.getGuest.email;
                    if (this.guest.name != '' && this.guest.lastname != '' && this.guest.address != '' && this.guest.state != '' && this.guest.city != '' && this.guest.zipcode != '' && this.guest.phone != '' && this.guest.dni != '') {
                        this.$store.commit('SET_GUEST', this.guest);
                        this.$store.commit('SET_STEP3', true);
                        this.$store.commit('SET_INVOICE_PAPER', this.invoice_paper);
                        this.$store.commit('SET_NOTE', this.note);
                        window.scrollTo(0, 0);
                    } else {
                        this.errorForm = true;
                    }
                } else {
                    this.errorForm = true;
                    this.$refs.guestform.classList.add('was-validated')
                    this.$emit('savGuest', false)
                    window.scrollTo(0, 0);
                }
            } else {
                this.$store.commit('SET_STEP3', true);
                window.scrollTo(0, 0);
            }

        },

        deleteGuest() {
            this.$store.commit('CLEAR_GUEST');
            this.$store.commit('SET_STEP2', false);
            this.$store.commit('SET_STEP3', false);
            this.$store.commit('SET_STEP4', false);
            this.$router.push({ query: { reserve: this.$route.query.reserve , step: 1 } });
        },
    }
}
</script>

<style>

</style>