<template>
    <div class="compare-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <Breadcrumb pageTitle="compare" />
        
        <!-- Compare section start -->
        <div class="compare-page-wrapper pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Compare Page Content Start -->
                        <div class="compare-page-content-wrap" v-if="products.length > 0">
                            <div class="compare-table table-responsive">
                                <table class="table table-bordered mb-0">
                                    <tbody>
                                        <tr>
                                            <td class="first-column">Product</td>
                                            <client-only>
                                                <td class="product-image-title" v-for="(product, index) in products" :key="index">
                                                    <n-link :to="`/product/${product.slug}`" class="image">
                                                        <nuxt-img class="img-fluid" :src="product.images[0]" :alt="product.name"/>
                                                    </n-link>
                                                    <h4 class="title">
                                                        <n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link>
                                                    </h4>
                                                </td>
                                            </client-only>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Description</td>
                                            <client-only>
                                                <td class="pro-desc" v-for="(product, index) in products" :key="index">
                                                    <p>{{ product.description }}</p>
                                                </td>
                                            </client-only>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Price</td>
                                            <client-only>
                                                <td class="pro-price" v-for="(product, index) in products" :key="index">
                                                    <span>${{ discountedPrice(product).toFixed(2) }}</span>
                                                    <del class="old" v-if="product.discount > 0">${{ product.price.toFixed(2) }}</del>
                                                </td>
                                            </client-only>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Add to cart</td>
                                            <client-only>
                                                <td v-for="(product, index) in products" :key="index">
                                                    <button @click="addToCart(product)" class="btn">Add to Cart</button>
                                                </td>
                                            </client-only>
                                        </tr>
                                        <!-- <tr>
                                            <td class="first-column">Rating</td>
                                            <td class="pro-ratting" v-for="(product, index) in products" :key="index">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                            </td>
                                        </tr> -->
                                        <tr>
                                            <td class="first-column">Remove</td>
                                            <client-only>
                                                <td class="pro-remove" v-for="(product, index) in products" :key="index">
                                                    <button @click="removeFromCompare(product)"><i class="fa fa-trash-o"></i></button>
                                                </td>
                                            </client-only>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Compare Page Content End -->

                        <div class="empty-cart text-center" v-else>
                            <div class="icon">
                                <i class="pe-7s-shuffle"></i>
                            </div>
                            <h4>No items found in compare</h4>
                            <n-link to="/shop" class="empty-cart__button">Add Item</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Compare section end -->
        <TheFooter />
        <VueIfBot>
            <CookieConsent>
                <template slot="message">
                    <span>
                        Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra 
                        <a class="text-info" href="/privacy-policy">Política de Cookies</a>.
                    </span>
                </template>
                <template slot="button">
                    <button class="btn border-1">Aceptar</button>
                </template>
            </CookieConsent>
        </VueIfBot>
    </div>
</template>

<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },
        computed: {
            products() {
                return this.$store.getters.getCompare
            },
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
        },

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }
                this.$store.dispatch('addToCartItem', prod)
            },

            removeFromCompare(product) {
                // for notification
                this.$notify({ title: 'Item remove from compare!'})
                this.$store.dispatch('removeFromCompare', product)
            },

            discountedPrice(product) {
                return product.price - (product.price *(product.discount)/100)
            },
        },

        head() {
            return {
                title: "Compare"
            }
        },
    };
</script>
