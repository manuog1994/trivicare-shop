<template>
    <client-only>
        <div class="minicart-wrapper" :class="miniCart">
            <div class="shopping-cart-content" v-if="products.length > 0">
                <ul>
                    <li class="single-shopping-cart" v-for="product in products" :key="product.id">
                        <div class="shopping-cart-img">
                            <n-link :to="`/product/${product.slug}`">
                                <img src="../static/img/product/cosmetics/1.jpg" :alt="product.name">
                            </n-link>
                        </div>
                        <div class="shopping-cart-title">
                            <h4>
                                <n-link :to="`/product/${product.slug}`">{{ product.name}}</n-link>
                            </h4>
                            <h6>Cant: {{ product.cartQuantity }}</h6>
                            <span>{{ discountedPrice(product).toFixed(2) }} &euro;</span>
                        </div>
                        <div class="shopping-cart-delete">
                            <button @click="removeProduct(product)">
                                <i class="fa fa-times-circle"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                <div class="shopping-cart-total">
                    <h4>Total : <span class="shop-total">{{ total.toFixed(2) }} &euro;</span></h4>
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
                this.$notify({ title: 'Item remove from cart!'})
                this.$store.dispatch('removeProductFromCart', product)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        },
    };
</script>