exports.ids = [53,7,8,20,22,25,26,27,35,37,38,40];
exports.modules = {

/***/ 100:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=e42260b4&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header"+_vm._ssrClass("header-area header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+" data-v-e42260b4>","</header>",[_vm._ssrNode("<div class=\"container-fluid\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-e42260b4>","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"main-menu\" data-v-e42260b4>","</div>",[_vm._ssrNode("<nav data-v-e42260b4>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\" data-v-e42260b4>","</div>",[_vm._ssrNode("<button class=\"account-setting-active\" data-v-e42260b4><i class=\"pe-7s-user-female\" data-v-e42260b4></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+" data-v-e42260b4>","</div>",[_vm.role=='admin'?_vm._ssrNode("<ul data-v-e42260b4>","</ul>",[_vm._ssrNode("<li data-v-e42260b4>","</li>",[_c('n-link',{attrs:{"to":"/crud"}},[_vm._v("PCD")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-e42260b4>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("Mi Perfil")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-e42260b4>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Mis pedidos")])],1),_vm._ssrNode(" <li data-v-e42260b4><a data-v-e42260b4>Cerrar sesión</a></li>")],2):_vm.$auth.user?_vm._ssrNode("<ul data-v-e42260b4>","</ul>",[_vm._ssrNode("<li data-v-e42260b4>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("Mi Perfil")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-e42260b4>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Mis pedidos")])],1),_vm._ssrNode(" <li data-v-e42260b4><a data-v-e42260b4>Cerrar sesión</a></li>")],2):_vm._ssrNode("<ul data-v-e42260b4>","</ul>",[_vm._ssrNode("<li data-v-e42260b4>","</li>",[_c('n-link',{attrs:{"to":"/login"}},[_vm._v("Iniciar sesión/Registrar")])],1)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\" data-v-e42260b4>","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\" data-v-e42260b4>"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\" data-v-e42260b4>","</div>",[_vm._ssrNode("<button class=\"icon-cart\" data-v-e42260b4><i class=\"pe-7s-shopbag\" data-v-e42260b4></i> <span class=\"count-style\" data-v-e42260b4>"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\" data-v-e42260b4><button class=\"mobile-aside-button\" data-v-e42260b4><i class=\"pe-7s-menu\" data-v-e42260b4></i></button></div>")],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block background-color-banner\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"header-top-inner\" data-v-e42260b4>","</div>",[_vm._ssrNode("<div class=\"header-offer m-auto\" data-v-e42260b4>","</div>",[_c('vue-typer',{staticClass:"custom-two",attrs:{"text":"Envío gratis a partir de 50 €","repeat":0}})],1)])])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=e42260b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/TheHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({auth:false,components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 79)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 80))},computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false,role:''};},beforeMount(){this.$root.$on('message',data=>{this.msg=data;});},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});this.getRoles();},methods:{async logout(){await this.$auth.logout();window.location.reload();this.$notify({title:'Has cerrado sesión!'});},getRoles(){if(this.$auth.user){const roles=this.$auth.user.roles;if(roles!=null){roles.map(role=>{this.role=role.name;});}else{this.role='';}}}}});
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TheHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e42260b4",
  "6ee57ffb"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(79).default,MiniCart: __webpack_require__(80).default,OffCanvasMobileMenu: __webpack_require__(81).default})


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=template&id=644030b6&
var render=function render(){var _vm=this,_c=_vm._self._c;return _vm.product.status=='Publicado'?_c('div',{staticClass:"product-wrap-2 mb-25"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.slug}`}},[_vm.product.images.length==0||_vm.product.images.length==1?_c('div',[_c('img',{staticClass:"default-img",attrs:{"src":__webpack_require__(74),"alt":_vm.product.name}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":__webpack_require__(74),"alt":_vm.product.name}})]):_c('div',[_c('img',{staticClass:"default-img",attrs:{"src":`http://localhost:8000/${_vm.product.images[0].path}`,"alt":_vm.product.name}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":`http://localhost:8000/${_vm.product.images[1].path}`,"alt":_vm.product.name}})])]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new==='Nuevo'?"<span class=\"product-label pink\">Nuevo</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> <div class=\"product-action-2\"><button title=\"Add To Cart\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button> <button title=\"Quick View\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content-2\">","</div>",[_vm._ssrNode("<div class=\"title-price-wrap-2\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.slug}`}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"price-2\"><span>"+_vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product)*1.21).toFixed(2))+" €")+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape(_vm._s((_vm.product.price_base*1.21).toFixed(2))+" €")+"</span>":"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"pro-wishlist-2\"><button><i class=\"pe-7s-like\"></i></button></div>")],2)],2):_vm._e();};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=template&id=644030b6&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemTwovue_type_script_lang_js_ = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Se ha actualizado la cantidad del producto'});}else{this.$notify({title:'Añadido al carrito!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Ya estaba añadido a la lista de deseos!'});}else{this.$notify({title:'Añadido a la lista de deseos!'});}this.$store.dispatch('addToWishlist',product);},// addToCompare(product) {
//     // for notification
//     if (this.$store.state.compare.find(el => product.id === el.id)) {
//         this.$notify({ title: 'Already added to compare!' })
//     } else {
//         this.$notify({ title: 'Add to compare successfully!'})
//     }
//     this.$store.dispatch('addToCompare', product)
// },
onClick(product){this.$modal.show('quickview',product);}}});
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemTwovue_type_script_lang_js_ = (ProductGridItemTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "40ecdc12"
  
)

