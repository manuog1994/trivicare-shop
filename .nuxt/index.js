import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_ee2777e8 from 'nuxt_plugin_plugin_ee2777e8' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_appplugin_2cee79e0 from 'nuxt_plugin_appplugin_2cee79e0' // Source: ../node_modules/@nuxt/bridge/dist/runtime/app.plugin.mjs (mode: 'all')
import nuxt_plugin_configplugin_0a4cc27f from 'nuxt_plugin_configplugin_0a4cc27f' // Source: ../node_modules/@nuxt/bridge/dist/runtime/config.plugin.mjs (mode: 'all')
import nuxt_plugin_nitrobridgeserver_05999f58 from 'nuxt_plugin_nitrobridgeserver_05999f58' // Source: ./nitro-bridge.server.mjs (mode: 'server')
import nuxt_plugin_nitrobridgeclient_97b64040 from 'nuxt_plugin_nitrobridgeclient_97b64040' // Source: ./nitro-bridge.client.mjs (mode: 'client')
import nuxt_plugin_gtm_3ee5c878 from 'nuxt_plugin_gtm_3ee5c878' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_4e5b866c from 'nuxt_plugin_cookieuniversalnuxt_4e5b866c' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_7dab2122 from 'nuxt_plugin_axios_7dab2122' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_image_68b21e1d from 'nuxt_plugin_image_68b21e1d' // Source: ./image.js (mode: 'all')
import nuxt_plugin_capiplugin_42644631 from 'nuxt_plugin_capiplugin_42644631' // Source: ./capi.plugin.mjs (mode: 'all')
import nuxt_plugin_errorpluginserver_727b2d98 from 'nuxt_plugin_errorpluginserver_727b2d98' // Source: ../node_modules/@nuxt/bridge/dist/runtime/error.plugin.server.mjs (mode: 'server')
import nuxt_plugin_fontawesome_1c4fda38 from 'nuxt_plugin_fontawesome_1c4fda38' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_vueawesomeswiper_5ce03f58 from 'nuxt_plugin_vueawesomeswiper_5ce03f58' // Source: ../plugins/vue-awesome-swiper.js (mode: 'all')
import nuxt_plugin_vuejspagiante_7edc93b2 from 'nuxt_plugin_vuejspagiante_7edc93b2' // Source: ../plugins/vuejs-pagiante.js (mode: 'all')
import nuxt_plugin_observevisibility_b986de04 from 'nuxt_plugin_observevisibility_b986de04' // Source: ../plugins/observe-visibility.js (mode: 'all')
import nuxt_plugin_persistedStateclient_3b127e9c from 'nuxt_plugin_persistedStateclient_3b127e9c' // Source: ../plugins/persistedState.client.js (mode: 'client')
import nuxt_plugin_vueprogresspath_0eff6422 from 'nuxt_plugin_vueprogresspath_0eff6422' // Source: ../plugins/vue-progress-path.js (mode: 'all')
import nuxt_plugin_gtm_63638066 from 'nuxt_plugin_gtm_63638066' // Source: ../plugins/gtm.js (mode: 'all')
import nuxt_plugin_bootstrapvue_928a4c1e from 'nuxt_plugin_bootstrapvue_928a4c1e' // Source: ../plugins/bootstrap-vue (mode: 'client')
import nuxt_plugin_vuestarrating_daf07ac8 from 'nuxt_plugin_vuestarrating_daf07ac8' // Source: ../plugins/vue-star-rating.js (mode: 'client')
import nuxt_plugin_vuejsmodal_f50827f4 from 'nuxt_plugin_vuejsmodal_f50827f4' // Source: ../plugins/vue-js-modal (mode: 'client')
import nuxt_plugin_notificationsclient_f727f91e from 'nuxt_plugin_notificationsclient_f727f91e' // Source: ../plugins/notifications-client.js (mode: 'client')
import nuxt_plugin_tinymce_6ee9c8fe from 'nuxt_plugin_tinymce_6ee9c8fe' // Source: ../plugins/tinymce.js (mode: 'client')
import nuxt_plugin_auth_629edbce from 'nuxt_plugin_auth_629edbce' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"TriviCare Natural Cosmetics","titleTemplate":"%s","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"facebook-domain-verification","content":"emkkxxxa870mac4z4xcfd060aqgj1f"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":""}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_ee2777e8 === 'function') {
    await nuxt_plugin_plugin_ee2777e8(app.context, inject)
  }

  if (typeof nuxt_plugin_appplugin_2cee79e0 === 'function') {
    await nuxt_plugin_appplugin_2cee79e0(app.context, inject)
  }

  if (typeof nuxt_plugin_configplugin_0a4cc27f === 'function') {
    await nuxt_plugin_configplugin_0a4cc27f(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_nitrobridgeserver_05999f58 === 'function') {
    await nuxt_plugin_nitrobridgeserver_05999f58(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nitrobridgeclient_97b64040 === 'function') {
    await nuxt_plugin_nitrobridgeclient_97b64040(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_3ee5c878 === 'function') {
    await nuxt_plugin_gtm_3ee5c878(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_4e5b866c === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_4e5b866c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7dab2122 === 'function') {
    await nuxt_plugin_axios_7dab2122(app.context, inject)
  }

  if (typeof nuxt_plugin_image_68b21e1d === 'function') {
    await nuxt_plugin_image_68b21e1d(app.context, inject)
  }

  if (typeof nuxt_plugin_capiplugin_42644631 === 'function') {
    await nuxt_plugin_capiplugin_42644631(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_errorpluginserver_727b2d98 === 'function') {
    await nuxt_plugin_errorpluginserver_727b2d98(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_1c4fda38 === 'function') {
    await nuxt_plugin_fontawesome_1c4fda38(app.context, inject)
  }

  if (typeof nuxt_plugin_vueawesomeswiper_5ce03f58 === 'function') {
    await nuxt_plugin_vueawesomeswiper_5ce03f58(app.context, inject)
  }

  if (typeof nuxt_plugin_vuejspagiante_7edc93b2 === 'function') {
    await nuxt_plugin_vuejspagiante_7edc93b2(app.context, inject)
  }

  if (typeof nuxt_plugin_observevisibility_b986de04 === 'function') {
    await nuxt_plugin_observevisibility_b986de04(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_persistedStateclient_3b127e9c === 'function') {
    await nuxt_plugin_persistedStateclient_3b127e9c(app.context, inject)
  }

  if (typeof nuxt_plugin_vueprogresspath_0eff6422 === 'function') {
    await nuxt_plugin_vueprogresspath_0eff6422(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_63638066 === 'function') {
    await nuxt_plugin_gtm_63638066(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_bootstrapvue_928a4c1e === 'function') {
    await nuxt_plugin_bootstrapvue_928a4c1e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuestarrating_daf07ac8 === 'function') {
    await nuxt_plugin_vuestarrating_daf07ac8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuejsmodal_f50827f4 === 'function') {
    await nuxt_plugin_vuejsmodal_f50827f4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_notificationsclient_f727f91e === 'function') {
    await nuxt_plugin_notificationsclient_f727f91e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_tinymce_6ee9c8fe === 'function') {
    await nuxt_plugin_tinymce_6ee9c8fe(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_629edbce === 'function') {
    await nuxt_plugin_auth_629edbce(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
