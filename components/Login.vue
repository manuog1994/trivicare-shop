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
            <input type="password" name="password" placeholder="Password" required>
            <div class="button-box">
                <div class="login-toggle-btn">
                    <input type="checkbox">
                    <label>Recuérdame</label>
                    <n-link to="/forgot-password">¿Olvidaste tu contraseña?</n-link>
                </div>
                <button :class="{
                    'disabled': true
                }" title="Iniciar sesión">Iniciar sesión</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        middleware: 'guest',
        
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
        },

        methods: {
            async login() {
                try {
                    const formData = new FormData(this.$refs.loginform);
                    await this.$auth.loginWith('laravelSanctum', {
                        data: formData
                    }).then(res => {
                        //console.log(res);
                        window.location.reload();
                        this.errors = [];
                        this.$notify({ title: 'Bienvenid@ de nuevo!'})
                    });
                } catch (error) {
                    this.errors = ['El correo electrónico o la contraseña son incorrectos.']; 
                    //console.log(error.response.data)             
                }
            }, 
        },
    }
</script>