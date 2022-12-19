exports.ids = ["pages/success"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/success.vue?vue&type=template&id=af83c3cc&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/success.vue?vue&type=template&id=af83c3cc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center bg-light",staticStyle:{height:"100vh"}},[_vm.paymentIntent!=null?_c("div",{staticClass:"card p-5 text-center shadow"},[_c("div",{staticClass:"d-flex justify-content-center mb-5"},[_c("img",{attrs:{src:"/payment/success.webp",alt:"success.webp",width:"60"}})]),_vm._v(" "),_c("h1",[_vm._v("Ha realizado su pago con éxito, Gracias por su pedido")]),_vm._v(" "),_c("p",{staticClass:"mt-2"},[_vm._v("En unos minutos recibirá la factura y confirmación de su pedido, en el correo electrónico indicado en su cuenta.")]),_vm._v(" "),_c("p",[_vm._v("Revise su bandeja de entrada y si no la ve dirijase a su carpeta de Spam.")]),_vm._v(" "),_c("p",[_vm._v("La página se redirigirá a sus pedidos en "+_vm._s(_vm.counter)+" segundo(s), si no es así "),_c("n-link",{staticClass:"text-primary text-decoration-underline",attrs:{to:"/my-orders"}},[_vm._v("pulse aquí")]),_vm._v(".")],1)]):_vm._e()])]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/success.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/success.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony default export */ __webpack_exports__["default"] = ({auth:true,data(){return{paymentIntent:null,counter:10};},beforeMount(){const url=new URLSearchParams(window.location.search).get('payment_intent_client_secret');if(url==null){this.$router.push('/cart');}else{this.paymentIntent=url;}},mounted(){if(this.paymentIntent!=null){this.orderPaid();this.countdown();}},methods:{async orderPaid(){const token_id=this.paymentIntent;await this.$axios.post('/api/order-paid/'+token_id).then(()=>{this.$store.commit('CLEAR_CART');this.$store.commit('CLEAR_CUPON');});},// countdown of 10 seconds to redirect to my-orders
countdown(){const interval=setInterval(()=>{this.counter--;if(this.counter===0){clearInterval(interval);this.$router.push('/my-orders');}},1000);}}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! url */ "url")["URLSearchParams"]))

/***/ }),

/***/ "./pages/success.vue":
/*!***************************!*\
  !*** ./pages/success.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _success_vue_vue_type_template_id_af83c3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.vue?vue&type=template&id=af83c3cc& */ "./pages/success.vue?vue&type=template&id=af83c3cc&");
/* harmony import */ var _success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.vue?vue&type=script&lang=js& */ "./pages/success.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _success_vue_vue_type_template_id_af83c3cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _success_vue_vue_type_template_id_af83c3cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "fbab3ee4"
  
)

component.options.__file = "pages/success.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/success.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./pages/success.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./success.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/success.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/success.vue?vue&type=template&id=af83c3cc&":
/*!**********************************************************!*\
  !*** ./pages/success.vue?vue&type=template&id=af83c3cc& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_template_id_af83c3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./success.vue?vue&type=template&id=af83c3cc& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/success.vue?vue&type=template&id=af83c3cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_template_id_af83c3cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_template_id_af83c3cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;