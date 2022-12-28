<template>
    <div class="brand-logo-area pb-100 about-brand-logo d-md-none">
        <div class="container">
            <div class="">
                <h2 class="fs-5">Nuestros Productos</h2>
            </div>
            <div class="brand-logo-active" style="margin-top:20px;">
                <swiper :options="brandLogoCarousel">
                    <div class="single-brand-logo swiper-slide" v-for="product in products" :key="product.id">
                        <a :href="url + '/product/' + product.slug" style="cursor:pointer;">
                            <nuxt-img provider="customProvider" src="default.webp" alt="default" />
                            <p>{{ product.name }}</p>
                        </a>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

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