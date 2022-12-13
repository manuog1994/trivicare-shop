exports.ids = [62,7,15,19,25,26,27,32,40];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductDetailsDescriptionReview.vue?vue&type=template&id=a27bf260&
var render=function render(){var _vm=this,_c=_vm._self._c;return _vm.product?_c('div',{staticClass:"description-review-area pb-90"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"description-review-wrapper\">","</div>",[_vm._ssrNode("<div class=\"description-review-topbar nav\"><a data-bs-toggle=\"tab\" href=\"#des-details1\">Información adicional</a> <a data-bs-toggle=\"tab\" href=\"#des-details2\" class=\"active\">Descripción</a> <a data-bs-toggle=\"tab\" href=\"#des-details3\">"+_vm._ssrEscape("Reviews ( "+_vm._s(_vm.product.reviews.length)+" )")+"</a></div> "),_vm._ssrNode("<div class=\"tab-content description-review-bottom\">","</div>",[_vm._ssrNode("<div id=\"des-details2\" class=\"tab-pane active\"><div class=\"product-description-wrapper\"><p>"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.product.specifications))+"</p></div></div> <div id=\"des-details1\" class=\"tab-pane\"><div class=\"product-anotherinfo-wrapper\"><ul><li><span>Peso</span>"+_vm._ssrEscape(_vm._s(_vm.product.weight))+"</li> <li><span>Dimensiones</span>"+_vm._ssrEscape(_vm._s(_vm.product.size))+"</li> <li><span>Materiales</span>"+_vm._ssrEscape(_vm._s(_vm.product.specifications))+"</li></ul></div></div> "),_vm._ssrNode("<div id=\"des-details3\" class=\"tab-pane\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-7\">","</div>",[_c('client-only',_vm._l(_vm.reviews,function(review){return _c('div',{key:'review-'+review.id,staticClass:"review-wrapper"},[_c('div',{staticClass:"single-review"},[_c('div',{staticClass:"review-img"},[_c('img',{attrs:{"src":"/img/testimonial/1.jpg","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"review-content"},[_c('div',{staticClass:"review-top-wrap"},[_c('div',{staticClass:"review-left"},[_c('div',{staticClass:"review-name"},[_c('h4',[_vm._v(_vm._s(review.user_name)+" "+_vm._s(review.user_lastname))])]),_vm._v(" "),_c('div',{staticClass:"review-rating"},[_c('vue-star-rating',{attrs:{"star-size":20,"read-only":true,"show-rating":false,"rating":review.rating}})],1)])]),_vm._v(" "),_c('div',{staticClass:"review-bottom"},[_c('p',[_vm._v(_vm._s(review.message))])]),_vm._v(" "),_vm.$auth.user&&_vm.$auth.user.id==review.user_id?_c('form',{on:{"submit":function($event){return _vm.deleteReview(review.id);}}},[_c('div',{staticClass:"review-delete"},[_c('button',{staticClass:"btn"},[_vm._v("Eliminar")])])]):_vm._e()])])]);}),0)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-5\">","</div>",[_vm.$auth.user?_vm._ssrNode("<div class=\"ratting-form-wrapper pl-50\">","</div>",[_vm._ssrNode("<h3>Añadir una valoración</h3> "),_vm._ssrNode("<div class=\"ratting-form\">","</div>",[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"star-box\">","</div>",[_vm._ssrNode("<span>Valoración:</span> "),_vm._ssrNode("<div class=\"ratting-star\">","</div>",[_c('vue-star-rating',{attrs:{"star-size":20},model:{value:_vm.rating,callback:function($$v){_vm.rating=$$v;},expression:"rating"}})],1)],2),_vm._ssrNode(" <div class=\"row\">"+(!_vm.$auth.user.user_profile[0]?"<div class=\"row\"><div class=\"col-md-6\"><div class=\"rating-form-style mb-10\"><input placeholder=\"Nombre\" type=\"text\" required=\"required\""+_vm._ssrAttr("value",_vm.user_name)+"></div></div> <div class=\"col-md-6\"><div class=\"rating-form-style mb-10\"><input placeholder=\"Apellidos\" type=\"text\" required=\"required\""+_vm._ssrAttr("value",_vm.user_lastname)+"></div></div></div>":"<!---->")+" <div class=\"col-md-12\"><form><div class=\"rating-form-style form-submit\"><textarea name=\"Your Review\" placeholder=\"Escribe aquí tu valoración...\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea> <button type=\"submit\" class=\"btn btn-light\">Enviar</button></div></form></div></div>")],2)])],2):_vm._e()])],2)])],2)],2)])]):_vm._e();};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ProductDetailsDescriptionReview.vue?vue&type=template&id=a27bf260&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/ProductDetailsDescriptionReview.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductDetailsDescriptionReviewvue_type_script_lang_js_ = ({props:['product','reviews'],data(){return{message:'',rating:0,user_name:'',user_lastname:''};},methods:{async createReview(){try{const response=await this.$axios.post('/api/reviews',{user_id:this.$auth.user.id,product_id:this.product.id,message:this.message,rating:this.rating,user_name:this.user_name,user_lastname:this.user_lastname});this.message='';this.rating=0;this.$notify({text:'Valoración creada correctamente',type:'success'});}catch(error){console.log(error);}},async deleteReview(review){try{const response=await this.$axios.delete('/api/reviews/'+review);this.$notify({text:'Valoración eliminada correctamente',type:'success'});}catch(error){console.log(error);}}}});
// CONCATENATED MODULE: ./components/ProductDetailsDescriptionReview.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductDetailsDescriptionReviewvue_type_script_lang_js_ = (ProductDetailsDescriptionReviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ProductDetailsDescriptionReview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductDetailsDescriptionReviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c7a49284"
  
)

