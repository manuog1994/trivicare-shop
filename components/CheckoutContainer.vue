<template>
    <div>
        <div v-if="!cancelOrder" class="checkout-area mt-5 pb-100">
            <div class="text-center bg-blue-color p-2 fixed-bottom">
                <p>
                    <strong class="fs-5">Su pedido se cancelará en {{ countdown }}</strong>
                </p>
            </div>
            <div class="container-fluid">
                <div class="row" v-if="products.length > 0">
                    <!-- Auth user -->
                    <div v-if="$auth.loggedIn == true" class="col-lg-7">
                        <!-- select profile -->
                        <div v-if="$auth.user.user_profile.length > 0" class="col-12">
                            <h3 class="text-center mb-2">Estas a punto de terminar tu compra</h3>
                            <p class="text-center">Seleccione una de sus direcciones de envío, un método de pago, un tipo de envío y pulse en el botón "Hacer pedido".</p>
                            <div class="panel panel-default single-my-account mt-2">
                                <!-- Select profile -->
                                <SelectAddress @userIdProfile="handleUserIdProfile" />
                                <!-- Payment -->
                                <PaymentMethods @payment="handlePayment" />
                                <!-- Shipping -->
                                <ShippingMethods :total="total" @shippingMethod="handleShippingMethod"/>
                                <!-- Order notes -->
                                <OrderNotes @note="handleNote" @invoicePaper="handleInvoicePaper" />
                            </div>
                        </div>
                        <!-- create profile -->
                        <div v-else class="col-12">
                            <div>
                                <h4>Introduzca sus datos de envío</h4>
                            </div>
                            <div class="p-3">
                                <NewProfile />
                            </div>
                        </div>
                    </div>
                    <!-- Guest user -->
                    <div v-else class="col-lg-7">
                        <div class="text-center" :class="{'hidden': btnGuest ? false : true}">
                            <div class="mb-2">
                                <h3>Si estas registrado</h3>                        
                            </div>
                            <div class="p-3 p-md-5">
                                <button class="btn btn-theme rounded-0 w-50 m-auto" @click.prevent="openLoginModal" title="Iniciar sesión">Iniciar sesión</button>
                            </div>
                            <div class="p-3">
                                <p class="text-middle-p"><span class="text-middle-span">de lo contrario</span></p>
                            </div>
                            <div class="p-3 p-md-5">
                                <h3>Puedes realizar tu pedido como invitado</h3>
                            </div>
                            <div>
                                <a @click="btnGuest = false" class="btn btn-theme rounded-0 w-50" title="Realizar pedido como invitado">Como invitado</a>
                            </div>
                        </div>
                        <div class="" :class="{'hidden': btnGuest ? true : false}">
                            <h4 class="mb-4">Introduzca sus datos, seleccione un método de pago y uno de envío.</h4>
                            <div class="panel panel-default single-my-account mt-2">
                                <!-- Create guest profile -->
                                <GuestCreate />
                                <!-- Payment -->
                                <PaymentMethods @payment="handlePayment" />
                                <!-- Shipping -->
                                <ShippingMethods :total="total" @shippingMethod="handleShippingMethod"/>
                                <!-- Order notes -->
                                <OrderNotes @note="handleNote" @invoicePaper="handleInvoicePaper" />
                            </div>
                        </div>
                    </div>
                    <!-- Resumen del pedido -->
                    <Resumen :total="total" :shippingMethod="shippingMethod" :userIdProfile="userIdProfile" :invoice_paper="invoice_paper" :payment="payment" :pickupId="pickupId"/>
                </div>
                <div v-else>
                    <div class="text-center p-5">
                        <h2>No tienes elementos para efectuar tu compra, vuelve a la tienda y agrega los productos al carrito.</h2>
                        <n-link class="btn btn-theme" to="/shop">Ir a la tienda</n-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="cancelOrder == true" class="mt-100 pb-100">
            <div class="card rounded-0 p-2 m-2 p-md-5 m-md-5">
                <div class="d-flex justify-content-center mb-5">
                    <img loading="lazy" src="/payment/error.webp" alt="success.webp" width="60">
                </div>
                <div class="text-center">
                    <h2>Su pedido ha sido cancelado</h2>
                    <p>El tiempo de reserva de su pedido, se ha agotado por lo tanto el nuestro sistema lo ha vuelto a reponer. Si desea volver a crear el pedido, comience de nuevo pulsado el botón.</p>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <a class="btn btn-theme rounded-0 w-50 m-auto" :href="url + '/cart'">Comenzar de nuevo</a>
                </div>
            </div>
        </div>
        <LoginModal />
    </div>
</template>

