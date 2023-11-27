<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <div class="col-12 bg-cybermonday d-flex flex-column justify-content-center p-5">
                <div class="text-center mb-4">
                    <h2 class="text-white">
                        <i>¿Qué opinan nuestros clientes?</i>
                    </h2>
                    <p class="lead text-white">
                        <i>Para nosotros son muy importante vuestras reseñas.</i>
                    </p>
                </div>
                <!-- Swiper carrousel -->
                <div class="brand-logo-active">
                    <swiper :options="brandLogoCarousel">
                        <div class="single-brand-logo swiper-slide" v-for="(review, index) in reviews" :key="index">
                            <div class="text-center">
                                <h3 class="text-white">
                                    <i>{{ review.product?.name }}</i>
                                </h3>
                                <p class="pt-0 mt-0 ps-5 pe-5 text-white">
                                    <strong>
                                        <i>{{ review.user_name }} {{ review.user_lastname }}</i>
                                    </strong>
                                </p>
                                <p class="pt-0 mt-0 ps-5 pe-5 text-white">
                                    <i>{{ review.message }}</i>
                                </p>
                                <div class="d-flex justify-content-center">
                                    <vue-star-rating :star-size="40" :read-only="true" :show-rating="false" :rating="review.rating"></vue-star-rating>
                                </div>
                            </div>
                        </div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [],

            brandLogoCarousel: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    autoplay: true,
                },
        }
    },

    async mounted() {
        await this.$axios.get('/api/reviews').then(response => {
            this.reviews = response.data.reviews;
        });
    },
}
</script>