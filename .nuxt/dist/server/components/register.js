exports.ids = [39];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Register.vue?vue&type=template&id=6ae1cad7&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"register-form"},[_vm._ssrNode("<div>","</div>",[_c('client-only',_vm._l(_vm.errors,function(error){return _c('div',{key:error.id,staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                "+_vm._s(error)+"\n            ")]);}),0)],1),_vm._ssrNode(" <form><input name=\"email\" placeholder=\"Email\" type=\"email\"> <input type=\"password\" name=\"password\" placeholder=\"Contraseña\"> <input type=\"password\" name=\"password_confirmation\" placeholder=\"Confirma tu contraseña\"> <div class=\"mb-2\"><input type=\"checkbox\" name=\"terms\" id=\"terms\" value=\"true\""+_vm._ssrAttr("checked",Array.isArray(_vm.checked)?_vm._i(_vm.checked,"true")>-1:_vm.checked)+"> <label for=\"terms\"><a href=\"#\">Acepto los términos y condiciones</a></label></div> <div class=\"button-box mt-4\"><button type=\"submit\""+_vm._ssrClass("btn",{'disabled':_vm.checked?false:true})+">Registrar</button></div></form>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Register.vue?vue&type=template&id=6ae1cad7&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Register.vue?vue&type=script&lang=js&
/* harmony default export */ var Registervue_type_script_lang_js_ = ({middleware:'guest',data(){return{errors:[],checked:false};},async mounted(){await this.$axios.get('/sanctum/csrf-cookie');},methods:{register(){const formData=new FormData(this.$refs.registerform);this.$axios.post('/api/register',formData).then(res=>{this.$auth.loginWith('laravelSanctum',{data:formData});//console.log(res);
this.errors=[];this.$router.push({path:'/'});this.$notify({title:'Te has registrado correctamente, Bienvenid@!'});}).catch(error=>{this.errors=Object.values(error.response.data.errors).flat();});}}});
// CONCATENATED MODULE: ./components/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e36be5d4"
  
)

/* harmony default export */ var Register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;