/* harmony default export */ var ProductGridItemTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderSix_vue_vue_type_style_index_0_id_659019fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderSix_vue_vue_type_style_index_0_id_659019fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderSix_vue_vue_type_style_index_0_id_659019fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderSix_vue_vue_type_style_index_0_id_659019fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderSix_vue_vue_type_style_index_0_id_659019fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_68d9a0bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_68d9a0bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_68d9a0bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_68d9a0bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_68d9a0bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderSix.vue?vue&type=template&id=659019fc&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"slider-area nav-style-1 nav-style-3"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_vm._l(_vm.sliderData,function(slider,index){return _c('swiper-slide',{key:index,staticClass:"slider-height-5 d-flex align-items-center bg-img",style:{backgroundImage:`url(${slider.backgroundImage})`}},[_c('div',{staticClass:"container bg-slider-img"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"slider-content-4 slider-content-6 slider-animation-1 text-center"},[_c('h1',{staticClass:"text-dark"},[_vm._v(_vm._s(slider.title))]),_vm._v(" "),_c('p',{staticClass:"text-dark"},[_vm._v(_vm._s(slider.desc))]),_vm._v(" "),_c('div',{staticClass:"slider-btn btn-hover"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("COMPRAR AHORA")])],1)])])])])]);}),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/hero/HeroSliderSix.vue?vue&type=template&id=659019fc&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/hero/HeroSliderSix.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroSliderSixvue_type_script_lang_js_ = ({data(){return{swiperOption:{loop:true,speed:750,autoplay:{delay:6000},effect:"fade",fadeEffect:{crossFade:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},sliderData:[{title:"Bienvenid@ a TriviCare",desc:"10% de descuento en todos los accesorios",backgroundImage:"/img/slider/slider1-1.png"},{title:"Oferta de Inauguración",desc:"20% con el código de descuento: TRIVICARE20",backgroundImage:"/img/slider/slider1-2.png"}]};}});
// CONCATENATED MODULE: ./components/hero/HeroSliderSix.vue?vue&type=script&lang=js&
 /* harmony default export */ var hero_HeroSliderSixvue_type_script_lang_js_ = (HeroSliderSixvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/hero/HeroSliderSix.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hero_HeroSliderSixvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3e378105"
  
)

/* harmony default export */ var HeroSliderSix = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro.vue?vue&type=template&id=68d9a0bc&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"intro",staticClass:"text-center mt-5 mb-5"},[_c('index-title',{attrs:{"text":"Conoce un poco sobre nosotros","pre-type-delay":3000,"repeat":0}}),_vm._ssrNode(" <p class=\"pleft-30\" data-v-68d9a0bc>Hola mundo</p>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Intro.vue?vue&type=template&id=68d9a0bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Intro.vue?vue&type=script&lang=js&
/* harmony default export */ var Introvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Intro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Introvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68d9a0bc",
  "36b04389"
  
)

/* harmony default export */ var Intro = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapperCosmetics.vue?vue&type=template&id=55774814&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"product-area pt-95 pb-95\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"nav product-tab-list-2 pb-55\"><li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#sale-product\" role=\"tab\" class=\"nav-link active\">Más Vendidos</button></li> <li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#new-product\" role=\"tab\" class=\"nav-link\">Últimos Productos Añadidos</button></li></ul> "),_vm._ssrNode("<div class=\"tab-content\">","</div>",[_vm._ssrNode("<div id=\"new-product\" role=\"tabpanel\" class=\"tab-pane fade\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.newsProducts,function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItemTwo',{attrs:{"product":product}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"sale-product\" role=\"tabpanel\" class=\"tab-pane fade active show\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.bestSold,function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItemTwo',{attrs:{"product":product}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"view-more text-center mt-20 toggle-btn2\">","</div>",[_c('n-link',{staticClass:"loadMore2",attrs:{"to":"/shop"}},[_vm._v("VER MÁS PRODUCTOS")])],1)],2)],2)]),_vm._ssrNode(" "),_c('QuickView')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductWrapperCosmetics.vue?vue&type=template&id=55774814&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductWrapperCosmetics.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductWrapperCosmeticsvue_type_script_lang_js_ = ({components:{ProductGridItemTwo:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 103)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 92))},data(){return{products:[],bestSold:[],newsProducts:[]};},mounted(){setTimeout(()=>{this.getProducts();},2000);},methods:{async getProducts(){await this.$store.dispatch('getProducts',{perPage:'',page:'',category:'',search:'',slug:'',sort:'',tag:'',status:2});const products=this.$store.getters.getProducts;this.products=products.data;this.lastProducts();this.bestSales();},lastProducts(){const allProducts=this.products.map(item=>{return item;});const idProducts=this.products.map(item=>{if(item.status==='Publicado'){return item.id;}});idProducts.sort((a,b)=>b-a);const lastIdProducts=idProducts.slice(0,4);const lastFourProducts=allProducts.filter(item=>{return lastIdProducts.includes(item.id);});lastFourProducts.sort((a,b)=>b.id-a.id);this.newsProducts=lastFourProducts;},bestSales(){const best=this.products.map(item=>{return item.sold;});best.sort((a,b)=>b-a);const bestSold=best.slice(0,4);const allProducts=this.products.map(item=>{return item;});const bestProducts=allProducts.filter(item=>{return bestSold.includes(item.sold);});bestProducts.sort((a,b)=>b.sold-a.sold);if(bestProducts.length>4){this.bestSold=this.newsProducts;}else{this.bestSold=bestProducts;}}}});
// CONCATENATED MODULE: ./components/product/ProductWrapperCosmetics.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductWrapperCosmeticsvue_type_script_lang_js_ = (ProductWrapperCosmeticsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/product/ProductWrapperCosmetics.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductWrapperCosmeticsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36ab98fd"
  
)

