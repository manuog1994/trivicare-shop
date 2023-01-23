<template>
    <client-only>
        <div class="home-cosmetics">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <HeroSliderSix />
                <Intro />
                <ServicePolicyFour />
                <ProductWrapperCosmetics />
                <BrandLogoCarousel />
                <Info />
                <TheFooter />
            </div>
         </div>
    </client-only>
</template>

<script>

    export default {
        auth: false,
        role: false,

        //pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            HeroSliderSix: () => import("@/components/hero/HeroSliderSix"),
            ProductWrapperCosmetics: () => import("@/components/product/ProductWrapperCosmetics"),
            BrandLogoCarousel: () => import("@/components/BrandLogoCarousel"),
            Info: () => import("@/components/Info"),
            ServicePolicyFour: () => import("@/components/policy/ServicePolicyFour"),
            TheFooter: () => import("@/components/TheFooter"),
            Intro: () => import("@/components/Intro"),

        },

        data() {
            return {
                show: false,
                test: '',
                searchChildren: '',
                closeMenu: false,
                unauthorized: '',
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

            if(this.$auth.loggedIn == true) {
                this.$auth.fetchUser();

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
                titleTemplate: 'Cuidamos de tú piel | Cosmética natural y ecológica',
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/' }
                // ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'En TriviCare Natural Cosmetics ofrecemos una selección única de productos de cosmética natural y orgánica para tu cuidado diario de la piel.'
                    }
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


