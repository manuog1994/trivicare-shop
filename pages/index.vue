<template>
    <div class="home-cosmetics">
        <Loading v-if="showHideSpinner" />
        <TheHeader />
        <HeroSliderSix />
        <ProductWrapperCosmetics />
        <ServicePolicyFour />
        <TestimonialOne />
        <BannerStyleFour />
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
            TestimonialOne: () => import("@/components/TestimonialOne"),
            // InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
            // BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import("@/components/TheFooter"),
            Loading: () => import("@/components/Loading"),
        },


        beforeCreate() {
            this.showHideSpinner = true;
        },

        mounted() {
            this.showHideSpinner = false;
        },

        data() {
            return {
                showHideSpinner: true,
            };
        },

        head() {
            return {
                title: 'Tienda de cosmética natural y ecológica | Cosmética natural y ecológica',
            }
        }
    };
</script>


