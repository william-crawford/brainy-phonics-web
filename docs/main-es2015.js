(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main content container -->\n<div class='jumbotron'>\n  <div class='container'>\n      <div class='row'>\n          <div class='col-sm-8 offset-sm-2'>\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-learn/alphabet-learn.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-learn/alphabet-learn.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n\t        <button mat-icon-button class='back-button' id='back' (click)='prev($event)' style=\"z-index: 99; cursor: pointer\"></button>\n        \t<button mat-icon-button class='after-button' id='forward' (click)='next($event)' style=\"z-index: 99; cursor: pointer\"></button>\n        \t<div class='letter' [ngClass]=\"{'animateLetter': letterAnimate}\" (click)='playAudio()'>{{letter.letter}}</div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='quiz' (click)=\"takeQuiz()\"></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-quiz/alphabet-quiz.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-quiz/alphabet-quiz.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div id='letter' [ngClass]=\"{'animateLetter1': letterAnimate1, 'letter-temp2': letterAnimate2, 'letter-temp3': letterAnimate3, 'letter-temp4': letterAnimate4}\" (click)='check(ex1)'>{{ex1.letter}}</div>\n            <div id='letter3' [ngClass]=\"{'animateLetter3': letterAnimate3, 'letter-temp': letterAnimate1, 'letter-temp2': letterAnimate2, 'letter-temp4': letterAnimate4}\" (click)='check(ex3)'>{{ex3.letter}}</div>\n        </div>\n        <div class='column'>\n            <div id='letter2' [ngClass]=\"{'animateLetter2': letterAnimate2, 'letter-temp': letterAnimate1, 'letter-temp3': letterAnimate3, 'letter-temp4': letterAnimate4}\" (click)='check(ex2)'>{{ex2.letter}}</div>\n            <div id='letter4' [ngClass]=\"{'animateLetter4': letterAnimate4, 'letter-temp': letterAnimate1, 'letter-temp2': letterAnimate2, 'letter-temp3': letterAnimate3}\" (click)='check(ex4)'>{{ex4.letter}}</div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink=\"/coins\"></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coins/coins.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coins/coins.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/armored-car.png\" *ngFor=\"let i of numberToIterable(cars)\"\n                     style=\"height: 20vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/money_bag_new.png\" *ngFor=\"let i of numberToIterable(bags)\"\n                     style=\"height: 15vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/stack_of_coins_5.png\" *ngFor=\"let i of numberToIterable(stacks)\"\n                     style=\"height: 11vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/coin_gold_new.png\" *ngFor=\"let i of numberToIterable(golds)\"\n                     style=\"height: 5vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/silver_coin_new.png\" *ngFor=\"let i of numberToIterable(silvers)\"\n                     style=\"height: 5vh\"/>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-categories.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-categories.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='letters' (mouseenter)='playAudio($event)' routerLink='/first-letters-details'></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='consonants' (mouseenter)='playAudio($event)' routerLink='/first-consonants-details'></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio($event)' routerLink='/first-vowels-details'></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n                <button mat-icon-button class='category_button' id='beginning-sounds' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'C-begin', 'grade': '1st'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-sounds' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'C-end', 'grade': '1st'}\"></button>\n                <button mat-icon-button class='category_button' id='beginning-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'CB-begin', 'grade':'1st'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'CB-end', 'grade':'1st'}\"></button>\n                <button mat-icon-button class='category_button' id='beginning-digraphs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'CD-begin', 'grade': '1st'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-digraphs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'CD-end', 'grade':'1st'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-letters-details/first-letters-details.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-letters-details/first-letters-details.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'alphabet', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'reordered': 'true'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'alphabet'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'alphabet', 'capital': 'true', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'capital': 'true', 'reordered': 'true'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='names_uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'alphabet', 'capital': 'true'}\"></button>\n            <button mat-icon-button class='category_button' id='sounds_uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'capital': 'true'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n                <button mat-icon-button class='category_button' id='short_vowels' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list': 'V-short', 'grade':'1st'}\"></button>\n                <button mat-icon-button class='category_button' id='long_vowels' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'V-long', 'grade':'1st'}\"></button>\n                <button mat-icon-button class='category_button' id='vowel_pairs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'VP', 'grade':'1st'}\"></button>\n                <button mat-icon-button class='category_button' id='y_sounds' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'Y', 'grade':'1st'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='container'>\n            <div class='row'>\n                <button mat-icon-button class='button' id='pre-k' (mouseenter)='playAudio($event)' routerLink='/prek-categories'></button>\n                <button mat-icon-button class='button' id='kindergarten' (mouseenter)='playAudio($event)' routerLink='/k-categories'></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='button' id='first' (mouseenter)='playAudio($event)' routerLink='/first-categories'></button>\n                <button mat-icon-button class='button' id='second' (mouseenter)='playAudio($event)' routerLink='/second-categories'></button>\n                <button mat-icon-button class='button' id='third' (mouseenter)='playAudio($event)' routerLink='/third-categories'></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='button' id='phonics' (mouseenter)='playAudio($event)' routerLink='/phoneme-categories'></button>\n                <button mat-icon-button class='button' id='word-structures' (mouseenter)='playAudio($event)' routerLink='/word-structures'></button>\n                <button mat-icon-button class='button' id='nobodys-better' (mouseenter)='playAudio($event)' routerLink='/nobodys-better'></button>\n                <button mat-icon-button class='button' id='secret-stuff' (mouseenter)='playAudio($event)' routerLink='/secret-stuff'></button>\n            </div>\n        </div>\n    </div>\n    <div id='side-menu'></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n                <button mat-icon-button class='category_button' id='lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list': 'C-begin', 'grade':'K'}\"></button>\n                <button mat-icon-button class='category_button' id='lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'C-begin', 'grade':'K', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'C-begin', 'grade':'K', 'capital': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'C-begin', 'grade':'K', 'capital': 'true', 'reordered': 'true'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-categories.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-categories.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row1'>\n                <button mat-icon-button class='category_button' id='letters' (mouseenter)='playAudio($event)' routerLink='/k-letters-details'></button>\n                <button mat-icon-button class='category_button' id='beginning-sounds' (mouseenter)='playAudio($event)' routerLink='/k-beginning-sounds-details'></button>\n            </div>\n            <div class='row2'>\n                <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade': 'K', list:'V-short'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-sounds' (mouseenter)='playAudio($event)' routerLink='/k-ending-sounds-details'></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n                <button mat-icon-button class='category_button' id='lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{ 'list': 'C-end', 'grade':'K'}\"></button>\n                <button mat-icon-button class='category_button' id='lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'C-end', 'grade':'K', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'C-end', 'grade':'K', 'capital': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'C-end', 'grade':'K', 'capital': 'true', 'reordered': 'true'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-letters-details/k-letters-details.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-letters-details/k-letters-details.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'alphabet', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'reordered': 'true'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'alphabet'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'alphabet', 'capital': 'true', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'capital': 'true', 'reordered': 'true'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='names_uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'alphabet', 'capital': 'true'}\"></button>\n            <button mat-icon-button class='category_button' id='sounds_uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'capital': 'true'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-select/list-select.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-select/list-select.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class=\"cardList\">\n                <app-card class=\"cardListItem {{ setClass(item) }}\" id='{{ setID(item) }}' (click)='select(item)' *ngFor=\"let item of data\" >\n                    <p>{{ getDisplay(item)}} </p>\n                    <img src='{{ getImage(item) }}' class='word-image'>\n                </app-card>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='quiz' (click)='quiz()'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='container'>\n            <h1>Student Sign in</h1>\n            <div class='password'>\n                <div class='placeholder'>\n                    <img *ngIf='selectedImg[0]' class='selected-image' [src]=\"selectedImg[0]['url']\" (click)='onSelected(selectedImg[0])'>\n                  </div>\n                  <div class='placeholder'>\n                    <img *ngIf='selectedImg[1]' class='selected-image' [src]=\"selectedImg[1]['url']\" (click)='onSelected(selectedImg[1])'>\n                  </div>\n                  <div class='placeholder'>\n                    <img *ngIf='selectedImg[2]' class='selected-image' [src]=\"selectedImg[2]['url']\" (click)='onSelected(selectedImg[2])'>\n                  </div>\n                  <div class='placeholder'>\n                    <img *ngIf='selectedImg[3]' class='selected-image' [src]=\"selectedImg[3]['url']\" (click)='onSelected(selectedImg[3])'>\n                  </div>\n                  <div class='placeholder'>\n                    <img *ngIf='selectedImg[4]' class='selected-image' [src]=\"selectedImg[4]['url']\" (click)='onSelected(selectedImg[4])'>\n                  </div>\n            </div>\n            <div class='image-container'>\n                    <div *ngFor='let img of imgs'(click)='onImg(img)'>\n                        <img [src]=\"img['url']\" class='image'>\n                    </div>\n            </div>\n            <button mat-icon-button id='submit' (click)='submit()'>Login</button>\n        </div>\n    </div>\n    <div id='side-menu'></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nobodys-better/nobodys-better.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nobodys-better/nobodys-better.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <video autoplay id='nobodys-better'><source src=\"../../../assets/video/nobodys_better.mov\"></video>\n    </div>\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='replayVideo()'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-categories/phoneme-categories.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-categories/phoneme-categories.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='consonants' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list': 'consonants'}\"></button>\n                <button mat-icon-button class='category_button' id='vowel_consonant_blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'vowelConsonants'}\"></button>\n                <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'vowels'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='consonant_blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'consonantBlends'}\"></button>\n                <button mat-icon-button class='category_button' id='all' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'phoneme'}\"></button>\n                <button mat-icon-button class='category_button' id='vowel_pairs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'vowelPairs'}\"></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' routerLink='/'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-learn/phoneme-learn.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-learn/phoneme-learn.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <button mat-icon-button class='back-button' id='back' (click)='prev($event)' style=\"z-index: 99; cursor: pointer\"></button>\n        <button mat-icon-button class='after-button' id='forward' (click)='next($event)' style=\"z-index: 99; cursor: pointer\"></button>\n\t \t<div class='letter' [ngClass]=\"{'animate-one': oneAnimate, 'animate-two': twoAnimate, 'animate-three': threeAnimate}\" (click)='playAudioA()'>{{phoneme.display}}</div>\n    \t<div class='row'>\n\t    \t<div class='column' [ngClass]=\"{'animate': ex1Animate}\">\n\t\t\t\t<img src={{img1}} class='word-image one' (click)='playEx1Audio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playEx1Audio()' [innerHtml]='word1'></div>\n\t\t\t</div>\n\n\t\t\t<div class='column' [ngClass]=\"{'animate': ex2Animate}\">\n\t\t\t\t<img src={{img2}} class='word-image two' (click)='playEx2Audio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playEx2Audio()' [innerHtml]='word2'></div>\n\t\t\t</div>\n\n\t\t\t<div class='column' [ngClass]=\"{'animate': ex3Animate}\">\n\t\t\t\t<img src={{img3}} class='word-image' (click)='playEx3Audio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playEx3Audio()' [innerHtml]='word3'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)=\"playAudio()\"></button>\n        <button mat-icon-button class='icon bottom' id='quiz' (click)=\"showQuiz()\"></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-quiz/phoneme-quiz.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-quiz/phoneme-quiz.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='row'>\n            <div class='column puzzle-pane'>\n                <div class='letter' [ngClass]=\"{'animate': phonemeAnimate}\" (click)='playPhonemeAudio()'>{{phoneme.display}}</div>\n                <div class='puzzle'>\n                    <img *ngFor='let image of puzzlePieceImages; let i = index' class='puzzle-image' src={{image}} [ngClass]=\"{'visible':phoneme.puzzlePiecesEarned > i, 'animate-puzzle': puzzleAnimate && phoneme.puzzlePiecesEarned <= i + piecesToAnimate, 'animate-default': !puzzleAnimate}\"><br>\n                </div>\n            </div>\n            <div class='column answer-pane'>\n                <div class='row'>\n                    <div [ngClass]=\"{'animate': ex1Animate, 'animateEx1': ex1CorrectAnimate, 'ex-temp2': ex2CorrectAnimate, 'ex-temp3': ex3CorrectAnimate}\">\n        \t\t\t\t<img src={{img1}} class='word-image word-image-top' (click)='onClick1()'>\n        \t\t\t\t<br>\n        \t\t\t</div>\n                </div>\n\n    \t\t\t<div class='column' [ngClass]=\"{'animate': ex2Animate, 'animateEx2': ex2CorrectAnimate, 'ex-temp1': ex1CorrectAnimate, 'ex-temp3': ex3CorrectAnimate}\">\n    \t\t\t\t<img src={{img2}} class='word-image word-image-bottom' (click)='onClick2()'>\n    \t\t\t\t<br>\n                </div>\n\n    \t\t\t<div class='column' [ngClass]=\"{'animate': ex3Animate, 'animateEx3': ex3CorrectAnimate, 'ex-temp1': ex1CorrectAnimate, 'ex-temp2': ex2CorrectAnimate}\">\n    \t\t\t\t<img src={{img3}} class='word-image word-image-bottom' (click)='onClick3()'>\n    \t\t\t\t<br>\n    \t\t\t</div>\n            </div>\n        </div>\n\t</div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)=\"playAudio()\"></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prek-categories/prek-categories.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prek-categories/prek-categories.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'alphabet', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_lowercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'reordered': 'true'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list' : 'alphabet'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_lowercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='names_uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'alphabet', 'capital': 'true', 'reordered': 'true'}\"></button>\n                <button mat-icon-button class='category_button' id='sounds_uppercase_bmras' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'capital': 'true', 'reordered': 'true'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='names_uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'alphabet', 'capital': 'true'}\"></button>\n            <button mat-icon-button class='category_button' id='sounds_uppercase_alphabetical' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list' : 'sounds', 'grade': 'Pre-K', 'capital': 'true'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzle/puzzle.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzle/puzzle.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <img src={{img}} id='puzzle-image'>\n        <div [ngClass]=\"{'rhyme-small': small, 'rhyme-medium': medium, 'rhyme-large': large, 'rhyme-xlarge': xlarge}\"[innerHtml]='text'></div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzles/puzzles.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzles/puzzles.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class=\"cardList\">\n                <app-card class=\"cardListItem\" id=\"{{ setID(item) }}\" (click)='select(item)' *ngFor=\"let item of data\">\n                    <p>{{ getDisplay(item) }}</p>\n                </app-card>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-categories.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-categories.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <button mat-icon-button class='category_button' id='consonants' (mouseenter)='playAudio($event)' routerLink='/second-consonants-details'></button>\n            <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio($event)' routerLink='/second-vowels-details'></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='beginning-sounds' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '2nd', 'list': 'C-begin'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-sounds' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'C-end'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='cg' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'CG'}\"></button>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='beginning-blends' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '2nd', 'list': 'CB-begin'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'CB-end'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='three-letter-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'CB-3'}\"></button>\n                <button mat-icon-button class='category_button' id='silent-consonants' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'V-long'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='beginning-digraphs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'CD-begin'}\"></button>\n            <button mat-icon-button class='category_button' id='ending-digraphs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'CD-end'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='short_vowels' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '2nd', 'list': 'V-short'}\"></button>\n                <button mat-icon-button class='category_button' id='long_vowels' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'V-long'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='vowel_pairs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'VP'}\"></button>\n                <button mat-icon-button class='category_button' id='y_sounds' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'Y'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='r' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'R'}\"></button>\n                <button mat-icon-button class='category_button' id='schwas' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '2nd', 'list': 'V-schwa'}\"></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secret-stuff/secret-stuff.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secret-stuff/secret-stuff.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <video autoplay id='secret-stuff'><source src=\"../../../assets/video/secret_stuff.mov\"></video>\n    </div>\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='replayVideo()'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-categories.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-categories.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <button mat-icon-button class='category_button' id='consonants' (mouseenter)='playAudio($event)' routerLink='/third-consonants-details'></button>\n            <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio($event)' routerLink='/third-vowels-details'></button>\n            <button mat-icon-button class='category_button' id='vowel_consonant_blends' (mouseenter)='playAudio($event)' routerLink='/third-vowelconsonants-details'></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='beginning-sounds' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '3rd', 'list': 'C-begin'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-sounds' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'C-end'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='cg' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'CG'}\"></button>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='beginning-blends' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '3rd', 'list': 'CB-begin'}\"></button>\n                <button mat-icon-button class='category_button' id='ending-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'CB-end'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='three-letter-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'CB-3'}\"></button>\n                <button mat-icon-button class='category_button' id='silent-consonants' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'C-silent'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='beginning-digraphs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'CD-begin'}\"></button>\n            <button mat-icon-button class='category_button' id='ending-digraphs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'CD-end'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n                <button mat-icon-button class='category_button' id='r' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '3rd', 'list': 'R'}\"></button>\n                <button mat-icon-button class='category_button' id='two-letter-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'VC-2'}\"></button>\n                <button mat-icon-button class='category_button' id='three-letter-blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'VC-3'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='short_vowels' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'grade' : '3rd', 'list': 'V-short'}\"></button>\n                <button mat-icon-button class='category_button' id='long_vowels' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'V-long'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='vowel_pairs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'VP'}\"></button>\n                <button mat-icon-button class='category_button' id='y_sounds' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'Y'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='r' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'R'}\"></button>\n                <button mat-icon-button class='category_button' id='schwas' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'V-schwa'}\"></button>\n            </div>\n            <button mat-icon-button class='category_button' id='silent-e' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'grade' : '3rd', 'list': 'E'}\"></button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/word-structures/word-structures.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/word-structures/word-structures.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <img src='/assets/img/backgrounds/construction.png'>\n    </div>\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/home'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    width: 1980px;\n    height: 1030px;\n    background-color: #6EC7D4;\n    margin: auto;\n}\n\n#side-menu {\n    width: 185px;\n    height: 1030px;\n    background-color: #C4E8E6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTk4MHB4O1xuICAgIGhlaWdodDogMTAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jc2lkZS1tZW51IHtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAxMDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0RThFNjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/progress.service */ "./src/app/services/progress.service.ts");



let AppComponent = class AppComponent {
    constructor(progressService) {
        this.progressService = progressService;
        this.title = 'brainy-phonics-web';
        this.startTime = new Date();
        window.onbeforeunload = () => {
            this.endTime = new Date();
            this.progressService.addTime(this.endTime, this.endTime - this.startTime);
        };
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home */ "./src/app/pages/home/index.ts");
/* harmony import */ var _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/phoneme-categories */ "./src/app/pages/phoneme-categories/index.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/phoneme-learn */ "./src/app/pages/phoneme-learn/index.ts");
/* harmony import */ var _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/phoneme-quiz */ "./src/app/pages/phoneme-quiz/index.ts");
/* harmony import */ var _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/alphabet-learn/alphabet-learn.component */ "./src/app/pages/alphabet-learn/alphabet-learn.component.ts");
/* harmony import */ var _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/alphabet-quiz */ "./src/app/pages/alphabet-quiz/index.ts");
/* harmony import */ var _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/list-select/list-select.component */ "./src/app/pages/list-select/list-select.component.ts");
/* harmony import */ var _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/coins/coins.component */ "./src/app/pages/coins/coins.component.ts");
/* harmony import */ var _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/puzzles/puzzles.component */ "./src/app/pages/puzzles/puzzles.component.ts");
/* harmony import */ var _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/puzzle/puzzle.component */ "./src/app/pages/puzzle/puzzle.component.ts");
/* harmony import */ var _pages_prek_categories__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/prek-categories */ "./src/app/pages/prek-categories/index.ts");
/* harmony import */ var _pages_second_categories__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/second-categories */ "./src/app/pages/second-categories/index.ts");
/* harmony import */ var _pages_second_categories_second_vowels_details__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/second-categories/second-vowels-details */ "./src/app/pages/second-categories/second-vowels-details/index.ts");
/* harmony import */ var _pages_second_categories_second_consonants_details__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/second-categories/second-consonants-details */ "./src/app/pages/second-categories/second-consonants-details/index.ts");
/* harmony import */ var _pages_third_categories__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/third-categories */ "./src/app/pages/third-categories/index.ts");
/* harmony import */ var _pages_third_categories_third_consonants_details__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/third-categories/third-consonants-details */ "./src/app/pages/third-categories/third-consonants-details/index.ts");
/* harmony import */ var _pages_third_categories_third_vowels_details__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/third-categories/third-vowels-details */ "./src/app/pages/third-categories/third-vowels-details/index.ts");
/* harmony import */ var _pages_third_categories_third_vowelconsonants_details__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/third-categories/third-vowelconsonants-details */ "./src/app/pages/third-categories/third-vowelconsonants-details/index.ts");
/* harmony import */ var _pages_k_categories__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/k-categories */ "./src/app/pages/k-categories/index.ts");
/* harmony import */ var _pages_k_categories_k_letters_details__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/k-categories/k-letters-details */ "./src/app/pages/k-categories/k-letters-details/index.ts");
/* harmony import */ var _pages_k_categories_k_ending_sounds_details__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/k-categories/k-ending-sounds-details */ "./src/app/pages/k-categories/k-ending-sounds-details/index.ts");
/* harmony import */ var _pages_k_categories_k_beginning_sounds_details__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/k-categories/k-beginning-sounds-details */ "./src/app/pages/k-categories/k-beginning-sounds-details/index.ts");
/* harmony import */ var _pages_first_categories_first_categories_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/first-categories/first-categories.component */ "./src/app/pages/first-categories/first-categories.component.ts");
/* harmony import */ var _pages_first_categories_first_letters_details_first_letters_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/first-categories/first-letters-details/first-letters-details.component */ "./src/app/pages/first-categories/first-letters-details/first-letters-details.component.ts");
/* harmony import */ var _pages_first_categories_first_consonants_details_first_consonants_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/first-categories/first-consonants-details/first-consonants-details.component */ "./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.ts");
/* harmony import */ var _pages_first_categories_first_vowels_details_first_vowels_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/first-categories/first-vowels-details/first-vowels-details.component */ "./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.ts");
/* harmony import */ var _pages_nobodys_better_nobodys_better_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/nobodys-better/nobodys-better.component */ "./src/app/pages/nobodys-better/nobodys-better.component.ts");
/* harmony import */ var _pages_secret_stuff_secret_stuff_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/secret-stuff/secret-stuff.component */ "./src/app/pages/secret-stuff/secret-stuff.component.ts");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/login */ "./src/app/pages/login/index.ts");
/* harmony import */ var _pages_word_structures__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/word-structures */ "./src/app/pages/word-structures/index.ts");







































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _pages_home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_9__["PhonemeCategoriesComponent"],
            _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
            _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_11__["PhonemeLearnComponent"],
            _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_12__["PhonemeQuizComponent"],
            _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_13__["AlphabetLearnComponent"],
            _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_14__["AlphabetQuizComponent"],
            _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_15__["ListSelectComponent"],
            _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_16__["CoinsComponent"],
            _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_17__["PuzzlesComponent"],
            _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_18__["PuzzleComponent"],
            _pages_prek_categories__WEBPACK_IMPORTED_MODULE_19__["PrekCategoriesComponent"],
            _pages_second_categories__WEBPACK_IMPORTED_MODULE_20__["SecondCategoriesComponent"],
            _pages_second_categories_second_vowels_details__WEBPACK_IMPORTED_MODULE_21__["SecondVowelsDetailsComponent"],
            _pages_second_categories_second_consonants_details__WEBPACK_IMPORTED_MODULE_22__["SecondConsonantsDetailsComponent"],
            _pages_third_categories__WEBPACK_IMPORTED_MODULE_23__["ThirdCategoriesComponent"],
            _pages_third_categories_third_consonants_details__WEBPACK_IMPORTED_MODULE_24__["ThirdConsonantsDetailsComponent"],
            _pages_third_categories_third_vowels_details__WEBPACK_IMPORTED_MODULE_25__["ThirdVowelsDetailsComponent"],
            _pages_third_categories_third_vowelconsonants_details__WEBPACK_IMPORTED_MODULE_26__["ThirdVowelconsonantsDetailsComponent"],
            _pages_k_categories__WEBPACK_IMPORTED_MODULE_27__["KCategoriesComponent"],
            _pages_k_categories_k_letters_details__WEBPACK_IMPORTED_MODULE_28__["KLettersDetailsComponent"],
            _pages_k_categories_k_ending_sounds_details__WEBPACK_IMPORTED_MODULE_29__["KEndingSoundsDetailsComponent"],
            _pages_k_categories_k_beginning_sounds_details__WEBPACK_IMPORTED_MODULE_30__["KBeginningSoundsDetailsComponent"],
            _pages_first_categories_first_categories_component__WEBPACK_IMPORTED_MODULE_31__["FirstCategoriesComponent"],
            _pages_first_categories_first_letters_details_first_letters_details_component__WEBPACK_IMPORTED_MODULE_32__["FirstLettersDetailsComponent"],
            _pages_first_categories_first_consonants_details_first_consonants_details_component__WEBPACK_IMPORTED_MODULE_33__["FirstConsonantsDetailsComponent"],
            _pages_first_categories_first_vowels_details_first_vowels_details_component__WEBPACK_IMPORTED_MODULE_34__["FirstVowelsDetailsComponent"],
            _pages_nobodys_better_nobodys_better_component__WEBPACK_IMPORTED_MODULE_35__["NobodysBetterComponent"],
            _pages_secret_stuff_secret_stuff_component__WEBPACK_IMPORTED_MODULE_36__["SecretStuffComponent"],
            _pages_login__WEBPACK_IMPORTED_MODULE_37__["LoginComponent"],
            _pages_word_structures__WEBPACK_IMPORTED_MODULE_38__["WordStructuresComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["StorageServiceModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./src/app/pages/home/index.ts");
/* harmony import */ var _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/phoneme-categories */ "./src/app/pages/phoneme-categories/index.ts");
/* harmony import */ var _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/alphabet-learn/alphabet-learn.component */ "./src/app/pages/alphabet-learn/alphabet-learn.component.ts");
/* harmony import */ var _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/alphabet-quiz */ "./src/app/pages/alphabet-quiz/index.ts");
/* harmony import */ var _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/phoneme-learn */ "./src/app/pages/phoneme-learn/index.ts");
/* harmony import */ var _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/phoneme-quiz */ "./src/app/pages/phoneme-quiz/index.ts");
/* harmony import */ var _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/list-select/list-select.component */ "./src/app/pages/list-select/list-select.component.ts");
/* harmony import */ var _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/coins/coins.component */ "./src/app/pages/coins/coins.component.ts");
/* harmony import */ var _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/puzzles/puzzles.component */ "./src/app/pages/puzzles/puzzles.component.ts");
/* harmony import */ var _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/puzzle/puzzle.component */ "./src/app/pages/puzzle/puzzle.component.ts");
/* harmony import */ var _pages_prek_categories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/prek-categories */ "./src/app/pages/prek-categories/index.ts");
/* harmony import */ var _pages_k_categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/k-categories */ "./src/app/pages/k-categories/index.ts");
/* harmony import */ var _pages_k_categories_k_letters_details__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/k-categories/k-letters-details */ "./src/app/pages/k-categories/k-letters-details/index.ts");
/* harmony import */ var _pages_k_categories_k_ending_sounds_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/k-categories/k-ending-sounds-details */ "./src/app/pages/k-categories/k-ending-sounds-details/index.ts");
/* harmony import */ var _pages_k_categories_k_beginning_sounds_details__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/k-categories/k-beginning-sounds-details */ "./src/app/pages/k-categories/k-beginning-sounds-details/index.ts");
/* harmony import */ var _pages_first_categories_first_categories_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/first-categories/first-categories.component */ "./src/app/pages/first-categories/first-categories.component.ts");
/* harmony import */ var _pages_first_categories_first_letters_details_first_letters_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/first-categories/first-letters-details/first-letters-details.component */ "./src/app/pages/first-categories/first-letters-details/first-letters-details.component.ts");
/* harmony import */ var _pages_first_categories_first_consonants_details_first_consonants_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/first-categories/first-consonants-details/first-consonants-details.component */ "./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.ts");
/* harmony import */ var _pages_first_categories_first_vowels_details_first_vowels_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/first-categories/first-vowels-details/first-vowels-details.component */ "./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.ts");
/* harmony import */ var _pages_second_categories__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/second-categories */ "./src/app/pages/second-categories/index.ts");
/* harmony import */ var _pages_second_categories_second_vowels_details__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/second-categories/second-vowels-details */ "./src/app/pages/second-categories/second-vowels-details/index.ts");
/* harmony import */ var _pages_second_categories_second_consonants_details__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/second-categories/second-consonants-details */ "./src/app/pages/second-categories/second-consonants-details/index.ts");
/* harmony import */ var _pages_third_categories__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/third-categories */ "./src/app/pages/third-categories/index.ts");
/* harmony import */ var _pages_third_categories_third_consonants_details__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/third-categories/third-consonants-details */ "./src/app/pages/third-categories/third-consonants-details/index.ts");
/* harmony import */ var _pages_third_categories_third_vowels_details__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/third-categories/third-vowels-details */ "./src/app/pages/third-categories/third-vowels-details/index.ts");
/* harmony import */ var _pages_third_categories_third_vowelconsonants_details__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/third-categories/third-vowelconsonants-details */ "./src/app/pages/third-categories/third-vowelconsonants-details/index.ts");
/* harmony import */ var _pages_nobodys_better_nobodys_better_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/nobodys-better/nobodys-better.component */ "./src/app/pages/nobodys-better/nobodys-better.component.ts");
/* harmony import */ var _pages_secret_stuff_secret_stuff_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/secret-stuff/secret-stuff.component */ "./src/app/pages/secret-stuff/secret-stuff.component.ts");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/login */ "./src/app/pages/login/index.ts");
/* harmony import */ var _pages_word_structures__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/word-structures */ "./src/app/pages/word-structures/index.ts");
































const routes = [
    { path: '', component: _pages_login__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"] },
    { path: 'home', component: _pages_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'phoneme-categories', component: _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_3__["PhonemeCategoriesComponent"] },
    { path: 'prek-categories', component: _pages_prek_categories__WEBPACK_IMPORTED_MODULE_12__["PrekCategoriesComponent"] },
    { path: 'k-categories', component: _pages_k_categories__WEBPACK_IMPORTED_MODULE_13__["KCategoriesComponent"] },
    { path: 'k-letters-details', component: _pages_k_categories_k_letters_details__WEBPACK_IMPORTED_MODULE_14__["KLettersDetailsComponent"] },
    { path: 'k-beginning-sounds-details', component: _pages_k_categories_k_beginning_sounds_details__WEBPACK_IMPORTED_MODULE_16__["KBeginningSoundsDetailsComponent"] },
    { path: 'k-ending-sounds-details', component: _pages_k_categories_k_ending_sounds_details__WEBPACK_IMPORTED_MODULE_15__["KEndingSoundsDetailsComponent"] },
    { path: 'first-categories', component: _pages_first_categories_first_categories_component__WEBPACK_IMPORTED_MODULE_17__["FirstCategoriesComponent"] },
    { path: 'first-letters-details', component: _pages_first_categories_first_letters_details_first_letters_details_component__WEBPACK_IMPORTED_MODULE_18__["FirstLettersDetailsComponent"] },
    { path: 'first-consonants-details', component: _pages_first_categories_first_consonants_details_first_consonants_details_component__WEBPACK_IMPORTED_MODULE_19__["FirstConsonantsDetailsComponent"] },
    { path: 'first-vowels-details', component: _pages_first_categories_first_vowels_details_first_vowels_details_component__WEBPACK_IMPORTED_MODULE_20__["FirstVowelsDetailsComponent"] },
    { path: 'second-categories', component: _pages_second_categories__WEBPACK_IMPORTED_MODULE_21__["SecondCategoriesComponent"] },
    { path: 'second-vowels-details', component: _pages_second_categories_second_vowels_details__WEBPACK_IMPORTED_MODULE_22__["SecondVowelsDetailsComponent"] },
    { path: 'second-consonants-details', component: _pages_second_categories_second_consonants_details__WEBPACK_IMPORTED_MODULE_23__["SecondConsonantsDetailsComponent"] },
    { path: 'third-categories', component: _pages_third_categories__WEBPACK_IMPORTED_MODULE_24__["ThirdCategoriesComponent"] },
    { path: 'third-consonants-details', component: _pages_third_categories_third_consonants_details__WEBPACK_IMPORTED_MODULE_25__["ThirdConsonantsDetailsComponent"] },
    { path: 'third-vowels-details', component: _pages_third_categories_third_vowels_details__WEBPACK_IMPORTED_MODULE_26__["ThirdVowelsDetailsComponent"] },
    { path: 'third-vowelconsonants-details', component: _pages_third_categories_third_vowelconsonants_details__WEBPACK_IMPORTED_MODULE_27__["ThirdVowelconsonantsDetailsComponent"] },
    { path: 'alphabet-learn', component: _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_4__["AlphabetLearnComponent"] },
    { path: 'alphabet-quiz', component: _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_5__["AlphabetQuizComponent"] },
    { path: 'list-select', component: _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_8__["ListSelectComponent"] },
    { path: 'phoneme-learn', component: _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_6__["PhonemeLearnComponent"] },
    { path: 'phoneme-quiz', component: _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_7__["PhonemeQuizComponent"] },
    { path: 'coins', component: _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_9__["CoinsComponent"] },
    { path: 'puzzles', component: _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_10__["PuzzlesComponent"] },
    { path: 'puzzle', component: _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_11__["PuzzleComponent"] },
    { path: 'nobodys-better', component: _pages_nobodys_better_nobodys_better_component__WEBPACK_IMPORTED_MODULE_28__["NobodysBetterComponent"] },
    { path: 'secret-stuff', component: _pages_secret_stuff_secret_stuff_component__WEBPACK_IMPORTED_MODULE_29__["SecretStuffComponent"] },
    { path: 'word-structures', component: _pages_word_structures__WEBPACK_IMPORTED_MODULE_31__["WordStructuresComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: '<div class="app-card"><ng-content></ng-content></div>',
    })
], CardComponent);



/***/ }),

/***/ "./src/app/pages/alphabet-learn/alphabet-learn.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/alphabet-learn/alphabet-learn.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n#main-body {\r\n  width: 169.7vh;\r\n  height: 0vh;\r\n  padding-left: 22vh;\r\n  position: relative;\r\n}\r\n\r\n.back-button {\r\n    width: 9.5vh;\r\n    height: 9.5vh;\r\n    display: block;\r\n    position: absolute;\r\n    margin-left: 10vh;\r\n    margin-bottom: 3.5vh;\r\n    border: none;\r\n    margin-top: 45vh;\r\n}\r\n\r\n.after-button {\r\n    width: 9.5vh;\r\n    height: 9.5vh;\r\n    display: block;\r\n    position: absolute;\r\n    margin-left: 103vh;\r\n    margin-bottom: 3.5vh;\r\n    border: none;\r\n    margin-top: 45vh;\r\n}\r\n\r\n.letter {\r\n  font-size: 19.4vh;\r\n  margin-left: 49vh;\r\n  padding-top: 27.5vh;\r\n  cursor: pointer;\r\n  transition: all .5s;\r\n  transform: scale(1) translate(5.5vh, 5vh);\r\n}\r\n\r\n.animateLetter {\r\n  transition: all .5s;\r\n  transform: translate(12vh, 3vh) scale(1.12) !important;\r\n}\r\n\r\n/* Buttons */\r\n\r\n#forward {\r\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\r\n    background-size: 9.5vh 9.5vh;\r\n}\r\n\r\n.bottom {\r\n  transform: translateY(13vh);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxwaGFiZXQtbGVhcm4vYWxwaGFiZXQtbGVhcm4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUdBLFlBQVk7O0FBQ1o7SUFDSSwrREFBMkY7SUFDM0YsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWxwaGFiZXQtbGVhcm4vYWxwaGFiZXQtbGVhcm4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNtYWluLWJvZHkge1xyXG4gIHdpZHRoOiAxNjkuN3ZoO1xyXG4gIGhlaWdodDogMHZoO1xyXG4gIHBhZGRpbmctbGVmdDogMjJ2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOS41dmg7XHJcbiAgICBoZWlnaHQ6IDkuNXZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMuNXZoO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNDV2aDtcclxufVxyXG5cclxuLmFmdGVyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOS41dmg7XHJcbiAgICBoZWlnaHQ6IDkuNXZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjV2aDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDQ1dmg7XHJcbn1cclxuXHJcbi5sZXR0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMTkuNHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiA0OXZoO1xyXG4gIHBhZGRpbmctdG9wOiAyNy41dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoNS41dmgsIDV2aCk7XHJcbn1cclxuXHJcbi5hbmltYXRlTGV0dGVyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEydmgsIDN2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuI2ZvcndhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZm9yd2FyZC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3ZoKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/alphabet-learn/alphabet-learn.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/alphabet-learn/alphabet-learn.component.ts ***!
  \******************************************************************/
/*! exports provided: AlphabetLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetLearnComponent", function() { return AlphabetLearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AlphabetLearnComponent = class AlphabetLearnComponent {
    constructor(transferService, router, activatedRoute, location) {
        this.transferService = transferService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.letter = this.transferService.getData();
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }
        //audio
        this.letterAnimate = false;
        this.letterPlayAudio = true;
    }
    ngOnInit() {
        this.letterAudio = new Audio();
        this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        this.letterAudio.load();
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
        };
        this.playAudio();
    }
    ngAfterViewInit() {
        if (this.capital) {
            var temp = document.getElementById('main-body');
            temp.style.textTransform = 'uppercase';
        }
    }
    ngOnDestroy() {
        this.letterAudio.pause();
        this.letterAudio = null;
    }
    playAudio() {
        this.letterAnimate = true;
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
            this.letterAudio.onended = () => {
                this.letterAnimate = false;
            };
        };
        this.letterAudio.play();
    }
    goBack() {
        this.location.back();
    }
    prev(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.letter === this.letter.letter;
        });
        if (currentIndex === 0) {
            return;
        }
        this.letter = this.transferService.getList()[currentIndex - 1];
        this.letterAnimate = false;
        this.letterPlayAudio = true;
        this.ngOnInit();
    }
    next(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.letter === this.letter.letter;
        });
        if (currentIndex === this.transferService.getList().length - 1) {
            return;
        }
        this.letter = this.transferService.getList()[currentIndex + 1];
        this.letterAnimate = false;
        this.letterPlayAudio = true;
        this.ngOnInit();
    }
    takeQuiz() {
        if (this.capital) {
            this.router.navigate(['alphabet-quiz'], { queryParams: { capital: true } });
        }
        else {
            this.router.navigateByUrl('/alphabet-quiz');
        }
    }
};
AlphabetLearnComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__["TransferLetterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
AlphabetLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alphabet-learn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alphabet-learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-learn/alphabet-learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alphabet-learn.component.css */ "./src/app/pages/alphabet-learn/alphabet-learn.component.css")).default]
    })
], AlphabetLearnComponent);



/***/ }),

/***/ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/alphabet-quiz/alphabet-quiz.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n  background-color: #FFFFFF !important;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 22vh;\n  position: relative;\n}\n\n.column {\n  float: left;\n}\n\n#letter, \n#letter2, \n#letter3, \n#letter4 {\n    font-size: 19.4vh;\n    cursor: pointer;\n}\n\n#letter,\n#letter3 {\n  margin-left: 55vh;\n}\n\n#letter2,\n#letter4 {\n  margin-left: 35vh;\n}\n\n#letter,\n#letter2 {\n  margin-top: 18vh;\n}\n\n.letter-temp,\n.letter-temp2,\n.letter-temp3,\n.letter-temp4 {\n  color: white;\n}\n\n.animateLetter1 {\n  transition: all 0.5s linear;\n  transform: translate(22vh, 10vh) scale(1.12) !important;\n}\n\n.animateLetter2 {\n  transition: all 0.5s linear;\n  transform: translate(-22vh, 10vh) scale(1.12) !important;\n}\n\n.animateLetter3 {\n  transition: all 0.5s linear;\n  transform: translate(22vh, -10vh) scale(1.12) !important;\n}\n\n.animateLetter4 {\n  transition: all 0.5s linear;\n  transform: translate(-22vh, -10vh) scale(1.12) !important;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n\n.bottom {\n  transform: translateY(13vh);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxwaGFiZXQtcXVpei9hbHBoYWJldC1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7Ozs7SUFJSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1REFBdUQ7QUFDekQ7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isd0RBQXdEO0FBQzFEOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHdEQUF3RDtBQUMxRDs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix5REFBeUQ7QUFDM0Q7O0FBRUEsWUFBWTs7QUFDWjtJQUNJLCtEQUEyRjtJQUMzRiw0QkFBNEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbHBoYWJldC1xdWl6L2FscGhhYmV0LXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4jbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDIydmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jbGV0dGVyLCBcbiNsZXR0ZXIyLCBcbiNsZXR0ZXIzLCBcbiNsZXR0ZXI0IHtcbiAgICBmb250LXNpemU6IDE5LjR2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbGV0dGVyLFxuI2xldHRlcjMge1xuICBtYXJnaW4tbGVmdDogNTV2aDtcbn1cbiNsZXR0ZXIyLFxuI2xldHRlcjQge1xuICBtYXJnaW4tbGVmdDogMzV2aDtcbn1cbiNsZXR0ZXIsXG4jbGV0dGVyMiB7XG4gIG1hcmdpbi10b3A6IDE4dmg7XG59XG5cbi5sZXR0ZXItdGVtcCxcbi5sZXR0ZXItdGVtcDIsXG4ubGV0dGVyLXRlbXAzLFxuLmxldHRlci10ZW1wNCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFuaW1hdGVMZXR0ZXIxIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMnZoLCAxMHZoKSBzY2FsZSgxLjEyKSAhaW1wb3J0YW50O1xufVxuLmFuaW1hdGVMZXR0ZXIyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjJ2aCwgMTB2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcbn1cbi5hbmltYXRlTGV0dGVyMyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjJ2aCwgLTEwdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZUxldHRlcjQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMnZoLCAtMTB2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcbn1cblxuLyogQnV0dG9ucyAqL1xuI2ZvcndhcmQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2ZvcndhcmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5LjV2aCA5LjV2aDtcbn1cblxuLmJvdHRvbSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3ZoKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/alphabet-quiz/alphabet-quiz.component.ts ***!
  \****************************************************************/
/*! exports provided: AlphabetQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetQuizComponent", function() { return AlphabetQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alphabet-letters.service */ "./src/app/services/alphabet-letters.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let AlphabetQuizComponent = class AlphabetQuizComponent {
    constructor(transferService, letterProgressService, alphabetLettersService, router, location, activatedRoute) {
        this.transferService = transferService;
        this.letterProgressService = letterProgressService;
        this.alphabetLettersService = alphabetLettersService;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.quizAll = this.activatedRoute.snapshot.queryParamMap.get('quizAll');
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
        this.letterList = this.alphabetLettersService.dataImport(false);
        if (this.quizAll === 'true') {
            var key = Math.floor(Math.random() * 25);
            this.key = key;
            this.letter = this.letterList[key];
        }
        else {
            this.letter = this.transferService.getData();
        }
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }
        // animation
        this.letterAnimate1 = false;
        this.letterAnimate2 = false;
        this.letterAnimate3 = false;
        this.letterAnimate4 = false;
        // audio
        this.letterPlayAudio = true;
    }
    ;
    ngOnInit() {
        //sound for correct answer choice
        this.correctSound = new Audio();
        this.correctSound.src = `/assets/audio/buttons/correct.mp3`;
        this.letterAudio = new Audio();
        this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        this.letterAudio.load();
        this.letterAudio.onended = () => {
            this.letterAnimate1 = false;
            this.letterAnimate2 = false;
            this.letterAnimate3 = false;
            this.letterAnimate4 = false;
        };
        this.playAudio();
        this.isFirstAttempt = true;
        this.hasGuessed = false;
        //randomized randomExamples
        this.loadNew();
    }
    ngAfterViewInit() {
        if (this.capital) {
            var temp = document.getElementById('main-body');
            temp.style.textTransform = 'uppercase';
        }
    }
    ngOnDestroy() {
        this.letterAudio.pause();
        this.letterAudio = null;
    }
    check(selected) {
        if (selected === this.letter) {
            this.correctAnswer(selected);
        }
        else {
            this.incorrectAnswer();
        }
    }
    correctAnswer(correct) {
        if (correct == this.ex1) {
            this.letterAnimate1 = true;
        }
        else if (correct == this.ex2) {
            this.letterAnimate2 = true;
        }
        else if (correct == this.ex3) {
            this.letterAnimate3 = true;
        }
        else {
            this.letterAnimate4 = true;
        }
        this.correctSound.onended = () => {
            this.letterAnimate1 = false;
            this.letterAnimate2 = false;
            this.letterAnimate3 = false;
            this.letterAnimate4 = false;
            this.correctSound.onended = () => {
                this.letterAnimate1 = false;
                this.letterAnimate2 = false;
                this.letterAnimate3 = false;
                this.letterAnimate4 = false;
            };
        };
        // Choose new random alphabet
        if (this.quizAll) {
            var key = Math.floor(Math.random() * 25);
            this.key = key;
            this.letter = this.letterList[key];
            this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        }
        Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(200).then(() => {
            this.correctSound.play();
            this.loadNew();
        });
        Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000).then(() => {
            this.playAudio();
        });
        if (this.isFirstAttempt) {
            this.letterProgressService.addCoins("letter" + this.letter.letter, 2);
            //add stars to progress if select correct letter on first attempt
            this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "gold", 1);
            if (this.letterProgressService.getSilverStarsFromKey("letter" + this.letter.letter) > 0) {
                this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "silv", -1);
            }
        }
        else {
            this.letterProgressService.addCoins("letter" + this.letter.letter, 1);
        }
    }
    incorrectAnswer() {
        if (!this.hasGuessed) {
            this.hasGuessed = true;
            this.isFirstAttempt = false;
            const goldStarNum = this.letterProgressService.getGoldStarsFromKey("letter" + this.letter.letter);
            if (goldStarNum > 0 && goldStarNum < 5) {
                this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "gold", -1);
                this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "silv", 1);
            }
        }
        this.letterProgressService.addIncorrectAnswer('letter' + this.letter.letter);
    }
    loadNew() {
        var randomExamples = this.pickRandom(this.letter);
        randomExamples.push(this.letter);
        randomExamples.sort(() => Math.random() - 0.5);
        this.ex1 = randomExamples[0];
        this.ex2 = randomExamples[1];
        this.ex3 = randomExamples[2];
        this.ex4 = randomExamples[3];
        this.isFirstAttempt = true;
    }
    pickRandom(current) {
        var copiedList = [...this.letterList];
        // remove selected alphabet from list
        const index = copiedList.map(e => e.letter).indexOf(current.letter);
        copiedList.splice(index, 1);
        // create list of 3 unique randomized examples
        var n = 3;
        var result = new Array(n), len = copiedList.length, taken = new Array(len);
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = copiedList[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    playAudio() {
        this.letterAudio.play();
    }
    goBack() {
        this.location.back();
    }
};
AlphabetQuizComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__["TransferLetterService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressService"] },
    { type: _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_6__["AlphabetLettersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AlphabetQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alphabet-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-quiz/alphabet-quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alphabet-quiz.component.css */ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.css")).default]
    })
], AlphabetQuizComponent);



/***/ }),

/***/ "./src/app/pages/alphabet-quiz/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/alphabet-quiz/index.ts ***!
  \**********************************************/
/*! exports provided: AlphabetQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alphabet_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alphabet-quiz.component */ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlphabetQuizComponent", function() { return _alphabet_quiz_component__WEBPACK_IMPORTED_MODULE_1__["AlphabetQuizComponent"]; });





/***/ }),

/***/ "./src/app/pages/coins/coins.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/coins/coins.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    background-color: #FFFFFF !important;\n}\n\n#side-menu {\n    background-color: #6EC7D4 !important;\n}\n\n#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n}\n\n.column {\n    float: left;\n    text-align: right;\n    width: 100%;\n    height: 92.5vh;\n    transform: translateX(-21vh);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column;\n}\n\n.row > img{\n    padding: 2vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29pbnMvY29pbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvaW5zL2NvaW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4jc2lkZS1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDN0Q0ICFpbXBvcnRhbnQ7XG59XG5cbiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTIuNXZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjF2aCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ucm93ID4gaW1ne1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/coins/coins.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/coins/coins.component.ts ***!
  \************************************************/
/*! exports provided: CoinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinsComponent", function() { return CoinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let CoinsComponent = class CoinsComponent {
    constructor(progressService, location) {
        this.progressService = progressService;
        this.location = location;
        this.coins = progressService.getCoins();
        this.cars = Math.floor(this.coins / 250);
        this.bags = Math.floor((this.coins % 250) / 50);
        this.stacks = Math.floor((this.coins % 50) / 10);
        this.golds = Math.floor((this.coins % 10) / 2);
        this.silvers = Math.floor(this.coins % 2);
    }
    numberToIterable(num) {
        return Array(num).fill('');
    }
    goBack() {
        this.location.back();
    }
};
CoinsComponent.ctorParameters = () => [
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
CoinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coins/coins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coins.component.css */ "./src/app/pages/coins/coins.component.css")).default]
    })
], CoinsComponent);



/***/ }),

/***/ "./src/app/pages/first-categories/first-categories.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/first-categories/first-categories.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('first_categories.png') no-repeat scroll transparent;\n      background-position: 20vh 0vh;\n      background-size: 160vh;\n  }\n  \n  /* Phonics Categories */\n  \n  #letters {\n      background: url('first_letters_button.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 40vh;\n      cursor: pointer;\n      margin-top: 3vh;\n  }\n  \n  #consonants {\n      background: url('first_consonants_button.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 40vh;\n      cursor: pointer;\n  }\n  \n  #vowels {\n    background: url('first_vowels_button.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 40vh;\n    cursor: pointer;\n}\n  \n  .category_button {\n    width: 40vh;\n    height: 17vh;\n    border: none;\n    margin: 5vh 0vh 0vh -8vh;\n  }\n  \n  .column {\n      float: center;\n      padding-top: 20vh;\n  }\n  \n  .row{\n      margin-left: 50vh;\n      padding-top: 2.5vh;\n  }\n  \n  /* Clear floats after the columns */\n  \n  .column:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyc3QtY2F0ZWdvcmllcy9maXJzdC1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsb0VBQW9HO01BQ3BHLDZCQUE2QjtNQUM3QixzQkFBc0I7RUFDMUI7O0VBRUEsdUJBQXVCOztFQUN2QjtNQUNJLHdFQUFvRztNQUNwRywyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixlQUFlO0VBQ25COztFQUVBO01BQ0ksMkVBQXVHO01BQ3ZHLDJCQUEyQjtNQUMzQixxQkFBcUI7TUFDckIsZUFBZTtFQUNuQjs7RUFDQTtJQUNFLHVFQUFtRztJQUNuRywyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7O0VBR0E7TUFDSSxhQUFhO01BQ2IsaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLGtCQUFrQjtFQUN0Qjs7RUFDQSxtQ0FBbUM7O0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXJzdC1jYXRlZ29yaWVzL2ZpcnN0LWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9maXJzdF9jYXRlZ29yaWVzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHZoIDB2aDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTYwdmg7XG4gIH1cbiAgXG4gIC8qIFBob25pY3MgQ2F0ZWdvcmllcyAqL1xuICAjbGV0dGVycyB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9maXJzdF9sZXR0ZXJzX2J1dHRvbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA0MHZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXRvcDogM3ZoO1xuICB9XG5cbiAgI2NvbnNvbmFudHMge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZmlyc3RfY29uc29uYW50c19idXR0b24ucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNDB2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAjdm93ZWxzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9maXJzdF92b3dlbHNfYnV0dG9uLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDB2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuICAuY2F0ZWdvcnlfYnV0dG9uIHtcbiAgICB3aWR0aDogNDB2aDtcbiAgICBoZWlnaHQ6IDE3dmg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogNXZoIDB2aCAwdmggLTh2aDtcbiAgfVxuXG4gIFxuICAuY29sdW1uIHtcbiAgICAgIGZsb2F0OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMjB2aDtcbiAgfVxuXG4gIC5yb3d7XG4gICAgICBtYXJnaW4tbGVmdDogNTB2aDtcbiAgICAgIHBhZGRpbmctdG9wOiAyLjV2aDtcbiAgfVxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLmNvbHVtbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/first-categories/first-categories.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/first-categories/first-categories.component.ts ***!
  \**********************************************************************/
/*! exports provided: FirstCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCategoriesComponent", function() { return FirstCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let FirstCategoriesComponent = class FirstCategoriesComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        this.category = new Audio();
        if (event.target.id === 'letters') {
            this.category.src = '/assets/audio/buttons/letters.mov';
        }
        else {
            this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        }
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
    goBack() {
        this.location.back();
    }
};
FirstCategoriesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
FirstCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-categories.component.css */ "./src/app/pages/first-categories/first-categories.component.css")).default]
    })
], FirstCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('first_consonants.png') no-repeat scroll transparent;\n      background-position: 27vh;\n      background-size: 138vh;\n  }\n  \n  /* 1st Categories */\n  \n  #beginning-sounds {\n      background: url('first_sounds_beginning.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 63vh;\n      cursor: pointer;\n      width: 63vh;\n      height: 8vh;\n  }\n  \n  #ending-sounds {\n    background: url('first_sounds_ending.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 53vh;\n    cursor: pointer;\n    margin-left: 14.2vh;\n    width: 55vh;\n    height: 8vh;\n  }\n  \n  #beginning-blends {\n    background: url('first_blends_beginning.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 58vh;\n    cursor: pointer;\n    width: 58vh;\n    height: 7vh;\n  }\n  \n  #ending-blends {\n    background: url('first_blends_ending.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 14.8vh;\n    width: 52vh;\n    height: 7vh;\n  }\n  \n  #beginning-digraphs {\n    background: url('first_diagraphs_beginning.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 83vh;\n    cursor: pointer;\n    width: 83vh;\n    height: 10vh;\n  }\n  \n  #ending-digraphs {\n    background: url('first_diagraphs_ending.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 75vh;\n    cursor: pointer;\n    width: 75vh;\n    height: 10vh;\n  }\n  \n  .column {\n    padding-top: 10vh;\n  }\n  \n  .category_button {\n      margin: 5vh 0vh 0vh 15vh;\n      border: none;\n      display: inherit;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyc3QtY2F0ZWdvcmllcy9maXJzdC1jb25zb25hbnRzLWRldGFpbHMvZmlyc3QtY29uc29uYW50cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsb0VBQXVHO01BQ3ZHLHlCQUF5QjtNQUN6QixzQkFBc0I7RUFDMUI7O0VBRUEsbUJBQW1COztFQUNuQjtNQUNJLDBFQUF5RztNQUN6RywyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixXQUFXO01BQ1gsV0FBVztFQUNmOztFQUNBO0lBQ0UsdUVBQXNHO0lBQ3RHLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUNBO0lBQ0UsMEVBQXlHO0lBQ3pHLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSx1RUFBc0c7SUFDdEcsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSw2RUFBNEc7SUFDNUcsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLDBFQUF5RztJQUN6RywyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO01BQ0ksd0JBQXdCO01BQ3hCLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXJzdC1jYXRlZ29yaWVzL2ZpcnN0LWNvbnNvbmFudHMtZGV0YWlscy9maXJzdC1jb25zb25hbnRzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9maXJzdF9jb25zb25hbnRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyN3ZoO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMzh2aDtcbiAgfVxuICBcbiAgLyogMXN0IENhdGVnb3JpZXMgKi9cbiAgI2JlZ2lubmluZy1zb3VuZHMge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZmlyc3Rfc291bmRzX2JlZ2lubmluZy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA2M3ZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgd2lkdGg6IDYzdmg7XG4gICAgICBoZWlnaHQ6IDh2aDtcbiAgfVxuICAjZW5kaW5nLXNvdW5kcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZmlyc3Rfc291bmRzX2VuZGluZy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUzdmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxNC4ydmg7XG4gICAgd2lkdGg6IDU1dmg7XG4gICAgaGVpZ2h0OiA4dmg7XG4gIH1cbiAgI2JlZ2lubmluZy1ibGVuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2ZpcnN0X2JsZW5kc19iZWdpbm5pbmcucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1OHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNTh2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgfVxuICAjZW5kaW5nLWJsZW5kcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZmlyc3RfYmxlbmRzX2VuZGluZy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxNC44dmg7XG4gICAgd2lkdGg6IDUydmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gIH1cbiAgI2JlZ2lubmluZy1kaWdyYXBocyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZmlyc3RfZGlhZ3JhcGhzX2JlZ2lubmluZy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgzdmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA4M3ZoO1xuICAgIGhlaWdodDogMTB2aDtcbiAgfVxuICAjZW5kaW5nLWRpZ3JhcGhzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9maXJzdF9kaWFncmFwaHNfZW5kaW5nLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzV2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDc1dmg7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICB9XG5cbiAgLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDEwdmg7XG4gIH1cblxuICAuY2F0ZWdvcnlfYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogNXZoIDB2aCAwdmggMTV2aDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FirstConsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstConsonantsDetailsComponent", function() { return FirstConsonantsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let FirstConsonantsDetailsComponent = class FirstConsonantsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
FirstConsonantsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
FirstConsonantsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-consonants-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-consonants-details.component.css */ "./src/app/pages/first-categories/first-consonants-details/first-consonants-details.component.css")).default]
    })
], FirstConsonantsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/first-categories/first-letters-details/first-letters-details.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/first-categories/first-letters-details/first-letters-details.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" #main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('first_letters.png') no-repeat scroll transparent;\n      background-position: 19vh 4vh;\n      background-size: 173vh;\n  }\n  \n  /* Phonics Categories */\n  \n  #names_lowercase_bmras {\n      background: url('names_lowercase_bmras.png') no-repeat scroll transparent;\n      background-size: 52vh;\n      margin-top: 23vh;\n      cursor: pointer;\n  }\n  \n  #sounds_lowercase_bmras {\n      background: url('sounds_lowercase_bmras.png') no-repeat scroll transparent;\n      background-size: 52vh;\n      cursor: pointer;\n      margin-left: 6.5vh;\n  }\n  \n  #names_lowercase_alphabetical {\n      background: url('names_lowercase_alphabetical.png') no-repeat scroll transparent;\n      background-size: 52vh;\n      cursor: pointer;\n  }\n  \n  #sounds_lowercase_alphabetical {\n      background: url('sounds_lowercase_alphabetical.png') no-repeat scroll transparent;\n      background-size: 52vh;\n      cursor: pointer;\n      margin-left: 6.5vh;\n  }\n  \n  #names_uppercase_bmras {\n      background: url('names_uppercase_bmras.png') no-repeat scroll transparent;\n      background-size: 52vh;\n      cursor: pointer;\n  }\n  \n  #sounds_uppercase_bmras {\n      background: url('sounds_uppercase_bmras.png') no-repeat scroll transparent;\n      background-size: 52vh;\n      cursor: pointer;\n      margin-left: 6.5vh;\n  }\n  \n  #names_uppercase_alphabetical {\n    background: url('names_uppercase_alphabetical.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n  }\n  \n  #sounds_uppercase_alphabetical {\n    background: url('sounds_uppercase_alphabetical.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n  }\n  \n  .category_button {\n      width: 52vh;\n      height: 13vh;\n      margin: 4vh 0vh 0vh 5vh;\n      border: none;\n  }\n  \n  .column {\n      padding-top: 2.5vh;\n  }\n  \n  /* Clear floats after the columns */\n  \n  .column:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyc3QtY2F0ZWdvcmllcy9maXJzdC1sZXR0ZXJzLWRldGFpbHMvZmlyc3QtbGV0dGVycy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsaUVBQW9HO01BQ3BHLDZCQUE2QjtNQUM3QixzQkFBc0I7RUFDMUI7O0VBRUEsdUJBQXVCOztFQUN2QjtNQUNJLHlFQUF3RztNQUN4RyxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLGVBQWU7RUFDbkI7O0VBQ0E7TUFDSSwwRUFBeUc7TUFDekcscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixrQkFBa0I7RUFDdEI7O0VBQ0E7TUFDSSxnRkFBK0c7TUFDL0cscUJBQXFCO01BQ3JCLGVBQWU7RUFDbkI7O0VBQ0E7TUFDSSxpRkFBZ0g7TUFDaEgscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixrQkFBa0I7RUFDdEI7O0VBQ0E7TUFDSSx5RUFBd0c7TUFDeEcscUJBQXFCO01BQ3JCLGVBQWU7RUFDbkI7O0VBQ0E7TUFDSSwwRUFBeUc7TUFDekcscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixrQkFBa0I7RUFDdEI7O0VBQ0E7SUFDRSxnRkFBK0c7SUFDL0cscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxpRkFBZ0g7SUFDaEgscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUNBLG1DQUFtQzs7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0LWNhdGVnb3JpZXMvZmlyc3QtbGV0dGVycy1kZXRhaWxzL2ZpcnN0LWxldHRlcnMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9maXJzdF9sZXR0ZXJzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOXZoIDR2aDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTczdmg7XG4gIH1cbiAgXG4gIC8qIFBob25pY3MgQ2F0ZWdvcmllcyAqL1xuICAjbmFtZXNfbG93ZXJjYXNlX2JtcmFzIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL25hbWVzX2xvd2VyY2FzZV9ibXJhcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgICAgbWFyZ2luLXRvcDogMjN2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAjc291bmRzX2xvd2VyY2FzZV9ibXJhcyB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zb3VuZHNfbG93ZXJjYXNlX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogNi41dmg7XG4gIH1cbiAgI25hbWVzX2xvd2VyY2FzZV9hbHBoYWJldGljYWwge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvbmFtZXNfbG93ZXJjYXNlX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNzb3VuZHNfbG93ZXJjYXNlX2FscGhhYmV0aWNhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zb3VuZHNfbG93ZXJjYXNlX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDYuNXZoO1xuICB9XG4gICNuYW1lc191cHBlcmNhc2VfYm1yYXMge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvbmFtZXNfdXBwZXJjYXNlX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgI3NvdW5kc191cHBlcmNhc2VfYm1yYXMge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc291bmRzX3VwcGVyY2FzZV9ibXJhcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDYuNXZoO1xuICB9XG4gICNuYW1lc191cHBlcmNhc2VfYWxwaGFiZXRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9uYW1lc191cHBlcmNhc2VfYWxwaGFiZXRpY2FsLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAjc291bmRzX3VwcGVyY2FzZV9hbHBoYWJldGljYWwge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NvdW5kc191cHBlcmNhc2VfYWxwaGFiZXRpY2FsLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNi41dmg7XG4gIH1cbiAgXG4gIC5jYXRlZ29yeV9idXR0b24ge1xuICAgICAgd2lkdGg6IDUydmg7XG4gICAgICBoZWlnaHQ6IDEzdmg7XG4gICAgICBtYXJnaW46IDR2aCAwdmggMHZoIDV2aDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmNvbHVtbiB7XG4gICAgICBwYWRkaW5nLXRvcDogMi41dmg7XG4gIH1cbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4gIC5jb2x1bW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/pages/first-categories/first-letters-details/first-letters-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/first-categories/first-letters-details/first-letters-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FirstLettersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstLettersDetailsComponent", function() { return FirstLettersDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let FirstLettersDetailsComponent = class FirstLettersDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
FirstLettersDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
FirstLettersDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-letters-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-letters-details/first-letters-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-letters-details.component.css */ "./src/app/pages/first-categories/first-letters-details/first-letters-details.component.css")).default]
    })
], FirstLettersDetailsComponent);



/***/ }),

/***/ "./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('first_vowels.png') no-repeat scroll transparent;\n      background-position: 14vh;\n      background-size: 165vh;\n  }\n  \n  /* First Categories */\n  \n  #short_vowels {\n      background: url('first_vowels_short.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 70vh;\n      cursor: pointer;\n      width: 70vh;\n      height: 15vh;\n      margin-top: 4vh;\n  }\n  \n  #long_vowels {\n    background: url('first_vowels_long.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 65vh;\n    cursor: pointer;\n    width: 65vh;\n    height: 15vh;\n  }\n  \n  #vowel_pairs {\n    background: url('first_vowels_pairs.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 66vh;\n    cursor: pointer;\n    width: 66vh;\n    height: 15vh;\n  }\n  \n  #y_sounds {\n    background: url('first_vowels_y_sounds.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 69vh;\n    cursor: pointer;\n    width: 69vh;\n    height: 15vh;\n  }\n  \n  .column {\n    padding-top: 12vh;\n  }\n  \n  .category_button {\n      margin: 6vh 0vh 0vh 41vh;\n      border: none;\n      display: inherit;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyc3QtY2F0ZWdvcmllcy9maXJzdC12b3dlbHMtZGV0YWlscy9maXJzdC12b3dlbHMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO01BQ3BDLGdFQUFtRztNQUNuRyx5QkFBeUI7TUFDekIsc0JBQXNCO0VBQzFCOztFQUVBLHFCQUFxQjs7RUFDckI7TUFDSSxzRUFBcUc7TUFDckcsMkJBQTJCO01BQzNCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO0VBQ25COztFQUNBO0lBQ0UscUVBQW9HO0lBQ3BHLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxzRUFBcUc7SUFDckcsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLHlFQUF3RztJQUN4RywyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO01BQ0ksd0JBQXdCO01BQ3hCLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXJzdC1jYXRlZ29yaWVzL2ZpcnN0LXZvd2Vscy1kZXRhaWxzL2ZpcnN0LXZvd2Vscy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY5Ljd2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvZmlyc3Rfdm93ZWxzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHZoO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNjV2aDtcbiAgfVxuICBcbiAgLyogRmlyc3QgQ2F0ZWdvcmllcyAqL1xuICAjc2hvcnRfdm93ZWxzIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2ZpcnN0X3Zvd2Vsc19zaG9ydC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA3MHZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgd2lkdGg6IDcwdmg7XG4gICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICBtYXJnaW4tdG9wOiA0dmg7XG4gIH1cbiAgI2xvbmdfdm93ZWxzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9maXJzdF92b3dlbHNfbG9uZy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY1dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA2NXZoO1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxuICAjdm93ZWxfcGFpcnMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2ZpcnN0X3Zvd2Vsc19wYWlycy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY2dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA2NnZoO1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxuICAjeV9zb3VuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2ZpcnN0X3Zvd2Vsc195X3NvdW5kcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY5dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA2OXZoO1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxuXG4gIC5jb2x1bW4ge1xuICAgIHBhZGRpbmctdG9wOiAxMnZoO1xuICB9XG5cbiAgLmNhdGVnb3J5X2J1dHRvbiB7XG4gICAgICBtYXJnaW46IDZ2aCAwdmggMHZoIDQxdmg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FirstVowelsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstVowelsDetailsComponent", function() { return FirstVowelsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let FirstVowelsDetailsComponent = class FirstVowelsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
FirstVowelsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
FirstVowelsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-vowels-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-vowels-details.component.css */ "./src/app/pages/first-categories/first-vowels-details/first-vowels-details.component.css")).default]
    })
], FirstVowelsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#side-menu {\n  background: url('home-side-bar.png') no-repeat scroll 0 0 transparent;\n  background-size: 17.3vh 97vh;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n}\n\n/* Phonics Categories */\n\n#pre-k {\n    background: url('pre_k.png') no-repeat scroll transparent;\n    background-size: 33vh;\n    margin-left: 32vh;\n    width: 33vh;\n    height: 34vh;\n    cursor: pointer;\n}\n\n#kindergarten {\n    background: url('kindergarten.png') no-repeat scroll transparent;\n    background-size: 33vh;\n    margin-left: 23vh;\n    width: 33vh;\n    height: 34vh;\n    cursor: pointer;\n}\n\n#first {\n    background: url('1st.png') no-repeat scroll transparent;\n    background-size: 30vh;\n    margin-left: 6vh;\n    width: 30vh;\n    height: 16vh;\n    cursor: pointer;\n}\n\n#second {\n    background: url('2nd.png') no-repeat scroll transparent;\n    background-size: 30vh;\n    margin-left: 26vh;\n    width: 30vh;\n    height: 16vh;\n    cursor: pointer;\n}\n\n#third {\n    background: url('3rd.png') no-repeat scroll transparent;\n    background-size: 30vh;\n    margin-left: 25vh;\n    width: 30vh;\n    height: 16vh;\n    cursor: pointer;\n}\n\n#phonics {\n    background: url('phonics_logo.png') no-repeat scroll transparent;\n    background-size: 42vh;\n    height: 36.5vh;\n    width: 42vh;\n    cursor: pointer;\n}\n\n#word-structures {\n  background: url('word_structures.png') no-repeat scroll transparent;\n  background-size: 46.5vh;\n  margin-left: 12vh;\n  height: 36.5vh;\n  width: 47vh;\n  cursor: pointer;\n}\n\n#secret-stuff {\n  background: url('secret_stuff.png') no-repeat scroll transparent;\n  background-size: 36vh;\n  transform: translate(-24vh, -18.3vh);\n  width: 36vh;\n  height: 18vh;\n  cursor: pointer;\n}\n\n#nobodys-better {\n  background: url('nobodys_better.png') no-repeat scroll transparent;\n  background-size: 36vh;\n  width: 36vh;\n  height: 18vh;\n  transform: translate(12vh, 0.5vh);\n  cursor: pointer;\n}\n\n.button {\n    margin-top: 2vh;\n    border: none;\n}\n\n.container {\n  margin-left: -18vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxRUFBeUY7RUFDekYsNEJBQTRCO0FBQzlCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSx5REFBcUY7SUFDckYscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnRUFBNEY7SUFDNUYscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx1REFBbUY7SUFDbkYscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx1REFBbUY7SUFDbkYscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx1REFBbUY7SUFDbkYscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnRUFBNEY7SUFDNUYscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFDQTtFQUNFLG1FQUErRjtFQUMvRix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdFQUE0RjtFQUM1RixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtFQUE4RjtFQUM5RixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNzaWRlLW1lbnUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS1zaWRlLWJhci5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNy4zdmggOTd2aDtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuLyogUGhvbmljcyBDYXRlZ29yaWVzICovXG4jcHJlLWsge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3ByZV9rLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzM3ZoO1xuICAgIG1hcmdpbi1sZWZ0OiAzMnZoO1xuICAgIHdpZHRoOiAzM3ZoO1xuICAgIGhlaWdodDogMzR2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ja2luZGVyZ2FydGVuIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9raW5kZXJnYXJ0ZW4ucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDIzdmg7XG4gICAgd2lkdGg6IDMzdmg7XG4gICAgaGVpZ2h0OiAzNHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNmaXJzdCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvMXN0LnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA2dmg7XG4gICAgd2lkdGg6IDMwdmg7XG4gICAgaGVpZ2h0OiAxNnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZWNvbmQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zLzJuZC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzB2aDtcbiAgICBtYXJnaW4tbGVmdDogMjZ2aDtcbiAgICB3aWR0aDogMzB2aDtcbiAgICBoZWlnaHQ6IDE2dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3RoaXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy8zcmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1dmg7XG4gICAgd2lkdGg6IDMwdmg7XG4gICAgaGVpZ2h0OiAxNnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNwaG9uaWNzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9waG9uaWNzX2xvZ28ucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQydmg7XG4gICAgaGVpZ2h0OiAzNi41dmg7XG4gICAgd2lkdGg6IDQydmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3dvcmQtc3RydWN0dXJlcyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3dvcmRfc3RydWN0dXJlcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQ2LjV2aDtcbiAgbWFyZ2luLWxlZnQ6IDEydmg7XG4gIGhlaWdodDogMzYuNXZoO1xuICB3aWR0aDogNDd2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NlY3JldC1zdHVmZiB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY3JldF9zdHVmZi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDM2dmg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNHZoLCAtMTguM3ZoKTtcbiAgd2lkdGg6IDM2dmg7XG4gIGhlaWdodDogMTh2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI25vYm9keXMtYmV0dGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvbm9ib2R5c19iZXR0ZXIucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNnZoO1xuICB3aWR0aDogMzZ2aDtcbiAgaGVpZ2h0OiAxOHZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnZoLCAwLjV2aCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogLTE4dmg7XG59XG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5jb2x1bW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
    }
    playAudio(event) {
        if (event.target.id === 'secret-stuff') {
            this.audio = new Audio();
            this.audio.src = '/assets/audio/buttons/' + event.target.id + '.m4a';
            if (this.audio.src !== undefined) {
                this.audio.load();
                this.audio.play();
            }
        }
        else {
            this.audio = new Audio();
            this.audio.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
            if (this.audio.src !== undefined) {
                this.audio.load();
                this.audio.play();
            }
        }
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/index.ts":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.ts ***!
  \*************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/app/pages/k-categories/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/k-categories/index.ts ***!
  \*********************************************/
/*! exports provided: KCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _k_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k-categories.component */ "./src/app/pages/k-categories/k-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KCategoriesComponent", function() { return _k_categories_component__WEBPACK_IMPORTED_MODULE_1__["KCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/pages/k-categories/k-beginning-sounds-details/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-beginning-sounds-details/index.ts ***!
  \************************************************************************/
/*! exports provided: KBeginningSoundsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _k_beginning_sounds_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k-beginning-sounds-details.component */ "./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KBeginningSoundsDetailsComponent", function() { return _k_beginning_sounds_details_component__WEBPACK_IMPORTED_MODULE_1__["KBeginningSoundsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('k_beginning_sounds.png') no-repeat scroll transparent;\n      background-position: center top;\n      background-size: 132vh;\n  }\n  \n  /* Pre-K Categories */\n  \n  #lowercase_alphabetical {\n      background: url('k_beginning_sounds_alphabetical.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 65vh;\n      cursor: pointer;\n      width: 65vh;\n      height: 15vh;\n      margin-top: 0vh;\n  }\n  \n  #lowercase_bmras {\n    background: url('k_beginning_sounds_bmras.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 62vh;\n    cursor: pointer;\n    width: 63vh;\n    height: 16vh;\n  }\n  \n  #uppercase_alphabetical {\n    background: url('k_beginning_sounds_capital_alphabetical.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 80vh;\n    cursor: pointer;\n    width: 80vh;\n    height: 17vh;\n  }\n  \n  #uppercase_bmras {\n    background: url('k_beginning_sounds_capital_bmras.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 77vh;\n    cursor: pointer;\n    width: 77vh;\n    height: 16vh;\n  }\n  \n  .column {\n    padding-top: 12vh;\n  }\n  \n  .category_button {\n      margin: 5.2vh 0vh 0vh 29vh;\n      border: none;\n      display: inherit;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvay1jYXRlZ29yaWVzL2stYmVnaW5uaW5nLXNvdW5kcy1kZXRhaWxzL2stYmVnaW5uaW5nLXNvdW5kcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsc0VBQXlHO01BQ3pHLCtCQUErQjtNQUMvQixzQkFBc0I7RUFDMUI7O0VBRUEscUJBQXFCOztFQUNyQjtNQUNJLG1GQUFrSDtNQUNsSCwyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7RUFDbkI7O0VBQ0E7SUFDRSw0RUFBMkc7SUFDM0csMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLDJGQUEwSDtJQUMxSCwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUNBO0lBQ0Usb0ZBQW1IO0lBQ25ILDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSwwQkFBMEI7TUFDMUIsWUFBWTtNQUNaLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2stY2F0ZWdvcmllcy9rLWJlZ2lubmluZy1zb3VuZHMtZGV0YWlscy9rLWJlZ2lubmluZy1zb3VuZHMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gICAgd2lkdGg6IDE2OS43dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgI2JhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRzL2tfYmVnaW5uaW5nX3NvdW5kcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTMydmg7XG4gIH1cbiAgXG4gIC8qIFByZS1LIENhdGVnb3JpZXMgKi9cbiAgI2xvd2VyY2FzZV9hbHBoYWJldGljYWwge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva19iZWdpbm5pbmdfc291bmRzX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA2NXZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgd2lkdGg6IDY1dmg7XG4gICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICBtYXJnaW4tdG9wOiAwdmg7XG4gIH1cbiAgI2xvd2VyY2FzZV9ibXJhcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva19iZWdpbm5pbmdfc291bmRzX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjJ2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYzdmg7XG4gICAgaGVpZ2h0OiAxNnZoO1xuICB9XG4gICN1cHBlcmNhc2VfYWxwaGFiZXRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9rX2JlZ2lubmluZ19zb3VuZHNfY2FwaXRhbF9hbHBoYWJldGljYWwucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogODB2aDtcbiAgICBoZWlnaHQ6IDE3dmg7XG4gIH1cbiAgI3VwcGVyY2FzZV9ibXJhcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva19iZWdpbm5pbmdfc291bmRzX2NhcGl0YWxfYm1yYXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3N3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzd2aDtcbiAgICBoZWlnaHQ6IDE2dmg7XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBwYWRkaW5nLXRvcDogMTJ2aDtcbiAgfVxuXG4gIC5jYXRlZ29yeV9idXR0b24ge1xuICAgICAgbWFyZ2luOiA1LjJ2aCAwdmggMHZoIDI5dmg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: KBeginningSoundsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KBeginningSoundsDetailsComponent", function() { return KBeginningSoundsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let KBeginningSoundsDetailsComponent = class KBeginningSoundsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
KBeginningSoundsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
KBeginningSoundsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./k-beginning-sounds-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./k-beginning-sounds-details.component.css */ "./src/app/pages/k-categories/k-beginning-sounds-details/k-beginning-sounds-details.component.css")).default]
    })
], KBeginningSoundsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/k-categories/k-categories.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/k-categories/k-categories.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('k_categories.png') no-repeat scroll transparent;\n      background-position: 30vh;\n      background-size: 140vh;\n  }\n  \n  /* Phonics Categories */\n  \n  #letters {\n      background: url('k_letters_button.png') no-repeat scroll transparent;\n      background-position: center;\n      margin-left: -10vh;\n      background-size: 38vh;\n      cursor: pointer;\n  }\n  \n  #beginning-sounds {\n      background: url('k_beginning_sounds_button.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 38vh;\n      cursor: pointer;\n  }\n  \n  #ending-sounds {\n    background: url('k_ending_sounds_button.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 38vh;\n    cursor: pointer;\n}\n  \n  #vowels {\n    background: url('k_vowels.png') no-repeat scroll transparent;\n    background-position: center;\n    margin-left: -10vh;\n    background-size: 38vh;\n    cursor: pointer;\n}\n  \n  .category_button {\n      width: 38vh;\n      height: 26vh;\n      margin: 1vh 5vh 0vh 0vh;\n      border: none;\n      margin-left: auto;\n  }\n  \n  .row1 {\n    float: center;\n    margin-left: 20vh;\n  }\n  \n  .row2 {\n    float: center;\n    margin-left: 20vh;\n  }\n  \n  .column {\n      padding-top: 40vh;\n      padding-left: 10vh;\n  }\n  \n  /* Clear floats after the columns */\n  \n  .column:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvay1jYXRlZ29yaWVzL2stY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO01BQ3BDLGdFQUFnRztNQUNoRyx5QkFBeUI7TUFDekIsc0JBQXNCO0VBQzFCOztFQUVBLHVCQUF1Qjs7RUFDdkI7TUFDSSxvRUFBZ0c7TUFDaEcsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLDZFQUF5RztNQUN6RywyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLGVBQWU7RUFDbkI7O0VBQ0E7SUFDRSwwRUFBc0c7SUFDdEcsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztFQUVFO0lBQ0UsNERBQXdGO0lBQ3hGLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0VBRUU7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osaUJBQWlCO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSxpQkFBaUI7TUFDakIsa0JBQWtCO0VBQ3RCOztFQUNBLG1DQUFtQzs7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2stY2F0ZWdvcmllcy9rLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9rX2NhdGVnb3JpZXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwdmg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDE0MHZoO1xuICB9XG4gIFxuICAvKiBQaG9uaWNzIENhdGVnb3JpZXMgKi9cbiAgI2xldHRlcnMge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva19sZXR0ZXJzX2J1dHRvbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHZoO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAzOHZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgI2JlZ2lubmluZy1zb3VuZHMge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva19iZWdpbm5pbmdfc291bmRzX2J1dHRvbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAzOHZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNlbmRpbmctc291bmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9rX2VuZGluZ19zb3VuZHNfYnV0dG9uLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzh2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiAgI3Zvd2VscyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva192b3dlbHMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzh2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuICAuY2F0ZWdvcnlfYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAzOHZoO1xuICAgICAgaGVpZ2h0OiAyNnZoO1xuICAgICAgbWFyZ2luOiAxdmggNXZoIDB2aCAwdmg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC5yb3cxIHtcbiAgICBmbG9hdDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZoO1xuICB9XG4gIFxuICAucm93MiB7XG4gICAgZmxvYXQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjB2aDtcbiAgfVxuICBcbiAgLmNvbHVtbiB7XG4gICAgICBwYWRkaW5nLXRvcDogNDB2aDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTB2aDtcbiAgfVxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLmNvbHVtbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/k-categories/k-categories.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/k-categories/k-categories.component.ts ***!
  \**************************************************************/
/*! exports provided: KCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KCategoriesComponent", function() { return KCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let KCategoriesComponent = class KCategoriesComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        this.category = new Audio();
        if (event.target.id === 'letters') {
            this.category.src = '/assets/audio/buttons/letters.mov';
        }
        else {
            this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        }
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
    goBack() {
        this.location.back();
    }
};
KCategoriesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
KCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./k-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./k-categories.component.css */ "./src/app/pages/k-categories/k-categories.component.css")).default]
    })
], KCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/k-categories/k-ending-sounds-details/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/k-categories/k-ending-sounds-details/index.ts ***!
  \*********************************************************************/
/*! exports provided: KEndingSoundsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _k_ending_sounds_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k-ending-sounds-details.component */ "./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEndingSoundsDetailsComponent", function() { return _k_ending_sounds_details_component__WEBPACK_IMPORTED_MODULE_1__["KEndingSoundsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('k_ending_sounds.png') no-repeat scroll transparent;\n      background-position: center top;\n      background-size: 127vh;\n  }\n  \n  /* Pre-K Categories */\n  \n  #lowercase_alphabetical {\n      background: url('k_ending_sounds_alphabetical.png') no-repeat scroll transparent;\n      background-position: center;\n      background-size: 60vh;\n      cursor: pointer;\n      width: 60vh;\n      height: 15vh;\n      margin-top: 0.5vh;\n  }\n  \n  #lowercase_bmras {\n    background: url('k_ending_sounds_bmras.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 65vh;\n    cursor: pointer;\n    width: 65vh;\n    height: 16vh;\n  }\n  \n  #uppercase_alphabetical {\n    background: url('k_ending_sounds_capital_alphabetical.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 75vh;\n    cursor: pointer;\n    width: 75vh;\n    height: 18vh;\n  }\n  \n  #uppercase_bmras {\n    background: url('k_ending_sounds_capital_bmras.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 75vh;\n    cursor: pointer;\n    width: 75vh;\n    height: 18vh;\n  }\n  \n  .column {\n    padding-top: 12vh;\n  }\n  \n  .category_button {\n      margin: 5vh 0vh 0vh 41vh;\n      border: none;\n      display: inherit;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvay1jYXRlZ29yaWVzL2stZW5kaW5nLXNvdW5kcy1kZXRhaWxzL2stZW5kaW5nLXNvdW5kcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsbUVBQXNHO01BQ3RHLCtCQUErQjtNQUMvQixzQkFBc0I7RUFDMUI7O0VBRUEscUJBQXFCOztFQUNyQjtNQUNJLGdGQUErRztNQUMvRywyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtFQUNyQjs7RUFDQTtJQUNFLHlFQUF3RztJQUN4RywyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUNBO0lBQ0Usd0ZBQXVIO0lBQ3ZILDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxpRkFBZ0g7SUFDaEgsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLHdCQUF3QjtNQUN4QixZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvay1jYXRlZ29yaWVzL2stZW5kaW5nLXNvdW5kcy1kZXRhaWxzL2stZW5kaW5nLXNvdW5kcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY5Ljd2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMva19lbmRpbmdfc291bmRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMjd2aDtcbiAgfVxuICBcbiAgLyogUHJlLUsgQ2F0ZWdvcmllcyAqL1xuICAjbG93ZXJjYXNlX2FscGhhYmV0aWNhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9rX2VuZGluZ19zb3VuZHNfYWxwaGFiZXRpY2FsLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwdmg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aWR0aDogNjB2aDtcbiAgICAgIGhlaWdodDogMTV2aDtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXZoO1xuICB9XG4gICNsb3dlcmNhc2VfYm1yYXMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2tfZW5kaW5nX3NvdW5kc19ibXJhcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDY1dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA2NXZoO1xuICAgIGhlaWdodDogMTZ2aDtcbiAgfVxuICAjdXBwZXJjYXNlX2FscGhhYmV0aWNhbCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMva19lbmRpbmdfc291bmRzX2NhcGl0YWxfYWxwaGFiZXRpY2FsLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzV2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDc1dmg7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICB9XG4gICN1cHBlcmNhc2VfYm1yYXMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2tfZW5kaW5nX3NvdW5kc19jYXBpdGFsX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzV2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDc1dmg7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICB9XG5cbiAgLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDEydmg7XG4gIH1cblxuICAuY2F0ZWdvcnlfYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogNXZoIDB2aCAwdmggNDF2aDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: KEndingSoundsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEndingSoundsDetailsComponent", function() { return KEndingSoundsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let KEndingSoundsDetailsComponent = class KEndingSoundsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
KEndingSoundsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
KEndingSoundsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./k-ending-sounds-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./k-ending-sounds-details.component.css */ "./src/app/pages/k-categories/k-ending-sounds-details/k-ending-sounds-details.component.css")).default]
    })
], KEndingSoundsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/k-categories/k-letters-details/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/k-categories/k-letters-details/index.ts ***!
  \***************************************************************/
/*! exports provided: KLettersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _k_letters_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k-letters-details.component */ "./src/app/pages/k-categories/k-letters-details/k-letters-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KLettersDetailsComponent", function() { return _k_letters_details_component__WEBPACK_IMPORTED_MODULE_1__["KLettersDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/k-categories/k-letters-details/k-letters-details.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-letters-details/k-letters-details.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('first_letters.png') no-repeat scroll transparent;\n    background-position: 19vh 4vh;\n    background-size: 173vh;\n}\n\n/* Phonics Categories */\n\n#names_lowercase_bmras {\n    background: url('names_lowercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    margin-top: 23vh;\n    cursor: pointer;\n}\n\n#sounds_lowercase_bmras {\n    background: url('sounds_lowercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n}\n\n#names_lowercase_alphabetical {\n    background: url('names_lowercase_alphabetical.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n}\n\n#sounds_lowercase_alphabetical {\n    background: url('sounds_lowercase_alphabetical.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n}\n\n#names_uppercase_bmras {\n    background: url('names_uppercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n}\n\n#sounds_uppercase_bmras {\n    background: url('sounds_uppercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n}\n\n#names_uppercase_alphabetical {\n  background: url('names_uppercase_alphabetical.png') no-repeat scroll transparent;\n  background-size: 52vh;\n  cursor: pointer;\n}\n\n#sounds_uppercase_alphabetical {\n  background: url('sounds_uppercase_alphabetical.png') no-repeat scroll transparent;\n  background-size: 52vh;\n  cursor: pointer;\n  margin-left: 6.5vh;\n}\n\n.category_button {\n    width: 52vh;\n    height: 13vh;\n    margin: 4vh 0vh 0vh 5vh;\n    border: none;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvay1jYXRlZ29yaWVzL2stbGV0dGVycy1kZXRhaWxzL2stbGV0dGVycy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUVBQW9HO0lBQ3BHLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUEsdUJBQXVCOztBQUN2QjtJQUNJLHlFQUF3RztJQUN4RyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwwRUFBeUc7SUFDekcscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxnRkFBK0c7SUFDL0cscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpRkFBZ0g7SUFDaEgscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx5RUFBd0c7SUFDeEcscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwwRUFBeUc7SUFDekcscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDRSxnRkFBK0c7RUFDL0cscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxpRkFBZ0g7RUFDaEgscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2stY2F0ZWdvcmllcy9rLWxldHRlcnMtZGV0YWlscy9rLWxldHRlcnMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRzL2ZpcnN0X2xldHRlcnMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOXZoIDR2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3M3ZoO1xufVxuXG4vKiBQaG9uaWNzIENhdGVnb3JpZXMgKi9cbiNuYW1lc19sb3dlcmNhc2VfYm1yYXMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL25hbWVzX2xvd2VyY2FzZV9ibXJhcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTJ2aDtcbiAgICBtYXJnaW4tdG9wOiAyM3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzb3VuZHNfbG93ZXJjYXNlX2JtcmFzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zb3VuZHNfbG93ZXJjYXNlX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNi41dmg7XG59XG4jbmFtZXNfbG93ZXJjYXNlX2FscGhhYmV0aWNhbCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvbmFtZXNfbG93ZXJjYXNlX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTJ2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc291bmRzX2xvd2VyY2FzZV9hbHBoYWJldGljYWwge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NvdW5kc19sb3dlcmNhc2VfYWxwaGFiZXRpY2FsLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNi41dmg7XG59XG4jbmFtZXNfdXBwZXJjYXNlX2JtcmFzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9uYW1lc191cHBlcmNhc2VfYm1yYXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NvdW5kc191cHBlcmNhc2VfYm1yYXMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NvdW5kc191cHBlcmNhc2VfYm1yYXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA2LjV2aDtcbn1cbiNuYW1lc191cHBlcmNhc2VfYWxwaGFiZXRpY2FsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvbmFtZXNfdXBwZXJjYXNlX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzb3VuZHNfdXBwZXJjYXNlX2FscGhhYmV0aWNhbCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NvdW5kc191cHBlcmNhc2VfYWxwaGFiZXRpY2FsLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogNi41dmg7XG59XG5cbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiA1MnZoO1xuICAgIGhlaWdodDogMTN2aDtcbiAgICBtYXJnaW46IDR2aCAwdmggMHZoIDV2aDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2x1bW4ge1xuICAgIHBhZGRpbmctdG9wOiAyLjV2aDtcbn1cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLmNvbHVtbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/k-categories/k-letters-details/k-letters-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/k-categories/k-letters-details/k-letters-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: KLettersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLettersDetailsComponent", function() { return KLettersDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let KLettersDetailsComponent = class KLettersDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
KLettersDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
KLettersDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./k-letters-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/k-categories/k-letters-details/k-letters-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./k-letters-details.component.css */ "./src/app/pages/k-categories/k-letters-details/k-letters-details.component.css")).default]
    })
], KLettersDetailsComponent);



/***/ }),

/***/ "./src/app/pages/list-select/list-select.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/list-select/list-select.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    overflow: visible !important;\n}\n#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 22vh;\n    position: relative;\n}\n#column {\n    width: 42vh;\n}\n.phoneme_button {\n    background: url('ape.png') no-repeat scroll;\n    background-position: 73% 50%;\n    background-size: 21vh 26vh;\n}\n.cardList {\n    display: flex;\n    height: 97vh;\n    width: 165vh;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    overflow-y: auto;\n}\n#I-IND-long img {\n    transform: translate(24.5vh, -20vh); \n}\n#I-IND-short img {\n    width: 45%;\n    transform: translate(26vh, -19vh);\n}\n#I-ION img {\n    transform: translate(25vh, -20vh);\n}\n#I-ILD img {\n    transform: translate(23.1vh, -20vh);\n}\n#N-NG img {\n    transform: translate(23vh, -20vh);\n}\n#O-ew img {\n    transform: translate(23vh, -20vh);\n}\n#P-PH-begin img {\n    transform: translate(23.5vh, -20vh);\n}\n#S-SCR img {\n    transform: translate(25vh, -20vh);\n}\n#S-SM img {\n    transform: translate(23vh, -20vh);\n}\n#S-SPL img {\n    transform: translate(24vh, -20vh);\n}\n#S-SPR img {\n    transform: translate(25vh, -20vh);\n}\n#S-SW img {\n    transform: translate(23vh, -20vh);\n}\n#T-TCH-silent img {\n    transform: translate(26vh, -20vh);\n}\n#W-WH img {\n    transform: translate(24vh, -20vh);\n}\n#W-WR-silent img {\n    transform: translate(23.5vh, -20vh);\n}\n#I-IGH img {\n    transform: translate(25vh, -20vh);\n}\n#A-AW img {\n    transform: translate(24vh, -20vh);\n}\n#O-ohw img {\n    transform: translate(24vh, -20vh);\n}\n#T-TION img {\n    transform: translate(26vh, -20vh);\n}\n#T-TION p {\n    transform: translateX(-4.5vh);\n}\n#O-OST-short img {\n    transform: translate(25vh, -20vh);\n}\n#O-OST-long img {\n    transform: translate(27vh,-17vh);\n    width: 20vh;\n}\n/* Column Gap */\n.cardList > * {\n    box-sizing: border-box;\n}\n/* Item sizing */\n.cardListItem {\n    flex: 0 1 calc(33.3% - 4.7vh);\n    height: 38vh;\n    margin-top: 5vh;\n    margin-right: 4.7vh;\n    border-radius: 2.8vh;\n    cursor: pointer;\n    background-color: #FFFFFF;\n    font-size: 12vh;\n    border-bottom: 3vh solid #DEDEDE;\n    overflow: hidden;\n}\np {\n    margin: 9vh 0vh 0vh 9vh;\n}\n.hide {\n    display: none;\n}\n.alphabet-list-bottom {\n    transform: translateY(13vh);\n}\n/* Phoneme label colors */\n.green {\n    color: #73EC12;\n}\n.pink {\n    color: #EB5AD1;\n}\n.red {\n    color: #ff0000;\n}\n.purple {\n    color: mediumpurple;\n}\n.word-image {\n    width: 50%;\n    transform: translate(22vh, -20vh);\n}\n/* Scrollbar */\n::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 9.5vh;\n    background-color: #e6f6f7;\n    box-shadow: 0vh 0vh .3vh rgba(0,0,0,0.3);\n}\n::-webkit-scrollbar-thumb {\n    background-color: #60a0bd;\n    border: 0.5vh solid #fff;\n    border-radius: 1.5vh;\n    box-shadow: 0vh 0vh .3vh rgba(0,0,0,0.3);\n}\n::-webkit-scrollbar-button {\n    background-size: 100%;\n    border: 0.5vh solid #fff;\n    border-radius: 1.5vh;\n    height: 9.5vh;\n    background-color: #60a0bd;\n    box-shadow: 0vh 0vh .3vh rgba(0,0,0,0.3);\n}\n::-webkit-scrollbar-button:decrement {\n    background-image: url('scroll-up.png');\n    background-position: center;\n}\n::-webkit-scrollbar-button:increment {\n    background-image: url('scroll-down.png');\n    background-position: center;\n}\n::-webkit-scrollbar-button:increment:start,\n::-webkit-scrollbar-button:decrement:end {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1zZWxlY3QvbGlzdC1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDJDQUEyRTtJQUMzRSw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQztBQUVBLGNBQWM7QUFDZDtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksc0NBQWtFO0lBQ2xFLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksd0NBQW9FO0lBQ3BFLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXN0LXNlbGVjdC9saXN0LXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4jbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY5Ljd2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIydmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29sdW1uIHtcbiAgICB3aWR0aDogNDJ2aDtcbn1cblxuLnBob25lbWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvc2lnaHQtd29yZHMvYXBlLnBuZycpIG5vLXJlcGVhdCBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzMlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIxdmggMjZ2aDtcbn1cblxuLmNhcmRMaXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTd2aDtcbiAgICB3aWR0aDogMTY1dmg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNJLUlORC1sb25nIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjQuNXZoLCAtMjB2aCk7IFxufVxuI0ktSU5ELXNob3J0IGltZyB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNnZoLCAtMTl2aCk7XG59XG4jSS1JT04gaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNXZoLCAtMjB2aCk7XG59XG4jSS1JTEQgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMy4xdmgsIC0yMHZoKTtcbn1cbiNOLU5HIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjN2aCwgLTIwdmgpO1xufVxuI08tZXcgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3ZoLCAtMjB2aCk7XG59XG4jUC1QSC1iZWdpbiBpbWcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzLjV2aCwgLTIwdmgpO1xufVxuI1MtU0NSIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjV2aCwgLTIwdmgpO1xufVxuI1MtU00gaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3ZoLCAtMjB2aCk7XG59XG4jUy1TUEwgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHZoLCAtMjB2aCk7XG59XG4jUy1TUFIgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNXZoLCAtMjB2aCk7XG59XG4jUy1TVyBpbWcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzdmgsIC0yMHZoKTtcbn1cbiNULVRDSC1zaWxlbnQgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNnZoLCAtMjB2aCk7XG59XG4jVy1XSCBpbWcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0dmgsIC0yMHZoKTtcbn1cbiNXLVdSLXNpbGVudCBpbWcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzLjV2aCwgLTIwdmgpO1xufVxuI0ktSUdIIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjV2aCwgLTIwdmgpO1xufVxuI0EtQVcgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHZoLCAtMjB2aCk7XG59XG4jTy1vaHcgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHZoLCAtMjB2aCk7XG59XG4jVC1USU9OIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjZ2aCwgLTIwdmgpO1xufVxuI1QtVElPTiBwIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQuNXZoKTtcbn1cbiNPLU9TVC1zaG9ydCBpbWcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1dmgsIC0yMHZoKTtcbn1cbiNPLU9TVC1sb25nIGltZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjd2aCwtMTd2aCk7XG4gICAgd2lkdGg6IDIwdmg7XG59XG4vKiBDb2x1bW4gR2FwICovXG4uY2FyZExpc3QgPiAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBJdGVtIHNpemluZyAqL1xuLmNhcmRMaXN0SXRlbSB7XG4gICAgZmxleDogMCAxIGNhbGMoMzMuMyUgLSA0Ljd2aCk7XG4gICAgaGVpZ2h0OiAzOHZoO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQuN3ZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDIuOHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTJ2aDtcbiAgICBib3JkZXItYm90dG9tOiAzdmggc29saWQgI0RFREVERTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDl2aCAwdmggMHZoIDl2aDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbHBoYWJldC1saXN0LWJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzdmgpO1xufVxuXG4vKiBQaG9uZW1lIGxhYmVsIGNvbG9ycyAqL1xuLmdyZWVuIHtcbiAgICBjb2xvcjogIzczRUMxMjtcbn1cbi5waW5rIHtcbiAgICBjb2xvcjogI0VCNUFEMTtcbn1cbi5yZWQge1xuICAgIGNvbG9yOiAjZmYwMDAwO1xufVxuLnB1cnBsZSB7XG4gICAgY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLndvcmQtaW1hZ2Uge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjJ2aCwgLTIwdmgpO1xufVxuXG4vKiBTY3JvbGxiYXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogOS41dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjZmNztcbiAgICBib3gtc2hhZG93OiAwdmggMHZoIC4zdmggcmdiYSgwLDAsMCwwLjMpO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwYTBiZDtcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMS41dmg7XG4gICAgYm94LXNoYWRvdzogMHZoIDB2aCAuM3ZoIHJnYmEoMCwwLDAsMC4zKTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYm9yZGVyOiAwLjV2aCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xuICAgIGhlaWdodDogOS41dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwYTBiZDtcbiAgICBib3gtc2hhZG93OiAwdmggMHZoIC4zdmggcmdiYSgwLDAsMCwwLjMpO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246ZGVjcmVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zY3JvbGwtdXAucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zY3JvbGwtZG93bi5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQ6c3RhcnQsXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpkZWNyZW1lbnQ6ZW5kIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/list-select/list-select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/list-select/list-select.component.ts ***!
  \************************************************************/
/*! exports provided: ListSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSelectComponent", function() { return ListSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alphabet-letters.service */ "./src/app/services/alphabet-letters.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _services_phonemes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/phonemes.service */ "./src/app/services/phonemes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ListSelectComponent = class ListSelectComponent {
    constructor(transferLetterService, alphabetLettersService, progressService, phonemesService, router, activatedRoute, location) {
        this.transferLetterService = transferLetterService;
        this.alphabetLettersService = alphabetLettersService;
        this.progressService = progressService;
        this.phonemesService = phonemesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        let list = this.activatedRoute.snapshot.queryParamMap.get('list');
        this.list = list;
        this.grade = this.activatedRoute.snapshot.queryParamMap.get('grade');
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
        if (!list || list === '') {
            this.router.navigate(['']);
        }
        else if (list == 'alphabet') {
            if (this.activatedRoute.snapshot.queryParamMap.get('reordered')) {
                this.data = this.alphabetLettersService.dataImport(true);
            }
            else {
                this.data = this.alphabetLettersService.dataImport(false);
            }
        }
        else {
            if (this.activatedRoute.snapshot.queryParamMap.get('reordered')) {
                this.data = this.phonemesService.dataLoad(list, this.grade, true);
            }
            else {
                if (this.grade) {
                    this.data = this.phonemesService.dataLoad(list, this.grade, false);
                }
                else {
                    this.data = this.phonemesService.dataLoad(list, '', false);
                }
            }
        }
        this.transferLetterService.setList(this.data);
        this.instruction = new Audio();
        if (this.list === 'alphabet') {
            this.instruction.src = '/assets/audio/00_Button_Audio_Win_A_Green_Ball_(Alphabet_Letters).mp3';
        }
        else {
            this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        }
        this.instruction.load();
        this.dataProgress = [];
        this.cardItemCount = 0;
    }
    ngOnInit() {
        if (this.list === 'alphabet') {
            if (!this.progressService.getReceivedInstructions('hasReceivedAlphabetInstruction')) {
                this.playAudio();
                this.progressService.setReceivedInstructions('hasReceivedAlphabetInstruction', true);
            }
        }
        else {
            if (!this.progressService.getReceivedInstructions('hasReceivedPhonemeInstruction')) {
                this.playAudio();
                this.progressService.setReceivedInstructions('hasReceivedPhonemeInstruction', true);
            }
        }
        if (this.activatedRoute.snapshot.queryParamMap.get('list') == 'alphabet') {
            document.getElementById('puzzle').classList.add('hide');
            for (var i = 0; i < Object.keys(document.getElementsByClassName('bottom')).length - 1; i++) {
                document.getElementsByClassName('bottom')[i].classList.add('alphabet-list-bottom');
            }
        }
    }
    ngAfterViewInit() {
        if (this.list === 'alphabet') {
            for (var i = 0; i < document.getElementsByClassName('app-card').length; i++) {
                var temp = document.getElementsByClassName('app-card')[i];
                temp.style.marginLeft = '11vh';
            }
        }
        if (this.capital) {
            for (var i = 0; i < document.getElementsByClassName('app-card').length; i++) {
                var temp = document.getElementsByClassName('app-card')[i];
                temp.style.textTransform = 'uppercase';
            }
        }
    }
    ngOnDestroy() {
        this.instruction.pause();
        this.instruction = null;
    }
    getDisplay(item) {
        var icon = document.getElementById('puzzle');
        if (item != null) {
            this.showProgress(item);
            if (this.list === 'alphabet') {
                return item.letter;
            }
            else {
                return item.display;
            }
        }
    }
    showProgress(item) {
        let numGoldStars;
        let numSilverStars;
        let elem = document.getElementsByClassName("cardListItem")[this.cardItemCount];
        let queryStatement;
        if (item != null) {
            if (!this.dataProgress.includes(item)) {
                this.cardItemCount++;
                if (this.list === 'alphabet') {
                    queryStatement = "letter" + item.letter;
                    numGoldStars = this.progressService.getGoldStarsFromKey(queryStatement);
                    numSilverStars = this.progressService.getSilverStarsFromKey(queryStatement);
                }
                else {
                    queryStatement = "phoneme" + item.id;
                    numGoldStars = this.progressService.getGoldStarsFromKey(queryStatement);
                    numSilverStars = this.progressService.getSilverStarsFromKey(queryStatement);
                }
                if (numGoldStars + numSilverStars > 0) {
                    this.dataProgress.push(item);
                }
                if (numGoldStars >= 5 && this.list == "alphabet") {
                    this.progressService.setCheckMark(queryStatement, true);
                }
                for (let i = 0; i < numGoldStars; i++) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-21.2vh)';
                    }
                    else {
                        if (Object.keys(document.getElementsByTagName('app-card')).length > 6) {
                            img.style.transform = 'translateY(-31.4vh)';
                        }
                        else {
                            img.style.transform = 'translateY(-33vh)';
                        }
                    }
                    img.setAttribute("src", '/assets/img/progress/Gold-Star-Blank.png');
                    img.setAttribute("width", '25px');
                    img.setAttribute("height", '25px');
                    img.style.marginLeft = '2vh';
                    elem.appendChild(img);
                }
                for (let i = 0; i < numSilverStars; i++) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-21vh)';
                    }
                    else {
                        img.style.transform = 'translateY(-33vh)';
                    }
                    img.setAttribute("src", '/assets/img/progress/Silver-Star-Blank.png');
                    img.setAttribute("width", '25px');
                    img.setAttribute("height", '25px');
                    img.style.marginLeft = '2vh';
                    elem.appendChild(img);
                }
                // show checkmark: if letters (5 stars have been earned), if phonemes (puzzle has been finished)
                if (this.progressService.getCheckMark(queryStatement)) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-22.1vh)';
                    }
                    else {
                        if (Object.keys(document.getElementsByTagName('app-card')).length > 6) {
                            img.style.transform = 'translateY(-32.3vh)';
                        }
                        else {
                            img.style.transform = 'translateY(-33.8vh)';
                        }
                    }
                    img.setAttribute("src", '/assets/img/progress/check_mark.png');
                    img.setAttribute("width", '46px');
                    img.setAttribute("height", '46px');
                    if (Object.keys(document.getElementsByTagName('app-card')).length > 6) {
                        img.style.marginLeft = '10.8vh';
                    }
                    else {
                        img.style.marginLeft = '14vh';
                    }
                    elem.appendChild(img);
                }
            }
        }
    }
    select(item) {
        this.transferLetterService.setData(item);
        if (this.list == 'alphabet') {
            if (this.capital) {
                this.router.navigate(['alphabet-learn'], { queryParams: { capital: true } });
            }
            else {
                this.router.navigate(['alphabet-learn']);
            }
        }
        else {
            if (this.capital) {
                this.router.navigate(['phoneme-learn'], { queryParams: { capital: true } });
            }
            else {
                this.router.navigate(['phoneme-learn']);
            }
        }
    }
    playAudio() {
        this.instruction.pause();
        this.instruction.currentTime = 0;
        this.instruction.play();
    }
    goBack() {
        this.location.back();
    }
    setClass(item) {
        if (this.grade !== null) {
            return item.color[this.grade];
        }
        else {
            if (this.list === 'vowels') {
                return item.color.vowel;
            }
            else if (this.list === 'consonants') {
                return item.color.consonant;
            }
            else if (this.list === 'vowelConsonants') {
                return item.color.VC;
            }
            else if (this.list === 'phoneme') {
                return item.color.all;
            }
            else if (this.list !== 'alphabet') {
                return item.color.all;
            }
        }
    }
    setID(item) {
        return item.id;
    }
    getImage(item) {
        if (this.list === 'alphabet') {
            return;
        }
        else {
            return item.word1.image;
        }
    }
    quiz() {
        if (this.list == 'alphabet') {
            if (this.capital) {
                this.router.navigate(['alphabet-quiz'], { queryParams: { quizAll: true, capital: true } });
            }
            else {
                this.router.navigate(['alphabet-quiz'], { queryParams: { quizAll: true } });
            }
        }
        else {
            if (this.capital) {
                this.router.navigate(['phoneme-quiz'], { queryParams: { list: this.list, quizAll: true, capital: true, grade: this.grade } });
            }
            else {
                this.router.navigate(['phoneme-quiz'], { queryParams: { list: this.list, quizAll: true, grade: this.grade } });
            }
        }
    }
};
ListSelectComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__["TransferLetterService"] },
    { type: _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_3__["AlphabetLettersService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressService"] },
    { type: _services_phonemes_service__WEBPACK_IMPORTED_MODULE_5__["PhonemesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
ListSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-select/list-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-select.component.css */ "./src/app/pages/list-select/list-select.component.css")).default]
    })
], ListSelectComponent);



/***/ }),

/***/ "./src/app/pages/login/index.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/index.ts ***!
  \**************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });





/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 18vh;\n    position: relative;\n  }\n  \n  #side-menu {\n    background: url('home-side-bar.png') no-repeat scroll 0 0 transparent;\n    background-size: 17.3vh 97vh;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n  }\n  \n  .container {\n      background: #d5eced;\n      padding: 4.5vh;\n      transform: translate(12vh, 1vh);\n      width: 120vh;\n      height: 85vh;\n      border-radius: 1.5vh;\n      text-align: center;\n  }\n  \n  h1 {\n      color: #2c3e50;\n  }\n  \n  .password {\n      margin: 5vh;\n  }\n  \n  .placeholder {\n      border: #797979 0.3vh dotted;\n      width: 9vh;\n      height: 9vh;\n      border-radius: 1.1vh;\n      margin: 1.1vh;\n      cursor: pointer;\n      display: inline-block;\n  }\n  \n  .selected-image {\n      width: 100%;\n      height: 100%;\n      border-radius: 1.1vh;\n      margin-bottom: 1.4vh;\n      /* border: white 0.3vh solid;; */\n  }\n  \n  .image-container {\n      flex-direction: column;\n      display: flex;\n      max-height: 44vh;\n      overflow: scroll;\n      flex-wrap: wrap;\n  }\n  \n  .image {\n      height: 18vh;\n      width: 18vh;\n      border-radius: 1.2vh;\n      cursor: pointer;\n      border: transparent 0.5vh solid;\n      margin: 1vh;\n  }\n  \n  #submit {\n    background: #4caf82;\n    color: #fff;\n    border: none;\n    border-radius: 1.1vh;\n    padding: 2vh 4vh;\n    font-family: 'Avenir', Helvetica, Arial, sans-serif !important;\n    font-weight: 700;\n    font-size: 3vh;\n    cursor: pointer;\n    margin-top: 1.5vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFFQUF5RjtJQUN6Riw0QkFBNEI7RUFDOUI7O0VBRUE7TUFDSSxvQ0FBb0M7RUFDeEM7O0VBRUE7TUFDSSxtQkFBbUI7TUFDbkIsY0FBYztNQUNkLCtCQUErQjtNQUMvQixZQUFZO01BQ1osWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxjQUFjO0VBQ2xCOztFQUNBO01BQ0ksV0FBVztFQUNmOztFQUVBO01BQ0ksNEJBQTRCO01BQzVCLFVBQVU7TUFDVixXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLGFBQWE7TUFDYixlQUFlO01BQ2YscUJBQXFCO0VBQ3pCOztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixvQkFBb0I7TUFDcEIsb0JBQW9CO01BQ3BCLGdDQUFnQztFQUNwQzs7RUFFQTtNQUNJLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixlQUFlO0VBQ25COztFQUVBO01BQ0ksWUFBWTtNQUNaLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsZUFBZTtNQUNmLCtCQUErQjtNQUMvQixXQUFXO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDhEQUE4RDtJQUM5RCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gICAgd2lkdGg6IDE2OS43dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgI3NpZGUtbWVudSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2hvbWUtc2lkZS1iYXIucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNy4zdmggOTd2aDtcbiAgfVxuICBcbiAgI2JhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZDVlY2VkO1xuICAgICAgcGFkZGluZzogNC41dmg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnZoLCAxdmgpO1xuICAgICAgd2lkdGg6IDEyMHZoO1xuICAgICAgaGVpZ2h0OiA4NXZoO1xuICAgICAgYm9yZGVyLXJhZGl1czogMS41dmg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBoMSB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgfVxuICAucGFzc3dvcmQge1xuICAgICAgbWFyZ2luOiA1dmg7XG4gIH1cblxuICAucGxhY2Vob2xkZXIge1xuICAgICAgYm9yZGVyOiAjNzk3OTc5IDAuM3ZoIGRvdHRlZDtcbiAgICAgIHdpZHRoOiA5dmg7XG4gICAgICBoZWlnaHQ6IDl2aDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMXZoO1xuICAgICAgbWFyZ2luOiAxLjF2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5zZWxlY3RlZC1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMXZoO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS40dmg7XG4gICAgICAvKiBib3JkZXI6IHdoaXRlIDAuM3ZoIHNvbGlkOzsgKi9cbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXgtaGVpZ2h0OiA0NHZoO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDE4dmg7XG4gICAgICB3aWR0aDogMTh2aDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMnZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudCAwLjV2aCBzb2xpZDtcbiAgICAgIG1hcmdpbjogMXZoO1xuICB9XG5cbiAgI3N1Ym1pdCB7XG4gICAgYmFja2dyb3VuZDogIzRjYWY4MjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS4xdmg7XG4gICAgcGFkZGluZzogMnZoIDR2aDtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");




let LoginComponent = class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.imgs = [];
        this.selectedImg = [];
        for (let i = 0; i < 26; i++) {
            this.imgs.push({
                url: `../../../assets/img/login/${String.fromCharCode(97 + i)}.png`,
                id: String.fromCharCode(97 + i)
            });
        }
    }
    ngOnInit() {
    }
    onImg(img) {
        if (this.selectedImg.length < 5) {
            // Remove dotted border
            var temp = document.getElementsByClassName('placeholder')[this.selectedImg.length];
            temp.style.border = 'white solid';
            temp.style.background = 'white';
            // Add letter to passcode
            this.selectedImg.push(img);
        }
    }
    onSelected(img) {
        // Remove letter from passcode
        const index = this.selectedImg.indexOf(img);
        if (index === this.selectedImg.length - 1) {
            this.selectedImg.length--;
        }
        delete this.selectedImg[index];
        // Remove dotted border
        var temp = document.getElementsByClassName('placeholder')[index];
        temp.style.border = '#797979 0.3vh dotted';
        temp.style.background = 'transparent';
    }
    submit() {
        if (this.selectedImg.length === 5) {
            var passcode = this.selectedImg[0].id + this.selectedImg[1].id + this.selectedImg[2].id + this.selectedImg[3].id + this.selectedImg[4].id;
            this.userService.login(passcode)
                .subscribe(res => {
                this.router.navigate(['home']);
            }, err => {
                alert(err['error']['message']);
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/nobodys-better/nobodys-better.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/nobodys-better/nobodys-better.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n  }\n  \n  #nobodys-better {\n    width: 170vh;\n    height: 80vh;\n    margin: 9vh 0vh 0vh -23vh;\n  }\n  \n  #repeat {\n      bottom: 0vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm9ib2R5cy1iZXR0ZXIvbm9ib2R5cy1iZXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLG9DQUFvQztFQUN4Qzs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksV0FBVztFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm9ib2R5cy1iZXR0ZXIvbm9ib2R5cy1iZXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgfVxuXG4gICNub2JvZHlzLWJldHRlciB7XG4gICAgd2lkdGg6IDE3MHZoO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBtYXJnaW46IDl2aCAwdmggMHZoIC0yM3ZoO1xuICB9XG5cbiAgI3JlcGVhdCB7XG4gICAgICBib3R0b206IDB2aDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nobodys-better/nobodys-better.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/nobodys-better/nobodys-better.component.ts ***!
  \******************************************************************/
/*! exports provided: NobodysBetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NobodysBetterComponent", function() { return NobodysBetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let NobodysBetterComponent = class NobodysBetterComponent {
    constructor(location) {
        this.location = location;
    }
    replayVideo() {
        var temp = document.getElementById('nobodys-better');
        temp.pause();
        temp.currentTime = 0;
        temp.load();
    }
    goBack() {
        this.location.back();
    }
};
NobodysBetterComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
NobodysBetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nobodys-better.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nobodys-better/nobodys-better.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nobodys-better.component.css */ "./src/app/pages/nobodys-better/nobodys-better.component.css")).default]
    })
], NobodysBetterComponent);



/***/ }),

/***/ "./src/app/pages/phoneme-categories/index.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/phoneme-categories/index.ts ***!
  \***************************************************/
/*! exports provided: PhonemeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-categories.component */ "./src/app/pages/phoneme-categories/phoneme-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeCategoriesComponent", function() { return _phoneme_categories_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/pages/phoneme-categories/phoneme-categories.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/phoneme-categories/phoneme-categories.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('phoneme_categories.png') no-repeat scroll transparent;\n    background-position: right;\n    background-size: 170.1vh;\n}\n\n/* Phonics Categories */\n\n#consonants {\n    background: url('consonants.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 38.5vh;\n    cursor: pointer;\n}\n\n#consonant_blends {\n    background: url('consonant_blends.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 36.6vh;\n    cursor: pointer;\n}\n\n#vowel_consonant_blends {\n    background: url('vowel_consonant_blends.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 39.3vh;\n    cursor: pointer;\n}\n\n#vowels {\n    background: url('vowels.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 31.9vh;\n    cursor: pointer;\n}\n\n#vowel_pairs {\n    background: url('vowel_pairs.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 28.4vh;\n    cursor: pointer;\n}\n\n#all {\n    background: url('all.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 30.3vh;\n    cursor: pointer;\n}\n\n.category_button {\n    width: 39vh;\n    height: 29vh;\n    margin: 5vh 2vh 0vh 0vh;\n    border: none;\n    margin-left: auto;\n}\n\n.row {\n  float: left;\n  margin-left: 3vh;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvbmVtZS1jYXRlZ29yaWVzL3Bob25lbWUtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNFQUFzRztJQUN0RywwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSw4REFBMEY7SUFDMUYsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksb0VBQWdHO0lBQ2hHLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDBFQUFzRztJQUN0RywyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwwREFBc0Y7SUFDdEYsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksK0RBQTJGO0lBQzNGLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHVEQUFtRjtJQUNuRiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9waG9uZW1lLWNhdGVnb3JpZXMvcGhvbmVtZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvcGhvbmVtZV9jYXRlZ29yaWVzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNzAuMXZoO1xufVxuXG4vKiBQaG9uaWNzIENhdGVnb3JpZXMgKi9cbiNjb25zb25hbnRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9jb25zb25hbnRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzguNXZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb25zb25hbnRfYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9jb25zb25hbnRfYmxlbmRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzYuNnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2b3dlbF9jb25zb25hbnRfYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy92b3dlbF9jb25zb25hbnRfYmxlbmRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzkuM3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2b3dlbHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3Zvd2Vscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMxLjl2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdm93ZWxfcGFpcnMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3Zvd2VsX3BhaXJzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjguNHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNhbGwge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2FsbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwLjN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiAzOXZoO1xuICAgIGhlaWdodDogMjl2aDtcbiAgICBtYXJnaW46IDV2aCAydmggMHZoIDB2aDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yb3cge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDN2aDtcbn1cblxuLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDIuNXZoO1xufVxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4uY29sdW1uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/phoneme-categories/phoneme-categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/phoneme-categories/phoneme-categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: PhonemeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeCategoriesComponent", function() { return PhonemeCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeCategoriesComponent = class PhonemeCategoriesComponent {
    playAudio(event) {
        this.category = new Audio();
        this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
};
PhonemeCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-categories/phoneme-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-categories.component.css */ "./src/app/pages/phoneme-categories/phoneme-categories.component.css")).default]
    })
], PhonemeCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/phoneme-learn/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/phoneme-learn/index.ts ***!
  \**********************************************/
/*! exports provided: PhonemeLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_learn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-learn.component */ "./src/app/pages/phoneme-learn/phoneme-learn.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeLearnComponent", function() { return _phoneme_learn_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeLearnComponent"]; });





/***/ }),

/***/ "./src/app/pages/phoneme-learn/phoneme-learn.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/phoneme-learn/phoneme-learn.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n.column {\n  float: left;\n  text-align: center;\n  width: 48vh;\n  transform: translateX(-21vh);\n}\n\n.column .text {\n  font-size: 4.8vh;\n  cursor: pointer;\n  position: absolute;\n  top: 55vh;\n  z-index: 999;\n  margin-left: 21vh;\n}\n\n.letter {\n  font-size: 19.4vh;\n  padding-top: -10vh;\n  margin-left: 44vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1);\n}\n\n.letter.one {\n  transform: translate(11vh, 3vh);\n}\n\n.letter.two {\n  transform: translate(5.5vh, 3vh);\n}\n\n.letter.three {\n  transform: translate(5vh, 3vh);\n}\n\n::ng-deep span {\n  color: red;\n}\n\n.back-button {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 10vh;\n    margin-bottom: 3.5vh;\n    border: none;\n    margin-top: 15vh;\n}\n\n.after-button {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 103vh;\n    margin-bottom: 3.5vh;\n    border: none;\n    margin-top: 15vh;\n}\n\n.row {\n  padding-left: 10vh;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.word-image {\n  margin-top: 22vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1) !important;\n  width: 70%;\n}\n\n.animate {\n  transition: all .5s;\n  transform: translate(-21vh, -1vh) scale(1.12) !important;\n}\n\n.animate-one {\n  transition: all .5s;\n  transform: translate(18vh, 3vh) scale(1.12) !important;\n}\n\n.animate-two {\n  transition: all .5s;\n  transform: translate(12vh, 3vh) scale(1.12) !important;\n}\n\n.animate-three {\n  transition: all .5s;\n  transform: translate(11vh, 3vh) scale(1.12) !important;\n}\n\n/* Text */\n\nh2 {\n  font-size: 20px;\n}\n\nh2 {\n  font-weight: lighter;\n}\n\np {\n  font-size: 14px;\n}\n\n::ng-deep span {\n  color: red;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvbmVtZS1sZWFybi9waG9uZW1lLWxlYXJuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0EsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3REFBd0Q7QUFDMUQ7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtBQUN4RDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7QUFDeEQ7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFlBQVk7O0FBQ1o7SUFDSSwrREFBMkY7SUFDM0YsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGhvbmVtZS1sZWFybi9waG9uZW1lLWxlYXJuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuI3NpZGUtbWVudSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQgIWltcG9ydGFudDtcbn1cblxuI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDh2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMXZoKTtcbn1cblxuLmNvbHVtbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogNC44dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1dmg7XG4gIHotaW5kZXg6IDk5OTtcbiAgbWFyZ2luLWxlZnQ6IDIxdmg7XG59XG5cbi5sZXR0ZXIge1xuICBmb250LXNpemU6IDE5LjR2aDtcbiAgcGFkZGluZy10b3A6IC0xMHZoO1xuICBtYXJnaW4tbGVmdDogNDR2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLmxldHRlci5vbmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXZoLCAzdmgpO1xufVxuLmxldHRlci50d28ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1LjV2aCwgM3ZoKTtcbn1cbi5sZXR0ZXIudGhyZWUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1dmgsIDN2aCk7XG59XG5cbjo6bmctZGVlcCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogOS41dmg7XG4gICAgaGVpZ2h0OiA5LjV2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMy41dmg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5hZnRlci1idXR0b24ge1xuICAgIHdpZHRoOiA5LjV2aDtcbiAgICBoZWlnaHQ6IDkuNXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAzdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMy41dmg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwdmg7XG59XG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi53b3JkLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMjJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5hbmltYXRlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIxdmgsIC0xdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZS1vbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOHZoLCAzdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZS10d28ge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnZoLCAzdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZS10aHJlZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExdmgsIDN2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcbn1cblxuLyogVGV4dCAqL1xuaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbiNmb3J3YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9mb3J3YXJkLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/phoneme-learn/phoneme-learn.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/phoneme-learn/phoneme-learn.component.ts ***!
  \****************************************************************/
/*! exports provided: PhonemeLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeLearnComponent", function() { return PhonemeLearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PhonemeLearnComponent = class PhonemeLearnComponent {
    constructor(transferService, elem, router, activatedRoute, location) {
        this.transferService = transferService;
        this.elem = elem;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.phoneme = this.transferService.getData();
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
    }
    goBack() {
        this.location.back();
    }
    showQuiz() {
        if (this.capital) {
            this.router.navigate(['phoneme-quiz'], { queryParams: { capital: true } });
        }
        else {
            this.router.navigateByUrl('/phoneme-quiz');
        }
    }
    ngOnInit() {
        let phonemeList = this.elem.nativeElement.querySelector('.letter').classList;
        if (this.phoneme.display.length == 1) {
            phonemeList.add('one');
        }
        else if (this.phoneme.display.length == 2) {
            phonemeList.add('two');
        }
        else if (this.phoneme.display.length == 3) {
            phonemeList.add('three');
        }
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = this.phoneme.audio;
        this.phonemeAudio.load();
        this.ex1Audio = new Audio();
        this.ex1Audio.src = this.phoneme.word1.audio;
        this.ex1Audio.load();
        this.ex2Audio = new Audio();
        this.ex2Audio.src = this.phoneme.word2.audio;
        this.ex2Audio.load();
        this.ex3Audio = new Audio();
        this.ex3Audio.src = this.phoneme.word3.audio;
        this.ex3Audio.load();
        this.phonemeAudio.onended = () => {
            if (this.phoneme.display.length == 1) {
                this.oneAnimate = false;
            }
            else if (this.phoneme.display.length == 2) {
                this.twoAnimate = false;
            }
            else if (this.phoneme.display.length == 3) {
                this.threeAnimate = false;
            }
            this.ex1Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                this.ex1Audio.play();
            });
        };
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex2Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                this.ex2Audio.play();
            });
        };
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex3Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                this.ex3Audio.play();
            });
        };
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.playAudio();
    }
    ngAfterViewInit() {
        if (this.capital) {
            var temp = document.getElementById('main-body');
            temp.style.textTransform = 'uppercase';
        }
    }
    ngOnDestroy() {
        this.phonemeAudio.pause();
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
        this.phonemeAudio = null;
        this.ex1Audio = null;
        this.ex2Audio = null;
        this.ex3Audio = null;
    }
    playAudio() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = false;
        }
        else if (this.phoneme.display.length == 2) {
            this.twoAnimate = false;
        }
        else if (this.phoneme.display.length == 3) {
            this.threeAnimate = false;
        }
        this.ex1Audio.pause();
        this.ex1Audio.currentTime = 0;
        this.ex1Animate = false;
        this.ex2Audio.pause();
        this.ex2Audio.currentTime = 0;
        this.ex2Animate = false;
        this.ex3Audio.pause();
        this.ex3Audio.currentTime = 0;
        this.ex3Animate = false;
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = true;
        }
        else if (this.phoneme.display.length == 2) {
            this.twoAnimate = true;
        }
        else if (this.phoneme.display.length == 3) {
            this.threeAnimate = true;
        }
        this.phonemeAudio.play();
    }
    playAudioA() {
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = true;
        }
        else if (this.phoneme.display.length == 2) {
            this.twoAnimate = true;
        }
        else if (this.phoneme.display.length == 3) {
            this.threeAnimate = true;
        }
        this.phonemeAudio.onended = () => {
            if (this.phoneme.display.length == 1) {
                this.oneAnimate = false;
            }
            else if (this.phoneme.display.length == 2) {
                this.twoAnimate = false;
            }
            else if (this.phoneme.display.length == 3) {
                this.threeAnimate = false;
            }
            this.phonemeAudio.onended = () => {
                if (this.phoneme.display.length == 1) {
                    this.oneAnimate = false;
                }
                else if (this.phoneme.display.length == 2) {
                    this.twoAnimate = false;
                }
                else if (this.phoneme.display.length == 3) {
                    this.threeAnimate = false;
                }
                this.ex1Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                    this.ex1Audio.play();
                });
            };
        };
        this.phonemeAudio.play();
    }
    playEx1Audio() {
        this.ex1Animate = true;
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex1Audio.onended = () => {
                this.ex1Animate = false;
                this.ex2Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                    this.ex2Audio.play();
                });
            };
        };
        this.ex1Audio.play();
    }
    playEx2Audio() {
        this.ex2Animate = true;
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex2Audio.onended = () => {
                this.ex2Animate = false;
                this.ex3Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                    this.ex3Audio.play();
                });
            };
        };
        this.ex2Audio.play();
    }
    playEx3Audio() {
        this.ex3Animate = true;
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.ex3Audio.play();
    }
    prev(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.id === this.phoneme.id;
        });
        if (currentIndex === 0) {
            return;
        }
        this.ex1Audio.onended = null;
        this.ex2Audio.onended = null;
        this.ex3Audio.onended = null;
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
        this.phoneme = this.transferService.getList()[currentIndex - 1];
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        this.ngOnInit();
    }
    next(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.id === this.phoneme.id;
        });
        if (currentIndex === this.transferService.getList().length - 1) {
            return;
        }
        this.ex1Audio.onended = null;
        this.ex2Audio.onended = null;
        this.ex3Audio.onended = null;
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
        this.phoneme = this.transferService.getList()[currentIndex + 1];
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        this.ngOnInit();
    }
};
PhonemeLearnComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__["TransferLetterService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
PhonemeLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-learn/phoneme-learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-learn.component.css */ "./src/app/pages/phoneme-learn/phoneme-learn.component.css")).default]
    })
], PhonemeLearnComponent);



/***/ }),

/***/ "./src/app/pages/phoneme-quiz/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/phoneme-quiz/index.ts ***!
  \*********************************************/
/*! exports provided: PhonemeQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-quiz.component */ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeQuizComponent", function() { return _phoneme_quiz_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeQuizComponent"]; });





/***/ }),

/***/ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/phoneme-quiz/phoneme-quiz.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 17vh;\n  position: relative;\n}\n\n.column {\n  float: left;\n}\n\n.puzzle-pane {\n    height: 900px;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    width: 48vh;\n    background-color: #ddf6f8;\n}\n\n.puzzle {\n    position: relative;\n    text-align: left;\n    margin: auto;\n    width: 36vh;\n    height: 48vh;\n    background-color: #d3ecee;\n}\n\n.puzzle-image {\n    position: absolute;\n    top: 0;\n    width: 36vh;\n    height: 48vh;\n    opacity: 0;\n}\n\n.visible {\n    opacity: 1;\n}\n\n.letter {\n  font-size: 19.4vh;\n  padding-top: -10vh;\n  padding-bottom: 10vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1);\n}\n\n::ng-deep span {\n  color: red;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.word-image {\n  cursor: pointer;\n  margin-top: 6vh;\n  width: 30vh;\n  height: 30vh;\n  transition: all .5s;\n  transform: scale(1);\n}\n\n.word-image-top {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.word-image-bottom {\n    margin-left: 10vh;\n    margin-right: 10vh;\n}\n\n.animate {\n  transition: all .75s;\n  transform: scale(1.12);\n}\n\n.animate-default {\n  transition: all .5s;\n  transform: scale(1);\n}\n\n.animate-one {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.animate-two {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.animate-three {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.animate-puzzle {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.ex-temp1,\n.ex-temp2,\n.ex-temp3 {\n  opacity: 0;\n}\n\n.animateEx1 {\n  transition: all 0.5s linear;\n  transform: translateY(17vh) scale(1.12) !important;\n}\n\n.animateEx2 {\n  transition: all 0.5s linear;\n  transform: translate(21vh, -17vh) scale(1.12) !important;\n}\n\n.animateEx3 {\n  transition: all 0.5s linear;\n  transform: translate(-21vh, -17vh) scale(1.12) !important;\n}\n\n/* Text */\n\nh2 {\n  font-size: 20px;\n}\n\nh2 {\n  font-weight: lighter;\n}\n\np {\n  font-size: 14px;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvbmVtZS1xdWl6L3Bob25lbWUtcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix3REFBd0Q7QUFDMUQ7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseURBQXlEO0FBQzNEOztBQUVBLFNBQVM7O0FBQ1Q7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxZQUFZOztBQUNaO0lBQ0ksK0RBQTJGO0lBQzNGLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bob25lbWUtcXVpei9waG9uZW1lLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuI3NpZGUtbWVudSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQ7XG59XG5cbiNtYWluLWJvZHkge1xuICB3aWR0aDogMTY5Ljd2aDtcbiAgaGVpZ2h0OiAwdmg7XG4gIHBhZGRpbmctbGVmdDogMTd2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wdXp6bGUtcGFuZSB7XG4gICAgaGVpZ2h0OiA5MDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ4dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZjZmODtcbn1cblxuLnB1enpsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzNnZoO1xuICAgIGhlaWdodDogNDh2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlY2VlO1xufVxuXG4ucHV6emxlLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAzNnZoO1xuICAgIGhlaWdodDogNDh2aDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4udmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxldHRlciB7XG4gIGZvbnQtc2l6ZTogMTkuNHZoO1xuICBwYWRkaW5nLXRvcDogLTEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbjo6bmctZGVlcCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ud29yZC1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNnZoO1xuICB3aWR0aDogMzB2aDtcbiAgaGVpZ2h0OiAzMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ud29yZC1pbWFnZS10b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLndvcmQtaW1hZ2UtYm90dG9tIHtcbiAgICBtYXJnaW4tbGVmdDogMTB2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdmg7XG59XG5cbi5hbmltYXRlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC43NXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMik7XG59XG5cbi5hbmltYXRlLWRlZmF1bHQge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uYW5pbWF0ZS1vbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xufVxuLmFuaW1hdGUtdHdvIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cbi5hbmltYXRlLXRocmVlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cblxuLmFuaW1hdGUtcHV6emxlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cblxuLmV4LXRlbXAxLFxuLmV4LXRlbXAyLFxuLmV4LXRlbXAzIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmFuaW1hdGVFeDEge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxN3ZoKSBzY2FsZSgxLjEyKSAhaW1wb3J0YW50O1xufVxuLmFuaW1hdGVFeDIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIxdmgsIC0xN3ZoKSBzY2FsZSgxLjEyKSAhaW1wb3J0YW50O1xufVxuLmFuaW1hdGVFeDMge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMXZoLCAtMTd2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcbn1cblxuLyogVGV4dCAqL1xuaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbiNmb3J3YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9mb3J3YXJkLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/phoneme-quiz/phoneme-quiz.component.ts ***!
  \**************************************************************/
/*! exports provided: PhonemeQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeQuizComponent", function() { return PhonemeQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/json/bad-assets.json */ "./src/assets/json/bad-assets.json");
var _assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/bad-assets.json */ "./src/assets/json/bad-assets.json", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_phonemes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/phonemes.service */ "./src/app/services/phonemes.service.ts");











let PhonemeQuizComponent = class PhonemeQuizComponent {
    constructor(transferService, phonemeProgressService, router, location, activatedRoute, phonemesService, changeDetectorRef) {
        this.transferService = transferService;
        this.phonemeProgressService = phonemeProgressService;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.phonemesService = phonemesService;
        this.changeDetectorRef = changeDetectorRef;
        this.begin = false;
        this.puzzlePieceImages = [];
        this.piecesToAnimate = 0;
        this.puzzleAnimate = false;
        this.puzzleComplete = false;
        this.quizAll = this.activatedRoute.snapshot.queryParamMap.get('quizAll');
        this.grade = this.activatedRoute.snapshot.queryParamMap.get('grade');
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
        // Sets random phoneme if selected Quiz-all function
        if (this.quizAll === 'true') {
            let list = this.activatedRoute.snapshot.queryParamMap.get('list');
            this.list = list;
            // Chooses a random phoneme that belongs in its category
            var key = 0;
            if (this.grade) {
                this.data = this.phonemesService.dataLoad(list, this.grade, false);
            }
            else {
                this.data = this.phonemesService.dataLoad(list, '', false);
            }
            if (!list || list === '') {
                this.router.navigate(['']);
            }
            else {
                key = Math.floor(Math.random() * this.data.length);
            }
            this.phoneme = this.data[key];
            this.puzzleimg = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id + '/puzzle-' + this.phoneme.id + '-composite.png';
            this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',');
        }
        else {
            this.phoneme = this.transferService.getData();
            this.puzzleimg = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id + '/puzzle-' + this.phoneme.id + '-composite.png';
            this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',');
        }
        this.puzzleDirectory = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id;
        this.phonemePlayAudio = true;
        this.phonemeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 2; j++) {
                this.puzzlePieceImages.push(this.puzzleDirectory + '/puzzle-' + this.phoneme.id + '-row' + i + '-col' + j + '.png');
            }
        }
        // Random number generator that accepts a seed
        var LCG = s => () => (Math.pow(2, 31) - 1 & (s = Math.imul(48271, s))) / Math.pow(2, 31);
        // Generate seed for rng based on phoneme id
        var hashCode = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
        var hash = hashCode(this.phoneme.id);
        var rng = LCG(hash);
        // Shuffle order of puzzle pieces being displayed
        this.puzzlePieceImages.sort(function () { return rng() - 0.5; });
    }
    goBack() {
        this.transferService.setData(this.phoneme);
        window.history.go(-1);
    }
    ngOnInit() {
        this.phoneme.puzzlePiecesEarned = this.phonemeProgressService.getPuzzlePieces(this.phoneme.id);
        if (this.phoneme.puzzlePiecesEarned == 12) {
            this.puzzleComplete = true;
        }
        //Generate list of long vowel words for screening vowel sound phonemes
        this.longVowelList = [];
        //Only generate the list if the phoneme selected is a vowel sound
        if (this.phoneme.category.includes("V-long") || this.phoneme.category.includes("V-short")) {
            _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__.forEach(element => {
                if (element["category"].includes("V-long") && !element["id"].includes(this.phoneme.id.charAt(0))) {
                    this.longVowelList = [].concat(this.longVowelList, element["quiz-words"]);
                }
            });
        }
        this.correctAudio = new Audio();
        this.correctAudio.src = '/assets/audio/buttons/correct.mp3';
        this.correctAudio.load();
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = this.phoneme.audio;
        this.phonemeAudio.load();
        this.ex1Audio = new Audio();
        this.ex2Audio = new Audio();
        this.ex3Audio = new Audio();
        this.correctAnswer = Math.floor(Math.random() * 3);
        var examples = this.generateExamples();
        var temp = examples[this.correctAnswer];
        examples[this.correctAnswer] = examples[0];
        examples[0] = temp;
        this.img1 = '/assets/img/sight-words/' + examples[0].replace(/\s/g, '') + '.png';
        this.img2 = '/assets/img/sight-words/' + examples[1].replace(/\s/g, '') + '.png';
        this.img3 = '/assets/img/sight-words/' + examples[2].replace(/\s/g, '') + '.png';
        this.ex1Audio.src = '/assets/audio/sight-words/' + examples[0].replace(/\s/g, '') + '.mp3';
        this.ex2Audio.src = '/assets/audio/sight-words/' + examples[1].replace(/\s/g, '') + '.mp3';
        this.ex3Audio.src = '/assets/audio/sight-words/' + examples[2].replace(/\s/g, '') + '.mp3';
        this.ex1Audio.load();
        this.ex2Audio.load();
        this.ex3Audio.load();
        this.playAudio();
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.ex1Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex1Audio.play();
            });
        };
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex2Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex2Audio.play();
            });
        };
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex3Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex3Audio.play();
            });
        };
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.isFirstAttempt = true;
        this.hasGuessed = false;
    }
    ngAfterViewInit() {
        if (this.capital) {
            var temp = document.getElementById('main-body');
            temp.style.textTransform = 'uppercase';
        }
    }
    ngOnDestroy() {
        this.phonemeAudio.pause();
        this.phonemeAudio = null;
        this.phonemeAnimate = false;
        this.ex1Audio.pause();
        this.ex1Audio = null;
        this.ex1Animate = false;
        this.ex2Audio.pause();
        this.ex2Audio = null;
        this.ex2Animate = false;
        this.ex3Audio.pause();
        this.ex3Audio = null;
        this.ex3Animate = false;
        if (this.rhymeAudio) {
            this.rhymeAudio.pause();
            this.rhymeAudio = null;
        }
    }
    stopAudioAndAnimation() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        this.phonemeAnimate = false;
        this.ex1Audio.pause();
        this.ex1Audio.currentTime = 0;
        this.ex1Animate = false;
        this.ex2Audio.pause();
        this.ex2Audio.currentTime = 0;
        this.ex2Animate = false;
        this.ex3Audio.pause();
        this.ex3Audio.currentTime = 0;
        this.ex3Animate = false;
    }
    playAudio() {
        this.stopAudioAndAnimation();
        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }
    playPhonemeAudio() {
        this.phonemeAnimate = true;
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.phonemeAudio.onended = () => {
                this.phonemeAnimate = false;
                this.ex1Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex1Audio.play();
                });
            };
        };
        this.phonemeAudio.play();
    }
    onCorrect() {
        var initialPuzzlePieces = this.phoneme.puzzlePiecesEarned;
        if (this.isFirstAttempt) {
            this.phonemeProgressService.addPuzzlePieces(this.phoneme.id, 2);
            this.phonemeProgressService.addCoins("phoneme" + this.phoneme.id, 2);
            //add stars to progress if select correct phoneme on first attempt
            this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "gold", 1);
            if (this.phonemeProgressService.getSilverStarsFromKey("phoneme" + this.phoneme.id) > 0) {
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "silv", -1);
            }
        }
        else {
            this.phonemeProgressService.addPuzzlePieces(this.phoneme.id, 1);
            this.phonemeProgressService.addCoins("phoneme" + this.phoneme.id, 1);
        }
        this.phoneme.puzzlePiecesEarned = this.phonemeProgressService.getPuzzlePieces(this.phoneme.id);
        this.piecesToAnimate = this.phoneme.puzzlePiecesEarned - initialPuzzlePieces;
        if (this.correctAnswer == 0) {
            this.ex1CorrectAnimate = true;
        }
        else if (this.correctAnswer == 1) {
            this.ex2CorrectAnimate = true;
        }
        else if (this.correctAnswer == 2) {
            this.ex3CorrectAnimate = true;
        }
        Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(200).then(() => {
            this.correctAudio.play();
        });
        this.correctAudio.onended = () => {
            this.ex1CorrectAnimate = false;
            this.ex2CorrectAnimate = false;
            this.ex3CorrectAnimate = false;
        };
        if (this.phoneme.puzzlePiecesEarned == 12) {
            // Add checkmark
            this.phonemeProgressService.setCheckMark("phoneme" + this.phoneme.id, true);
            // Update puzzle view
            this.puzzleAnimate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(900).then(() => {
                this.puzzleAnimate = false;
                this.changeDetectorRef.detectChanges();
            });
            if (this.puzzleComplete == false) {
                //Navigate to rhyme page
                this.transferService.setData(this.phoneme);
                this.router.navigate(['puzzle'], { queryParams: { 'from': 'quiz' } });
            }
            else {
                this.puzzleComplete = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000).then(() => {
                    this.loadNew();
                });
            }
        }
        else {
            // Update puzzle view
            this.puzzleAnimate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(900).then(() => {
                this.puzzleAnimate = false;
                this.changeDetectorRef.detectChanges();
            });
            this.isFirstAttempt = true;
            // Update examples
            if (this.quizAll) {
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(900).then(() => {
                    window.location.reload();
                });
            }
            else {
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(1500).then(() => {
                    this.loadNew();
                });
            }
        }
    }
    loadNew() {
        this.correctAnswer = Math.floor(Math.random() * 3);
        var examples = this.generateExamples();
        var temp = examples[this.correctAnswer];
        examples[this.correctAnswer] = examples[0];
        examples[0] = temp;
        this.img1 = '/assets/img/sight-words/' + examples[0] + '.png';
        this.img2 = '/assets/img/sight-words/' + examples[1] + '.png';
        this.img3 = '/assets/img/sight-words/' + examples[2] + '.png';
        this.ex1Audio.src = '/assets/audio/sight-words/' + examples[0] + '.mp3';
        this.ex2Audio.src = '/assets/audio/sight-words/' + examples[1] + '.mp3';
        this.ex3Audio.src = '/assets/audio/sight-words/' + examples[2] + '.mp3';
        this.ex1Audio.load();
        this.ex2Audio.load();
        this.ex3Audio.load();
        this.playAudio();
    }
    generateExamples() {
        var positiveExamples = this.phoneme.quizWords;
        positiveExamples.concat(positiveExamples, [
            this.phoneme.word1.word,
            this.phoneme.word2.word,
            this.phoneme.word3.word
        ]);
        var positiveExample;
        do {
            positiveExample = positiveExamples[Math.floor(Math.random() * positiveExamples.length)];
        } while (_assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7__.includes(positiveExample));
        return [
            positiveExample,
            this.generateNegativeExample(positiveExamples),
            this.generateNegativeExample(positiveExamples)
        ];
    }
    isValidNegativeExample(example, positiveExamples) {
        //Lockout for long/short vowels to make sure they don't have to go through the checks
        if (this.phoneme.category.includes("V-short") || this.phoneme.category.includes("V-long")) {
            return true; //returns true because the logic in the making of the list has been checked
        }
        if (example.includes(this.phoneme.id.charAt(0).toLowerCase)) {
            return false;
        }
        if ((this.phoneme.id == "G-GH" || this.phoneme.id.includes("F-fuh") || this.phoneme.id.includes("P-PH")) && (example.includes("f") || example.includes("ph") || example.includes("gh"))) {
            return false;
        }
        if ((this.phoneme.id.includes("Z-zzz") || this.phoneme.id == "S-zz" || this.phoneme.id == "S-SC-silent") && (example.includes("s") || example.includes("z"))) {
            return false;
        }
        if ((this.phoneme.id == "A-AI" || this.phoneme.id == "E-EI") && (example.includes("ei") || example.includes("a"))) {
            return false;
        }
        if ((this.phoneme.id == "A-AU" || this.phoneme.id == "A-AW") && (example.includes("o") || example.includes("a"))) {
            return false;
        }
        if (this.phoneme.id == "A-AY" && example.includes("a")) {
            return false;
        }
        if (this.phoneme.id == "C-sss" && example.includes("s")) {
            return false;
        }
        if ((this.phoneme.id.includes("C-CK") || this.phoneme.id.includes("K-kuh")) && (example.includes("c") || example.includes("k"))) {
            return false;
        }
        if (this.phoneme.category.includes("E") && example.includes("e")) {
            return false;
        }
        if (this.phoneme.id.includes("E-E") && (example.includes('e') || example.includes('a'))) {
            return false;
        }
        if (this.phoneme.category.includes("R") && example.includes("r")) {
            return false;
        }
        if (this.phoneme.id.includes("E-ET") && example.includes('et')) {
            return false;
        }
        if (this.phoneme.id == "E-EW" && (example.includes("o") || example.includes("u"))) {
            return false;
        }
        if ((this.phoneme.id.includes("N-silent") || this.phoneme.id.includes("N-nnn")) && example.includes("n")) {
            return false;
        }
        if (this.phoneme.id.charAt(0) == "I" && (example.includes("i") || example.includes("e"))) {
            return false;
        }
        if (this.phoneme.id == "L-LE" && example.includes("l")) {
            return false;
        }
        if ((this.phoneme.id == "M-MB-silent" || this.phoneme.id.includes("M-mmm")) && example.includes("m")) {
            return false;
        }
        if (this.phoneme.id.includes("O") && (example.includes("o") || example.includes("u"))) {
            return false;
        }
        if (this.phoneme.id == "T-TCH-silent" && example.includes("ch")) {
            return false;
        }
        if (this.phoneme.id.includes("TH") && example.includes("th")) {
            return false;
        }
        if (this.phoneme.id.includes("W-W") && example.includes("w")) {
            return false;
        }
        if (this.phoneme.id == "W-WR-silent" && example.includes("r")) {
            return false;
        }
        if (this.phoneme.category.includes("Y") && (example.includes("e") || example.includes("i"))) {
            return false;
        }
        return !positiveExamples.includes(example) && !example.includes(this.phoneme.display) && !_assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7__.includes(example);
    }
    generateNegativeExample(positiveExamples) {
        var example;
        do {
            example = this.randomQuizWord();
        } while (!this.isValidNegativeExample(example, positiveExamples));
        return example;
    }
    randomQuizWord() {
        var quizWords = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__[Math.floor(Math.random() * _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__.length)]["quiz-words"];
        //Use only the long vowel list if the quiz phoneme is a vowel sound
        if (this.phoneme.category.includes("V-long") || this.phoneme.category.includes("V-short")) {
            quizWords = this.longVowelList;
        }
        return quizWords[Math.floor(Math.random() * quizWords.length)];
    }
    onClick1() {
        if (this.correctAnswer == 0) {
            this.onCorrect();
        }
        else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }
    onClick2() {
        if (this.correctAnswer == 1) {
            this.onCorrect();
        }
        else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }
    onClick3() {
        if (this.correctAnswer == 2) {
            this.onCorrect();
        }
        else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }
    incorrectAnswer() {
        if (!this.hasGuessed) {
            this.hasGuessed = true;
            this.isFirstAttempt = false;
            const goldStarNum = this.phonemeProgressService.getGoldStarsFromKey("phoneme" + this.phoneme.id);
            if (goldStarNum > 0 && goldStarNum < 5) {
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "gold", -1);
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "silv", 1);
            }
        }
        this.phonemeProgressService.addIncorrectAnswer('phoneme' + this.phoneme.id);
    }
};
PhonemeQuizComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__["TransferLetterService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_phonemes_service__WEBPACK_IMPORTED_MODULE_9__["PhonemesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PhonemeQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-quiz/phoneme-quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-quiz.component.css */ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.css")).default]
    })
], PhonemeQuizComponent);



/***/ }),

/***/ "./src/app/pages/prek-categories/index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/prek-categories/index.ts ***!
  \************************************************/
/*! exports provided: PrekCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _prek_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prek-categories.component */ "./src/app/pages/prek-categories/prek-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrekCategoriesComponent", function() { return _prek_categories_component__WEBPACK_IMPORTED_MODULE_1__["PrekCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/pages/prek-categories/prek-categories.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/prek-categories/prek-categories.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('prek_categories.png') no-repeat scroll transparent;\n    background-position: 19vh 4vh;\n    background-size: 173vh;\n}\n\n/* Phonics Categories */\n\n#names_lowercase_bmras {\n    background: url('names_lowercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    margin-top: 23vh;\n    cursor: pointer;\n}\n\n#sounds_lowercase_bmras {\n    background: url('sounds_lowercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n}\n\n#names_lowercase_alphabetical {\n    background: url('names_lowercase_alphabetical.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n}\n\n#sounds_lowercase_alphabetical {\n    background: url('sounds_lowercase_alphabetical.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n}\n\n#names_uppercase_bmras {\n    background: url('names_uppercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n}\n\n#sounds_uppercase_bmras {\n    background: url('sounds_uppercase_bmras.png') no-repeat scroll transparent;\n    background-size: 52vh;\n    cursor: pointer;\n    margin-left: 6.5vh;\n}\n\n#names_uppercase_alphabetical {\n  background: url('names_uppercase_alphabetical.png') no-repeat scroll transparent;\n  background-size: 52vh;\n  cursor: pointer;\n}\n\n#sounds_uppercase_alphabetical {\n  background: url('sounds_uppercase_alphabetical.png') no-repeat scroll transparent;\n  background-size: 52vh;\n  cursor: pointer;\n  margin-left: 6.5vh;\n}\n\n.category_button {\n    width: 52vh;\n    height: 13vh;\n    margin: 4vh 0vh 0vh 5vh;\n    border: none;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlay1jYXRlZ29yaWVzL3ByZWstY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1FQUFtRztJQUNuRyw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSx5RUFBcUc7SUFDckcscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksMEVBQXNHO0lBQ3RHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0ZBQTRHO0lBQzVHLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUZBQTZHO0lBQzdHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUVBQXFHO0lBQ3JHLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksMEVBQXNHO0lBQ3RHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UsZ0ZBQTRHO0VBQzVHLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUZBQTZHO0VBQzdHLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVrLWNhdGVnb3JpZXMvcHJlay1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvcHJla19jYXRlZ29yaWVzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTl2aCA0dmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNzN2aDtcbn1cblxuLyogUGhvbmljcyBDYXRlZ29yaWVzICovXG4jbmFtZXNfbG93ZXJjYXNlX2JtcmFzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9uYW1lc19sb3dlcmNhc2VfYm1yYXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgbWFyZ2luLXRvcDogMjN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc291bmRzX2xvd2VyY2FzZV9ibXJhcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc291bmRzX2xvd2VyY2FzZV9ibXJhcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTJ2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDYuNXZoO1xufVxuI25hbWVzX2xvd2VyY2FzZV9hbHBoYWJldGljYWwge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL25hbWVzX2xvd2VyY2FzZV9hbHBoYWJldGljYWwucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NvdW5kc19sb3dlcmNhc2VfYWxwaGFiZXRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zb3VuZHNfbG93ZXJjYXNlX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTJ2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDYuNXZoO1xufVxuI25hbWVzX3VwcGVyY2FzZV9ibXJhcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvbmFtZXNfdXBwZXJjYXNlX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzb3VuZHNfdXBwZXJjYXNlX2JtcmFzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zb3VuZHNfdXBwZXJjYXNlX2JtcmFzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNi41dmg7XG59XG4jbmFtZXNfdXBwZXJjYXNlX2FscGhhYmV0aWNhbCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL25hbWVzX3VwcGVyY2FzZV9hbHBoYWJldGljYWwucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MnZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc291bmRzX3VwcGVyY2FzZV9hbHBoYWJldGljYWwge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zb3VuZHNfdXBwZXJjYXNlX2FscGhhYmV0aWNhbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUydmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDYuNXZoO1xufVxuXG4uY2F0ZWdvcnlfYnV0dG9uIHtcbiAgICB3aWR0aDogNTJ2aDtcbiAgICBoZWlnaHQ6IDEzdmg7XG4gICAgbWFyZ2luOiA0dmggMHZoIDB2aCA1dmg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY29sdW1uIHtcbiAgICBwYWRkaW5nLXRvcDogMi41dmg7XG59XG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5jb2x1bW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/prek-categories/prek-categories.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/prek-categories/prek-categories.component.ts ***!
  \********************************************************************/
/*! exports provided: PrekCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrekCategoriesComponent", function() { return PrekCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let PrekCategoriesComponent = class PrekCategoriesComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
PrekCategoriesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
PrekCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prek-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prek-categories/prek-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prek-categories.component.css */ "./src/app/pages/prek-categories/prek-categories.component.css")).default]
    })
], PrekCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/puzzle/puzzle.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/puzzle/puzzle.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 22vh;\n    position: relative;\n}\n\n#puzzle-image {\n    width: 68vh;\n    height: 90vh;\n    margin: 3vh 0 0 10vh;\n    vertical-align: middle;\n}\n\n.rhyme-small {\n    font-family: Arial, Helvetica, sans-serif !important;\n    display: inline-block;\n    text-align: left;\n    width: auto;\n    font-size: 3.3vh;\n    margin: 3vh 0 0 5vh;\n    vertical-align: middle;\n    line-height: 5.5vh;\n}\n\n.rhyme-medium {\n    font-family: Arial, Helvetica, sans-serif !important;\n    display: inline-block;\n    text-align: left;\n    width: auto;\n    font-size: 3vh;\n    margin: 3vh 0 0 5vh;\n    vertical-align: middle;\n    line-height: 5vh;\n}\n\n.rhyme-large {\n    font-family: Arial, Helvetica, sans-serif !important;\n    display: inline-block;\n    text-align: left;\n    width: auto;\n    font-size: 2.8vh;\n    margin: 3vh 0 0 5vh;\n    vertical-align: middle;\n    line-height: 4.5vh;\n}\n\n.rhyme-xlarge {\n    font-family: Arial, Helvetica, sans-serif !important;\n    display: inline-block;\n    text-align: left;\n    width: auto;\n    font-size: 2vh;\n    margin: 3vh 0 0 5vh;\n    vertical-align: middle;\n    line-height: 3.5vh;\n}\n\n.rhyme-small ::ng-deep span,\n.rhyme-medium ::ng-deep span,\n.rhyme-large ::ng-deep span,\n.rhyme-xlarge ::ng-deep span {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n\n.rhyme-small ::ng-deep i,\n.rhyme-medium ::ng-deep i,\n.rhyme-large ::ng-deep i,\n.rhyme-xlarge ::ng-deep i {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHV6emxlL3B1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG9EQUFvRDtJQUNwRCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxvREFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksb0RBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLFVBQVU7SUFDVixvREFBb0Q7QUFDeEQ7O0FBRUE7Ozs7SUFJSSxvREFBb0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuI3NpZGUtbWVudSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQgIWltcG9ydGFudDtcbn1cblxuI21haW4tYm9keSB7XG4gICAgd2lkdGg6IDE2OS43dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3B1enpsZS1pbWFnZSB7XG4gICAgd2lkdGg6IDY4dmg7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1hcmdpbjogM3ZoIDAgMCAxMHZoO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5yaHltZS1zbWFsbCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmb250LXNpemU6IDMuM3ZoO1xuICAgIG1hcmdpbjogM3ZoIDAgMCA1dmg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNS41dmg7XG59XG4ucmh5bWUtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIG1hcmdpbjogM3ZoIDAgMCA1dmg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNXZoO1xufVxuLnJoeW1lLWxhcmdlIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMi44dmg7XG4gICAgbWFyZ2luOiAzdmggMCAwIDV2aDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA0LjV2aDtcbn1cbi5yaHltZS14bGFyZ2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgbWFyZ2luOiAzdmggMCAwIDV2aDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjV2aDtcbn1cblxuLnJoeW1lLXNtYWxsIDo6bmctZGVlcCBzcGFuLFxuLnJoeW1lLW1lZGl1bSA6Om5nLWRlZXAgc3Bhbixcbi5yaHltZS1sYXJnZSA6Om5nLWRlZXAgc3Bhbixcbi5yaHltZS14bGFyZ2UgOjpuZy1kZWVwIHNwYW4ge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLnJoeW1lLXNtYWxsIDo6bmctZGVlcCBpLFxuLnJoeW1lLW1lZGl1bSA6Om5nLWRlZXAgaSxcbi5yaHltZS1sYXJnZSA6Om5nLWRlZXAgaSxcbi5yaHltZS14bGFyZ2UgOjpuZy1kZWVwIGkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/puzzle/puzzle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/puzzle/puzzle.component.ts ***!
  \**************************************************/
/*! exports provided: PuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function() { return PuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PuzzleComponent = class PuzzleComponent {
    constructor(transferService, location, router, activatedRoute) {
        this.transferService = transferService;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        let from = this.activatedRoute.snapshot.queryParamMap.get('from');
        // get phoneme data
        this.phoneme = this.transferService.getData();
        console.log(this.phoneme.id);
        if (this.phoneme.id === 'C-CK' || this.phoneme.id === 'M-MP' || this.phoneme.id === 'N-NT') {
            this.medium = true;
        }
        else if (this.phoneme.id == 'P-PH-begin' || this.phoneme.id === 'S-ST-end' || this.phoneme.id === 'O-OST-short' || this.phoneme.id === 'N-ND' || this.phoneme.id === 'T-the') {
            this.large = true;
        }
        else if (this.phoneme.id === 'T-TH-end') {
            this.xlarge = true;
        }
        else {
            this.small = true;
        }
        this.img = '../../assets/img/puzzle-pieces/original-composites/puzzle-' + this.phoneme.id + '-composite.png';
        this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',').replace(/\[/g, '(').replace(/]/g, ')');
        // play audio
        this.rhyme = new Audio();
        this.rhyme.src = '../../assets/audio/rhymes/puzzle-' + this.phoneme.id + '-rhyme.mp3';
        this.rhyme.load();
        if (from == 'quiz') {
            this.rhyme.onended = () => {
                this.goBack();
            };
        }
        this.playAudio();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.phoneme.id === 'C-CK') {
            var background = document.getElementById('background');
            var mainBody = document.getElementById('main-body');
            background.style.width = '197vh';
            mainBody.style.width = '176vh';
        }
    }
    ngOnDestroy() {
        this.rhyme.pause();
        this.rhyme = null;
    }
    playAudio() {
        this.rhyme.pause();
        this.rhyme.currentTime = 0;
        this.rhyme.play();
    }
    goBack() {
        this.transferService.setData(this.phoneme);
        this.location.back();
    }
};
PuzzleComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__["TransferLetterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puzzle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzle/puzzle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puzzle.component.css */ "./src/app/pages/puzzle/puzzle.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PuzzleComponent);



/***/ }),

/***/ "./src/app/pages/puzzles/puzzles.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/puzzles/puzzles.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n  background-color: #FFFFFF !important;\n  overflow: visible !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n    width: 164vh;\n    height: 0vh;\n    padding-left: 17vh;\n    position: relative;\n  }\n\n.cardList {\n    display: flex;\n    height: 97vh;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    overflow-x: scroll;\n}\n\n/* Item sizing */\n\n.cardListItem {\n  width: 30vh;\n  height: 39vh;\n  margin-top: 3.5vh;\n  margin-left: 4vh;\n  cursor: pointer;\n  border: none;\n  background-color: #ECF9EF;\n  font-size: 9vh;\n  text-align: center;\n}\n\n.cardListItem p {\n  margin-top: 13vh;\n}\n\n#background {\n  overflow: visible;\n}\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  height: 9.5vh;\n  background-color: #e6f6f7;\n  box-shadow: 0vh 0vh .3vh rgba(0,0,0,0.3);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #60a0bd;\n  border: 0.5vh solid #fff;\n  border-radius: 1.5vh;\n  box-shadow: 0vh 0vh .3vh rgba(0,0,0,0.3);\n}\n\n::-webkit-scrollbar-button {\n  background-size: 100%;\n  border: 0.5vh solid #fff;\n  border-radius: 1.5vh;\n  width: 9.5vh;\n  background-color: #60a0bd;\n  box-shadow: 0vh 0vh .3vh rgba(0,0,0,0.3);\n}\n\n::-webkit-scrollbar-button:decrement {\n  background-image: url('scroll-left.png');\n  background-position: center;\n}\n\n::-webkit-scrollbar-button:increment {\n  background-image: url('scroll-right.png');\n  background-position: center;\n}\n\n::-webkit-scrollbar-button:increment:start,\n::-webkit-scrollbar-button:decrement:end {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHV6emxlcy9wdXp6bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQzs7QUFDQTtFQUNFLHdDQUFvRTtFQUNwRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSx5Q0FBcUU7RUFDckUsMkJBQTJCO0FBQzdCOztBQUNBOztFQUVFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1enpsZXMvcHV6emxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlLW1lbnUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDN0Q0ICFpbXBvcnRhbnQ7XG59XG5cbiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjR2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3dmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbi5jYXJkTGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDk3dmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLyogSXRlbSBzaXppbmcgKi9cbi5jYXJkTGlzdEl0ZW0ge1xuICB3aWR0aDogMzB2aDtcbiAgaGVpZ2h0OiAzOXZoO1xuICBtYXJnaW4tdG9wOiAzLjV2aDtcbiAgbWFyZ2luLWxlZnQ6IDR2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0Y5RUY7XG4gIGZvbnQtc2l6ZTogOXZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkTGlzdEl0ZW0gcCB7XG4gIG1hcmdpbi10b3A6IDEzdmg7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qIFNjcm9sbGJhciAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiA5LjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjZmNztcbiAgYm94LXNoYWRvdzogMHZoIDB2aCAuM3ZoIHJnYmEoMCwwLDAsMC4zKTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBhMGJkO1xuICBib3JkZXI6IDAuNXZoIHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xuICBib3gtc2hhZG93OiAwdmggMHZoIC4zdmggcmdiYSgwLDAsMCwwLjMpO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJvcmRlcjogMC41dmggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMS41dmg7XG4gIHdpZHRoOiA5LjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYTBiZDtcbiAgYm94LXNoYWRvdzogMHZoIDB2aCAuM3ZoIHJnYmEoMCwwLDAsMC4zKTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmRlY3JlbWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3Njcm9sbC1sZWZ0LnBuZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zY3JvbGwtcmlnaHQucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmluY3JlbWVudDpzdGFydCxcbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmRlY3JlbWVudDplbmQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/puzzles/puzzles.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/puzzles/puzzles.component.ts ***!
  \****************************************************/
/*! exports provided: PuzzlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzlesComponent", function() { return PuzzlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_phonemes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/phonemes.service */ "./src/app/services/phonemes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");







let PuzzlesComponent = class PuzzlesComponent {
    constructor(transferLetterService, phonemesService, progressService, router, activatedRoute, location) {
        this.transferLetterService = transferLetterService;
        this.phonemesService = phonemesService;
        this.progressService = progressService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        // load phonemes data
        this.data = this.phonemesService.dataLoad('phoneme', '', false);
        console.log(this.data);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // set background for completed puzzles
        for (var i = 0; i < this.progressService.getPuzzles().length; i++) {
            document.getElementById(this.progressService.getPuzzles()[i]).style.background = "url('../../assets/img/puzzle-pieces/puzzle-" + this.progressService.getPuzzles()[i] + "/puzzle-" + this.progressService.getPuzzles()[i] + "-composite.png')";
            document.getElementById(this.progressService.getPuzzles()[i]).style.backgroundSize = '30vh 39vh';
            document.getElementById(this.progressService.getPuzzles()[i]).style.color = 'transparent';
        }
    }
    getDisplay(item) {
        return item.display;
    }
    select(item) {
        this.transferLetterService.setData(item);
        if (this.progressService.getGoldStarsFromKey('phoneme' + item.id) == 5) {
            this.router.navigate(['puzzle']);
        }
        else {
            this.router.navigate(['phoneme-learn']);
        }
    }
    goBack() {
        this.location.back();
    }
    setID(item) {
        return item.id;
    }
};
PuzzlesComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__["TransferLetterService"] },
    { type: _services_phonemes_service__WEBPACK_IMPORTED_MODULE_3__["PhonemesService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_6__["ProgressService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
PuzzlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puzzles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzles/puzzles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puzzles.component.css */ "./src/app/pages/puzzles/puzzles.component.css")).default]
    })
], PuzzlesComponent);



/***/ }),

/***/ "./src/app/pages/second-categories/index.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/second-categories/index.ts ***!
  \**************************************************/
/*! exports provided: SecondCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _second_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-categories.component */ "./src/app/pages/second-categories/second-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondCategoriesComponent", function() { return _second_categories_component__WEBPACK_IMPORTED_MODULE_1__["SecondCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/pages/second-categories/second-categories.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-categories.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('second_categories.png') no-repeat scroll transparent;\n    background-position: center top;\n    background-size: 160vh;\n}\n\n/* Phonics Categories */\n\n#consonants {\n    background: url('second_consonants.png') no-repeat scroll transparent;\n    background-size: 50vh;\n    margin-top: 22vh;\n    background-position: center;\n    cursor: pointer;\n}\n\n#vowels {\n    background: url('second_vowels.png') no-repeat scroll transparent;\n    background-size: 50vh;\n    background-position: center;\n    cursor: pointer;\n}\n\n.category_button {\n    width: 50vh;\n    height: 22vh;\n    margin: 12vh 0vh 0vh 33vh;\n    border: none;\n    display: inherit;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vjb25kLWNhdGVnb3JpZXMvc2Vjb25kLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxxRUFBcUc7SUFDckcsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0lBQ0kscUVBQWlHO0lBQ2pHLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpRUFBNkY7SUFDN0YscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWNvbmQtY2F0ZWdvcmllcy9zZWNvbmQtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gICAgd2lkdGg6IDE2OS43dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvc2Vjb25kX2NhdGVnb3JpZXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwdmg7XG59XG4gIFxuLyogUGhvbmljcyBDYXRlZ29yaWVzICovXG4jY29uc29uYW50cyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX2NvbnNvbmFudHMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwdmg7XG4gICAgbWFyZ2luLXRvcDogMjJ2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3Zvd2VscyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX3Zvd2Vscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTB2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiA1MHZoO1xuICAgIGhlaWdodDogMjJ2aDtcbiAgICBtYXJnaW46IDEydmggMHZoIDB2aCAzM3ZoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xufVxuXG4uY29sdW1uIHtcbiAgICBwYWRkaW5nLXRvcDogMi41dmg7XG59XG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5jb2x1bW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/second-categories/second-categories.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-categories.component.ts ***!
  \************************************************************************/
/*! exports provided: SecondCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondCategoriesComponent", function() { return SecondCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SecondCategoriesComponent = class SecondCategoriesComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        this.category = new Audio();
        this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
    goBack() {
        this.location.back();
    }
};
SecondCategoriesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SecondCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./second-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./second-categories.component.css */ "./src/app/pages/second-categories/second-categories.component.css")).default]
    })
], SecondCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/second-categories/second-consonants-details/index.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-consonants-details/index.ts ***!
  \****************************************************************************/
/*! exports provided: SecondConsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _second_consonants_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-consonants-details.component */ "./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondConsonantsDetailsComponent", function() { return _second_consonants_details_component__WEBPACK_IMPORTED_MODULE_1__["SecondConsonantsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('second_consonants_details.png') no-repeat scroll transparent;\n    background-position: 19vh 2vh;\n    background-size: 169vh;\n}\n\n/* Phonics Categories */\n\n#beginning-sounds {\n    background: url('second_sound_begin.png') no-repeat scroll transparent;\n    background-size: 65vh;\n    margin: 17.5vh 0vh 0vh -6vh;\n    height: 13.5vh;\n    cursor: pointer;\n    width: 63vh;\n}\n\n#ending-sounds {\n    background: url('second_sound_end.png') no-repeat scroll transparent;\n    background-size: 55vh;\n    margin: 17.5vh 0vh 0vh 33vh;\n    cursor: pointer;\n    height: 13.5vh;\n    width: 54vh;\n}\n\n#cg {\n    background: url('second_cg.png') no-repeat scroll transparent;\n    background-size: 80vh;\n    cursor: pointer;\n    width: 78vh;\n}\n\n#beginning-blends {\n    background: url('second_blend_begin.png') no-repeat scroll transparent;\n    background-size: 61vh;\n    cursor: pointer;\n    width: 59vh;\n}\n\n#ending-blends {\n    background: url('second_blend_end.png') no-repeat scroll transparent;\n    background-size: 50vh;\n    margin-left: 37vh;\n    cursor: pointer;\n    width: 49vh;\n}\n\n#three-letter-blends {\n    background: url('second_blend_3.png') no-repeat scroll transparent;\n    background-size: 60vh;\n    cursor: pointer;\n    width: 58vh;\n}\n\n#silent-consonants {\n  background: url('second_silent.png') no-repeat scroll transparent;\n  background-size: 29vh;\n  margin-left: 38vh;\n  cursor: pointer;\n  width: 28vh;\n}\n\n#beginning-digraphs {\n  background: url('second_digraph_begin.png') no-repeat scroll transparent;\n  background-size: 91.5vh;\n  cursor: pointer;\n  width: 79vh;\n}\n\n#ending-digraphs {\n  background: url('second_digraph_end.png') no-repeat scroll transparent;\n  background-size: 73vh;\n  display: block;\n  cursor: pointer;\n  width: 71vh;\n}\n\n.category_button {\n    height: 10vh;\n    margin: 1.5vh 0vh 0vh -5vh;\n    border: none;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vjb25kLWNhdGVnb3JpZXMvc2Vjb25kLWNvbnNvbmFudHMtZGV0YWlscy9zZWNvbmQtY29uc29uYW50cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkVBQWdIO0lBQ2hILDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUEsdUJBQXVCOztBQUN2QjtJQUNJLHNFQUFxRztJQUNyRyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksb0VBQW1HO0lBQ25HLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSw2REFBNEY7SUFDNUYscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxzRUFBcUc7SUFDckcscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxvRUFBbUc7SUFDbkcscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0VBQWlHO0lBQ2pHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0VBQ0UsaUVBQWdHO0VBQ2hHLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHdFQUF1RztFQUN2Ryx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHNFQUFxRztFQUNyRyxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0EsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vjb25kLWNhdGVnb3JpZXMvc2Vjb25kLWNvbnNvbmFudHMtZGV0YWlscy9zZWNvbmQtY29uc29uYW50cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvc2Vjb25kX2NvbnNvbmFudHNfZGV0YWlscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE5dmggMnZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTY5dmg7XG59XG5cbi8qIFBob25pY3MgQ2F0ZWdvcmllcyAqL1xuI2JlZ2lubmluZy1zb3VuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF9zb3VuZF9iZWdpbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjV2aDtcbiAgICBtYXJnaW46IDE3LjV2aCAwdmggMHZoIC02dmg7XG4gICAgaGVpZ2h0OiAxMy41dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA2M3ZoO1xufVxuI2VuZGluZy1zb3VuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF9zb3VuZF9lbmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU1dmg7XG4gICAgbWFyZ2luOiAxNy41dmggMHZoIDB2aCAzM3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEzLjV2aDtcbiAgICB3aWR0aDogNTR2aDtcbn1cbiNjZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX2NnLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzh2aDtcbn1cbiNiZWdpbm5pbmctYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zZWNvbmRfYmxlbmRfYmVnaW4ucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYxdmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA1OXZoO1xufVxuI2VuZGluZy1ibGVuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF9ibGVuZF9lbmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDM3dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0OXZoO1xufVxuI3RocmVlLWxldHRlci1ibGVuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF9ibGVuZF8zLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNTh2aDtcbn1cbiNzaWxlbnQtY29uc29uYW50cyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF9zaWxlbnQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiAyOXZoO1xuICBtYXJnaW4tbGVmdDogMzh2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMjh2aDtcbn1cbiNiZWdpbm5pbmctZGlncmFwaHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zZWNvbmRfZGlncmFwaF9iZWdpbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkxLjV2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzl2aDtcbn1cbiNlbmRpbmctZGlncmFwaHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zZWNvbmRfZGlncmFwaF9lbmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiA3M3ZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzF2aDtcbn1cblxuLmNhdGVnb3J5X2J1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIG1hcmdpbjogMS41dmggMHZoIDB2aCAtNXZoO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDIuNXZoO1xufVxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4uY29sdW1uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SecondConsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondConsonantsDetailsComponent", function() { return SecondConsonantsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SecondConsonantsDetailsComponent = class SecondConsonantsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
SecondConsonantsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SecondConsonantsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./second-consonants-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./second-consonants-details.component.css */ "./src/app/pages/second-categories/second-consonants-details/second-consonants-details.component.css")).default]
    })
], SecondConsonantsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/second-categories/second-vowels-details/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-vowels-details/index.ts ***!
  \************************************************************************/
/*! exports provided: SecondVowelsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _second_vowels_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-vowels-details.component */ "./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondVowelsDetailsComponent", function() { return _second_vowels_details_component__WEBPACK_IMPORTED_MODULE_1__["SecondVowelsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('third_vowels_details.png') no-repeat scroll transparent;\n    background-position: 14vh 2vh;\n    background-size: 173vh;\n}\n\n/* Phonics Categories */\n\n#short_vowels {\n    background: url('second_vowels_short.png') no-repeat scroll transparent;\n    background-size: 34vh;\n    margin-top: 17vh;\n    cursor: pointer;\n    width: 32vh;\n}\n\n#long_vowels {\n    background: url('second_vowels_long.png') no-repeat scroll transparent;\n    background-size: 30vh;\n    margin: 17vh 0vh 0vh 7vh;\n    cursor: pointer;\n    width: 28vh;\n}\n\n#schwas {\n    background: url('second_vowels_schwa.png') no-repeat scroll transparent;\n    background-size: 41vh;\n    margin-left: 3vh;\n    cursor: pointer;\n    width: 39vh;\n}\n\n#vowel_pairs {\n    background: url('second_vowels_pairs.png') no-repeat scroll transparent;\n    background-size: 33vh;\n    cursor: pointer;\n    width: 31vh;\n}\n\n#y_sounds {\n    background: url('second_vowels_y.png') no-repeat scroll transparent;\n    background-size: 55.5vh;\n    margin-left: 8vh;\n    cursor: pointer;\n    width: 54vh;\n}\n\n#r {\n    background: url('second_vowels_r.png') no-repeat scroll transparent;\n    background-size: 38vh;\n    cursor: pointer;\n    width: 36vh;\n}\n\n.category_button {\n    width: 39vh;\n    height: 15.7vh;\n    margin: 4vh 0vh 0vh 23vh;\n    border: none;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vjb25kLWNhdGVnb3JpZXMvc2Vjb25kLXZvd2Vscy1kZXRhaWxzL3NlY29uZC12b3dlbHMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdFQUEyRztJQUMzRyw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSx1RUFBc0c7SUFDdEcscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksc0VBQXFHO0lBQ3JHLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHVFQUFzRztJQUN0RyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx1RUFBc0c7SUFDdEcscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxtRUFBa0c7SUFDbEcsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksbUVBQWtHO0lBQ2xHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWNvbmQtY2F0ZWdvcmllcy9zZWNvbmQtdm93ZWxzLWRldGFpbHMvc2Vjb25kLXZvd2Vscy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvdGhpcmRfdm93ZWxzX2RldGFpbHMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHZoIDJ2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3M3ZoO1xufVxuXG4vKiBQaG9uaWNzIENhdGVnb3JpZXMgKi9cbiNzaG9ydF92b3dlbHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF92b3dlbHNfc2hvcnQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM0dmg7XG4gICAgbWFyZ2luLXRvcDogMTd2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMydmg7XG59XG4jbG9uZ192b3dlbHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF92b3dlbHNfbG9uZy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzB2aDtcbiAgICBtYXJnaW46IDE3dmggMHZoIDB2aCA3dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyOHZoO1xufVxuI3NjaHdhcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX3Zvd2Vsc19zY2h3YS5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDF2aDtcbiAgICBtYXJnaW4tbGVmdDogM3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMzl2aDtcbn1cbiN2b3dlbF9wYWlycyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX3Zvd2Vsc19wYWlycy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMxdmg7XG59XG4jeV9zb3VuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF92b3dlbHNfeS5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTUuNXZoO1xuICAgIG1hcmdpbi1sZWZ0OiA4dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA1NHZoO1xufVxuI3Ige1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF92b3dlbHNfci5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzh2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDM2dmg7XG59XG5cbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiAzOXZoO1xuICAgIGhlaWdodDogMTUuN3ZoO1xuICAgIG1hcmdpbjogNHZoIDB2aCAwdmggMjN2aDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2x1bW4ge1xuICAgIHBhZGRpbmctdG9wOiAyLjV2aDtcbn1cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLmNvbHVtbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SecondVowelsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondVowelsDetailsComponent", function() { return SecondVowelsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SecondVowelsDetailsComponent = class SecondVowelsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
SecondVowelsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SecondVowelsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./second-vowels-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./second-vowels-details.component.css */ "./src/app/pages/second-categories/second-vowels-details/second-vowels-details.component.css")).default]
    })
], SecondVowelsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/secret-stuff/secret-stuff.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/secret-stuff/secret-stuff.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n  }\n  \n  #secret-stuff {\n    width: 170vh;\n    height: 80vh;\n    margin: 9vh 0vh 0vh -23vh;\n  }\n  \n  #repeat {\n      bottom: 0vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjcmV0LXN0dWZmL3NlY3JldC1zdHVmZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxXQUFXO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWNyZXQtc3R1ZmYvc2VjcmV0LXN0dWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY5Ljd2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjc2VjcmV0LXN0dWZmIHtcbiAgICB3aWR0aDogMTcwdmg7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIG1hcmdpbjogOXZoIDB2aCAwdmggLTIzdmg7XG4gIH1cblxuICAjcmVwZWF0IHtcbiAgICAgIGJvdHRvbTogMHZoO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/secret-stuff/secret-stuff.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/secret-stuff/secret-stuff.component.ts ***!
  \**************************************************************/
/*! exports provided: SecretStuffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretStuffComponent", function() { return SecretStuffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SecretStuffComponent = class SecretStuffComponent {
    constructor(location) {
        this.location = location;
    }
    replayVideo() {
        var temp = document.getElementById('secret-stuff');
        temp.pause();
        temp.currentTime = 0;
        temp.load();
    }
    goBack() {
        this.location.back();
    }
};
SecretStuffComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SecretStuffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secret-stuff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secret-stuff/secret-stuff.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secret-stuff.component.css */ "./src/app/pages/secret-stuff/secret-stuff.component.css")).default]
    })
], SecretStuffComponent);



/***/ }),

/***/ "./src/app/pages/third-categories/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/third-categories/index.ts ***!
  \*************************************************/
/*! exports provided: ThirdCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _third_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-categories.component */ "./src/app/pages/third-categories/third-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThirdCategoriesComponent", function() { return _third_categories_component__WEBPACK_IMPORTED_MODULE_1__["ThirdCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/pages/third-categories/third-categories.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/third-categories/third-categories.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n#background {\n    background-color: #FFFFFF !important;\n    background: url('third_categories.png') no-repeat scroll transparent;\n    background-position: center top;\n    background-size: 148vh;\n}\n  \n/* Phonics Categories */\n  \n#consonants {\n    background: url('second_consonants.png') no-repeat scroll transparent;\n    background-size: 45vh;\n    margin-top: 16vh;\n    background-position: center;\n    cursor: pointer;\n}\n  \n#vowels {\n    background: url('second_vowels.png') no-repeat scroll transparent;\n    background-size: 45vh;\n    background-position: center;\n    cursor: pointer;\n}\n  \n#vowel_consonant_blends {\n    background: url('second_vowelconsonants.png') no-repeat scroll transparent;\n    background-size: 45vh;\n    background-position: center;\n    cursor: pointer;\n}\n  \n.category_button {\n    width: 45vh;\n    height: 19.5vh;\n    margin: 6vh 0vh 0vh 35.5vh;\n    border: none;\n    display: inherit;\n}\n  \n.column {\n    padding-top: 2.5vh;\n}\n  \n/* Clear floats after the columns */\n  \n.column:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGhpcmQtY2F0ZWdvcmllcy90aGlyZC1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxvQ0FBb0M7SUFDcEMsb0VBQW9HO0lBQ3BHLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUEsdUJBQXVCOztBQUN2QjtJQUNJLHFFQUFpRztJQUNqRyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUVBQTZGO0lBQzdGLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDBFQUFzRztJQUN0RyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBLG1DQUFtQzs7QUFDbkM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoaXJkLWNhdGVnb3JpZXMvdGhpcmQtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gICAgd2lkdGg6IDE2OS43dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiNiYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRzL3RoaXJkX2NhdGVnb3JpZXMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTQ4dmg7XG59XG4gIFxuLyogUGhvbmljcyBDYXRlZ29yaWVzICovXG4jY29uc29uYW50cyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX2NvbnNvbmFudHMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1dmg7XG4gICAgbWFyZ2luLXRvcDogMTZ2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3Zvd2VscyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvc2Vjb25kX3Zvd2Vscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDV2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3Zvd2VsX2NvbnNvbmFudF9ibGVuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3NlY29uZF92b3dlbGNvbnNvbmFudHMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1dmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uY2F0ZWdvcnlfYnV0dG9uIHtcbiAgICB3aWR0aDogNDV2aDtcbiAgICBoZWlnaHQ6IDE5LjV2aDtcbiAgICBtYXJnaW46IDZ2aCAwdmggMHZoIDM1LjV2aDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDIuNXZoO1xufVxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4uY29sdW1uOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/third-categories/third-categories.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/third-categories/third-categories.component.ts ***!
  \**********************************************************************/
/*! exports provided: ThirdCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdCategoriesComponent", function() { return ThirdCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ThirdCategoriesComponent = class ThirdCategoriesComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        this.category = new Audio();
        this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
    goBack() {
        this.location.back();
    }
};
ThirdCategoriesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ThirdCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./third-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./third-categories.component.css */ "./src/app/pages/third-categories/third-categories.component.css")).default]
    })
], ThirdCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/third-categories/third-consonants-details/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-consonants-details/index.ts ***!
  \**************************************************************************/
/*! exports provided: ThirdConsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _third_consonants_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-consonants-details.component */ "./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThirdConsonantsDetailsComponent", function() { return _third_consonants_details_component__WEBPACK_IMPORTED_MODULE_1__["ThirdConsonantsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('second_consonants_details.png') no-repeat scroll transparent;\n    background-position: 19vh 2vh;\n    background-size: 169vh;\n}\n\n/* Phonics Categories */\n\n#beginning-sounds {\n    background: url('third_sound_begin.png') no-repeat scroll transparent;\n    background-size: 65vh;\n    margin: 17.5vh 0vh 0vh -6vh;\n    height: 13.5vh;\n    cursor: pointer;\n    width: 63vh;\n}\n\n#ending-sounds {\n    background: url('third_sound_end.png') no-repeat scroll transparent;\n    background-size: 55vh;\n    margin: 17.5vh 0vh 0vh 33vh;\n    cursor: pointer;\n    height: 13.5vh;\n    width: 54vh;\n}\n\n#cg {\n    background: url('third_cg.png') no-repeat scroll transparent;\n    background-size: 80vh;\n    cursor: pointer;\n    width: 78vh;\n}\n\n#beginning-blends {\n    background: url('third_blend_begin.png') no-repeat scroll transparent;\n    background-size: 61vh;\n    cursor: pointer;\n    width: 59vh;\n}\n\n#ending-blends {\n    background: url('third_blend_end.png') no-repeat scroll transparent;\n    background-size: 50vh;\n    margin-left: 37vh;\n    cursor: pointer;\n    width: 49vh;\n}\n\n#three-letter-blends {\n    background: url('third_blend_3.png') no-repeat scroll transparent;\n    background-size: 60vh;\n    cursor: pointer;\n    width: 58vh;\n}\n\n#silent-consonants {\n  background: url('third_silent.png') no-repeat scroll transparent;\n  background-size: 29vh;\n  margin-left: 38vh;\n  cursor: pointer;\n  width: 28vh;\n}\n\n#beginning-digraphs {\n  background: url('third_digraph_begin.png') no-repeat scroll transparent;\n  background-size: 91.5vh;\n  cursor: pointer;\n  width: 79vh;\n}\n\n#ending-digraphs {\n  background: url('third_digraph_end.png') no-repeat scroll transparent;\n  background-size: 73vh;\n  display: block;\n  cursor: pointer;\n  width: 71vh;\n}\n\n.category_button {\n    height: 10vh;\n    margin: 1.5vh 0vh 0vh -5vh;\n    border: none;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGhpcmQtY2F0ZWdvcmllcy90aGlyZC1jb25zb25hbnRzLWRldGFpbHMvdGhpcmQtY29uc29uYW50cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkVBQWdIO0lBQ2hILDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUEsdUJBQXVCOztBQUN2QjtJQUNJLHFFQUFvRztJQUNwRyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksbUVBQWtHO0lBQ2xHLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSw0REFBMkY7SUFDM0YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxxRUFBb0c7SUFDcEcscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxtRUFBa0c7SUFDbEcscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksaUVBQWdHO0lBQ2hHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0VBQ0UsZ0VBQStGO0VBQy9GLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHVFQUFzRztFQUN0Ryx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHFFQUFvRztFQUNwRyxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0EsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGhpcmQtY2F0ZWdvcmllcy90aGlyZC1jb25zb25hbnRzLWRldGFpbHMvdGhpcmQtY29uc29uYW50cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvc2Vjb25kX2NvbnNvbmFudHNfZGV0YWlscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE5dmggMnZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTY5dmg7XG59XG5cbi8qIFBob25pY3MgQ2F0ZWdvcmllcyAqL1xuI2JlZ2lubmluZy1zb3VuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3NvdW5kX2JlZ2luLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2NXZoO1xuICAgIG1hcmdpbjogMTcuNXZoIDB2aCAwdmggLTZ2aDtcbiAgICBoZWlnaHQ6IDEzLjV2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYzdmg7XG59XG4jZW5kaW5nLXNvdW5kcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvdGhpcmRfc291bmRfZW5kLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1NXZoO1xuICAgIG1hcmdpbjogMTcuNXZoIDB2aCAwdmggMzN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAxMy41dmg7XG4gICAgd2lkdGg6IDU0dmg7XG59XG4jY2cge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX2NnLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzh2aDtcbn1cbiNiZWdpbm5pbmctYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy90aGlyZF9ibGVuZF9iZWdpbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjF2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDU5dmg7XG59XG4jZW5kaW5nLWJsZW5kcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvdGhpcmRfYmxlbmRfZW5kLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MHZoO1xuICAgIG1hcmdpbi1sZWZ0OiAzN3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNDl2aDtcbn1cbiN0aHJlZS1sZXR0ZXItYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy90aGlyZF9ibGVuZF8zLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNTh2aDtcbn1cbiNzaWxlbnQtY29uc29uYW50cyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3NpbGVudC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI5dmg7XG4gIG1hcmdpbi1sZWZ0OiAzOHZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyOHZoO1xufVxuI2JlZ2lubmluZy1kaWdyYXBocyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX2RpZ3JhcGhfYmVnaW4ucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiA5MS41dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDc5dmg7XG59XG4jZW5kaW5nLWRpZ3JhcGhzIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvdGhpcmRfZGlncmFwaF9lbmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiA3M3ZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzF2aDtcbn1cblxuLmNhdGVnb3J5X2J1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIG1hcmdpbjogMS41dmggMHZoIDB2aCAtNXZoO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDIuNXZoO1xufVxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4uY29sdW1uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ThirdConsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdConsonantsDetailsComponent", function() { return ThirdConsonantsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ThirdConsonantsDetailsComponent = class ThirdConsonantsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
ThirdConsonantsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ThirdConsonantsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./third-consonants-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./third-consonants-details.component.css */ "./src/app/pages/third-categories/third-consonants-details/third-consonants-details.component.css")).default]
    })
], ThirdConsonantsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/third-categories/third-vowelconsonants-details/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-vowelconsonants-details/index.ts ***!
  \*******************************************************************************/
/*! exports provided: ThirdVowelconsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _third_vowelconsonants_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-vowelconsonants-details.component */ "./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThirdVowelconsonantsDetailsComponent", function() { return _third_vowelconsonants_details_component__WEBPACK_IMPORTED_MODULE_1__["ThirdVowelconsonantsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.css ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n      background: url('third_vowelconsonants_details.png') no-repeat scroll transparent;\n      background-position: 20vh;\n      background-size: 215vh;\n  }\n  \n  /* Second Categories */\n  \n  #r {\n      background: url('third_r.png') no-repeat scroll transparent;\n      background-size: 90vh;\n      margin-top: 9vh;\n      cursor: pointer;\n      width: 88vh;\n  }\n  \n  #two-letter-blends {\n    background: url('third_two.png') no-repeat scroll transparent;\n    background-size: 77vh;\n    width: 75vh;\n    cursor: pointer;\n  }\n  \n  #three-letter-blends {\n    background: url('third_three.png') no-repeat scroll transparent;\n    background-size: 76.5vh;\n    cursor: pointer;\n    width: 74vh;\n  }\n  \n  .column {\n    padding-top: 12vh;\n  }\n  \n  .category_button {\n      margin: 14.5vh 0vh 0vh 40vh;\n      height: 14vh;\n      border: none;\n      display: inherit;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGhpcmQtY2F0ZWdvcmllcy90aGlyZC12b3dlbGNvbnNvbmFudHMtZGV0YWlscy90aGlyZC12b3dlbGNvbnNvbmFudHMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO01BQ3BDLGlGQUFvSDtNQUNwSCx5QkFBeUI7TUFDekIsc0JBQXNCO0VBQzFCOztFQUVBLHNCQUFzQjs7RUFDdEI7TUFDSSwyREFBMEY7TUFDMUYscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixlQUFlO01BQ2YsV0FBVztFQUNmOztFQUNBO0lBQ0UsNkRBQTRGO0lBQzVGLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLCtEQUE4RjtJQUM5Rix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osWUFBWTtNQUNaLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoaXJkLWNhdGVnb3JpZXMvdGhpcmQtdm93ZWxjb25zb25hbnRzLWRldGFpbHMvdGhpcmQtdm93ZWxjb25zb25hbnRzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy90aGlyZF92b3dlbGNvbnNvbmFudHNfZGV0YWlscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjB2aDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjE1dmg7XG4gIH1cbiAgXG4gIC8qIFNlY29uZCBDYXRlZ29yaWVzICovXG4gICNyIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3IucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogOTB2aDtcbiAgICAgIG1hcmdpbi10b3A6IDl2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdpZHRoOiA4OHZoO1xuICB9XG4gICN0d28tbGV0dGVyLWJsZW5kcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvdGhpcmRfdHdvLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3N3ZoO1xuICAgIHdpZHRoOiA3NXZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAjdGhyZWUtbGV0dGVyLWJsZW5kcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvdGhpcmRfdGhyZWUucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc2LjV2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDc0dmg7XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBwYWRkaW5nLXRvcDogMTJ2aDtcbiAgfVxuXG4gIC5jYXRlZ29yeV9idXR0b24ge1xuICAgICAgbWFyZ2luOiAxNC41dmggMHZoIDB2aCA0MHZoO1xuICAgICAgaGVpZ2h0OiAxNHZoO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ThirdVowelconsonantsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdVowelconsonantsDetailsComponent", function() { return ThirdVowelconsonantsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ThirdVowelconsonantsDetailsComponent = class ThirdVowelconsonantsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
ThirdVowelconsonantsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ThirdVowelconsonantsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./third-vowelconsonants-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./third-vowelconsonants-details.component.css */ "./src/app/pages/third-categories/third-vowelconsonants-details/third-vowelconsonants-details.component.css")).default]
    })
], ThirdVowelconsonantsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/third-categories/third-vowels-details/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/third-categories/third-vowels-details/index.ts ***!
  \**********************************************************************/
/*! exports provided: ThirdVowelsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _third_vowels_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-vowels-details.component */ "./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThirdVowelsDetailsComponent", function() { return _third_vowels_details_component__WEBPACK_IMPORTED_MODULE_1__["ThirdVowelsDetailsComponent"]; });





/***/ }),

/***/ "./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('third_vowels_details.png') no-repeat scroll transparent;\n    background-position: 14vh 2vh;\n    background-size: 173vh;\n}\n\n/* Phonics Categories */\n\n#short_vowels {\n    background: url('third_vowels_short.png') no-repeat scroll transparent;\n    background-size: 34vh;\n    margin-top: 17vh;\n    cursor: pointer;\n    width: 32vh;\n}\n\n#long_vowels {\n    background: url('third_vowels_long.png') no-repeat scroll transparent;\n    background-size: 30vh;\n    margin: 17vh 0vh 0vh 7vh;\n    cursor: pointer;\n    width: 28vh;\n}\n\n#schwas {\n    background: url('third_vowels_schwa.png') no-repeat scroll transparent;\n    background-size: 41vh;\n    margin-left: 3vh;\n    cursor: pointer;\n    width: 39vh;\n}\n\n#vowel_pairs {\n    background: url('third_vowels_pairs.png') no-repeat scroll transparent;\n    background-size: 33vh;\n    cursor: pointer;\n    width: 31vh;\n}\n\n#y_sounds {\n    background: url('third_vowels_y.png') no-repeat scroll transparent;\n    background-size: 55.5vh;\n    margin-left: 8vh;\n    cursor: pointer;\n    width: 54vh;\n}\n\n#silent-e {\n    background: url('third_vowels_e.png') no-repeat scroll transparent;\n    background-size: 44vh;\n    margin-left: 62vh;\n    cursor: pointer;\n    width: 43vh;\n}\n\n#r {\n    background: url('third_vowels_r.png') no-repeat scroll transparent;\n    background-size: 38vh;\n    cursor: pointer;\n    width: 36vh;\n}\n\n.category_button {\n    width: 39vh;\n    height: 15.7vh;\n    margin: 4vh 0vh 0vh 23vh;\n    border: none;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGhpcmQtY2F0ZWdvcmllcy90aGlyZC12b3dlbHMtZGV0YWlscy90aGlyZC12b3dlbHMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdFQUEyRztJQUMzRyw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSxzRUFBcUc7SUFDckcscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0kscUVBQW9HO0lBQ3BHLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHNFQUFxRztJQUNyRyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxzRUFBcUc7SUFDckcscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrRUFBaUc7SUFDakcsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0VBQWlHO0lBQ2pHLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtFQUFpRztJQUNqRyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0EsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGhpcmQtY2F0ZWdvcmllcy90aGlyZC12b3dlbHMtZGV0YWlscy90aGlyZC12b3dlbHMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRzL3RoaXJkX3Zvd2Vsc19kZXRhaWxzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTR2aCAydmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNzN2aDtcbn1cblxuLyogUGhvbmljcyBDYXRlZ29yaWVzICovXG4jc2hvcnRfdm93ZWxzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy90aGlyZF92b3dlbHNfc2hvcnQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM0dmg7XG4gICAgbWFyZ2luLXRvcDogMTd2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMydmg7XG59XG4jbG9uZ192b3dlbHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3Zvd2Vsc19sb25nLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHZoO1xuICAgIG1hcmdpbjogMTd2aCAwdmggMHZoIDd2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDI4dmg7XG59XG4jc2Nod2FzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy90aGlyZF92b3dlbHNfc2Nod2EucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQxdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDM5dmg7XG59XG4jdm93ZWxfcGFpcnMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3Zvd2Vsc19wYWlycy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMxdmg7XG59XG4jeV9zb3VuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3Zvd2Vsc195LnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1NS41dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDh2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDU0dmg7XG59XG4jc2lsZW50LWUge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3RoaXJkX3Zvd2Vsc19lLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0NHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA2MnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNDN2aDtcbn1cbiNyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy90aGlyZF92b3dlbHNfci5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzh2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDM2dmg7XG59XG5cbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiAzOXZoO1xuICAgIGhlaWdodDogMTUuN3ZoO1xuICAgIG1hcmdpbjogNHZoIDB2aCAwdmggMjN2aDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2x1bW4ge1xuICAgIHBhZGRpbmctdG9wOiAyLjV2aDtcbn1cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLmNvbHVtbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ThirdVowelsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdVowelsDetailsComponent", function() { return ThirdVowelsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ThirdVowelsDetailsComponent = class ThirdVowelsDetailsComponent {
    constructor(location) {
        this.location = location;
    }
    playAudio(event) {
        // this.category = new Audio();
        // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        // if (this.category.src !== undefined) {
        //     this.category.load();
        //     this.category.play();
        // }
    }
    goBack() {
        this.location.back();
    }
};
ThirdVowelsDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ThirdVowelsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./third-vowels-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./third-vowels-details.component.css */ "./src/app/pages/third-categories/third-vowels-details/third-vowels-details.component.css")).default]
    })
], ThirdVowelsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/word-structures/index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/word-structures/index.ts ***!
  \************************************************/
/*! exports provided: WordStructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _word_structures_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-structures.component */ "./src/app/pages/word-structures/word-structures.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordStructuresComponent", function() { return _word_structures_component__WEBPACK_IMPORTED_MODULE_1__["WordStructuresComponent"]; });





/***/ }),

/***/ "./src/app/pages/word-structures/word-structures.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/word-structures/word-structures.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n  \n  #background {\n      background-color: #FFFFFF !important;\n  }\n  \n  img {\n      height: 30vh;\n      margin: 30vh 0vh 0vh 10vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29yZC1zdHJ1Y3R1cmVzL3dvcmQtc3RydWN0dXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksWUFBWTtNQUNaLHlCQUF5QjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmQtc3RydWN0dXJlcy93b3JkLXN0cnVjdHVyZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNiYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgfVxuXG4gIGltZyB7XG4gICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICBtYXJnaW46IDMwdmggMHZoIDB2aCAxMHZoO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/word-structures/word-structures.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/word-structures/word-structures.component.ts ***!
  \********************************************************************/
/*! exports provided: WordStructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordStructuresComponent", function() { return WordStructuresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let WordStructuresComponent = class WordStructuresComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
WordStructuresComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
WordStructuresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./word-structures.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/word-structures/word-structures.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./word-structures.component.css */ "./src/app/pages/word-structures/word-structures.component.css")).default]
    })
], WordStructuresComponent);



/***/ }),

/***/ "./src/app/services/alphabet-letters.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/alphabet-letters.service.ts ***!
  \******************************************************/
/*! exports provided: AlphabetLettersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetLettersService", function() { return AlphabetLettersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_alphabet_letter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/alphabet-letter */ "./src/app/types/alphabet-letter.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_letters_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/letters.json */ "./src/assets/json/letters.json");
var _assets_json_letters_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/letters.json */ "./src/assets/json/letters.json", 1);
/* harmony import */ var _assets_json_letters_reordered_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/json/letters-reordered.json */ "./src/assets/json/letters-reordered.json");
var _assets_json_letters_reordered_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/letters-reordered.json */ "./src/assets/json/letters-reordered.json", 1);






let AlphabetLettersService = class AlphabetLettersService {
    constructor() {
        this._letters = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.letters = this._letters.asObservable();
    }
    dataImport(reordered) {
        const temp = [];
        let data = [];
        if (reordered) {
            data = _assets_json_letters_reordered_json__WEBPACK_IMPORTED_MODULE_5__.valueOf();
        }
        else {
            data = _assets_json_letters_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        }
        data.forEach(letter => {
            temp.push(new _types_alphabet_letter__WEBPACK_IMPORTED_MODULE_2__["AlphabetLetter"](letter.letter, `/assets/audio/letters/${letter.audio}`, 0));
        });
        return data;
    }
};
AlphabetLettersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlphabetLettersService);



/***/ }),

/***/ "./src/app/services/phonemes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/phonemes.service.ts ***!
  \**********************************************/
/*! exports provided: PhonemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemesService", function() { return PhonemesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_phoneme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/phoneme */ "./src/app/types/phoneme.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _assets_json_phonemes_reordered_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/json/phonemes-reordered.json */ "./src/assets/json/phonemes-reordered.json");
var _assets_json_phonemes_reordered_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes-reordered.json */ "./src/assets/json/phonemes-reordered.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");







let PhonemesService = class PhonemesService {
    constructor() {
        this._phonemes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.phonemes = this._phonemes.asObservable();
    }
    dataLoad(list, grade, reordered) {
        const temp = [];
        let data = [];
        if (reordered) {
            data = _assets_json_phonemes_reordered_json__WEBPACK_IMPORTED_MODULE_5__.valueOf();
        }
        else {
            data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        }
        for (var i = 0; i < data.length; i++) {
            if (grade !== '') {
                if (data[i].grade.includes(grade)) {
                    if (list == 'sounds') {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                    else {
                        if (data[i].category.includes(list)) {
                            temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                        }
                    }
                }
            }
            else {
                if (list == 'phoneme') {
                    if (data[i].id !== 'U-short') {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                }
                else if (list == 'consonantBlends') {
                    if (data[i].category.includes("CB")) {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                }
                else if (list == 'consonants') {
                    if (data[i].id == 'H-silent') {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                    else if (data[i].category.includes("C") && !data[i].category.includes("CD") && !data[i].category.includes("CB") && !data[i].category.includes("C-silent")) {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                }
                else if (list == 'vowelPairs') {
                    if (data[i].category.includes("VP")) {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `../../assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `../../assets/audio/sight-words/${data[i].word1.audio}`, `../../assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `../../assets/audio/sight-words/${data[i].word2.audio}`, `../../assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                }
                else if (list == 'vowels') {
                    if (data[i].category.includes("V") && !data[i].category.includes("VP") && !data[i].category.includes("VC")) {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                }
                else if (list == 'vowelConsonants') {
                    if (data[i].category.includes("VC")) {
                        temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_6__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
                    }
                }
            }
        }
        this._phonemes.next(temp);
        return temp;
    }
};
PhonemesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhonemesService);



/***/ }),

/***/ "./src/app/services/progress.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/progress.service.ts ***!
  \**********************************************/
/*! exports provided: ProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function() { return ProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





const coinKey = 'COINS';
const completePuzzlesKey = 'COMPLETED_PUZZLES';
const timeKey = 'TIME_LAST_SESSION';
const timeOverallKey = 'TIME_OVERALL';
const dateKey = 'DATE_LAST_SESSION';
let ProgressService = class ProgressService {
    constructor(storage, userService, http) {
        this.storage = storage;
        this.userService = userService;
        this.http = http;
        this.storage.set('hasReceivedPhonemeInstruction', false);
        this.storage.set('hasReceivedAlphabetInstruction', false);
    }
    getReceivedInstructions(key) {
        return this.storage.get(key);
    }
    setReceivedInstructions(key, hasRecInstructions) {
        this.storage.set(key, hasRecInstructions);
    }
    //initial each input with { stars: 0, active: false, checkmark: false }
    prepareNewKeyProgress() {
        return {
            'gold_stars': 0,
            'silver_stars': 0,
            'active': true,
            'checkmark': false,
            'coins': 0,
            'puzzle_pieces': 0,
            'incorrect_answers': 0
        };
    }
    getCheckMark(key) {
        if (this.storage.get(key) != null) {
            return this.storage.get(key).checkmark;
        }
        else {
            return false;
        }
    }
    setCheckMark(key, val) {
        let input;
        if (this.storage.get(key) != null) {
            input = this.storage.get(key);
            input.gold_stars = 5;
            input.silver_stars = 0,
                input.active = this.storage.get(key).active;
            input.checkmark = val;
        }
        return this.storage.set(key, input);
    }
    saveStarsToKey(key, val) {
        let actualKey = key.slice(0, -4);
        let input;
        if (this.storage.get(actualKey) == null) {
            input = this.prepareNewKeyProgress();
            if (key.includes("gold")) {
                input.gold_stars += val;
            }
            else {
                input.silver_stars += val;
            }
        }
        else {
            input = this.storage.get(actualKey);
            if (key.includes("gold")) {
                if (input.gold_stars + val >= 5 && actualKey.includes("letter")) {
                    input.checkmark = true;
                    input.gold_stars = 5;
                }
                else if (input.gold_stars + val >= 5) {
                    input.gold_stars = 5;
                }
                else {
                    input.gold_stars += val;
                }
            }
            else if (input.gold_stars + val < 5) {
                if (input.silver_stars + val >= 5) {
                    input.silver_stars = 5;
                }
                else {
                    input.silver_stars += val;
                }
            }
        }
        this.storage.set(actualKey, input);
    }
    getGoldStarsFromKey(key) {
        let stars = 0;
        if (this.storage.get(key) != null) {
            stars = this.storage.get(key).gold_stars;
        }
        return stars;
    }
    getSilverStarsFromKey(key) {
        let stars = 0;
        if (this.storage.get(key) != null) {
            stars = this.storage.get(key).silver_stars;
        }
        return stars;
    }
    getCoins() {
        return this.storage.get(coinKey) || 0;
    }
    addCoins(key, amount) {
        let input;
        if (this.storage.get(key) == null) {
            input = this.prepareNewKeyProgress();
            input.coins += amount;
        }
        else {
            input = this.storage.get(key);
            input.coins += amount;
        }
        // Save coin amount for phoneme
        this.storage.set(key, input);
        // Save coins overall
        this.storage.set(coinKey, this.getCoins() + amount);
    }
    getPuzzles() {
        return this.storage.get(completePuzzlesKey) || [];
    }
    savePuzzle(puzzlePhoneme) {
        var completePuzzles = this.getPuzzles();
        completePuzzles.push(puzzlePhoneme);
        this.storage.set(completePuzzlesKey, completePuzzles);
    }
    getPuzzlePieces(puzzlePhoneme) {
        let actualKey = 'phoneme' + puzzlePhoneme;
        let puzzlePieces = 0;
        if (this.storage.get(actualKey) != null) {
            puzzlePieces = this.storage.get(actualKey).puzzle_pieces;
        }
        return puzzlePieces;
    }
    addPuzzlePieces(puzzlePhoneme, amount) {
        let actualKey = 'phoneme' + puzzlePhoneme;
        let input;
        if (this.storage.get(actualKey) == null) {
            input = this.prepareNewKeyProgress();
            input.puzzle_pieces += amount;
        }
        else {
            input = this.storage.get(actualKey);
            input.puzzle_pieces += amount;
            if (input.puzzle_pieces >= 12) {
                input.puzzle_pieces = 12;
                if (!(this.getPuzzles().includes(puzzlePhoneme))) {
                    this.savePuzzle(puzzlePhoneme);
                }
            }
        }
        this.storage.set(actualKey, input);
    }
    addIncorrectAnswer(key) {
        let input;
        // If phoneme isn't mastered
        if (!this.getCheckMark(key)) {
            if (this.storage.get(key) == null) {
                input = this.prepareNewKeyProgress();
                input.incorrect_answers++;
            }
            else {
                input = this.storage.get(key);
                input.incorrect_answers++;
            }
            this.storage.set(key, input);
        }
    }
    addTime(date, timeElapsed) {
        // Time spent in current session (in ms)
        this.storage.set(timeKey, timeElapsed);
        // Time spent in application overall (in ms)
        if (this.storage.get(timeKey) !== null) {
            var lastSession = this.storage.get(timeKey);
            this.storage.set(timeOverallKey, lastSession + timeElapsed);
        }
        else {
            this.storage.set(timeOverallKey, timeElapsed);
        }
        // Date of current session
        this.storage.set(dateKey, date);
    }
};
ProgressService.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"],] }] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"]))
], ProgressService);



/***/ }),

/***/ "./src/app/services/transfer-letter-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/transfer-letter-service.service.ts ***!
  \*************************************************************/
/*! exports provided: TransferLetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferLetterService", function() { return TransferLetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TransferLetterService = class TransferLetterService {
    constructor(router) {
        this.router = router;
    }
    setList(list) {
        this.list = list;
    }
    getList() {
        return this.list;
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        if (!this.data) {
            this.router.navigate(['']);
        }
        return this.data;
    }
    clearData() {
        this.data = undefined;
    }
};
TransferLetterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TransferLetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TransferLetterService);



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    login(passcode) {
        this.user = passcode;
        return this.http.post('https://teacherportal.hearatale.com/api/session/student', { id: passcode });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/types/alphabet-letter.ts":
/*!******************************************!*\
  !*** ./src/app/types/alphabet-letter.ts ***!
  \******************************************/
/*! exports provided: AlphabetLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetLetter", function() { return AlphabetLetter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AlphabetLetter {
    constructor(letter, audio, stars) {
        this.letter = letter;
        this.audio = audio;
        this.stars = stars;
    }
}


/***/ }),

/***/ "./src/app/types/phoneme.ts":
/*!**********************************!*\
  !*** ./src/app/types/phoneme.ts ***!
  \**********************************/
/*! exports provided: Phoneme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phoneme", function() { return Phoneme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Phoneme {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme, grade) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
        this.grade = grade;
    }
}


/***/ }),

/***/ "./src/app/types/sight-word.ts":
/*!*************************************!*\
  !*** ./src/app/types/sight-word.ts ***!
  \*************************************/
/*! exports provided: SightWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightWord", function() { return SightWord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SightWord {
    constructor(word, display, audio, image) {
        this.word = word;
        this.display = display;
        this.audio = audio;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/assets/json/bad-assets.json":
/*!*****************************************!*\
  !*** ./src/assets/json/bad-assets.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"bionic\",\"bird\",\"blaze\",\"box\",\"bulb\",\"buzz\",\"cab\",\"clinic\",\"cub\",\"disc\",\"doc\",\"doll\",\"doze\",\"duck\",\"exciting\",\"explode\",\"explore\",\"fix\",\"foal\",\"gauze\",\"lock\",\"lynx\",\"magic\",\"quart\",\"quarter\",\"quiver\",\"ram\",\"seal\",\"sob\",\"sun\",\"tiger\",\"trex\",\"vegetables\",\"vet\",\"wax\",\"wind\",\"yell\",\"yummy\",\"zany\",\"zeppelin\",\"zigzag\"]");

/***/ }),

/***/ "./src/assets/json/letters-reordered.json":
/*!************************************************!*\
  !*** ./src/assets/json/letters-reordered.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"letter\":\"b\",\"audio\":\"B.mp3\"},{\"letter\":\"m\",\"audio\":\"M.mp3\"},{\"letter\":\"r\",\"audio\":\"R.mp3\"},{\"letter\":\"a\",\"audio\":\"A.mp3\"},{\"letter\":\"s\",\"audio\":\"S.mp3\"},{\"letter\":\"t\",\"audio\":\"T.mp3\"},{\"letter\":\"g\",\"audio\":\"G.mp3\"},{\"letter\":\"n\",\"audio\":\"N.mp3\"},{\"letter\":\"i\",\"audio\":\"I.mp3\"},{\"letter\":\"p\",\"audio\":\"P.mp3\"},{\"letter\":\"c\",\"audio\":\"C.mp3\"},{\"letter\":\"h\",\"audio\":\"H.mp3\"},{\"letter\":\"f\",\"audio\":\"F.mp3\"},{\"letter\":\"o\",\"audio\":\"O.mp3\"},{\"letter\":\"d\",\"audio\":\"D.mp3\"},{\"letter\":\"l\",\"audio\":\"L.mp3\"},{\"letter\":\"k\",\"audio\":\"K.mp3\"},{\"letter\":\"u\",\"audio\":\"U.mp3\"},{\"letter\":\"j\",\"audio\":\"J.mp3\"},{\"letter\":\"w\",\"audio\":\"W.mp3\"},{\"letter\":\"e\",\"audio\":\"E.mp3\"},{\"letter\":\"y\",\"audio\":\"Y.mp3\"},{\"letter\":\"z\",\"audio\":\"Z.mp3\"},{\"letter\":\"v\",\"audio\":\"V.mp3\"},{\"letter\":\"q\",\"audio\":\"Q.mp3\"},{\"letter\":\"x\",\"audio\":\"X.mp3\"}]");

/***/ }),

/***/ "./src/assets/json/letters.json":
/*!**************************************!*\
  !*** ./src/assets/json/letters.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"letter\":\"a\",\"audio\":\"A.mp3\"},{\"letter\":\"b\",\"audio\":\"B.mp3\"},{\"letter\":\"c\",\"audio\":\"C.mp3\"},{\"letter\":\"d\",\"audio\":\"D.mp3\"},{\"letter\":\"e\",\"audio\":\"E.mp3\"},{\"letter\":\"f\",\"audio\":\"F.mp3\"},{\"letter\":\"g\",\"audio\":\"G.mp3\"},{\"letter\":\"h\",\"audio\":\"H.mp3\"},{\"letter\":\"i\",\"audio\":\"I.mp3\"},{\"letter\":\"j\",\"audio\":\"J.mp3\"},{\"letter\":\"k\",\"audio\":\"K.mp3\"},{\"letter\":\"l\",\"audio\":\"L.mp3\"},{\"letter\":\"m\",\"audio\":\"M.mp3\"},{\"letter\":\"n\",\"audio\":\"N.mp3\"},{\"letter\":\"o\",\"audio\":\"O.mp3\"},{\"letter\":\"p\",\"audio\":\"P.mp3\"},{\"letter\":\"q\",\"audio\":\"Q.mp3\"},{\"letter\":\"r\",\"audio\":\"R.mp3\"},{\"letter\":\"s\",\"audio\":\"S.mp3\"},{\"letter\":\"t\",\"audio\":\"T.mp3\"},{\"letter\":\"u\",\"audio\":\"U.mp3\"},{\"letter\":\"v\",\"audio\":\"V.mp3\"},{\"letter\":\"w\",\"audio\":\"W.mp3\"},{\"letter\":\"x\",\"audio\":\"X.mp3\"},{\"letter\":\"y\",\"audio\":\"Y.mp3\"},{\"letter\":\"z\",\"audio\":\"Z.mp3\"}]");

/***/ }),

/***/ "./src/assets/json/phonemes-reordered.json":
/*!*************************************************!*\
  !*** ./src/assets/json/phonemes-reordered.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"B-buh-begin\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"boy\",\"display\":\"<span>b</span>oy\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word2\":{\"word\":\"bubble\",\"display\":\"<span>b</span>u<span>bb</span>le\",\"audio\":\"bubble.mp3\",\"image\":\"bubble.png\"},\"word3\":{\"word\":\"boat\",\"display\":\"<span>b</span>oat\",\"audio\":\"boat.mp3\",\"image\":\"boat.png\"},\"quiz-words\":[\"bird\",\"bat\",\"bear\",\"box\",\"beaver\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Rock-a-(b)ye; (B)aby; on the tree top;<br>When the wind (b)lows the cradle will rock;<br>When the (b)ough (b)reaks the cradle will fall;<br>and down will come (B)aby; cradle; and all.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-buh-end\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"cub\",\"display\":\"cu<span>b</span>\",\"audio\":\"cub.mp3\",\"image\":\"cub.png\"},\"word2\":{\"word\":\"crab\",\"display\":\"cra<span>b</span>\",\"audio\":\"crab.mp3\",\"image\":\"crab.png\"},\"word3\":{\"word\":\"cobweb\",\"display\":\"co<span>b</span>we<span>b</span>\",\"audio\":\"cobweb.mp3\",\"image\":\"cobweb.png\"},\"quiz-words\":[\"cab\",\"sob\",\"bulb\",\"rob\",\"bathtub\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Ru(b) a du(b) du(b),<br>Three men in a tu(b);<br>And who do you think they be?<br>The butcher, the baker,<br>The candlestick-maker;<br>Turn’em out, knaves all three!\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-BL\",\"audio\":\"phoneme-B-BL.mp3\",\"display\":\"bl\",\"word1\":{\"word\":\"blow\",\"display\":\"<span>bl</span>ow\",\"audio\":\"blow.mp3\",\"image\":\"blow.png\"},\"word2\":{\"word\":\"blue\",\"display\":\"<span>bl</span>ue\",\"audio\":\"blue.mp3\",\"image\":\"blue.png\"},\"word3\":{\"word\":\"blush\",\"display\":\"<span>bl</span>ush\",\"audio\":\"blush.mp3\",\"image\":\"blush.png\"},\"quiz-words\":[\"block\",\"blaze\",\"black\",\"blanket\",\"bloodhound\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Little Boy (Bl)ue; come (bl)ow your horn;<br>The sheep's in the meadow; the cow's in the corn.<br>Where is the boy who minds the sheep?<br>Under the haystack fast asleep.<br>Will you wake him?<br>No; not I;<br>For if I do he's sure to cry.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-BR\",\"audio\":\"phoneme-B-BR.mp3\",\"display\":\"br\",\"word1\":{\"word\":\"bridge\",\"display\":\"<span>br</span>idge\",\"audio\":\"bridge.mp3\",\"image\":\"bridge.png\"},\"word2\":{\"word\":\"broom\",\"display\":\"<span>br</span>oom\",\"audio\":\"broom.mp3\",\"image\":\"broom.png\"},\"word3\":{\"word\":\"brush\",\"display\":\"<span>br</span>ush\",\"audio\":\"brush.mp3\",\"image\":\"brush.png\"},\"quiz-words\":[\"brown\",\"bride\",\"bread\",\"brother\",\"brighten\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"London (Br)idge is falling down,<br>Falling down, falling down.<br>London (Br)idge is falling down.<br>My fair lady.<br><br>Build it up with stones and (br)icks,<br>Stones and (br)icks, stones and (br)icks.<br>Build it up with stones and (br)icks,<br>My fair lady.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"M-mmm-begin\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"monkey\",\"display\":\"<span>m</span>onkey\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"word2\":{\"word\":\"mole\",\"display\":\"<span>m</span>ole\",\"audio\":\"mole.mp3\",\"image\":\"mole.png\"},\"word3\":{\"word\":\"mermaid\",\"display\":\"<span>m</span>er<span>m</span>aid\",\"audio\":\"mermaid.mp3\",\"image\":\"mermaid.png\"},\"quiz-words\":[\"music\",\"magic\",\"man\",\"moth\",\"moon\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"When good King Arthur ruled his land<br>He was a goodly king;<br>He stole three sacks of barley (m)eal<br>To (m)ake a bag-pudding.<br>A bag-pudding the king did (m)ake,<br>And stuffed it well with plums,<br>And in it put great lumps of fat<br>As big as my two thumbs.<br>The king and queen ate less than half,<br>Not (m)uch (m)ore, though they tried,<br>And what they could not eat that night<br>The queen next (m)orning fried.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"M-mmm-end\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"swim\",\"display\":\"swi<span>m</span>\",\"audio\":\"swim.mp3\",\"image\":\"swim.png\"},\"word2\":{\"word\":\"clam\",\"display\":\"cla<span>m</span>\",\"audio\":\"clam.mp3\",\"image\":\"clam.png\"},\"word3\":{\"word\":\"storm\",\"display\":\"stor<span>m</span>\",\"audio\":\"storm.mp3\",\"image\":\"storm.png\"},\"quiz-words\":[\"ram\",\"broom\",\"drum\",\"palm\",\"glum\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"There was an old woman got tossed in a blanket<br>Seventeen times as high as the moon;<br>But where she was going no person could tell,<br>For under her ar(m) she carried a broo(m).<br><br>“Old woman, old woman, old woman,” said I,<br>“Where in the world are you flying so high?”<br>“To sweep the cobwebs fro(m) the sky,<br>And I’ll be with you by and by.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"M-MB-silent\",\"audio\":\"phoneme-M-MB-silent.mp3\",\"display\":\"mb\",\"word1\":{\"word\":\"lamb\",\"display\":\"la<span>mb</span>\",\"audio\":\"lamb.mp3\",\"image\":\"lamb.png\"},\"word2\":{\"word\":\"comb\",\"display\":\"co<span>mb</span>\",\"audio\":\"comb.mp3\",\"image\":\"comb.png\"},\"word3\":{\"word\":\"thumb\",\"display\":\"thu<span>mb</span>\",\"audio\":\"thumb.mp3\",\"image\":\"thumb.png\"},\"quiz-words\":[\"limb\",\"crumb\",\"climb\",\"plumber\",\"doorjamb\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"I have many pointy teeth<br>But never eat a cru(mb),<br>And never ever bite or chew.<br>To hunger I am nu(mb).<br><br>With paper I make music—<br>Though people think it’s du(mb).<br>When la(mb)s grow up I groom their fleece,<br>Folks use me with their thu(mb).<br><br>One kind of me a rooster wears<br>Cap-like upon his dome.<br>Some fashionable folks do too.<br>You know me. I’m a — \",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"M-MP\",\"audio\":\"phoneme-M-MP.mp3\",\"display\":\"mp\",\"word1\":{\"word\":\"ump\",\"display\":\"u<span>mp</span>\",\"audio\":\"ump.mp3\",\"image\":\"ump.png\"},\"word2\":{\"word\":\"chimp\",\"display\":\"chi<span>mp</span>\",\"audio\":\"chimp.mp3\",\"image\":\"chimp.png\"},\"word3\":{\"word\":\"camp\",\"display\":\"ca<span>mp</span>\",\"audio\":\"camp.mp3\",\"image\":\"camp.png\"},\"quiz-words\":[\"rump\",\"lamp\",\"jump\",\"stump\",\"dump\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"The big cha(mp) chi(mp) grinned to show his di(mp)le.<br>The little chi(mp) just watched.<br><br>The lu(mp)y cha(mp) chi(mp) frowned and popped a pi(mp)le.<br>The little chimp he watched.<br><br>The plu(mp) cha(mp) chi(mp) ju(mp)ed up and strutted.<br>The little chi(mp) only watched.<br><br>The clumsy cha(mp) chi(mp) hit a stu(mp) and stumbled.<br>The little chi(mp) kept watching.<br><br>The big cha(mp) chi(mp) bu(mp)ed his ru(mp) and got du(mp)ed.<br>The little chi(mp) si(mp)ly watched.<br><br>The gru(mp)y cha(mp) chi(mp) sta(mp)ed, sto(mp)ed, and li(mp)ed off.<br>The little chi(mp) grinned.\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"R-ruh-begin\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"raccoons\",\"display\":\"<span>r</span>accoon\",\"audio\":\"raccoons.mp3\",\"image\":\"raccoons.png\"},\"word2\":{\"word\":\"robot\",\"display\":\"<span>r</span>obot\",\"audio\":\"robot.mp3\",\"image\":\"robot.png\"},\"word3\":{\"word\":\"run\",\"display\":\"<span>r</span>un\",\"audio\":\"run.mp3\",\"image\":\"run.png\"},\"quiz-words\":[\"read\",\"rug\",\"robin\",\"rainbow\",\"rabbit\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(R)ing around the (r)oses,<br>A pocketful of posies,<br>Ashes, Ashes, we all fall down!<br><br>(R)aising up with daisies,<br>(R)ising up with tulips,<br>Popping up with poppies,<br>We all pop up!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"R-ruh-end\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"door\",\"display\":\"doo<span>r</span>\",\"audio\":\"door.mp3\",\"image\":\"door.png\"},\"word2\":{\"word\":\"tiger\",\"display\":\"tige<span>r</span>\",\"audio\":\"tiger.mp3\",\"image\":\"tiger.png\"},\"word3\":{\"word\":\"polar bear\",\"display\":\"pola<span>r</span> bea<span>r</span>\",\"audio\":\"polar bear.mp3\",\"image\":\"polar bear.png\"},\"quiz-words\":[\"car\",\"boar\",\"hear\",\"beaver\",\"dozer\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"A grizzly bea(r) might roa(r) a roa(rrrrrr),<br>A pola(r) bear might growl b(rrrrrr).<br>A chimp might blubbe(r) a bbbbbbbb<br>My grandpa su(r)e would sno(r)e a sno(rrrrrr)e.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-long\",\"audio\":\"phoneme-A-long.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"ape\",\"display\":\"<span>a</span>pe\",\"audio\":\"ape.mp3\",\"image\":\"ape.png\"},\"word2\":{\"word\":\"make\",\"display\":\"m<span>a</span>ke\",\"audio\":\"make.mp3\",\"image\":\"make.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"c<span>a</span>ke\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"skate\",\"crane\",\"face\",\"whale\",\"baby\",\"cradle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Pat a c(a)ke; pat a c(a)ke; B(a)ker's man;<br>B(a)ke me a c(a)ke as fast as you can.<br>Pit it and pat it and mark it with B;<br>And put it in the oven for B(a)by and me.\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-e\",\"audio\":\"phoneme-A-long.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"ape\",\"display\":\"<span>a</span>p<u>e</u>\",\"audio\":\"ape.mp3\",\"image\":\"ape.png\"},\"word2\":{\"word\":\"plane\",\"display\":\"pl<span>a</span>n<u>e</u>\",\"audio\":\"plane.mp3\",\"image\":\"plane.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"c<span>a</span>k<u>e</u>\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"cage\",\"mane\",\"shave\",\"snake\",\"shapes\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Who m(a)de the str(a)nge par(a)de at my house?<br>—With a firetruck in front pulled by a mouse,<br>Bumped in back by some centaur slurping ice cream,<br>And bumblebee and rhino yoked as a team,<br>Hauling a trolley atop which a T-rex rode,<br>And giggled to see a cop kiss a toad,<br>And a wrestler and toddler danced together,<br>As an (a)pe tickled both with a peacock feather.<br>A penguin and rocketman on a rope hanging down,<br>Tossed eggs at a juggler who tried not to frown,<br>While a triceratops gobbled fresh gr(a)pes and burped,<br>At a peacock who spilled chocolate milk as it slurped,<br>And a str(a)nge smelling panda on a clock w(a)ved at me—<br>As I sat on a pretzel for an hour to sight-see.<br>Who could dream up a str(a)nge par(a)de of this kind?<br>Did I maybe just m(a)ke it all up in my mind?\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"A-short\",\"audio\":\"phoneme-A-short.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"bat\",\"display\":\"b<span>a</span>t\",\"audio\":\"bat.mp3\",\"image\":\"bat.png\"},\"word2\":{\"word\":\"cat\",\"display\":\"c<span>a</span>t\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word3\":{\"word\":\"ax\",\"display\":\"<span>a</span>x\",\"audio\":\"ax.mp3\",\"image\":\"ax.png\"},\"quiz-words\":[\"clam\",\"taxi\",\"wagon\",\"hamster\",\"raccoons\",\"camel\",\"rabbit\",\"cactus\",\"statue\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"B(a)t; b(a)t;<br>Come under my h(a)t;<br>And I'll give you a slice of bacon;<br>And when I bake;<br>I'll give you a cake;<br>If I am not mistaken.\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-ahh\",\"audio\":\"phoneme-A-ahh.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"ball\",\"display\":\"b<span>a</span>ll\",\"audio\":\"ball.mp3\",\"image\":\"ball.png\"},\"word2\":{\"word\":\"fall\",\"display\":\"f<span>a</span>ll\",\"audio\":\"fall.mp3\",\"image\":\"fall.png\"},\"word3\":{\"word\":\"swan\",\"display\":\"sw<span>a</span>n\",\"audio\":\"swan.mp3\",\"image\":\"swan.png\"},\"quiz-words\":[\"small\",\"father\",\"walnuts\",\"walrus\",\"squash\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"K\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Children call me F(a)ther Goose,<br>Because when I w(a)nt to w(a)nder,<br>I ride through the air<br>On a very fine gander.<br>\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-schwa\",\"audio\":\"phoneme-A-schwa.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"sofa\",\"display\":\"sof<span>a</span>\",\"audio\":\"sofa.mp3\",\"image\":\"sofa.png\"},\"word2\":{\"word\":\"zebra\",\"display\":\"zebr<span>a</span>\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word3\":{\"word\":\"afraid\",\"display\":\"af<span>a</span>id\",\"audio\":\"afraid.mp3\",\"image\":\"afraid.png\"},\"quiz-words\":[\"panda\",\"ovals\",\"canoe\",\"tuba\",\"gazelle\"],\"color\":{\"all\":\"red\",\"vowel\":\"red\",\"2nd\":\"black\"},\"rhyme\":\"(A)round the bush, Willie,<br>(A)round the bee hive.<br>(A)round the bush, Willie,<br>I'll meet you (a)live.\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AI\",\"audio\":\"phoneme-A-AI.mp3\",\"display\":\"ai\",\"word1\":{\"word\":\"tail\",\"display\":\"t<span>ai</span>l\",\"audio\":\"tail.mp3\",\"image\":\"tail.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"n<span>ai</span>l\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"rainbow\",\"display\":\"r<span>ai</span>nbow\",\"audio\":\"rainbow.mp3\",\"image\":\"rainbow.png\"},\"quiz-words\":[\"sail\",\"paint\",\"snail\",\"afraid\",\"mermaid\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"R(ai)n, r(ai)n, go to Sp(ai)n,<br>Never come back again.<br>R(ai)n, r(ai)n, go away,<br>Come again another day.<br>Little Johny wants to play.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-AN\",\"audio\":\"phoneme-A-AN.mp3\",\"display\":\"an\",\"word1\":{\"word\":\"ant\",\"display\":\"<span>an</span>t\",\"audio\":\"ant.mp3\",\"image\":\"ant.png\"},\"word2\":{\"word\":\"man\",\"display\":\"m<span>an</span>\",\"audio\":\"man.mp3\",\"image\":\"man.png\"},\"word3\":{\"word\":\"van\",\"display\":\"v<span>an</span>\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"quiz-words\":[\"hand\",\"panda\",\"pansy\",\"bandage\",\"sandbox\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Fr(an)kie Frog was afraid of (an)ts—<br>He flopped on (an) (an)thill and up did pr(an)ce!<br>To shake fire (an)ts from his underp(an)ts,<br>Fr(an)kie Frog d(an)ced to Paris, Fr(an)ce!<br>\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"A-AR-short\",\"audio\":\"phoneme-A-AR-short.mp3\",\"display\":\"ar\",\"word1\":{\"word\":\"arm\",\"display\":\"<span>ar</span>m\",\"audio\":\"arm.mp3\",\"image\":\"arm.png\"},\"word2\":{\"word\":\"stars\",\"display\":\"st<span>ar</span>s\",\"audio\":\"stars.mp3\",\"image\":\"stars.png\"},\"word3\":{\"word\":\"barn\",\"display\":\"b<span>ar</span>n\",\"audio\":\"barn.mp3\",\"image\":\"barn.png\"},\"quiz-words\":[\"harp\",\"scarf\",\"target\",\"go-kart\",\"cardinal\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Twinkle, twinkle, little st(ar),<br>How I wonder what you (ar)e.<br>Up above the world so high,<br>Like a diamond in the sky.\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AR-long\",\"audio\":\"phoneme-A-AR-long.m4a\",\"display\":\"ar\",\"word1\":{\"word\":\"bare\",\"display\":\"b<span>ar</span>e\",\"audio\":\"bare.mp3\",\"image\":\"bare.png\"},\"word2\":{\"word\":\"mare\",\"display\":\"m<span>ar</span>e\",\"audio\":\"mare.mp3\",\"image\":\"mare.png\"},\"word3\":{\"word\":\"hare\",\"display\":\"h<span>ar</span>e\",\"audio\":\"hare.mp3\",\"image\":\"hare.png\"},\"quiz-words\":[\"scare\",\"parrot\",\"carrot\",\"canary\",\"marionette\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"P(ar)rot said to Miss Can(ar)y,<br>“Come with me–leave this cage.<br>We’ll fly far off, then we’ll m(ar)ry,<br>Join the circus, star on stage.”<br><br>“I can’t. It’s all too sc(ar)y!”<br>She decl(ar)ed, “It sounds too strange.”<br>“I b(ar)ed my heart, will c(ar)ry<br>You quite safely. Don’t fear change.”<br><br>“I don’t d(ar)e,” she sighed. “I’m w(ar)y.<br>Can you love me through the bars?”<br>“I do,” he said. “I will.” There he<br>Kissed her–till both saw stars.\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AU\",\"audio\":\"phoneme-A-AU.mp3\",\"display\":\"au\",\"word1\":{\"word\":\"haul\",\"display\":\"h<span>au</span>l\",\"audio\":\"haul.mp3\",\"image\":\"haul.png\"},\"word2\":{\"word\":\"gauze\",\"display\":\"g<span>au</span>ze\",\"audio\":\"gauze.mp3\",\"image\":\"gauze.png\"},\"word3\":{\"word\":\"faucet\",\"display\":\"f<span>au</span>cet\",\"audio\":\"faucet.mp3\",\"image\":\"faucet.png\"},\"quiz-words\":[\"centaur\",\"dinosaur\",\"astronaut\",\"naughty\",\"caught\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Polly Flinders<br>Sat among the cinders,<br>Warming her pretty little toes.<br>Her mother came and c(au)ght her,<br>Whipped her little d(au)ghter<br>For spoiling her nice new clothes.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AW\",\"audio\":\"phoneme-A-AW.mp3\",\"display\":\"aw\",\"word1\":{\"word\":\"saw\",\"display\":\"s<span>aw</span>\",\"audio\":\"saw.mp3\",\"image\":\"saw.png\"},\"word2\":{\"word\":\"hawk\",\"display\":\"h<span>aw</span>k\",\"audio\":\"hawk.mp3\",\"image\":\"hawk.png\"},\"word3\":{\"word\":\"paws\",\"display\":\"p<span>aw</span>s\",\"audio\":\"paws.mp3\",\"image\":\"paws.png\"},\"quiz-words\":[\"claws\",\"yawn\",\"draw\",\"seesaw\",\"straw\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"See s(aw), Margery D(aw),<br>Jacky shall have a new master.<br>Jacky will earn just a penny a day,<br>Because he will work no faster.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AY\",\"audio\":\"phoneme-A-AY.mp3\",\"display\":\"ay\",\"word1\":{\"word\":\"jay\",\"display\":\"j<span>ay</span>\",\"audio\":\"jay.mp3\",\"image\":\"jay.png\"},\"word2\":{\"word\":\"ray\",\"display\":\"r<span>ay</span>\",\"audio\":\"ray.mp3\",\"image\":\"ray.png\"},\"word3\":{\"word\":\"play\",\"display\":\"pl<span>ay</span>\",\"audio\":\"play.mp3\",\"image\":\"play.png\"},\"quiz-words\":[\"say\",\"hay\",\"spray\",\"crayons\",\"birthday\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"How many d(ay)s has my baby to pl(ay)?<br>Saturd(ay); Sund(ay); Mond(ay);<br>Tuesd(ay); Wednesd(ay); Thursd(ay); Frid(ay);<br>Saturd(ay); Sund(ay); Mond(ay).\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-sss-begin\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"suitcase\",\"display\":\"<span>s</span>uitca<span>s</span>e\",\"audio\":\"suitcase.mp3\",\"image\":\"suitcase.png\"},\"word2\":{\"word\":\"say\",\"display\":\"<span>s</span>ay\",\"audio\":\"say.mp3\",\"image\":\"say.png\"},\"word3\":{\"word\":\"sneak\",\"display\":\"<span>s</span>neak\",\"audio\":\"sneak.mp3\",\"image\":\"sneak.png\"},\"quiz-words\":[\"sing\",\"sofa\",\"sun\",\"soap\",\"seal\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Little Robin Redbreast (s)at upon a tree,<br>Up went the Kitty-Cat, and down went he,<br>Down came Kitty-Cat, away Robin ran;<br>(S)ays little Robin Redbreast: “Catch me if you can!”<br><br>Little Robin Redbreast jumped upon a (s)pade,<br>Kitty-Cat jumped after him, and then he was afraid.<br>Little Robin chirped and (s)ang, and what did Kitty say?<br>Kitty-Cat (s)aid: “Meow, meow, meow,” and Robin flew away.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-sss-end\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"bus\",\"display\":\"bu<span>s</span>\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word2\":{\"word\":\"dress\",\"display\":\"dre<span>ss</span>\",\"audio\":\"dress.mp3\",\"image\":\"dress.png\"},\"word3\":{\"word\":\"grapes\",\"display\":\"grape<span>s</span>\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"quiz-words\":[\"stilts\",\"kiss\",\"moss\",\"pets\",\"ants\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Cat(s) like R, they say purrrrr.<br>Dogs do too, but they say grrrr,<br>Snake(s) like S, so they say hi(sss)<br>Bees like Zs, so they go buzzzz.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-zz\",\"audio\":\"phoneme-S-zz.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"dogs\",\"display\":\"dog<span>s</span>\",\"audio\":\"dogs.mp3\",\"image\":\"dogs.png\"},\"word2\":{\"word\":\"skis\",\"display\":\"ski<span>s</span>\",\"audio\":\"skis.mp3\",\"image\":\"skis.png\"},\"word3\":{\"word\":\"boots\",\"display\":\"boot<span>s</span>\",\"audio\":\"boots.mp3\",\"image\":\"boots.png\"},\"quiz-words\":[\"gloves\",\"raccoons\",\"crayons\",\"walnuts\",\"binoculars\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Scissor(s) and string,<br>Scissor(s) and string.<br>When a man'(s) single,<br>he live(s) like a king.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SC\",\"audio\":\"phoneme-S-SC.mp3\",\"display\":\"sc\",\"word1\":{\"word\":\"scarf\",\"display\":\"<span>sc</span>arf\",\"audio\":\"scarf.mp3\",\"image\":\"scarf.png\"},\"word2\":{\"word\":\"scold\",\"display\":\"<span>sc</span>old\",\"audio\":\"scold.mp3\",\"image\":\"scold.png\"},\"word3\":{\"word\":\"scare\",\"display\":\"<span>sc</span>are\",\"audio\":\"scare.mp3\",\"image\":\"scare.png\"},\"quiz-words\":[\"scowl\",\"scalp\",\"scale\",\"scuba\",\"school bus\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"The (sc)uba man yelled “(sc)at!”<br>And glowered at (Sc)aredy Cat,<br>She hid under a towel<br>While his face made a (sc)owl.<br>When (sc)uba man made a grab<br>She (sc)ratched his (sc)alp’s (sc)ab.\",\"category\":[\"CB-begin\",\"C\",\"CB\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SC-silent\",\"audio\":\"phoneme-S-SC-silent.mp3\",\"display\":\"sc\",\"word1\":{\"word\":\"scent\",\"display\":\"<span>sc</span>ent\",\"audio\":\"scent.mp3\",\"image\":\"scent.png\"},\"word2\":{\"word\":\"scene\",\"display\":\"<span>sc</span>ene\",\"audio\":\"scene.mp3\",\"image\":\"scene.png\"},\"word3\":{\"word\":\"science\",\"display\":\"<span>sc</span>ience\",\"audio\":\"science.mp3\",\"image\":\"science.png\"},\"quiz-words\":[\"muscles\",\"scissors\",\"ascend\",\"descend\",\"crescents\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"green\"},\"rhyme\":\"An evening (sc)ene, the crescent moon,<br>(Sc)enting the misty dew,<br>Bright stars, the crickets’ chirping tune –<br>Each night the world seems new.<br><br>Some say the moon rises at night,<br>Others say it a(sc)ends,<br>Some say the moon sets when night ends,<br>Others say it de(sc)ends.<br><br>A(sc)end means rise, de(sc)end means set,<br>Either’s okay to say.<br>(Sc)ientists say people forget.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SCR\",\"audio\":\"phoneme-S-SCR.mp3\",\"display\":\"scr\",\"word1\":{\"word\":\"scrub\",\"display\":\"<span>sc</span>rub\",\"audio\":\"scrub.mp3\",\"image\":\"scrub.png\"},\"word2\":{\"word\":\"scratch\",\"display\":\"<span>sc</span>ratch\",\"audio\":\"scratch.mp3\",\"image\":\"scratch.png\"},\"word3\":{\"word\":\"scream\",\"display\":\"<span>sc</span>ream\",\"audio\":\"scream.mp3\",\"image\":\"scream.png\"},\"quiz-words\":[\"scrubs\",\"screws\",\"screwdriver\",\"scraper\",\"scribble\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"(Scr)aper asked (Scr)ewdriver,<br>“What do you do?”<br>(Scr)ewdriver said, “I (scr)ew (scr)ews.<br>What do you do?”<br>“I (scr)atch off bumpy (scr)ew heads,<br>(scr)ape rough surfaces clean.”<br>“(Scr)am!” (scr)eamed the (scr)ew heads.<br>“(Scr)raping (scr)ew heads is mean!”\",\"category\":[\"CB-3\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SH-begin\",\"audio\":\"phoneme-S-SH.mp3\",\"display\":\"sh\",\"word1\":{\"word\":\"shapes\",\"display\":\"<span>sh</span>apes\",\"audio\":\"shapes.mp3\",\"image\":\"shapes.png\"},\"word2\":{\"word\":\"sheep\",\"display\":\"<span>sh</span>eep\",\"audio\":\"sheep.mp3\",\"image\":\"sheep.png\"},\"word3\":{\"word\":\"shark\",\"display\":\"<span>sh</span>ark\",\"audio\":\"shark.mp3\",\"image\":\"shark.png\"},\"quiz-words\":[\"shin\",\"shirt\",\"shoes\",\"shell\",\"shoulders\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"There was an old woman who lived in a (sh)oe;<br>(Sh)e had so many children (sh)e didn't know what to do.<br>(Sh)e gave them some broth without any bread;<br>Then whipped them all soundly and put them to bed.\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SH-end\",\"audio\":\"phoneme-S-SH.mp3\",\"display\":\"sh\",\"word1\":{\"word\":\"bush\",\"display\":\"bu<span>sh</span>\",\"audio\":\"bush.mp3\",\"image\":\"bush.png\"},\"word2\":{\"word\":\"wash\",\"display\":\"wa<span>sh</span>\",\"audio\":\"wash.mp3\",\"image\":\"wash.png\"},\"word3\":{\"word\":\"leash\",\"display\":\"lea<span>sh</span>\",\"audio\":\"leash.mp3\",\"image\":\"leash.png\"},\"quiz-words\":[\"squash\",\"radish\",\"ticklish\",\"starfish\",\"eyelash\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Driving on an ocean drawbridge<br>She began to wi(sh) a wi(sh)<br>She’d find fre(sh) tuna in her fridge,<br>Then--sma(sh) ba(sh) ma(sh)--this fi(sh)<br><br>Slammed hard into her face!<br>A flying fi(sh)! Bright mind-lights went fla(sh),<br>Blinding her–she braked to stop someplace,<br>Then slap bang went cra(sh)!<br><br>A cop showed up, she blushed a blu(sh),<br>Sobbed her story. He said,<br>“Sounds fishy!” Smiled, seemed in no ru(sh).<br>But, once her leg healed, they wed.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SK-begin\",\"audio\":\"phoneme-S-SK.mp3\",\"display\":\"sk\",\"word1\":{\"word\":\"skate\",\"display\":\"<span>sk</span>ate\",\"audio\":\"skate.mp3\",\"image\":\"skate.png\"},\"word2\":{\"word\":\"skunk\",\"display\":\"<span>sk</span>unk\",\"audio\":\"skunk.mp3\",\"image\":\"skunk.png\"},\"word3\":{\"word\":\"ski\",\"display\":\"<span>sk</span>i\",\"audio\":\"ski.mp3\",\"image\":\"ski.png\"},\"quiz-words\":[\"skinny\",\"skip\",\"sky\",\"skirt\",\"skeleton\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"If you (sk)ip in a (sk)irt<br>You better be (sk)illful,<br>(Sk)inning your knee can be<br>Terribly painful.<br>If you (sk)ate in long pants<br>Just be extra careful,<br>Tuck in your cuffs– <br>A (sk)id could be hurtful.<br>Be extra resourceful<br>And you’ll be successful!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SK-end\",\"audio\":\"phoneme-S-SK.mp3\",\"display\":\"sk\",\"word1\":{\"word\":\"ask\",\"display\":\"a<span>sk</span>\",\"audio\":\"ask.mp3\",\"image\":\"ask.png\"},\"word2\":{\"word\":\"desk\",\"display\":\"de<span>sk</span>\",\"audio\":\"desk.mp3\",\"image\":\"desk.png\"},\"word3\":{\"word\":\"tusk\",\"display\":\"tu<span>sk</span>\",\"audio\":\"tusk.mp3\",\"image\":\"tusk.png\"},\"quiz-words\":[\"mask\",\"disk\",\"dusk\",\"husk\",\"mollusk\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Could that monstrous lizard the basili(sk)<br>Really kill with just one glance? I wouldn’t ri(sk)<br>Trying to find out. Why, evenings at du(sk),<br>Does the sky turn pink? An elephant’s tu(sk),<br>How sharp is it?  Each a first rate question!<br>Not like those spelling, science, subtraction<br>Tests, all those un-fun questions teachers ask<br>That make you wish you had a magic ma(sk)\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SL\",\"audio\":\"phoneme-S-SL.mp3\",\"display\":\"sl\",\"word1\":{\"word\":\"sled\",\"display\":\"<span>sl</span>ed\",\"audio\":\"sled.mp3\",\"image\":\"sled.png\"},\"word2\":{\"word\":\"slip\",\"display\":\"<span>sl</span>ip\",\"audio\":\"slip.mp3\",\"image\":\"slip.png\"},\"word3\":{\"word\":\"slow\",\"display\":\"<span>sl</span>ow\",\"audio\":\"slow.mp3\",\"image\":\"slow.png\"},\"quiz-words\":[\"slide\",\"slice\",\"sleepy\",\"sleigh\",\"slippers\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"To bed; to bed; says (Sl)eepy Head;<br>\\\"Let's stay awhile;\\\" says (Sl)ow;<br>\\\"Put on the pot;\\\" says Hungry Ned;<br>\\\"We'll eat before we go.\\\"\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SM\",\"audio\":\"phoneme-S-SM.mp3\",\"display\":\"sm\",\"word1\":{\"word\":\"small\",\"display\":\"<span>sm</span>all\",\"audio\":\"small.mp3\",\"image\":\"small.png\"},\"word2\":{\"word\":\"smell\",\"display\":\"<span>sm</span>ell\",\"audio\":\"smell.mp3\",\"image\":\"smell.png\"},\"word3\":{\"word\":\"smile\",\"display\":\"<span>sm</span>ile\",\"audio\":\"smile.mp3\",\"image\":\"smile.png\"},\"quiz-words\":[\"smash\",\"smoke\",\"smart\",\"smooth\",\"smooch\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"The (sm)all chimp girl (sm)elled nice,<br>And (sm)iled at chimp boy once, twice.<br>On her (sm)ooth cheek he (sm)acked<br>A (sm)oochy kiss.  She whacked his back right back!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SN\",\"audio\":\"phoneme-S-SN.mp3\",\"display\":\"sn\",\"word1\":{\"word\":\"snow\",\"display\":\"<span>sn</span>ow\",\"audio\":\"snow.mp3\",\"image\":\"snow.png\"},\"word2\":{\"word\":\"sneak\",\"display\":\"<span>sn</span>eak\",\"audio\":\"sneak.mp3\",\"image\":\"sneak.png\"},\"word3\":{\"word\":\"snake\",\"display\":\"<span>sn</span>ake\",\"audio\":\"snake.mp3\",\"image\":\"snake.png\"},\"quiz-words\":[\"snout\",\"snail\",\"snap\",\"snack\",\"snare drum\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"(Sn)owbird tried to (sn)eak<br>A chocolate (sn)owball (sn)ack,<br>But (sn)ow(sn)ail squeezed his beak<br>And stole the (sn)ack right back.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SP\",\"audio\":\"phoneme-S-SP.mp3\",\"display\":\"sp\",\"word1\":{\"word\":\"spill\",\"display\":\"<span>sp</span>ill\",\"audio\":\"spill.mp3\",\"image\":\"spill.png\"},\"word2\":{\"word\":\"sports\",\"display\":\"<span>sp</span>orts\",\"audio\":\"sports.mp3\",\"image\":\"sports.png\"},\"word3\":{\"word\":\"spider\",\"display\":\"<span>sp</span>ider\",\"audio\":\"spider.mp3\",\"image\":\"spider.png\"},\"quiz-words\":[\"speak\",\"spyglass\",\"spade\",\"spoon\",\"cocker spaniel\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"I (sp)ied a dirty blue jay<br>On a '(sp)ecially hot (sp)ring day.<br>He (sp)lished and (sp)lashed in a birdbath,<br>Then (sp)eedily flew away.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SPL\",\"audio\":\"phoneme-S-SPL.mp3\",\"display\":\"spl\",\"word1\":{\"word\":\"split\",\"display\":\"<span>sp</span>lit\",\"audio\":\"split.mp3\",\"image\":\"split.png\"},\"word2\":{\"word\":\"splat\",\"display\":\"<span>sp</span>lat\",\"audio\":\"splat.mp3\",\"image\":\"splat.png\"},\"word3\":{\"word\":\"splash\",\"display\":\"<span>sp</span>lash\",\"audio\":\"splash.mp3\",\"image\":\"splash.png\"},\"quiz-words\":[\"splits\",\"splinter\",\"splatter\",\"splendid\",\"splendor\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Squirrel fell (spl)at on a (spl)it stick,<br>Quick (spl)uttered out, “Oh no!<br>Then (spl)ashed down in a birdbath<br>(spl)attered water to and fro,<br>Howled “A (spl)inter’s in my forepaw!”<br>And di(spl)ayed his sore, sore toe.\",\"category\":[\"CB-3\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SPR\",\"audio\":\"phoneme-S-SPR.mp3\",\"display\":\"spr\",\"word1\":{\"word\":\"spread\",\"display\":\"<span>sp</span>read\",\"audio\":\"spread.mp3\",\"image\":\"spread.png\"},\"word2\":{\"word\":\"spruce\",\"display\":\"<span>sp</span>ruce\",\"audio\":\"spruce.mp3\",\"image\":\"spruce.png\"},\"word3\":{\"word\":\"sprain\",\"display\":\"<span>sp</span>rain\",\"audio\":\"sprain.mp3\",\"image\":\"sprain.png\"},\"quiz-words\":[\"sprawl\",\"sprout\",\"spray\",\"sprinters\",\"sprinkler\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"A (spr)y old (spr)inter raced ahead<br>But got stung by a bee,<br>Slipped on some slippery (spr)inkler (spr)ay,<br>Crashed through a rough (spr)uce tree,<br>Fell (spr)awling down and loudly howled,<br>“I won! — but (spr)ained my knee!”\",\"category\":[\"CB-3\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-ST-begin\",\"audio\":\"phoneme-S-ST.mp3\",\"display\":\"st\",\"word1\":{\"word\":\"stop\",\"display\":\"<span>st</span>op\",\"audio\":\"stop.mp3\",\"image\":\"stop.png\"},\"word2\":{\"word\":\"step\",\"display\":\"<span>st</span>ep\",\"audio\":\"step.mp3\",\"image\":\"step.png\"},\"word3\":{\"word\":\"stick\",\"display\":\"<span>st</span>ick\",\"audio\":\"stick.mp3\",\"image\":\"stick.png\"},\"quiz-words\":[\"stilts\",\"storm\",\"stool\",\"stump\",\"stinger\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Robin and Richard<br>Were two lazy men;<br>They (st)ayed in bed<br>Till the clock (st)ruck ten.<br>Then up jumps Robin<br>And looks at the sky:<br>“Oh, brother Richard,<br>The sun’s very high.<br>You walk fir(st)<br>With the bottle and bag,<br>And I’ll ride later<br>On the gray horse nag.”<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-ST-end\",\"audio\":\"phoneme-S-ST.mp3\",\"display\":\"st\",\"word1\":{\"word\":\"fast\",\"display\":\"fa<span>st</span>\",\"audio\":\"fast.mp3\",\"image\":\"fast.png\"},\"word2\":{\"word\":\"rest\",\"display\":\"re<span>st</span>\",\"audio\":\"rest.mp3\",\"image\":\"rest.png\"},\"word3\":{\"word\":\"cast\",\"display\":\"ca<span>st</span>\",\"audio\":\"cast.mp3\",\"image\":\"cast.png\"},\"quiz-words\":[\"first\",\"chest\",\"artist\",\"wrist\",\"forest\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Once on a pretend time didn’t you tell me,<br>You ho(st)ed a happy pet-pair party?<br>You  decided on goodies to buy at the store, <br>With your favorite pet dog made a gue(st) li(st) of four,<br>Invited a cyclops with a pet pig to attend,<br>And a fairy paired with a pet parrot be(st) friend.<br>You spread a bright blanket with places for six,<br>And bowls for dog food, pig food, and a mix<br>Of treats for the picky parrot.  For the re(st)<br>Cold milk, cake on a platter, and the be(st)<br>Ice cream—chocolate, vanilla, strawberry—<br>Topped with sprinkles, nuts, a bright red cherry,<br>And butter-scotch syrup! Gosh it’s yummy,<br>Yum yummy in a tum, tum, tummy!<br>The dog, and pig, and parrot played so well,<br>And everyone loved it, so I heard tell. <br>The cyclops kept bragging that you were so clever, <br>And the fairy declared it the (best) party ever!\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-STR\",\"audio\":\"phoneme-S-STR.mp3\",\"display\":\"str\",\"word1\":{\"word\":\"strong\",\"display\":\"<span>str</span>ong\",\"audio\":\"strong.mp3\",\"image\":\"strong.png\"},\"word2\":{\"word\":\"straw\",\"display\":\"<span>str</span>aw\",\"audio\":\"straw.mp3\",\"image\":\"straw.png\"},\"word3\":{\"word\":\"string\",\"display\":\"<span>str</span>ing\",\"audio\":\"string.mp3\",\"image\":\"string.png\"},\"quiz-words\":[\"stripes\",\"strings\",\"straight\",\"structures\",\"street-sweeper\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"(Str)eet sweeper swept the (str)eet,<br>Cleaned (str)aw, (str)ing, like a dream,<br>Then gobbled down his favorite treat,<br>Sweet (str)awberry ice cream.\",\"category\":[\"CB-3\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SW\",\"audio\":\"phoneme-S-SW.mp3\",\"display\":\"sw\",\"word1\":{\"word\":\"swim\",\"display\":\"<span>sw</span>im\",\"audio\":\"swim.mp3\",\"image\":\"swim.png\"},\"word2\":{\"word\":\"swing\",\"display\":\"<span>sw</span>ing\",\"audio\":\"swing.mp3\",\"image\":\"swing.png\"},\"word3\":{\"word\":\"swan\",\"display\":\"<span>sw</span>an\",\"audio\":\"swan.mp3\",\"image\":\"swan.png\"},\"quiz-words\":[\"sweets\",\"swine\",\"sweater\",\"side-swept\",\"street-sweeper\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"(Sw)an (sw)am over the sea,<br>(Sw)im (sw)an (sw)im!<br>(Sw)an (sw)am back again,<br>Well (sw)um (sw)an!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-tttt-begin\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"toe\",\"display\":\"<span>t</span>oe\",\"audio\":\"toe.mp3\",\"image\":\"toe.png\"},\"word2\":{\"word\":\"toys\",\"display\":\"<span>t</span>oys\",\"audio\":\"toys.mp3\",\"image\":\"toys.png\"},\"word3\":{\"word\":\"tail\",\"display\":\"<span>t</span>ail\",\"audio\":\"tail.mp3\",\"image\":\"tail.png\"},\"quiz-words\":[\"tiger\",\"tent\",\"turtle\",\"tuba\",\"teeter-totter\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(T)homas A’(T)attamus took two (T)’s<br>(T)o (t)ie (t)wo (t)ubs (t)o (t)wo (t)all trees,<br>(T)o frighten the (t)errible (T)homas A’(T)attamus!<br>(T)ell me how many (T)’s there are in all that?\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-tttt-end\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"net\",\"display\":\"ne<span>t</span>\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"word2\":{\"word\":\"paint\",\"display\":\"pain<span>t</span>\",\"audio\":\"paint.mp3\",\"image\":\"paint.png\"},\"word3\":{\"word\":\"tent\",\"display\":\"<span>t</span>en<span>t</span>\",\"audio\":\"tent.mp3\",\"image\":\"tent.png\"},\"quiz-words\":[\"cat\",\"vet\",\"cast\",\"hunt\",\"goat\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Lucy Locke(t) los(t) her pocke(t),<br>Kitty Fisher found I(t);<br>There was no(t) a penny in I(t),<br>But a ribbon round i(t).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-TCH-silent\",\"audio\":\"phoneme-T-TCH-silent.mp3\",\"display\":\"tch\",\"word1\":{\"word\":\"pitch\",\"display\":\"pi<span>tch</span>\",\"audio\":\"pitch.mp3\",\"image\":\"pitch.png\"},\"word2\":{\"word\":\"catch\",\"display\":\"ca<span>tch</span>\",\"audio\":\"catch.mp3\",\"image\":\"catch.png\"},\"word3\":{\"word\":\"match\",\"display\":\"ma<span>tch</span>\",\"audio\":\"match.mp3\",\"image\":\"match.png\"},\"quiz-words\":[\"hitch\",\"hatchet\",\"itches\",\"crutches\",\"wristwatch\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"They grow well in a garden pa(tch),<br>Taste yummy in a pie,<br>Broth, toast, and cheesey flavors ma(tch)<br>In soup— or slice and fry.<br>Their layers you can unatt(ach)<br>And see through if you try.<br>They never make you i(tch) or scra(tch)<br>But they can make you cry.<br>Grownups like-em more than young-uns,<br>These are—\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"T-the\",\"audio\":\"phoneme-T-the.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"them\",\"display\":\"<span>th</span>em\",\"audio\":\"them.mp3\",\"image\":\"them.png\"},\"word2\":{\"word\":\"there\",\"display\":\"<span>th</span>ere\",\"audio\":\"there.mp3\",\"image\":\"there.png\"},\"word3\":{\"word\":\"these\",\"display\":\"<span>th</span>ese\",\"audio\":\"these.mp3\",\"image\":\"these.png\"},\"quiz-words\":[\"they\",\"those\",\"that\",\"this\",\"their\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Bye; baby bunting;<br>Fa(th)er's gone a-hunting;<br>Mo(th)er's gone a-milking;<br>Sister's gone a-silking;<br>And Bro(th)er's gone for a rabbit skin;<br>To wrap little baby bunting in.\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"T-th-begin\",\"audio\":\"phoneme-T-th.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"throne\",\"display\":\"<span>th</span>rone\",\"audio\":\"throne.mp3\",\"image\":\"throne.png\"},\"word2\":{\"word\":\"thieves\",\"display\":\"<span>th</span>ieves\",\"audio\":\"thieves.mp3\",\"image\":\"thieves.png\"},\"word3\":{\"word\":\"throw\",\"display\":\"<span>th</span>row\",\"audio\":\"throw.mp3\",\"image\":\"throw.png\"},\"quiz-words\":[\"think\",\"thirsty\",\"thick\",\"thumb\",\"thumbnail\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"The (th)in queen sat high on her (th)rone,<br>A (th)ick (th)imble shielding her (th)umb,<br>Admiring the fine (th)ing she’d sewn, <br>Wondering when the king would come.<br><br>The  glum king slouched toward his (th)rone,<br>And moaned and groaned and sucked one (th)umb,<br>Hurt playing baseball wi(th) a stone,<br>The  o(th)er just felt stiff and numb.<br><br>When she showed the gift she’d sewed<br>To (th)ank her, (th)ree times he leapt high<br>Her kiss once changed him from a toad.<br>A baseball’s great for any guy!\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-th-end\",\"audio\":\"phoneme-T-th.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"moth\",\"display\":\"mo<span>th</span>\",\"audio\":\"moth.mp3\",\"image\":\"moth.png\"},\"word2\":{\"word\":\"path\",\"display\":\"pa<span>th</span>\",\"audio\":\"path.mp3\",\"image\":\"path.png\"},\"word3\":{\"word\":\"teeth\",\"display\":\"tee<span>th</span>\",\"audio\":\"teeth.mp3\",\"image\":\"teeth.png\"},\"quiz-words\":[\"mouth\",\"both\",\"tooth\",\"shoulder-length\",\"bathtub\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"I don’t <i>think</i> it really happened last night,<br>After my ba(th), snuggling, both eyes squeezed tight,<br>I <i>thought</i> someone—or something—said,<br>“Stop!’ —inside…or maybe outside…my head.<br>I <i>believe</i> a teeny-tiny giraffe shadow,<br>Popped from the dark, hopped on the window,<br>And howled, “Don’t tickle me— you bucktoo(th) mo(th) you!”<br>That’s not normal!  Not what shadows should do!<br>Is it…?  This huge big-mou(th) mo(th) said, “I’m no mo(th) now,<br>So I’ll just tickle your noodle-neck anyhow!”<br>Wham! –and it changed to a sasquatch then!<br>What!?  And the other shadow, who had been<br>This giraffe, became a strange dino-bird!  Whaaat?!  I squeezed<br>My eyes tighter as sasquatch pranced and teased,<br>“NAH-nah-NAH-nah-NAH-NAH.” I spied<br>It zip benea(th) the bed, try to hide,<br>Then scramble to the ceiling, hip-hop<br>Over a shadow unicorn then snap-stop,<br>Catch its brea(th) to stretch its long fingers <i>every</i> where,<br>Tickling a weird centaur here, a goofy robot there.<br>This tickle-craziness made me crazy too,<br>And in tru(th) I knew only one thing to do!<br>I leapt from my bed, quick flashed on the light!<br>Shadows take flight from fright when it’s bright—<br>And stay far away, if you wave a flashlight!\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-TR\",\"audio\":\"phoneme-T-TR.mp3\",\"display\":\"tr\",\"word1\":{\"word\":\"trunk\",\"display\":\"<span>tr</span>unk\",\"audio\":\"trunk.mp3\",\"image\":\"trunk.png\"},\"word2\":{\"word\":\"tractor\",\"display\":\"<span>tr</span>actor\",\"audio\":\"tractor.mp3\",\"image\":\"tractor.png\"},\"word3\":{\"word\":\"tricky\",\"display\":\"<span>tr</span>icky\",\"audio\":\"tricky.mp3\",\"image\":\"tricky.png\"},\"quiz-words\":[\"trumpet\",\"tricycle\",\"triceratops\",\"triangles\",\"trash truck\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Mis(tr)ess Mary; quite con(tr)ary;<br>How does your garden grow?<br>With silver bells and cockle shells;<br>And pretty maids all in a row.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-guh-begin\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"goose\",\"display\":\"<span>g</span>oose\",\"audio\":\"goose.mp3\",\"image\":\"goose.png\"},\"word2\":{\"word\":\"goat\",\"display\":\"<span>g</span>oat\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word3\":{\"word\":\"gold\",\"display\":\"<span>g</span>old\",\"audio\":\"gold.mp3\",\"image\":\"gold.png\"},\"quiz-words\":[\"goal\",\"grapes\",\"gate\",\"go-kart\",\"gazelle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"As I was (g)oing up Primrose Hill,<br>Primrose Hill was dirty;<br>There I met a pretty (g)irl,<br>And she (g)ave me a curtsey.<br><br>Little (g)irl, pretty (g)irl,<br>Blessings be upon you;<br>If I had half-a-dollar a day,<br>I’d spend it all on you.\",\"category\":[\"C-begin\",\"CG\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-guh-end\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"frog\",\"display\":\"fro<span>g</span>\",\"audio\":\"frog.mp3\",\"image\":\"frog.png\"},\"word2\":{\"word\":\"plug\",\"display\":\"plu<span>g</span>\",\"audio\":\"plug.mp3\",\"image\":\"plug.png\"},\"word3\":{\"word\":\"bug\",\"display\":\"bu<span>g</span>\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"quiz-words\":[\"hog\",\"wig\",\"flag\",\"dog\",\"dig\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"To market, to market,<br>To buy a fat pi(g);<br>Home again, home again,<br>Jiggety ji(g).<br><br>To market, to market,<br>To buy a fat ho(g);<br>Home again, home again,<br>Jiggety jo(g).\",\"category\":[\"C-end\",\"CG\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-juh\",\"audio\":\"phoneme-G-juh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"giraffe\",\"display\":\"<span>g</span>iraffe\",\"audio\":\"giraffe.mp3\",\"image\":\"giraffe.png\"},\"word2\":{\"word\":\"gingerbread man\",\"display\":\"<span>g</span>in<span>g</span>erbread man\",\"audio\":\"gingerbread man.mp3\",\"image\":\"gingerbread man.png\"},\"word3\":{\"word\":\"fridge\",\"display\":\"frid<span>g</span>e\",\"audio\":\"fridge.mp3\",\"image\":\"fridge.png\"},\"quiz-words\":[\"bridge\",\"fringe\",\"hedge clippers\",\"syringe\",\"bandage\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"(G)eorgie Por(g)ie, pudding and pie,<br>Kissed the girls and made them cry.<br>When the boys came out to play,<br>(G)eorgie Por(g)ie ran away.\",\"category\":[\"CG\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"G-GH\",\"audio\":\"phoneme-G-GH.mp3\",\"display\":\"gh\",\"word1\":{\"word\":\"laugh\",\"display\":\"lau<span>gh</span>\",\"audio\":\"laugh.mp3\",\"image\":\"laugh.png\"},\"word2\":{\"word\":\"tough\",\"display\":\"tou<span>gh</span>\",\"audio\":\"tough.mp3\",\"image\":\"tough.png\"},\"word3\":{\"word\":\"rough\",\"display\":\"rou<span>gh</span>\",\"audio\":\"rough.mp3\",\"image\":\"rough.png\"},\"quiz-words\":[\"cough\",\"enough\",\"water trough\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"He looked kind of rou(gh).<br>And tried to act tou(gh),<br>To frighten the ballerina.<br><br>He was quite impolite<br>When he dared her to fi(gh)t,<br>And laughed like a goofy hyena.<br><br>Her quick fists made him cou(gh),<br>He splashed in a pig trou(gh),<br>Then she danced from the boxing arena.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"G-GH-silent\",\"audio\":\"phoneme-G-GH-silent.mp3\",\"display\":\"gh\",\"word1\":{\"word\":\"high\",\"display\":\"hi<span>gh</span>\",\"audio\":\"high.mp3\",\"image\":\"high.png\"},\"word2\":{\"word\":\"right\",\"display\":\"ri<span>gh</span>t\",\"audio\":\"right.mp3\",\"image\":\"right.png\"},\"word3\":{\"word\":\"eight\",\"display\":\"ei<span>gh</span>t\",\"audio\":\"eight.mp3\",\"image\":\"eight.png\"},\"quiz-words\":[\"sleigh\",\"tight\",\"flight\",\"straight\",\"nightgown\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"green\"},\"rhyme\":\"Read the riddle — find the kind of band,<br>Unlikely to play music, that can show ei(gh)t<br>Bri(gh)t colors, even more, be short, expand,<br>Be dou(gh)nut round or arrow strai(gh)t;<br>Each when ti(gh)t flies hi(gh). To understand,<br>Read each line’s first letter. Concentrate.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"G-GL\",\"audio\":\"phoneme-G-GL.mp3\",\"display\":\"gl\",\"word1\":{\"word\":\"glad\",\"display\":\"<span>gl</span>ad\",\"audio\":\"glad.mp3\",\"image\":\"glad.png\"},\"word2\":{\"word\":\"glum\",\"display\":\"<span>gl</span>um\",\"audio\":\"glum.mp3\",\"image\":\"glum.png\"},\"word3\":{\"word\":\"glow\",\"display\":\"<span>gl</span>ow\",\"audio\":\"glow.mp3\",\"image\":\"glow.png\"},\"quiz-words\":[\"glue\",\"glove\",\"glass\",\"globe\",\"glazed\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"A (gl)ass of juice<br>And a (gl)azed donut,<br>Put (gl)ad in the heart<br>And a (gl)ow in the gut.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-GN-silent\",\"audio\":\"phoneme-G-GN-silent.mp3\",\"display\":\"gn\",\"word1\":{\"word\":\"gnaw\",\"display\":\"<span>gn</span>aw\",\"audio\":\"gnaw.mp3\",\"image\":\"gnaw.png\"},\"word2\":{\"word\":\"gnome\",\"display\":\"<span>gn</span>ome\",\"audio\":\"gnome.mp3\",\"image\":\"gnome.png\"},\"word3\":{\"word\":\"gnat\",\"display\":\"<span>gn</span>at\",\"audio\":\"gnat.mp3\",\"image\":\"gnat.png\"},\"quiz-words\":[\"align\",\"foreign\",\"gnarly\",\"sovereign\",\"gnu\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"A screen can keep out tiny (gn)ats.<br>A (gn)ome’s a kind of elf.<br>A soverei(gn)’s a king or queen,<br>— In dreamland like yourself.<br><br>A beaver (gn)aws on bark for food,<br>A (gn)u’s a wildebeest.<br>A silent g is (gn)arly, dude!<br>— Or I think so at least.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"G-GR\",\"audio\":\"phoneme-G-GR.mp3\",\"display\":\"gr\",\"word1\":{\"word\":\"grapes\",\"display\":\"<span>gr</span>apes\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"word2\":{\"word\":\"grow\",\"display\":\"<span>gr</span>ow\",\"audio\":\"grow.mp3\",\"image\":\"grow.png\"},\"word3\":{\"word\":\"greyhound\",\"display\":\"<span>gr</span>eyhound\",\"audio\":\"greyhound.mp3\",\"image\":\"greyhound.png\"},\"quiz-words\":[\"green\",\"grasshopper\",\"grandmother\",\"grandfather clock\",\"grizzly bear\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"(Gr)ouchy (gr)emlin’s (gr)umpy tummy (gr)owled,<br>“I’m hun(gr)y, feed me, feed me,” it howled.<br>When a (gr)inning (gr)izzly (gr)abbed it tight,<br>(Gr)umpy tummy squeeeezed out of sight.<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-nnn-begin\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"noise\",\"display\":\"<span>n</span>oise\",\"audio\":\"noise.mp3\",\"image\":\"noise.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"<span>n</span>ail\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"nest\",\"display\":\"<span>n</span>est\",\"audio\":\"nest.mp3\",\"image\":\"nest.png\"},\"quiz-words\":[\"net\",\"nuts\",\"nap\",\"nurse\",\"nose\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"“Croak,” said the toad, “I’m hungry I think,<br>To-day I’ve had (n)othing to eat or to drink;<br>I’ll crawl to a garden and jump through the pales,<br>And there I’ll dine (n)icely on slugs and on snails.”<br><br>“Ho, ho!” quoth the frog, “is that what you mean?<br>Then I’ll hop away to the (n)ext meadow stream,<br>There I will drink, and eat worms and slugs too,<br>And then I shall have a good dinner like you.”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-nnn-end\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"rain\",\"display\":\"rai<span>n</span>\",\"audio\":\"rain.mp3\",\"image\":\"rain.png\"},\"word2\":{\"word\":\"van\",\"display\":\"va<span>n</span>\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"fin\",\"display\":\"fi<span>n</span>\",\"audio\":\"fin.mp3\",\"image\":\"fin.png\"},\"quiz-words\":[\"yawn\",\"lion\",\"moon\",\"fan\",\"nun\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Sing a song of sixpence, a pocket full of rye,<br>Four and twenty blackbirds baked i(n) a pie.<br>When the pie was opened the birds bega(n) to sing,<br>Now wasn’t this a dainty dish to set before the king?<br>The king was i(n) the parlor counting out his money;<br>The queen was i(n) the kitche(n) eating bread and honey;<br>The maid was i(n) the garde(n) hanging out the clothes,<br>And along came a blackbird and nipped off her nose.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-ND\",\"audio\":\"phoneme-N-ND.mp3\",\"display\":\"nd\",\"word1\":{\"word\":\"wind\",\"display\":\"wi<span>nd</span>\",\"audio\":\"wind.mp3\",\"image\":\"wind.png\"},\"word2\":{\"word\":\"pond\",\"display\":\"po<span>nd</span>\",\"audio\":\"pond.mp3\",\"image\":\"pond.png\"},\"word3\":{\"word\":\"hand\",\"display\":\"ha<span>nd</span>\",\"audio\":\"hand.mp3\",\"image\":\"hand.png\"},\"quiz-words\":[\"round\",\"behind\",\"hound\",\"diamond\",\"woodwind\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Ha(nd)y-spa(nd)y; Jacky da(nd)y;<br>Loves plum cake a(nd) sugar ca(nd)y.<br>He bought some at a grocer's shop;<br>A(nd) pleased ran away going hop; hop; hop.\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"N-NG\",\"audio\":\"phoneme-N-NG.mp3\",\"display\":\"ng\",\"word1\":{\"word\":\"wing\",\"display\":\"wi<span>ng</span>\",\"audio\":\"wing.mp3\",\"image\":\"wing.png\"},\"word2\":{\"word\":\"bang\",\"display\":\"ba<span>ng</span>\",\"audio\":\"bang.mp3\",\"image\":\"bang.png\"},\"word3\":{\"word\":\"strong\",\"display\":\"stro<span>ng</span>\",\"audio\":\"strong.mp3\",\"image\":\"strong.png\"},\"quiz-words\":[\"king\",\"fang\",\"young\",\"long\",\"swing\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Si(ng) a so(ng) of sixpence, a pocket full of rye,<br>Four and twenty blackbirds baked in a pie.<br>When the pie was opened the birds began to si(ng),<br>Now wasn’t this a dainty dish to set before the ki(ng)?<br><br>The ki(ng) was in the parlor counti(ng) out his money;<br>The queen was in the kitchen eati(ng) bread and honey;<br>The maid was in the garden ha(ng)i(ng) out the clothes,<br>And alo(ng) came a blackbird and nipped off her nose.<br>\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-NK\",\"audio\":\"phoneme-N-NK.mp3\",\"display\":\"nk\",\"word1\":{\"word\":\"tank\",\"display\":\"ta<span>nk</span>\",\"audio\":\"tank.mp3\",\"image\":\"tank.png\"},\"word2\":{\"word\":\"pink\",\"display\":\"pi<span>nk</span>\",\"audio\":\"pink.mp3\",\"image\":\"pink.png\"},\"word3\":{\"word\":\"trunk\",\"display\":\"tru<span>nk</span>\",\"audio\":\"trunk.mp3\",\"image\":\"trunk.png\"},\"quiz-words\":[\"bank\",\"skunk\",\"drink\",\"think\",\"chipmunk\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"There was an old woman; and what do you thi(nk)?<br>She lived upon nothing but foods and dri(nk);<br>Food and dri(nk) made up most of her diet;<br>And yet this old woman could never be quiet.\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"N-NT\",\"audio\":\"phoneme-N-NT.mp3\",\"display\":\"nt\",\"word1\":{\"word\":\"ant\",\"display\":\"a<span>nt</span>\",\"audio\":\"ant.mp3\",\"image\":\"ant.png\"},\"word2\":{\"word\":\"tent\",\"display\":\"te<span>nt</span>\",\"audio\":\"tent.mp3\",\"image\":\"tent.png\"},\"word3\":{\"word\":\"point\",\"display\":\"poi<span>nt</span>\",\"audio\":\"point.mp3\",\"image\":\"point.png\"},\"quiz-words\":[\"plant\",\"hydrant\",\"paint\",\"present\",\"equipment\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"The little kid got tired of bricks, ceme(nt),<br>hydra(nt)s, traffic wherever he we(nt),<br>Mom ra(nt)ing, ‘Don’t have an accide(nt)!’<br>He mea(nt) to camp awhile and hu(nt), we(nt)<br>Out back, picked a spot among the pla(nt)s,<br>Set up his homemade te(nt). His pa(nt)s<br>Felt itchy, but he saw no a(nt)s,<br>But suddenly a sideways glance<br>At <i>something</i> made him start to think<br>Bad thoughts, then <i>something</i> seemed to slink<br>Behind his te(nt).  He heard some weird clink,<br>Then  smelled some rotten skunky stink,<br>And seemed to hear a growly gru(nt).<br>Decided not to face or confro(nt)<br>Some beast in the back yard or the fro(nt),<br>So raced inside to conduct his hu(nt).\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"I-long\",\"audio\":\"phoneme-I-long.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"ice\",\"display\":\"<span>i</span>ce\",\"audio\":\"ice.mp3\",\"image\":\"ice.png\"},\"word2\":{\"word\":\"five\",\"display\":\"f<span>i</span>ve\",\"audio\":\"five.mp3\",\"image\":\"five.png\"},\"word3\":{\"word\":\"lion\",\"display\":\"l<span>i</span>on\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"quiz-words\":[\"mice\",\"slide\",\"climb\",\"bride\",\"drive\",\"tricycle\",\"spider\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Three bl(i)nd m(i)ce, three bl(i)nd m(i)ce,<br>See how they run, see how they run.<br>They all ran after the farmer's w(i)fe,<br>She cut off their tails with a carving kn(i)fe.<br>Did you ever see such a s(i)ght in your l(i)fe<br>As three bl(i)nd m(i)ce?\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"I-e\",\"audio\":\"phoneme-I-long.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"tie\",\"display\":\"t<span>i</span><u>e</u>\",\"audio\":\"tie.mp3\",\"image\":\"tie.png\"},\"word2\":{\"word\":\"pie\",\"display\":\"p<span>i</span><u>e</u>\",\"audio\":\"pie.mp3\",\"image\":\"pie.png\"},\"word3\":{\"word\":\"kite\",\"display\":\"k<span>i</span>t<u>e</u>\",\"audio\":\"kite.mp3\",\"image\":\"kite.png\"},\"quiz-words\":[\"hide\",\"ride\",\"slide\",\"stripes\",\"pliers\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Airl(i)nes and railroads are big fans of m(i)ne.<br>Check out my face and you’ll see f(i)ve and n(i)ne.<br>Look at my hands, you’ll know I can’t clap though.<br>One hand of m(i)ne l(i)kes to be fast, one slow.<br>Can’t sing, but when I’m big will somet(i)mes ch(i)me.<br>Kids need me most when they don’t have the t(i)me.\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"I-short\",\"audio\":\"phoneme-I-short.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"mittens\",\"display\":\"m<span>i</span>ttens\",\"audio\":\"mittens.mp3\",\"image\":\"mittens.png\"},\"word2\":{\"word\":\"hit\",\"display\":\"h<span>i</span>t\",\"audio\":\"hit.mp3\",\"image\":\"hit.png\"},\"word3\":{\"word\":\"fish\",\"display\":\"f<span>i</span>sh\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"quiz-words\":[\"lizard\",\"window\",\"frisbee\",\"slippers\",\"chimney\",\"fiddle\",\"unicycle\",\"ostrich\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Jack; be n(i)mble; Jack; be qu(i)ck.<br>Jack; jump over the candlest(i)ck.\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"I-schwa\",\"audio\":\"phoneme-I-schwa.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"rabbit\",\"display\":\"rabb<span>i</span>t\",\"audio\":\"rabbit.mp3\",\"image\":\"rabbit.png\"},\"word2\":{\"word\":\"pencil\",\"display\":\"penc<span>i</span>l\",\"audio\":\"pencil.mp3\",\"image\":\"pencil.png\"},\"word3\":{\"word\":\"robin\",\"display\":\"rob<span>i</span>n\",\"audio\":\"robin.mp3\",\"image\":\"robin.png\"},\"quiz-words\":[\"gossip\",\"tennis\",\"artist\",\"muffins\",\"nostril\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"2nd\":\"black\"},\"rhyme\":\"Oh, do you know the muff(i)n-man,<br>The muff(i)n-man, the muff(i)n-man?<br>Do you know the muff(i)n-man<br>Who lives in Drury Lane?<br><br>Yes, I know the muff(i)n-man,<br>The muff(i)n-man, the muff(i)n-man.<br>Yes, I know the muff(i)n-man<br>Who lives in Drury Lane.\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"I-ee\",\"audio\":\"phoneme-I-ee.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"taxi\",\"display\":\"tax<span>i</span>\",\"audio\":\"taxi.mp3\",\"image\":\"taxi.png\"},\"word2\":{\"word\":\"yeti\",\"display\":\"yet<span>i</span>\",\"audio\":\"yeti.mp3\",\"image\":\"yeti.png\"},\"word3\":{\"word\":\"skis\",\"display\":\"sk<span>i</span>s\",\"audio\":\"skis.mp3\",\"image\":\"skis.png\"},\"quiz-words\":[\"sari\",\"trio\",\"piano\",\"alien\",\"machine\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"K\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"While eating hot chil(i),<br>They planned a safar(i)<br>To bring back a yet(i).<br>Both dressed in new khak(i),<br>Topped off with a kep(i),<br>But learned that their tax(i),<br>Had almost hit Bamb(i),<br><br>So instead took a jet sk(i)<br>And found a bik(i)n(i)!<br>[But just an emoj(i).]\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"I-IE\",\"audio\":\"phoneme-I-IE.m4a\",\"display\":\"ie\",\"word1\":{\"word\":\"thief\",\"display\":\"th<span>ie</span>f\",\"audio\":\"thief.mp3\",\"image\":\"thief.png\"},\"word2\":{\"word\":\"collie\",\"display\":\"coll<span>ie</span>\",\"audio\":\"collie.mp3\",\"image\":\"collie.png\"},\"word3\":{\"word\":\"diesel truck\",\"display\":\"d<span>ie</span>sel truck\",\"audio\":\"diesel truck.mp3\",\"image\":\"diesel truck.png\"},\"quiz-words\":[\"hoodie\",\"cookies\",\"babies\",\"berries\",\"coastie\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Cranberr(ie)s for yummy muffins,<br>And also berr(ie)s blue,<br>Strawberr(ie)s for scrumptious jelly,<br>Raspberr(ie)s and blackberr(ie)s too!\",\"category\":[\"VP\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IGH\",\"audio\":\"phoneme-I-IGH.mp3\",\"display\":\"igh\",\"word1\":{\"word\":\"high\",\"display\":\"h<span>igh</span>\",\"audio\":\"high.mp3\",\"image\":\"high.png\"},\"word2\":{\"word\":\"thigh\",\"display\":\"th<span>igh</span>\",\"audio\":\"thigh.mp3\",\"image\":\"thigh.png\"},\"word3\":{\"word\":\"right\",\"display\":\"r<span>igh</span>t\",\"audio\":\"right.mp3\",\"image\":\"right.png\"},\"quiz-words\":[\"fight\",\"tight\",\"night\",\"brighten\",\"lightning\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Star l(igh)t, star br(igh)t,<br>First star I see ton(igh)t,<br>I wish I may, I wish I m(igh)t,<br>Have the wish I wish ton(igh)t.\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IL-long\",\"audio\":\"phoneme-I-IL-long.mp3\",\"display\":\"il\",\"word1\":{\"word\":\"wild\",\"display\":\"w<span>il</span>d\",\"audio\":\"wild.mp3\",\"image\":\"wild.png\"},\"word2\":{\"word\":\"child\",\"display\":\"ch<span>il</span>d\",\"audio\":\"child.mp3\",\"image\":\"child.png\"},\"word3\":{\"word\":\"pilot\",\"display\":\"p<span>il</span>ot\",\"audio\":\"pilot.mp3\",\"image\":\"pilot.png\"},\"quiz-words\":[\"smile\",\"reptiles\",\"crocodile\",\"silent\",\"agile\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Though Granddad always says I should go slow,<br>I’ll race around his farm whenever I can,<br>Love climbing high hay p(il)es, peeking in the s(il)o,<br>Though smelling the s(il)age stink’s not in my plan.<br><br>I climb on his tractor, and tiller and plows,<br>Seeing his w(il)d bull and m(il)d cows brings sm(il)es,<br>And roosters and chickens, his boar pigs and sows.<br>Visiting’s super, despite all the m(il)es!\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IL-short\",\"audio\":\"phoneme-I-IL-short.mp3\",\"display\":\"il\",\"word1\":{\"word\":\"milk\",\"display\":\"m<span>il</span>k\",\"audio\":\"milk.mp3\",\"image\":\"milk.png\"},\"word2\":{\"word\":\"lily\",\"display\":\"l<span>il</span>y\",\"audio\":\"lily.mp3\",\"image\":\"lily.png\"},\"word3\":{\"word\":\"tilt\",\"display\":\"t<span>il</span>t\",\"audio\":\"tilt.mp3\",\"image\":\"tilt.png\"},\"quiz-words\":[\"stilts\",\"build\",\"silver\",\"military\",\"children\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Jack and J(ill) went up the h(ill);<br>To fetch a pail of water;<br>Jack fell down and broke his crown;<br>And J(ill) came tumbling after.\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-ILD\",\"audio\":\"phoneme-I-ILD.mp3\",\"display\":\"ild\",\"word1\":{\"word\":\"wild\",\"display\":\"w<span>ild</span>\",\"audio\":\"wild.mp3\",\"image\":\"wild.png\"},\"word2\":{\"word\":\"child\",\"display\":\"ch<span>ild</span>\",\"audio\":\"child.mp3\",\"image\":\"child.png\"},\"word3\":{\"word\":\"mild\",\"display\":\"m<span>ild</span>\",\"audio\":\"mild.mp3\",\"image\":\"mild.png\"},\"quiz-words\":[\"wildcat\",\"wildfowl\",\"wild rice\",\"grandchild\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Sometimes a m(ild) ch(ild),<br>Now and then a w(ild) ch(ild),<br>Happy to be a grandch(ild),<br>Always a love ch(ild).\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IND-long\",\"audio\":\"phoneme-I-IND-long.mp3\",\"display\":\"ind\",\"word1\":{\"word\":\"kind\",\"display\":\"k<span>ind</span>\",\"audio\":\"kind.mp3\",\"image\":\"kind.png\"},\"word2\":{\"word\":\"find\",\"display\":\"f<span>ind</span>\",\"audio\":\"find.mp3\",\"image\":\"find.png\"},\"word3\":{\"word\":\"blind\",\"display\":\"bl<span>ind</span>\",\"audio\":\"blind.mp3\",\"image\":\"blind.png\"},\"quiz-words\":[\"behind\",\"remind\",\"hindquarters\",\"hindmost\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"If you can’t see red or green you’ll f(ind)<br>That certainly you’re color bl(ind).<br>Sometimes do you quick glance beh(ind),<br>Fear f(ind)ing monsters of some k(ind)–<br>But don’t spot yetis–so don’t m(ind)?<br>Beware! You might be yeti-bl(ind).<br>\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-ION\",\"audio\":\"phoneme-I-ION.mp3\",\"display\":\"ion\",\"word1\":{\"word\":\"vision\",\"display\":\"vis<span>ion</span>\",\"audio\":\"vision.mp3\",\"image\":\"vision.png\"},\"word2\":{\"word\":\"cushion\",\"display\":\"cush<span>ion</span>\",\"audio\":\"cushion.mp3\",\"image\":\"cushion.png\"},\"word3\":{\"word\":\"fashion\",\"display\":\"fash<span>ion</span>\",\"audio\":\"fashion.mp3\",\"image\":\"fashion.png\"},\"quiz-words\":[\"confusion\",\"division\",\"illusion\",\"percussion\",\"collision\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The (ion) sound drives me nuts! Quest(ion):<br>How’d grown-ups decide ‘fash(ion)’,<br>‘Cush(ion)’, ‘collis(ion)’ all end (ion),<br>Not ‘ion’ ike ‘lion’? And that ‘quest(ion)’<br>Sounds a ‘tuh’ and then sounds (ion),<br>But ‘addit(ion)’ and ‘subtract(ion)’<br>‘Educat(ion)’ don’t. No ‘tuh’ just (ion).<br>One word for ‘stay away’? It’s ‘shun’!\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IR\",\"audio\":\"phoneme-I-IR.mp3\",\"display\":\"ir\",\"word1\":{\"word\":\"bird\",\"display\":\"b<span>ir</span>d\",\"audio\":\"bird.mp3\",\"image\":\"bird.png\"},\"word2\":{\"word\":\"girl\",\"display\":\"g<span>ir</span>l\",\"audio\":\"girl.mp3\",\"image\":\"girl.png\"},\"word3\":{\"word\":\"shirt\",\"display\":\"sh<span>ir</span>t\",\"audio\":\"shirt.mp3\",\"image\":\"shirt.png\"},\"quiz-words\":[\"skirt\",\"circle\",\"giraffe\",\"birthday\",\"squirrel\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"On her b(ir)thday the g(ir)l<br>Wh(ir)led her pearls, sw(ir)led her sk(ir)t,<br>Gave her sh(ir)t tail a tw(ir)l,<br>St(ir)red her toe in the d(ir)t,<br>Until, so I heard,<br>She looked just like a b(ir)d!<br>\",\"category\":[\"R\",\"VC\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"P-puh-begin\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"puppy\",\"display\":\"<span>p</span>u<span>pp</span>y\",\"audio\":\"puppy.mp3\",\"image\":\"puppy.png\"},\"word2\":{\"word\":\"penguin\",\"display\":\"<span>p</span>enguin\",\"audio\":\"penguin.mp3\",\"image\":\"penguin.png\"},\"word3\":{\"word\":\"pie\",\"display\":\"<span>p</span>ie\",\"audio\":\"pie.mp3\",\"image\":\"pie.png\"},\"quiz-words\":[\"pig\",\"paint\",\"purse\",\"pizza\",\"polar bear\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"The sow came in with the saddle,<br>The little (p)ig rocked the cradle,<br>The dish jumped up on the table<br>To see the (p)ot swallow the ladle.<br>The spit that stood behind the door<br>Threw the (p)udding-stick on the floor.<br>“Gracious!” said the gridiron,<br>“Can’t you agree?<br>I’m the boss (p)oliceman,<br>Bring them to me!”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"P-puh-end\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"drop\",\"display\":\"dro<span>p</span>\",\"audio\":\"drop.mp3\",\"image\":\"drop.png\"},\"word2\":{\"word\":\"soap\",\"display\":\"soa<span>p</span>\",\"audio\":\"soap.mp3\",\"image\":\"soap.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"jee<span>p</span>\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"cap\",\"mop\",\"chop\",\"harp\",\"chimp\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Handy Pandy, Jack-a-Dandy,<br>Loves cu(p) cakes and sugar-candy;<br>He bought some at a grocer’s sho(p),<br>And out he came, ho(p), ho(p), ho(p).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"P-PH-begin\",\"audio\":\"phoneme-P-PH.mp3\",\"display\":\"ph\",\"word1\":{\"word\":\"phone\",\"display\":\"<span>ph</span>one\",\"audio\":\"phone.mp3\",\"image\":\"phone.png\"},\"word2\":{\"word\":\"phonics\",\"display\":\"<span>ph</span>onics\",\"audio\":\"phonics.mp3\",\"image\":\"phonics.png\"},\"word3\":{\"word\":\"phantom\",\"display\":\"<span>ph</span>antom\",\"audio\":\"phantom.mp3\",\"image\":\"phantom.png\"},\"quiz-words\":[\"philtrum\",\"physician\",\"pharaoh\",\"pheasant\",\"phoenix\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"(Ph)oebe helped (Ph)il work on (ph)onics,<br>Told him (ph) is just a (ph)oneme,<br>‘Why not just write F? It’s tricks<br>Like that that make me want to scream!”<br><br>(Ph)il screamed. (Ph)oebe (ph)oned a doctor<br>[A (ph)ysician]. “Might be a (ph)ase,”<br>The doctor said, then he shocked her.<br>“Or maybe worse, do his eyes glaze<br><br>When he sees P H on a page?”<br>“Bright red!” she said. “Send a (ph)oto,<br>To my (ph)one,” he said. “Might be a stage,<br>He’s (ph)asing through. Let’s hope so.”<br><br>She did. The doctor sighed, then said,<br>“It’s a (ph)obia. Sad but true:<br>‘(Ph)onics (Ph)enome (Ph)obia, a dread<br>Disease I have. Most smart people do.”\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"P-PH-end\",\"audio\":\"phoneme-P-PH.mp3\",\"display\":\"ph\",\"word1\":{\"word\":\"nymph\",\"display\":\"nym<span>ph</span>\",\"audio\":\"nymph.mp3\",\"image\":\"nymph.png\"},\"word2\":{\"word\":\"digraph\",\"display\":\"digra<span>ph</span>\",\"audio\":\"digraph.mp3\",\"image\":\"digraph.png\"},\"word3\":{\"word\":\"triumph\",\"display\":\"trium<span>ph</span>\",\"audio\":\"triumph.mp3\",\"image\":\"triumph.png\"},\"quiz-words\":[\"phonograph\",\"epitaph\",\"autograph\",\"caliph\",\"sylph\",\"graph\",\"photograph\",\"paragraph\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"If you’ll end “nym(ph)” with a digra(ph),<br>Then write me a paragra(ph),<br>Sign it with your autogra(ph),<br>Record it for my phonogra(ph),<br>And selfie yourself a photogra(ph),<br>We’ll make that your epita(ph).\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"P-PL\",\"audio\":\"phoneme-P-PL.mp3\",\"display\":\"pl\",\"word1\":{\"word\":\"play\",\"display\":\"<span>pl</span>ay\",\"audio\":\"play.mp3\",\"image\":\"play.png\"},\"word2\":{\"word\":\"plug\",\"display\":\"<span>pl</span>ug\",\"audio\":\"plug.mp3\",\"image\":\"plug.png\"},\"word3\":{\"word\":\"plum\",\"display\":\"air<span>pl</span>um\",\"audio\":\"plum.mp3\",\"image\":\"plum.png\"},\"quiz-words\":[\"places\",\"pliers\",\"plumber\",\"snow plow\",\"playground\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"No kid likes peas piled on (pl)ates,<br>But (pl)aced in straws they’re (pl)enty fun.<br>Blow so they shoot past people’s faces<br>(Pl)ay, (pl)ay, (pl)ay, then run, run, run!<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"P-PR\",\"audio\":\"phoneme-P-PR.mp3\",\"display\":\"pr\",\"word1\":{\"word\":\"proud\",\"display\":\"<span>pr</span>oud\",\"audio\":\"proud.mp3\",\"image\":\"proud.png\"},\"word2\":{\"word\":\"prize\",\"display\":\"<span>pr</span>ize\",\"audio\":\"prize.mp3\",\"image\":\"prize.png\"},\"word3\":{\"word\":\"protect\",\"display\":\"<span>pr</span>otect\",\"audio\":\"protect.mp3\",\"image\":\"protect.png\"},\"quiz-words\":[\"pretend\",\"primates\",\"present\",\"pretzel\",\"proposing\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"As I was going up (Pr)imrose Hill;<br>(Pr)imrose Hill was dirty;<br>There I met a (pr)etty girl;<br>And she gave me a curtsey.<br>Little girl; (pr)etty girl;<br>Blessings be upon you;<br>If I had half-a-dollar a day;<br>I'd spend it all on you.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-kuh-begin\",\"audio\":\"phoneme-C-kuh.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"cat\",\"display\":\"<span>c</span>at\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word2\":{\"word\":\"canary\",\"display\":\"<span>c</span>anary\",\"audio\":\"canary.mp3\",\"image\":\"canary.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"<span>c</span>ake\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"cub\",\"cut\",\"cow\",\"candy\",\"car\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Robin Redbreast sat upon a tree;<br>Up went the Kitty-(C)at; and down went he;<br>Down came Kitty-(C)at; away Robin ran;<br>Says little Robin Redbreast:<br>\\\"(C)atch me if you (c)an!\\\"\",\"category\":[\"C-begin\",\"CG\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-sss\",\"audio\":\"phoneme-C-sss.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"celery\",\"display\":\"<span>c</span>elery\",\"audio\":\"celery.mp3\",\"image\":\"celery.png\"},\"word2\":{\"word\":\"face\",\"display\":\"fa<span>c</span>e\",\"audio\":\"face.mp3\",\"image\":\"face.png\"},\"word3\":{\"word\":\"balance\",\"display\":\"balan<span>c</span>e\",\"audio\":\"balance.mp3\",\"image\":\"balance.png\"},\"quiz-words\":[\"ice\",\"pencil\",\"tricycle\",\"unicycle\",\"ice cream\",\"sauce pan\",\"dancing\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"(C)elery, lettu(c)e, and ri(c)e aren’t my dream,<br>But you scream, I scream, we all scream<br>for i(c)e cream!<br>\",\"category\":[\"CG\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"C-CH-begin\",\"audio\":\"phoneme-C-CH.mp3\",\"display\":\"ch\",\"word1\":{\"word\":\"chest\",\"display\":\"<span>ch</span>est\",\"audio\":\"chest.mp3\",\"image\":\"chest.png\"},\"word2\":{\"word\":\"cheese\",\"display\":\"<span>ch</span>eese\",\"audio\":\"cheese.mp3\",\"image\":\"cheese.png\"},\"word3\":{\"word\":\"chisel\",\"display\":\"<span>ch</span>isel\",\"audio\":\"chisel.mp3\",\"image\":\"chisel.png\"},\"quiz-words\":[\"chickens\",\"chimney\",\"chipmunk\",\"chopsticks\",\"cherry-picker truck\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The (ch)ubby (ch)imp boy sat to (ch)at,<br>With the (ch)arming (ch)imp girl.<br>But slipped–he was no acrobat–<br>And fell in a twirling swirl.<br>She kissed his (ch)eek, that (ch)eered him up,<br>Then cooked yummy (ch)ili.<br>He said, “Let’s marry when we’re grown up.”<br>She said, “Don’t be silly!”\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-CH-end\",\"audio\":\"phoneme-C-CH.mp3\",\"display\":\"ch\",\"word1\":{\"word\":\"beach\",\"display\":\"bea<span>ch</span>\",\"audio\":\"beach.mp3\",\"image\":\"beach.png\"},\"word2\":{\"word\":\"catch\",\"display\":\"cat<span>ch</span>\",\"audio\":\"catch.mp3\",\"image\":\"catch.png\"},\"word3\":{\"word\":\"sasquatch\",\"display\":\"sasquat<span>ch</span>\",\"audio\":\"sasquatch.mp3\",\"image\":\"sasquatch.png\"},\"quiz-words\":[\"ostrich\",\"scratch\",\"wrench\",\"sandwich\",\"bench\",\"wristwatch\",\"much\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Cross pat(ch); pull the lat(ch);<br>Sit by the fire and spin;<br>Take a cup and drink it up;<br>Then call your neighbors in.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-CK\",\"audio\":\"phoneme-C-CK.mp3\",\"display\":\"ck\",\"word1\":{\"word\":\"kick\",\"display\":\"ki<span>ck</span>\",\"audio\":\"kick.mp3\",\"image\":\"kick.png\"},\"word2\":{\"word\":\"truck\",\"display\":\"tru<span>ck</span>\",\"audio\":\"truck.mp3\",\"image\":\"truck.png\"},\"word3\":{\"word\":\"backpack\",\"display\":\"ba<span>ck</span>pa<span>ck</span>\",\"audio\":\"backpack.mp3\",\"image\":\"backpack.png\"},\"quiz-words\":[\"lock\",\"duck\",\"peacock\",\"hammock\",\"hockey stick\",\"puck\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"An elf taught Pat how to make magic,<br>Gave Pat a small peaco(ck) made of old plastic,<br>Said, “Wish on it, blink, rub its nose then qui(ck) change,<br>Anything to whatever, no matter how strange.<br>Turning a hot dog to a dachshund was an easy tri(ck),<br>Changing a dragonfly to a dragon went super qui(ck).<br>Pat saw a bla(ck) bear just starting to crunch<br>On this du(ck)’s ne(ck), but dragon sna(ck)ed on that bear for lunch!<br>A shopper held spaghetti leaving a shop’s door,<br>But carried an octopus after just one step more!<br>A firefly and bee closed eyes for a kiss,<br>When Pat turned both to fairies they squealed, “What the he(ck)’s this!”<br>Pat played with magic for a fun-filled hour,<br>Then got hungry—and then the peaco(ck) lost its power.<br>When Pat wished for chocolate—Pat couldn’t have known— <br>The peaco(ck) turned to an un-magic ice cream cone.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"C-CK-silent\",\"audio\":\"phoneme-C-CK-silent.m4a\",\"display\":\"ck\",\"word1\":{\"word\":\"sick\",\"display\":\"si<span>ck</span>\",\"audio\":\"sick.mp3\",\"image\":\"sick.png\"},\"word2\":{\"word\":\"trick\",\"display\":\"tri<span>ck</span>\",\"audio\":\"trick.mp3\",\"image\":\"trick.png\"},\"word3\":{\"word\":\"snack\",\"display\":\"sna<span>ck</span>\",\"audio\":\"snack.mp3\",\"image\":\"snack.png\"},\"quiz-words\":[\"trick\",\"wick\",\"rocket\",\"backpack\",\"brick layer or brick mason\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"green\"},\"rhyme\":\"Ja(ck), be nimble, Ja(ck), be qui(ck),<br>Ja(ck), jump over the candlesti(ck).\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"C-CL\",\"audio\":\"phoneme-C-CL.mp3\",\"display\":\"cl\",\"word1\":{\"word\":\"claws\",\"display\":\"<span>cl</span>aws\",\"audio\":\"claws.mp3\",\"image\":\"claws.png\"},\"word2\":{\"word\":\"clam\",\"display\":\"<span>cl</span>am\",\"audio\":\"clam.mp3\",\"image\":\"clam.png\"},\"word3\":{\"word\":\"climb\",\"display\":\"<span>cl</span>imb\",\"audio\":\"climb.mp3\",\"image\":\"climb.png\"},\"quiz-words\":[\"clean\",\"clarinet\",\"cloudy\",\"clueless\",\"clinic\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Tickety-tock, (cl)imb up the (cl)ock,<br>Don’t let the time get dirty.<br>Tickety-tock we (cl)eaned the (cl)ock,<br>Now one o’(cl)ock looks pretty.<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-CR\",\"audio\":\"phoneme-C-CR.mp3\",\"display\":\"cr\",\"word1\":{\"word\":\"crab\",\"display\":\"<span>cr</span>ab\",\"audio\":\"crab.mp3\",\"image\":\"crab.png\"},\"word2\":{\"word\":\"cry\",\"display\":\"<span>cr</span>y\",\"audio\":\"cry.mp3\",\"image\":\"cry.png\"},\"word3\":{\"word\":\"croc\",\"display\":\"<span>cr</span>oc\",\"audio\":\"croc.mp3\",\"image\":\"croc.png\"},\"quiz-words\":[\"cranky\",\"cradle\",\"crayons\",\"crosswalk\",\"crutches\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"There was a (cr)ooked man;<br>And he walked a (cr)ooked mile;<br>He found a (cr)ooked sixpence;<br>Against a (cr)ooked tile;<br>He bought a (cr)ooked cat;<br>Which caught a (cr)ooked mouse;<br>And they all lived together;<br>In a little (cr)ooked house.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"H-huh-begin\",\"audio\":\"phoneme-H-huh.mp3\",\"display\":\"h\",\"word1\":{\"word\":\"hug\",\"display\":\"<span>h</span>ug\",\"audio\":\"hug.mp3\",\"image\":\"hug.png\"},\"word2\":{\"word\":\"hardhat\",\"display\":\"<span>h</span>ard<span>h</span>at\",\"audio\":\"hardhat.mp3\",\"image\":\"hardhat.png\"},\"word3\":{\"word\":\"hide\",\"display\":\"<span>h</span>ide\",\"audio\":\"hide.mp3\",\"image\":\"hide.png\"},\"quiz-words\":[\"hot\",\"horns\",\"hawk\",\"hippo\",\"hose\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(H)umpty Dumpty sat on a wall;<br>(H)umpty Dumpty (h)ad a great fall;<br>All the king's (h)orses and all the king's men;<br>Couldn't put (H)umpty Dumpty together again.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"H-silent\",\"audio\":\"phoneme-H-silent.mp3\",\"display\":\"h\",\"word1\":{\"word\":\"hour\",\"display\":\"<span>h</span>our\",\"audio\":\"hour.mp3\",\"image\":\"hour.png\"},\"word2\":{\"word\":\"ghost\",\"display\":\"g<span>h</span>ost\",\"audio\":\"ghost.mp3\",\"image\":\"ghost.png\"},\"word3\":{\"word\":\"rhyme\",\"display\":\"r<span>h</span>yme\",\"audio\":\"rhyme.mp3\",\"image\":\"rhyme.png\"},\"quiz-words\":[\"honor\",\"exhaust\",\"rhythm\",\"gherkin\",\"rhinoceros\"],\"color\":{\"all\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Hope you solve it! What cup holds no drinks?<br>Invisible, g(h)ostlike, at any time<br>Can choke you, like with r(h)ythmic heartbeats, links<br>Coming chain-like, for ex(h)austing (h)ours, chime<br>Under your skin, making you think: This stinks!<br>Pick each line’s first letter in this r(h)yme.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"F-fuh-begin\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"fish\",\"display\":\"<span>f</span>ish\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"word2\":{\"word\":\"fox\",\"display\":\"<span>f</span>ox\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word3\":{\"word\":\"foot\",\"display\":\"<span>f</span>oot\",\"audio\":\"foot.mp3\",\"image\":\"foot.png\"},\"quiz-words\":[\"fall\",\"fairy\",\"fan\",\"find\",\"firefly\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Old King Cole, was a merry old soul,<br>And a merry old soul was he,<br>He called (f)or his pipe, and he called (f)or his bowl,<br>And he called (f)or his (f)iddlers three.<br>Every (f)iddler, he had a (f)ine (f)iddle,<br>And a very (f)ine (f)iddle had he.<br>Twee tweedle dee, tweedle dee, went the (f)iddlers three.<br>Oh, there’s none so rare,<br>As can compare<br>With King Cole<br>And his (f)iddlers three!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-fuh-end\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"scarf\",\"display\":\"scar<span>f</span>\",\"audio\":\"scarf.mp3\",\"image\":\"scarf.png\"},\"word2\":{\"word\":\"thief\",\"display\":\"thie<span>f</span>\",\"audio\":\"thief.mp3\",\"image\":\"thief.png\"},\"word3\":{\"word\":\"chef\",\"display\":\"che<span>f</span>\",\"audio\":\"chef.mp3\",\"image\":\"chef.png\"},\"quiz-words\":[\"hoof\",\"leaf\",\"white calf\",\"surf\",\"wolf\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Turtle took a little walk,<br>Hoping no one would bother him.<br>When a dog said “Woo(f) woo(f) woo(f)” to talk,<br>Turtle acted dea(f) under a limb,<br>He nearly got stolen by a thie(f),<br>But bit his thumb hard!  When a re(f)<br>Reached down he ducked under a lea(f),<br>And finally got free outrunning a che(f).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-FL\",\"audio\":\"phoneme-F-FL.mp3\",\"display\":\"fl\",\"word1\":{\"word\":\"flu\",\"display\":\"<span>fl</span>u\",\"audio\":\"flu.mp3\",\"image\":\"flu.png\"},\"word2\":{\"word\":\"fly\",\"display\":\"<span>fl</span>y\",\"audio\":\"fly.mp3\",\"image\":\"fly.png\"},\"word3\":{\"word\":\"flag\",\"display\":\"<span>fl</span>ag\",\"audio\":\"flag.mp3\",\"image\":\"flag.png\"},\"quiz-words\":[\"float\",\"flute\",\"flippers\",\"flamingo\",\"flatbed tow truck\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"A hungry (fl)y (fl)ew in a (fl)ower,<br>Then dreamed of sweets for half an hour.<br>A (fl)ea (fl)oating by yelled, “Stay awake!<br>I just baked us a snow(fl)ake cake!”<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-FR\",\"audio\":\"phoneme-F-FR.mp3\",\"display\":\"fr\",\"word1\":{\"word\":\"frog\",\"display\":\"<span>fr</span>og\",\"audio\":\"frog.mp3\",\"image\":\"frog.png\"},\"word2\":{\"word\":\"fry\",\"display\":\"<span>fr</span>y\",\"audio\":\"fry.mp3\",\"image\":\"fry.png\"},\"word3\":{\"word\":\"fro\",\"display\":\"<span>fr</span>o\",\"audio\":\"fro.mp3\",\"image\":\"fro.png\"},\"quiz-words\":[\"friends\",\"fruits\",\"fridge\",\"fringe\",\"frontloader\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"On (Fr)iday night, <br>My (fr)iend and I<br>Had (fr)ozen (fr)ench-(fr)y soup<br>And (fr)og leg pie.<br><br>(Fr)ied ice cream<br>And fish heads in a cup,<br>I hope some medicine <br>Will help me throw up.<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-FT\",\"audio\":\"phoneme-F-FT.mp3\",\"display\":\"ft\",\"word1\":{\"word\":\"gift\",\"display\":\"gi<span>ft</span>\",\"audio\":\"gift.mp3\",\"image\":\"gift.png\"},\"word2\":{\"word\":\"soft\",\"display\":\"so<span>ft</span>\",\"audio\":\"soft.mp3\",\"image\":\"soft.png\"},\"word3\":{\"word\":\"left\",\"display\":\"le<span>ft</span>\",\"audio\":\"left.mp3\",\"image\":\"left.png\"},\"quiz-words\":[\"forklift\",\"snowdrift\",\"airlift\",\"aircraft\",\"watercraft\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"My gi(ft)’s to tell the truth, almost, though<br>I never speak, yet tell the truth one way,<br>Reversing it, like some backward photo.<br>Right for me’s le(ft). I’m hard, seem so(ft), play<br>Only my way. Break me for seven years of woe.<br>Read me for faceli(ft)s, just li(ft) me. You may.\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-long\",\"audio\":\"phoneme-O-long.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"old\",\"display\":\"<span>o</span>ld\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"yo-yo\",\"display\":\"y<span>o</span>-y<span>o</span>\",\"audio\":\"yoyo.mp3\",\"image\":\"yoyo.png\"},\"word3\":{\"word\":\"no\",\"display\":\"n<span>o</span>\",\"audio\":\"no.mp3\",\"image\":\"no.png\"},\"quiz-words\":[\"ovals\",\"sofa\",\"mole\",\"nose\",\"dozer\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"(O)ld King C(o)le;<br>Was a merry (o)ld s(o)ul;<br>And a merry (o)ld s(o)ul was he;<br>He called for his pipe;<br>And he called for his b(o)wl;<br>And he called for his fiddlers three.\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-e\",\"audio\":\"phoneme-O-long.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"toe\",\"display\":\"t<span>o</span><u>e</u>\",\"audio\":\"toe.mp3\",\"image\":\"toe.png\"},\"word2\":{\"word\":\"doe\",\"display\":\"d<span>o</span><u>e</u>\",\"audio\":\"doe.mp3\",\"image\":\"doe.png\"},\"word3\":{\"word\":\"hoe\",\"display\":\"h<span>o</span><u>e</u>\",\"audio\":\"hoe.mp3\",\"image\":\"hoe.png\"},\"quiz-words\":[\"mole\",\"rose\",\"bones\",\"oboe\",\"potatoes\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Having less will make it bigger when it’s done.<br>One m(o)le will make many. That’s its r(o)le.<br>Lassos are just r(o)pes with one big one.<br>Each head like yours has five. It’s a —\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"O-short\",\"audio\":\"phoneme-O-short.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"fox\",\"display\":\"f<span>o</span>x\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"pot\",\"display\":\"p<span>o</span>t\",\"audio\":\"pot.mp3\",\"image\":\"pot.png\"},\"word3\":{\"word\":\"hot\",\"display\":\"h<span>o</span>t\",\"audio\":\"hot.mp3\",\"image\":\"hot.png\"},\"quiz-words\":[\"drop\",\"moth\",\"frog\",\"trolley\",\"ostrich\",\"boxer\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"H(o)t cr(o)ss buns, h(o)t cr(o)ss buns.<br>One a penny, two a penny,<br>H(o)t cr(o)ss buns!<br><br>If your daughters do n(o)t like them,<br>Give them to your sons.<br>One a penny, two a penny,<br>H(o)t cr(o)ss buns!\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-uh\",\"audio\":\"phoneme-O-uh.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"lion\",\"display\":\"li<span>o</span>n\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"word2\":{\"word\":\"oven\",\"display\":\"<span>o</span>ven\",\"audio\":\"oven.mp3\",\"image\":\"oven.png\"},\"word3\":{\"word\":\"wagon\",\"display\":\"wag<span>o</span>n\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"quiz-words\":[\"love\",\"mother\",\"glove\",\"shovel\",\"monkey\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"2nd\":\"black\"},\"rhyme\":\"He l(o)ves me.<br>He d(o)esn't!<br>He'll have me.<br>He won't!<br><br>He would if he could,<br>But he can't, so he won't!\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OA\",\"audio\":\"phoneme-O-OA.mp3\",\"display\":\"oa\",\"word1\":{\"word\":\"goat\",\"display\":\"g<span>oa</span>t\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word2\":{\"word\":\"boat\",\"display\":\"b<span>oa</span>t\",\"audio\":\"boat.mp3\",\"image\":\"boat.png\"},\"word3\":{\"word\":\"coat\",\"display\":\"c<span>oa</span>t\",\"audio\":\"coat.mp3\",\"image\":\"coat.png\"},\"quiz-words\":[\"soap\",\"toad\",\"foal\",\"float\",\"toaster\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Nanny Ettic(oa)t;<br>In a white pettic(oa)t;<br>And a red nose;<br>The longer she stands;<br>The shorter she grows.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-OI\",\"audio\":\"phoneme-O-OI.mp3\",\"display\":\"oi\",\"word1\":{\"word\":\"coin\",\"display\":\"c<span>oi</span>n\",\"audio\":\"coin.mp3\",\"image\":\"coin.png\"},\"word2\":{\"word\":\"point\",\"display\":\"p<span>oi</span>nt\",\"audio\":\"point.mp3\",\"image\":\"point.png\"},\"word3\":{\"word\":\"choice\",\"display\":\"ch<span>oi</span>ce\",\"audio\":\"choice.mp3\",\"image\":\"choice.png\"},\"quiz-words\":[\"voice\",\"noise\",\"toilet\",\"poison\",\"oink-oink\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"A toy box you put toys in.<br>Pin a balloon and you’ll sp(oi)l it.<br>A pan’s for putting (oi)ly c(oi)ns in.<br>To clean them add water and b(oi)l it.<br>Time out’s for putting n(oi)sy boys in.<br>P(oi)son? Pour it in the t(oi)let!<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OLD\",\"audio\":\"phoneme-O-OLD.mp3\",\"display\":\"old\",\"word1\":{\"word\":\"old\",\"display\":\"<span>old</span>\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"cold\",\"display\":\"c<span>old</span>\",\"audio\":\"cold.mp3\",\"image\":\"cold.png\"},\"word3\":{\"word\":\"gold\",\"display\":\"g<span>old</span>\",\"audio\":\"gold.mp3\",\"image\":\"gold.png\"},\"quiz-words\":[\"told\",\"sold\",\"hold\",\"scold\",\"soldier\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"2nd\":\"pink\"},\"rhyme\":\"It is often t(old)<br>Some pilots are (old),<br>Some pilots are b(old),<br>But there are no (old) b(old) pilots.<br><br>It may also be t(old)<br>Some toilets are c(old),<br>Some toilets have m(old),<br>But (old) pilots don’t use c(old) m(old)y toilets.\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"O-ew\",\"audio\":\"phoneme-O-ew.mp3\",\"display\":\"oo\",\"word1\":{\"word\":\"zoo\",\"display\":\"z<span>oo</span>\",\"audio\":\"zoo.mp3\",\"image\":\"zoo.png\"},\"word2\":{\"word\":\"moon\",\"display\":\"m<span>oo</span>n\",\"audio\":\"moon.mp3\",\"image\":\"moon.png\"},\"word3\":{\"word\":\"hoofs\",\"display\":\"h<span>oo</span>fs\",\"audio\":\"hoof.mp3\",\"image\":\"hoof.png\"},\"quiz-words\":[\"tools\",\"boots\",\"broom\",\"stool\",\"moose\",\"goose\",\"spoon\",\"tooth\",\"raccoons\",\"balloon\",\"poodle\",\"school\",\"rooster\",\"bedroom\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The man in the m(oo)n came down t(oo) s(oo)n;<br>To inquire the way to Norridge;<br>The man in the south; he burnt his mouth;<br>With eating cold plum porridge.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-uuh\",\"audio\":\"phoneme-O-uuh.mp3\",\"display\":\"oo\",\"word1\":{\"word\":\"cook\",\"display\":\"c<span>oo</span>k\",\"audio\":\"cook.mp3\",\"image\":\"cook.png\"},\"word2\":{\"word\":\"wood\",\"display\":\"w<span>oo</span>d\",\"audio\":\"wood.mp3\",\"image\":\"wood.png\"},\"word3\":{\"word\":\"foot\",\"display\":\"f<span>oo</span>t\",\"audio\":\"foot.mp3\",\"image\":\"foot.png\"},\"quiz-words\":[\"look\",\"book\",\"hoodie\",\"cookies\",\"bigfoot\",\"football\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Little Bopeep never underst(oo)d,<br>When little Miss Red Riding H(oo)d<br>Went trick-or-treat in our neighborh(oo)d<br>With little Mister Captain H(oo)k,<br>It wasn’t c(oo)kies or candy they t(oo)k,<br>Each picked a little picture b(oo)k.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-OR-long\",\"audio\":\"phoneme-O-OR-long.mp3\",\"display\":\"or\",\"word1\":{\"word\":\"corn\",\"display\":\"c<span>or</span>n\",\"audio\":\"corn.mp3\",\"image\":\"corn.png\"},\"word2\":{\"word\":\"horns\",\"display\":\"h<span>or</span>ns\",\"audio\":\"horns.mp3\",\"image\":\"horns.png\"},\"word3\":{\"word\":\"orca\",\"display\":\"<span>or</span>ca\",\"audio\":\"orca.mp3\",\"image\":\"orca.png\"},\"quiz-words\":[\"sports\",\"hornet\",\"unicorn\",\"uniforms\",\"porcupine\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Jack H(or)ner;<br>Sat in a c(or)ner;<br>Eating a Christmas pie;<br>He put in his thumb;<br>And pulled out a plum;<br>And said: \\\"What a good boy am I!\\\"\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OR-schwa\",\"audio\":\"phoneme-O-OR-schwa.m4a\",\"display\":\"or\",\"word1\":{\"word\":\"work\",\"display\":\"w<span>or</span>k\",\"audio\":\"work.mp3\",\"image\":\"work.png\"},\"word2\":{\"word\":\"worms\",\"display\":\"w<span>or</span>ms\",\"audio\":\"worms.mp3\",\"image\":\"worms.png\"},\"word3\":{\"word\":\"tractor\",\"display\":\"tract<span>or</span>\",\"audio\":\"tractor.mp3\",\"image\":\"tractor.png\"},\"quiz-words\":[\"mirror\",\"sailor\",\"gator\",\"gorilla\",\"excavator\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Jim tried art, but couldn’t col(or),<br>Tried music–singing didn’t w(or)k,<br>His dancing?  Duller and duller.<br>His golf coach quit, called him a jerk.<br>He got laughed off as an act(or).<br>But didn’t fear dirt, loved fresh air,<br>Began to farm w(or)ms with a tract(or).<br>Now he’s a famous millionaire!\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OST-short\",\"audio\":\"phoneme-O-OST-short.mp3\",\"display\":\"ost\",\"word1\":{\"word\":\"cost\",\"display\":\"c<span>ost</span>\",\"audio\":\"cost.mp3\",\"image\":\"cost.png\"},\"word2\":{\"word\":\"frost\",\"display\":\"fr<span>ost</span>\",\"audio\":\"frost.mp3\",\"image\":\"frost.png\"},\"word3\":{\"word\":\"ostrich\",\"display\":\"<span>ost</span>rich\",\"audio\":\"ostrich.mp3\",\"image\":\"ostrich.png\"},\"quiz-words\":[\"nostril\",\"costume\",\"frosting\",\"hostile\",\"posture\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"My f(ost)er brother’s c(ost)ume,<br>A big gorilla, looked great!<br>But then inside the party room<br>Stood two more!  How could I locate<br>Him if I got l(ost)?  Then–bumped,<br>Pushed, j(ost)led – I did lose him!<br>Checked first the giant ape slumped<br>In the corner.  Nope, too slim.<br>Two left. One imp(ost)er.  Which one?<br>Stand or sit, their p(ost)ure seemed the same.<br>Both smelled ape-y, scratched their tails for fun,<br>Made rude noises, neither looked tame.<br>One mixed chocolate, vanilla,<br>Strawberry ice cream with his thumb.<br>Could mine be that gross a gorilla?<br>I guessed he could have been that dumb.<br>Then I recalled an (ost)rich offering him<br>Scissors, when we stood by the stair,<br>To give his facial hair a trim–<br>Finally knew him by his n(ost)ril hair.\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"O-OST-long\",\"audio\":\"phoneme-O-OST-long.mp3\",\"display\":\"ost\",\"word1\":{\"word\":\"most\",\"display\":\"m<span>ost</span>\",\"audio\":\"most.mp3\",\"image\":\"most.png\"},\"word2\":{\"word\":\"ghost\",\"display\":\"gh<span>ost</span>\",\"audio\":\"ghost.mp3\",\"image\":\"ghost.png\"},\"word3\":{\"word\":\"postage\",\"display\":\"p<span>ost</span>age\",\"audio\":\"postage.mp3\",\"image\":\"postage.png\"},\"quiz-words\":[\"goalpost\",\"almost\",\"postman\",\"gatepost\",\"hindmost\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"When you next meet a gh(ost)<br>And decide you should h(ost)<br>A gh(ost) Bar-B-Q.<br>Don’t feed them roast ribs<br>Unless m(ost) will bring bibs<br>Whatever you do!<br>If their mouths get all greasy<br>Using a gh(ost)-wipe’s too easy<br>And gh(ost) fights get booooooey!\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"O-OU\",\"audio\":\"phoneme-O-OU.mp3\",\"display\":\"ou\",\"word1\":{\"word\":\"house\",\"display\":\"h<span>ou</span>se\",\"audio\":\"house.mp3\",\"image\":\"house.png\"},\"word2\":{\"word\":\"mouth\",\"display\":\"m<span>ou</span>th\",\"audio\":\"mouth.mp3\",\"image\":\"mouth.png\"},\"word3\":{\"word\":\"proud\",\"display\":\"pr<span>ou</span>d\",\"audio\":\"proud.mp3\",\"image\":\"proud.png\"},\"quiz-words\":[\"snout\",\"mouse\",\"cloudy\",\"bloodhound\",\"mountain\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"I'm a little teapot,<br>short and st(ou)t.<br>Here is my handle,<br>here is my sp(ou)t.<br><br>When I see the teacups,<br>hear me sh(ou)t:<br>\\\"Tip me over,<br>And pour me (ou)t!\\\"<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-ohw\",\"audio\":\"phoneme-O-ohw.mp3\",\"display\":\"ow\",\"word1\":{\"word\":\"blow\",\"display\":\"bl<span>ow</span>\",\"audio\":\"blow.mp3\",\"image\":\"blow.png\"},\"word2\":{\"word\":\"snow\",\"display\":\"sn<span>ow</span>\",\"audio\":\"snow.mp3\",\"image\":\"snow.png\"},\"word3\":{\"word\":\"throw\",\"display\":\"thr<span>ow</span>\",\"audio\":\"throw.mp3\",\"image\":\"throw.png\"},\"quiz-words\":[\"tow\",\"elbow\",\"window\",\"rainbow\",\"pillow\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The north wind does bl(ow);<br>And we shall have sn(ow);<br>And what will poor robin do then?<br>Poor thing!<br><br>He'll sit in the barn;<br>And keep himself warm;<br>And hide his head under his wing.<br>Poor thing!\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-ow\",\"audio\":\"phoneme-O-ow.mp3\",\"display\":\"ow\",\"word1\":{\"word\":\"owl\",\"display\":\"<span>ow</span>l\",\"audio\":\"owl.mp3\",\"image\":\"owl.png\"},\"word2\":{\"word\":\"cow\",\"display\":\"c<span>ow</span>\",\"audio\":\"cow.mp3\",\"image\":\"cow.png\"},\"word3\":{\"word\":\"town\",\"display\":\"t<span>ow</span>n\",\"audio\":\"town.mp3\",\"image\":\"town.png\"},\"quiz-words\":[\"clown\",\"flower\",\"trowel\",\"shower\",\"nightgown\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Daffy-d(ow)n-dilly has come to t(ow)n,<br>With a green petticoat<br>and a bright yellow g(ow)n.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OY\",\"audio\":\"phoneme-O-OY.mp3\",\"display\":\"oy\",\"word1\":{\"word\":\"boy\",\"display\":\"b<span>oy</span>\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word2\":{\"word\":\"toys\",\"display\":\"t<span>oy</span>s\",\"audio\":\"toys.mp3\",\"image\":\"toys.png\"},\"word3\":{\"word\":\"oyster\",\"display\":\"<span>oy</span>ster\",\"audio\":\"oyster.mp3\",\"image\":\"oyster.png\"},\"quiz-words\":[\"joy\",\"cowboy\",\"destroy\",\"royal\",\"boyfriend\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"A b(oy) needs a t(oy)<br>That he can enj(oy)<br>Or he'll have to ann(oy) a grown-up,<br>Climb on the highb(oy),<br>Find a pile to destr(oy),<br>Or play cowb(oy) till doggie has thrown-up.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"D-duh-begin\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"dog\",\"display\":\"<span>d</span>og\",\"audio\":\"dog.mp3\",\"image\":\"dog.png\"},\"word2\":{\"word\":\"drum\",\"display\":\"<span>d</span>rum\",\"audio\":\"drum.mp3\",\"image\":\"drum.png\"},\"word3\":{\"word\":\"door\",\"display\":\"<span>d</span>oor\",\"audio\":\"door.mp3\",\"image\":\"door.png\"},\"quiz-words\":[\"dozer\",\"dig\",\"doll\",\"duck\",\"dandelion\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Cock a (d)oodle (d)o!<br>My mother’s lost her shoe;<br>My father’s lost his fiddle-stick,<br>And (d)oesn’t know what to do.<br><br>Cock a (d)oodle (d)o!<br>What is my mother to (d)o?<br>Till Father finds his fiddle-stick<br>She’ll (d)ance without her shoe!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"D-duh-end\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"bird\",\"display\":\"bir<span>d</span>\",\"audio\":\"bird.mp3\",\"image\":\"bird.png\"},\"word2\":{\"word\":\"cold\",\"display\":\"col<span>d</span>\",\"audio\":\"cold.mp3\",\"image\":\"cold.png\"},\"word3\":{\"word\":\"friend\",\"display\":\"frien<span>d</span>\",\"audio\":\"friend.mp3\",\"image\":\"friend.png\"},\"quiz-words\":[\"bed\",\"hid\",\"toad\",\"wind\",\"sled\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Peter, Peter, pumpkin eater,<br>Ha(d) a wife and couldn’t keep her;<br>He put her in a pumpkin shell,<br>And then he kept her very well.<br><br>Peter, Peter, pumpkin eater,<br>Ha(d) another, and didn’t love her;<br>Peter learne(d) to read and spell,<br>And then he love(d) her very well.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"D-DR\",\"audio\":\"phoneme-D-DR.mp3\",\"display\":\"dr\",\"word1\":{\"word\":\"draw\",\"display\":\"<span>dr</span>aw\",\"audio\":\"draw.mp3\",\"image\":\"draw.png\"},\"word2\":{\"word\":\"drop\",\"display\":\"<span>dr</span>op\",\"audio\":\"drop.mp3\",\"image\":\"drop.png\"},\"word3\":{\"word\":\"bass drum\",\"display\":\"bass <span>dr</span>um\",\"audio\":\"bass drum.mp3\",\"image\":\"bass drum.png\"},\"quiz-words\":[\"drill\",\"dragon\",\"driver\",\"dribble\",\"dresses\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Three chil(dr)en sliding on the ice;<br>All on a winter's day;<br>As it fell out; they all fell in;<br>The rest they ran away.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"L-lll-begin\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"love\",\"display\":\"<span>l</span>ove\",\"audio\":\"love.mp3\",\"image\":\"love.png\"},\"word2\":{\"word\":\"leaf\",\"display\":\"<span>l</span>eaf\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"word3\":{\"word\":\"lion\",\"display\":\"<span>l</span>ion\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"quiz-words\":[\"lip\",\"lemon\",\"lizard\",\"lock\",\"lamb\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"I (l)ove you well, my (l)ittle brother,<br>And you are fond of me;<br>(L)et us be kind to one another,<br>As brothers ought to be.<br>You shall (l)earn to play with me,<br>And (l)earn to use my toys;<br>And then I think that we shall be <br>Two happy little boys.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"L-lll-end\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"owl\",\"display\":\"ow<span>l</span>\",\"audio\":\"owl.mp3\",\"image\":\"owl.png\"},\"word2\":{\"word\":\"goal\",\"display\":\"goa<span>l</span>\",\"audio\":\"goal.mp3\",\"image\":\"goal.png\"},\"word3\":{\"word\":\"sail\",\"display\":\"sai<span>l</span>\",\"audio\":\"sail.mp3\",\"image\":\"sail.png\"},\"quiz-words\":[\"foal\",\"heel\",\"mail\",\"pool\",\"nail\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Jack and Ji(ll) went up the hi(ll),<br>To fetch a pai(l) of water.<br>Jack fe(ll) down, and broke his crown,<br>And Ji(ll) came tumbling after.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"L-LD\",\"audio\":\"phoneme-L-LD.mp3\",\"display\":\"ld\",\"word1\":{\"word\":\"old\",\"display\":\"o<span>ld</span>\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"wild\",\"display\":\"wi<span>ld</span>\",\"audio\":\"wild.mp3\",\"image\":\"wild.png\"},\"word3\":{\"word\":\"build\",\"display\":\"bui<span>ld</span>\",\"audio\":\"build.mp3\",\"image\":\"build.png\"},\"quiz-words\":[\"child\",\"hold\",\"gold\",\"cold\",\"scold\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Catch it any chi(ld) can, but then can’t ho(ld)<br>Or throw it.  Around the world, young and o(ld)<br>Learn a mi(ld) one’s trouble.  We’ve all been to(ld)<br>Don’t get one.  We do.  It doesn’t help to sco(ld).\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"L-LE\",\"audio\":\"phoneme-L-LE.mp3\",\"display\":\"le\",\"word1\":{\"word\":\"poodle\",\"display\":\"pood<span>le</span>\",\"audio\":\"poodle.mp3\",\"image\":\"poodle.png\"},\"word2\":{\"word\":\"whale\",\"display\":\"wha<span>le</span>\",\"audio\":\"whale.mp3\",\"image\":\"whale.png\"},\"word3\":{\"word\":\"tricycle\",\"display\":\"tricyc<span>le</span>\",\"audio\":\"tricycle.mp3\",\"image\":\"tricycle.png\"},\"quiz-words\":[\"whistle\",\"turtle\",\"unicycle\",\"tricycle\",\"saddle\",\"cradle\",\"eagle\",\"fiddle\",\"beagle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The sow came in with the sadd(le);<br>The litt(le) pig rocked the crad(le);<br>The dish jumped up on the tab(le);<br>To see the pot swallow the lad(le).\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"L-LF\",\"audio\":\"phoneme-L-LF.mp3\",\"display\":\"lf\",\"word1\":{\"word\":\"elf\",\"display\":\"e<span>lf</span>\",\"audio\":\"elf.mp3\",\"image\":\"elf.png\"},\"word2\":{\"word\":\"calf\",\"display\":\"ca<span>lf</span>\",\"audio\":\"calf.mp3\",\"image\":\"calf.png\"},\"word3\":{\"word\":\"wolf\",\"display\":\"wo<span>lf</span>\",\"audio\":\"wolf.mp3\",\"image\":\"wolf.png\"},\"quiz-words\":[\"half\",\"golf\",\"shelf\",\"myself\",\"yourself\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"An e(lf) and a ca(lf)<br>Went out to play go(lf),<br>But had only played ha(lf),<br>When the ca(lf) spied a wo(lf).<br>“Play the rest by yourse(lf),”<br>Said the ca(lf) to the e(lf).<br>“No way!” yelled the e(lf),<br>“Play my ha(lf) by yourse(lf)!”\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"L-LT\",\"audio\":\"phoneme-L-LT.mp3\",\"display\":\"lt\",\"word1\":{\"word\":\"colt\",\"display\":\"co<span>lt</span>\",\"audio\":\"colt.mp3\",\"image\":\"colt.png\"},\"word2\":{\"word\":\"belt\",\"display\":\"be<span>lt</span>\",\"audio\":\"belt.mp3\",\"image\":\"belt.png\"},\"word3\":{\"word\":\"halt\",\"display\":\"ha<span>lt</span>\",\"audio\":\"halt.mp3\",\"image\":\"halt.png\"},\"quiz-words\":[\"bolt\",\"salt\",\"tilt\",\"stilt\",\"adult\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"So close, you can’t leave me. I’m a copycat.<br>Ha(lt) and I stop, go and I will go.<br>At sunrise and sunset like spi(lt) dark, I grow.<br>Dark me(lt)s me, though I flee sun like a bat.<br>Order me away, I revo(lt). No, that<br>Won’t do, child or adu(lt), I’ll follow.\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"K-kuh-begin\",\"audio\":\"phoneme-K-kuh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"key\",\"display\":\"<span>k</span>ey\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"word2\":{\"word\":\"kayak\",\"display\":\"<span>k</span>aya<span>k</span>\",\"audio\":\"kayak.mp3\",\"image\":\"kayak.png\"},\"word3\":{\"word\":\"kangaroo\",\"display\":\"<span>k</span>angaroo\",\"audio\":\"kangaroo.mp3\",\"image\":\"kangaroo.png\"},\"quiz-words\":[\"king\",\"kitten\",\"kiss\",\"kitchen\",\"kimono\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(K)itty-Cat sits by the fire;<br>Napping without a care.<br>In walks the little dog;<br>Says: “(K)itty, are you there?<br>How do you do, Mistress (K)itty?<br>Mistress (K)itty, how do you do?”<br>“I thank you (k)indly, little dog,<br>I do as well as you!”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"K-kuh-end\",\"audio\":\"phoneme-K-kuh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"elk\",\"display\":\"el<span>k</span>\",\"audio\":\"elk.mp3\",\"image\":\"elk.png\"},\"word2\":{\"word\":\"pick\",\"display\":\"pic<span>k</span>\",\"audio\":\"pick.mp3\",\"image\":\"pick.png\"},\"word3\":{\"word\":\"shark\",\"display\":\"shar<span>k</span>\",\"audio\":\"shark.mp3\",\"image\":\"shark.png\"},\"quiz-words\":[\"beak\",\"fork\",\"hawk\",\"duck\",\"kayak\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Little Bo-Peep has lost her sheep,<br>And can’t tell where to find them;<br>Let them alone, and they’ll come home,<br>And bring their tails behind them.<br><br>Little Bo-Peep fell fast asleep,<br>And dreamt she heard them bleating;<br>And when she awo(k)e, she found it a jo(k)e,<br>For still they were all fleeting.<br><br>Then up she too(k) her little croo(k),<br>Determined for to find them;<br>She found them indeed, but it made her heart bleed,<br>For they’d left all their tails behind them.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"K-KN-silent\",\"audio\":\"phoneme-K-KN-silent.mp3\",\"display\":\"kn\",\"word1\":{\"word\":\"knot\",\"display\":\"<span>kn</span>ot\",\"audio\":\"knot.mp3\",\"image\":\"knot.png\"},\"word2\":{\"word\":\"knee\",\"display\":\"<span>kn</span>ee\",\"audio\":\"knee.mp3\",\"image\":\"knee.png\"},\"word3\":{\"word\":\"knit\",\"display\":\"<span>kn</span>it\",\"audio\":\"knit.mp3\",\"image\":\"knit.png\"},\"quiz-words\":[\"know\",\"knock\",\"knives\",\"kneel\",\"knuckles\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Do you (kn)ow just what I am?<br>I help you with your bread and jam.<br>My thin back could (kn)ock your (kn)uckles.<br>I’m made of stuff like (kn)obs and buckles.<br>I am long and light and lean.<br>You should always keep me clean.<br>Kept in drawers by every housewife.<br>You (kn)ow me well.  I’m a —<br>\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"U-long\",\"audio\":\"phoneme-U-long.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"cute\",\"display\":\"c<span>u</span>te\",\"audio\":\"cute.mp3\",\"image\":\"cute.png\"},\"word2\":{\"word\":\"bugle\",\"display\":\"b<span>u</span>gle\",\"audio\":\"bugle.mp3\",\"image\":\"bugle.png\"},\"word3\":{\"word\":\"huge\",\"display\":\"h<span>u</span>ge\",\"audio\":\"huge.mp3\",\"image\":\"huge.png\"},\"quiz-words\":[\"music\",\"statue\",\"unicorn\",\"unicycle\",\"binoculars\",\"ambulance\",\"SUV\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"He balanced a c(u)cumber on his nose,<br>But should have (u)sed binoc(u)lars to watch the roads.<br>A (u)nicycle’s dangerous when clowns can’t see—<br>Quick call an amb(u)lance:  one, two, three!<br>\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-e\",\"audio\":\"phoneme-U-long.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"blue\",\"display\":\"bl<span>u</span><u>e</u>\",\"audio\":\"blue.mp3\",\"image\":\"blue.png\"},\"word2\":{\"word\":\"hues\",\"display\":\"h<span>u</span><u>e</u>s\",\"audio\":\"hues.mp3\",\"image\":\"hues.png\"},\"word3\":{\"word\":\"glue\",\"display\":\"gl<span>u</span><u>e</u>\",\"audio\":\"glue.mp3\",\"image\":\"glue.png\"},\"quiz-words\":[\"rescue\",\"statue\",\"tissue\",\"clueless\",\"flute\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Some aren’t worth much, but some have great val(u)e.<br>Each kept will be for friends a kind of gl(u)e.<br>Close friends who don’t keep them often arg(u)e.<br>Realize sharing them, even one cl(u)e,<br>Ends friendships, when just one friend’s untr(u)e.<br>Trust no one with one, some say, except a stat(u)e.\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"U-uu\",\"audio\":\"phoneme-U-uu.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"tuba\",\"display\":\"t<span>u</span>ba\",\"audio\":\"tuba.mp3\",\"image\":\"tuba.png\"},\"word2\":{\"word\":\"rude\",\"display\":\"r<span>u</span>de\",\"audio\":\"rude.mp3\",\"image\":\"rude.png\"},\"word3\":{\"word\":\"flu\",\"display\":\"fl<span>u</span>\",\"audio\":\"flu.mp3\",\"image\":\"flu.png\"},\"quiz-words\":[\"blue\",\"glue\",\"flute\",\"suit\",\"spruce\",\"tissue\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"S(u)e played a big bl(u)e t(u)ba,</br>J(u)lius played one too,</br>With their two bl(u)e t(u)bas,</br>What did those two do?</br>He blew his bl(u)e t(u)ba loud!</br>She blew hers too!\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-short\",\"audio\":\"phoneme-U-short.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"bug\",\"display\":\"b<span>u</span>g\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"word2\":{\"word\":\"bus\",\"display\":\"b<span>u</span>s\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word3\":{\"word\":\"cut\",\"display\":\"c<span>u</span>t\",\"audio\":\"cut.mp3\",\"image\":\"cut.png\"},\"quiz-words\":[\"jump\",\"trunk\",\"brush\",\"muzzle\",\"bucket\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"R(u)b a d(u)b d(u)b,<br>Three men in a t(u)b;<br>And who do you think they be?<br>The butcher, the baker,<br>The candlestick-maker;<br>Turn’em out, knaves all three!\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-schwa\",\"audio\":\"phoneme-U-short.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"bug\",\"display\":\"b<span>u</span>g\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"word2\":{\"word\":\"bus\",\"display\":\"b<span>u</span>s\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word3\":{\"word\":\"cut\",\"display\":\"c<span>u</span>t\",\"audio\":\"cut.mp3\",\"image\":\"cut.png\"},\"quiz-words\":[\"jump\",\"trunk\",\"brush\",\"muzzle\",\"bucket\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"2nd\":\"black\"},\"rhyme\":\"R(u)b a d(u)b d(u)b,<br>Three men in a t(u)b;<br>And who do you think they be?<br>The butcher, the baker,<br>The candlestick-maker;<br>Turn’em out, knaves all three!\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"U-UR\",\"audio\":\"phoneme-U-UR.mp3\",\"display\":\"ur\",\"word1\":{\"word\":\"burn\",\"display\":\"b<span>ur</span>n\",\"audio\":\"burn.mp3\",\"image\":\"burn.png\"},\"word2\":{\"word\":\"surf\",\"display\":\"s<span>ur</span>f\",\"audio\":\"surf.mp3\",\"image\":\"surf.png\"},\"word3\":{\"word\":\"nurse\",\"display\":\"n<span>ur</span>se\",\"audio\":\"nurse.mp3\",\"image\":\"nurse.png\"},\"quiz-words\":[\"purse\",\"burro\",\"turtle\",\"burrito\",\"hamburger\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"To (ur)ge her to p(ur)r<br>Lin rubs kitty cat's f(ur);<br>When Lin topples the (ur)n<br>Kitty makes a bl(ur).<br>\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"J-juh-begin\",\"audio\":\"phoneme-J-juh.mp3\",\"display\":\"j\",\"word1\":{\"word\":\"jump\",\"display\":\"<span>j</span>ump\",\"audio\":\"jump.mp3\",\"image\":\"jump.png\"},\"word2\":{\"word\":\"joy\",\"display\":\"<span>j</span>oy\",\"audio\":\"joy.mp3\",\"image\":\"joy.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"<span>j</span>eep\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"jay\",\"juggle\",\"jellyfish\",\"jacket\",\"judge\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Here am I; Little (j)umping (J)oan;<br>When nobody's with me;<br>I'm always alone.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"W-wuh-begin\",\"audio\":\"phoneme-W-wuh.mp3\",\"display\":\"w\",\"word1\":{\"word\":\"wagon\",\"display\":\"<span>w</span>agon\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"word2\":{\"word\":\"wolf\",\"display\":\"<span>w</span>olf\",\"audio\":\"wolf.mp3\",\"image\":\"wolf.png\"},\"word3\":{\"word\":\"wind\",\"display\":\"<span>w</span>ind\",\"audio\":\"wind.mp3\",\"image\":\"wind.png\"},\"quiz-words\":[\"wig\",\"wall\",\"walrus\",\"waterfall\",\"walnuts\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(W)ee (W)illie (W)inkie runs through the town;<br>Upstairs and downstairs; in his nightgown;<br>Tapping at the (w)indo(w); crying at the lock;<br>Are the children all in bed? It's now eight o'clock?\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"W-WH\",\"audio\":\"phoneme-W-WH.mp3\",\"display\":\"wh\",\"word1\":{\"word\":\"white\",\"display\":\"<span>wh</span>ite\",\"audio\":\"white.mp3\",\"image\":\"white.png\"},\"word2\":{\"word\":\"whiskers\",\"display\":\"<span>wh</span>iskers\",\"audio\":\"whiskers.mp3\",\"image\":\"whiskers.png\"},\"word3\":{\"word\":\"whale\",\"display\":\"<span>wh</span>ale\",\"audio\":\"whale.mp3\",\"image\":\"whale.png\"},\"quiz-words\":[\"whistle\",\"wheelchair\",\"wheat-bread\",\"wheel\",\"whisper\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Bill claimed a bully (wh)acked and (wh)opped his rib.<br>Mom said, “(Wh)at?  (Wh)o?  (Wh)en?  (Wh)ere?”<br>Kim said, “That’s a (wh)opper, a big fat fib.”<br>Bill said, “(Wh)atever!” -- (wh)ich means: I don’t care.<br>\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"W-WR-silent\",\"audio\":\"phoneme-W-WR-silent.mp3\",\"display\":\"wr\",\"word1\":{\"word\":\"wrap\",\"display\":\"<span>wr</span>ap\",\"audio\":\"wrap.mp3\",\"image\":\"wrap.png\"},\"word2\":{\"word\":\"write\",\"display\":\"<span>wr</span>ite\",\"audio\":\"write.mp3\",\"image\":\"write.png\"},\"word3\":{\"word\":\"wrong\",\"display\":\"<span>wr</span>ong\",\"audio\":\"wrong.mp3\",\"image\":\"wrong.png\"},\"quiz-words\":[\"wreck\",\"wrenches\",\"wrinkle\",\"wreath\",\"wriggle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"A thing that you can give, but must keep<br>Perfectly, or lose it. Don’t dream it’s cheap.<br>Right and (wr)ong in this are precious. (Wr)ite<br>Or speak it truthfully with all your might.<br>Make it with care, or (wr)eck a friendship.<br>If you (wr)iggle out—it’s a guilt trip.<br>So (wr)ap your mind around it: Be true.<br>Each first letter in this rhyme is a clue.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"E-long\",\"audio\":\"phoneme-E-long.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"me\",\"display\":\"m<span>e</span>\",\"audio\":\"me.mp3\",\"image\":\"me.png\"},\"word2\":{\"word\":\"he\",\"display\":\"h<span>e</span>\",\"audio\":\"he.mp3\",\"image\":\"he.png\"},\"word3\":{\"word\":\"we\",\"display\":\"w<span>e</span>\",\"audio\":\"we.mp3\",\"image\":\"we.png\"},\"quiz-words\":[\"she\",\"key\",\"zebra\",\"tree\",\"three\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Bo-p(ee)p has lost her sh(ee)p;<br>And doesn't know where to find them;<br>Leave them alone; and they'll come home;<br>Wagging their tails behind them.\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-short\",\"audio\":\"phoneme-E-short.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"elf\",\"display\":\"<span>e</span>lf\",\"audio\":\"elf.mp3\",\"image\":\"elf.png\"},\"word2\":{\"word\":\"bed\",\"display\":\"b<span>e</span>d\",\"audio\":\"bed.mp3\",\"image\":\"bed.png\"},\"word3\":{\"word\":\"net\",\"display\":\"n<span>e</span>t\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"quiz-words\":[\"sled\",\"bell\",\"yellow\",\"jelly-jars\",\"jellyfish\",\"pretzel\",\"present\",\"question\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Hick(e)ty; pick(e)ty; my black h(e)n;<br>She lays (e)ggs for gentlem(e)n;<br>Gentlem(e)n come (e)very day;<br>To see what my black h(e)n does lay.\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-schwa\",\"audio\":\"phoneme-E-schwa.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"camel\",\"display\":\"cam<span>e</span>l\",\"audio\":\"camel.mp3\",\"image\":\"camel.png\"},\"word2\":{\"word\":\"oven\",\"display\":\"ov<span>e</span>n\",\"audio\":\"oven.mp3\",\"image\":\"oven.png\"},\"word3\":{\"word\":\"kitten\",\"display\":\"kitt<span>e</span>n\",\"audio\":\"kitten.mp3\",\"image\":\"kitten.png\"},\"quiz-words\":[\"shovel\",\"rocket\",\"mittens\",\"garden\",\"piglet\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"2nd\":\"black\"},\"rhyme\":\"The el(e)phant want(e)d to cheat on her di(e)t<br>Found one gold(e)n cookie in the warm ov(e)n,<br>One in the gard(e)n, two in a torn pock(e)t,<br>Three hid in the kitch(e)n, that made sev(e)n,<br>Bought two at the mark(e)t, spied one in a bask(e)t,<br>Plus one she kept froz(e)n, that was elev(e)n,<br>And one from her lock(e)t, made twelve, a full doz(e)n<br>When she started to eat them it felt like pure heav(e)n!<br>\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"E-EI\",\"audio\":\"phoneme-E-EI.m4a\",\"display\":\"ei\",\"word1\":{\"word\":\"veil\",\"display\":\"v<span>ei</span>l\",\"audio\":\"veil.mp3\",\"image\":\"veil.png\"},\"word2\":{\"word\":\"eight\",\"display\":\"<span>ei</span>ght\",\"audio\":\"eight.mp3\",\"image\":\"eight.png\"},\"word3\":{\"word\":\"weigh\",\"display\":\"w<span>ei</span>gh\",\"audio\":\"weigh.mp3\",\"image\":\"weigh.png\"},\"quiz-words\":[\"sleigh\",\"neighbor\",\"reins\",\"beige\",\"freight\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Ever wonder how much fr(ei)ght<br>Santa’s (ei)ght r(ei)ndeer must haul<br>Every Christmas, and not be late?<br>Heeps of toys!  Imagine it all!<br>Do you think he w(ei)ghs the sl(ei)gh,<br>And himself too—he’s not thin—<br>Before he shouts, “Hi ho, away!”<br>He surely trusts the shape they’re in.<br>Could he put magic in the hay<br>They eat so they’ll fly strong.  Something good?<br>Magic oatmeal cookies?  He may.<br>They’d like that.  I know I would!\",\"category\":[\"VP\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"E-EA-long\",\"audio\":\"phoneme-E-EA-long.mp3\",\"display\":\"ea\",\"word1\":{\"word\":\"eat\",\"display\":\"<span>ea</span>t\",\"audio\":\"eat.mp3\",\"image\":\"eat.png\"},\"word2\":{\"word\":\"beak\",\"display\":\"b<span>ea</span>k\",\"audio\":\"beak.mp3\",\"image\":\"beak.png\"},\"word3\":{\"word\":\"leaf\",\"display\":\"l<span>ea</span>f\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"quiz-words\":[\"steal\",\"read\",\"beach\",\"beagle\",\"beaver\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Jack Sprat would (ea)t no fat;<br>His wife would (ea)t no l(ea)n;<br>And so between the two of them;<br>They licked the platter cl(ea)n.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-EA-short\",\"audio\":\"phoneme-E-EA-short.m4a\",\"display\":\"ea\",\"word1\":{\"word\":\"head\",\"display\":\"h<span>ea</span>d\",\"audio\":\"head.mp3\",\"image\":\"head.png\"},\"word2\":{\"word\":\"bear\",\"display\":\"b<span>ea</span>r\",\"audio\":\"bear.mp3\",\"image\":\"bear.png\"},\"word3\":{\"word\":\"pears\",\"display\":\"p<span>ea</span>rs\",\"audio\":\"pears.mp3\",\"image\":\"pears.png\"},\"quiz-words\":[\"bread\",\"spread\",\"feather\",\"sweater\",\"weather\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"The best story Dad ever r(ea)d<br>Told how this gingerbr(ea)d<br>Cookie fled from the grandma, how<br>The grandad, cat, dog, horse, cow,<br>And boy chased him through a m(ea)dow<br>Till this sly fox said, “Hello.”<br>Pretending to be pl(ea)sant, nice.<br>The cookie didn’t know the price<br>He’d pay for smarting off. Inst(ea)d,<br>He should have used his h(ea)d,<br>Not brag, ‘Run, run, fast as you can,<br>You can’t catch me, I’m the Gingerbr(ea)d Man!’\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-EE\",\"audio\":\"phoneme-E-EE.mp3\",\"display\":\"ee\",\"word1\":{\"word\":\"bee\",\"display\":\"b<span>ee</span>\",\"audio\":\"bee.mp3\",\"image\":\"bee.png\"},\"word2\":{\"word\":\"tree\",\"display\":\"tr<span>ee</span>\",\"audio\":\"tree.mp3\",\"image\":\"tree.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"j<span>ee</span>p\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"feet\",\"cheek\",\"sheep\",\"geese\",\"queen\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Bo-p(ee)p has lost her sh(ee)p;<br>And doesn't know where to find them;<br>Leave them alone; and they'll come home;<br>Wagging their tails behind them.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-ER\",\"audio\":\"phoneme-E-ER.mp3\",\"display\":\"er\",\"word1\":{\"word\":\"fern\",\"display\":\"f<span>er</span>n\",\"audio\":\"fern.mp3\",\"image\":\"fern.png\"},\"word2\":{\"word\":\"tiger\",\"display\":\"tig<span>er</span>\",\"audio\":\"tiger.mp3\",\"image\":\"tiger.png\"},\"word3\":{\"word\":\"zipper\",\"display\":\"zipp<span>er</span>\",\"audio\":\"zipper.mp3\",\"image\":\"zipper.png\"},\"quiz-words\":[\"dozer\",\"shower\",\"mermaid\",\"paper\",\"waterfall\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Pet(er); Pet(er); pumpkin eat(er);<br>Had a wife and couldn't keep h(er);<br>He put h(er) in a pumpkin shell;<br>And then he kept h(er) very well.\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"E-ET-stressed\",\"audio\":\"phoneme-E-ET-stressed.mp3\",\"display\":\"et\",\"word1\":{\"word\":\"net\",\"display\":\"n<span>et</span>\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"word2\":{\"word\":\"jet\",\"display\":\"j<span>et</span>\",\"audio\":\"jet.mp3\",\"image\":\"jet.png\"},\"word3\":{\"word\":\"yeti\",\"display\":\"y<span>et</span>i\",\"audio\":\"yeti.mp3\",\"image\":\"yeti.png\"},\"quiz-words\":[\"vet\",\"pets\",\"pretzel\",\"lettuce\",\"machete\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Of just three syllables I’m made,<br>Of l(et)ters twenty-six.<br>Your debt to me could not be paid.<br>Using me well predicts<br>That you’ll do very well in school<br>And won’t soon forg(et) me.<br>Though I’m a very useful tool,<br>Y(et)is never g(et) me.<br>I’ve been here for two thousand years,<br>Help run the intern(et).<br>You learned me with your eyes and ears.<br>I am the —\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"E-ET-unstressed\",\"audio\":\"phoneme-E-ET-unstressed.m4a\",\"display\":\"et\",\"word1\":{\"word\":\"target\",\"display\":\"targ<span>et</span>\",\"audio\":\"target.mp3\",\"image\":\"target.png\"},\"word2\":{\"word\":\"hornet\",\"display\":\"horn<span>et</span>\",\"audio\":\"hornet.mp3\",\"image\":\"hornet.png\"},\"word3\":{\"word\":\"piglet\",\"display\":\"pigl<span>et</span>\",\"audio\":\"piglet.mp3\",\"image\":\"piglet.png\"},\"quiz-words\":[\"hatchet\",\"faucet\",\"bucket\",\"ferret\",\"flying carpet\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Lucy Lock(et) lost her pock(et);<br>Kitty Fisher found it.<br>There was not a penny in it;<br>But a ribbon round it.\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"E-EW\",\"audio\":\"phoneme-E-EW.mp3\",\"display\":\"ew\",\"word1\":{\"word\":\"flew\",\"display\":\"fl<span>ew</span>\",\"audio\":\"flew.mp3\",\"image\":\"flew.png\"},\"word2\":{\"word\":\"blew\",\"display\":\"bl<span>ew</span>\",\"audio\":\"blew.mp3\",\"image\":\"blew.png\"},\"word3\":{\"word\":\"chew\",\"display\":\"ch<span>ew</span>\",\"audio\":\"chew.mp3\",\"image\":\"chew.png\"},\"quiz-words\":[\"threw\",\"screws\",\"cashew\",\"crew cut\",\"stew pot\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The hungry cuckoo fl(ew)<br>Then found a cash(ew)<br>His beak couldn’t ch(ew).<br>What could he do?<br>He br(ew)ed cash(ew) st(ew)<br>Which smelled really P U!<br>But tasted great with barbecue.<br><br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"Y-yuh\",\"audio\":\"phoneme-Y-yuh.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"yellow\",\"display\":\"<span>y</span>ellow\",\"audio\":\"yellow.mp3\",\"image\":\"yellow.png\"},\"word2\":{\"word\":\"yo-yo\",\"display\":\"<span>y</span>oyo\",\"audio\":\"yoyo.mp3\",\"image\":\"yoyo.png\"},\"word3\":{\"word\":\"yawn\",\"display\":\"<span>y</span>awn\",\"audio\":\"yawn.mp3\",\"image\":\"yawn.png\"},\"quiz-words\":[\"yeti\",\"yell\",\"yummy\",\"youngster\",\"yacht\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Baa, baa, black sheep, have (y)ou any wool?<br>(Y)es sir, (y)es sir, three bags full.<br>One for my master, one for my dame,<br>And one for the little boy,<br>Who lives down the lane.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-i\",\"audio\":\"phoneme-Y-i.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"cry\",\"display\":\"cr<span>y</span>\",\"audio\":\"cry.mp3\",\"image\":\"cry.png\"},\"word2\":{\"word\":\"fly\",\"display\":\"fl<span>y</span>\",\"audio\":\"fly.mp3\",\"image\":\"fly.png\"},\"word3\":{\"word\":\"sky\",\"display\":\"sk<span>y</span>\",\"audio\":\"sky.mp3\",\"image\":\"sky.png\"},\"quiz-words\":[\"fry\",\"eye\",\"why\",\"spy\",\"buy\"],\"color\":{\"all\":\"green\",\"vowel\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Cr(y)baby, cr(y)baby,<br>Cr(y)baby, wh(y)!?<br>Stick your finger in your e(y)e,<br>Then tell your mother it was I?\",\"category\":[\"Y\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-e\",\"audio\":\"phoneme-Y-e.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"baby\",\"display\":\"bab<span>y</span>\",\"audio\":\"baby.mp3\",\"image\":\"baby.png\"},\"word2\":{\"word\":\"candy\",\"display\":\"cand<span>y</span>\",\"audio\":\"candy.mp3\",\"image\":\"candy.png\"},\"word3\":{\"word\":\"lazy\",\"display\":\"laz<span>y</span>\",\"audio\":\"lazy.mp3\",\"image\":\"lazy.png\"},\"quiz-words\":[\"pony\",\"bunny\",\"puppy\",\"kitty\",\"tricky\"],\"color\":{\"all\":\"pink\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Ride away; Ride away;<br>Johnn(y) shall ride;<br>And he shall have kitt(y) cat;<br>Tied to one side.<br>And he shall have pupp(y) dog;<br>Tied to the other;<br>And Johnn(y) shall ride;<br>To see his grandmother.\",\"category\":[\"Y\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-ey\",\"audio\":\"phoneme-Y-ey.mp3\",\"display\":\"ey\",\"word1\":{\"word\":\"key\",\"display\":\"k<span>ey</span>\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"word2\":{\"word\":\"money\",\"display\":\"mon<span>ey</span>\",\"audio\":\"money.mp3\",\"image\":\"money.png\"},\"word3\":{\"word\":\"monkey\",\"display\":\"monk<span>ey</span>\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"quiz-words\":[\"donkey\",\"turkey\",\"chimney\",\"hockey\",\"trolley\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The monk(ey) was feeling hungry<br>And wanted to eat some hon(ey),<br>But didn’t have any mon(ey),<br>Then back of the store in the all(ey),<br>The lucky monk(ey) found a k(ey).<br>Inside the nos(ey) monk(ey),<br>Saw a cake, a pie, and cookie,<br>All made with the yummiest hon(ey),<br>And ate till he felt sleepy,<br>Then the boss came and made him flee!\",\"category\":[\"Y\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Z-zzz-begin\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"zebra\",\"display\":\"<span>z</span>ebra\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word2\":{\"word\":\"zipper\",\"display\":\"<span>z</span>ipper\",\"audio\":\"zipper.mp3\",\"image\":\"zipper.png\"},\"word3\":{\"word\":\"zoo\",\"display\":\"<span>z</span>oo\",\"audio\":\"zoo.mp3\",\"image\":\"zoo.png\"},\"quiz-words\":[\"zero\",\"zigzag\",\"zany\",\"zither\",\"zeppelin\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Buzzing hornets always scare me,<br>When they (z)igzag round my head,<br>(Z)ipping, (z)apping, like some carefree<br>(Z)any clowns!  I’ll (z)oom to bed,<br>Bury myself under the covers,<br>Have (z)ero patience, want them dead!<br>Wise up all you hornet lovers–<br>Switch to spiders instead.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Z-zzz-end\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"quiz\",\"display\":\"qui<span>z</span>\",\"audio\":\"quiz.mp3\",\"image\":\"quiz.png\"},\"word2\":{\"word\":\"prize\",\"display\":\"pri<span>z</span>e\",\"audio\":\"prize.mp3\",\"image\":\"prize.png\"},\"word3\":{\"word\":\"freeze\",\"display\":\"free<span>z</span>e\",\"audio\":\"freeze.mp3\",\"image\":\"freeze.png\"},\"quiz-words\":[\"buzz\",\"doze\",\"blaze\",\"gauze\",\"maize\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"My sister’s great on every qui(z);<br>She loves jewelry and glit(z).<br>My brother’s a real football whi(z),<br>Loves tackling passers on a blit(z).<br>I’m class clown, love acting nuts,<br>Stumble bumbling like some dit(z),<br>Joking, acting like a klut(z),<br>Making gross sounds with my armpits.<br>Stuffing broccoli inside donuts,<br>Love making kids laugh with my wits.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"V-vv-begin\",\"audio\":\"phoneme-V-vv.mp3\",\"display\":\"v\",\"word1\":{\"word\":\"volcano\",\"display\":\"<span>v</span>olcano\",\"audio\":\"volcano.mp3\",\"image\":\"volcano.png\"},\"word2\":{\"word\":\"van\",\"display\":\"<span>v</span>an\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"voice\",\"display\":\"<span>v</span>oice\",\"audio\":\"voice.mp3\",\"image\":\"voice.png\"},\"quiz-words\":[\"veil\",\"vowels\",\"violin\",\"volleyball\",\"vegetables\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"rhyme\":\"When (V)ic dropped his (v)anilla cone,<br>In (v)ery weird (v)oice he moaned a groan.<br>Bigfoot offered some syrup for a trial.<br>“Yuck!” (V)ic roared.  “(V)inegar’s (v)ile!”<br>Giant Cyclops grinned big, said, “No!<br>Try that (v)ast upside down cone: (v)olcano!”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Q-qwuh-begin\",\"audio\":\"phoneme-Q-qwuh.mp3\",\"display\":\"q\",\"word1\":{\"word\":\"queen\",\"display\":\"<span>q</span>ueen\",\"audio\":\"queen.mp3\",\"image\":\"queen.png\"},\"word2\":{\"word\":\"question\",\"display\":\"<span>q</span>uestion\",\"audio\":\"question.mp3\",\"image\":\"question.png\"},\"word3\":{\"word\":\"quick\",\"display\":\"<span>q</span>uick\",\"audio\":\"quick.mp3\",\"image\":\"quick.png\"},\"quiz-words\":[\"quiet\",\"quill\",\"quart\",\"quarter\",\"quiver\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(Q)ueen Croc napped on her (q)uilt,<br>Mama duck (q)uacked, “Be (q)uiet!”<br>“What?” (Q)uacked the duckling.<br>“(Q)uit!” Mama (q)uacked, “Ducks are her diet!”<br>\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"X-ks-begin\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"excavator\",\"display\":\"e<span>x</span>cavator\",\"audio\":\"excavator.mp3\",\"image\":\"excavator.png\"},\"word2\":{\"word\":\"ax\",\"display\":\"a<span>x</span>\",\"audio\":\"ax.mp3\",\"image\":\"ax.png\"},\"word3\":{\"word\":\"exam\",\"display\":\"e<span>x</span>am\",\"audio\":\"exam.mp3\",\"image\":\"exam.png\"},\"quiz-words\":[\"explore\",\"excellent\",\"exercise\",\"exciting\",\"explode\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"I hate e(x)ams at school, <i>can’t sit<br>Still</i>! Look for some e(x)cuse to e(x)it.<br>Staying quiet’s e(x)tremely tough!<br>Yes, school’s ok to learn some stuff,<br>But not fireworks! Why things e(x)plode!<br>I’d e(x)ert myself if teachers showed<br>How to make firecrackers louder,<br>Could study fuses, stuffing, powder.<br>I e(x)pect I’d study till it hurt<br>To be a big e(x)plosion e(x)pert!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"X-ks-end\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"fox\",\"display\":\"fo<span>x</span>\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"ax\",\"display\":\"a<span>x</span>\",\"audio\":\"ax.mp3\",\"image\":\"ax.png\"},\"word3\":{\"word\":\"six\",\"display\":\"si<span>x</span>\",\"audio\":\"six.mp3\",\"image\":\"six.png\"},\"quiz-words\":[\"trex\",\"box\",\"fix\",\"lynx\",\"wax\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Dum diddle dee doh,<br>O(x) wore a tuxedo,<br>The dancer boxed with T-Re(x).<br>Jack popped from a mailbo(x),<br>First swung his hand a(x),<br>Next tattled that red fo(x)<br>Had pooped in the sandbo(x)—<br>Then all of them taxied away.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]}]");

/***/ }),

/***/ "./src/assets/json/phonemes.json":
/*!***************************************!*\
  !*** ./src/assets/json/phonemes.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"A-long\",\"audio\":\"phoneme-A-long.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"ape\",\"display\":\"<span>a</span>pe\",\"audio\":\"ape.mp3\",\"image\":\"ape.png\"},\"word2\":{\"word\":\"make\",\"display\":\"m<span>a</span>ke\",\"audio\":\"make.mp3\",\"image\":\"make.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"c<span>a</span>ke\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"skate\",\"crane\",\"face\",\"whale\",\"baby\",\"cradle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Pat a c(a)ke; pat a c(a)ke; B(a)ker's man;<br>B(a)ke me a c(a)ke as fast as you can.<br>Pit it and pat it and mark it with B;<br>And put it in the oven for B(a)by and me.\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-e\",\"audio\":\"phoneme-A-long.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"plane\",\"display\":\"pl<span>a</span>n<u>e</u>\",\"audio\":\"plane.mp3\",\"image\":\"plane.png\"},\"word2\":{\"word\":\"cake\",\"display\":\"c<span>a</span>k<u>e</u>\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"word3\":{\"word\":\"ape\",\"display\":\"<span>a</span>p<u>e</u>\",\"audio\":\"ape.mp3\",\"image\":\"ape.png\"},\"quiz-words\":[\"cage\",\"mane\",\"shave\",\"snake\",\"shapes\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"rhyme\":\"Who m(a)de the str(a)nge par(a)de at my house?<br>—With a firetruck in front pulled by a mouse,<br>Bumped in back by some centaur slurping ice cream,<br>And bumblebee and rhino yoked as a team,<br>Hauling a trolley atop which a T-rex rode,<br>And giggled to see a cop kiss a toad,<br>And a wrestler and toddler danced together,<br>As an (a)pe tickled both with a peacock feather.<br>A penguin and rocketman on a rope hanging down,<br>Tossed eggs at a juggler who tried not to frown,<br>While a triceratops gobbled fresh gr(a)pes and burped,<br>At a peacock who spilled chocolate milk as it slurped,<br>And a str(a)nge smelling panda on a clock w(a)ved at me—<br>As I sat on a pretzel for an hour to sight-see.<br>Who could dream up a str(a)nge par(a)de of this kind?<br>Did I maybe just m(a)ke it all up in my mind?\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"A-short\",\"audio\":\"phoneme-A-short.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"bat\",\"display\":\"b<span>a</span>t\",\"audio\":\"bat.mp3\",\"image\":\"bat.png\"},\"word2\":{\"word\":\"cat\",\"display\":\"c<span>a</span>t\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word3\":{\"word\":\"ax\",\"display\":\"<span>a</span>x\",\"audio\":\"ax.mp3\",\"image\":\"ax.png\"},\"quiz-words\":[\"clam\",\"taxi\",\"wagon\",\"hamster\",\"raccoons\",\"camel\",\"rabbit\",\"cactus\",\"statue\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"B(a)t; b(a)t;<br>Come under my h(a)t;<br>And I'll give you a slice of bacon;<br>And when I bake;<br>I'll give you a cake;<br>If I am not mistaken.\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-ahh\",\"audio\":\"phoneme-A-ahh.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"ball\",\"display\":\"b<span>a</span>ll\",\"audio\":\"ball.mp3\",\"image\":\"ball.png\"},\"word2\":{\"word\":\"fall\",\"display\":\"f<span>a</span>ll\",\"audio\":\"fall.mp3\",\"image\":\"fall.png\"},\"word3\":{\"word\":\"swan\",\"display\":\"sw<span>a</span>n\",\"audio\":\"swan.mp3\",\"image\":\"swan.png\"},\"quiz-words\":[\"small\",\"father\",\"walnuts\",\"walrus\",\"squash\"],\"color\":{\"all\":\"red\",\"vowel\":\"red\",\"K\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Children call me F(a)ther Goose,<br>Because when I w(a)nt to w(a)nder,<br>I ride through the air<br>On a very fine gander.<br>\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-schwa\",\"audio\":\"phoneme-A-schwa.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"sofa\",\"display\":\"sof<span>a</span>\",\"audio\":\"sofa.mp3\",\"image\":\"sofa.png\"},\"word2\":{\"word\":\"zebra\",\"display\":\"zebr<span>a</span>\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word3\":{\"word\":\"afraid\",\"display\":\"af<span>a</span>id\",\"audio\":\"afraid.mp3\",\"image\":\"afraid.png\"},\"quiz-words\":[\"panda\",\"ovals\",\"canoe\",\"tuba\",\"gazelle\"],\"color\":{\"all\":\"purple\",\"vowel\":\"purple\",\"2nd\":\"black\"},\"rhyme\":\"(A)round the bush, Willie,<br>(A)round the bee hive.<br>(A)round the bush, Willie,<br>I'll meet you (a)live.\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AI\",\"audio\":\"phoneme-A-AI.mp3\",\"display\":\"ai\",\"word1\":{\"word\":\"tail\",\"display\":\"t<span>ai</span>l\",\"audio\":\"tail.mp3\",\"image\":\"tail.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"n<span>ai</span>l\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"rainbow\",\"display\":\"r<span>ai</span>nbow\",\"audio\":\"rainbow.mp3\",\"image\":\"rainbow.png\"},\"quiz-words\":[\"sail\",\"paint\",\"snail\",\"afraid\",\"mermaid\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"R(ai)n, r(ai)n, go to Sp(ai)n,<br>Never come back again.<br>R(ai)n, r(ai)n, go away,<br>Come again another day.<br>Little Johny wants to play.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"A-AN\",\"audio\":\"phoneme-A-AN.mp3\",\"display\":\"an\",\"word1\":{\"word\":\"ant\",\"display\":\"<span>an</span>t\",\"audio\":\"ant.mp3\",\"image\":\"ant.png\"},\"word2\":{\"word\":\"man\",\"display\":\"m<span>an</span>\",\"audio\":\"man.mp3\",\"image\":\"man.png\"},\"word3\":{\"word\":\"van\",\"display\":\"v<span>an</span>\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"quiz-words\":[\"hand\",\"panda\",\"pansy\",\"bandage\",\"sandbox\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Fr(an)kie Frog was afraid of (an)ts—<br>He flopped on (an) (an)thill and up did pr(an)ce!<br>To shake fire (an)ts from his underp(an)ts,<br>Fr(an)kie Frog d(an)ced to Paris, Fr(an)ce!<br>\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"A-AR-short\",\"audio\":\"phoneme-A-AR-short.mp3\",\"display\":\"ar\",\"word1\":{\"word\":\"arm\",\"display\":\"<span>ar</span>m\",\"audio\":\"arm.mp3\",\"image\":\"arm.png\"},\"word2\":{\"word\":\"stars\",\"display\":\"st<span>ar</span>s\",\"audio\":\"stars.mp3\",\"image\":\"stars.png\"},\"word3\":{\"word\":\"barn\",\"display\":\"b<span>ar</span>n\",\"audio\":\"barn.mp3\",\"image\":\"barn.png\"},\"quiz-words\":[\"harp\",\"scarf\",\"target\",\"go-kart\",\"cardinal\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Twinkle, twinkle, little st(ar),<br>How I wonder what you (ar)e.<br>Up above the world so high,<br>Like a diamond in the sky.\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AR-long\",\"audio\":\"phoneme-A-AR-long.m4a\",\"display\":\"ar\",\"word1\":{\"word\":\"bare\",\"display\":\"b<span>ar</span>e\",\"audio\":\"bare.mp3\",\"image\":\"bare.png\"},\"word2\":{\"word\":\"mare\",\"display\":\"m<span>ar</span>e\",\"audio\":\"mare.mp3\",\"image\":\"mare.png\"},\"word3\":{\"word\":\"hare\",\"display\":\"h<span>ar</span>e\",\"audio\":\"hare.mp3\",\"image\":\"hare.png\"},\"quiz-words\":[\"scare\",\"parrot\",\"carrot\",\"canary\",\"marionette\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\",\"VC\":\"green\"},\"rhyme\":\"P(ar)rot said to Miss Can(ar)y,<br>“Come with me–leave this cage.<br>We’ll fly far off, then we’ll m(ar)ry,<br>Join the circus, star on stage.”<br><br>“I can’t. It’s all too sc(ar)y!”<br>She decl(ar)ed, “It sounds too strange.”<br>“I b(ar)ed my heart, will c(ar)ry<br>You quite safely. Don’t fear change.”<br><br>“I don’t d(ar)e,” she sighed. “I’m w(ar)y.<br>Can you love me through the bars?”<br>“I do,” he said. “I will.” There he<br>Kissed her–till both saw stars.\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AU\",\"audio\":\"phoneme-A-AU.mp3\",\"display\":\"au\",\"word1\":{\"word\":\"haul\",\"display\":\"h<span>au</span>l\",\"audio\":\"haul.mp3\",\"image\":\"haul.png\"},\"word2\":{\"word\":\"gauze\",\"display\":\"g<span>au</span>ze\",\"audio\":\"gauze.mp3\",\"image\":\"gauze.png\"},\"word3\":{\"word\":\"faucet\",\"display\":\"f<span>au</span>cet\",\"audio\":\"faucet.mp3\",\"image\":\"faucet.png\"},\"quiz-words\":[\"centaur\",\"dinosaur\",\"astronaut\",\"naughty\",\"caught\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Polly Flinders<br>Sat among the cinders,<br>Warming her pretty little toes.<br>Her mother came and c(au)ght her,<br>Whipped her little d(au)ghter<br>For spoiling her nice new clothes.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AW\",\"audio\":\"phoneme-A-AW.mp3\",\"display\":\"aw\",\"word1\":{\"word\":\"saw\",\"display\":\"s<span>aw</span>\",\"audio\":\"saw.mp3\",\"image\":\"saw.png\"},\"word2\":{\"word\":\"hawk\",\"display\":\"h<span>aw</span>k\",\"audio\":\"hawk.mp3\",\"image\":\"hawk.png\"},\"word3\":{\"word\":\"paws\",\"display\":\"p<span>aw</span>s\",\"audio\":\"paws.mp3\",\"image\":\"paws.png\"},\"quiz-words\":[\"claws\",\"yawn\",\"draw\",\"seesaw\",\"straw\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"See s(aw), Margery D(aw),<br>Jacky shall have a new master.<br>Jacky will earn just a penny a day,<br>Because he will work no faster.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"A-AY\",\"audio\":\"phoneme-A-AY.mp3\",\"display\":\"ay\",\"word1\":{\"word\":\"jay\",\"display\":\"j<span>ay</span>\",\"audio\":\"jay.mp3\",\"image\":\"jay.png\"},\"word2\":{\"word\":\"ray\",\"display\":\"r<span>ay</span>\",\"audio\":\"ray.mp3\",\"image\":\"ray.png\"},\"word3\":{\"word\":\"play\",\"display\":\"pl<span>ay</span>\",\"audio\":\"play.mp3\",\"image\":\"play.png\"},\"quiz-words\":[\"say\",\"hay\",\"spray\",\"crayons\",\"birthday\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"How many d(ay)s has my baby to pl(ay)?<br>Saturd(ay); Sund(ay); Mond(ay);<br>Tuesd(ay); Wednesd(ay); Thursd(ay); Frid(ay);<br>Saturd(ay); Sund(ay); Mond(ay).\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-buh-begin\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"boy\",\"display\":\"<span>b</span>oy\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word2\":{\"word\":\"bubble\",\"display\":\"<span>b</span>u<span>bb</span>le\",\"audio\":\"bubble.mp3\",\"image\":\"bubble.png\"},\"word3\":{\"word\":\"boat\",\"display\":\"<span>b</span>oat\",\"audio\":\"boat.mp3\",\"image\":\"boat.png\"},\"quiz-words\":[\"bird\",\"bat\",\"bear\",\"box\",\"beaver\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Rock-a-(b)ye; (B)aby; on the tree top;<br>When the wind (b)lows the cradle will rock;<br>When the (b)ough (b)reaks the cradle will fall;<br>and down will come (B)aby; cradle; and all.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-buh-end\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"cub\",\"display\":\"cu<span>b</span>\",\"audio\":\"cub.mp3\",\"image\":\"cub.png\"},\"word2\":{\"word\":\"crab\",\"display\":\"cra<span>b</span>\",\"audio\":\"crab.mp3\",\"image\":\"crab.png\"},\"word3\":{\"word\":\"cobweb\",\"display\":\"co<span>b</span>we<span>b</span>\",\"audio\":\"cobweb.mp3\",\"image\":\"cobweb.png\"},\"quiz-words\":[\"cab\",\"sob\",\"bulb\",\"rob\",\"bathtub\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Ru(b) a du(b) du(b),<br>Three men in a tu(b);<br>And who do you think they be?<br>The butcher, the baker,<br>The candlestick-maker;<br>Turn’em out, knaves all three!\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-BL\",\"audio\":\"phoneme-B-BL.mp3\",\"display\":\"bl\",\"word1\":{\"word\":\"blow\",\"display\":\"<span>bl</span>ow\",\"audio\":\"blow.mp3\",\"image\":\"blow.png\"},\"word2\":{\"word\":\"blue\",\"display\":\"<span>bl</span>ue\",\"audio\":\"blue.mp3\",\"image\":\"blue.png\"},\"word3\":{\"word\":\"blush\",\"display\":\"<span>bl</span>ush\",\"audio\":\"blush.mp3\",\"image\":\"blush.png\"},\"quiz-words\":[\"block\",\"blaze\",\"black\",\"blanket\",\"bloodhound\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Little Boy (Bl)ue; come (bl)ow your horn;<br>The sheep's in the meadow; the cow's in the corn.<br>Where is the boy who minds the sheep?<br>Under the haystack fast asleep.<br>Will you wake him?<br>No; not I;<br>For if I do he's sure to cry.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"B-BR\",\"audio\":\"phoneme-B-BR.mp3\",\"display\":\"br\",\"word1\":{\"word\":\"bridge\",\"display\":\"<span>br</span>idge\",\"audio\":\"bridge.mp3\",\"image\":\"bridge.png\"},\"word2\":{\"word\":\"broom\",\"display\":\"<span>br</span>oom\",\"audio\":\"broom.mp3\",\"image\":\"broom.png\"},\"word3\":{\"word\":\"brush\",\"display\":\"<span>br</span>ush\",\"audio\":\"brush.mp3\",\"image\":\"brush.png\"},\"quiz-words\":[\"brown\",\"bride\",\"bread\",\"brother\",\"brighten\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"London (Br)idge is falling down,<br>Falling down, falling down.<br>London (Br)idge is falling down.<br>My fair lady.<br><br>Build it up with stones and (br)icks,<br>Stones and (br)icks, stones and (br)icks.<br>Build it up with stones and (br)icks,<br>My fair lady.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-kuh-begin\",\"audio\":\"phoneme-C-kuh.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"cat\",\"display\":\"<span>c</span>at\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word2\":{\"word\":\"canary\",\"display\":\"<span>c</span>anary\",\"audio\":\"canary.mp3\",\"image\":\"canary.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"<span>c</span>ake\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"cub\",\"cut\",\"cow\",\"candy\",\"car\"],\"color\":{\"all\":\"black\",\"K\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\",\"consonant\":\"black\"},\"rhyme\":\"Little Robin Redbreast sat upon a tree;<br>Up went the Kitty-(C)at; and down went he;<br>Down came Kitty-(C)at; away Robin ran;<br>Says little Robin Redbreast:<br>\\\"(C)atch me if you (c)an!\\\"\",\"category\":[\"C-begin\",\"CG\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-sss\",\"audio\":\"phoneme-C-sss.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"celery\",\"display\":\"<span>c</span>elery\",\"audio\":\"celery.mp3\",\"image\":\"celery.png\"},\"word2\":{\"word\":\"face\",\"display\":\"fa<span>c</span>e\",\"audio\":\"face.mp3\",\"image\":\"face.png\"},\"word3\":{\"word\":\"balance\",\"display\":\"balan<span>c</span>e\",\"audio\":\"balance.mp3\",\"image\":\"balance.png\"},\"quiz-words\":[\"ice\",\"pencil\",\"tricycle\",\"unicycle\",\"ice cream\",\"sauce pan\",\"dancing\"],\"color\":{\"all\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\",\"consonant\":\"green\"},\"rhyme\":\"(C)elery, lettu(c)e, and ri(c)e aren’t my dream,<br>But you scream, I scream, we all scream<br>for i(c)e cream!<br>\",\"category\":[\"CG\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"C-CH-begin\",\"audio\":\"phoneme-C-CH.mp3\",\"display\":\"ch\",\"word1\":{\"word\":\"chest\",\"display\":\"<span>ch</span>est\",\"audio\":\"chest.mp3\",\"image\":\"chest.png\"},\"word2\":{\"word\":\"cheese\",\"display\":\"<span>ch</span>eese\",\"audio\":\"cheese.mp3\",\"image\":\"cheese.png\"},\"word3\":{\"word\":\"chisel\",\"display\":\"<span>ch</span>isel\",\"audio\":\"chisel.mp3\",\"image\":\"chisel.png\"},\"quiz-words\":[\"chickens\",\"chimney\",\"chipmunk\",\"chopsticks\",\"cherry-picker truck\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The (ch)ubby (ch)imp boy sat to (ch)at,<br>With the (ch)arming (ch)imp girl.<br>But slipped–he was no acrobat–<br>And fell in a twirling swirl.<br>She kissed his (ch)eek, that (ch)eered him up,<br>Then cooked yummy (ch)ili.<br>He said, “Let’s marry when we’re grown up.”<br>She said, “Don’t be silly!”\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-CH-end\",\"audio\":\"phoneme-C-CH.mp3\",\"display\":\"ch\",\"word1\":{\"word\":\"beach\",\"display\":\"bea<span>ch</span>\",\"audio\":\"beach.mp3\",\"image\":\"beach.png\"},\"word2\":{\"word\":\"catch\",\"display\":\"cat<span>ch</span>\",\"audio\":\"catch.mp3\",\"image\":\"catch.png\"},\"word3\":{\"word\":\"sasquatch\",\"display\":\"sasquat<span>ch</span>\",\"audio\":\"sasquatch.mp3\",\"image\":\"sasquatch.png\"},\"quiz-words\":[\"ostrich\",\"scratch\",\"wrench\",\"sandwich\",\"bench\",\"wristwatch\",\"much\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"If you bel(ch) when you mun(ch)<br>You need someone to tea(ch)<br>You decorum.<br>Otherwise when you lun(ch)<br>It should be at the bea(ch)<br>In a storm.<br>You could learn from a coa(ch)<br>How to swallow a roa(ch)<br>Up your nose.<br>When a hurricane blows<br>If you burp through your nose<br>No one knows.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-CK\",\"audio\":\"phoneme-C-CK.mp3\",\"display\":\"ck\",\"word1\":{\"word\":\"kick\",\"display\":\"ki<span>ck</span>\",\"audio\":\"kick.mp3\",\"image\":\"kick.png\"},\"word2\":{\"word\":\"truck\",\"display\":\"tru<span>ck</span>\",\"audio\":\"truck.mp3\",\"image\":\"truck.png\"},\"word3\":{\"word\":\"backpack\",\"display\":\"ba<span>ck</span>pa<span>ck</span>\",\"audio\":\"backpack.mp3\",\"image\":\"backpack.png\"},\"quiz-words\":[\"lock\",\"duck\",\"peacock\",\"hammock\",\"hockey stick\",\"puck\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"An elf taught Pat how to make magic,<br>Gave Pat a small peaco(ck) made of old plastic,<br>Said, “Wish on it, blink, rub its nose then qui(ck) change,<br>Anything to whatever, no matter how strange.<br>Turning a hot dog to a dachshund was an easy tri(ck),<br>Changing a dragonfly to a dragon went super qui(ck).<br>Pat saw a bla(ck) bear just starting to crunch<br>On this du(ck)’s ne(ck), but dragon sna(ck)ed on that bear for lunch!<br>A shopper held spaghetti leaving a shop’s door,<br>But carried an octopus after just one step more!<br>A firefly and bee closed eyes for a kiss,<br>When Pat turned both to fairies they squealed, “What the he(ck)’s this!”<br>Pat played with magic for a fun-filled hour,<br>Then got hungry—and then the peaco(ck) lost its power.<br>When Pat wished for chocolate—Pat couldn’t have known— <br>The peaco(ck) turned to an un-magic ice cream cone.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"C-CL\",\"audio\":\"phoneme-C-CL.mp3\",\"display\":\"cl\",\"word1\":{\"word\":\"claws\",\"display\":\"<span>cl</span>aws\",\"audio\":\"claws.mp3\",\"image\":\"claws.png\"},\"word2\":{\"word\":\"clam\",\"display\":\"<span>cl</span>am\",\"audio\":\"clam.mp3\",\"image\":\"clam.png\"},\"word3\":{\"word\":\"climb\",\"display\":\"<span>cl</span>imb\",\"audio\":\"climb.mp3\",\"image\":\"climb.png\"},\"quiz-words\":[\"clean\",\"clarinet\",\"cloudy\",\"clueless\",\"clinic\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Tickety-tock, (cl)imb up the (cl)ock,<br>Don’t let the time get dirty.<br>Tickety-tock we (cl)eaned the (cl)ock,<br>Now one o’(cl)ock looks pretty.<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"C-CR\",\"audio\":\"phoneme-C-CR.mp3\",\"display\":\"cr\",\"word1\":{\"word\":\"crab\",\"display\":\"<span>cr</span>ab\",\"audio\":\"crab.mp3\",\"image\":\"crab.png\"},\"word2\":{\"word\":\"cry\",\"display\":\"<span>cr</span>y\",\"audio\":\"cry.mp3\",\"image\":\"cry.png\"},\"word3\":{\"word\":\"croc\",\"display\":\"<span>cr</span>oc\",\"audio\":\"croc.mp3\",\"image\":\"croc.png\"},\"quiz-words\":[\"cranky\",\"cradle\",\"crayons\",\"crosswalk\",\"crutches\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"There was a (cr)ooked man;<br>And he walked a (cr)ooked mile;<br>He found a (cr)ooked sixpence;<br>Against a (cr)ooked tile;<br>He bought a (cr)ooked cat;<br>Which caught a (cr)ooked mouse;<br>And they all lived together;<br>In a little (cr)ooked house.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"D-duh-begin\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"dog\",\"display\":\"<span>d</span>og\",\"audio\":\"dog.mp3\",\"image\":\"dog.png\"},\"word2\":{\"word\":\"drum\",\"display\":\"<span>d</span>rum\",\"audio\":\"drum.mp3\",\"image\":\"drum.png\"},\"word3\":{\"word\":\"door\",\"display\":\"<span>d</span>oor\",\"audio\":\"door.mp3\",\"image\":\"door.png\"},\"quiz-words\":[\"dozer\",\"dig\",\"doll\",\"duck\",\"dandelion\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Cock a (d)oodle (d)o!<br>My mother’s lost her shoe;<br>My father’s lost his fiddle-stick,<br>And (d)oesn’t know what to do.<br><br>Cock a (d)oodle (d)o!<br>What is my mother to (d)o?<br>Till Father finds his fiddle-stick<br>She’ll (d)ance without her shoe!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"D-duh-end\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"bird\",\"display\":\"bir<span>d</span>\",\"audio\":\"bird.mp3\",\"image\":\"bird.png\"},\"word2\":{\"word\":\"cold\",\"display\":\"col<span>d</span>\",\"audio\":\"cold.mp3\",\"image\":\"cold.png\"},\"word3\":{\"word\":\"friend\",\"display\":\"frien<span>d</span>\",\"audio\":\"friend.mp3\",\"image\":\"friend.png\"},\"quiz-words\":[\"bed\",\"hid\",\"toad\",\"wind\",\"sled\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Peter, Peter, pumpkin eater,<br>Ha(d) a wife and couldn’t keep her;<br>He put her in a pumpkin shell,<br>And then he kept her very well.<br><br>Peter, Peter, pumpkin eater,<br>Ha(d) another, and didn’t love her;<br>Peter learne(d) to read and spell,<br>And then he love(d) her very well.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"D-DR\",\"audio\":\"phoneme-D-DR.mp3\",\"display\":\"dr\",\"word1\":{\"word\":\"draw\",\"display\":\"<span>dr</span>aw\",\"audio\":\"draw.mp3\",\"image\":\"draw.png\"},\"word2\":{\"word\":\"drop\",\"display\":\"<span>dr</span>op\",\"audio\":\"drop.mp3\",\"image\":\"drop.png\"},\"word3\":{\"word\":\"bass drum\",\"display\":\"bass <span>dr</span>um\",\"audio\":\"bass drum.mp3\",\"image\":\"bass drum.png\"},\"quiz-words\":[\"drill\",\"dragon\",\"driver\",\"dribble\",\"dresses\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Three chil(dr)en sliding on the ice;<br>All on a winter's day;<br>As it fell out; they all fell in;<br>The rest they ran away.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-long\",\"audio\":\"phoneme-E-long.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"me\",\"display\":\"m<span>e</span>\",\"audio\":\"me.mp3\",\"image\":\"me.png\"},\"word2\":{\"word\":\"he\",\"display\":\"h<span>e</span>\",\"audio\":\"he.mp3\",\"image\":\"he.png\"},\"word3\":{\"word\":\"we\",\"display\":\"w<span>e</span>\",\"audio\":\"we.mp3\",\"image\":\"we.png\"},\"quiz-words\":[\"she\",\"key\",\"zebra\",\"tree\",\"three\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Bo-p(ee)p has lost her sh(ee)p;<br>And doesn't know where to find them;<br>Leave them alone; and they'll come home;<br>Wagging their tails behind them.\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-short\",\"audio\":\"phoneme-E-short.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"elf\",\"display\":\"<span>e</span>lf\",\"audio\":\"elf.mp3\",\"image\":\"elf.png\"},\"word2\":{\"word\":\"bed\",\"display\":\"b<span>e</span>d\",\"audio\":\"bed.mp3\",\"image\":\"bed.png\"},\"word3\":{\"word\":\"net\",\"display\":\"n<span>e</span>t\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"quiz-words\":[\"sled\",\"bell\",\"yellow\",\"jelly-jars\",\"jellyfish\",\"pretzel\",\"present\",\"question\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Hick(e)ty; pick(e)ty; my black h(e)n;<br>She lays (e)ggs for gentlem(e)n;<br>Gentlem(e)n come (e)very day;<br>To see what my black h(e)n does lay.\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-schwa\",\"audio\":\"phoneme-E-schwa.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"camel\",\"display\":\"cam<span>e</span>l\",\"audio\":\"camel.mp3\",\"image\":\"camel.png\"},\"word2\":{\"word\":\"oven\",\"display\":\"ov<span>e</span>n\",\"audio\":\"oven.mp3\",\"image\":\"oven.png\"},\"word3\":{\"word\":\"kitten\",\"display\":\"kitt<span>e</span>n\",\"audio\":\"kitten.mp3\",\"image\":\"kitten.png\"},\"quiz-words\":[\"shovel\",\"rocket\",\"mittens\",\"garden\",\"piglet\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"2nd\":\"black\"},\"rhyme\":\"The el(e)phant want(e)d to cheat on her di(e)t<br>Found one gold(e)n cookie in the warm ov(e)n,<br>One in the gard(e)n, two in a torn pock(e)t,<br>Three hid in the kitch(e)n, that made sev(e)n,<br>Bought two at the mark(e)t, spied one in a bask(e)t,<br>Plus one she kept froz(e)n, that was elev(e)n,<br>And one from her lock(e)t, made twelve, a full doz(e)n<br>When she started to eat them it felt like pure heav(e)n!<br>\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"E-EA-long\",\"audio\":\"phoneme-E-EA-long.mp3\",\"display\":\"ea\",\"word1\":{\"word\":\"eat\",\"display\":\"<span>ea</span>t\",\"audio\":\"eat.mp3\",\"image\":\"eat.png\"},\"word2\":{\"word\":\"beak\",\"display\":\"b<span>ea</span>k\",\"audio\":\"beak.mp3\",\"image\":\"beak.png\"},\"word3\":{\"word\":\"leaf\",\"display\":\"l<span>ea</span>f\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"quiz-words\":[\"steal\",\"read\",\"beach\",\"beagle\",\"beaver\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Jack Sprat would (ea)t no fat;<br>His wife would (ea)t no l(ea)n;<br>And so between the two of them;<br>They licked the platter cl(ea)n.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-EA-short\",\"audio\":\"phoneme-E-EA-short.m4a\",\"display\":\"ea\",\"word1\":{\"word\":\"head\",\"display\":\"h<span>ea</span>d\",\"audio\":\"head.mp3\",\"image\":\"head.png\"},\"word2\":{\"word\":\"bear\",\"display\":\"b<span>ea</span>r\",\"audio\":\"bear.mp3\",\"image\":\"bear.png\"},\"word3\":{\"word\":\"pears\",\"display\":\"p<span>ea</span>rs\",\"audio\":\"pears.mp3\",\"image\":\"pears.png\"},\"quiz-words\":[\"bread\",\"spread\",\"feather\",\"sweater\",\"weather\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"The best story Dad ever r(ea)d<br>Told how this gingerbr(ea)d<br>Cookie fled from the grandma, how<br>The grandad, cat, dog, horse, cow,<br>And boy chased him through a m(ea)dow<br>Till this sly fox said, “Hello.”<br>Pretending to be pl(ea)sant, nice.<br>The cookie didn’t know the price<br>He’d pay for smarting off. Inst(ea)d,<br>He should have used his h(ea)d,<br>Not brag, ‘Run, run, fast as you can,<br>You can’t catch me, I’m the Gingerbr(ea)d Man!’\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-EE\",\"audio\":\"phoneme-E-EE.mp3\",\"display\":\"ee\",\"word1\":{\"word\":\"bee\",\"display\":\"b<span>ee</span>\",\"audio\":\"bee.mp3\",\"image\":\"bee.png\"},\"word2\":{\"word\":\"tree\",\"display\":\"tr<span>ee</span>\",\"audio\":\"tree.mp3\",\"image\":\"tree.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"j<span>ee</span>p\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"feet\",\"cheek\",\"sheep\",\"geese\",\"queen\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Bo-p(ee)p has lost her sh(ee)p;<br>And doesn't know where to find them;<br>Leave them alone; and they'll come home;<br>Wagging their tails behind them.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"E-EI\",\"audio\":\"phoneme-E-EI.m4a\",\"display\":\"ei\",\"word1\":{\"word\":\"veil\",\"display\":\"v<span>ei</span>l\",\"audio\":\"veil.mp3\",\"image\":\"veil.png\"},\"word2\":{\"word\":\"eight\",\"display\":\"<span>ei</span>ght\",\"audio\":\"eight.mp3\",\"image\":\"eight.png\"},\"word3\":{\"word\":\"weigh\",\"display\":\"w<span>ei</span>gh\",\"audio\":\"weigh.mp3\",\"image\":\"weigh.png\"},\"quiz-words\":[\"sleigh\",\"neighbor\",\"reins\",\"beige\",\"freight\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Ever wonder how much fr(ei)ght<br>Santa’s (ei)ght r(ei)ndeer must haul<br>Every Christmas, and not be late?<br>Heeps of toys!  Imagine it all!<br>Do you think he w(ei)ghs the sl(ei)gh,<br>And himself too—he’s not thin—<br>Before he shouts, “Hi ho, away!”<br>He surely trusts the shape they’re in.<br>Could he put magic in the hay<br>They eat so they’ll fly strong.  Something good?<br>Magic oatmeal cookies?  He may.<br>They’d like that.  I know I would!\",\"category\":[\"VP\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"E-ER\",\"audio\":\"phoneme-E-ER.mp3\",\"display\":\"er\",\"word1\":{\"word\":\"fern\",\"display\":\"f<span>er</span>n\",\"audio\":\"fern.mp3\",\"image\":\"fern.png\"},\"word2\":{\"word\":\"tiger\",\"display\":\"tig<span>er</span>\",\"audio\":\"tiger.mp3\",\"image\":\"tiger.png\"},\"word3\":{\"word\":\"zipper\",\"display\":\"zipp<span>er</span>\",\"audio\":\"zipper.mp3\",\"image\":\"zipper.png\"},\"quiz-words\":[\"dozer\",\"shower\",\"mermaid\",\"paper\",\"waterfall\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Pet(er); Pet(er); pumpkin eat(er);<br>Had a wife and couldn't keep h(er);<br>He put h(er) in a pumpkin shell;<br>And then he kept h(er) very well.\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"E-ET-stressed\",\"audio\":\"phoneme-E-ET-stressed.mp3\",\"display\":\"et\",\"word1\":{\"word\":\"net\",\"display\":\"n<span>et</span>\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"word2\":{\"word\":\"jet\",\"display\":\"j<span>et</span>\",\"audio\":\"jet.mp3\",\"image\":\"jet.png\"},\"word3\":{\"word\":\"yeti\",\"display\":\"y<span>et</span>i\",\"audio\":\"yeti.mp3\",\"image\":\"yeti.png\"},\"quiz-words\":[\"vet\",\"pets\",\"pretzel\",\"lettuce\",\"machete\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Of just three syllables I’m made,<br>Of l(et)ters twenty-six.<br>Your debt to me could not be paid.<br>Using me well predicts<br>That you’ll do very well in school<br>And won’t soon forg(et) me.<br>Though I’m a very useful tool,<br>Y(et)is never g(et) me.<br>I’ve been here for two thousand years,<br>Help run the intern(et).<br>You learned me with your eyes and ears.<br>I am the —\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"E-ET-unstressed\",\"audio\":\"phoneme-E-ET-unstressed.m4a\",\"display\":\"et\",\"word1\":{\"word\":\"target\",\"display\":\"targ<span>et</span>\",\"audio\":\"target.mp3\",\"image\":\"target.png\"},\"word2\":{\"word\":\"hornet\",\"display\":\"horn<span>et</span>\",\"audio\":\"hornet.mp3\",\"image\":\"hornet.png\"},\"word3\":{\"word\":\"piglet\",\"display\":\"pigl<span>et</span>\",\"audio\":\"piglet.mp3\",\"image\":\"piglet.png\"},\"quiz-words\":[\"hatchet\",\"faucet\",\"bucket\",\"ferret\",\"flying carpet\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\",\"VC\":\"green\"},\"rhyme\":\"Lucy Lock(et) lost her pock(et);<br>Kitty Fisher found it.<br>There was not a penny in it;<br>But a ribbon round it.\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"E-EW\",\"audio\":\"phoneme-E-EW.mp3\",\"display\":\"ew\",\"word1\":{\"word\":\"flew\",\"display\":\"fl<span>ew</span>\",\"audio\":\"flew.mp3\",\"image\":\"flew.png\"},\"word2\":{\"word\":\"blew\",\"display\":\"bl<span>ew</span>\",\"audio\":\"blew.mp3\",\"image\":\"blew.png\"},\"word3\":{\"word\":\"chew\",\"display\":\"ch<span>ew</span>\",\"audio\":\"chew.mp3\",\"image\":\"chew.png\"},\"quiz-words\":[\"threw\",\"screws\",\"cashew\",\"crew cut\",\"stew pot\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The hungry cuckoo fl(ew)<br>Then found a cash(ew)<br>His beak couldn’t ch(ew).<br>What could he do?<br>He br(ew)ed cash(ew) st(ew)<br>Which smelled really P U!<br>But tasted great with barbecue.<br><br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"F-fuh-begin\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"fish\",\"display\":\"<span>f</span>ish\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"word2\":{\"word\":\"fox\",\"display\":\"<span>f</span>ox\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word3\":{\"word\":\"foot\",\"display\":\"<span>f</span>oot\",\"audio\":\"foot.mp3\",\"image\":\"foot.png\"},\"quiz-words\":[\"fall\",\"fairy\",\"fan\",\"find\",\"firefly\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Old King Cole, was a merry old soul,<br>And a merry old soul was he,<br>He called (f)or his pipe, and he called (f)or his bowl,<br>And he called (f)or his (f)iddlers three.<br>Every (f)iddler, he had a (f)ine (f)iddle,<br>And a very (f)ine (f)iddle had he.<br>Twee tweedle dee, tweedle dee, went the (f)iddlers three.<br>Oh, there’s none so rare,<br>As can compare<br>With King Cole<br>And his (f)iddlers three!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-fuh-end\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"scarf\",\"display\":\"scar<span>f</span>\",\"audio\":\"scarf.mp3\",\"image\":\"scarf.png\"},\"word2\":{\"word\":\"thief\",\"display\":\"thie<span>f</span>\",\"audio\":\"thief.mp3\",\"image\":\"thief.png\"},\"word3\":{\"word\":\"chef\",\"display\":\"che<span>f</span>\",\"audio\":\"chef.mp3\",\"image\":\"chef.png\"},\"quiz-words\":[\"hoof\",\"leaf\",\"white calf\",\"surf\",\"wolf\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Turtle took a little walk,<br>Hoping no one would bother him.<br>When a dog said “Woo(f) woo(f) woo(f)” to talk,<br>Turtle acted dea(f) under a limb,<br>He nearly got stolen by a thie(f),<br>But bit his thumb hard!  When a re(f)<br>Reached down he ducked under a lea(f),<br>And finally got free outrunning a che(f).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-FL\",\"audio\":\"phoneme-F-FL.mp3\",\"display\":\"fl\",\"word1\":{\"word\":\"flu\",\"display\":\"<span>fl</span>u\",\"audio\":\"flu.mp3\",\"image\":\"flu.png\"},\"word2\":{\"word\":\"fly\",\"display\":\"<span>fl</span>y\",\"audio\":\"fly.mp3\",\"image\":\"fly.png\"},\"word3\":{\"word\":\"flag\",\"display\":\"<span>fl</span>ag\",\"audio\":\"flag.mp3\",\"image\":\"flag.png\"},\"quiz-words\":[\"float\",\"flute\",\"flippers\",\"flamingo\",\"flatbed tow truck\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"A hungry (fl)y (fl)ew in a (fl)ower,<br>Then dreamed of sweets for half an hour.<br>A (fl)ea (fl)oating by yelled, “Stay awake!<br>I just baked us a snow(fl)ake cake!”<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-FR\",\"audio\":\"phoneme-F-FR.mp3\",\"display\":\"fr\",\"word1\":{\"word\":\"frog\",\"display\":\"<span>fr</span>og\",\"audio\":\"frog.mp3\",\"image\":\"frog.png\"},\"word2\":{\"word\":\"fry\",\"display\":\"<span>fr</span>y\",\"audio\":\"fry.mp3\",\"image\":\"fry.png\"},\"word3\":{\"word\":\"fro\",\"display\":\"<span>fr</span>o\",\"audio\":\"fro.mp3\",\"image\":\"fro.png\"},\"quiz-words\":[\"friends\",\"fruits\",\"fridge\",\"fringe\",\"frontloader\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"On (Fr)iday night, <br>My (fr)iend and I<br>Had (fr)ozen (fr)ench-(fr)y soup<br>And (fr)og leg pie.<br><br>(Fr)ied ice cream<br>And fish heads in a cup,<br>I hope some medicine <br>Will help me throw up.<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"F-FT\",\"audio\":\"phoneme-F-FT.mp3\",\"display\":\"ft\",\"word1\":{\"word\":\"gift\",\"display\":\"gi<span>ft</span>\",\"audio\":\"gift.mp3\",\"image\":\"gift.png\"},\"word2\":{\"word\":\"soft\",\"display\":\"so<span>ft</span>\",\"audio\":\"soft.mp3\",\"image\":\"soft.png\"},\"word3\":{\"word\":\"left\",\"display\":\"le<span>ft</span>\",\"audio\":\"left.mp3\",\"image\":\"left.png\"},\"quiz-words\":[\"forklift\",\"snowdrift\",\"airlift\",\"aircraft\",\"watercraft\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"My gi(ft)’s to tell the truth, almost, though<br>I never speak, yet tell the truth one way,<br>Reversing it, like some backward photo.<br>Right for me’s le(ft). I’m hard, seem so(ft), play<br>Only my way. Break me for seven years of woe.<br>Read me for faceli(ft)s, just li(ft) me. You may.\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"G-guh-begin\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"goose\",\"display\":\"<span>g</span>oose\",\"audio\":\"goose.mp3\",\"image\":\"goose.png\"},\"word2\":{\"word\":\"goat\",\"display\":\"<span>g</span>oat\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word3\":{\"word\":\"gold\",\"display\":\"<span>g</span>old\",\"audio\":\"gold.mp3\",\"image\":\"gold.png\"},\"quiz-words\":[\"goal\",\"grapes\",\"gate\",\"go-kart\",\"gazelle\"],\"color\":{\"all\":\"black\",\"K\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"As I was (g)oing up Primrose Hill,<br>Primrose Hill was dirty;<br>There I met a pretty (g)irl,<br>And she (g)ave me a curtsey.<br><br>Little (g)irl, pretty (g)irl,<br>Blessings be upon you;<br>If I had half-a-dollar a day,<br>I’d spend it all on you.\",\"category\":[\"C-begin\",\"CG\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-guh-end\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"frog\",\"display\":\"fro<span>g</span>\",\"audio\":\"frog.mp3\",\"image\":\"frog.png\"},\"word2\":{\"word\":\"plug\",\"display\":\"plu<span>g</span>\",\"audio\":\"plug.mp3\",\"image\":\"plug.png\"},\"word3\":{\"word\":\"bug\",\"display\":\"bu<span>g</span>\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"quiz-words\":[\"hog\",\"wig\",\"flag\",\"dog\",\"dig\"],\"color\":{\"all\":\"black\",\"K\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"To market, to market,<br>To buy a fat pi(g);<br>Home again, home again,<br>Jiggety ji(g).<br><br>To market, to market,<br>To buy a fat ho(g);<br>Home again, home again,<br>Jiggety jo(g).\",\"category\":[\"C-end\",\"CG\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-juh\",\"audio\":\"phoneme-G-juh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"giraffe\",\"display\":\"<span>g</span>iraffe\",\"audio\":\"giraffe.mp3\",\"image\":\"giraffe.png\"},\"word2\":{\"word\":\"gingerbread man\",\"display\":\"<span>g</span>in<span>g</span>erbread man\",\"audio\":\"gingerbread man.mp3\",\"image\":\"gingerbread man.png\"},\"word3\":{\"word\":\"fridge\",\"display\":\"frid<span>g</span>e\",\"audio\":\"fridge.mp3\",\"image\":\"fridge.png\"},\"quiz-words\":[\"bridge\",\"fringe\",\"hedge clippers\",\"syringe\",\"bandage\"],\"color\":{\"all\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\",\"consonant\":\"green\"},\"rhyme\":\"(G)eorgie Por(g)ie, pudding and pie,<br>Kissed the girls and made them cry.<br>When the boys came out to play,<br>(G)eorgie Por(g)ie ran away.\",\"category\":[\"CG\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"G-GH\",\"audio\":\"phoneme-G-GH.mp3\",\"display\":\"gh\",\"word1\":{\"word\":\"laugh\",\"display\":\"lau<span>gh</span>\",\"audio\":\"laugh.mp3\",\"image\":\"laugh.png\"},\"word2\":{\"word\":\"tough\",\"display\":\"tou<span>gh</span>\",\"audio\":\"tough.mp3\",\"image\":\"tough.png\"},\"word3\":{\"word\":\"rough\",\"display\":\"rou<span>gh</span>\",\"audio\":\"rough.mp3\",\"image\":\"rough.png\"},\"quiz-words\":[\"cough\",\"enough\",\"water trough\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"He looked kind of rou(gh).<br>And tried to act tou(gh),<br>To frighten the ballerina.<br><br>He was quite impolite<br>When he dared her to fi(gh)t,<br>And laughed like a goofy hyena.<br><br>Her quick fists made him cou(gh),<br>He splashed in a pig trou(gh),<br>Then she danced from the boxing arena.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"G-GH-silent\",\"audio\":\"phoneme-G-GH-silent.mp3\",\"display\":\"gh\",\"word1\":{\"word\":\"high\",\"display\":\"hi<span>gh</span>\",\"audio\":\"high.mp3\",\"image\":\"high.png\"},\"word2\":{\"word\":\"right\",\"display\":\"ri<span>gh</span>t\",\"audio\":\"right.mp3\",\"image\":\"right.png\"},\"word3\":{\"word\":\"eight\",\"display\":\"ei<span>gh</span>t\",\"audio\":\"eight.mp3\",\"image\":\"eight.png\"},\"quiz-words\":[\"sleigh\",\"tight\",\"flight\",\"straight\",\"nightgown\"],\"color\":{\"all\":\"green\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Read the riddle — find the kind of band,<br>Unlikely to play music, that can show ei(gh)t<br>Bri(gh)t colors, even more, be short, expand,<br>Be dou(gh)nut round or arrow strai(gh)t;<br>Each when ti(gh)t flies hi(gh). To understand,<br>Read each line’s first letter. Concentrate.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"G-GL\",\"audio\":\"phoneme-G-GL.mp3\",\"display\":\"gl\",\"word1\":{\"word\":\"glad\",\"display\":\"<span>gl</span>ad\",\"audio\":\"glad.mp3\",\"image\":\"glad.png\"},\"word2\":{\"word\":\"glum\",\"display\":\"<span>gl</span>um\",\"audio\":\"glum.mp3\",\"image\":\"glum.png\"},\"word3\":{\"word\":\"glow\",\"display\":\"<span>gl</span>ow\",\"audio\":\"glow.mp3\",\"image\":\"glow.png\"},\"quiz-words\":[\"glue\",\"glove\",\"glass\",\"globe\",\"glazed\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"A (gl)ass of juice<br>And a (gl)azed donut,<br>Put (gl)ad in the heart<br>And a (gl)ow in the gut.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"G-GN-silent\",\"audio\":\"phoneme-G-GN-silent.mp3\",\"display\":\"gn\",\"word1\":{\"word\":\"gnaw\",\"display\":\"<span>gn</span>aw\",\"audio\":\"gnaw.mp3\",\"image\":\"gnaw.png\"},\"word2\":{\"word\":\"gnome\",\"display\":\"<span>gn</span>ome\",\"audio\":\"gnome.mp3\",\"image\":\"gnome.png\"},\"word3\":{\"word\":\"gnat\",\"display\":\"<span>gn</span>at\",\"audio\":\"gnat.mp3\",\"image\":\"gnat.png\"},\"quiz-words\":[\"align\",\"foreign\",\"gnarly\",\"sovereign\",\"gnu\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"A screen can keep out tiny (gn)ats.<br>A (gn)ome’s a kind of elf.<br>A soverei(gn)’s a king or queen,<br>— In dreamland like yourself.<br><br>A beaver (gn)aws on bark for food,<br>A (gn)u’s a wildebeest.<br>A silent g is (gn)arly, dude!<br>— Or I think so at least.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"G-GR\",\"audio\":\"phoneme-G-GR.mp3\",\"display\":\"gr\",\"word1\":{\"word\":\"grapes\",\"display\":\"<span>gr</span>apes\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"word2\":{\"word\":\"grow\",\"display\":\"<span>gr</span>ow\",\"audio\":\"grow.mp3\",\"image\":\"grow.png\"},\"word3\":{\"word\":\"greyhound\",\"display\":\"<span>gr</span>eyhound\",\"audio\":\"greyhound.mp3\",\"image\":\"greyhound.png\"},\"quiz-words\":[\"green\",\"grasshopper\",\"grandmother\",\"grandfather clock\",\"grizzly bear\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"(Gr)ouchy (gr)emlin’s (gr)umpy tummy (gr)owled,<br>“I’m hun(gr)y, feed me, feed me,” it howled.<br>When a (gr)inning (gr)izzly (gr)abbed it tight,<br>(Gr)umpy tummy squeeeezed out of sight.<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"H-huh-begin\",\"audio\":\"phoneme-H-huh.mp3\",\"display\":\"h\",\"word1\":{\"word\":\"hug\",\"display\":\"<span>h</span>ug\",\"audio\":\"hug.mp3\",\"image\":\"hug.png\"},\"word2\":{\"word\":\"hardhat\",\"display\":\"<span>h</span>ard<span>h</span>at\",\"audio\":\"hardhat.mp3\",\"image\":\"hardhat.png\"},\"word3\":{\"word\":\"hide\",\"display\":\"<span>h</span>ide\",\"audio\":\"hide.mp3\",\"image\":\"hide.png\"},\"quiz-words\":[\"hot\",\"horns\",\"hawk\",\"hippo\",\"hose\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"(H)umpty Dumpty sat on a wall;<br>(H)umpty Dumpty (h)ad a great fall;<br>All the king's (h)orses and all the king's men;<br>Couldn't put (H)umpty Dumpty together again.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"H-silent\",\"audio\":\"phoneme-H-silent.mp3\",\"display\":\"h\",\"word1\":{\"word\":\"hour\",\"display\":\"<span>h</span>our\",\"audio\":\"hour.mp3\",\"image\":\"hour.png\"},\"word2\":{\"word\":\"ghost\",\"display\":\"g<span>h</span>ost\",\"audio\":\"ghost.mp3\",\"image\":\"ghost.png\"},\"word3\":{\"word\":\"rhyme\",\"display\":\"r<span>h</span>yme\",\"audio\":\"rhyme.mp3\",\"image\":\"rhyme.png\"},\"quiz-words\":[\"honor\",\"exhaust\",\"rhythm\",\"gherkin\",\"rhinoceros\"],\"color\":{\"all\":\"green\",\"3rd\":\"black\"},\"rhyme\":\"Hope you solve it! What cup holds no drinks?<br>Invisible, g(h)ostlike, at any time<br>Can choke you, like with r(h)ythmic heartbeats, links<br>Coming chain-like, for ex(h)austing (h)ours, chime<br>Under your skin, making you think: This stinks!<br>Pick each line’s first letter in this r(h)yme.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"I-long\",\"audio\":\"phoneme-I-long.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"ice\",\"display\":\"<span>i</span>ce\",\"audio\":\"ice.mp3\",\"image\":\"ice.png\"},\"word2\":{\"word\":\"five\",\"display\":\"f<span>i</span>ve\",\"audio\":\"five.mp3\",\"image\":\"five.png\"},\"word3\":{\"word\":\"lion\",\"display\":\"l<span>i</span>on\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"quiz-words\":[\"mice\",\"slide\",\"climb\",\"bride\",\"drive\",\"tricycle\",\"spider\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Three bl(i)nd m(i)ce, three bl(i)nd m(i)ce,<br>See how they run, see how they run.<br>They all ran after the farmer's w(i)fe,<br>She cut off their tails with a carving kn(i)fe.<br>Did you ever see such a s(i)ght in your l(i)fe<br>As three bl(i)nd m(i)ce?\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"I-e\",\"audio\":\"phoneme-I-long.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"tie\",\"display\":\"t<span>i</span><u>e</u>\",\"audio\":\"tie.mp3\",\"image\":\"tie.png\"},\"word2\":{\"word\":\"pie\",\"display\":\"p<span>i</span><u>e</u>\",\"audio\":\"pie.mp3\",\"image\":\"pie.png\"},\"word3\":{\"word\":\"kite\",\"display\":\"k<span>i</span>t<u>e</u>\",\"audio\":\"kite.mp3\",\"image\":\"kite.png\"},\"quiz-words\":[\"hide\",\"ride\",\"slide\",\"stripes\",\"pliers\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"rhyme\":\"Airl(i)nes and railroads are big fans of m(i)ne.<br>Check out my face and you’ll see f(i)ve and n(i)ne.<br>Look at my hands, you’ll know I can’t clap though.<br>One hand of m(i)ne l(i)kes to be fast, one slow.<br>Can’t sing, but when I’m big will somet(i)mes ch(i)me.<br>Kids need me most when they don’t have the t(i)me.\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"I-short\",\"audio\":\"phoneme-I-short.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"mittens\",\"display\":\"m<span>i</span>ttens\",\"audio\":\"mittens.mp3\",\"image\":\"mittens.png\"},\"word2\":{\"word\":\"hit\",\"display\":\"h<span>i</span>t\",\"audio\":\"hit.mp3\",\"image\":\"hit.png\"},\"word3\":{\"word\":\"fish\",\"display\":\"f<span>i</span>sh\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"quiz-words\":[\"lizard\",\"window\",\"frisbee\",\"slippers\",\"chimney\",\"fiddle\",\"unicycle\",\"ostrich\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Jack; be n(i)mble; Jack; be qu(i)ck.<br>Jack; jump over the candlest(i)ck.\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"I-schwa\",\"audio\":\"phoneme-I-schwa.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"rabbit\",\"display\":\"rabb<span>i</span>t\",\"audio\":\"rabbit.mp3\",\"image\":\"rabbit.png\"},\"word2\":{\"word\":\"pencil\",\"display\":\"penc<span>i</span>l\",\"audio\":\"pencil.mp3\",\"image\":\"pencil.png\"},\"word3\":{\"word\":\"robin\",\"display\":\"rob<span>i</span>n\",\"audio\":\"robin.mp3\",\"image\":\"robin.png\"},\"quiz-words\":[\"gossip\",\"tennis\",\"artist\",\"muffins\",\"nostril\"],\"color\":{\"all\":\"red\",\"vowel\":\"red\",\"2nd\":\"black\"},\"rhyme\":\"Oh, do you know the muff(i)n-man,<br>The muff(i)n-man, the muff(i)n-man?<br>Do you know the muff(i)n-man<br>Who lives in Drury Lane?<br><br>Yes, I know the muff(i)n-man,<br>The muff(i)n-man, the muff(i)n-man.<br>Yes, I know the muff(i)n-man<br>Who lives in Drury Lane.\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"I-ee\",\"audio\":\"phoneme-I-ee.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"taxi\",\"display\":\"tax<span>i</span>\",\"audio\":\"taxi.mp3\",\"image\":\"taxi.png\"},\"word2\":{\"word\":\"yeti\",\"display\":\"yet<span>i</span>\",\"audio\":\"yeti.mp3\",\"image\":\"yeti.png\"},\"word3\":{\"word\":\"skis\",\"display\":\"sk<span>i</span>s\",\"audio\":\"skis.mp3\",\"image\":\"skis.png\"},\"quiz-words\":[\"sari\",\"trio\",\"piano\",\"alien\",\"machine\"],\"color\":{\"all\":\"purple\",\"vowel\":\"purple\",\"K\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"While eating hot chil(i),<br>They planned a safar(i)<br>To bring back a yet(i).<br>Both dressed in new khak(i),<br>Topped off with a kep(i),<br>But learned that their tax(i),<br>Had almost hit Bamb(i),<br><br>So instead took a jet sk(i)<br>And found a bik(i)n(i)!<br>[But just an emoj(i).]\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"I-IE\",\"audio\":\"phoneme-I-IE.m4a\",\"display\":\"ie\",\"word1\":{\"word\":\"thief\",\"display\":\"th<span>ie</span>f\",\"audio\":\"thief.mp3\",\"image\":\"thief.png\"},\"word2\":{\"word\":\"collie\",\"display\":\"coll<span>ie</span>\",\"audio\":\"collie.mp3\",\"image\":\"collie.png\"},\"word3\":{\"word\":\"diesel truck\",\"display\":\"d<span>ie</span>sel truck\",\"audio\":\"diesel truck.mp3\",\"image\":\"diesel truck.png\"},\"quiz-words\":[\"hoodie\",\"cookies\",\"babies\",\"berries\",\"coastie\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Cranberr(ie)s for yummy muffins,<br>And also berr(ie)s blue,<br>Strawberr(ie)s for scrumptious jelly,<br>Raspberr(ie)s and blackberr(ie)s too!\",\"category\":[\"VP\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IGH\",\"audio\":\"phoneme-I-IGH.mp3\",\"display\":\"igh\",\"word1\":{\"word\":\"high\",\"display\":\"h<span>igh</span>\",\"audio\":\"high.mp3\",\"image\":\"high.png\"},\"word2\":{\"word\":\"thigh\",\"display\":\"th<span>igh</span>\",\"audio\":\"thigh.mp3\",\"image\":\"thigh.png\"},\"word3\":{\"word\":\"right\",\"display\":\"r<span>igh</span>t\",\"audio\":\"right.mp3\",\"image\":\"right.png\"},\"quiz-words\":[\"fight\",\"tight\",\"night\",\"brighten\",\"lightning\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Star l(igh)t, star br(igh)t,<br>First star I see ton(igh)t,<br>I wish I may, I wish I m(igh)t,<br>Have the wish I wish ton(igh)t.\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IL-long\",\"audio\":\"phoneme-I-IL-long.mp3\",\"display\":\"il\",\"word1\":{\"word\":\"wild\",\"display\":\"w<span>il</span>d\",\"audio\":\"wild.mp3\",\"image\":\"wild.png\"},\"word2\":{\"word\":\"child\",\"display\":\"ch<span>il</span>d\",\"audio\":\"child.mp3\",\"image\":\"child.png\"},\"word3\":{\"word\":\"pilot\",\"display\":\"p<span>il</span>ot\",\"audio\":\"pilot.mp3\",\"image\":\"pilot.png\"},\"quiz-words\":[\"smile\",\"reptiles\",\"crocodile\",\"silent\",\"agile\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Though Granddad always says I should go slow,<br>I’ll race around his farm whenever I can,<br>Love climbing high hay p(il)es, peeking in the s(il)o,<br>Though smelling the s(il)age stink’s not in my plan.<br><br>I climb on his tractor, and tiller and plows,<br>Seeing his w(il)d bull and m(il)d cows brings sm(il)es,<br>And roosters and chickens, his boar pigs and sows.<br>Visiting’s super, despite all the m(il)es!\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IL-short\",\"audio\":\"phoneme-I-IL-short.mp3\",\"display\":\"il\",\"word1\":{\"word\":\"milk\",\"display\":\"m<span>il</span>k\",\"audio\":\"milk.mp3\",\"image\":\"milk.png\"},\"word2\":{\"word\":\"lily\",\"display\":\"l<span>il</span>y\",\"audio\":\"lily.mp3\",\"image\":\"lily.png\"},\"word3\":{\"word\":\"tilt\",\"display\":\"t<span>il</span>t\",\"audio\":\"tilt.mp3\",\"image\":\"tilt.png\"},\"quiz-words\":[\"stilts\",\"build\",\"silver\",\"military\",\"children\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\",\"VC\":\"green\"},\"rhyme\":\"I sp(ill)ed m(il)k in the car one time<br>And thought I’d just not tell,<br>Cause one small sp(ill) is not a crime,<br>But then this f(il)thy smell<br>Began to stink the whole car up.<br>The stench just swelled and bu(il)t<br>Unt(il) it stunk like throw-up.<br>That’s when I felt the gu(il)t. <br>No matter how I snuck and hid,<br>They caught me, I got stuck,<br>Scrubbing that car clean. They forbid<br>M(il)k there now. Just my luck!\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-ILD\",\"audio\":\"phoneme-I-ILD.mp3\",\"display\":\"ild\",\"word1\":{\"word\":\"wild\",\"display\":\"w<span>ild</span>\",\"audio\":\"wild.mp3\",\"image\":\"wild.png\"},\"word2\":{\"word\":\"child\",\"display\":\"ch<span>ild</span>\",\"audio\":\"child.mp3\",\"image\":\"child.png\"},\"word3\":{\"word\":\"mild\",\"display\":\"m<span>ild</span>\",\"audio\":\"mild.mp3\",\"image\":\"mild.png\"},\"quiz-words\":[\"wildcat\",\"wildfowl\",\"wild rice\",\"grandchild\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Sometimes a m(ild) ch(ild),<br>Now and then a w(ild) ch(ild),<br>Happy to be a grandch(ild),<br>Always a love ch(ild).\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IND-long\",\"audio\":\"phoneme-I-IND-long.mp3\",\"display\":\"ind\",\"word1\":{\"word\":\"kind\",\"display\":\"k<span>ind</span>\",\"audio\":\"kind.mp3\",\"image\":\"kind.png\"},\"word2\":{\"word\":\"find\",\"display\":\"f<span>ind</span>\",\"audio\":\"find.mp3\",\"image\":\"find.png\"},\"word3\":{\"word\":\"blind\",\"display\":\"bl<span>ind</span>\",\"audio\":\"blind.mp3\",\"image\":\"blind.png\"},\"quiz-words\":[\"behind\",\"remind\",\"hindquarters\",\"hindmost\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"If you can’t see red or green you’ll f(ind)<br>That certainly you’re color bl(ind).<br>Sometimes do you quick glance beh(ind),<br>Fear f(ind)ing monsters of some k(ind)–<br>But don’t spot yetis–so don’t m(ind)?<br>Beware! You might be yeti-bl(ind).<br>\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-ION\",\"audio\":\"phoneme-I-ION.mp3\",\"display\":\"ion\",\"word1\":{\"word\":\"vision\",\"display\":\"vis<span>ion</span>\",\"audio\":\"vision.mp3\",\"image\":\"vision.png\"},\"word2\":{\"word\":\"cushion\",\"display\":\"cush<span>ion</span>\",\"audio\":\"cushion.mp3\",\"image\":\"cushion.png\"},\"word3\":{\"word\":\"fashion\",\"display\":\"fash<span>ion</span>\",\"audio\":\"fashion.mp3\",\"image\":\"fashion.png\"},\"quiz-words\":[\"confusion\",\"division\",\"illusion\",\"percussion\",\"collision\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The (ion) sound drives me nuts! Quest(ion):<br>How’d grown-ups decide ‘fash(ion)’,<br>‘Cush(ion)’, ‘collis(ion)’ all end (ion),<br>Not ‘ion’ ike ‘lion’? And that ‘quest(ion)’<br>Sounds a ‘tuh’ and then sounds (ion),<br>But ‘addit(ion)’ and ‘subtract(ion)’<br>‘Educat(ion)’ don’t. No ‘tuh’ just (ion).<br>One word for ‘stay away’? It’s ‘shun’!\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"I-IR\",\"audio\":\"phoneme-I-IR.mp3\",\"display\":\"ir\",\"word1\":{\"word\":\"bird\",\"display\":\"b<span>ir</span>d\",\"audio\":\"bird.mp3\",\"image\":\"bird.png\"},\"word2\":{\"word\":\"girl\",\"display\":\"g<span>ir</span>l\",\"audio\":\"girl.mp3\",\"image\":\"girl.png\"},\"word3\":{\"word\":\"shirt\",\"display\":\"sh<span>ir</span>t\",\"audio\":\"shirt.mp3\",\"image\":\"shirt.png\"},\"quiz-words\":[\"skirt\",\"circle\",\"giraffe\",\"birthday\",\"squirrel\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"On her b(ir)thday the g(ir)l<br>Wh(ir)led her pearls, sw(ir)led her sk(ir)t,<br>Gave her sh(ir)t tail a tw(ir)l,<br>St(ir)red her toe in the d(ir)t,<br>Until, so I heard,<br>She looked just like a b(ir)d!<br>\",\"category\":[\"R\",\"VC\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"J-juh-begin\",\"audio\":\"phoneme-J-juh.mp3\",\"display\":\"j\",\"word1\":{\"word\":\"jump\",\"display\":\"<span>j</span>ump\",\"audio\":\"jump.mp3\",\"image\":\"jump.png\"},\"word2\":{\"word\":\"joy\",\"display\":\"<span>j</span>oy\",\"audio\":\"joy.mp3\",\"image\":\"joy.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"<span>j</span>eep\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"jay\",\"juggle\",\"jellyfish\",\"jacket\",\"judge\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Here am I; Little (j)umping (J)oan;<br>When nobody's with me;<br>I'm always alone.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"K-kuh-begin\",\"audio\":\"phoneme-K-kuh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"key\",\"display\":\"<span>k</span>ey\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"word2\":{\"word\":\"kayak\",\"display\":\"<span>k</span>aya<span>k</span>\",\"audio\":\"kayak.mp3\",\"image\":\"kayak.png\"},\"word3\":{\"word\":\"kangaroo\",\"display\":\"<span>k</span>angaroo\",\"audio\":\"kangaroo.mp3\",\"image\":\"kangaroo.png\"},\"quiz-words\":[\"king\",\"kitten\",\"kiss\",\"kitchen\",\"kimono\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"(K)itty-Cat sits by the fire;<br>Napping without a care.<br>In walks the little dog;<br>Says: “(K)itty, are you there?<br>How do you do, Mistress (K)itty?<br>Mistress (K)itty, how do you do?”<br>“I thank you (k)indly, little dog,<br>I do as well as you!”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"K-kuh-end\",\"audio\":\"phoneme-K-kuh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"elk\",\"display\":\"el<span>k</span>\",\"audio\":\"elk.mp3\",\"image\":\"elk.png\"},\"word2\":{\"word\":\"pick\",\"display\":\"pic<span>k</span>\",\"audio\":\"pick.mp3\",\"image\":\"pick.png\"},\"word3\":{\"word\":\"shark\",\"display\":\"shar<span>k</span>\",\"audio\":\"shark.mp3\",\"image\":\"shark.png\"},\"quiz-words\":[\"beak\",\"fork\",\"hawk\",\"duck\",\"kayak\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Little Bo-Peep has lost her sheep,<br>And can’t tell where to find them;<br>Let them alone, and they’ll come home,<br>And bring their tails behind them.<br><br>Little Bo-Peep fell fast asleep,<br>And dreamt she heard them bleating;<br>And when she awo(k)e, she found it a jo(k)e,<br>For still they were all fleeting.<br><br>Then up she too(k) her little croo(k),<br>Determined for to find them;<br>She found them indeed, but it made her heart bleed,<br>For they’d left all their tails behind them.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"K-KN-silent\",\"audio\":\"phoneme-K-KN-silent.mp3\",\"display\":\"kn\",\"word1\":{\"word\":\"knot\",\"display\":\"<span>kn</span>ot\",\"audio\":\"knot.mp3\",\"image\":\"knot.png\"},\"word2\":{\"word\":\"knee\",\"display\":\"<span>kn</span>ee\",\"audio\":\"knee.mp3\",\"image\":\"knee.png\"},\"word3\":{\"word\":\"knit\",\"display\":\"<span>kn</span>it\",\"audio\":\"knit.mp3\",\"image\":\"knit.png\"},\"quiz-words\":[\"know\",\"knock\",\"knives\",\"kneel\",\"knuckles\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Do you (kn)ow just what I am?<br>I help you with your bread and jam.<br>My thin back could (kn)ock your (kn)uckles.<br>I’m made of stuff like (kn)obs and buckles.<br>I am long and light and lean.<br>You should always keep me clean.<br>Kept in drawers by every housewife.<br>You (kn)ow me well.  I’m a —<br>\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"L-lll-begin\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"love\",\"display\":\"<span>l</span>ove\",\"audio\":\"love.mp3\",\"image\":\"love.png\"},\"word2\":{\"word\":\"leaf\",\"display\":\"<span>l</span>eaf\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"word3\":{\"word\":\"lion\",\"display\":\"<span>l</span>ion\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"quiz-words\":[\"lip\",\"lemon\",\"lizard\",\"lock\",\"lamb\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"I (l)ove you well, my (l)ittle brother,<br>And you are fond of me;<br>(L)et us be kind to one another,<br>As brothers ought to be.<br>You shall (l)earn to play with me,<br>And (l)earn to use my toys;<br>And then I think that we shall be <br>Two happy little boys.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"L-lll-end\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"owl\",\"display\":\"ow<span>l</span>\",\"audio\":\"owl.mp3\",\"image\":\"owl.png\"},\"word2\":{\"word\":\"goal\",\"display\":\"goa<span>l</span>\",\"audio\":\"goal.mp3\",\"image\":\"goal.png\"},\"word3\":{\"word\":\"sail\",\"display\":\"sai<span>l</span>\",\"audio\":\"sail.mp3\",\"image\":\"sail.png\"},\"quiz-words\":[\"foal\",\"heel\",\"mail\",\"pool\",\"nail\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Jack and Ji(ll) went up the hi(ll),<br>To fetch a pai(l) of water.<br>Jack fe(ll) down, and broke his crown,<br>And Ji(ll) came tumbling after.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"L-LD\",\"audio\":\"phoneme-L-LD.mp3\",\"display\":\"ld\",\"word1\":{\"word\":\"old\",\"display\":\"o<span>ld</span>\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"wild\",\"display\":\"wi<span>ld</span>\",\"audio\":\"wild.mp3\",\"image\":\"wild.png\"},\"word3\":{\"word\":\"build\",\"display\":\"bui<span>ld</span>\",\"audio\":\"build.mp3\",\"image\":\"build.png\"},\"quiz-words\":[\"child\",\"hold\",\"gold\",\"cold\",\"scold\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\",\"VC\":\"black\"},\"rhyme\":\"Catch it any chi(ld) can, but then can’t ho(ld)<br>Or throw it.  Around the world, young and o(ld)<br>Learn a mi(ld) one’s trouble.  We’ve all been to(ld)<br>Don’t get one.  We do.  It doesn’t help to sco(ld).\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"L-LE\",\"audio\":\"phoneme-L-LE.mp3\",\"display\":\"le\",\"word1\":{\"word\":\"poodle\",\"display\":\"pood<span>le</span>\",\"audio\":\"poodle.mp3\",\"image\":\"poodle.png\"},\"word2\":{\"word\":\"whale\",\"display\":\"wha<span>le</span>\",\"audio\":\"whale.mp3\",\"image\":\"whale.png\"},\"word3\":{\"word\":\"tricycle\",\"display\":\"tricyc<span>le</span>\",\"audio\":\"tricycle.mp3\",\"image\":\"tricycle.png\"},\"quiz-words\":[\"whistle\",\"turtle\",\"unicycle\",\"tricycle\",\"saddle\",\"cradle\",\"eagle\",\"fiddle\",\"beagle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The sow came in with the sadd(le);<br>The litt(le) pig rocked the crad(le);<br>The dish jumped up on the tab(le);<br>To see the pot swallow the lad(le).<br>The spit that stood behind the door<br>Threw the pudding-stick on the floor.<br>“Gracious!” said the gridiron,<br>“Can’t you agree?<br>I’m the boss policeman,<br>Bring them to me!”\",\"category\":[\"VC-2\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"L-LF\",\"audio\":\"phoneme-L-LF.mp3\",\"display\":\"lf\",\"word1\":{\"word\":\"elf\",\"display\":\"e<span>lf</span>\",\"audio\":\"elf.mp3\",\"image\":\"elf.png\"},\"word2\":{\"word\":\"calf\",\"display\":\"ca<span>lf</span>\",\"audio\":\"calf.mp3\",\"image\":\"calf.png\"},\"word3\":{\"word\":\"wolf\",\"display\":\"wo<span>lf</span>\",\"audio\":\"wolf.mp3\",\"image\":\"wolf.png\"},\"quiz-words\":[\"half\",\"golf\",\"shelf\",\"myself\",\"yourself\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"An e(lf) and a ca(lf)<br>Went out to play go(lf),<br>But had only played ha(lf),<br>When the ca(lf) spied a wo(lf).<br>“Play the rest by yourse(lf),”<br>Said the ca(lf) to the e(lf).<br>“No way!” yelled the e(lf),<br>“Play my ha(lf) by yourse(lf)!”\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"L-LT\",\"audio\":\"phoneme-L-LT.mp3\",\"display\":\"lt\",\"word1\":{\"word\":\"colt\",\"display\":\"co<span>lt</span>\",\"audio\":\"colt.mp3\",\"image\":\"colt.png\"},\"word2\":{\"word\":\"belt\",\"display\":\"be<span>lt</span>\",\"audio\":\"belt.mp3\",\"image\":\"belt.png\"},\"word3\":{\"word\":\"halt\",\"display\":\"ha<span>lt</span>\",\"audio\":\"halt.mp3\",\"image\":\"halt.png\"},\"quiz-words\":[\"bolt\",\"salt\",\"tilt\",\"stilt\",\"adult\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"So close, you can’t leave me. I’m a copycat.<br>Ha(lt) and I stop, go and I will go.<br>At sunrise and sunset like spi(lt) dark, I grow.<br>Dark me(lt)s me, though I flee sun like a bat.<br>Order me away, I revo(lt). No, that<br>Won’t do, child or adu(lt), I’ll follow.\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"M-mmm-begin\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"monkey\",\"display\":\"<span>m</span>onkey\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"word2\":{\"word\":\"mole\",\"display\":\"<span>m</span>ole\",\"audio\":\"mole.mp3\",\"image\":\"mole.png\"},\"word3\":{\"word\":\"mermaid\",\"display\":\"<span>m</span>er<span>m</span>aid\",\"audio\":\"mermaid.mp3\",\"image\":\"mermaid.png\"},\"quiz-words\":[\"music\",\"magic\",\"man\",\"moth\",\"moon\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"When good King Arthur ruled his land<br>He was a goodly king;<br>He stole three sacks of barley (m)eal<br>To (m)ake a bag-pudding.<br>A bag-pudding the king did (m)ake,<br>And stuffed it well with plums,<br>And in it put great lumps of fat<br>As big as my two thumbs.<br>The king and queen ate less than half,<br>Not (m)uch (m)ore, though they tried,<br>And what they could not eat that night<br>The queen next (m)orning fried.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"M-mmm-end\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"swim\",\"display\":\"swi<span>m</span>\",\"audio\":\"swim.mp3\",\"image\":\"swim.png\"},\"word2\":{\"word\":\"clam\",\"display\":\"cla<span>m</span>\",\"audio\":\"clam.mp3\",\"image\":\"clam.png\"},\"word3\":{\"word\":\"storm\",\"display\":\"stor<span>m</span>\",\"audio\":\"storm.mp3\",\"image\":\"storm.png\"},\"quiz-words\":[\"ram\",\"broom\",\"drum\",\"palm\",\"glum\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"There was an old woman got tossed in a blanket<br>Seventeen times as high as the moon;<br>But where she was going no person could tell,<br>For under her ar(m) she carried a broo(m).<br><br>“Old woman, old woman, old woman,” said I,<br>“Where in the world are you flying so high?”<br>“To sweep the cobwebs fro(m) the sky,<br>And I’ll be with you by and by.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"M-MB-silent\",\"audio\":\"phoneme-M-MB-silent.mp3\",\"display\":\"mb\",\"word1\":{\"word\":\"lamb\",\"display\":\"la<span>mb</span>\",\"audio\":\"lamb.mp3\",\"image\":\"lamb.png\"},\"word2\":{\"word\":\"comb\",\"display\":\"co<span>mb</span>\",\"audio\":\"comb.mp3\",\"image\":\"comb.png\"},\"word3\":{\"word\":\"thumb\",\"display\":\"thu<span>mb</span>\",\"audio\":\"thumb.mp3\",\"image\":\"thumb.png\"},\"quiz-words\":[\"limb\",\"crumb\",\"climb\",\"plumber\",\"doorjamb\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"I have many pointy teeth<br>But never eat a cru(mb),<br>And never ever bite or chew.<br>To hunger I am nu(mb).<br><br>With paper I make music—<br>Though people think it’s du(mb).<br>When la(mb)s grow up I groom their fleece,<br>Folks use me with their thu(mb).<br><br>One kind of me a rooster wears<br>Cap-like upon his dome.<br>Some fashionable folks do too.<br>You know me. I’m a — \",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"M-MP\",\"audio\":\"phoneme-M-MP.mp3\",\"display\":\"mp\",\"word1\":{\"word\":\"ump\",\"display\":\"u<span>mp</span>\",\"audio\":\"ump.mp3\",\"image\":\"ump.png\"},\"word2\":{\"word\":\"chimp\",\"display\":\"chi<span>mp</span>\",\"audio\":\"chimp.mp3\",\"image\":\"chimp.png\"},\"word3\":{\"word\":\"camp\",\"display\":\"ca<span>mp</span>\",\"audio\":\"camp.mp3\",\"image\":\"camp.png\"},\"quiz-words\":[\"rump\",\"lamp\",\"jump\",\"stump\",\"dump\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"The big cha(mp) chi(mp) grinned to show his di(mp)le.<br>The little chi(mp) just watched.<br><br>The lu(mp)y cha(mp) chi(mp) frowned and popped a pi(mp)le.<br>The little chimp he watched.<br><br>The plu(mp) cha(mp) chi(mp) ju(mp)ed up and strutted.<br>The little chi(mp) only watched.<br><br>The clumsy cha(mp) chi(mp) hit a stu(mp) and stumbled.<br>The little chi(mp) kept watching.<br><br>The big cha(mp) chi(mp) bu(mp)ed his ru(mp) and got du(mp)ed.<br>The little chi(mp) si(mp)ly watched.<br><br>The gru(mp)y cha(mp) chi(mp) sta(mp)ed, sto(mp)ed, and li(mp)ed off.<br>The little chi(mp) grinned.\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"N-nnn-begin\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"noise\",\"display\":\"<span>n</span>oise\",\"audio\":\"noise.mp3\",\"image\":\"noise.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"<span>n</span>ail\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"nest\",\"display\":\"<span>n</span>est\",\"audio\":\"nest.mp3\",\"image\":\"nest.png\"},\"quiz-words\":[\"net\",\"nuts\",\"nap\",\"nurse\",\"nose\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"“Croak,” said the toad, “I’m hungry I think,<br>To-day I’ve had (n)othing to eat or to drink;<br>I’ll crawl to a garden and jump through the pales,<br>And there I’ll dine (n)icely on slugs and on snails.”<br><br>“Ho, ho!” quoth the frog, “is that what you mean?<br>Then I’ll hop away to the (n)ext meadow stream,<br>There I will drink, and eat worms and slugs too,<br>And then I shall have a good dinner like you.”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-nnn-end\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"rain\",\"display\":\"rai<span>n</span>\",\"audio\":\"rain.mp3\",\"image\":\"rain.png\"},\"word2\":{\"word\":\"van\",\"display\":\"va<span>n</span>\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"fin\",\"display\":\"fi<span>n</span>\",\"audio\":\"fin.mp3\",\"image\":\"fin.png\"},\"quiz-words\":[\"yawn\",\"lion\",\"moon\",\"fan\",\"nun\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Sing a song of sixpence, a pocket full of rye,<br>Four and twenty blackbirds baked i(n) a pie.<br>When the pie was opened the birds bega(n) to sing,<br>Now wasn’t this a dainty dish to set before the king?<br>The king was i(n) the parlor counting out his money;<br>The queen was i(n) the kitche(n) eating bread and honey;<br>The maid was i(n) the garde(n) hanging out the clothes,<br>And along came a blackbird and nipped off her nose.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-ND\",\"audio\":\"phoneme-N-ND.mp3\",\"display\":\"nd\",\"word1\":{\"word\":\"wind\",\"display\":\"wi<span>nd</span>\",\"audio\":\"wind.mp3\",\"image\":\"wind.png\"},\"word2\":{\"word\":\"pond\",\"display\":\"po<span>nd</span>\",\"audio\":\"pond.mp3\",\"image\":\"pond.png\"},\"word3\":{\"word\":\"hand\",\"display\":\"ha<span>nd</span>\",\"audio\":\"hand.mp3\",\"image\":\"hand.png\"},\"quiz-words\":[\"round\",\"behind\",\"hound\",\"diamond\",\"woodwind\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Once on a prete(nd) time didn’t you tell me<br>You once walked your dog to the park to run free,<br>Met an elf with a pet skunk come to play.<br>The pets scuffled a(nd) tussled every which way—<br>The dog chased the skunk rou(nd) a(nd) arou(nd),<br>The swings, towers, trash cans rou(nd) the playgrou(nd),<br>Under a see-saw the skunk tried to hide,<br>Then climbed up a(nd) tumbled back down the slide,<br>Upset a kid’s play pool, shook water a(nd) dripped<br>A slippery mud puddle, a(nd) the dog tripped<br>The clumsy queen who flopped a(nd) wallowed<br>A(nd) knocked down some poor doctor who followed<br>Trying to help, but flip-flopped down too,<br>Then the elf a(nd) the queen both muddy with goo,<br>Dragged down with the skunk, all three sunk<br>Down, in the oozy, slop-sloshery muck gunk.<br>How awfully— <i>fun</i> to sit sunk to the chin!<br>The dog a(nd) you grinned—a(nd) just <i>had</i> to jump in.<br>Grumpy grownups scrubbed clean the kids’ odds a(nd) e(nd)s,<br>But everyone made lots of new mud-loving frie(nd)s!\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"N-NG\",\"audio\":\"phoneme-N-NG.mp3\",\"display\":\"ng\",\"word1\":{\"word\":\"wing\",\"display\":\"wi<span>ng</span>\",\"audio\":\"wing.mp3\",\"image\":\"wing.png\"},\"word2\":{\"word\":\"bang\",\"display\":\"ba<span>ng</span>\",\"audio\":\"bang.mp3\",\"image\":\"bang.png\"},\"word3\":{\"word\":\"strong\",\"display\":\"stro<span>ng</span>\",\"audio\":\"strong.mp3\",\"image\":\"strong.png\"},\"quiz-words\":[\"king\",\"fang\",\"young\",\"long\",\"swing\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Si(ng) a so(ng) of sixpence, a pocket full of rye,<br>Four and twenty blackbirds baked in a pie.<br>When the pie was opened the birds began to si(ng),<br>Now wasn’t this a dainty dish to set before the ki(ng)?<br><br>The ki(ng) was in the parlor counti(ng) out his money;<br>The queen was in the kitchen eati(ng) bread and honey;<br>The maid was in the garden ha(ng)i(ng) out the clothes,<br>And alo(ng) came a blackbird and nipped off her nose.<br>\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"N-NK\",\"audio\":\"phoneme-N-NK.mp3\",\"display\":\"nk\",\"word1\":{\"word\":\"tank\",\"display\":\"ta<span>nk</span>\",\"audio\":\"tank.mp3\",\"image\":\"tank.png\"},\"word2\":{\"word\":\"pink\",\"display\":\"pi<span>nk</span>\",\"audio\":\"pink.mp3\",\"image\":\"pink.png\"},\"word3\":{\"word\":\"trunk\",\"display\":\"tru<span>nk</span>\",\"audio\":\"trunk.mp3\",\"image\":\"trunk.png\"},\"quiz-words\":[\"bank\",\"skunk\",\"drink\",\"think\",\"chipmunk\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"There was an old woman; and what do you thi(nk)?<br>She lived upon nothing but foods and dri(nk);<br>Food and dri(nk) made up most of her diet;<br>And yet this old woman could never be quiet.\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"N-NT\",\"audio\":\"phoneme-N-NT.mp3\",\"display\":\"nt\",\"word1\":{\"word\":\"ant\",\"display\":\"a<span>nt</span>\",\"audio\":\"ant.mp3\",\"image\":\"ant.png\"},\"word2\":{\"word\":\"tent\",\"display\":\"te<span>nt</span>\",\"audio\":\"tent.mp3\",\"image\":\"tent.png\"},\"word3\":{\"word\":\"point\",\"display\":\"poi<span>nt</span>\",\"audio\":\"point.mp3\",\"image\":\"point.png\"},\"quiz-words\":[\"plant\",\"hydrant\",\"paint\",\"present\",\"equipment\"],\"color\":{\"all\":\"black\"},\"rhyme\":\"The little kid got tired of bricks, ceme(nt),<br>hydra(nt)s, traffic wherever he we(nt),<br>Mom ra(nt)ing, ‘Don’t have an accide(nt)!’<br>He mea(nt) to camp awhile and hu(nt), we(nt)<br>Out back, picked a spot among the pla(nt)s,<br>Set up his homemade te(nt). His pa(nt)s<br>Felt itchy, but he saw no a(nt)s,<br>But suddenly a sideways glance<br>At <i>something</i> made him start to think<br>Bad thoughts, then <i>something</i> seemed to slink<br>Behind his te(nt).  He heard some weird clink,<br>Then  smelled some rotten skunky stink,<br>And seemed to hear a growly gru(nt).<br>Decided not to face or confro(nt)<br>Some beast in the back yard or the fro(nt),<br>So raced inside to conduct his hu(nt).\",\"category\":[\"CB-end\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-long\",\"audio\":\"phoneme-O-long.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"old\",\"display\":\"<span>o</span>ld\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"yo-yo\",\"display\":\"y<span>o</span>-y<span>o</span>\",\"audio\":\"yoyo.mp3\",\"image\":\"yoyo.png\"},\"word3\":{\"word\":\"no\",\"display\":\"n<span>o</span>\",\"audio\":\"no.mp3\",\"image\":\"no.png\"},\"quiz-words\":[\"ovals\",\"sofa\",\"mole\",\"nose\",\"dozer\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"(O)ld King C(o)le;<br>Was a merry (o)ld s(o)ul;<br>And a merry (o)ld s(o)ul was he;<br>He called for his pipe;<br>And he called for his b(o)wl;<br>And he called for his fiddlers three.\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-e\",\"audio\":\"phoneme-O-long.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"toe\",\"display\":\"t<span>o</span><u>e</u>\",\"audio\":\"toe.mp3\",\"image\":\"toe.png\"},\"word2\":{\"word\":\"doe\",\"display\":\"d<span>o</span><u>e</u>\",\"audio\":\"doe.mp3\",\"image\":\"doe.png\"},\"word3\":{\"word\":\"hoe\",\"display\":\"h<span>o</span><u>e</u>\",\"audio\":\"hoe.mp3\",\"image\":\"hoe.png\"},\"quiz-words\":[\"mole\",\"rose\",\"bones\",\"oboe\",\"potatoes\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"rhyme\":\"Having less will make it bigger when it’s done.<br>One m(o)le will make many. That’s its r(o)le.<br>Lassos are just r(o)pes with one big one.<br>Each head like yours has five. It’s a —\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"O-short\",\"audio\":\"phoneme-O-short.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"fox\",\"display\":\"f<span>o</span>x\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"pot\",\"display\":\"p<span>o</span>t\",\"audio\":\"pot.mp3\",\"image\":\"pot.png\"},\"word3\":{\"word\":\"hot\",\"display\":\"h<span>o</span>t\",\"audio\":\"hot.mp3\",\"image\":\"hot.png\"},\"quiz-words\":[\"drop\",\"moth\",\"frog\",\"trolley\",\"ostrich\",\"boxer\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"H(o)t cr(o)ss buns, h(o)t cr(o)ss buns.<br>One a penny, two a penny,<br>H(o)t cr(o)ss buns!<br><br>If your daughters do n(o)t like them,<br>Give them to your sons.<br>One a penny, two a penny,<br>H(o)t cr(o)ss buns!\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-uh\",\"audio\":\"phoneme-O-uh.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"lion\",\"display\":\"li<span>o</span>n\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"word2\":{\"word\":\"oven\",\"display\":\"<span>o</span>ven\",\"audio\":\"oven.mp3\",\"image\":\"oven.png\"},\"word3\":{\"word\":\"wagon\",\"display\":\"wag<span>o</span>n\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"quiz-words\":[\"love\",\"mother\",\"glove\",\"shovel\",\"monkey\"],\"color\":{\"all\":\"red\",\"vowel\":\"red\",\"2nd\":\"black\"},\"rhyme\":\"He l(o)ves me.<br>He d(o)esn't!<br>He'll have me.<br>He won't!<br><br>He would if he could,<br>But he can't, so he won't!\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OA\",\"audio\":\"phoneme-O-OA.mp3\",\"display\":\"oa\",\"word1\":{\"word\":\"goat\",\"display\":\"g<span>oa</span>t\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word2\":{\"word\":\"boat\",\"display\":\"b<span>oa</span>t\",\"audio\":\"boat.mp3\",\"image\":\"boat.png\"},\"word3\":{\"word\":\"coat\",\"display\":\"c<span>oa</span>t\",\"audio\":\"coat.mp3\",\"image\":\"coat.png\"},\"quiz-words\":[\"soap\",\"toad\",\"foal\",\"float\",\"toaster\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Nanny Ettic(oa)t;<br>In a white pettic(oa)t;<br>And a red nose;<br>The longer she stands;<br>The shorter she grows.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-OI\",\"audio\":\"phoneme-O-OI.mp3\",\"display\":\"oi\",\"word1\":{\"word\":\"coin\",\"display\":\"c<span>oi</span>n\",\"audio\":\"coin.mp3\",\"image\":\"coin.png\"},\"word2\":{\"word\":\"point\",\"display\":\"p<span>oi</span>nt\",\"audio\":\"point.mp3\",\"image\":\"point.png\"},\"word3\":{\"word\":\"choice\",\"display\":\"ch<span>oi</span>ce\",\"audio\":\"choice.mp3\",\"image\":\"choice.png\"},\"quiz-words\":[\"voice\",\"noise\",\"toilet\",\"poison\",\"oink-oink\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"A toy box you put toys in.<br>Pin a balloon and you’ll sp(oi)l it.<br>A pan’s for putting (oi)ly c(oi)ns in.<br>To clean them add water and b(oi)l it.<br>Time out’s for putting n(oi)sy boys in.<br>P(oi)son? Pour it in the t(oi)let!<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OLD\",\"audio\":\"phoneme-O-OLD.mp3\",\"display\":\"old\",\"word1\":{\"word\":\"old\",\"display\":\"<span>old</span>\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"cold\",\"display\":\"c<span>old</span>\",\"audio\":\"cold.mp3\",\"image\":\"cold.png\"},\"word3\":{\"word\":\"gold\",\"display\":\"g<span>old</span>\",\"audio\":\"gold.mp3\",\"image\":\"gold.png\"},\"quiz-words\":[\"told\",\"sold\",\"hold\",\"scold\",\"soldier\"],\"color\":{\"all\":\"black\",\"vowel\":\"pink\",\"2nd\":\"pink\"},\"rhyme\":\"It is often t(old)<br>Some pilots are (old),<br>Some pilots are b(old),<br>But there are no (old) b(old) pilots.<br><br>It may also be t(old)<br>Some toilets are c(old),<br>Some toilets have m(old),<br>But (old) pilots don’t use c(old) m(old)y toilets.\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"O-ew\",\"audio\":\"phoneme-O-ew.mp3\",\"display\":\"oo\",\"word1\":{\"word\":\"zoo\",\"display\":\"z<span>oo</span>\",\"audio\":\"zoo.mp3\",\"image\":\"zoo.png\"},\"word2\":{\"word\":\"moon\",\"display\":\"m<span>oo</span>n\",\"audio\":\"moon.mp3\",\"image\":\"moon.png\"},\"word3\":{\"word\":\"hoofs\",\"display\":\"h<span>oo</span>fs\",\"audio\":\"hoof.mp3\",\"image\":\"hoof.png\"},\"quiz-words\":[\"tools\",\"boots\",\"broom\",\"stool\",\"moose\",\"goose\",\"spoon\",\"tooth\",\"raccoons\",\"balloon\",\"poodle\",\"school\",\"rooster\",\"bedroom\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The man in the m(oo)n came down t(oo) s(oo)n;<br>To inquire the way to Norridge;<br>The man in the south; he burnt his mouth;<br>With eating cold plum porridge.\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-uuh\",\"audio\":\"phoneme-O-uuh.mp3\",\"display\":\"oo\",\"word1\":{\"word\":\"cook\",\"display\":\"c<span>oo</span>k\",\"audio\":\"cook.mp3\",\"image\":\"cook.png\"},\"word2\":{\"word\":\"wood\",\"display\":\"w<span>oo</span>d\",\"audio\":\"wood.mp3\",\"image\":\"wood.png\"},\"word3\":{\"word\":\"foot\",\"display\":\"f<span>oo</span>t\",\"audio\":\"foot.mp3\",\"image\":\"foot.png\"},\"quiz-words\":[\"look\",\"book\",\"hoodie\",\"cookies\",\"bigfoot\",\"football\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Little Bopeep never underst(oo)d,<br>When little Miss Red Riding H(oo)d<br>Went trick-or-treat in our neighborh(oo)d<br>With little Mister Captain H(oo)k,<br>It wasn’t c(oo)kies or candy they t(oo)k,<br>Each picked a little picture b(oo)k.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"O-OR-long\",\"audio\":\"phoneme-O-OR-long.mp3\",\"display\":\"or\",\"word1\":{\"word\":\"corn\",\"display\":\"c<span>or</span>n\",\"audio\":\"corn.mp3\",\"image\":\"corn.png\"},\"word2\":{\"word\":\"horns\",\"display\":\"h<span>or</span>ns\",\"audio\":\"horns.mp3\",\"image\":\"horns.png\"},\"word3\":{\"word\":\"orca\",\"display\":\"<span>or</span>ca\",\"audio\":\"orca.mp3\",\"image\":\"orca.png\"},\"quiz-words\":[\"sports\",\"hornet\",\"unicorn\",\"uniforms\",\"porcupine\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Little Jack H(or)ner;<br>Sat in a c(or)ner;<br>Eating a Christmas pie;<br>He put in his thumb;<br>And pulled out a plum;<br>And said: \\\"What a good boy am I!\\\"\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OR-schwa\",\"audio\":\"phoneme-O-OR-schwa.m4a\",\"display\":\"or\",\"word1\":{\"word\":\"work\",\"display\":\"w<span>or</span>k\",\"audio\":\"work.mp3\",\"image\":\"work.png\"},\"word2\":{\"word\":\"worms\",\"display\":\"w<span>or</span>ms\",\"audio\":\"worms.mp3\",\"image\":\"worms.png\"},\"word3\":{\"word\":\"tractor\",\"display\":\"tract<span>or</span>\",\"audio\":\"tractor.mp3\",\"image\":\"tractor.png\"},\"quiz-words\":[\"mirror\",\"sailor\",\"gator\",\"gorilla\",\"excavator\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\",\"VC\":\"green\"},\"rhyme\":\"Jim tried art, but couldn’t col(or),<br>Tried music–singing didn’t w(or)k,<br>His dancing?  Duller and duller.<br>His golf coach quit, called him a jerk.<br>He got laughed off as an act(or).<br>But didn’t fear dirt, loved fresh air,<br>Began to farm w(or)ms with a tract(or).<br>Now he’s a famous millionaire!\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OST-short\",\"audio\":\"phoneme-O-OST-short.mp3\",\"display\":\"ost\",\"word1\":{\"word\":\"cost\",\"display\":\"c<span>ost</span>\",\"audio\":\"cost.mp3\",\"image\":\"cost.png\"},\"word2\":{\"word\":\"frost\",\"display\":\"fr<span>ost</span>\",\"audio\":\"frost.mp3\",\"image\":\"frost.png\"},\"word3\":{\"word\":\"ostrich\",\"display\":\"<span>ost</span>rich\",\"audio\":\"ostrich.mp3\",\"image\":\"ostrich.png\"},\"quiz-words\":[\"nostril\",\"costume\",\"frosting\",\"hostile\",\"posture\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"My f(ost)er brother’s c(ost)ume,<br>A big gorilla, looked great!<br>But then inside the party room<br>Stood two more!  How could I locate<br>Him if I got l(ost)?  Then–bumped,<br>Pushed, j(ost)led – I did lose him!<br>Checked first the giant ape slumped<br>In the corner.  Nope, too slim.<br>Two left. One imp(ost)er.  Which one?<br>Stand or sit, their p(ost)ure seemed the same.<br>Both smelled ape-y, scratched their tails for fun,<br>Made rude noises, neither looked tame.<br>One mixed chocolate, vanilla,<br>Strawberry ice cream with his thumb.<br>Could mine be that gross a gorilla?<br>I guessed he could have been that dumb.<br>Then I recalled an (ost)rich offering him<br>Scissors, when we stood by the stair,<br>To give his facial hair a trim–<br>Finally knew him by his n(ost)ril hair.\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"O-OST-long\",\"audio\":\"phoneme-O-OST-long.mp3\",\"display\":\"ost\",\"word1\":{\"word\":\"most\",\"display\":\"m<span>ost</span>\",\"audio\":\"most.mp3\",\"image\":\"most.png\"},\"word2\":{\"word\":\"ghost\",\"display\":\"gh<span>ost</span>\",\"audio\":\"ghost.mp3\",\"image\":\"ghost.png\"},\"word3\":{\"word\":\"postage\",\"display\":\"p<span>ost</span>age\",\"audio\":\"postage.mp3\",\"image\":\"postage.png\"},\"quiz-words\":[\"goalpost\",\"almost\",\"postman\",\"gatepost\",\"hindmost\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"3rd\":\"green\",\"VC\":\"green\"},\"rhyme\":\"When you next meet a gh(ost)<br>And decide you should h(ost)<br>A gh(ost) Bar-B-Q.<br>Don’t feed them roast ribs<br>Unless m(ost) will bring bibs<br>Whatever you do!<br>If their mouths get all greasy<br>Using a gh(ost)-wipe’s too easy<br>And gh(ost) fights get booooooey!\",\"category\":[\"VC-3\",\"V\",\"VC\"],\"grade\":[\"3rd\"]},{\"id\":\"O-OU\",\"audio\":\"phoneme-O-OU.mp3\",\"display\":\"ou\",\"word1\":{\"word\":\"house\",\"display\":\"h<span>ou</span>se\",\"audio\":\"house.mp3\",\"image\":\"house.png\"},\"word2\":{\"word\":\"mouth\",\"display\":\"m<span>ou</span>th\",\"audio\":\"mouth.mp3\",\"image\":\"mouth.png\"},\"word3\":{\"word\":\"proud\",\"display\":\"pr<span>ou</span>d\",\"audio\":\"proud.mp3\",\"image\":\"proud.png\"},\"quiz-words\":[\"snout\",\"mouse\",\"cloudy\",\"bloodhound\",\"mountain\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"I'm a little teapot,<br>short and st(ou)t.<br>Here is my handle,<br>here is my sp(ou)t.<br><br>When I see the teacups,<br>hear me sh(ou)t:<br>\\\"Tip me over,<br>And pour me (ou)t!\\\"<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-ohw\",\"audio\":\"phoneme-O-ohw.mp3\",\"display\":\"ow\",\"word1\":{\"word\":\"blow\",\"display\":\"bl<span>ow</span>\",\"audio\":\"blow.mp3\",\"image\":\"blow.png\"},\"word2\":{\"word\":\"snow\",\"display\":\"sn<span>ow</span>\",\"audio\":\"snow.mp3\",\"image\":\"snow.png\"},\"word3\":{\"word\":\"throw\",\"display\":\"thr<span>ow</span>\",\"audio\":\"throw.mp3\",\"image\":\"throw.png\"},\"quiz-words\":[\"tow\",\"elbow\",\"window\",\"rainbow\",\"pillow\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The north wind does bl(ow);<br>And we shall have sn(ow);<br>And what will poor robin do then?<br>Poor thing!<br><br>He'll sit in the barn;<br>And keep himself warm;<br>And hide his head under his wing.<br>Poor thing!\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-ow\",\"audio\":\"phoneme-O-ow.mp3\",\"display\":\"ow\",\"word1\":{\"word\":\"owl\",\"display\":\"<span>ow</span>l\",\"audio\":\"owl.mp3\",\"image\":\"owl.png\"},\"word2\":{\"word\":\"cow\",\"display\":\"c<span>ow</span>\",\"audio\":\"cow.mp3\",\"image\":\"cow.png\"},\"word3\":{\"word\":\"town\",\"display\":\"t<span>ow</span>n\",\"audio\":\"town.mp3\",\"image\":\"town.png\"},\"quiz-words\":[\"clown\",\"flower\",\"trowel\",\"shower\",\"nightgown\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Daffy-d(ow)n-dilly has come to t(ow)n,<br>With a green petticoat<br>and a bright yellow g(ow)n.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"O-OY\",\"audio\":\"phoneme-O-OY.mp3\",\"display\":\"oy\",\"word1\":{\"word\":\"boy\",\"display\":\"b<span>oy</span>\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word2\":{\"word\":\"toys\",\"display\":\"t<span>oy</span>s\",\"audio\":\"toys.mp3\",\"image\":\"toys.png\"},\"word3\":{\"word\":\"oyster\",\"display\":\"<span>oy</span>ster\",\"audio\":\"oyster.mp3\",\"image\":\"oyster.png\"},\"quiz-words\":[\"joy\",\"cowboy\",\"destroy\",\"royal\",\"boyfriend\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"A b(oy) needs a t(oy)<br>That he can enj(oy)<br>Or he'll have to ann(oy) a grown-up,<br>Climb on the highb(oy),<br>Find a pile to destr(oy),<br>Or play cowb(oy) till doggie has thrown-up.<br>\",\"category\":[\"VP\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"P-puh-begin\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"puppy\",\"display\":\"<span>p</span>u<span>pp</span>y\",\"audio\":\"puppy.mp3\",\"image\":\"puppy.png\"},\"word2\":{\"word\":\"penguin\",\"display\":\"<span>p</span>enguin\",\"audio\":\"penguin.mp3\",\"image\":\"penguin.png\"},\"word3\":{\"word\":\"pie\",\"display\":\"<span>p</span>ie\",\"audio\":\"pie.mp3\",\"image\":\"pie.png\"},\"quiz-words\":[\"pig\",\"paint\",\"purse\",\"pizza\",\"polar bear\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"The sow came in with the saddle,<br>The little (p)ig rocked the cradle,<br>The dish jumped up on the table<br>To see the (p)ot swallow the ladle.<br>The spit that stood behind the door<br>Threw the (p)udding-stick on the floor.<br>“Gracious!” said the gridiron,<br>“Can’t you agree?<br>I’m the boss (p)oliceman,<br>Bring them to me!”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"P-puh-end\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"drop\",\"display\":\"dro<span>p</span>\",\"audio\":\"drop.mp3\",\"image\":\"drop.png\"},\"word2\":{\"word\":\"soap\",\"display\":\"soa<span>p</span>\",\"audio\":\"soap.mp3\",\"image\":\"soap.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"jee<span>p</span>\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"cap\",\"mop\",\"chop\",\"harp\",\"chimp\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Handy Pandy, Jack-a-Dandy,<br>Loves cu(p) cakes and sugar-candy;<br>He bought some at a grocer’s sho(p),<br>And out he came, ho(p), ho(p), ho(p).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"P-PH-begin\",\"audio\":\"phoneme-P-PH.mp3\",\"display\":\"ph\",\"word1\":{\"word\":\"phone\",\"display\":\"<span>ph</span>one\",\"audio\":\"phone.mp3\",\"image\":\"phone.png\"},\"word2\":{\"word\":\"phonics\",\"display\":\"<span>ph</span>onics\",\"audio\":\"phonics.mp3\",\"image\":\"phonics.png\"},\"word3\":{\"word\":\"phantom\",\"display\":\"<span>ph</span>antom\",\"audio\":\"phantom.mp3\",\"image\":\"phantom.png\"},\"quiz-words\":[\"philtrum\",\"physician\",\"pharaoh\",\"pheasant\",\"phoenix\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"(Ph)oebe helped (Ph)il work on (ph)onics,<br>Told him (ph) is just a (ph)oneme,<br>‘Why not just write F? It’s tricks<br>Like that that make me want to scream!”<br><br>(Ph)il screamed. (Ph)oebe (ph)oned a doctor<br>[A (ph)ysician]. “Might be a (ph)ase,”<br>The doctor said, then he shocked her.<br>“Or maybe worse, do his eyes glaze<br><br>When he sees P H on a page?”<br>“Bright red!” she said. “Send a (ph)oto,<br>To my (ph)one,” he said. “Might be a stage,<br>He’s (ph)asing through. Let’s hope so.”<br><br>She did. The doctor sighed, then said,<br>“It’s a (ph)obia. Sad but true:<br>‘(Ph)onics (Ph)enome (Ph)obia, a dread<br>Disease I have. Most smart people do.”\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"P-PH-end\",\"audio\":\"phoneme-P-PH.mp3\",\"display\":\"ph\",\"word1\":{\"word\":\"nymph\",\"display\":\"nym<span>ph</span>\",\"audio\":\"nymph.mp3\",\"image\":\"nymph.png\"},\"word2\":{\"word\":\"digraph\",\"display\":\"digra<span>ph</span>\",\"audio\":\"digraph.mp3\",\"image\":\"digraph.png\"},\"word3\":{\"word\":\"triumph\",\"display\":\"trium<span>ph</span>\",\"audio\":\"triumph.mp3\",\"image\":\"triumph.png\"},\"quiz-words\":[\"phonograph\",\"epitaph\",\"autograph\",\"caliph\",\"sylph\",\"graph\",\"photograph\",\"paragraph\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"If you’ll end “nym(ph)” with a digra(ph),<br>Then write me a paragra(ph),<br>Sign it with your autogra(ph),<br>Record it for my phonogra(ph),<br>And selfie yourself a photogra(ph),<br>We’ll make that your epita(ph).\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"P-PL\",\"audio\":\"phoneme-P-PL.mp3\",\"display\":\"pl\",\"word1\":{\"word\":\"play\",\"display\":\"<span>pl</span>ay\",\"audio\":\"play.mp3\",\"image\":\"play.png\"},\"word2\":{\"word\":\"plug\",\"display\":\"<span>pl</span>ug\",\"audio\":\"plug.mp3\",\"image\":\"plug.png\"},\"word3\":{\"word\":\"plum\",\"display\":\"air<span>pl</span>um\",\"audio\":\"plum.mp3\",\"image\":\"plum.png\"},\"quiz-words\":[\"places\",\"pliers\",\"plumber\",\"snow plow\",\"playground\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"No kid likes peas piled on (pl)ates,<br>But (pl)aced in straws they’re (pl)enty fun.<br>Blow so they shoot past people’s faces<br>(Pl)ay, (pl)ay, (pl)ay, then run, run, run!<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"P-PR\",\"audio\":\"phoneme-P-PR.mp3\",\"display\":\"pr\",\"word1\":{\"word\":\"proud\",\"display\":\"<span>pr</span>oud\",\"audio\":\"proud.mp3\",\"image\":\"proud.png\"},\"word2\":{\"word\":\"prize\",\"display\":\"<span>pr</span>ize\",\"audio\":\"prize.mp3\",\"image\":\"prize.png\"},\"word3\":{\"word\":\"protect\",\"display\":\"<span>pr</span>otect\",\"audio\":\"protect.mp3\",\"image\":\"protect.png\"},\"quiz-words\":[\"pretend\",\"primates\",\"present\",\"pretzel\",\"proposing\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"As I was going up (Pr)imrose Hill;<br>(Pr)imrose Hill was dirty;<br>There I met a (pr)etty girl;<br>And she gave me a curtsey.<br><br>Little girl; (pr)etty girl;<br>Blessings be upon you;<br>If I had half-a-dollar a day;<br>I'd spend it all on you.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Q-qwuh-begin\",\"audio\":\"phoneme-Q-qwuh.mp3\",\"display\":\"q\",\"word1\":{\"word\":\"queen\",\"display\":\"<span>q</span>ueen\",\"audio\":\"queen.mp3\",\"image\":\"queen.png\"},\"word2\":{\"word\":\"question\",\"display\":\"<span>q</span>uestion\",\"audio\":\"question.mp3\",\"image\":\"question.png\"},\"word3\":{\"word\":\"quick\",\"display\":\"<span>q</span>uick\",\"audio\":\"quick.mp3\",\"image\":\"quick.png\"},\"quiz-words\":[\"quiet\",\"quill\",\"quart\",\"quarter\",\"quiver\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"(Q)ueen Croc napped on her (q)uilt,<br>Mama duck (q)uacked, “Be (q)uiet!”<br>“What?” (Q)uacked the duckling.<br>“(Q)uit!” Mama (q)uacked, “Ducks are her diet!”<br>\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"R-ruh-begin\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"raccoons\",\"display\":\"<span>r</span>accoon\",\"audio\":\"raccoons.mp3\",\"image\":\"raccoons.png\"},\"word2\":{\"word\":\"robot\",\"display\":\"<span>r</span>obot\",\"audio\":\"robot.mp3\",\"image\":\"robot.png\"},\"word3\":{\"word\":\"run\",\"display\":\"<span>r</span>un\",\"audio\":\"run.mp3\",\"image\":\"run.png\"},\"quiz-words\":[\"read\",\"rug\",\"robin\",\"rainbow\",\"rabbit\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"(R)ing around the (r)oses,<br>A pocketful of posies,<br>Ashes, Ashes, we all fall down!<br><br>(R)aising up with daisies,<br>(R)ising up with tulips,<br>Popping up with poppies,<br>We all pop up!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"R-ruh-end\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"door\",\"display\":\"doo<span>r</span>\",\"audio\":\"door.mp3\",\"image\":\"door.png\"},\"word2\":{\"word\":\"tiger\",\"display\":\"tige<span>r</span>\",\"audio\":\"tiger.mp3\",\"image\":\"tiger.png\"},\"word3\":{\"word\":\"polar bear\",\"display\":\"pola<span>r</span> bea<span>r</span>\",\"audio\":\"polar bear.mp3\",\"image\":\"polar bear.png\"},\"quiz-words\":[\"car\",\"boar\",\"hear\",\"beaver\",\"dozer\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"A grizzly bea(r) might roa(r) a roa(rrrrrr),<br>A pola(r) bear might growl b(rrrrrr).<br>A chimp might blubbe(r) a bbbbbbbb<br>My grandpa su(r)e would sno(r)e a sno(rrrrrr)e.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-sss-begin\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"suitcase\",\"display\":\"<span>s</span>uitca<span>s</span>e\",\"audio\":\"suitcase.mp3\",\"image\":\"suitcase.png\"},\"word2\":{\"word\":\"say\",\"display\":\"<span>s</span>ay\",\"audio\":\"say.mp3\",\"image\":\"say.png\"},\"word3\":{\"word\":\"sneak\",\"display\":\"<span>s</span>neak\",\"audio\":\"sneak.mp3\",\"image\":\"sneak.png\"},\"quiz-words\":[\"sing\",\"sofa\",\"sun\",\"soap\",\"seal\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Little Robin Redbreast (s)at upon a tree,<br>Up went the Kitty-Cat, and down went he,<br>Down came Kitty-Cat, away Robin ran;<br>(S)ays little Robin Redbreast: “Catch me if you can!”<br><br>Little Robin Redbreast jumped upon a (s)pade,<br>Kitty-Cat jumped after him, and then he was afraid.<br>Little Robin chirped and (s)ang, and what did Kitty say?<br>Kitty-Cat (s)aid: “Meow, meow, meow,” and Robin flew away.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-sss-end\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"bus\",\"display\":\"bu<span>s</span>\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word2\":{\"word\":\"dress\",\"display\":\"dre<span>ss</span>\",\"audio\":\"dress.mp3\",\"image\":\"dress.png\"},\"word3\":{\"word\":\"grapes\",\"display\":\"grape<span>s</span>\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"quiz-words\":[\"stilts\",\"kiss\",\"moss\",\"pets\",\"ants\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Cat(s) like R, they say purrrrr.<br>Dogs do too, but they say grrrr,<br>Snake(s) like S, so they say hi(sss)<br>Bees like Zs, so they go buzzzz.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-zz\",\"audio\":\"phoneme-S-zz.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"dogs\",\"display\":\"dog<span>s</span>\",\"audio\":\"dogs.mp3\",\"image\":\"dogs.png\"},\"word2\":{\"word\":\"skis\",\"display\":\"ski<span>s</span>\",\"audio\":\"skis.mp3\",\"image\":\"skis.png\"},\"word3\":{\"word\":\"boots\",\"display\":\"boot<span>s</span>\",\"audio\":\"boots.mp3\",\"image\":\"boots.png\"},\"quiz-words\":[\"gloves\",\"raccoons\",\"crayons\",\"walnuts\",\"binoculars\"],\"color\":{\"all\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\",\"consonant\":\"green\"},\"rhyme\":\"Sci(ss)or(s) and string, sci(ss)or(s) and string,<br>When a man’(s) single he live(s) like a king.<br>Needle(s) and pin(s), needle(s) and pins,<br>When a man marrie(s) his trouble begin(s).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SC\",\"audio\":\"phoneme-S-SC.mp3\",\"display\":\"sc\",\"word1\":{\"word\":\"scarf\",\"display\":\"<span>sc</span>arf\",\"audio\":\"scarf.mp3\",\"image\":\"scarf.png\"},\"word2\":{\"word\":\"scold\",\"display\":\"<span>sc</span>old\",\"audio\":\"scold.mp3\",\"image\":\"scold.png\"},\"word3\":{\"word\":\"scare\",\"display\":\"<span>sc</span>are\",\"audio\":\"scare.mp3\",\"image\":\"scare.png\"},\"quiz-words\":[\"scowl\",\"scalp\",\"scale\",\"scuba\",\"school bus\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"The (sc)uba man yelled “(sc)at!”<br>And glowered at (Sc)aredy Cat,<br>She hid under a towel<br>While his face made a (sc)owl.<br>When (sc)uba man made a grab<br>She (sc)ratched his (sc)alp’s (sc)ab.\",\"category\":[\"CB-begin\",\"C\",\"CB\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SC-silent\",\"audio\":\"phoneme-S-SC-silent.mp3\",\"display\":\"sc\",\"word1\":{\"word\":\"scent\",\"display\":\"<span>sc</span>ent\",\"audio\":\"scent.mp3\",\"image\":\"scent.png\"},\"word2\":{\"word\":\"scene\",\"display\":\"<span>sc</span>ene\",\"audio\":\"scene.mp3\",\"image\":\"scene.png\"},\"word3\":{\"word\":\"science\",\"display\":\"<span>sc</span>ience\",\"audio\":\"science.mp3\",\"image\":\"science.png\"},\"quiz-words\":[\"muscles\",\"scissors\",\"ascend\",\"descend\",\"crescents\"],\"color\":{\"all\":\"green\",\"3rd\":\"black\"},\"rhyme\":\"An evening (sc)ene, the crescent moon,<br>(Sc)enting the misty dew,<br>Bright stars, the crickets’ chirping tune –<br>Each night the world seems new.<br><br>Some say the moon rises at night,<br>Others say it a(sc)ends,<br>Some say the moon sets when night ends,<br>Others say it de(sc)ends.<br><br>A(sc)end means rise, de(sc)end means set,<br>Either’s okay to say.<br>(Sc)ientists say people forget.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SCR\",\"audio\":\"phoneme-S-SCR.mp3\",\"display\":\"scr\",\"word1\":{\"word\":\"scrub\",\"display\":\"<span>sc</span>rub\",\"audio\":\"scrub.mp3\",\"image\":\"scrub.png\"},\"word2\":{\"word\":\"scratch\",\"display\":\"<span>sc</span>ratch\",\"audio\":\"scratch.mp3\",\"image\":\"scratch.png\"},\"word3\":{\"word\":\"scream\",\"display\":\"<span>sc</span>ream\",\"audio\":\"scream.mp3\",\"image\":\"scream.png\"},\"quiz-words\":[\"scrubs\",\"screws\",\"screwdriver\",\"scraper\",\"scribble\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"(Scr)aper asked (Scr)ewdriver,<br>“What do you do?”<br>(Scr)ewdriver said, “I (scr)ew (scr)ews.<br>What do you do?”<br>“I (scr)atch off bumpy (scr)ew heads,<br>(scr)ape rough surfaces clean.”<br>“(Scr)am!” (scr)eamed the (scr)ew heads.<br>“(Scr)raping (scr)ew heads is mean!”\",\"category\":[\"CB-3\",\"C\",\"CB\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SH-begin\",\"audio\":\"phoneme-S-SH.mp3\",\"display\":\"sh\",\"word1\":{\"word\":\"shapes\",\"display\":\"<span>sh</span>apes\",\"audio\":\"shapes.mp3\",\"image\":\"shapes.png\"},\"word2\":{\"word\":\"sheep\",\"display\":\"<span>sh</span>eep\",\"audio\":\"sheep.mp3\",\"image\":\"sheep.png\"},\"word3\":{\"word\":\"shark\",\"display\":\"<span>sh</span>ark\",\"audio\":\"shark.mp3\",\"image\":\"shark.png\"},\"quiz-words\":[\"shin\",\"shirt\",\"shoes\",\"shell\",\"shoulders\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"There was an old woman who lived in a (sh)oe;<br>(Sh)e had so many children (sh)e didn't know what to do.<br>(Sh)e gave them some broth without any bread;<br>Then whipped them all soundly and put them to bed.\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SH-end\",\"audio\":\"phoneme-S-SH.mp3\",\"display\":\"sh\",\"word1\":{\"word\":\"bush\",\"display\":\"bu<span>sh</span>\",\"audio\":\"bush.mp3\",\"image\":\"bush.png\"},\"word2\":{\"word\":\"wash\",\"display\":\"wa<span>sh</span>\",\"audio\":\"wash.mp3\",\"image\":\"wash.png\"},\"word3\":{\"word\":\"leash\",\"display\":\"lea<span>sh</span>\",\"audio\":\"leash.mp3\",\"image\":\"leash.png\"},\"quiz-words\":[\"squash\",\"radish\",\"ticklish\",\"starfish\",\"eyelash\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Driving on an ocean drawbridge<br>She began to wi(sh) a wi(sh)<br>She’d find fre(sh) tuna in her fridge,<br>Then--sma(sh) ba(sh) ma(sh)--this fi(sh)<br><br>Slammed hard into her face!<br>A flying fi(sh)! Bright mind-lights went fla(sh),<br>Blinding her–she braked to stop someplace,<br>Then slap bang went cra(sh)!<br><br>A cop showed up, she blushed a blu(sh),<br>Sobbed her story. He said,<br>“Sounds fishy!” Smiled, seemed in no ru(sh).<br>But, once her leg healed, they wed.\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SK-begin\",\"audio\":\"phoneme-S-SK.mp3\",\"display\":\"sk\",\"word1\":{\"word\":\"skate\",\"display\":\"<span>sk</span>ate\",\"audio\":\"skate.mp3\",\"image\":\"skate.png\"},\"word2\":{\"word\":\"skunk\",\"display\":\"<span>sk</span>unk\",\"audio\":\"skunk.mp3\",\"image\":\"skunk.png\"},\"word3\":{\"word\":\"ski\",\"display\":\"<span>sk</span>i\",\"audio\":\"ski.mp3\",\"image\":\"ski.png\"},\"quiz-words\":[\"skinny\",\"skip\",\"sky\",\"skirt\",\"skeleton\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"If you (sk)ip in a (sk)irt<br>You better be (sk)illful,<br>(Sk)inning your knee can be<br>Terribly painful.<br>If you (sk)ate in long pants<br>Just be extra careful,<br>Tuck in your cuffs– <br>A (sk)id could be hurtful.<br>Be extra resourceful<br>And you’ll be successful!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SK-end\",\"audio\":\"phoneme-S-SK.mp3\",\"display\":\"sk\",\"word1\":{\"word\":\"ask\",\"display\":\"a<span>sk</span>\",\"audio\":\"ask.mp3\",\"image\":\"ask.png\"},\"word2\":{\"word\":\"desk\",\"display\":\"de<span>sk</span>\",\"audio\":\"desk.mp3\",\"image\":\"desk.png\"},\"word3\":{\"word\":\"tusk\",\"display\":\"tu<span>sk</span>\",\"audio\":\"tusk.mp3\",\"image\":\"tusk.png\"},\"quiz-words\":[\"mask\",\"disk\",\"dusk\",\"husk\",\"mollusk\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Could that monstrous lizard the basili(sk)<br>Really kill with just one glance? I wouldn’t ri(sk)<br>Trying to find out. Why, evenings at du(sk),<br>Does the sky turn pink? An elephant’s tu(sk),<br>How sharp is it?  Each a first rate question!<br>Not like those spelling, science, subtraction<br>Tests, all those un-fun questions teachers ask<br>That make you wish you had a magic ma(sk)\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SL\",\"audio\":\"phoneme-S-SL.mp3\",\"display\":\"sl\",\"word1\":{\"word\":\"sled\",\"display\":\"<span>sl</span>ed\",\"audio\":\"sled.mp3\",\"image\":\"sled.png\"},\"word2\":{\"word\":\"slip\",\"display\":\"<span>sl</span>ip\",\"audio\":\"slip.mp3\",\"image\":\"slip.png\"},\"word3\":{\"word\":\"slow\",\"display\":\"<span>sl</span>ow\",\"audio\":\"slow.mp3\",\"image\":\"slow.png\"},\"quiz-words\":[\"slide\",\"slice\",\"sleepy\",\"sleigh\",\"slippers\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"The (sl)eepy (sl)ob started to (sl)ouch,<br>Then (sl)ipped and back (sl)id on the couch.<br>He (sl)urped (sl)obber in his (sl)umber,<br>So I conked him with lumber,<br>But that (sl)acker didn’t even squeal ‘Ouch!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SM\",\"audio\":\"phoneme-S-SM.mp3\",\"display\":\"sm\",\"word1\":{\"word\":\"small\",\"display\":\"<span>sm</span>all\",\"audio\":\"small.mp3\",\"image\":\"small.png\"},\"word2\":{\"word\":\"smell\",\"display\":\"<span>sm</span>ell\",\"audio\":\"smell.mp3\",\"image\":\"smell.png\"},\"word3\":{\"word\":\"smile\",\"display\":\"<span>sm</span>ile\",\"audio\":\"smile.mp3\",\"image\":\"smile.png\"},\"quiz-words\":[\"smash\",\"smoke\",\"smart\",\"smooth\",\"smooch\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"The (sm)all chimp girl (sm)elled nice,<br>And (sm)iled at chimp boy once, twice.<br>On her (sm)ooth cheek he (sm)acked<br>A (sm)oochy kiss.  She whacked his back right back!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SN\",\"audio\":\"phoneme-S-SN.mp3\",\"display\":\"sn\",\"word1\":{\"word\":\"snow\",\"display\":\"<span>sn</span>ow\",\"audio\":\"snow.mp3\",\"image\":\"snow.png\"},\"word2\":{\"word\":\"sneak\",\"display\":\"<span>sn</span>eak\",\"audio\":\"sneak.mp3\",\"image\":\"sneak.png\"},\"word3\":{\"word\":\"snake\",\"display\":\"<span>sn</span>ake\",\"audio\":\"snake.mp3\",\"image\":\"snake.png\"},\"quiz-words\":[\"snout\",\"snail\",\"snap\",\"snack\",\"snare drum\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"(Sn)owbird tried to (sn)eak<br>A chocolate (sn)owball (sn)ack,<br>But (sn)ow(sn)ail squeezed his beak<br>And stole the (sn)ack right back.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SP\",\"audio\":\"phoneme-S-SP.mp3\",\"display\":\"sp\",\"word1\":{\"word\":\"spill\",\"display\":\"<span>sp</span>ill\",\"audio\":\"spill.mp3\",\"image\":\"spill.png\"},\"word2\":{\"word\":\"sports\",\"display\":\"<span>sp</span>orts\",\"audio\":\"sports.mp3\",\"image\":\"sports.png\"},\"word3\":{\"word\":\"spider\",\"display\":\"<span>sp</span>ider\",\"audio\":\"spider.mp3\",\"image\":\"spider.png\"},\"quiz-words\":[\"speak\",\"spyglass\",\"spade\",\"spoon\",\"cocker spaniel\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"I (sp)ied a dirty blue jay<br>On a '(sp)ecially hot (sp)ring day.<br>He (sp)lished and (sp)lashed in a birdbath,<br>Then (sp)eedily flew away.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-SPL\",\"audio\":\"phoneme-S-SPL.mp3\",\"display\":\"spl\",\"word1\":{\"word\":\"split\",\"display\":\"<span>sp</span>lit\",\"audio\":\"split.mp3\",\"image\":\"split.png\"},\"word2\":{\"word\":\"splat\",\"display\":\"<span>sp</span>lat\",\"audio\":\"splat.mp3\",\"image\":\"splat.png\"},\"word3\":{\"word\":\"splash\",\"display\":\"<span>sp</span>lash\",\"audio\":\"splash.mp3\",\"image\":\"splash.png\"},\"quiz-words\":[\"splits\",\"splinter\",\"splatter\",\"splendid\",\"splendor\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"Squirrel fell (spl)at on a (spl)it stick,<br>Quick (spl)uttered out, “Oh no!<br>Then (spl)ashed down in a birdbath<br>(spl)attered water to and fro,<br>Howled “A (spl)inter’s in my forepaw!”<br>And di(spl)ayed his sore, sore toe.\",\"category\":[\"CB-3\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SPR\",\"audio\":\"phoneme-S-SPR.mp3\",\"display\":\"spr\",\"word1\":{\"word\":\"spread\",\"display\":\"<span>sp</span>read\",\"audio\":\"spread.mp3\",\"image\":\"spread.png\"},\"word2\":{\"word\":\"spruce\",\"display\":\"<span>sp</span>ruce\",\"audio\":\"spruce.mp3\",\"image\":\"spruce.png\"},\"word3\":{\"word\":\"sprain\",\"display\":\"<span>sp</span>rain\",\"audio\":\"sprain.mp3\",\"image\":\"sprain.png\"},\"quiz-words\":[\"sprawl\",\"sprout\",\"spray\",\"sprinters\",\"sprinkler\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"A (spr)y old (spr)inter raced ahead<br>But got stung by a bee,<br>Slipped on some slippery (spr)inkler (spr)ay,<br>Crashed through a rough (spr)uce tree,<br>Fell (spr)awling down and loudly howled,<br>“I won! — but (spr)ained my knee!”\",\"category\":[\"CB-3\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-ST-begin\",\"audio\":\"phoneme-S-ST.mp3\",\"display\":\"st\",\"word1\":{\"word\":\"stop\",\"display\":\"<span>st</span>op\",\"audio\":\"stop.mp3\",\"image\":\"stop.png\"},\"word2\":{\"word\":\"step\",\"display\":\"<span>st</span>ep\",\"audio\":\"step.mp3\",\"image\":\"step.png\"},\"word3\":{\"word\":\"stick\",\"display\":\"<span>st</span>ick\",\"audio\":\"stick.mp3\",\"image\":\"stick.png\"},\"quiz-words\":[\"stilts\",\"storm\",\"stool\",\"stump\",\"stinger\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Robin and Richard<br>Were two lazy men;<br>They (st)ayed in bed<br>Till the clock (st)ruck ten.<br>Then up jumps Robin<br>And looks at the sky:<br>“Oh, brother Richard,<br>The sun’s very high.<br>You walk fir(st)<br>With the bottle and bag,<br>And I’ll ride later<br>On the gray horse nag.”<br>\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-ST-end\",\"audio\":\"phoneme-S-ST.mp3\",\"display\":\"st\",\"word1\":{\"word\":\"fast\",\"display\":\"fa<span>st</span>\",\"audio\":\"fast.mp3\",\"image\":\"fast.png\"},\"word2\":{\"word\":\"rest\",\"display\":\"re<span>st</span>\",\"audio\":\"rest.mp3\",\"image\":\"rest.png\"},\"word3\":{\"word\":\"cast\",\"display\":\"ca<span>st</span>\",\"audio\":\"cast.mp3\",\"image\":\"cast.png\"},\"quiz-words\":[\"first\",\"chest\",\"artist\",\"wrist\",\"forest\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Once on a pretend time didn’t you tell me,<br>You ho(st)ed a happy pet-pair party?<br>You  decided on goodies to buy at the store, <br>With your favorite pet dog made a gue(st) li(st) of four,<br>Invited a cyclops with a pet pig to attend,<br>And a fairy paired with a pet parrot be(st) friend.<br>You spread a bright blanket with places for six,<br>And bowls for dog food, pig food, and a mix<br>Of treats for the picky parrot.  For the re(st)<br>Cold milk, cake on a platter, and the be(st)<br>Ice cream—chocolate, vanilla, strawberry—<br>Topped with sprinkles, nuts, a bright red cherry,<br>And butter-scotch syrup! Gosh it’s yummy,<br>Yum yummy in a tum, tum, tummy!<br>The dog, and pig, and parrot played so well,<br>And everyone loved it, so I heard tell. <br>The cyclops kept bragging that you were so clever, <br>And the fairy declared it the (best) party ever!\",\"category\":[\"CB-end\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"S-STR\",\"audio\":\"phoneme-S-STR.mp3\",\"display\":\"str\",\"word1\":{\"word\":\"strong\",\"display\":\"<span>str</span>ong\",\"audio\":\"strong.mp3\",\"image\":\"strong.png\"},\"word2\":{\"word\":\"straw\",\"display\":\"<span>str</span>aw\",\"audio\":\"straw.mp3\",\"image\":\"straw.png\"},\"word3\":{\"word\":\"string\",\"display\":\"<span>str</span>ing\",\"audio\":\"string.mp3\",\"image\":\"string.png\"},\"quiz-words\":[\"stripes\",\"strings\",\"straight\",\"structures\",\"street-sweeper\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"(Str)eet sweeper swept the (str)eet,<br>Cleaned (str)aw, (str)ing, like a dream,<br>Then gobbled down his favorite treat,<br>Sweet (str)awberry ice cream.\",\"category\":[\"CB-3\",\"CB\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"S-SW\",\"audio\":\"phoneme-S-SW.mp3\",\"display\":\"sw\",\"word1\":{\"word\":\"swim\",\"display\":\"<span>sw</span>im\",\"audio\":\"swim.mp3\",\"image\":\"swim.png\"},\"word2\":{\"word\":\"swing\",\"display\":\"<span>sw</span>ing\",\"audio\":\"swing.mp3\",\"image\":\"swing.png\"},\"word3\":{\"word\":\"swan\",\"display\":\"<span>sw</span>an\",\"audio\":\"swan.mp3\",\"image\":\"swan.png\"},\"quiz-words\":[\"sweets\",\"swine\",\"sweater\",\"side-swept\",\"street-sweeper\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"(Sw)an (sw)am over the sea,<br>(Sw)im (sw)an (sw)im!<br>(Sw)an (sw)am back again,<br>Well (sw)um (sw)an!\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-tttt-begin\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"toe\",\"display\":\"<span>t</span>oe\",\"audio\":\"toe.mp3\",\"image\":\"toe.png\"},\"word2\":{\"word\":\"toys\",\"display\":\"<span>t</span>oys\",\"audio\":\"toys.mp3\",\"image\":\"toys.png\"},\"word3\":{\"word\":\"tail\",\"display\":\"<span>t</span>ail\",\"audio\":\"tail.mp3\",\"image\":\"tail.png\"},\"quiz-words\":[\"tiger\",\"tent\",\"turtle\",\"tuba\",\"teeter-totter\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"(T)homas A’(T)attamus took two (T)’s<br>(T)o (t)ie (t)wo (t)ubs (t)o (t)wo (t)all trees,<br>(T)o frighten the (t)errible (T)homas A’(T)attamus!<br>(T)ell me how many (T)’s there are in all that?\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-tttt-end\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"net\",\"display\":\"ne<span>t</span>\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"word2\":{\"word\":\"paint\",\"display\":\"pain<span>t</span>\",\"audio\":\"paint.mp3\",\"image\":\"paint.png\"},\"word3\":{\"word\":\"tent\",\"display\":\"<span>t</span>en<span>t</span>\",\"audio\":\"tent.mp3\",\"image\":\"tent.png\"},\"quiz-words\":[\"cat\",\"vet\",\"cast\",\"hunt\",\"goat\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Lucy Locke(t) los(t) her pocke(t),<br>Kitty Fisher found I(t);<br>There was no(t) a penny in I(t),<br>But a ribbon round i(t).\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-TCH-silent\",\"audio\":\"phoneme-T-TCH-silent.mp3\",\"display\":\"tch\",\"word1\":{\"word\":\"pitch\",\"display\":\"pi<span>tch</span>\",\"audio\":\"pitch.mp3\",\"image\":\"pitch.png\"},\"word2\":{\"word\":\"catch\",\"display\":\"ca<span>tch</span>\",\"audio\":\"catch.mp3\",\"image\":\"catch.png\"},\"word3\":{\"word\":\"match\",\"display\":\"ma<span>tch</span>\",\"audio\":\"match.mp3\",\"image\":\"match.png\"},\"quiz-words\":[\"hitch\",\"hatchet\",\"itches\",\"crutches\",\"wristwatch\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"They grow well in a garden pa(tch),<br>Taste yummy in a pie,<br>Broth, toast, and cheesey flavors ma(tch)<br>In soup— or slice and fry.<br>Their layers you can unatt(ach)<br>And see through if you try.<br>They never make you i(tch) or scra(tch)<br>But they can make you cry.<br>Grownups like-em more than young-uns,<br>These are—\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"T-th-begin\",\"audio\":\"phoneme-T-th.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"throne\",\"display\":\"<span>th</span>rone\",\"audio\":\"throne.mp3\",\"image\":\"throne.png\"},\"word2\":{\"word\":\"thieves\",\"display\":\"<span>th</span>ieves\",\"audio\":\"thieves.mp3\",\"image\":\"thieves.png\"},\"word3\":{\"word\":\"throw\",\"display\":\"<span>th</span>row\",\"audio\":\"throw.mp3\",\"image\":\"throw.png\"},\"quiz-words\":[\"think\",\"thirsty\",\"thick\",\"thumb\",\"thumbnail\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The (th)in queen sat high on her (th)rone,<br>A (th)ick (th)imble shielding her (th)umb,<br>Admiring the fine (th)ing she’d sewn, <br>Wondering when the king would come.<br><br>The  glum king slouched toward his (th)rone,<br>And moaned and groaned and sucked one (th)umb,<br>Hurt playing baseball wi(th) a stone,<br>The  o(th)er just felt stiff and numb.<br><br>When she showed the gift she’d sewed<br>To (th)ank her, (th)ree times he leapt high<br>Her kiss once changed him from a toad.<br>A baseball’s great for any guy!\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-TH-end\",\"audio\":\"phoneme-T-th.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"moth\",\"display\":\"mo<span>th</span>\",\"audio\":\"moth.mp3\",\"image\":\"moth.png\"},\"word2\":{\"word\":\"path\",\"display\":\"pa<span>th</span>\",\"audio\":\"path.mp3\",\"image\":\"path.png\"},\"word3\":{\"word\":\"teeth\",\"display\":\"tee<span>th</span>\",\"audio\":\"teeth.mp3\",\"image\":\"teeth.png\"},\"quiz-words\":[\"mouth\",\"both\",\"tooth\",\"shoulder-length\",\"bathtub\"],\"color\":{\"all\":\"black\"},\"rhyme\":\"I don’t <i>think</i> it really happened last night,<br>After my ba(th), snuggling, both eyes squeezed tight,<br>I <i>thought</i> someone—or something—said,<br>“Stop!’ —inside…or maybe outside…my head.<br>I <i>believe</i> a teeny-tiny giraffe shadow,<br>Popped from the dark, hopped on the window,<br>And howled, “Don’t tickle me— you bucktoo(th) mo(th) you!”<br>That’s not normal!  Not what shadows should do!<br>Is it…?  This huge big-mou(th) mo(th) said, “I’m no mo(th) now,<br>So I’ll just tickle your noodle-neck anyhow!”<br>Wham! –and it changed to a sasquatch then!<br>What!?  And the other shadow, who had been<br>This giraffe, became a strange dino-bird!  Whaaat?!  I squeezed<br>My eyes tighter as sasquatch pranced and teased,<br>“NAH-nah-NAH-nah-NAH-NAH.” I spied<br>It zip benea(th) the bed, try to hide,<br>Then scramble to the ceiling, hip-hop<br>Over a shadow unicorn then snap-stop,<br>Catch its brea(th) to stretch its long fingers <i>every</i> where,<br>Tickling a weird centaur here, a goofy robot there.<br>This tickle-craziness made me crazy too,<br>And in tru(th) I knew only one thing to do!<br>I leapt from my bed, quick flashed on the light!<br>Shadows take flight from fright when it’s bright—<br>And stay far away, if you wave a flashlight!\",\"category\":[\"CD-end\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"T-the\",\"audio\":\"phoneme-T-the.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"them\",\"display\":\"<span>th</span>em\",\"audio\":\"them.mp3\",\"image\":\"them.png\"},\"word2\":{\"word\":\"there\",\"display\":\"<span>th</span>ere\",\"audio\":\"there.mp3\",\"image\":\"there.png\"},\"word3\":{\"word\":\"these\",\"display\":\"<span>th</span>ese\",\"audio\":\"these.mp3\",\"image\":\"these.png\"},\"quiz-words\":[\"they\",\"those\",\"that\",\"this\",\"their\"],\"color\":{\"all\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"I’d like to create a fantabulous zoo,<br>And (th)e bestest guest I’d invite (th)ere is you.<br>(th)is beast with a dog head and ant behind,<br>And a fly belly—is three in one combined.<br>(th)at beast with a hen middle, and a cat head,<br>And a bat for a tail-end, just <i>loves</i> gingerbread!<br>One with an ant head, a tubby piggy tummy,<br>And a hen backside, thinks your armpit is yummy.<br>One creature has an ant middle, and a wild piggy back,<br>(th)e face of a hen–Don’t let it attack!<br>One’s a fly at (th)e head and elk at (th)e belly,<br>And fox at (th)e tail end – it really poops smelly!<br>And one with a fox middle, a bug at (th)e rear,<br>Has (th)e head of some bat – (th)at I’d <i>never</i> get near.<br>Last, one with two heads, elk one front,<br>A bat middle, and a ram other front,<br>Hurts both my ears when it roars a double grunt!<br>Don’t you love (th)ese strange creatures in my weird zoo?<br>Wouldn’t you like me to put you (th)ere too?\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"3rd\"]},{\"id\":\"T-TR\",\"audio\":\"phoneme-T-TR.mp3\",\"display\":\"tr\",\"word1\":{\"word\":\"trunk\",\"display\":\"<span>tr</span>unk\",\"audio\":\"trunk.mp3\",\"image\":\"trunk.png\"},\"word2\":{\"word\":\"tractor\",\"display\":\"<span>tr</span>actor\",\"audio\":\"tractor.mp3\",\"image\":\"tractor.png\"},\"word3\":{\"word\":\"tricky\",\"display\":\"<span>tr</span>icky\",\"audio\":\"tricky.mp3\",\"image\":\"tricky.png\"},\"quiz-words\":[\"trumpet\",\"tricycle\",\"triceratops\",\"triangles\",\"trash truck\"],\"color\":{\"all\":\"black\",\"1st\":\"black\"},\"rhyme\":\"Mis(tr)ess Mary; quite con(tr)ary;<br>How does your garden grow?<br>With silver bells and cockle shells;<br>And pretty maids all in a row.\",\"category\":[\"CB-begin\",\"CB\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-long\",\"audio\":\"phoneme-U-long.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"cute\",\"display\":\"c<span>u</span>te\",\"audio\":\"cute.mp3\",\"image\":\"cute.png\"},\"word2\":{\"word\":\"bugle\",\"display\":\"b<span>u</span>gle\",\"audio\":\"bugle.mp3\",\"image\":\"bugle.png\"},\"word3\":{\"word\":\"huge\",\"display\":\"h<span>u</span>ge\",\"audio\":\"huge.mp3\",\"image\":\"huge.png\"},\"quiz-words\":[\"music\",\"statue\",\"unicorn\",\"unicycle\",\"binoculars\",\"ambulance\",\"SUV\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"He balanced a c(u)cumber on his nose,<br>But should have (u)sed binoc(u)lars to watch the roads.<br>A (u)nicycle’s dangerous when clowns can’t see—<br>Quick call an amb(u)lance:  one, two, three!<br>\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-e\",\"audio\":\"phoneme-U-long.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"blue\",\"display\":\"bl<span>u</span><u>e</u>\",\"audio\":\"blue.mp3\",\"image\":\"blue.png\"},\"word2\":{\"word\":\"hues\",\"display\":\"h<span>u</span><u>e</u>s\",\"audio\":\"hues.mp3\",\"image\":\"hues.png\"},\"word3\":{\"word\":\"glue\",\"display\":\"gl<span>u</span><u>e</u>\",\"audio\":\"glue.mp3\",\"image\":\"glue.png\"},\"quiz-words\":[\"rescue\",\"statue\",\"tissue\",\"clueless\",\"flute\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"rhyme\":\"Some aren’t worth much, but some have great val(u)e.<br>Each kept will be for friends a kind of gl(u)e.<br>Close friends who don’t keep them often arg(u)e.<br>Realize sharing them, even one cl(u)e,<br>Ends friendships, when just one friend’s untr(u)e.<br>Trust no one with one, some say, except a stat(u)e.\",\"category\":[\"E\",\"V\"],\"grade\":[\"3rd\"]},{\"id\":\"U-uu\",\"audio\":\"phoneme-U-uu.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"tuba\",\"display\":\"t<span>u</span>ba\",\"audio\":\"tuba.mp3\",\"image\":\"tuba.png\"},\"word2\":{\"word\":\"rude\",\"display\":\"r<span>u</span>de\",\"audio\":\"rude.mp3\",\"image\":\"rude.png\"},\"word3\":{\"word\":\"flu\",\"display\":\"fl<span>u</span>\",\"audio\":\"flu.mp3\",\"image\":\"flu.png\"},\"quiz-words\":[\"blue\",\"glue\",\"flute\",\"suit\",\"spruce\",\"tissue\"],\"color\":{\"all\":\"pink\",\"vowel\":\"pink\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"S(u)e played a big bl(u)e t(u)ba,</br>J(u)lius played one too,</br>With their two bl(u)e t(u)bas,</br>What did those two do?</br>He blew his bl(u)e t(u)ba loud!</br>She blew hers too!\",\"category\":[\"V-long\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-short\",\"audio\":\"phoneme-U-short.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"bug\",\"display\":\"b<span>u</span>g\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"word2\":{\"word\":\"bus\",\"display\":\"b<span>u</span>s\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word3\":{\"word\":\"cut\",\"display\":\"c<span>u</span>t\",\"audio\":\"cut.mp3\",\"image\":\"cut.png\"},\"quiz-words\":[\"jump\",\"trunk\",\"brush\",\"muzzle\",\"bucket\"],\"color\":{\"all\":\"red\",\"vowel\":\"red\",\"K\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"R(u)b a d(u)b d(u)b,<br>Three men in a t(u)b;<br>And who do you think they be?<br>The butcher, the baker,<br>The candlestick-maker;<br>Turn’em out, knaves all three!\",\"category\":[\"V-short\",\"V\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"U-schwa\",\"audio\":\"phoneme-U-short.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"bug\",\"display\":\"b<span>u</span>g\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"word2\":{\"word\":\"bus\",\"display\":\"b<span>u</span>s\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word3\":{\"word\":\"cut\",\"display\":\"c<span>u</span>t\",\"audio\":\"cut.mp3\",\"image\":\"cut.png\"},\"quiz-words\":[\"jump\",\"trunk\",\"brush\",\"muzzle\",\"bucket\"],\"color\":{\"all\":\"purple\",\"vowel\":\"purple\",\"2nd\":\"black\"},\"rhyme\":\"R(u)b a d(u)b d(u)b,<br>Three men in a t(u)b;<br>And who do you think they be?<br>The butcher, the baker,<br>The candlestick-maker;<br>Turn’em out, knaves all three!\",\"category\":[\"V-schwa\",\"V\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"U-UR\",\"audio\":\"phoneme-U-UR.mp3\",\"display\":\"ur\",\"word1\":{\"word\":\"burn\",\"display\":\"b<span>ur</span>n\",\"audio\":\"burn.mp3\",\"image\":\"burn.png\"},\"word2\":{\"word\":\"surf\",\"display\":\"s<span>ur</span>f\",\"audio\":\"surf.mp3\",\"image\":\"surf.png\"},\"word3\":{\"word\":\"nurse\",\"display\":\"n<span>ur</span>se\",\"audio\":\"nurse.mp3\",\"image\":\"nurse.png\"},\"quiz-words\":[\"purse\",\"burro\",\"turtle\",\"burrito\",\"hamburger\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"To (ur)ge her to p(ur)r<br>Lin rubs kitty cat's f(ur);<br>When Lin topples the (ur)n<br>Kitty makes a bl(ur).<br>\",\"category\":[\"R\",\"V\",\"VC\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"V-vv-begin\",\"audio\":\"phoneme-V-vv.mp3\",\"display\":\"v\",\"word1\":{\"word\":\"volcano\",\"display\":\"<span>v</span>olcano\",\"audio\":\"volcano.mp3\",\"image\":\"volcano.png\"},\"word2\":{\"word\":\"van\",\"display\":\"<span>v</span>an\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"voice\",\"display\":\"<span>v</span>oice\",\"audio\":\"voice.mp3\",\"image\":\"voice.png\"},\"quiz-words\":[\"veil\",\"vowels\",\"violin\",\"volleyball\",\"vegetables\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"When (V)ic dropped his (v)anilla cone,<br>In (v)ery weird (v)oice he moaned a groan.<br>Bigfoot offered some syrup for a trial.<br>“Yuck!” (V)ic roared.  “(V)inegar’s (v)ile!”<br>Giant Cyclops grinned big, said, “No!<br>Try that (v)ast upside down cone: (v)olcano!”\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"W-wuh-begin\",\"audio\":\"phoneme-W-wuh.mp3\",\"display\":\"w\",\"word1\":{\"word\":\"wagon\",\"display\":\"<span>w</span>agon\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"word2\":{\"word\":\"wolf\",\"display\":\"<span>w</span>olf\",\"audio\":\"wolf.mp3\",\"image\":\"wolf.png\"},\"word3\":{\"word\":\"wind\",\"display\":\"<span>w</span>ind\",\"audio\":\"wind.mp3\",\"image\":\"wind.png\"},\"quiz-words\":[\"wig\",\"wall\",\"walrus\",\"waterfall\",\"walnuts\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"(W)ee (W)illie (W)inkie runs through the town;<br>Upstairs and downstairs; in his nightgown;<br>Tapping at the (w)indo(w); crying at the lock;<br>Are the children all in bed? It's now eight o'clock?\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"W-WH\",\"audio\":\"phoneme-W-WH.mp3\",\"display\":\"wh\",\"word1\":{\"word\":\"white\",\"display\":\"<span>wh</span>ite\",\"audio\":\"white.mp3\",\"image\":\"white.png\"},\"word2\":{\"word\":\"whiskers\",\"display\":\"<span>wh</span>iskers\",\"audio\":\"whiskers.mp3\",\"image\":\"whiskers.png\"},\"word3\":{\"word\":\"whale\",\"display\":\"<span>wh</span>ale\",\"audio\":\"whale.mp3\",\"image\":\"whale.png\"},\"quiz-words\":[\"whistle\",\"wheelchair\",\"wheat-bread\",\"wheel\",\"whisper\"],\"color\":{\"all\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Bill claimed a bully (wh)acked and (wh)opped his rib.<br>Mom said, “(Wh)at?  (Wh)o?  (Wh)en?  (Wh)ere?”<br>Kim said, “That’s a (wh)opper, a big fat fib.”<br>Bill said, “(Wh)atever!” -- (wh)ich means: I don’t care.<br>\",\"category\":[\"CD-begin\",\"CD\",\"C\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"W-WR-silent\",\"audio\":\"phoneme-W-WR-silent.mp3\",\"display\":\"wr\",\"word1\":{\"word\":\"wrap\",\"display\":\"<span>wr</span>ap\",\"audio\":\"wrap.mp3\",\"image\":\"wrap.png\"},\"word2\":{\"word\":\"write\",\"display\":\"<span>wr</span>ite\",\"audio\":\"write.mp3\",\"image\":\"write.png\"},\"word3\":{\"word\":\"wrong\",\"display\":\"<span>wr</span>ong\",\"audio\":\"wrong.mp3\",\"image\":\"wrong.png\"},\"quiz-words\":[\"wreck\",\"wrenches\",\"wrinkle\",\"wreath\",\"wriggle\"],\"color\":{\"all\":\"black\",\"2nd\":\"black\"},\"rhyme\":\"A thing that you can give, but must keep<br>Perfectly, or lose it. Don’t dream it’s cheap.<br>Right and (wr)ong in this are precious. (Wr)ite<br>Or speak it truthfully with all your might.<br>Make it with care, or (wr)eck a friendship.<br>If you (wr)iggle out—it’s a guilt trip.<br>So (wr)ap your mind around it: Be true.<br>Each first letter in this rhyme is a clue.\",\"category\":[\"C-silent\",\"C\"],\"grade\":[\"2nd\",\"3rd\"]},{\"id\":\"X-ks-begin\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"excavator\",\"display\":\"e<span>x</span>cavator\",\"audio\":\"excavator.mp3\",\"image\":\"excavator.png\"},\"word2\":{\"word\":\"ax\",\"display\":\"a<span>x</span>\",\"audio\":\"ax.mp3\",\"image\":\"ax.png\"},\"word3\":{\"word\":\"exam\",\"display\":\"e<span>x</span>am\",\"audio\":\"exam.mp3\",\"image\":\"exam.png\"},\"quiz-words\":[\"explore\",\"excellent\",\"exercise\",\"exciting\",\"explode\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"I hate e(x)ams at school, <i>can’t sit<br>Still</i>! Look for some e(x)cuse to e(x)it.<br>Staying quiet’s e(x)tremely tough!<br>Yes, school’s ok to learn some stuff,<br>But not fireworks! Why things e(x)plode!<br>I’d e(x)ert myself if teachers showed<br>How to make firecrackers louder,<br>Could study fuses, stuffing, powder.<br>I e(x)pect I’d study till it hurt<br>To be a big e(x)plosion e(x)pert!\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"X-ks-end\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"fox\",\"display\":\"fo<span>x</span>\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"ax\",\"display\":\"a<span>x</span>\",\"audio\":\"ax.mp3\",\"image\":\"ax.png\"},\"word3\":{\"word\":\"six\",\"display\":\"si<span>x</span>\",\"audio\":\"six.mp3\",\"image\":\"six.png\"},\"quiz-words\":[\"trex\",\"box\",\"fix\",\"lynx\",\"wax\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Dum diddle dee doh,<br>O(x) wore a tuxedo,<br>The dancer boxed with T-Re(x).<br>Jack popped from a mailbo(x),<br>First swung his hand a(x),<br>Next tattled that red fo(x)<br>Had pooped in the sandbo(x)—<br>Then all of them taxied away.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-yuh\",\"audio\":\"phoneme-Y-yuh.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"yellow\",\"display\":\"<span>y</span>ellow\",\"audio\":\"yellow.mp3\",\"image\":\"yellow.png\"},\"word2\":{\"word\":\"yo-yo\",\"display\":\"<span>y</span>oyo\",\"audio\":\"yoyo.mp3\",\"image\":\"yoyo.png\"},\"word3\":{\"word\":\"yawn\",\"display\":\"<span>y</span>awn\",\"audio\":\"yawn.mp3\",\"image\":\"yawn.png\"},\"quiz-words\":[\"yeti\",\"yell\",\"yummy\",\"youngster\",\"yacht\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Baa, baa, black sheep, have (y)ou any wool?<br>(Y)es sir, (y)es sir, three bags full.<br>One for my master, one for my dame,<br>And one for the little boy,<br>Who lives down the lane.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-i\",\"audio\":\"phoneme-Y-i.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"cry\",\"display\":\"cr<span>y</span>\",\"audio\":\"cry.mp3\",\"image\":\"cry.png\"},\"word2\":{\"word\":\"fly\",\"display\":\"fl<span>y</span>\",\"audio\":\"fly.mp3\",\"image\":\"fly.png\"},\"word3\":{\"word\":\"sky\",\"display\":\"sk<span>y</span>\",\"audio\":\"sky.mp3\",\"image\":\"sky.png\"},\"quiz-words\":[\"fry\",\"eye\",\"why\",\"spy\",\"buy\"],\"color\":{\"all\":\"green\",\"vowel\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"Cr(y)baby, cr(y)baby,<br>Cr(y)baby, wh(y)!?<br>Stick your finger in your e(y)e,<br>Then tell your mother it was I?\",\"category\":[\"Y\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-e\",\"audio\":\"phoneme-Y-e.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"baby\",\"display\":\"bab<span>y</span>\",\"audio\":\"baby.mp3\",\"image\":\"baby.png\"},\"word2\":{\"word\":\"candy\",\"display\":\"cand<span>y</span>\",\"audio\":\"candy.mp3\",\"image\":\"candy.png\"},\"word3\":{\"word\":\"lazy\",\"display\":\"laz<span>y</span>\",\"audio\":\"lazy.mp3\",\"image\":\"lazy.png\"},\"quiz-words\":[\"pony\",\"bunny\",\"puppy\",\"kitty\",\"tricky\"],\"color\":{\"all\":\"pink\",\"vowel\":\"green\",\"1st\":\"green\",\"2nd\":\"green\",\"3rd\":\"green\"},\"rhyme\":\"Am(y) likes to be naught(y).<br>Tomm(y)’s  often sleep(y).<br>Bill(y)’s sometimes sill(y).<br>Auntie’s often weep(y).<br>Uncle’s always hungr(y).<br>The bab(y) wets his napp(y).<br>Pupp(y) loves getting dirt(y).<br>Me–I’m just happ(y)!\",\"category\":[\"Y\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Y-ey\",\"audio\":\"phoneme-Y-ey.mp3\",\"display\":\"ey\",\"word1\":{\"word\":\"key\",\"display\":\"k<span>ey</span>\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"word2\":{\"word\":\"money\",\"display\":\"mon<span>ey</span>\",\"audio\":\"money.mp3\",\"image\":\"money.png\"},\"word3\":{\"word\":\"monkey\",\"display\":\"monk<span>ey</span>\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"quiz-words\":[\"donkey\",\"turkey\",\"chimney\",\"hockey\",\"trolley\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"1st\":\"black\",\"2nd\":\"black\",\"3rd\":\"black\"},\"rhyme\":\"The monk(ey) was feeling hungry<br>And wanted to eat some hon(ey),<br>But didn’t have any mon(ey),<br>Then back of the store in the all(ey),<br>The lucky monk(ey) found a k(ey).<br>Inside the nos(ey) monk(ey),<br>Saw a cake, a pie, and cookie,<br>All made with the yummiest hon(ey),<br>And ate till he felt sleepy,<br>Then the boss came and made him flee!\",\"category\":[\"Y\",\"V\"],\"grade\":[\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Z-zzz-begin\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"zebra\",\"display\":\"<span>z</span>ebra\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word2\":{\"word\":\"zipper\",\"display\":\"<span>z</span>ipper\",\"audio\":\"zipper.mp3\",\"image\":\"zipper.png\"},\"word3\":{\"word\":\"zoo\",\"display\":\"<span>z</span>oo\",\"audio\":\"zoo.mp3\",\"image\":\"zoo.png\"},\"quiz-words\":[\"zero\",\"zigzag\",\"zany\",\"zither\",\"zeppelin\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"Buzzing hornets always scare me,<br>When they (z)igzag round my head,<br>(Z)ipping, (z)apping, like some carefree<br>(Z)any clowns!  I’ll (z)oom to bed,<br>Bury myself under the covers,<br>Have (z)ero patience, want them dead!<br>Wise up all you hornet lovers–<br>Switch to spiders instead.\",\"category\":[\"C-begin\",\"C\"],\"grade\":[\"Pre-K\",\"K\",\"1st\",\"2nd\",\"3rd\"]},{\"id\":\"Z-zzz-end\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"quiz\",\"display\":\"qui<span>z</span>\",\"audio\":\"quiz.mp3\",\"image\":\"quiz.png\"},\"word2\":{\"word\":\"prize\",\"display\":\"pri<span>z</span>e\",\"audio\":\"prize.mp3\",\"image\":\"prize.png\"},\"word3\":{\"word\":\"freeze\",\"display\":\"free<span>z</span>e\",\"audio\":\"freeze.mp3\",\"image\":\"freeze.png\"},\"quiz-words\":[\"buzz\",\"doze\",\"blaze\",\"gauze\",\"maize\"],\"color\":{\"all\":\"black\",\"K\":\"black\"},\"rhyme\":\"My sister’s great on every qui(z);<br>She loves jewelry and glit(z).<br>My brother’s a real football whi(z),<br>Loves tackling passers on a blit(z).<br>I’m class clown, love acting nuts,<br>Stumble bumbling like some dit(z),<br>Joking, acting like a klut(z),<br>Making gross sounds with my armpits.<br>Stuffing broccoli inside donuts,<br>Love making kids laugh with my wits.\",\"category\":[\"C-end\",\"C\"],\"grade\":[\"K\",\"1st\",\"2nd\",\"3rd\"]}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jasminvoigtlander/Documents/brainy-phonics-web-team-9356/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map