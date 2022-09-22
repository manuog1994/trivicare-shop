<template>
    <div class="sidebar-style" :class="classes">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Buscar</h4>
            <div class="pro-sidebar-search mb-50 mt-25">
                <input @click.prevent="redirectToShop" v-model="father" type="text" placeholder="Buscar...">
            </div>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Categorías</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="category in categories" :key="category.id">
                    <n-link :to="`/categories/${category.slug}`">
                        <span class="check-mark"></span>
                        {{ category.name }}
                    </n-link>
                </li>
            </ul>
        </div>

        <div class="pro-action d-flex justify-content-center mt-4">
            <div class="pro-cart btn-hover">
                <n-link to="/shop" title="Limpiar filtros" style="background: #343538; padding: 0.5rem 1.5rem; color: white;">
                    <i class="fa fa-trash"></i>
                    LIMPIAR FILTROS 
                </n-link>
            </div>
        </div>

        <!-- size widget 
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
        </div> -->

        <!-- tag widget  -->
        <!-- <div class="sidebar-widget sidebar-widget__tag mt-60">
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
        </div> -->
    </div>
</template>

<script>
    export default {
        props: ["classes", "msg"],

        data() {
            return {
                categories: [],
                slugCategory: '',
                father: '',

            }
        },
        mounted() {
            this.getCategories();
        },

        
        watch: {
            father() {
                this.$emit("father", this.father)
            },            
        },

        methods: {
            async getCategories() {
                const categories = await this.$axios.$get('/api/categories?filter[slug]=' + this.slugCategory);
                this.categories = categories.data;

            },

            redirectToShop() {
                this.$router.push('/shop')
            }
        },

    };
</script>