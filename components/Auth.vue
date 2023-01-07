<template>
    <div class="login-register-area pt-100 pb-100">
        <div class="container">
            <div class="login-register-tab-list nav">
                <button @click="comA('Login')" class="fs-5" :class="{ active: isActive === 'Login' }" title="Iniciar sesión">
                    Iniciar sesión
                </button>
                <button @click="comA('Register')" class="fs-5" :class="{ active: isActive === 'Register' }" title="Regístrate">
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