(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [pageName]=\"pageName\" [hide_cart]=\"true\"></app-header2>\n\n<ion-content>\n  <ion-item *ngIf=\"config.getCartSize()==0\" text-center>\n    <ion-label>{{\"cart_empty\" | translate}} </ion-label>\n  </ion-item>\n  <div class=\"cart-item bordered\" style=\"margin: 20px;position: relative;\" *ngFor=\"let item of config.cart\">\n    <ion-icon (click)=\"config.remove_to_Cart(item)\" style=\"font-size: 35px; position: absolute; z-index: 1; top: -15px; right: -10px;\" [src]=\"assets.close\"></ion-icon>\n    <ion-grid style=\"padding-bottom: 0;\">\n      <ion-row class=\"main-row\">\n        <ion-col size=\"4\" style=\"padding-bottom: 0;\">\n          <img [src]=\"item.image ? fetch.url_storage+ item.image : 'assets/images/logo.png'\" (click)=\"openProduct(item)\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"grid-col\">\n          <ion-grid>\n            <ion-row class=\"item-title\"  (click)=\"openProduct(item)\">\n              <p style=\"font-weight: 700;\" >\n                {{config.translateWord(item) | slice:0:12}}\n                <span *ngIf=\"config.translateWord(product).length>12\">...</span>\n              </p>\n            </ion-row>\n            <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <span>\n                {{item.total_price}} JD \n              </span>\n            <!-- <ion-row *ngIf=\"item.description\" class=\"item-price\">\n              <p [innerHtml]=\"item.description\"></p>\n          </ion-row> -->\n          <ion-grid class=\"counter\" style=\"position: absolute;left: 0;\">\n            <ion-row no-margin  no-padding>\n              <ion-col size=\"4\" >\n                <div class=\"counter_button delete\" (click)=\"config.remove_to_Cart(item)\" >\n                  <ion-icon name=\"remove\"></ion-icon>\n                </div>\n              </ion-col>\n  \n              <ion-col size=\"4\" style=\"text-align: center;\">  {{config.getItemQuaintyFromId(item.id)}}\n              </ion-col>\n  \n              <ion-col size=\"4\" (click)=\"config.add_to_Cart(item)\">\n                <div  class=\"counter_button add\"  >\n                  <ion-icon name=\"add\"></ion-icon>\n                </div>\n              </ion-col>\n             \n            </ion-row>\n          </ion-grid> \n        </div>\n        \n        </ion-grid>\n        </ion-col>\n      </ion-row>\n      <div >\n      </div>\n    \n    </ion-grid>\n  </div>  \n\n  <div  *ngIf=\"config.getCartSize()!=0\"  class=\"bottom_container\">\n  <div class=\"inline\">\n    <p>\n      {{\"total\" | translate}}\n    </p>\n    <div class=\"dots\">\n    </div>\n    <p>\n      {{total()+' JD '}}\n    </p>\n  </div>\n \n</div>\n\n\n<div  *ngIf=\"config.getCartSize()!=0\"  class=\"inline\" style=\"color: green ; font-weight: bold;padding: 0 20px;background: #108b003f;\">\n  <p>\n    {{\"total_all\" | translate}}\n  </p>\n  <p>\n    {{total()+' JD '}}\n  </p>\n</div>\n</ion-content>\n\n\n<ion-footer *ngIf=\"haveMoreThanOneItem()\">\n  <div style=\"display: flex; justify-content: center;\">\n  <ion-button rounded class=\"next-btn\" (click)=\"goToCheckOut()\"  >\n    {{\"next\"  | translate}}\n\n  </ion-button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");
/* harmony import */ var _services_key_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/key.pipe.module */ "./src/app/services/key.pipe.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");










const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _services_key_pipe_module__WEBPACK_IMPORTED_MODULE_7__["KeysPipeModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom_container {\n  padding: 20px;\n}\n\n.inline {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.dots {\n  border: 0.1px dotted gray;\n  width: 65%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b21fY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uaW5saW5le1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvdHN7XG4gICAgYm9yZGVyOiAwLjFweCBkb3R0ZWQgZ3JheTtcbiAgICB3aWR0aDogNjUlO1xufSIsIi5ib3R0b21fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmlubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRvdHMge1xuICBib3JkZXI6IDAuMXB4IGRvdHRlZCBncmF5O1xuICB3aWR0aDogNjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _product_product_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.page */ "./src/app/pages/product/product.page.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");








let CartPage = class CartPage {
    constructor(navCtrl, config, fetch, modalCtr, utils) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.fetch = fetch;
        this.modalCtr = modalCtr;
        this.utils = utils;
        this.products = [];
        this.pageName = '';
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_6__["Assets"];
        console.log(config.cart);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageName = this.utils.translator('cart');
        });
    }
    goToCheckOut() {
        this.navCtrl.navigateForward('checkout');
    }
    haveMoreThanOneItem() {
        return Object.keys(this.config.cart).length > 0;
    }
    total() {
        let total = 0;
        for (let item of this.config.cart) {
            total += (item.quantity * item.total_price);
        }
        return total;
    }
    openProduct(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = this.modalCtr.create({
                component: _product_product_page__WEBPACK_IMPORTED_MODULE_5__["ProductPage"],
                componentProps: {
                    "product": JSON.stringify(product),
                    "products": JSON.stringify(this.products),
                }
            });
            (yield modal).onDidDismiss().then((data) => {
                //this.navCtrl.pop()
            });
            return (yield modal).present();
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es2015.js.map