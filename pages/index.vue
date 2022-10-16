<template>
    <div class="home-cosmetics">
        <TheHeader />
        <HeroSliderSix />
        <transition name="intro" mode="out-in"><Intro /></transition>
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
        transition: {
            name: 'fade',
            mode: 'out-in'
        },

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

        data() {
            return {
                show: false,
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

        head() {
            return {
                title: 'Tienda de cosmética natural y ecológica | Cosmética natural y ecológica',
            }
        },
    };
</script>

<style>
.intro-enter-active, .intro-leave-active {
    transition: opacity 5s ease;
    transition-delay: 3s;
}
.intro-enter, .intro-leave-active {
    opacity: 0
}
</style>


