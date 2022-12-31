<template>
    <div class="contact-area pb-100" ref="contact">
        <div class="container-fluid">
            <div class="custom-row-2">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="contact-info-wrap">
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>A través del teléfono:</p>
                                <p><a href="tel:34613036942">+34 613 036 942</a></p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-globe"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>Por correo electrónico:</p>
                                <p><a href="mailto:info@trivicare.com">info@trivicare.com</a></p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>Oficina: </p>
                                <p>18800 Baza (Granada)</p>
                            </div>
                        </div>
                        <div class="contact-social text-center">
                            <h3>Siguenos en:</h3>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook">
                                        <fa-icon icon="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram">
                                        <fa-icon icon="fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok">
                                        <fa-icon icon="fa-brands fa-tiktok" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 col-12">
                    <div class="contact-form">
                        <div class="contact-title mb-30">
                            <h2>Contacta con nosotros</h2>
                        </div>
                        <form class="contact-form-style" ref="contactform" @submit.prevent="sendContactForm">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input name="name" placeholder="Nombre*" type="text" v-model="contact.name">
                                </div>
                                <div class="col-lg-6">
                                    <input name="email" placeholder="Email*" type="email" v-model="contact.email">
                                </div>
                                <div class="col-lg-12">
                                    <input name="subject" placeholder="Motivo*" type="text" v-model="contact.subject">
                                </div>
                                <div class="col-lg-12">
                                    <textarea name="message" placeholder="Tu Mensaje*" v-model="contact.message"></textarea>
                                    <button class="submit" type="submit" title="Enviar">ENVIAR</button>
                                </div>
                            </div>
                        </form>
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
            contact: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },


    methods: {
        async sendContactForm() {
            console.log(this.contact);
            await this.$axios.post('/api/contact', {
                name: this.contact.name,
                email: this.contact.email,
                subject: this.contact.subject,
                message: this.contact.message
            })
            .then(response => {
                //console.log(response);
                this.$notify({title: 'Mensaje enviado'});
                this.contact.name = '';
                this.contact.email = '';
                this.contact.subject = '';
                this.contact.message = '';
            }).catch(error => {
                //console.log(error);
            })

        }
    }
}
</script>
