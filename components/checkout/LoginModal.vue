<template>
    <modal name="loginModal" width="80%" height="80%">
        <div class="m-5">
            <h3 class="text-center">Iniciar sesión</h3>
        </div>
        <Login/>
    </modal>
</template>

<script>
export default {
    components: {
        Login: () => import("@/components/Login"),
    },
}
</script>
