(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mall"],{

/***/ 18:
/*!***************************************************************************!*\
  !*** D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/main.js?{"page":"pages%2Fmall"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mall = _interopRequireDefault(__webpack_require__(/*! ./pages/mall.vue */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mall.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 19:
/*!**********************************************************!*\
  !*** D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mall.vue?vue&type=template&id=43e03be6& */ 20);
/* harmony import */ var _mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mall.vue?vue&type=script&lang=js& */ 22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mall.vue?vue&type=style&index=0&lang=css& */ 25);
/* harmony import */ var _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mall.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 20:
/*!*****************************************************************************************!*\
  !*** D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue?vue&type=template&id=43e03be6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mall.vue?vue&type=template&id=43e03be6& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_template_id_43e03be6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 21:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue?vue&type=template&id=43e03be6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    navBar: function() {
      return __webpack_require__.e(/*! import() | components/navBar/navBar */ "components/navBar/navBar").then(__webpack_require__.bind(null, /*! @/components/navBar/navBar.vue */ 144))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 22:
/*!***********************************************************************************!*\
  !*** D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mall.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 23:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











































































































































var _vuex = __webpack_require__(/*! vuex */ 12);






var _util = _interopRequireDefault(__webpack_require__(/*! @/utils/util.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var tuiIcon = function tuiIcon() {__webpack_require__.e(/*! require.ensure | components/icon/icon */ "components/icon/icon").then((function () {return resolve(__webpack_require__(/*! @/components/icon/icon */ 151));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tuiTag = function tuiTag() {__webpack_require__.e(/*! require.ensure | components/tag/tag */ "components/tag/tag").then((function () {return resolve(__webpack_require__(/*! @/components/tag/tag */ 158));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tuiLoadmore = function tuiLoadmore() {__webpack_require__.e(/*! require.ensure | components/loadmore/loadmore */ "components/loadmore/loadmore").then((function () {return resolve(__webpack_require__(/*! @/components/loadmore/loadmore */ 165));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tuiNomore = function tuiNomore() {__webpack_require__.e(/*! require.ensure | components/nomore/nomore */ "components/nomore/nomore").then((function () {return resolve(__webpack_require__(/*! @/components/nomore/nomore */ 172));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var navBar = function navBar() {__webpack_require__.e(/*! require.ensure | components/navBar/navBar */ "components/navBar/navBar").then((function () {return resolve(__webpack_require__(/*! @/components/navBar/navBar */ 144));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var fromId = function fromId() {__webpack_require__.e(/*! require.ensure | components/formid/fromid */ "components/formid/fromid").then((function () {return resolve(__webpack_require__(/*! @/components/formid/fromid */ 179));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  //监控定义的变量
  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapState)(['isLogin', 'userInfo', 'pid', 'hotSearch', 'allianceType', 'allianceName', 'elites', 'isApprove'])), {}, {
    headerTop: function headerTop() {var _uni$getSystemInfoSyn =
      uni.getSystemInfoSync(),platform = _uni$getSystemInfoSyn.platform,statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight;
      var height = statusBarHeight + 4; //ios 24px
      if (platform.toLowerCase() == "android") {
        height += 4; //android 28px
      }
      // 胶囊高度 32px 下边框6px height 状态栏高度
      return height + 38 + "px";
    } }),

  watch: {
    //监听变量
    isLogin: function isLogin() {
      if (this.isLogin) {
        this.isF5 = true;
        this.allianceFun(this.userInfo.alliance);
      }
    } },

  components: {
    tuiIcon: tuiIcon,
    tuiTag: tuiTag,
    tuiLoadmore: tuiLoadmore,
    tuiNomore: tuiNomore,
    navBar: navBar,
    fromId: fromId },

  data: function data() {
    return {
      config: {
        title: "小麦商城", //title
        bgcolor: "#e41f19", //背景颜色
        // fontcolor:"red", //文字颜色，默认白色
        type: 1, //type 1，3胶囊 2，4无胶囊模式
        transparent: false, //是否背景透明 默认白色
        linear: false, //是为开启下滑渐变
        share: false //是否将主页按钮显示为分享按钮
        // menuIcon:"../static/icon/back_.png", 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
        // menuText:"返回", 当type为3或4的时候icon右边的文字
      },
      scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
      scrollMaxHeight: 200, //滑动的高度限制，超过这个高度即背景全部显示                
      current: 0,
      // hotSearch: [],
      banner: [],
      category: [],
      productList: [],
      pageIndex: 1,
      loadding: false,
      pullUpOn: true,
      share: { 'title': '推荐您享受购物专属优惠' },
      isF5: false };

  },
  onShow: function onShow() {
    // if(this.isLogin==false){
    //     this.tologin('weixin');
    // }
  },
  onReady: function onReady() {
    _util.default.searchModal();
  },
  onLoad: function onLoad(op) {
    if (op.scene) {
      var scene = decodeURIComponent(op.scene);
      this.setPid(scene);
    } else if (op.pid) {
      this.setPid(op.pid);
    }
    // this.getInfo();




  },
  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['login', 'authKey', 'tologin', 'setPid', 'setHotSearch', 'setAllianceType', 'setElites', 'setHistory', 'setApprove'])), {}, {
    tabbarSwitch: function tabbarSwitch(e) {
      var index = e.currentTarget.dataset.index;
      this.current = index;
      if (index != 0) {
        if (index == 1) {
          this.classify();
        } else if (index == 2) {
          uni.navigateTo({
            url: '../mall-extend/shopcart/shopcart' });

        } else {
          uni.navigateTo({
            url: './my' });

        }
      }
    },
    detail: function detail(goodid, index) {
      if (!goodid) return;
      var goods = index >= 0 ? '&goods=' + escape(JSON.stringify(this.productList[index])) : '';
      uni.navigateTo({
        url: './detail?good_id=' + goodid + goods });

    },
    classify: function classify() {
      uni.navigateTo({
        url: '/pages/navbar-2/navbar-2' });

    },
    themeList: function themeList(themeid) {
      uni.switchTab({
        url: './promotion' });

    },
    more: function more(e) {
      var key = e.currentTarget.dataset.key || "";
      uni.navigateTo({
        url: './productList?searchKey=' + key });

    },
    proList: function proList(key) {
      uni.navigateTo({
        url: './productList?searchKey=' + key });

    },
    search: function search(key) {
      uni.navigateTo({
        url: './search?keyword=' + key });

    },
    allianceFun: function allianceFun(op) {
      if (op == this.allianceType && this.isF5 !== true) return;
      this.isF5 = false;
      this.pageIndex = 1;
      this.setAllianceType(op);
      this.getInfo();
      this.getTopList();
    },
    getInfo: function getInfo() {
      var _this = this;
      _this.$http.get('/home').then(function (res) {
        if (res.data.ret == 200) {
          var reData = res.data.data;
          _this.banner = reData.banner;
          _this.category = reData.category;
          _this.share = reData.share;
          _this.setHotSearch(reData.hotSearch);
          _this.setElites(reData.elites);
          _this.setHistory(reData.mySearch);
          _this.setApprove(reData.isApprove);
        }
      }).catch(function (err) {
        // this.getInfo();
      });
    },
    getTopList: function getTopList() {
      var _this = this;
      _this.$http.post('/top', { 'pages': _this.pageIndex }).then(function (res) {
        if (res.data.ret == 200) {
          var reData = res.data.data;
          var loadData = reData.list;
          var next = reData.next;

          if (next == 0) {
            _this.pullUpOn = false;
          }
          if (_this.pageIndex == 1) {
            _this.productList = [];
            uni.pageScrollTo({ scrollTop: 0, duration: 300 }); //回到顶部
          }
          _this.productList = _this.productList.concat(loadData);
          _this.pageIndex = _this.pageIndex + 1;
          _this.loadding = false;
        }
      }).catch(function (err) {
        console.log(err);
      });
    } }),

  onPullDownRefresh: function onPullDownRefresh() {
    this.pageIndex = 1;
    this.pullUpOn = true;
    this.loadding = false;
    this.getInfo();
    this.getTopList();
    uni.stopPullDownRefresh();
  },
  onReachBottom: function onReachBottom() {
    if (!this.pullUpOn) return;
    this.loadding = true;
    this.getTopList();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {// 来自页面内分享按钮
      console.log(res.target);
    }
    var shareImg = '';
    var pathUrl = '/pages/mall';
    var shareTitle = this.share.title;
    if (this.isLogin) {
      pathUrl += '?pid=' + this.userInfo.id;
      shareTitle = this.userInfo.nickName + shareTitle;
    }
    if (this.share.img) {
      shareImg = this.share.img;
    }
    return {
      title: shareTitle,
      content: shareTitle,
      desc: shareTitle,
      path: pathUrl,
      imageUrl: shareImg };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 25:
/*!*******************************************************************************************!*\
  !*** D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../tool/HBuilderX.3.0.7.20210123.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mall.vue?vue&type=style&index=0&lang=css& */ 26);
/* harmony import */ var _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_3_0_7_20210123_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 26:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/京东拼多多联盟小程序（已开源）/pages/mall.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[18,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/pages/mall.js.map