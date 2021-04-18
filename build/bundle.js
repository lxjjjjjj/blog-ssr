/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/Advert.js":
/*!*************************************!*\
  !*** ./client/components/Advert.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_style_components_Advert_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/style/components/Advert.css */ \"./client/static/style/components/Advert.css\");\n/* harmony import */ var _static_style_components_Advert_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_Advert_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Advert = function Advert() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ad-div comm-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], null, \"\\u5B9E\\u4E60\\u7ECF\\u5386\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u77E5\\u4E4E2019.11-\\u81F3\\u4ECA\\uFF1A\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u4F7F\\u7528react-hooks\\u5B9E\\u73B0\\u79FB\\u52A8\\u7AEF\\u5F00\\u53D1\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u817E\\u8BAF2019.07-10\\uFF1A\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u4F7F\\u7528ts+react+webpack\\u5F00\\u53D1\\u63A7\\u5236\\u53F0\\u7CFB\\u7EDF\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u5C0F\\u7C732019.05-07\\uFF1A\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u4F7F\\u7528redux\\u5F00\\u53D1\\u4E2D\\u53F0\\u7CFB\\u7EDF\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Advert);\n\n//# sourceURL=webpack:///./client/components/Advert.js?");

/***/ }),

/***/ "./client/components/Author.js":
/*!*************************************!*\
  !*** ./client/components/Author.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_style_components_Author_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/style/components/Author.css */ \"./client/static/style/components/Author.css\");\n/* harmony import */ var _static_style_components_Author_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_Author_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Author = function Author() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"author-div comm-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n    size: 100,\n    src: 'https://wx3.sinaimg.cn/mw690/006Ul03Sly1gbbhm4knc0j31o0280e81.jpg'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"author-introduction\"\n  }, \"\\u6280\\u672F\\u548C\\u624D\\u827A\\u4E8E\\u4E00\\u8EAB\\u7684\\u7A0B\\u5E8F\\u5A9B\\uFF0C\\u4E13\\u6CE8\\u4E8EWEB\\u548C\\u79FB\\u52A8\\u524D\\u7AEF\\u5F00\\u53D1\\u3002\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], null, \"\\u793E\\u4EA4\\u8D26\\u53F7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n    size: 28,\n    icon: \"github\",\n    className: \"account\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n    size: 28,\n    icon: \"qq\",\n    className: \"account\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n    size: 28,\n    icon: \"wechat\",\n    className: \"account\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Author);\n\n//# sourceURL=webpack:///./client/components/Author.js?");

/***/ }),

/***/ "./client/components/Footer.js":
/*!*************************************!*\
  !*** ./client/components/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_style_components_Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/style/components/Footer.css */ \"./client/static/style/components/Footer.css\");\n/* harmony import */ var _static_style_components_Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_Footer_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Footer = function Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u7CFB\\u7EDF\\u7531 React+Node+Ant Desgin\\u9A71\\u52A8 \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"lxjjjjjj.com\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./client/components/Footer.js?");

/***/ }),

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_style_components_Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/style/components/Header.css */ \"./client/static/style/components/Header.css\");\n/* harmony import */ var _static_style_components_Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_Header_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hoc_withStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hoc/withStyle */ \"./client/hoc/withStyle.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Header = function Header(props) {\n  //跳转到列表页\n  var handleClick = function handleClick(e) {\n    if (e.key == 0) {\n      _this.props.history.push({\n        pathname: '/index'\n      });\n    } else {\n      _this.props.history.push({\n        pathname: '/list?id=' + e.key\n      });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    type: \"flex\",\n    justify: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    sm: 24,\n    md: 10,\n    lg: 13,\n    xl: 11\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"header-logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: '/index'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, \" \\u65E0\\u6BD4\\u5FEB\\u4E50\\u7684\\u563B\\u563B\\u563B\\u563B\\u563B\\u563B\\u54C8\\u54C8\\u54C8\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"header-txt\"\n  }, \"\\u524D\\u7AEF\\u5C0F\\u767D\\u7684\\u535A\\u5BA2\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    className: \"memu-div\",\n    xs: 0,\n    sm: 0,\n    md: 14,\n    lg: 10,\n    xl: 7\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    mode: \"horizontal\",\n    onClick: handleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n    type: \"home\"\n  }), \"\\u535A\\u5BA2\\u9996\\u9875\"), props.navList.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n      key: item.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n      type: item.icon\n    }), item.typeName);\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./client/components/Header.js?");

/***/ }),

