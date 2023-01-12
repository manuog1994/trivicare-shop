<template>
    <client-only>
        <div>
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <NotificationsContent />
                <TheFooter />
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            searchChildren: '',
            closeMenu: false,
        }
    },

    components: {
        HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
        TheHeader: () => import("@/components/TheHeader"),
        NavBottom: () => import("@/components/NavBottom"),
        TheFooter: () => import("@/components/TheFooter"),
        NotificationsContent: () => import("@/components/NotificationsContent"),
    },

    mounted() {
        this.$auth.fetchUser()
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
        },
    }
}
</script>

<style>

</style>