/* harmony default export */ var ProductWrapperCosmetics = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductGridItemTwo: __webpack_require__(103).default,QuickView: __webpack_require__(92).default})


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb6bad9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb6bad9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb6bad9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb6bad9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb6bad9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6eb6bad9&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"home-cosmetics"},[_c('TheHeader'),_vm._v(" "),_c('HeroSliderSix'),_vm._v(" "),_c('transition',{attrs:{"name":"intro","mode":"out-in"}},[_c('Intro')],1),_vm._v(" "),_c('ServicePolicyFour'),_vm._v(" "),_c('ProductWrapperCosmetics'),_vm._v(" "),_c('TheFooter')],1)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6eb6bad9&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var transformunpluginName_nuxt_legacy_capi_key_transform_pagesvue_type_script_lang_js_ = ({auth:false,transition:{name:'fade',mode:'out-in'},components:{TheHeader:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 102)),HeroSliderSix:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 133)),ProductWrapperCosmetics:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 135)),ServicePolicyFour:()=>__webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 183)),// TestimonialOne: () => import("@/components/TestimonialOne"),
// InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
// BlogWrapper: () => import('@/components/BlogWrapper'),
TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 82)),Intro:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 134))},data(){return{show:false};},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();},head(){return{title:'Tienda de cosmética natural y ecológica | Cosmética natural y ecológica'};}});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (transformunpluginName_nuxt_legacy_capi_key_transform_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c54f2c1"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(102).default,HeroSliderSix: __webpack_require__(133).default,Intro: __webpack_require__(134).default,ProductWrapperCosmetics: __webpack_require__(135).default,TheFooter: __webpack_require__(82).default})


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

/***/ 86:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.f664e24.jpg";

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_4a90b625_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_4a90b625_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_4a90b625_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_4a90b625_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_id_4a90b625_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=template&id=4a90b625&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('modal',{attrs:{"name":"quickview","width":"50%","scrollable":true,"height":"auto"},on:{"before-open":_vm.beforeOpen}},[_c('div',{staticClass:"quickview-wrapper row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-slider"},[_c('div',{staticClass:"product-details-img"},[_c('div',{staticClass:"product-badges"},[_vm.product.new?_c('span',{staticClass:"product-label pink"},[_vm._v("New")]):_vm._e(),_vm._v(" "),_vm.product.discount?_c('span',{staticClass:"product-label purple"},[_vm._v("-"+_vm._s(_vm.product.discount)+"%")]):_vm._e()]),_vm._v(" "),_c('swiper',{attrs:{"options":_vm.swiperOptionTop}},[_c('div',{staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(87),"alt":_vm.product.name}})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"quickview-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-content"},[_c('div',{attrs:{"slot":"top-right"},slot:"top-right"},[_c('button',{staticClass:"modal-close",on:{"click":function($event){return _vm.$modal.hide('quickview');}}},[_c('i',{staticClass:"fa fa-times"})])]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.product.name))]),_vm._v(" "),_c('div',{staticClass:"product-details-price"},[_c('span',[_vm._v(_vm._s(_vm.discountedPrice(_vm.product).toFixed(2))+" €")]),_vm._v(" "),_vm.product.discount>0?_c('span',{staticClass:"old"},[_vm._v(_vm._s(_vm.product.price_base)+" €")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"pro-details-rating-wrap"},[_c('client-only',[_c('vue-star-rating',{attrs:{"read-only":true,"rating":_vm.product.rating,"star-size":20,"show-rating":false,"increment":0.5}})],1),_vm._v(" "),_c('span',[_c('a',{staticClass:"ms-1",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.product.total_reviews)+" Reviews")])])],1),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.product.description))]),_vm._v(" "),_vm.product.variation?_c('div',{staticClass:"pro-details-size-color"},[_c('div',{staticClass:"pro-details-color-wrap"},[_c('h6',{staticClass:"label"},[_vm._v("Color")]),_vm._v(" "),_c('div',{staticClass:"pro-details-color-content"},[_c('client-only',_vm._l(_vm.product.variation.color,function(item,index){return _c('label',{key:index,staticClass:"radio",class:item},[_c('input',{attrs:{"type":"radio","name":"colorGroup"}}),_vm._v(" "),_c('span',{staticClass:"check-mark"})]);}),0)],1)]),_vm._v(" "),_c('div',{staticClass:"pro-details-size-wrap"},[_c('h6',{staticClass:"label"},[_vm._v("Size")]),_vm._v(" "),_c('div',{staticClass:"pro-details-size-content"},[_c('client-only',_vm._l(_vm.product.variation.sizes,function(item,index){return _c('label',{key:index,staticClass:"radio"},[_c('input',{attrs:{"type":"radio","name":"sizeGroup"}}),_vm._v(" "),_c('span',{staticClass:"check-mark"},[_vm._v(_vm._s(item))])]);}),0)],1)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pro-details-quality"},[_c('div',{staticClass:"cart-plus-minus"},[_c('button',{staticClass:"dec qtybutton",on:{"click":function($event){return _vm.decreaseQuantity();}}},[_vm._v("-")]),_vm._v(" "),_c('input',{staticClass:"cart-plus-minus-box",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.singleQuantity}}),_vm._v(" "),_c('button',{staticClass:"inc qtybutton",on:{"click":function($event){return _vm.increaseQuantity();}}},[_vm._v("+")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-cart btn-hover"},[_c('button',{on:{"click":function($event){return _vm.addToCart(_vm.product);}}},[_vm._v("Añadir al carrito")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-wishlist"},[_c('button',{on:{"click":function($event){return _vm.addToWishlist(_vm.product);}}},[_c('i',{staticClass:"fa fa-heart-o"})])])]),_vm._v(" "),_c('div',{staticClass:"pro-details-meta"},[_c('span',{staticClass:"label"},[_vm._v("Categoría:")]),_vm._v(" "),_c('ul',[_c('client-only',_vm._l(_vm.categories,function(category){return _c('div',{key:category.id},[category.id==_vm.product.category_id?_c('li',[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.changePage(category.slug);}}},[_vm._v(_vm._s(category.name))])]):_vm._e()]);}),0)],1)]),_vm._v(" "),_c('div',{staticClass:"pro-details-meta"},[_c('span',{staticClass:"label me-2"},[_vm._v("Tag:")]),_vm._v(" "),_c('ul',[_c('client-only',_vm._l(_vm.product.tags,function(tag){return _c('li',{key:tag.id},[_c('n-link',{staticClass:"tag-block",style:`background-color:${tag.color}`,attrs:{"to":`/shop?tag=${tag.slug}`}},[_vm._v("#"+_vm._s(tag.tag)+"  ")])],1);}),0)],1)]),_vm._v(" "),_c('div',{staticClass:"pro-details-social"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.facebook.com/trivicare","target":"_blank"}},[_c('fa-icon',{attrs:{"icon":"fa-brands fa-facebook-f"}})],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.instagram.com/trivicare","target":"_blank"}},[_c('fa-icon',{attrs:{"icon":"fa-brands fa-instagram"}})],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.tiktok.com/@trivicare","target":"_blank"}},[_c('fa-icon',{attrs:{"icon":"fa-brands fa-tiktok"}})],1)])])])])])])])],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=template&id=4a90b625&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/QuickView.vue?vue&type=script&lang=js&
/* harmony default export */ var QuickViewvue_type_script_lang_js_ = ({data(){return{item:'',singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}};},computed:{product(){return this.item;},categories(){return this.$store.getters.getCategories;}},mounted(){this.getCategories();},methods:{beforeOpen({params:product}){this.item=product;},changePage(slug){this.$modal.hide('quickview');this.$router.push({name:'shop',query:{category:slug}});},addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Se ha actualizado la cantidad de producto'});}else{this.$notify({title:'Añadido al carrito!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},increaseQuantity(){if(this.product.stock>this.singleQuantity){this.singleQuantity++;}else{this.$notify({title:'No hay más stock'});}},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Ya esta en tu lista de deseos!'});}else{this.$notify({title:'Añadido a la lista de deseos!'});}this.$store.dispatch('addToWishlist',product);},async getCategories(){await this.$store.dispatch('getCategories');}// addToCompare(product) {
//     // for notification
//     if (this.$store.state.compare.find(el => product.id === el.id)) {
//         this.$notify({ title: 'Already added to compare!' })
//     } else {
//         this.$notify({ title: 'Add to compare successfully!'})
//     }
//     this.$store.dispatch('addToCompare', product)
// }
},watch:{// categorySlug() {
//     this.$router.push({ path: `/shop?category=${this.categorySlug}` })
// }
}});
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuickViewvue_type_script_lang_js_ = (QuickViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/QuickView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QuickViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a66d5cf"
  
)

/* harmony default export */ var QuickView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_e42260b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_e42260b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_e42260b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_e42260b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_e42260b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;