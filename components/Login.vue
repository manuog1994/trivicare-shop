<template>
    <div class="login-form">
        <div>
            <client-only>
                <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                    {{ error }}
                </div>
            </client-only>
        </div>
        <form ref="loginform" @submit.prevent="login">
            <!-- @csrf -->
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Contraseña" required>
            <div class="button-box">
                <div class="row">
                    <div class="col-6">
                        <div class="login-toggle-btn">
                            <input type="checkbox">
                            <label>Recuérdame</label>
                        </div>
                    </div>
                    <div class="col-6" style="text-align:right;">
                        <n-link class="forgot-password" to="/forgot-password">¿Olvidaste tu contraseña?</n-link>
                    </div>
                </div>
                <button :class="{
                    'disabled': true
                }" title="Iniciar sesión">Iniciar sesión</button>
            </div>
        </form>
        <div class="mt-5">
            <div class="col-md-12 d-flex justify-content-center">
                <a @click.prevent="loginGoogle" class="btn btn-light rounded-0">
                    <div class="d-flex justify-content-center align-items-center">
                        <span class="text-center">Inicia sesión con</span>
                        <div class="row">
                            <div class="col-12 m-auto ms-1">
                                <img src="/social/google.webp" alt="google.webp" width="30px">
                            </div>
                        </div>
                    </div>
                </a>
             </div>
        </div>
    </div>
</template>

<script>

    export default {
        
        data() {
            return {
                disabled: false,
                errors: [],
            }
        },

        computed: {
     
        },

        mounted() {

            this.$axios.get('/sanctum/csrf-cookie');

            // if Url contains params called code
            if (new URLSearchParams(window.location.search).has('code')) {
                const url = window.location.search;
                const state = new URLSearchParams(window.location.search).get('state');
                //eliminamos state de la url
                const code = url.replace('?state=' + state + '&', '');
                //añadimos auth_ para que laravel lo reconozca
                const code2 = code.replace('code=', 'auth_code=');

                this.$axios.post(process.env.baseUrl + '/api/auth/code' + code2)
                    .then(res => {
                        //console.log(res.data.user);
                        //console.log(process.env.baseUrl)
                        this.$auth.loginWith('laravelSanctum', {
                            data: {
                                email: res.data.user.email,
                                provider_id: res.data.user.provider_id,
                            }
                        }).then(res => {
                            //console.log(res);
                            //window.location.reload();
                            this.errors = [];
                            //this.$notify({ title: 'Bienvenid@ de nuevo!'})
                        }).catch(err => {
                            //console.log(err);
                            this.errors = ['Hemos tenido un problema al iniciar sesión, por favor intenta de nuevo o inicia sesión con tu correo y contraseña.'];
                            this.$axios.post('/api/error-message', {
                                message: error.response.data.message
                            })
                        })
                    })
                    .catch(err => {
                        //console.log(err);
                        this.errors = ['Hemos tenido problemas al obtener sus datos de Google, por favor intenta de nuevo o inicia sesión con tu correo y contraseña.'];
                        this.$axios.post('/api/error-message', {
                            message: error.response.data.message
                        })
                    });

                }
        },

        methods: {
            async login() {
                try {
                    const formData = new FormData(this.$refs.loginform);
                    await this.$auth.loginWith('laravelSanctum', {
                        data: formData
                    }).then(res => {
                        //console.log(res);
                        //window.location.reload();
                        this.errors = [];
                        //this.$notify({ title: 'Bienvenid@ de nuevo!'})
                    });
                } catch (error) {
                    this.errors = ['El correo electrónico o la contraseña son incorrectos.']; 
                    //console.log(error.response.data)
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })            
                }
            },
            
            async loginGoogle() {
                await this.$axios.get('/api/auth/url')
                    .then(res => {
                        //console.log(res.data);
                        window.location.href = res.data;
                    }).catch(err => {
                        //console.log(err);
                        
                    });
            },


        },
    }
</script>