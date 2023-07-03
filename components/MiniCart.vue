<template>
    <client-only>
        <div class="minicart-wrapper" :class="miniCart">
            <div class="shopping-cart-content" v-if="products?.length > 0">
                <ul>
                    <li class="single-shopping-cart" v-for="product in products" :key="product.id">
                        <div class="shopping-cart-img">
                            <n-link :to="`/product/${product.slug}`">
                                <nuxt-img v-if="product.images?.length != 0" provider="customProvider" :src="product.images[0].path + product.images[0].name + '280x280' + '.' + product.images[0].ext" :alt="product.name"/>
                                <nuxt-img loading="lazy" v-else provider="customProvider" src="nuxt/default280x280.webp" :alt="product.name"/>
                            </n-link>
                        </div>
                        <div class="shopping-cart-title">
                            <h4>
                                <n-link :to="`/product/${product.slug}`">{{ product.name}}</n-link>
                            </h4>
                            <div v-if="product.stock > 0">
                                <h6>Cant: {{ product.cartQuantity }}</h6>
                                <span>{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
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
                    <h4>Total : <span class="shop-total">{{ (total * 1.21).toFixed(2) }} &euro;</span></h4>
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
    </client-only>
</template>

<script>
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
            // async getProducts() {
            //     await this.$store.dispatch('getProducts', {
            //         perPage: '',
            //         page: '',
            //         category: '',
            //         search: '',
            //         slug: '',
            //         sort: '',
            //         tag: '',
            //         status: 2,
            //     })
            //     let prod = this.$store.getters.getProducts;
            //     let response = prod.data;
            //     // let cart = this.products;
            //     // let cartProducts = cart.map((item) => {
            //     //     return item.id
            //     // }).toString();

            //     // let products = response.filter((item) => {
            //     //     if (cartProducts.includes(item.id)) {
            //     //         return item
            //     //     }
            //     // })

            //     // cart.forEach((item) => {
            //     //     products.forEach((product) => {
            //     //         if (item.id == product.id) {
            //     //             product.cartQuantity = item.cartQuantity
            //     //         }
            //     //     })
            //     // })

            //     // this.$store.dispatch('refreshCart', products)

            // },

            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Producto eliminado'})
                this.$store.dispatch('removeProductFromCart', product)
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
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
                        //console.log(err)
                    })
                }
            },
        }
    };
</script>