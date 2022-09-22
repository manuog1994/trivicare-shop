<template>
    <div class="login-form">
        <div>
            <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                {{ error }}
            </div>
        </div>
        <form ref="loginform" @submit.prevent="login">
            <!-- @csrf -->
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <div class="button-box">
                <div class="login-toggle-btn">
                    <input type="checkbox">
                    <label>Recuérdame</label>
                    <a href="#">Olvidaste la contraseña?</a>
                </div>
                <button :class="{
                    'disabled': true
                }">Iniciar sesión</button>
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
                errors: []
            }
        },

        computed: {
     
        },

        mounted() {
            this.$axios.$get('/sanctum/csrf-cookie');
        },

        methods: {
            async login() {
                try {
                    const formData = new FormData(this.$refs.loginform);
                    await this.$auth.loginWith('laravelSanctum', {
                        data: formData
                    });

                    this.$router.push({
                        path: '/my-account'
                    });
                    this.errors = [];
                    this.$notify({ title: 'Bienvenid@ de nuevo!'})
                } catch (error) {
                    this.errors = ['El correo electrónico o la contraseña son incorrectos.'];              
                }
            }
            

        },
    }
</script>