webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Paypal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Paypal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({props:{load:{type:Boolean,default:false},shipping:{type:Number,default:0},order_id:{type:Number,default:0}},data:function data(){return{paypal:null};},watch:{load:function load(){if(this.load===true){this.loadPaypal();}}},computed:{total:function total(){return this.$store.getters.getTotal;}},methods:{makeToken:function makeToken(length){var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}document.cookie=\"token_payment=\"+result+\"; path=/success; \"+\"expires=\"+new Date(Date.now()+60000).toUTCString();},loadPaypal:function loadPaypal(){var _this=this;paypal.Buttons({// Sets up the transaction when a payment button is clicked\ncreateOrder:function createOrder(data,actions){return actions.order.create({purchase_units:[{description:'Compra en Trivicare.com',amount:{value:(_this.total*1.21+_this.shipping).toFixed(2)// Can also reference a variable or function\n}}]});},// Finalize the transaction after payer approval\nonApprove:function onApprove(data,actions){var axios=_this.$axios;var order_id=_this.order_id;_this.makeToken(20);return actions.order.capture().then(function(orderData){// Successful capture! For dev/demo purposes:\n//console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));\nvar transaction=orderData.purchase_units[0].payments.captures[0];var token_id=transaction.id;axios.post('/api/order-paid-paypal/'+token_id,{order_id:order_id});actions.redirect(\"http://localhost:3000\"+'/success?payment_intent_client_secret='+transaction.id);});}}).render('#paypal-button-container');}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvUGF5cGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BheXBhbC52dWU/OTJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBsb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2hpcHBpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJfaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF5cGFsOiBudWxsLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIGxvYWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUGF5cGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICB0b3RhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFRvdGFsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbWFrZVRva2VuKGxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuX3BheW1lbnQ9XCIgKyByZXN1bHQgKyBcIjsgcGF0aD0vc3VjY2VzczsgXCIgKyBcImV4cGlyZXM9XCIgKyBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjAwMDApLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRQYXlwYWwoKSB7XG4gICAgICAgICAgICBwYXlwYWwuQnV0dG9ucyh7XG4gICAgICAgICAgICAgICAgLy8gU2V0cyB1cCB0aGUgdHJhbnNhY3Rpb24gd2hlbiBhIHBheW1lbnQgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgICAgICAgICBjcmVhdGVPcmRlcjogKGRhdGEsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX3VuaXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogJ0NvbXByYSBlbiBUcml2aWNhcmUuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICgodGhpcy50b3RhbCAqIDEuMjEpICsgdGhpcy5zaGlwcGluZykudG9GaXhlZCgyKSwgLy8gQ2FuIGFsc28gcmVmZXJlbmNlIGEgdmFyaWFibGUgb3IgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIEZpbmFsaXplIHRoZSB0cmFuc2FjdGlvbiBhZnRlciBwYXllciBhcHByb3ZhbFxuICAgICAgICAgICAgICAgIG9uQXBwcm92ZTogKGRhdGEsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXhpb3MgPSB0aGlzLiRheGlvcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJfaWQgPSB0aGlzLm9yZGVyX2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VUb2tlbigyMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKGZ1bmN0aW9uKG9yZGVyRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bCBjYXB0dXJlISBGb3IgZGV2L2RlbW8gcHVycG9zZXM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdDYXB0dXJlIHJlc3VsdCcsIG9yZGVyRGF0YSwgSlNPTi5zdHJpbmdpZnkob3JkZXJEYXRhLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG9yZGVyRGF0YS5wdXJjaGFzZV91bml0c1swXS5wYXltZW50cy5jYXB0dXJlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuX2lkID0gdHJhbnNhY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL29yZGVyLXBhaWQtcGF5cGFsLycgKyB0b2tlbl9pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBvcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnJlZGlyZWN0KCBwcm9jZXNzLmVudi51cmwgKyAnL3N1Y2Nlc3M/cGF5bWVudF9pbnRlbnRfY2xpZW50X3NlY3JldD0nICsgdHJhbnNhY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pLnJlbmRlcignI3BheXBhbC1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1EQTtBQU1BO0FBS0E7QUFNQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Paypal.vue?vue&type=script&lang=js&\n");

/***/ })

})