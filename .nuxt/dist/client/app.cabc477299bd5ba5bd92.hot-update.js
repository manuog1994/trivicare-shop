webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Reviews.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Reviews.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ \"./node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{token:'',products:[],user_profile_id:'',products_reviews:0};},mounted:function mounted(){var url=new URLSearchParams(window.location.search).get('token');this.token=url;this.getOrder();},watch:{products_reviews:function products_reviews(){var _this=this;if(this.products_reviews==this.products.length){this.$notify({text:'¡Gracias por valorar tus productos!',type:'success'});setTimeout(function(){_this.$router.push('/notifications-center');},2000);}}},methods:{getOrder:function getOrder(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var token_id;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:token_id=_this2.token;_context.next=3;return _this2.$axios.get(\"/api/review/\".concat(token_id)).then(function(response){_this2.user_profile_id=response.data.data.user_profile_id;var products=response.data.data.products;_this2.products=JSON.parse(products);}).catch(function(error){console.log(error);});case 3:case\"end\":return _context.stop();}},_callee);}))();},createReview:function createReview(id){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var mes,message,rev,review;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:mes='message-'+id;message=_this3.$refs[mes][0].value;rev='review-'+id;review=_this3.$refs[rev][0]._data.selectedRating;_context2.next=6;return _this3.$axios.post('/api/reviews',{user_id:_this3.$auth.user.id,user_profile_id:_this3.user_profile_id,product_id:id,rating:review,message:message}).then(function(response){document.getElementById('product-'+id).classList.add('hidden');document.getElementById('thank'+id).classList.remove('hidden');_this3.products_reviews++;_this3.$notify({text:'Valoración creada correctamente',type:'success'});}).catch(function(error){console.log(error);});case 6:case\"end\":return _context2.stop();}},_callee2);}))();}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvUmV2aWV3cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Jldmlld3MudnVlP2QyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcm91bmRlZC0wIG0tMSBtdC01IG1iLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPkEgY29udGludWFjacOzbiB2YWxvcmEgbG9zIHByb2R1Y3RvcyBkZSB0dSDDumx0aW1vIHBlZGlkby48L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIDprZXk9XCJwcm9kdWN0LmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwLTJcIiA6aWQ9XCIncHJvZHVjdC0nICsgcHJvZHVjdC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwcm9kdWN0LmltYWdlcy5sZW5ndGggPT0gMCB8fCBwcm9kdWN0LmltYWdlcy5sZW5ndGggPT0gMVwiIGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxudXh0LWltZyBwcm92aWRlcj1cImN1c3RvbVByb3ZpZGVyXCIgc3JjPVwibnV4dC9kZWZhdWx0LndlYnBcIiA6YWx0PVwicHJvZHVjdC5uYW1lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxudXh0LWltZyBwcm92aWRlcj1cImN1c3RvbVByb3ZpZGVyXCIgOnNyYz1cInByb2R1Y3QuaW1hZ2VzWzBdLnBhdGhcIiA6YWx0PVwicHJvZHVjdC5uYW1lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3sgcHJvZHVjdC5uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXR0aW5nLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImNyZWF0ZVJldmlldyhwcm9kdWN0LmlkKVwiIHJlZj1cImZvcm1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1ldmVubHkgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QcOxYWRlIHVuYSB2YWxvcmFjacOzbjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc3Rhci1yYXRpbmcgOnJlZj1cIidyZXZpZXctJyArIHByb2R1Y3QuaWRcIiAgdi1iaW5kOnN0YXItc2l6ZT1cIjIwXCI+PC92dWUtc3Rhci1yYXRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZy1mb3JtLXN0eWxlIGZvcm0tc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIDpyZWY9XCInbWVzc2FnZS0nICsgcHJvZHVjdC5pZFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSBhcXXDrSB0dSB2YWxvcmFjacOzbi4uLlwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYmctYmx1ZS1jb2xvciByb3VuZGVkLTBcIiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcC00IGhpZGRlblwiIDppZD1cIid0aGFuaycgKyBwcm9kdWN0LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PsKhR3JhY2lhcyBwb3IgdHUgdmFsb3JhY2nDs24hPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICAgICAgICB1c2VyX3Byb2ZpbGVfaWQ6ICcnLFxuICAgICAgICAgICAgcHJvZHVjdHNfcmV2aWV3czogMCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3Rva2VuJyk7XG4gICAgICAgIHRoaXMudG9rZW4gPSB1cmw7XG4gICAgICAgIHRoaXMuZ2V0T3JkZXIoKTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcHJvZHVjdHNfcmV2aWV3cygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzX3Jldmlld3MgPT0gdGhpcy5wcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRub3RpZnkoeyB0ZXh0OiAnwqFHcmFjaWFzIHBvciB2YWxvcmFyIHR1cyBwcm9kdWN0b3MhJywgdHlwZTogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbm90aWZpY2F0aW9ucy1jZW50ZXInKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldE9yZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW5faWQgPSB0aGlzLnRva2VuO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KGAvYXBpL3Jldmlldy8ke3Rva2VuX2lkfWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJfcHJvZmlsZV9pZCA9IHJlc3BvbnNlLmRhdGEuZGF0YS51c2VyX3Byb2ZpbGVfaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBKU09OLnBhcnNlKHByb2R1Y3RzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgY3JlYXRlUmV2aWV3KGlkKSB7XG4gICAgICAgICAgICBjb25zdCBtZXMgPSAnbWVzc2FnZS0nICsgaWQ7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy4kcmVmc1ttZXNdWzBdLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmV2ID0gJ3Jldmlldy0nICsgaWQ7XG4gICAgICAgICAgICBjb25zdCByZXZpZXcgPSB0aGlzLiRyZWZzW3Jldl1bMF0uX2RhdGEuc2VsZWN0ZWRSYXRpbmdcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGF4aW9zLnBvc3QoJy9hcGkvcmV2aWV3cycsIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLiRhdXRoLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgdXNlcl9wcm9maWxlX2lkOiB0aGlzLnVzZXJfcHJvZmlsZV9pZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBpZCxcbiAgICAgICAgICAgICAgICByYXRpbmc6IHJldmlldyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LScgKyBpZCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoYW5rJyArIGlkKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzX3Jldmlld3MrKztcbiAgICAgICAgICAgICAgICB0aGlzLiRub3RpZnkoeyB0ZXh0OiAnVmFsb3JhY2nDs24gY3JlYWRhIGNvcnJlY3RhbWVudGUnLCB0eXBlOiAnc3VjY2VzcycgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiQUFtREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Reviews.vue?vue&type=script&lang=js&\n");

/***/ })

})