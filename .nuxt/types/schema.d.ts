import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["imports"]?: typeof import("imports").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     public: any,

    app: {
        basePath: string,

        assetsPath: string,

        cdnURL: string,

        buildAssetsDir: string,

        baseURL: string,
    },
  }
}