<template>
    <div v-if="product" class="description-review-area pb-90">

        <!-- Información del producto -->
        <div class="container">
            <div class="description-review-wrapper">
                <div class="description-review-topbar nav">
                    <a data-bs-toggle="tab" href="#des-details1">Información adicional</a>
                    <a class="active" data-bs-toggle="tab" href="#des-details2">Descripción</a>
                    <a data-bs-toggle="tab" href="#des-details3">Valoraciones ( {{ product.reviews.length }} )</a>
                </div>
                <div class="tab-content description-review-bottom">
                    <div id="des-details2" class="tab-pane active">
                        <div class="product-description-wrapper">
                            <p>{{ product.description  }}</p>
                            <p>{{ product.specifications  }}</p>
                        </div>
                    </div>
                    <div id="des-details1" class="tab-pane ">
                        <div class="product-anotherinfo-wrapper">
                            <ul>
                                <li><span>Peso</span>{{ product.weight  }}</li>
                                <li><span>Dimensiones</span>{{ product.size  }}</li>
                                <li><span>Materiales</span>{{ product.specifications }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .review-delete {
        text-align: right;
    }
</style>


<script>

    export default {
        props: ['product', 'reviews'],


        data() {
            return {
                message: '',
                rating: 0,
                user_name: '',
                user_lastname: '',
            }
        },


        methods: {
            async createReview() {
                try {
                    const response = await this.$axios.post('/api/reviews', {
                        user_id: this.$auth.user.id,
                        product_id: this.product.id,
                        message: this.message,
                        rating: this.rating,
                        user_name: this.user_name,
                        user_lastname: this.user_lastname,
                    })
                    this.message = ''
                    this.rating = 0
                    this.$notify({ text: 'Valoración creada correctamente', type: 'success' })

                } catch (error) {
                    console.log(error)
                }
            },

            async deleteReview(review) {
                try {
                    const response = await this.$axios.delete('/api/reviews/' + review)
                    this.$notify({ text: 'Valoración eliminada correctamente', type: 'success' })
                } catch (error) {
                    console.log(error)
                }
            }
        },
    };
</script>
