<template>
    <div class="container bg-light pt-3 pb-3 mb-5 shadow">
        <div class="text-center mb-4">
            <h2>Cada día más sostenibles</h2>
            <p class="lead">Trabajamos cada día para ofrecer los mejores productos con los ingredientes más ecológicos y sostenibles</p>
        </div>
        <div class="row">
            <div class="col-6 col-md-3" v-for="(icon, index) in icons" :key="index">
                <div class="text-center">
                    <div class="mb-2 mb-md-0">
                        <nuxt-img provider="customProvider" :src="icon.src" :alt="icon.title" :title="icon.title" width="120" height="120"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            icons: [
                {
                    src: 'icons/1.webp',
                    title: 'Cruelty Free',
                },
                {
                    src: 'icons/2.webp',
                    title: 'Ecológicos',
                },
                {
                    src: 'icons/3.webp',
                    title: 'Veganos',
                },
                {
                    src: 'icons/4.webp',
                    title: 'Sin parabenos',
                },
            ],
        };
    },
}
</script>

<style>

</style>