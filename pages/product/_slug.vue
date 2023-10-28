<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <NavBottom />
            <HeaderWithTopbar containerClass="container-fluid"/>
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
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
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'serum facial, crema hidratante ultrahidratante, crema hidratante, crema hidratante facial, crema natural, serum natural, crema hidratante natural, serum hidratante, serum hidratante natural, serum hidratante facial, serum hidratante, crema con acido hialuronico, serum con acido hialuronico, crema con acido hialuronico natural, serum con acido hialuronico natural, crema con acido hialuronico facial, serum con acido hialuronico facial, crema con acido hialuronico natural facial, serum con acido hialuronico'
                    },
                    {
                        hid: 'author',
                        name: 'author',
                        content: 'Manuel Galiano'
                    },
                    {
                        hid: 'robots',
                        name: 'robots',
                        content: 'index, follow'
                    }
                ],



            }
        },

        
        data() {
            return {
                searchChildren: '',
                exclusive: '',
            }
        },

        async mounted() {
            //Si contiene un parametro de exclusive lo recuperamos
            if (this.$route.query.exclusive) {
                this.exclusive = this.$route.query.exclusive;

                this.$axios.get('/api/special-link/' + this.exclusive)
                    .then(response => {
                        console.log(response);
                        if (response.status == 200) {
                            // Aplicamos el descuento al precio
                            this.$store.dispatch('setProductPrice', response.data);


                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

            try {
            const page = this.$route.path; // Obtiene la ruta actual
            const response = await this.$axios.post('/api/visit', { page });
            } catch (error) {
                await this.$axios.post('/api/error-message', { 
                    message: error 
                });
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
