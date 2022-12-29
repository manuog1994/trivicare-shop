<template>
    <div class="brand-logo-area about-brand-logo d-md-none mb-3">
        <div class="container">
            <div>
                <h2 class="fs-5">Nuestros Productos</h2>
            </div>
            <div class="brand-logo-active" style="margin-top:20px;">
                <swiper :options="brandLogoCarousel">
                    <div class="single-brand-logo swiper-slide" v-for="product in products" :key="product.id">
                        <a :href="url + '/product/' + product.slug" style="cursor:pointer;">
                            <nuxt-img provider="customProvider" src="default.webp" alt="default" width="100px" />
                            <p class="display-min">{{ product.name }}</p>
                            <p class="display-min" style="margin-top:-15px;">
                                <strong>{{ product.price }} &euro;</strong>
                            </p>
                        </a>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.display-min {
    @media only screen and (max-width: 320px) {
        display: none;
    }
}
</style>

<script>
    export default {
        data() {
            return {
                brandLogoCarousel: {
                    loop: true,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 5,
                    autoplay: true,

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        }
                    },

                },
                products: [],
                url: process.env.url,
            }
        },

        mounted() {
            this.getProducts()
        },

        methods: {
            async getProducts() {
                await this.$store.dispatch('getProducts', {
                    perPage: '',
                    page: '',
                    category: '',
                    search: '',
                    slug: '',
                    sort: '',
                    tag: '',
                    status: 2,
                })
                const products = this.$store.getters.getProducts
                this.products = products.data
            },
        }
    };
</script>