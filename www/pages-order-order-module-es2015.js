(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order/order.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order/order.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [pageName]=\"'#'+order_id\"></app-header2>\n<ion-content class=\"ion-padding\" *ngIf=\"orderInfo\">\n  <ion-img src=\"assets/images/map.png\"></ion-img>\n\n  <div class=\"status\">\n    <ion-icon class=\"green_filter\" [src]=\"assets.orders\"></ion-icon>\n    <div class=\"dotted\" style=\"width: 100%;\">{{\"order_status\" | translate}}{{orderInfo.statusCode==0? \"caneled\":\"\" | translate}}</div>\n  </div>\n\n  \n  <div class=\"status_container\">\n    <div class=\"status_content\" *ngFor=\"let status of  order_status\" >\n      <ion-icon style=\"font-size: 25px;\" *ngIf=\"status.id>orderInfo.statusCode\" [src]=\"assets.status_grey\"></ion-icon>\n      <ion-icon style=\"font-size: 25px;\" *ngIf=\"status.id<=orderInfo.statusCode\" [src]=\"assets.status\"></ion-icon>\n      <p class=\"status_p\" [ngClass]=\"status.id>orderInfo.statusCode?'grey': 'black'\">{{status.name_ar}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"status\">\n    <ion-icon class=\"green_filter\" [src]=\"assets.orders\"></ion-icon>\n    <div class=\"dotted\" style=\"width: 100%;\"> {{\"products\" | translate}}</div>\n  </div>\n\n  <div class=\"cart-item bordered\" style=\"margin: 20px;position: relative;\" *ngFor=\"let item of orderInfo.items\">\n   \n    <ion-grid style=\"padding-bottom: 0;\">\n      <ion-row class=\"main-row\">\n        <ion-col size=\"4\" style=\"padding-bottom: 0;\">\n          <img style=\"aspect-ratio: 1;object-fit: cover;\" [src]=\"item.product.image ? fetch.url_storage+ item.product.image : 'assets/images/logo.png'\" (click)=\"openProduct(item)\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"grid-col\">\n          <ion-grid>\n            <ion-row class=\"item-title\" style=\"display: flex; align-items: center; justify-content: space-between;\" (click)=\"openProduct(item)\">\n              <p style=\"font-weight: 700;\" >\n                {{config.translateWord(item.product) | slice:0:12}}\n                <span *ngIf=\"config.translateWord(product).length>12\">...</span>\n              </p>\n              <span style=\"color: var(--ion-color-secondary);font-size: 15px; font-weight: bold;\">\n                {{item.price}} JD \n              </span>\n            </ion-row>\n            <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <span style=\"color: var(--ion-color-primary);font-weight: bold;\">\n                {{item.quantity}}X\n              </span>\n        </div>\n        \n        </ion-grid>\n        </ion-col>\n      </ion-row>\n      <div >\n      </div>\n    </ion-grid>\n  </div>  \n\n\n  <ion-button *ngIf=\"orderInfo.statusCode==1  || orderInfo.statusCode==2 ||  orderInfo.statusCode==3\" (click)=\"cancelOrder()\" fill=\"clear\" color=\"secondary\" style=\"--background:none ; --color: var(--ion-color-secondary)\" style=\"display: block; margin: \n  auto;\" > {{\"cancelOrder\" | translate}}</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/order/order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/pages/order/order.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/pages/order/order.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  z-index: 1;\n}\n\n.green_filter {\n  -webkit-filter: invert(25%) sepia(40%) saturate(2065%) hue-rotate(70deg) brightness(54%) contrast(95%);\n          filter: invert(25%) sepia(40%) saturate(2065%) hue-rotate(70deg) brightness(54%) contrast(95%);\n}\n\n.status {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 20px;\n  font-size: 20px;\n  -webkit-box-align: center;\n          align-items: center;\n  color: green;\n  font-weight: bold;\n}\n\n.status .dotted {\n  width: 100%;\n  margin: 0 10px;\n  border-bottom: 1px green dotted;\n}\n\n.status_p {\n  margin: 0 10px;\n  font-size: 20px;\n}\n\n.status_container {\n  position: relative;\n}\n\n.status_content {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.line {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: -1;\n  right: 12px;\n  border-right: 2px var(--ion-color-secondary) dotted;\n}\n\n.grey {\n  color: grey;\n}\n\n.black {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9vcmRlci9vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUVJLHNHQUFBO1VBQUEsOEZBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDRVI7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgei1pbmRleDogMTtcbn1cbi5ncmVlbl9maWx0ZXJ7XG4gICAgICAgIC8vIGZpbHRlciA6aW52ZXJ0KDMzJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSg3NjUlKSBodWUtcm90YXRlKDYzZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTIlKTtcbiAgICBmaWx0ZXI6aW52ZXJ0KDI1JSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSgyMDY1JSkgaHVlLXJvdGF0ZSg3MGRlZykgYnJpZ2h0bmVzcyg1NCUpIGNvbnRyYXN0KDk1JSk7XG4gICAgICBcbn1cbi5zdGF0dXN7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC5kb3R0ZWR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyZWVuIGRvdHRlZDtcbiAgICB9XG59XG4uc3RhdHVzX3B7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnN0YXR1c19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXR1c19jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5saW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpIGRvdHRlZDtcbn1cbi5ncmV5e1xuICAgIGNvbG9yOiBncmV5O1xufVxuLmJsYWNre1xuICAgIGNvbG9yOiBibGFjaztcbn0iLCIqIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmdyZWVuX2ZpbHRlciB7XG4gIGZpbHRlcjogaW52ZXJ0KDI1JSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSgyMDY1JSkgaHVlLXJvdGF0ZSg3MGRlZykgYnJpZ2h0bmVzcyg1NCUpIGNvbnRyYXN0KDk1JSk7XG59XG5cbi5zdGF0dXMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3RhdHVzIC5kb3R0ZWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBncmVlbiBkb3R0ZWQ7XG59XG5cbi5zdGF0dXNfcCB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zdGF0dXNfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RhdHVzX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpIGRvdHRlZDtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/order/order.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/order/order.page.ts ***!
  \*******************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rate_rate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rate/rate.page */ "./src/app/pages/rate/rate.page.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");