/* harmony default export */ var ProductDetailsDescriptionReview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/product-affiliate.vue?vue&type=template&id=52db744c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-details-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"product affiliate"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shop-area pt-100 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-slider\">","</div>",[_vm._ssrNode("<div class=\"product-details-img\">","</div>",[_vm._ssrNode("<div class=\"product-badges\">"+(_vm.product.new?"<span class=\"product-label pink\">New</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_c('swiper',{ref:"swiperTop",attrs:{"options":_vm.swiperOptionTop}},[_c('div',{staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(87),"alt":_vm.product.name}})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])]),_vm._ssrNode(" "),_c('swiper',{ref:"swiperThumbs",staticClass:"mt-2",attrs:{"options":_vm.swiperOptionThumbs}},[_c('div',{staticClass:"thumb-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(87),"alt":_vm.product.name}})])])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-content ml-70\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <div class=\"product-details-price\"><span>"+_vm._ssrEscape("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price))+"</span>":"<!---->")+"</div> <div class=\"pro-details-rating-wrap\">"+(_vm.product.rating==5?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i></div>":"<!---->")+" "+(_vm.product.rating==4?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==3?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==2?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==1?"<div class=\"pro-details-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" <span><a href=\"#\"> Reviews</a></span></div> <p>"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</p> <div class=\"pro-details-cart mt-20 mb-20\"><a href=\"https://www.amazon.com/\" target=\"_blank\" class=\"empty-cart__button\">Buy Now</a></div> "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">Categoría:</span> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?category=${_vm.category}`}},[_vm._v(_vm._s(_vm.product.category))])],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">Tag:</span> "),_vm._ssrNode("<ul>","</ul>",[_c('client-only',_vm._l(_vm.product.tag,function(tag,index){return _c('li',{key:index},[_c('n-link',{attrs:{"to":`/shop?tag=${tag}`}},[_vm._v(_vm._s(tag)+",")])],1);}),0)],1)],2),_vm._ssrNode(" <div class=\"pro-details-social\"><ul><li><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li> <li><a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fa fa-dribbble\"></i></a></li> <li><a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fa fa-pinterest-p\"></i></a></li> <li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li> <li><a href=\"https://www.linkedin.com/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li></ul></div>")],2)])],2)])]),_vm._ssrNode(" "),_c('ProductDetailsDescriptionReview'),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/product/product-affiliate.vue?vue&type=template&id=52db744c&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/product/product-affiliate.vue?vue&type=script&lang=js&
/* harmony default export */ var product_affiliatevue_type_script_lang_js_ = ({data(){return{singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},swiperOptionThumbs:{loop:true,spaceBetween:10,slidesPerView:4,freeMode:true,watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:true,loopedSlides:4// looped slides should be the same
}};},computed:{product(){return this.$store.getters.getProducts[1];}},mounted(){this.$nextTick(()=>{const swiperTop=this.$refs.swiperTop.$swiper;const swiperThumbs=this.$refs.swiperThumbs.$swiper;swiperTop.controller.control=swiperThumbs;swiperThumbs.controller.control=swiperTop;});},methods:{addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){if(this.product.quantity>this.singleQuantity)this.singleQuantity++;},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);}},head(){return{title:"Product Affiliate"};}});
// CONCATENATED MODULE: ./pages/product/product-affiliate.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_product_affiliatevue_type_script_lang_js_ = (product_affiliatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/product/product-affiliate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_product_affiliatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4568ca84"
  
)

