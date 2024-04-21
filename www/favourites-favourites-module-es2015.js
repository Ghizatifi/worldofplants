(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourites-favourites-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/favourites/favourites.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/favourites/favourites.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 pageName=\"fev\"></app-header2>\n\n<ion-content>\n  <ion-item *ngIf=\"config.getFavSize()==0\" text-center>\n    <ion-label>{{\"noFav\" | translate}}</ion-label>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col size=\"6\"  *ngFor=\"let item of config.favourite\" class='flex'>\n        <app-product-card  [product]=\"item\"></app-product-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/favourites/favourites.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/favourites/favourites.module.ts ***!
  \*******************************************************/
/*! exports provided: FavouritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPageModule", function() { return FavouritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourites.page */ "./src/app/pages/favourites/favourites.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_6__["FavouritesPage"]
    }
];
let FavouritesPageModule = class FavouritesPageModule {
};
FavouritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_6__["FavouritesPage"]]
    })
], FavouritesPageModule);



/***/ }),

/***/ "./src/app/pages/favourites/favourites.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/favourites/favourites.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-item {\n  --background: #f9f7f6;\n}\n\n.cart-item {\n  --padding-end: 20px;\n}\n\n.grid-col .item-title {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  padding: 0 16px 0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  overflow: hidden;\n  height: 36px;\n  margin-bottom: 6px;\n}\n\n.grid-col .item-price {\n  padding-right: 16px;\n  margin-bottom: 10px;\n}\n\n.grid-col .buttons-grid {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.grid-col .buttons-grid .add-btn, .grid-col .buttons-grid .remove-btn {\n  --background: var(--ion-color-primary);\n  --border-radius: 0;\n  --color: #fff;\n  width: 35px;\n  height: 35px;\n}\n\n.grid-col ion-button {\n  font-size: 10px;\n  margin: 0;\n  --background: transparent;\n  --box-shadow: none;\n}\n\n.grid-col .quainty-btn {\n  --color: var(--ion-color-primary);\n  height: 35px;\n  font-size: 14px;\n}\n\nion-footer ion-toolbar {\n  --background: var(--ion-color-primary);\n}\n\nion-footer ion-toolbar ion-title {\n  color: white;\n  text-align: center;\n}\n\n.red {\n  color: red;\n}\n\n.white {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0k7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURBUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNFWjs7QUREWTtFQUNJLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHaEI7O0FERVE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURFUTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBWjs7QURLSTtFQUNJLHNDQUFBO0FDRlI7O0FER1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURNQTtFQUNJLFVBQUE7QUNISjs7QURNQTtFQUNJLCtCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY3ZjY7XG59XG4uY2FydC1pdGVtIHtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xufVxuLmdyaWQtY29sIHtcbiAgICAuaXRlbS10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG4gICAgLml0ZW0tcHJpY2Uge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAgICAgLmJ1dHRvbnMtZ3JpZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC5hZGQtYnRuLCAucmVtb3ZlLWJ0biB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucXVhaW50eS1idG4ge1xuICAgICAgICAgICAgLS1jb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmVke1xuICAgIGNvbG9yOiByZWQ7XG4gICAgXG59XG4ud2hpdGV7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSIsImlvbi1jb250ZW50LCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZjdmNjtcbn1cblxuLmNhcnQtaXRlbSB7XG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG59XG5cbi5ncmlkLWNvbCAuaXRlbS10aXRsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIHBhZGRpbmc6IDAgMTZweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5ncmlkLWNvbCAuaXRlbS1wcmljZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZ3JpZC1jb2wgLmJ1dHRvbnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZ3JpZC1jb2wgLmJ1dHRvbnMtZ3JpZCAuYWRkLWJ0biwgLmdyaWQtY29sIC5idXR0b25zLWdyaWQgLnJlbW92ZS1idG4ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAtLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmdyaWQtY29sIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmdyaWQtY29sIC5xdWFpbnR5LWJ0biB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/favourites/favourites.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourites/favourites.page.ts ***!
  \*****************************************************/
/*! exports provided: FavouritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPage", function() { return FavouritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _product_product_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.page */ "./src/app/pages/product/product.page.ts");






let FavouritesPage = class FavouritesPage {
    constructor(config, fetch, modalCtr) {
        this.config = config;
        this.fetch = fetch;
        this.modalCtr = modalCtr;
    }
    ngOnInit() {
        this.config.favourite.forEach(l => {
            l.count = 1;
        });
    }
    openProduct(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = this.modalCtr.create({
                component: _product_product_page__WEBPACK_IMPORTED_MODULE_5__["ProductPage"],
                componentProps: {
                    "product": JSON.stringify(product),
                    "products": JSON.stringify([]),
                }
            });
            (yield modal).onDidDismiss().then((data) => {
                //this.navCtrl.pop()
            });
            return (yield modal).present();
        });
    }
};
FavouritesPage.ctorParameters = () => [
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
FavouritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourites',
        template: __webpack_require__(/*! raw-loader!./favourites.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/favourites/favourites.page.html"),
        styles: [__webpack_require__(/*! ./favourites.page.scss */ "./src/app/pages/favourites/favourites.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], FavouritesPage);



/***/ })

}]);
//# sourceMappingURL=favourites-favourites-module-es2015.js.map