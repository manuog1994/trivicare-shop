webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/NewInvoice.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/NewInvoice.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_provincias_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/provincias.json */ \"./data/provincias.json\");\nvar _data_provincias_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/data/provincias.json */ \"./data/provincias.json\", 1);\n/* harmony import */ var _data_ciudades_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data/ciudades.json */ \"./data/ciudades.json\");\nvar _data_ciudades_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/data/ciudades.json */ \"./data/ciudades.json\", 1);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{paises:[{id:28,name:'España'}],ciudades:_data_ciudades_json__WEBPACK_IMPORTED_MODULE_7__,provincias:_data_provincias_json__WEBPACK_IMPORTED_MODULE_6__,cities:[]};},methods:{getStates:function getStates(e){var country_name=e.target.value;var country_id=this.paises.find(function(country){return country.name===country_name;}).id;this.provincias=this.provincias.data.filter(function(state){return state.id_country===country_id;});},getCities:function getCities(e){var states_name=e.target.value;var state_id=this.provincias.find(function(state){return state.name===states_name;}).id;this.cities=this.ciudades.data.filter(function(city){return city.id_state===state_id;});},createInvoice:function createInvoice(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var form,data;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:form=_this.$refs.createinvoice;data=new FormData(form);_context.next=4;return _this.$axios.post('/api/new-invoice',data).then(function(res){console.log(res);}).catch(function(err){console.log(err);});case 4:case\"end\":return _context.stop();}},_callee);}))();}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvY3J1ZC9OZXdJbnZvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvTmV3SW52b2ljZS52dWU/MzIxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBwcm92aW5jaWFzIGZyb20gJ0AvZGF0YS9wcm92aW5jaWFzLmpzb24nXG5pbXBvcnQgY2l1ZGFkZXMgZnJvbSAnQC9kYXRhL2NpdWRhZGVzLmpzb24nXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFpc2VzOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogMjgsIG5hbWU6ICdFc3Bhw7FhJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY2l1ZGFkZXMsXG4gICAgICAgICAgICBwcm92aW5jaWFzLFxuICAgICAgICAgICAgY2l0aWVzOiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0U3RhdGVzKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnlfbmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5X2lkID0gdGhpcy5wYWlzZXMuZmluZChjb3VudHJ5ID0+IGNvdW50cnkubmFtZSA9PT0gY291bnRyeV9uYW1lKS5pZFxuICAgICAgICAgICAgdGhpcy5wcm92aW5jaWFzID0gdGhpcy5wcm92aW5jaWFzLmRhdGEuZmlsdGVyKHN0YXRlID0+IHN0YXRlLmlkX2NvdW50cnkgPT09IGNvdW50cnlfaWQpXG4gICAgICAgIH0sXG4gICAgICAgIGdldENpdGllcyhlKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZXNfbmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICBjb25zdCBzdGF0ZV9pZCA9IHRoaXMucHJvdmluY2lhcy5maW5kKHN0YXRlID0+IHN0YXRlLm5hbWUgPT09IHN0YXRlc19uYW1lKS5pZFxuICAgICAgICAgICAgdGhpcy5jaXRpZXMgPSB0aGlzLmNpdWRhZGVzLmRhdGEuZmlsdGVyKGNpdHkgPT4gY2l0eS5pZF9zdGF0ZSA9PT0gc3RhdGVfaWQpXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgY3JlYXRlSW52b2ljZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRyZWZzLmNyZWF0ZWludm9pY2VcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGF4aW9zLnBvc3QoJy9hcGkvbmV3LWludm9pY2UnLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/NewInvoice.vue?vue&type=script&lang=js&\n");

/***/ })

})