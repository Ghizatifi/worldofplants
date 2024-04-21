(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-cancel-cancel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order/cancel/cancel.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order/cancel/cancel.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n<ion-content padding>\n\n  <div style=\"width: 100%; margin-left: auto; margin-right: auto; margin-top: 20px;\">\n    <ion-img style=\"width: 40%; margin: auto;\" src=\"assets/images/qustion.PNG\"></ion-img>\n  </div>\n\n  <div  style=\"margin: 10px;\">\n    <h5 style=\"font-weight: bold;\">\n      {{\"we_are_sorry\" | translate}}\n    </h5>\n      <div style=\"margin: 0 10px;\">\n          <li>\n         {{ \"order_took_long_to_recieve\" | translate}}\n          </li>\n\n          <li>\n            {{ \"i_need_the_order_in_another_date\" | translate}}\n          </li>\n\n          <li>\n            {{ \"for_other_reason\" | translate}}\n          </li>\n        </div>\n  </div>\n\n  <div class=\"bordered\">\n    <ion-input [(ngModel)]=\"reason\" [placeholder]=\"utils.translator('please_write_reasons_here')\"></ion-input>\n  </div>\n<div  style=\"width: 100%; margin-left: auto; margin-right: auto; margin-top: 20px;\">\n  <ion-button (click)=\"submit()\" [disabled]=\"!reason\" class=\"next-btn\" style=\"display: block; margin: auto;\">\n  \n\n    {{\n      loading\n      ?\n      \"\"\n      :\n      \"send\" | translate\n    }}\n    <ion-spinner *ngIf=\"loading\"></ion-spinner>\n  </ion-button>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/order/cancel/cancel.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/order/cancel/cancel.module.ts ***!
  \*****************************************************/
/*! exports provided: CancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageModule", function() { return CancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel.page */ "./src/app/pages/order/cancel/cancel.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]
    }
];
var CancelPageModule = /** @class */ (function () {
    function CancelPageModule() {
    }
    CancelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]]
        })
    ], CancelPageModule);
    return CancelPageModule;
}());



/***/ }),

/***/ "./src/app/pages/order/cancel/cancel.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/order/cancel/cancel.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL2NhbmNlbC9jYW5jZWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/order/cancel/cancel.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/order/cancel/cancel.page.ts ***!
  \***************************************************/
/*! exports provided: CancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPage", function() { return CancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");









var CancelPage = /** @class */ (function () {
    function CancelPage(userService, fetch, config, utils, route, navCtrl) {
        this.userService = userService;
        this.fetch = fetch;
        this.config = config;
        this.utils = utils;
        this.route = route;
        this.navCtrl = navCtrl;
        this.loading = false;
    }
    CancelPage.prototype.ngOnInit = function () {
        var _this = this;
        this.config.token = localStorage.getItem("token");
        this.route.queryParamMap.subscribe(function (res) {
            console.log("params ", res);
            _this.order_id = res.params.order_id;
        });
    };
    CancelPage.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        var lnk = "auth/order/cancel";
        var payload = {
            order_id: this.order_id,
            reason: this.reason
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.post(lnk, payload, headers).subscribe(function (res) {
            _this.loading = false;
            if (res.status) {
                _this.utils.toastTranslate('success');
                _this.navCtrl.navigateRoot("tabs/home");
            }
        }, function (er) { _this.loading = false; });
    };
    CancelPage.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
        { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    CancelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cancel',
            template: __webpack_require__(/*! raw-loader!./cancel.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order/cancel/cancel.page.html"),
            styles: [__webpack_require__(/*! ./cancel.page.scss */ "./src/app/pages/order/cancel/cancel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], CancelPage);
    return CancelPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-order-cancel-cancel-module-es5.js.map