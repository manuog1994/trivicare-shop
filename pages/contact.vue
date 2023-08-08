<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
        <div id="post-nav" class="" @click="closeMenus">
            <NavBottom/>
            <Breadcrumb pageTitle="Contacto" />
            <Location />
            <ContactInfo />
            <TheFooter />
        </div>
    </div>
</template>

<script>
    export default {
        auth: false,
        
        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            NavBottom: () => import("@/components/NavBottom"),
            ContactInfo: () => import("@/components/ContactInfo"),
            TheFooter: () => import("@/components/TheFooter"),
            Location: () => import("@/components/Location"),
        },

        data() {
            return {
                searchChildren: "",
            };
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
                titleTemplate: "Contacto | TriviCare Natural Cosmetics",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/contact' }
                // ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Puede contactar con nosotros a través de este formulario o enviándonos un correo electrónico a info@trivicare.com, te atenderemos lo antes posible.'
                    }
                ],
            }
        },
    };
</script>
