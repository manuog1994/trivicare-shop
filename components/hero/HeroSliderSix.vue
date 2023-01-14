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
            <p class="img-mobile">
                <span class="bg-span">
                    <img src="@/static/campain/TriviCare_byn Positivo.svg" alt="" width="200" style="margin-bottom: 20px">
                    <br>
                    <strong>Estamos de Inauguración</strong>
                    <br>
                    <span>Descubre nuestro catálogo</span>
                </span>
                <n-link class="btn-mobile" to="/shop">Ver Productos</n-link>
            </p>
        </div>
    </div>
</template>

<style>
    p.img-mobile {
        width: 100%;
        background: url('@/static/campain/aloegranada.webp');
        padding: 5rem 0;
        font-size: 22px;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .bg-span {
        background-color: #ffffffdc;
        color: rgb(73, 73, 73);
        font-size: 24px;
        padding: 3rem 0;
        margin: 15px;
    }

    .btn-mobile {
        background-color: white;
        padding: 10px 10px;
        margin: 25px;
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
                        title: "Cuídate con TriviCare",
                        desc: "Descubre nuestra gama de productos para mimar tu piel",
                        backgroundImage: "https://api.trivicare.com/nuxt/slider1-1.webp",
                        backgroundImageTwo: "https://api.trivicare.com/nuxt/slider1-1.webp"
                    },
                ]
            }
        }
    };
</script>