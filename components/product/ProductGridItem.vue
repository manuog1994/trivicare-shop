<template>
    <div class="product-wrap mb-30">
        <div class="product-img">
            <n-link :to="`/product/${product.slug}`">
                <img class="default-img" src="../../static/img/product/cosmetics/1.jpg" :alt="product.name">
                <img class="hover-img" src="../../static/img/product/cosmetics/1.jpg" :alt="product.name">
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" v-if="product.new">New</span>
                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
            </div>
            <div class="product-action" v-if="layout === 'twoColumn' || layout === 'threeColumn'">
                <div class="pro-same-action pro-wishlist">
                    <button class="btn" title="Wishlist" @click="addToWishlist(product)"> 
                        <i class="pe-7s-like"></i>
                    </button>
                </div>
                <div class="pro-same-action pro-cart">
                    <n-link :to="`/product/${product.slug}`" class="btn" v-if="product.variation">
                        selecciona una opción
                    </n-link>
                    <button class="btn" title="Add to cart" @click="addToCart(product)" v-else>
                        <i class="pe-7s-cart"></i> 
                        Añadir al carrito
                    </button>
                </div>
                <div class="pro-same-action pro-quickview">
                    <button class="btn" title="Quick View" @click="onClick(product)">
                        <i class="pe-7s-look"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="product-content text-center">
            <h3>
                <n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link>
            </h3>
            <div class="product-rating" v-if="product.rating == 5">
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
            </div>
            <div class="product-rating" v-if="product.rating == 4">
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <div class="product-rating" v-if="product.rating == 3">
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <div class="product-rating" v-if="product.rating == 2">
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <div class="product-rating" v-if="product.rating == 1">
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <div class="product-price">
                <span>{{ discountedPrice(product).toFixed(2) }} &euro;</span>
                <span class="old" v-if="product.discount > 0">{{ product.price}} &euro;</span>
            </div>
            <div class="product-content__list-view" v-if="layout === 'list'">
                <p>{{ product.description }}</p>
                <div class="pro-action d-flex align-items-center" >
                    <div class="pro-cart btn-hover">
                        <n-link :to="`/product/${product.slug}`" class="btn" v-if="product.variation">
                            Selecciona opción
                        </n-link>
                        <button class="btn" title="Add To Cart" @click="addToCart(product)" v-else>
                            <i class="pe-7s-cart"></i> 
                            Añadir al carrito
                        </button>
                    </div>
                    <div class="pro-wishlist">
                        <button @click="addToWishlist(product)">
                            <i class="fa fa-heart-o"></i>
                        </button>
                    </div>
                    <!-- <div class="pro-compare">
                        <button @click="addToCompare(product)">
                            <i class="pe-7s-shuffle"></i>
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["layout", "product"],

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Se ha actualizado la cantidad del producto' })
                } else {
                    this.$notify({ title: 'Añadido al carrito!' })
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Ya estaba añadido a la lista de deseos!' })
                } else {
                    this.$notify({ title: 'Añadido a la lista de deseos!'})
                }

                this.$store.dispatch('addToWishlist', product)
            },

            // addToCompare(product) {
            //     // for notification
            //     if (this.$store.state.compare.find(el => product.id === el.id)) {
            //         this.$notify({ title: 'Already added to compare!' })
            //     } else {
            //         this.$notify({ title: 'Add to compare successfully!'})
            //     }

            //     this.$store.dispatch('addToCompare', product)
            // },

            onClick(product) {
                this.$modal.show('quickview', product);
            },

        },
    };
</script>