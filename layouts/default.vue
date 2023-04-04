<template>
    <div>
        <Nuxt />

        <client-only>
            <notifications position="bottom left" classes='vue-notification success' />
        </client-only>

        <button class="scroll-top" @click="scrollToTop" :class="{ 'show': isVisible }">
            <i class="fa fa-angle-double-up"></i>
        </button>
     </div>
</template>

<script>
    export default {
        name: "default",
        data() {
            return {
                isVisible: false,
            };
        },

        components: {
            ModalError: () => import('~/components/ModalError.vue'),
        },

        mounted() {
            window.addEventListener("scroll", () => {
                let scroll = window.scrollY;
                if (scroll >= 500) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            });

            setInterval(() => {
                this.$store.dispatch('clearCartIfExpired')
            }, 60 * 60 * 1000)
        },

        methods: {
            scrollToTop() {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            },
        },
    };
</script>

