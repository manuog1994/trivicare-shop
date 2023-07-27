<template>
    <client-only>
        <div id="cart-sidebar" class="cart-sidebar bg-light" :class="miniCart">
            <div class="cart-sidebar-header">

                    <button id="hide-cart-btn" type="button" class="btn-close" @click="miniCart = false">
                    </button>

                    <h4 class="cart-title">
                        <i class="fa fa-cart-plus"></i>
                        Carrito
                    </h4>

            </div>
            <div class="cart-sidebar-body">
                <div class="shopping-cart-content" v-if="products?.length > 0">
                    <ul>
                        <li class="single-shopping-cart" v-for="product, index in products" :key="product.id + index">
                            <div class="shopping-cart-img">
                                <n-link :to="`/product/${product.slug}`">
                                    <nuxt-img loading="lazy" v-if="product.images?.length > 0 && product.variation == null" provider="customProvider" :src="product.images[0].path + '280x280/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name"/> 
                                    <nuxt-img loading="lazy" v-else-if="product.images?.length > 0 && product.variation != null" provider="customProvider" :src="getImageVariations(product)" /> 
                                    <nuxt-img loading="lazy" v-else provider="customProvider" src="nuxt/default280x280.webp" :alt="product.name"/>
                                </n-link>
                            </div>
                            <div class="shopping-cart-title">
                                <h4>
                                    <n-link :to="`/product/${product.slug}`">{{ product.name }} {{ product.variation != undefined ? `-- ${product.variation}` : '' }}</n-link>
                                </h4>
                                <div v-if="product.stock > 0">
                                    <h6>Cant: {{ product.cartQuantity }}</h6>
                                    <span v-if="product.discount === null">{{ ((product.price_base) * 1.21).toFixed(2) }} &euro;</span>
                                    <span v-if="product.discount !== null">{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                                </div>
                                <div v-else>
                                    <h6 class="text-danger">No hay stock</h6>
                                </div>
                            </div>
                            <div class="shopping-cart-delete">
                                <button @click="removeProduct(product)" title="Eliminar producto">
                                    <i class="fa fa-times-circle"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div class="shopping-cart-total">
                        <h4>Subtotal : <span class="shop-total">{{ (total * 1.21).toFixed(2) }} &euro;</span></h4>
                    </div>
                    <div class="shopping-cart-btn btn-hover text-center" @click="$emit('minicartClose')">
                        <n-link to="/cart" class="default-btn">ver carrito</n-link>
                        <a v-if="!errorStock" class="default-btn" @click="newReserve">Comprar Ahora</a>
                        <p class="text-danger" v-else>{{ errorStockMessage }}</p>
                    </div>
                </div>
                <div class="shopping-cart-content text-center" v-else>
                    <p>No hay productos en el carrito</p>
                </div>
            </div>
        </div>
    </client-only>
</template>

<style lang="scss" scoped>
.cart-sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 320px; /* Ajusta el ancho según tus necesidades */
  height: 100vh; /* 100vh cubre la altura completa de la pantalla */
  overflow: auto;
  transition: all 0.3s ease-in-out;
  transform: translateX(100%); /* Inicialmente, el carrito está oculto */
  z-index: 9999; /* Para asegurar que el carrito esté por encima de los demás elementos */
  border: 1px solid #ebebeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transform-origin: center top;
  transition: 0.2s;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
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

</style>

<script>
    import Swal from 'sweetalert2';
    export default {
        props: ["miniCart"],

        data() {
            return {
                errorStock: false,
                errorStockMessage: '',
                token_reserve: '',
            }
        },

        computed: {
            products() {
                return this.$store.getters.getCart
            },
            total() {
                return this.$store.getters.getTotal
            }
        },

        methods: {
            removeProduct(product) {
                // for notification
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado!',
                    text: 'Se ha eliminado correctamente',
                })
                this.$store.dispatch('removeProductFromCart', product)
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
            }
        }
    };
</script>