let OrderPage = class OrderPage {
    constructor(route, fetch, config, modalCtrl, popoverController, userService, navCtrl) {
        this.route = route;
        this.fetch = fetch;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_8__["Assets"];
        this.order_status = [
            {
                id: 1,
                name_ar: "تم استلام الطلب",
                name_en: "Order Active ",
            },
            {
                id: 2,
                name_ar: "استلم المندوب الطلب",
                name_en: "Deliver Got the order",
            }, {
                id: 3,
                name_ar: "الطلب في الطريق اليك",
                name_en: "Order On The Way",
            },
            {
                id: 4,
                name_ar: "تم  التوصيل",
                name_en: "Order Completed ",
            }
        ];
        console.log("USER ", this.config.role_id);
        console.log("user id  ", this.config.user);
    }
    ngOnInit() {
        this.order_id = this.route.snapshot.paramMap.get("id");
        this.getOrderInfo();
    }
    getOrderInfo() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('auth/order/track/' + this.order_id, headers)
            .then((res) => {
            console.log("res ", res);
            let data;
            if (res.status) {
                data = res.data;
            }
            else {
                this.fetch.errorToast();
                return;
            }
            console.log("my ordes ", data);
            this.orderInfo = data;
        }, err => { console.log("ERROR ", err); });
    }
    total() {
        let price = 0;
        for (let index in this.orderInfo.items) {
            price += this.orderInfo.items[index].quantity * this.orderInfo.items[index].price;
        }
        return price.toFixed(1);
    }
    discount() {
        if (this.orderInfo.coupon)
            if (this.orderInfo.coupon.value)
                return this.orderInfo.coupon.value;
            else
                return ((this.total() * this.orderInfo.coupon.discount) / 100).toFixed(1);
    }
    all() {
        return ((this.total() - (this.discount() ? this.discount() : 0)) + (this.orderInfo.d_price ? this.orderInfo.d_price : 0)).toFixed(1);
    }
    order_done() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.post('auth/order/complete/' + this.order_id, {}, headers)
                .subscribe((res) => {
                console.log("res ", res);
                let data;
                if (res.status) {
                    data = res.data;
                    this.check_rate();
                }
                else {
                    this.fetch.errorToast();
                    return;
                }
                console.log("my ordes ", data);
                this.orderInfo = data;
            }, err => { console.log("ERROR ", err); });
        });
    }
    goToMap() {
        this.navCtrl.navigateForward(['driver-map'], { queryParams: this.orderInfo });
    }
    check_rate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.get('store/' + this.orderInfo.store_id + '/rate/' + this.order_id, headers)
                .then((res) => {
                console.log("res ", res);
                let data;
                if (res.status) {
                    data = res.data;
                }
                else {
                    this.ratePop();
                    return;
                }
                console.log("my ordes ", data);
                this.orderInfo = data;
            }, err => {
                console.log("ERROR ", err);
                this.ratePop();
            });
        });
    }
    ratePop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = this.popoverController.create({
                component: _rate_rate_page__WEBPACK_IMPORTED_MODULE_7__["RatePage"],
                componentProps: {
                    store_name: 'Ali Store',
                    img: 'assets/imgs/logo.png',
                }
            });
            (yield modal).onDidDismiss().then((data) => {
                console.log('data ', data.data);
                if (data.data && data.data.comment && data.data.stars) {
                    this.rate(data.data.stars, data.data.comment);
                }
                else {
                    this.goHome();
                }
            });
            return (yield modal).present();
        });
    }
    rate(stars, comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let payload = {
                rate: stars, comment: comment
            };
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.post('store/' + 1 + '/rate/add', payload, headers) //1 is the store id
                .subscribe((res) => {
                this.fetch.errorToast("تم التقييم بنجاح");
                console.log("res ", res);
                let data;
                if (res.status) {
                    data = res.data;
                    this.goHome();
                }
                else {
                    this.goHome();
                    //this.fetch.errorToast()
                    //return
                }
                console.log("my ordes ", data);
                this.orderInfo = data;
            }, err => {
                console.log("ERROR ", err);
                this.ratePop();
            });
        });
    }
    goHome() {
        this.navCtrl.navigateRoot("stores");
    }
    cancelOrder() {
        this.navCtrl.navigateForward(["cancel"], { queryParams: { order_id: this.order_id } });
    }
};
OrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order/order.page.html"),
        styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/pages/order/order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-order-module-es2015.js.map