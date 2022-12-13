import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b50bada0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6b55decd = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _1dc09b73 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _170d9fc8 = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _32117183 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1a46402a = () => interopDefault(import('../pages/crud.vue' /* webpackChunkName: "pages/crud" */))
const _cce7ec30 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _e24cb1e8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1dd7b8f9 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _32bd45f8 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _565d63a3 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _4eeb482a = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _2c9d4b98 = () => interopDefault(import('../pages/unsubscribe.vue' /* webpackChunkName: "pages/unsubscribe" */))
const _961aa71c = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _65efec1c = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _6f13daf4 = () => interopDefault(import('../pages/my-orders/_id.vue' /* webpackChunkName: "pages/my-orders/_id" */))
const _5151db40 = () => interopDefault(import('../pages/orders-profiles/_id.vue' /* webpackChunkName: "pages/orders-profiles/_id" */))
const _5dd1ff7d = () => interopDefault(import('../pages/orders/_id.vue' /* webpackChunkName: "pages/orders/_id" */))
const _00f01a8d = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _759bf816 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/cart",
    component: _6b55decd,
    name: "cart"
  }, {
    path: "/checkout",
    component: _1dc09b73,
    name: "checkout"
  }, {
    path: "/compare",
    component: _170d9fc8,
    name: "compare"
  }, {
    path: "/contact",
    component: _32117183,
    name: "contact"
  }, {
    path: "/crud",
    component: _1a46402a,
    name: "crud"
  }, {
    path: "/forgot-password",
    component: _cce7ec30,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _e24cb1e8,
    name: "login"
  }, {
    path: "/my-account",
    component: _1dd7b8f9,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _32bd45f8,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _565d63a3,
    name: "shop"
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
    path: "/product/product-affiliate",
    component: _65efec1c,
    name: "product-product-affiliate"
  }, {
    path: "/my-orders/:id?",
    component: _6f13daf4,
    name: "my-orders-id"
  }, {
    path: "/orders-profiles/:id?",
    component: _5151db40,
    name: "orders-profiles-id"
  }, {
    path: "/orders/:id?",
    component: _5dd1ff7d,
    name: "orders-id"
  }, {
    path: "/product/:slug?",
    component: _00f01a8d,
    name: "product-slug"
  }, {
    path: "/",
    component: _759bf816,
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
