exports.ids = [4];
exports.modules = {

/***/ 120:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_93bdc89c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_93bdc89c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_93bdc89c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_93bdc89c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_93bdc89c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/Orders.vue?vue&type=template&id=93bdc89c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<table class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">#</th> <th scope=\"col\">Nombre</th> <th scope=\"col\">Estado Pago</th> <th scope=\"col\">Estado Pedido</th> <th scope=\"col\">Fecha</th> <th scope=\"col\">Acciones</th></tr></thead> "),_vm.orders.length>0?_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.orders,function(order){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<th scope=\"row\">"+_vm._ssrEscape(_vm._s(order.id))+"</th> "),_vm._ssrNode("<td>","</td>",[_c('n-link',{attrs:{"to":`/orders-profiles/${order.user_id}`}},[_vm._v(_vm._s(_vm.getName(order)))])],1),_vm._ssrNode(" "+(order.paid==1?"<td>Pendiente</td>":"<!---->")+" "+(order.paid==2?"<td>En Proceso</td>":"<!---->")+" "+(order.paid==3?"<td>Pagado</td>":"<!---->")+" "+(order.paid==4?"<td>Rechazado</td>":"<!---->")+" <td><select"+_vm._ssrAttr("value",order.status)+" class=\"form-select\"><option value=\"1\">Recibido</option> <option value=\"2\">Preparando</option> <option value=\"3\">Enviado</option> <option value=\"4\">Entregado</option> <option value=\"5\">Cancelado</option></select></td> <td>"+_vm._ssrEscape(_vm._s(order.order_date))+"</td> "),_vm._ssrNode("<td>","</td>",[_c('n-link',{staticClass:"btn btn-primary",attrs:{"to":`/orders/${order.id}`}},[_c('i',{staticClass:"pe-7s-look"})]),_vm._ssrNode(" "+(order.paid==3&&order.invoice!=null?"<a class=\"btn btn-warning\"><i class=\"pe-7s-download\"></i></a>":"<!---->"))],2)],2);}),0):_vm._ssrNode("<tbody><tr><td colspan=\"6\">No hay pedidos pendientes.</td></tr></tbody>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex justify-content-center mt-5\">","</div>",[_vm._ssrNode("<nav aria-label=\"...\">","</nav>",[_vm._ssrNode("<ul class=\"pagination-custom\">","</ul>",[_c('client-only',_vm._l(_vm.pagination.links,function(pagination_link){return _c('li',{key:'pagination_link-'+pagination_link.label,staticClass:"page-link-custom",class:{'disabled':pagination_link.url==null,'active':pagination_link.active==true}},[_c('a',{staticClass:"page-link",staticStyle:{"cursor":"pointer"},domProps:{"innerHTML":_vm._s(pagination_link.label)},on:{"click":function($event){$event.preventDefault();return _vm.changePage(pagination_link.url);}}})]);}),0)],1)])])],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/crud/Orders.vue?vue&type=template&id=93bdc89c&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Orders.vue?vue&type=script&lang=js&
/* harmony default export */ var Ordersvue_type_script_lang_js_ = ({auth:true,data(){return{orders:[],users:[],order:{},user:{},pagination:{}};},mounted(){this.getOrders();this.getUserName();},computed:{page(){var _this$$route$query$pa;let page=(_this$$route$query$pa=this.$route.query.page)!==null&&_this$$route$query$pa!==void 0?_this$$route$query$pa:1;if(page>this.pagination.last_page){this.$router.replace({query:{page:this.pagination.last_page}});this.$router.push();return this.pagination.last_page;}return page;}},watch:{page(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getOrders();},500);}},methods:{async getOrders(){const response=await this.$axios.get('/api/orders?perPage=10&sort=-id&page='+this.page+'&status[status]=');this.orders=response.data.data;const paginations=response.data;this.pagination={links:paginations['meta'].links,current_page:paginations['meta'].current_page,last_page:paginations['meta'].last_page};},async getUserName(){await this.$axios.get('/api/users').then(response=>{this.users=response.data.data;}).catch(error=>{console.log(error);});},getName(order){let users=this.users;return users.filter(user=>{if(user.id==order.user_profile_id){return user;}}).map(user=>{return user.name+' '+user.lastname;}).toString();},async getUrl(order){let FileDownload=__webpack_require__(70);await this.$axios.get('/api/invoices/'+order.invoice.id,{responseType:'blob'}).then(response=>{FileDownload(response.data,order.invoice.filename);});},loadOrder(order){this.order=order;},async updateStatus(e){const status=e.target.value;await this.$axios.put('/api/orders/status/'+this.order.id,{status:status}).then(()=>this.$notify({title:'El estado del pedido ha sido actualizado'}));},changePage(url){this.$router.replace({query:{page:url.split('page=')[1]}});}}});
// CONCATENATED MODULE: ./components/crud/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/crud/Orders.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "042c8b73"
  
)

/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

};;