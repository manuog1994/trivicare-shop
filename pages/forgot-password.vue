<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <Breadcrumb pageTitle="Recuperación de contraseña" />

        <div v-if="send == false" class="login-form">
            <div>
                <h2>Recuperación de contraseña</h2>
                <p>Se enviara un correo electrónico a la dirección que nos has indicado, si está registrada en nuestros registros.</p>
            </div>
            <form @submit.prevent="forgotPassword" ref="forgotform">
                <div class="mb-2">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email">
                </div>
                <div class="mb-2">
                    <button type="submit" class="btn-form" title="Recuperar la contraseña">Recuperar la contraseña</button>
                </div>
            </form>
        </div>

        <div v-if="send == true" class="login-form">
            <div>
                <h2 class="text-center">El correo se ha enviado con éxito</h2>
                <p>Dirijase al bandeja de entrada de su correo electrónico y siga las instrucciones.</p>
                <p>No olvide revisar la bandeja de Spam en el caso de que no lo encuentre.</p>
            </div>
        </div>

        <TheFooter />
        <VueIfBot>
            <CookieConsent>
                <template slot="message">
                    <span>
                        Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra 
                        <a class="text-info" href="/privacy-policy">Política de Cookies</a>.
                    </span>
                </template>
                <template slot="button">
                    <button class="btn border-1">Aceptar</button>
                </template>
            </CookieConsent>
        </VueIfBot>        
    </div>
  </template>
  
  <script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
  export default {
      auth: false,

      data() {
          return {
              send: false,
          }
      },

      mounted() {
          this.$nextTick(() => {
              this.$nuxt.$loading.start()
              setTimeout(() => {
                  this.$nuxt.$loading.finish()
              }, 500)
          })
      },

      components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar.vue'),
            Breadcrumb: () => import('@/components/Breadcrumb.vue'),
            TheFooter: () => import('@/components/TheFooter.vue'),
            CookieConsent,
            VueIfBot
        },

        methods: {
            async forgotPassword() {
                const formData = new FormData(this.$refs.forgotform);
                await this.$axios.post('/api/forgot-password', formData)
                .then((response) => {
                    this.send = true;
                    //console.log(response);
                }).catch((error) => {
                    //console.log(error);
                });
            }
        }
  
  }
  </script>
  
  <style lang="scss" scoped>
    .login-form {
        max-width: 50rem;
        margin: 5rem auto;
        padding: 20px 0;

        h2 {
            margin: 1rem 2rem 2rem;
        }

        p {
            text-align: center;
            margin-bottom: 2rem;        
        }

        form {
            max-width: 40rem;
            margin: 0 auto;

            .btn-form {
                width: 100%;
                background-color: rgb(80, 80, 80);
                color: #fff;
                margin-bottom: 2rem;
                padding: 1rem 0.5rem;

                &:hover {
                    background-color: #2AB5B2;
                }
            }
        }
    }
  
  </style>