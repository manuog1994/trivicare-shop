<template>
    <div class="about-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="about us" />
        <WelcomeMessage class="pt-100 pb-95" />
        <BannerStyleOne class="pb-70" />
        <AboutMission />
        <FunFact />
        <TeamMembers />
        <BrandLogoCarousel />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'), 
            Breadcrumb: () => import('@/components/Breadcrumb'), 
            WelcomeMessage: () => import('@/components/WelcomeMessage'), 
            BannerStyleOne: () => import('@/components/banner/BannerStyleOne'), 
            AboutMission: () => import('@/components/AboutMission'), 
            FunFact: () => import('@/components/FunFact'), 
            TeamMembers: () => import('@/components/TeamMembers'), 
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'), 
            TheFooter: () => import('@/components/TheFooter'), 
        },
        head() {
            return {
                title: "Sobre Nosotros"
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
        }
    };
</script>
