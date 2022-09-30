<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container"/>
        <Breadcrumb :pageTitle="product.name" v-if="product" />
        <ProductDetailsWrapper :product="product" v-if="product" />
        <ProductDetailsDescriptionReview :product="product" :reviews="reviews" v-if="product" />
        <TheFooter />
    </div>
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


        computed: {
        },

        head() {
            return {
                title: this.product.name
            }
        },

        mounted() {
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
                })
                const products = this.$store.getters.getProducts
                this.product = products.data[0]
                this.reviews = products.data[0].reviews
            },
        },


    };
</script>
