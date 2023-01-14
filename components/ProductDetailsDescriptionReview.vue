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
                    <div id="des-details3" ref="review-div" class="tab-pane">
                        <div class="row">
                            <div class="col-12">
                                <div v-for="review in reviews" :key="review.id" class="review-wrapper">
                                    <div class="single-review d-flex justify-content-center card p-5 rounded-0">
                                        <!-- <div class="review-img">
                                            <img src="/img/testimonial/1.jpg" alt="">
                                        </div> -->
                                        <div class="d-flex justify-content-center">
                                            <div class="review-content">
                                                <div class="review-top-wrap">
                                                    <div class="review-left">
                                                        <div class="review-name">
                                                            <h4>{{ review.user_name }} {{ review.user_lastname  }}</h4>
                                                        </div>
                                                        <div class="review-rating">
                                                            <client-only>
                                                                <vue-star-rating :star-size="20" :read-only="true" :show-rating="false" :rating="review.rating"></vue-star-rating>
                                                            </client-only>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="review-bottom">
                                                    <p>{{ review.message }}</p>
                                                </div>
                                                <form v-if="$auth.user && $auth.user.id == review.user_id" @submit="deleteReview(review.id)">
                                                    <div class="review-delete">
                                                        <button class="btn">Eliminar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    //console.log(error)
                }
            },

            async deleteReview(review) {
                try {
                    const response = await this.$axios.delete('/api/reviews/' + review)
                    this.$notify({ text: 'Valoración eliminada correctamente', type: 'success' })
                } catch (error) {
                    //console.log(error)
                }
            }
        },
    };
</script>
