exports.ids = ["pages/shop"];
exports.modules = {

/***/ "./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/shop.vue?vue&type=style&index=0&id=760d1422&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-0!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop.vue?vue&type=style&index=0&id=760d1422&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("transition",{attrs:{name:_vm.transition}},[_vm.show?_c("div",{staticClass:"cookie-consent",attrs:{role:"dialog"}},[_vm._t("message",function(){return[_c("span",{staticClass:"cookie-consent-message"},[_vm._v("\n        "+_vm._s(_vm.message)+"\n        "),_vm._t("link",function(){return[_c("a",_vm._b({staticClass:"cookie-consent-link",attrs:{role:"button"}},"a",{href:_vm.href,target:_vm.target,rel:_vm.rel},false),[_vm._v("\n            "+_vm._s(_vm.linkLabel)+"\n          ")])];})],2)];}),_vm._v(" "),_c("section",{on:{click:_vm.dismiss}},[_vm._t("button",function(){return[_c("button",{staticClass:"cookie-consent-compliance",attrs:{type:"button"}},[_vm._v("\n          "+_vm._s(_vm.buttonLabel)+"\n        ")])];})],2)],2):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/shop.vue?vue&type=template&id=760d1422&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop.vue?vue&type=template&id=760d1422& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"shop-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container"}}),_vm._v(" "),_c("Breadcrumb",{staticClass:"d-none d-md-block",attrs:{pageTitle:this.$route.query.category||this.$route.query.tag?"Resultados de la búsqueda":"Todos los productos"}}),_vm._v(" "),_c("div",{staticClass:"shop-area pt-100 pb-100"},[_c("div",{staticClass:"container"},[_c("div",{staticClass:"row flex-row-reverse"},[_c("div",{staticClass:"col-lg-9"},[_c("div",{staticClass:"shop-top-bar"},[_c("div",{staticClass:"select-showing-wrap"},[_c("div",{staticClass:"shop-select"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.selectedPrice,expression:"selectedPrice"}],on:{change:function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.selectedPrice=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:"default"}},[_vm._v("Por defecto")]),_vm._v(" "),_c("option",{attrs:{value:"low2high"}},[_vm._v("Precio de menor a mayor")]),_vm._v(" "),_c("option",{attrs:{value:"high2low"}},[_vm._v("Precio de mayor a menor")])])]),_vm._v(" "),_c("div",{staticClass:"shop-select-2"},[_c("p",[_vm._v("Mostrando\n                                    "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.selectedQuantity,expression:"selectedQuantity"}],staticClass:"ms-2 me-2 w-auto",on:{change:function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.selectedQuantity=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:"default"}},[_vm._v("5")]),_vm._v(" "),_c("option",{attrs:{value:"teen"}},[_vm._v("10")]),_vm._v(" "),_c("option",{attrs:{value:"fiveteen"}},[_vm._v("15")])]),_vm._v("\n                                    resultados por página")])])]),_vm._v(" "),_c("div",{staticClass:"shop-tab d-none d-md-block"},[_c("button",{class:{active:_vm.layout==="twoColumn"},attrs:{title:"Ver dos productos por fila"},on:{click:function($event){_vm.layout="twoColumn";}}},[_c("i",{staticClass:"fa fa-th-large"})]),_vm._v(" "),_c("button",{class:{active:_vm.layout==="threeColumn"},attrs:{title:"Ver tres productos por fila"},on:{click:function($event){_vm.layout="threeColumn";}}},[_c("i",{staticClass:"fa fa-th"})]),_vm._v(" "),_c("button",{class:{active:_vm.layout==="list"},attrs:{title:"Ver un solo producto por fila"},on:{click:function($event){_vm.layout="list";}}},[_c("i",{staticClass:"fa fa-list-ul"})])])]),_vm._v(" "),_c("div",{staticClass:"shop-bottom-area mt-35"},[_c("div",{staticClass:"row product-layout",class:{list:_vm.layout==="list","grid three-column":_vm.layout==="threeColumn","grid two-column":_vm.layout==="twoColumn"}},[_c("client-only",_vm._l(_vm.products,function(product){return _c("div",{key:"product-"+product.id,staticClass:"col-xl-4 col-sm-6"},[_c("ProductGridItem",{attrs:{product:product,layout:_vm.layout}})],1);}),0)],1)]),_vm._v(" "),_vm.products.length>=_vm.perPage||_vm.page>=2?_c("div",{staticClass:"d-flex justify-content-center"},[_c("nav",{attrs:{"aria-label":"..."}},[_c("ul",{staticClass:"pagination-custom"},[_c("client-only",_vm._l(_vm.pagination.links,function(pagination_link){return _c("li",{key:"pagination_link-"+pagination_link.label,staticClass:"page-link-custom",class:{disabled:pagination_link.url==null,active:pagination_link.active==true}},[_c("a",{staticClass:"page-link",staticStyle:{cursor:"pointer"},domProps:{innerHTML:_vm._s(pagination_link.label)},on:{click:function($event){$event.preventDefault();return _vm.changePage(pagination_link.url);}}})]);}),0)],1)])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"col-lg-3 d-none d-md-block"},[_c("ShopSidebar",{attrs:{classes:"mr-30"},on:{search:_vm.searchFilter}})],1)])])]),_vm._v(" "),_c("QuickView"),_vm._v(" "),_c("TheFooter"),_vm._v(" "),_c("VueIfBot",[_c("CookieConsent",[_c("template",{slot:"message"},[_c("span",[_vm._v("\n                        Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra \n                        "),_c("a",{staticClass:"text-info",attrs:{href:"/politica-de-cookies"}},[_vm._v("Política de Cookies")]),_vm._v(".\n                    ")])]),_vm._v(" "),_c("template",{slot:"button"},[_c("button",{staticClass:"btn border-1"},[_vm._v("Aceptar")])])],2)],1)],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({name:'CookieConsent',props:{// default
transition:{type:String,default:'cookie-consent-transition'},message:{type:String,default:'This website uses cookies to ensure you get the best experience on our website.'},// button
linkLabel:{type:String,default:'Learn more'},buttonLabel:{type:String,default:'Got it!'},href:{type:String,default:'http://cookiesandyou.com'},target:{type:String,default:'_blank'},rel:{type:String,default:'noopener'},// cookie
cookieName:{type:String,default:'cookieconsent_status'},cookiePath:{type:String,default:'/'},cookieDomain:{type:String,default:''},cookieExpiryDays:{type:Number,default:365}},data(){return{show:undefined};},computed:{cookie(){return!this.getCookie(this.cookieName);}},beforeMount(){this.show=this.cookie;},methods:{dismiss(){this.show=false;this.setCookie(this.cookieName,1,this.cookieExpiryDays,this.cookieDomain,this.cookiePath);},getCookie(name){const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);return parts.length!==2?undefined:parts.pop().split(';').shift();},setCookie(name,value,expiryDays,domain,path){const exdate=new Date();exdate.setDate(exdate.getDate()+(expiryDays||365));const cookie=[`${name}=${value}`,`expires=${exdate.toUTCString()}`,`path=${path||'/'}`];if(domain){cookie.push(`domain=${domain}`);}document.cookie=cookie.join(';');}}});

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/shop.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/shop.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cookieconsent_component_src_components_CookieConsent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cookieconsent-component/src/components/CookieConsent.vue */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue");
/* harmony import */ var vue_if_bot_dist_vue_if_bot_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-if-bot/dist/vue-if-bot.es */ "./node_modules/vue-if-bot/dist/vue-if-bot.es.js");
/* harmony default export */ __webpack_exports__["default"] = ({auth:false,transition:{name:'fade',mode:'out-in'},components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),ProductGridItem:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/product/ProductGridItem */ "./components/product/ProductGridItem.vue")),QuickView:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/QuickView */ "./components/QuickView.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue")),CookieConsent: vue_cookieconsent_component_src_components_CookieConsent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],VueIfBot: vue_if_bot_dist_vue_if_bot_es__WEBPACK_IMPORTED_MODULE_1__["default"]},data(){return{layout:"list",selectedPrice:'default',selectedQuantity:'default',pagination:{},products:[],searchResult:'',sortFilter:'',category_slug:'',category_id:'',tag_slug:'',tag_id:'',perPage:5};},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},1000);});setTimeout(()=>{this.getProducts();},1000);var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();},computed:{page(){var _this$$route$query$pa;let page=(_this$$route$query$pa=this.$route.query.page)!==null&&_this$$route$query$pa!==void 0?_this$$route$query$pa:1;if(page>this.pagination.last_page){this.$router.replace({query:{page:this.pagination.last_page}});this.$router.push();return this.pagination.last_page;}return page;},categories(){return this.$store.getters.getCategories;},tags(){return this.$store.getters.getTags;},tag(){let tagSlug=this.$route.query.tag;this.tags.forEach(tag=>{if(tag.slug==tagSlug){this.tag_slug=tag.slug;this.tag_id=tag.id;}});if(tagSlug==this.tag_slug){return this.tag_id;}return'';},category(){let categorySlug=this.$route.query.category;this.categories.forEach(category=>{if(category.slug==categorySlug){this.category_slug=category.slug;this.category_id=category.id;}});if(categorySlug==this.category_slug){return this.category_id;}return'';}},methods:{async getProducts(){await this.$store.dispatch('getProducts',{perPage:this.perPage,page:this.page,category:this.category,search:this.searchResult,slug:'',sort:this.sortFilter,tag:this.tag,status:2});const products=this.$store.getters.getProducts;this.products=products.data;const paginations=this.$store.getters.getProducts;this.pagination={links:paginations['meta'].links,current_page:paginations['meta'].current_page,last_page:paginations['meta'].last_page};},async getCategories(){await this.$store.dispatch('getCategories');},async getTags(){await this.$store.dispatch('getTags');},changePage(url){this.$router.replace({query:{page:url.split('page=')[1]}});},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},searchFilter(value){this.searchResult=value;this.getProducts();}},watch:{page(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getProducts();},500);},category(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getProducts();},500);},tag(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getProducts();},500);},selectedPrice(){switch(this.selectedPrice){case"low2high":this.sortFilter='price_discount';this.getProducts();break;case"high2low":this.sortFilter='-price_discount';this.getProducts();break;default:this.sortFilter='';this.getProducts();}},selectedQuantity(){switch(this.selectedQuantity){case"fiveteen":this.perPage=15;this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getProducts();},500);break;case"teen":this.perPage=10;this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getProducts();},500);break;default:this.perPage=5;this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},500);});setTimeout(()=>{this.getProducts();},500);}},'$route.query.category'(){this.category_slug='';this.category_id='';},'$route.query.tag'(){this.tag_slug='';this.tag_id='';}},head(){if(this.category){return{title:this.$route.query.category.charAt(0).toUpperCase()+this.$route.query.category.slice(1),meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:'Tenemos una gran variedad de productos naturales y ecológicos para ti, elige el que más te guste y disfruta de la mejor calidad.'}]};}else if(this.tag){return{title:this.$route.query.tag.charAt(0).toUpperCase()+this.$route.query.tag.slice(1),meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:'Tenemos una gran variedad de productos naturales y ecológicos para ti, elige el que más te guste y disfruta de la mejor calidad.'}]};}else{return{title:'Todos los Productos',meta:[{charset:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{hid:'description',name:'description',content:'Tenemos una gran variedad de productos naturales y ecológicos para ti, elige el que más te guste y disfruta de la mejor calidad.'}]};}}});

