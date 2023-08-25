<template>
    <client-only>
        <div class="blog-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader />
            <Breadcrumb pageTitle="blog" />
            
            <div class="blog-area mt-5 pb-100">
                <div class="container">
                    <div class="text-center mb-2">
                        <h1>Tips sobre cuidado facial y corporal usando cosmética natural</h1>
                        <h2 class="text-leader">Te ayudamos a cuidarte con los mejores consejos</h2>
                    </div>
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9">
                            <div class="ml-20">
                                <div class="row">
                                    <div class="col-md-6 col-12" v-for="(blog, index) in getItems" :key="index">
                                        <BlogItemStyleTwo :blog="blog" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="getPaginateCount > 1">
                                <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="blogs.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <BlogSidebar :blogs="blogs" />
                        </div>
                    </div>
                </div>
            </div>
            <TheFooter />
        </div>
    </client-only>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            BlogItemStyleTwo: () => import("@/components/BlogItemStyleTwo"),
            BlogSidebar: () => import("@/components/BlogSidebar"),
            TheFooter: () => import("@/components/TheFooter")
        },
        data() {
            return {
                blogs: [],
                currentPage: 1,
                perPage: 6
            }
        },
        computed: {
            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogs.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.blogs.length / this.perPage);
            },
        },
        async mounted() {
            await this.getBlogs();
        },
        methods: {
            async getBlogs() {
                try {
                    const response = await this.$axios.get("/api/blogs");
                    this.blogs = response.data.data
                } catch (error) {
                    console.log(error);
                }
            },
            paginateClickCallback(page) {
                this.currentPage = Number(page);
            },
        },
        head() {
            return {
                title: "Tips para el cuidado de la piel y el cuerpo | TriviCare",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Conoce los mejores tips y consejos para el cuidado de la piel, el cabello y el cuerpo. En TriviCare Natural Cosmetics te ayudamos a cuidar de ti y de la naturaleza.',
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'tips para el cuidado de la piel, tips para el cuidado del cabello, tips para el cuidado del cuerpo, consejos para el cuidado de la piel, consejos para el cuidado del cabello, consejos para el cuidado del cuerpo, cuidado de la piel, cuidado del cabello, cuidado del cuerpo, tips para el cuidado de la piel natural, tips para el cuidado del cabello natural, tips para el cuidado del cuerpo natural, consejos para el cuidado de la piel natural, consejos para el cuidado del cabello natural, consejos para el cuidado del cuerpo natural, cuidado de la piel natural, cuidado del cabello natural, cuidado del cuerpo natural, tips para el cuidado de la piel natural, tips para el cuidado del cabello natural, tips para el cuidado del cuerpo natural, consejos para el cuidado de la piel natural, consejos para el cuidado del cabello natural, consejos para el cuidado del cuerpo natural, cuidado de la piel natural, cuidado del cabello natural, cuidado del cuerpo natural, tips para el cuidado de la piel natural, tips para el cuidado del cabello natural, tips para el cuidado del cuerpo natural, consejos para el cuidado de la piel natural, consejos para el cuidado del cabello natural, consejos para el cuidado del cuerpo natural, cuidado de la piel natural, cuidado del cabello natural, cuidado del cuerpo natural, tips para el cuidado de la piel natural, tips para el cuidado del cabello natural, tips para el cuidado del cuerpo natural, consejos para el cuidado de la piel natural, consejos para el cuidado del cabello natural, consejos para el cuidado del cuerpo natural, cuidado de la piel natural, cuidado del cabello natural, cuidado del cuerpo natural, tips para el cuidado de la piel natural, tips para el cuidado del cabello natural, tips para el cuidado del cuerpo natural, consejos para el cuidado de la piel natural, consejos para el cuidado del cabello natural, consejos para el cuidado del cuerpo natural, cuidado de la piel natural, cuidado del cabello natural, cuidado del cuerpo natural, tips para el cuidado de la piel natural, tips para el cuidado del cabello natural, tips para'
                    },
                    {
                        hid: 'author',
                        name: 'author',
                        content: 'Manuel Galiano'
                    },
                    {
                        hid: 'robots',
                        name: 'robots',
                        content: 'index, follow'
                    }
                ], 
            }
        }
    };
</script>