/* harmony default export */ var product_affiliate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(85).default,Breadcrumb: __webpack_require__(83).default,ProductDetailsDescriptionReview: __webpack_require__(101).default,TheFooter: __webpack_require__(82).default})


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.78fea7b.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ResponsiveMobileMenu.vue?vue&type=template&id=55e40ce8&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"mobile-menu"},[_c('client-only',_vm._l(_vm.menus,function(link,i){return _c('li',{key:i},[_c('n-link',{attrs:{"to":link.url}},[_vm._v("\n                "+_vm._s(link.title)+"\n            ")]),_vm._v(" "),link.submenu?_c('span',{staticClass:"submenu-toggle"},[_c('i',{staticClass:"pe-7s-angle-down"})]):_vm._e(),_vm._v(" "),link.submenu?_c('ul',{staticClass:"submenu"},[_c('client-only',_vm._l(link.submenu,function(link,i){return _c('li',{key:i,staticClass:"title"},[_c('n-link',{attrs:{"to":link.url}},[_vm._v(" "+_vm._s(link.title)+" ")]),_vm._v(" "),link.submenu?_c('span',{staticClass:"submenu-toggle"},[_c('i',{staticClass:"pe-7s-angle-down"})]):_vm._e(),_vm._v(" "),link.submenu?_c('ul',{staticClass:"submenu"},[_c('client-only',_vm._l(link.submenu,function(link,i){return _c('li',{key:i},[_c('n-link',{attrs:{"to":link.url}},[_vm._v(" "+_vm._s(link.title)+" ")])],1);}),0)],1):_vm._e()],1);}),0)],1):_vm._e()],1);}),0)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue?vue&type=template&id=55e40ce8&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/ResponsiveMobileMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var ResponsiveMobileMenuvue_type_script_lang_js_ = ({data(){return{menus:[{url:'/',title:'Home'},{url:'/shop',title:'Ver Todo'},{url:'/shop',title:'Facial'},{url:'/shop',title:'Hidratante'},{url:'/shop',title:'Corporal'},{url:'/shop',title:'Accesorios'},{url:'/contact',title:'Contacto'}]};},mounted(){let getSiblings=function(e){let siblings=[];if(!e.parentNode){return siblings;}let sibling=e.parentNode.firstChild;while(sibling){if(sibling.nodeType===1&&sibling!==e){siblings.push(sibling);}sibling=sibling.nextSibling;}return siblings;};const subMenuToggle=document.querySelectorAll('.submenu-toggle');subMenuToggle.forEach(function(btn){btn.addEventListener('click',function(){if(!this.classList.contains('active')){this.classList.add('active');this.nextElementSibling.classList.add('active');this.closest('li').classList.add('active');getSiblings(this.closest('li')).forEach(function(item){item.classList.remove('active');item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child){child.classList.remove('active');});});}else{this.closest('li').classList.remove('active');this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child){child.classList.remove('active');});}});});}});
// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ResponsiveMobileMenuvue_type_script_lang_js_ = (ResponsiveMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ResponsiveMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55e40ce8",
  "b15bc230"
  
)

