<template>
    <div class="container-fluid">
        <div class="mt-5 mt-lg-0 mb-5 mb-lg-0 p-lg-3 m-lg-5">
            <div class="text-center mt-3 mb-2">
                <h1 class="h2-style">Cosmética natural con ingredientes ecológicos y sostenibles 🌱</h1>
            </div>
            <div class="text-center mb-4">
                <p class="lead">Las mejores cremas y serums naturales para el cuidado de tu piel</p>
            </div>
            <div class="brand-logo-active">
                <swiper :options="brandLogoCarousel">
                    <div class="single-brand-logo swiper-slide" v-for="icon in icons">
                        <nuxt-img provider="customProvider" :src="icon.src" :alt="icon.title"/>
                    </div>
                </swiper>
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
                    src: 'storage/icons/1.webp',
                    title: 'Cruelty Free',
                },
                {
                    src: 'storage/icons/2.webp',
                    title: 'Ecológicos',
                },
                {
                    src: 'storage/icons/3.webp',
                    title: 'Veganos',
                },
                {
                    src: 'storage/icons/4.webp',
                    title: 'Sin parabenos',
                },
            ],

            brandLogoCarousel: {
                loop: true,
                slidesPerView: 4,

                // Responsive breakpoints
                breakpoints: {
                    320: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 250,
                    }
                }
            }
        };
    },
}
</script>

<style scoped>
.h2-style{
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 1.2;
    color: #000;
    margin-bottom: 0;
}
</style>