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
                    <a :class="{ 'nuxt-link-exact-active': category.slug == categorySlug}" @click.prevent="categorySlug = category.slug">
                        <span class="check-mark"></span>
                        {{ category.name }}
                    </a>
                </li>
            </ul>
        </div>

        <!-- tag widget  -->
        <div class="sidebar-widget sidebar-widget__tag mt-60">
            <h4 class="pro-sidebar-title">Tags</h4>
            <div class="mt-2">
                <div class="col-auto">
                    <div v-for="tag in tags" :key="tag.id" class=" d-inline-block me-2 mt-2" >
                        <a @click.prevent="tagSlug = tag.slug" class="tag-block" :style="`background-color:${tag.color}`">
                            #{{ tag.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="pro-action d-flex justify-content-center mt-4">
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

            tags() {
                return this.$store.getters.getTags
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

            
        },

        methods: {
            async getTags() {
                await this.$store.dispatch('getTags')
            },

            async getCategories() {
                await this.$store.dispatch('getCategories')
            },

            clearFilters() {
                this.categorySlug = '';
                this.tagSlug = '';
                this.$router.push({ path: '/shop'})
            }
        },

    };
</script>