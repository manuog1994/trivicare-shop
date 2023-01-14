<template>
    <modal name="newsletterModal" @before-open="beforeOpen" width="800px" :scrollable="true" height=auto >
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
        <div>
            <button class="btn btn-theme rounded-0" @click.prevent="subscribeForm">He leído y acepto los términos y condiciones</button>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            email: ''
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
        },

        async subscribeForm() {
            await this.$axios.post('/api/newsletter', {
                email: this.email
            }).then(response => {
                    //console.log(response);
                    this.$notify({title: 'Gracias por suscribirte, pronto recibirás nuestras novedades.'});
                    this.email = '';
                    this.$modal.hide('newsletterModal');
                })
                .catch(error => {
                    //console.log(error);
                    this.$notify({title:'Atención!', text: 'El email introducido ya estaba registrado.', type: 'warn'});
                    this.email = '';
                    this.$modal.hide('newsletterModal');
                });
        },

        checkError() {
            if (this.checked == false) {
                this.$notify({title:'Atención!', text: 'Debes aceptar las condiciones de uso y política de privacidad.', type: 'warn'});
            }
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