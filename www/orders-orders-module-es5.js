(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/orders/orders.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [hide_back_button]=\"true\" [pageName]=\"my_orders\"></app-header2>\n<ion-content class=\"ion-padding\">\n<div class=\"bordered\">\n  <ion-segment \n[(ngModel)]=\"screen\"\ndir=\"rtl\">\n  <ion-segment-button \n  (ionSelect)=\"slide(i)\"\n  *ngFor=\"let cat of categories; index as i\"\n  value=\"{{i}}\">\n    <ion-label *ngIf=\"config.translate.currentLang!='en'\">{{cat.name_ar}}</ion-label>\n    <ion-label *ngIf=\"config.translate.currentLang=='en'\">{{cat.name_en}}</ion-label>\n  </ion-segment-button>\n</ion-segment> \n</div>\n<ion-slides \n#slider\n(ionSlideDidChange)=\"handleChange();\" \n(ionSlidesDidLoad)=\"sliderLoaded()\"\ndir=\"ltr\">\n\n  <ion-slide *ngFor=\"let cat of categories\" dir=\"rtl\">\n   \n    <ion-item text-center *ngIf=\"cat.orders.length==0\">\n      <ion-label text-center>{{\"no_orders\" | translate}}</ion-label>\n    </ion-item>\n    <ion-grid>\n      <div  *ngFor=\"let order of cat.orders\" class=\"order_container\">\n        <ion-row>\n          <ion-col size=\"8\" class=\"flex\">\n            {{\"order_number\" | translate}}#{{order.id}}\n          </ion-col>\n          <ion-col>\n            <div (click)=\"track(order.id)\" style=\"border-radius: 50px; border: 1px solid var(--ion-color-secondary); text-align: center; padding: 0 1px; color: var(--ion-color-secondary);\">\n              {{\"track_order\" | translate}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col  class=\"flex\">\n          <ion-icon style=\"color: grey\" name=\"alarm\"></ion-icon>\n          <p style=\"margin: 0 10px;\">{{order.created_at | date}}</p>\n          <ion-icon style=\"color: grey\" src=\"assets/images/icons/dolar.svg\"></ion-icon>\n          <p style=\"margin: 0 10px;\">{{order.d_price}}</p>\n          </ion-col>\n         \n        </ion-row>\n      </div>\n      \n    </ion-grid>\n  </ion-slide>\n</ion-slides>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-top: 2%;\n}\n\n.status {\n  width: 25%;\n  height: 100%;\n  margin-left: 3%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: white;\n  font-size: 35px;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.order_container {\n  margin-top: 15px;\n  padding: 10px;\n  border: 0.5px #d1d1d15e solid;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUo7O0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cbi5zdGF0dXMge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuaW9uLXNlZ21lbnR7XG4gICAgLy8gYm9yZGVyOiAycHggI2UzZTNlMyBzb2xpZDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXJfY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDAuNXB4ICNkMWQxZDE1ZSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59IiwiaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnN0YXR1cyB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMC41cHggI2QxZDFkMTVlIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var OrdersPage = /** @class */ (function () {
    function OrdersPage(fetch, config, navCtrl) {
        this.fetch = fetch;
        this.config = config;
        this.navCtrl = navCtrl;
        this.orders = [];
        this.categories = [
            {
                id: 0,
                name_en: 'Current',
                name_ar: 'الحالية',
                orders: []
            },
            {
                id: 1,
                name_en: 'Completed',
                name_ar: 'المكتملة',
                orders: []
            },
            {
                id: 2,
                name_en: 'Canceled',
                name_ar: 'الملغاة',
                orders: []
            },
        ];
        this.screen = 0;
    }
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage.prototype.ionViewDidEnter = function () {
        this.getOrders();
        this.screen = 0;
        this.slide(this.categories.length - 1);
    };
    OrdersPage.prototype.sliderLoaded = function () {
        this.toggleSlider(true);
    };
    OrdersPage.prototype.handleChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        _a.screen = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.slide = function (index) {
        console.log("Slide to:", index);
        this.toggleSlider(false);
        this.slider.slideTo(index);
        this.toggleSlider(true);
    };
    OrdersPage.prototype.toggleSlider = function (condition) {
        this.slider.lockSwipeToNext(condition);
        this.slider.lockSwipeToPrev(condition);
    };
    OrdersPage.prototype.getOrders = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('auth/orders', headers)
            .then(function (data) {
            _this.orders = data;
            if (data) {
                _this.categories[0].orders = _this.orders.filter(function (order) { return order.statusCode == 1 || order.statusCode == 2 || order.statusCode == 3; });
                _this.categories[1].orders = _this.orders.filter(function (order) { return order.statusCode == 4; });
                _this.categories[2].orders = _this.orders.filter(function (order) { return order.statusCode == 0; });
            }
        });
    };
    OrdersPage.prototype.orderTotal = function (order) {
        var total = 0;
        for (var _i = 0, _a = order.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.product.price * item.quantity;
        }
        return total;
    };
    OrdersPage.prototype.orderProducts = function (order) {
        var names = "";
        for (var _i = 0, _a = order.items; _i < _a.length; _i++) {
            var item = _a[_i];
            names += " ," + item.product.name;
        }
        return names;
    };
    OrdersPage.prototype.track = function (order_id) {
        this.navCtrl.navigateForward('order/' + order_id);
    };
    OrdersPage.ctorParameters = function () { return [
        { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
    ], OrdersPage.prototype, "slider", void 0);
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/pages/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es5.js.map