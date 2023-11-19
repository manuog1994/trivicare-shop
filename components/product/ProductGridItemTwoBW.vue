<template>
    <div v-if="product.status == 'Publicado'" class="product-wrap-2 mb-25">
        <div class="product-img">
            <n-link :to="`/product/${product.slug}`">
                <div v-if="product.images?.length == 0 || product.images?.length == 1">
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" src="nuxt/default.webp" :alt="product.name" width="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" src="nuxt/default.webp" :alt="product.name" width="100%"/>
                </div>
                <div v-else>
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" :src="product.images[0].path + '450x600/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name" width="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" :src="product.images[1].path + '450x600/' + product.images[1].name + '.' + product.images[1].ext" :alt="product.name" width="100%"/>
                </div>
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                <span class="product-label bg-danger rounded-circle text-white p-2" v-if="product.discount !== null">-{{ product.discount?.discount }}%</span>
            </div>
            <div class="product-action-2">
                <!-- <button class="btn" title="Compare" @click="addToCompare(product)"> 
                    <i class="pe-7s-shuffle"></i>
                </button> -->
                <button v-if="product.stock > 0 && product.varitions?.length == 0" class="btn" title="Añadir al carrito" @click="addToCart(product)">
                    <i class="pe-7s-cart"></i>
                </button>
                <button class="btn" title="Vista previa" @click="onClick(product)">
                    <i class="pe-7s-look"></i>
                </button>
            </div>
        </div>
         <div class="product-content-2">
            <div class="title-price-wrap-2">
                <h3>
                    <n-link :to="`/product/${product.slug}`" class="text-white"><strong>{{ product.name }}</strong></n-link>
                </h3>
                <div class="price-2">
                    <span class="text-white" v-if="product.discount === null">{{ ((product.price_base) * 1.21).toFixed(2) }}&euro;</span>
                    <span class="text-white" v-if="product.discount !== null">{{ (discountedPrice(product) * 1.21).toFixed(2) }}&euro;</span>
                    <span class="old text-danger" v-if="product.discount !== null">{{ (product.price_base * 1.21).toFixed(2) }}&euro;</span>
                </div>
            </div>
            <div class="pro-wishlist-2">
                <button @click="addToWishlist(product)" title="Añadir a la lista de deseos"><i class="pe-7s-like"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
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
                return product.price_base - (product.price_base * product.discount.discount / 100)
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