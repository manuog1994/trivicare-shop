webpackHotUpdate("pages/orders-profiles/_id",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-profiles/_id.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-profiles/_id.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:true,data:function data(){return{searchChildren:'',role:'',unauthorized:''};},mounted:function mounted(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},2000);});this.getRoles();if(this.$axios.onError(function(error){var code=error.response.status;if(code===401){_this.unauthorized=true;}}));},components:{HeaderWithTopbar:function HeaderWithTopbar(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ \"./components/HeaderWithTopbar.vue\"));},TheHeader:function TheHeader(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheHeader */ \"./components/TheHeader.vue\"));},NavBottom:function NavBottom(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/NavBottom */ \"./components/NavBottom.vue\"));},OrdersProfileCom:function OrdersProfileCom(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/OrdersProfileCom */ \"./components/OrdersProfileCom.vue\"));},TheFooter:function TheFooter(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ \"./components/TheFooter.vue\"));}},watch:{unauthorized:function unauthorized(){if(this.unauthorized==true){this.$auth.logout();}}},methods:{closeMenus:function closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},getRoles:function getRoles(){var _this2=this;var roles=this.$auth.user.roles;roles.map(function(role){_this2.role=role.name;});if(this.role!='admin'){this.$router.push('/error');}},searchOpacity:function searchOpacity(searchFather){if(searchFather==true){this.searchChildren=true;}else{this.searchChildren=false;}}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL29yZGVycy1wcm9maWxlcy9faWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL29yZGVycy1wcm9maWxlcy9faWQudnVlPzU3ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBhdXRoOiB0cnVlLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaENoaWxkcmVuOiAnJyxcbiAgICAgICAgICAgICAgICByb2xlOiAnJyxcbiAgICAgICAgICAgICAgICB1bmF1dGhvcml6ZWQ6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbnV4dC4kbG9hZGluZy5zdGFydCgpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG51eHQuJGxvYWRpbmcuZmluaXNoKClcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRSb2xlcygpO1xuXG4gICAgICAgICAgICBpZih0aGlzLiRheGlvcy5vbkVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmF1dGhvcml6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBIZWFkZXJXaXRoVG9wYmFyOiAoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9IZWFkZXJXaXRoVG9wYmFyJyksXG4gICAgICAgICAgICBUaGVIZWFkZXI6ICgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL1RoZUhlYWRlcicpLFxuICAgICAgICAgICAgTmF2Qm90dG9tOiAoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9OYXZCb3R0b20nKSxcbiAgICAgICAgICAgIE9yZGVyc1Byb2ZpbGVDb206ICgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL09yZGVyc1Byb2ZpbGVDb20nKSxcbiAgICAgICAgICAgIFRoZUZvb3RlcjogKCkgPT4gaW1wb3J0KCdAL2NvbXBvbmVudHMvVGhlRm9vdGVyJyksXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHVuYXV0aG9yaXplZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bmF1dGhvcml6ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhdXRoLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbG9zZU1lbnVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoT3BhY2l0eShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnY2xvc2VNZW51JywgdGhpcy5jbG9zZU1lbnUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0Um9sZXMoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZXMgPSB0aGlzLiRhdXRoLnVzZXIucm9sZXM7XG5cbiAgICAgICAgICAgICAgICByb2xlcy5tYXAoKHJvbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlID0gcm9sZS5uYW1lO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlICE9ICdhZG1pbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9lcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlYXJjaE9wYWNpdHkoc2VhcmNoRmF0aGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEZhdGhlciA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-profiles/_id.vue?vue&type=script&lang=js&\n");

/***/ })

})