<template>
    <div class="d-none d-xl-block">
        <header class="header-area" :class="{'position-absolute': $router.currentRoute.path === '/' ? true : false}">
            <div class="header-padding-1 sticky-bar" :class="{'is-sticky': isSticky}">
                <div :class="containerClass">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center justify-content-end">
                            <n-link to="/">
                                <nuxt-img loading="lazy" provider="customProvider" src="nuxt/TriviCare_byn Positivo_solo.svg" width="180" alt="logo"/>
                            </n-link>
                        </div>
                        <div class="col-6">
                            <div class="main-menu text-center">
                                <nav>
                                    <Navigation />
                                </nav>
                            </div>
                        </div>
                        <div class="col-3 stiky-buttons p-3 d-flex justify-content-start">
                            <div class="header-right-wrap">
                                <div class="same-style header-search">
                                    <button class="search-active" @click="searchOpen" title="Abrir barra de búsqueda"><i class="pe-7s-search fs-3"></i></button>
                                </div>
                                <!-- <div class="same-style account-setting d-block me-1">
                                    <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings" title="Menú de perfil"><i class="pe-7s-user-female"></i></button>
                                    <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                                        <ul v-if="$auth.loggedIn == true">
                                            <li class="border-bottom-1 mb-1"><p>Hola, <strong>{{ getName() }}</strong></p></li>
                                            <li v-if="role == 'admin'"><n-link to="/crud">PDC</n-link></li>
                                            <li><n-link to="/my-account">Mi Perfil</n-link></li>
                                            <li><n-link to="/my-orders">Mis pedidos</n-link></li>
                                            <li><a @click="logout">Cerrar sesión</a></li>
                                        </ul>
                                        <ul v-else>
                                            <li><n-link to="/login">Iniciar sesión</n-link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div v-if="$auth.loggedIn == true" class="same-style cart-wrap">
                                    <button class="" @click="openNotifications = !openNotifications" title="Notificaciones">
                                        <i class="fa fa-comment-o icon-notify"></i>
                                        <span class="count-style">{{ notifications }}</span>
                                    </button>
                                    <Notifications :openNotifications="openNotifications" @notificationsClose="openNotifications = !openNotifications" />
                                </div> -->
                                <div class="same-style header-wishlist">
                                    <n-link to="/wishlist"><i class="pe-7s-like fs-3" title="Ir a lista de deseos"></i></n-link>
                                    <span class="count-style">{{ wishlistItemCount }}</span>
                                </div>
                                <div class="same-style cart-wrap me-lg-3 me-xl-1">
                                    <button class="icon-cart" @click="openCart = !openCart" title="Desplegar carrito">
                                        <i class="pe-7s-shopbag fs-3"></i>
                                        <span class="count-style">{{ cartItemCount }}</span>
                                    </button>
                                </div>
                                <div class="same-style mobile-menu-toggler d-block d-lg-none">
                                    <button class="mobile-aside-button" @click="navOpen = !navOpen" title="Menu">
                                        <i class="pe-7s-menu fs-3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="searchMobile" class="col-12 hidden p-3">
                        <Search />
                    </div>
                </div>
            </div>
            <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart" @minicartRight="handleMiniCartChange" />
        </header>
        
    </div>
</template>

<style scoped>
.custom-two{
    font-size: 14px;
    color: #ff0000;
}

.icon-notify{
    font-size: 20px;
}
    
</style>

<script>
    export default {
        components: {
            Search: () => import("@/components/Search"),
            Navigation: () => import("@/components/Navigation"),
            MiniCart: () => import("@/components/MiniCart"),
            Notifications: () => import("@/components/Notifications"),
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
            notificationsItemCount() {
                return this.$store.getters.notificationsItemCount
            },
        },

        data() {
            return {
                isSticky: false,
                isOpenSearch: false,
                isOpenAccountSettings: false,
                openCart: false,
                openNotifications: false,
                navOpen: false,
                categories: [],
                categoryFilter: '',
                role: '',
                notifications: 0,
                addToCart: false,
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
            this.getRoles();
            this.countNotifications();
        },
        
        watch: {
            father() {
                this.$emit("father", this.father)
            },

            categoryFilter() {
                this.$emit("categoryFilter", this.categoryFilter)
            },

            addToCart() {
                this.openCart = !this.openCart
            }
        },

        methods: {
            async logout() {
                await this.$auth.logout();
                window.location.reload();
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
            },

            getRoles() {
                if(this.$auth.loggedIn == true) {
                    const roles = this.$auth.user.roles;
                    if(roles != null) {
                        roles.map(role => {
                            this.role = role.name;
                        });
                    }else {
                        this.role = '';
                    }
                }

            },
            getName() {
                if(this.$auth.loggedIn == true) {
                    const space = ' ';
                    const name = this.$auth.user.name;
                    //console.log(name);
                    const arr = name?.split(space);

                    return arr[0];
                }
            },

            countNotifications() {
                if(this.$auth.loggedIn == true) {
                    let notifications = this.$auth.user.notifications;
                    //console.log(notifications)
                    if(notifications != null) {
                        const noti = notifications.filter(notification => notification.read == 0)?.length;
                        //console.log(noti)
                        this.notifications = noti;
                    }else {
                        this.notifications = 0;
                    }
                }
            },

            searchOpen() {
                if (document.getElementById('searchMobile').classList.contains('hidden')) {
                    document.getElementById('searchMobile').classList.remove('hidden');
                 } else {
                    document.getElementById('searchMobile').classList.add('hidden');
                }
            },

            handleMiniCartChange(value) {
                this.openCart = value
            },
        },

        beforeMount() {
            this.$root.$on('closeMenu', data => {
                this.navOpen = data
                this.openCart = data
                this.isOpenAccountSettings = data
            })
        },  
    };
</script>