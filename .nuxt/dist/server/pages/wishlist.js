exports.ids = ["pages/wishlist"];
exports.modules = {

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("transition",{attrs:{name:_vm.transition}},[_vm.show?_c("div",{staticClass:"cookie-consent",attrs:{role:"dialog"}},[_vm._t("message",function(){return[_c("span",{staticClass:"cookie-consent-message"},[_vm._v("\n        "+_vm._s(_vm.message)+"\n        "),_vm._t("link",function(){return[_c("a",_vm._b({staticClass:"cookie-consent-link",attrs:{role:"button"}},"a",{href:_vm.href,target:_vm.target,rel:_vm.rel},false),[_vm._v("\n            "+_vm._s(_vm.linkLabel)+"\n          ")])];})],2)];}),_vm._v(" "),_c("section",{on:{click:_vm.dismiss}},[_vm._t("button",function(){return[_c("button",{staticClass:"cookie-consent-compliance",attrs:{type:"button"}},[_vm._v("\n          "+_vm._s(_vm.buttonLabel)+"\n        ")])];})],2)],2):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

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
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"cart-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container-fluid"}}),_vm._ssrNode(" "),_c("Breadcrumb",{attrs:{pageTitle:"lista de deseos"}}),_vm._ssrNode(" "),_vm._ssrNode('<div class="cart-main-area pt-90 pb-100">',"</div>",[_vm._ssrNode('<div class="container">',"</div>",[_vm.products.length>0?_vm._ssrNode('<div class="row">',"</div>",[_vm._ssrNode('<div class="col-12">',"</div>",[_vm._ssrNode('<h3 class="cart-page-title">Tu lista de deseos</h3> '),_vm._ssrNode('<div class="table-content table-responsive cart-table-content">',"</div>",[_vm._ssrNode("<table>","</table>",[_vm._ssrNode("<thead><tr><th>Imagen</th> <th>Producto</th> <th>Precio/Unidad</th> <th>Añadir al carrito</th> <th>Acción</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",[_c("client-only",_vm._l(_vm.products,function(product){return _c("tr",{key:product.id},[_c("td",{staticClass:"product-thumbnail"},[_c("n-link",{attrs:{to:`/product/${product.slug}`}},[product.images.length>0?_c("nuxt-img",{attrs:{provider:"customProvider",src:product.images[0].path,alt:product.name}}):_c("nuxt-img",{attrs:{provider:"customProvider",src:"default.webp",alt:product.name}})],1)],1),_vm._v(" "),_c("td",{staticClass:"product-name"},[_c("n-link",{attrs:{to:`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1),_vm._v(" "),_c("td",{staticClass:"product-price-cart"},[_c("span",{staticClass:"amount"},[_vm._v(_vm._s(_vm.discountedPrice(product).toFixed(2))+" €")]),_vm._v(" "),product.discount>0?_c("del",{staticClass:"old"},[_vm._v(_vm._s(product.price)+" €")]):_vm._e()]),_vm._v(" "),_c("td",{staticClass:"product-wishlist-cart"},[_c("button",{attrs:{title:"Añadir al carrito"},on:{click:function($event){return _vm.addToCart(product);}}},[_vm._v("añadir al carrito")])]),_vm._v(" "),_c("td",{staticClass:"product-remove"},[_c("button",{attrs:{title:"Eliminar de la lista de deseos"},on:{click:function($event){return _vm.removeProductFromWishlist(product);}}},[_c("i",{staticClass:"fa fa-times"})])])]);}),0)],1)],2)])],2)]):_vm._ssrNode('<div class="row">',"</div>",[_vm._ssrNode('<div class="col-12">',"</div>",[_vm._ssrNode('<div class="empty-cart text-center">',"</div>",[_vm._ssrNode('<div class="icon"><i class="pe-7s-like"></i></div> <h4>No hay productos en tu lista de deseos</h4> '),_c("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[_vm._v("Añadir producto")])],2)])])])]),_vm._ssrNode(" "),_c("TheFooter"),_vm._ssrNode(" "),_c("VueIfBot",[_c("CookieConsent",[_c("template",{slot:"message"},[_c("span",[_vm._v("\n                    Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra \n                    "),_c("a",{staticClass:"text-info",attrs:{href:"/privacy-policy"}},[_vm._v("Política de Cookies")]),_vm._v(".\n                ")])]),_vm._v(" "),_c("template",{slot:"button"},[_c("button",{staticClass:"btn border-1"},[_vm._v("Aceptar")])])],2)],1)],2);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({name:'CookieConsent',props:{// default
transition:{type:String,default:'cookie-consent-transition'},message:{type:String,default:'This website uses cookies to ensure you get the best experience on our website.'},// button
linkLabel:{type:String,default:'Learn more'},buttonLabel:{type:String,default:'Got it!'},href:{type:String,default:'http://cookiesandyou.com'},target:{type:String,default:'_blank'},rel:{type:String,default:'noopener'},// cookie
cookieName:{type:String,default:'cookieconsent_status'},cookiePath:{type:String,default:'/'},cookieDomain:{type:String,default:''},cookieExpiryDays:{type:Number,default:365}},data(){return{show:undefined};},computed:{cookie(){return!this.getCookie(this.cookieName);}},beforeMount(){this.show=this.cookie;},methods:{dismiss(){this.show=false;this.setCookie(this.cookieName,1,this.cookieExpiryDays,this.cookieDomain,this.cookiePath);},getCookie(name){const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);return parts.length!==2?undefined:parts.pop().split(';').shift();},setCookie(name,value,expiryDays,domain,path){const exdate=new Date();exdate.setDate(exdate.getDate()+(expiryDays||365));const cookie=[`${name}=${value}`,`expires=${exdate.toUTCString()}`,`path=${path||'/'}`];if(domain){cookie.push(`domain=${domain}`);}document.cookie=cookie.join(';');}}});

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/wishlist.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/wishlist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cookieconsent_component_src_components_CookieConsent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cookieconsent-component/src/components/CookieConsent.vue */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue");
/* harmony import */ var vue_if_bot_dist_vue_if_bot_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-if-bot/dist/vue-if-bot.es */ "./node_modules/vue-if-bot/dist/vue-if-bot.es.js");
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue")),CookieConsent: vue_cookieconsent_component_src_components_CookieConsent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],VueIfBot: vue_if_bot_dist_vue_if_bot_es__WEBPACK_IMPORTED_MODULE_1__["default"]},computed:{products(){return this.$store.getters.getWishlist;}},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();},methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Se ha actualizado la cantidad de producto'});}else{this.$notify({title:'Añadido al carrito!'});}this.$store.dispatch('addToCartItem',prod);},removeProductFromWishlist(product){// for notification
this.$notify({title:'Eliminado de la lista de deseos!'});this.$store.dispatch('removeProductFromWishlist',product);},discountedPrice(product){return product.price-product.price*product.discount/100;}},head(){return{title:"Lista de Deseos"};}});

/***/ }),

/***/ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieConsent.vue?vue&type=template&id=227b1abf& */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&");
/* harmony import */ var _CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieConsent.vue?vue&type=script&lang=js& */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "2d20c586"
  
)

component.options.__file = "node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_babel_loader_lib_index_js_ref_4_0_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../../babel-loader/lib??ref--4-0!../../../vue-loader/lib??vue-loader-options!./CookieConsent.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_babel_loader_lib_index_js_ref_4_0_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_4_0_vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../babel-loader/lib??ref--4-0!../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../vue-loader/lib??vue-loader-options!./CookieConsent.vue?vue&type=template&id=227b1abf& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _babel_loader_lib_index_js_ref_4_0_vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _babel_loader_lib_index_js_ref_4_0_vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-if-bot/dist/vue-if-bot.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-if-bot/dist/vue-if-bot.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index={functional:true,render:function render(h,_ref){var children=_ref.children,slots=_ref.slots,_ref$props=_ref.props,regex=_ref$props.regex,invert=_ref$props.invert;var dummyEl=h('div',{},[]);if(true){return dummyEl;}var botRegex=regex||/bot|googlebot|crawler|spider|robot|crawling/i;var isBot=navigator.userAgent&&botRegex.test(navigator.userAgent);var shouldShow=invert?isBot:!isBot;if(!shouldShow){return dummyEl;}return h('div',{},slots().default);}};/* harmony default export */ __webpack_exports__["default"] = (index);

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