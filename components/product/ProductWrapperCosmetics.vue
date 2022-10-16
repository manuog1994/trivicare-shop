<template>
    <div>
        <div class="product-area pt-95 pb-95">
            <div class="container">
                <ul class="nav product-tab-list-2 pb-55">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#sale-product" role="tab">Más Vendidos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#new-product" role="tab">Últimos Productos Añadidos</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade" id="new-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in newsProducts" :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade show active" id="sale-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in bestSold" :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="view-more text-center mt-20 toggle-btn2">
                        <n-link to="/shop" class="loadMore2">VER MÁS PRODUCTOS</n-link>
                    </div>
                </div>
            </div>
        </div>
        <QuickView />
    </div>

</template>

<script>
    export default {
        components: {
            ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
            QuickView: () => import('@/components/QuickView'),
        },

        data() {
            return {
                products: [],
                bestSold: [],
                newsProducts: [],
            };
        },

        mounted() {
            setTimeout(() => {
                this.getProducts();
            }, 2000);

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
                })
                const products = this.$store.getters.getProducts
                this.products = products.data
                this.bestSales();
                this.lastProducts();
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

                this.bestSold = bestProducts;
            },

            lastProducts() {
                const allProducts = this.products.map((item) => {
                    return item;
                });
                const idProducts = this.products.map((item) => {
                    return item.id;
                });
                idProducts.sort((a, b) => b - a);

                const lastIdProducts = idProducts.slice(0, 4);

                const lastFourProducts = allProducts.filter((item) => {
                    return lastIdProducts.includes(item.id);
                });

                lastFourProducts.sort((a, b) => b.id - a.id);
                this.newsProducts = lastFourProducts;

            }
        }
    };
</script>