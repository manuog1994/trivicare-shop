<template>
    <div class="blog-wrap-2 mb-30">
        <div class="blog-img-2">
            <n-link :to="`/blog/${blog.slug}`">
                <img :src="blog.imgSrc" :alt="blog.title">
            </n-link>
        </div>
        <div class="blog-content-2">
            <div class="blog-meta-2">
                <ul>
                    <li>{{ blog.date }}</li>
                    <!-- <li>
                        <a href="#"><i class="fa fa-comments-o"></i> {{ blog.comment }} </a>
                    </li> -->
                </ul>
            </div>
            <h4>
                <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
            </h4>
            <p>{{ blog.desc }}</p>
            <div class="blog-share-comment">
                <div class="blog-btn-2">
                    <n-link :to="`/blog/${blog.slug}`">Leer más</n-link>
                </div>
                <div class="blog-share">
                    <span>compartir:</span>
                    <div class="share-social">
                        <ul>
                            <li>
                                <a class="text-primary fs-3" :href="`https://www.facebook.com/sharer/sharer.php?href=${ url }`" target="_blank" title="Compartir en Facebook">
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
                            <li>
                                <a class="text-primary fs-3" :href="`https://www.linkedin.com/shareArticle?mini=true&url=${ url }&title=${ blog.title }&summary=${ blog.metaDesc }&source=${ url }`" target="_blank" title="Compartir en Linkedin">
                                    <fa-icon icon="fa-brands fa-linkedin-in" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blog"],

        data() {
            return {
                url: '',
                urlLogo: '',
            }
        },

        mounted () {
            this.url = process.env.url + this.$route.fullPath;
            this.urlLogo = process.env.baseUrl + '/nuxt/TriviCare_byn%20Positivo.svg';
        },

        methods: {
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
    };
</script>