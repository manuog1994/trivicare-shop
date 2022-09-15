<template>
    <div class="home-cosmetics">
        <TheHeader />
        <HeroSliderSix />
        <ProductWrapperCosmetics />
        <ServicePolicyFour />
        <TestimonialOne />
        <BannerStyleFour />
        <!-- <BlogWrapper /> -->
        <TheFooter />
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSliderSix: () => import('@/components/hero/HeroSliderSix'),
            ProductWrapperCosmetics: () => import('@/components/product/ProductWrapperCosmetics'),
            ServicePolicyFour: () => import('@/components/policy/ServicePolicyFour'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            // BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        created() {
            this.setAuth();
        },
        
        methods: {
            ...mapActions('SET_AUTH', ['setAuth']),
        },
        head() {
            return {
                title: 'Home Cosmetics'
            }
        }
    };
</script>


