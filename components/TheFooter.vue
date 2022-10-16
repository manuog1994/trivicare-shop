<template>
    <footer class="footer-area bg-gray pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-sm-4">
                    <div class="copyright mb-30">
                        <div class="footer-logo">
                            <n-link to="/">
                                <img src="/img/logo/logo-footer.png" alt="logo">
                            </n-link>
                        </div>
                        <p>© 2022 <a href="#" target="_blank">TriviCare Natural Cosmetics.</a><br> Todos los derechos reservados.</p>
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
                                <li><n-link to="/contact">Seguimiento de envío</n-link></li>
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
                                <li><n-link to="/about">Politica de envío</n-link></li>
                                <li><n-link to="/about">Alérgenos</n-link></li>
                                <li><n-link to="/about">Preguntas Frecuentes</n-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-widget mb-30 ml-75">
                        <div class="footer-title">
                            <h3>SIGUENOS</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
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
                                <form class="mc-form">
                                    <input class="email" type="email" required="" placeholder="Introduce tu email..." name="email" >
                                    <button class="button" name="subscribe">Suscribirse</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>