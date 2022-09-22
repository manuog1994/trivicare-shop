<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Resumen de tu pedido" />
        
        <div class="checkout-area pt-95 pb-100">
            <div class="container">
                <div class="row" v-if="products.length > 0">
                    <div v-if="profiles.length > 0" class="col-lg-7">
                        <h3 class="text-center mb-2">¿Donde se lo enviamos?</h3>
                        <p class="text-center">Para continuar seleccione una de sus direcciones de envio, y pulse el botón "Realizar Pedido"</p>
                        <h4 class="mt-3">Datos de envío</h4>
                        <div class="row">
                            <div class="form-group">
                                <label>Seleccione la dirección de envío</label>
                                <select class="form-select" v-model="selectedProfile" required>
                                    <option v-for="profile in profiles" :key="profile.id" :value="profile">{{ profile.name }} {{ profile.address }} {{ profile.zipcode }} {{ profile.city }} ({{ profile.state }})</option>
                                </select>
                            </div>
                            <div v-if="selectedProfile" class="card mt-4">
                                <div class="card-body">
                                    <h5 class="card-title">{{ selectedProfile.name }} {{ selectedProfile.lastname }}</h5>
                                    <p class="card-title">{{ selectedProfile.address }}</p>
                                    <p class="card-title">{{ selectedProfile.zipcode }} {{ selectedProfile.city }} ({{ selectedProfile.state }})</p>
                                    <p class="card-title">{{ selectedProfile.country }}</p>
                                    <p class="card-title">{{ selectedProfile.phone }}</p>
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
                                            <div class="col-lg-7 col-md-7">
                                                <div class="billing-info">
                                                    <label>Email</label>
                                                    <input :value="$auth.user.email" type="email" disabled>
                                                </div>
                                            </div>
                                            <div class="billing-btn">
                                                <button class="btn-form" type="submit">Guardar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="profiles.length <= 0" class="col-lg-7">
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
                                        <label>Email</label>
                                        <input v-model="$auth.user.email" type="text" disabled>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>País</label>
                                        <input v-model="country" type="text" required>
                                    </div>
                                </div>
                                <div class="billing-btn mt-5">
                                    <button class="btn-form" type="submit">Guardar</button>
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
                                            <li v-for="(product, index) in products" :key="index">
                                                <span class="order-middle-left">{{ product.name }}  x{{ product.cartQuantity }}</span> <span class="order-price">{{ product.total.toFixed(2) }} &euro;</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="your-order-bottom">
                                        <ul>
                                            <li class="your-order-shipping">Gastos de envío</li>
                                            <li v-if="total.toFixed(2) >= 50">Envio Gratis</li>
                                            <li v-else>{{ shipping }} &euro;</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-total">
                                        <ul>
                                            <li class="order-total">Total</li>
                                            <li>{{ (total + shipping).toFixed(2) }} &euro;</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="place-order mt-25">
                                <button class="btn-hover">Realizar pedido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TheFooter />
    </div>
</template>

<style>
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
</style>

<script>
    export default {
        middleware: 'auth',

        data() {
            return {
                profiles: {},
                shipping: 7.50,
                selectedProfile: null,

                name: '',
                lastname: '',
                address: '',
                optional_address: '',
                city: '',
                state: '',
                zipcode: '',
                phone: '',
                country: '',
                
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

            total() {
                return this.$store.getters.getTotal
            },
        },

        mounted() {
            this.getProfiles();
        },

        methods: {
            async getProfiles() {
                const response = await this.$axios.get('/api/show-profile/' + this.$auth.user.id)
                this.profiles = response.data.data
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
                this.getProfiles();


            },
            
        },

        head() {
            return {
                title: "Confirmar pedido",
            }
        },
    };
</script>
