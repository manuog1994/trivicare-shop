webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/OrdersHistory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/OrdersHistory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{orders:[],users:[],order:{},user:{}};},mounted:function mounted(){this.getOrders();this.getUserName();},methods:{getOrders:function getOrders(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var response,data;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _this.$axios.get('/api/orders');case 2:response=_context.sent;data=response.data.data;data.filter(function(order){if(order.status==4){_this.orders.push(order);}});case 5:case\"end\":return _context.stop();}}},_callee);}))();},getUserName:function getUserName(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this2.$axios.get('/api/users').then(function(response){_this2.users=response.data.data;}).catch(function(error){console.log(error);});case 2:case\"end\":return _context2.stop();}}},_callee2);}))();},getName:function getName(order){var users=this.users;return users.filter(function(user){if(user.id==order.user_profile_id){return user;}}).map(function(user){return user.name+' '+user.lastname;}).toString();},loadOrder:function loadOrder(order){this.order=order;},updateStatus:function updateStatus(e){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){var status;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:status=e.target.value;_context3.next=3;return _this3.$axios.put('/api/orders/status/'+_this3.order.id,{status:status}).then(function(){return _this3.$notify({title:'El estado del pedido ha sido actualizado'});});case 3:case\"end\":return _context3.stop();}}},_callee3);}))();}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvY3J1ZC9PcmRlcnNIaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvT3JkZXJzSGlzdG9yeS52dWU/NmVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXJzOiBbXSxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIG9yZGVyOiB7fSxcbiAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0T3JkZXJzKCk7XG4gICAgICAgIHRoaXMuZ2V0VXNlck5hbWUoKTtcbiAgICB9LFxuXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldE9yZGVycygpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL29yZGVycycpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG5cbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKChvcmRlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG9yZGVyLnN0YXR1cyA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJzLnB1c2gob3JkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGdldFVzZXJOYW1lKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL3VzZXJzJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TmFtZShvcmRlcikge1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gdGhpcy51c2VycztcbiAgICAgICAgICAgIHJldHVybiB1c2Vycy5maWx0ZXIodXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuaWQgPT0gb3JkZXIudXNlcl9wcm9maWxlX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5uYW1lICsgJyAnICsgdXNlci5sYXN0bmFtZTtcbiAgICAgICAgICAgIH0pLnRvU3RyaW5nKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZE9yZGVyKG9yZGVyKSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgdXBkYXRlU3RhdHVzKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MucHV0KCcvYXBpL29yZGVycy9zdGF0dXMvJyArIHRoaXMub3JkZXIuaWQsIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB0aGlzLiRub3RpZnkoeyB0aXRsZTogJ0VsIGVzdGFkbyBkZWwgcGVkaWRvIGhhIHNpZG8gYWN0dWFsaXphZG8nfSkpO1xuICAgICAgICB9XG4gICAgfSxcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/OrdersHistory.vue?vue&type=script&lang=js&\n");

/***/ })

})