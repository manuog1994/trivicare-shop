exports.ids = [48,7,15,19,25,26,27,40];
exports.modules = {

/***/ 112:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_666d80b5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_666d80b5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_666d80b5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_666d80b5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_666d80b5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=666d80b5&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"cart-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._v(" "),_c('Breadcrumb',{attrs:{"pageTitle":"Dirección de Envío"}}),_vm._v(" "),_vm.$auth.user.email_verified_at!=null?_c('div',{staticClass:"checkout-area pt-95 pb-100"},[_c('div',{staticClass:"container"},[_vm.products.length>0?_c('div',{staticClass:"row"},[_vm.$auth.user.user_profile.length>0?_c('div',{staticClass:"col-lg-7"},[_c('h3',{staticClass:"text-center mb-2"},[_vm._v("¿Donde se lo enviamos?")]),_vm._v(" "),_c('p',{staticClass:"text-center"},[_vm._v("Para continuar seleccione una de sus direcciones de envio, y pulse el botón \"Ir a la pasarela de pago\"")]),_vm._v(" "),_c('h4',{staticClass:"mt-3"},[_vm._v("Datos de envío")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"form-group"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.selected,expression:"selected"}],ref:"userIdProfile",staticClass:"form-select",on:{"change":[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.selected=$event.target.multiple?$$selectedVal:$$selectedVal[0];},_vm.enableButton]}},[_vm.selected=='Seleccione una dirección'?_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v(_vm._s(_vm.selected))]):_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Seleccione una dirección")]),_vm._v(" "),_c('client-only',_vm._l(_vm.$auth.user.user_profile,function(profile){return _c('option',{key:profile.id,domProps:{"value":profile.id}},[_vm._v(_vm._s(profile.name)+" "+_vm._s(profile.lastname)+", "+_vm._s(profile.address)+", "+_vm._s(profile.zipcode)+" "+_vm._s(profile.city)+" ("+_vm._s(profile.state)+")")]);}),0)],1)]),_vm._v(" "),_vm.selected.name?_c('div',{staticClass:"card mt-4"},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.selected.name)+" "+_vm._s(_vm.selected.lastname))]),_vm._v(" "),_c('p',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.selected.address))]),_vm._v(" "),_c('p',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.selected.zipcode)+" "+_vm._s(_vm.selected.city)+" ("+_vm._s(_vm.selected.state)+")")]),_vm._v(" "),_c('p',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.selected.country))]),_vm._v(" "),_c('p',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.selected.phone))]),_vm._v(" "),_c('p',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.$auth.user.email))])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"panel panel-default single-my-account mt-5"},[_c('div',{staticClass:"panel-heading my-account-title"},[_c('h3',{staticClass:"panel-title"},[_c('a',{attrs:{"data-bs-toggle":"collapse","href":"#my-account-2"}},[_vm._v("Usar otra dirección de envío ")])])]),_vm._v(" "),_c('div',{staticClass:"panel-collapse collapse",attrs:{"id":"my-account-2","data-bs-parent":"#faq"}},[_c('div',{staticClass:"panel-body"},[_c('div',{staticClass:"myaccount-info-wrapper"},[_c('form',{staticClass:"row",on:{"submit":function($event){$event.preventDefault();return _vm.createProfile.apply(null,arguments);}}},[_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Nombre")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.name},on:{"input":function($event){if($event.target.composing)return;_vm.name=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Apellidos")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.lastname,expression:"lastname"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.lastname},on:{"input":function($event){if($event.target.composing)return;_vm.lastname=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-12 col-md-12"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Dirección")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.address,expression:"address"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.address},on:{"input":function($event){if($event.target.composing)return;_vm.address=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-12 col-md-12"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Opcional")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.optional_address,expression:"optional_address"}],attrs:{"type":"text"},domProps:{"value":_vm.optional_address},on:{"input":function($event){if($event.target.composing)return;_vm.optional_address=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-4"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Código Postal")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.zipcode,expression:"zipcode"}],attrs:{"type":"number","required":""},domProps:{"value":_vm.zipcode},on:{"input":function($event){if($event.target.composing)return;_vm.zipcode=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-8 col-md-8"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Ciudad")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.city,expression:"city"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.city},on:{"input":function($event){if($event.target.composing)return;_vm.city=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Provincia")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.state,expression:"state"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.state},on:{"input":function($event){if($event.target.composing)return;_vm.state=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("País")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.country,expression:"country"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.country},on:{"input":function($event){if($event.target.composing)return;_vm.country=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-5 col-md-5"},[_c('div',{staticClass:"billing-info"},[_c('label',[_vm._v("Teléfono")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.phone,expression:"phone"}],attrs:{"type":"number","required":""},domProps:{"value":_vm.phone},on:{"input":function($event){if($event.target.composing)return;_vm.phone=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"form-check ms-3 mb-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.checked,expression:"checked"}],staticClass:"form-check-input",attrs:{"type":"checkbox","value":"true","id":"flexCheckDefault"},domProps:{"checked":Array.isArray(_vm.checked)?_vm._i(_vm.checked,"true")>-1:_vm.checked},on:{"change":function($event){var $$a=_vm.checked,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checked=$$a.concat([$$v]));}else{$$i>-1&&(_vm.checked=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.checked=$$c;}}}}),_vm._v(" "),_c('label',{staticClass:"form-check-label",attrs:{"for":"flexCheckDefault"}},[_vm._v("\n                                                    He leído y acepto la "),_c('a',{attrs:{"href":"#"}},[_vm._v("política de privacidad")]),_vm._v(".\n                                                ")])]),_vm._v(" "),_c('div',{staticClass:"billing-btn"},[_c('button',{staticClass:"btn btn-form",class:{'disabled':_vm.checked?false:true},attrs:{"type":"submit"}},[_vm._v("Guardar")])])])])])])])]):_c('div',{staticClass:"col-lg-7"},[_c('div',{staticClass:"billing-info-wrap"},[_c('h3',[_vm._v("Datos de envío y facturación")]),_vm._v(" "),_c('form',{staticClass:"row",on:{"submit":function($event){$event.preventDefault();return _vm.createProfile.apply(null,arguments);}}},[_c('div',{staticClass:"col-lg-5 col-md-5"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Nombre")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.name},on:{"input":function($event){if($event.target.composing)return;_vm.name=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-7 col-md-7"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Apellidos")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.lastname,expression:"lastname"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.lastname},on:{"input":function($event){if($event.target.composing)return;_vm.lastname=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Dirección")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.address,expression:"address"}],staticClass:"billing-address",attrs:{"placeholder":"Calle y número","type":"text","required":""},domProps:{"value":_vm.address},on:{"input":function($event){if($event.target.composing)return;_vm.address=$event.target.value;}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.optional_address,expression:"optional_address"}],attrs:{"placeholder":"Opcional","type":"text"},domProps:{"value":_vm.optional_address},on:{"input":function($event){if($event.target.composing)return;_vm.optional_address=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Ciudad")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.city,expression:"city"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.city},on:{"input":function($event){if($event.target.composing)return;_vm.city=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Provincia")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.state,expression:"state"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.state},on:{"input":function($event){if($event.target.composing)return;_vm.state=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Código Postal")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.zipcode,expression:"zipcode"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.zipcode},on:{"input":function($event){if($event.target.composing)return;_vm.zipcode=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("Teléfono")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.phone,expression:"phone"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.phone},on:{"input":function($event){if($event.target.composing)return;_vm.phone=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"billing-info mb-20"},[_c('label',[_vm._v("País")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.country,expression:"country"}],attrs:{"type":"text","required":""},domProps:{"value":_vm.country},on:{"input":function($event){if($event.target.composing)return;_vm.country=$event.target.value;}}})])]),_vm._v(" "),_c('div',{staticClass:"form-check ms-4"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.checked,expression:"checked"}],staticClass:"form-check-input",attrs:{"type":"checkbox","value":"true","id":"flexCheckDefault"},domProps:{"checked":Array.isArray(_vm.checked)?_vm._i(_vm.checked,"true")>-1:_vm.checked},on:{"change":function($event){var $$a=_vm.checked,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checked=$$a.concat([$$v]));}else{$$i>-1&&(_vm.checked=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.checked=$$c;}}}}),_vm._v(" "),_c('label',{staticClass:"form-check-label",attrs:{"for":"flexCheckDefault"}},[_vm._v("\n                                        He leído y acepto la "),_c('a',{attrs:{"href":"#"}},[_vm._v("política de privacidad")]),_vm._v(".\n                                    ")])]),_vm._v(" "),_c('div',{staticClass:"billing-btn mt-5"},[_c('button',{staticClass:"btn btn-form",class:{'disabled':_vm.checked?false:true},attrs:{"type":"submit"}},[_vm._v("Guardar")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-5"},[_c('div',{staticClass:"your-order-area"},[_c('h3',[_vm._v("Tu Pedido")]),_vm._v(" "),_c('div',{staticClass:"your-order-wrap gray-bg-4"},[_c('div',{staticClass:"your-order-product-info"},[_c('div',{staticClass:"your-order-top"},[_c('ul',[_c('li',[_vm._v("Producto")]),_vm._v(" "),_c('li',[_vm._v("Total")])])]),_vm._v(" "),_c('div',{staticClass:"your-order-middle"},[_c('ul',[_c('client-only',_vm._l(_vm.products,function(product,index){return _c('li',{key:index},[_c('span',{staticClass:"order-middle-left"},[_vm._v(_vm._s(product.name)+"  x "+_vm._s(product.cartQuantity)+" unid(s)")]),_vm._v(" "),_c('span',{staticClass:"order-price"},[_vm._v(_vm._s((_vm.discountedPrice(product)*product.cartQuantity*1.21).toFixed(2))+" €")])]);}),0)],1)]),_vm._v(" "),_c('div',[_c('ul',{staticClass:"d-flex justify-content-between mb-2"},[_vm.cuponStore.discount>0?_c('li',{staticClass:"your-order-shipping"},[_vm._v("Código descuento")]):_vm._e(),_vm._v(" "),_vm.cuponStore.discount>0?_c('li',{staticClass:"text-danger"},[_vm._v("-"+_vm._s((_vm.subTotal*(_vm.cuponStore.discount/100)).toFixed(2))+" €")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"your-order-bottom"},[_c('ul',[_c('li',{staticClass:"your-order-shipping"},[_vm._v("Gastos de envío")]),_vm._v(" "),(_vm.total*1.21).toFixed(2)>=50?_c('li',[_vm._v("Envio Gratis")]):_c('li',[_vm._v(_vm._s(_vm.getShipping(_vm.total))+" €")])])]),_vm._v(" "),_c('div',{staticClass:"your-order-total"},[_c('ul',[_c('li',{staticClass:"order-total"},[_vm._v("Total")]),_vm._v(" "),(_vm.total*1.21).toFixed(2)<=50?_c('li',[_vm._v(_vm._s((_vm.total*1.21+_vm.shipping).toFixed(2))+" €")]):_c('li',[_vm._v(_vm._s((_vm.total*1.21).toFixed(2))+" €")])])])])]),_vm._v(" "),_c('div',{staticClass:"place-order mt-25 d-flex justify-content-center"},[_c('button',{staticClass:"btn btn-theme",class:{'disabled':_vm.disabled?true:false},attrs:{"id":"next"},on:{"click":function($event){$event.preventDefault();return _vm.createOrder.apply(null,arguments);}}},[_vm._v("Ir a la pasarela de pago")])])])])]):_vm._e()])]):_vm._e(),_vm._v(" "),_vm.$auth.user.email_verified_at==null?_c('div',{staticClass:"my-account-area pb-80 pt-100 text-center"},[_c('h1',{staticClass:"mb-5"},[_vm._v("Su cuenta no está verificada")]),_vm._v(" "),_c('p',[_vm._v("Por favor, para realizar está y otras acciones debe ir a su cuenta de email y buscar el correo electrónico \"Trivicare.com | Verificación de correo electrónico\".")]),_vm._v(" "),_c('p',[_vm._v("Si no lo encuentra, revise su carpeta de spam o "),_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.resendEmail.apply(null,arguments);}}},[_vm._v("pulse aquí")]),_vm._v(" para generar un nuevo correo.")])]):_vm._e(),_vm._v(" "),_c('TheFooter')],1)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=666d80b5&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js&
/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({middleware:'auth',transition:{name:'fade',mode:'out-in'},data(){return{shipping:0,selected:'Seleccione una dirección',name:'',lastname:'',address:'',optional_address:'',city:'',state:'',zipcode:'',phone:'',country:'',disabled:true,userIdProfile:'',token_id:'',checked:false};},components:{HeaderWithTopbar:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 85)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 83)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 82))},computed:{products(){return this.$store.getters.getCart;},subTotal(){return this.$store.getters.getSubTotal;},total(){return this.$store.getters.getTotal;},cuponStore(){const cupon=this.$store.getters.getCupon;const today=new Date();const expires=new Date(cupon.validity);if(expires.getDate()<=today.getDate()&&expires.getMonth()<=today.getMonth()&&expires.getFullYear()<=today.getFullYear()){return this.$notify({group:'foo',title:'Cupón caducado',text:'El cupón que has introducido ha caducado',type:'error'});}else{return cupon;}}},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},1000);});var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();},methods:{async createProfile(){const response=await this.$axios.post('/api/register-profile',{user_id:this.$auth.user.id,name:this.name,lastname:this.lastname,address:this.address,optional_address:this.optional_address,city:this.city,state:this.state,zipcode:this.zipcode,phone:this.phone,country:this.country});this.name='';this.lastname='';this.address='';this.optional_address='';this.city='';this.state='';this.zipcode='';this.phone='';this.country='';this.$auth.fetchUser();this.$notify({type:'success',text:'Dirección creada correctamente'});},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},enableButton(e){this.disabled=false;this.userIdProfile=e.target.value;},makeid(length){let result='';let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}this.token_id=result;},async createOrder(){this.makeid(24);const products=JSON.stringify(this.$store.getters.getCart);const cupon=this.$store.getters.getCupon;await this.$axios.post('/api/orders',{user_id:this.$auth.user.id,user_profile_id:this.userIdProfile,products:products,subTotal:this.$store.getters.getSubTotal,total:this.$store.getters.getTotal,coupon:cupon.code,shipping:this.shipping,token_id:this.token_id}).then(()=>{this.$store.commit('CLEAR_CART');this.$store.commit('CLEAR_CUPON');window.location.href='http://localhost:8000/stripe/'+this.token_id;});},getShipping(total){if(total<50){this.shipping=5.99;return this.shipping;}else{this.shipping=0;return this.shipping;}},async resendEmail(){await this.$axios.post('/api/resend-email/'+this.$auth.user.id).then(res=>{console.log(res);this.$notify({title:'Email reenviado'});}).catch(error=>{this.errors=Object.values(error.response.data).flat();});}},head(){return{title:"Resumen de tu Pedido"};}});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3028adb2"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(85).default,Breadcrumb: __webpack_require__(83).default,TheFooter: __webpack_require__(82).default})


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.78fea7b.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_55e40ce8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ResponsiveMobileMenu.vue?vue&type=template&id=55e40ce8&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"mobile-menu"},[_c('client-only',_vm._l(_vm.menus,function(link,i){return _c('li',{key:i},[_c('n-link',{attrs:{"to":link.url}},[_vm._v("\n                "+_vm._s(link.title)+"\n            ")]),_vm._v(" "),link.submenu?_c('span',{staticClass:"submenu-toggle"},[_c('i',{staticClass:"pe-7s-angle-down"})]):_vm._e(),_vm._v(" "),link.submenu?_c('ul',{staticClass:"submenu"},[_c('client-only',_vm._l(link.submenu,function(link,i){return _c('li',{key:i,staticClass:"title"},[_c('n-link',{attrs:{"to":link.url}},[_vm._v(" "+_vm._s(link.title)+" ")]),_vm._v(" "),link.submenu?_c('span',{staticClass:"submenu-toggle"},[_c('i',{staticClass:"pe-7s-angle-down"})]):_vm._e(),_vm._v(" "),link.submenu?_c('ul',{staticClass:"submenu"},[_c('client-only',_vm._l(link.submenu,function(link,i){return _c('li',{key:i},[_c('n-link',{attrs:{"to":link.url}},[_vm._v(" "+_vm._s(link.title)+" ")])],1);}),0)],1):_vm._e()],1);}),0)],1):_vm._e()],1);}),0)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue?vue&type=template&id=55e40ce8&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/ResponsiveMobileMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var ResponsiveMobileMenuvue_type_script_lang_js_ = ({data(){return{menus:[{url:'/',title:'Home'},{url:'/shop',title:'Ver Todo'},{url:'/shop',title:'Facial'},{url:'/shop',title:'Hidratante'},{url:'/shop',title:'Corporal'},{url:'/shop',title:'Accesorios'},{url:'/contact',title:'Contacto'}]};},mounted(){let getSiblings=function(e){let siblings=[];if(!e.parentNode){return siblings;}let sibling=e.parentNode.firstChild;while(sibling){if(sibling.nodeType===1&&sibling!==e){siblings.push(sibling);}sibling=sibling.nextSibling;}return siblings;};const subMenuToggle=document.querySelectorAll('.submenu-toggle');subMenuToggle.forEach(function(btn){btn.addEventListener('click',function(){if(!this.classList.contains('active')){this.classList.add('active');this.nextElementSibling.classList.add('active');this.closest('li').classList.add('active');getSiblings(this.closest('li')).forEach(function(item){item.classList.remove('active');item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child){child.classList.remove('active');});});}else{this.closest('li').classList.remove('active');this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child){child.classList.remove('active');});}});});}});
// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ResponsiveMobileMenuvue_type_script_lang_js_ = (ResponsiveMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ResponsiveMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55e40ce8",
  "b15bc230"
  
)