/***/ "./client/hoc/withStyle.js":
/*!*********************************!*\
  !*** ./client/hoc/withStyle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nfunction withStyle(styles) {\n  return function (WrappedComponent) {\n    var Component = /*#__PURE__*/function (_React$Component) {\n      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Component, _React$Component);\n\n      var _super = _createSuper(Component);\n\n      function Component() {\n        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Component);\n\n        return _super.apply(this, arguments);\n      }\n\n      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Component, [{\n        key: \"componentWillMount\",\n        // 在这个生命周期里加上css逻辑\n        value: function componentWillMount() {\n          // 通过这个属性可以判断是在服务端调用\n          if (this.props.staticContext && this.props.staticContext.css) {\n            // 给服务端注入的变量 staticContext 的 css属性中加入 css文本\n            this.props.staticContext.css.push(styles._getCss());\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);\n        }\n      }]);\n\n      return Component;\n    }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n    return Component;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withStyle);\n\n//# sourceURL=webpack:///./client/hoc/withStyle.js?");

/***/ }),

/***/ "./client/router.js":
/*!**************************!*\
  !*** ./client/router.js ***!
  \**************************/
/*! exports provided: routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/Home */ \"./client/routes/Home.js\");\n/* harmony import */ var _routes_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/Login */ \"./client/routes/Login.js\");\n/* harmony import */ var _routes_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/Page */ \"./client/routes/Page.js\");\n/* harmony import */ var _routes_Page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes_Page__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes_PageTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/PageTwo */ \"./client/routes/PageTwo.js\");\n/* harmony import */ var _routes_PageTwo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes_PageTwo__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ \"./client/utils/index.js\");\n\n\n\n\n\n\n\n\n // 根组件\n\nvar Root = function Root(_ref) {\n  var route = _ref.route,\n      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, [\"route\"]);\n\n  var location = rest.location;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/home\"\n  }, \"home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/login\"\n  }, \"login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      margin: '20px 0'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"\\u9762\\u5305\\u5C51\\uFF1A\")), Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(route.routes));\n};\n\nvar routes = [{\n  breadcrumb: '首页',\n  path: \"/\",\n  component: Root,\n  routes: [{\n    breadcrumb: 'home',\n    path: \"/home\",\n    exact: true,\n    component: _routes_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    loadData: _routes_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"].loadData //服务端获取异步数据的函数\n\n  }, {\n    breadcrumb: 'login',\n    path: \"/login\",\n    component: _routes_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    routes: [{\n      breadcrumb: 'page',\n      path: \"/login/page\",\n      component: _routes_Page__WEBPACK_IMPORTED_MODULE_6___default.a,\n      exact: true\n    }, {\n      breadcrumb: 'page2',\n      path: \"/login/pageTwo\",\n      component: _routes_PageTwo__WEBPACK_IMPORTED_MODULE_7___default.a,\n      exact: true\n    }]\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(routes)));\n\n//# sourceURL=webpack:///./client/router.js?");

/***/ }),

/***/ "./client/routes/Home.css":
/*!********************************!*\
  !*** ./client/routes/Home.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Home.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/routes/Home.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/routes/Home.css?");

/***/ }),

/***/ "./client/routes/Home.js":
/*!*******************************!*\
  !*** ./client/routes/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _store_home_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/home/actions */ \"./client/store/home/actions.js\");\n/* harmony import */ var _hoc_withStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hoc/withStyle */ \"./client/hoc/withStyle.js\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Home.css */ \"./client/routes/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Page */ \"./client/routes/Page.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Page__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Header */ \"./client/components/Header.js\");\n/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Author */ \"./client/components/Author.js\");\n/* harmony import */ var _components_Advert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Advert */ \"./client/components/Advert.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Footer */ \"./client/components/Footer.js\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! highlight.js */ \"highlight.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! highlight.js/styles/monokai-sublime.css */ \"./node_modules/highlight.js/styles/monokai-sublime.css\");\n/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_22__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Home);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //服务端已经往store中注入数据，这里不需要重复请求\n      // if(JSON.stringify(this.props.home) !== '{}' ) {\n      this.props.getHomeData(); // }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var props = this.props;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _Home_css__WEBPACK_IMPORTED_MODULE_12___default.a.title\n      }, \"This is home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, \" \", JSON.stringify(props.home) !== '{}' && props.home.list.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n          key: item\n        }, item);\n      }), \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          return props.getHomeData();\n        }\n      }, \"click me\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        className: _Home_css__WEBPACK_IMPORTED_MODULE_12___default.a.alertMe,\n        onClick: function onClick() {\n          return alert('hhhhhh');\n        }\n      }, \"alert\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_13___default.a, null), JSON.stringify(props.home) !== '{}' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n        navList: props.home.navList\n      }));\n    }\n  }], [{\n    key: \"loadData\",\n    // 预加载数据，服务端调用\n    value: function () {\n      var _loadData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(store, match) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", store.dispatch(Object(_store_home_actions__WEBPACK_IMPORTED_MODULE_10__[\"getHomeData\"])()));\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function loadData(_x, _x2) {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }()\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    home: state.home.homeData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_9__[\"compose\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  getHomeData: _store_home_actions__WEBPACK_IMPORTED_MODULE_10__[\"getHomeData\"]\n}), Object(_hoc_withStyle__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Home_css__WEBPACK_IMPORTED_MODULE_12___default.a))(Home));\n\n//# sourceURL=webpack:///./client/routes/Home.js?");

/***/ }),

