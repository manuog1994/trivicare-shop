import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    loading: '~/components/Loading.vue',
     generate: {
        fallback: true
    },

    target: 'server', // default is 'server'
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'TriviCare Natural Cosmetics',
        titleTemplate: 'TriviCare | %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        // script: [
        //     { src: "./assets/bootstrap/js/bootstrap.bundle.min.js", type: "text/javascript"}
        // ]
        script: [
            { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM", crossorigin: "anonymous"}
        ],
        
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/animation.css',
        '~/assets/css/my-layout.css',
    ],


    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        '~/plugins/persistedState.client.js',
        '~/plugins/vue-progress-path.js',
        {
            src: '~/plugins/vue-type.js',
            mode: 'client'
        },
        {
            src: '~/plugins/vue-star-rating.js', // <--- file name
            mode: 'client'
        },
        { 
            src: '~/plugins/bootstrap.js', 
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal', 
            mode: 'client'
        },
        { 
            src: '~/plugins/notifications-client.js', 
            mode: 'client' 
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/fontawesome', 
    ],

    fontawesome: {
        component: 'fa',
        suffix: true,
        icons: {
            brands: [ 'faTiktok', 'faFacebookF', 'faInstagram' ],
        }
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',    
    ],

    auth: {
        strategies: {
          laravelSanctum: {
            provider: 'laravel/sanctum',
            url: 'http://localhost:8000',
            endpoints: {
                login: {
                    url: '/login',
                }
            },
          },
        }
    },

    axios: {
        baseURL: 'http://localhost:8000',
        credentials:true,
    },

    router: {
        middleware: ['auth'],
    },
      
    transition: {
        name: 'my-layout',
        mode: 'out-in'
    },


    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        nitro: false,
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
    },


      
      
})

