exports.ids = ["pages/cancel"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/cancel.vue?vue&type=template&id=5f991333&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/cancel.vue?vue&type=template&id=5f991333& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",[_c("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[_c("div",{staticClass:"card p-5 text-center shadow"},[_c("div",{staticClass:"d-flex justify-content-center mb-5"},[_c("img",{attrs:{src:"/payment/error.webp",alt:"success.webp",width:"60"}})]),_vm._v(" "),_c("h1",[_vm._v("Ha ocurrido un problema al procesar su pedido.")]),_vm._v(" "),_c("p",{staticClass:"mt-2"},[_vm._v("Si has recibido el correo de confirmación, puede ignorar esta pantalla. De lo contrario es posible que se le haya hecho el cobro, pero no se le haya mandado la confirmación, si es así un técnico se pondrá en contacto usted en la mayor brevedad posible, ya que este problema manda una incidencia automáticamente.")]),_vm._v(" "),_vm.counter?_c("p",[_vm._v("La página se redireccionará en "+_vm._s(_vm.countdownNumbers)+" segundo(s), si no es así "),_c("n-link",{staticClass:"text-primary text-decoration-underline",attrs:{to:"/"}},[_vm._v("pulse aquí")]),_vm._v(".")],1):_vm._e()])])])]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/cancel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/cancel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,data(){return{counter:false,countdownNumbers:''};},mounted(){this.countdown(10);this.$store.commit('SET_STEP2',false);this.$store.commit('SET_STEP3',false);this.$store.commit('SET_STEP4',false);this.$store.commit('CLEAR_GUEST',{});this.$store.commit('SET_PAYMENT_METHOD','');this.$store.commit('SET_SHIPPING_METHOD','');this.$store.commit('SET_PICKUP_ID','');this.$store.commit('SET_DURATION',0);this.$store.commit('SET_USER_PROFILE_ID','');this.$store.commit('SET_RESERVE','');this.$store.commit('CLEAR_CUPON',{});this.$store.commit('SET_ORDER_ID','');this.$store.commit('SET_PAYMENT_METHOD','');this.$store.commit('SET_SHIPPING_METHOD','');this.$store.commit('SET_SHIPPING_AMOUNT',0);this.$store.commit('SET_CONDITIONS_STORE',false);this.$store.commit('SET_NEWSLETTER_STORE',false);this.$store.commit('SET_INVOICE_PAPER',false);this.$store.commit('SET_NOTE','');},methods:{// countdown of 10 seconds to redirect to my-orders
countdown(counter){const interval=setInterval(()=>{this.counter=true;this.countdownNumbers=counter;counter--;if(counter===0){clearInterval(interval);this.$router.push('/');}},1000);},head(){return{titleTemplate:'Su pedido ha sido cancelado | TriviCare Natural Cosmetics'// link: [
//     { rel: 'cannonical', href: 'https://trivicare.com/success' }
// ],
};}}});

/***/ }),

/***/ "./pages/cancel.vue":
/*!**************************!*\
  !*** ./pages/cancel.vue ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cancel_vue_vue_type_template_id_5f991333___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel.vue?vue&type=template&id=5f991333& */ "./pages/cancel.vue?vue&type=template&id=5f991333&");
/* harmony import */ var _cancel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel.vue?vue&type=script&lang=js& */ "./pages/cancel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cancel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cancel_vue_vue_type_template_id_5f991333___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cancel_vue_vue_type_template_id_5f991333___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "4a3bfea4"
  
)

component.options.__file = "pages/cancel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/cancel.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./pages/cancel.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_cancel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./cancel.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/cancel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_cancel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/cancel.vue?vue&type=template&id=5f991333&":
/*!*********************************************************!*\
  !*** ./pages/cancel.vue?vue&type=template&id=5f991333& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_cancel_vue_vue_type_template_id_5f991333___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./cancel.vue?vue&type=template&id=5f991333& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/cancel.vue?vue&type=template&id=5f991333&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_cancel_vue_vue_type_template_id_5f991333___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_cancel_vue_vue_type_template_id_5f991333___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;