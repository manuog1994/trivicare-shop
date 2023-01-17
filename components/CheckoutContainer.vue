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
                    <div v-if="$auth.loggedIn === true" class="col-lg-7">
                        <!-- select profile -->
                        <div v-if="$auth.user.user_profile.length > 0" class="col-12">
                            <h3 class="text-center mb-2">Estas a punto de terminar tu compra</h3>
                            <p class="text-center">Seleccione una de sus direcciones de envio, un método de pago, un tipo de envío y pulse en el botón "Hacer pedido".</p>
                            <div class="panel panel-default single-my-account mt-2">
                                <!-- Select profile -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-1">Elige una dirección </a></h3>
                                </div>
                                <div id="my-account-1" class="panel-collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="form-group p-4 p-md-5">
                                            <select class="form-select rounded-0" v-model="selected" @change="enableButton" ref="userIdProfile">
                                                <option v-if=" selected == 'Seleccione una dirección' " selected disabled>{{ selected }}</option>
                                                <option v-else selected disabled>Seleccione una dirección</option>
                                                <client-only>
                                                    <option v-for="profile in $auth.user.user_profile" :key="profile.id" :value="profile.id">{{ profile.name }} {{ profile.lastname }}, {{ profile.address }}, {{ profile.zipcode }} {{ profile.city }} ({{ profile.state }})</option>
                                                </client-only>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- Create new profile -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-2">Usar otra dirección de envío </a></h3>
                                </div>
                                <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="myaccount-info-wrapper">
                                            <NewProfile />
                                        </div>
                                    </div>
                                </div>
                                <!-- Payment -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Seleccione un método de pago </a></h3>
                                </div>
                                <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="p-4 p-md-5">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check mb-2 d-flex align-items-center">
                                                        <input class="form-check-input mb-1" type="radio" name="payment" id="card_payment" v-model="payment" value="card">
                                                        <label class="form-check-label ms-2" for="card_payment">
                                                            Pago por tarjeta
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <img class="ms-2" src="/payment/metodosdepago.webp" alt="metodos-de-pago.webp" width="100%"/>
                                                </div>
                                            </div>
                                            <div class="row mt-4 d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check d-flex align-items-center">
                                                        <input class="form-check-input mb-1" type="radio" name="payment" id="paypal_payment" v-model="payment" value="paypal">
                                                        <label class="form-check-label ms-2" for="paypal_payment">
                                                            Pago por Paypal
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6 d-flex justify-content-center">
                                                    <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                                                </div>
                                            </div>
                                            <!-- <div class="row mt-4 d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check d-flex align-items-center">
                                                        <input class="form-check-input mb-1" type="radio" name="payment" id="contrareembolso_payment" v-model="payment" value="contrareembolso">
                                                        <label class="form-check-label ms-2" for="contrareembolso_payment">
                                                            Pago por contra reembolso (el precio incrementará un 1.75%)
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6 d-flex justify-content-center">
                                                    <img class="ms-2" src="/payment/reembolso.webp" alt="reembolso.webp" width="50px" />
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <!-- Shipping -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-4">Selecciona una opción de envío </a></h3>
                                </div>
                                <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="p-4 p-md-5">
                                            <div v-if="payment == 'contrareembolso' " class="row mt-4 d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check">
                                                        <input class="form-check-input mb-1" type="radio" name="shipping" id="contrareembolso_shipping" v-model="shippingMethod" value="contrareembolso" checked>
                                                        <label class="form-check-label ms-2" for="contrareembolso_shipping">
                                                            Envío por Correos Contra Reembolso
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="d-flex justify-content-center">
                                                        <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div v-if="total * 1.21 < 50">
                                                    <div class="row d-flex align-items-center">
                                                        <div class="col-6 d-flex align-items-center">
                                                            <div class="form-check mb-2">
                                                                <input class="form-check-input mb-1" type="radio" name="shipping" id="correos" v-model="shippingMethod" value="correos">
                                                                <label class="form-check-label ms-2" for="correos">
                                                                    Envío por Correos 48h/72h
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex justify-content-center">
                                                                <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4 d-flex align-items-center">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input mb-1" type="radio" name="shipping" id="gls" v-model="shippingMethod" value="gls">
                                                                <label class="form-check-label ms-2" for="gls">
                                                                    Envío por GLS 24h/48h
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex justify-content-center">
                                                                <img src="/payment/gls.webp" alt="gls.webp" width="100px"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div class="row mt-4 d-flex align-items-center">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input mb-1" type="radio" name="shipping" id="correos" v-model="shippingMethod" value="correos">
                                                                <label class="form-check-label ms-2" for="correos">
                                                                    Envío Gratis
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex justify-content-center">
                                                                <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Order notes -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-5">Añade una nota a tu pedido</a></h3>
                                </div>
                                <div id="my-account-5" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="p-4 p-md-5">
                                            <div class="mb-2">
                                                <h4 class="mb-4">Aquí puedes dejarnos una nota sobre tu pedido (es opcional)</h4>
                                                <textarea v-model="note" name="note" id="note" cols="20" rows="5" placeholder="Escribe aquí tu nota"></textarea>
                                            </div>
                                            <div class="mt-5">
                                                <h5 class="mb-4">En TriviCare Natural Cosmetics pensamos en el medio ambiente, es por ello que no incluimos la factura en papel en vuestros pedidos, pero si os es imprescindible podeís marcar la siguiente opción:</h5>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="1" id="invoice" v-model="invoice_paper">
                                                    <label class="form-check-label" for="invoice">
                                                        Incluir factura en papel
                                                    </label>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-1" id="titleSelect">Introduzca sus datos de envío </a></h3>
                                </div>
                                <div id="my-account-1" class="panel-collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="myaccount-info-wrapper">
                                            <NewGuest />
                                        </div>
                                    </div>
                                </div>
                                <!-- Payment -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Seleccione un método de pago </a></h3>
                                </div>
                                <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="p-4 p-md-5">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check mb-2 d-flex align-items-center">
                                                        <input class="form-check-input mb-1" type="radio" name="payment" id="card_payment" v-model="payment" value="card">
                                                        <label class="form-check-label ms-2" for="card_payment">
                                                            Pago por tarjeta
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <img class="ms-2" src="/payment/metodosdepago.webp" alt="metodos-de-pago.webp" width="100%"/>
                                                </div>
                                            </div>
                                            <div class="row mt-4 d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check d-flex align-items-center">
                                                        <input class="form-check-input mb-1" type="radio" name="payment" id="paypal_payment" v-model="payment" value="paypal">
                                                        <label class="form-check-label ms-2" for="paypal_payment">
                                                            Pago por Paypal
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6 d-flex justify-content-center">
                                                    <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                                                </div>
                                            </div>
                                            <!-- <div class="row mt-4 d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check d-flex align-items-center">
                                                        <input class="form-check-input mb-1" type="radio" name="payment" id="contrareembolso_payment" v-model="payment" value="contrareembolso">
                                                        <label class="form-check-label ms-2" for="contrareembolso_payment">
                                                            Pago por contra reembolso (el precio incrementará un 1.75%)
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6 d-flex justify-content-center">
                                                    <img class="ms-2" src="/payment/reembolso.webp" alt="reembolso.webp" width="50px" />
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <!-- Shipping -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-4">Selecciona una opción de envío </a></h3>
                                </div>
                                <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="p-4 p-md-5">
                                            <div v-if="payment == 'contrareembolso' " class="row mt-4 d-flex align-items-center">
                                                <div class="col-6">
                                                    <div class="form-check">
                                                        <input class="form-check-input mb-1" type="radio" name="shipping" id="contrareembolso_shipping" v-model="shippingMethod" value="contrareembolso" checked>
                                                        <label class="form-check-label ms-2" for="contrareembolso_shipping">
                                                            Envío por Correos Contra Reembolso
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="d-flex justify-content-center">
                                                        <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div class="row d-flex align-items-center">
                                                    <div class="col-6 d-flex align-items-center">
                                                        <div class="form-check mb-2">
                                                            <input class="form-check-input mb-1" type="radio" name="shipping" id="correos" v-model="shippingMethod" value="correos">
                                                            <label class="form-check-label ms-2" for="correos">
                                                                Envío por Correos 48h/72h
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="d-flex justify-content-center">
                                                            <img src="/payment/correos.webp" alt="correos.webp" width="100px"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-4 d-flex align-items-center">
                                                    <div class="col-6">
                                                        <div class="form-check">
                                                            <input class="form-check-input mb-1" type="radio" name="shipping" id="gls" v-model="shippingMethod" value="gls">
                                                            <label class="form-check-label ms-2" for="gls">
                                                                Envío por GLS 24h/48h
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="d-flex justify-content-center">
                                                            <img src="/payment/gls.webp" alt="gls.webp" width="100px"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Order notes -->
                                <div class="panel-heading my-account-title">
                                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-5">Añade una nota a tu pedido</a></h3>
                                </div>
                                <div id="my-account-5" class="panel-collapse collapse" data-bs-parent="#faq">
                                    <div class="panel-body">
                                        <div class="p-4 p-md-5">
                                            <div class="mb-2">
                                                <h4 class="mb-4">Aquí puedes dejarnos una nota sobre tu pedido (es opcional)</h4>
                                                <textarea v-model="note" name="note" id="note" cols="20" rows="5" placeholder="Escribe aquí tu nota"></textarea>
                                            </div>
                                            <div class="mt-5">
                                                <h5 class="mb-4">En TriviCare Natural Cosmetics pensamos en el medio ambiente, es por ello que no incluimos la factura en papel en vuestros pedidos, pero si os es imprescindible podeís marcar la siguiente opción:</h5>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="1" id="invoice" v-model="invoice_paper">
                                                    <label class="form-check-label" for="invoice">
                                                        Incluir factura en papel
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Resumen del pedido -->
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
                                    <!-- <div>
                                        <ul class="d-flex justify-content-between mb-2">
                                            <li class="your-order-shipping">IVA 21 %</li>
                                            <li>{{ (total * 0.21).toFixed(2)  }} &euro;</li>
                                        </ul>
                                    </div> -->
                                    <div class="your-order-bottom">
                                        <ul v-if="shippingMethod != null">
                                            <li class="your-order-shipping">Gastos de envío</li>
                                            <li v-if="(total * 1.21).toFixed(2) >= 50">Envio Gratis</li>
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
                                            <li v-if="(total * 1.21).toFixed(2) < 50 && shippingMethod == 'contrareembolso'">{{ ( ((total * 1.21) + shipping) + (((total * 1.21) + shipping) * 1.75 / 100)).toFixed(2) }} &euro;</li>
                                            <li v-else-if="(total * 1.21).toFixed(2) > 50 && shippingMethod == 'contrareembolso'">{{ ( (total * 1.21) + ((total * 1.21) * 1.75 / 100)).toFixed(2) }} &euro;</li>
                                            <li v-else-if="(total * 1.21) < 50">{{ ((total * 1.21) + shipping).toFixed(2) }} &euro;</li>
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
                    <img src="/payment/error.webp" alt="success.webp" width="60">
                </div>
                <div class="text-center">
                    <h2>Su pedido ha sido cancelado</h2>
                    <p>El tiempo de reserva de su pedido, se ha agotado por lo tanto el nuestro sistema lo ha vuelto a reponer. Si desea volver a crear el pedido, comience de nuevo pulsado el botón.</p>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <n-link class="btn btn-theme rounded-0 w-50 m-auto" to="/cart">Comenzar de nuevo</n-link>
                </div>
            </div>
        </div>
        <LoginModal />
    </div>
