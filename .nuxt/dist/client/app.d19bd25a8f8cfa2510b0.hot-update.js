webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/checkout/TimerNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/checkout/TimerNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data:function data(){return{countdown:'',interval:'',duration:0,orderComplete:false};},beforeMount:function beforeMount(){var _this=this;this.$root.$on('duration',function(data){_this.duration=data;});this.$root.$on('orderComplete',function(data){_this.orderComplete=data;});},mounted:function mounted(){var _this2=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var duration;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:duration=_this2.$store.getters.getDuration;_this2.startTimer(duration);case 2:case\"end\":return _context.stop();}},_callee);}))();},watch:{orderComplete:function orderComplete(){if(this.orderComplete==true){// parar el startTimer\nthis.startTimer(null);}}},methods:{// countdown of 10 minutes\nstartTimer:function startTimer(duration){var _this3=this;if(duration==null||duration==undefined){//this.$router.push({ path: '/cart'})\n}var timer=duration,minutes,seconds;this.interval=setInterval(function(){minutes=parseInt(timer/60,10);seconds=parseInt(timer%60,10);minutes=minutes<10?\"0\"+minutes:minutes;seconds=seconds<10?\"0\"+seconds:seconds;var count=minutes+\":\"+seconds;_this3.countdown=count;var store=_this3.$store.commit('SET_DURATION',timer);if(--timer<0){timer=0;_this3.$store.commit('SET_STEP2',false);_this3.$store.commit('SET_STEP3',false);_this3.$store.commit('SET_STEP4',false);_this3.$store.commit('CLEAR_GUEST',{});_this3.$store.commit('SET_PAYMENT_METHOD','');_this3.$store.commit('SET_SHIPPING_METHOD','');_this3.$store.commit('SET_PICKUP_ID','');_this3.$store.commit('SET_DURATION',900);_this3.$store.commit('SET_USER_PROFILE_ID','');_this3.$store.commit('SET_RESERVE','');_this3.$store.commit('CLEAR_CUPON',{});_this3.$store.commit('SET_ORDER_ID','');_this3.$store.commit('SET_PAYMENT_METHOD','');_this3.$store.commit('SET_SHIPPING_METHOD','');_this3.$store.commit('SET_SHIPPING_AMOUNT',0);_this3.$store.commit('SET_CONDITIONS_STORE',false);_this3.$store.commit('SET_NEWSLETTER_STORE',false);_this3.$store.commit('SET_INVOICE_PAPER',false);_this3.$store.commit('SET_NOTE','');_this3.$root.$emit('cancelOrder',true);}},1000);}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvY2hlY2tvdXQvVGltZXJOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tvdXQvVGltZXJOYXYudnVlP2JiMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvdW50ZG93bjogJycsXG4gICAgICAgICAgICBpbnRlcnZhbDogJycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIG9yZGVyQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZU1vdW50KCkge1xuICAgICAgICB0aGlzLiRyb290LiRvbignZHVyYXRpb24nLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBkYXRhO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJHJvb3QuJG9uKCdvcmRlckNvbXBsZXRlJywgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyQ29tcGxldGUgPSBkYXRhO1xuICAgICAgICB9KVxuICAgIH0sXG5cblxuICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXREdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgb3JkZXJDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9yZGVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHBhcmFyIGVsIHN0YXJ0VGltZXJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyBjb3VudGRvd24gb2YgMTAgbWludXRlc1xuICAgICAgICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PSBudWxsIHx8IGR1cmF0aW9uID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiAnL2NhcnQnfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0aW1lciA9IGR1cmF0aW9uLCBtaW51dGVzLCBzZWNvbmRzO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQodGltZXIgLyA2MCwgMTApO1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciAlIDYwLCAxMCk7XG5cbiAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcblxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZG93biA9IGNvdW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlID0gdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfRFVSQVRJT04nLCB0aW1lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoLS10aW1lciA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9TVEVQMicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfU1RFUDMnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1NURVA0JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ0NMRUFSX0dVRVNUJywge30pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9QQVlNRU5UX01FVEhPRCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfU0hJUFBJTkdfTUVUSE9EJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9QSUNLVVBfSUQnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0RVUkFUSU9OJywgOTAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfVVNFUl9QUk9GSUxFX0lEJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9SRVNFUlZFJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ0NMRUFSX0NVUE9OJywge30pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9PUkRFUl9JRCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUEFZTUVOVF9NRVRIT0QnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1NISVBQSU5HX01FVEhPRCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfU0hJUFBJTkdfQU1PVU5UJywgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0NPTkRJVElPTlNfU1RPUkUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX05FV1NMRVRURVJfU1RPUkUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0lOVk9JQ0VfUEFQRVInLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX05PVEUnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2NhbmNlbE9yZGVyJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG5cblxuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QkE7QUFPQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/checkout/TimerNav.vue?vue&type=script&lang=js&\n");

/***/ })

})