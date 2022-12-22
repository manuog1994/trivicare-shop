exports.ids = ["pages/product/product-affiliate"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/product/product-affiliate.vue?vue&type=template&id=2ebe9f26&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/product-affiliate.vue?vue&type=template&id=2ebe9f26& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"product-details-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container-fluid"}}),_vm._ssrNode(" "),_c("Breadcrumb",{attrs:{pageTitle:"product affiliate"}}),_vm._ssrNode(" "),_vm._ssrNode('<div class="shop-area pt-100 pb-100">',"</div>",[_vm._ssrNode('<div class="container">',"</div>",[_vm._ssrNode('<div class="row">',"</div>",[_vm._ssrNode('<div class="col-md-6">',"</div>",[_vm._ssrNode('<div class="product-details-slider">',"</div>",[_vm._ssrNode('<div class="product-details-img">',"</div>",[_vm._ssrNode('<div class="product-badges">'+(_vm.product.new?'<span class="product-label pink">New</span>':"<!---->")+" "+(_vm.product.discount?'<span class="product-label purple">'+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_c("swiper",{ref:"swiperTop",attrs:{options:_vm.swiperOptionTop}},[_c("div",{staticClass:"large-img swiper-slide"},[_c("nuxt-img",{staticClass:"img-fluid",attrs:{provider:"customProvider",src:"default.webp",alt:_vm.product.name}})],1),_vm._v(" "),_c("div",{staticClass:"quickview-nav swiper-button-prev"},[_c("i",{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c("div",{staticClass:"quickview-nav swiper-button-next"},[_c("i",{staticClass:"pe-7s-angle-right"})])]),_vm._ssrNode(" "),_c("swiper",{ref:"swiperThumbs",staticClass:"mt-2",attrs:{options:_vm.swiperOptionThumbs}},[_c("div",{staticClass:"thumb-img swiper-slide"},[_c("nuxt-img",{staticClass:"img-fluid",attrs:{provider:"customProvider",src:"default.webp",alt:_vm.product.name}})],1)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode('<div class="col-lg-6 col-md-6">',"</div>",[_vm._ssrNode('<div class="product-details-content ml-70">',"</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+'</h2> <div class="product-details-price"><span>'+_vm._ssrEscape("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))+"</span> "+(_vm.product.discount>0?'<span class="old">'+_vm._ssrEscape("$"+_vm._s(_vm.product.price))+"</span>":"<!---->")+'</div> <div class="pro-details-rating-wrap">'+(_vm.product.rating==5?'<div class="pro-details-rating"><i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i></div>':"<!---->")+" "+(_vm.product.rating==4?'<div class="pro-details-rating"><i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o"></i></div>':"<!---->")+" "+(_vm.product.rating==3?'<div class="pro-details-rating"><i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i></div>':"<!---->")+" "+(_vm.product.rating==2?'<div class="pro-details-rating"><i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i></div>':"<!---->")+" "+(_vm.product.rating==1?'<div class="pro-details-rating"><i class="fa fa-star-o yellow"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i></div>':"<!---->")+' <span><a href="#"> Reviews</a></span></div> <p>'+_vm._ssrEscape(_vm._s(_vm.product.description))+'</p> <div class="pro-details-cart mt-20 mb-20"><a href="https://www.amazon.com/" target="_blank" class="empty-cart__button">Buy Now</a></div> '),_vm._ssrNode('<div class="pro-details-meta">',"</div>",[_vm._ssrNode('<span class="label">Categoría:</span> '),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c("n-link",{attrs:{to:`/shop?category=${_vm.category}`}},[_vm._v(_vm._s(_vm.product.category))])],1)])],2),_vm._ssrNode(" "),_vm._ssrNode('<div class="pro-details-meta">',"</div>",[_vm._ssrNode('<span class="label">Tag:</span> '),_vm._ssrNode("<ul>","</ul>",[_c("client-only",_vm._l(_vm.product.tag,function(tag,index){return _c("li",{key:index},[_c("n-link",{attrs:{to:`/shop?tag=${tag}`}},[_vm._v(_vm._s(tag)+",")])],1);}),0)],1)],2),_vm._ssrNode(' <div class="pro-details-social"><ul><li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li> <li><a href="https://dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li> <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest-p"></i></a></li> <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li> <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a></li></ul></div>')],2)])],2)])]),_vm._ssrNode(" "),_c("ProductDetailsDescriptionReview"),_vm._ssrNode(" "),_c("TheFooter")],2);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/product-affiliate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/product-affiliate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({data(){return{singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},swiperOptionThumbs:{loop:true,spaceBetween:10,slidesPerView:4,freeMode:true,watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:true,loopedSlides:4// looped slides should be the same
}};},computed:{product(){return this.$store.getters.getProducts[1];}},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});this.$nextTick(()=>{const swiperTop=this.$refs.swiperTop.$swiper;const swiperThumbs=this.$refs.swiperThumbs.$swiper;swiperTop.controller.control=swiperThumbs;swiperThumbs.controller.control=swiperTop;});},methods:{addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){if(this.product.quantity>this.singleQuantity)this.singleQuantity++;},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);}},head(){return{title:"Product Affiliate"};}});

/***/ }),

/***/ "./pages/product/product-affiliate.vue":
/*!*********************************************!*\
  !*** ./pages/product/product-affiliate.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_affiliate_vue_vue_type_template_id_2ebe9f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-affiliate.vue?vue&type=template&id=2ebe9f26& */ "./pages/product/product-affiliate.vue?vue&type=template&id=2ebe9f26&");
/* harmony import */ var _product_affiliate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-affiliate.vue?vue&type=script&lang=js& */ "./pages/product/product-affiliate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_affiliate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_affiliate_vue_vue_type_template_id_2ebe9f26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_affiliate_vue_vue_type_template_id_2ebe9f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "0412ac9a"
  
)

component.options.__file = "pages/product/product-affiliate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/product/product-affiliate.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./pages/product/product-affiliate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_product_affiliate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./product-affiliate.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/product-affiliate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_product_affiliate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/product/product-affiliate.vue?vue&type=template&id=2ebe9f26&":
/*!****************************************************************************!*\
  !*** ./pages/product/product-affiliate.vue?vue&type=template&id=2ebe9f26& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_product_affiliate_vue_vue_type_template_id_2ebe9f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./product-affiliate.vue?vue&type=template&id=2ebe9f26& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/product/product-affiliate.vue?vue&type=template&id=2ebe9f26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_product_affiliate_vue_vue_type_template_id_2ebe9f26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_product_affiliate_vue_vue_type_template_id_2ebe9f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;