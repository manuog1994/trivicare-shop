exports.ids = [24];
exports.modules = {

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=759d8c86&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"login-form"},[_vm._ssrNode("<div>","</div>",[_c('client-only',_vm._l(_vm.errors,function(error){return _c('div',{key:error.id,staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                "+_vm._s(error)+"\n            ")]);}),0)],1),_vm._ssrNode(" "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<input type=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\"> <input type=\"password\" name=\"password\" placeholder=\"Password\" required=\"required\"> "),_vm._ssrNode("<div class=\"button-box\">","</div>",[_vm._ssrNode("<div class=\"login-toggle-btn\">","</div>",[_vm._ssrNode("<input type=\"checkbox\"> <label>Recuérdame</label> "),_c('n-link',{attrs:{"to":"/forgot-password"}},[_vm._v("¿Olvidaste tu contraseña?")])],2),_vm._ssrNode(" <button"+_vm._ssrClass(null,{'disabled':true})+">Iniciar sesión</button>")],2)],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=759d8c86&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Login.vue?vue&type=script&lang=js&
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({middleware:'guest',data(){return{disabled:false,errors:[]};},computed:{},mounted(){this.$axios.get('/sanctum/csrf-cookie');},methods:{async login(){await this.$axios.get('/sanctum/csrf-cookie').then(res=>{console.log(res);const formData=new FormData(this.$refs.loginform);this.$auth.loginWith('laravelSanctum',{data:formData}).then(res=>{console.log(res);window.location.reload();this.errors=[];this.$notify({title:'Bienvenid@ de nuevo!'});});}).catch(error=>{this.errors=['El correo electrónico o la contraseña son incorrectos.'];console.log(error.response.data);});}}});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c777f3f4"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;