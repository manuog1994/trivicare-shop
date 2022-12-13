exports.ids = [42];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebar_vue_vue_type_style_index_0_id_7fea87ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebar_vue_vue_type_style_index_0_id_7fea87ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebar_vue_vue_type_style_index_0_id_7fea87ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebar_vue_vue_type_style_index_0_id_7fea87ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebar_vue_vue_type_style_index_0_id_7fea87ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=template&id=7fea87ea&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"sidebar-style",class:_vm.classes},[_vm._ssrNode("<div class=\"sidebar-widget\" data-v-7fea87ea><h4 class=\"pro-sidebar-title\" data-v-7fea87ea>Buscar</h4> <div class=\"pro-sidebar-search mb-50 mt-25\" data-v-7fea87ea><input type=\"text\" placeholder=\"Buscar...\""+_vm._ssrAttr("value",_vm.search)+" data-v-7fea87ea></div></div> "),_vm._ssrNode("<div class=\"sidebar-widget\" data-v-7fea87ea>","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\" data-v-7fea87ea>Categorías</h4> "),_c('client-only',[_c('ul',{staticClass:"sidebar-widget-list mt-20"},_vm._l(_vm.categories,function(category){return _c('li',{key:category.id,staticClass:"sidebar-widget-list-left"},[_c('a',{class:{'nuxt-link-exact-active':category.slug==_vm.categorySlug},on:{"click":function($event){$event.preventDefault();_vm.categorySlug=category.slug;}}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                        "+_vm._s(category.name)+"\n                    ")])]);}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget mt-5\" data-v-7fea87ea>","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\" data-v-7fea87ea>Activos</h4> "),_c('client-only',[_c('ul',{staticClass:"sidebar-widget-list mt-20"},_vm._l(_vm.tags,function(tag){return _c('li',{key:tag.id,staticClass:"sidebar-widget-list-left"},[_c('a',{class:{'nuxt-link-exact-active':tag.slug==_vm.tagSlug},on:{"click":function($event){$event.preventDefault();_vm.tagSlug=tag.slug;}}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                        "+_vm._s(tag.name)+"\n                    ")])]);}),0)]),_vm._ssrNode(" <div class=\"d-flex justify-content-center mt-2\" data-v-7fea87ea>"+(_vm.tagShow==4?"<a class=\"btn p-2\" data-v-7fea87ea>Ver más</a>":"<!---->")+" "+(_vm.tagShow>4?"<a class=\"btn p-2\" data-v-7fea87ea>Ver menos</a>":"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"pro-action d-flex justify-content-center mt-4\" data-v-7fea87ea><div class=\"pro-cart btn-hover\" data-v-7fea87ea><a class=\"clear_filters\" data-v-7fea87ea><i class=\"fa fa-trash\" data-v-7fea87ea></i> \n                    LIMPIAR FILTROS\n            </a></div></div>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=template&id=7fea87ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/ShopSidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var ShopSidebarvue_type_script_lang_js_ = ({props:["classes","msg"],data(){return{hidden:false,categoryFilter:'',search:'',categorySlug:'',tagSlug:[],tags:[],tagShow:4};},mounted(){this.getTags();this.getCategories();},computed:{categories(){return this.$store.getters.getCategories;}},watch:{search(){this.$emit("search",this.search);},categorySlug(){//this.tagSlug = '';
this.$router.push({path:'/shop',query:{category:this.categorySlug,tag:this.tagSlug}});},tagSlug(){//this.categorySlug = '';
this.$router.push({path:'/shop',query:{category:this.categorySlug,tag:this.tagSlug}});},tagShow(){this.getTags();}},methods:{async getTags(){await this.$store.dispatch('getTags');const tags=this.$store.getters.getTags;const filter=tags.filter(item=>{if(item.id<=this.tagShow){return item;}});this.tags=filter;},async getCategories(){await this.$store.dispatch('getCategories');},clearFilters(){this.categorySlug='';this.tagSlug='';this.$router.push({path:'/shop'});}}});
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopSidebarvue_type_script_lang_js_ = (ShopSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ShopSidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7fea87ea",
  "ade7a03a"
  
)

/* harmony default export */ var ShopSidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;