<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb :pageTitle="product.name" />
        <ProductDetailsWrapper :product="product" />
        <ProductDetailsDescriptionReview :product="product" />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slug: this.$route.params.slug,
                product: [],
            }
        },


        computed: {

        },

        mounted() {
            this.getProductbySlug();
        },

        head() {
            return {
                title: this.product.name
            }
        },

        methods: {
            async getProductbySlug() {
                const response = await this.$axios.get('http://api.trivicare.test/v1/products?filter[slug]=' + this.slug);
                return this.product = Object(response.data.data[0]);
            }, 

            // slugify(text) {
            //     return text
            //         .toString()
            //         .toLowerCase()
            //         .replace(/\s+/g, "-") // Replace spaces with -
            //         .replace(/[^\w-]+/g, "") // Remove all non-word chars
            //         .replace(/--+/g, "-") // Replace multiple - with single -
            //         .replace(/^-+/, "") // Trim - from start of text
            //         .replace(/-+$/, ""); // Trim - from end of text
            // }
        },
    };
</script>
