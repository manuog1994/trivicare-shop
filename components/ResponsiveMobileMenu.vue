<template>
<div>    
    <ul class='mobile-menu mb-2'>
        <client-only>
            <li>
                <n-link to="/shop">
                    <i class="me-3 pe-7s-shopbag"></i>
                    Productos
                </n-link>
            </li>
            <li>
                <n-link to="/blog">
                    <i class="me-3 pe-7s-news-paper"></i>
                    Tips
                </n-link>
            </li>
            <li>
                <n-link to="/about">
                    <i class="me-3 pe-7s-info"></i>
                    Nosotros
                </n-link>
            </li>
            <li>
            <n-link to="/shop?bestsellers=todos">
                <span class="me-2 fs-6">🔥</span>
                Más vendidos
            </n-link>
        </li>
        <li>
            <n-link to="/shop?news=todos">
                <span class="me-2 fs-6">🆕</span>
                Nuevo
            </n-link>
        </li>
        <li>
            <n-link to="/shop?offers=todos">
                <span class="me-2 fs-6">🛍️</span>
                Ofertas
            </n-link>
        </li>
            <!-- <li>
                <n-link to="/contact">
                    <i class="me-3 pe-7s-mail"></i>
                    Contacto
                </n-link>
            </li> -->
            <span class="mt-4 mb-4">Categorías</span>
            <li class="ms-3" v-for='(link, i) in menus' :key='i'>
                <n-link :to="link.url">
                    <i class="me-2 fa fa-circle-o"></i>
                    {{ link.title }}
                </n-link>
                <span class='submenu-toggle' v-if="link.submenu">
                    <i class="pe-7s-angle-down"></i>
                </span>
                <ul class="submenu" v-if="link.submenu">
                    <client-only>
                        <li v-for='(link, i) in link.submenu' :key='i' class="title">
                            <n-link :to="link.url">
                                {{ link.title }}
                            </n-link>
                            <span class='submenu-toggle' v-if="link.submenu">
                                <i class="pe-7s-angle-down"></i>
                            </span> 
                            <ul class="submenu" v-if="link.submenu">
                                <client-only>
                                    <li class="" v-for='(link, i) in link.submenu' :key='i'>
                                        <n-link :to="link.url"> {{ link.title }} </n-link>
                                    </li>
                                </client-only>
                            </ul>
                        </li>
                    </client-only>
                </ul>
            </li>
        </client-only>
    </ul>

    <span class="mt-4 mb-2">Fav</span>

    <ul class="mobile-menu mt-2">
        <!-- <li v-if="$auth.loggedIn == false">
            <n-link class="text-center" to="/login">
                <i class="me-2 pe-7s-user"></i>
                Iniciar sesión
            </n-link>
        </li>
        <p v-if="$auth.loggedIn">Hola, <strong>{{ getName() }}</strong></p>
        <li v-if="$auth.loggedIn">
            <n-link to="/my-account">
                <i class="me-2 pe-7s-user"></i>
                Mi cuenta
            </n-link>
        </li>
        <li v-if="$auth.loggedIn">
            <n-link to="/my-orders">
                <i class="me-2 pe-7s-note2"></i>
                Mis pedidos
            </n-link>
        </li>
        <li v-if="$auth.loggedIn">
            <a @click="logout">Cerrar sesión</a>
        </li> -->
        <li>
            <n-link to="/wishlist">
                <i class="me-2 pe-7s-like"></i>
                Lista de deseos
            </n-link>
        </li>
        <!-- <li v-if="$auth.loggedIn">
            <n-link to="/notifications-center">
                <i class="me-2 pe-7s-bell"></i>
                Notificaciones
            </n-link>
            <span class="ms-2 bg-blue-color p-2 rounded-5">{{ notifications }}</span>
        </li> -->
    </ul>
</div>
</template>

<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/shop?category=facial',
                        title: 'Facial',

                    },
                    {
                        url: '/shop?category=hidratante',
                        title: 'Hidratante',

                    },
                    {
                        url: '/shop?category=corporal',
                        title: 'Corporal',

                    },

                    {
                        url: '/shop?category=accesorios',
                        title: 'Accesorios',

                    },

                    {
                        url: '/shop?category=pack',
                        title: 'Packs',

                    },
                    
                ],
                role: '',
                notifications: 0
            }
        },

        computed: {
            wishlistItemCount() {
                return this.$store.getters.wishlistItemCount;
            }
        },

        mounted() {
            let getSiblings = function (e) {
                let siblings = []; 
                if(!e.parentNode) {
                    return siblings;
                }
                let sibling  = e.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== e) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            };

            const subMenuToggle = document.querySelectorAll('.submenu-toggle');
            subMenuToggle.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if(!this.classList.contains('active')) {
                        this.classList.add('active')
                        this.nextElementSibling.classList.add('active')
                        this.closest('li').classList.add('active')
                        getSiblings(this.closest('li')).forEach(function(item) {
                            item.classList.remove('active')
                            item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                                child.classList.remove('active')
                            })
                        })
                    } else {
                        this.closest('li').classList.remove('active')
                        this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                            child.classList.remove('active')
                        })
                    }
                })
            });

            this.countNotifications();
        },

        watch: {
            '$route.query.category': {
                handler: function() {
                    document.getElementById('off-canvas-mobile').classList.remove('show-mobile-menu');
                },
                deep: true
            },
        },

        methods: {
            
            async logout() {
                await this.$auth.logout();
                window.location.reload();
                this.$notify({ title: 'Has cerrado sesión!'})

            },

            getName() {
                if(this.$auth.loggedIn == true) {
                    const space = ' ';
                    const name = this.$auth.user?.name;
                    const arr = name.split(space);

                    return arr[0];
                }
            },

            countNotifications() {
                if(this.$auth.loggedIn == true) {
                    const notifications = this.$auth.user?.notifications;
                    if (notifications?.read == false) {
                        this.notifications = notifications?.length;
                    }
                }
            }
        }
    }
</script>



<style lang='scss' scoped>
    //circle icon of color
    .fa-circle-o {
        font-size: 10px;
        color: white;
        background-color: #2AB5B2;
        border-radius: 50%;
    }

    div span {
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    .mobile-menu {
        li:not(:last-child) {
            margin-bottom: 5px;
        }
        li {
            a {
                font-size: 16px;
                line-height: 35px;
                text-transform: capitalize;

            }
            &:hover {
                color: black !important;
                background-color: #2AB5B2;
                padding-left: 10px;
                border-radius: 5px;
            }

        }
        .submenu {
            display: none;
            padding-top: 5px;
            padding-left: 15px;
            &.active {
                display: block;
            }
            li {
                margin-bottom: 5px;
                
                &.title > {
                    a {
                        font-weight: 500;
                    }
                }
                .submenu {
                    li {
                        a {
                            line-height: 25px;
                            font-weight: 400;
                        }
                    }
                }

                &:hover {
                    color: black !important;
                    background-color: #2AB5B2;
                    padding-left: 10px;
                    border-radius: 5px;
                }
            }
        }
        .submenu-toggle {
            width: 35px;
            height: 35px;
            background-color: #f3f3f3;
            text-align: center;
            font-size: 28px;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;

            i {
                transition: 0.3s;
                line-height: 35px;
            }
            &.active {
                i {
                    transform: rotate(-180deg);
                }
            }
        }
    }
</style>