<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" v-once class="slider-height-1 d-md-flex align-items-md-center pt-0 image-back">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-13 p-xl-0">
                                <p class="h1-style" :class="slider.textColor" v-html="slider.title"></p>
                                <p class="subtitle-index" :class="slider.textSubColor" v-html="slider.subTitle"></p>
                                <!-- <div class="slider-btn btn-hover">
                                    <n-link :to="slider.link">Ver Productos</n-link>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            
            <!-- Swiper Navigation Start -->
            <!-- <div class="hero-slider-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div> -->
            <!-- Swiper Navigation End -->
        </swiper>

    </div>
</template>

<style lang="scss" scoped>
.image-back{
    background-image: url("/img/banner-lorena-2.webp");
    
    @media #{$xx-layout}{
        background-image: url("/img/banner-lorena-2-1500.webp");
    }
    @media #{$xl-layout}{
        background-image: url("/img/banner-lorena-2-1500.webp");
    }
    @media #{$lg-layout}{
        background-image: url("/img/banner-lorena-2-1500.webp");
    }
    @media #{$md-layout}{
        background-image: url("/img/banner-lorena-2-1000.webp");
    }
    @media #{$xs-layout}{
        background-image: url("/img/banner-lorena-2-700.webp");
        background-position-y: -60px;
    }
    @media #{$xxs-layout}{
        background-image: url("/img/banner-lorena-2-700.webp");
        background-position-y: 0;
    }
    @media #{$min-layout}{
        background-image: url("/img/banner-lorena-2-700.webp");
        background-position-y: 0;
        height: 50vh;
    }
}

.text-h1-res {
    font-size: 15px !important;
}

</style>

<script>
    export default {

        data() {
            return {
                swiperOption: {
                    // loop: true,
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
                        title: "Cosmética Natural sin complicaciones",
                        subTitle: "Te ayudamos con una rutina facial y corporal sencilla y efectiva",
                        link: "/shop",
                        textColor: "text-h1-rs",
                        textSubColor: ""
                    },
                ],
            };
        },
    };
</script>