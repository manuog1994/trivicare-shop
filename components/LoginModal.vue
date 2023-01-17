<template>
    <modal name="loginModal" width="80%" height="80%">
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
