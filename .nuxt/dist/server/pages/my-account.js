exports.ids = ["pages/my-account"];
exports.modules = {

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

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/my-account.vue?vue&type=template&id=0bf7e245&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-account.vue?vue&type=template&id=0bf7e245& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"shop-page-wrapper"},[_c("HeaderWithTopbar",{attrs:{containerClass:"container"}}),_vm._v(" "),_c("Breadcrumb",{attrs:{pageTitle:"Mi Cuenta"}}),_vm._v(" "),_vm.$auth.user.email_verified_at!=null?_c("div",{staticClass:"my-account-area pb-80 pt-100"},[_vm.errors?_c("div",{staticClass:"w-50 m-auto"},[_c("client-only",_vm._l(_vm.errors,function(error){return _c("div",{key:error.id,staticClass:"alert alert-danger",attrs:{role:"alert"}},[_vm._v("\n                        "+_vm._s(error)+"\n                    ")]);}),0)],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"container"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"ms-auto me-auto col-lg-9"},[_c("div",{staticClass:"my-account-wrapper"},[_c("div",{staticClass:"panel-group",attrs:{id:"faq"}},[_c("div",{staticClass:"panel panel-default single-my-account"},[_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("span",[_vm._v("1 .")]),_vm._v(" "),_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-1"}},[_vm._v("Editar datos de tu cuenta ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse show",attrs:{id:"my-account-1","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("form",{on:{submit:function($event){$event.preventDefault();return _vm.updateEmail.apply(null,arguments);}}},[_c("div",{staticClass:"myaccount-info-wrapper"},[_c("div",{staticClass:"account-info-wrapper"},[_c("h4",[_vm._v("Información de mi cuenta")]),_vm._v(" "),_c("h5",[_vm._v("Correo eléctronico")])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("p",[_c("strong",[_vm._v("Email actual:")]),_vm._v(" "+_vm._s(_vm.$auth.user.email))]),_vm._v(" "),_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Email")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.email,expression:"email"}],attrs:{type:"email",required:""},domProps:{value:_vm.email},on:{input:function($event){if($event.target.composing)return;_vm.email=$event.target.value;}}})])])]),_vm._v(" "),_c("div",{staticClass:"billing-back-btn"},[_c("div",{staticClass:"billing-back"},[_c("a",{attrs:{href:"#"}},[_c("i",{staticClass:"fa fa-arrow-up"}),_vm._v(" atrás")])]),_vm._v(" "),_c("div",{staticClass:"billing-btn"},[_c("button",{attrs:{type:"submit",title:"Actualizar email"}},[_vm._v("Actualizar Email")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"panel panel-default single-my-account"},[_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("span",[_vm._v("2 .")]),_vm._v(" "),_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-2"}},[_vm._v("Cambiar tu contraseña ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-2","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"myaccount-info-wrapper"},[_c("div",{staticClass:"account-info-wrapper"},[_c("h4",[_vm._v("Cambiar Contraseña")]),_vm._v(" "),_c("h5",[_vm._v("Tu Contraseña")])]),_vm._v(" "),_c("form",{on:{submit:function($event){$event.preventDefault();return _vm.updatePassword.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Contraseña actual")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.old_password,expression:"old_password"}],attrs:{type:"password",required:""},domProps:{value:_vm.old_password},on:{input:function($event){if($event.target.composing)return;_vm.old_password=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Nueva Contraseña")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.password,expression:"password"}],attrs:{type:"password",required:""},domProps:{value:_vm.password},on:{input:function($event){if($event.target.composing)return;_vm.password=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Confirma tu nueva Contraseña")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.password_confirmation,expression:"password_confirmation"}],attrs:{type:"password",required:""},domProps:{value:_vm.password_confirmation},on:{input:function($event){if($event.target.composing)return;_vm.password_confirmation=$event.target.value;}}})])])]),_vm._v(" "),_c("div",{staticClass:"billing-back-btn"},[_c("div",{staticClass:"billing-back"},[_c("a",{attrs:{href:"#"}},[_c("i",{staticClass:"fa fa-arrow-up"}),_vm._v(" atrás")])]),_vm._v(" "),_c("div",{staticClass:"billing-btn"},[_c("button",{attrs:{type:"submit",title:"Actualizar contraseña"}},[_vm._v("Actualizar contraseña")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"panel panel-default single-my-account"},[_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("span",[_vm._v("3 .")]),_vm._v(" "),_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-3"}},[_vm._v("Gestionar tu dirección de envío ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-3","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"myaccount-info-wrapper"},[_c("div",{staticClass:"account-info-wrapper"},[_c("h4",[_vm._v("Direcciónes de Envío")])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("client-only",_vm._l(_vm.$auth.user.user_profile,function(profile){return _c("div",{key:profile.id,staticClass:"card w-75 m-auto mb-3"},[_c("div",{staticClass:"card-body"},[_c("h5",{staticClass:"card-title"},[_vm._v(_vm._s(profile.name)+"\n                                                                    "+_vm._s(profile.lastname))]),_vm._v(" "),_c("p",{staticClass:"card-text"},[_vm._v(_vm._s(profile.address))]),_vm._v(" "),_c("p",{staticClass:"card-text"},[_vm._v(_vm._s(profile.phone))]),_vm._v(" "),_c("p",{staticClass:"card-text"},[_vm._v(_vm._s(profile.zipcode)+"\n                                                                    "+_vm._s(profile.city)+" ("+_vm._s(profile.state)+")")]),_vm._v(" "),_c("p",{staticClass:"card-text"},[_vm._v(_vm._s(profile.country))]),_vm._v(" "),_c("a",{staticClass:"btn btn-light",on:{click:function($event){$event.preventDefault();return _vm.deleteProfile(profile.id);}}},[_vm._v("Eliminar")])])]);}),0)],1),_vm._v(" "),_c("div",{staticClass:"billing-back-btn"},[_c("div",{staticClass:"billing-back"},[_c("a",{attrs:{href:"#"}},[_c("i",{staticClass:"fa fa-arrow-up"}),_vm._v(" atrás")])])])])])])]),_vm._v(" "),_c("div",{staticClass:"panel panel-default single-my-account"},[_c("div",{staticClass:"panel-heading my-account-title"},[_c("h3",{staticClass:"panel-title"},[_c("span",[_vm._v("4 .")]),_vm._v(" "),_c("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-4"}},[_vm._v("Crear\n                                                otra dirección de envío ")])])]),_vm._v(" "),_c("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-4","data-bs-parent":"#faq"}},[_c("div",{staticClass:"panel-body"},[_c("div",{staticClass:"myaccount-info-wrapper"},[_c("form",{staticClass:"row",on:{submit:function($event){$event.preventDefault();return _vm.createProfile.apply(null,arguments);}}},[_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Nombre")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:_vm.name},on:{input:function($event){if($event.target.composing)return;_vm.name=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Apellidos")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.lastname,expression:"lastname"}],attrs:{type:"text",required:""},domProps:{value:_vm.lastname},on:{input:function($event){if($event.target.composing)return;_vm.lastname=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Dirección")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.address,expression:"address"}],attrs:{type:"text",required:""},domProps:{value:_vm.address},on:{input:function($event){if($event.target.composing)return;_vm.address=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-12 col-md-12"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Opcional")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.optional_address,expression:"optional_address"}],attrs:{type:"text"},domProps:{value:_vm.optional_address},on:{input:function($event){if($event.target.composing)return;_vm.optional_address=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-4 col-md-4"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Código Postal")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.zipcode,expression:"zipcode"}],attrs:{type:"number",required:""},domProps:{value:_vm.zipcode},on:{input:function($event){if($event.target.composing)return;_vm.zipcode=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-8 col-md-8"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Ciudad")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.city,expression:"city"}],attrs:{type:"text",required:""},domProps:{value:_vm.city},on:{input:function($event){if($event.target.composing)return;_vm.city=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Provincia")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.state,expression:"state"}],attrs:{type:"text",required:""},domProps:{value:_vm.state},on:{input:function($event){if($event.target.composing)return;_vm.state=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-6 col-md-6"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("País")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.country,expression:"country"}],attrs:{type:"text",required:""},domProps:{value:_vm.country},on:{input:function($event){if($event.target.composing)return;_vm.country=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-5 col-md-5"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Teléfono")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.phone,expression:"phone"}],attrs:{type:"number",required:""},domProps:{value:_vm.phone},on:{input:function($event){if($event.target.composing)return;_vm.phone=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-lg-7 col-md-7"},[_c("div",{staticClass:"billing-info"},[_c("label",[_vm._v("Email")]),_vm._v(" "),_c("input",{attrs:{type:"email",disabled:""},domProps:{value:_vm.$auth.user.email}})])]),_vm._v(" "),_c("div",{staticClass:"billing-btn"},[_c("button",{staticClass:"btn-form",attrs:{type:"submit",title:"Guardar"}},[_vm._v("Guardar")])])])])])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.$auth.user.email_verified_at==null?_c("div",{staticClass:"my-account-area pb-80 pt-100 text-center"},[_c("h1",{staticClass:"mb-5"},[_vm._v("Su cuenta no está verificada")]),_vm._v(" "),_c("p",[_vm._v('Por favor, para realizar está y otras acciones debe ir a su cuenta de email y buscar el correo electrónico "Trivicare.com | Verificación de correo electrónico".')]),_vm._v(" "),_c("p",[_vm._v("Si no lo encuentra, revise su carpeta de spam o "),_c("a",{on:{click:function($event){$event.preventDefault();return _vm.resendEmail.apply(null,arguments);}}},[_vm._v("pulse aquí")]),_vm._v(" para generar un nuevo correo.")])]):_vm._e(),_vm._v(" "),_vm.$auth.user.email_verified_at!=null?_c("div",{staticClass:"text-center mb-5"},[_c("a",{staticClass:"btn btn-light",on:{click:function($event){$event.preventDefault();return _vm.deleteAccount.apply(null,arguments);}}},[_vm._v("Eliminar cuenta")])]):_vm._e(),_vm._v(" "),_c("TheFooter"),_vm._v(" "),_c("VueIfBot",[_c("CookieConsent",[_c("template",{slot:"message"},[_c("span",[_vm._v("\n                    Este sitio web utiliza cookies para mejorar tu experiencia. Si quieres saber más, visita nuestra \n                    "),_c("a",{staticClass:"text-info",attrs:{href:"/politica-de-cookies"}},[_vm._v("Política de Cookies")]),_vm._v(".\n                ")])]),_vm._v(" "),_c("template",{slot:"button"},[_c("button",{staticClass:"btn border-1",attrs:{title:"Aceptar"}},[_vm._v("Aceptar")])])],2)],1)],1)]);};var staticRenderFns=[];render._withStripped=true;

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

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/my-account.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/my-account.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_cookieconsent_component_src_components_CookieConsent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cookieconsent-component/src/components/CookieConsent.vue */ "./node_modules/vue-cookieconsent-component/src/components/CookieConsent.vue");
/* harmony import */ var vue_if_bot_dist_vue_if_bot_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-if-bot/dist/vue-if-bot.es */ "./node_modules/vue-if-bot/dist/vue-if-bot.es.js");
/* harmony default export */ __webpack_exports__["default"] = ({middleware:'auth',transition:{name:'fade',mode:'out-in'},components:{CookieConsent: vue_cookieconsent_component_src_components_CookieConsent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],VueIfBot: vue_if_bot_dist_vue_if_bot_es__WEBPACK_IMPORTED_MODULE_2__["default"]},data(){return{email:'',old_password:'',password:'',password_confirmation:'',errors:[],name:'',lastname:'',address:'',optional_address:'',city:'',state:'',zipcode:'',phone:'',country:''};},components:{HeaderWithTopbar:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/HeaderWithTopbar */ "./components/HeaderWithTopbar.vue")),Breadcrumb:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Breadcrumb */ "./components/Breadcrumb.vue")),TheFooter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter */ "./components/TheFooter.vue"))},mounted(){},methods:{async updateEmail(){sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({title:'¿Estas seguro de que quieres cambiar tu email?',showCancelButton:true,confirmButtonText:'Si, cambiar'}).then(result=>{/* Read more about isConfirmed, isDenied below */if(result.isConfirmed){this.$axios.post('/api/update-email/'+this.$auth.user.id,{email:this.email}).then(()=>{sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('¡Email actualizado!','','success');this.$auth.fetchUser();this.errors=[];this.email='';}).catch(error=>{this.errors=Object.values(error.response.data).flat();});}});},async updatePassword(){await this.$axios.post('/api/update-password/'+this.$auth.user.id,{old_password:this.old_password,password:this.password,password_confirmation:this.password_confirmation}).then(()=>{sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('¡Contraseña actualizada!','','success');this.old_password='';this.password='';this.password_confirmation='';this.errors=[];this.$auth.fetchUser();}).catch(error=>{this.errors=Object.values(error.response.data).flat();});},async deleteProfile(id){sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({title:'¿Estas seguro de que quieres eliminar esta dirección?',showCancelButton:true,confirmButtonText:'Si, eliminar'}).then(result=>{/* Read more about isConfirmed, isDenied below */if(result.isConfirmed){this.$axios.delete('/api/delete-profile/'+id);this.$auth.fetchUser();sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Su dirección ha sido eliminada!','','success');}});},async deleteAccount(){sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({title:'¿Estas seguro de que quieres eliminar tu cuenta?',showCancelButton:true,confirmButtonText:'Si, eliminar'}).then(result=>{/* Read more about isConfirmed, isDenied below */if(result.isConfirmed){this.$axios.delete('/api/destroy/'+this.$auth.user.id);sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Su cuenta ha sido eliminada!','','success');this.$auth.logout();this.$router.push('/');}});},async createProfile(){const response=await this.$axios.post('/api/register-profile',{user_id:this.$auth.user.id,name:this.name,lastname:this.lastname,address:this.address,optional_address:this.optional_address,city:this.city,state:this.state,zipcode:this.zipcode,phone:this.phone,country:this.country});this.name='';this.lastname='';this.address='';this.optional_address='';this.city='';this.state='';this.zipcode='';this.phone='';this.country='';this.$auth.fetchUser();this.$notify({type:'success',text:'Dirección creada correctamente'});},async resendEmail(){await this.$axios.post('/api/resend-email/'+this.$auth.user.id).then(res=>{console.log(res);this.$notify({title:'Email reenviado'});}).catch(error=>{this.errors=Object.values(error.response.data).flat();});}},head(){return{title:"Mi Cuenta"};},mounted(){var tituloOriginal=document.title;// Lo guardamos para restablecerlo
window.onblur=function(){// Si el usuario se va a otro lado...
document.title="Ey, vuelve aquí!";// Cambiamos el título
};window.onfocus=function(){document.title=tituloOriginal;// Si el usuario vuelve restablecemos el título
};this.$auth.fetchUser();}});

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

/***/ "./pages/my-account.vue":
/*!******************************!*\
  !*** ./pages/my-account.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account.vue?vue&type=template&id=0bf7e245& */ "./pages/my-account.vue?vue&type=template&id=0bf7e245&");
/* harmony import */ var _my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.vue?vue&type=script&lang=js& */ "./pages/my-account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "0e7dc95e"
  
)

component.options.__file = "pages/my-account.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/my-account.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./pages/my-account.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./my-account.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/my-account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_my_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/my-account.vue?vue&type=template&id=0bf7e245&":
/*!*************************************************************!*\
  !*** ./pages/my-account.vue?vue&type=template&id=0bf7e245& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./my-account.vue?vue&type=template&id=0bf7e245& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/my-account.vue?vue&type=template&id=0bf7e245&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_my_account_vue_vue_type_template_id_0bf7e245___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;