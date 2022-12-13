exports.ids = [32];
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