import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _121fb837 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4fc4b5c0 = () => interopDefault(import('../pages/cancel.vue' /* webpackChunkName: "pages/cancel" */))
const _4dced2e6 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _73ffdb0c = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _0b8f5aca = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _559e6714 = () => interopDefault(import('../pages/cookies-policy.vue' /* webpackChunkName: "pages/cookies-policy" */))
const _0e0bbc2f = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _5225cc9c = () => interopDefault(import('../pages/legal-warning.vue' /* webpackChunkName: "pages/legal-warning" */))
const _090193da = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3d75135c = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _a140c8c0 = () => interopDefault(import('../pages/notifications-center.vue' /* webpackChunkName: "pages/notifications-center" */))
const _42ec5cf7 = () => interopDefault(import('../pages/questions.vue' /* webpackChunkName: "pages/questions" */))
const _6e2ddf9e = () => interopDefault(import('../pages/review.vue' /* webpackChunkName: "pages/review" */))
const _38d657bc = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _84f265a6 = () => interopDefault(import('../pages/success.vue' /* webpackChunkName: "pages/success" */))
const _17fe1af8 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _d809700a = () => interopDefault(import('../pages/unsubscribe.vue' /* webpackChunkName: "pages/unsubscribe" */))
const _0b31ec0b = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _8ef98468 = () => interopDefault(import('../pages/payment/bizum.vue' /* webpackChunkName: "pages/payment/bizum" */))
const _df98993c = () => interopDefault(import('../pages/payment/paypal.vue' /* webpackChunkName: "pages/payment/paypal" */))
const _491c4b3f = () => interopDefault(import('../pages/payment/transfer-bank.vue' /* webpackChunkName: "pages/payment/transfer-bank" */))
const _a2cd1a0a = () => interopDefault(import('../pages/my-orders/_id.vue' /* webpackChunkName: "pages/my-orders/_id" */))
const _213fbcd6 = () => interopDefault(import('../pages/orders/_id.vue' /* webpackChunkName: "pages/orders/_id" */))
const _4075b294 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _31d792fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _121fb837,
    name: "about"
  }, {
    path: "/cancel",
    component: _4fc4b5c0,
    name: "cancel"
  }, {
    path: "/cart",
    component: _4dced2e6,
    name: "cart"
  }, {
    path: "/checkout",
    component: _73ffdb0c,
    name: "checkout"
  }, {
    path: "/contact",
    component: _0b8f5aca,
    name: "contact"
  }, {
    path: "/cookies-policy",
    component: _559e6714,
    name: "cookies-policy"
  }, {
    path: "/forgot-password",
    component: _0e0bbc2f,
    name: "forgot-password"
  }, {
    path: "/legal-warning",
    component: _5225cc9c,
    name: "legal-warning"
  }, {
    path: "/login",
    component: _090193da,
    name: "login"
  }, {
    path: "/my-account",
    component: _3d75135c,
    name: "my-account"
  }, {
    path: "/notifications-center",
    component: _a140c8c0,
    name: "notifications-center"
  }, {
    path: "/questions",
    component: _42ec5cf7,
    name: "questions"
  }, {
    path: "/review",
    component: _6e2ddf9e,
    name: "review"
  }, {
    path: "/shop",
    component: _38d657bc,
    name: "shop"
  }, {
    path: "/success",
    component: _84f265a6,
    name: "success"
  }, {
    path: "/terms-conditions",
    component: _17fe1af8,
    name: "terms-conditions"
  }, {
    path: "/unsubscribe",
    component: _d809700a,
    name: "unsubscribe"
  }, {
    path: "/wishlist",
    component: _0b31ec0b,
    name: "wishlist"
  }, {
    path: "/payment/bizum",
    component: _8ef98468,
    name: "payment-bizum"
  }, {
    path: "/payment/paypal",
    component: _df98993c,
    name: "payment-paypal"
  }, {
    path: "/payment/transfer-bank",
    component: _491c4b3f,
    name: "payment-transfer-bank"
  }, {
    path: "/my-orders/:id?",
    component: _a2cd1a0a,
    name: "my-orders-id"
  }, {
    path: "/orders/:id?",
    component: _213fbcd6,
    name: "orders-id"
  }, {
    path: "/product/:slug?",
    component: _4075b294,
    name: "product-slug"
  }, {
    path: "/",
    component: _31d792fc,
    name: "index"
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
