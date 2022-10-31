import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f59fda28 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _96c464de = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _dfa8ef92 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _3e1feaf8 = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _08184782 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6e8f90c8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _bd8af686 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _2070a6c8 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _c0b55b32 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _48a376a2 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _275d9936 = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _3803bdae = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _f222ef6e = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _b630249e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f59fda28,
    name: "about"
  }, {
    path: "/cart",
    component: _96c464de,
    name: "cart"
  }, {
    path: "/checkout",
    component: _dfa8ef92,
    name: "checkout"
  }, {
    path: "/compare",
    component: _3e1feaf8,
    name: "compare"
  }, {
    path: "/contact",
    component: _08184782,
    name: "contact"
  }, {
    path: "/login",
    component: _6e8f90c8,
    name: "login"
  }, {
    path: "/my-account",
    component: _bd8af686,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _2070a6c8,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _c0b55b32,
    name: "shop"
  }, {
    path: "/terms-conditions",
    component: _48a376a2,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _275d9936,
    name: "wishlist"
  }, {
    path: "/product/product-affiliate",
    component: _3803bdae,
    name: "product-product-affiliate"
  }, {
    path: "/product/:slug?",
    component: _f222ef6e,
    name: "product-slug"
  }, {
    path: "/",
    component: _b630249e,
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
