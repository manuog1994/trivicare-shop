exports.ids = ["pages/orders/_id"];
exports.modules = {

/***/ "./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/orders/_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-0!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/orders/_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/orders/_id.vue?vue&type=template&id=4bf228c9&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/orders/_id.vue?vue&type=template&id=4bf228c9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"shop-page-wrapper"},[_c("TheHeader"),_vm._v(" "),_c("Breadcrumb",{attrs:{pageTitle:"Detalle del pedido"}}),_vm._v(" "),_c("div",{staticClass:"container pt-100 pb-100"},[_c("div",{staticClass:"mb-4"},[_c("h2",[_vm._v("Detalle del pedido "+_vm._s(_vm.order.id))])]),_vm._v(" "),_c("div",[_c("div",{staticClass:"d-flex justify-content-between mb-5"},[_c("div",{staticClass:"mr-5"},[_c("h4",[_vm._v("Datos del pedido")]),_vm._v(" "),_c("p",[_vm._v("Fecha: "+_vm._s(_vm.order.order_date))]),_vm._v(" "),_c("p",[_vm._v("Estado: "+_vm._s(_vm.getState(_vm.order)))]),_vm._v(" "),_c("p",[_vm._v("Estado de pago: "+_vm._s(_vm.getPaymentState(_vm.order)))])]),_vm._v(" "),_c("div",{staticClass:"mr-5"},[_c("h4",[_vm._v("Datos del cliente")]),_vm._v(" "),_c("p",[_vm._v("Nombre: "+_vm._s(_vm.getName(_vm.order)))]),_vm._v(" "),_c("p",[_vm._v("Correo: "+_vm._s(_vm.user.user))]),_vm._v(" "),_c("p",[_vm._v("Teléfono: "+_vm._s(_vm.user.phone))])]),_vm._v(" "),_c("div",{staticClass:"mr-5"},[_c("h4",[_vm._v("Datos de envío")]),_vm._v(" "),_c("p",[_vm._v("Dirección: "+_vm._s(_vm.user.address))]),_vm._v(" "),_c("p",[_vm._v("Ciudad: "+_vm._s(_vm.user.city))]),_vm._v(" "),_c("p",[_vm._v("Estado: "+_vm._s(_vm.user.state))]),_vm._v(" "),_c("p",[_vm._v("Código postal: "+_vm._s(_vm.user.zipcode))])])])]),_vm._v(" "),_c("div",[_c("table",{staticClass:"table"},[_c("thead",[_c("tr",[_c("th",{attrs:{scope:"col"}},[_vm._v("#")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Producto")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Cantidad")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Precio")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Total")])])]),_vm._v(" "),_c("tbody",_vm._l(this.products,function(product){return _c("tr",{key:product.id},[_c("th",{attrs:{scope:"row"}},[_vm._v(_vm._s(product.id))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(product.name))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(product.cartQuantity))]),_vm._v(" "),_c("td",[product.discount<0?_c("span",[_vm._v("\n                                        "+_vm._s((product.price_base*1.21).toFixed(2))+" €\n                                    ")]):_c("span",[_vm._v("\n                                        "+_vm._s((_vm.discountedPrice(product)*1.21).toFixed(2))+" €\n                                    ")]),_vm._v(" "),product.discount!=null?_c("span",{staticClass:"old ms-2"},[_vm._v("\n                                        "+_vm._s((product.price_base*1.21).toFixed(2))+" €\n                                    ")]):_vm._e()]),_vm._v(" "),_c("td",[_vm._v(_vm._s((product.total*1.21).toFixed(2))+" €")])]);}),0)])]),_vm._v(" "),_c("div",[_c("div",{staticClass:"d-flex justify-content-end mt-4"},[_c("div",{staticClass:"d-flex flex-column"},[_c("div",{staticClass:"d-flex justify-content-between mb-2"},[_c("div",{staticClass:"me-2 fw-bold"},[_vm._v("Subtotal:")]),_vm._v(" "),_c("div",[_vm._v(_vm._s((_vm.order.total*1.21).toFixed(2))+" €")])]),_vm._v(" "),_vm.order.coupon?_c("div",{staticClass:"d-flex justify-content-between mb-2"},[_c("div",{staticClass:"me-2 fw-bold"},[_vm._v("Cupón:")]),_vm._v(" "),_c("div",[_vm._v(_vm._s(_vm.order.coupon)+" ")])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-evenly mb-2"},[_c("div",{staticClass:"me-2"},[_c("p",{staticClass:"fw-bold"},[_vm._v("Gastos de envío:")])]),_vm._v(" "),_vm.order.shipping==0?_c("div",[_c("p",{staticClass:"text-danger ms-4"},[_vm._v("Gratis")])]):_c("div",[_c("p",{staticClass:"text-danger ms-4"},[_vm._v(_vm._s(_vm.order.shipping)+" €")])])]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between mt-2"},[_c("div",{staticClass:"me-2 fs-4 fw-bold"},[_vm._v("Total:")]),_vm._v(" "),_vm.order.shipping==0?_c("div",{staticStyle:{"font-size":"20px"}},[_vm._v(_vm._s((_vm.order.total*1.21).toFixed(2))+" €")]):_c("div",{staticStyle:{"font-size":"20px"}},[_vm._v(_vm._s((parseFloat(_vm.order.total)*1.21+parseFloat(_vm.order.shipping)).toFixed(2))+" €")])])])])])]),_vm._v(" "),_c("TheFooter")],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders/_id.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders/_id.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:true,components:{TheHeader:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheHeader */ "./components/TheHeader.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},data(){return{order:{},products:[],id:this.$route.params.id,users:[],user:{}};},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});this.getOrder();this.getUserName();},methods:{async getOrder(){await this.$axios.get('/api/orders/'+this.id).then(response=>{this.order=response.data.data;this.products=JSON.parse(this.order.products);}).catch(error=>{console.log(error);});},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},async getUserName(){await this.$axios.get('/api/users').then(response=>{this.users=response.data.data;}).catch(error=>{console.log(error);});},getName(order){let users=this.users;return users.filter(user=>{if(user.id==order.user_profile_id){return user;}}).map(user=>{this.user=user;const data=this.$auth.user.roles;const role=data.filter(role=>{if(role.name=='admin'){return role;}}).map(role=>{return role.name;}).toString();if(role!='admin'&&user.user_id!=this.$auth.user.id){return this.$router.push('/error');}return user.name+' '+user.lastname;}).toString();},getState(order){if(order.status==1){return'Recibido';}else if(order.status==2){return'Preparando';}else if(order.status==3){return'Enviado';}else if(order.status==4){return'Entregado';}else{return'Cancelado';}},getPaymentState(order){if(order.paid=='PENDIENTE'){return'Pendiente';}else if(order.paid=='PROCESANDO'){return'Procesando';}else if(order.paid=='PAGADO'){return'Pagado';}else if(order.paid=='RECHAZADO'){return'Rechazado';}else if(order.paid=='CONTRAREEMBOLSO'){return'Contra reembolso';}else if(order.paid=='TRANSFERENCIA'){return'Transferencia';}}}});

/***/ }),

