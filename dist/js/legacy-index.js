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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/darkMode.js":
/*!****************************!*\
  !*** ./src/js/darkMode.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDarkMode = toggleDarkMode;

function toggleDarkMode() {
  var bgColor = getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
  var codes = document.querySelectorAll('code');
  console.log(this.innerHTML);

  if (bgColor != 'white') {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--mainTextColor', 'rgb(22, 69, 122)');
    codes.forEach(function (code) {
      code.style.backgroundColor = 'rgb(231, 231, 231)';
      code.style.color = 'grey';
    });
    this.innerHTML = 'Dark mode';
  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--mainTextColor', 'white');
    codes.forEach(function (code) {
      code.style.backgroundColor = '#151515';
      code.style.color = 'white';
    });
    this.innerHTML = 'Light mode';
  }
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _darkMode = __webpack_require__(/*! ./darkMode.js */ "./src/js/darkMode.js");

var _returnHome = __webpack_require__(/*! ./returnHome.js */ "./src/js/returnHome.js");

var _mobileNav = __webpack_require__(/*! ./mobileNav.js */ "./src/js/mobileNav.js");

window.addEventListener('DOMContentLoaded', function () {
  var buttonDarkMode = document.querySelector('.button--toggleDarkMode');
  var buttonSizeDown = document.querySelector('.button--fontSizeDown');
  var buttonSizeUp = document.querySelector('.button--fontSizeUp');
  var buttonToTop = document.querySelector('.button--returnHome');
  var menuItems = document.querySelectorAll('.nav-link');
  var highlighter = document.createElement('div');
  var burger = document.querySelector('.nav__burger');
  var nav = document.querySelector('.nav');
  var current = 18; // change font size

  function changeSize(e) {
    if (e.target.classList == 'button button--fontSizeUp') {
      current++;
    } else {
      current--;
    }

    document.documentElement.style.setProperty('--fontSize', current + "px");
  } // highlighter for menu items


  highlighter.classList.add('menuSelector');
  document.body.appendChild(highlighter);

  function highlight() {
    var dimensions = this.getBoundingClientRect();
    var data = {
      width: dimensions.width,
      height: dimensions.height,
      left: dimensions.left,
      top: dimensions.top
    };
    highlighter.style.width = data.width + "px";
    highlighter.style.height = data.height + "px";
    highlighter.style.top = window.scrollY + data.top + "px";
    highlighter.style.left = window.scrollX + data.left + "px";
  }

  buttonSizeDown.addEventListener('click', changeSize);
  buttonSizeUp.addEventListener('click', changeSize);
  buttonToTop.addEventListener('click', _returnHome.returnHome);
  buttonDarkMode.addEventListener('click', _darkMode.toggleDarkMode);
  menuItems.forEach(function (item) {
    return item.addEventListener('mouseenter', highlight);
  });
  menuItems.forEach(function (item) {
    return item.addEventListener('click', _mobileNav.closeNav);
  });
  burger.addEventListener('click', _mobileNav.mobileNav); // do not display highlighter on mobiles

  window.addEventListener('resize', function () {
    if (window.innerWidth < 800) {
      highlighter.style.display = 'none';
    } else {
      highlighter.style.display = 'block';
      burger.innerHTML = 'MENU';

      if (nav.classList.contains('nav--active')) {
        nav.classList.remove('nav--active');
      }
    }
  });
});

/***/ }),

/***/ "./src/js/mobileNav.js":
/*!*****************************!*\
  !*** ./src/js/mobileNav.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobileNav = mobileNav;
exports.closeNav = closeNav;

function mobileNav() {
  var burger = document.querySelector('.nav__burger');
  var nav = document.querySelector('.nav');

  if (burger.innerHTML === 'MENU') {
    burger.innerHTML = 'CLOSE';
  } else {
    burger.innerHTML = 'MENU';
  }

  nav.classList.toggle('nav--active');
}

function closeNav() {
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav__burger');

  if (window.innerWidth < 800) {
    nav.classList.remove('nav--active');
    burger.innerHTML = 'MENU';
  }
}

/***/ }),

/***/ "./src/js/returnHome.js":
/*!******************************!*\
  !*** ./src/js/returnHome.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnHome = returnHome;

function returnHome() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/***/ })

/******/ });
//# sourceMappingURL=legacy-index.js.map