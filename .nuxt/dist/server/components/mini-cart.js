exports.ids = [25];
exports.modules = {

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.78fea7b.png";

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

/***/ })

};;