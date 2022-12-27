<template>
    <div class="login-register-area pt-100 pb-100">
        <div class="container">
            <div class="login-register-tab-list nav">
                <button @click="comA('Login')" :class="{ active: isActive === 'Login' }" title="Iniciar sesión">
                    Iniciar Sessión
                </button>
                <button @click="comA('Register')" :class="{ active: isActive === 'Register' }" title="Registrarte">
                    Regístrate
                </button>
            </div>
            <div class="row">
                <div class="col-lg-7 col-12 ms-auto me-auto">
                    <component :is="isActive" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {

    components: {
        Login,
        Register,
    },

    data() {
        return {
            isActive: "Login",
        };
    },

    methods: {
        comA(item) {
            this.isActive = item;
        }
    },

}
</script>

<style>

</style>