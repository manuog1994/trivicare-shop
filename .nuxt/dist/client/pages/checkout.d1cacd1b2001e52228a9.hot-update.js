webpackHotUpdate("pages/checkout",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:false,pageTransition:'slide-fade',asyncData:function asyncData(_ref){return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var req,visitorIP,_visitorIP;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:req=_ref.req;if(req){_context.next=6;break;}visitorIP='No IP';return _context.abrupt(\"return\",{visitorIP:visitorIP});case 6:_visitorIP=req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;return _context.abrupt(\"return\",{visitorIP:_visitorIP});case 8:case\"end\":return _context.stop();}},_callee);}))();},data:function data(){return{searchChildren:'',unauthorized:false};},components:{HeaderWithTopbar:function HeaderWithTopbar(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ \"./components/HeaderWithTopbar.vue\"));},TheHeader:function TheHeader(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheHeader */ \"./components/TheHeader.vue\"));},NavBottom:function NavBottom(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/NavBottom */ \"./components/NavBottom.vue\"));},CheckoutContainer:function CheckoutContainer(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/CheckoutContainer */ \"./components/CheckoutContainer.vue\"));},TheFooter:function TheFooter(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ \"./components/TheFooter.vue\"));}},mounted:function mounted(){var _this=this;this.$nextTick(function(){_this.$nuxt.$loading.start();setTimeout(function(){_this.$nuxt.$loading.finish();},1000);});var tituloOriginal=document.title;// Lo guardamos para restablecerlo\nwindow.onblur=function(){// Si el usuario se va a otro lado...\ndocument.title=\"Ey, vuelve aquí!\";// Cambiamos el título\n};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título\n};if(this.$axios.onError(function(error){var code=error.response.status;if(code==401){_this.$auth.logout();}}));this.$axios.post('/api/visit',{ip_address:this.visitorIP,page_visited:'checkout'});},methods:{closeMenus:function closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},searchOpacity:function searchOpacity(searchFather){if(searchFather==true){document.getElementById(\"post-nav\").classList.add(\"search-screen\");}else{document.getElementById(\"post-nav\").classList.remove(\"search-screen\");}}},head:function head(){return{titleTemplate:\"Resumen de tu Pedido | TriviCare Natural Cosmetics\"// link: [\n//     { rel: 'cannonical', href: 'https://trivicare.com/checkout' }\n// ],\n};}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL2NoZWNrb3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGVja291dC52dWU/ODRiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBhdXRoOiBmYWxzZSxcclxuICAgICAgICBcclxuICAgICAgICBwYWdlVHJhbnNpdGlvbjogJ3NsaWRlLWZhZGUnLFxyXG5cclxuICAgICAgICBhc3luYyBhc3luY0RhdGEgKHsgcmVxIH0pIHtcclxuICAgICAgICAgICAgaWYoIXJlcSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlzaXRvcklQID0gJ05vIElQJ1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmlzaXRvcklQIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpc2l0b3JJUCA9IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8IHJlcS5zb2NrZXQucmVtb3RlQWRkcmVzcyB8fCByZXEuY29ubmVjdGlvbi5zb2NrZXQucmVtb3RlQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmlzaXRvcklQIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hDaGlsZHJlbjogJycsXHJcbiAgICAgICAgICAgICAgICB1bmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBIZWFkZXJXaXRoVG9wYmFyOiAoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvSGVhZGVyV2l0aFRvcGJhclwiKSxcclxuICAgICAgICAgICAgVGhlSGVhZGVyOiAoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvVGhlSGVhZGVyXCIpLFxyXG4gICAgICAgICAgICBOYXZCb3R0b206ICgpID0+IGltcG9ydChcIkAvY29tcG9uZW50cy9OYXZCb3R0b21cIiksXHJcbiAgICAgICAgICAgIENoZWNrb3V0Q29udGFpbmVyOiAoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvQ2hlY2tvdXRDb250YWluZXJcIiksXHJcbiAgICAgICAgICAgIFRoZUZvb3RlcjogKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL1RoZUZvb3RlclwiKSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRudXh0LiRsb2FkaW5nLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG51eHQuJGxvYWRpbmcuZmluaXNoKClcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHRpdHVsb09yaWdpbmFsID0gZG9jdW1lbnQudGl0bGU7IC8vIExvIGd1YXJkYW1vcyBwYXJhIHJlc3RhYmxlY2VybG9cclxuICAgICAgICAgICAgd2luZG93Lm9uYmx1ciA9IGZ1bmN0aW9uKCl7IC8vIFNpIGVsIHVzdWFyaW8gc2UgdmEgYSBvdHJvIGxhZG8uLi5cclxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkV5LCB2dWVsdmUgYXF1w60hXCI7Ly8gQ2FtYmlhbW9zIGVsIHTDrXR1bG9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdHVsb09yaWdpbmFsOyAvLyBTaSBlbCB1c3VhcmlvIHZ1ZWx2ZSByZXN0YWJsZWNlbW9zIGVsIHTDrXR1bG9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy4kYXhpb3Mub25FcnJvcihlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXV0aC5sb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kYXhpb3MucG9zdCgnL2FwaS92aXNpdCcsIHtcclxuICAgICAgICAgICAgICAgIGlwX2FkZHJlc3M6IHRoaXMudmlzaXRvcklQLFxyXG4gICAgICAgICAgICAgICAgcGFnZV92aXNpdGVkOiAnY2hlY2tvdXQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgY2xvc2VNZW51cygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoT3BhY2l0eShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdjbG9zZU1lbnUnLCB0aGlzLmNsb3NlTWVudSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZWFyY2hPcGFjaXR5KHNlYXJjaEZhdGhlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEZhdGhlciA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LW5hdlwiKS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLXNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LW5hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLXNjcmVlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhlYWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVRlbXBsYXRlOiBcIlJlc3VtZW4gZGUgdHUgUGVkaWRvIHwgVHJpdmlDYXJlIE5hdHVyYWwgQ29zbWV0aWNzXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBsaW5rOiBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgeyByZWw6ICdjYW5ub25pY2FsJywgaHJlZjogJ2h0dHBzOi8vdHJpdmljYXJlLmNvbS9jaGVja291dCcgfVxyXG4gICAgICAgICAgICAgICAgLy8gXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0NBO0FBQ0E7QUFDQTtBQUlBO0FBa0NBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js&\n");

/***/ })

})