<template>
    <div id="filterMobile" class="sidebar-style mobile-filter p-3" :class="classes">
        <!-- Botón de cerrar para mobile -->
        <div class="d-lg-none button-filter-close">
            <button class="close-btn-2 fa-3x" @click="closeFilter">
                <i class="pe-7s-close"></i>
            </button>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <span class="pro-sidebar-title">Categoría</span>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(category, index) in categoryList" :key="index">
                    <n-link :to="`?category=${slugify(category)}`">
                        <span class="check-mark"></span>
                        {{ category }}
                    </n-link>
                </li>
            </ul>
        </div>

        <!-- color widget  -->
        <div class="sidebar-widget mt-50" v-if="colorList?.length > 1">
            <span class="pro-sidebar-title">Color</span>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(color, index) in colorList" :key="index" >
                    <n-link :to="`?color=${slugify(color)}`">
                        <span class="check-mark"></span>
                        {{ color }}
                    </n-link>
                </li>
            </ul>
        </div>
        <!-- size widget  -->
        <div class="sidebar-widget mt-50" v-if="sizeList?.length > 1">
            <span class="pro-sidebar-title">Tamaño</span>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(size, index) in sizeList" :key="index" >
                    <n-link :to="`?size=${slugify(size)}`">
                        <span class="check-mark"></span>
                        {{ size }}
                    </n-link>
                </li>
            </ul>
        </div>

        <!-- model widget  -->
        <div class="sidebar-widget mt-50" v-if="modelList?.length > 1">
            <span class="pro-sidebar-title">Modelo</span>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(model, index) in modelList" :key="index" >
                    <n-link :to="`?size=${slugify(model)}`">
                        <span class="check-mark"></span>
                        {{ model }}
                    </n-link>
                </li>
            </ul>
        </div>

        <!-- tag widget  -->
        <div class="sidebar-widget sidebar-widget__tag mt-60">
            <span class="pro-sidebar-title">Tags</span>
            <div class="sidebar-widget-tag mt-30">
                <ul>
                    <li v-for="(tag, index) in tagList" :key="index">
                        <n-link :to="`?tag=${slugify(tag)}`">
                            {{ tag }}
                        </n-link>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- Others -->
        <div class="sidebar-widget sidebar-widget__tag mt-60">
            <span class="pro-sidebar-title">Otros</span>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left">
                    <n-link to="?bestsellers=todos">
                        <span class="check-mark"></span>
                        Más vendidos
                    </n-link>
                </li>
            </ul>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left">
                    <n-link to="?news=todos">
                        <span class="check-mark"></span>
                        Nuevo
                    </n-link>
                </li>
            </ul>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left">
                    <n-link to="?offers=todos">
                        <span class="check-mark"></span>
                        Ofertas
                    </n-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["classes"],
        computed: {
            categoryList() {
                return this.$store.getters.categoryList
            },
            sizeList() {
                return this.$store.getters.sizeList
            },
            colorList() {
                return this.$store.getters.colorList
            },
            modelList() {
                return this.$store.getters.modelList
            },
            tagList() {
                return this.$store.getters.tagList
            },
            getBestSeller() {
                return this.$store.getters.getBestSeller
            },
            getNewProducts() {
                return this.$store.getters.getNewProducts
            },
            getDiscountProducts() {
                return this.$store.getters.getDiscountProducts
            },
        },

        watch: {
            '$route.query.category': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.tag': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.color': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.size': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.model': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.bestsellers': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.news': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

            '$route.query.offers': {
                handler: function (query) {
                    this.closeFilter();
                },
                deep: true
            },

        },

        methods: {
            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            },

            closeFilter() {
                document.getElementById("filterMobile").classList.remove("active");
            }
        }
    };
</script>

<style scoped>
/* Dar a span los valores de h4 en bootstrap */
span {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2;
    color: #333;
}
</style>