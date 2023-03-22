<template>
    <div v-if="url == 1">
        <div class="text-center">
            <h3 class="font-weight-bold">Comencemos el pedido</h3>
        </div>
        <div v-if="loginView == false && $auth.loggedIn == false">
            <div v-if="!emailStore">
                <div class="ms-md-5 me-md-5">
                    <label for="email">Correo electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="Introduzca su correo electrónico" :value="emailStore" ref="emailGuest" required>
                </div>
                <div class="ms-md-5 me-md-5">
                    <span :class="{'hidden': emailError ? false : true}" class="text-danger"><i>El correo que has introducido ya existe. Por favor haga click en el botón "Ya tengo cuenta" para iniciar sesión.</i></span>
                    <span :class="{'hidden': conditionsMsg ? false : true }" class="text-danger"><i>Para continuar con su pedido debe aceptar los términos y condiciones y la política de protección de datos.</i></span>
                    <span :class="{'hidden': emptlyEmail ? false : true }" class="text-danger"><i>Introduzca su correo electrónico para continuar.</i></span>
                </div>
                <div class="ms-md-5 me-md-5 mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="conditions" ref="conditionsGuest">
                        <label class="form-check-label" for="conditions">
                            Acepto los <a class="text-decoration-underline" href="/terms-conditions">Términos y condiciones</a> y la <a class="text-decoration-underline" href="/legal-warning">Política de Protección de Datos</a>.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="newsletter" ref="newsletterGuest">
                        <label class="form-check-label" for="newsletter">
                            Deseo recibir información sobre productos y servicios a través de correo electrónico. <i>Aceptando la <a class="text-decoration-underline" href="/legal-warning">Política de Protección de Datos</a>. Puede darse de baja en cualquier momento.</i>
                        </label>
                    </div>
                </div>
                <div class="mt-2 d-flex flex-column align-items-center ms-md-5 me-md-5">
                    <button class="btn btn-theme mt-3" @click.prevent="sendEmail">Continuar</button>
                    <button class="btn btn-theme-green mt-3" @click.prevent="loginView = true">Ya tengo cuenta</button>
                </div>
            </div>
            <div v-if="emailStore">
                <div class="text-center">
                    <h4>Has creado el pedido con el correo {{ emailStore }}</h4>
                </div>
                <div class="d-flex justify-content-around mt-4">
                    <button @click="nextStep" class="btn bg-trivi-blue">Continuar</button>
                    <button @click="clearEmail" class="btn bg-trivi-red">Eliminar el email</button>
                </div>
            </div>
        </div>
        <div v-if="loginView == true || $auth.loggedIn == true">
            <form @submit.prevent="login" ref="loginform">
                <div v-if="$auth.loggedIn == false">
                    <div class="ms-md-5 me-md-5">
                        <label for="email">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="Introduzca su correo electrónico" name="email" required>
                    </div>
                    <div class="ms-md-5 me-md-5 mt-2">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Introduzca su contraseña" name="password" required>
                    </div>
                    <div class="ms-md-5 me-md-5 mt-2">
                        <span class="text-danger" v-for="error in errors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div v-if="$auth.loggedIn == true" class="mt-3 text-center">
                    <h4>Has iniciado sesión con el email {{ $auth.user.email }}</h4>
                </div>
                <div class="ms-md-5 me-md-5 mt-4">
                    <button class="btn btn-theme" type="submit" v-if="$auth.loggedIn == false">Iniciar sesión y continuar</button>
                    <button class="btn btn-theme" @click="nextStep" v-if="$auth.loggedIn == true">Continuar</button>
                    <button @click="logout" class="btn btn-theme-green">Hacer pedido como invitado</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            conditions: false,
            conditionsMsg: false,
            newsletter: false,
            emailError: false,
            loginView: false,
            errors: [],
            emptlyEmail: false,

            guest: {},
            url: '',
            reserve: '',
        }
    },

    computed: {
        emailStore() {
            return this.$store.getters.getGuest.email;
        },

        conditionsStore() {
            return this.$store.getters.getConditionsStore;
        },

        newsletterStore() {
            return this.$store.getters.getNewsletterStore;
        },

        reserveStore() {
            return this.$store.getters.getReserve;
        },

    },

    mounted() {
        const url = new URLSearchParams(window.location.search).get('step');
        this.url = url;
    },

    watch: {
        // escuchar cambios en la query
        '$route.query.step': function (val) {
            this.url = val;
        },
    },

    methods: {
        async sendEmail() {
            const verifyEmail = await this.$axios.post('/api/verify-email', {
                email: this.$refs.emailGuest.value,
            }).then((response) => {
                if (response.data.success == true) {
                    this.emailError = true
                } else {
                    this.emailError = false
                    this.email = this.$refs.emailGuest?.value;
                    if (this.$refs.conditionsGuest?.checked == false) {
                        this.conditionsMsg = true;
                    } else if (this.email == '' || this.email == undefined) {
                        this.emptlyEmail = true;
                    } else if (this.emailError == true) {
                        this.emailError = true;
                    } else {
                        this.emailError = false;
                        this.conditionsMsg = false;
                        this.emptlyEmail = false;
                        const guest = {
                            email: this.$refs.emailGuest.value,
                        }
                        this.$store.commit('SET_GUEST', guest);
                        this.$store.commit('SET_CONDITIONS_STORE', this.$refs.conditionsGuest?.checked);
                        this.$store.commit('SET_NEWSLETTER_STORE', this.$refs.newsletterGuest?.checked);
                        this.$store.commit('SET_STEP2', true);
                        this.$router.push({ query: { reserve: this.reserveStore, step: 2 } });
                    }
                }
            })


        },

        async login() {
            try {
                const formData = new FormData(this.$refs.loginform);
                await this.$auth.loginWith('laravelSanctum', {
                    data: formData
                }).then(res => {
                    this.errors = [];
                    this.$store.commit('SET_RESERVE', this.reserve)
                    this.$store.commit('SET_STEP2', true);
                    this.$router.push({ query: { reserve: this.reserve, step: 2 } }); 
                });
            } catch (error) {
                this.errors = ['El correo electrónico o la contraseña son incorrectos.']; 
                this.$axios.post('/api/error-message', {
                    message: error.response.data.message
                })            
            }
        },

        async logout() {
            this.loginView = false;
            await this.$auth.logout();
            window.location.reload();
            this.$notify({ title: 'Has cerrado sesión!'})

        },

        clearEmail() {
            this.guest = {};
            this.$store.commit('SET_STEP2', false);
            this.$store.commit('SET_STEP3', false);
            this.$store.commit('SET_STEP4', false);
            this.$store.commit('CLEAR_GUEST', this.guest);
        },

        nextStep() {
            this.$store.commit('SET_STEP2', true);
            this.$router.push({ query: { reserve: this.reserveStore, step: 2 } });
        }
    }
}
</script>

<style lang="scss">
    .btn-theme-green{
        background-color: #C6D42E;
        width: 100%;
        color: white;
        font-weight: 500;
        margin-top: 10px;
        padding: 14px 30px 13px;
            &:hover {
                background-color: $dark;
            }
        @media only screen and (max-width: 400px) {
            width: 80%;
            margin: auto;
            padding: 13px 15px 13px;
        }
    }

</style>