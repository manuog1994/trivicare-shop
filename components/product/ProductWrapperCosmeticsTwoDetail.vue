<template>
    <div class="container-fluid mb-5">
        <div class="product-area">
            <div class="ps-lg-5 pe-lg-5 pb-5">
                <div class="pt-3">
                    <h2>Productos que te pueden interesar 🤔</h2>
                </div>
                <div class="brand-logo-active mt-5">
                    <swiper :options="brandLogoCarousel">
                        <div class="single-brand-logo swiper-slide" v-for="(product, index) in newsProducts" :key="index">
                            <ProductGridItemTwo :product="product" />
                        </div>
                    </swiper>
                    <!-- Boton ver más -->
                    <div class="d-flex justify-content-start">
                        <n-link class="btn-more" to="/shop?news=todos">Ver más productos</n-link>
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
                this.lastProducts();
                this.bestSales();
            },


            lastProducts() {
                const allProducts = this.products.map((item) => {
                    return item;
                });
                const idProducts = this.products.map((item) => {
                    if (item.status === 'Publicado'){
                        return item.id;
                    }
                });
                idProducts.sort((a, b) => b - a);

                const lastIdProducts = idProducts.slice(0, 4);

                const lastFourProducts = allProducts.filter((item) => {
                    return lastIdProducts.includes(item.id);
                });

                lastFourProducts.sort((a, b) => b.id - a.id);
                this.newsProducts = lastFourProducts;

            },

            bestSales() {
                const best = this.products.map((item) => {
                    return item.sold;
                });
                best.sort((a, b) => b - a);
                const bestSold = best.slice(0, 4);

                const allProducts = this.products.map((item) => {
                    return item;
                });

                const bestProducts = allProducts.filter((item) => {
                    return bestSold.includes(item.sold);
                });
                
                bestProducts.sort((a, b) => b.sold - a.sold);
                
                if(bestProducts?.length > 4) {
                    this.bestSold = this.newsProducts;
                } else {
                    this.bestSold = bestProducts;
                }
            }
        }
    };
</script>