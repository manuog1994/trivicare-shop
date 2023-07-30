<template>
    <client-only>
        <div id="cart-sidebar" class="cart-sidebar over-flow-active bg-light" :class="miniCart">
            <div class="cart-sidebar-header">
                    <button id="hide-cart-btn" type="button" class="btn-close" @click="closeMiniCart">
                    </button>

                    <h4 class="cart-title">
                        <i class="fa fa-cart-arrow-down"></i>
                        Carrito
                    </h4>
            </div>
            <div class="cart-sidebar-body">
                <div class="cart-main-area pt-90">
                    <div class="container-fluid">
                        <div class="row" v-if="products?.length > 0">
                            <div class="col-12 col-md-8">
                                <div>
                                    <h3 class="cart-page-title">Productos añadidos al carrito</h3>
                                </div>
                                <div class="">
                                    <div class="row line-cart mt-4">
                                        <div class="col-6">
                                            <h3 class="text-muted pb-md-2">Cesta</h3>
                                        </div>
                                        <div class="col-6" style="text-align:right;">
                                            <h4 class="d-none d-md-block me-md-4">Precio</h4>
                                        </div>
                                    </div>
                                    <client-only>
                                        <div class="row d-md-flex line-cart mt-md-4 mt-2" v-for="product, index in products" :key="product.id + 'product' + index">
                                            <div class="col-4 col-md-2 p-2 ms-4">
                                                <n-link :to="`/product/${product.slug}`">
                                                    <nuxt-img loading="lazy" v-if="product.images?.length > 0 && product.variation == null" provider="customProvider" :src="product.images[0].path + '280x280/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name"/> 
                                                    <nuxt-img loading="lazy" v-else-if="product.images?.length > 0 && product.variation != null" provider="customProvider" :src="getImageVariations(product)" /> 
                                                    <nuxt-img loading="lazy" v-else-if="product.image_path" provider="customProvider" :src="product.image_path" /> 
                                                    <nuxt-img loading="lazy" v-else provider="customProvider" src="nuxt/default280x280.webp" :alt="product.name"/>
                                                </n-link>
                                            </div>
                                            <div class="col-7 col-md-9 mt-md-3 mt-1">
                                                <div class="d-md-flex justify-content-md-between">
                                                    <div class="d-flex">
                                                        <n-link class="fs-5" :to="`/product/${product.slug}`">{{ product.name }} {{ product.variation != undefined ? `-- ${product.variation}` : '' }}</n-link>
                                                    </div>
                                                    <div class="d-md-flex justify-content-md-end">
                                                        <span class="d-none d-md-block" style="font-size:14px;color:#cfcfcf;margin-right:5px;padding-right:5px;text-decoration:line-through;" v-if="product.discount > 0">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
                                                        <p v-if="product.discount === null" class="p-0 m-0 d-md-none">Precio: <span class=" fw-semibold">{{ product.price_base === 0 ? 'Gratis' : ((product.price_base) * 1.21).toFixed(2) + ' &euro;' }}</span></p>
                                                        <p v-if="product.discount !== null" class="p-0 m-0 d-md-none">Precio: <span class="text-danger fw-semibold">{{ (discountedPrice(product) * 1.21).toFixed(2) }} €</span> <span class="old fw-semibold">{{ ((product.price_base) * 1.21).toFixed(2) }} €</span></p>
                                                        <p v-if="product.discount === null" class="text-price d-none d-md-block"><span class=" fw-semibold">{{ product.price_base === 0 ? 'Gratis' : ((product.price_base) * 1.21).toFixed(2) + ' &euro;'}}</span></p>
                                                        <p v-if="product.discount !== null" class="text-price d-none d-md-block">
                                                            <span class="text-danger fw-semibold">{{ (discountedPrice(product) * 1.21).toFixed(2) }} €</span> 
                                                            <br/>
                                                            <span class="old fw-semibold">{{ ((product.price_base) * 1.21).toFixed(2) }} €</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="d-md-flex justify-content-md-start mb-2 mt-md-1">
                                                    <p v-if="product.stock == 2 || product.stock == 1" class="p-0 text-danger fst-italic ms-md-2">{{ product.stock }} unidades disponibles en stock.</p>
                                                    <p v-else-if="product.stock === 0" class="p-0 text-danger fst-italic ms-md-2">No hay stock</p>
                                                    <p v-else class="p-0 m-0 text-success ms-md-2">En stock</p>
                                                </div>
                                                <div class="product-qty">
                                                    <div class="row">
                                                        <div v-if="product.stock != 0 && product.price_base !== 0" class="col-12 d-flex align-items-center">
                                                            <div class="me-3">
                                                                <h5>Cantidad: </h5>
                                                            </div>
                                                            <div class="cart-plus-min d-flex">
                                                                <button @click="decrementProduct(product)" class="btn-inc-qty" title="Quitar">-</button>
                                                                <input class="input-qty" type="text" :value="product.cartQuantity" readonly>
                                                                <button @click="incrementProduct(product)" class="btn-dcm-qty" title="Añadir">+</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 d-flex justify-content-start">
                                                            <div class="product-remov">
                                                                <button class="text-danger" @click="removeProduct(product, product.variation)" title="Eliminar">Eliminar</button>
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
                                <div class="banner-min-order mt-5" v-if="total * 1.21 <= 50">
                                    <p>
                                        <i class="fa fa-info-circle"></i>
                                        <span>Solo te falta {{ (50 - total * 1.21).toFixed(2) }} &euro; para conseguir tu envío gratis.</span>
                                    </p>
                                </div>
                                <div class="banner-free-gift" v-if="total * 1.21 <= 75">
                                    <p>
                                        <i class="fa fa-warning"></i>
                                        <span>Si añades {{ (75 - total * 1.21).toFixed(2) }} &euro; en productos podrás elegir un regalo.</span>
                                    </p>
                                </div>
                                <div class="mt-2">
                                    <div class="grand-total">
                                        <div class="title-wrap">
                                            <h4 class="cart-bottom-title section-bg-gary-cart">Resumen del Pedido</h4>
                                        </div>
                                        <h5>Subtotal <span>{{ (subTotal * 1.21).toFixed(2) }} &euro;</span></h5>
                                        <h4 class="grand-total-title">Total  <span>{{ (total * 1.21).toFixed(2) }} &euro;</span></h4>
                                        <a v-if="!errorStock" class="btn btn-theme rounded-0" @click="newReserve">Tramitar pedido</a>
                                        <p class="text-danger" v-else>{{ errorStockMessage }}</p>
                                    </div>
                                </div>
                                <div class="mt-4 text-center" v-if="total * 1.21 >= 75 && freeProduct == 0 || isVisible == true">
                                    <h4 class="mb-2">¡Enhorabuena ya puedes elegir un regalo! 🎁</h4>
                                    <button class="btn-gift" @click="openGiftModal">
                                        <i class="fa fa-gift"></i>
                                        Elegir regalo
                                    </button>
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
                                <ProductWrapperCosmeticsCart />
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
            </div>
            <GiftModal :size="size" @deleteButton="handleHiddenButton"/>
        </div>
    </client-only>
