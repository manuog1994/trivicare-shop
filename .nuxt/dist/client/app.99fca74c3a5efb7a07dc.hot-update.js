webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/All.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/All.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Edit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edit.vue */ \"./components/crud/Edit.vue\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:true,components:{Edit:_Edit_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]},data:function data(){return{products:[],status:'',productId:'',yesterday:[],today:[],index:[],store:[],productsVisitors:[],cart:[],checkout:[]};},mounted:function mounted(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return _this.getProducts();case 2:_context.next=4;return _this.getVisits();case 4:case\"end\":return _context.stop();}},_callee);}))();},methods:{getProducts:function getProducts(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this2.$axios.get('/api/products').then(function(response){_this2.products=response.data.data;});case 2:case\"end\":return _context2.stop();}},_callee2);}))();},getVisits:function getVisits(){var _this3=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _this3.$axios.get('/api/visits').then(function(response){var visits=response.data;//filtra las visitas de ayer\n_this3.yesterday=visits.filter(function(visit){var date=new Date(visit.created_at);var yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);return date.toDateString()==yesterday.toDateString();});//filtra las visitas de hoy\n_this3.today=visits.filter(function(visit){var date=new Date();var today=new Date(visit.created_at);return date.toDateString()==today.toDateString();});//filtra las visitas de la tienda\n_this3.store=visits.filter(function(visit){if(visit.page_visited=='store'){return visit;}});//filtra las visitas de los productos\n_this3.shop=visits.filter(function(visit){if(visit.page_visited=='shop'){return visit;}});//filtra las visitas del carrito\n_this3.cart=visits.filter(function(visit){if(visit.page_visited=='cart'){return visit;}});//filtra las visitas de la caja\n_this3.checkout=visits.filter(function(visit){if(visit.page_visited=='checkout'){return visit;}});//filtra las visitas de los productos\n_this3.productsVisitors=visits.filter(function(visit){if(visit.page_visited!='store'&&visit.page_visited!='shop'&&visit.page_visited!='cart'&&visit.page_visited!='checkout'&&visit.page_visited!='index'){return visit;}});});case 2:case\"end\":return _context3.stop();}},_callee3);}))();},onClick:function onClick(product){this.$modal.show('edit',product);},updateStatus:function updateStatus(product){var _this4=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:if(!(product.status==='Publicado')){_context4.next=5;break;}_context4.next=3;return _this4.$axios.put('/api/products/status/'+product.id,{status:'Borrador'}).then(function(res){_this4.$notify({title:'Estado del producto actualizado'});});case 3:_context4.next=7;break;case 5:_context4.next=7;return _this4.$axios.put('/api/products/status/'+product.id,{status:'Publicado'}).then(function(res){_this4.$notify({title:'Estado del producto actualizado'});});case 7:window.location.reload(true);case 8:case\"end\":return _context4.stop();}},_callee4);}))();},destroy:function destroy(id){var _this5=this;sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({title:'¿Estás seguro?',text:\"¡No podrás revertir esto!\",icon:'warning',showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33',confirmButtonText:'¡Sí, bórralo!'}).then(function(result){if(result.isConfirmed){_this5.$axios.delete('/api/products/'+id).then(function(res){_this5.$notify({title:'Producto eliminado'});window.location.reload(true);});}});}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvY3J1ZC9BbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3J1ZC9BbGwudnVlPzlkNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRWRpdCAgZnJvbSAnLi9FZGl0LnZ1ZSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXV0aDogdHJ1ZSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRWRpdCxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgcHJvZHVjdElkOiAnJyxcbiAgICAgICAgICAgIHllc3RlcmRheTogW10sXG4gICAgICAgICAgICB0b2RheTogW10sXG4gICAgICAgICAgICBpbmRleDogW10sXG4gICAgICAgICAgICBzdG9yZTogW10sXG4gICAgICAgICAgICBwcm9kdWN0c1Zpc2l0b3JzOiBbXSxcbiAgICAgICAgICAgIGNhcnQ6IFtdLFxuICAgICAgICAgICAgY2hlY2tvdXQ6IFtdLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRWaXNpdHMoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGF4aW9zLmdldCgnL2FwaS9wcm9kdWN0cycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgZ2V0VmlzaXRzKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MuZ2V0KCcvYXBpL3Zpc2l0cycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpdHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2ZpbHRyYSBsYXMgdmlzaXRhcyBkZSBheWVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVzdGVyZGF5ID0gdmlzaXRzLmZpbHRlcih2aXNpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmlzaXQuY3JlYXRlZF9hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeWVzdGVyZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllc3RlcmRheS5zZXREYXRlKHllc3RlcmRheS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpID09IHllc3RlcmRheS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZmlsdHJhIGxhcyB2aXNpdGFzIGRlIGhveVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZGF5ID0gdmlzaXRzLmZpbHRlcih2aXNpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUodmlzaXQuY3JlYXRlZF9hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKSA9PSB0b2RheS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZmlsdHJhIGxhcyB2aXNpdGFzIGRlIGxhIHRpZW5kYVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlID0gdmlzaXRzLmZpbHRlcih2aXNpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aXNpdC5wYWdlX3Zpc2l0ZWQgPT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy9maWx0cmEgbGFzIHZpc2l0YXMgZGUgbG9zIHByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3AgPSB2aXNpdHMuZmlsdGVyKHZpc2l0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpc2l0LnBhZ2VfdmlzaXRlZCA9PSAnc2hvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlzaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vZmlsdHJhIGxhcyB2aXNpdGFzIGRlbCBjYXJyaXRvXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FydCA9IHZpc2l0cy5maWx0ZXIodmlzaXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlzaXQucGFnZV92aXNpdGVkID09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy9maWx0cmEgbGFzIHZpc2l0YXMgZGUgbGEgY2FqYVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0ID0gdmlzaXRzLmZpbHRlcih2aXNpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aXNpdC5wYWdlX3Zpc2l0ZWQgPT0gJ2NoZWNrb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy9maWx0cmEgbGFzIHZpc2l0YXMgZGUgbG9zIHByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzVmlzaXRvcnMgPSB2aXNpdHMuZmlsdGVyKHZpc2l0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpc2l0LnBhZ2VfdmlzaXRlZCAhPSAnc3RvcmUnICYmIHZpc2l0LnBhZ2VfdmlzaXRlZCAhPSAnc2hvcCcgJiYgdmlzaXQucGFnZV92aXNpdGVkICE9ICdjYXJ0JyAmJiB2aXNpdC5wYWdlX3Zpc2l0ZWQgIT0gJ2NoZWNrb3V0JyAmJiB2aXNpdC5wYWdlX3Zpc2l0ZWQgIT0gJ2luZGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2socHJvZHVjdCkge1xuICAgICAgICAgICAgdGhpcy4kbW9kYWwuc2hvdygnZWRpdCcsIHByb2R1Y3QpO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgYXN5bmMgdXBkYXRlU3RhdHVzKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnN0YXR1cyA9PT0gJ1B1YmxpY2FkbycpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGF4aW9zLnB1dCgnL2FwaS9wcm9kdWN0cy9zdGF0dXMvJyArIHByb2R1Y3QuaWQsIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdCb3JyYWRvcicsXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbm90aWZ5KHt0aXRsZTogJ0VzdGFkbyBkZWwgcHJvZHVjdG8gYWN0dWFsaXphZG8nfSl9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXhpb3MucHV0KCcvYXBpL3Byb2R1Y3RzL3N0YXR1cy8nICsgcHJvZHVjdC5pZCwge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ1B1YmxpY2FkbycsXG4gICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICB0aGlzLiRub3RpZnkoe3RpdGxlOiAnRXN0YWRvIGRlbCBwcm9kdWN0byBhY3R1YWxpemFkbyd9KX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95KGlkKSB7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnwr9Fc3TDoXMgc2VndXJvPycsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLCoU5vIHBvZHLDoXMgcmV2ZXJ0aXIgZXN0byFcIixcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnwqFTw60sIGLDs3JyYWxvISdcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MuZGVsZXRlKCcvYXBpL3Byb2R1Y3RzLycgKyBpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmeSh7dGl0bGU6ICdQcm9kdWN0byBlbGltaW5hZG8nfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQ0E7QUFPQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/All.vue?vue&type=script&lang=js&\n");

/***/ })

})