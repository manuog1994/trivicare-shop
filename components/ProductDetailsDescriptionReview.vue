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

                    <!-- Reviews -->
                    <div id="des-details3" ref="review-div" class="tab-pane">
                        <div class="row">
                            <div class="col-lg-7">
                                <client-only>
                                    <div v-for="review in reviews" :key="'review-' + review.id" class="review-wrapper">
                                        <div class="single-review">
                                            <div class="review-img">
                                                <nuxt-img provider="customProvider" src="default.webp" alt="default"/>
                                            </div>
                                            <div class="review-content">
                                                <div class="review-top-wrap">
                                                    <div class="review-left">
                                                        <div class="review-name">
                                                            <h4>{{ review.user_name }} {{ review.user_lastname  }}</h4>
                                                        </div>
                                                        <div class="review-rating">
                                                            <vue-star-rating :star-size="20" :read-only="true" :show-rating="false" :rating="review.rating"></vue-star-rating>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="review-bottom">
                                                    <p>{{ review.message }}</p>
                                                </div>
                                                <form v-if="$auth.user && $auth.user.id == review.user_id" @submit="deleteReview(review.id)">
                                                    <div class="review-delete">
                                                        <button class="btn" title="Eliminar">Eliminar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </client-only>
                            </div>
                            <div class="col-lg-5">
                                <div v-if="$auth.user" class="ratting-form-wrapper pl-50">
                                    <h3>Añadir una valoración</h3>
                                    <div class="ratting-form">
                                        <form>
                                            <div class="star-box">
                                                <span>Valoración:</span>
                                                <div class="ratting-star">
                                                    <vue-star-rating v-model="rating" v-bind:star-size="20"></vue-star-rating>
                                                </div>
                                            </div>
                                            <!-- Formulario Reviews -->
                                            <div class="row">
                                                <div v-if="!$auth.user.user_profile[0]" class="row">
                                                    <div class="col-md-6">
                                                        <div class="rating-form-style mb-10">
                                                            <input v-model="user_name" placeholder="Nombre" type="text" required>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="rating-form-style mb-10">
                                                            <input v-model="user_lastname" placeholder="Apellidos" type="text" required>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <form @submit="createReview">
                                                        <div class="rating-form-style form-submit">
                                                            <textarea v-model="message" name="Your Review" placeholder="Escribe aquí tu valoración..."></textarea>
                                                            <button class="btn btn-light" type="submit" title="Enviar">Enviar</button>
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
