<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Mi Cuenta" />
        
        
        <div class="my-account-area pb-80 pt-100">
            <div class="w-50 m-auto" v-if="errors">
                <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                    {{ error }}
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="ms-auto me-auto col-lg-9">
                        <div class="my-account-wrapper">
                            <div id="faq" class="panel-group">
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>1 .</span> <a data-bs-toggle="collapse" href="#my-account-1">Editar datos de tu cuenta </a></h3>
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
                                                            <p><strong>Email actual:</strong>  {{ $auth.user.email }}</p>

                                                            <div class="billing-info">
                                                                <label>Email</label>
                                                                <input v-model="email" type="email" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="billing-back-btn">
                                                        <div class="billing-back">
                                                            <a href="#"><i class="fa fa-arrow-up"></i> atrás</a>
                                                        </div>
                                                        <div class="billing-btn">
                                                            <button type="submit">Actualizar Email</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>2 .</span> <a data-bs-toggle="collapse" href="#my-account-2">Cambiar tu contraseña </a></h3>
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
                                                                <input v-model="password_confirmation" type="password" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="billing-back-btn">
                                                        <div class="billing-back">
                                                            <a href="#"><i class="fa fa-arrow-up"></i> atrás</a>
                                                        </div>
                                                        <div class="billing-btn">
                                                            <button type="submit">Actualizar contraseña</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>3 .</span> <a data-bs-toggle="collapse" href="#my-account-3">Modificar tu dirección de envío   </a></h3>
                                    </div>
                                    <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <div class="account-info-wrapper">
                                                    <h4>Direcciónes de Envío</h4>
                                                </div>
                                                <div class="row">
                                                    <div class="card w-75 m-auto mb-3" v-for="profile in profiles" :key="profile.id">
                                                        <div class="card-body">
                                                            <h5 class="card-title">{{ profile.name }} {{ profile.lastname }}</h5>
                                                            <p class="card-text">{{ profile.address }}</p>
                                                            <p class="card-text">{{ profile.phone }}</p>
                                                            <p class="card-text">{{ profile.zipcode }} {{ profile.city }} ({{ profile.state }})</p>
                                                            <p class="card-text">{{ profile.country }}</p>
                                                            <a @click.prevent="deleteProfile(profile.id)" class="btn btn-light">Eliminar</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="billing-back-btn">
                                                    <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> atrás</a>
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
            </div>
        </div> 

        <div class="text-center mb-5">
            <a class="btn btn-light" @click.prevent="deleteAccount">Eliminar cuenta</a>
        </div>

        <TheFooter />
    </div>

</template>


<script>
    import Swal from 'sweetalert2'

    export default {
        middleware: 'auth',

        data() {
            return {
                profiles: [],
                email: '',
                old_password: '',
                password: '',
                password_confirmation: '',
                errors: [],
            }
        },
        
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        mounted() {
            this.showProfile();
        },
        
        methods: {
            async showProfile(){
                const reponse = await this.$axios.get('/api/show-profile/' + this.$auth.user.id)
                this.profiles = reponse.data.data
            },

            async updateEmail() {
                Swal.fire({
                    title: '¿Estas seguro de que quieres cambiar tu email?',
                    text: "Si cambias tu email, se cerrará la sesión y tendrás que iniciar sesión de nuevo",
                    showCancelButton: true,
                    confirmButtonText: 'Si, cambiar',
                    }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.post('/api/update-email/' + this.$auth.user.id, {
                            email: this.email,
                        }).then(() => {
                            Swal.fire('¡Email actualizado!', '', 'success')
                            this.$auth.logout()
                            this.$router.push('/login')
                            this.errors = []
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
                    this.showProfile();
                    this.old_password = '';
                    this.password = '';
                    this.password_confirmation = '';
                    this.errors = [];
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            },

            async deleteProfile(id){
                Swal.fire({
                    title: '¿Estas seguro de que quieres eliminar esta dirección?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, eliminar',
                    }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.delete('/api/delete-profile/' + id)
                        this.showProfile();                        
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
            }
        },

        head() {
            return {
                title: "Mi Cuenta",
            }
        }
    }
</script>