/***/ }),

/***/ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieConsent.vue?vue&type=template&id=227b1abf& */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&");
/* harmony import */ var _CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieConsent.vue?vue&type=script&lang=js& */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "2d20c586"
  
)

component.options.__file = "node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_babel_loader_lib_index_js_ref_4_0_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../../../babel-loader/lib??ref--4-0!../../../vue-loader/lib??vue-loader-options!./CookieConsent.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_babel_loader_lib_index_js_ref_4_0_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_4_0_vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../babel-loader/lib??ref--4-0!../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../vue-loader/lib??vue-loader-options!./CookieConsent.vue?vue&type=template&id=227b1abf& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue?vue&type=template&id=227b1abf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _babel_loader_lib_index_js_ref_4_0_vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _babel_loader_lib_index_js_ref_4_0_vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_CookieConsent_vue_vue_type_template_id_227b1abf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-if-bot/dist/vue-if-bot.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-if-bot/dist/vue-if-bot.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index={functional:true,render:function render(h,_ref){var children=_ref.children,slots=_ref.slots,_ref$props=_ref.props,regex=_ref$props.regex,invert=_ref$props.invert;var dummyEl=h('div',{},[]);if(true){return dummyEl;}var botRegex=regex||/bot|googlebot|crawler|spider|robot|crawling/i;var isBot=navigator.userAgent&&botRegex.test(navigator.userAgent);var shouldShow=invert?isBot:!isBot;if(!shouldShow){return dummyEl;}return h('div',{},slots().default);}};/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./pages/shop.vue":
/*!************************!*\
  !*** ./pages/shop.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_vue_vue_type_template_id_760d1422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.vue?vue&type=template&id=760d1422& */ "./pages/shop.vue?vue&type=template&id=760d1422&");