/***/ "./client/routes/Login.css":
/*!*********************************!*\
  !*** ./client/routes/Login.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Login.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/routes/Login.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/routes/Login.css?");

/***/ }),

/***/ "./client/routes/Login.js":
/*!********************************!*\
  !*** ./client/routes/Login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.css */ \"./client/routes/Login.css\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n // import { Alert } from 'mj-ui'\n\n // import 'mj-ui/esm/alert/style/index.css'\n\nvar Login = function Login(_ref) {\n  var route = _ref.route;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {\n    kind: \"warning\"\n  }, \"2222\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login/page\"\n  }, \"to page1\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login/pageTwo\"\n  }, \"to page2\")), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(route.routes));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./client/routes/Login.js?");

/***/ }),

/***/ "./client/routes/Page.js":
/*!*******************************!*\
  !*** ./client/routes/Page.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nvar Page = function Page() {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", null, \"This is page\"));\n};\n\nmodule.exports = Page;\n\n//# sourceURL=webpack:///./client/routes/Page.js?");

/***/ }),

/***/ "./client/routes/PageTwo.js":
/*!**********************************!*\
  !*** ./client/routes/PageTwo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nvar PageTwo = function PageTwo() {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", null, \"\\u8FD9\\u91CC\\u662F pageTwo\"));\n};\n\nmodule.exports = PageTwo;\n\n//# sourceURL=webpack:///./client/routes/PageTwo.js?");

/***/ }),

/***/ "./client/static/style/components/Advert.css":
/*!***************************************************!*\
  !*** ./client/static/style/components/Advert.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Advert.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Advert.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/static/style/components/Advert.css?");

/***/ }),

/***/ "./client/static/style/components/Author.css":
/*!***************************************************!*\
  !*** ./client/static/style/components/Author.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Author.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Author.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/static/style/components/Author.css?");

/***/ }),

/***/ "./client/static/style/components/Footer.css":
/*!***************************************************!*\
  !*** ./client/static/style/components/Footer.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Footer.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Footer.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/static/style/components/Footer.css?");

/***/ }),

/***/ "./client/static/style/components/Header.css":
/*!***************************************************!*\
  !*** ./client/static/style/components/Header.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Header.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Header.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/static/style/components/Header.css?");

/***/ }),

/***/ "./client/store/home/actions.js":
/*!**************************************!*\
  !*** ./client/store/home/actions.js ***!
  \**************************************/
/*! exports provided: getHomeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeData\", function() { return getHomeData; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./client/store/home/constants.js\");\n// import axios from 'axios';\n // warning: 这里必须要设置上baseURL，否则在服务端发出请求时，会把端口打到 80 端口去\n// axios.defaults.baseURL = 'http://localhost:3001';\n//普通action\n\nvar homeData = function homeData(data) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"HOME_DATA\"],\n    payload: data\n  };\n}; //异步操作的action(采用thunk中间件)\n\n\nvar getHomeData = function getHomeData() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/homedata').then(function (res) {\n      var data = res.data;\n      return dispatch(homeData(data.data));\n    }).catch(function () {});\n  };\n};\n\n//# sourceURL=webpack:///./client/store/home/actions.js?");

/***/ }),

/***/ "./client/store/home/constants.js":
/*!****************************************!*\
  !*** ./client/store/home/constants.js ***!
  \****************************************/
/*! exports provided: HOME_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME_DATA\", function() { return HOME_DATA; });\nvar HOME_DATA = 'HOME_DATA';\n\n//# sourceURL=webpack:///./client/store/home/constants.js?");

/***/ }),

