<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container" />
            <Breadcrumb pageTitle="Mi Cuenta" />
    
             <div v-if="$auth.user.email_verified_at != null" class="my-account-area pb-80 pt-100">
                <div class="w-50 m-auto" v-if="errors">
                    <client-only>
                        <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                            {{ error }}
                        </div>
                    </client-only>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="ms-auto me-auto col-lg-9">
                            <div class="my-account-wrapper">
                                <div id="faq" class="panel-group">
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>1 .</span> <a data-bs-toggle="collapse"
                                                    href="#my-account-1">Editar datos de tu cuenta </a></h3>
                                        </div>
    
                                        <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <form @submit.prevent="updateEmail">
                                                    <div class="myaccount-info-wrapper">
                                                        <div class="account-info-wrapper">
                                                            <h4>Información de mi cuenta</h4>
                                                            <h5>Correo eléctronico</h5>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <p><strong>Email actual:</strong> {{ $auth.user.email }}</p>
    
                                                                <div class="billing-info">
                                                                    <label>Email</label>
                                                                    <input v-model="email" type="email" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="billing-back-btn">
                                                            <div class="billing-back">
                                                                <a href="#"><i class="fa fa-arrow-up" title="Atrás"></i> atrás</a>
                                                            </div>
                                                            <div class="billing-btn">
                                                                <button type="submit" title="Actualizar email">Actualizar Email</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>2 .</span> <a data-bs-toggle="collapse"
                                                    href="#my-account-2">Cambiar tu contraseña </a></h3>
                                        </div>
                                        <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <div class="myaccount-info-wrapper">
                                                    <div class="account-info-wrapper">
                                                        <h4>Cambiar Contraseña</h4>
                                                        <h5>Tu Contraseña</h5>
                                                    </div>
                                                    <form @submit.prevent="updatePassword">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <label>Contraseña actual</label>
                                                                    <input v-model="old_password" type="password" required>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <label>Nueva Contraseña</label>
                                                                    <input v-model="password" type="password" required>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <label>Confirma tu nueva Contraseña</label>
                                                                    <input v-model="password_confirmation" type="password"
                                                                        required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="billing-back-btn">
                                                            <div class="billing-back">
                                                                <a href="#"><i class="fa fa-arrow-up" title="Atrás"></i> atrás</a>
                                                            </div>
                                                            <div class="billing-btn">
                                                                <button type="submit" title="Actualizar contraseña">Actualizar contraseña</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>3 .</span> <a data-bs-toggle="collapse"
                                                    href="#my-account-3">Gestionar tu dirección de envío </a></h3>
                                        </div>
                                        <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <div class="myaccount-info-wrapper">
                                                    <div class="account-info-wrapper">
                                                        <h4>Direcciónes de Envío</h4>
                                                    </div>
                                                    <div class="row">
                                                        <client-only>
                                                            <div class="card w-75 m-auto mb-3"
                                                                v-for="profile in $auth.user.user_profile" :key="profile.id">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">{{ profile.name }}
                                                                        {{ profile.lastname }}</h5>
                                                                    <p class="card-text">{{ profile.address }}</p>
                                                                    <p class="card-text">{{ profile.phone }}</p>
                                                                    <p class="card-text">{{ profile.zipcode }}
                                                                        {{ profile.city }} ({{ profile.state }})</p>
                                                                    <p class="card-text">{{ profile.country }}</p>
                                                                    <a @click.prevent="deleteProfile(profile.id)"
                                                                        class="btn btn-light">Eliminar</a>
                                                                </div>
                                                            </div>
                                                        </client-only>
                                                    </div>
                                                    <div class="billing-back-btn">
                                                        <div class="billing-back">
                                                            <a href="#" title="Atrás"><i class="fa fa-arrow-up"></i> atrás</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>4 .</span> <a data-bs-toggle="collapse" href="#my-account-4">Crear
                                                    otra dirección de envío </a></h3>
                                        </div>
                                        <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <div class="myaccount-info-wrapper">
                                                    <form @submit.prevent="createProfile" class="row">
                                                        <div class="col-lg-6 col-md-6">
                                                            <div class="billing-info">
                                                                <label>Nombre</label>
                                                                <input v-model="name" type="text" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6">
                                                            <div class="billing-info">
                                                                <label>Apellidos</label>
                                                                <input v-model="lastname" type="text" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12">
                                                            <div class="billing-info">
                                                                <label>Dirección</label>
                                                                <input v-model="address" type="text" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12">
                                                            <div class="billing-info">
                                                                <label>Opcional</label>
                                                                <input v-model="optional_address" type="text">
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4">
                                                            <div class="billing-info">
                                                                <label>Código Postal</label>
                                                                <input v-model="zipcode" type="number" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8">
                                                            <div class="billing-info">
                                                                <label>Ciudad</label>
                                                                <input v-model="city" type="text" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6">
                                                            <div class="billing-info">
                                                                <label>Provincia</label>
                                                                <input v-model="state" type="text" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6">
                                                            <div class="billing-info">
                                                                <label>País</label>
                                                                <input v-model="country" type="text" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-5 col-md-5">
                                                            <div class="billing-info">
                                                                <label>Teléfono</label>
                                                                <input v-model="phone" type="number" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-7 col-md-7">
                                                            <div class="billing-info">
                                                                <label>Email</label>
                                                                <input :value="$auth.user.email" type="email" disabled>
                                                            </div>
                                                        </div>
                                                        <div class="billing-btn">
                                                            <button class="btn-form" type="submit" title="Guardar">Guardar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="$auth.user.email_verified_at == null" class="my-account-area pb-80 pt-100 text-center">
                <h1 class="mb-5">Su cuenta no está verificada</h1>
                <p>Por favor, para realizar está y otras acciones debe ir a su cuenta de email y buscar el correo electrónico "Trivicare.com | Verificación de correo electrónico".</p>
                <p>Si no lo encuentra, revise su carpeta de spam o <a @click.prevent="resendEmail">pulse aquí</a> para generar un nuevo correo.</p>
            </div>
    
            <div v-if="$auth.user.email_verified_at != null" class="text-center mb-5">
                <a class="btn btn-light" @click.prevent="deleteAccount">Eliminar cuenta</a>
            </div>
    
            <TheFooter />
            <VueIfBot>
            <CookieConsent>
                <template slot="message">
                    <span>
                        Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra 
                        <a class="text-info" href="/politica-de-cookies">Política de Cookies</a>.
                    </span>
                </template>
                <template slot="button">
                    <button class="btn border-1" title="Aceptar">Aceptar</button>
                </template>
            </CookieConsent>
        </VueIfBot>
        </div>
    </client-only>

