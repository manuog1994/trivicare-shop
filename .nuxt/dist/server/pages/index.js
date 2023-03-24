exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/index.vue?vue&type=style&index=0&id=2a183b29&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-0!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=style&index=0&id=2a183b29&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/index.vue?vue&type=template&id=2a183b29&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2a183b29& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"home-cosmetics"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container-fluid"}}),_vm._v(" "),_c("TheHeader",{attrs:{searchFather:_vm.searchChildren},on:{opacity:_vm.searchOpacity}}),_vm._v(" "),_c("div",{attrs:{id:"post-nav"},on:{click:_vm.closeMenus}},[_c("NavBottom"),_vm._v(" "),_c("HeroSliderSix"),_vm._v(" "),_c("Intro"),_vm._v(" "),_c("ServicePolicyFour"),_vm._v(" "),_c("ProductWrapperCosmetics"),_vm._v(" "),_c("BrandLogoCarousel"),_vm._v(" "),_c("TheFooter")],1),_vm._v(" "),_vm.loaderPage?_c("BigLoader"):_vm._e()],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,role:false,//pageTransition: 'slide-fade',
components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),TheHeader:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheHeader */ "./components/TheHeader.vue")),NavBottom:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/NavBottom */ "./components/NavBottom.vue")),HeroSliderSix:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/hero/HeroSliderSix */ "./components/hero/HeroSliderSix.vue")),ProductWrapperCosmetics:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/product/ProductWrapperCosmetics */ "./components/product/ProductWrapperCosmetics.vue")),BrandLogoCarousel:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/BrandLogoCarousel */ "./components/BrandLogoCarousel.vue")),ServicePolicyFour:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/policy/ServicePolicyFour */ "./components/policy/ServicePolicyFour.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue")),Intro:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Intro */ "./components/Intro.vue")),BigLoader:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/loaders/BigLoader */ "./components/loaders/BigLoader.vue"))},data(){return{show:false,test:'',searchChildren:'',closeMenu:false,loaderPage:false};},async mounted(){var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};if(this.$axios.onError(error=>{const code=error.response.status;if(code==401){this.$auth.logout();}}));if(this.$auth.loggedIn==true){this.$auth.fetchUser();}},methods:{closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},searchOpacity(searchFather){if(searchFather==true){document.getElementById("post-nav").classList.add("search-screen");}else{document.getElementById("post-nav").classList.remove("search-screen");}}},head(){return{titleTemplate:'TRIVICARE | Cuidamos de tú piel | Cosmética natural y ecológica',// link: [
//     { rel: 'cannonical', href: 'https://trivicare.com/' }
// ],
meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:'En TriviCare Natural Cosmetics ofrecemos una selección única de productos de cosmética natural y orgánica para tu cuidado diario de la piel.'}]};}});

/***/ }),

/***/ "./pages/index.vue":
/*!*************************!*\
  !*** ./pages/index.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2a183b29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2a183b29& */ "./pages/index.vue?vue&type=template&id=2a183b29&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2a183b29&lang=css& */ "./pages/index.vue?vue&type=style&index=0&id=2a183b29&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2a183b29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2a183b29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "4b5a8a9d"
  
)

component.options.__file = "pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/index.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./pages/index.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./index.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/index.vue?vue&type=style&index=0&id=2a183b29&lang=css&":
/*!**********************************************************************!*\
  !*** ./pages/index.vue?vue&type=style&index=0&id=2a183b29&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a183b29_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-0!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-1-1!../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2a183b29&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/index.vue?vue&type=style&index=0&id=2a183b29&lang=css&");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a183b29_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a183b29_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a183b29_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a183b29_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./pages/index.vue?vue&type=template&id=2a183b29&":
/*!********************************************************!*\
  !*** ./pages/index.vue?vue&type=template&id=2a183b29& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a183b29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2a183b29& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/index.vue?vue&type=template&id=2a183b29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a183b29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a183b29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;