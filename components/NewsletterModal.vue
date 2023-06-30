<template>
    <modal name="newsletterModal" @before-open="beforeOpen" width="800px" :scrollable="true" height=auto >
        <div v-if="!conditions && !exitsEmail">
            <div>
                <h2>CLÁUSULA DE SUSCRIPCIÓN EN NEWSLETTER</h2>
            </div>
            <div class="text-scroll">
                <p>En cumplimiento del Reglamento General de Protección de Datos (RGPD) 2016/679 de 27 de abril, le informamos que los datos de carácter personal que usted voluntariamente facilita a <strong>TRIVICARE</strong>, serán incluidos en nuestro Registro de Actividades del Tratamiento.</p>
                <p>Estos datos serán utilizados con la única finalidad de incluirle como suscriptor de nuestra <strong>NEWSLETTER</strong> y poder remitirle las ofertas y publicaciones de nuestra empresa.</p>
                <p>En cualquier momento, podrá ejercitar los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad de sus datos personales, mediante comunicación escrita dirigida a <strong>TRIVICARE</strong>, en la dirección  Calle Dámaso Torres, nº25, 18800, Baza, Granada; o por e-mail dirigido a la dirección <a class="text-info" href="mailto:info@trivicare.com">info@trivicare.com</a>, acompañando copia del DNI, Pasaporte o Tarjeta de Residencia.</p>
                <p>Tendrá derecho igualmente a retirar el consentimiento prestado en cualquier momento. Dicha retirada del consentimiento no afectará a la licitud del tratamiento efectuado antes de la retirada de dicho consentimiento.</p>
                <p>Tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a class="text-info" href="https://www.agpd.es">www.agpd.es</a>) si considera que pueden haber sido vulnerados sus derechos en lo concerniente a la protección de sus datos personales, así como a solicitar ante dicho organismo información y tutela sobre el ejercicio de sus derechos.</p>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button class="btn bg-trivi-green" @click.prevent="subscribeForm">He leído y acepto los términos y condiciones</button>
            </div>
        </div>
        <div v-if="conditions">
            <div class="d-flex flex-column justify-content-center align-self-center text-center">
                <img class="d-none d-xl-block m-auto mt-2" src="/img/celebration.webp" alt="Icono de celebración" title="Icono de celebración" width="80">
                <h2 class="mt-2">¡Enhorabuena! ya eres parte de nuestra gran familia</h2>
                <p>Gracias por tu suscripción, en unos minutos recibirás un correo electrónico con tu cupón de descuento. Puede que el correo sea desviado a tu bandeja de SPAM o correo no deseado, en muchos casos el servidor de correo no nos identifica correctamente.</p>
                
                <div class="d-flex flex-column">
                    <button class="btn bg-trivi-red mt-3 px-4" type="button" @click="$modal.hide('newsletterModal')">Cerrar</button>
                </div>
            </div>
        </div>
        <div v-if="exitsEmail">
            <div class="d-flex flex-column justify-content-center align-self-center text-center">
                <img class="d-none d-xl-block m-auto mt-2" src="/img/warning.webp" alt="Icono de celebración" title="Icono de celebración" width="80">
                <h2 class="mt-2">El correo electrónico que has introducido ya esta registrado.</h2>                
                <div class="d-flex flex-column">
                    <button class="btn bg-trivi-red mt-3 px-4" type="button" @click="$modal.hide('newsletterModal')">Cerrar</button>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            email: '',
            conditions: false,
            exitsEmail: false,
        }
    },

    watch: {
        checked() {
            document.getElementById('subscribe').disabled = !this.checked;
            document.getElementById('subscribeTwo').disabled = !this.checked;
        }
    },

    methods: {
        beforeOpen ({params: email}) {
            const response = email;
            const emailData = response.email;
            this.email = emailData;
            this.exitsEmail = false;
            this.conditions = false;
        },

        async subscribeForm() {
            await this.$axios.post('/api/newsletter', {
                email: this.email
            }).then(response => {
                    //console.log(response);
                    this.email = '';
                    this.conditions = true;
                    this.$store.dispatch('popUpState', false);
                    document.getElementById('input-suscribe-footer').value = '';
                })
                .catch(error => {
                    //console.log(error);
                    this.exitsEmail = true;
                    this.email = '';
                    document.getElementById('input-suscribe-footer').value = '';
                });
        },
    }
}
</script>

<style>
.text-scroll {
    height: 300px;
    overflow-y: scroll;
}
</style>