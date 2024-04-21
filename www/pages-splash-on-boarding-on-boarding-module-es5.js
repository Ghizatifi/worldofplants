(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-on-boarding-on-boarding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/splash/on-boarding/on-boarding.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/splash/on-boarding/on-boarding.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <ion-slides class=\"z-index:0\"  #slides  pager=\"true\" >\n    <ion-slide>\n      <div class=\"slide_content\">\n\n        <img style=\"\" src=\"assets/images/drawable-xxxhdpi-icon.png\" alt=\"\">\n\n        <h2> اختيار اللغه</h2>\n        <h2 style=\"margin-top: 0;\">\n          Select the language\n          </h2>\n\n        <ion-radio-group (ionChange)=\"selectlanguage($event)\">\n          <ion-row>\n            <ion-col>\n              <ion-card  >\n                <img style=\"\" src=\"assets/images/arabic.png\" alt=\"\">\n                <ion-item >\n                  <ion-label style=\"text-align: center;font-weight: bold;color: #2B7A0B;\"  class=\"someclass\" >عربي</ion-label>\n                  <ion-radio value=\"ar\"></ion-radio>\n                </ion-item>\n              </ion-card>\n            </ion-col>\n            <ion-col>\n              <ion-card  >\n                <img style=\"\" src=\"assets/images/english.png\" alt=\"\">\n                <ion-item >\n                  <ion-label style=\"text-align: center;font-weight: bold;color: #2B7A0B;\" class=\"someclass\" >English</ion-label>\n                  <ion-radio value=\"en\"></ion-radio>\n                </ion-item>\n              </ion-card>\n            </ion-col>\n            \n          </ion-row>\n        </ion-radio-group>\n\n      \n    \n      </div>\n    </ion-slide>\n    <ion-slide *ngFor=\"let b of boards\">\n      <div class=\"slide_content\">\n        <img class=\"slide-img\" style=\"\" [src]=\"b.image\" alt=\"\">\n        <h1>\n        {{b.title | translate}}\n        </h1>\n    \n        <p>\n        {{b.body | translate}}\n       </p>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n  <div class=\"footer\">\n    <div class=\"footer_content\" >\n      <div (click)=\"skip()\">{{\"skip\" | translate}}</div>\n      <div (click)=\"next()\">\n        <img style=\"width: 50px;\" src=\"assets/images/circle_button.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/splash/on-boarding/on-boarding.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/splash/on-boarding/on-boarding.module.ts ***!
  \****************************************************************/
/*! exports provided: OnBoardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPageModule", function() { return OnBoardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-boarding.page */ "./src/app/pages/splash/on-boarding/on-boarding.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _on_boarding_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingPage"]
    }
];
var OnBoardingPageModule = /** @class */ (function () {
    function OnBoardingPageModule() {
    }
    OnBoardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_on_boarding_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingPage"]]
        })
    ], OnBoardingPageModule);
    return OnBoardingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/splash/on-boarding/on-boarding.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/splash/on-boarding/on-boarding.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide_content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px;\n  margin-bottom: 50px;\n}\n.slide_content .slide-img {\n  height: 200px;\n}\n.slide_content img {\n  margin-top: 60px;\n  margin-bottom: 30px;\n}\n.footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  position: fixed;\n  bottom: 40;\n  padding: 40px;\n  z-index: 1;\n}\n.footer_content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\ncard.active {\n  border: 1px solid #ddd !important;\n}\nion-card img {\n  display: block;\n  width: 35%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9zcGxhc2gvb24tYm9hcmRpbmcvb24tYm9hcmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGxhc2gvb24tYm9hcmRpbmcvb24tYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNFSjtBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0VKO0FEQUE7RUFDSSxpQ0FBQTtBQ0dKO0FEQVE7RUFFSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwbGFzaC9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVfY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAuc2xpZGUtaW1ne1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbn1cbi5zbGlkZV9jb250ZW50IGltZ3tcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDA7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICB6LWluZGV4OiAxO1xuXG59XG4uZm9vdGVyX2NvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5jYXJkLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAiLCIuc2xpZGVfY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNsaWRlX2NvbnRlbnQgLnNsaWRlLWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zbGlkZV9jb250ZW50IGltZyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MDtcbiAgcGFkZGluZzogNDBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmZvb3Rlcl9jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5jYXJkLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/splash/on-boarding/on-boarding.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/splash/on-boarding/on-boarding.page.ts ***!
  \**************************************************************/
/*! exports provided: OnBoardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPage", function() { return OnBoardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");




var OnBoardingPage = /** @class */ (function () {
    function OnBoardingPage(navCtrl, config) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.boards = [
            {
                image: "assets/images/onBoarding0.png",
                title: "onBboarding.page1_title",
                body: "onBboarding.page1_body",
            },
            {
                image: "assets/images/onBoarding1.png",
                title: "onBboarding.page2_title",
                body: "onBboarding.page2_body",
            },
            {
                image: "assets/images/onBoarding2.png",
                title: "onBboarding.page3_title",
                body: "onBboarding.page3_body",
            }
        ];
    }
    OnBoardingPage.prototype.ngOnInit = function () {
    };
    OnBoardingPage.prototype.next = function () {
        var _this = this;
        console.log("next");
        this.slides.isEnd().then(function (istrue) {
            console.log(istrue);
            if (istrue) {
                _this.navCtrl.navigateRoot('login');
            }
            else {
                _this.slides.slideNext();
            }
        }).catch(function (e) { return console.log("error ", e); });
    };
    OnBoardingPage.prototype.back = function () {
        this.slides.slidePrev();
    };
    OnBoardingPage.prototype.skip = function () {
        this.navCtrl.navigateRoot('login');
    };
    OnBoardingPage.prototype.selectlanguage = function (e) {
        console.log(e.detail.value);
        this.config.setLanguage(e.detail.value),
            localStorage.setItem("lang", e.detail.value);
        var lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
        this.config.lang = this.config.translate.getBrowserLang();
        this.config.setLanguage(lang);
    };
    OnBoardingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], OnBoardingPage.prototype, "slides", void 0);
    OnBoardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding',
            template: __webpack_require__(/*! raw-loader!./on-boarding.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/splash/on-boarding/on-boarding.page.html"),
            styles: [__webpack_require__(/*! ./on-boarding.page.scss */ "./src/app/pages/splash/on-boarding/on-boarding.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], OnBoardingPage);
    return OnBoardingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-splash-on-boarding-on-boarding-module-es5.js.map