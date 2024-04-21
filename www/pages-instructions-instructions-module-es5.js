(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-instructions-instructions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instructions/instructions.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instructions/instructions.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 pageName=\"instructions.instructions\"></app-header2>\n<ion-content>\n  <div class=\"card\" (click)=\"goTo(1)\">\n    <ion-grid style=\"display: flex;align-items: center;\">\n      <div>\n        <img style=\"padding: 10px;    min-width: 65px;\" [src]=assets.vase alt=\"\">\n      </div>\n     <div>\n      <div>\n        <h3 style=\"font: 'ralewaybold'; font-size: 18px !important;color:#118B00; font-weight: bolder;\">\n          {{\"plants_instructions\" | translate}}\n        </h3>\n      </div>\n      <div >\n        <h5 style=\"font: 'ralewaybold'; font-size: 16px !important;color:#118B00; \">\n          {{\"instructions.for_good_plants\" | translate}}\n        </h5>\n      </div>\n     </div>\n     \n    </ion-grid>\n  </div>\n\n  <div class=\"card\" (click)=\"goTo(0)\">\n    <ion-grid style=\"display: flex;align-items: center;\">\n      <div>\n        <img style=\"padding: 10px;    min-width: 65px;\" [src]=assets.vase alt=\"\">\n      </div>\n     <div>\n      <div>\n        <h3 style=\"font: 'ralewaybold'; font-size: 18px !important;color:#118B00; font-weight: bolder;\">\n          {{\"diseases\" | translate}}\n        </h3>\n      </div>\n      <div >\n        <h5 style=\"font: 'ralewaybold'; font-size: 16px !important;color:#118B00; \">\n          {{\"instructions.find_disease\" | translate}}\n        </h5>\n      </div>\n     </div>\n     \n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/instructions/instructions.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/instructions/instructions.module.ts ***!
  \***********************************************************/
/*! exports provided: InstructionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsPageModule", function() { return InstructionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _instructions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions.page */ "./src/app/pages/instructions/instructions.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _instructions_page__WEBPACK_IMPORTED_MODULE_6__["InstructionsPage"]
    }
];
var InstructionsPageModule = /** @class */ (function () {
    function InstructionsPageModule() {
    }
    InstructionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_instructions_page__WEBPACK_IMPORTED_MODULE_6__["InstructionsPage"]]
        })
    ], InstructionsPageModule);
    return InstructionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/instructions/instructions.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/instructions/instructions.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 16px;\n  background: #d1e5dd;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2QxZTVkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59IiwiLmNhcmQge1xuICBtYXJnaW46IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNkMWU1ZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/instructions/instructions.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/instructions/instructions.page.ts ***!
  \*********************************************************/
/*! exports provided: InstructionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsPage", function() { return InstructionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");




var InstructionsPage = /** @class */ (function () {
    function InstructionsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["Assets"];
    }
    InstructionsPage.prototype.ngOnInit = function () {
    };
    InstructionsPage.prototype.goTo = function (is_plants) {
        this.navCtrl.navigateForward(['instruction-list'], { queryParams: { is_plants: is_plants } });
    };
    InstructionsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    InstructionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instructions',
            template: __webpack_require__(/*! raw-loader!./instructions.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instructions/instructions.page.html"),
            styles: [__webpack_require__(/*! ./instructions.page.scss */ "./src/app/pages/instructions/instructions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], InstructionsPage);
    return InstructionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-instructions-instructions-module-es5.js.map