<template>
    <div class="container-fluid mb-5">
        <div class="product-area">
            <div class="ps-lg-5 pe-lg-5 pb-5">
                <div class="text-center pt-3">
                    <h2>Más Vendidos 🔥</h2>
                    <p class=" lead m-0">Los productos bestsellers en cosmética natural.</p>
                </div>
                <div class="brand-logo-active mt-5">
                    <swiper :options="brandLogoCarousel">
                        <div class="single-brand-logo swiper-slide" v-for="(product, index) in bestSold" :key="index">
                            <ProductGridItemTwo :product="product" />
                        </div>
                    </swiper>
                    <!-- Boton ver más -->
                    <div class="d-flex justify-content-center">
                        <n-link class="btn-more" to="/shop?bestsellers=todos">VER MÁS</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        components: {
            ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
        },

        data() {
            return {
                products: [],
                bestSold: [],
                newsProducts: [],

                brandLogoCarousel: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 4,
                    autoplay: true,

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 150,
                        }
                    }
                },
            };
        },

        async mounted() {
            await this.getProducts();
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
                    status: 2
                })
                const products = this.$store.getters.getProducts
                this.products = products.data
                this.bestSales();
            },

            bestSales() {
                const best = this.products.filter((item) => this.bestSold.push(item));
            }
        }
    };
</script>