<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid"/>
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <ProductDetailsWrapper :product="product" v-if="product" />
                <ProductDetailsDescriptionReview :product="product" :reviews="reviews" v-if="product" />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>

    export default {
        auth: false,

        pageTransition: 'slide-fade',

        
        data() {
            return {
                slug: this.$route.params.slug,
                product: '',
                reviews: [],
                searchChildren: '',
            }
        },

        head() {
            return {
                titleTemplate: this.product.name || 'Producto' + ' | TriviCare Natural Cosmetics',
                link: [
                    { rel: 'cannonical', href: 'https://trivicare.com/product/'}
                ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.product.meta_description
                    }
                ],

            }
        },

        beforeMount() {
            this.getProducts()
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
         },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },

            async getProducts() {
                await this.$store.dispatch('getProducts', {
                    page: '',
                    category: '',
                    search: '',
                    slug: this.slug,
                    sort: '',
                    tag: '',
                    status: 2
                })
                const products = this.$store.getters.getProducts
                this.product = products.data[0]
                this.reviews = products.data[0].reviews
            },

            searchOpacity(searchFather) {
                if (searchFather == true) {
                    document.getElementById("post-nav").classList.add("search-screen");
                } else {
                    document.getElementById("post-nav").classList.remove("search-screen");
                }
            }
        },

    };
</script>
