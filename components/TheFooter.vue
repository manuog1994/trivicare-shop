<template>
    <footer class="footer-area bg-gray pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-sm-4">
                    <div class="copyright mb-30">
                        <div class="footer-logo">
                            <n-link to="/">
                                <nuxt-img src="logo-footer2.png" placeholder :modifiers="{ grayscale: true, tint: '#00DC82' }" />
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
                            <h3>SIGUENOS</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><a href="https://www.facebook.com/trivicare" target="_blank">Facebook</a></li>
                                <li><a href="https://www.instagram.com/trivicare" target="_blank">Instagram</a></li>
                                <li><a href="https://www.tiktok.com/@trivicare" target="_blank">TikTok</a></li>
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
                                    <input class="email" type="email" required placeholder="Introduce tu email..." name="email" >
                                    <button type="submit" class="button" name="subscribe">Suscribirse</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>

    .w-sm {
        margin: auto;
        width: 30rem;
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