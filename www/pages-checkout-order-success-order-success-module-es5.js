(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-order-success-order-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/order-success/order-success.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkout/order-success/order-success.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n<div style=\"height: 100%; padding: 20px;display: flex ; flex-direction: column;justify-content: center; align-items: center;\">\n  <ion-icon style=\"width: 100%; height: 158px; margin: 40px 0;\" [src]=\"assets.success_mark\"></ion-icon>\n  <p style=\"font-size: 20px; font-weight: bold;\">\n    تم ارسال طلبك بنجاح\n  </p>\n  <p style=\"font-size: 18px;text-align: center;\">\n    تم ارسال لطلبك بنجاح قم بتتبع طلبك من خلال قائمة طلباتي\n  </p>\n\n  <div style=\"margin-top: 10px; font-size: 20px;\"></div>\n  <ion-button (click)=\"track_order()\" class=\"next-btn\">تتبع الطلب</ion-button>\n  <ion-button (click)=\"home()\" class=\"clear-btn\"> الرئيسية</ion-button>\n\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/checkout/order-success/order-success.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/checkout/order-success/order-success.module.ts ***!
  \**********************************************************************/
/*! exports provided: OrderSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageModule", function() { return OrderSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-success.page */ "./src/app/pages/checkout/order-success/order-success.page.ts");







var routes = [
    {
        path: '',
        component: _order_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderSuccessPage"]
    }
];
var OrderSuccessPageModule = /** @class */ (function () {
    function OrderSuccessPageModule() {
    }
    OrderSuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderSuccessPage"]]
        })
    ], OrderSuccessPageModule);
    return OrderSuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkout/order-success/order-success.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/checkout/order-success/order-success.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/checkout/order-success/order-success.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/checkout/order-success/order-success.page.ts ***!
  \********************************************************************/
/*! exports provided: OrderSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPage", function() { return OrderSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");




var OrderSuccessPage = /** @class */ (function () {
    function OrderSuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["Assets"];
    }
    OrderSuccessPage.prototype.ngOnInit = function () {
    };
    OrderSuccessPage.prototype.track_order = function () {
        this.navCtrl.navigateRoot("tabs/orders");
    };
    OrderSuccessPage.prototype.home = function () {
        this.navCtrl.navigateRoot("tabs/home");
    };
    OrderSuccessPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    OrderSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! raw-loader!./order-success.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/order-success/order-success.page.html"),
            styles: [__webpack_require__(/*! ./order-success.page.scss */ "./src/app/pages/checkout/order-success/order-success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], OrderSuccessPage);
    return OrderSuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkout-order-success-order-success-module-es5.js.map