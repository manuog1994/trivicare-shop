import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b50bada0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _b39a5cdc = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6b55decd = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _1dc09b73 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _170d9fc8 = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _32117183 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _23c3ca74 = () => interopDefault(import('../pages/login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _1dd7b8f9 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _32bd45f8 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _565d63a3 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _4eeb482a = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _961aa71c = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _cf9713a0 = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _8a7ea8c8 = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _65efec1c = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _b7079f6c = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _24323af8 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
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
    path: "/blog",
    component: _b39a5cdc,
    name: "blog"
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
    path: "/login-register",
    component: _23c3ca74,
    name: "login-register"
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
    path: "/wishlist",
    component: _961aa71c,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _cf9713a0,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _8a7ea8c8,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _65efec1c,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _b7079f6c,
    name: "blog-slug"
  }, {
    path: "/categories/:slug?",
    component: _24323af8,
    name: "categories-slug"
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
