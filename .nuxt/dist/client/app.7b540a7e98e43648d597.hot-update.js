webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/OrdersCom.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/OrdersCom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{order:{},products:[],id:this.$route.params.id,users:[],user:{}};},mounted:function mounted(){this.getOrder();this.getUserName();},methods:{getOrder:function getOrder(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return _this.$axios.get('/api/orders?filter[id]='+_this.id).then(function(response){var orders=response.data.data;orders.map(function(order){if(order.id==_this.id){_this.order=order;_this.products=JSON.parse(_this.order.products);}});console.log(orders);}).catch(function(error){console.log(error);});case 2:case\"end\":return _context.stop();}},_callee);}))();},discountedPrice:function discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},getUserName:function getUserName(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this2.$axios.get('/api/users').then(function(response){_this2.users=response.data.data;}).catch(function(error){console.log(error);});case 2:case\"end\":return _context2.stop();}},_callee2);}))();},getName:function getName(order){var _this3=this;var users=this.users;return users.filter(function(user){if(user.id==order.user_profile_id){return user;}}).map(function(user){_this3.user=user;var data=_this3.$auth.user.roles;var role=data.filter(function(role){if(role.name=='admin'){return role;}}).map(function(role){return role.name;}).toString();if(role!='admin'&&user.user_id!=_this3.$auth.user.id){return _this3.$router.push('/error');}return user.name+' '+user.lastname;}).toString();},getState:function getState(order){if(order.status==1){return'Recibido';}else if(order.status==2){return'Preparando';}else if(order.status==3){return'Enviado';}else if(order.status==4){return'Entregado';}else{return'Cancelado';}},getPaymentState:function getPaymentState(order){if(order.paid=='PENDIENTE'){return'Pendiente';}else if(order.paid=='PROCESANDO'){return'Procesando';}else if(order.paid=='PAGADO'){return'Pagado';}else if(order.paid=='RECHAZADO'){return'Rechazado';}else if(order.paid=='CONTRAREEMBOLSO'){return'Contra reembolso';}else if(order.paid=='TRANSFERENCIA'){return'Transferencia';}},getUrl:function getUrl(order){var _this4=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){var FileDownload;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:console.log(order);FileDownload=__webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\");_context3.next=4;return _this4.$axios.get('/api/invoices/'+order.invoice.id,{responseType:'blob'}).then(function(response){FileDownload(response.data,order.invoice.filename);});case 4:case\"end\":return _context3.stop();}},_callee3);}))();}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvT3JkZXJzQ29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09yZGVyc0NvbS52dWU/YzgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXI6IHt9LFxuICAgICAgICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgICAgICAgaWQ6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0T3JkZXIoKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyTmFtZSgpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldE9yZGVyKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL29yZGVycz9maWx0ZXJbaWRdPScgKyB0aGlzLmlkKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcnMubWFwKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmRlci5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBKU09OLnBhcnNlKHRoaXMub3JkZXIucHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2NvdW50ZWRQcmljZShwcm9kdWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZV9iYXNlIC0gKHByb2R1Y3QucHJpY2VfYmFzZSAqIHByb2R1Y3QuZGlzY291bnQgLyAxMDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlck5hbWUoKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRheGlvcy5nZXQoJy9hcGkvdXNlcnMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXROYW1lKG9yZGVyKSB7XG4gICAgICAgICAgICBsZXQgdXNlcnMgPSB0aGlzLnVzZXJzO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5pZCA9PSBvcmRlci51c2VyX3Byb2ZpbGVfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkubWFwKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4kYXV0aC51c2VyLnJvbGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGUgPSBkYXRhLmZpbHRlcihyb2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvbGUubmFtZSA9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9sZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLm1hcChyb2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvbGUubmFtZTtcbiAgICAgICAgICAgICAgICB9KS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgaWYocm9sZSAhPSAnYWRtaW4nICYmIHVzZXIudXNlcl9pZCAhPSB0aGlzLiRhdXRoLnVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlci5wdXNoKCcvZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5uYW1lICsgJyAnICsgdXNlci5sYXN0bmFtZTtcbiAgICAgICAgICAgIH0pLnRvU3RyaW5nKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0U3RhdGUob3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChvcmRlci5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUmVjaWJpZG8nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlci5zdGF0dXMgPT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUHJlcGFyYW5kbyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnN0YXR1cyA9PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbnZpYWRvJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIuc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0VudHJlZ2Fkbyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ2FuY2VsYWRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQYXltZW50U3RhdGUob3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChvcmRlci5wYWlkID09ICdQRU5ESUVOVEUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdQZW5kaWVudGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlci5wYWlkID09ICdQUk9DRVNBTkRPJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUHJvY2VzYW5kbyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnBhaWQgPT0gJ1BBR0FETycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1BhZ2Fkbyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnBhaWQgPT0gJ1JFQ0hBWkFETycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1JlY2hhemFkbyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnBhaWQgPT0gJ0NPTlRSQVJFRU1CT0xTTycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbnRyYSByZWVtYm9sc28nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlci5wYWlkID09ICdUUkFOU0ZFUkVOQ0lBJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnVHJhbnNmZXJlbmNpYSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuICAgICAgICBhc3luYyBnZXRVcmwob3JkZXIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXIpO1xuICAgICAgICAgICAgbGV0IEZpbGVEb3dubG9hZCA9IHJlcXVpcmUoJ2pzLWZpbGUtZG93bmxvYWQnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGF4aW9zLmdldCgnL2FwaS9pbnZvaWNlcy8nICsgb3JkZXIuaW52b2ljZS5pZCwge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBGaWxlRG93bmxvYWQocmVzcG9uc2UuZGF0YSwgb3JkZXIuaW52b2ljZS5maWxlbmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgIH0sXG5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/OrdersCom.vue?vue&type=script&lang=js&\n");

/***/ })

})