</template>


<script>
    import Swal from 'sweetalert2'
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        middleware: 'auth',
        transition: {
            name: 'fade',
            mode: 'out-in'
        },

        components: {
            CookieConsent,
            VueIfBot
        },

        data() {
            return {
                email: '',
                old_password: '',
                password: '',
                password_confirmation: '',
                errors: [],

                name: '',
                lastname: '',
                address: '',
                optional_address: '',
                city: '',
                state: '',
                zipcode: '',
                phone: '',
                country: '',
            }
        },

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        mounted() {
        },

        methods: {
            async updateEmail() {
                Swal.fire({
                    title: '¿Estas seguro de que quieres cambiar tu email?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, cambiar',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.post('/api/update-email/' + this.$auth.user.id, {
                            email: this.email,
                        }).then(() => {
                            Swal.fire('¡Email actualizado!', '', 'success')
                            this.$auth.fetchUser()
                            this.errors = []
                            this.email = ''
                        }).catch((error) => {
                            this.errors = Object.values(error.response.data).flat();
                        })

                    }
                })



            },

            async updatePassword() {
                await this.$axios.post('/api/update-password/' + this.$auth.user.id, {
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then(() => {
                    Swal.fire('¡Contraseña actualizada!', '', 'success')
                    this.old_password = '';
                    this.password = '';
                    this.password_confirmation = '';
                    this.errors = [];
                    this.$auth.fetchUser()
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            },

            async deleteProfile(id) {
                Swal.fire({
                    title: '¿Estas seguro de que quieres eliminar esta dirección?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, eliminar',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.delete('/api/delete-profile/' + id)
                        this.$auth.fetchUser()
                        Swal.fire('Su dirección ha sido eliminada!', '', 'success')

                    }
                })
            },

            async deleteAccount() {
                Swal.fire({
                    title: '¿Estas seguro de que quieres eliminar tu cuenta?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, eliminar',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.delete('/api/destroy/' + this.$auth.user.id)
                        Swal.fire('Su cuenta ha sido eliminada!', '', 'success')
                        this.$auth.logout()
                        this.$router.push('/')
                    }
                })
            },

            async createProfile() {
                const response = await this.$axios.post('/api/register-profile', {
                    user_id: this.$auth.user.id,
                    name: this.name,
                    lastname: this.lastname,
                    address: this.address,
                    optional_address: this.optional_address,
                    city: this.city,
                    state: this.state,
                    zipcode: this.zipcode,
                    phone: this.phone,
                    country: this.country,    
                })
                this.name = '';
                this.lastname = '';
                this.address = '';
                this.optional_address = '';
                this.city = '';
                this.state = '';
                this.zipcode = '';
                this.phone = '';
                this.country = '';
                this.$auth.fetchUser()
                this.$notify({ type: 'success', text: 'Dirección creada correctamente' })
            },

            async resendEmail() {
                await this.$axios.post('/api/resend-email/' + this.$auth.user.id)
                .then(res => {
                    console.log(res);
                    this.$notify({ title: 'Email reenviado'});
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            }
        },

        head() {
            return {
                title: "Mi Cuenta",
            }
        },

        mounted() {
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
            this.$auth.fetchUser();
        }
    }
</script>