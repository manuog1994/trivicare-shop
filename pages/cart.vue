<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="carrito" />

        <div class="cart-main-area pt-90 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12" v-if="products.length > 0">
                        <h3 class="cart-page-title">Productos añadidos al carrito</h3>
                        <div class="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Producto</th>
                                        <th>Precio/Unidad</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in products" :key="product.id">
                                        <td class="product-thumbnail">
                                            <n-link :to="`/product/${product.slug}`">
                                                <img src="../static/img/product/cosmetics/1.jpg" :alt="product.name">
                                            </n-link>
                                        </td>
                                        <td class="product-name">
                                            <n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link>
                                        </td>
                                        <td class="product-price-cart">
                                            <span class="amount">{{ discountedPrice(product).toFixed(2) }} &euro;</span>
                                            <del class="old">{{ product.price }} &euro;</del>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="cart-plus-minus">
                                                <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                                                <input class="cart-plus-minus-box" type="text" :value="product.cartQuantity" readonly>
                                                <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">{{ discountedPrice(product).toFixed(2) * product.cartQuantity }} &euro;</td>
                                        <td class="product-remove">
                                            <button @click="removeProduct(product)">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-shiping-update-wrapper">
                                    <div class="cart-clear">
                                        <button @click="clearCart()">Vaciar Carrito</button>
                                    </div>
                                    <div class="cart-shiping-update">
                                        <n-link to="/shop">Continuar Comprando</n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="discount-code-wrapper">
                                    <div class="title-wrap">
                                    <h4 class="cart-bottom-title section-bg-gray">Código Descuento</h4> 
                                    </div>
                                    <div class="discount-code">
                                        <p>Introduce el código descuento.</p>
                                        <form @submit.prevent="validationCupon">
                                            <input v-model="inputCupons" type="text" name="name" required>
                                            <button class="cart-btn-2" type="submit">Aplicar cupón</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="grand-total">
                                    <div class="title-wrap">
                                        <h4 class="cart-bottom-title section-bg-gary-cart">Total del Carrito</h4>
                                    </div>
                                    <h5>Total <span>{{ total.toFixed(2) }} &euro;</span></h5>
                                    <h5 v-if="inputCupons == valueCupon">Código descuento<span class="text-danger"> - {{ ((total * discountCupon / 100)).toFixed(2)  }} &euro;</span></h5>
                                    <h4 class="grand-total-title">Total  <span>{{ (total - (total * discountCupon / 100)).toFixed(2) }} &euro;</span></h4>
                                    <n-link to="/checkout">Tramitar pedido</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12" v-else>
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-cart"></i>
                            </div>
                            <h4>No tienes productos en el carrito</h4>
                            <n-link to="/shop" class="empty-cart__button">Comprar ahora</n-link>
                        </div>
                    </div>
                    {{ cupons  }}
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        data() {
            return {
                singleQuantity: 1,
                inputCupons: '',
                valueCupon: 'PROMO10',
                discountCupon: 10,
                cupons: [],
            }
        },

        computed: {
            products() {
                return this.$store.getters.getCart
            },

            total() {
                return this.$store.getters.getTotal
            },
        },

        mounted() {
            this.getCupons();
        },

        methods: {

            incrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity < product.stock) {
                    this.$store.dispatch('addToCartItem', prod)
                }else{
                    this.$notify({ title: 'No hay más stock disponible' })
                }
            },

            decrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity > 1) {
                    this.$store.dispatch('decreaseProduct', prod)
                }
            },

            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Producto eliminado del carrito!'})

                this.$store.dispatch('removeProductFromCart', product)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            clearCart() {
                if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
                    // for notification
                    this.$notify({ title: 'Carrito vaciado!'})
                    
                    this.$store.commit('CLEAR_CART')
                }
            },

            async getCupons() {
                await this.$axios.get('/api/cupons')
                    .then(response => {
                        this.cupons = response.data.data
                    }).catch(error => {
                        console.log(error)
                    })
            },

            validationCupon() {
                
            },
        },

        head() {
            return {
                title: "Carrito"
            }
        },
    };
</script>
