<template>
    <client-only>
        <div class="minicart-wrapper" :class="miniCart">
            <div class="shopping-cart-content" v-if="products.length > 0">
                <ul>
                    <client-only>
                        <li class="single-shopping-cart" v-for="product in products" :key="product.id">
                            <div class="shopping-cart-img">
                                <n-link :to="`/product/${product.slug}`">
                                    <nuxt-img v-if="product.images.length > 0" :src="`https://api.trivicare.com/${product.images[0].path}`" :alt="product.name" />
                                    <nuxt-img v-else provider="customProvider" src="default.webp" :alt="product.name" />
                                </n-link>
                            </div>
                            <div class="shopping-cart-title">
                                <h4>
                                    <n-link :to="`/product/${product.slug}`">{{ product.name}}</n-link>
                                </h4>
                                <h6>Cant: {{ product.cartQuantity }}</h6>
                                <span>{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                            </div>
                            <div class="shopping-cart-delete">
                                <button @click="removeProduct(product)">
                                    <i class="fa fa-times-circle"></i>
                                </button>
                            </div>
                        </li>
                    </client-only>
                </ul>
                <div class="shopping-cart-total">
                    <h4>Total : <span class="shop-total">{{ (total * 1.21).toFixed(2) }} &euro;</span></h4>
                </div>
                <div class="shopping-cart-btn btn-hover text-center" @click="$emit('minicartClose')">
                    <n-link to="/cart" class="default-btn">ver carrito</n-link>
                    <n-link to="/checkout" class="default-btn">comprar ahora</n-link>
                </div>
            </div>
            <div class="shopping-cart-content text-center" v-else>
                <p>No hay productos en el carrito</p>
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        props: ["miniCart"],

        computed: {
            products() {
                return this.$store.getters.getCart
            },
            total() {
                return this.$store.getters.getTotal
            }
        },

        methods: {
            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Producto eliminado'})
                this.$store.dispatch('removeProductFromCart', product)
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },
        },
    };
</script>