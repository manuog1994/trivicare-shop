<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <div class="col-12 col-md-6 bg-gray d-flex flex-column justify-content-center p-3 p-lg-0">
                <div class="text-center mb-5">
                    <h2>Valoraciones de nuestros clientes</h2>
                    <p class="lead">Aquí os mostramos las opiniones que nos dan nuestros clientes.</p>
                </div>
                <!-- Carrousel de bootstrap con autoplay -->
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="(review, idx) in reviews" :key="review.id"  :class="{'active': idx === 0 }">
                            <div class="text-center">
                                <h3>{{ review.product?.name }}</h3>
                                <p class="pt-0 mt-0 ps-5 pe-5"><strong>{{ review.user_name }} {{ review.user_lastname }}</strong></p>
                                <p class="pt-0 mt-0 ps-5 pe-5">{{ review.message }}</p>
                                <div class="d-flex justify-content-center">
                                    <vue-star-rating :star-size="50" :read-only="true" :show-rating="false" :rating="review.rating"></vue-star-rating>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon text-bg-dark" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-bg-dark" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> -->
                </div>
            </div>
            <div class="col-12 col-md-6 p-0">
                <nuxt-img provider="customProvider" src="storage/campain/foto-modelo-testimonios.webp" alt="Modelo con crema aplicada" width="100%" height="100%" loading="lazy" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [],
        }
    },

    async mounted() {
        await this.$axios.get('/api/reviews').then(response => {
            this.reviews = response.data.reviews;
        });
    },
}
</script>