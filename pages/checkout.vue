<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <CheckoutContainer />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        
        pageTransition: 'slide-fade',

        async asyncData ({ req }) {
            if(!req) {
                const visitorIP = 'No IP'
                return { visitorIP }
            } else {
                const visitorIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
                return { visitorIP }
            }
        },

        data() {
            return {
                searchChildren: '',
                unauthorized: false,
            }
        },

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            CheckoutContainer: () => import("@/components/CheckoutContainer"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 1000);
            });
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }

            if(this.$axios.onError(error => {
                const code = error.response.status;
                if (code == 401) {
                    this.$auth.logout();
                }
            }));

            this.$axios.post('/api/visit', {
                ip_address: this.visitorIP,
                page_visited: 'checkout',
            })
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
                titleTemplate: "Resumen de tu Pedido | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/checkout' }
                // ],
            }
        },
    };
</script>


