<template>
    <!-- wishlist section start -->
    <div class="cart-main-area pt-90 pb-100">
        <div class="container">
            <div class="row" v-if="products?.length > 0">
                <div class="col-12">
                    <h3 class="cart-page-title">Tu lista de deseos</h3>
                    <div class="table-content table-responsive cart-table-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Precio/Unidad</th>
                                    <th>Añadir al carrito</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <client-only>
                                    <tr v-for="product in products" :key="product.id + 'product'">
                                        <td class="product-thumbnail">
                                            <n-link :to="`/product/${product.slug}`">
                                                <nuxt-img v-if="product.images > 0" provider="customProvider" :src="product.images[0].path + product.images[0].name + '280x280' + '.' + product.images[0].ext" :alt="product.name"/>
                                                <nuxt-img v-else provider="customProvider" src="nuxt/default280x280.webp" :alt="product.name"/> 
                                            </n-link>
                                        </td>
                                        <td class="product-name">
                                            <n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link>
                                        </td>
                                        <td class="product-price-cart">
                                            <span class="amount">{{ discountedPrice(product) }} &euro;</span>
                                            <del class="old" v-if="product.discount !== null && product.discount?.is_active">{{ product.price }} &euro;</del>
                                        </td>
                                        <td class="product-wishlist-cart">
                                            <button @click="addToCart(product)" title="Añadir al carrito">añadir al carrito</button>
                                        </td>
                                        <td class="product-remove">
                                            <button @click="removeProductFromWishlist(product)" title="Eliminar de la lista de deseos"><i class="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                </client-only>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12">
                    <div class="empty-cart text-center">
                        <div class="icon">
                            <i class="pe-7s-like"></i>
                        </div>
                        <h4>No hay productos en tu lista de deseos</h4>
                        <n-link to="/shop" class="empty-cart__button">Añadir producto</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- wishlist section end -->
</template>

<script>
import Swal from 'sweetalert2'
export default {
    computed: {
        products() {
            return this.$store.getters.getWishlist
        }
    },

    mounted() {
        this.getProducts()
    },
    
    methods: {
        async getProducts() {
                await this.$store.dispatch('getProducts', {
                    perPage: '',
                    page: '',
                    category: '',
                    search: '',
                    slug: '',
                    sort: '',
                    tag: '',
                    status: 2,
                })
                let prod = this.$store.getters.getProducts;
                let response = prod.data;
                let wish = this.products;
                let wishProducts = wish.map((item) => {
                    return item.id
                }).toString();

                let products = response.filter((item) => {
                    if (wishProducts.includes(item.id)) {
                        return item
                    }
                })

                wish.forEach((item) => {
                    products.forEach((product) => {
                        if (item.id == product.id) {
                            product
                        }
                    })
                })

                this.$store.dispatch('refreshWishList', products)

            },

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

        removeProductFromWishlist(product) {
            // for notification
            this.$store.dispatch('removeProductFromWishlist', product)
        },

        discountedPrice(product) {
            if (product.discount?.is_active){
                return (product.price_base - (product.price_base * product.discount.discount / 100) * 1.21 ).toFixed(2)
            } else {
                return (product.price_base * 1.21).toFixed(2);
            }
        },

    },
}
</script>

<style>

</style>