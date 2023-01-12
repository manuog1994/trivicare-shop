<template>
    <modal name="contactModal" @before-open="beforeOpen" width="800px" :scrollable="true" height=auto>
        <div>
            <h2>CLÁUSULA DE CONTACTO</h2>
        </div>
        <div class="text-scroll">
            <p>De acuerdo con lo establecido por el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales, le informamos que los datos personales aportados serán tratados por <strong>TRIVICARE</strong> con domicilio en Calle Dámaso Torres, nº25, 18800, Baza, Granada.</p>
            <p>Los datos aportados por usted son necesarios para prestarle el servicio solicitado, y serán tratados únicamente con la finalidad de gestionar, atender y ejecutar dicha prestación del mejor modo posible.</p>
            <p>Igualmente, le informamos de que no se prevén cesiones de los datos que nos facilite. Sus datos personales serán conservados mientras persista la relación con el responsable del tratamiento de los datos.</p>
            <p>Asimismo, le informamos de que tiene derecho a solicitar el acceso, rectificación, supresión, limitación del tratamiento, oposición o derecho a la portabilidad de sus datos personales a través de un mensaje de correo electrónico a la dirección <a class="text-info" href="mailto:info@trivicare.com">info@trivicare.com</a> o bien presentando solicitud por escrito, acompañada de su DNI, pasaporte o tarjeta de residencia, en el domicilio anteriormente indicado.</p>
            <p>El ejercicio de alguno de dichos derechos no afectará a la licitud del tratamiento efectuado antes del mismo.</p>
            <p>Tiene derecho a presentar una reclamación ante la autoridad de control (AEPD) si considera que pueden haber sido vulnerados sus derechos en lo concerniente a la protección de sus datos personales.</p>
            <p>Puede encontrar más detalles sobre el tratamiento de sus datos en nuestra <a href="https://trivicare.com/legal-warning"><strong class="text-info">POLÍTICA DE PROTECCIÓN DE DATOS</strong></a>.</p>
        </div>
        <div>
            <button class="btn btn-theme rounded-0" @click.prevent="sendContactForm">He leído y acepto los términos y condiciones de uso.</button>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            contact: {},
        }
    },

    methods: {
        beforeOpen ({params: contact}) {
            this.contact = contact;
        },

        async sendContactForm() {
            //console.log(this.contact);
            await this.$axios.post('/api/contact', {
                name: this.contact.name,
                email: this.contact.email,
                subject: this.contact.subject,
                message: this.contact.message
            })
            .then(response => {
                //console.log(response);
                this.$notify({title: 'Mensaje enviado'});
                this.contact = {};
                this.$modal.hide('contactModal');
            }).catch(error => {
                //console.log(error);
            })

        }
    }
}
</script>

<style>

</style>