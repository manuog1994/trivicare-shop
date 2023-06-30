<template>
    <div>
        <Nuxt />

        <client-only>
            <notifications position="bottom left" classes='vue-notification success' />
            <Popup v-if="popUpShow" />
        </client-only>

        <button class="scroll-top" @click="scrollToTop" :class="{ 'show': isVisible }">
            <i class="fa fa-angle-double-up"></i>
        </button>

        <div id="cookiesConsent" class="d-none d-flex justify-content-center mt-5 h-100 cookie-absolute">
            <div class="d-flex align-items-center align-self-center card p-3 text-center cookies"><img src="https://i.imgur.com/Tl8ZBUe.png" width="50"><span class="mt-2">¡Hola!, nuestra web usa cookies tanto para su funcionamiento, como para el análisis del tráfico y anuncios personalizados.</span><router-link class="d-flex align-items-center" to="/cookies-policy">¿No sabes de que te hablamos? Pulsa en el enlace para saber más<i class="fa fa-angle-right ml-2"></i></router-link>
                <button class="close-btn" @click="hiddenCookiesConsent"><i class="fa fa-close"></i></button>
                <div class="d-flex justify-content-around">
                    <button class="text-primary text-decoration-underline mt-4 px-4" @click="customCookies">Personalizar</button>
                    <button class="btn btn-dark mt-3 px-4" type="button" @click="acceptAll">Aceptar todas</button>
                </div>
            </div>
        </div>

     </div>
</template>

<script>
    import Popup from '@/layouts/Popup.vue';
    
    export default {
        name: "default",
        data() {
            return {
                isVisible: false,
                cookiesConsent: true,
                popUpShow: false,
            };
        },

        components: {
            Popup,
        },

        beforeMount() {
            this.$root.$on('closePopup', data => {
                this.popUpShow = data;
            })
        },

        mounted() {
            window.addEventListener("scroll", () => {
                let scroll = window.scrollY;
                if (scroll >= 500) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            });

            setInterval(() => {
                this.$store.dispatch('clearCartIfExpired')
            }, 60 * 60 * 1000)

            setTimeout(() => {
                if(!this.$store.state.cookiesAccepted) {
                    document.getElementById('cookiesConsent').classList.remove('d-none');
                }
            }, 1500);

            setTimeout(() => {
                this.popUpShow = this.$store.state.popUp;
            }, 2000)

        },

        methods: {
            scrollToTop() {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            },

            acceptAll() {
                this.$store.dispatch('acceptCookies', true)
                this.$store.dispatch('acceptGtm', true)
                window.location.reload()
            },

            hiddenCookiesConsent() {
                document.getElementById('cookiesConsent').classList.add('d-none')
            },
            
            customCookies() {
                document.getElementById('cookiesConsent').classList.add('d-none')
                this.$store.dispatch('acceptCookies', true)
                this.$router.push('/custom-cookies')
            },
        },
    };
</script>

<style>
.cookie-absolute {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
}
.cookies a {
  text-decoration: none;
  color: #000;
  margin-top: 8px;
}

.cookies a:hover {
  text-decoration: none;
  color: blue;
  margin-top: 8px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.close-btn i {
  color: #333;
}
</style>

