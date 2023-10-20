<template>
    <div>
        <Nuxt />

        <client-only>
            <notifications position="bottom left" classes='vue-notification success' />
        </client-only>

        <!-- Botón WhatsApp -->
        <div class="scroll-top" :class="{ 'show': isVisible }">
            <a href="https://api.whatsapp.com/send?phone=34613036942&text=Hola,%20necesito%20ayuda%20con%20mi%20pedido" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp text-white"></i>
            </a>
        </div>

        <!-- Cookies alert -->
        <div id="cookiesConsent" class="d-none d-flex justify-content-center mt-5 h-100 cookie-absolute">
            <div class="d-flex align-items-center align-self-center card p-3 text-center cookies"><img src="https://i.imgur.com/Tl8ZBUe.png" width="50" height="50" alt="Imagen de galletas"><span class="mt-2">¡Hola!, nuestra web usa cookies tanto para su funcionamiento, como para el análisis del tráfico y anuncios personalizados.</span><router-link class="d-flex align-items-center" to="/cookies-policy">¿No sabes de que te hablamos? Pulsa en el enlace para saber más<i class="fa fa-angle-right ml-2"></i></router-link>
                <button class="close-btn" @click="hiddenCookiesConsent" name="close-popup-top" title="Botón de cerrar cookies"><i class="fa fa-close"></i></button>
                <div class="d-flex justify-content-around">
                    <button class="text-primary text-decoration-underline mt-4 px-4" @click="customCookies">Personalizar</button>
                    <button class="btn btn-dark mt-3 px-4" type="button" @click="acceptAll">Aceptar todas</button>
                </div>
            </div>
        </div>

        <!-- Pop Up alert -->
        <div class="fondo" v-if="popUpShow">
            <div id="pop-up" class="popup-absolute">
                <button class="close-btn fs-1" @click="close" title="Botón de cerrar" name="Botón de cerrar pop up"><i class="fa fa-close"></i></button>
                <div class="d-flex align-items-center text-center">
                    <div class="row">
                        <div class="col-12 col-lg-6 img-popup me-auto">
                            <img src="/img/newsletter-lucia.jpg" alt="Imagen Pop Up" title="Imagen Pop Up" />
                        </div>
                        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center pop-up-newsletter ps-5 pe-5 p-lg-5 m-auto" v-if="!suscribed">
                            <img class="m-auto d-none d-lg-flex" src="/img/email.webp" alt="Icono de correo electrónico" title="Icono de correo electrónico" width="80" height="80"/>
                            <h2 class="mt-2 mt-xl-3">¡Suscríbete y entra en el sorteo de un cheque de 100€!</h2>
                            <p>Descubre lo mejor de la naturaleza para cuidar tu belleza. Suscríbete a nuestra newsletter y entra en el sorteo de un cheque regalo de 100€ para gastar en nuestra tienda.</p>
                            
                            <div class="">
                                <form @submit.prevent="subscribeForm" ref="suscribeFormPopUp" method="post">
                                    <div v-if="errorConditions" style="text-align: left;">
                                        <span class="text-danger">Debes aceptar los términos y condiciones.</span>
                                    </div>
                                    <div v-if="exist" style="text-align: left;">
                                        <span class="text-danger">Este correo electrónico ya esta suscrito.</span>
                                    </div>
                                    <div>
                                        <div class="mb-2">
                                            <input id="fullname" class="form-control border-black" type="text" placeholder="Introduce tu nombre y apellidos" name="fullname" required/>
                                        </div>
                                        <div class="mb-2">
                                            <input class="form-control border-black" type="email" placeholder="Introduce tu correo electrónico" name="email" required/>
                                        </div>
                                        <div class="mb-2">
                                            <input class="form-control border-black" type="tel" placeholder="Introduce tu número de teléfono" name="phone" required/>
                                        </div>
                                        <div class="form-check mt-1 d-flex">
                                            <input class="form-check-input border-black" type="checkbox" value="true" ref="checkAcceptConditions" @click="conditions = true">
                                            <label class="form-check-label ms-1" for="checkAcceptConditions">Acepto los <n-link to="/terms-conditions" class="text-primary">términos y condiciones</n-link> de uso.</label>
                                        </div>
                                        <div>
                                            <button id="suscribe-popup" class="btn bg-trivi-green mt-3 px-4" type="submit" name="suscribe-on-popup">Suscribirme</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="form-check p-3 d-flex justify-content-center">
                                    <button class="btn text-primary text-decoration-underline" @click="hiddenPopUpAllow" >No mostrar más esta ventana</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-self-center" v-if="suscribed">
                            <img class="m-auto mt-2" src="/img/celebration.webp" alt="Icono de celebración" title="Icono de celebración" width="80" height="80" />
                            <h2 class="mt-2">¡Enhorabuena! ya eres parte de nuestra gran familia</h2>
                            <p>Gracias por tu suscripción, en unos minutos recibirás un correo electrónico con tu cupón de descuento. Puede que el correo sea desviado a tu bandeja de SPAM o correo no deseado, en muchos casos el servidor de correo no nos identifica correctamente.</p>
                            
                            <div class="d-flex flex-column">
                                <button class="btn bg-trivi-red mt-3 px-4" type="button" @click="close" name="close-in-card">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
    export default {
        name: "default",
        data() {
            return {
                isVisible: false,
                cookiesConsent: true,
                popUpShow: false,
                suscribed: false,
                hiddenPopUp: false,
                conditions: false, 
                errorConditions: false, 
                exist: false,
            };
        },

        beforeMount() {
            this.$root.$on('closePopup', data => {
                this.popUpShow = data;
            })

            this.$root.$on('showPopup', data => {
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
            }, 3000);

            setTimeout(() => {
                this.popUpShow = this.$store.state.popUp;
            }, 5000)

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
            close() {
                if(this.hiddenPopUp == true) {
                    this.$store.dispatch('popUpState', false)
                }
                this.$root.$emit('closePopup', false);
            },

            hiddenPopUpAllow() {
                this.hiddenPopUp = true;
                this.$store.dispatch('popUpState', false)
                this.$root.$emit('closePopup', false);
            },

            async subscribeForm() {
                this.errorConditions = false;
                this.exist = false;
                if (this.conditions) {
                    let form = this.$refs.suscribeFormPopUp;
                    let formData = new FormData(form);
                    await this.$axios.post('/api/newsletter', formData
                    ).then(response => {
                        //console.log(response);
                        this.$refs.suscribeFormPopUp.reset();
                        this.suscribed = true;
                        this.$store.dispatch('popUpState', false);
                    })
                    .catch(error => {
                        this.exist = true;
                    });
                }else {
                    this.errorConditions = true;
                }
            },
        },
    };
</script>

<style lang="scss">
.cookie-absolute {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    @media #{$xs-layout} {
        width: 95%;
    }
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

.fondo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    z-index: 999;
    overflow: scroll;

    @media (min-width: 992px) {
        overflow: hidden;
    }
}

.popup-absolute {
    // position: fixed;
    // width: 95%;
    // max-width: 900px;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // z-index: 12000;

    // @media (max-width: 990px) {
    //     max-width: 400px;
    // }
}


.popup a {
  text-decoration: none;
  color: #000;
  margin-top: 8px;
}

.popup a:hover {
  text-decoration: none;
  color: blue;
  margin-top: 8px;
}

.popup-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.popup-close-btn i {
  color: #333;
}

.img-popup {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    img {
        width: 200px;
        height: 200px;
        margin: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        margin: 1rem auto;
    }
    
    @media (min-width: 400px) {
        img {
            width: 250px;
            height: 250px;
        }
    }

    @media (min-width: 992px) {
        flex: 1;
        position: relative;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 0;
            margin: 0;
        }
    }

    @media (min-width: 1000px) {
        flex: 1;
        position: relative;
        width: 100%;
        img {
            width: 120%;
            height: 800px;
            object-fit: cover;
            object-position: center;
            border-radius: 0;
            margin: 0; 
        }
    }

    @media (min-width: 1600px) {
        flex: 1;
        position: relative;
        width: 100%;
        img {
            width: 120%;
            height: 1200px;
            object-fit: cover;
            object-position: center;
            border-radius: 0;
            margin: 0; 
        }
    }
}

</style>

