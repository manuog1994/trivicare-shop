<template>
    <div class="text-center mt-5 mb-5" ref="intro">
        <index-title text="Conoce un poco sobre nosotros" :pre-type-delay='3000' :repeat="0"/>
        <p class="pleft-30">Hola mundo</p>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.pleft-30 {
    padding: 1rem 5rem;
}

.vue-typer {
    font-size: 2rem;
    font-weight: normal;
    .custom.char {
        color: #000;
    }
}

</style>