(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2></app-header2>\n\n<ion-content>\n\n  <div style=\"padding: 20px;\">\n    <div class=\"borderer\" style=\"display: flex;\">\n      <ion-img class=\"box_image\" src=\"assets/images/map.png\"></ion-img>\n      <div *ngIf=\"config.user.area_id==null || config.user.area==null\" style=\"display: flex; flex-direction: column; justify-content: space-between;margin: 0 20px;\">\n        <p style=\"font-size: 18px;\">\n          \n          {{\"select_address\" | translate}}\n\n        </p>\n        <p style=\"font-size: 18px;\" (click)=\"addAddress()\" style=\"color: green; text-decoration: underline;\">\n          {{\"add_address\" | translate}}\n        </p>\n      </div>\n\n      <div *ngIf=\"config.user.area_id!=null || config.user.area!=null\" style=\"display: flex; flex-direction: column; justify-content: space-between;margin: 0 20px;\">\n        <p style=\"font-size: 18px;margin: 0;\">\n          {{config.user.area.city.name}}\n        </p>\n        <p style=\"font-size: 18px;margin: 0;\">\n          {{config.user.area.name}}\n        </p>\n        <p *ngIf=\"config.user.address\" style=\"font-size: 18px;margin: 0;\">\n          {{config.user.address}}\n        </p>\n        <p style=\"font-size: 18px;margin: 0;\" (click)=\"addAddress()\" style=\"color: green; text-decoration: underline;\">\n          {{\"edit\" | translate}}\n        </p>\n      </div>\n    </div>\n    <p style=\"font-size: 18px;font-weight: bold;\">  {{\"payment_ways\" | translate}}</p>\n    <ion-list>\n      <div class=\"bordered\" style=\"display: flex; justify-content: space-between; align-items: center;padding: 0 20px;\">\n        <ion-icon style=\"width: 60px; height: 50px;\" [src]=\"assets.visa\"></ion-icon>\n        <ion-label style=\"color: grey;\"> VISA </ion-label>\n        <ion-checkbox disabled=\"true\" mode=\"ios\"  slot=\"start\"></ion-checkbox>\n      </div>\n\n      <ion-note >\n        <ion-icon name=\"ios-alert\" color=\"warning\"></ion-icon>\n        {{\"no_available_now\" | translate}}\n      </ion-note>\n\n\n      <div class=\"bordered\" style=\"display: flex; justify-content: space-between; align-items: center;padding: 0 20px;\">\n        <ion-icon style=\"margin: 5px; font-size: 35px;\" [src]=\"assets.cash\"></ion-icon>\n        <ion-label> {{\"pay_cash\" | translate}} </ion-label>\n        <ion-checkbox  mode=\"ios\" [(ngModel)]=\"paymentSelected\" slot=\"start\"></ion-checkbox>\n      </div>\n    </ion-list>\n  <div lines='none' class=\"coupon-item\">\n    <!-- <ion-label *ngIf=\"!coupon\">كوبون:</ion-label> -->\n    <ion-input style=\"margin: 0 20px;\" [(ngModel)]=\"couponText\" type='text' placeholder=\"ادخل رمز الكوبون\" *ngIf=\"!coupon\"></ion-input>\n    <ion-button fill=\"solid\" style=\"--border-radius: 50px; width: 106px; height: 40px; margin: 6px;\" color=\"primary\" [disabled]=\"!couponText || usingCoupon\" (click)=\"testCoupon()\">\n      {{usingCoupon ? \"\" : \"apply\" | translate}}\n      <ion-spinner *ngIf=\"usingCoupon\"></ion-spinner>\n    </ion-button>\n    <ion-buttons slot=\"end\" *ngIf=\"coupon\" class=\"coupon\">\n      <ion-button>\n        {{coupon.code}}\n        {{\n          coupon.discount ?\n          \"discount\"\n          :\n          \"\"\n          | translate}}\n        {{\n          coupon.value ?\n          coupon.value\n          :\n          coupon.discount\n        }}\n\n        {{\n          coupon.value ?\n          \"JD\"\n          :\n          \"\"\n        }}\n      </ion-button>\n      <ion-button buttonType=\"icon-only\" (click)=\"deleteCoupon()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  \n  <div class=\"bottom_container\">\n    <div class=\"inline\">\n      <p>\n       {{\"total\" | translate}}\n      </p>\n      <div class=\"dots\">\n      </div>\n      <p>\n        {{total()+' JD '}}\n      </p>\n    </div>\n    <div class=\"inline\">\n      <p>\n        {{\"shipping_cost\" | translate}}\n      </p>\n      <div class=\"dots\">\n      </div>\n      <p>\n        {{\n          d_price || d_price == 0 ?\n          d_price + \" JD\"\n          :\n          \"\"\n        }}\n      </p>\n      <ion-spinner [hidden]=\"d_price || d_price == 0\"></ion-spinner>\n      </div>\n  \n      <div class=\"inline\">\n        <p>\n          {{\"discount\" | translate}}\n        </p>\n        <div class=\"dots\">\n        </div>\n        <p>\n          {{discount()}} JD\n        </p>\n        </div>\n  </div>\n  \n\n</div>\n  <div class=\"inline\" style=\"color: green ; font-weight: bold;padding: 0 20px;background: #108b003f;\">\n    <p>\n      {{\"total_all\" | translate}}\n    </p>\n    <p>\n      {{all()+' JD '}}\n    </p>\n  </div>\n  \n</ion-content>\n<ion-footer style=\"display: flex;justify-content: center;\">\n  \n  <ion-button class=\"next-btn\" color=\"primary\"\n  [disabled]=\"loading || (!paymentSelected) \" (click)=\"placeOrder()\">\n    {{\n      loading ? \n      \"\"\n      :\n      \"total_all\" \n      | translate\n    }}\n    <ion-spinner *ngIf=\"loading\"></ion-spinner>\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/pages/checkout/checkout.page.ts");
/* harmony import */ var _services_key_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/key.pipe.module */ "./src/app/services/key.pipe.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");










