<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider bg-img pt-0" :style="{ backgroundImage:`url(${slider.backgroundImage})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-13 slider-animation-1 p-4 p-xl-0">
                                <span :class="slider.textColor">{{ slider.subTitle }}</span>
                                <h1 :class="slider.textColor" v-html="slider.title"></h1>
                                <div class="slider-btn btn-hover">
                                    <n-link :to="slider.link">Ver ahora</n-link>
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
        <CountDown />
    </div>
</template>

<script>
    export default {

        components: {
            CountDown: () => import("@/components/Countdown.vue"),
        },

        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    lazy: true,
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
                        subTitle: "Hasta el 31 de Agosto",
                        title: "Aprovecha <br> nuestras ofertas",
                        backgroundImage: "/img/ofertas-verano.webp",
                        link: "/shop?offers=todas",
                        textColor: "text-dark"
                    },
                    {
                        subTitle: "Este verano",
                        title: "Cuidate <br> con TriviCare",
                        backgroundImage: "/img/banner-summer.webp",
                        link: "/shop",
                        textColor: "text-white"
                    },
                ],
            };
        },
    };
</script>