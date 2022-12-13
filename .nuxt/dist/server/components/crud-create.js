exports.ids = [2];
exports.modules = {

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/Create.vue?vue&type=template&id=8ab949a2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\"><div class=\"col-12 mt-5\"><div class=\"w-50 m-auto\"><form class=\"row\"><div class=\"col-12 mb-2\"><label for=\"title\">Título</label> <input type=\"text\" name=\"name\" class=\"form-control\"></div> <div class=\"col-12 mb-2\"><label for=\"description\">Descripción</label> <textarea name=\"description\" id=\"description\" class=\"form-control\"></textarea></div> <div class=\"col-12 mb-2\"><label for=\"specifications\">Especificaciones</label> <textarea name=\"specifications\" id=\"specifications\" class=\"form-control\"></textarea></div> <div class=\"col-3 mb-2\"><label for=\"price\">Precio</label> <input type=\"number\" name=\"price\" step=\".01\" class=\"form-control\"></div> <div class=\"col-3 mb-2\"><label for=\"stock\">\n                            Stock\n                        </label> <input type=\"number\" name=\"stock\" class=\"form-control\"></div> <div class=\"col-6 mb-2\"><label for=\"barcode\">Código de Barras</label> <input type=\"number\" name=\"barcode\" class=\"form-control\"></div> <div class=\"col-4 mb-2\"><label for=\"category\">Categoría</label> <select name=\"category_id\" class=\"form-select\">"+_vm._ssrList(_vm.categories,function(category){return"<option"+_vm._ssrAttr("value",category.id)+">"+_vm._ssrEscape(_vm._s(category.name))+"</option>";})+"</select></div> <div class=\"col-8 mb-2\"><label for=\"slug\">Slug</label> <input type=\"text\" name=\"slug\" class=\"form-control\"></div> <div class=\"col-4 mb-2\"><label for=\"discount\">Descuento</label> <input type=\"number\" name=\"discount\" step=\".01\" class=\"form-control\"></div> <div class=\"col-4 mb-2\"><label for=\"weight\">Peso</label> <input type=\"number\" name=\"weight\" step=\".01\" class=\"form-control\"></div> <div class=\"col-4 mb-2\"><label for=\"size\">Tamaño</label> <input type=\"number\" name=\"size\" step=\".01\" class=\"form-control\"></div> <div class=\"col-12 border-bottom-1 mb-2 pb-4\"><label for=\"dimensions\">Dimensiones</label> <input type=\"text\" name=\"dimensions\" class=\"form-control\"></div> <div class=\"border-bottom-1 mb-3\"><div><h2 class=\"mt-3\">Activos</h2></div> <div class=\"row mt-2 mb-2\">"+_vm._ssrList(_vm.tags,function(tag){return"<div class=\"form-check col-3 mb-2\"><input type=\"checkbox\" id=\"flexCheckDefault\""+_vm._ssrAttr("value",tag.id)+_vm._ssrAttr("checked",Array.isArray(_vm.inputTag)?_vm._i(_vm.inputTag,tag.id)>-1:_vm.inputTag)+" class=\"form-check-input\"> <label for=\"flexCheckDefault\" class=\"form-check-label\">"+_vm._ssrEscape("\n                                    "+_vm._s(tag.name)+"\n                                ")+"</label></div>";})+"</div></div> <div class=\"border-bottom-1 mb-4 pb-3\"><div class=\"row\"><div class=\"mb-2\"><h2>Imágenes</h2></div> <div class=\"mb-2\"><label for=\"images\">Imágenes</label> <input type=\"file\" name=\"files\" multiple=\"multiple\" class=\"form-control\"></div></div></div> <div class=\"mb-5\"><button type=\"submit\" class=\"btn btn-primary\">Crear Producto</button></div></form></div></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/crud/Create.vue?vue&type=template&id=8ab949a2&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/crud/Create.vue?vue&type=script&lang=js&
/* harmony default export */ var Createvue_type_script_lang_js_ = ({auth:true,data(){return{inputTag:[],images:[],tags:[]};},computed:{categories(){return this.$store.state.categories;}},mounted(){setTimeout(()=>{this.getTags();},1000);},methods:{async getCategories(){await this.$store.dispatch('getCategories');},async getTags(){await this.$axios.get('api/tags').then(response=>{this.tags=response.data.data;}).catch(error=>{console.log(error);});},groupImages(e){this.images=e.target.files;},async newProduct(){const formData=new FormData(this.$refs.productform);formData.append('tags',JSON.stringify(this.inputTag));const images=this.images;for(let i=0;i<images.length;i++){formData.append('images[]',images[i]);}await this.$axios.post('/api/products/',formData,{headers:{'Content-Type':'multipart/form-data'}}).then(response=>{this.$refs.productform.reset();this.$notify({title:'El producto se ha creado correctamente',type:'success'});}).catch(error=>{console.log(error);this.$notify({title:'Ha ocurrido un error',type:'error'});});}}});
// CONCATENATED MODULE: ./components/crud/Create.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_Createvue_type_script_lang_js_ = (Createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/crud/Create.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_Createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "27a7e60a"
  
)

/* harmony default export */ var Create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;