webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/MyOrdersCom.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/MyOrdersCom.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{orders:'',pagination:{},user:{}};},mounted:function mounted(){this.getOrder();},computed:{page:function page(){var _this$$route$query$pa;var page=(_this$$route$query$pa=this.$route.query.page)!==null&&_this$$route$query$pa!==void 0?_this$$route$query$pa:1;if(page>this.pagination.last_page){this.$router.replace({query:{page:this.pagination.last_page}});this.$router.push();return this.pagination.last_page;}return page;}},watch:{page:function page(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},500);});setTimeout(function(){_this.getOrder();},500);}},methods:{getOrder:function getOrder(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return _this2.$axios.get('/api/orders?perPage=10&page='+_this2.page+'&sort=-id&filter[user_id]='+_this2.$auth.user.id).then(function(response){_this2.orders=response.data.data;var paginations=response.data;_this2.pagination={links:paginations['meta'].links,current_page:paginations['meta'].current_page,last_page:paginations['meta'].last_page};}).catch(function(error){console.log(error);});case 2:case\"end\":return _context.stop();}},_callee);}))();},changePage:function changePage(url){this.$router.replace({query:{page:url.split('page=')[1]}});},getState:function getState(order){if(order.status==1){return'Recibido';}else if(order.status==2){return'Preparando';}else if(order.status==3){return'Enviado';}else if(order.status==4){return'Entregado';}else if(order.status==5){return'Cancelado';}},getName:function getName(order){var _this3=this;var profiles=order.user.user_profile;return profiles.filter(function(profile){return profile;}).map(function(profile){_this3.user=profile;return profile.name+' '+profile.lastname;}).toString();},getInvoiceNumber:function getInvoiceNumber(order){var orders=this.orders;return orders.filter(function(or){if(or.id==order.id){return or;}}).map(function(or){return or.invoice.invoice_number;}).toString();},getUrl:function getUrl(order){var _this4=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var FileDownload;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:FileDownload=__webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\");_context2.next=3;return _this4.$axios.get('/api/invoices/'+order.invoice.id,{responseType:'blob'}).then(function(response){FileDownload(response.data,order.invoice.filename);});case 3:case\"end\":return _context2.stop();}},_callee2);}))();}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvTXlPcmRlcnNDb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlPcmRlcnNDb20udnVlPzFiZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVyczogJycsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7fSxcbiAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRPcmRlcigpXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnBhZ2UgPz8gMTtcblxuICAgICAgICAgICAgaWYocGFnZSA+IHRoaXMucGFnaW5hdGlvbi5sYXN0X3BhZ2Upe1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnaW5hdGlvbi5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmxhc3RfcGFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbnV4dC4kbG9hZGluZy5zdGFydCgpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG51eHQuJGxvYWRpbmcuZmluaXNoKClcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9yZGVyKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldE9yZGVyKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL29yZGVycz9wZXJQYWdlPTEwJnBhZ2U9JyArIHRoaXMucGFnZSArICcmc29ydD0taWQmZmlsdGVyW3VzZXJfaWRdPScgKyB0aGlzLiRhdXRoLnVzZXIuaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9ucyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3M6IHBhZ2luYXRpb25zWydtZXRhJ10ubGlua3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BhZ2U6IHBhZ2luYXRpb25zWydtZXRhJ10uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9wYWdlOiBwYWdpbmF0aW9uc1snbWV0YSddLmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjaGFuZ2VQYWdlKHVybCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UgOiB1cmwuc3BsaXQoJ3BhZ2U9JylbMV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTdGF0ZShvcmRlcikge1xuICAgICAgICAgICAgaWYob3JkZXIuc3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1JlY2liaWRvJ1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9yZGVyLnN0YXR1cyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdQcmVwYXJhbmRvJ1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9yZGVyLnN0YXR1cyA9PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbnZpYWRvJ1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9yZGVyLnN0YXR1cyA9PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbnRyZWdhZG8nXG4gICAgICAgICAgICB9IGVsc2UgaWYob3JkZXIuc3RhdHVzID09IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0NhbmNlbGFkbydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXROYW1lKG9yZGVyKSB7XG4gICAgICAgICAgICBsZXQgcHJvZmlsZXMgPSBvcmRlci51c2VyLnVzZXJfcHJvZmlsZTtcbiAgICAgICAgICAgIHJldHVybiBwcm9maWxlcy5maWx0ZXIoKHByb2ZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZmlsZVxuICAgICAgICAgICAgfSkubWFwKChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcHJvZmlsZVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9maWxlLm5hbWUgKyAnICcgKyBwcm9maWxlLmxhc3RuYW1lXG4gICAgICAgICAgICB9KS50b1N0cmluZygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEludm9pY2VOdW1iZXIob3JkZXIpIHtcbiAgICAgICAgICAgIGxldCBvcmRlcnMgPSB0aGlzLm9yZGVycztcbiAgICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKChvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvci5pZCA9PSBvcmRlci5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5tYXAoKG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yLmludm9pY2UuaW52b2ljZV9udW1iZXJcbiAgICAgICAgICAgIH0pLnRvU3RyaW5nKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBhc3luYyBnZXRVcmwob3JkZXIpe1xuICAgICAgICAgICAgbGV0IEZpbGVEb3dubG9hZCA9IHJlcXVpcmUoJ2pzLWZpbGUtZG93bmxvYWQnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGF4aW9zLmdldCgnL2FwaS9pbnZvaWNlcy8nICsgb3JkZXIuaW52b2ljZS5pZCwge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBGaWxlRG93bmxvYWQocmVzcG9uc2UuZGF0YSwgb3JkZXIuaW52b2ljZS5maWxlbmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/MyOrdersCom.vue?vue&type=script&lang=js&\n");

/***/ })

})