/* harmony default export */ var ResponsiveMobileMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=4e698e08&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('ul',[_c('li',[_c('a',{staticClass:"link-nav",on:{"click":function($event){$event.preventDefault();return _vm.redirectHome.apply(null,arguments);}}},[_vm._v("Ver Todo")])]),_vm._v(" "),_vm._l(_vm.categories,function(category){return _c('li',{key:category.id},[_c('a',{staticClass:"link-nav",on:{"click":function($event){$event.preventDefault();_vm.categoryId=category.slug;}}},[_vm._v(_vm._s(category.name))])]);}),_vm._v(" "),_c('li',[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contacto")])],1)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=4e698e08&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Navigation.vue?vue&type=script&lang=js&
/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({data(){return{categoryId:''};},computed:{categories(){return this.$store.getters.getCategories;}},created(){this.getCategories();},methods:{getCategories(){this.$store.dispatch('getCategories');},redirectHome(){this.categoryId='';this.$router.push({path:'/shop'});}},watch:{categoryId(){this.$router.push({path:'/shop',query:{category:this.categoryId}});}}});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Navigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ec624572"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MiniCart.vue?vue&type=template&id=168b4b66&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"minicart-wrapper",class:_vm.miniCart},[_vm.products.length>0?_c('div',{staticClass:"shopping-cart-content"},[_c('ul',[_c('client-only',_vm._l(_vm.products,function(product){return _c('li',{key:product.id,staticClass:"single-shopping-cart"},[_c('div',{staticClass:"shopping-cart-img"},[_c('n-link',{attrs:{"to":`/product/${product.slug}`}},[product.images.length>0?_c('img',{attrs:{"src":`http://localhost:8000/${product.images[0].path}`,"alt":product.name}}):_c('img',{attrs:{"src":__webpack_require__(74),"alt":product.name}})])],1),_vm._v(" "),_c('div',{staticClass:"shopping-cart-title"},[_c('h4',[_c('n-link',{attrs:{"to":`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1),_vm._v(" "),_c('h6',[_vm._v("Cant: "+_vm._s(product.cartQuantity))]),_vm._v(" "),_c('span',[_vm._v(_vm._s((_vm.discountedPrice(product)*1.21).toFixed(2))+" €")])]),_vm._v(" "),_c('div',{staticClass:"shopping-cart-delete"},[_c('button',{on:{"click":function($event){return _vm.removeProduct(product);}}},[_c('i',{staticClass:"fa fa-times-circle"})])])]);}),0)],1),_vm._v(" "),_c('div',{staticClass:"shopping-cart-total"},[_c('h4',[_vm._v("Total : "),_c('span',{staticClass:"shop-total"},[_vm._v(_vm._s((_vm.total*1.21).toFixed(2))+" €")])])]),_vm._v(" "),_c('div',{staticClass:"shopping-cart-btn btn-hover text-center",on:{"click":function($event){return _vm.$emit('minicartClose');}}},[_c('n-link',{staticClass:"default-btn",attrs:{"to":"/cart"}},[_vm._v("ver carrito")]),_vm._v(" "),_c('n-link',{staticClass:"default-btn",attrs:{"to":"/checkout"}},[_vm._v("comprar ahora")])],1)]):_c('div',{staticClass:"shopping-cart-content text-center"},[_c('p',[_vm._v("No hay productos en el carrito")])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/MiniCart.vue?vue&type=template&id=168b4b66&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/MiniCart.vue?vue&type=script&lang=js&
/* harmony default export */ var MiniCartvue_type_script_lang_js_ = ({props:["miniCart"],computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}},methods:{removeProduct(product){// for notification
this.$notify({title:'Producto eliminado'});this.$store.dispatch('removeProductFromCart',product);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;}}});
// CONCATENATED MODULE: ./components/MiniCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MiniCartvue_type_script_lang_js_ = (MiniCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/MiniCart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MiniCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1863148a"
  
)

/* harmony default export */ var MiniCart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=9252cf06&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"offcanvas-mobile-menu-wrapper"},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"mobile-menu-inner\">","</div>",[_vm._ssrNode("<button class=\"close-btn\"><i class=\"pe-7s-close\"></i></button> "),_vm._ssrNode("<div class=\"mobile-menu-inner-wrapper\">","</div>",[_vm._ssrNode("<div class=\"offcanvas-body-inner\">","</div>",[_vm._ssrNode("<div class=\"menu-navigation\">","</div>",[_c('ResponsiveMobileMenu')],1)])])],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=9252cf06&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({components:{ResponsiveMobileMenu:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 77))}});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d89efaf6"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ResponsiveMobileMenu: __webpack_require__(77).default})


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=d54db5de&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{staticClass:"footer-area bg-gray pt-100 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo-footer.png","alt":"logo"}})])],1),_vm._ssrNode(" <p>© 2022 <a href=\"#\" target=\"_blank\">TriviCare Natural Cosmetics.</a><br> Todos los derechos reservados.</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-30\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>SOBRE NOSOTROS</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Sobre nosotros")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Puntos de venta")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contacto")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Seguimiento de envío")])],1)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-50\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>LINKS PARA EL COMPRADOR</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Devoluciones")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Política de envío")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Alérgenos")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Preguntas Frecuentes")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-2 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>SIGUENOS</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/trivicare\" target=\"_blank\">Facebook</a></li> <li><a href=\"https://www.instagram.com/trivicare\" target=\"_blank\">Instagram</a></li> <li><a href=\"https://www.tiktok.com/@trivicare\" target=\"_blank\">TikTok</a></li></ul></div></div></div> <div class=\"col-lg-4 col-sm-6\"><div class=\"footer-widget mb-30 ml-70\"><div class=\"footer-title\"><h3>SUSCRÍBETE</h3></div> <div class=\"subscribe-style\"><p>Recibe por email ofertas y nuestras últimas novedades.</p> <div class=\"subscribe-form\"><form class=\"mc-form\"><input type=\"email\" required=\"required\" placeholder=\"Introduce tu email...\" name=\"email\" class=\"email\"> <button type=\"submit\" name=\"subscribe\" class=\"button\">Suscribirse</button></form></div></div></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=d54db5de&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({methods:{async subscribeForm(){const formData=new FormData(this.$refs.form);await this.$axios.post('/api/newsletter',formData).then(response=>{//console.log(response);
this.$notify({title:'Gracias por suscribirte, pronto recibirás nuestras novedades.'});}).catch(error=>{//console.log(error);
});}}});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4db31c09"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=966ced50&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-content text-center\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Inicio")])],1),_vm._ssrNode(" <li class=\"active\">"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</li>")],2)])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=966ced50&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({props:["pageTitle"]});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da651894"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=00c67024&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area\" data-v-00c67024>","</header>",[_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+" data-v-00c67024>","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-00c67024>","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo-2.png","alt":"trivicare logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"main-menu\" data-v-00c67024>","</div>",[_vm._ssrNode("<nav data-v-00c67024>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"same-style d-none d-lg-block me-2\" data-v-00c67024>","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('i',{staticClass:"fa fa-home"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\" data-v-00c67024>","</div>",[_vm._ssrNode("<button class=\"account-setting-active\" data-v-00c67024><i class=\"pe-7s-user-female\" data-v-00c67024></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+" data-v-00c67024>","</div>",[_vm.role=='admin'?_vm._ssrNode("<ul data-v-00c67024>","</ul>",[_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/crud"}},[_vm._v("PCD")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("Mi Perfil")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Mis pedidos")])],1),_vm._ssrNode(" <li data-v-00c67024><a data-v-00c67024>Cerrar sesión</a></li>")],2):_vm.$auth.user?_vm._ssrNode("<ul data-v-00c67024>","</ul>",[_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("Mi Perfil")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Mis pedidos")])],1),_vm._ssrNode(" <li data-v-00c67024><a data-v-00c67024>Cerrar sesión</a></li>")],2):_vm._ssrNode("<ul data-v-00c67024>","</ul>",[_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/login"}},[_vm._v("Iniciar sesión/Registrar")])],1)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\" data-v-00c67024>","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\" data-v-00c67024>"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\" data-v-00c67024>","</div>",[_vm._ssrNode("<button class=\"icon-cart\" data-v-00c67024><i class=\"pe-7s-shopbag\" data-v-00c67024></i> <span class=\"count-style\" data-v-00c67024>"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\" data-v-00c67024><button class=\"mobile-aside-button\" data-v-00c67024><i class=\"pe-7s-menu\" data-v-00c67024></i></button></div>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block background-color-banner\" data-v-00c67024>","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"header-top-inner\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"header-offer m-auto\" data-v-00c67024>","</div>",[_c('vue-typer',{staticClass:"custom-two",attrs:{"text":"Envío gratis a partir de 50 €","repeat":0}})],1)])])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=00c67024&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
/* harmony default export */ var HeaderWithTopbarvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 79)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 80))},props:['containerClass','msg'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false,categories:[],categoryFilter:'',role:''};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});this.getCategories();this.getRoles();},watch:{father(){this.$emit("father",this.father);},categoryFilter(){this.$emit("categoryFilter",this.categoryFilter);}},methods:{async logout(){await this.$auth.logout();window.location.reload();this.$notify({title:'Has cerrado sesión!'});},async getCategories(){const response=await this.$axios.get('/api/categories');this.categories=response.data.data;},redirectToShop(){this.$router.push('/shop');},categoryId(value){this.$emit("categoryFilter",value);},getRoles(){if(this.$auth.user){const roles=this.$auth.user.roles;if(roles!=null){roles.map(role=>{this.role=role.name;});}else{this.role='';}}}}});
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderWithTopbarvue_type_script_lang_js_ = (HeaderWithTopbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00c67024",
  "7c221de4"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(79).default,MiniCart: __webpack_require__(80).default,OffCanvasMobileMenu: __webpack_require__(81).default})


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.f664e24.jpg";

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_a27bf260_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_a27bf260_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_a27bf260_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_a27bf260_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_a27bf260_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;