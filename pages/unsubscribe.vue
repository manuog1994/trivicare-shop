<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Recuperación de contraseña" />

        <div v-if="send == false" class="login-form">
            <div>
                <h2>Dar de baja en nuestro newsletter</h2>
                <p>Sentimos, que quiera darse de baja en nuestro newsletter. Recuerde que si procede con la baja dejará de recibir nuestras ofertas y descuentos especiales.</p>
            </div>
            <form @submit.prevent="unsubscribe" ref="unsubscribeform">
                <div class="mb-2">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email">
                </div>
                <div class="mb-2">
                    <button type="submit" class="btn-form" title="Darse de baja">Darse de baja</button>
                </div>
            </form>
        </div>

        <div v-if="send == true" class="login-form">
            <div>
                <h2 class="text-center">Se ha dado de baja en el newsletter</h2>
                <p>No, volverá a recibir correos electrónicos comerciales.</p>
                <p>Si desea volver darse de alta dirijase al pie de la página.</p>
            </div>
        </div>

        <TheFooter />
    </div>
  </template>
  
  <script>
  export default {
      auth: false,

      data() {
          return {
              send: false,
          }
      },

      components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar.vue'),
            Breadcrumb: () => import('@/components/Breadcrumb.vue'),
            TheFooter: () => import('@/components/TheFooter.vue'),
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 500)
            })
        },

        methods: {
            async unsubscribe() {
                const formData = new FormData(this.$refs.unsubscribeform);
                await this.$axios.post('/api/unsubscribe-newsletter', formData)
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