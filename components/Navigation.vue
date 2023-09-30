<template>
    <client-only>
        <ul>
            <li>
                <n-link style="color: black; font-size: 1.2rem; font-weight: 500;" to="/shop"> Productos <i class="fa fa-angle-down"></i></n-link>
                <ul class="mega-menu">
                    <li>
                        <ul>
                            <li class="mega-menu-title">
                                <n-link to="">Categorías</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?category=facial">Facial</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?category=hidratante">Hidratante</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?category=corporal">Corporal</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?category=accesorios">Accesorios</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?category=pack">Packs</n-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li class="mega-menu-title">
                                <n-link to="">Destacados</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?bestsellers=todos">Más Vendidos 🔥</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?news=todos">Nuevos 🆕</n-link>
                            </li>
                            <li>
                                <n-link to="/shop?offers=todos">Ofertas 🛍️</n-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li class="mega-menu-img">
                                <n-link to="/shop">
                                    <img src="/img/imagen-nav-resize.webp" alt="La imagen no está disponible">
                                </n-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <n-link style="color: black; font-size: 1.2rem; font-weight: 500;" to="/blog">Tips</n-link>
            </li>
            <li>
                <n-link style="color: black; font-size: 1.2rem; font-weight: 500;" to="/about">Nosotros </n-link>
            </li>
            <li>
                <n-link style="color: black; font-size: 1.2rem; font-weight: 500;" to="/shop?bestsellers=todos">Bestseller 🔥</n-link>
            </li>
        </ul>
    </client-only>
</template>

<style>
    .link-nav{
        color: black;
    }

    .p-nav{
        padding: 20px;
        font-size: 16px;
        font-weight: 600;
    }

    .p-text{
        padding: 20px;
    }

    @media only screen and (max-width: 1088px) {
        .p-nav{
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }

    @media only screen and (max-width: 1010px) {
        .p-nav{
            padding-top: 30px;
            padding-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
        }
    }

    @media only screen and (max-width: 1065px) {
        .p-text{
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 1005px) {
        .p-text{
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
        }
    }

    @media only screen and (max-width: 991px) {
        .p-nav{
            display: none;
        }
    }

    @media only screen and (max-width: 991px) {
        .p-text{
            display: none;
        }
    }
</style>

<script>

    export default {
        data() {
            return {
                url: process.env.url,
            }
        },
        

    }
</script>