/***/ "./pages/orders/_id.vue":
/*!******************************!*\
  !*** ./pages/orders/_id.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _id_vue_vue_type_template_id_4bf228c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_id.vue?vue&type=template&id=4bf228c9&scoped=true& */ "./pages/orders/_id.vue?vue&type=template&id=4bf228c9&scoped=true&");
/* harmony import */ var _id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_id.vue?vue&type=script&lang=js& */ "./pages/orders/_id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css& */ "./pages/orders/_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _id_vue_vue_type_template_id_4bf228c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _id_vue_vue_type_template_id_4bf228c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "4bf228c9",
  "38bb61d5"
  
)

component.options.__file = "pages/orders/_id.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/orders/_id.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./pages/orders/_id.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./_id.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders/_id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/orders/_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./pages/orders/_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4bf228c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-0!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-1-1!../../node_modules/vue-loader/lib??vue-loader-options!./_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css& */ "./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/orders/_id.vue?vue&type=style&index=0&id=4bf228c9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4bf228c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4bf228c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4bf228c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4bf228c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./pages/orders/_id.vue?vue&type=template&id=4bf228c9&scoped=true&":
/*!*************************************************************************!*\
  !*** ./pages/orders/_id.vue?vue&type=template&id=4bf228c9&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_4bf228c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./_id.vue?vue&type=template&id=4bf228c9&scoped=true& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/orders/_id.vue?vue&type=template&id=4bf228c9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_4bf228c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_4bf228c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;