<template>
    <div class="d-xl-none menu-mobile" :class="{'position-absolute': $router.currentRoute.path === '/' ? true : false}">
        <header class="header-area sticky-bar p-3" :class="{'is-sticky': isSticky}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-4 d-flex justify-content-start align-items-center">
                        <div class="same-style mobile-menu-toggler d-flex d-xl-none ms-sm-3">
                            <button class="mobile-aside-button fs-2" @click="navOpen = !navOpen" title="Menu">
                                <i class="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-4 pt-2">
                        <div class="lgo">
                            <n-link to="/">
                                <nuxt-img loading="lazy" provider="customProvider" src="nuxt/TriviCare_byn Positivo_solo.svg" alt="logo" style="width: 150px; margin: auto;" />
                            </n-link>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-4 d-flex justify-content-end align-items-center">
                        <div class="header-right-wrap">
                            <div class="same-style header-search me-2">
                                <button class="search-active" @click="searchShow" title="Abrir barra de búsqueda"><i class="pe-7s-search"></i></button>
                            </div>
                            <div class="same-style cart-wrap me-sm-3">
                                <button class="icon-cart" @click="openCart = !openCart" title="Menu Carrito">
                                    <i class="pe-7s-shopbag"></i>
                                    <span class="count-style">{{ cartItemCount }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="searchShow" class="col-12 mt-3 d-none">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu id="off-canvas-mobile" :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" />
        <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart" @minicartRight="handleMiniCartChange"/>
    </div>
</template>

<style lang="scss" scoped>
.lgo{
    display: flex;
    justify-content: center;
    a {
        display: flex;
        justify-content: center;
        align-self: center;
        img {
            width: 200px !important;
        }
    }
}

.button-search-div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background-color: transparent;
        border: none;
        color: #000;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 10px;

        &:hover {
            color: $theme-color;
        }
    }
}

.menu-mobile{
    width: 100%;
    z-index: 998;
}

</style>

<script>
    export default {
        auth: false,
        props: ['searchChildren'],

        components: {
            MiniCart: () => import("@/components/MiniCart"),
            Search: () => import("@/components/Search"),
            OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
        },

        computed: {
            cartItemCount() {
                return this.$store.getters.cartItemCount
            },
            wishlistItemCount() {
                return this.$store.getters.wishlistItemCount
            },
            compareItemCount() {
                return this.$store.getters.compareItemCount
            },
        },

        data() {
            return {
                isSticky: false,
                isOpenSearch: false,
                isOpenAccountSettings: false,
                openCart: false,
                navOpen: false,
                role: '',
                opacity: false,
            }
        },

        beforeMount() {
            this.$root.$on('opacityOther', data => {
                this.opacity = data;
            });
            this.$root.$on('closeMenu', data => {
                this.isOpenAccountSettings = data;
                this.openCart = data;
                this.navOpen = data;
                document.getElementById('searchShow').classList.add('d-none');
            });
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            });
        }, 

        watch: {
            opacity() {
                this.$emit('opacity', this.opacity)
            }
        },

        methods: {
            searchShow() {
                if (document.getElementById('searchShow').classList.contains('d-none')) {
                    document.getElementById('searchShow').classList.remove('d-none');
                 } else {
                    document.getElementById('searchShow').classList.add('d-none');
                }
            },
            async logout() {
                await this.$auth.logout();
                window.location.reload();
            },

            handleMiniCartChange(value) {
                this.openCart = value
            },

        }
    };
</script>
