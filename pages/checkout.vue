<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderWithTopbar containerClass="container" />
            <Breadcrumb pageTitle="Dirección de Envío" />
            
            <div v-if="$auth.user.email_verified_at != null" class="checkout-area pt-95 pb-100">
                <div class="container">
                     <div class="row" v-if="products.length > 0">
                        <div v-if="$auth.user.user_profile.length > 0" class="col-lg-7">
                            <h3 class="text-center mb-2">Estas a punto de terminar tu compra</h3>
                            <p class="text-center">Seleccione una de sus direcciones de envio, un método de pago, un tipo de envío y pulse en el botón "Pagar Ahora".</p>
                            <div class="panel panel-default single-my-account mt-2">
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-1">Elige una dirección </a></h3>
                                </div>
                                <div id="my-account-1" class="panel-collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="form-group p-5">
                                            <select class="form-select" v-model="selected" @change="enableButton" ref="userIdProfile">
                                                <option v-if=" selected == 'Seleccione una dirección' " selected disabled>{{ selected }}</option>
                                                <option v-else selected disabled>Seleccione una dirección</option>
                                                <client-only>
                                                    <option v-for="profile in $auth.user.user_profile" :key="profile.id" :value="profile.id">{{ profile.name }} {{ profile.lastname }}, {{ profile.address }}, {{ profile.zipcode }} {{ profile.city }} ({{ profile.state }})</option>
                                                </client-only>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-2">Usar otra dirección de envío </a></h3>
                                </div>
                                <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="myaccount-info-wrapper">
                                            <form @submit.prevent="createProfile" class="row">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>Nombre</label>
                                                        <input v-model="name" type="text" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>Apellidos</label>
                                                        <input v-model="lastname" type="text" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="billing-info">
                                                        <label>Dirección</label>
                                                        <input v-model="address" type="text" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="billing-info">
                                                        <label>Opcional</label>
                                                        <input v-model="optional_address" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4">
                                                    <div class="billing-info">
                                                        <label>Código Postal</label>
                                                        <input v-model="zipcode" type="number" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8">
                                                    <div class="billing-info">
                                                        <label>Ciudad</label>
                                                        <input v-model="city" type="text" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>Provincia</label>
                                                        <input v-model="state" type="text" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>País</label>
                                                        <input v-model="country" type="text" required>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5 col-md-5">
                                                    <div class="billing-info">
                                                        <label>Teléfono</label>
                                                        <input v-model="phone" type="number" required>
                                                    </div>
                                                </div>
                                                <div class="form-check ms-3 mb-4">
                                                    <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" v-model="checked">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        He leído y acepto la <a href="#" title="Ver política de privacidad">política de privacidad</a>.
                                                    </label>
                                                </div>
                                                <div class="billing-btn">
                                                    <button class="btn btn-form" :class="{'disabled': checked ? false : true}" type="submit" title="Guardar">Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Seleccione un método de pago </a></h3>
                                </div>
                                <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="ms-2 p-5">
                                            <div class="form-check mb-2 d-flex align-items-center">
                                                <input class="form-check-input mb-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="payment" value="card">
                                                <label class="form-check-label ms-2" for="flexRadioDefault1">
                                                    Pago por tarjeta
                                                </label>
                                                <img class="ms-2" src="/payment/metodosdepago.webp" alt="metodos-de-pago.webp" width="50%" />
                                            </div>
                                            <div class="form-check d-flex align-items-center">
                                                <input class="form-check-input mb-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="payment" value="paypal">
                                                <label class="form-check-label ms-2" for="flexRadioDefault2">
                                                    Pago por Paypal
                                                </label>
                                                <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="30%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-4">Selecciona el tipo de envío </a></h3>
                                </div>
                                <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="ms-2 p-5">
                                            <div class="form-check mb-2 d-flex align-items-center">
                                                <input class="form-check-input mb-1" type="radio" name="flexRadio" id="flexRadioDefault3" v-model="shippingMethod" value="correos">
                                                <label class="form-check-label ms-2" for="flexRadioDefault3">
                                                    Envío por Correos 48h/72h
                                                </label>
                                                <img class="ms-2" src="/payment/correos.webp" alt="correos.webp" width="20%" />
                                                <span class="ms-5">{{ getShipping(total) }} &euro;</span>
                                            </div>
                                            <div class="form-check d-flex align-items-center">
                                                <input class="form-check-input mb-1" type="radio" name="flexRadio" id="flexRadioDefault4" v-model="shippingMethod" value="gls">
                                                <label class="form-check-label ms-2" for="flexRadioDefault4">
                                                    Envío por GLS 24h/48h
                                                </label>
                                                <img class="ms-5" src="/payment/gls.webp" alt="gls.webp" width="10%" />
                                                <span style="margin-left:5.7rem;">{{ getShipping(total) }} &euro;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="col-lg-7">
                            <div class="billing-info-wrap">
                                <h3>Datos de envío y facturación</h3>
                                <form @submit.prevent="createProfile" class="row">
                                    <div class="col-lg-5 col-md-5">
                                        <div class="billing-info mb-20">
                                            <label>Nombre</label>
                                            <input v-model="name" type="text" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-md-7">
                                        <div class="billing-info mb-20">
                                            <label>Apellidos</label>
                                            <input v-model="lastname" type="text" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Dirección</label>
                                            <input v-model="address" class="billing-address" placeholder="Calle y número" type="text" required>
                                            <input v-model="optional_address" placeholder="Opcional" type="text">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Ciudad</label>
                                            <input v-model="city" type="text" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-20">
                                            <label>Provincia</label>
                                            <input v-model="state" type="text" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-20">
                                            <label>Código Postal</label>
                                            <input v-model="zipcode" type="text" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-20">
                                            <label>Teléfono</label>
                                            <input v-model="phone" type="text" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-20">
                                            <label>País</label>
                                            <input v-model="country" type="text" required>
                                        </div>
                                    </div>
                                    <div class="form-check ms-4">
                                        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" v-model="checked">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            He leído y acepto la <a href="#" title="Ver política de privacidad">política de privacidad</a>.
                                        </label>
                                    </div>
                                    <div class="billing-btn mt-5">
                                        <button class="btn btn-form" :class="{'disabled': checked ? false : true}" type="submit" title="Guardar">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Resumen del pedio -->
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
                                                <li v-if="cuponStore.discount > 0" class="text-danger">-{{ (subTotal * (cuponStore.discount / 100)).toFixed(2)  }} &euro;</li>
                                            </ul>
                                        </div>
                                        <!-- <div>
                                            <ul class="d-flex justify-content-between mb-2">
                                                <li class="your-order-shipping">IVA 21 %</li>
                                                <li>{{ (total * 0.21).toFixed(2)  }} &euro;</li>
                                            </ul>
                                        </div> -->
                                        <div class="your-order-bottom">
                                            <ul>
                                                <li class="your-order-shipping">Gastos de envío</li>
                                                <li v-if="(total * 1.21).toFixed(2) >= 50">Envio Gratis</li>
                                                <li v-else>{{ getShipping(total) }} &euro;</li>
                                            </ul>
                                        </div>
                                        <div class="your-order-total">
                                            <ul>
                                                <li class="order-total">Total</li>
                                                <li v-if="(total * 1.21).toFixed(2) <= 50">{{ ((total * 1.21) + shipping).toFixed(2) }} &euro;</li>
                                                <li v-else>{{ (total * 1.21).toFixed(2) }} &euro;</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <button @click="onClick" id="end-select" class="btn btn-theme" disabled>Hacer Pedido</button>
                                </div>
                                <div>
                                    <Paypal :load="initPaypal" :shipping="shipping" :order_id="order_id"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="$auth.user.email_verified_at == null" class="my-account-area pb-80 pt-100 text-center">
                <h1 class="mb-5">Su cuenta no está verificada</h1>
                <p>Por favor, para realizar está y otras acciones debe ir a su cuenta de email y buscar el correo electrónico "Trivicare.com | Verificación de correo electrónico".</p>
                <p>Si no lo encuentra, revise su carpeta de spam o <a @click.prevent="resendEmail">pulse aquí</a> para generar un nuevo correo.</p>
            </div>

            <TheFooter />
            <StripeElement/>

        </div>
    </client-only>
