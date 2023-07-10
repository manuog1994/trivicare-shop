<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider bg-img pt-0" :style="{ backgroundImage:`url(${slider.backgroundImage})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-13 slider-animation-1 p-4 p-xl-0">
                                <h5 class="text-white">{{ slider.subTitle }}</h5>
                                <h1 class="text-white" v-html="slider.title"></h1>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">Ver ahora</n-link>
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

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
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
                        subTitle: "Este verano",
                        title: "Cuidate <br> con TriviCare",
                        backgroundImage: "/img/banner-summer.webp"
                    },
                ]
            }
        },
    };
</script>