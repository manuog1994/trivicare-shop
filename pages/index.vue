<template>
    <div class="home-cosmetics">
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
            TheHeader: () => import('@/components/TheHeader'),
            HeroSliderSix: () => import('@/components/hero/HeroSliderSix'),
            ProductWrapperCosmetics: () => import('@/components/product/ProductWrapperCosmetics'),
            ServicePolicyFour: () => import('@/components/policy/ServicePolicyFour'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            // InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
            // BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
            
        },

        created() {
        },
        
        methods: {

        },
        head() {
            return {
                title: 'Home Cosmetics'
            }
        }
    };
</script>


