exports.ids = ["pages/payment/bizum"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/payment/bizum.vue?vue&type=template&id=69a368f9&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment/bizum.vue?vue&type=template&id=69a368f9& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("HeaderCheckout"),_vm._ssrNode(" "),_vm.confirmed==false?_vm._ssrNode('<div class="container pt-100 pb-100">',"</div>",[_vm._ssrNode('<div class="row"><div class="col-12"><div class="card"><div class="card-body"><div class="mt-3 d-flex justify-content-center"><img src="/payment/bizum.webp" alt="logo de bizum" width="200"></div> <div><p class="text-center mt-3">Para realizar el pago por Bizum, envíe el importe de <strong class="fs-5">'+_vm._ssrEscape(_vm._s((_vm.total+_vm.shippingAmount).toFixed(2))+" €")+'</strong> al siguiente número:</p> <p class="text-center mt-3 fs-5"><strong>613 03 69 42</strong></p> <p class="text-center mt-3">Indicando en el concepto su <strong class="fs-6">DNI,NIF o NIE</strong></p> <p class="text-center mt-3">Pulse <strong class="fs-6">Confirmar</strong> para realizar su pedido.</p></div> <div class="mt-4 d-flex justify-content-center"><form><button type="submit" class="fs-6 btn bg-trivi-green text-white">\n                                    Confirmar\n                                </button></form></div></div></div></div></div>')],2):_c("SuccessOrder"),_vm._ssrNode(" "),_c("TheFooter")],2);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/bizum.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/bizum.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,middleware:'bizum',data(){return{confirmed:false};},components:{HeaderCheckout:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/header/HeaderCheckout.vue */ "./components/header/HeaderCheckout.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter.vue */ "./components/TheFooter.vue")),SuccessOrder:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/checkout/SuccessOrder.vue */ "./components/checkout/SuccessOrder.vue"))},computed:{total(){return this.$store.getters.getTotal*1.21;},shippingAmount(){return this.$store.getters.getShippingAmount;},guestStore(){return this.$store.getters.getGuest;}},methods:{async createOrder(){var _this$guestStore;if(((_this$guestStore=this.guestStore)===null||_this$guestStore===void 0?void 0:_this$guestStore.length)!=0){await this.$axios.post('/api/guest-store',this.guestStore).then(res=>{const resp=res.data.data;const guest={...this.guestStore,id:resp.id};this.$store.dispatch('addIdToGuest',guest);const products=JSON.stringify(this.$store.getters.getCart);const cupon=this.$store.getters.getCupon;this.$axios.post('/api/orders',{guest_id:this.guestStore.id,user_id:this.guestStore.user_id,user_profile_id:this.guestStore.user_profile_id,products:products,subTotal:this.$store.getters.getSubTotal,total:this.$store.getters.getTotal,coupon:cupon.code,shipping:this.$store.getters.getShippingAmount,shipping_method:this.$store.getters.getShippingMethod,note:this.$store.getters.getNote,invoice_paper:this.$store.getters.getInvoicePaper,token_id:this.token_id,token_reserve:this.$store.getters.getReserve,payment_method:this.$store.getters.getPaymentMethod,pickup_point:this.$store.getters.getPickUpId}).then(()=>{this.orderComplete();this.$root.$emit('orderComplete',true);this.confirmed=true;}).catch(err=>{});}).catch(err=>{});}else{const products=JSON.stringify(this.$store.getters.getCart);const cupon=this.$store.getters.getCupon;await this.$axios.post('/api/orders',{guest_id:null,user_id:this.$auth.user.id,user_profile_id:this.$store.getters.getUserProfileId,products:products,subTotal:this.$store.getters.getSubTotal,total:this.$store.getters.getTotal,coupon:cupon.code,shipping:this.$store.getters.getShippingAmount,shipping_method:this.$store.getters.getShippingMethod,note:this.$store.getters.getNote,invoice_paper:this.$store.getters.getInvoicePaper,token_id:this.token_id,token_reserve:this.$store.getters.getReserve,payment_method:this.$store.getters.getPaymentMethod,pickup_point:this.$store.getters.getPickUpId}).then(()=>{this.orderComplete();this.$root.$emit('orderComplete',true);this.confirmed=true;window.onbeforeunload=null;window.history.pushState(null,'',window.location.href);}).catch(err=>{});}},orderComplete(){this.$store.commit('CLEAR_GUEST');this.$store.commit('CLEAR_CART');this.$store.commit('CLEAR_CUPON');this.$store.commit('SET_STEP2',false);this.$store.commit('SET_STEP3',false);this.$store.commit('SET_STEP4',false);this.$store.commit('CLEAR_GUEST',{});this.$store.commit('SET_PAYMENT_METHOD','');this.$store.commit('SET_SHIPPING_METHOD','');this.$store.commit('SET_PICKUP_ID','');this.$store.commit('SET_DURATION',0);this.$store.commit('SET_USER_PROFILE_ID','');this.$store.commit('SET_RESERVE','');this.$store.commit('CLEAR_CUPON',{});this.$store.commit('SET_ORDER_ID','');this.$store.commit('SET_PAYMENT_METHOD','');this.$store.commit('SET_SHIPPING_METHOD','');this.$store.commit('SET_SHIPPING_AMOUNT',0);this.$store.commit('SET_CONDITIONS_STORE',false);this.$store.commit('SET_NEWSLETTER_STORE',false);this.$store.commit('SET_INVOICE_PAPER',false);this.$store.commit('SET_NOTE','');this.$store.commit('SET_BIZUM_PAGE',false);}}});

/***/ }),

/***/ "./pages/payment/bizum.vue":
/*!*********************************!*\
  !*** ./pages/payment/bizum.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bizum_vue_vue_type_template_id_69a368f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bizum.vue?vue&type=template&id=69a368f9& */ "./pages/payment/bizum.vue?vue&type=template&id=69a368f9&");
/* harmony import */ var _bizum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bizum.vue?vue&type=script&lang=js& */ "./pages/payment/bizum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bizum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bizum_vue_vue_type_template_id_69a368f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bizum_vue_vue_type_template_id_69a368f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "7629046d"
  
)

component.options.__file = "pages/payment/bizum.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/payment/bizum.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./pages/payment/bizum.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_bizum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./bizum.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/bizum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_bizum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/payment/bizum.vue?vue&type=template&id=69a368f9&":
/*!****************************************************************!*\
  !*** ./pages/payment/bizum.vue?vue&type=template&id=69a368f9& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_bizum_vue_vue_type_template_id_69a368f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./bizum.vue?vue&type=template&id=69a368f9& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/payment/bizum.vue?vue&type=template&id=69a368f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_bizum_vue_vue_type_template_id_69a368f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_bizum_vue_vue_type_template_id_69a368f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;