<script>
    export default {
        
        components: {
            NewProfile: () => import("@/components/profile/NewProfile"),
            NewGuest: () => import("@/components/profile/NewGuest"),
            LoginModal: () => import("@/components/LoginModal"),
            ShippingMethods: () => import("@/components/checkout/ShippingMethods"),
            PaymentMethods: () => import("@/components/checkout/PaymentMethods"),
            OrderNotes: () => import("@/components/checkout/OrderNotes"),
            SelectAddress: () => import("@/components/checkout/SelectAddress"),
            Resumen: () => import("@/components/checkout/Resumen"),
            GuestCreate: () => import("@/components/checkout/GuestCreate"),
        },

        data() {
            return {
                disabled: true,
                token_id: '',

                userIdProfile: '',
                payment: '',
                shippingMethod: '',
                note: '',
                invoice_paper: false,
                pickupId: '',

                btnGuest: true,
                countdown: '',
                cancelOrder: false,
                duration: 0,
                url: process.env.url,
            }
        },

        computed: {
            total() {
                return this.$store.getters.getTotal
            },

            products() {
                return this.$store.getters.getCart
            },

            guestStore() {
                return this.$store.getters.getGuest
            },
        },

        beforeMount() {
            this.$root.$on('duration', data => {
                this.duration = data;
            })
        },

        async mounted() {
            if(this.guestStore.length != 0) {
                this.formHidden = false;
                document.getElementById('titleSelect').innerHTML = 'Su dirección de envío';
                document.getElementById('my-account-3').classList.remove('collapse');
            };

            const duration = this.$store.getters.getDuration;
            this.startTimer(duration);
        },

        methods: {
            getCookie(name) {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if (parts.length == 2) return parts.pop().split(";").shift();
            },

            async resendEmail() {
                await this.$axios.post('/api/resend-email/' + this.$auth.user.id)
                .then(res => {
                    this.$notify({ title: 'Email reenviado'});
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            },

            // countdown of 10 minutes
            startTimer(duration) {
                if (duration == null || duration == undefined) {
                    this.cancelOrder = true;
                }
                let timer = duration, minutes, seconds;
                this.interval = setInterval(() => {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    let count = minutes + ":" + seconds;

                    this.countdown = count;

                    let store = this.$store.commit('SET_DURATION', timer);

                    if (--timer < 0) {
                        timer = 0;
                        this.cancelOrder = true;
                        //this.$store.commit('CLEAR_CART');
                        //this.$router.push('/cart');
                    }
                }, 1000);
            },

            openLoginModal() {
                this.$modal.show('loginModal');
            },

            handleUserIdProfile(id) {
                this.userIdProfile = id;
            },

            handlePayment(payment) {
                this.payment = payment;
            },

            handleShippingMethod(shippingMethod, pickup_id) {
                this.shippingMethod = shippingMethod;
                this.pickupId = pickup_id;
            },

            handleNote(note) {
                this.note = note;
            },

            handleInvoicePaper(invoice_paper) {
                this.invoice_paper = invoice_paper;
            },
       },

        head() {
            return {
                script: [
                    {
                        src: "https://js.stripe.com/v3/",
                        async: true,
                    },

                    { 
                        src: 'https://www.paypal.com/sdk/js?client-id=' + process.env.PAYPAL_CLIENT_ID + '&currency=EUR',
                        async: true, 
                    }
                ]
            }
        },
    };
</script>

<style lang="scss">

    .btn-form{
        background-color: #f7f7f7;
        border: 1px solid #ebebeb;
        color: #333;
        font-size: 14px;
        font-weight: 400;
        padding: 10px 20px;
        text-transform: capitalize;
        border-radius: 0;
        margin: 0;
        display: inline-block;
        line-height: 1;
        cursor: pointer;
        -webkit-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }
    .btn-form:hover{
        background-color: #ebebeb;
    }

    .btn-theme{
        background-color: $theme-color;
        width: 100%;
        color: $white;
        font-weight: 500;
        margin-top: 10px;
        padding: 14px 30px 13px;
            &:hover {
                background-color: $dark;
            }
        @media only screen and (max-width: 400px) {
            width: 80%;
            padding: 13px 15px 13px;
        }
    }

    .text-middle-p {
        width: 20rem; 
        text-align: center; 
        border-bottom: 1px solid rgb(125, 125, 125); 
        line-height: 0.1em;
        margin: auto;
        @media only screen and (max-width: 350px) {
            width: 10rem;
        }
    } 

    .text-middle-span { 
        background:#fff; 
        padding:0 10px; 
    }

    .bg-red-color {
        background-color: #E94B4C;
    }

    .bg-green-color {
        background-color: #C6D42E;
    }

    .bg-purple-color {
        background-color: #DD88B8;
    }

    .bg-blue-color {
        background-color: #2AB5B2;
    }

    .bg-orange-color {
        background-color: #F9B34C;
    }

</style>