/* harmony default export */ var ResponsiveMobileMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_4e698e08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=4e698e08&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('ul',[_c('li',[_c('a',{staticClass:"link-nav",on:{"click":function($event){$event.preventDefault();return _vm.redirectHome.apply(null,arguments);}}},[_vm._v("Ver Todo")])]),_vm._v(" "),_vm._l(_vm.categories,function(category){return _c('li',{key:category.id},[_c('a',{staticClass:"link-nav",on:{"click":function($event){$event.preventDefault();_vm.categoryId=category.slug;}}},[_vm._v(_vm._s(category.name))])]);}),_vm._v(" "),_c('li',[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contacto")])],1)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=4e698e08&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Navigation.vue?vue&type=script&lang=js&
/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({data(){return{categoryId:''};},computed:{categories(){return this.$store.getters.getCategories;}},created(){this.getCategories();},methods:{getCategories(){this.$store.dispatch('getCategories');},redirectHome(){this.categoryId='';this.$router.push({path:'/shop'});}},watch:{categoryId(){this.$router.push({path:'/shop',query:{category:this.categoryId}});}}});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Navigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ec624572"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MiniCart.vue?vue&type=template&id=168b4b66&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"minicart-wrapper",class:_vm.miniCart},[_vm.products.length>0?_c('div',{staticClass:"shopping-cart-content"},[_c('ul',[_c('client-only',_vm._l(_vm.products,function(product){return _c('li',{key:product.id,staticClass:"single-shopping-cart"},[_c('div',{staticClass:"shopping-cart-img"},[_c('n-link',{attrs:{"to":`/product/${product.slug}`}},[product.images.length>0?_c('img',{attrs:{"src":`http://localhost:8000/${product.images[0].path}`,"alt":product.name}}):_c('img',{attrs:{"src":__webpack_require__(74),"alt":product.name}})])],1),_vm._v(" "),_c('div',{staticClass:"shopping-cart-title"},[_c('h4',[_c('n-link',{attrs:{"to":`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1),_vm._v(" "),_c('h6',[_vm._v("Cant: "+_vm._s(product.cartQuantity))]),_vm._v(" "),_c('span',[_vm._v(_vm._s((_vm.discountedPrice(product)*1.21).toFixed(2))+" €")])]),_vm._v(" "),_c('div',{staticClass:"shopping-cart-delete"},[_c('button',{on:{"click":function($event){return _vm.removeProduct(product);}}},[_c('i',{staticClass:"fa fa-times-circle"})])])]);}),0)],1),_vm._v(" "),_c('div',{staticClass:"shopping-cart-total"},[_c('h4',[_vm._v("Total : "),_c('span',{staticClass:"shop-total"},[_vm._v(_vm._s((_vm.total*1.21).toFixed(2))+" €")])])]),_vm._v(" "),_c('div',{staticClass:"shopping-cart-btn btn-hover text-center",on:{"click":function($event){return _vm.$emit('minicartClose');}}},[_c('n-link',{staticClass:"default-btn",attrs:{"to":"/cart"}},[_vm._v("ver carrito")]),_vm._v(" "),_c('n-link',{staticClass:"default-btn",attrs:{"to":"/checkout"}},[_vm._v("comprar ahora")])],1)]):_c('div',{staticClass:"shopping-cart-content text-center"},[_c('p',[_vm._v("No hay productos en el carrito")])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/MiniCart.vue?vue&type=template&id=168b4b66&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/MiniCart.vue?vue&type=script&lang=js&
/* harmony default export */ var MiniCartvue_type_script_lang_js_ = ({props:["miniCart"],computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}},methods:{removeProduct(product){// for notification
this.$notify({title:'Producto eliminado'});this.$store.dispatch('removeProductFromCart',product);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;}}});
// CONCATENATED MODULE: ./components/MiniCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MiniCartvue_type_script_lang_js_ = (MiniCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/MiniCart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MiniCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1863148a"
  
)

/* harmony default export */ var MiniCart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=9252cf06&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"offcanvas-mobile-menu-wrapper"},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"mobile-menu-inner\">","</div>",[_vm._ssrNode("<button class=\"close-btn\"><i class=\"pe-7s-close\"></i></button> "),_vm._ssrNode("<div class=\"mobile-menu-inner-wrapper\">","</div>",[_vm._ssrNode("<div class=\"offcanvas-body-inner\">","</div>",[_vm._ssrNode("<div class=\"menu-navigation\">","</div>",[_c('ResponsiveMobileMenu')],1)])])],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=9252cf06&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({components:{ResponsiveMobileMenu:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 77))}});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d89efaf6"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ResponsiveMobileMenu: __webpack_require__(77).default})


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=d54db5de&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{staticClass:"footer-area bg-gray pt-100 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo-footer.png","alt":"logo"}})])],1),_vm._ssrNode(" <p>© 2022 <a href=\"#\" target=\"_blank\">TriviCare Natural Cosmetics.</a><br> Todos los derechos reservados.</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-30\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>SOBRE NOSOTROS</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Sobre nosotros")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Puntos de venta")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contacto")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Seguimiento de envío")])],1)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-50\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>LINKS PARA EL COMPRADOR</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Devoluciones")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Política de envío")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Alérgenos")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("Preguntas Frecuentes")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-2 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>SIGUENOS</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/trivicare\" target=\"_blank\">Facebook</a></li> <li><a href=\"https://www.instagram.com/trivicare\" target=\"_blank\">Instagram</a></li> <li><a href=\"https://www.tiktok.com/@trivicare\" target=\"_blank\">TikTok</a></li></ul></div></div></div> <div class=\"col-lg-4 col-sm-6\"><div class=\"footer-widget mb-30 ml-70\"><div class=\"footer-title\"><h3>SUSCRÍBETE</h3></div> <div class=\"subscribe-style\"><p>Recibe por email ofertas y nuestras últimas novedades.</p> <div class=\"subscribe-form\"><form class=\"mc-form\"><input type=\"email\" required=\"required\" placeholder=\"Introduce tu email...\" name=\"email\" class=\"email\"> <button type=\"submit\" name=\"subscribe\" class=\"button\">Suscribirse</button></form></div></div></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=d54db5de&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({methods:{async subscribeForm(){const formData=new FormData(this.$refs.form);await this.$axios.post('/api/newsletter',formData).then(response=>{//console.log(response);
this.$notify({title:'Gracias por suscribirte, pronto recibirás nuestras novedades.'});}).catch(error=>{//console.log(error);
});}}});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4db31c09"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=966ced50&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-content text-center\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Inicio")])],1),_vm._ssrNode(" <li class=\"active\">"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</li>")],2)])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=966ced50&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({props:["pageTitle"]});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da651894"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_00c67024_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=00c67024&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area\" data-v-00c67024>","</header>",[_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+" data-v-00c67024>","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-00c67024>","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo-2.png","alt":"trivicare logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"main-menu\" data-v-00c67024>","</div>",[_vm._ssrNode("<nav data-v-00c67024>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"same-style d-none d-lg-block me-2\" data-v-00c67024>","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('i',{staticClass:"fa fa-home"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\" data-v-00c67024>","</div>",[_vm._ssrNode("<button class=\"account-setting-active\" data-v-00c67024><i class=\"pe-7s-user-female\" data-v-00c67024></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+" data-v-00c67024>","</div>",[_vm.role=='admin'?_vm._ssrNode("<ul data-v-00c67024>","</ul>",[_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/crud"}},[_vm._v("PCD")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("Mi Perfil")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Mis pedidos")])],1),_vm._ssrNode(" <li data-v-00c67024><a data-v-00c67024>Cerrar sesión</a></li>")],2):_vm.$auth.user?_vm._ssrNode("<ul data-v-00c67024>","</ul>",[_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("Mi Perfil")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/my-orders"}},[_vm._v("Mis pedidos")])],1),_vm._ssrNode(" <li data-v-00c67024><a data-v-00c67024>Cerrar sesión</a></li>")],2):_vm._ssrNode("<ul data-v-00c67024>","</ul>",[_vm._ssrNode("<li data-v-00c67024>","</li>",[_c('n-link',{attrs:{"to":"/login"}},[_vm._v("Iniciar sesión/Registrar")])],1)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\" data-v-00c67024>","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\" data-v-00c67024>"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\" data-v-00c67024>","</div>",[_vm._ssrNode("<button class=\"icon-cart\" data-v-00c67024><i class=\"pe-7s-shopbag\" data-v-00c67024></i> <span class=\"count-style\" data-v-00c67024>"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\" data-v-00c67024><button class=\"mobile-aside-button\" data-v-00c67024><i class=\"pe-7s-menu\" data-v-00c67024></i></button></div>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block background-color-banner\" data-v-00c67024>","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"header-top-inner\" data-v-00c67024>","</div>",[_vm._ssrNode("<div class=\"header-offer m-auto\" data-v-00c67024>","</div>",[_c('vue-typer',{staticClass:"custom-two",attrs:{"text":"Envío gratis a partir de 50 €","repeat":0}})],1)])])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=00c67024&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
/* harmony default export */ var HeaderWithTopbarvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 79)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 80))},props:['containerClass','msg'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false,categories:[],categoryFilter:'',role:''};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});this.getCategories();this.getRoles();},watch:{father(){this.$emit("father",this.father);},categoryFilter(){this.$emit("categoryFilter",this.categoryFilter);}},methods:{async logout(){await this.$auth.logout();window.location.reload();this.$notify({title:'Has cerrado sesión!'});},async getCategories(){const response=await this.$axios.get('/api/categories');this.categories=response.data.data;},redirectToShop(){this.$router.push('/shop');},categoryId(value){this.$emit("categoryFilter",value);},getRoles(){if(this.$auth.user){const roles=this.$auth.user.roles;if(roles!=null){roles.map(role=>{this.role=role.name;});}else{this.role='';}}}}});
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderWithTopbarvue_type_script_lang_js_ = (HeaderWithTopbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00c67024",
  "7c221de4"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(79).default,MiniCart: __webpack_require__(80).default,OffCanvasMobileMenu: __webpack_require__(81).default})


/***/ })

};;