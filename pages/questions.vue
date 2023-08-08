<template>
    <client-only>
        <div class="privacy-policy-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <Breadcrumb pageTitle="Preguntas frecuentes" />
                <QuestionCont />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>

    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            TheHeader: () => import('@/components/TheHeader'),
            NavBottom: () => import('@/components/NavBottom'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            QuestionCont: () => import('@/components/QuestionsCont'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                titleTemplate: "Preguntas frecuentes | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/questions' }
                // ],
            }
        },

        data() {
            return {
                searchChildren: '',
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
    };
</script>


