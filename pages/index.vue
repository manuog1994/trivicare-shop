<template>
    <div class="home-cosmetics">
        <TheHeader />
        <HeroSliderSix />
        <Intro />
        <ServicePolicyFour />
        <!-- <TestimonialOne /> -->
        <ProductWrapperCosmetics />
        <!-- <BannerStyleFour /> -->
        <!-- <InstagramPostWrapper /> -->
        <!-- <BlogWrapper /> -->
        <TheFooter />
    </div>
</template>

<script>

    export default {
        auth: false,

        components: {
            TheHeader: () => import("@/components/TheHeader"),
            HeroSliderSix: () => import("@/components/hero/HeroSliderSix"),
            ProductWrapperCosmetics: () => import("@/components/product/ProductWrapperCosmetics"),
            ServicePolicyFour: () => import("@/components/policy/ServicePolicyFour"),
            // TestimonialOne: () => import("@/components/TestimonialOne"),
            // InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
            // BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import("@/components/TheFooter"),
            Intro: () => import("@/components/Intro"),
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

        head() {
            return {
                title: 'Tienda de cosmética natural y ecológica | Cosmética natural y ecológica',
            }
        },
    };
</script>


