exports.ids = ["pages/checkout"];
exports.modules = {

/***/ "./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-0!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-2!./node_modules/sass-resources-loader/lib/loader.js??ref--9-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/checkout.vue?vue&type=template&id=3f9ab082&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=3f9ab082& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"cart-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container"}}),_vm._v(" "),_c("Breadcrumb",{attrs:{pageTitle:"Dirección de Envío"}}),_vm._v(" "),_vm.$auth.user.email_verified_at!=null?_c("div",{staticClass:"checkout-area pt-95 pb-100"},[_c("div",{staticClass:"container"},[_vm.products.length>0?_c("div",{staticClass:"row"},[_vm.$auth.user.user_profile.length>0?_c("div",{staticClass:"col-lg-7"},[_c("h3",{staticClass:"text-center mb-2"},[_vm._v("Estas a punto de terminar tu compra")]),_vm._v(" "),_c("p",{staticClass:"text-center"},[_vm._v('Seleccione una de sus direcciones de envio, un método de pago, un tipo de envío y pulse en el botón "Pagar Ahora".')]),_vm._v(" "),_c("div",{staticClass:"panel panel-default single-my-account mt-2"},[_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-1"}},[_vm._v("Elige una dirección ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse",attrs:{id:"my-account-1","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"form-group p-5"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.selected,expression:"selected"}],ref:"userIdProfile",staticClass:"form-select",on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.selected=$event.target.multiple?$$selectedVal:$$selectedVal[0];},_vm.enableButton]}},[_vm.selected=="Seleccione una dirección"?_c("option",{attrs:{selected:"",disabled:""}},[_vm._v(_vm._s(_vm.selected))]):_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Seleccione una dirección")]),_vm._v(" "),_c("client-only",_vm._l(_vm.$auth.user.user_profile,function(profile){return _c("option",{key:profile.id,domProps:{value:profile.id}},[_vm._v(_vm._s(profile.name)+" "+_vm._s(profile.lastname)+", "+_vm._s(profile.address)+", "+_vm._s(profile.zipcode)+" "+_vm._s(profile.city)+" ("+_vm._s(profile.state)+")")]);}),0)],1)])])]),_vm._v(" "),_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-2"}},[_vm._v("Usar otra dirección de envío ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-2","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"myaccount-info-wrapper"},[_c("form",{staticClass:"row",on:{submit:function($event){$event.preventDefault();return _vm.createProfile.apply(null,arguments);}}},[_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Nombre")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:_vm.name},on:{input:function($event){if($event.target.composing)return;_vm.name=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Apellidos")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.lastname,expression:"lastname"}],attrs:{type:"text",required:""},domProps:{value:_vm.lastname},on:{input:function($event){if($event.target.composing)return;_vm.lastname=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Dirección")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.address,expression:"address"}],attrs:{type:"text",required:""},domProps:{value:_vm.address},on:{input:function($event){if($event.target.composing)return;_vm.address=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Opcional")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.optional_address,expression:"optional_address"}],attrs:{type:"text"},domProps:{value:_vm.optional_address},on:{input:function($event){if($event.target.composing)return;_vm.optional_address=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-4 col-md-4"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Código Postal")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.zipcode,expression:"zipcode"}],attrs:{type:"number",required:""},domProps:{value:_vm.zipcode},on:{input:function($event){if($event.target.composing)return;_vm.zipcode=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-8 col-md-8"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Ciudad")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.city,expression:"city"}],attrs:{type:"text",required:""},domProps:{value:_vm.city},on:{input:function($event){if($event.target.composing)return;_vm.city=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Provincia")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.state,expression:"state"}],attrs:{type:"text",required:""},domProps:{value:_vm.state},on:{input:function($event){if($event.target.composing)return;_vm.state=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("País")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.country,expression:"country"}],attrs:{type:"text",required:""},domProps:{value:_vm.country},on:{input:function($event){if($event.target.composing)return;_vm.country=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-5 col-md-5"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Teléfono")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.phone,expression:"phone"}],attrs:{type:"number",required:""},domProps:{value:_vm.phone},on:{input:function($event){if($event.target.composing)return;_vm.phone=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"form-check ms-3 mb-4"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.checked,expression:"checked"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"flexCheckDefault"},domProps:{checked:Array.isArray(_vm.checked)?_vm._i(_vm.checked,"true")>-1:_vm.checked},on:{change:function($event){var $$a=_vm.checked,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checked=$$a.concat([$$v]));}else{$$i>-1&&(_vm.checked=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.checked=$$c;}}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{for:"flexCheckDefault"}},[_vm._v("\n                                                    He leído y acepto la "),_c("a",{attrs:{href:"#",title:"Ver política de privacidad"}},[_vm._v("política de privacidad")]),_vm._v(".\n                                                ")])]),_vm._v(" "),_c("div",{staticClass:"billing-btn"},[_c("button",{staticClass:"btn btn-form",class:{disabled:_vm.checked?false:true},attrs:{type:"submit",title:"Guardar"}},[_vm._v("Guardar")])])])])])]),_vm._v(" "),_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-3"}},[_vm._v("Seleccione un método de pago ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-3","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"ms-2 p-5"},[_c("div",{staticClass:"form-check mb-2 d-flex align-items-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.payment,expression:"payment"}],staticClass:"form-check-input mb-1",attrs:{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:"card"},domProps:{checked:_vm._q(_vm.payment,"card")},on:{change:function($event){_vm.payment="card";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label ms-2",attrs:{for:"flexRadioDefault1"}},[_vm._v("\n                                                Pago por tarjeta\n                                            ")]),_vm._v(" "),_c("img",{staticClass:"ms-2",attrs:{src:"/payment/metodosdepago.webp",alt:"metodos-de-pago.webp",width:"50%"}})]),_vm._v(" "),_c("div",{staticClass:"form-check d-flex align-items-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.payment,expression:"payment"}],staticClass:"form-check-input mb-1",attrs:{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"paypal"},domProps:{checked:_vm._q(_vm.payment,"paypal")},on:{change:function($event){_vm.payment="paypal";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label ms-2",attrs:{for:"flexRadioDefault2"}},[_vm._v("\n                                                Pago por Paypal\n                                            ")]),_vm._v(" "),_c("img",{staticClass:"ms-2",attrs:{src:"/payment/paypal.svg",alt:"paypal.svg",width:"30%"}})])])])]),_vm._v(" "),_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-4"}},[_vm._v("Selecciona el tipo de envío ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-4","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"ms-2 p-5"},[_c("div",{staticClass:"form-check mb-2 d-flex align-items-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.shippingMethod,expression:"shippingMethod"}],staticClass:"form-check-input mb-1",attrs:{type:"radio",name:"flexRadio",id:"flexRadioDefault3",value:"correos"},domProps:{checked:_vm._q(_vm.shippingMethod,"correos")},on:{change:function($event){_vm.shippingMethod="correos";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label ms-2",attrs:{for:"flexRadioDefault3"}},[_vm._v("\n                                                Envío por Correos 48h/72h\n                                            ")]),_vm._v(" "),_c("img",{staticClass:"ms-2",attrs:{src:"/payment/correos.webp",alt:"correos.webp",width:"20%"}}),_vm._v(" "),_c("span",{staticClass:"ms-5"},[_vm._v(_vm._s(_vm.getShipping(_vm.total))+" €")])]),_vm._v(" "),_c("div",{staticClass:"form-check d-flex align-items-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.shippingMethod,expression:"shippingMethod"}],staticClass:"form-check-input mb-1",attrs:{type:"radio",name:"flexRadio",id:"flexRadioDefault4",value:"gls"},domProps:{checked:_vm._q(_vm.shippingMethod,"gls")},on:{change:function($event){_vm.shippingMethod="gls";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label ms-2",attrs:{for:"flexRadioDefault4"}},[_vm._v("\n                                                Envío por GLS 24h/48h\n                                            ")]),_vm._v(" "),_c("img",{staticClass:"ms-5",attrs:{src:"/payment/gls.webp",alt:"gls.webp",width:"10%"}}),_vm._v(" "),_c("span",{staticStyle:{"margin-left":"5.7rem"}},[_vm._v(_vm._s(_vm.getShipping(_vm.total))+" €")])])])])])])]):_c("div",{staticClass:"col-lg-7"},[_c("div",{staticClass:"billing-info-wrap"},[_c("h3",[_vm._v("Datos de envío y facturación")]),_vm._v(" "),_c("form",{staticClass:"row",on:{submit:function($event){$event.preventDefault();return _vm.createProfile.apply(null,arguments);}}},[_c("div",{staticClass:"col-lg-5 col-md-5"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Nombre")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:_vm.name},on:{input:function($event){if($event.target.composing)return;_vm.name=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-7 col-md-7"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Apellidos")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.lastname,expression:"lastname"}],attrs:{type:"text",required:""},domProps:{value:_vm.lastname},on:{input:function($event){if($event.target.composing)return;_vm.lastname=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Dirección")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.address,expression:"address"}],staticClass:"billing-address",attrs:{placeholder:"Calle y número",type:"text",required:""},domProps:{value:_vm.address},on:{input:function($event){if($event.target.composing)return;_vm.address=$event.target.value;}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.optional_address,expression:"optional_address"}],attrs:{placeholder:"Opcional",type:"text"},domProps:{value:_vm.optional_address},on:{input:function($event){if($event.target.composing)return;_vm.optional_address=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Ciudad")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.city,expression:"city"}],attrs:{type:"text",required:""},domProps:{value:_vm.city},on:{input:function($event){if($event.target.composing)return;_vm.city=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Provincia")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.state,expression:"state"}],attrs:{type:"text",required:""},domProps:{value:_vm.state},on:{input:function($event){if($event.target.composing)return;_vm.state=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Código Postal")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.zipcode,expression:"zipcode"}],attrs:{type:"text",required:""},domProps:{value:_vm.zipcode},on:{input:function($event){if($event.target.composing)return;_vm.zipcode=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("Teléfono")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.phone,expression:"phone"}],attrs:{type:"text",required:""},domProps:{value:_vm.phone},on:{input:function($event){if($event.target.composing)return;_vm.phone=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info mb-20"},[_c("label",[_vm._v("País")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.country,expression:"country"}],attrs:{type:"text",required:""},domProps:{value:_vm.country},on:{input:function($event){if($event.target.composing)return;_vm.country=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"form-check ms-4"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.checked,expression:"checked"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"flexCheckDefault"},domProps:{checked:Array.isArray(_vm.checked)?_vm._i(_vm.checked,"true")>-1:_vm.checked},on:{change:function($event){var $$a=_vm.checked,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checked=$$a.concat([$$v]));}else{$$i>-1&&(_vm.checked=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.checked=$$c;}}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{for:"flexCheckDefault"}},[_vm._v("\n                                        He leído y acepto la "),_c("a",{attrs:{href:"#",title:"Ver política de privacidad"}},[_vm._v("política de privacidad")]),_vm._v(".\n                                    ")])]),_vm._v(" "),_c("div",{staticClass:"billing-btn mt-5"},[_c("button",{staticClass:"btn btn-form",class:{disabled:_vm.checked?false:true},attrs:{type:"submit",title:"Guardar"}},[_vm._v("Guardar")])])])])]),_vm._v(" "),_c("div",{staticClass:"col-lg-5"},[_c("div",{staticClass:"your-order-area"},[_c("h3",[_vm._v("Tu Pedido")]),_vm._v(" "),_c("div",{staticClass:"your-order-wrap gray-bg-4"},[_c("div",{staticClass:"your-order-product-info"},[_c("div",{staticClass:"your-order-top"},[_c("ul",[_c("li",[_vm._v("Producto")]),_vm._v(" "),_c("li",[_vm._v("Total")])])]),_vm._v(" "),_c("div",{staticClass:"your-order-middle"},[_c("ul",[_c("client-only",_vm._l(_vm.products,function(product,index){return _c("li",{key:index},[_c("span",{staticClass:"order-middle-left"},[_vm._v(_vm._s(product.name)+"  x "+_vm._s(product.cartQuantity)+" unid(s)")]),_vm._v(" "),_c("span",{staticClass:"order-price"},[_vm._v(_vm._s((_vm.discountedPrice(product)*product.cartQuantity*1.21).toFixed(2))+" €")])]);}),0)],1)]),_vm._v(" "),_c("div",[_c("ul",{staticClass:"d-flex justify-content-between mb-2"},[_vm.cuponStore.discount>0?_c("li",{staticClass:"your-order-shipping"},[_vm._v("Código descuento")]):_vm._e(),_vm._v(" "),_vm.cuponStore.discount>0?_c("li",{staticClass:"text-danger"},[_vm._v("-"+_vm._s((_vm.subTotal*(_vm.cuponStore.discount/100)).toFixed(2))+" €")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"your-order-bottom"},[_c("ul",[_c("li",{staticClass:"your-order-shipping"},[_vm._v("Gastos de envío")]),_vm._v(" "),(_vm.total*1.21).toFixed(2)>=50?_c("li",[_vm._v("Envio Gratis")]):_c("li",[_vm._v(_vm._s(_vm.getShipping(_vm.total))+" €")])])]),_vm._v(" "),_c("div",{staticClass:"your-order-total"},[_c("ul",[_c("li",{staticClass:"order-total"},[_vm._v("Total")]),_vm._v(" "),(_vm.total*1.21).toFixed(2)<=50?_c("li",[_vm._v(_vm._s((_vm.total*1.21+_vm.shipping).toFixed(2))+" €")]):_c("li",[_vm._v(_vm._s((_vm.total*1.21).toFixed(2))+" €")])])])])]),_vm._v(" "),_c("div",{staticClass:"mt-2"},[_c("button",{staticClass:"btn btn-theme",attrs:{id:"end-select",disabled:""},on:{click:_vm.onClick}},[_vm._v("Hacer Pedido")])])])])]):_vm._e()])]):_vm._e(),_vm._v(" "),_vm.$auth.user.email_verified_at==null?_c("div",{staticClass:"my-account-area pb-80 pt-100 text-center"},[_c("h1",{staticClass:"mb-5"},[_vm._v("Su cuenta no está verificada")]),_vm._v(" "),_c("p",[_vm._v('Por favor, para realizar está y otras acciones debe ir a su cuenta de email y buscar el correo electrónico "Trivicare.com | Verificación de correo electrónico".')]),_vm._v(" "),_c("p",[_vm._v("Si no lo encuentra, revise su carpeta de spam o "),_c("a",{on:{click:function($event){$event.preventDefault();return _vm.resendEmail.apply(null,arguments);}}},[_vm._v("pulse aquí")]),_vm._v(" para generar un nuevo correo.")])]):_vm._e(),_vm._v(" "),_c("TheFooter"),_vm._v(" "),_c("StripeElement")],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({middleware:'auth',transition:{name:'fade',mode:'out-in'},data(){return{shipping:0,selected:'Seleccione una dirección',name:'',lastname:'',address:'',optional_address:'',city:'',state:'',zipcode:'',phone:'',country:'',disabled:true,userIdProfile:null,token_id:'',checked:false,payment:null,shippingMethod:null};},components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),StripeElement:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/StripeElement */ "./components/StripeElement.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},computed:{products(){return this.$store.getters.getCart;},subTotal(){return this.$store.getters.getSubTotal;},total(){return this.$store.getters.getTotal;},cuponStore(){const cupon=this.$store.getters.getCupon;const today=new Date();const expires=new Date(cupon.validity);if(expires.getDate()<=today.getDate()&&expires.getMonth()<=today.getMonth()&&expires.getFullYear()<=today.getFullYear()){return this.$notify({group:'foo',title:'Cupón caducado',text:'El cupón que has introducido ha caducado',type:'error'});}else{return cupon;}}},watch:{payment(){document.getElementById('my-account-4').classList.remove('collapse');},shippingMethod(){if(this.payment!=null&&this.shippingMethod!=null&&this.disabled==false){document.getElementById('end-select').disabled=false;}}},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},1000);});var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();},methods:{onClick(){this.createOrder();},async createProfile(){const response=await this.$axios.post('/api/register-profile',{user_id:this.$auth.user.id,name:this.name,lastname:this.lastname,address:this.address,optional_address:this.optional_address,city:this.city,state:this.state,zipcode:this.zipcode,phone:this.phone,country:this.country});this.name='';this.lastname='';this.address='';this.optional_address='';this.city='';this.state='';this.zipcode='';this.phone='';this.country='';this.$auth.fetchUser();this.$notify({type:'success',text:'Dirección creada correctamente'});},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},enableButton(e){this.disabled=false;this.userIdProfile=e.target.value;document.getElementById("my-account-3").classList.remove("collapse");},async createOrder(){const products=JSON.stringify(this.$store.getters.getCart);const cupon=this.$store.getters.getCupon;await this.$axios.post('/api/orders',{user_id:this.$auth.user.id,user_profile_id:this.userIdProfile,products:products,subTotal:this.$store.getters.getSubTotal,total:this.$store.getters.getTotal,coupon:cupon.code,shipping:this.shipping}).then(res=>{console.log(res.data.order.id);if(this.payment=='card'){this.$modal.show('StripeElement',{orderId:res.data.order.id,shipping:this.shipping});}});},getShipping(total){if(total<50){this.shipping=5.99;return this.shipping;}else{this.shipping=0;return this.shipping;}},async resendEmail(){await this.$axios.post('/api/resend-email/'+this.$auth.user.id).then(res=>{console.log(res);this.$notify({title:'Email reenviado'});}).catch(error=>{this.errors=Object.values(error.response.data).flat();});}},head(){return{title:"Resumen de tu Pedido"};}});

/***/ }),

/***/ "./pages/checkout.vue":
/*!****************************!*\
  !*** ./pages/checkout.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_vue_vue_type_template_id_3f9ab082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=3f9ab082& */ "./pages/checkout.vue?vue&type=template&id=3f9ab082&");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ "./pages/checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss& */ "./pages/checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_3f9ab082___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkout_vue_vue_type_template_id_3f9ab082___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "43ceb3cb"
  
)

component.options.__file = "pages/checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/checkout.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./pages/checkout.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./checkout.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss&":
/*!**************************************************************************!*\
  !*** ./pages/checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3f9ab082_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-0!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-2!../node_modules/sass-resources-loader/lib/loader.js??ref--9-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss& */ "./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./pages/checkout.vue?vue&type=style&index=0&id=3f9ab082&lang=scss&");
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3f9ab082_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3f9ab082_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3f9ab082_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3f9ab082_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./pages/checkout.vue?vue&type=template&id=3f9ab082&":
/*!***********************************************************!*\
  !*** ./pages/checkout.vue?vue&type=template&id=3f9ab082& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_3f9ab082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=template&id=3f9ab082& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/checkout.vue?vue&type=template&id=3f9ab082&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_3f9ab082___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_3f9ab082___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;