(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-more-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/more/more.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/more/more.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <app-header2 [hide_back_button]=\"true\" class=\"main\"></app-header2>\n  <div class=\"main\">\n  <ion-avatar>\n    <img  [src]=\"config.user.avatar?fetch.url_storage+config.user.avatar:fetch.url_storage+'users/default.png'\" alt=\"\">\n  </ion-avatar>\n  <p class=\"user_name\">{{config.user.name}}</p>\n  <ion-list padding>\n    <div class=\"more-item bordered\" *ngFor=\"let button of buttons\" (click)=\"openPage(button.page , button.link)\" >\n      <ion-icon *ngIf=\"!button.icon_builtin\" [src]=\"button.icon\" style=\"font-size: 25px;\" mode=\"ios\"></ion-icon>\n      <ion-icon *ngIf=\"button.icon_builtin\" style=\"color: green; --color: green ;    font-size: 35px;\" mode=\"ios\" [name]=\"button.icon\"></ion-icon>\n      <p style=\"width: 100%; font-size: 18px;\n      margin: 10px 20px;\">\n        {{button.name | translate}}\n      </p>\n      <ion-icon mode=\"ios\" *ngIf=\"config.lang!='ar'\" style=\"color: grey;\" name=\"arrow-back\"></ion-icon>\n      <ion-icon mode=\"ios\" *ngIf=\"config.lang=='ar'\" style=\"color: grey;\" name=\"arrow-forward\"></ion-icon>\n    </div>\n  </ion-list>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/more/more.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/more/more.module.ts ***!
  \*******************************************/
/*! exports provided: MorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more.page */ "./src/app/pages/more/more.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");











const routes = [
    {
        path: '',
        component: _more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]
    }
];
let MorePageModule = class MorePageModule {
};
MorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_9__["HttpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
        ],
        declarations: [_more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]]
    })
], MorePageModule);



/***/ }),

/***/ "./src/app/pages/more/more.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/more/more.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0 20px;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nion-avatar {\n  height: 150px;\n  width: 150px;\n  display: block;\n  margin: auto;\n  margin-top: 38px;\n}\n\nion-avatar img {\n  box-shadow: -10px 15px 20px 0px #c3c3c3;\n}\n\nion-avatar.img {\n  box-shadow: -10px 15px 20px 0px #c3c3c3;\n}\n\n.user_name {\n  display: block;\n  margin: auto;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.main {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9tb3JlL21vcmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3JlL21vcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0EsdUNBQUE7QUNHSjs7QURBQTtFQUNRLHVDQUFBO0FDR1I7O0FEREE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vcmUvbW9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9yZS1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6MCAgMjBweCA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzhweDtcbiAgICBpbWd7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTVweCAyMHB4IDBweCAjYzNjM2MzO1xuICAgIH1cbn1cbmlvbi1hdmF0YXIuaW1ne1xuICAgICAgICBib3gtc2hhZG93OiAtMTBweCAxNXB4IDIwcHggMHB4ICNjM2MzYzM7XG4gICAgfVxuLnVzZXJfbmFtZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWlue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyO1xufSIsIi5tb3JlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDM4cHg7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDE1cHggMjBweCAwcHggI2MzYzNjMztcbn1cblxuaW9uLWF2YXRhci5pbWcge1xuICBib3gtc2hhZG93OiAtMTBweCAxNXB4IDIwcHggMHB4ICNjM2MzYzM7XG59XG5cbi51c2VyX25hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/more/more.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/more/more.page.ts ***!
  \*****************************************/
/*! exports provided: MorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePage", function() { return MorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _page_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page/page.page */ "./src/app/pages/page/page.page.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");










