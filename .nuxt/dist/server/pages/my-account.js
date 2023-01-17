exports.ids = ["pages/my-account"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/my-account.vue?vue&type=template&id=0bf7e245&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-account.vue?vue&type=template&id=0bf7e245& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"shop-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container-fluid"}}),_vm._v(" "),_c("TheHeader",{attrs:{searchFather:_vm.searchChildren},on:{opacity:_vm.searchOpacity}}),_vm._v(" "),_c("div",{attrs:{id:"post-nav"},on:{click:_vm.closeMenus}},[_c("NavBottom"),_vm._v(" "),_c("MyAccountContainer"),_vm._v(" "),_c("TheFooter")],1)],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/my-account.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/my-account.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:true,data(){return{email:'',old_password:'',password:'',password_confirmation:'',errors:[],name:'',lastname:'',address:'',optional_address:'',city:'',state:'',zipcode:'',phone:'',country:'',dni:'',disabled:true,checked:false,searchChildren:'',unauthorized:''};},components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),TheHeader:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheHeader */ "./components/TheHeader.vue")),NavBottom:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/NavBottom */ "./components/NavBottom.vue")),MyAccountContainer:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/MyAccountContainer */ "./components/MyAccountContainer.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};if(this.$auth.loggedIn==false){this.$router.push('/login');this.$notify({title:'Tu sesión ha expirado',type:'error'});}if(this.$axios.onError(error=>{const code=error.response.status;if(code===401){this.unauthorized=true;}}));},watch:{unauthorized(){if(this.unauthorized==true){this.$auth.logout();}}},methods:{closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},async updateEmail(){sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({title:'¿Estas seguro de que quieres cambiar tu email?',showCancelButton:true,confirmButtonText:'Si, cambiar'}).then(result=>{/* Read more about isConfirmed, isDenied below */if(result.isConfirmed){this.$axios.post('/api/update-email/'+this.$auth.user.id,{email:this.email}).then(()=>{sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('¡Email actualizado!','','success');this.$auth.fetchUser();this.errors=[];this.email='';}).catch(error=>{this.errors=Object.values(error.response.data).flat();});}});},async updatePassword(){await this.$axios.post('/api/update-password/'+this.$auth.user.id,{old_password:this.old_password,password:this.password,password_confirmation:this.password_confirmation}).then(()=>{sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('¡Contraseña actualizada!','','success');this.old_password='';this.password='';this.password_confirmation='';this.errors=[];this.$auth.fetchUser();}).catch(error=>{this.errors=Object.values(error.response.data).flat();});},async deleteProfile(id){sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({title:'¿Estas seguro de que quieres eliminar esta dirección?',showCancelButton:true,confirmButtonText:'Si, eliminar'}).then(result=>{/* Read more about isConfirmed, isDenied below */if(result.isConfirmed){this.$axios.delete('/api/delete-profile/'+id);this.$auth.fetchUser();sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Su dirección ha sido eliminada!','','success');}});},async deleteAccount(){sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({title:'¿Estas seguro de que quieres eliminar tu cuenta?',showCancelButton:true,confirmButtonText:'Si, eliminar'}).then(result=>{/* Read more about isConfirmed, isDenied below */if(result.isConfirmed){this.$axios.delete('/api/destroy/'+this.$auth.user.id);sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Su cuenta ha sido eliminada!','','success');this.$auth.logout();this.$router.push('/');}});},async createProfile(){const response=await this.$axios.post('/api/register-profile',{user_id:this.$auth.user.id,name:this.name,lastname:this.lastname,address:this.address,optional_address:this.optional_address,city:this.city,state:this.state,zipcode:this.zipcode,phone:this.phone,country:this.country,dni:this.dni});this.name='';this.lastname='';this.address='';this.optional_address='';this.city='';this.state='';this.zipcode='';this.phone='';this.country='';this.dni='';this.$auth.fetchUser();this.$notify({type:'success',text:'Dirección creada correctamente'});},async resendEmail(){await this.$axios.post('/api/resend-email/'+this.$auth.user.id).then(res=>{console.log(res);this.$notify({title:'Email reenviado'});}).catch(error=>{this.errors=Object.values(error.response.data).flat();});},searchOpacity(searchFather){if(searchFather==true){document.getElementById("post-nav").classList.add("search-screen");}else{document.getElementById("post-nav").classList.remove("search-screen");}}},head(){return{titleTemplate:"Mi Cuenta | TriviCare Natural Cosmetics",link:[{rel:'cannonical',href:'https://trivicare.com/my-account'}]};}});

/***/ }),

/***/ "./pages/my-account.vue":
/*!******************************!*\
  !*** ./pages/my-account.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account.vue?vue&type=template&id=0bf7e245& */ "./pages/my-account.vue?vue&type=template&id=0bf7e245&");
/* harmony import */ var _my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.vue?vue&type=script&lang=js& */ "./pages/my-account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "0e7dc95e"
  
)

component.options.__file = "pages/my-account.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/my-account.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./pages/my-account.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./my-account.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/my-account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/my-account.vue?vue&type=template&id=0bf7e245&":
/*!*************************************************************!*\
  !*** ./pages/my-account.vue?vue&type=template&id=0bf7e245& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./my-account.vue?vue&type=template&id=0bf7e245& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/my-account.vue?vue&type=template&id=0bf7e245&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;