</template>

<script>
    export default {
        middleware: 'auth',
        transition: {
            name: 'fade',
            mode: 'out-in'
        },

        data() {
            return {
                shipping: 0,
                selected: 'Seleccione una dirección',
                name: '',
                lastname: '',
                address: '',
                optional_address: '',
                city: '',
                state: '',
                zipcode: '',
                phone: '',
                country: '',
                disabled: true,
                userIdProfile: null,
                token_id: '',
                checked: false,
                payment: null,
                shippingMethod: null,
                initPaypal: false,
                order_id: 0,

            }
        },
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            StripeElement: () => import("@/components/StripeElement"),
            Paypal: () => import("@/components/Paypal"),
            TheFooter: () => import("@/components/TheFooter"),
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
        },

        watch: {
            payment() {
                document.getElementById('my-account-4').classList.remove('collapse');
            },

            shippingMethod() {
                if(this.payment != null && this.shippingMethod != null && this.disabled == false) {
                    document.getElementById('end-select').disabled = false;
                }
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 1000);
            });
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
            onClick() {
                this.createOrder();
            },

            async createProfile() {
                const response = await this.$axios.post('/api/register-profile', {
                    user_id: this.$auth.user.id,
                    name: this.name,
                    lastname: this.lastname,
                    address: this.address,
                    optional_address: this.optional_address,
                    city: this.city,
                    state: this.state,
                    zipcode: this.zipcode,
                    phone: this.phone,
                    country: this.country,    
                })
                this.name = '';
                this.lastname = '';
                this.address = '';
                this.optional_address = '';
                this.city = '';
                this.state = '';
                this.zipcode = '';
                this.phone = '';
                this.country = '';
                this.$auth.fetchUser()
                this.$notify({ type: 'success', text: 'Dirección creada correctamente' })
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },

            enableButton(e) {
                this.disabled = false;
                this.userIdProfile = e.target.value;
                document.getElementById("my-account-3").classList.remove("collapse");
            },

            async createOrder() {
                const products = JSON.stringify(this.$store.getters.getCart);
                const cupon = this.$store.getters.getCupon;
                await this.$axios.post('/api/orders', {
                    user_id: this.$auth.user.id,
                    user_profile_id: this.userIdProfile,
                    products: products,
                    subTotal: this.$store.getters.getSubTotal,
                    total: this.$store.getters.getTotal,
                    coupon: cupon.code,
                    shipping: this.shipping,
                }).then((res) => {
                    if(this.payment == 'card') {
                        this.$modal.show('StripeElement', {
                            orderId: res.data.order.id,
                            shipping: this.shipping,
                        });
                    }else {
                        this.initPaypal = true;
                        this.order_id = res.data.order.id;
                        document.getElementById('end-select').hidden = true;
                    }
                });
 
            },

            getShipping(total) {
                if (total < 50) {
                    this.shipping = 5.99;
                    return this.shipping;
                } else {
                    this.shipping = 0;
                    return this.shipping;
                }
            },

            async resendEmail() {
                await this.$axios.post('/api/resend-email/' + this.$auth.user.id)
                .then(res => {
                    console.log(res);
                    this.$notify({ title: 'Email reenviado'});
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            }
        },

        head() {
            return {
                title: "Resumen de tu Pedido",
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
    }
</style>

