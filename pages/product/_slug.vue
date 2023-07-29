<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid"/>
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <Breadcrumb :pageTitle="productDetails?.name" />
                <ProductDetailsWrapper :product="productDetails" v-if="productDetails" />
                <ProductDetailsDescriptionReview :product="productDetails" :reviews="productDetails.reviews" v-if="productDetails" />
                <ProductWrapperCosmeticsTwoDetail />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>

    export default {
        auth: false,

        pageTransition: 'slide-fade',

        
        async asyncData({ store, params }) {
            try {
                const productDispatch = await store.dispatch('getProducts', {
                    page: '',
                    category: '',
                    search: '',
                    slug: params.slug,
                    sort: '',
                    tag: '',
                    status: 2
                });
                const productDetails = store.getters.getProducts
                return {
                    productDetails: productDetails?.data[0],
                }


            } catch (error) {
                //console.log(error)
            }
        },

        head() {
            return {
                title: this.productDetails?.name + ' | TriviCare Natural Cosmetics',
                link: [
                    { rel: 'cannonical', href: 'https://trivicare.com/product/'}
                ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.productDetails?.meta_description
                    }
                ],

            }
        },

        
        data() {
            return {
                searchChildren: '',
            }
        },

        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProductDetailsWrapper: () => import('@/components/product/ProductDetailsWrapper'),
            ProductDetailsDescriptionReview: () => import('@/components/ProductDetailsDescriptionReview'),
            ProductWrapperCosmeticsTwoDetail: () => import('@/components/product/ProductWrapperCosmeticsTwoDetail'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
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
