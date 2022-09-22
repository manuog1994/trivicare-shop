<template>
    <div class="description-review-area pb-90">
        <div class="container">
            <div class="description-review-wrapper">
                <div class="description-review-topbar nav">
                    <a data-bs-toggle="tab" href="#des-details1">Información adicional</a>
                    <a class="active" data-bs-toggle="tab" href="#des-details2">Descripción</a>
                    <a data-bs-toggle="tab" href="#des-details3">Reviews (2)</a>
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
                                <li><span>Peso</span> 400 g</li>
                                <li><span>Dimensiones</span>10 x 10 x 15 cm </li>
                                <li><span>Materiales</span> 60% cotton, 40% polyester</li>
                                <li><span>Otra Info</span> American heirloom jean shorts pug seitan letterpress</li>
                            </ul>
                        </div>
                    </div>
                    <div id="des-details3" class="tab-pane">
                        <div class="row">
                            <div class="col-lg-7">
                                <div v-for="review in reviews" :key="review.id" class="review-wrapper">
                                    <div class="single-review">
                                        <div class="review-img">
                                            <img src="/img/testimonial/1.jpg" alt="">
                                        </div>
                                        <div class="review-content">
                                            <div class="review-top-wrap">
                                                <div class="review-left">
                                                    <div class="review-name">
                                                        <h4>{{ review.id }}</h4>
                                                    </div>
                                                    <div class="review-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-bottom">
                                                <p>{{ review.message }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div v-if="$auth.user" class="ratting-form-wrapper pl-50">
                                    <h3>Añadir una valoración</h3>
                                    <div class="ratting-form">
                                        <form>
                                            <div class="star-box">
                                                <span>Valoración:</span>
                                                <div class="ratting-star">
                                                    <client-only placeholder="loading...">
                                                        <vue-star-rating v-model="rating" v-bind:star-size="20"></vue-star-rating>
                                                    </client-only>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <form @submit.prevent="createReview">
                                                        <div class="rating-form-style form-submit">
                                                            <textarea v-model="message" name="Your Review" placeholder="Escribe aquí tu valoración..."></textarea>
                                                            <button class="btn btn-light" type="submit">Enviar</button>
                                                        </div>
                                                    </form>
                                                </div>
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
</template>

<script>

    export default {
        props: ['product'],


        data() {
            return {
                message: '',
                rating: 0,
                reviews: [],
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 2000)
            })
            this.getReviews();
        },

        methods: {
            async createReview() {
                try {
                    const response = await this.$axios.post('/api/reviews', {
                        user_id: this.$auth.user.id,
                        product_id: this.product.id,
                        message: this.message,
                        rating: this.rating
                    })
                    this.message = ''
                    this.rating = 0
                    this.$notify({ text: 'Valoración creada correctamente', type: 'success' })
                } catch (error) {
                    console.log(error)
                }
            },

            async getReviews() {
                try {
                    this.$nuxt.$loading.start()
                    const response = await new Promise(resolve => {
                        setTimeout(() => {
                            resolve(this.$axios.get('/api/reviews/' + this.product.id))
                        }, 2000)
                    })
                    this.reviews = response.data.data
                    this.getReviews();
                    this.$nuxt.$loading.finish()
                } catch (error) {
                    console.log(error)
                    this.$nuxt.$loading.finish()
                }
            }
        }
    };
</script>
