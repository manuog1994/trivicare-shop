exports.ids = ["pages/compare"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/compare.vue?vue&type=template&id=497a4c08&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/compare.vue?vue&type=template&id=497a4c08& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"compare-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container"}}),_vm._ssrNode(" "),_c("Breadcrumb",{attrs:{pageTitle:"compare"}}),_vm._ssrNode(" "),_vm._ssrNode('<div class="compare-page-wrapper pt-100 pb-100">',"</div>",[_vm._ssrNode('<div class="container">',"</div>",[_vm._ssrNode('<div class="row">',"</div>",[_vm._ssrNode('<div class="col-lg-12">',"</div>",[_vm.products.length>0?_vm._ssrNode('<div class="compare-page-content-wrap">',"</div>",[_vm._ssrNode('<div class="compare-table table-responsive">',"</div>",[_vm._ssrNode('<table class="table table-bordered mb-0">',"</table>",[_vm._ssrNode("<tbody>","</tbody>",[_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode('<td class="first-column">Product</td> '),_c("client-only",_vm._l(_vm.products,function(product,index){return _c("td",{key:index,staticClass:"product-image-title"},[_c("n-link",{staticClass:"image",attrs:{to:`/product/${product.slug}`}},[_c("nuxt-img",{staticClass:"img-fluid",attrs:{src:product.images[0],alt:product.name}})],1),_vm._v(" "),_c("h4",{staticClass:"title"},[_c("n-link",{attrs:{to:`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1)],1);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode('<td class="first-column">Description</td> '),_c("client-only",_vm._l(_vm.products,function(product,index){return _c("td",{key:index,staticClass:"pro-desc"},[_c("p",[_vm._v(_vm._s(product.description))])]);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode('<td class="first-column">Price</td> '),_c("client-only",_vm._l(_vm.products,function(product,index){return _c("td",{key:index,staticClass:"pro-price"},[_c("span",[_vm._v("$"+_vm._s(_vm.discountedPrice(product).toFixed(2)))]),_vm._v(" "),product.discount>0?_c("del",{staticClass:"old"},[_vm._v("$"+_vm._s(product.price.toFixed(2)))]):_vm._e()]);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode('<td class="first-column">Add to cart</td> '),_c("client-only",_vm._l(_vm.products,function(product,index){return _c("td",{key:index},[_c("button",{staticClass:"btn",on:{click:function($event){return _vm.addToCart(product);}}},[_vm._v("Add to Cart")])]);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode('<td class="first-column">Remove</td> '),_c("client-only",_vm._l(_vm.products,function(product,index){return _c("td",{key:index,staticClass:"pro-remove"},[_c("button",{on:{click:function($event){return _vm.removeFromCompare(product);}}},[_c("i",{staticClass:"fa fa-trash-o"})])]);}),0)],2)],2)])])]):_vm._ssrNode('<div class="empty-cart text-center">',"</div>",[_vm._ssrNode('<div class="icon"><i class="pe-7s-shuffle"></i></div> <h4>No items found in compare</h4> '),_c("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[_vm._v("Add Item")])],2)])])])]),_vm._ssrNode(" "),_c("TheFooter")],2);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/compare.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/compare.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},computed:{products(){return this.$store.getters.getCompare;}},mounted(){var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};},methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},removeFromCompare(product){// for notification
this.$notify({title:'Item remove from compare!'});this.$store.dispatch('removeFromCompare',product);},discountedPrice(product){return product.price-product.price*product.discount/100;}},head(){return{title:"Compare"};}});

/***/ }),

/***/ "./pages/compare.vue":
/*!***************************!*\
  !*** ./pages/compare.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_vue_vue_type_template_id_497a4c08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare.vue?vue&type=template&id=497a4c08& */ "./pages/compare.vue?vue&type=template&id=497a4c08&");
/* harmony import */ var _compare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare.vue?vue&type=script&lang=js& */ "./pages/compare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _compare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _compare_vue_vue_type_template_id_497a4c08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _compare_vue_vue_type_template_id_497a4c08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "95a1c720"
  
)

component.options.__file = "pages/compare.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/compare.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./pages/compare.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_compare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./compare.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/compare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_compare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/compare.vue?vue&type=template&id=497a4c08&":
/*!**********************************************************!*\
  !*** ./pages/compare.vue?vue&type=template&id=497a4c08& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_vue_vue_type_template_id_497a4c08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./compare.vue?vue&type=template&id=497a4c08& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/compare.vue?vue&type=template&id=497a4c08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_vue_vue_type_template_id_497a4c08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_vue_vue_type_template_id_497a4c08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;