<template>
    <!-- product items wrapper -->
    <div class="shop-area pt-3 pt-lg-5 pb-100">
        <div class="container-fluid">
                <div class="row flex-row-reverse">
                <div class="col-lg-9">
                    <!-- shop top bar -->
                    <div class="d-flex flex-column">
                        <div class="d-flex justify-content-end mb-3 d-lg-none">
                            <button class="btn border-dark" @click="openFilter">
                                Filtrar
                                <i class="fa fa-sliders"></i>
                            </button>
                        </div>
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div class="me-4">
                                    <select class="form-select" v-model="selectedPrice">
                                        <option value="default">Por defecto</option>
                                        <option value="low2high">Precio de menor a mayor</option>
                                        <option value="high2low">Precio de mayor a menor</option>
                                    </select>
                                </div>
                                <p>Mostrando {{perPage * currentPage - perPage + 1}} página con {{perPage * currentPage > filterItems.length ? filterItems.length : perPage * currentPage}} de {{filterItems.length}} resultados</p>
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
                    </div>
                    <!-- end shop top bar -->

                    <!-- shop product -->
                    <div class="shop-bottom-area mt-35 p-5">
                        <div class="row product-layout" :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                            <client-only>
                                <div class="col-xl-4 col-sm-6" v-for="product in getItems" :key="'product-' + product.id" >
                                    <ProductGridItem :product="product" :layout="layout"/> 
                                </div>
                            </client-only>
                        </div>
                    </div>
                    <!-- end shop product -->
                    <div class="d-flex justify-content-center mt-2">
                        <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="filterItems.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                    </div>
                </div>
                <div class="col-lg-3">
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

    data() {
        return {
            layout: "list",
            selectedPrice: 'default',
            products: [],
            searchResult: '',
            sortFilter: '',
            unauthorized: false,
            perPage: 10,
            currentPage: 1,
            filterItems: [],
            prevSelectedCategoryName: '',
            prevSelectedTagName: '',
            prevSelectedSizeName: '',
            prevSelectedColorName: '',
            prevSelectedModelName: '',
        }
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.products.slice(start, start + this.perPage)
        },

        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.filterItems.slice(start, end);
        },

        getPaginateCount() {
            return Math.ceil(this.filterItems.length / this.perPage);
        },
    },


    async mounted() {
        await this.getProducts();

        if (this.$route.query.search) {
            this.searchResult = this.$route.query.search;
        }

        var tituloOriginal = document.title; // Lo guardamos para restablecerlo
        window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
        }

        window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
        }
        
        if(this.$axios.onError(error => {
            const code = error.response.status;
            if (code === 401) {
                this.unauthorized = true;
            }
        }));

        await this.updateProductData();

    },

    watch: {
        unauthorized() {
            if (this.unauthorized == true) {
                this.$auth.logout();
            }
        },

        selectedPrice(){
            switch (this.selectedPrice) {
                case "low2high":
                        this.filterItems =  this.filterItems.sort((a, b)=> this.discountedPrice(a) - this.discountedPrice(b))
                        break;
                    case "high2low":
                        this.filterItems =  this.filterItems.sort((a, b)=> this.discountedPrice(b) -  this.discountedPrice(a))
                        break;
                    default:
                        this.filterItems = [...this.products]
            }
        },

        '$route.query.category': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.tag': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.color': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.size': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.model': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.bestsellers': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.news': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        '$route.query.offers': {
            handler: function (val, oldVal) {
                this.updateProductData()
            },
            deep: true
        },

        // currentPage() {
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     })
        // },
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
            this.products = products.data;
        },

        updateProductData(){
                this.paginateClickCallback(1);

                const categoryName = this.$route.query.category;
                const sizeName = this.$route.query.size;
                const colorName = this.$route.query.color;
                const tagName = this.$route.query.tag;
                const modelName = this.$route.query.model;
                const bestsellersName = this.$route.query.bestsellers;
                const newproductsName = this.$route.query.news;
                const discountproductsName = this.$route.query.offers;
                
                if( Object.keys(this.$route.query).length === 0){
                    this.filterItems = [...this.products]
                }
                
                if(categoryName && this.prevSelectedCategoryName !== categoryName){
                    if(Boolean(categoryName) === false || categoryName === this.slugify("todas")){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products?.filter((item) => this.slugify(item.category.name).includes(categoryName));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }
        
                if(colorName && this.prevSelectedColorName !== colorName){
                    if(Boolean(colorName) === false || colorName === this.slugify("todos")){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products?.filter((item) => item.variations?.some((variation) => this.slugify(variation.color).includes(colorName)));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }

                if(sizeName && this.prevSelectedSizeName !== sizeName){
                    if(Boolean(sizeName) === false || sizeName === this.slugify("all sizes")){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products?.filter((item) => item.variations?.some((variation) => this.slugify(variation.size).includes(sizeName)));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }
            
                if(tagName && this.prevSelectedTagName !== tagName){
                    if(tagName){
                        const resultData = this.products?.filter((item) => {
                            return item.tags?.some((tag) => this.slugify(tag.slug).includes(tagName))
                        });
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    else {
                        this.filterItems = [...this.products]
                    } 
                }

                if(modelName && this.prevSelectedModelName !== modelName){
                    if(modelName){
                        const resultData = this.products?.filter((item) => item.variations?.some((variation) => this.slugify(variation.model).includes(modelName)));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    else {
                        this.filterItems = [...this.products]
                    } 
                }


                if(bestsellersName && this.prevSelectedTagName !== bestsellersName){
                    if(bestsellersName){
                        const resultData = this.products?.filter((item) => item.best_seller === 1);
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    else {
                        this.filterItems = [...this.products]
                    } 
                }

                if(newproductsName && this.prevSelectedTagName !== newproductsName){
                    if(newproductsName){
                        const resultData = this.products?.filter((item) => item.new === 'Nuevo');
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    else {
                        this.filterItems = [...this.products]
                    } 
                }

                if(discountproductsName && this.prevSelectedTagName !== discountproductsName){
                    if(discountproductsName){
                        const resultData = this.products?.filter((item) => item.discount > 0);
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    else {
                        this.filterItems = [...this.products]
                    } 
                }
                
                this.prevSelectedCategoryName = categoryName;
                this.prevSelectedColorName = colorName;
                this.prevSelectedSizeName = sizeName;
                this.prevSelectedTagName = tagName;
                this.prevSelectedModelName = modelName;
                this.prevSelectedBestsellersName = bestsellersName;
                this.prevSelectedNewproductsName = newproductsName;
                this.prevSelectedDiscountproductsName = discountproductsName;

                this.getProducts();
            },

        discountedPrice(product) {
            return product.price_base - (product.price_base * product.discount / 100)
        },

        paginateClickCallback(page) {
            this.currentPage = Number(page);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },

        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w-]+/g, "") // Remove all non-word chars
                .replace(/--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, ""); // Trim - from end of text
        },

        openFilter() {
            document.getElementById('filterMobile').classList.toggle('active');
        },

    },

    head() {
        if (this.category) {
            return {
                titleTemplate: this.$route.query.category.charAt(0).toUpperCase()+ this.$route.query.category.slice(1) + ' | TriviCare Natural Cosmetics',
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
                title: this.$route.query.tag.charAt(0).toUpperCase()+ this.$route.query.tag.slice(1) + ' | TriviCare Natural Cosmetics',
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
                titleTemplate: 'Todos los Productos | TriviCare Natural Cosmetics',
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