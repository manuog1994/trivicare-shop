<template>
    <div>
        <footer class="footer-area bg-gray pt-100 pb-70 d-none d-md-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-sm-4">
                        <div class="copyright mb-30">
                            <div class="footer-logo">
                                <n-link to="/">
                                    <nuxt-img provider="customProvider" src="logo-footer2.webp" alt="logo-footer"/>
                                </n-link>
                            </div>
                            <p>© 2022 TriviCare Natural Cosmetics.<br> Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="footer-widget mb-30 ml-30">
                            <div class="footer-title">
                                <h3>SOBRE NOSOTROS</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/about">Sobre nosotros</n-link></li>
                                    <li><n-link to="/contact">Puntos de venta</n-link></li>
                                    <li><n-link to="/contact">Contacto</n-link></li>
                                    <li><n-link to="/my-orders">Seguimiento de envío</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="footer-widget mb-30 ml-50">
                            <div class="footer-title">
                                <h3>LINKS PARA EL COMPRADOR</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/about">Devoluciones</n-link></li>
                                    <li><n-link to="/about">Política de envío</n-link></li>
                                    <li><n-link to="/about">Alérgenos</n-link></li>
                                    <li><n-link to="/about">Preguntas Frecuentes</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="footer-widget mb-30 ml-75">
                            <div class="footer-title">
                                <h3>SÍGUENOS</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook">Facebook</a></li>
                                    <li><a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram">Instagram</a></li>
                                    <li><a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok">TikTok</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget mb-30 ml-70">
                            <div class="footer-title">
                                <h3>SUSCRÍBETE</h3>
                            </div>
                            <div class="subscribe-style">
                                <p>Recibe por email ofertas y nuestras últimas novedades.</p>
                                <div class="subscribe-form">
                                    <form class="mc-form" @submit.prevent="subscribeForm" ref="form">
                                        <input type="email" required placeholder="  Introduce tu email..." name="email" >
                                        <button type="submit" class="button" name="subscribe" title="Suscribirse">Suscribirse</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer class="d-md-none bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 border-top">
                        <div class="footer-widget mb-3 text-center">
                            <div class="footer-title mt-3">
                                <h3>¿Quieres recibir ofertas, descuentos y la últimas novedades?</h3>
                            </div>
                            <div class="subscribe-style">
                                <p class="fst-italic">Introduce tu correo electrónico y suscríbete a nuestro newsletter.</p>
                                <div class="subscribe-form">
                                    <form class="mc-form" @submit.prevent="subscribeForm" ref="form">
                                        <input type="email" required placeholder="  Introduce tu email..." name="email" >
                                        <button type="submit" class="button" name="subscribe" title="Suscribirse">Suscribirse</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="text-center footer-widget mb-3 border-top">
                            <div class="footer-title mt-3">
                                <h3>Pago Seguro</h3>
                            </div>
                            <p>Utilizamos seguridad SSL encriptada para asegurar que tus datos están 100% seguros.</p>
                            <div>
                                <img class="ms-2" src="/payment/metodosdepago.webp" alt="metodos-de-pago.webp" width="250px"/>
                                <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="text-center footer-widget mb-3 border-top">
                            <div class="footer-title mt-3">
                                <h3>¿Tienes dudas sobre tu pedido? ¡Llámanos!</h3>
                            </div>
                            <p>De Lunes a Viernes de 10:00 AM a 20:00 PM</p>
                            <p>
                                <a href="tel:+34613036942" title="Teléfono">
                                    <i class="pe-7s-phone"></i>
                                    613 036 942
                                </a>
                            </p>
                            <p> 
                                <a href="mailto:info@trivicare.com" title="Email">
                                    <i class="pe-7s-mail"></i>
                                    info@trivicare.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="footer-widget mb-3 text-center border-top">
                            <div class="footer-title mt-3">
                                <h3>¿Quienes somos?</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/about">Sobre nosotros</n-link></li>
                                    <li><n-link to="/contact">Puntos de venta</n-link></li>
                                    <li><n-link to="/contact">Contacto</n-link></li>
                                    <li><n-link to="/my-orders">Seguimiento de envío</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4">
                        <div class="footer-widget mb-3 text-center border-top">
                            <div class="footer-title mt-3">
                                <h3>Nuestras políticas</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/terms-conditions">Términos y Condiciones</n-link></li>
                                    <li><n-link to="/send-policy">Política de envío</n-link></li>
                                    <li><n-link to="/privacy-policy">Política de Privacidad</n-link></li>
                                    <li><n-link to="/questions">Preguntas Frecuentes</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="footer-widget mb-3 text-center border-top">
                            <div class="footer-title mt-3">
                                <h3>Síguenos en nuestras redes</h3>
                            </div>
                            <div class="d-flex justify-content-evenly">
                                <a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook"><fa-icon icon="fa-brands fa-facebook-f" /></a>
                                <a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram"><fa-icon icon="fa-brands fa-instagram" /></a>
                                <a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok"><fa-icon icon="fa-brands fa-tiktok" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 bg-dark">
                        <div class="footer-widget mb-3 text-center">
                            <div class="footer-title mt-3">
                                <p class="text-light">© 2022 TriviCare Natural Cosmetics. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>

    .w-sm {
        margin: auto;
        width: 30rem;
    }

    @media only screen and (max-width: 575px) {
        .pt-100 {
            padding-top: 25px;
        }
    }

</style>
<script>
    export default {

        methods: {
            async subscribeForm() {
                const formData = new FormData(this.$refs.form);
                await this.$axios.post('/api/newsletter', formData)
                    .then(response => {
                        //console.log(response);
                        this.$notify({title: 'Gracias por suscribirte, pronto recibirás nuestras novedades.'});
                    })
                    .catch(error => {
                        //console.log(error);
                    });
            }
        }

    }
</script>