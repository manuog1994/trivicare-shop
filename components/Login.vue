<template>
    <div class="login-form">
        <form @submit.prevent="login">
            <input v-model="email" type="email" name="email" placeholder="Email">
            <input v-model="password" type="password" name="password" placeholder="Password">
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
    import { mapMutations, mapState } from 'vuex';
    export default {
        data() {
            return {
                email: '',
                password: '',
                disabled: false,
            }
        },

        computed: {
            ...mapState({
                'auth': state => state.auth
            }),
        },

        methods: {
            ...mapMutations(['SET_AUTH']),
            login() {
                this.disabled = true;
                this.$auth.loginWith('laravelPassport', {
                    data: {
                        username: this.email,
                        password: this.password,
                    }
                }).then(response => {
                    this.$router.push({ name: 'home' });
                    this.disabled = false;
                }).catch(error => {
                    this.disabled = false;
                    console.log(error);
                });

            }
        }
    }
</script>