import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b50bada0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _b39a5cdc = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _27b863e7 = () => interopDefault(import('../pages/cancel.vue' /* webpackChunkName: "pages/cancel" */))
const _1dc09b73 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _32117183 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2403639d = () => interopDefault(import('../pages/cookies-policy.vue' /* webpackChunkName: "pages/cookies-policy" */))
const _6adcbc20 = () => interopDefault(import('../pages/custom-cookies.vue' /* webpackChunkName: "pages/custom-cookies" */))
const _cce7ec30 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _d130fcaa = () => interopDefault(import('../pages/legal-warning.vue' /* webpackChunkName: "pages/legal-warning" */))
const _e24cb1e8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0de31e3c = () => interopDefault(import('../pages/manual-review.vue' /* webpackChunkName: "pages/manual-review" */))
const _1dd7b8f9 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _16900cf2 = () => interopDefault(import('../pages/notifications-center.vue' /* webpackChunkName: "pages/notifications-center" */))
const _5d78ad20 = () => interopDefault(import('../pages/questions.vue' /* webpackChunkName: "pages/questions" */))
const _46218dc5 = () => interopDefault(import('../pages/review.vue' /* webpackChunkName: "pages/review" */))
const _565d63a3 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _37ee3834 = () => interopDefault(import('../pages/success.vue' /* webpackChunkName: "pages/success" */))
const _4eeb482a = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _2c9d4b98 = () => interopDefault(import('../pages/unsubscribe.vue' /* webpackChunkName: "pages/unsubscribe" */))
const _961aa71c = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _f011d4b2 = () => interopDefault(import('../pages/working-us.vue' /* webpackChunkName: "pages/working-us" */))
const _cf9713a0 = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _8a7ea8c8 = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _78fda5c5 = () => interopDefault(import('../pages/payment/bizum.vue' /* webpackChunkName: "pages/payment/bizum" */))
const _41f36aee = () => interopDefault(import('../pages/payment/paypal.vue' /* webpackChunkName: "pages/payment/paypal" */))
const _a260ab90 = () => interopDefault(import('../pages/payment/transfer-bank.vue' /* webpackChunkName: "pages/payment/transfer-bank" */))
const _759bf816 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b7079f6c = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6f13daf4 = () => interopDefault(import('../pages/my-orders/_id.vue' /* webpackChunkName: "pages/my-orders/_id" */))
const _5dd1ff7d = () => interopDefault(import('../pages/orders/_id.vue' /* webpackChunkName: "pages/orders/_id" */))
const _00f01a8d = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b50bada0,
    name: "about"
  }, {
    path: "/blog",
    component: _b39a5cdc,
    name: "blog"
  }, {
    path: "/cancel",
    component: _27b863e7,
    name: "cancel"
  }, {
    path: "/checkout",
    component: _1dc09b73,
    name: "checkout"
  }, {
    path: "/contact",
    component: _32117183,
    name: "contact"
  }, {
    path: "/cookies-policy",
    component: _2403639d,
    name: "cookies-policy"
  }, {
    path: "/custom-cookies",
    component: _6adcbc20,
    name: "custom-cookies"
  }, {
    path: "/forgot-password",
    component: _cce7ec30,
    name: "forgot-password"
  }, {
    path: "/legal-warning",
    component: _d130fcaa,
    name: "legal-warning"
  }, {
    path: "/login",
    component: _e24cb1e8,
    name: "login"
  }, {
    path: "/manual-review",
    component: _0de31e3c,
    name: "manual-review"
  }, {
    path: "/my-account",
    component: _1dd7b8f9,
    name: "my-account"
  }, {
    path: "/notifications-center",
    component: _16900cf2,
    name: "notifications-center"
  }, {
    path: "/questions",
    component: _5d78ad20,
    name: "questions"
  }, {
    path: "/review",
    component: _46218dc5,
    name: "review"
  }, {
    path: "/shop",
    component: _565d63a3,
    name: "shop"
  }, {
    path: "/success",
    component: _37ee3834,
    name: "success"
  }, {
    path: "/terms-conditions",
    component: _4eeb482a,
    name: "terms-conditions"
  }, {
    path: "/unsubscribe",
    component: _2c9d4b98,
    name: "unsubscribe"
  }, {
    path: "/wishlist",
    component: _961aa71c,
    name: "wishlist"
  }, {
    path: "/working-us",
    component: _f011d4b2,
    name: "working-us"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _cf9713a0,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _8a7ea8c8,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/payment/bizum",
    component: _78fda5c5,
    name: "payment-bizum"
  }, {
    path: "/payment/paypal",
    component: _41f36aee,
    name: "payment-paypal"
  }, {
    path: "/payment/transfer-bank",
    component: _a260ab90,
    name: "payment-transfer-bank"
  }, {
    path: "/",
    component: _759bf816,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _b7079f6c,
    name: "blog-slug"
  }, {
    path: "/my-orders/:id?",
    component: _6f13daf4,
    name: "my-orders-id"
  }, {
    path: "/orders/:id?",
    component: _5dd1ff7d,
    name: "orders-id"
  }, {
    path: "/product/:slug?",
    component: _00f01a8d,
    name: "product-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
