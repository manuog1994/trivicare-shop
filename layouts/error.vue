<template>
    <client-only>
        <div class="home-cosmetics">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <NavBottom/>
            <div class="error404">
                <div class="container text-center">
                    <div class="error-image">
                        <img class="img-fluid" src="/img/t-rex.png" alt="Not Found Image" width="400">
                    </div>
                    <h2 class="title-404">404</h2>
                    <h1 class="error-404-title" v-if="error.statusCode === 404">¡Oops! Esta página no esta disponible</h1>
                    <h1 class="error-404-title" v-else>¡Oops! Algo salió mal</h1>
                    <div class="error-buttons">
                        <button @click="$router.go(-1)" class="btn bg-trivi-blue rounded-0 border-white btn-hover-blue">
                            <span class="text-white">Ir a la página anterior</span>
                        </button>
                    </div>
                </div>
            </div>
            <TheFooter />
        </div>
    </client-only>
</template>

<script>
    export default {
        props: ['error'],

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            TheFooter: () => import("@/components/TheFooter"),
            NavBottom: () => import("@/components/NavBottom"),
        },

        data() {
            return {
                show: false,
                test: '',
                searchChildren: '',
                closeMenu: false,
                loaderPage: false,
            }
        },

        async mounted() {
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
            
            if(this.$axios.onError(error => {
                const code = error.response.status;
                if (code == 401) {
                    this.$auth.logout();
                }
            }));

            if(this.$auth.loggedIn == true) {
                this.$auth.fetchUser();

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
    }
</script>

<style lang="scss" scoped>
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
    }
    .error-404-title {
        font-weight: 500;
        padding-top: 10px;
        margin-bottom: 20px;
        color: black;
    }

    .title-404 {
        font-size: 5rem;
        font-weight: 700;
        color: #000000;
        margin-bottom: 0;
    }
</style>