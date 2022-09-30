<template>
    <div class="sidebar-style" :class="classes">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Buscar</h4>
            <div class="pro-sidebar-search mb-50 mt-25">
                <input v-model="search" type="text" placeholder="Buscar...">
            </div>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Categorías</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="category in categories" :key="category.id">
                    <a :class="{ 'nuxt-link-exact-active': category.slug == categorySlug && query == categorySlug}" @click.prevent="categorySlug = category.slug">
                        <span class="check-mark"></span>
                        {{ category.name }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="pro-action d-flex justify-content-center mt-4">
            <div class="pro-cart btn-hover">
                <n-link class="clear_filters" :to="{ path: '/shop' }">
                    <i class="fa fa-trash"></i> 
                        LIMPIAR FILTROS
                </n-link>
            </div>
        </div>

        <!-- tag widget  -->
        <div class="sidebar-widget sidebar-widget__tag mt-60">
            <h4 class="pro-sidebar-title">Tags</h4>
            <div class="mt-2">
                <div class="col-auto">
                    <div v-for="tag in tags" :key="tag.id" class="d-flex">
                        <a @click.prevent="tagSlug = tag.slug" class="tag-block m-1" :style="`background-color:${tag.color}`" v-if="tag.color || hidden">#{{ tag.name }}</a>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <a style="background: #343538; padding: 0.5rem 1.5rem; color: white;" v-if="hidden == false" @click.prevent="hidden = true ">VER MÁS</a>
                        <a style="background: #343538; padding: 0.5rem 1.5rem; color: white;" v-if="hidden == true" @click.prevent="hidden = false ">VER MENOS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .clear_filters {
        background: #343538; 
        padding: 0.5rem 1.5rem; 
        color: white;
    }
</style>

<script>
    export default {
        props: ["classes", "msg"],

        data() {
            return {
                hidden: false,
                categoryFilter: '',
                search: '',
                categorySlug: '',
                tagSlug: '',
            }
        },
        mounted() {
            this.getTags();
            this.getCategories();
        },

        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
            query() {
                return this.$route.query.category
            },
            tags() {
                return this.$store.getters.getTags
            },
        },

        
        watch: {
            search() {
                this.$emit("search", this.search)
            },

            categorySlug() {
                this.$router.push({ path: '/shop', query: { category: this.categorySlug } })
            },

            tagSlug() {
                this.$router.push({ path: '/shop', query: { tag: this.tagSlug } })
            },

            
        },

        methods: {
            async getTags() {
                await this.$store.dispatch('getTags')
            },

            async getCategories() {
                await this.$store.dispatch('getCategories')
            },
        },

    };
</script>