let MorePage = class MorePage {
    constructor(navCtrl, alertCtrl, config, share, modalCtrl, fetch, actionSheet, iab, utils) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.share = share;
        this.modalCtrl = modalCtrl;
        this.fetch = fetch;
        this.actionSheet = actionSheet;
        this.iab = iab;
        this.utils = utils;
        this.consts = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"];
        this.messages = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__["AppMessages"];
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__["Assets"];
        this.buttons = [
            {
                name: "profile",
                icon: this.assets.person,
                icon_builtin: false,
                page: 'profile',
            },
            {
                name: "share",
                icon: this.assets.share,
                icon_builtin: false,
                page: 'share'
            },
            {
                name: "settings.contact_us",
                icon: this.assets.call,
                icon_builtin: false,
                page: 'link',
                link: this.consts.CONTACT_US
            },
            {
                name: "settings.rate",
                icon: this.assets.star,
                icon_builtin: false,
                page: 'rate'
            },
            // {
            //   name: "settings.my_subscriptions",
            //   icon: "body",
            //   icon_builtin : true, 
            //   page : 'my_subscriptions'
            // },
            {
                name: "settings.settings",
                icon: "settings",
                icon_builtin: true,
                page: 'settings'
            },
            {
                name: "settings.our_partners",
                icon: this.assets.partners,
                icon_builtin: false,
                page: 'link',
                link: this.consts.OUR_PARTNERS
            },
            {
                name: "logout",
                icon: this.assets.logout,
                icon_builtin: false,
                page: 'logout'
            },
        ];
    }
    ngOnInit() {
    }
    openPage(page, pageObject = null) {
        if (page == 'logout') {
            this.logout();
            return;
        }
        if (page == 'exit') {
            navigator['app'].exitApp();
            return;
        }
        if (page == 'page') {
            this.openPageModule(pageObject.title, this.config.pages[pageObject.type]);
            return;
        }
        if (page == 'link') {
            this.openLink(pageObject);
            return;
        }
        if (page == 'lang') {
            console.log("CHANGE LANF");
            this.changeLanguage();
            return;
        }
        if (page == 'share') {
            console.log("Share LANF");
            this.shareTo();
            return;
        }
        if (page == 'rate') {
            this.rate();
            return;
        }
        if (page)
            this.navCtrl.navigateForward(page);
    }
    shareTo() {
        this.share.shareWithOptions({
            message: this.messages.SHARE_APP_MESSAGE,
            subject: this.consts.SHARE_LINK_ANDROID_PLAYSTORE,
            url: this.consts.SHARE_LINK_ANDROID_PLAYSTORE
        });
    }
    rate() {
        this.iab.create("https://play.google.com/store/apps/details?id=com.slyd4r.worldofplants", "_system");
    }
    openPageModule(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("Will open page", title, content, this.config.pages);
            let modal = yield this.modalCtrl.create({
                component: _page_page_page__WEBPACK_IMPORTED_MODULE_4__["PagePage"],
                componentProps: {
                    title,
                    content
                }
            });
            modal.present();
        });
    }
    openLink(link) {
        console.log("open ", link);
        if (link)
            this.iab.create(link, "_system");
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: "تسجيل اخروج",
                message: "هل متأكد من تسجيل الخروج؟",
                buttons: [
                    {
                        role: "cancle",
                        text: "إلغاء",
                    },
                    {
                        role: "cancle",
                        text: "تسجيل الخروج",
                        handler: () => {
                            localStorage.setItem('token', "");
                            localStorage.clear();
                            this.navCtrl.navigateRoot('login');
                            // this.oneSignal.deleteTag("userId");
                            // this.oneSignal.deleteTag("roleId");
                            this.config.user = [];
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    changeLanguage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.actionSheet.create({
                header: this.utils.translator("selectLang"),
                buttons: [
                    {
                        text: "العربية",
                        handler: () => {
                            this.config.setLanguage("ar"),
                                localStorage.setItem("lang", 'ar');
                            this.setLang();
                        }
                    },
                    {
                        text: "English",
                        handler: () => {
                            this.config.setLanguage("en"),
                                localStorage.setItem("lang", 'en');
                            this.setLang();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    setLang() {
        var lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
        this.config.lang = this.config.translate.getBrowserLang();
        this.config.setLanguage(lang);
    }
};
MorePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"] }
];
MorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more',
        template: __webpack_require__(/*! raw-loader!./more.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/more/more.page.html"),
        styles: [__webpack_require__(/*! ./more.page.scss */ "./src/app/pages/more/more.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]])
], MorePage);



/***/ })

}]);
//# sourceMappingURL=more-more-module-es2015.js.map