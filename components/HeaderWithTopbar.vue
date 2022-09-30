<template>
    <div>
        <header class="header-area">
            <div class="header-top-area header-padding-2 d-none d-lg-block">
                <div :class="containerClass">
                    <div class="header-top-inner">
                        <!-- <div class="language-currency-wrap">
                            <div class="same-language-currency language-style">
                                <select name="language">
                                    <option value="spanish" selected>Español</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                </select>
                            </div>
                            <div class="same-language-currency use-style">
                                <select name="currency">
                                    <option value="eur" selected>EUR</option>
                                    <option value="usd">USD</option>
                                    <option value="rup">Rup</option>
                                </select>
                            </div>
                        </div> -->
                        <div class="header-offer m-auto">
                            <p>Envío gratis a partir de <span>50 &euro;</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-padding-1 sticky-bar header-res-padding clearfix" :class="{'is-sticky': isSticky}">
                <div :class="containerClass">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-4">
                            <div class="logo">
                                <n-link to="/">
                                    <img src="/img/logo/logo-2.png" alt="trivicare logo">
                                </n-link>
                            </div>
                        </div>
                        <div class="col-lg-8 d-none d-lg-block">
                            <div class="main-menu">
                                <nav>
                                    <Navigation />
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-8">
                            <div class="header-right-wrap">
                                <div class="same-style d-none d-lg-block me-2">
                                    <n-link to="/">
                                        <i class="fa fa-home"></i>
                                    </n-link>
                                </div>
                                <div class="same-style account-setting d-none d-lg-block">
                                    <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings"><i class="pe-7s-user-female"></i></button>
                                    <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                                        <ul v-if="$auth.user">
                                            <li>
                                                <n-link to="/my-account">Mi Perfil</n-link>
                                            </li>
                                            <li>
                                                <a @click="logout">Cerrar sesión</a>
                                            </li>
                                        </ul>
                                        <ul v-if="!$auth.user">
                                            <li><n-link to="/login">Iniciar sesión/Registrar</n-link></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- <div class="same-style header-compare">
                                    <n-link to="/compare">
                                        <i class="pe-7s-shuffle"></i>
                                    </n-link>
                                    <span class="count-style">{{ compareItemCount }}</span>
                                </div> -->
                                <div class="same-style header-wishlist">
                                    <n-link to="/wishlist"><i class="pe-7s-like"></i></n-link>
                                    <span class="count-style">{{ wishlistItemCount }}</span>
                                </div>
                                <div class="same-style cart-wrap">
                                    <button class="icon-cart" @click="openCart = !openCart">
                                        <i class="pe-7s-shopbag"></i>
                                        <span class="count-style">{{ cartItemCount }}</span>
                                    </button>
                                    <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart" />
                                </div>
                                <div class="same-style mobile-menu-toggler d-block d-lg-none">
                                    <button class="mobile-aside-button" @click="navOpen = !navOpen">
                                        <i class="pe-7s-menu"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" />
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
            MiniCart: () => import("@/components/MiniCart"),
        },

        props: ['containerClass', 'msg'],

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
                categories: [],
                categoryFilter: '',
            }
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

            this.getCategories();
        },
        
        watch: {
            father() {
                this.$emit("father", this.father)
            },

            categoryFilter() {
                this.$emit("categoryFilter", this.categoryFilter)
            }
        },

        methods: {
            async logout() {
                await this.$auth.logout();
                this.$router.push('/');
                this.$notify({ title: 'Has cerrado sesión!'})

            },

            async getCategories() {
                const response = await this.$axios.get('/api/categories')
                this.categories = response.data.data
            },

            redirectToShop() {
                this.$router.push('/shop')
            },

            categoryId(value) {
                this.$emit("categoryFilter", value)
            }
        }
    };
</script>