</template>

<style lang="scss" scoped>
.cart-sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%; /* Ajusta el ancho según tus necesidades */
  height: 100vh; /* 100vh cubre la altura completa de la pantalla */
  transition: all 0.3s ease-in-out;
  transform: translateX(100%); /* Inicialmente, el carrito está oculto */
  z-index: 9999; /* Para asegurar que el carrito esté por encima de los demás elementos */
  border: 1px solid #ebebeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transform-origin: center top;
  transition: 0.8s;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);

    &.over-flow-active {
      overflow-y: auto;
    }
  }
}

.cart-sidebar-header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #ebebeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-sidebar-body {
  padding: 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  cursor: pointer;
}

.cart-title {
  padding: 20px;
  text-align: center;
}

.btn-inc-qty, 
.btn-dcm-qty {
  background-color: transparent;
  border: 1px solid #ebebeb;
  cursor: pointer;
}

.input-qty {
  border: 1px solid #ebebeb;
  border-radius: 0;
  text-align: center;
  width: 35px;
  margin: 0;
  display: flex;
  justify-content: center;

  @media #{ $xs-layout } {
    width: 30px;
    margin: 0;
  }
}

.banner-min-order {
  background-color: #f39595;
  padding: 10px;
  margin-top: 10px;
}

.banner-free-gift {
  background-color: #f3e395;
  padding: 10px;
  margin-top: 10px;
}

