<template>
    <div class="cart-main-area pt-90 pb-100">
        <div class="container-fluid">
            <div class="row" v-if="products?.length > 0">
                <div class="col-12 col-md-8">
                    <div>
                        <h3 class="cart-page-title">Productos añadidos al carrito</h3>
                    </div>
                    <div class="card-cart">
                        <div class="row line-cart mt-4">
                            <div class="col-6">
                                <h3 class="text-muted pb-md-2">Cesta</h3>
                            </div>
                            <div class="col-6" style="text-align:right;">
                                <h4 class="d-none d-md-block me-md-4">Precio</h4>
                            </div>
                        </div>
                        <client-only>
                            <div class="row d-md-flex line-cart mt-md-4 mt-2" v-for="product in products" :key="product.id">
                                <div class="col-4 col-md-2 p-2 ms-4">
                                    <n-link :to="`/product/${product.slug}`">
                                        <nuxt-img loading="lazy" v-if="product.images?.length > 0" provider="customProvider" :src="product.images[0].path + product.images[0].name + '280x280' + '.' + product.images[0].ext" :alt="product.name"/> 
                                        <nuxt-img loading="lazy" v-else provider="customProvider" src="nuxt/default280x280.webp" :alt="product.name"/>
                                    </n-link>
                                </div>
                                <div class="col-7 col-md-9 mt-md-3 mt-1">
                                    <div class="d-md-flex justify-content-md-between">
                                        <div class="d-flex">
                                            <n-link class="fs-5" :to="`/product/${product.slug}`">{{ product.name }}</n-link>
                                        </div>
                                        <div class="d-md-flex justify-content-md-end">
                                            <span class="d-none d-md-block" style="font-size:14px;color:#cfcfcf;margin-right:5px;padding-right:5px;text-decoration:line-through;" v-if="product.discount > 0">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
                                            <p class="d-md-none">Precio: <span class=" fw-semibold">{{ (discountedPrice(product) * 1.21).toFixed(2) }} €</span></p>
                                            <p class="text-price d-none d-md-block"><span class=" fw-semibold">{{ (discountedPrice(product) * 1.21).toFixed(2) }} €</span></p>
                                        </div>
                                    </div>
                                    <div class="d-md-flex justify-content-md-start mb-2 mt-1">
                                        <p v-if="product.stock == 2 || product.stock == 1" class="p-0 text-danger fst-italic ms-2">{{ product.stock }} unidades disponibles en stock.</p>
                                        <p v-else-if="product.stock === 0" class="p-0 text-danger fst-italic ms-2">No hay stock</p>
                                        <p v-else class="p-0 text-green ms-2">En stock</p>
                                    </div>
                                    <div class="product-qty">
                                        <div class="row">
                                            <div v-if="product.stock != 0" class="col-12 d-md-flex align-items-md-center">
                                                <div class="me-3">
                                                    <h5>Cantidad: </h5>
                                                </div>
                                                <div class="cart-plus-min">
                                                    <button @click="decrementProduct(product)" class="dec qtybut" title="Quitar">-</button>
                                                    <input class="cart-plus-min-box" type="text" :value="product.cartQuantity" readonly>
                                                    <button @click="incrementProduct(product)" class="inc qtybut" title="Añadir">+</button>
                                                </div>
                                            </div>
                                            <div class="col-12 d-flex justify-content-start">
                                                <div class="product-remov">
                                                    <button @click="removeProduct(product)" title="Eliminar">Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </client-only>
                    </div>
                </div>
                <!-- Bloque Total Carrito -->
                <div class="col-12 col-md-4">
                    <div class="mt-5">
                        <div class="grand-total">
                            <div class="title-wrap">
                                <h4 class="cart-bottom-title section-bg-gary-cart">Total del Carrito</h4>
                            </div>
                            <h5>Subtotal <span>{{ (subTotal * 1.21).toFixed(2) }} &euro;</span></h5>
                            <h4 class="grand-total-title">Total  <span>{{ (total * 1.21).toFixed(2) }} &euro;</span></h4>
                            <a v-if="!errorStock" class="btn btn-theme rounded-0" @click="newReserve">Tramitar pedido</a>
                            <p class="text-danger" v-else>{{ errorStockMessage }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-shiping-update-wrapper">
                                <div class="cart-clear">
                                    <button class="rounded-0" @click="clearCart()" title="Vaciar carrito">Vaciar Carrito</button>
                                </div>
                                <div class="cart-shiping-update">
                                    <n-link class="rounded-0" to="/shop">Continuar Comprando</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Carrito vacío -->
            <div class="row" v-else>
                <div class="col-12">
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
</template>

<script>
    export default {
        auth: false,

        data() {
            return {
                singleQuantity: 1,
                error: '',
                selectQuantity: 1,
                errorStock: false,
                errorStockMessage: '',
                token_reserve: '',
                duration: 900,
            }
        },

        computed: {
            products() {
                return this.$store.getters.getCart
            },

            subTotal() {
                return this.$store.getters.getSubTotal
            },

            total() {
                return this.$store.getters.getTotal
            },

        },


        mounted() {
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }

            //this.getProducts();
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
                let cart = this.products;
                let cartProducts = cart.map((item) => {
                    return item.id
                }).toString();

                let products = response.filter((item) => {
                    if (cartProducts.includes(item.id)) {
                        return item
                    }
                })

                cart.forEach((item) => {
                    products.forEach((product) => {
                        if (item.id == product.id) {
                            product.cartQuantity = item.cartQuantity
                        }
                    })
                })

                this.$store.dispatch('refreshCart', products)

            },

            makeid(length) {
                let result = '';
                let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                this.token_reserve = result;
            },

            newReserve() {
                //this.getProducts();
                let products = this.products;
                let stock = products.map((item) => {
                    if(item.stock == '0'){
                        this.errorStock = true;
                        this.errorStockMessage = 'Uno o varios de los productos que tienes en carrito no esta disponible, por favor, elimínalo del carrito y vuelve a intentarlo si deseas realizar el pedido.'
                    }
                })
                if(this.errorStock == false){
                    document.cookie = "duration=900; expires=" + new Date(Date.now() + 630000).toUTCString();

                    this.makeid(27);
                    this.$axios.post('/api/reserve', {
                        products: JSON.stringify(products),
                        token_reserve: this.token_reserve,
                    }).then(res => {
                        this.$store.commit('SET_STEP2', false);
                        this.$store.commit('SET_STEP3', false);
                        this.$store.commit('SET_STEP4', false);
                        this.$store.commit('CLEAR_GUEST', {});
                        this.$store.commit('SET_PAYMENT_METHOD', '');
                        this.$store.commit('SET_SHIPPING_METHOD', '');
                        this.$store.commit('SET_PICKUP_ID', '');
                        this.$store.commit('SET_DURATION', 900);
                        this.$store.commit('SET_USER_PROFILE_ID', '');
                        this.$store.commit('CLEAR_CUPON', {});
                        this.$store.commit('SET_ORDER_ID', '');
                        this.$store.commit('SET_PAYMENT_METHOD', '');
                        this.$store.commit('SET_SHIPPING_METHOD', '');
                        this.$store.commit('SET_SHIPPING_AMOUNT', 0);
                        this.$store.commit('SET_CONDITIONS_STORE', false);
                        this.$store.commit('SET_NEWSLETTER_STORE', false);
                        this.$store.commit('SET_INVOICE_PAPER', false);
                        this.$store.commit('SET_NOTE', '');
                        this.$store.commit('SET_RESERVE', this.token_reserve);
                        this.$router.push('/checkout' + '?reserve=' + this.token_reserve + '&step=1');
                        //console.log(res.data);
                    }).catch(err => {
                        this.$axios.post('/api/error-message', {
                            message: error.response.data.message
                        })
                    })
                }
            },

            incrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity < product.stock) {
                    this.$store.dispatch('addToCartItem', prod)
                }else{
                    this.$notify({ title: 'No hay más stock disponible' })
                }
                //this.getProducts();
            },

            decrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity > 1) {
                    this.$store.dispatch('decreaseProduct', prod)
                }
                //this.getProducts();
            },

            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Producto eliminado del carrito!'})

                this.$store.dispatch('removeProductFromCart', product)
                //this.getProducts();
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },

            clearCart() {
                if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
                    // for notification
                    this.$notify({ title: 'Carrito vaciado!'})
                    
                    this.$store.commit('CLEAR_CART')
                }
            },
        },

    };
