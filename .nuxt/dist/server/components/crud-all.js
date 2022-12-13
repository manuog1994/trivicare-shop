exports.ids = [0,17];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/Edit.vue?vue&type=template&id=2887e2b9&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('modal',{attrs:{"name":"edit","width":"800px","scrollable":true,"height":"auto"},on:{"before-open":_vm.beforeOpen}},[_c('div',{staticClass:"mb-2 ps-4 pt-4"},[_c('h2',[_vm._v("Modificar Producto")])]),_vm._v(" "),_c('form',{ref:"updateproduct",staticClass:"row p-5",on:{"submit":_vm.updateProduct}},[_c('div',{staticClass:"col-12 mb-2"},[_c('label',{attrs:{"for":"title"}},[_vm._v("Título")]),_vm._v(" "),_c('input',{ref:"name",staticClass:"form-control",attrs:{"type":"text","name":"name"},domProps:{"value":_vm.item.name}})]),_vm._v(" "),_c('div',{staticClass:"col-12 mb-2"},[_c('label',{attrs:{"for":"description"}},[_vm._v("Descripción")]),_vm._v(" "),_c('textarea',{ref:"description",staticClass:"form-control",attrs:{"name":"description","id":"description"},domProps:{"value":_vm.item.description}})]),_vm._v(" "),_c('div',{staticClass:"col-12 mb-2"},[_c('label',{attrs:{"for":"specifications"}},[_vm._v("Especificaciones")]),_vm._v(" "),_c('textarea',{ref:"specifications",staticClass:"form-control",attrs:{"name":"specifications","id":"specifications"},domProps:{"value":_vm.item.specifications}})]),_vm._v(" "),_c('div',{staticClass:"col-3 mb-2"},[_c('label',{attrs:{"for":"price"}},[_vm._v("Precio")]),_vm._v(" "),_c('input',{ref:"price",staticClass:"form-control",attrs:{"type":"number","name":"price","step":".01"},domProps:{"value":_vm.item.price}})]),_vm._v(" "),_c('div',{staticClass:"col-3 mb-2"},[_c('label',{attrs:{"for":"stock"}},[_vm._v("\n                Stock\n            ")]),_vm._v(" "),_c('input',{ref:"stock",staticClass:"form-control",attrs:{"type":"number","name":"stock","step":".01"},domProps:{"value":_vm.item.stock}})]),_vm._v(" "),_c('div',{staticClass:"col-6 mb-2"},[_c('label',{attrs:{"for":"barcode"}},[_vm._v("Código de Barras")]),_vm._v(" "),_c('input',{ref:"barcode",staticClass:"form-control",attrs:{"type":"number","name":"barcode"},domProps:{"value":_vm.item.barcode}})]),_vm._v(" "),_c('div',{staticClass:"col-4 mb-2"},[_c('label',{attrs:{"for":"category"}},[_vm._v("Categoría")]),_vm._v(" "),_c('select',{ref:"category_id",staticClass:"form-select",attrs:{"name":"category_id"},domProps:{"value":_vm.item.category_id}},_vm._l(_vm.categories,function(category){return _c('option',{key:category.id,domProps:{"value":category.id}},[_vm._v(_vm._s(category.name))]);}),0)]),_vm._v(" "),_c('div',{staticClass:"col-8 mb-2"},[_c('label',{attrs:{"for":"slug"}},[_vm._v("Slug")]),_vm._v(" "),_c('input',{ref:"slug",staticClass:"form-control",attrs:{"type":"text","name":"slug"},domProps:{"value":_vm.item.slug}})]),_vm._v(" "),_c('div',{staticClass:"col-4 mb-2"},[_c('label',{attrs:{"for":"discount"}},[_vm._v("Descuento")]),_vm._v(" "),_c('input',{ref:"discount",staticClass:"form-control",attrs:{"type":"number","name":"discount","step":".01"},domProps:{"value":_vm.item.discount}})]),_vm._v(" "),_c('div',{staticClass:"col-4 mb-2"},[_c('label',{attrs:{"for":"weight"}},[_vm._v("Peso")]),_vm._v(" "),_c('input',{ref:"weight",staticClass:"form-control",attrs:{"type":"number","name":"weight","step":".01"},domProps:{"value":_vm.item.weight}})]),_vm._v(" "),_c('div',{staticClass:"col-4 mb-2"},[_c('label',{attrs:{"for":"size"}},[_vm._v("Tamaño")]),_vm._v(" "),_c('input',{ref:"size",staticClass:"form-control",attrs:{"type":"number","name":"size","step":".01"},domProps:{"value":_vm.item.size}})]),_vm._v(" "),_c('div',{staticClass:"col-12 mb-2 pb-4 border-bottom-1"},[_c('label',{attrs:{"for":"dimensions"}},[_vm._v("Dimensiones")]),_vm._v(" "),_c('input',{ref:"dimensions",staticClass:"form-control",attrs:{"type":"text","name":"dimensions"},domProps:{"value":_vm.item.dimensions}})]),_vm._v(" "),_c('div',{attrs:{"id":"actives"}},[_c('div',{staticClass:"mb-2"},[_c('h2',{staticClass:"mt-3"},[_vm._v("Activos")])]),_vm._v(" "),_c('div',{staticClass:"d-flex bg-aqua rounded mb-3"},[_c('span',{staticClass:"ms-2"},[_vm._v("Actuales:")]),_vm._v(" "),_vm._l(_vm.item.tags,function(tag){return _c('p',{key:tag.id,staticClass:"ms-2"},[_vm._v("\n                    "+_vm._s(tag.name)+" \n                    "),_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.deleteTag(tag);}}},[_c('i',{staticClass:"fa fa-trash"})])]);})],2),_vm._v(" "),_c('div',{staticClass:"row mt-2 mb-3 pb-3 border-bottom-1"},_vm._l(_vm.tags,function(tag){return _c('div',{key:tag.id,staticClass:"form-check col-3 mb-2"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.inputTags,expression:"inputTags"}],staticClass:"form-check-input",attrs:{"type":"checkbox","id":"flexCheckDefault"},domProps:{"value":tag.id,"checked":Array.isArray(_vm.inputTags)?_vm._i(_vm.inputTags,tag.id)>-1:_vm.inputTags},on:{"change":function($event){var $$a=_vm.inputTags,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=tag.id,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.inputTags=$$a.concat([$$v]));}else{$$i>-1&&(_vm.inputTags=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.inputTags=$$c;}}}}),_vm._v(" "),_c('label',{staticClass:"form-check-label",attrs:{"for":"flexCheckDefault"}},[_vm._v("\n                        "+_vm._s(tag.name)+"\n                    ")])]);}),0)]),_vm._v(" "),_c('div',{staticClass:"mb-2"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Guardar")])])]),_vm._v(" "),_c('div',{staticClass:"ps-5 pe-5"},[_c('div',{staticClass:"row mb-5"},[_c('div',{staticClass:"mb-2"},[_c('h2',[_vm._v("Imágenes")]),_vm._v(" "),_c('p',[_vm._v("("),_c('span',{staticClass:"fw-bold"},[_vm._v("¡IMPORTANTE!")]),_vm._v(" Guardar los cambios antes de borrar o subir nuevas imágenes)")])]),_vm._v(" "),_vm._l(_vm.item.images,function(image){return _c('div',{key:image.id,staticClass:"col-3 text-center mb-3"},[_c('img',{staticClass:"img-fluid",attrs:{"src":`http://localhost:8000/${image.path}`,"alt":_vm.product.name}}),_vm._v(" "),_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.deleteImage(image);}}},[_vm._v("Eliminar "),_c('i',{staticClass:"fa fa-trash"})])]);}),_vm._v(" "),_c('div',{staticClass:"mb-2"},[_c('label',{attrs:{"for":"images"}},[_vm._v("Imágenes")]),_vm._v(" "),_c('input',{ref:"file",staticClass:"form-control",attrs:{"type":"file","multiple":""},on:{"change":_vm.updateImage}})])],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/crud/Edit.vue?vue&type=template&id=2887e2b9&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Edit.vue?vue&type=script&lang=js&
/* harmony default export */ var Editvue_type_script_lang_js_ = ({auth:true,name:'Edit',data(){return{item:{name:'',description:'',specifications:'',price:'',stock:'',barcode:'',category_id:'',slug:'',status:'',discount:'',weight:'',size:'',dimensions:'',new:'',tags:''},images:[],inputTags:[],products:[],singleProduct:{},tags:[]};},computed:{product(){return this.singleProduct;},categories(){return this.$store.state.categories;}},mounted(){setTimeout(()=>{this.getTags();},1000);},methods:{beforeOpen({params:product}){this.singleProduct=product;this.getProducts();},async getProducts(){await this.$axios.get('/api/products').then(response=>{const data=response.data.data;data.filter(product=>{if(product.id===this.singleProduct.id){this.item=product;}});}).catch(error=>{console.log(error);});},async getCategories(){await this.$store.dispatch('getCategories');},async getTags(){await this.$axios.get('/api/tags').then(response=>{this.tags=response.data.data;});},async updateProduct(){await this.$axios.put('/api/products/'+this.item.id,{name:this.$refs.name.value,description:this.$refs.description.value,specifications:this.$refs.specifications.value,price:this.$refs.price.value,stock:this.$refs.stock.value,barcode:this.$refs.barcode.value,category_id:this.$refs.category_id.value,slug:this.$refs.slug.value,discount:this.$refs.discount.value,weight:this.$refs.weight.value,size:this.$refs.size.value,dimensions:this.$refs.dimensions.value,tags:JSON.stringify(this.inputTags)}).then(response=>{this.$notify({title:'El producto se ha actualizado correctamente',type:'success'});}).catch(error=>{console.log(error);this.$notify({title:'Ha ocurrido un error',type:'error'});});},deleteTag(tag){const tag_id=tag.id;const product_id=this.item.id;this.$axios.delete('/api/products/'+product_id+'/tags/'+tag_id).then(response=>{this.getProducts();this.$notify({title:'El tag se ha eliminado correctamente',type:'success'});}).catch(error=>{console.log(error);this.$notify({title:'Ha ocurrido un error',type:'error'});});},deleteImage(image){const image_id=image.id;this.$axios.delete('/api/images/'+image_id).then(response=>{this.getProducts();this.$notify({title:'La imagen se ha eliminado correctamente',type:'success'});}).catch(error=>{console.log(error);this.$notify({title:'Ha ocurrido un error',type:'error'});});},async updateImage(e){this.images=e.target.files;let formData=new FormData();const images=this.images;for(let i=0;i<images.length;i++){formData.append('images[]',images[i]);}formData.append('product_id',this.item.id);await this.$axios.post('/api/images',formData,{headers:{'Content-Type':'multipart/form-data'}}).then(response=>{this.images=[];this.$refs.file.value='';this.getProducts();this.$notify({title:'La imagen se ha subido correctamente!'});}).catch(error=>{console.log(error);this.$notify({title:'Ha ocurrido un error al subir la imagen!'});});}}});
// CONCATENATED MODULE: ./components/crud/Edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_Editvue_type_script_lang_js_ = (Editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/crud/Edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_Editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1fb62198"
  
)

/* harmony default export */ var Edit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/All.vue?vue&type=template&id=f97e488c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<table class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">#</th> <th scope=\"col\">Producto(s)</th> <th scope=\"col\">Precio</th> <th scope=\"col\">Descuento</th> <th scope=\"col\">Vendido(s)</th> <th scope=\"col\">Stock</th> <th scope=\"col\">Estado</th> <th scope=\"col\">Acciones</th></tr></thead> "),_vm.products.length>0?_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.products,function(product){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<th scope=\"row\">"+_vm._ssrEscape(_vm._s(product.id))+"</th> "),_vm._ssrNode("<td>","</td>",[_c('n-link',{attrs:{"to":`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1),_vm._ssrNode(" <td>"+_vm._ssrEscape(_vm._s(product.price)+" €")+"</td> "+(product.discount>0?"<td>"+_vm._ssrEscape(_vm._s(product.discount)+" %")+"</td>":"<td>-</td>")+" "+(product.sold>0?"<td>"+_vm._ssrEscape(_vm._s(product.sold))+"</td>":"<td>-</td>")+" "+(product.stock>0?"<td>"+_vm._ssrEscape(_vm._s(product.stock))+"</td>":"<td>-</td>")+" <td><select name=\"status\" class=\"form-select\"><option>"+_vm._ssrEscape(_vm._s(product.status))+"</option> "+(product.status==='Borrador'?"<option value=\"Publicado\">Publicado</option>":"<option value=\"Borrador\">Borrador</option>")+"</select></td> <td><div><button title=\"Editar producto\" class=\"btn btn-warning btn-sm\">Editar</button> <button title=\"Eliminar producto\" class=\"btn btn-danger btn-sm\">Eliminar</button></div></td>")],2);}),0):_vm._ssrNode("<tbody><tr><td colspan=\"8\">No hay productos.</td></tr></tbody>")],2),_vm._ssrNode(" "),_c('Edit')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/crud/All.vue?vue&type=template&id=f97e488c&

// EXTERNAL MODULE: ./components/crud/Edit.vue + 4 modules
var Edit = __webpack_require__(136);

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(71);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/All.vue?vue&type=script&lang=js&
/* harmony default export */ var Allvue_type_script_lang_js_ = ({auth:true,components:{Edit: Edit["default"]},data(){return{products:[],status:'',productId:''};},mounted(){this.getProducts();},methods:{async getProducts(){await this.$axios.get('/api/products').then(response=>{this.products=response.data.data;});},onClick(product){this.$modal.show('edit',product);},async updateStatus(product){if(product.status==='Publicado'){await this.$axios.put('/api/products/status/'+product.id,{status:'Borrador'}).then(res=>{this.$notify({title:'Estado del producto actualizado'});});}else{await this.$axios.put('/api/products/status/'+product.id,{status:'Publicado'}).then(res=>{this.$notify({title:'Estado del producto actualizado'});});}window.location.reload(true);},destroy(id){external_sweetalert2_default.a.fire({title:'¿Estás seguro?',text:"¡No podrás revertir esto!",icon:'warning',showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33',confirmButtonText:'¡Sí, bórralo!'}).then(result=>{if(result.isConfirmed){this.$axios.delete('/api/products/'+id).then(res=>{this.$notify({title:'Producto eliminado'});window.location.reload(true);});}});}}});
// CONCATENATED MODULE: ./components/crud/All.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_Allvue_type_script_lang_js_ = (Allvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/crud/All.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_Allvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0150c703"
  
)

/* harmony default export */ var All = __webpack_exports__["default"] = (component.exports);

/***/ })

};;