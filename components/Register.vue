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
            <input name="name" placeholder="Nombre" type="text" required>
            <input name="email" placeholder="Email" type="email" required>
            <input type="password" name="password" placeholder="Contraseña" required>
            <input type="password" name="password_confirmation" placeholder="Confirma tu contraseña" required>
            <div class="d-flex flex-column">
                <div class="mb-2 d-flex align-items-center">
                    <input type="checkbox" name="newsletter" id="newsletter" v-model="newsletter" value="1">
                    <label class="ms-2" for="newsletter">Quiero recibir novedades, ofertas y descuentos.</label>
                </div>
                <div class="mb-2 d-flex align-items-center">
                    <input type="checkbox" name="terms" id="terms" v-model="checked" value="true">
                    <label class="ms-2" for="terms">Acepto los <a href="https://trivicare.com/">términos y condiciones</a></label>
                </div>
            </div>
            <div class="button-box mt-4">
                <button class="btn" :class="{'disabled': checked ? false : true}" type="submit" title="Registrarse">Registrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                errors: [],
                checked: false,
                newsletter: false,
            }
        },

        async mounted() {
            await this.$axios.get('/sanctum/csrf-cookie');
        },

        methods: {
            register() {
                const formData = new FormData(this.$refs.registerform);
                formData.append('newsletter', this.newsletter);
                this.$axios.post('/register', formData)
                .then(res => {
                    console.log(res);
                    this.$auth.loginWith('laravelSanctum', { data: formData });
                    this.errors = [];
                    this.$router.push({
                        path: '/'
                    });
                    this.$notify({ title: 'Te has registrado correctamente, Bienvenid@!'})

                }).catch((error) => {
                    console.log(error);
                    this.errors = Object.values(error.response.data.errors).flat();
                })

            }
        }
    }
</script>