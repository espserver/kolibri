!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports){module.exports=kolibriGlobal.coreVue.components.CoreMenuOption},function(module,exports){module.exports=kolibriGlobal.utils.navComponents},function(module,exports){module.exports=kolibriGlobal.urls},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var external_kolibriGlobal_coreVue_components_CoreMenuOption_=__webpack_require__(0),external_kolibriGlobal_coreVue_components_CoreMenuOption_default=__webpack_require__.n(external_kolibriGlobal_coreVue_components_CoreMenuOption_),external_kolibriGlobal_utils_navComponents_=__webpack_require__(1),external_kolibriGlobal_utils_navComponents_default=__webpack_require__.n(external_kolibriGlobal_utils_navComponents_),external_kolibriGlobal_urls_=__webpack_require__(2),external_kolibriGlobal_urls_default=__webpack_require__.n(external_kolibriGlobal_urls_),component={name:"LearnSideNavEntry",components:{CoreMenuOption:external_kolibriGlobal_coreVue_components_CoreMenuOption_default.a},$trs:{learn:"Learn"},computed:{url:function(){return external_kolibriGlobal_urls_default.a["kolibri:learn:learn"]()}},priority:10};external_kolibriGlobal_utils_navComponents_default.a.register(component);var LearnSideNavEntry_component=function(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,this.$root.$options.shadowRoot)}:injectStyles),hook)if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{exports:scriptExports,options:options}}(component,function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("CoreMenuOption",{attrs:{label:this.$tr("learn"),link:this.url}},[_c("svg",{attrs:{slot:"icon",role:"presentation",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},slot:"icon"},[_c("path",{attrs:{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}})])])},[],!1,null,null,null);__webpack_exports__.default=LearnSideNavEntry_component.exports}]);
//# sourceMappingURL=learn_module_side_nav-0.12.8.js.map