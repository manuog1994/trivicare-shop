<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" :msg="dataShare" @father="onShopSidebar" />
        <Breadcrumb pageTitle="todos los productos" />
        <!-- product items wrapper -->
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <!-- shop top bar -->
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div class="shop-select">
                                    <select v-model="selectedPrice">
                                        <option value="default">Por defecto</option>
                                        <option value="low2high">Precio de menor a mayor</option>
                                        <option value="high2low">Precio de mayor a menor</option>
                                    </select>
                                </div>
                                <p>Mostrando {{ products.length }} resultados por página</p>
                            </div>
                            <div class="shop-tab">
                                <button @click="layout = 'twoColumn'" :class="{ active : layout === 'twoColumn' }">
                                    <i class="fa fa-th-large"></i>
                                </button>
                                <button @click="layout = 'threeColumn'" :class="{ active : layout === 'threeColumn' }">
                                    <i class="fa fa-th"></i>
                                </button>
                                <button @click="layout = 'list'" :class="{ active : layout === 'list' }">
                                    <i class="fa fa-list-ul"></i>
                                </button>
                            </div>
                        </div>
                        <!-- end shop top bar -->

                        <!-- shop product -->
                        <div class="shop-bottom-area mt-35">
                            <div class="row product-layout" :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                                <div class="col-xl-4 col-sm-6" v-for="product in products" :key="'product-' + product.id" >
                                    <ProductGridItem :product="product" :layout="layout"/> 
                                </div>
                            </div>
                        </div>
                        <!-- end shop product -->

                        <div class="d-flex justify-content-center">
                            <nav aria-label="...">
                                <ul class="pagination">
                                    <li v-for="pagination_link in pagination.links" :key=" 'pagination_link-' + pagination_link.label " class="page-item"
                                    :class="{
                                        'disabled' : pagination_link.url == null,
                                        'active' : pagination_link.active == true
                                    }">
                                        <a class="page-link" v-html="pagination_link.label" style="cursor: pointer;" @click.prevent="changePage(pagination_link.url)"></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar classes="mr-30" :msg="dataShare" @father="onShopSidebar" />
                    </div>
                </div>
            </div>
        </div>
        <!-- end product items wrapper -->
         <QuickView />
        <TheFooter />
    </div>
</template>

<script>

    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProductGridItem: () => import('@/components/product/ProductGridItem'),
            QuickView: () => import('@/components/QuickView'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                products: [],
                layout: "list",
                selectedPrice: 'default',
                categories: [],
                pagination: {},
                dataShare: '',
                msgOfShopSidebar: '',
                resCategory: [],
             }
        },

        mounted() {
            this.getProducts();
            this.getCategories();
        },

        computed: {
            page() {
                let page = this.$route.query.page ?? 1;

                if(page > this.pagination.last_page){
                    this.$router.replace({
                        query: {
                            page: this.pagination.last_page
                        }
                    })
                    this.$router.push();
                    return this.pagination.last_page;
                }

                return page;
            },

        },

        methods: {

            async getProducts() {
                const response = await this.$axios.get('http://api.trivicare.test/v1/products?perPage=5&page=' + this.page + '&included=category&filter[name]=' + this.msgOfShopSidebar + '&filter[category_id]=' + this.resCategory)
                this.products = response.data.data;
                this.pagination = {
                    links: response.data.meta.links,
                    last_page: response.data.meta.last_page,
                    current_page: response.data.meta.current_page
                };
            },


            onShopSidebar(msg) {
                this.msgOfShopSidebar = msg;
            },

            async getCategories() {
                const response = await this.$axios.get('http://api.trivicare.test/v1/categories')
                this.categories = response.data.data
            },

            changePage(url) {
                this.$router.replace({
                    query: {
                        page : url.split('page=')[1]
                    }
                });
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

        },

        watch: {
            page() {
                this.getProducts();
            },

            msgOfShopSidebar() {
                this.getProducts();
            },

            resCategory() {
                this.getProducts();
            },

            selectedPrice(){
                switch (this.selectedPrice) {
                    case "low2high":
                        this.products = this.products.sort((a, b)=> this.discountedPrice(a) - this.discountedPrice(b))
                        break;
                    case "high2low":
                        this.products = this.products.sort((a, b)=> this.discountedPrice(b) - this.discountedPrice(a))
                        break;
                    default:
                        this.getProducts();
                }
            }
        },

        beforeMount(){
            this.$root.$on('send', data => {
                this.resCategory = data;
            })
        },

        head() {
            return {
                title: "Todos los productos",
            }
        },

    };
    
</script>