</template>

<script>
    export default {
        
        components: {
            StripeElement: () => import("@/components/StripeElement"),
            Paypal: () => import("@/components/Paypal"),
            NewProfile: () => import("@/components/profile/NewProfile"),
            NewGuest: () => import("@/components/profile/NewGuest"),
            LoginModal: () => import("@/components/LoginModal"),
        },

        data() {
            return {
                shipping: 0,
                selected: 'Seleccione una dirección',
                disabled: true,
                userIdProfile: null,
                token_id: '',
                payment: null,
                shippingMethod: null,
                initPaypal: false,
                initStripe: false,
                order_id: 0,
                invoice_paper: false,
                note: '',
                btnGuest: true,
                token_reserve: '',
                countdown: '',
                cancelOrder: false,
                duration: 0,
            }
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

            guestStore() {
                return this.$store.getters.getGuest
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
                if(this.payment == 'contrareembolso') {
                    this.shippingMethod = 'contrareembolso';
                } else {
                    this.shippingMethod = null;
                }
            },

            shippingMethod() {
                this.disabled = false;
                if(this.payment != null && this.shippingMethod != null && this.disabled == false) {
                    document.getElementById('end-select').disabled = false;
                    document.getElementById('my-account-5').classList.remove('collapse');
                    document.getElementById('my-account-4').classList.add('collapse');
                    document.getElementById('my-account-3').classList.add('collapse');
                    document.getElementById('my-account-1').classList.add('collapse');
                }

                if(this.shippingMethod == 'contrareembolso') {
                    this.makeid(23);
                }
            },
        },

        beforeMount() {
            this.$root.$on('duration', data => {
                this.duration = data;
            })
        },

        async mounted() {
            await this.$axios.get('/sanctum/csrf-cookie');
            if(this.guestStore.length != 0) {
                this.formHidden = false;
                document.getElementById('titleSelect').innerHTML = 'Su dirección de envío';
                document.getElementById('my-account-3').classList.remove('collapse');
            };

            this.getProducts();
            const reserve = new URLSearchParams(window.location.search).get('reserve');

            if(reserve != null) {
                this.token_reserve = reserve;
            }
            
            const duration = this.$store.getters.getDuration;
            console.log(duration);
            this.startTimer(duration);
        },

        methods: {
            getCookie(name) {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if (parts.length == 2) return parts.pop().split(";").shift();
            },

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

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },

            enableButton(e) {
                this.userIdProfile = e.target.value;
                document.getElementById("my-account-3").classList.remove("collapse");
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
                        this.$axios.post('/api/error-message', {
                            message: error.response.data.message
                        })
                    })
                }
 
            },

            getShipping(total) {
                if ((total * 1.21) < 50) {
                    if(this.shippingMethod == 'gls') {
                        return this.shipping = 9.95;
                    }else if(this.shippingMethod == 'correos') {
                        return this.shipping = 8.95;
                    }else if(this.shippingMethod == 'contrareembolso') {
                        return this.shipping = 8.95;
                    }
                } else if ((total * 1.21) > 50 && this.payment == 'contrareembolso') {
                    return '+1.75%';
                }else {
                    return 'Gratis';
                }
            },

            async resendEmail() {
                await this.$axios.post('/api/resend-email/' + this.$auth.user.id)
                .then(res => {
                    this.$notify({ title: 'Email reenviado'});
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
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