webpackHotUpdate("pages/orders/_id",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders/_id.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders/_id.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:true,components:{TheHeader:function TheHeader(){return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/components/TheHeader */ \"./components/TheHeader.vue\"));},Breadcrumb:function Breadcrumb(){return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ \"./components/Breadcrumb.vue\"));},TheFooter:function TheFooter(){return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ \"./components/TheFooter.vue\"));}},data:function data(){return{order:{},products:[],id:this.$route.params.id,users:[],user:{}};},mounted:function mounted(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},2000);});this.getOrder();this.getUserName();},methods:{getOrder:function getOrder(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _this2.$axios.get('/api/orders/'+_this2.id).then(function(response){_this2.order=response.data.data;_this2.products=JSON.parse(_this2.order.products);}).catch(function(error){console.log(error);});case 2:case\"end\":return _context.stop();}}},_callee);}))();},discountedPrice:function discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},getUserName:function getUserName(){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this3.$axios.get('/api/users').then(function(response){_this3.users=response.data.data;}).catch(function(error){console.log(error);});case 2:case\"end\":return _context2.stop();}}},_callee2);}))();},getName:function getName(order){var _this4=this;var users=this.users;return users.filter(function(user){if(user.id==order.user_profile_id){return user;}}).map(function(user){_this4.user=user;var data=_this4.$auth.user.roles;var role=data.filter(function(role){if(role.name=='admin'){return role;}}).map(function(role){return role.name;}).toString();if(role!='admin'&&user.user_id!=_this4.$auth.user.id){return _this4.$router.push('/error');}return user.name+' '+user.lastname;}).toString();},getState:function getState(order){if(order.status==1){return'Recibido';}else if(order.status==2){return'Preparando';}else if(order.status==3){return'Enviado';}else if(order.status==4){return'Entregado';}else{return'Cancelado';}},getPaymentState:function getPaymentState(order){if(order.paid==1){return'Pendiente';}else if(order.paid==2){return'Procesando';}else if(order.paid==3){return'Pagado';}}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL29yZGVycy9faWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL29yZGVycy9faWQudnVlPzc1OTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhdXRoOiB0cnVlLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBUaGVIZWFkZXI6ICgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL1RoZUhlYWRlcicpLFxuICAgICAgICBCcmVhZGNydW1iOiAoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9CcmVhZGNydW1iJyksXG4gICAgICAgIFRoZUZvb3RlcjogKCkgPT4gaW1wb3J0KCdAL2NvbXBvbmVudHMvVGhlRm9vdGVyJyksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlcjoge30sXG4gICAgICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICAgICAgICBpZDogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgdXNlcjoge30sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbnV4dC4kbG9hZGluZy5zdGFydCgpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLmZpbmlzaCgpXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0T3JkZXIoKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyTmFtZSgpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldE9yZGVyKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL29yZGVycy8nICsgdGhpcy5pZClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXIgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IEpTT04ucGFyc2UodGhpcy5vcmRlci5wcm9kdWN0cyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2NvdW50ZWRQcmljZShwcm9kdWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZV9iYXNlIC0gKHByb2R1Y3QucHJpY2VfYmFzZSAqIHByb2R1Y3QuZGlzY291bnQgLyAxMDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlck5hbWUoKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRheGlvcy5nZXQoJy9hcGkvdXNlcnMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXROYW1lKG9yZGVyKSB7XG4gICAgICAgICAgICBsZXQgdXNlcnMgPSB0aGlzLnVzZXJzO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5pZCA9PSBvcmRlci51c2VyX3Byb2ZpbGVfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkubWFwKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4kYXV0aC51c2VyLnJvbGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGUgPSBkYXRhLmZpbHRlcihyb2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvbGUubmFtZSA9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9sZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLm1hcChyb2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvbGUubmFtZTtcbiAgICAgICAgICAgICAgICB9KS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgaWYocm9sZSAhPSAnYWRtaW4nICYmIHVzZXIudXNlcl9pZCAhPSB0aGlzLiRhdXRoLnVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlci5wdXNoKCcvZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5uYW1lICsgJyAnICsgdXNlci5sYXN0bmFtZTtcbiAgICAgICAgICAgIH0pLnRvU3RyaW5nKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0U3RhdGUob3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChvcmRlci5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUmVjaWJpZG8nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlci5zdGF0dXMgPT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUHJlcGFyYW5kbyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnN0YXR1cyA9PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbnZpYWRvJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIuc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0VudHJlZ2Fkbyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ2FuY2VsYWRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQYXltZW50U3RhdGUob3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChvcmRlci5wYWlkID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1BlbmRpZW50ZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnBhaWQgPT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUHJvY2VzYW5kbyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyLnBhaWQgPT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnUGFnYWRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgIH0sXG5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders/_id.vue?vue&type=script&lang=js&\n");

/***/ })

})