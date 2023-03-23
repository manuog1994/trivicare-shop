<template>
    <div>
        <div class="mt-md-5 pb-100">
            <div class="container-fluid" v-if="cancelOrder == false">
                <div class="row" v-if="products.length > 0">
                    <div class="col-12 order-2 col-lg-8 order-lg-1">
                        <NewProgressBar :email="email"/>
                        <EmailStep @stepEmail="handleEmail"/>
                        <AddressStep />
                        <SendStep />
                        <PayStep @payment="handlePayment" />
                    </div>
                    <!-- Resumen del pedido -->
                    <Resumen/>
                </div>
                <div v-else>
                    <div class="text-center p-5">
                        <h2>No tienes elementos para efectuar tu compra, vuelve a la tienda y agrega los productos al carrito.</h2>
                        <n-link class="btn btn-theme" to="/shop">Ir a la tienda</n-link>
                    </div>
                </div>
            </div>
            <div class="container" v-if="cancelOrder == true">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-center mt-4">
                                    <img src="/payment/error.webp" alt="icono de cancelado" width="50">
                                </div>
                                <div>
                                    <h3 class="text-center mt-3">Su pedido ha sido cancelado.</h3>
                                    <p class="text-center mt-3">Si quiere volver a empezar pulse en el botón.</p>
                                </div>
                                <div class="mt-4 d-flex justify-content-center">
                                    <n-link class="fs-6 btn bg-trivi-green text-white" to="/cart">
                                        Volver a empezar
                                    </n-link>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        components: {
            NewProfile: () => import("@/components/profile/NewProfile"),
            NewGuest: () => import("@/components/profile/NewGuest"),
            Resumen: () => import("@/components/checkout/Resumen"),
            NewProgressBar: () => import("@/components/checkout/NewProgressBar"),
            EmailStep: () => import("@/components/checkout/EmailStep"),
            AddressStep : () => import("@/components/checkout/AddressStep"),
            SendStep : () => import("@/components/checkout/SendStep"),
            PayStep : () => import("@/components/checkout/PayStep"),
        },

        data() {
            return {
                disabled: true,
                token_id: '',

                pickupId: '',

                btnGuest: true,
                url: process.env.url,

                reserve: '',
                email: '',

                cancelOrder: false,
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

            getReserve() {
                return this.$store.getters.getReserve
            },
        },

        beforeMount() {
            this.$root.$on('cancelOrder', (cancelOrder) => {
                this.cancelOrder = cancelOrder;
            });
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

            handlePay(res) {
                this.tramit = res;
            },

            // Funciones nueva pasarela de pago

            handleEmail(stepEmail) {
                console.log(stepEmail);
            },
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