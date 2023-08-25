<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader />
            <Breadcrumb :pageTitle="blog.title" />
    
            <div class="Blog-details-inner pt-100 pb-100">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9">
                            <div class="blog-details-wrapper ml-20">
                                <div class="blog-details-top">
                                    <div class="blog-details-img">
                                        <img :src="blog.imgSrc" :alt="blog.title">
                                    </div>
                                    <div class="blog-details-content">
                                        <div class="blog-meta-2">
                                            <ul>
                                                <li>{{ blog.date }}</li>
                                                <!-- <li>
                                                    <a href="#"><i class="fa fa-comments-o"></i> {{ blog.comment }}</a>
                                                </li> -->
                                            </ul>
                                        </div>
                                        <div class="article" v-html="blog.content"></div>
                                    </div>
                                </div>
                                <div class="tag-share">
                                    <div class="dec-tag d-flex">
                                        <ul v-for="tag in blog.minTags" :key="'tag'+tag">
                                            <li><a href="#">{{ tag }},</a></li>
                                        </ul>
                                    </div>
                                    <div class="blog-share">
                                        <span>Compartir:</span>
                                        <div class="share-social">
                                            <ul>
                                                <li>
                                                    <a class="text-primary fs-3" :href="`https://www.facebook.com/sharer/sharer.php?u=${ url }`" target="_blank" title="Compartir en Facebook">
                                                        <fa-icon icon="fa-brands fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="text-danger fs-3" :href="`https://www.pinterest.com/pin/create/button/?url=${ url }&media=${ urlLogo }&description=¡Mira este producto es increíble!`" target="_blank" title="Compartir en Pinterest">
                                                        <fa-icon icon="fa-brands fa-pinterest" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="text-success fs-3" :href="`https://api.whatsapp.com/send?text=¡Echa un vistazo a este enlace! ${ url }`" target="_blank" title="Compartir en Whatsapp">
                                                        <fa-icon icon="fa-brands fa-whatsapp" />
                                                    </a>
                                                </li>
                                                <!-- Linkedin -->
                                                <li>
                                                    <a class="text-primary fs-3" :href="`https://www.linkedin.com/shareArticle?mini=true&url=${ url }&title=${ blog.title }&summary=${ blog.metaDesc }&source=${ url }`" target="_blank" title="Compartir en Linkedin">
                                                        <fa-icon icon="fa-brands fa-linkedin-in" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="next-previous-post">
                                    <a href="#"> <i class="fa fa-angle-left"></i> prev post</a>
                                    <a href="#">next post <i class="fa fa-angle-right"></i></a>
                                </div>
                                <!-- <div class="blog-comment-wrapper mt-55">
                                    <h4 class="blog-dec-title">comments : 02</h4>
                                    <div class="single-comment-wrapper mt-35">
                                        <div class="blog-comment-img">
                                            <img src="/img/blog/comment-1.jpg" alt="">
                                        </div>
                                        <div class="blog-comment-content">
                                            <h4>Anthony Stephens</h4>
                                            <span>October 14, 2018 </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam</p>
                                            <button class="reply-btn">Reply</button>
                                        </div>
                                    </div>
                                    <div class="single-comment-wrapper mt-50 ml-60">
                                        <div class="blog-comment-img">
                                            <img src="/img/blog/comment-2.jpg" alt="">
                                        </div>
                                        <div class="blog-comment-content">
                                            <h4>DX Joxova</h4>
                                            <span>October 14, 2018 </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam</p>
                                            <button class="reply-btn">Reply</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-reply-wrapper mt-55">
                                    <h4 class="blog-dec-title">post a comment</h4>
                                    <form class="blog-form">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="leave-form">
                                                    <input type="text" placeholder="Full Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="leave-form">
                                                    <input type="email" placeholder="Email Address ">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="text-leave">
                                                    <textarea placeholder="Message"></textarea>
                                                    <button type="submit">SEND MESSAGE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> -->
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
    export default {
        auth: false,
        data() {
            return {
                blogData: [],
                blog: [],
                slug: this.$route.params.slug,
                url: '',
                urlLogo: '',
            }
        },

        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            TheHeader: () => import("@/components/TheHeader"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            BlogSidebar: () => import("@/components/BlogSidebar"),
            TheFooter: () => import("@/components/TheFooter")
        },


        async mounted () {
            await this.getBlogData();
            this.url = process.env.url + this.$route.fullPath;
            this.urlLogo = process.env.baseUrl + '/nuxt/TriviCare_byn%20Positivo.svg';
        },

        methods: {
            async getBlogData() {
                const { data } = await this.$axios.get('/api/blogs');
                this.blogData = data.data;
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
        },

        head() {
            return {
                title: this.blog?.title,
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.blog?.metaDescripcion,
                        keywords: this.blog?.keywords
                    }
                ], 
            }
        },
    };
</script>

