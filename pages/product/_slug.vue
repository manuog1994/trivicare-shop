<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <HeaderWithTopbar containerClass="container"/>
            <Breadcrumb :pageTitle="product.name" v-if="product" />
            <ProductDetailsWrapper :product="product" v-if="product" />
            <ProductDetailsDescriptionReview :product="product" :reviews="reviews" v-if="product" />
            <TheFooter />
        </div>
    </client-only>
</template>

<script>

    export default {
        auth: false,

        data() {
            return {
                slug: this.$route.params.slug,
                product: '',
                reviews: [],
            }
        },

        head() {
            return {
                title: this.product.name,
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Nuestros productos son de la mejor calidad, naturales y ecológicos. Compra online y recibe en tu casa.'
                    }
                ],
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
            this.getProducts()
        },

        methods: {
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
        },


    };
</script>
