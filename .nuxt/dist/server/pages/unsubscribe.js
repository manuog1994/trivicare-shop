exports.ids = ["pages/unsubscribe"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/unsubscribe.vue?vue&type=template&id=80d34b30&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/unsubscribe.vue?vue&type=template&id=80d34b30& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"shop-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container-fluid"}}),_vm._v(" "),_c("TheHeader",{attrs:{searchFather:_vm.searchChildren},on:{opacity:_vm.searchOpacity}}),_vm._v(" "),_c("div",{attrs:{id:"post-nav"},on:{click:_vm.closeMenus}},[_c("NavBottom"),_vm._v(" "),_c("UnsubscribeContainer"),_vm._v(" "),_c("TheFooter")],1)],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/unsubscribe.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/unsubscribe.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,data(){return{searchChildren:''};},components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar.vue */ "./components/HeaderWithTopbar.vue")),TheHeader:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheHeader.vue */ "./components/TheHeader.vue")),NavBottom:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/NavBottom.vue */ "./components/NavBottom.vue")),UnsubscribeContainer:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/UnsubscribeContainer.vue */ "./components/UnsubscribeContainer.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter.vue */ "./components/TheFooter.vue"))},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});},methods:{closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},searchOpacity(searchFather){if(searchFather==true){document.getElementById("post-nav").classList.add("search-screen");}else{document.getElementById("post-nav").classList.remove("search-screen");}}},head(){return{titleTemplate:'Nos entristece que te vayas | TriviCare Natural Cosmetics'// link: [
//     { rel: 'cannonical', href: 'https://trivicare.com/unsubscribe' }
// ]
};}});

/***/ }),

/***/ "./pages/unsubscribe.vue":
/*!*******************************!*\
  !*** ./pages/unsubscribe.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unsubscribe_vue_vue_type_template_id_80d34b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsubscribe.vue?vue&type=template&id=80d34b30& */ "./pages/unsubscribe.vue?vue&type=template&id=80d34b30&");
/* harmony import */ var _unsubscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsubscribe.vue?vue&type=script&lang=js& */ "./pages/unsubscribe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _unsubscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _unsubscribe_vue_vue_type_template_id_80d34b30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _unsubscribe_vue_vue_type_template_id_80d34b30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "4fbda1cd"
  
)

component.options.__file = "pages/unsubscribe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/unsubscribe.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./pages/unsubscribe.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_unsubscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./unsubscribe.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/unsubscribe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_unsubscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/unsubscribe.vue?vue&type=template&id=80d34b30&":
/*!**************************************************************!*\
  !*** ./pages/unsubscribe.vue?vue&type=template&id=80d34b30& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_unsubscribe_vue_vue_type_template_id_80d34b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./unsubscribe.vue?vue&type=template&id=80d34b30& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/unsubscribe.vue?vue&type=template&id=80d34b30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_unsubscribe_vue_vue_type_template_id_80d34b30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_unsubscribe_vue_vue_type_template_id_80d34b30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;