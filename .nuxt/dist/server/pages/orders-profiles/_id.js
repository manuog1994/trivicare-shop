exports.ids = ["pages/orders-profiles/_id"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/orders-profiles/_id.vue?vue&type=template&id=16229e94&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/orders-profiles/_id.vue?vue&type=template&id=16229e94& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_vm.role=="admin"?_c("div",{staticClass:"shop-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container"}}),_vm._v(" "),_c("Breadcrumb",{attrs:{pageTitle:"Pedidos"}}),_vm._v(" "),_c("div",{staticClass:"container login-register-area pt-100 pb-100"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12"},[_c("table",{staticClass:"table"},[_c("thead",[_c("tr",[_c("th",{attrs:{scope:"col"}},[_vm._v("#")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Nombre")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Estado Pago")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Estado Pedido")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Fecha")]),_vm._v(" "),_c("th",{attrs:{scope:"col"}},[_vm._v("Acciones")])])]),_vm._v(" "),_vm.orders.length>0?_c("tbody",_vm._l(_vm.orders,function(order){return _c("tr",{key:order.id},[_c("th",{attrs:{scope:"row"}},[_vm._v(_vm._s(order.id))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.getName(order)))]),_vm._v(" "),order.paid==1?_c("td",[_vm._v("Pendiente")]):_vm._e(),_vm._v(" "),order.paid==2?_c("td",[_vm._v("En Proceso")]):_vm._e(),_vm._v(" "),order.paid==3?_c("td",[_vm._v("Pagado")]):_vm._e(),_vm._v(" "),order.paid==4?_c("td",[_vm._v("Rechazado")]):_vm._e(),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.getState(order)))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(order.order_date))]),_vm._v(" "),_c("td",[_c("n-link",{staticClass:"btn btn-primary",attrs:{to:`/orders/${order.id}`}},[_c("i",{staticClass:"pe-7s-look"})]),_vm._v(" "),order.paid==3&&order.invoice!=null?_c("a",{staticClass:"btn btn-warning",on:{click:function($event){$event.preventDefault();return _vm.getUrl(order);}}},[_c("i",{staticClass:"pe-7s-download"})]):_vm._e()],1)]);}),0):_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"6"}},[_vm._v("No tiene pedidos.")])])])]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-center mt-5"},[_c("nav",{attrs:{"aria-label":"..."}},[_c("ul",{staticClass:"pagination-custom"},[_c("client-only",_vm._l(_vm.pagination.links,function(pagination_link){return _c("li",{key:"pagination_link-"+pagination_link.label,staticClass:"page-link-custom",class:{disabled:pagination_link.url==null,active:pagination_link.active==true}},[_c("a",{staticClass:"page-link",staticStyle:{cursor:"pointer"},domProps:{innerHTML:_vm._s(pagination_link.label)},on:{click:function($event){$event.preventDefault();return _vm.changePage(pagination_link.url);}}})]);}),0)],1)])])])])]),_vm._v(" "),_c("TheFooter")],1):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-profiles/_id.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-profiles/_id.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:true,components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},data(){return{orders:'',pagination:{},id:this.$route.params.id,role:''};},head(){return{title:'Mis Pedidos'};},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});this.getOrder();this.getRoles();},computed:{page(){var _this$$route$query$pa;let page=(_this$$route$query$pa=this.$route.query.page)!==null&&_this$$route$query$pa!==void 0?_this$$route$query$pa:1;if(page>this.pagination.last_page){this.$router.replace({query:{page:this.pagination.last_page}});this.$router.push();return this.pagination.last_page;}return page;}},watch:{page(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getOrder();},500);}},methods:{async getOrder(){await this.$axios.get('/api/orders?perPage=10&page='+this.page+'&sort=-id&filter[user_id]='+this.id).then(response=>{this.orders=response.data.data;const paginations=response.data;this.pagination={links:paginations['meta'].links,current_page:paginations['meta'].current_page,last_page:paginations['meta'].last_page};}).catch(error=>{console.log(error);});},changePage(url){this.$router.replace({query:{page:url.split('page=')[1]}});},getState(order){if(order.status==1){return'Recibido';}else if(order.status==2){return'Preparando';}else if(order.status==3){return'Enviado';}else if(order.status==4){return'Entregado';}else if(order.status==5){return'Cancelado';}},getName(order){let profiles=order.user.user_profile;return profiles.filter(profile=>{return profile;}).map(profile=>{return profile.name+' '+profile.lastname;}).toString();},getRoles(){const roles=this.$auth.user.roles;roles.map(role=>{this.role=role.name;});if(this.role!='admin'){this.$router.push('/error');}},async getUrl(order){let FileDownload=__webpack_require__(/*! js-file-download */ "js-file-download");await this.$axios.get('/api/invoices/'+order.invoice.id,{responseType:'blob'}).then(response=>{FileDownload(response.data,order.invoice.filename);});}}});

/***/ }),

/***/ "./pages/orders-profiles/_id.vue":
/*!***************************************!*\
  !*** ./pages/orders-profiles/_id.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _id_vue_vue_type_template_id_16229e94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_id.vue?vue&type=template&id=16229e94& */ "./pages/orders-profiles/_id.vue?vue&type=template&id=16229e94&");
/* harmony import */ var _id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_id.vue?vue&type=script&lang=js& */ "./pages/orders-profiles/_id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _id_vue_vue_type_template_id_16229e94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _id_vue_vue_type_template_id_16229e94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "491ad308"
  
)

component.options.__file = "pages/orders-profiles/_id.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/orders-profiles/_id.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./pages/orders-profiles/_id.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./_id.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-profiles/_id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/orders-profiles/_id.vue?vue&type=template&id=16229e94&":
/*!**********************************************************************!*\
  !*** ./pages/orders-profiles/_id.vue?vue&type=template&id=16229e94& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_16229e94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./_id.vue?vue&type=template&id=16229e94& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/orders-profiles/_id.vue?vue&type=template&id=16229e94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_16229e94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_16229e94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;