const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _services_key_pipe_module__WEBPACK_IMPORTED_MODULE_7__["KeysPipeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom_container {\n  padding: 20px;\n}\n\n.inline {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.dots {\n  border: 0.1px dotted gray;\n  width: 65%;\n}\n\n.coupon-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50px;\n  border: 2px solid #d5d5d5;\n  background: #d5dccc2e;\n}\n\nion-img.box_image {\n  width: 100px;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: inherit;\n     object-position: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwyQkFBQTtLQUFBLHdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tX2NvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmlubGluZXtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb3Rze1xuICAgIGJvcmRlcjogMC4xcHggZG90dGVkIGdyYXk7XG4gICAgd2lkdGg6IDY1JTtcbn1cbi5jb3Vwb24taXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDVkNWQ1O1xuICAgIGJhY2tncm91bmQ6ICNkNWRjY2MyZTtcbn1cblxuaW9uLWltZy5ib3hfaW1hZ2V7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbmhlcml0O1xufSIsIi5ib3R0b21fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmlubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRvdHMge1xuICBib3JkZXI6IDAuMXB4IGRvdHRlZCBncmF5O1xuICB3aWR0aDogNjUlO1xufVxuXG4uY291cG9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDVkNWQ1O1xuICBiYWNrZ3JvdW5kOiAjZDVkY2NjMmU7XG59XG5cbmlvbi1pbWcuYm94X2ltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-address/edit-address.page */ "./src/app/pages/edit-address/edit-address.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");









let CheckoutPage = class CheckoutPage {
    constructor(fetch, config, modalCtrl, alertCtrl, navCtrl, utils) {
        this.fetch = fetch;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__["Assets"];
        this.paymentSelected = true;
        this.selectedAddress = [];
        this.loading = false;
        this.usingCoupon = false;
    }
    ngOnInit() {
        this.getAddresses();
    }
    getAddresses() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.config);
            if (this.config.user.area) {
                this.address = {
                    area_id: this.config.user.area.id ? this.config.user.area.id : this.config.user.area_id
                };
            }
            else if (this.config.user.area_id) {
                this.address = {
                    area_id: this.config.user.area_id
                };
            }
            else {
                this.fetch.errorToast("عليك إضافة عنوان");
            }
            this.getDeliveryCost();
        });
    }
    addAddress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_5__["EditAddressPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data) {
                    this.getAddresses();
                }
            });
        });
    }
    testCoupon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.usingCoupon = true;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.post('auth/coupon/use/' + this.couponText, null, headers)
                .subscribe((coupon) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("RES ", coupon);
                this.usingCoupon = false;
                if (coupon.id) {
                    this.utils.toastTranslate("coupon_added");
                    this.coupon = coupon;
                }
                else {
                    this.couponText = "";
                    this.utils.toast(coupon.error.toString());
                }
            }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("ERRR ", error);
                this.usingCoupon = false;
                this.couponText = "";
                this.utils.toastTranslate("coupon_not_correct");
            }));
        });
    }
    total() {
        let price = 0;
        for (let index in this.config.cart) {
            price += this.config.cart[index].quantity * this.config.cart[index].total_price;
        }
        return price;
    }
    discount() {
        if (this.coupon)
            if (this.coupon.value)
                return this.coupon.value;
            else
                return (this.total() * this.coupon.discount) / 100;
    }
    all() {
        return (this.total() - (this.discount() ? this.discount() : 0) + (this.d_price ? Number(this.d_price) : 0));
    }
    deleteCoupon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.utils.translator("cancel_coupon"),
                message: this.utils.translator("are_you_sure_cancel_coupon"),
                buttons: [
                    {
                        role: "cancle",
                        text: this.utils.translator("cancel"),
                    },
                    {
                        role: "cancle",
                        text: this.utils.translator("yes"),
                        handler: () => {
                            this.coupon = "";
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    placeOrder() {
        if (!this.address || !this.config.user) {
            this.fetch.errorToast("should_select_address");
            return;
        }
        let date = new Date();
        let date_2 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':00';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        let params = new FormData();
        params.append('area_id', this.config.user.area_id);
        params.append('address', this.config.user.address);
        params.append('coupon_id', this.coupon ? this.coupon.id : 0);
        params.append('delivery_date', date_2);
        params.append('d_price', this.d_price.toString());
        params.append('lan', this.config.user.lan);
        params.append('lat', this.config.user.lat);
        let i = 0;
        let items = [];
        for (let index in this.config.cart) {
            let item = {
                product_id: this.config.cart[index].id,
                product: { id: this.config.cart[index].id },
                quantity: this.config.cart[index].quantity
            };
            console.log(JSON.stringify(item));
            params.append("items[" + i + "]", JSON.stringify(item));
            i++;
        }
        //params.append("items", items.toString())//JSON.stringify(items));
        this.loading = true;
        this.fetch.post('auth/orders/place', params, headers)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("success ", data);
            // console.log(data);
            this.loading = false;
            this.utils.toastTranslate("orded_created_success");
            this.config.emptyCart();
            this.navCtrl.navigateRoot('order-success');
        }), err => {
            this.loading = false;
            console.log("ERRRR ", err);
        });
    }
    back() {
        this.navCtrl.back();
    }
    getDeliveryCost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.address);
            //  this.utils.loadingPresent()
            let link = 'auth/area/cost/' + this.address.area_id;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.get(link, headers)
                .then((res) => {
                let data;
                console.log("RES ", res);
                this.utils.loadingDismiss();
                if (res.status) {
                    data = res.data;
                    this.d_price = data.cost;
                }
                else {
                    this.fetch.errorToast(res.msg);
                    return;
                }
            }, err => {
                this.utils.loadingDismiss();
            });
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.page.html"),
        styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/pages/checkout/checkout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]])
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module-es2015.js.map