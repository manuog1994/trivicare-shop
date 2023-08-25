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
            <div v-if="blogsData" class="sidebar-project-wrap mt-30" v-for="blog in filteredPost" :key="'blog-recent'+blog.id">
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link :to="`/blog/${blog.slug}`">
                            <img :src="blog.imageUrl" alt="imagen no disponible">
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
            <div v-else class="sidebar-project-wrap mt-30">
                <p>Cargando datos...</p>
                {{ blogsData }}
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
        props: {
            blogsData: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                baseUrl: process.env.baseUrl + '/',
            }
        },

        computed: {
            filteredPost() {
                const posts = this.blogsData;

                posts.sort((a, b) => new Date(b.date) - new Date(a.date))

                return posts.slice(0, 4);
            }
        }
    };
</script>
