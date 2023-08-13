<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <Breadcrumb pageTitle="Manual Review" />
                <div class="container mt-5 mb-5">
                    <div class="mb-5">
                        <h2 class="text-center mt-2">Valora los productos</h2>
                    </div>
                    <div v-for="product in products" :key="product.id">
                        <div class="row p-2 mb-2" :id="'product-' + product.id">
                            <div v-if="product.images?.length == 0 || product.images?.length == 1" class="col-4">
                                <nuxt-img loading="lazy" class="default-img" provider="customProvider" src="nuxt/default400x400.webp" :alt="product.name" width="100%" height="100%"/>
                            </div>
                            <div v-else class="col-4">
                                <nuxt-img loading="lazy" class="default-img" provider="customProvider" :src="product.images[0].path + '800x800/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name" width="100%" height="100%"/>
                            </div>
                            <div class="col-8 mt-3">
                                <h3>{{ product.name }}</h3>
                                <div class="ratting-form">
                                    <form @submit.prevent="createReview(product.id)" ref="formreview">
                                        <!-- input para nombre y apellido -->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="rating-form-style form-submit">
                                                    <input type="text" name="name" placeholder="Introduce tu nombre" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="rating-form-style form-submit">
                                                    <input type="text" name="lastname" placeholder="Introduce tus apellidos" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2">
                                            <div class="d-flex mb-2">
                                                <span class="me-3">Elige la cantidad de estrellas:</span>
                                                <vue-star-rating  :ref="'review-' + product.id"  v-bind:star-size="20"></vue-star-rating>
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
                        </div>
                        <div class="row p-4 hidden" :id="'thank' + product.id">
                            <div class="text-center">
                                <h5>¡Gracias por tu valoración!</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,

        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            NavBottom: () => import("@/components/NavBottom"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        data() {
            return {
                searchChildren: '',
                unauthorized: '',
                products: [],
            }
        },

        mounted() {
            this.getProducts();
        },

        methods: {
            async getProducts() {
                await this.$axios.get('/api/products')
                .then((response) => {
                    this.products = response.data.data;
                })
                .catch((error) => {
                    //console.log(error);
                });
            },

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
            },

            async createReview(id) {
                const mes = 'message-' + id;
                const message = this.$refs[mes][0].value;
                const rev = 'review-' + id;
                const review = this.$refs[rev][0]._data.selectedRating
                await this.$axios.post('/api/reviews', {
                    user_id: 3,
                    user_profile_id: 1,
                    product_id: id,
                    rating: review,
                    message: message,
                    user_name: this.$refs.formreview[0].name.value,
                    user_lastname: this.$refs.formreview[0].lastname.value,
                })
                .then((response) => {
                    document.getElementById('product-' + id).classList.add('hidden');
                    document.getElementById('thank' + id).classList.remove('hidden');
                    this.products_reviews++;
                })
                .catch((error) => {
                    //console.log(error);
                });
            },
        },



    };
    
</script>

