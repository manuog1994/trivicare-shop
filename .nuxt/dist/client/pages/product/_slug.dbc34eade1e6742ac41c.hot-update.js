webpackHotUpdate("pages/product/_slug",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:false,pageTransition:'slide-fade',asyncData:function asyncData(_ref){return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var store,params,products;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:store=_ref.store,params=_ref.params;_context.next=3;return store.dispatch('getProducts',{page:'',category:'',search:'',slug:params.slug,sort:'',tag:'',status:2});case 3:products=_context.sent;case 4:case\"end\":return _context.stop();}},_callee);}))();},head:function head(){return{title:this.data+' | TriviCare Natural Cosmetics',link:[{rel:'cannonical',href:'https://trivicare.com/product/'}],meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:this.product.meta_description}]};},data:function data(){return{slug:this.$route.params.slug,product:'',reviews:[],searchChildren:''};},beforeMount:function beforeMount(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this.getProducts();case 2:case\"end\":return _context2.stop();}},_callee2);}))();},mounted:function mounted(){var _this2=this;this.$nextTick(function(){_this2.$nuxt.$loading.start();setTimeout(function(){_this2.$nuxt.$loading.finish();},2000);});console.log(this.description);},methods:{closeMenus:function closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},getProducts:function getProducts(){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){var products;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _this3.$store.dispatch('getProducts',{page:'',category:'',search:'',slug:_this3.slug,sort:'',tag:'',status:2});case 2:products=_this3.$store.getters.getProducts;_this3.product=products.data[0];_this3.reviews=products.data[0].reviews;case 5:case\"end\":return _context3.stop();}},_callee3);}))();},searchOpacity:function searchOpacity(searchFather){if(searchFather==true){document.getElementById(\"post-nav\").classList.add(\"search-screen\");}else{document.getElementById(\"post-nav\").classList.remove(\"search-screen\");}}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlPzkyNzciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGF1dGg6IGZhbHNlLFxyXG5cclxuICAgICAgICBwYWdlVHJhbnNpdGlvbjogJ3NsaWRlLWZhZGUnLFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBhc3luY0RhdGEoeyBzdG9yZSwgcGFyYW1zIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBzdG9yZS5kaXNwYXRjaCgnZ2V0UHJvZHVjdHMnLCB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcclxuICAgICAgICAgICAgICAgIHNvcnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGFnOiAnJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogMlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhlYWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5kYXRhICsgJyB8IFRyaXZpQ2FyZSBOYXR1cmFsIENvc21ldGljcycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyByZWw6ICdjYW5ub25pY2FsJywgaHJlZjogJ2h0dHBzOi8vdHJpdmljYXJlLmNvbS9wcm9kdWN0Lyd9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcnNldDogJ3V0Zi04JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb2R1Y3QubWV0YV9kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IHRoaXMuJHJvdXRlLnBhcmFtcy5zbHVnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogJycsXHJcbiAgICAgICAgICAgICAgICByZXZpZXdzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaENoaWxkcmVuOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBhc3luYyBiZWZvcmVNb3VudCgpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRQcm9kdWN0cygpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbnV4dC4kbG9hZGluZy5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLmZpbmlzaCgpXHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudXMoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaE9wYWNpdHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnY2xvc2VNZW51JywgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYXN5bmMgZ2V0UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0UHJvZHVjdHMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0cy5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldmlld3MgPSBwcm9kdWN0cy5kYXRhWzBdLnJldmlld3NcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaE9wYWNpdHkoc2VhcmNoRmF0aGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoRmF0aGVyID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3QtbmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtc2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3QtbmF2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtc2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgIH07XHJcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&\n");

/***/ })

})