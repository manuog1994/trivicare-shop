<template>
    <client-only>
        <div class="terms-conditions-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <Breadcrumb pageTitle="Términos y Condiciones" />
                <TermsConditionsContainer />
                <TheFooter />       
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TermsConditionsContainer: () => import('@/components/TermsConditionsContainer'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                searchChildren: '',
            }
        },

        head() {
            return {
                titleTemplate: "Términos y condiciones | TriviCare Natural Cosmetics" ,
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/terms-conditions' }
                // ],
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
        }
    };
</script>


