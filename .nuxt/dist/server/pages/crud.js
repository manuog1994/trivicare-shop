exports.ids = [51];
exports.modules = {

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crud.vue?vue&type=template&id=34e1949c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _vm.role=='admin'?_c('div',{staticClass:"home-cosmetics"},[_c('Nav'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"login-register-area pt-5 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"login-register-tab-list nav\"><button"+_vm._ssrClass(null,{active:_vm.isActive==='All'})+">\n                    Todos los productos\n                </button> <button"+_vm._ssrClass(null,{active:_vm.isActive==='Create'})+">\n                    Crear producto\n                </button> <button"+_vm._ssrClass(null,{active:_vm.isActive==='Orders'})+">\n                    Pedidos\n                </button> <button"+_vm._ssrClass(null,{active:_vm.isActive==='OrdersHistory'})+">\n                    Historial de Pedidos\n                </button> <button"+_vm._ssrClass(null,{active:_vm.isActive==='Coupons'})+">\n                    Cupones\n                </button></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div>","</div>",[_c(_vm.isActive,{tag:"component"})],1)])],2)])],2):_vm._e();};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/crud.vue?vue&type=template&id=34e1949c&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/crud.vue?vue&type=script&lang=js&
/* harmony default export */ var crudvue_type_script_lang_js_ = ({auth:true,components:{TheHeader:()=>__webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 102)),TheFooter:()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 82)),Nav:()=>__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 178)),All:()=>__webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 175)),Create:()=>__webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 177)),Orders:()=>__webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 179)),OrdersHistory:()=>__webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 180)),Coupons:()=>__webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 176))},data(){return{role:'',isActive:"All"};},mounted(){this.getRoles();},methods:{getRoles(){const roles=this.$auth.user.roles;roles.map(role=>{this.role=role.name;});if(this.role!='admin'){this.$router.push('/error');}},comA(item){this.isActive=item;},head(){return{title:"Panel de Control"};}}});
// CONCATENATED MODULE: ./pages/crud.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_crudvue_type_script_lang_js_ = (crudvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/crud.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_crudvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "610a30c2"
  
)

/* harmony default export */ var crud = __webpack_exports__["default"] = (component.exports);

/***/ })

};;