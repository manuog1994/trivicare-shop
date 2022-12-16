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
            <div class="mb-2">
                <input type="checkbox" name="terms" id="terms" v-model="checked" value="true">
                <label for="terms"><a href="#">Acepto los términos y condiciones</a></label>
            </div>
            <div class="button-box mt-4">
                <button class="btn" :class="{'disabled': checked ? false : true}" type="submit" title="Registrarse">Registrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        middleware: 'guest',
        data() {
            return {
                errors: [],
                checked: false
            }
        },

        async mounted() {
            await this.$axios.get('/sanctum/csrf-cookie');
        },

        methods: {
            register() {
                const formData = new FormData(this.$refs.registerform);
                this.$axios.post('/api/register', formData)
                .then(res => {
                    this.$auth.loginWith('laravelSanctum', { data: formData });
                    //console.log(res);
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