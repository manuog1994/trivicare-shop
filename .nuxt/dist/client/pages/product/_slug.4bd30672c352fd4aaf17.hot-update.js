webpackHotUpdate("pages/product/_slug",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:false,pageTransition:'slide-fade',asyncData:function asyncData(_ref){return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var store,params,req,_visitorIP,_visitorIP2,productDispatch,productDetails;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:store=_ref.store,params=_ref.params,req=_ref.req;_context.prev=1;if(!req){_visitorIP='No IP';}else{_visitorIP2=req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;}_context.next=5;return store.dispatch('getProducts',{page:'',category:'',search:'',slug:params.slug,sort:'',tag:'',status:2});case 5:productDispatch=_context.sent;productDetails=store.getters.getProducts;return _context.abrupt(\"return\",{productDetails:productDetails.data[0],visitorIP:visitorIP});case 10:_context.prev=10;_context.t0=_context[\"catch\"](1);console.log(_context.t0);case 13:case\"end\":return _context.stop();}},_callee,null,[[1,10]]);}))();},head:function head(){return{title:this.productDetails.name+' | TriviCare Natural Cosmetics',link:[{rel:'cannonical',href:'https://trivicare.com/product/'}],meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:this.productDetails.meta_description}]};},data:function data(){return{searchChildren:''};},mounted:function mounted(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},2000);});this.$axios.post('/api/visit',{ip_address:this.visitorIP,page_visited:'Product Details'});},methods:{closeMenus:function closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},searchOpacity:function searchOpacity(searchFather){if(searchFather==true){document.getElementById(\"post-nav\").classList.add(\"search-screen\");}else{document.getElementById(\"post-nav\").classList.remove(\"search-screen\");}}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3QvX3NsdWcudnVlPzkyNzciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGF1dGg6IGZhbHNlLFxyXG5cclxuICAgICAgICBwYWdlVHJhbnNpdGlvbjogJ3NsaWRlLWZhZGUnLFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBhc3luY0RhdGEoeyBzdG9yZSwgcGFyYW1zLCByZXEgfSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYoIXJlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2l0b3JJUCA9ICdObyBJUCdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaXRvcklQID0gcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWZvciddIHx8IHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHwgcmVxLnNvY2tldC5yZW1vdGVBZGRyZXNzIHx8IHJlcS5jb25uZWN0aW9uLnNvY2tldC5yZW1vdGVBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0RGlzcGF0Y2ggPSBhd2FpdCBzdG9yZS5kaXNwYXRjaCgnZ2V0UHJvZHVjdHMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSBzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzOiBwcm9kdWN0RGV0YWlscy5kYXRhWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2l0b3JJUFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoZWFkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMucHJvZHVjdERldGFpbHMubmFtZSArICcgfCBUcml2aUNhcmUgTmF0dXJhbCBDb3NtZXRpY3MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVsOiAnY2Fubm9uaWNhbCcsIGhyZWY6ICdodHRwczovL3RyaXZpY2FyZS5jb20vcHJvZHVjdC8nfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJzZXQ6ICd1dGYtOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICd2aWV3cG9ydCcsIGNvbnRlbnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9kdWN0RGV0YWlscy5tZXRhX2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQ2hpbGRyZW46ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbnV4dC4kbG9hZGluZy5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLmZpbmlzaCgpXHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRheGlvcy5wb3N0KCcvYXBpL3Zpc2l0Jywge1xyXG4gICAgICAgICAgICAgICAgaXBfYWRkcmVzczogdGhpcy52aXNpdG9ySVAsXHJcbiAgICAgICAgICAgICAgICBwYWdlX3Zpc2l0ZWQ6ICdQcm9kdWN0IERldGFpbHMnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudXMoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaE9wYWNpdHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnY2xvc2VNZW51JywgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2VhcmNoT3BhY2l0eShzZWFyY2hGYXRoZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hGYXRoZXIgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1uYXZcIikuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1zY3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1uYXZcIikuY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1zY3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/_slug.vue?vue&type=script&lang=js&\n");

/***/ })

})