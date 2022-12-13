<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderWithTopbar containerClass="container" />
            <Breadcrumb pageTitle="Dirección de Envío" />
            
            <div v-if="$auth.user.email_verified_at != null" class="checkout-area pt-95 pb-100">
                <div class="container">
                     <div class="row" v-if="products.length > 0">
                        <div v-if="$auth.user.user_profile.length > 0" class="col-lg-7">
                            <h3 class="text-center mb-2">¿Donde se lo enviamos?</h3>
                            <p class="text-center">Para continuar seleccione una de sus direcciones de envio, y pulse el botón "Ir a la pasarela de pago"</p>
                            <h4 class="mt-3">Datos de envío</h4>
                            <div class="row">
                                <div class="form-group">
                                    <select class="form-select" v-model="selected" @change="enableButton" ref="userIdProfile">
                                        <option v-if=" selected == 'Seleccione una dirección' " selected disabled>{{ selected }}</option>
                                        <option v-else selected disabled>Seleccione una dirección</option>
                                        <client-only>
                                            <option v-for="profile in $auth.user.user_profile" :key="profile.id" :value="profile.id">{{ profile.name }} {{ profile.lastname }}, {{ profile.address }}, {{ profile.zipcode }} {{ profile.city }} ({{ profile.state }})</option>
                                        </client-only>
                                    </select>
                                </div>
                                <div v-if="selected.name" class="card mt-4">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ selected.name }} {{ selected.lastname }}</h5>
                                        <p class="card-title">{{ selected.address }}</p>
                                        <p class="card-title">{{ selected.zipcode }} {{ selected.city }} ({{ selected.state }})</p>
                                        <p class="card-title">{{ selected.country }}</p>
                                        <p class="card-title">{{ selected.phone }}</p>
                                        <p class="card-title">{{ $auth.user.email }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default single-my-account mt-5">
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
                                                        He leído y acepto la <a href="#">política de privacidad</a>.
                                                    </label>
                                                </div>
                                                <div class="billing-btn">
                                                    <button class="btn btn-form" :class="{'disabled': checked ? false : true}" type="submit">Guardar</button>
                                                </div>
                                            </form>
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
                                            He leído y acepto la <a href="#">política de privacidad</a>.
                                        </label>
                                    </div>
                                    <div class="billing-btn mt-5">
                                        <button class="btn btn-form" :class="{'disabled': checked ? false : true}" type="submit">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
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
                                <div class="place-order mt-25 d-flex justify-content-center">
                                    <button @click.prevent="createOrder" class="btn btn-theme" :class="{'disabled': disabled ? true : false }" id="next">Ir a la pasarela de pago</button>
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
                userIdProfile: '',
                token_id: '',
                checked: false,
            }
        },
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
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
            },

            makeid(length) {
                let result = '';
                let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                this.token_id = result;
            },

            async createOrder() {
                this.makeid(24);
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
                    token_id: this.token_id,
                }).then(() => {
                    this.$store.commit('CLEAR_CART');
                    this.$store.commit('CLEAR_CUPON');
                    window.location.href = 'https://api.trivicare.com/stripe/' + this.token_id;
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

