exports.ids = [18];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined;}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports;}var i={};return e.m=t,e.c=i,e.i=function(t){return t;},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n});},e.n=function(t){var i=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(i,"a",i),i;},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},e.p="/dist/",e(e.s=2);}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports;},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0;}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e;}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null};},computed:{countDown:function(){return this.startVal>this.endVal;}},watch:{startVal:function(){this.autoplay&&this.start();},endVal:function(){this.autoplay&&this.start();}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback");},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count);},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0);},pause:function(){(0,n.cancelAnimationFrame)(this.rAF);},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count);},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal);},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback");},isNumber:function(t){return!isNaN(parseFloat(t));},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix;}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF);}};},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),a=function(t){return t&&t.__esModule?t:{default:t};}(n);e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default);},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=new Date().getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout(function(){t(e+i);},i);return n=e+i,a;},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t);});}e.requestAnimationFrame=r,e.cancelAnimationFrame=o;},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var e=n[t];u[t]=function(){return e;};}),s.computed=u;}return{esModule:a,exports:r,options:s};};},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")]);},staticRenderFns:[]};}]);});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=template&id=517958da&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"funfact-area bg-gray-3 pt-100 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:_vm.visibilityChanged,once:true},expression:"{callback: visibilityChanged, once: true}"}],staticClass:"row"},[_c('client-only',_vm._l(_vm.funFacts,function(item,index){return _c('div',{key:index,staticClass:"col-lg-3 col-sm-6"},[_vm.isVisible?_c('div',{staticClass:"single-count text-center mb-30"},[_c('div',{staticClass:"count-icon"},[_c('i',{class:item.icon})]),_vm._v(" "),_c('countTo',{attrs:{"startVal":_vm.startVal,"endVal":item.endVal,"duration":4000}}),_vm._v(" "),_c('h5',{staticClass:"title"},[_vm._v(_vm._s(item.title))])],1):_vm._e()]);}),0)],1)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=template&id=517958da&

// EXTERNAL MODULE: ./node_modules/vue-count-to/dist/vue-count-to.min.js
var vue_count_to_min = __webpack_require__(104);
var vue_count_to_min_default = /*#__PURE__*/__webpack_require__.n(vue_count_to_min);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/FunFact.vue?vue&type=script&lang=js&
/* harmony default export */ var FunFactvue_type_script_lang_js_ = ({components:{countTo: vue_count_to_min_default.a},data(){return{startVal:1,isVisible:false,funFacts:[{id:1,endVal:360,title:"Project Done",icon:"pe-7s-portfolio"},{id:2,endVal:690,title:"Cups Of Coffee",icon:"pe-7s-cup"},{id:3,endVal:580,title:"Branding",icon:"pe-7s-light"},{id:4,endVal:850,title:"Happy Clients",icon:"pe-7s-smile"}]};},methods:{visibilityChanged(isVisible){this.isVisible=isVisible;}}});
// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunFactvue_type_script_lang_js_ = (FunFactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5c50a8e8"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;