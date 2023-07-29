<template>
    <client-only>
        <div class="about-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div class="container mt-5 mb-5">
                <div class="text-center">
                    <h2>Personalizar Cookies <img src="https://i.imgur.com/Tl8ZBUe.png" width="50"></h2>
                </div>
                <div class="mt-5">
                    <div class="d-flex justify-content-between mb-3">
                        <h4>Cookies funcionales</h4>
                        <button class="actived">Activado</button> 
                    </div>
                    <p>Son cookies que necesita la web para poder funcionar, estas no se pueden deshabilitar.</p>
                    <ul>
                        <li>admin_trivicare_session: Se utiliza para guardar un token de sesión, este consigue que se muestren los productos en la web.</li>
                        <li>XSRF-TOKEN: Se utiliza para guardar un token de sesión del usuario, guarda de forma cifrada la conexión entre el equipo y el servidor.</li>
                        <li>auth.strategy: Se utiliza para guardar un token de sesión de un usuario registrado, verifica y guarda al usuario de manera cifrada.</li>
                        <li>Otros: Pueden aparecer otros tokens asociados al funcionamiento, esto aparecen en con nombre de token, por ejemplo: <i>B1nKSyWGipJ3oOzkUkyt1Gf3CXUoMT7EnFmFpPBU.</i></li>
                    </ul>
                </div>
                <div class="mt-5">
                    <div class="d-flex justify-content-between">
                        <h4>Cookies Análisis y Marketing</h4>
                        <button id="toggle-btn" :class="{ 'inactive' : $store.state.gtm == false, 'active' : $store.state.gtm == true }" @click="statusGtm">{{ $store.state.gtm == true ? 'Activado' : 'Desactivado' }}</button>
                    </div>

                    <p>Son cookies que analizan el tráfico de la web, personalizan anuncios y proporciona una mejor experiencia de navegación al usuario.</p>
                    <h5>Meta (Facebook)</h5>
                    <ul>
                        <li>presence, xs, c_user, sb, datr, usida, fr, cppo, locale, wd, _fbp: Estas son cookies de Facebook, que tiene una duración de una duración máxima de un año. Se utiliza para rastrear la presencia, actividad del usuario en el sitio web de Facebook y recopilar datos sobre la interacción del usuario como conversiones o publicidad de la web.</li>
                    </ul>
                    <h5>Google</h5>
                    <ul>
                        <li>_ga, _ga_6FYD0CCL8E: Son cookies de Google, estas cookies son utilizadas para analizar el tráfico, medir conversiones y personalizar publicidad de Google.</li>
                    </ul>
                </div>
                <div class="mt-5">
                    <h4>Borrar Cookies</h4>
                    <p>Si no desea algunas de estas cookies podrá borrarlas sin ningún problema, en el caso de que use el navegador Google Chrome haga click derecho->Inspeccionar->Application->Storage->Cookies->https://trivicare.com y borre las que no desee. Las cookies funcionales aunque las borre volverán a aparecer, ya que sin ellas la web no podrían funcionar.</p>
                </div>
            </div>
            <NavBottom />
            <Breadcrumb pageTitle="Mis cookies" />
            <TheFooter />
        </div>
    </client-only>
</template>

<style>
#toggle-btn {
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #ccc;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

#toggle-btn.active {
  background-color: #00cc00;
}

.actived {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    background-color: #00cc0088;
}

#toggle-btn.inactive {
  background-color: #cc0000;
}
</style>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'), 
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                searchChildren: '',
            }
        },

        head() {
            return {
                titleTemplate: "Personalizar Cookies | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/about'}
                // ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Somos una empresa de cosmética natural y ecológica, con productos de alta calidad y con ingredientes naturales y ecológicos.'
                    }
                ],
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
            },

            statusGtm() {
                this.$store.commit('acceptGtm', !this.$store.state.gtm);
                window.location.reload()
            },
        },
    }
</script>