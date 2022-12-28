<template>
    <div>
        <div class="slider-area nav-style-1 nav-style-3">
            <swiper :options="swiperOption" class="d-none d-md-block">
                <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="slider-height-5 d-flex align-items-center bg-img" :style="{ backgroundImage:`url(${slider.backgroundImage})`}" style="width:100%;">
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
            <!-- <div id="carouselExampleSlidesOnly" class="carousel slide d-md-none" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <nuxt-img provider="customProvider" class="d-block" src="slider1-1.webp" width="550px" alt="logo" />
                    </div>
                    <div class="carousel-item">
                        <nuxt-img provider="customProvider" class="d-block" src="slider1-2.webp" width="550px" alt="logo" />
                    </div>
                </div>
            </div> -->
        </div>
        <div class="d-md-none">
            <img class="img-mobile" src="/campain/Trivicarenavidad.webp" alt="Banner">
        </div>
    </div>
</template>

<style>
    .img-mobile {
        width: 100%;
    }
    
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
                        backgroundImage: "https://api.trivicare.com/nuxt/slider1-1.webp",
                        backgroundImageTwo: "https://api.trivicare.com/nuxt/slider1-1.webp"
                    },
                    {
                        title: "Oferta de Inauguración",
                        desc: "10% de descuento en tu compra con el cupón 'TRIVICARE10' solo hasta el 31 de Diciembre",
                        backgroundImage: "https://api.trivicare.com/nuxt/slider1-2.webp",
                        backgroundImageTwo: "https://api.trivicare.com/nuxt/slider1-2.webp"
                    }
                ]
            }
        }
    };
</script>