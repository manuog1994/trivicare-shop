<template>
    <div v-if="product.status == 'Publicado'" class="product-wrap-3 mb-20">
        <div class="product-img">
            <n-link :to="`/product/${product.slug}`">
                <div v-if="product.images.lenght == 0">
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" src="nuxt/default.webp" :alt="product.title" width="269.99" height="269.99"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" src="nuxt/default.webp" :alt="product.title" width="269.99" height="269.99"/>
                </div>
                <div v-else>
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" :src="product.images[0].path + '400x400/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name" width="100%" height="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" :src="product.images[1].path + '400x400/' + product.images[1].name + '.' + product.images[1].ext" :alt="product.name" width="100%" height="100%"/>
                </div>
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
            </div>
            <div class="product-content-3-wrap">
                <div class="product-content-3">
                    <div class="product-title">
                        <h3>
                            <n-link :to="`/product/${product.slug}`">{{ product.title }}</n-link>
                        </h3>
                    </div>
                    <div class="price-3">
                        <span>${{ (discountedPrice(product) * 1.21).toFixed(2) }}</span>
                        <span class="old" v-if="product.discount > 0">${{ (product.price_base * 1.21).toFixed(2) }}</span>
                    </div>
                    <div class="product-action-3">
                        <!-- <button class="btn" title="Compare" @click="addToCompare(product)"> 
                            <i class="pe-7s-shuffle"></i>
                        </button> -->
                        <button v-if="product.stock > 0 && product.variations?.lenght == 0" class="btn" title="Añadir al carrito" @click="addToCart(product)">
                            <i class="pe-7s-cart"></i>
                        </button>
                        <button class="btn" title="Añadir a la lista de deseos" @click="addToWishlist(product)">
                            <i class="pe-7s-like"></i>
                        </button>
                        <button class="btn" title="Vista previa" @click="onClick(product)">
                            <i class="pe-7s-look"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
    export default {
        props: ["product"],

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Actualizado!',
                        text: 'Se ha actualizado la cantidad del producto en el carrito',
                    })
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Añadido!',
                        text: 'Se ha añadido el producto al carrito',
                    })
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    Swal.fire({
                        icon: 'info',
                        title: 'Ya está en la lista de deseos!',
                        text: 'El producto ya está en la lista de deseos',
                    })
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Añadido!',
                        text: 'Se ha añadido el producto a la lista de deseos',
                    })
                }

                this.$store.dispatch('addToWishlist', product)
            },

            onClick(product) {
                this.$router.push(`/product/${product.slug}`)
            },
        },
    };
</script>