<template>
    <client-only>
        <div class="cart-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <CartContainer />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,

        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'),
            CartContainer: () => import('@/components/CartContainer'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        
        data() {
            return {
                searchChildren: '',
            }
        },



        async mounted() {
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
            
            if(this.$axios.onError(error => {
                const code = error.response.status;
                if (code === 401) {
                    this.$auth.logout();
                }
            }));
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
                titleTemplate: "Carrito | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/cart'},
                // ],
            }
        },
    };
</script>

