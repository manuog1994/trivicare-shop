import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a7609da = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3f5eb58f = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _3c47c48a = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _98c14aa0 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _3ceb84eb = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _57ef56a6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _8799301e = () => interopDefault(import('../pages/login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _91f8c614 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _7f10fa81 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _274f4960 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _13888e28 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _4ad16baf = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _5ee1b553 = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _e9caa402 = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _c53be756 = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _3da81447 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _88ef4d20 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _127cd5d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1a7609da,
    name: "about"
  }, {
    path: "/blog",
    component: _3f5eb58f,
    name: "blog"
  }, {
    path: "/cart",
    component: _3c47c48a,
    name: "cart"
  }, {
    path: "/checkout",
    component: _98c14aa0,
    name: "checkout"
  }, {
    path: "/compare",
    component: _3ceb84eb,
    name: "compare"
  }, {
    path: "/contact",
    component: _57ef56a6,
    name: "contact"
  }, {
    path: "/login-register",
    component: _8799301e,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _91f8c614,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _7f10fa81,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _274f4960,
    name: "shop"
  }, {
    path: "/terms-conditions",
    component: _13888e28,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _4ad16baf,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _5ee1b553,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _e9caa402,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _c53be756,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _3da81447,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _88ef4d20,
    name: "product-slug"
  }, {
    path: "/",
    component: _127cd5d8,
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
