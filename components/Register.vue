<template>
    <div class="register-form">
        <div>
            <client-only>
                <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                    {{ error }}
                </div>
            </client-only>
        </div>
        <form ref="registerform" @submit.prevent="register">
            <input name="email" placeholder="Email" type="email">
            <input type="password" name="password" placeholder="Contraseña">
            <input type="password" name="password_confirmation" placeholder="Confirma tu contraseña">
            <div class="button-box">
                <button type="submit">Registrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        middleware: 'guest',
        data() {
            return {
                errors: []
            }
        },

        mounted() {
            this.$axios.$get('/sanctum/csrf-cookie');
        },

        methods: {
            register() {
                const formData = new FormData(this.$refs.registerform);
                this.$axios.post('/register', formData)
                .then(() => {
                    this.$auth.loginWith('laravelSanctum', { data: formData });
                    this.errors = [];
                    this.$router.push({
                        path: '/'
                    });
                    this.$notify({ title: 'Te has registrado correctamente, Bienvenid@!'})

                }).catch((error) => {
                    this.errors = Object.values(error.response.data.errors).flat();
                })

            }
        }
    }
</script>