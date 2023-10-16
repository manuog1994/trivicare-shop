<template>
    <div v-if="product" class="description-review-area pb-90">

        <!-- Información del producto -->
        <div class="container-fluid">
            <div class="description-review-wrapper">
                <div class="description-review-topbar nav">
                    <a data-bs-toggle="tab" href="#des-details1" class="active">
                        Modo de empleo
                        <i class="fa fa-file-text-o ms-2" aria-hidden="true"></i>
                    </a>
                    <a data-bs-toggle="tab" href="#des-details3">
                        Valoraciones 
                        <i class="fa fa-star ms-1" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tab-content description-review-bottom">
                    <div id="des-details1" class="tab-pane active">
                        <div class="ms-5 me-5">
                            <p class="fa-2x">
                                <i>Aún no hay información disponible</i>
                            </p>
                        </div>
                    </div>
                    <div id="des-details3" ref="review-div" class="tab-pane">
                        <div class="row">
                            <div class="col-12" v-if="reviews?.length > 0">
                                <div v-for="review in paginatedReviews" :key="review.id" class="review-wrapper">
                                    <div class="single-review p-5">
                                        <div class="d-flex justify-content-start">
                                            <div class="review-content">
                                                <div class="review-top-wrap">
                                                    <div class="review-left">
                                                        <div class="review-name">
                                                            <span class="h4-span">{{ review.user_name }} {{ review.user_lastname  }}</span>
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
                                <div v-if="reviews?.length > 10" class="d-flex justify-content-center">
                                    <pagination v-model="page" :records="reviews?.length" :perPage="perPage" @paginate="myCallBack" />
                                </div>
                            </div>
                            <div class="col-12" v-else>
                                <div class="ms-5 me-5">
                                    <p class="fa-2x">
                                        <i>Aún no hay valoraciones de este producto</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .review-delete {
        text-align: right;
    }

    .span-span {
        font-size: 1.5rem;
        font-weight: 600;
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
                page: 1,
                perPage: 10,
            }
        },

        computed: {
            paginatedReviews() {
                return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage)
            }
        },


        methods: {
            async deleteReview(review) {
                try {
                    const response = await this.$axios.delete('/api/reviews/' + review)
                    this.$notify({ text: 'Valoración eliminada correctamente', type: 'success' })
                } catch (error) {
                    //console.log(error)
                }
            },

            myCallBack(page) {
                this.page = page
            }
        },
    };
</script>
