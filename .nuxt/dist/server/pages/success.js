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
var render=function render(){var _vm$paymentIntent;var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",[_vm.loading?_c("BigLoader"):_vm._e(),_vm._v(" "),_vm.paymentIntent!=null?_c("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[_vm.loading==false?_c("div",{staticClass:"card p-5 text-center shadow"},[_c("div",{staticClass:"d-flex justify-content-center mb-5"},[_c("img",{attrs:{src:"/payment/success.webp",alt:"success.webp",width:"60"}})]),_vm._v(" "),((_vm$paymentIntent=_vm.paymentIntent)===null||_vm$paymentIntent===void 0?void 0:_vm$paymentIntent.length)==23?_c("h1",[_vm._v("Hemos recibido su pedido. Gracias por confiar en nosotros.")]):_c("h1",[_vm._v("Ha realizado su pago con éxito, Gracias por su pedido")]),_vm._v(" "),_c("p",{staticClass:"mt-2"},[_vm._v("En unos minutos recibirá la factura y confirmación de su pedido, en el correo electrónico indicado en su cuenta.")]),_vm._v(" "),_c("p",[_vm._v("Revise su bandeja de entrada y si no la ve dirijase a su carpeta de Spam.")]),_vm._v(" "),_vm.counter?_c("p",[_vm._v("La página se redireccionará en "+_vm._s(_vm.countdownNumbers)+" segundo(s), si no es así "),_c("n-link",{staticClass:"text-primary text-decoration-underline",attrs:{to:"/"}},[_vm._v("pulse aquí")]),_vm._v(".")],1):_vm._e()]):_vm._e()]):_vm._e(),_vm._v(" "),_vm.error?_c("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[_c("div",{staticClass:"card p-5 text-center shadow"},[_c("div",{staticClass:"d-flex justify-content-center mb-5"},[_c("img",{attrs:{src:"/payment/error.webp",alt:"success.webp",width:"60"}})]),_vm._v(" "),_c("h1",[_vm._v("Ha ocurrido un problema al procesar su pedido.")]),_vm._v(" "),_c("p",{staticClass:"mt-2"},[_vm._v("Si has recibido el correo de confirmación, puede ignorar esta pantalla. De lo contrario es posible que se le haya hecho el cobro, pero no se le haya mandado la confirmación, si es así un técnico se pondrá en contacto usted en la mayor brevedad posible, ya que este problema manda una incidencia automáticamente.")]),_vm._v(" "),_vm.counter?_c("p",[_vm._v("La página se redireccionará en "+_vm._s(_vm.countdownNumbers)+" segundo(s), si no es así "),_c("n-link",{staticClass:"text-primary text-decoration-underline",attrs:{to:"/"}},[_vm._v("pulse aquí")]),_vm._v(".")],1):_vm._e()])]):_vm._e()],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/success.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/success.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony default export */ __webpack_exports__["default"] = ({middleware:'token',auth:false,components:{BigLoader:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/loaders/BigLoader.vue */ "./components/loaders/BigLoader.vue"))},beforeCreate(){this.loading=true;},data(){return{paymentIntent:null,counter:false,countdownNumbers:'',loading:true,error:false};},beforeMount(){const url=new URLSearchParams(window.location.search).get('payment_intent_client_secret');if(url!=null){this.paymentIntent=url;}},async mounted(){if(this.paymentIntent!=null){this.orderPaid();}},methods:{async orderPaid(){const token_id=this.paymentIntent;await this.$axios.post('/api/order-paid/'+token_id).then(res=>{this.loading=false;this.countdown(10);this.$store.commit('CLEAR_GUEST');this.$store.commit('CLEAR_CART');this.$store.commit('CLEAR_CUPON');this.$store.commit('SET_STEP2',false);this.$store.commit('SET_STEP3',false);this.$store.commit('SET_STEP4',false);this.$store.commit('CLEAR_GUEST',{});this.$store.commit('SET_PAYMENT_METHOD','');this.$store.commit('SET_SHIPPING_METHOD','');this.$store.commit('SET_PICKUP_ID','');this.$store.commit('SET_DURATION',0);this.$store.commit('SET_USER_PROFILE_ID','');this.$store.commit('SET_RESERVE','');this.$store.commit('CLEAR_CUPON',{});this.$store.commit('SET_ORDER_ID','');this.$store.commit('SET_PAYMENT_METHOD','');this.$store.commit('SET_SHIPPING_METHOD','');this.$store.commit('SET_SHIPPING_AMOUNT',0);this.$store.commit('SET_CONDITIONS_STORE',false);this.$store.commit('SET_NEWSLETTER_STORE',false);this.$store.commit('SET_INVOICE_PAPER',false);this.$store.commit('SET_NOTE','');}).catch(err=>{console.log(err.response.data);this.loading=false;this.countdown(20);this.paymentIntent=null;this.error='Ha ocurrido un error, por favor intente nuevamente más tarde.';this.$axios.post('/api/error-message',{message:error.response.data.message});});},//countdown of 10 seconds to redirect to my-orders
countdown(counter){const interval=setInterval(()=>{this.counter=true;this.countdownNumbers=counter;counter--;if(counter===0){clearInterval(interval);this.$router.push('/');}},1000);},head(){return{titleTemplate:'Estamos procesando su pago... | TriviCare Natural Cosmetics'// link: [
//     { rel: 'cannonical', href: 'https://trivicare.com/success' }
// ],
};}}});
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