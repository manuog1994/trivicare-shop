<template>
    <div class="shop-page-wrapper">
        <Loading v-if="showHideSpinner" />
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb :pageTitle="this.$route.query.category ?? 'todos los productos' " />
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
                                    <li v-for="pagination_link in pagination.links" :key=" 'pagination_link-' + pagination_link.label" class="page-item"
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
                        <ShopSidebar classes="mr-30" @search="searchFilter"/>
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
        auth: false,
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            ProductGridItem: () => import("@/components/product/ProductGridItem"),
            QuickView: () => import("@/components/QuickView"),
            TheFooter: () => import("@/components/TheFooter"),
            Loading: () => import("@/components/Loading"),
        },

        data() {
            return {
                layout: "list",
                selectedPrice: 'default',
                pagination: {},
                showHideSpinner: true,
                products: [],
                searchResult: '',
                sortFilter: '',
                category_slug: '',
                category_id: '',
                tag_slug: '',
                tag_id: '',
            }
        },

        beforeCreate() {
            this.showHideSpinner = true;
        },

        mounted() {
            this.getProducts();
            this.showHideSpinner = false;
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

            categories() {
                return this.$store.getters.getCategories;
            },

            tags() {
                return this.$store.getters.getTags;
            },

            tag() {
                let tagSlug = this.$route.query.tag;

                this.tags.forEach(tag => {
                    if(tag.slug == tagSlug){
                        this.tag_slug = tag.slug;
                        this.tag_id = tag.id;
                    }
                });
                
                if(tagSlug == this.tag_slug){
                    return this.tag_id;
                }
                
                return this.$route.query.tag ?? '';
                
            },

            category() {
                let categorySlug = this.$route.query.category;

                this.categories.forEach(category => {
                    if(category.slug == categorySlug){
                        this.category_slug = category.slug;
                        this.category_id = category.id;
                    }
                });
                
                if(categorySlug == this.category_slug){
                    return this.category_id;
                }
                
                return this.$route.query.category ?? '';
                
            },

        },

        methods: {
            async getProducts() {
                await this.$store.dispatch('getProducts', {
                    page: this.page,
                    category: this.category,
                    search: this.searchResult,
                    slug: '',
                    sort: this.sortFilter,
                    tag: this.tag,
                })
                const products = this.$store.getters.getProducts
                this.products = products.data
                const paginations = this.$store.getters.getProducts
                this.pagination = {
                    links: paginations['meta'].links,
                    current_page: paginations['meta'].current_page,
                    last_page: paginations['meta'].last_page,
                }
            },

            async getCategories() {
                await this.$store.dispatch('getCategories')
            },

            async getTags() {
                await this.$store.dispatch('getTags')
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

            searchFilter(value) {
                this.searchResult = value;
                this.getProducts();
            },


        },

        watch: {
            page() {
                this.getProducts();
            },

            category() {
                this.getProducts();
            },

            tag() {
                this.getProducts();
            },

            selectedPrice(){
                switch (this.selectedPrice) {
                    case "low2high":
                        this.sortFilter = 'price_discount';
                        this.getProducts();
                        break;
                    case "high2low":
                        this.sortFilter = '-price_discount';
                        this.getProducts();
                        break;
                    default:
                        this.sortFilter = ''
                        this.getProducts();
                }
            }
        },

        head() {
            return {
                title: this.category ? this.$route.query.category.charAt(0).toUpperCase()+ this.$route.query.category.slice(1) : 'Todos los Productos',
            }
        },

    };
    
</script>
