<template>
    <div>
        <!-- <div class="fixed-bottom bg-warning text-center p-3">
            <h2>Estamos teniendo dificultades técnicas debido a la cantidad de pedidos recibidos. Por favor si desea realizar un pedido hagaló por WhatsApp en el número 613 036 942, gracias por su confianza y perdonen las molestias.</h2>
        </div> -->

        <footer class="footer-area bg-cybermonday pt-5">
            <div class="container-fluid ps-lg-5 pe-lg-5">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="footer-widget mb-30">
                            <div class="footer-title">
                                <h3 class="text-custom-gray">¿Quieres estar a la última?</h3>
                            </div>
                            <div class="subscribe-style">
                                <p class="text-custom-gray">Recibe ofertas, descuentos y las últimas novedades.</p>
                                <div class="subscribe-form">
                                    <button id="subscribe" type="submit" class="btn btn-suscribe-custom  border-white-solid" name="subscribe" title="Quiero suscribirme" @click="showPopUp">
                                        <span class="text-custom-gray">Quiero suscribirme</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="footer-widget mb-30 ml-75">
                            <div class="footer-title text-center">
                                <h3 class="text-custom-gray">Pago Seguro</h3>
                            </div>
                            <p class="text-center text-custom-gray">Utilizamos seguridad SSL encriptada para asegurar que tus datos están 100% seguros.</p>
                            <div class="text-center">
                                <nuxt-img class="ms-2" provider="customProvider" src="storage/payment/tarjetas.webp" alt="tarjetas.webp" width="100" height="29" loading="lazy"/>
                                <nuxt-img class="ms-2" provider="customProvider" src="storage/payment/bizum.webp" alt="bizum.webp" width="100" height="29" loading="lazy"/>
                                <nuxt-img class="ms-2" provider="customProvider" src="storage/payment/paypal.svg" alt="paypal.svg" width="100" height="32" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="footer-widget mb-30 ml-75">
                            <div class="footer-title text-center">
                                <h3 class="text-custom-gray">Síguenos en las redes</h3>
                            </div>
                            <div class="footer-list d-flex justify-content-around">
                                <ul>
                                    <li><a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook" class="text-custom-gray"><fa-icon icon="fa-brands fa-facebook-f" class="me-2 text-custom-gray" />Facebook</a></li>
                                    <li><a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram" class="text-custom-gray"><fa-icon icon="fa-brands fa-instagram" class="me-2 text-custom-gray" />Instagram</a></li>
                                    <li><a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok" class="text-custom-gray"><fa-icon icon="fa-brands fa-tiktok" class="me-2 text-custom-gray"/>TikTok</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="text-center footer-widget">
                            <div class="footer-title">
                                <h3 class="text-custom-gray">¿Tienes dudas sobre tu pedido? ¡Llámanos!</h3>
                            </div>
                            <p class="text-custom-gray">De Lunes a Viernes de 10:00 AM a 20:00 PM</p>
                            <p>
                                <a href="tel:+34613036942" title="Teléfono" class="text-custom-gray"> 
                                    <i class="pe-7s-phone"></i>
                                    613 036 942
                                </a>
                            </p>
                            <p>
                                <a href="https://api.whatsapp.com/send/?phone=34613036942&text=Hola%2C+quisiera%20informaci%C3%B3n..." target="_blank" title="Whatsapp">
                                    <nuxt-img provider="customProvider" src="storage/social/whatsapp.webp" alt="Icono whatsapp" width="90" height="33" loading="lazy"/>
                                </a>
                            </p>
                            <p> 
                                <a href="mailto:info@trivicare.com" title="Email" class="text-custom-gray">
                                    <i class="pe-7s-mail"></i>
                                    info@trivicare.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-12 mt-4 mt-md-0">
                        <div class="footer-widget mb-30 ml-30 text-center">
                            <div class="footer-title">
                                <h3 class="text-custom-gray">¿Quienes somos?</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/about" class="text-custom-gray">Sobre nosotros</n-link></li>
                                    <li><n-link to="/contact" class="text-custom-gray">Puntos de venta</n-link></li>
                                    <li><n-link to="/contact" class="text-custom-gray">Contacto</n-link></li>
                                    <li><button @click="openSuggestionsModal" title="Abrir Buzón de sugerencias" class="text-custom-gray">Buzón de Sugerencias</button></li>
                                    <li><n-link to="/working-us" class="text-custom-gray">Trabaja con Nosotros</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                        <div class="footer-widget mb-30 ml-50 text-center">
                            <div class="footer-title">
                                <h3 class="text-custom-gray">Nuestras políticas</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/terms-conditions" class="text-custom-gray">Términos y Condiciones</n-link></li>
                                    <li><n-link to="/cookies-policy" class="text-custom-gray">Política de Cookies</n-link></li>
                                    <li><n-link to="/legal-warning" class="text-custom-gray">Aviso Legal y Protección de Datos</n-link></li>
                                    <li><n-link to="/questions" class="text-custom-gray">Preguntas Frecuentes</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-12">
                        <div class="footer-widget mb-30 ml-50 text-center">
                            <div class="footer-title">
                                <h3 class="text-custom-gray">Mi cuenta</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/my-account" class="text-custom-gray">Mi perfil</n-link></li>
                                    <li><n-link to="/my-orders" class="text-custom-gray">Mis pedidos</n-link></li>
                                    <li><n-link to="/custom-cookies" class="text-custom-gray">Mis cookies</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark mt-3">
                <div class="footer-widget text-center p-3">
                    <div class="footer-title">
                        <p class="text-light">© 2022 - {{ yearNow }} TriviCare Natural Cosmetics. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
        <SuggestionsModal />
        <NewsletterModal />
    </div>
</template>
<style lang="scss" scoped>

    .w-sm {
        margin: auto;
        width: 30rem;
    }

    @media only screen and (max-width: 575px) {
        .pt-100 {
            padding-top: 25px;
        }
    }

    .text-custom-gray {
        color: #fff !important;
    }

    .btn-suscribe-custom {
        border-color: #202020;
    }

    .btn-suscribe-custom:hover {
        background-color: #5cc1ca;
    }

    .border-white-solid {
        border: 1px solid #fff;
    }
</style>
<script>
    export default {
        data() {
            return {
                email: '',
                yearNow: new Date().getFullYear()
            }
        },

        components: {
            SuggestionsModal: () => import('@/components/SuggestionsModal.vue'),
            NewsletterModalVue: () => import('@/components/NewsletterModal.vue')
        },



        methods: {
            openSuggestionsModal() {
                this.$modal.show('suggestionsModal');
            },

            openNewsletterModal(email) {
                this.$modal.show('newsletterModal', { email: email });
            },

            showPopUp() {
                this.$root.$emit('showPopup', true);
            }
        }

    }
</script>