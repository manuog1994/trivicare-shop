webpackHotUpdate("pages/product/_slug",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:false,pageTransition:'slide-fade',data:function data(){return{slug:this.$route.params.slug,product:'',reviews:[],searchChildren:''};},beforeMount:function beforeMount(){this.getProducts();},mounted:function mounted(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},2000);});},methods:{closeMenus:function closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},getProducts:function getProducts(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var products;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return _this2.$store.dispatch('getProducts',{page:'',category:'',search:'',slug:_this2.slug,sort:'',tag:'',status:2});case 2:products=_this2.$store.getters.getProducts;_this2.product=products.data[0];_this2.reviews=products.data[0].reviews;case 5:case\"end\":return _context.stop();}},_callee);}))();},searchOpacity:function searchOpacity(searchFather){if(searchFather==true){document.getElementById(\"post-nav\").classList.add(\"search-screen\");}else{document.getElementById(\"post-nav\").classList.remove(\"search-screen\");}}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlPzkyNzciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGF1dGg6IGZhbHNlLFxyXG5cclxuICAgICAgICBwYWdlVHJhbnNpdGlvbjogJ3NsaWRlLWZhZGUnLFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogdGhpcy4kcm91dGUucGFyYW1zLnNsdWcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiAnJyxcclxuICAgICAgICAgICAgICAgIHJldmlld3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoQ2hpbGRyZW46ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIGJlZm9yZU1vdW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzKClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG51eHQuJGxvYWRpbmcuZmluaXNoKClcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjbG9zZU1lbnVzKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hPcGFjaXR5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2Nsb3NlTWVudScsIHRoaXMuY2xvc2VNZW51KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGFzeW5jIGdldFByb2R1Y3RzKCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFByb2R1Y3RzJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IHRoaXMuc2x1ZyxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0YWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdHMuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXZpZXdzID0gcHJvZHVjdHMuZGF0YVswXS5yZXZpZXdzXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZWFyY2hPcGFjaXR5KHNlYXJjaEZhdGhlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEZhdGhlciA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LW5hdlwiKS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLXNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LW5hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLXNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfTtcclxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&\n");

/***/ })

})