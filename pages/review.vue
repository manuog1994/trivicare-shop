<template>
    <client-only>
        <div class="home-cosmetics">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <Reviews />
                <TheFooter />
            </div>
         </div>
    </client-only>
</template>

<script>

    export default {
        auth: false,
        role: false,

        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            Reviews: () => import("@/components/Reviews"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        data() {
            return {
                show: false,
                test: '',
                searchChildren: '',
                closeMenu: false,
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
                titleTemplate: 'Valora tu pedido | TriviCare Natural Cosmetics',
                link: [
                    { rel: 'cannonical', href: 'https://trivicare.com/review' }
                ],            
            }
        },
        
    };
</script>

<style>
.background-color-banner {
    background-color: #ffb1b1;
}


.search-screen {
    opacity: .5 !important;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    display: flex;
    padding: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-top: 1px solid rgb(69, 69, 69);
    color: rgb(0, 0, 0);
}
.cookie-consent button {
    border: 1px solid rgb(57, 57, 57);
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
}
</style>