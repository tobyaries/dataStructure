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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Stack/DivideBy2.js":
/*!********************************!*\
  !*** ./src/Stack/DivideBy2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = DivideBy2;\n\nvar _Stack = __webpack_require__(/*! ../Stack */ \"./src/Stack/index.js\");\n\nvar _Stack2 = _interopRequireDefault(_Stack);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction DivideBy2() {\n\n    this.divideBy2 = function (decNumber) {\n        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n\n\n        var remStack = new _Stack2.default(),\n            rem,\n            bianryString = '';\n\n        while (decNumber > 0) {\n            rem = Math.floor(decNumber % base);\n            remStack.push(rem);\n            decNumber = Math.floor(decNumber / base);\n        }\n\n        while (!remStack.isEmpty()) {\n            var tmp = remStack.pop();\n            bianryString += tmp.toString();\n        }\n\n        return bianryString;\n    };\n}\n\n//# sourceURL=webpack:///./src/Stack/DivideBy2.js?");

/***/ }),

/***/ "./src/Stack/index.js":
/*!****************************!*\
  !*** ./src/Stack/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Stack;\nfunction Stack() {\n    var items = [];\n\n    this.push = function (ele) {\n        items.push(ele);\n    };\n\n    this.pop = function () {\n        return items.pop();\n    };\n\n    this.peek = function () {\n        return items[items.length - 1];\n    };\n\n    this.isEmpty = function () {\n        return items.length === 0;\n    };\n\n    this.size = function () {\n        return items.length;\n    };\n\n    this.clear = function () {\n        items = [];\n    };\n\n    this.print = function () {\n        console.log(items.toString());\n    };\n}\n\n//# sourceURL=webpack:///./src/Stack/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _DivideBy = __webpack_require__(/*! ./Stack/DivideBy2 */ \"./src/Stack/DivideBy2.js\");\n\nvar _DivideBy2 = _interopRequireDefault(_DivideBy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar divideBy2 = new _DivideBy2.default();\nconsole.log(divideBy2.divideBy2(2131, 8));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });