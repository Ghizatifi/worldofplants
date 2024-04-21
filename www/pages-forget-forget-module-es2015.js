(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forget-forget-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forget/forget.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forget/forget.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  not implemented\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forget/forget.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/forget/forget.module.ts ***!
  \***********************************************/
/*! exports provided: ForgetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.page */ "./src/app/pages/forget/forget.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]
    }
];
let ForgetPageModule = class ForgetPageModule {
};
ForgetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
    })
], ForgetPageModule);



/***/ }),

/***/ "./src/app/pages/forget/forget.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/forget/forget.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header:after, ion-footer:before {\n  background-image: none;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-back-button, ion-title {\n  color: black !important;\n}\n\nion-footer {\n  height: 70px;\n}\n\nion-footer ion-button {\n  width: 90%;\n  height: 60px;\n  display: block;\n  margin: 0 auto;\n  font-size: 18px;\n  --border-radius: 10px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.container h1 {\n  font-size: 20px;\n  width: 80%;\n  padding-right: 15px;\n}\n\n.container ion-item {\n  width: 90%;\n  margin: 0 auto;\n  --border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FERkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSVI7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNHSjs7QURGSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNJUjs7QURGSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdldC9mb3JnZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjphZnRlciwgaW9uLWZvb3RlcjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBcbn1cbmlvbi1iYWNrLWJ1dHRvbiwgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIH1cbn0iLCJpb24taGVhZGVyOmFmdGVyLCBpb24tZm9vdGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uLCBpb24tdGl0bGUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGhlaWdodDogNzBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmNvbnRhaW5lciBpb24taXRlbSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/forget/forget.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forget/forget.page.ts ***!
  \*********************************************/
/*! exports provided: ForgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPage", function() { return ForgetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgetPage = class ForgetPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget',
        template: __webpack_require__(/*! raw-loader!./forget.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forget/forget.page.html"),
        styles: [__webpack_require__(/*! ./forget.page.scss */ "./src/app/pages/forget/forget.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgetPage);



/***/ })

}]);
//# sourceMappingURL=pages-forget-forget-module-es2015.js.map