<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
        <div id="post-nav" class="" @click="closeMenus">
            <NavBottom/>
            <Location />
            <ContactInfo />
            <TheFooter />
        </div>
    </div>
</template>

<script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        auth: false,
        
        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            ContactInfo: () => import("@/components/ContactInfo"),
            TheFooter: () => import("@/components/TheFooter"),
            Location: () => import("@/components/Location"),
            CookieConsent,
            VueIfBot
        },

        data() {
            return {
                searchChildren: "",
            };
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
        },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
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
                titleTemplate: "Contacto | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/contact' }
                // ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Puede contactar con nosotros a través de este formulario o enviándonos un correo electrónico a info@trivicare.com, te atenderemos lo antes posible.'
                    }
                ],
            }
        },
    };
</script>
