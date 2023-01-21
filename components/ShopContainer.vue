<template>
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
                            <div class="shop-select-2">
                                <p>Mostrando
                                <select class="ms-2 me-2 w-auto" v-model="selectedQuantity">
                                    <option value="default">5</option>
                                    <option value="teen">10</option>
                                    <option value="fiveteen">15</option>
                                </select>
                                resultados por página</p>
                            </div>
                        </div>
                        <div class="shop-tab d-none d-md-block">
                            <button @click="layout = 'twoColumn'" :class="{ active : layout === 'twoColumn' }" title="Ver dos productos por fila">
                                <i class="fa fa-th-large"></i>
                            </button>
                            <button @click="layout = 'threeColumn'" :class="{ active : layout === 'threeColumn' }" title="Ver tres productos por fila">
                                <i class="fa fa-th"></i>
                            </button>
                            <button @click="layout = 'list'" :class="{ active : layout === 'list' }" title="Ver un solo producto por fila">
                                <i class="fa fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- end shop top bar -->

                    <!-- shop product -->
                    <div class="shop-bottom-area mt-35">
                        <div class="row product-layout" :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                            <client-only>
                                <div class="col-xl-4 col-sm-6" v-for="product in products" :key="'product-' + product.id" >
                                    <ProductGridItem :product="product" :layout="layout"/> 
                                </div>
                            </client-only>
                        </div>
                    </div>
                    <!-- end shop product -->

                    <div class="d-flex justify-content-center" v-if="products.length >= perPage || page >= 2">
                        <nav aria-label="...">
                            <ul class="pagination-custom">
                                <client-only>
                                    <li v-for="pagination_link in pagination.links" :key=" 'pagination_link-' + pagination_link.label" class="page-link-custom"
                                    :class="{
                                        'disabled' : pagination_link.url == null,
                                        'active' : pagination_link.active == true
                                    }">
                                        <a class="page-link" v-html="pagination_link.label" style="cursor: pointer;" @click.prevent="changePage(pagination_link.url)"></a>
                                    </li>
                                </client-only>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-md-block">
                    <ShopSidebar classes="mr-30"/>
                </div>
            </div>
        </div>
    </div>
    <!-- end product items wrapper -->
</template>

<script>
export default {

    components: {
        ShopSidebar: () => import('@/components/ShopSidebar'),
        ProductGridItem: () => import('@/components/product/ProductGridItem'),
    },

    mounted() {
        setTimeout(() => {
            this.getProducts();
        }, 1000);
        if (this.$route.query.search) {
            this.searchResult = this.$route.query.search;
        }
    },

    data() {
        return {
            layout: "list",
            selectedPrice: 'default',
            selectedQuantity: 'default',
            pagination: {},
            products: [],
            searchResult: '',
            sortFilter: '',
            category_slug: '',
            category_id: '',
            tag_slug: '',
            tag_id: '',
            perPage: 5,
        }
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
            
            return '';
            
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
            
            return '';
            
        },

    },

    methods: {
        async getProducts() {
            await this.$store.dispatch('getProducts', {
                perPage: this.perPage,
                page: this.page,
                category: this.category,
                search: '',
                slug: '',
                sort: this.sortFilter,
                tag: this.tag,
                status: 2,
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
            return product.price_base - (product.price_base * product.discount / 100)
        },

    },

    watch: {
        page() {
            setTimeout(() => {
                this.getProducts();
            }, 500);
        },

        category() {
            setTimeout(() => {
                this.getProducts();
            }, 500);
        },

        tag() {
            setTimeout(() => {
                this.getProducts();
            }, 500);
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
        },

        selectedQuantity(){
            switch (this.selectedQuantity) {
                case "fiveteen":
                    this.perPage = 15;
                    this.$nextTick(() => {
                        this.$nuxt.$loading.start()
                        setTimeout(() => {
                            this.$nuxt.$loading.finish()
                        }, 500);
                    });
                    setTimeout(() => {
                        this.getProducts();
                    }, 500);
                    break;
                case "teen":
                    this.perPage = 10;
                    this.$nextTick(() => {
                        this.$nuxt.$loading.start()
                        setTimeout(() => {
                            this.$nuxt.$loading.finish()
                        }, 500);
                    });
                    setTimeout(() => {
                        this.getProducts();
                    }, 500);
                    break;
                default:
                this.perPage = 5;
                this.$nextTick(() => {
                        this.$nuxt.$loading.start()
                        setTimeout(() => {
                            this.$nuxt.$loading.finish()
                        }, 500);
                    });
                    setTimeout(() => {
                        this.getProducts();
                    }, 500);
            }
        },

        '$route.query.category'() {
            this.category_slug = '';
            this.category_id = '';
        },

        '$route.query.tag'() {
            this.tag_slug = '';
            this.tag_id = '';
        },
    },

    head() {
        if (this.category) {
            return {
                titleTemplate: this.$route.query.category.charAt(0).toUpperCase()+ this.$route.query.category.slice(1),
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/shop' }
                // ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Tenemos una gran variedad de productos naturales y ecológicos para ti, elige el que más te guste y disfruta de la mejor calidad.'
                    }
                ],
            }
        } else if (this.tag) {
            return {
                title: this.$route.query.tag.charAt(0).toUpperCase()+ this.$route.query.tag.slice(1),
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Tenemos una gran variedad de productos naturales y ecológicos para ti, elige el que más te guste y disfruta de la mejor calidad.'
                    }
                ],
            }
        } else {
            return {
                title: 'Todos los Productos',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Tenemos una gran variedad de productos naturales y ecológicos para ti, elige el que más te guste y disfruta de la mejor calidad.'
                    }
                ],
            }
        }
    },


}
</script>

<style>

</style>