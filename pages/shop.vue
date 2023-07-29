<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <Breadcrumb pageTitle="tienda" />
                <ShopContainer />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,

        pageTransition: 'slide-fade',

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            NavBottom: () => import("@/components/NavBottom"),
            ShopContainer: () => import("@/components/ShopContainer"),
            TheFooter: () => import("@/components/TheFooter"),
        },

        data() {
            return {
                searchChildren: '',
                unauthorized: '',
            }
        },

        async mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 1000);
            });

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

<style>
    .w-10 {
        width: 10px;
    }

    .pagination-custom {
    display: flex;
    padding-left: 0;
    list-style: none;
    }

    .page-link-custom {
    position: relative;
    font-size: 18px;
    display: flex;
    padding: 0 .75rem;
    color: #686868;
    text-decoration: none;
    background-color: #fff;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
    .page-link-custom {
        transition: none;
    }
    }
    .page-link-custom:hover {
    z-index: 2;
    color: orange;
    }
    .page-link-custom:focus {
    z-index: 3;
    color: orange;
    outline: 0;
    }
    .page-link-custom.active {
        color: orange;
    }
    .page-link-custom.disabled {
    color: #a0a0a0;
    }
</style>
