<template>
    <div class="blog-sidebar">
        <!-- <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Search</h4>
            <div class="pro-sidebar-search mb-55 mt-25">
                <form class="pro-sidebar-search-form">
                    <input type="text" placeholder="Search here...">
                    <button>
                        <i class="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        </div> -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Entradas recientes</h4>
            <div class="sidebar-project-wrap mt-30" v-for="blog in blogRecents" :key="'blog-recent'+blog.id">
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link :to="`/blog/${blog.slug}`">
                            <img :src="blog.imgSrc" alt="imagen no disponible">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>{{ blog.mod }}</span>
                        <h4>
                            <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="sidebar-widget mt-35">
            <h4 class="pro-sidebar-title">Categorías</h4>
            <ul class="sidebar-widget-list mt-20" v-for="category in categories" :key="'category'+category">
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        {{ category }}
                        <span>{{ categories.length }}</span>
                    </n-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">Tag</h4>
            <div class="sidebar-widget-tag mt-25">
                <ul v-for="tag in tags" :key="'tag'+tag">
                    <li>
                        <n-link to="/blog">{{ tag }}</n-link>
                    </li>
                </ul>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        props: ["blogs"],
        data() {
            return {
                blogRecents: [],
                categories: [],
                tags: []
            }
        },

        mounted() {
            this.getRecentBlogs();
        },

        methods: {
            getRecentBlogs() {
                this.blogRecents = this.blogs?.slice(0, 4);
                console.log(this.blogs);
                //filtrar categorias y que no se repitan
                this.blogRecents?.map(blog => {
                    blog.category?.map(category => {
                        if (!this.categories?.includes(category)) {
                            this.categories?.push(category);
                        }
                    })
                });

                //filtrar tags y que no se repitan
                this.blogRecents?.map(blog => {
                    blog.tags?.map(tag => {
                        if (!this.tags?.includes(tag)) {
                            this.tags?.push(tag);
                        }
                    })
                });
            }
        },
    };
</script>
