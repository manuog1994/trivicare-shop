<template>
    <div v-if="product.status == 'Publicado'" class="product-wrap mb-30">
         <div class="product-img">
            <n-link :to="`/product/${product.slug}`">
                <div v-if="product.images?.length == 0 || product.images?.length == 1">
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" src="nuxt/default400x400.webp" :alt="product.name" width="100%" height="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" src="nuxt/default400x400.webp" :alt="product.name" width="100%" height="100%"/>
                </div>
                <div v-else>
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" :src="product.images[0].path + '450x600/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name" width="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" :src="product.images[1].path + '450x600/' + product.images[1].name + '.' + product.images[1].ext" :alt="product.name" width="100%"/>
                </div>
            </n-link>
            <div class="product-badges">
                <CountdownShop v-show="product.discount?.discount > 0" :targetDate="product.discount?.end_date"/>
                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                <span class="product-label purple" v-if="product?.discount !== null">-{{ getDiscount(product) }}%</span>
            </div>
             <div class="product-action" v-if="layout === 'twoColumn' || layout === 'threeColumn'">
                <div class="pro-same-action pro-wishlist">
                    <button class="btn" title="Añadir a la lista de deseos" @click="addToWishlist(product)"> 
                        <i class="pe-7s-like"></i>
                    </button>
                </div>
                <div class="pro-same-action pro-cart">
                    <n-link :to="`/product/${product.slug}`" class="btn" v-if="product.variation">
                        selecciona una opción
                    </n-link>
                    <button class="btn pro-cart" title="Añadir al carrito" @click="addToCart(product)" v-else>
                        <i class="pe-7s-cart"></i> 
                        Añadir al carrito
                    </button>
                </div>
                <div class="pro-same-action pro-quickview">
                    <button class="btn" title="Vista previa" @click="onClick(product)">
                        <i class="pe-7s-look"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="product-content text-center mt-4">
            <h3 class="mb-1">
                <n-link :to="`/product/${product.slug}`"><strong>{{ product.name }}</strong></n-link>
            </h3>
            <div :class="{ 'product-grid-change': layout === 'list' ? false : true }">
                <client-only>
                    <vue-star-rating :star-size="20" :read-only="true" :show-rating="false" :rating="product.rating"></vue-star-rating>
                </client-only>
            </div>
            <div class="product-price">
                <span v-if="product?.discount === null">{{ ((product.price_base) * 1.21).toFixed(2) }}&euro;</span>
                <span v-if="product?.discount !== null">{{ (discountedPrice(product) * 1.21).toFixed(2) }}&euro;</span>
                <span class="old" v-if="product.discount !== null">{{ (product.price_base * 1.21).toFixed(2) }}&euro;</span>
            </div>
            <div class="product-content__list-view" v-if="layout === 'list'">
                <div>
                    <p class="mb-1" v-html="truncateHTML(product.description, 100)"></p>
                </div>
                <div class="pro-action d-flex align-items-center" >
                    <div class="pro-cart btn-hover">
                        <button class="btn" title="Añadir al carrito" @click="addToCart(product)" v-if="product.stock > 0 && product.variations.length == 0">
                            <i class="pe-7s-cart"></i> 
                            Añadir al carrito
                        </button>
                        <button class="btn" title="Añadir al carrito" @click="addToCart(product)" v-else-if="product.stock == 0 && product.presale == 'Si'">
                            <i class="pe-7s-cart"></i> 
                            Preventa
                        </button>
                        <n-link class="btn" title="Seleccionar" :to="'product/' + product.slug" v-else-if="product.variations?.length > 0">
                            Seleccione una opción
                        </n-link>
                        <button v-else-if="product.stock == 0 && product.presale == 'No'" class="btn disabled" title="No hay stock">
                            <i class="pe-7s-attention"></i>
                             No hay Stock
                        </button>
                    </div>
                    <div class="pro-wishlist">
                        <button @click="addToWishlist(product)" title="Añadir a la lista de deseos">
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

<style>
    .product-grid-change{
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
    }
</style>

<script>
import Swal from 'sweetalert2'
    export default {
        auth: false,
        props: ["layout", "product"],

        components: {
            CountdownShop: () => import('@/components/CountdownShop.vue'),
        },

        data() {
            return {
                tag: Object.values(this.product.tags).flat(),
            }
        },

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
                return product.price_base - (product.price_base * product.discount?.discount / 100)
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

            getDiscount(product) {
                const discount = product.discount
                return discount.discount
            },

            truncateHTML(html, maxLength) {
                const div = document.createElement("div");
                div.innerHTML = html;
                let text = div.textContent || div.innerText || "";
                if (text.length > maxLength) {
                    text = text.substring(0, maxLength);
                    text = text.substr(0, Math.min(text.length, text.lastIndexOf(" ")));
                    return text + "...";
                }
                return html;
            }

        },
    };
</script>