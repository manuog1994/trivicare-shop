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
                                            <span class="amount">{{ product.price  }} &euro;</span>
                                            <del class="old"></del>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="cart-plus-minus">
                                                <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                                                <input class="cart-plus-minus-box" type="text" :value="product.cartQuantity" readonly>
                                                <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                                            </div>
                                        </td>
                                        <td class="product-subtotal"></td>
                                        <td class="product-remove">
                                            <button @click="removeProduct(product)"><i class="fa fa-times"></i></button>
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
                                <div class="cart-tax">
                                    <div class="title-wrap">
                                        <h4 class="cart-bottom-title section-bg-gray">Calcular Gastos De Envío</h4>
                                    </div>
                                    <div class="tax-wrapper">
                                        <p>Introduce el destino para calcularlo.</p>
                                        <div class="tax-select-wrapper">
                                            <!-- <div class="tax-select">
                                                <label>
                                                    * País
                                                </label>
                                                <select class="email s-email s-wid">
                                                    <option>Alemania</option>
                                                    <option selected>España</option>
                                                    <option>Francia</option>
                                                    <option>Italia</option>
                                                    <option>Portugal</option>
                                                </select>
                                            </div> -->
                                            <div class="tax-select">
                                                <label>
                                                    * Provincia
                                                </label>
                                                <select class="email s-email s-wid">
                                                    <option v-for="state in states" :key="state.name">{{ state.name  }}</option>
                                                </select>
                                            </div>
                                            <div class="tax-select">
                                                <label>
                                                    * Código Postal
                                                </label>
                                                <input type="text">
                                            </div>
                                            <button class="cart-btn-2" type="submit">Calcular</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="discount-code-wrapper">
                                    <div class="title-wrap">
                                    <h4 class="cart-bottom-title section-bg-gray">Código Descuento</h4> 
                                    </div>
                                    <div class="discount-code">
                                        <p>Introduce el código descuento.</p>
                                        <form>
                                            <input type="text" required="" name="name">
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
                                    <h4 class="grand-total-title">Total  <span>{{ total.toFixed(2) }} &euro;</span></h4>
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
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        data() {
            return {
                states: {},
                // productsApi: {},
                singleQuantity: 1,
            }
        },

        beforeMount() {
            //this.getStates();
        },

        created() {
            this.getStates();
            // this.getProducts();
        },

        computed: {
            products() {
                return this.$store.getters.getCart
            },

            total() {
                return this.$store.getters.getTotal
            },
        },

        methods: {
            async getStates() {
                const states = await this.$axios.$get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&sort=provincia&facet=ccaa&facet=provincia')
                this.states = states.facet_groups[1].facets;
            },

            // async getProducts() {
            //     const products = await this.$axios.$get('http://api.trivicare.test/v1/products')
            //     this.productsApi = products;
            // },

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
                if (confirm("Are you sure you want to clear cart")) {
                    // for notification
                    this.$notify({ title: 'Item remove from cart!'})
                    
                    this.$store.commit('CLEAR_CART')
                }
            },



        },

        head() {
            return {
                title: "Carrito"
            }
        },
    };
</script>
