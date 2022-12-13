exports.ids = [1];
exports.modules = {

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/Coupons.vue?vue&type=template&id=0422720f&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row mt-2 mb-2\"><div class=\"col-12\"><div class=\"card w-75 m-auto\"><div class=\"card-title p-3\"><h2>Crear cupón</h2></div> <div class=\"w-75 m-auto mb-4\"><form><div class=\"mb-2\"><label for=\"code\">Código</label> <input type=\"text\" name=\"code\" class=\"form-control\"></div> <div class=\"mb-2\"><label for=\"discount\">Descuento</label> <input type=\"number\" name=\"discount\" class=\"form-control\"></div> <div class=\"mb-2\"><label for=\"validity\">Validez</label> <input type=\"date\" name=\"validity\" class=\"form-control\"></div> <div class=\"mb-4\"><label for=\"status\">Estado</label> <select name=\"status\" class=\"form-select\"><option value=\"1\">Inactivo</option> <option value=\"2\">Activo</option></select></div> <div class=\"mb-2\"><button type=\"submit\" class=\"btn btn-primary\">Crear</button></div></form></div></div></div></div> <div class=\"row mt-5\"><div class=\"col-12\"><table class=\"table\"><thead><tr><th scope=\"col\">#</th> <th>Código</th> <th>Descuento(%)</th> <th>Validez</th> <th>Estado</th> <th>Acciones</th></tr></thead> <tbody>"+_vm._ssrList(_vm.coupons,function(coupon){return"<tr><th scope=\"row\">"+_vm._ssrEscape(_vm._s(coupon.id))+"</th> <td>"+_vm._ssrEscape(_vm._s(coupon.code))+"</td> <td>"+_vm._ssrEscape(_vm._s(coupon.discount))+"</td> <td>"+_vm._ssrEscape(_vm._s(coupon.validity))+"</td> "+(coupon.status==1?"<td>Inactivo</td>":"<td>Activo</td>")+" <td><form><button type=\"submit\" class=\"btn btn-danger\">\n                                     Eliminar\n                                 </button></form></td></tr>";})+"</tbody></table></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/crud/Coupons.vue?vue&type=template&id=0422720f&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Coupons.vue?vue&type=script&lang=js&
/* harmony default export */ var Couponsvue_type_script_lang_js_ = ({auth:true,data(){return{coupons:[]};},mounted(){this.getCupons();},methods:{async getCupons(){await this.$axios.get('/api/cupons').then(response=>{this.coupons=Object.values(response.data.data).flat();}).catch(error=>{console.log(error);});},newCoupon(){const data=new FormData(this.$refs.createCoupon);this.$axios.post('/api/cupons',data).then(()=>{this.getCupons();this.$notify({title:'Cupón creado'});this.$refs.createCoupon.reset();}).catch(error=>{console.log(error);});},async destroy(id){await this.$axios.delete(`/api/cupons/${id}`).then(()=>{this.getCupons();this.$notify({title:'Cupón eliminado'});}).catch(error=>{console.log(error);});}}});
// CONCATENATED MODULE: ./components/crud/Coupons.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_Couponsvue_type_script_lang_js_ = (Couponsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/crud/Coupons.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_Couponsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "55792f6f"
  
)

/* harmony default export */ var Coupons = __webpack_exports__["default"] = (component.exports);

/***/ })

};;