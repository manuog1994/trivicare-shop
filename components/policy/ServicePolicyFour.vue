<template>
    <div class="container-fluid mb-5">
        <div class="support-area">
            <div class="pt-3 pb-3">
                <div class="text-center">
                    <h2>¿Necesita asesoramiento?</h2>
                    <p class="lead m-0">Estamos siempre a su disposición, via email o WhatsApp</p>
                </div>
                <!-- <div class="row">
                    <div class="col-lg-4 col-sm-6" v-for="(policy, index) in policies" :key="index">
                        <div class="support-wrap-2 support-padding-2 mb-30 text-center">
                            <div class="support-content-2">
                                <div class="support-icon">
                                    <nuxt-img loading="lazy" class="animated" provider="customProvider" :src="'nuxt/' + policy.icon" :alt="policy.title"/>
                                </div>
                                <div class="support-content">
                                    <h5>{{ policy.title }}</h5>
                                    <p>{{ policy.subTitle }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="brand-logo-active">
                    <swiper :options="brandLogoCarousel">
                        <div class="single-brand-logo swiper-slide" v-for="(policy, index) in policies" :key="index">
                            <div class="support-wrap-2 support-padding-2 mb-30 text-center">
                                <div class="support-content-2">
                                    <div class="support-icon">
                                        <nuxt-img loading="lazy" class="animated" provider="customProvider" :src="'nuxt/' + policy.icon" :alt="policy.title"/>
                                    </div>
                                    <div class="support-content">
                                        <h5>{{ policy.title }}</h5>
                                        <p>{{ policy.subTitle }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.policy-icons{
    width: 80px;
    height: auto;
    margin: auto;
}
</style>

<script>
    export default {
        data() {
            return {
                policies: [
                {
                        icon: "support-1.webp",
                        title: "Envío gratis",
                        subTitle: "Envío gratis en pedidos superiores a 50€ (Península y Baleares)"
                    },
                    {
                        icon: "support-2.webp",
                        title: "Atención al cliente",
                        subTitle: "Atención al cliente personal y profesional"
                    },
                    {
                        icon: "support-4.webp",
                        title: "Fabricados en España",
                        subTitle: "Nuestros productos estan fabricados en España"
                    },
                ],

                brandLogoCarousel: {
                    loop: true,
                    slidesPerView: 3,

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            speed: 750,
                            autoplay: true,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            speed: 750,
                            autoplay: true,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 250,
                        }
                    }
                }
            }
        },
    };
</script>
