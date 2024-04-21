(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-more-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/more/settings/settings.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/more/settings/settings.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [hide_back_button]=\"false\" pageName=\"settings.settings\" class=\"main\"></app-header2>\n\n\n<ion-content>\n  <div class=\"main\">\n <ion-list padding>\n    <div class=\"more-item bordered\" *ngFor=\"let button of buttons\" (click)=\"openPage(button.page , button.link)\" >\n      <ion-icon *ngIf=\"!button.icon_builtin\" [src]=\"button.icon\" style=\"font-size: 25px;\" mode=\"ios\"></ion-icon>\n      <ion-icon *ngIf=\"button.icon_builtin\" style=\"color: green; --color: green ;    font-size: 35px;\" mode=\"ios\" [name]=\"button.icon\"></ion-icon>\n      <p style=\"width: 100%; font-size: 18px;\n      margin: 10px 20px;\">\n        {{button.name | translate}}\n      </p>\n      <ion-icon mode=\"ios\" *ngIf=\"config.lang!='ar'\" style=\"color: grey;\" name=\"arrow-back\"></ion-icon>\n      <ion-icon mode=\"ios\" *ngIf=\"config.lang=='ar'\" style=\"color: grey;\" name=\"arrow-forward\"></ion-icon>\n    </div>\n  </ion-list>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/more/settings/settings.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/more/settings/settings.module.ts ***!
  \********************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/more/settings/settings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/more/settings/settings.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/more/settings/settings.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0 20px;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nion-avatar {\n  height: 150px;\n  width: 150px;\n  display: block;\n  margin: auto;\n  margin-top: 38px;\n}\n\nion-avatar img {\n  box-shadow: -10px 15px 20px 0px #c3c3c3;\n}\n\nion-avatar.img {\n  box-shadow: -10px 15px 20px 0px #c3c3c3;\n}\n\n.user_name {\n  display: block;\n  margin: auto;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9tb3JlL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9yZS9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEREk7RUFDQSx1Q0FBQTtBQ0dKOztBREFBO0VBQ1EsdUNBQUE7QUNHUjs7QUREQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vcmUvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vcmUtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOjAgIDIwcHggO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgaW1ne1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDE1cHggMjBweCAwcHggI2MzYzNjMztcbiAgICB9XG59XG5pb24tYXZhdGFyLmltZ3tcbiAgICAgICAgYm94LXNoYWRvdzogLTEwcHggMTVweCAyMHB4IDBweCAjYzNjM2MzO1xuICAgIH1cbi51c2VyX25hbWV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLm1vcmUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMzhweDtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYm94LXNoYWRvdzogLTEwcHggMTVweCAyMHB4IDBweCAjYzNjM2MzO1xufVxuXG5pb24tYXZhdGFyLmltZyB7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDE1cHggMjBweCAwcHggI2MzYzNjMztcbn1cblxuLnVzZXJfbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/more/settings/settings.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/more/settings/settings.page.ts ***!
  \******************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");








var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, utils, actionSheet, config, iab, fetch) {
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.actionSheet = actionSheet;
        this.config = config;
        this.iab = iab;
        this.fetch = fetch;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__["Assets"];
        this.consts = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"];
        this.buttons = [
            {
                name: "settings.language",
                icon: this.assets.language,
                icon_builtin: false,
                page: 'lang'
            },
            // {
            //   name: "settings.currency",
            //   icon: this.assets.currency,
            //   icon_builtin : false, 
            //   page : 'currency'
            // },
            {
                name: "settings.who_we_are",
                icon: "information-circle-outline",
                icon_builtin: true,
                page: 'who_we_are',
                link: this.consts.WHO_WE_ARE
            },
            {
                name: "settings.delivery_policies",
                icon: "paper",
                icon_builtin: true,
                page: 'policies',
                link: this.consts.POILICY_DELIVERY
            },
            {
                name: "settings.subscription_policies",
                icon: "paper",
                icon_builtin: true,
                page: 'policies',
                link: this.consts.POILICY_SUBSCRIBE
            },
            {
                name: "settings.returns_polices",
                icon: "paper",
                icon_builtin: true,
                page: 'policies',
                link: this.consts.POILICY_RETURN
            },
            {
                name: "settings.information_privacy",
                icon: "paper",
                icon_builtin: true,
                page: 'policies',
                link: this.consts.PLOICY_PRIVACY_LINK
            },
            {
                name: "settings.terms_and_conditions",
                icon: "paper",
                icon_builtin: true,
                page: 'policies',
                link: this.consts.TERMS_AND_CONDITIONS
            },
        ];
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.openPage = function (page, link) {
        if (link) {
            console.log("CHANGE LANF");
            this.openLink(link);
            return;
        }
        if (page == 'lang') {
            console.log("CHANGE LANF");
            this.changeLanguage();
            return;
        }
        if (page == 'currency') {
            this.utils.toastTranslate("under_developent");
            return;
        }
        if (page)
            this.navCtrl.navigateForward([page], { queryParams: { page_name: page } });
    };
    SettingsPage.prototype.openLink = function (link) {
        if (link)
            this.iab.create(link, "_system");
    };
    SettingsPage.prototype.changeLanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logout, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logout = this.utils.translator("selectLang");
                        return [4 /*yield*/, this.actionSheet.create({
                                header: logout,
                                buttons: [
                                    {
                                        text: "العربية",
                                        handler: function () {
                                            _this.config.setLanguage("ar"),
                                                localStorage.setItem("lang", 'ar');
                                            _this.setLang();
                                        }
                                    },
                                    {
                                        text: "English",
                                        handler: function () {
                                            _this.config.setLanguage("en"),
                                                localStorage.setItem("lang", 'en');
                                            _this.setLang();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.setLang = function () {
        var lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
        this.config.lang = this.config.translate.getBrowserLang();
        this.config.setLanguage(lang);
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
        { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/more/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/more/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-more-settings-settings-module-es5.js.map