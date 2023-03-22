<template>
    <div class="order-1 order-lg-2 col-lg-4 mb-5">
        <div class="your-order-area">
            <div class="bg-dark p-3 d-flex align-items-center panel-heading">
                <h4 class="panel-title">
                    <a data-bs-toggle="collapse" href="#resumen" class="text-white">
                        Resumen de su pedido
                        <i class="fa fa-caret-down"></i>
                    </a>
                </h4>
            </div>
            <div class="your-order-wrap gray-bg-4 panel-collapse" :class="{'collapse': collapse ? true : false}" id="resumen" data-bs-parent="#faq">
                <div class="your-order-product-info panel-body">
                    <CouponForm />
                    <div class="your-order-top mt-2">
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
                            <div class="d-flex flex-column">
                                <li v-if="cuponStore.discount > 0" class="text-danger">-{{ ((subTotal * (cuponStore.discount / 100)) * 1.21).toFixed(2)  }} &euro;</li>
                                <a v-if="cuponStore.discount > 0" class="text-end text-decoration-underline" @click="clearCoupon"><small>Quitar</small></a>
                            </div>
                        </ul>
                    </div>
                    <div class="your-order-bottom">
                        <ul v-if="$store.getters.getShippingMethod != ''">
                            <li class="your-order-shipping">Gastos de envío</li>
                            <li v-if="total.toFixed(2) >= 50">Envio Gratis</li>
                            <li v-else-if="$store.getters.getShippingMethod == 'pickup-point'">Recogida</li>
                            <li v-else>{{ shippingAmount }} &euro;</li>
                        </ul>
                    </div>
                    <div class="your-order-bottom mt-2" v-if="$store.getters.getShippingMethod == 'contrareembolso' ">
                        <ul>
                            <li class="your-order-shipping">Gastos de contrareembolso</li>
                            <li>+1.75&percnt;</li>
                        </ul>
                    </div>
                    <div class="your-order-total">
                        <ul>
                            <li class="order-total">Total</li>
                            <li v-if="total < 50">{{ (total + shippingAmount).toFixed(2) }} &euro;</li>
                            <li v-else>{{ total.toFixed(2) }} &euro;</li>
                        </ul>
                    </div>
                </div>
            </div>
            <modal style="top: 60px" name="bizum" :width="'auto'" :height="'auto'" :scrollable="true" :adaptative="true" :clickToClose="false">
                <div class="mt-3 d-flex justify-content-center">
                    <img src="/payment/bizum.webp" alt="logo de bizum" width="200">
                </div>
                <div>
                    <p class="text-center mt-3">Su pedido se ha relizado correctamente. Para realizar el pago por Bizum, envíe el importe de <strong class="fs-5">{{ (total + shippingAmount).toFixed(2) }} &euro;</strong> al siguiente número:</p>
                    <p class="text-center mt-3 fs-5"><strong>+34 613 03 69 42</strong></p>
                    <p class="text-center mt-3">Indicando en el concepto el número de pedido: <strong class="fs-5">#{{ $store.getters.getOrderId }}</strong></p>
                    <p class="text-center mt-3">En unos minutos recibirá un correo con la información de pago y de su pedido, por si quiere realizar el pago después. Tras verificar su pago en un plazo máximo de 24h, recibira la confirmación de su pedido en el correo indicado en el pedido.</p>
                    <p class="text-center mt-3 fs-6">Gracias por su confianza.</p>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <button class="fs-6 btn bg-trivi-green text-white" @click="orderComplete">
                        Terminar
                    </button>
                </div>
            </modal>
            <modal style="top: 60px" name="transfer_bank" :width="'auto'" :height="'auto'" :scrollable="true" :adaptative="true" :clickToClose="false">
                <div>
                    <div class="d-flex justify-content-center mb-3">
                        <img src="/payment/success.webp" alt="icono de success" width="50">
                    </div>
                    <div class="text-center">
                        <h3>Su pedido se ha realizado correctamente</h3>
                    </div>                        
                    <div class="text-center">
                        <p>Vaya a la bandeja de entrada de su correo y siga las instrucciones, sino encuentra el correo en la bandeja de entrada, revise la bandeja de correo no deseado (SPAM).</p>
                        <p class="fs-5">Gracias por su confianza.</p>
                    </div>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <button class="fs-6 btn bg-trivi-green text-white btn-hover" @click="orderComplete">
                        Terminar
                    </button>
                </div>
            </modal>
            <modal name="pay" :width="'auto'" :height="'auto'" :scrollable="true" :adaptative="true" :clickToClose="false">
                <Paypal :load="initPaypal" />
                <div class="mt-4 d-flex justify-content-center">
                    <button class="fs-6 btn bg-trivi-red text-white" @click="cancelPayPal">
                        Cancelar
                    </button>
                </div>
            </modal>
            
            <RedsysPay v-if="initRedsys == true" /> 
        </div>
    </div>
</template>

