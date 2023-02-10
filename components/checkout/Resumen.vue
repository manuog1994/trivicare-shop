<template>
    <div class="col-lg-5">
        <div class="your-order-area">
            <h3>Tu Pedido</h3>
            <div class="your-order-wrap gray-bg-4">
                <div class="your-order-product-info">
                    <div class="your-order-top">
                        <ul>
                            <li>Producto</li>
                            <li>Total</li>
                        </ul>
                    </div>
                    <div class="your-order-middle">
                        <ul>
                            <client-only>
                                <li v-for="(product, index) in products" :key="index">
                                    <span class="order-middle-left">{{ product.name }}  x {{ product.cartQuantity }} unid(s)</span> <span class="order-price">{{ ((discountedPrice(product) * product.cartQuantity) * 1.21).toFixed(2) }} &euro;</span>
                                </li>
                            </client-only>
                        </ul>
                    </div>
                    <div>
                        <ul class="d-flex justify-content-between mb-2">
                            <li v-if="cuponStore.discount > 0" class="your-order-shipping">Código descuento</li>
                            <li v-if="cuponStore.discount > 0" class="text-danger">-{{ ((subTotal * (cuponStore.discount / 100)) * 1.21).toFixed(2)  }} &euro;</li>
                        </ul>
                    </div>
                    <div class="your-order-bottom">
                        <ul v-if="shippingMethod != null">
                            <li class="your-order-shipping">Gastos de envío</li>
                            <li v-if="(total * 1.21).toFixed(2) >= 50">Envio Gratis</li>
                            <li v-else-if="this.shippingMethod == 'pickup-point'">Recogida</li>
                            <li v-else>{{ getShipping(total) }} &euro;</li>
                        </ul>
                    </div>
                    <div class="your-order-bottom mt-2" v-if="shippingMethod == 'contrareembolso' ">
                        <ul>
                            <li class="your-order-shipping">Gastos de contrareembolso</li>
                            <li>+1.75&percnt;</li>
                        </ul>
                    </div>
                    <div class="your-order-total">
                        <ul>
                            <li class="order-total">Total</li>
                            <li v-if="(total * 1.21) < 50">{{ ((total * 1.21) + shipping).toFixed(2) }} &euro;</li>
                            <li v-else>{{ (total * 1.21).toFixed(2) }} &euro;</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <button @click="onClick" id="end-select" class="btn btn-theme rounded-0" disabled>Hacer Pedido</button>
            </div>
            <div class="">
                <Paypal :load="initPaypal" :shipping="shipping" :order_id="order_id"/>
            </div>
            <div class="">
                <StripeElement v-if="initStripe == true" :loadStripe="initStripe" :shipping="shipping" :order_id="order_id"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            required: true
        },

        shippingMethod: {
            type: String,
            required: true
        },

        userIdProfile: {
            type: String,
            required: true
        },

        invoice_paper: {
            type: Boolean,
            required: true
        },

        payment: {
            type: String,
            required: true
        },

        pickupId: { 
            type: String,
            required: true
        }
    },

    components: {
        StripeElement: () => import("@/components/StripeElement"),
        Paypal: () => import("@/components/Paypal"),
    },

    data() {
        return {
            initPaypal: false,
            initStripe: false,
            order_id: null,
            shipping: 0,
            token_reserve: null,
            pickupPointer: null,
        }
    },

    watch: {
        pickupId() {
            if (this.pickupId > 0) {
                this.$axios.get('/api/pickup-points?filter[id]=' + this.pickupId)
                    .then((response) => {
                        const responsePick = response.data.pickupPoints[0];
                        const state = responsePick.state;
                        this.pickupPointer = responsePick.name + ' - ' + state.city;
                    })
                    .catch((error) => {
                        //console.log(error);
                    })
            }
        }
    },

    computed: {
        products() {
            return this.$store.getters.getCart
        },

        subTotal() {
            return this.$store.getters.getSubTotal
        },

        cuponStore() {
            const cupon = this.$store.getters.getCupon;

            const today = new Date();
            const expires = new Date(cupon.validity);

            if (expires.getDate() <= today.getDate() && expires.getMonth() <= today.getMonth() && expires.getFullYear() <= today.getFullYear()) {
                return this.$notify({
                    group: 'foo',
                    title: 'Cupón caducado',
                    text: 'El cupón que has introducido ha caducado',
                    type: 'error'
                });
            } else {
                return cupon;
            }
        },

        guestStore() {
            return this.$store.getters.getGuest
        },
    },

    async mounted() {
        await this.getProducts();

        const reserve = new URLSearchParams(window.location.search).get('reserve');

        if(reserve != null) {
            this.token_reserve = reserve;
        }
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

        onClick() {
            this.createOrder();
        },

        async createOrder() {
            if(this.guestStore.length != 0) {
                await this.$axios.post('/api/guest-store', this.guestStore)
                .then(res => {
                    const resp = res.data.data;
                    const guest = { ...this.guestStore, id: resp.id}
                    this.$store.dispatch('addIdToGuest', guest);
                    const products = JSON.stringify(this.$store.getters.getCart);
                    const cupon = this.$store.getters.getCupon;
                    this.$axios.post('/api/orders', {
                        guest_id: this.guestStore.id,
                        user_id: this.guestStore.user_id,
                        user_profile_id: this.guestStore.user_profile_id,
                        products: products,
                        subTotal: this.$store.getters.getSubTotal,
                        total: this.$store.getters.getTotal,
                        coupon: cupon.code,
                        shipping: this.shipping,
                        shipping_method: this.shippingMethod,
                        note: this.note,
                        invoice_paper: this.invoice_paper,
                        token_id: this.token_id,
                        token_reserve: this.token_reserve,
                        payment_method: this.payment,
                        pickup_point: this.pickupPointer,
                    }).then((res) => {
                        //console.log(res.data);
                        if(this.payment == 'card') {
                            this.initStripe = true;
                            this.order_id = res.data.order.id;
                            document.getElementById('end-select').hidden = true;
                            document.getElementById('my-account-5').classList.add('collapse');
                        }else if(this.payment == 'paypal') {
                            this.initPaypal = true;
                            this.order_id = res.data.order.id;
                            document.getElementById('end-select').hidden = true;
                            document.getElementById('my-account-5').classList.add('collapse');
                        }else if(this.payment == 'contrareembolso') {
                            this.$router.push('/success?payment_intent_client_secret=' + this.token_id);
                        }
                    }).catch((err) => {
                        this.$axios.post('/api/error-message', {
                            message: error.response.data.message
                        })
                    })
                }).catch(err => {
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })
                });
            } else {

                const products = JSON.stringify(this.$store.getters.getCart);
                const cupon = this.$store.getters.getCupon;
                await this.$axios.post('/api/orders', {
                    guest_id: null,
                    user_id: this.$auth.user.id,
                    user_profile_id: this.userIdProfile,
                    products: products,
                    subTotal: this.$store.getters.getSubTotal,
                    total: this.$store.getters.getTotal,
                    coupon: cupon.code,
                    shipping: this.shipping,
                    shipping_method: this.shippingMethod,
                    note: this.note,
                    invoice_paper: this.invoice_paper,
                    token_id: this.token_id,
                    token_reserve: this.token_reserve,
                    payment_method: this.payment,
                    pickup_point: this.pickupPointer,
                }).then((res) => {
                    if(this.payment == 'card') {
                        this.initStripe = true;
                        this.order_id = res.data.order.id;
                        document.getElementById('end-select').hidden = true;
                        document.getElementById('my-account-5').classList.add('collapse');
                    }else if(this.payment == 'paypal') {
                        this.initPaypal = true;
                        this.order_id = res.data.order.id;
                        document.getElementById('end-select').hidden = true;
                        document.getElementById('my-account-5').classList.add('collapse');
                    }else if(this.payment == 'contrareembolso') {
                        this.$router.push('/success?payment_intent_client_secret=' + this.token_id);
                    }
                }).catch((err) => {
                    console.log(err)
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })
                })
            }

        },
        discountedPrice(product) {
            return product.price_base - (product.price_base * product.discount / 100)
        },

        getShipping(total) {
            if ((total * 1.21) < 50) {

                if(this.shippingMethod == 'gls') {
                    return this.shipping = 8.95;
                }else if(this.shippingMethod == 'correos') {
                    return this.shipping = 6.95;
                }
            }else if ((total * 1.21) > 50 || this.shiippingMethod == 'pickup-point') {
                return 'Gratis';
            }
        },
    }
}
</script>

<style>

</style>