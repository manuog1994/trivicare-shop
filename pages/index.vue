<template>
    <client-only>
        <div class="home-cosmetics">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <NavBottom/>
            <HeroSliderSix />
            <div id="post-nav" class="" @click="closeMenus">
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
    function delayImport(importPromise, delay) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(importPromise), delay);
        });
    }

    export default {
        auth: false,
        role: false,

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            HeroSliderSix: () => delayImport(import("@/components/hero/HeroSliderSix"), 500),
            IconsActions: () => delayImport(import("@/components/IconsActions"), 1000),
            ProductWrapperCosmetics: () => delayImport(import("@/components/product/ProductWrapperCosmetics"), 1500),
            ProductWrapperCosmeticsTwo: () => delayImport(import("@/components/product/ProductWrapperCosmeticsTwo"), 2000),
            Testimonials : () => delayImport(import("@/components/Testimonials"), 2500),
            ServicePolicyFour: () => delayImport(import("@/components/policy/ServicePolicyFour"), 3000),
            TheFooter: () => delayImport(import("@/components/TheFooter"), 3200),
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
            try {
            const page = this.$route.path; // Obtiene la ruta actual
            const response = await this.$axios.post('/api/visit', { page });
            } catch (error) {
                await this.$axios.post('/api/error-message', { 
                    message: error 
                });
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
                titleTemplate: 'Cosmética Natural, ECO y Cruelty Free | Cremas y Serums Naturales',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'En TriviCare Natural Cosmetics ofrecemos una selección única de cremas naturales y serums naturales ecológicos y con ingredientes procedentes de agricultura ecológica.',
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'cosmética natural y ecológica, cremas naturales, serums naturales, cosmética ecológica, cosmética cruelty free, cosmética vegana, cosmética sin tóxicos, cosmética sin parabenos, cosmética sin siliconas, cosmética sin sulfatos, cosmética sin aceites minerales, cosmética sin ftalatos, cosmética sin colorantes, cosmética sin perfumes sintéticos, cosmética sin alcohol, cosmética sin parafina'
                    },
                    {
                        hid: 'author',
                        name: 'author',
                        content: 'Manuel Galiano'
                    },
                    {
                        hid: 'robots',
                        name: 'robots',
                        content: 'index, follow'
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


