<template>
    <client-only>
        <div class="privacy-policy-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <Breadcrumb pageTitle="Trabaja con nosotros" />
                <div class="container mt-5 mb-5">
                    <h1 class="text-center mb-4">Trabaja con Nosotros</h1>

                    <p class="fa-2x">¡Únete a TriviCare!</p>
                    <p>En TriviCare, nuestra misión es embellecer el mundo a través de productos de cosmética natural, sostenibles y éticos. Creemos firmemente en la belleza que proviene de la naturaleza y estamos comprometidos con el bienestar de nuestro planeta y nuestra gente.</p>

                    <h2 class="mt-4 mb-3">¿Por qué trabajar con nosotros?</h2>
                    <ul>
                        <li><strong>Innovación:</strong> Estamos en la vanguardia de la ciencia natural, desarrollando productos que aman tu piel y el planeta.</li>
                        <li><strong>Sostenibilidad:</strong> Nos preocupamos profundamente por la Tierra, y todos nuestros productos y procesos están diseñados para minimizar nuestro impacto en el medio ambiente.</li>
                        <li><strong>Cultura y Comunidad:</strong> Creemos en el crecimiento personal y profesional. Nuestra cultura promueve la colaboración, la creatividad, y un ambiente de trabajo positivo y de apoyo.</li>
                    </ul>

                    <h2 class="mt-4 mb-3">¿Cómo aplicar?</h2>
                    <p>Si sientes que tu pasión y habilidades encajan con nuestra misión y valores, nos encantaría escuchar de ti. Simplemente:</p>
                    <ol>
                        <li>Envía tu CV y carta de presentación (opcional) a <a href="mailto:info@trivicare.com">info@trivicare.com</a>.</li>
                    </ol>

                    <h2 class="mt-4 mb-3">Proceso de selección:</h2>
                    <p>Una vez que hayamos recibido tu aplicación, nuestro equipo revisará tu perfil y te contactará si cumples con los requisitos para una entrevista.</p>

                    <h2 class="mt-4 mb-3">Beneficios:</h2>
                    <ul>
                        <li>Salud y Bienestar: Ofrecemos una variedad de beneficios de salud y bienestar para mantenernos felices y saludables.</li>
                        <li>Desarrollo Profesional: Oportunidades constantes para crecimiento y aprendizaje.</li>
                        <li>Descuentos: Disfruta de descuentos en nuestros increíbles productos.</li>
                        <li>Un Lugar de Trabajo Inclusivo: Valoramos la diversidad y fomentamos un ambiente de inclusión y respeto.</li>
                    </ul>

                    <h2 class="mt-4 mb-3">¿Quieres ser distribuidor/a o comercializar nuestros productos?:</h2>
                    <p>Si estás interesado/a en distribuir o comercializar nuestros productos, por favor envíanos un correo electrónico a <a href="mailto:info@trivicare.com">info@trivicare.com</a> o ponte en contacto por teléfono al número <a href="tel:+34613036942">613 036 942</a>.</p>


                    <p class="mt-4">En TriviCare, estamos emocionados por la oportunidad de trabajar con personas apasionadas y talentosas que comparten nuestra visión de una belleza natural y sostenible. Si esto resuena contigo, nos encantaría recibir tu aplicación.</p>
                    <p class="text-center mt-5">¡Gracias por considerar TriviCare como tu próximo lugar para crecer y florecer! 🌱</p>
                </div>
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            NavBottom: () => import('@/components/NavBottom'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                titleTemplate: "Trabaja con nosotros | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/legal-warning' }
                // ]
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
        },

        data() {
            return {
                searchChildren: '',
            }
        },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },
            
            searchOpacity(searchFather) {
                if (searchFather == true) {
                    document.getElementById("post-nav").classList.add("search-screen");
                } else {
                    document.getElementById("post-nav").classList.remove("search-screen");
                }
            }
        },
    };
</script>


