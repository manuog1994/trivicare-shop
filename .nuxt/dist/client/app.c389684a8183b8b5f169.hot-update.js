webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Paypal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Paypal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({props:{load:{type:Boolean,default:false},shipping:{type:Number,default:0},order_id:{type:Number,default:0}},data:function data(){return{paypal:null};},watch:{load:function load(){if(this.load===true){this.loadPaypal();}}},computed:{total:function total(){return this.$store.getters.getTotal;}},methods:{makeToken:function makeToken(length){var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}document.cookie=\"token_payment=\"+result+\"; path=/success; \"+\"expires=\"+new Date(Date.now()+60000).toUTCString();console.log(new Date(Date.now()+500).toUTCString());},loadPaypal:function loadPaypal(){var _this=this;paypal.Buttons({// Sets up the transaction when a payment button is clicked\ncreateOrder:function createOrder(data,actions){return actions.order.create({purchase_units:[{description:'Compra en Trivicare.com',amount:{value:(_this.total*1.21+_this.shipping).toFixed(2)// Can also reference a variable or function\n}}]});},// Finalize the transaction after payer approval\nonApprove:function onApprove(data,actions){var axios=_this.$axios;var order_id=_this.order_id;_this.makeToken(20);return actions.order.capture().then(function(orderData){// Successful capture! For dev/demo purposes:\n//console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));\nvar transaction=orderData.purchase_units[0].payments.captures[0];var token_id=transaction.id;axios.post('/api/order-paid-paypal/'+token_id,{order_id:order_id});actions.redirect(\"http://localhost:3000\"+'/success?payment_intent_client_secret='+transaction.id);});}}).render('#paypal-button-container');}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvUGF5cGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BheXBhbC52dWU/OTJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBsb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2hpcHBpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJfaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF5cGFsOiBudWxsLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIGxvYWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUGF5cGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICB0b3RhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFRvdGFsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbWFrZVRva2VuKGxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuX3BheW1lbnQ9XCIgKyByZXN1bHQgKyBcIjsgcGF0aD0vc3VjY2VzczsgXCIgKyBcImV4cGlyZXM9XCIgKyBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjAwMDApLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZShEYXRlLm5vdygpICsgNTAwKS50b1VUQ1N0cmluZygpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkUGF5cGFsKCkge1xuICAgICAgICAgICAgcGF5cGFsLkJ1dHRvbnMoe1xuICAgICAgICAgICAgICAgIC8vIFNldHMgdXAgdGhlIHRyYW5zYWN0aW9uIHdoZW4gYSBwYXltZW50IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgICAgICAgICAgY3JlYXRlT3JkZXI6IChkYXRhLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA6ICdDb21wcmEgZW4gVHJpdmljYXJlLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoKHRoaXMudG90YWwgKiAxLjIxKSArIHRoaXMuc2hpcHBpbmcpLnRvRml4ZWQoMiksIC8vIENhbiBhbHNvIHJlZmVyZW5jZSBhIHZhcmlhYmxlIG9yIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBGaW5hbGl6ZSB0aGUgdHJhbnNhY3Rpb24gYWZ0ZXIgcGF5ZXIgYXBwcm92YWxcbiAgICAgICAgICAgICAgICBvbkFwcHJvdmU6IChkYXRhLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gdGhpcy4kYXhpb3M7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyX2lkID0gdGhpcy5vcmRlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlVG9rZW4oMjApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbihmdW5jdGlvbihvcmRlckRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgY2FwdHVyZSEgRm9yIGRldi9kZW1vIHB1cnBvc2VzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQ2FwdHVyZSByZXN1bHQnLCBvcmRlckRhdGEsIEpTT04uc3RyaW5naWZ5KG9yZGVyRGF0YSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBvcmRlckRhdGEucHVyY2hhc2VfdW5pdHNbMF0ucGF5bWVudHMuY2FwdHVyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbl9pZCA9IHRyYW5zYWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9vcmRlci1wYWlkLXBheXBhbC8nICsgdG9rZW5faWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogb3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5yZWRpcmVjdCggcHJvY2Vzcy5lbnYudXJsICsgJy9zdWNjZXNzP3BheW1lbnRfaW50ZW50X2NsaWVudF9zZWNyZXQ9JyArIHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KS5yZW5kZXIoJyNwYXlwYWwtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvREE7QUFNQTtBQUtBO0FBTUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Paypal.vue?vue&type=script&lang=js&\n");

/***/ })

})