<script>
export default {
    components: {
        RedsysPay : () => import("@/components/checkout/RedsysPay"),
        Paypal: () => import("@/components/checkout/Paypal"),
        CouponForm: () => import("@/components/checkout/CouponForm"),
    },

    data() {
        return {
            initPaypal: false,
            initRedsys: false,
            shipping: 0,
            token_reserve: null,
            pickupPointer: null,
            collapse: false,
            payment: '',
        }
    },

    watch: {
        pickupId() {
            //console.log('ha cambiado');
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
        },

        payment() {
            //console.log('ha cambiado el metodo de pago')
            if (this.payment == 'paypal') {
                this.createOrder();
                this.$modal.show('pay');
            } else if (this.payment == 'paylater') {
                this.createOrder();
                this.$modal.show('pay');
            } else if (this.payment == 'redsys') {
                this.createOrder();
                this.initRedsys = true;
            } else if (this.payment == 'bizum') {
                this.createOrder();
            } else if (this.payment == 'transfer_bank') {
                this.createOrder();
            }
        }

    },

    computed: {
        total() {
            return this.$store.getters.getTotal * 1.21
        },

        shippingAmount() {
            return this.$store.getters.getShippingAmount
        },

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

        pickupId() {
            return this.$store.getters.getPickupId
        },
    },

    beforeMount() {
        this.$root.$on('payment', (data) => {
            this.payment = data;
        });
    },

    async mounted() {
        await this.getProducts();

        // si la pantalla es menor a 768px se colapsa el carrito
        if (window.innerWidth < 768) {
            this.collapse = true;
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
                        shipping: this.$store.getters.getShippingAmount,
                        shipping_method: this.$store.getters.getShippingMethod,
                        note: this.$store.getters.getNote,
                        invoice_paper: this.$store.getters.getInvoicePaper,
                        token_id: this.token_id,
                        token_reserve: this.$store.getters.getReserve,
                        payment_method: this.$store.getters.getPaymentMethod,
                        pickup_point: this.pickupPointer,
                    }).then((res) => {
                        this.$store.commit('SET_ORDER_ID', res.data.order.id);
                        if(this.$store.getters.getPaymentMethod == 'redsys') {
                            this.$root.$emit('order_id', res.data.order.id);
                            this.initRedsys = true;
                        }else if(this.$store.getters.getPaymentMethod == 'paypal') {
                            this.initPaypal = true;
                        }else if(this.$store.getters.getPaymentMethod == 'paylater') {
                            this.initPaypal = true;
                        }else if(this.$store.getters.getPaymentMethod == 'transfer_bank') {
                            this.$modal.show('transfer_bank');
                        }else if(this.$store.getters.getPaymentMethod == 'bizum') {
                            this.$modal.show('bizum');
                        }
                    }).catch((err) => {
                        //console.log(err);
                        this.$axios.post('/api/error-message', {
                            message: error.response.data.message
                        })
                    })
                }).catch(err => {
                    //console.log(err);
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
                    user_profile_id: this.$store.getters.getUserProfileId,
                    products: products,
                    subTotal: this.$store.getters.getSubTotal,
                    total: this.$store.getters.getTotal,
                    coupon: cupon.code,
                    shipping: this.$store.getters.getShippingAmount,
                    shipping_method: this.$store.getters.getShippingMethod,
                    note: this.$store.getters.getNote,
                    invoice_paper: this.$store.getters.getInvoicePaper,
                    token_id: this.token_id,
                    token_reserve: this.$store.getters.getReserve,
                    payment_method: this.$store.getters.getPaymentMethod,
                    pickup_point: this.pickupPointer,
                }).then((res) => {
                    if(this.$store.getters.getPaymentMethod == 'redsys') {
                        this.$store.commit('SET_ORDER_ID', res.data.order.id);
                        this.$root.$emit('order_id', res.data.order.id);
                        this.initRedsys = true;
                    }else if(this.$store.getters.getPaymentMethod == 'paypal') {
                        this.$store.commit('SET_ORDER_ID', res.data.order.id);
                        this.initPaypal = true;
                    }else if(this.$store.getters.getPaymentMethod == 'paylater') {
                        this.$store.commit('SET_ORDER_ID', res.data.order.id);
                        this.initPaypal = true;
                    }else if(this.$store.getters.getPaymentMethod == 'transfer_bank') {
                        this.$store.commit('SET_ORDER_ID', res.data.order.id);
                        this.$modal.show('transfer_bank');
                    }else if(this.$store.getters.getPaymentMethod == 'bizum') {
                        this.$store.commit('SET_ORDER_ID', res.data.order.id);
                        this.$modal.show('bizum');
                    }
                }).catch((err) => {
                    //console.log(err)
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })
                })
            }

        },

        discountedPrice(product) {
            return product.price_base - (product.price_base * product.discount / 100)
        },

        cancelPayPal() {
            window.location.reload();
        },

        clearCoupon() {
            this.$store.commit('CLEAR_CUPON', {});
        },

        orderComplete() {
            this.$store.commit('CLEAR_GUEST');
            this.$store.commit('CLEAR_CART');
            this.$store.commit('CLEAR_CUPON');
            this.$store.commit('SET_STEP2', false);
            this.$store.commit('SET_STEP3', false);
            this.$store.commit('SET_STEP4', false);
            this.$store.commit('CLEAR_GUEST', {});
            this.$store.commit('SET_PAYMENT_METHOD', '');
            this.$store.commit('SET_SHIPPING_METHOD', '');
            this.$store.commit('SET_PICKUP_ID', '');
            this.$store.commit('SET_DURATION', 900);
            this.$store.commit('SET_USER_PROFILE_ID', '');
            this.$store.commit('SET_RESERVE', '');
            this.$store.commit('CLEAR_CUPON', {});
            this.$store.commit('SET_ORDER_ID', '');
            this.$store.commit('SET_PAYMENT_METHOD', '');
            this.$store.commit('SET_SHIPPING_METHOD', '');
            this.$store.commit('SET_SHIPPING_AMOUNT', 0);
            this.$store.commit('SET_CONDITIONS_STORE', false);
            this.$store.commit('SET_NEWSLETTER_STORE', false);
            this.$store.commit('SET_INVOICE_PAPER', false);
            this.$store.commit('SET_NOTE', '');
            this.$modal.hide('transfer_bank');
            this.$modal.hide('bizum');
            this.$router.push({path: '/'});
        }
    }
}
</script>

<style>

</style>