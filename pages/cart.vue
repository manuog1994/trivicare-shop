<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderWithTopbar containerClass="container" />
            <Breadcrumb pageTitle="carrito" />
    
            <div class="cart-main-area pt-90 pb-100">
                <div class="container">
                    <div class="row" v-if="products.length > 0">
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
                                                <nuxt-img v-if="product.images.length > 0" :src="`https://api.trivicare.com/${product.images[0].path}`" :alt="product.name" /> 
                                                <nuxt-img v-else src="~/static/img/product/cosmetics/default.png" :alt="product.name" />
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
                                            <div class="product-quantity">
                                                <div class="row">
                                                    <div class="col-12 d-md-flex align-items-md-center">
                                                        <div class="me-3">
                                                            <h5>Cantidad: </h5>
                                                        </div>
                                                        <div class="cart-plus-minus">
                                                            <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                                                            <input class="cart-plus-minus-box" type="text" :value="product.cartQuantity" readonly>
                                                            <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 d-flex justify-content-start">
                                                        <div class="product-remove">
                                                            <button @click="removeProduct(product)">Eliminar</button>
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
                                    <h5 v-if="cuponStore.id"><span @click.prevent="deleteCupon" class="ms-2 pointer-main">
                                        <i class="fa fa-close"></i>
                                        </span>
                                        Código descuento
                                        <span class="text-danger">
                                             -{{ (subTotal * (cuponStore.discount / 100)).toFixed(2) }} &euro; 
                                        </span>
                                    </h5>
                                    <!-- <h5>IVA 21% <span>{{ (total * 0.21).toFixed(2) }} &euro;</span></h5> -->
                                    <h4 class="grand-total-title">Total  <span>{{ (total * 1.21).toFixed(2) }} &euro;</span></h4>
                                    <n-link to="/checkout">Tramitar pedido</n-link>
                                </div>
                            </div>
                            <!-- Bloque Código Descuento -->
                            <div class="mt-3">
                                <div class="discount-code-wrapper">
                                    <div class="title-wrap">
                                        <h4 class="cart-bottom-title section-bg-gray">Código Descuento</h4> 
                                    </div>
                                    <div class="discount-code">
                                        <p>Introduce el código descuento.</p>
                                        <p v-if="error" class="text-danger">{{ error }}</p>
                                        <form @submit.prevent="validationCupon">
                                            <input v-model="inputCupons" type="text" name="name" required>
                                            <button class="cart-btn-2" type="submit">Aplicar cupón</button>
                                        </form>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                        <div class="col-12">
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
            <TheFooter />
            <VueIfBot>
                <CookieConsent>
                    <template slot="message">
                        <span>
                            Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra 
                            <a class="text-info" href="/politica-de-cookies">Política de Cookies</a>.
                        </span>
                    </template>
                    <template slot="button">
                        <button class="btn border-1">Aceptar</button>
                    </template>
                </CookieConsent>
            </VueIfBot>
        </div>
    </client-only>
</template>

<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        auth: false,
        transition: {
            name: 'fade',
            mode: 'out-in'
        },
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter'),
            CookieConsent,
            VueIfBot,
        },
        data() {
            return {
                singleQuantity: 1,
                inputCupons: '',
                cupons: [],
                error: '',
                cupon: '',
                selectQuantity: 1,
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

            cuponStore() {
                return this.$store.getters.getCupon
            },

        },


        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
            setTimeout(() => {
                this.getCupons()
            }, 1000)

            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
            this.$auth.fetchUser();
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
                return product.price_base - (product.price_base * product.discount / 100)
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
                        this.cupons = Object.values(response.data.data).flat();
                    }).catch(error => {
                        console.log(error)
                    })
            },

            validationCupon() {
                this.cupons.filter(cupon => {
                    if (cupon.code == this.inputCupons) {
                        this.cupon = cupon;
                    }
                });

                const expires = new Date(this.cupon.validity);
                const today = new Date();
                if (this.cupon) {
                    if (expires < today) {
                        this.error = 'El cupón ha caducado';
                        this.inputCupons = '';
                    } else if (this.cupon.status == 1) {
                        this.error = 'El cupón ya no está disponible';
                        this.inputCupons = '';
                    } else {
                        this.error = '';
                        this.discountCupon = this.cupon.discount;
                        this.$store.commit('SET_CUPON', this.cupon);
                        this.inputCupons = '';
                        this.$notify({ title: 'Cupón aplicado!'})
                    }
                }else{
                    this.error = 'El cupón no es válido';
                    this.inputCupons = '';
                }
            },

            deleteCupon() {
                this.cupon = '';
                this.$store.commit('SET_CUPON', this.cupon);
                this.$notify({ title: 'Cupón eliminado!'})
            }
        },

        head() {
            return {
                title: "Carrito"
            }
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
        border-radius: 5px;
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

    .product-quantity {
        width: 425px;
        .cart-plus-minus {
            display: inline-block;
            height: 40px;
            padding: 0;
            position: relative;
            width: 100px;
        .qtybutton {
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
        .dec.qtybutton {
            border-right: 1px solid #e5e5e5;
            left: 0;
        }
        .inc.qtybutton {
            border-left: 1px solid #e5e5e5;
            right: 0;
        }
        input.cart-plus-minus-box {
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

    .product-remove {

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
