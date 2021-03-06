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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial */ "./src/testimonial/index.js");
// Import all the blocks scripts


/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 118.1 122.88"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M69.41 20.71c10.95 0 14.33.09 25.28.09 1.25 0 2.45.11 3.61.33 1.15.22 2.26.54 3.29.98 1.04.44 2.05.99 3.02 1.64.96.65 1.87 1.41 2.73 2.26.86.86 1.62 1.78 2.26 2.73.66.97 1.21 1.98 1.64 3.02.43 1.04.76 2.14.98 3.29.22 1.16.33 2.36.33 3.61V74.9c0 1.25-.11 2.45-.33 3.61a16.52 16.52 0 01-.98 3.29c-.44 1.05-.99 2.06-1.64 3.02-.65.96-1.41 1.87-2.26 2.73l-.01.01c-.89.87-1.82 1.63-2.78 2.27-.96.65-1.97 1.19-3.01 1.63-1.04.43-2.13.76-3.28.98-1.14.22-2.34.33-3.58.33H81c-.43 0-.85.1-1.24.29-.36.18-.69.44-.94.78l-.02.02a67.726 67.726 0 01-3.4 4.16 54.43 54.43 0 01-3.76 3.84c-1.29 1.2-2.65 2.35-4.06 3.46a63.093 63.093 0 01-4.36 3.13c-1.43.94-2.94 1.84-4.51 2.69a67.7 67.7 0 01-4.76 2.34c-.18.08-.38.07-.56-.03a.636.636 0 01-.24-.86c.29-.51.57-1.02.85-1.56.27-.5.51-1.01.75-1.55.46-1.03.9-2.08 1.32-3.16.43-1.09.83-2.18 1.22-3.31.37-1.05.71-2.14 1.04-3.24.33-1.1.64-2.21.94-3.32.08-.33.16-.66.16-1 0-.74-.3-1.43-.79-1.92l-.03-.03c-.5-.5-1.2-.82-1.95-.82h-15.9c-1.25 0-2.44-.11-3.58-.33a16.63 16.63 0 01-3.24-.97l-.02-.01c-1.02-.4-2.01-.94-2.96-1.58-.98-.66-1.93-1.45-2.84-2.33l-.01-.01c-.86-.86-1.62-1.77-2.27-2.73-.66-.97-1.2-1.97-1.64-3.02-.43-1.04-.76-2.14-.98-3.29-.22-1.16-.33-2.36-.33-3.61v-7.37c0-3.7-4.79-3.73-5.59-1.09v8.41c0 1.58.15 3.12.43 4.6.29 1.51.72 2.97 1.29 4.39.56 1.37 1.27 2.69 2.13 3.96.86 1.26 1.86 2.47 3 3.61 1.13 1.14 2.34 2.14 3.61 3 1.25.85 2.57 1.56 3.94 2.12l.02.01c1.41.57 2.88 1 4.38 1.29 1.48.28 3.02.43 4.6.43h11.43c.07 0 .15.01.22.03.33.11.51.46.41.79l-.01.02c-.22.7-.44 1.4-.69 2.15l-.01.04a72.86 72.86 0 01-1.15 3.07c-.39.97-.79 1.93-1.21 2.85-.01.05-.02.09-.04.14-.41.93-.88 1.85-1.43 2.76-.54.91-1.15 1.8-1.81 2.68-.68.88-1.44 1.77-2.28 2.67l-.03.04c-.85.9-1.77 1.79-2.76 2.65a2.78 2.78 0 00-.92 1.91c-.04.7.19 1.42.7 1.99.36.4.8.67 1.28.81s1 .16 1.49.02c2.08-.56 4.12-1.17 6.1-1.85 1.98-.68 3.9-1.42 5.74-2.22a68.186 68.186 0 0010.53-5.67c1.63-1.06 3.21-2.19 4.74-3.39 1.53-1.2 3-2.46 4.41-3.77l.03-.03a67.682 67.682 0 006.7-7.34.64.64 0 01.53-.29h12.02c1.61 0 3.15-.15 4.64-.43 1.5-.29 2.94-.72 4.32-1.28l.02-.01c1.39-.59 2.71-1.31 3.98-2.16 1.26-.85 2.46-1.83 3.6-2.97 1.14-1.14 2.14-2.35 3-3.61.85-1.26 1.57-2.59 2.13-3.96.57-1.39 1-2.84 1.29-4.35.28-1.48.43-3.03.43-4.64V38.57c0-1.61-.15-3.16-.43-4.64-.29-1.51-.72-2.96-1.29-4.34-.56-1.37-1.28-2.7-2.13-3.96-.86-1.27-1.86-2.48-2.99-3.61a24.66 24.66 0 00-3.61-3c-1.25-.85-2.57-1.56-3.94-2.12l-.02-.01c-1.42-.57-2.88-1-4.39-1.29-1.48-.28-3.02-.43-4.6-.43-11.38 0-15.19-.05-26.57-.05-2.71.79-2.89 5.59 1.28 5.59zM47.02 76.55a2.616 2.616 0 01-2.65-2.59 2.616 2.616 0 012.59-2.65l27.78-.42 5.32-.34a2.62 2.62 0 11.33 5.23l-5.32.34s-25.71.39-28.05.43zm8.32-16.46c-1.45 0-2.63-1.18-2.63-2.63s1.18-2.63 2.63-2.63h37.52c1.45 0 2.63 1.18 2.63 2.63s-1.18 2.63-2.63 2.63H55.34zm11.68-15.7c-1.45 0-2.63-1.18-2.63-2.63s1.18-2.63 2.63-2.63h25.84c1.45 0 2.63 1.18 2.63 2.63s-1.18 2.63-2.63 2.63H67.02zM28.3.52l7.15 17.46 18.82 1.4c.46.03.81.43.78.9-.02.24-.14.45-.31.6L40.35 33.06l4.48 18.34c.11.45-.17.9-.62 1.01-.24.06-.47.01-.66-.12l-16.03-9.92-16.05 9.93a.84.84 0 01-1.15-.27.857.857 0 01-.1-.64l4.48-18.34L.3 20.87a.84.84 0 01-.1-1.18c.15-.18.36-.28.58-.3l18.82-1.4L26.75.53c.17-.43.66-.63 1.09-.46.22.08.38.25.46.45z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTE4LjEgMTIyLjg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTguMSAxMjIuODgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik02OS40MSwyMC43MWMxMC45NSwwLDE0LjMzLDAuMDksMjUuMjgsMC4wOWMxLjI1LDAsMi40NSwwLjExLDMuNjEsMC4zM2MxLjE1LDAuMjIsMi4yNiwwLjU0LDMuMjksMC45OCBjMS4wNCwwLjQ0LDIuMDUsMC45OSwzLjAyLDEuNjRjMC45NiwwLjY1LDEuODcsMS40MSwyLjczLDIuMjZjMC44NiwwLjg2LDEuNjIsMS43OCwyLjI2LDIuNzNjMC42NiwwLjk3LDEuMjEsMS45OCwxLjY0LDMuMDIgYzAuNDMsMS4wNCwwLjc2LDIuMTQsMC45OCwzLjI5YzAuMjIsMS4xNiwwLjMzLDIuMzYsMC4zMywzLjYxdjM2LjI0YzAsMS4yNS0wLjExLDIuNDUtMC4zMywzLjYxYy0wLjIyLDEuMTYtMC41NSwyLjI2LTAuOTgsMy4yOSBjLTAuNDQsMS4wNS0wLjk5LDIuMDYtMS42NCwzLjAyYy0wLjY1LDAuOTYtMS40MSwxLjg3LTIuMjYsMi43M2wtMC4wMSwwLjAxYy0wLjg5LDAuODctMS44MiwxLjYzLTIuNzgsMi4yNyBjLTAuOTYsMC42NS0xLjk3LDEuMTktMy4wMSwxLjYzYy0xLjA0LDAuNDMtMi4xMywwLjc2LTMuMjgsMC45OGMtMS4xNCwwLjIyLTIuMzQsMC4zMy0zLjU4LDAuMzNIODFjLTAuNDMsMC0wLjg1LDAuMS0xLjI0LDAuMjkgYy0wLjM2LDAuMTgtMC42OSwwLjQ0LTAuOTQsMC43OGwtMC4wMiwwLjAyYy0xLjA4LDEuNDMtMi4yMSwyLjgyLTMuNCw0LjE2Yy0xLjE5LDEuMzMtMi40MywyLjYyLTMuNzYsMy44NCBjLTEuMjksMS4yLTIuNjUsMi4zNS00LjA2LDMuNDZjLTEuNDEsMS4xMS0yLjg3LDIuMTUtNC4zNiwzLjEzYy0xLjQzLDAuOTQtMi45NCwxLjg0LTQuNTEsMi42OWMtMS41NSwwLjg0LTMuMTQsMS42Mi00Ljc2LDIuMzQgYy0wLjE4LDAuMDgtMC4zOCwwLjA3LTAuNTYtMC4wM2MtMC4zLTAuMTctMC40MS0wLjU2LTAuMjQtMC44NmMwLjI5LTAuNTEsMC41Ny0xLjAyLDAuODUtMS41NmMwLjI3LTAuNSwwLjUxLTEuMDEsMC43NS0xLjU1bDAsMCBjMC40Ni0xLjAzLDAuOS0yLjA4LDEuMzItMy4xNmMwLjQzLTEuMDksMC44My0yLjE4LDEuMjItMy4zMWMwLjM3LTEuMDUsMC43MS0yLjE0LDEuMDQtMy4yNGMwLjMzLTEuMSwwLjY0LTIuMjEsMC45NC0zLjMyIGMwLjA4LTAuMzMsMC4xNi0wLjY2LDAuMTYtMWMwLTAuNzQtMC4zLTEuNDMtMC43OS0xLjkybC0wLjAzLTAuMDNjLTAuNS0wLjUtMS4yLTAuODItMS45NS0wLjgySDQwLjc2Yy0xLjI1LDAtMi40NC0wLjExLTMuNTgtMC4zMyBjLTEuMTMtMC4yMi0yLjIxLTAuNTQtMy4yNC0wLjk3bC0wLjAyLTAuMDFjLTEuMDItMC40LTIuMDEtMC45NC0yLjk2LTEuNThjLTAuOTgtMC42Ni0xLjkzLTEuNDUtMi44NC0yLjMzbC0wLjAxLTAuMDEgYy0wLjg2LTAuODYtMS42Mi0xLjc3LTIuMjctMi43M2MtMC42Ni0wLjk3LTEuMi0xLjk3LTEuNjQtMy4wMmMtMC40My0xLjA0LTAuNzYtMi4xNC0wLjk4LTMuMjljLTAuMjItMS4xNi0wLjMzLTIuMzYtMC4zMy0zLjYxIHYtNy4zN2MwLTMuNy00Ljc5LTMuNzMtNS41OS0xLjA5djguNDFjMCwxLjU4LDAuMTUsMy4xMiwwLjQzLDQuNmMwLjI5LDEuNTEsMC43MiwyLjk3LDEuMjksNC4zOWMwLjU2LDEuMzcsMS4yNywyLjY5LDIuMTMsMy45NiBjMC44NiwxLjI2LDEuODYsMi40NywzLDMuNjFjMS4xMywxLjE0LDIuMzQsMi4xNCwzLjYxLDNjMS4yNSwwLjg1LDIuNTcsMS41NiwzLjk0LDIuMTJsMC4wMiwwLjAxYzEuNDEsMC41NywyLjg4LDEsNC4zOCwxLjI5IGMxLjQ4LDAuMjgsMy4wMiwwLjQzLDQuNiwwLjQzbDExLjQzLDBjMC4wNywwLDAuMTUsMC4wMSwwLjIyLDAuMDNjMC4zMywwLjExLDAuNTEsMC40NiwwLjQxLDAuNzlsLTAuMDEsMC4wMiBjLTAuMjIsMC43LTAuNDQsMS40LTAuNjksMi4xNWwtMC4wMSwwLjA0Yy0wLjM1LDEuMDEtMC43NCwyLjA0LTEuMTUsMy4wN2MtMC4zOSwwLjk3LTAuNzksMS45My0xLjIxLDIuODUgYy0wLjAxLDAuMDUtMC4wMiwwLjA5LTAuMDQsMC4xNGMtMC40MSwwLjkzLTAuODgsMS44NS0xLjQzLDIuNzZjLTAuNTQsMC45MS0xLjE1LDEuOC0xLjgxLDIuNjhjLTAuNjgsMC44OC0xLjQ0LDEuNzctMi4yOCwyLjY3IGwtMC4wMywwLjA0Yy0wLjg1LDAuOS0xLjc3LDEuNzktMi43NiwyLjY1Yy0wLjU3LDAuNTEtMC44OCwxLjIxLTAuOTIsMS45MWMtMC4wNCwwLjcsMC4xOSwxLjQyLDAuNywxLjk5IGMwLjM2LDAuNCwwLjgsMC42NywxLjI4LDAuODFjMC40OCwwLjE0LDEsMC4xNiwxLjQ5LDAuMDJjMi4wOC0wLjU2LDQuMTItMS4xNyw2LjEtMS44NWMxLjk4LTAuNjgsMy45LTEuNDIsNS43NC0yLjIyIGMxLjg2LTAuOCwzLjY4LTEuNjgsNS40NC0yLjYzYzEuNzUtMC45NCwzLjQ1LTEuOTYsNS4wOS0zLjA0bDAsMGMxLjYzLTEuMDYsMy4yMS0yLjE5LDQuNzQtMy4zOWMxLjUzLTEuMiwzLTIuNDYsNC40MS0zLjc3IGwwLjAzLTAuMDNjMS4xOS0xLjEyLDIuMzQtMi4zLDMuNDYtMy41MmMxLjEzLTEuMjQsMi4yMi0yLjUyLDMuMjQtMy44MmMwLjExLTAuMTcsMC4zMS0wLjI5LDAuNTMtMC4yOWgxMi4wMiBjMS42MSwwLDMuMTUtMC4xNSw0LjY0LTAuNDNjMS41LTAuMjksMi45NC0wLjcyLDQuMzItMS4yOGwwLjAyLTAuMDFjMS4zOS0wLjU5LDIuNzEtMS4zMSwzLjk4LTIuMTZjMS4yNi0wLjg1LDIuNDYtMS44MywzLjYtMi45NyBjMS4xNC0xLjE0LDIuMTQtMi4zNSwzLTMuNjFjMC44NS0xLjI2LDEuNTctMi41OSwyLjEzLTMuOTZjMC41Ny0xLjM5LDEtMi44NCwxLjI5LTQuMzVjMC4yOC0xLjQ4LDAuNDMtMy4wMywwLjQzLTQuNjRsMC0zNi4yNCBjMC0xLjYxLTAuMTUtMy4xNi0wLjQzLTQuNjRjLTAuMjktMS41MS0wLjcyLTIuOTYtMS4yOS00LjM0Yy0wLjU2LTEuMzctMS4yOC0yLjctMi4xMy0zLjk2Yy0wLjg2LTEuMjctMS44Ni0yLjQ4LTIuOTktMy42MSBjLTEuMTQtMS4xNC0yLjM0LTIuMTQtMy42MS0zYy0xLjI1LTAuODUtMi41Ny0xLjU2LTMuOTQtMi4xMmwtMC4wMi0wLjAxYy0xLjQyLTAuNTctMi44OC0xLTQuMzktMS4yOSBjLTEuNDgtMC4yOC0zLjAyLTAuNDMtNC42LTAuNDNjLTExLjM4LDAtMTUuMTktMC4wNS0yNi41Ny0wLjA1QzY1LjQyLDE1LjkxLDY1LjI0LDIwLjcxLDY5LjQxLDIwLjcxTDY5LjQxLDIwLjcxeiBNNDcuMDIsNzYuNTUgYy0xLjQ1LDAuMDItMi42My0xLjE0LTIuNjUtMi41OWMtMC4wMi0xLjQ1LDEuMTQtMi42MywyLjU5LTIuNjVsMjcuNzgtMC40Mmw1LjMyLTAuMzRjMS40NS0wLjA5LDIuNjksMS4wMSwyLjc4LDIuNDUgYzAuMDksMS40NS0xLjAxLDIuNjktMi40NSwyLjc4bC01LjMyLDAuMzRDNzUuMDcsNzYuMTIsNDkuMzYsNzYuNTEsNDcuMDIsNzYuNTVMNDcuMDIsNzYuNTV6IE01NS4zNCw2MC4wOSBjLTEuNDUsMC0yLjYzLTEuMTgtMi42My0yLjYzYzAtMS40NSwxLjE4LTIuNjMsMi42My0yLjYzaDM3LjUyYzEuNDUsMCwyLjYzLDEuMTgsMi42MywyLjYzYzAsMS40NS0xLjE4LDIuNjMtMi42MywyLjYzSDU1LjM0IEw1NS4zNCw2MC4wOXogTTY3LjAyLDQ0LjM5Yy0xLjQ1LDAtMi42My0xLjE4LTIuNjMtMi42M2MwLTEuNDUsMS4xOC0yLjYzLDIuNjMtMi42M2gyNS44NGMxLjQ1LDAsMi42MywxLjE4LDIuNjMsMi42MyBjMCwxLjQ1LTEuMTgsMi42My0yLjYzLDIuNjNINjcuMDJMNjcuMDIsNDQuMzl6IE0yOC4zLDAuNTJsNy4xNSwxNy40NmwxOC44MiwxLjRjMC40NiwwLjAzLDAuODEsMC40MywwLjc4LDAuOSBjLTAuMDIsMC4yNC0wLjE0LDAuNDUtMC4zMSwwLjZMNDAuMzUsMzMuMDZsNC40OCwxOC4zNGMwLjExLDAuNDUtMC4xNywwLjktMC42MiwxLjAxYy0wLjI0LDAuMDYtMC40NywwLjAxLTAuNjYtMC4xMmwtMTYuMDMtOS45MiBsLTE2LjA1LDkuOTNjLTAuMzksMC4yNC0wLjkxLDAuMTItMS4xNS0wLjI3Yy0wLjEyLTAuMi0wLjE1LTAuNDMtMC4xLTAuNjRsNC40OC0xOC4zNEwwLjMsMjAuODdjLTAuMzUtMC4zLTAuNC0wLjgzLTAuMS0xLjE4IGMwLjE1LTAuMTgsMC4zNi0wLjI4LDAuNTgtMC4zbDE4LjgyLTEuNGw3LjE1LTE3LjQ2YzAuMTctMC40MywwLjY2LTAuNjMsMS4wOS0wLjQ2QzI4LjA2LDAuMTUsMjguMjIsMC4zMiwyOC4zLDAuNTJMMjguMywwLjUyeiIvPjwvZz48L3N2Zz4=");


/***/ }),

/***/ "./src/testimonial/index.js":
/*!**********************************!*\
  !*** ./src/testimonial/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo.svg */ "./src/logo.svg");

const {
  registerBlockType
} = wp.blocks;

registerBlockType("mtgtab/testimonial", {
  title: "Testimonial",
  category: "common",
  icon: {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  edit: () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Testimonial");
  },
  save: () => {}
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map