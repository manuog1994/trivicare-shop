<template>
    <div class="sidebar-style" :class="classes">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Buscar</h4>
            <div class="pro-sidebar-search mb-50 mt-25">
                <form class="pro-sidebar-search-form">
                    <input type="text" placeholder="Buscar...">
                    <button>
                        <i class="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Categorías</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="category in categories" :key="category.id">
                    <n-link :to="`?category=${slugify(category.name)}`">
                        <span class="check-mark"></span>
                        {{ category.name }}
                    </n-link>
                </li>
            </ul>
        </div>


        <!-- size widget  -->
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">Sizes</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(size, index) in sizeList" :key="index" >
                    <n-link :to="`?size=${slugify(size)}`">
                        <span class="check-mark"></span>
                        {{ size }}
                    </n-link>
                </li>
            </ul>
        </div>

        <!-- tag widget  -->
        <div class="sidebar-widget sidebar-widget__tag mt-60">
            <h4 class="pro-sidebar-title">Tags</h4>
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
    </div>
</template>

<script>
    export default {
        props: ["classes"],
        data() {
            return {
                categories: [],
            }
        },
        mounted() {
            this.getCategories();
        },
        
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
            tagList() {
                return this.$store.getters.tagList
            }
        },

        methods: {
            async getCategories() {
                const categories = await this.$axios.$get('http://api.trivicare.test/v1/categories');
                this.categories = categories.data;

            },
            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        }
    };
</script>