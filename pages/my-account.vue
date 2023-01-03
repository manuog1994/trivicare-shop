<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <MyAccountContainer/>
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>


<script>
    import Swal from 'sweetalert2'
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        auth: true,

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
                dni: '',

                disabled: true,
                checked: false,
                searchChildren: '',
                unauthorized: '',
             }
        },

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            MyAccountContainer: () => import("@/components/MyAccountContainer"),
            TheFooter: () => import("@/components/TheFooter"),
            CookieConsent,
            VueIfBot,
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

            if(this.$auth.loggedIn == false) {
                this.$router.push('/login')
                this.$notify({ title: 'Tu sesión ha expirado', type: 'error'});
            }

            if(this.$axios.onError(error => {
                const code = error.response.status;
                if (code === 401) {
                    this.unauthorized = true;
                }
            }));
        },

        watch: {
            unauthorized() {
                if (this.unauthorized == true) {
                    this.$auth.logout();
                }
            }
        },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },

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
                    dni: this.dni,    
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
                this.dni = '';
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
            },

            searchOpacity(searchFather) {
                if (searchFather == true) {
                    document.getElementById("post-nav").classList.add("search-screen");
                } else {
                    document.getElementById("post-nav").classList.remove("search-screen");
                }
            }
        },

        head() {
            return {
                title: "Mi Cuenta",
            }
        },

    }
</script>