exports.ids = ["pages/wishlist"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/wishlist.vue?vue&type=template&id=7764b8be&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/wishlist.vue?vue&type=template&id=7764b8be& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"cart-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container"}}),_vm._ssrNode(" "),_c("Breadcrumb",{attrs:{pageTitle:"lista de deseos"}}),_vm._ssrNode(" "),_vm._ssrNode('<div class="cart-main-area pt-90 pb-100">',"</div>",[_vm._ssrNode('<div class="container">',"</div>",[_vm.products.length>0?_vm._ssrNode('<div class="row">',"</div>",[_vm._ssrNode('<div class="col-12">',"</div>",[_vm._ssrNode('<h3 class="cart-page-title">Tu lista de deseos</h3> '),_vm._ssrNode('<div class="table-content table-responsive cart-table-content">',"</div>",[_vm._ssrNode("<table>","</table>",[_vm._ssrNode("<thead><tr><th>Imagen</th> <th>Producto</th> <th>Precio/Unidad</th> <th>Añadir al carrito</th> <th>Acción</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",[_c("client-only",_vm._l(_vm.products,function(product){return _c("tr",{key:product.id},[_c("td",{staticClass:"product-thumbnail"},[_c("n-link",{attrs:{to:`/product/${product.slug}`}},[product.images.length>0?_c("img",{attrs:{src:`https://api.trivicare.com/${product.images[0].path}`,alt:product.name}}):_c("img",{attrs:{src:__webpack_require__(/*! static/img/product/cosmetics/default.png */ "./static/img/product/cosmetics/default.png"),alt:product.name}})])],1),_vm._v(" "),_c("td",{staticClass:"product-name"},[_c("n-link",{attrs:{to:`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1),_vm._v(" "),_c("td",{staticClass:"product-price-cart"},[_c("span",{staticClass:"amount"},[_vm._v(_vm._s(_vm.discountedPrice(product).toFixed(2))+" €")]),_vm._v(" "),product.discount>0?_c("del",{staticClass:"old"},[_vm._v(_vm._s(product.price)+" €")]):_vm._e()]),_vm._v(" "),_c("td",{staticClass:"product-wishlist-cart"},[_c("button",{on:{click:function($event){return _vm.addToCart(product);}}},[_vm._v("añadir al carrito")])]),_vm._v(" "),_c("td",{staticClass:"product-remove"},[_c("button",{on:{click:function($event){return _vm.removeProductFromWishlist(product);}}},[_c("i",{staticClass:"fa fa-times"})])])]);}),0)],1)],2)])],2)]):_vm._ssrNode('<div class="row">',"</div>",[_vm._ssrNode('<div class="col-12">',"</div>",[_vm._ssrNode('<div class="empty-cart text-center">',"</div>",[_vm._ssrNode('<div class="icon"><i class="pe-7s-like"></i></div> <h4>No hay productos en tu lista de deseos</h4> '),_c("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[_vm._v("Añadir producto")])],2)])])])]),_vm._ssrNode(" "),_c("TheFooter")],2);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/wishlist.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/wishlist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,transition:{name:'fade',mode:'out-in'},components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},computed:{products(){return this.$store.getters.getWishlist;}},mounted(){var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();},methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Se ha actualizado la cantidad de producto'});}else{this.$notify({title:'Añadido al carrito!'});}this.$store.dispatch('addToCartItem',prod);},removeProductFromWishlist(product){// for notification
this.$notify({title:'Eliminado de la lista de deseos!'});this.$store.dispatch('removeProductFromWishlist',product);},discountedPrice(product){return product.price-product.price*product.discount/100;}},head(){return{title:"Lista de Deseos"};}});

/***/ }),

/***/ "./pages/wishlist.vue":
/*!****************************!*\
  !*** ./pages/wishlist.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wishlist_vue_vue_type_template_id_7764b8be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.vue?vue&type=template&id=7764b8be& */ "./pages/wishlist.vue?vue&type=template&id=7764b8be&");
/* harmony import */ var _wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.vue?vue&type=script&lang=js& */ "./pages/wishlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wishlist_vue_vue_type_template_id_7764b8be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wishlist_vue_vue_type_template_id_7764b8be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "49fe766c"
  
)

component.options.__file = "pages/wishlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/wishlist.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./pages/wishlist.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./wishlist.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/wishlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/wishlist.vue?vue&type=template&id=7764b8be&":
/*!***********************************************************!*\
  !*** ./pages/wishlist.vue?vue&type=template&id=7764b8be& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_template_id_7764b8be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./wishlist.vue?vue&type=template&id=7764b8be& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/wishlist.vue?vue&type=template&id=7764b8be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_template_id_7764b8be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_template_id_7764b8be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;