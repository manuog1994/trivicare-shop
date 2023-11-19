<template>
    <div class="container-fluid mb-5 bg-dark">
        <div class="product-area">
            <div class="ps-lg-5 pe-lg-5 pb-5">
                <div class="text-center pt-3">
                    <h2 class="text-white">OFERTAS BLACK WEEK 🔥</h2>
                    <p class="text-white lead m-0">Los descuentos más esperados del año.</p>
                </div>
                <div class="brand-logo-active mt-5">
                    <swiper :options="brandLogoCarousel">
                        <div class="single-brand-logo swiper-slide" v-for="(product, index) in bW" :key="index">
                            <ProductGridItemTwoBW :product="product" />
                        </div>
                    </swiper>
                    <!-- Boton ver más -->
                    <div class="d-flex justify-content-center">
                        <n-link class="btn-more bg-danger" to="/shop?tag=black-week">VER MÁS</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        components: {
            ProductGridItemTwoBW: () => import('@/components/product/ProductGridItemTwoBW'),
        },

        data() {
            return {
                products: [],
                bestSold: [],
                newsProducts: [],
                bW: [],

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
                this.blackWeek();
            },

            blackWeek() {
                const bw = this.products.filter((item) => {
                    // Si el item tiene el tag black-week se guarda en el array
                    if (item.tags.find(tag => tag.name == 'Black Week')) {
                        this.bW.push(item)
                    }
                });
            }
        }
    };
</script>