/***/ "./client/store/home/index.js":
/*!************************************!*\
  !*** ./client/store/home/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./client/store/home/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initState = {\n  name: 'lxjjjjjj',\n  homeData: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"HOME_DATA\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        homeData: action.payload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/store/home/index.js?");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./client/store/home/index.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/axios */ \"./client/utils/axios.js\");\n\n\n\n //合并项目组件中store的reducer\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  home: _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); //创建store，并引入中间件thunk进行异步操作的管理\n// const store = createStore(reducer, applyMiddleware(thunk));\n//导出创建的store\n// 导出函数的目的是，在服务端渲染时，保证每个用户请求得到是不同的store\n\nvar getServerStore = function getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a.withExtraArgument(_utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"serverAxiosInstance\"])));\n}; // 服务端不支持 window，所以这里要区分服务端和客户端的方法\n\nvar getClientStore = function getClientStore() {\n  var initialState = window.initialState ? window.initialState : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a.withExtraArgument(_utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"clientAxiosInstance\"])));\n};\n\n//# sourceURL=webpack:///./client/store/index.js?");

/***/ }),

/***/ "./client/utils/axios.js":
/*!*******************************!*\
  !*** ./client/utils/axios.js ***!
  \*******************************/
/*! exports provided: clientAxiosInstance, serverAxiosInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientAxiosInstance\", function() { return clientAxiosInstance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverAxiosInstance\", function() { return serverAxiosInstance; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar clientAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n}); // 这里拆分的目的是，方便将node做一个中间层，做接口的转发\n// 服务端调用的时候，可以把请求地址转发到提供接口的服务去\n\nvar serverAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:3001'\n});\n\n//# sourceURL=webpack:///./client/utils/axios.js?");

/***/ }),

/***/ "./client/utils/index.js":
/*!*******************************!*\
  !*** ./client/utils/index.js ***!
  \*******************************/
