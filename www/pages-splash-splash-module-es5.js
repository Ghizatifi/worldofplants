(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-splash-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/splash/splash.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <img style=\"position: absolute;\n  top: 0;\n  bottom: 0;left: 0;\n    right: 0;\n  width:50%;\n  margin: auto;\" src=\"assets/images/logo.png\" alt=\"\">\n  <img style=\"position: fixed;bottom: 0;\" src=\"assets/images/splash_background.png\" alt=\"\">\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/splash/splash.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "./src/app/pages/splash/splash.page.ts");







var routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]
    }
];
var SplashPageModule = /** @class */ (function () {
    function SplashPageModule() {
    }
    SplashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
        })
    ], SplashPageModule);
    return SplashPageModule;
}());



/***/ }),

/***/ "./src/app/pages/splash/splash.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwbGFzaC9zcGxhc2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/splash/splash.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









var SplashPage = /** @class */ (function () {
    function SplashPage(storage, navCtrl, config, fetch, userService, notificationsService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.config = config;
        this.fetch = fetch;
        this.userService = userService;
        this.notificationsService = notificationsService;
    }
    SplashPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lang;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                lang = localStorage.getItem("lang");
                this.config.translate.setDefaultLang(lang ? lang : 'ar');
                // when publishin comment this
                this.checkLogin();
                return [2 /*return*/];
            });
        });
    };
    SplashPage.prototype.checkLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SplashPage.prototype.loginWithToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var header, is_jordan;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
                        return [4 /*yield*/, this.fetch.get('auth/user/account', header)
                                .then(function (res) {
                                console.log("account res ", res);
                                var data;
                                if (res) {
                                    data = res.data;
                                }
                                else {
                                    _this.fetch.errorToast();
                                    return;
                                }
                                _this.config.all_user_data = data;
                                _this.config.user = data;
                                localStorage.setItem('user', JSON.stringify(data));
                                _this.userService.user = data;
                                console.log("user ", data);
                            }, function (err) { console.log("ERR ", err); })];
                    case 1:
                        _a.sent();
                        console.log("step... ");
                        this.config.token = localStorage.getItem('token');
                        is_jordan = localStorage.getItem('is_jordan');
                        console.log("SIZ JPTDA ", is_jordan);
                        // make always is jordan
                        this.config.is_jordan = true;
                        // if(is_jordan==1 || is_jordan=='1' ){
                        //   console.log("JORDAN TRUE")
                        //   this.config.is_jordan = true
                        // }else{
                        //   console.log("JORDAN false")
                        //   this.config.is_jordan = false
                        // }
                        this.notificationsService.getNotifications();
                        this.navCtrl.navigateRoot('tabs/home');
                        return [2 /*return*/];
                }
            });
        });
    };
    SplashPage.ctorParameters = function () { return [
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }
    ]; };
    SplashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! raw-loader!./splash.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/splash/splash.page.html"),
            styles: [__webpack_require__(/*! ./splash.page.scss */ "./src/app/pages/splash/splash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]])
    ], SplashPage);
    return SplashPage;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.local = localStorage;
    }
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-splash-splash-module-es5.js.map