<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="contacto" />
        <Location />
        <ContactInfo />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        auth: false,
        components: {
    HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
    ContactInfo: () => import("@/components/ContactInfo"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
    Location: () => import("@/components/Location"),
},
        head() {
            return {
                title: "Contacto"
            }
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
        }
    };
</script>
