<template>
    <div>
        <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix" :class="{'is-sticky': isSticky}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-md-6 col-4">
                        <div class="logo">
                            <n-link to="/">
                                <nuxt-img src="logo-ajustado2.png" alt="logo" />
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
                            <!-- <div class="same-style header-search d-none d-lg-block">
                                <button class="search-active" @click="isOpenSearch = !isOpenSearch"><i class="pe-7s-search"></i></button>
                                <div class="search-content" :class="{ active:isOpenSearch }">
                                    <input v-model="msg" type="text" placeholder="Buscar..." />
                                </div> 
                            </div> -->
                            <div class="same-style account-setting d-none d-lg-block">
                                <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings"><i class="pe-7s-user-female"></i></button>
                                <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                                    <ul v-if="role == 'admin'">
                                        <li><n-link to="/crud">PCD</n-link></li>
                                        <li><n-link to="/my-account">Mi Perfil</n-link></li>
                                        <li><n-link to="/my-orders">Mis pedidos</n-link></li>

                                        <li><a @click="logout">Cerrar sesión</a></li>
                                    </ul>
                                    <ul v-else-if="$auth.user">
                                        <li><n-link to="/my-account">Mi Perfil</n-link></li>
                                        <li><n-link to="/my-orders">Mis pedidos</n-link></li>
                                        <li><a @click="logout">Cerrar sesión</a></li>
                                    </ul>
                                    <ul v-else>
                                        <li><n-link to="/login">Iniciar sesión/Registrar</n-link></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- <div class="same-style header-compare">
                                <n-link to="/compare"><i class="pe-7s-shuffle"></i></n-link>
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
            <div class="header-top-area header-padding-2 d-none d-lg-block background-color-banner">
                <div class="container">
                    <div class="header-top-inner">
                        <div class="header-offer m-auto">
                            <vue-typer class="custom-two" text="Envío gratis a partir de 50 €" :repeat="0"></vue-typer>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" />
    </div>
</template>

<style scoped>
.background-color-banner {
    background-color: #ffb1b1;
}
</style>

<script>
    export default {
        auth: false,

        components: {
            Navigation: () => import("@/components/Navigation"),
            MiniCart: () => import("@/components/MiniCart"),
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
            }
        },

        beforeMount() {
            this.$root.$on('message', data => {
                this.msg = data;
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
            this.getRoles();             
        }, 

        methods: {
            async logout() {
                await this.$auth.logout();
                window.location.reload();
                this.$notify({ title: 'Has cerrado sesión!'})

            },
            getRoles() {
                if(this.$auth.user) {
                    const roles = this.$auth.user.roles;
                    if(roles != null) {
                        roles.map(role => {
                            this.role = role.name;
                        });
                    }else {
                        this.role = '';
                    }
                }
            }
        }
    };
</script>