.old {
  text-decoration: line-through;
  color: #979797;
}

.btn-gift {
    background-color: #C6D42E;
    border: none;
    padding: 15px 50px;
    color: #000;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #95a300;
        color: #000;
    }
}

</style>

<script>
    import Swal from 'sweetalert2';
    function delayImport(importPromise, delay) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(importPromise), delay);
        });
    }
    export default {
        props: ["miniCart"],

        data() {
            return {
                errorStock: false,
                errorStockMessage: '',
                token_reserve: '',
                size: 0,
                freeProduct: 0,
                isVisible: false,
            }
        },

        components: {
            ProductWrapperCosmeticsCart: () => import('@/components/product/ProductWrapperCosmeticsCart.vue'),
            GiftModal: () => delayImport(import('@/components/GiftModal.vue'), 1500),
        },

        mounted() {
            if(window.innerWidth < 780){
                this.size = 350
            }else{
                this.size = 800
            }

            if(this.total * 1.21 >= 75){
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }

            this.getFreeProduct();
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

            cart() {
                return this.$store.getters.getCart
            },

        },

        watch: {
            total() {
                // buscar producto de la carta que tengan un precio base de 0
                this.cart.filter((product) => {
                    if(product.price_base == 0){
                        const variation = product?.variation
                        // si el precio base es 0 entonces eliminamos el producto del carrito
                        this.$store.dispatch('removeProductFromCart', {product, variation})
                        this.isVisible = true;
                    }
                })

                if(this.total * 1.21 >= 75){
                    this.isVisible = true;
                } else {
                    this.isVisible = false;
                }

            }
        },

        methods: {
            removeProduct(product, variation) {
                if(product.price_base == 0){
                    this.freeProduct = 0;
                }
                this.$store.dispatch('removeProductFromCart', {product, variation})
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount.discount / 100)
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
                     }).catch(err => {
                    })
                }
            },

            getImageVariations(product) {
                const image = product.variations.map(item => {
                    if(item.model == product.variation || item.color == product.variation || item.size == product.variation){
                        return item.image.path + '280x280/' + item.image.name + '.' + item.image.ext;
                    }
                }).filter(item => {
                    return item != undefined;
                }).toString();

                return image;
            },

            closeMiniCart() {
                document.getElementById('cart-sidebar').classList.remove('visible');
                this.$emit('minicartRight', false);
            },

            incrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity < product.stock) {
                    this.$store.dispatch('addToCartItem', prod)
                }else{
                    Swal.fire({
                    title: 'Falta de stock!',
                    text: 'En estos momentos no disponemos de más stock',
                })
                }
            },

            decrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity > 1) {
                    this.$store.dispatch('decreaseProduct', prod)
                }
            },

            openGiftModal() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                this.$modal.show('giftModal');
            },

            getFreeProduct() {
                let products = this.cart;
                let freeProduct = products.filter((item) => {
                    if(item.price_base == 0){
                        this.freeProduct = ++this.freeProduct;
                        this.isVisible = false;
                    }
                })
            },

            handleHiddenButton() {
                this.isVisible = false;
                this.freeProduct = 1;
                this.$modal.hide('giftModal');
            },

            clearCart(){
                this.$store.commit('CLEAR_CART', {});
            }

        }
    };
</script>