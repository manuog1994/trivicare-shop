webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/OrdersHistory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/OrdersHistory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{orders:[],users:[],order:{},user:{},pagination:{}};},mounted:function mounted(){this.getOrders();this.getUserName();},computed:{page:function page(){var _this$$route$query$pa;var page=(_this$$route$query$pa=this.$route.query.page)!==null&&_this$$route$query$pa!==void 0?_this$$route$query$pa:1;if(page>this.pagination.last_page){this.$router.replace({query:{page:this.pagination.last_page}});this.$router.push();return this.pagination.last_page;}return page;}},watch:{page:function page(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},500);});setTimeout(function(){_this.getOrders();},500);}},methods:{getOrders:function getOrders(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var response,paginations;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _this2.$axios.get('/api/orders?perPage=10&sort=-id&page='+_this2.page+'&filter[status]=4');case 2:response=_context.sent;_this2.orders=response.data.data;paginations=response.data;_this2.pagination={links:paginations['meta'].links,current_page:paginations['meta'].current_page,last_page:paginations['meta'].last_page};case 6:case\"end\":return _context.stop();}}},_callee);}))();},getUserName:function getUserName(){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this3.$axios.get('/api/users').then(function(response){_this3.users=response.data.data;}).catch(function(error){console.log(error);});case 2:case\"end\":return _context2.stop();}}},_callee2);}))();},getName:function getName(order){var users=this.users;return users.filter(function(user){if(user.id==order.user_profile_id){return user;}}).map(function(user){return user.name+' '+user.lastname;}).toString();},loadOrder:function loadOrder(order){this.order=order;},updateStatus:function updateStatus(e){var _this4=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){var status;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:status=e.target.value;_context3.next=3;return _this4.$axios.put('/api/orders/status/'+_this4.order.id,{status:status}).then(function(){return _this4.$notify({title:'El estado del pedido ha sido actualizado'});});case 3:case\"end\":return _context3.stop();}}},_callee3);}))();},changePage:function changePage(url){this.$router.replace({query:{page:url.split('page=')[1]}});}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvY3J1ZC9PcmRlcnNIaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vT3JkZXJzSGlzdG9yeS52dWU/MDIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ob21icmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RXN0YWRvIFBhZ288L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RXN0YWRvIFBlZGlkbzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5GZWNoYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5GYWN0dXJhPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSB2LWlmPVwib3JkZXJzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIm9yZGVyIGluIG9yZGVyc1wiIDprZXk9XCJvcmRlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7IG9yZGVyLmlkIH19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0TmFtZShvcmRlcikgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwib3JkZXIucGFpZCA9PSAxXCI+UGVuZGllbnRlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cIm9yZGVyLnBhaWQgPT0gMlwiPkVuIFByb2Nlc288L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwib3JkZXIucGFpZCA9PSAzXCI+UGFnYWRvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cIm9yZGVyLnN0YXR1cyA9PSA0XCI+RW50cmVnYWRvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgb3JkZXIub3JkZXJfZGF0ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjZcIj5ObyBoYXkgcGVkaWRvcyBwZW5kaWVudGVzLjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIi4uLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInBhZ2luYXRpb25fbGluayBpbiBwYWdpbmF0aW9uLmxpbmtzXCIgOmtleT1cIiAncGFnaW5hdGlvbl9saW5rLScgKyBwYWdpbmF0aW9uX2xpbmsubGFiZWxcIiBjbGFzcz1cInBhZ2UtbGluay1jdXN0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzYWJsZWQnIDogcGFnaW5hdGlvbl9saW5rLnVybCA9PSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGl2ZScgOiBwYWdpbmF0aW9uX2xpbmsuYWN0aXZlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiB2LWh0bWw9XCJwYWdpbmF0aW9uX2xpbmsubGFiZWxcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBAY2xpY2sucHJldmVudD1cImNoYW5nZVBhZ2UocGFnaW5hdGlvbl9saW5rLnVybClcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbGllbnQtb25seT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXJzOiBbXSxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIG9yZGVyOiB7fSxcbiAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge30sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRPcmRlcnMoKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyTmFtZSgpO1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnBhZ2UgPz8gMTtcblxuICAgICAgICAgICAgICAgIGlmKHBhZ2UgPiB0aGlzLnBhZ2luYXRpb24ubGFzdF9wYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb24ubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24ubGFzdF9wYWdlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLmZpbmlzaCgpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JkZXJzKCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgfSxcblxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBnZXRPcmRlcnMoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuJGF4aW9zLmdldCgnL2FwaS9vcmRlcnM/cGVyUGFnZT0xMCZzb3J0PS1pZCZwYWdlPScgKyB0aGlzLnBhZ2UgKyAnJmZpbHRlcltzdGF0dXNdPTQnICk7XG4gICAgICAgICAgICB0aGlzLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb25zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGlua3M6IHBhZ2luYXRpb25zWydtZXRhJ10ubGlua3MsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogcGFnaW5hdGlvbnNbJ21ldGEnXS5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfcGFnZTogcGFnaW5hdGlvbnNbJ21ldGEnXS5sYXN0X3BhZ2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlck5hbWUoKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRheGlvcy5nZXQoJy9hcGkvdXNlcnMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXROYW1lKG9yZGVyKSB7XG4gICAgICAgICAgICBsZXQgdXNlcnMgPSB0aGlzLnVzZXJzO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5pZCA9PSBvcmRlci51c2VyX3Byb2ZpbGVfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkubWFwKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLm5hbWUgKyAnICcgKyB1c2VyLmxhc3RuYW1lO1xuICAgICAgICAgICAgfSkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkT3JkZXIob3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB1cGRhdGVTdGF0dXMoZSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRheGlvcy5wdXQoJy9hcGkvb3JkZXJzL3N0YXR1cy8nICsgdGhpcy5vcmRlci5pZCwge1xuICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHRoaXMuJG5vdGlmeSh7IHRpdGxlOiAnRWwgZXN0YWRvIGRlbCBwZWRpZG8gaGEgc2lkbyBhY3R1YWxpemFkbyd9KSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlUGFnZSh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKHtcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBwYWdlIDogdXJsLnNwbGl0KCdwYWdlPScpWzFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiQUFzREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/OrdersHistory.vue?vue&type=script&lang=js&\n");

/***/ })

})