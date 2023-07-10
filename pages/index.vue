<template>
    <client-only>
        <div class="home-cosmetics">
            <NavBottom/>
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <HeroSliderSix />
                <IconsActions />
                <ProductWrapperCosmetics />
                <Testimonials />
                <ProductWrapperCosmeticsTwo />
                <ServicePolicyFour />
                <TheFooter />
            </div>
         </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        role: false,

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            HeroSliderSix: () => import("@/components/hero/HeroSliderSix"),
            ProductWrapperCosmetics: () => import("@/components/product/ProductWrapperCosmetics"),
            ProductWrapperCosmeticsTwo: () => import("@/components/product/ProductWrapperCosmeticsTwo"),
            ServicePolicyFour: () => import("@/components/policy/ServicePolicyFour"),
            TheFooter: () => import("@/components/TheFooter"),
            IconsActions: () => import("@/components/IconsActions"),
            Testimonials : () => import("@/components/Testimonials"),
        },

        data() {
            return {
                show: false,
                test: '',
                searchChildren: '',
                closeMenu: false,
                loaderPage: false,
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
                if (code == 401) {
                    this.$auth.logout();
                }
            }));

            if(this.$auth.loggedIn == true) {
                this.$auth.fetchUser();

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
                titleTemplate: 'Cosmética Natural 🧴, ECO 🌱, y Cruelty Free 🐷| Queremos cuidar de ti y de la naturaleza |TriviCare Natural Cosmetics',
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
</style>


