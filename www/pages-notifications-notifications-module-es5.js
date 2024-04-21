(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notifications/notifications.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 hide_tail=\"true\" pageName=\"notifications\"></app-header2>\n<ion-content padding>\n    <p *ngIf=\"notificationsService.notifications.length==0\">\n      {{\"no_notifications\" | translate}}\n    </p>\n  <ion-list>\n    <div class=\"bordered\" style=\"margin-top: 10px;\" *ngFor=\"let noti of notificationsService.notifications\" (click)=\"open(noti)\">\n          <ion-row padding>\n            \n            <ion-col size=\"2\">\n              <ion-icon class=\"icon\" mode=\"ios\" color=\"secondary\" name=\"notifications-outline\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\">\n              <p class=\"no-margin\" style=\"font-weight: bold;\">\n                {{noti.title}}\n              </p>\n              <p class=\"no-margin\">\n                {{noti.msg}}\n              </p>\n            </ion-col>\n\n          </ion-row>\n          <ion-row *ngIf=\"noti.image!=0 && noti.image\" >\n            <img   [src]=\"fetch.url_storage+noti.image\" />\n          </ion-row>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications/notifications.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 200px;\n  width: 100%;\n  display: block;\n  margin: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.icon {\n  font-size: 20px;\n  background: #fff2f0;\n  padding: 10px;\n  border-radius: 50%;\n  aspect-ratio: 1;\n}\n\n.no-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmljb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYyZjA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xufVxuLm5vLW1hcmdpbntcbiAgICBtYXJnaW46IDAgMTBweDtcbn0iLCJpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMmYwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product.page */ "./src/app/pages/product/product.page.ts");







var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(notificationsService, fetch, iab, navCtrl, modalCtrl) {
        this.notificationsService = notificationsService;
        this.fetch = fetch;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.notificationsService.getNotifications();
        this.notificationsService.readAll();
    };
    NotificationsPage.prototype.open = function (noti) {
        if (noti.link) {
            this.iab.create(noti.link, "_system");
        }
        else if (noti.product_id) {
            this.openProduct({ id: noti.product_id });
        }
        else if (noti.disease_id) {
            this.openDisease(noti.disease_id);
        }
    };
    NotificationsPage.prototype.openDisease = function (id) {
        this.navCtrl.navigateForward(['instruction-details'], { queryParams: { disease_id: id } });
    };
    NotificationsPage.prototype.openProduct = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.modalCtrl.create({
                            component: _product_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"],
                            componentProps: {
                                "product": JSON.stringify(product),
                            }
                        });
                        return [4 /*yield*/, modal];
                    case 1:
                        (_a.sent()).onDidDismiss().then(function (data) {
                            //this.navCtrl.pop()
                        });
                        return [4 /*yield*/, modal];
                    case 2: return [2 /*return*/, (_a.sent()).present()];
                }
            });
        });
    };
    NotificationsPage.ctorParameters = function () { return [
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] },
        { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/pages/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"],
            src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notifications-notifications-module-es5.js.map