webpackHotUpdate("pages/product/_slug",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:false,pageTransition:'slide-fade',asyncData:function asyncData(_ref){return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var $axios,params,productDetails;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:$axios=_ref.$axios,params=_ref.params;_context.prev=1;_context.next=4;return $axios.get('/api/products?filter[slug]='+params.slug);case 4:productDetails=_context.sent;return _context.abrupt(\"return\",{productDetails:productDetails.data.data[0]});case 8:_context.prev=8;_context.t0=_context[\"catch\"](1);console.log(_context.t0);case 11:case\"end\":return _context.stop();}},_callee,null,[[1,8]]);}))();},head:function head(){return{title:this.productDetails.name+' | TriviCare Natural Cosmetics',link:[{rel:'cannonical',href:'https://trivicare.com/product/'}],meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:this.productDetails.meta_description}]};},data:function data(){return{slug:this.$route.params.slug,product:'',reviews:[],searchChildren:''};},beforeMount:function beforeMount(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this.getProducts();case 2:case\"end\":return _context2.stop();}},_callee2);}))();},mounted:function mounted(){var _this2=this;this.$nextTick(function(){_this2.$nuxt.$loading.start();setTimeout(function(){_this2.$nuxt.$loading.finish();},2000);});console.log(this.description);},methods:{closeMenus:function closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},getProducts:function getProducts(){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){var products;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _this3.$store.dispatch('getProducts',{page:'',category:'',search:'',slug:_this3.slug,sort:'',tag:'',status:2});case 2:products=_this3.$store.getters.getProducts;_this3.product=products.data[0];_this3.reviews=products.data[0].reviews;case 5:case\"end\":return _context3.stop();}},_callee3);}))();},searchOpacity:function searchOpacity(searchFather){if(searchFather==true){document.getElementById(\"post-nav\").classList.add(\"search-screen\");}else{document.getElementById(\"post-nav\").classList.remove(\"search-screen\");}}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlPzkyNzciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGF1dGg6IGZhbHNlLFxyXG5cclxuICAgICAgICBwYWdlVHJhbnNpdGlvbjogJ3NsaWRlLWZhZGUnLFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBhc3luY0RhdGEoeyAkYXhpb3MsIHBhcmFtcyB9KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IGF3YWl0ICRheGlvcy5nZXQoJy9hcGkvcHJvZHVjdHM/ZmlsdGVyW3NsdWddPScgKyBwYXJhbXMuc2x1Zyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzOiBwcm9kdWN0RGV0YWlscy5kYXRhLmRhdGFbMF0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhlYWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5wcm9kdWN0RGV0YWlscy5uYW1lICsgJyB8IFRyaXZpQ2FyZSBOYXR1cmFsIENvc21ldGljcycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyByZWw6ICdjYW5ub25pY2FsJywgaHJlZjogJ2h0dHBzOi8vdHJpdmljYXJlLmNvbS9wcm9kdWN0Lyd9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcnNldDogJ3V0Zi04JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb2R1Y3REZXRhaWxzLm1ldGFfZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6ICcnLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3czogW10sXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hDaGlsZHJlbjogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgYXN5bmMgYmVmb3JlTW91bnQoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG51eHQuJGxvYWRpbmcuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbnV4dC4kbG9hZGluZy5maW5pc2goKVxyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbilcclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjbG9zZU1lbnVzKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hPcGFjaXR5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2Nsb3NlTWVudScsIHRoaXMuY2xvc2VNZW51KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGFzeW5jIGdldFByb2R1Y3RzKCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFByb2R1Y3RzJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IHRoaXMuc2x1ZyxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0YWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdHMuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXZpZXdzID0gcHJvZHVjdHMuZGF0YVswXS5yZXZpZXdzXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZWFyY2hPcGFjaXR5KHNlYXJjaEZhdGhlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEZhdGhlciA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LW5hdlwiKS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLXNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LW5hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLXNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICB9O1xyXG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&\n");

/***/ })

})