/*! exports provided: flattenRoutes, getBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flattenRoutes\", function() { return flattenRoutes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBreadcrumbs\", function() { return getBreadcrumbs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * 以递归的方式展平react router数组\n */\n\nvar flattenRoutes = function flattenRoutes(arr) {\n  return arr.reduce(function (prev, item) {\n    prev.push(item);\n    return prev.concat(Array.isArray(item.routes) ? flattenRoutes(item.routes) : []);\n  }, []);\n};\nvar getBreadcrumbs = function getBreadcrumbs(_ref) {\n  var flattenRoutes = _ref.flattenRoutes,\n      location = _ref.location;\n  // 初始化匹配数组match\n  var matches = [];\n  location.pathname // 取得路径名，然后将路径分割成每一路由部分.\n  .split('?')[0].split('/') // 对每一部分执行一次调用`getBreadcrumb()`的reduce.\n  .reduce(function (prev, curSection) {\n    // 将最后一个路由部分与当前部分合并，比如当路径为 `/x/xx/xxx` 时，pathSection分别检查 `/x` `/x/xx` `/x/xx/xxx` 的匹配，并分别生成面包屑\n    var pathSection = \"\".concat(prev, \"/\").concat(curSection);\n    var breadcrumb = getBreadcrumb({\n      flattenRoutes: flattenRoutes,\n      curSection: curSection,\n      pathSection: pathSection\n    }); // 将面包屑导入到matches数组中\n\n    matches.push(breadcrumb); // 传递给下一次reduce的路径部分\n\n    return pathSection;\n  }); // return [home, ...matches]\n\n  if (location.pathname === '/') {\n    return matches;\n  } else {\n    var home = getBreadcrumb({\n      flattenRoutes: flattenRoutes,\n      curSection: '/',\n      pathSection: '/'\n    });\n    return [home].concat(matches);\n  }\n};\n\nvar getBreadcrumb = function getBreadcrumb(_ref2) {\n  var flattenRoutes = _ref2.flattenRoutes,\n      curSection = _ref2.curSection,\n      pathSection = _ref2.pathSection;\n  var matchRoute = flattenRoutes.find(function (ele) {\n    var breadcrumb = ele.breadcrumb,\n        path = ele.path;\n\n    if (!breadcrumb || !path) {\n      throw new Error('Router中的每一个route必须包含 `path` 以及 `breadcrumb` 属性');\n    } // 查找是否有匹配\n\n    /**\n     * 实际上 matchPath 做的是这个事情\n     * return pathSection === path\n     */\n\n\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"matchPath\"])(pathSection, {\n      path: path,\n      exact: true\n    });\n  }); // 返回breadcrumb的值，没有就返回原匹配子路径名\n\n  if (matchRoute) {\n    return render({\n      content: matchRoute.breadcrumb || curSection,\n      path: matchRoute.path\n    });\n  } // 对于routes表中不存在的路径\n  // 根目录默认名称为首页.\n\n\n  return render({\n    content: pathSection === '/' ? '首页' : curSection,\n    path: pathSection\n  });\n};\n\nvar render = function render(_ref3) {\n  var content = _ref3.content,\n      path = _ref3.path;\n  var componentProps = {\n    path: path\n  };\n\n  if (typeof content === 'function') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"content\", componentProps);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", componentProps, content);\n};\n\n//# sourceURL=webpack:///./client/utils/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/routes/Home.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/routes/Home.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".client-routes-Home__title--3EYhG {\\n  color: brown;\\n}\\n.client-routes-Home__box--2qAW3 {\\n  width: 100px;\\n}\\n.client-routes-Home__alert-me--3pEjt {\\n  color: red;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"title\": \"client-routes-Home__title--3EYhG\",\n\t\"box\": \"client-routes-Home__box--2qAW3\",\n\t\"alert-me\": \"client-routes-Home__alert-me--3pEjt\",\n\t\"alertMe\": \"client-routes-Home__alert-me--3pEjt\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/routes/Home.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/routes/Login.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/routes/Login.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".client-routes-Login__box--3BfrH {\\n  width: 100px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"box\": \"client-routes-Login__box--3BfrH\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/routes/Login.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Advert.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/static/style/components/Advert.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".client-static-style-components-Advert__ad-div--uJx7o{\\n  margin-top: .5rem;\\n}\\n.client-static-style-components-Advert__ad-div--uJx7o div{\\n  border-radius: .3rem;\\n  margin-bottom: .2rem;\\n  overflow: hidden;\\n  color:#fff;\\n}\\n.client-static-style-components-Advert__ant-divider-inner-text--2fIKh{\\n  color:\\t#DB7093;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"ad-div\": \"client-static-style-components-Advert__ad-div--uJx7o\",\n\t\"adDiv\": \"client-static-style-components-Advert__ad-div--uJx7o\",\n\t\"ant-divider-inner-text\": \"client-static-style-components-Advert__ant-divider-inner-text--2fIKh\",\n\t\"antDividerInnerText\": \"client-static-style-components-Advert__ant-divider-inner-text--2fIKh\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/static/style/components/Advert.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Author.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/static/style/components/Author.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".client-static-style-components-Author__author-div--1tT8x{\\n  text-align: center;\\n  padding: 1rem;\\n\\n}\\n.client-static-style-components-Author__author-div--1tT8x div{\\n  margin-bottom: 1rem;\\n\\n}\\n.client-static-style-components-Author__author-introduction--2vIOu{\\n  font-size:.8rem;\\n  color: #fff;\\n}\\n.client-static-style-components-Author__account--f7FE1{\\n  background-color: \\t#DB7093;\\n  margin-left: .5rem;\\n  margin-right: .5rem;\\n}\\n.client-static-style-components-Author__ant-divider-inner-text---7oxB{\\n  color:\\t#DB7093;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"author-div\": \"client-static-style-components-Author__author-div--1tT8x\",\n\t\"authorDiv\": \"client-static-style-components-Author__author-div--1tT8x\",\n\t\"author-introduction\": \"client-static-style-components-Author__author-introduction--2vIOu\",\n\t\"authorIntroduction\": \"client-static-style-components-Author__author-introduction--2vIOu\",\n\t\"account\": \"client-static-style-components-Author__account--f7FE1\",\n\t\"ant-divider-inner-text\": \"client-static-style-components-Author__ant-divider-inner-text---7oxB\",\n\t\"antDividerInnerText\": \"client-static-style-components-Author__ant-divider-inner-text---7oxB\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/static/style/components/Author.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Footer.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/static/style/components/Footer.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".client-static-style-components-Footer__footer-div--1XoE0{\\n  text-align: center;\\n  width: 100%;\\n  padding: 1rem;\\n  color:#888;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"footer-div\": \"client-static-style-components-Footer__footer-div--1XoE0\",\n\t\"footerDiv\": \"client-static-style-components-Footer__footer-div--1XoE0\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/static/style/components/Footer.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/static/style/components/Header.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/static/style/components/Header.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".client-static-style-components-Header__header--20iOY{\\n  background-color:\\t#FFB6C1;\\n  padding: .4rem;\\n  overflow: hidden;\\n  height: 3rem;\\n  border-bottom:1px solid #FFB6C1;\\n}\\n.client-static-style-components-Header__header-logo--1F3Ez{\\n  \\n  font-size: 1.5rem;\\n  text-align: left;\\n\\n}\\n.client-static-style-components-Header__header-logo--1F3Ez a{\\n  color:#FFF0F5;\\n}\\n.client-static-style-components-Header__header-txt--2K5rc{\\n  font-size: 0.6rem;\\n  color: #fff;\\n  display: inline-block;\\n  padding-left: 0.3rem;\\n}\\n.client-static-style-components-Header__ant-menu--6RWn9{\\n  background-color:\\t#FFB6C1;\\n}\\n.client-static-style-components-Header__ant-menu-item--1NUIo{\\n  color:#fff;\\n  padding-left:1rem;\\n  padding-right:1rem;\\n\\n}\\n.client-static-style-components-Header__ant-menu-item-active--UjHog{\\n  color:#FF1493;\\n}\\n.client-static-style-components-Header__ant-menu-item-selected--oM02t{\\n  color:#FF1493;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"client-static-style-components-Header__header--20iOY\",\n\t\"header-logo\": \"client-static-style-components-Header__header-logo--1F3Ez\",\n\t\"headerLogo\": \"client-static-style-components-Header__header-logo--1F3Ez\",\n\t\"header-txt\": \"client-static-style-components-Header__header-txt--2K5rc\",\n\t\"headerTxt\": \"client-static-style-components-Header__header-txt--2K5rc\",\n\t\"ant-menu\": \"client-static-style-components-Header__ant-menu--6RWn9\",\n\t\"antMenu\": \"client-static-style-components-Header__ant-menu--6RWn9\",\n\t\"ant-menu-item\": \"client-static-style-components-Header__ant-menu-item--1NUIo\",\n\t\"antMenuItem\": \"client-static-style-components-Header__ant-menu-item--1NUIo\",\n\t\"ant-menu-item-active\": \"client-static-style-components-Header__ant-menu-item-active--UjHog\",\n\t\"antMenuItemActive\": \"client-static-style-components-Header__ant-menu-item-active--UjHog\",\n\t\"ant-menu-item-selected\": \"client-static-style-components-Header__ant-menu-item-selected--oM02t\",\n\t\"antMenuItemSelected\": \"client-static-style-components-Header__ant-menu-item-selected--oM02t\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/static/style/components/Header.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/highlight.js/styles/monokai-sublime.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/highlight.js/styles/monokai-sublime.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*\\n\\nMonokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/\\n\\n*/\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs--2kA9k {\\n  display: block;\\n  overflow-x: auto;\\n  padding: 0.5em;\\n  background: #23241f;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs--2kA9k,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-tag--3fRY7,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-subst--PJuEM {\\n  color: #f8f8f2;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-strong--sR3bJ,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-emphasis--1Pvbm {\\n  color: #a8a8a2;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-bullet--aQaaJ,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-quote--fRh0l,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-number--15wxX,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-regexp--2zy-n,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-literal--31srr,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-link--2h07P {\\n  color: #ae81ff;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-code--3C-in,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-title--2taB6,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-section--L0-mN,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-selector-class--2Xv8S {\\n  color: #a6e22e;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-strong--sR3bJ {\\n  font-weight: bold;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-emphasis--1Pvbm {\\n  font-style: italic;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-keyword--3UClW,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-selector-tag--3pvuL,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-name--3Kb_o,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-attr--_CRiG {\\n  color: #f92672;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-symbol--2PVEg,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-attribute--1j4yO {\\n  color: #66d9ef;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-params--lfseG,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-class--yQc8G .node_modules-highlight-js-styles-monokai-sublime__hljs-title--2taB6 {\\n  color: #f8f8f2;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-string--1Ugfv,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-type--10HUC,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-built_in--2rL-1,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-builtin-name--ZUgSb,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-selector-id--3lTIF,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-selector-attr--bMtgg,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-selector-pseudo--lJ8-4,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-addition--2pGMq,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-variable--2e4La,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-template-variable--3CJ5a {\\n  color: #e6db74;\\n}\\n\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-comment--bqbmo,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-deletion--3a1Xw,\\n.node_modules-highlight-js-styles-monokai-sublime__hljs-meta--1h6-3 {\\n  color: #75715e;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"hljs\": \"node_modules-highlight-js-styles-monokai-sublime__hljs--2kA9k\",\n\t\"hljs-tag\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-tag--3fRY7\",\n\t\"hljsTag\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-tag--3fRY7\",\n\t\"hljs-subst\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-subst--PJuEM\",\n\t\"hljsSubst\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-subst--PJuEM\",\n\t\"hljs-strong\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-strong--sR3bJ\",\n\t\"hljsStrong\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-strong--sR3bJ\",\n\t\"hljs-emphasis\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-emphasis--1Pvbm\",\n\t\"hljsEmphasis\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-emphasis--1Pvbm\",\n\t\"hljs-bullet\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-bullet--aQaaJ\",\n\t\"hljsBullet\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-bullet--aQaaJ\",\n\t\"hljs-quote\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-quote--fRh0l\",\n\t\"hljsQuote\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-quote--fRh0l\",\n\t\"hljs-number\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-number--15wxX\",\n\t\"hljsNumber\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-number--15wxX\",\n\t\"hljs-regexp\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-regexp--2zy-n\",\n\t\"hljsRegexp\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-regexp--2zy-n\",\n\t\"hljs-literal\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-literal--31srr\",\n\t\"hljsLiteral\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-literal--31srr\",\n\t\"hljs-link\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-link--2h07P\",\n\t\"hljsLink\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-link--2h07P\",\n\t\"hljs-code\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-code--3C-in\",\n\t\"hljsCode\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-code--3C-in\",\n\t\"hljs-title\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-title--2taB6\",\n\t\"hljsTitle\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-title--2taB6\",\n\t\"hljs-section\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-section--L0-mN\",\n\t\"hljsSection\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-section--L0-mN\",\n\t\"hljs-selector-class\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-class--2Xv8S\",\n\t\"hljsSelectorClass\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-class--2Xv8S\",\n\t\"hljs-keyword\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-keyword--3UClW\",\n\t\"hljsKeyword\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-keyword--3UClW\",\n\t\"hljs-selector-tag\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-tag--3pvuL\",\n\t\"hljsSelectorTag\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-tag--3pvuL\",\n\t\"hljs-name\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-name--3Kb_o\",\n\t\"hljsName\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-name--3Kb_o\",\n\t\"hljs-attr\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-attr--_CRiG\",\n\t\"hljsAttr\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-attr--_CRiG\",\n\t\"hljs-symbol\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-symbol--2PVEg\",\n\t\"hljsSymbol\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-symbol--2PVEg\",\n\t\"hljs-attribute\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-attribute--1j4yO\",\n\t\"hljsAttribute\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-attribute--1j4yO\",\n\t\"hljs-params\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-params--lfseG\",\n\t\"hljsParams\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-params--lfseG\",\n\t\"hljs-class\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-class--yQc8G\",\n\t\"hljsClass\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-class--yQc8G\",\n\t\"hljs-string\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-string--1Ugfv\",\n\t\"hljsString\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-string--1Ugfv\",\n\t\"hljs-type\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-type--10HUC\",\n\t\"hljsType\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-type--10HUC\",\n\t\"hljs-built_in\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-built_in--2rL-1\",\n\t\"hljsBuiltIn\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-built_in--2rL-1\",\n\t\"hljs-builtin-name\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-builtin-name--ZUgSb\",\n\t\"hljsBuiltinName\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-builtin-name--ZUgSb\",\n\t\"hljs-selector-id\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-id--3lTIF\",\n\t\"hljsSelectorId\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-id--3lTIF\",\n\t\"hljs-selector-attr\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-attr--bMtgg\",\n\t\"hljsSelectorAttr\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-attr--bMtgg\",\n\t\"hljs-selector-pseudo\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-pseudo--lJ8-4\",\n\t\"hljsSelectorPseudo\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-selector-pseudo--lJ8-4\",\n\t\"hljs-addition\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-addition--2pGMq\",\n\t\"hljsAddition\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-addition--2pGMq\",\n\t\"hljs-variable\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-variable--2e4La\",\n\t\"hljsVariable\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-variable--2e4La\",\n\t\"hljs-template-variable\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-template-variable--3CJ5a\",\n\t\"hljsTemplateVariable\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-template-variable--3CJ5a\",\n\t\"hljs-comment\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-comment--bqbmo\",\n\t\"hljsComment\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-comment--bqbmo\",\n\t\"hljs-deletion\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-deletion--3a1Xw\",\n\t\"hljsDeletion\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-deletion--3a1Xw\",\n\t\"hljs-meta\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-meta--1h6-3\",\n\t\"hljsMeta\": \"node_modules-highlight-js-styles-monokai-sublime__hljs-meta--1h6-3\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/highlight.js/styles/monokai-sublime.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/highlight.js/styles/monokai-sublime.css":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/styles/monokai-sublime.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-1!./monokai-sublime.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/highlight.js/styles/monokai-sublime.css\");\n    var insertCss = __webpack_require__(/*! ../../isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./node_modules/highlight.js/styles/monokai-sublime.css?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\"); // const React = require('react');\n// const { renderToString } = require('react-dom/server')\n\n\nvar _require = __webpack_require__(/*! ./utils */ \"./server/utils.js\"),\n    render = _require.render; // require(\"node-jsx\").install()\n// const Home =  require('../component/Home');\n\n\nvar app = express();\napp.use(express.static('dist'));\napp.get('/api/homedata', function (req, res, next) {\n  res.json({\n    data: {\n      list: [11, 22, 33],\n      navList: [{\n        typeName: '日常学习',\n        id: 1,\n        icon: 'file-markdown'\n      }, {\n        typeName: '面试面经',\n        id: 2,\n        icon: 'smile'\n      }]\n    }\n  });\n});\napp.use('*', function (req, res, next) {\n  if (req.baseUrl === '/favicon.ico') return res.end(); // res.send(render(req))\n\n  render(req, res);\n}); // const content = renderToString(React.createElement(Home));\n// app.use('/', function(req, res, next){\n//   res.send(\n//     `\n//      <html>\n//        <head>\n//          <title>ssr</title>\n//        </head>\n//        <body>\n//          <div id=\"root\">${content}</div>\n//        </body>\n//        <script src=\"/index.js\"></script>\n//      </html>\n//     `\n//     );\n// })\n\napp.listen(3001, function () {\n  console.log('listen on port 3001');\n});\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// require(\"asset-require-hook\")({\n//   extensions: [\"svg\", \"css\", \"less\", \"jpg\", \"png\", \"gif\"],\n//   name: '/static/media/[name].[ext]'\n// });\n// require('babel-register') ({\n//   presets: [ 'env' ]\n// })\n// require(\"babel-polyfill\");\n__webpack_require__(/*! ./app */ \"./server/app.js\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/utils.js":
/*!*************************!*\
  !*** ./server/utils.js ***!
  \*************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/router */ \"./client/router.js\");\n/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/store */ \"./client/store/index.js\");\n\n\n\n\n\n\n // 改造这里 服务端做数据预取\n\nvar loadBranchData = function loadBranchData(pathname, store) {\n  var branch = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"matchRoutes\"])(_client_router__WEBPACK_IMPORTED_MODULE_5__[\"routes\"], pathname); // warning: 这里route.loadData 需要错误捕获\n\n  var promises = branch.map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n    return route.loadData ? route.loadData(store, match) // 把store 和 match 传入数据预取函数\n    : Promise.resolve(null);\n  });\n  return Promise.all(promises);\n};\n\nvar render = function render(req, res) {\n  var store = Object(_client_store__WEBPACK_IMPORTED_MODULE_6__[\"getServerStore\"])(); // console.log(req.baseUrl, 'req.baseUrl')\n\n  var context = {\n    css: []\n  }; // 加载完数据后，再把组件生成字符串返回，现在返回的组件都是有数据的结果\n\n  loadBranchData(req.baseUrl, store).then(function (data) {\n    // 到这里所有的数据预加载完毕\n    var string = getRenderString();\n    res.send(string);\n  }).catch(function (_err) {\n    console.log(_err);\n    res.send('loadBranchData_error');\n  }); //构建服务端的路由\n  // const content = renderToString(React.createElement(StaticRouter, {location: req.path}, Routes));\n\n  function getRenderString() {\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(\n    /*#__PURE__*/\n    // Warning 这里的 store 一定要和 loadBranchData 的store一致，因为预取的数据要在流到组件中，组件再被生成字符串返回\n    // 如果这两个store不一致，将即使数据预取成功，也没有再次流到组件中\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      location: req.baseUrl,\n      context: context\n    }, _client_router__WEBPACK_IMPORTED_MODULE_5__[\"default\"]))); // 服务端的 renderToString执行完后 context中已经被注入了数据\n\n    var cssStr = context.css.length ? context.css.join('\\n') : ''; // 数据注水\n\n    var hydrate = \"\\n      window.initialState = \".concat(JSON.stringify(store.getState()), \";\\n    \");\n    return \"\\n      <html>\\n        <head>\\n          <title>ssr</title>\\n          <style>\".concat(cssStr, \"</style>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(content, \"</div>\\n          <script>\\n            // Warning \\u8FD9\\u4E2Ascript\\u4E00\\u5B9A\\u4E0D\\u80FD\\u653E\\u5230\\u540E\\u9762\\uFF0C\\u5B83\\u5FC5\\u987B\\u5728\\u5BA2\\u6237\\u7AEF\\u4EE3\\u7801\\u6267\\u884C\\u4E4B\\u524D\\u6CE8\\u6C34\\u6570\\u636E\\n            \").concat(hydrate, \"\\n          </script>\\n          <script src=\\\"/index.js\\\"></script>\\n        </body>\\n      </html>\\n    \");\n  }\n};\n\n//# sourceURL=webpack:///./server/utils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectWithoutProperties\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectWithoutProperties%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"highlight.js\");\n\n//# sourceURL=webpack:///external_%22highlight.js%22?");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");\n\n//# sourceURL=webpack:///external_%22marked%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });