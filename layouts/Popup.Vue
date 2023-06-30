<template>
    <div class="fondo">
        <div id="pop-up" class="popup-absolute">
            <div class="d-flex align-items-center align-self-center card pt-5 ps-4 pe-4 pb-3 text-center">
                <button class="close-btn" @click="close"><i class="fa fa-close"></i></button>
                <div class="row">
                    <div class="col-12 col-lg-6 d-none d-lg-block">
                        <img src="/img/newsletter.webp" alt="Imagen Pop Up" title="Imagen Pop Up" width="100%">
                    </div>
                    <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-self-center" v-if="!suscribed">
                        <img class="m-auto" src="/img/email.webp" alt="Icono de correo electrónico" title="Icono de correo electrónico" width="80">
                        <h2 class="mt-2 mt-xl-3">¡Suscríbete y obtén un 10% de descuento en tu compra!</h2>
                        <p>Descubre lo mejor de la naturaleza para cuidar tu belleza. Suscríbete a nuestra newsletter y recibe un 10% de descuento en tu compra. ¡No te pierdas nuestras promociones exclusivas, consejos de belleza y novedades! Únete a nuestra comunidad de amantes de la belleza natural hoy mismo.</p>
                        
                        <div class="d-flex flex-column">
                            <form @submit.prevent="subscribeForm" ref="suscribeFormPopUp" method="post">
                                <div v-if="errorConditions" style="text-align: left;">
                                    <span class="text-danger">Debes aceptar los términos y condiciones.</span>
                                </div>
                                <div v-if="exist" style="text-align: left;">
                                    <span class="text-danger">Este correo electrónico ya esta suscrito.</span>
                                </div>
                                <div>
                                    <input class=" form-control" placeholder="Introduce tu correo electrónico" name="email"/>
                                </div>
                                <div class="form-check mt-1 d-flex">
                                    <input class="form-check-input" type="checkbox" value="true" ref="checkAcceptConditions" @click="conditions = true">
                                    <label class="form-check-label ms-1" for="checkAcceptConditions">Acepto los <n-link to="/terms-conditions" class="text-primary">términos y condiciones</n-link> de uso.</label>
                                </div>
                                <div>
                                    <button id="suscribe-popup" class="btn bg-trivi-green mt-3 px-4" type="submit">Suscribirme</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-self-center" v-if="suscribed">
                        <img class="m-auto mt-2" src="/img/celebration.webp" alt="Icono de celebración" title="Icono de celebración" width="80">
                        <h2 class="mt-2">¡Enhorabuena! ya eres parte de nuestra gran familia</h2>
                        <p>Gracias por tu suscripción, en unos minutos recibirás un correo electrónico con tu cupón de descuento. Puede que el correo sea desviado a tu bandeja de SPAM o correo no deseado, en muchos casos el servidor de correo no nos identifica correctamente.</p>
                        
                        <div class="d-flex flex-column">
                            <button class="btn bg-trivi-red mt-3 px-4" type="button" @click="close">Cerrar</button>
                        </div>
                    </div>
                    <div class="form-check ms-4 p-3 p-lg-1 d-none d-lg-flex">
                        <input class="form-check-input" type="checkbox" @click="hiddenPopUp = true" ref="checkPopUp">
                        <label class="form-check-label ms-1" for="checkPopUp">No mostrar más esta ventana.</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              suscribed: false,
              hiddenPopUp: false,
              conditions: false, 
              errorConditions: false, 
              exist: false,
            }
        },

        methods: {
            close() {
                if(this.hiddenPopUp == true) {
                    this.$store.dispatch('popUpState', false)
                }
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
        }
    }
</script>

<style lang="scss">
.fondo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000063;
    z-index: 999;
}

.popup-absolute {
    position: fixed;
    width: 95%;
    max-width: 900px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    @media (max-width: 990px) {
        max-width: 400px;
    }
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
</style>