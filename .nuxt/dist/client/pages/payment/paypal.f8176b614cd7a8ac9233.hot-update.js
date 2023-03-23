webpackHotUpdate("pages/payment/paypal",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/paypal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/paypal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{paypal:null,load:false};},beforeMount:function beforeMount(){var _this=this;this.$root.$on('loadPaypal',function(data){console.log('loadPaypal',data);_this.load=data;});},components:{HeaderCheckout:function HeaderCheckout(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/header/HeaderCheckout.vue */ \"./components/header/HeaderCheckout.vue\"));},TheFooter:function TheFooter(){return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/TheFooter.vue */ \"./components/TheFooter.vue\"));}},computed:{total:function total(){return this.$store.getters.getTotal*1.21;},shipping:function shipping(){return this.$store.getters.getShippingAmount;},order_id:function order_id(){return this.$store.getters.getOrderId;}},watch:{load:function load(){if(this.load==true){this.loadPaypal();}}},methods:{makeToken:function makeToken(length){var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}document.cookie=\"token_payment=\"+result+\"; path=/success; \"+\"expires=\"+new Date(Date.now()+60000).toUTCString();},loadPaypal:function loadPaypal(){var _this2=this;paypal.Buttons({// Sets up the transaction when a payment button is clicked\ncreateOrder:function createOrder(data,actions){return actions.order.create({purchase_units:[{description:'Compra en Trivicare.com',amount:{value:(_this2.total+_this2.shipping).toFixed(2)// Can also reference a variable or function\n}}]});},// Finalize the transaction after payer approval\nonApprove:function onApprove(data,actions){var axios=_this2.$axios;var order_id=_this2.order_id;_this2.makeToken(20);return actions.order.capture().then(function(orderData){// Successful capture! For dev/demo purposes:\n//console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));\nvar transaction=orderData.purchase_units[0].payments.captures[0];var token_id=transaction.id;axios.post('/api/order-paid-paypal/'+token_id,{order_id:order_id,token_id:token_id});actions.redirect(\"http://localhost:3000\"+'/success?payment_intent_client_secret='+transaction.id);});}}).render('#paypal-button-container');}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL3BhZ2VzL3BheW1lbnQvcGF5cGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXltZW50L3BheXBhbC52dWU/ZGRiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF5cGFsOiBudWxsLFxuICAgICAgICAgICAgbG9hZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYmVmb3JlTW91bnQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuJG9uKCdsb2FkUGF5cGFsJywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkUGF5cGFsJywgZGF0YSlcbiAgICAgICAgICAgIHRoaXMubG9hZCA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhlYWRlckNoZWNrb3V0OiAoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyQ2hlY2tvdXQudnVlJyksXG4gICAgICAgIFRoZUZvb3RlcjogKCkgPT4gaW1wb3J0KCdAL2NvbXBvbmVudHMvVGhlRm9vdGVyLnZ1ZScpLFxuICAgIH0sXG4gICAgXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdG90YWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRUb3RhbCAqIDEuMjE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2hpcHBpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRTaGlwcGluZ0Ftb3VudDtcbiAgICAgICAgfSxcblxuICAgICAgICBvcmRlcl9pZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldE9yZGVySWQ7fVxuICAgICAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbG9hZCgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubG9hZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUGF5cGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtYWtlVG9rZW4obGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW5fcGF5bWVudD1cIiArIHJlc3VsdCArIFwiOyBwYXRoPS9zdWNjZXNzOyBcIiArIFwiZXhwaXJlcz1cIiArIG5ldyBEYXRlKERhdGUubm93KCkgKyA2MDAwMCkudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkUGF5cGFsKCkge1xuICAgICAgICAgICAgcGF5cGFsLkJ1dHRvbnMoe1xuICAgICAgICAgICAgICAgIC8vIFNldHMgdXAgdGhlIHRyYW5zYWN0aW9uIHdoZW4gYSBwYXltZW50IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgICAgICAgICAgY3JlYXRlT3JkZXI6IChkYXRhLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA6ICdDb21wcmEgZW4gVHJpdmljYXJlLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAodGhpcy50b3RhbCArIHRoaXMuc2hpcHBpbmcpLnRvRml4ZWQoMiksIC8vIENhbiBhbHNvIHJlZmVyZW5jZSBhIHZhcmlhYmxlIG9yIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBGaW5hbGl6ZSB0aGUgdHJhbnNhY3Rpb24gYWZ0ZXIgcGF5ZXIgYXBwcm92YWxcbiAgICAgICAgICAgICAgICBvbkFwcHJvdmU6IChkYXRhLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gdGhpcy4kYXhpb3M7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyX2lkID0gdGhpcy5vcmRlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlVG9rZW4oMjApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbihmdW5jdGlvbihvcmRlckRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgY2FwdHVyZSEgRm9yIGRldi9kZW1vIHB1cnBvc2VzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQ2FwdHVyZSByZXN1bHQnLCBvcmRlckRhdGEsIEpTT04uc3RyaW5naWZ5KG9yZGVyRGF0YSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBvcmRlckRhdGEucHVyY2hhc2VfdW5pdHNbMF0ucGF5bWVudHMuY2FwdHVyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbl9pZCA9IHRyYW5zYWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9vcmRlci1wYWlkLXBheXBhbC8nICsgdG9rZW5faWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogb3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5faWQ6IHRva2VuX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucmVkaXJlY3QoIHByb2Nlc3MuZW52LnVybCArICcvc3VjY2Vzcz9wYXltZW50X2ludGVudF9jbGllbnRfc2VjcmV0PScgKyB0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSkucmVuZGVyKCcjcGF5cGFsLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdEQTtBQU1BO0FBS0E7QUFNQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/payment/paypal.vue?vue&type=script&lang=js&\n");

/***/ })

})