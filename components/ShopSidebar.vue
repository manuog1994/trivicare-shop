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
            <client-only>
                <ul class="sidebar-widget-list mt-20">
                    <li class="sidebar-widget-list-left" v-for="category in categories" :key="category.id">
                        <a :class="{ 'nuxt-link-exact-active': category.slug == categorySlug}" @click.prevent="categorySlug = category.slug">
                            <span class="check-mark"></span>
                            {{ category.name }}
                        </a>
                    </li>
                </ul>
            </client-only>
        </div>

        <!-- tag widget  -->
        <div class="sidebar-widget mt-5">
            <h4 class="pro-sidebar-title">Activos</h4>
            <client-only>
                <ul class="sidebar-widget-list mt-20">
                    <li class="sidebar-widget-list-left" v-for="tag in tags" :key="tag.id">
                        <a :class="{ 'nuxt-link-exact-active': tag.slug == tagSlug}" @click.prevent="tagSlug = tag.slug">
                            <span class="check-mark"></span>
                            {{ tag.name }}
                        </a>
                    </li>
                </ul>
            </client-only>
            <div class="d-flex justify-content-center mt-2">
                <a @click.prevent="tagShow = 20" class="btn p-2" v-if="tagShow == 4">Ver más</a>
                <a @click.prevent="tagShow = 4" class="btn p-2" v-if="tagShow > 4">Ver menos</a>
            </div>
        </div>
        <div class="pro-action d-flex justify-content-center mt-4 border-bottom-1">
            <div class="pro-cart btn-hover">
                <a class="clear_filters" @click.prevent="clearFilters">
                    <i class="fa fa-trash"></i> 
                        LIMPIAR FILTROS
                </a>
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
                tagSlug: [],
                tags: [],
                tagShow: 4,
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
        },

        
        watch: {
            search() {
                this.$emit("search", this.search)
            },

            categorySlug() {
                //this.tagSlug = '';
                this.$router.push({ path: '/shop', query: { category: this.categorySlug, tag: this.tagSlug } })
            },

            tagSlug() {
                //this.categorySlug = '';
                this.$router.push({ path: '/shop', query: { category: this.categorySlug, tag: this.tagSlug } })
            },

            tagShow() {
                this.getTags();
            }
        },

        methods: {
            async getTags() {
                await this.$store.dispatch('getTags')
                const tags = this.$store.getters.getTags
                const filter = tags.filter(item => {
                    if (item.id <= this.tagShow) {
                        return item
                    }
                })
                 this.tags = filter
            },

            async getCategories() {
                await this.$store.dispatch('getCategories')
            },

            clearFilters() {
                this.categorySlug = '';
                this.tagSlug = '';
                this.$router.push({ path: '/shop'})
            },

        },

    };
</script>