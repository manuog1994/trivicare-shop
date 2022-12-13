<template>
    <div class="slider-area nav-style-1 nav-style-3">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="slider-height-5 d-flex align-items-center bg-img" :style="{ backgroundImage:`url(${slider.backgroundImage})`}">
                <div class="container bg-slider-img">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-4 slider-content-6 slider-animation-1 text-center">
                                <h1 class="text-dark">{{ slider.title }}</h1>
                                <p class="text-dark">{{ slider.desc }}</p>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">COMPRAR AHORA</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<style>
    .bg-slider-img {
        background-color: #f5f5f5a3;
        padding: 8rem 5rem;
    }
</style>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 750,
                    autoplay: {
                        delay: 6000
                    },
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                sliderData: [
                    {
                        title: "Bienvenid@ a TriviCare",
                        desc: "Queremos cuidar de tu piel, con toda nuestra gama de productos",
                        backgroundImage: "/img/slider/slider1-1.png"
                    },
                    {
                        title: "Oferta de Inauguración",
                        desc: "10% de descuento en tu compra con el cupón 'TRIVICARE10' solo hasta el 31 de Diciembre",
                        backgroundImage: "/img/slider/slider1-2.png"
                    }
                ]
            }
        }
    };
</script>