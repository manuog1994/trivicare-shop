<template>
    <div class="container">
        <div class="card rounded-0 m-1 mt-5 mb-5">
            <div class="mb-2">
                <h4 class="text-center mt-2">A continuación valora los productos de tu último pedido.</h4>
            </div>
            <div v-for="product in products" :key="product.id">
                <div class="row p-2" :id="'product-' + product.id">
                    <div v-if="product.images.length == 0 || product.images.length == 1" class="col-4">
                        <nuxt-img provider="customProvider" src="nuxt/default.webp" :alt="product.name" width="100%" height="100%"/>
                    </div>
                    <div v-else class="col-4">
                        <nuxt-img provider="customProvider" :src="product.images[0].path" :alt="product.name" width="100%" height="100%"/>
                    </div>
                    <div class="col-8 mt-3">
                        <h5>{{ product.name }}</h5>
                    </div>
                    <div class="ratting-form">
                        <form @submit.prevent="createReview(product.id)" ref="formreview">
                            <div class="d-flex justify-content-evenly mt-2">
                                <div class="d-flex justify-content-start">
                                    <span>Añade una valoración:</span>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <vue-star-rating :ref="'review-' + product.id"  v-bind:star-size="20"></vue-star-rating>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="rating-form-style form-submit">
                                        <textarea :ref="'message-' + product.id" placeholder="Escribe aquí tu valoración..." required></textarea>
                                        <div class="d-flex justify-content-end">
                                            <button class="btn bg-blue-color rounded-0" type="submit">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row p-4 hidden" :id="'thank' + product.id">
                    <div class="text-center">
                        <h5>¡Gracias por tu valoración!</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: '',
            products: [],
            user_profile_id: '',
            products_reviews: 0,
        }
    },
    mounted() {
        const url = new URLSearchParams(window.location.search).get('token');
        this.token = url;
        this.getOrder();
    },

    watch: {
        products_reviews() {
            if (this.products_reviews == this.products.length) {
                this.$notify({ text: '¡Gracias por valorar los productos!', type: 'success' })
                let url = '/review?token=' + this.token;
                this.$axios.post('/api/notification-delete', {
                    url: url,
                    token_id: this.token,
                }).then((response) => {
                    setTimeout(() => {
                        this.$router.push('/notifications-center');
                    }, 2000);
                }).catch((error) => {
                    //console.log(error);
                });
            }
        }
    },

    methods: {
        async getOrder() {
            const token_id = this.token;
            await this.$axios.get(`/api/review/${token_id}`)
            .then((response) => {
                this.user_profile_id = response.data.data.user_profile_id;
                let products = response.data.data.products;
                this.products = JSON.parse(products);
            })
            .catch((error) => {
                //console.log(error);
            });
        },

        async createReview(id) {
            const mes = 'message-' + id;
            const message = this.$refs[mes][0].value;
            const rev = 'review-' + id;
            const review = this.$refs[rev][0]._data.selectedRating
            await this.$axios.post('/api/reviews', {
                user_id: this.$auth.user.id,
                user_profile_id: this.user_profile_id,
                product_id: id,
                rating: review,
                message: message,
            })
            .then((response) => {
                document.getElementById('product-' + id).classList.add('hidden');
                document.getElementById('thank' + id).classList.remove('hidden');
                this.products_reviews++;
                this.$notify({ text: 'Valoración creada correctamente', type: 'success' })
            })
            .catch((error) => {
                //console.log(error);
            });
        },
    },
}
</script>

<style>

</style>