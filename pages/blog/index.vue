<template>
    <client-only>
        <div class="blog-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader />
            <Breadcrumb pageTitle="blog" />
            
            <div class="blog-area mt-5 pb-100">
                <div class="container">
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
                                <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="blogData.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <BlogSidebar :blogData="blogData" />
                        </div>
                    </div>
                </div>
            </div>
            <TheFooter />
        </div>
    </client-only>
</template>

<script>
    import blogData from "@/data/blog.json";
    export default {
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
                blogData,
                currentPage: 1,
                perPage: 6
            }
        },
        computed: {
            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogData.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.blogData.length / this.perPage);
            },
        },
        methods: {
            paginateClickCallback(page) {
                this.currentPage = Number(page);
            },
        },
        head() {
            return {
                title: "Blog | Tips & Consejos | Cuidado de la piel | TriviCare",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Conoce los mejores tips y consejos para el cuidado de la piel, el cabello y el cuerpo. En TriviCare Natural Cosmetics te ayudamos a cuidar de ti y de la naturaleza.',
                        keywords: 'retinol, que es el retinol, porque es tan demandado el retinol, secreto de la juventud, rejuvenece, cosmetica natural y ecologica, cremas, crema hidratante natural, serum natural, crema ultrahidratante natural, crema corporal natural, leche facial natural'
                    }
                ], 
            }
        }
    };
</script>
