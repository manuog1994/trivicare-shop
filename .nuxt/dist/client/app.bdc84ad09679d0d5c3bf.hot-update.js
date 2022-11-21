webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{orders:[],user:'',order:{}};},mounted:function mounted(){this.getOrders();},methods:{getOrders:function getOrders(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _this.$axios.get('/api/orders').then(function(response){_this.orders=response.data.data;}).catch(function(error){console.log(error);});case 2:case\"end\":return _context.stop();}}},_callee);}))();},getUserName:function getUserName(order){this.$axios.get('/api/users/'+order.id).then(function(response){console.log(response);}).catch(function(error){console.log(error);});},loadOrder:function loadOrder(order){this.order=order;},updateStatus:function updateStatus(e){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var status;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:status=e.target.value;_context2.next=3;return _this2.$axios.put('/api/orders/status/'+_this2.order.id,{status:status}).then(function(res){return console.log(res);});case 3:case\"end\":return _context2.stop();}}},_callee2);}))();}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvY3J1ZC9PcmRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3J1ZC9PcmRlcnMudnVlP2ViZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVyczogW10sXG4gICAgICAgICAgICB1c2VyOiAnJyxcbiAgICAgICAgICAgIG9yZGVyOiB7fVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0T3JkZXJzKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZ2V0T3JkZXJzKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL29yZGVycycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRVc2VyTmFtZShvcmRlcikge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL3VzZXJzLycgKyBvcmRlci5pZClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkT3JkZXIob3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB1cGRhdGVTdGF0dXMoZSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRheGlvcy5wdXQoJy9hcGkvb3JkZXJzL3N0YXR1cy8nICsgdGhpcy5vcmRlci5pZCwge1xuICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Orders.vue?vue&type=script&lang=js&\n");

/***/ })

})