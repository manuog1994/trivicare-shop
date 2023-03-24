exports.ids = ["pages/payment/paypal"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/payment/paypal.vue?vue&type=template&id=0318edd5&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment/paypal.vue?vue&type=template&id=0318edd5& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("client-only",[_c("HeaderCheckout"),_vm._v(" "),_c("div",{staticClass:"container pt-100 pb-100"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12"},[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12 d-flex justify-content-center mt-2"},[_c("img",{attrs:{src:"/payment/paypal.svg",alt:"logo de paypal",width:"200"}})]),_vm._v(" "),_c("div",{staticClass:"col-12 text-center"},[_c("p",[_vm._v("Pulse el botón que sea de su preferencia para el modo de pago y siga las indicaciones que le muestra Paypal, cuando el pedido sea confirmado será redirigido con la confirmación o cancelación de su pedido.")])])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12 d-flex justify-content-center mt-3"},[_c("Paypal",{attrs:{load:_vm.initPaypal}})],1)]),_vm._v(" "),_vm.loading==true?_c("SmallLoading"):_vm._e()],1)])])])]),_vm._v(" "),_c("TheFooter")],1)],1);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/paypal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/paypal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,middleware:'paypal',data(){return{paypal:false,initPaypal:false,loading:false};},components:{HeaderCheckout:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/header/HeaderCheckout.vue */ "./components/header/HeaderCheckout.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter.vue */ "./components/TheFooter.vue")),Paypal:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/checkout/Paypal.vue */ "./components/checkout/Paypal.vue")),SmallLoading:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/loaders/SmallLoading.vue */ "./components/loaders/SmallLoading.vue"))},computed:{paypalPage(){return this.$store.state.paypalPage;}},beforeMount(){if(this.paypalPage==false){this.$router.push('/checkout');}else{this.loading=true;setTimeout(()=>{this.loading=false;this.initPaypal=true;},5000);}// eliminar bloqueo de boton recargar y boton atras
window.onbeforeunload=null;window.history.pushState(null,'',window.location.href);},head(){return{titleTemplate:"Pago con Paypal | TriviCare Natural Cosmetics",script:[{src:'https://www.paypal.com/sdk/js?client-id='+"AezG3YQ0iS0ugtoBRA05497Vkyj9B26Qf4sIrSJoxWrEk5Y9EXn2mDhACSAX1UgIQQxAmAwV_MvZttp6"+'&currency=EUR&disable-funding=sofort,card&enable-funding=paylater&locale=es_ES',async:true}]};}});

/***/ }),

/***/ "./pages/payment/paypal.vue":
/*!**********************************!*\
  !*** ./pages/payment/paypal.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paypal_vue_vue_type_template_id_0318edd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal.vue?vue&type=template&id=0318edd5& */ "./pages/payment/paypal.vue?vue&type=template&id=0318edd5&");
/* harmony import */ var _paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypal.vue?vue&type=script&lang=js& */ "./pages/payment/paypal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paypal_vue_vue_type_template_id_0318edd5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paypal_vue_vue_type_template_id_0318edd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "f1727e3e"
  
)

component.options.__file = "pages/payment/paypal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/payment/paypal.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./pages/payment/paypal.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./paypal.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/paypal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/payment/paypal.vue?vue&type=template&id=0318edd5&":
/*!*****************************************************************!*\
  !*** ./pages/payment/paypal.vue?vue&type=template&id=0318edd5& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_template_id_0318edd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./paypal.vue?vue&type=template&id=0318edd5& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/payment/paypal.vue?vue&type=template&id=0318edd5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_template_id_0318edd5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_template_id_0318edd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;