import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["imports"]?: typeof import("imports").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     googleAnalytics: {
        id: string,
    },

    public: {
        googleAnalytics: {
             id: string,
        },
    },

    app: {
        basePath: string,

        assetsPath: string,

        cdnURL: string,

        buildAssetsDir: string,

        baseURL: string,
    },
  }
}