/* harmony import */ var _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.vue?vue&type=script&lang=js& */ "./pages/shop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./shop.vue?vue&type=style&index=0&id=760d1422&lang=css& */ "./pages/shop.vue?vue&type=style&index=0&id=760d1422&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shop_vue_vue_type_template_id_760d1422___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shop_vue_vue_type_template_id_760d1422___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "6b3567fb"
  
)

component.options.__file = "pages/shop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/shop.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./pages/shop.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./shop.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/shop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/shop.vue?vue&type=style&index=0&id=760d1422&lang=css&":
/*!*********************************************************************!*\
  !*** ./pages/shop.vue?vue&type=style&index=0&id=760d1422&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_0_id_760d1422_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-0!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-1-1!../node_modules/vue-loader/lib??vue-loader-options!./shop.vue?vue&type=style&index=0&id=760d1422&lang=css& */ "./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/shop.vue?vue&type=style&index=0&id=760d1422&lang=css&");
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_0_id_760d1422_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_0_id_760d1422_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_0_id_760d1422_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_0_id_760d1422_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./pages/shop.vue?vue&type=template&id=760d1422&":
/*!*******************************************************!*\
  !*** ./pages/shop.vue?vue&type=template&id=760d1422& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_template_id_760d1422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./shop.vue?vue&type=template&id=760d1422& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/shop.vue?vue&type=template&id=760d1422&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_template_id_760d1422___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_template_id_760d1422___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;