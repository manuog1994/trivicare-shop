<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb :pageTitle="this.$route.query.category || this.$route.query.tag ? 'Resultados de la búsqueda' : 'Todos los productos' "/>
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

                        <div class="d-flex justify-content-center" v-if="products.length >= perPage || page >= 2">
                            <nav aria-label="...">
                                <ul class="pagination-custom">
                                    <li v-for="pagination_link in pagination.links" :key=" 'pagination_link-' + pagination_link.label" class="page-link-custom"
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

<style>
    .w-10 {
        width: 10px;
    }

    .pagination-custom {
    display: flex;
    padding-left: 0;
    list-style: none;
    }

    .page-link-custom {
    position: relative;
    font-size: 18px;
    display: flex;
    padding: 0 .75rem;
    color: #686868;
    text-decoration: none;
    background-color: #fff;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
    .page-link-custom {
        transition: none;
    }
    }
    .page-link-custom:hover {
    z-index: 2;
    color: orange;
    }
    .page-link-custom:focus {
    z-index: 3;
    color: orange;
    outline: 0;
    }
    .page-link-custom.active {
        color: orange;
    }
    .page-link-custom.disabled {
    color: #a0a0a0;
    }
</style>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            ProductGridItem: () => import("@/components/product/ProductGridItem"),
            QuickView: () => import("@/components/QuickView"),
            TheFooter: () => import("@/components/TheFooter"),
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

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 1000);
            });
            setTimeout(() => {
                this.getProducts();
            }, 1000);
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
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
                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                    setTimeout(() => {
                        this.$nuxt.$loading.finish()
                    }, 500);
                });
                setTimeout(() => {
                    this.getProducts();
                }, 500);
            },

            category() {
                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                    setTimeout(() => {
                        this.$nuxt.$loading.finish()
                    }, 500);
                });
                setTimeout(() => {
                    this.getProducts();
                }, 500);
            },

            tag() {
                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                    setTimeout(() => {
                        this.$nuxt.$loading.finish()
                    }, 500);
                });
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
                    title: this.$route.query.category.charAt(0).toUpperCase()+ this.$route.query.category.slice(1),
                }
            } else if (this.tag) {
                return {
                    title: this.$route.query.tag.charAt(0).toUpperCase()+ this.$route.query.tag.slice(1),
                }
            } else {
                return {
                    title: 'Todos los Productos',
                }
            }
        },

    };
    
</script>