</script>

<style lang="scss" scope>
    .text-green {
        color: #28a745;
    }
    
    span.pointer-main {
        cursor: pointer;
    }
    .card-cart {
        background-color: #F9F9F9;
        border: 1px solid #EAEAEA;
        width: 100%;
        height: auto;
    }

    .line-cart {
        width: 95%;
        border-bottom: 1px solid #EAEAEA;
        margin: auto;
    }

    .text-price {
        font-size: 1rem;
        font-weight: 600;
    }

    .w-20 {
        width: 20%;
    }

    .product-qty {
        //width: 425px;
        .cart-plus-min {
            display: inline-block;
            height: 40px;
            padding: 0;
            position: relative;
            width: 100px;
        .qtybut {
            color: black;
            cursor: pointer;
            float: inherit;
            font-size: 16px;
            margin: 0;
            position: absolute;
            transition: all 0.3s ease 0s;
            width: 20px;
            text-align: center;
            top: 0;
            height: 40px;
        }
        .dec.qtybut {
            border-right: 1px solid #e5e5e5;
            left: 0;
        }
        .inc.qtybut {
            border-left: 1px solid #e5e5e5;
            right: 0;
        }
        input.cart-plus-min-box {
            color: $dark;
            float: left;
            font-size: 14px;
            height: 40px;
            margin: 0;
            width: 100px;
            background-color: transparent;
            border: 1px solid #e1e1e1;
            padding: 0;
            text-align: center;
        }
    }

    .product-remov {

        button {
            color: #666;
            font-size: 15px;
            margin: 10px 0;
            padding: 0;
            &:hover {
                color: $theme-color;
            }
        }
    }
}
</style>