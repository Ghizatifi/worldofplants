(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/offers/offers.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/offers/offers.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [hide_back_button]=\"true\" pageName=\"offers\"></app-header2>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col size=\"6\" *ngFor=\"let product of products\"  class='flex'>\n        <app-product-card  [product]=\"product\"></app-product-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/pages/offers/offers.page.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]
    }
];
let OffersPageModule = class OffersPageModule {
};
OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/pages/offers/offers.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-item {\n  --background: #f9f7f6;\n}\n\n.cart-item {\n  --padding-end: 20px;\n}\n\n.grid-col .item-title {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  padding: 0 16px 0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  overflow: hidden;\n  height: 36px;\n  margin-bottom: 6px;\n}\n\n.grid-col .item-price {\n  padding-right: 16px;\n  margin-bottom: 10px;\n}\n\n.grid-col .buttons-grid {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.grid-col .buttons-grid .add-btn, .grid-col .buttons-grid .remove-btn {\n  --background: var(--ion-color-primary);\n  --border-radius: 0;\n  --color: #fff;\n  width: 35px;\n  height: 35px;\n}\n\n.grid-col ion-button {\n  font-size: 10px;\n  margin: 0;\n  --background: transparent;\n  --box-shadow: none;\n}\n\n.grid-col .quainty-btn {\n  --color: var(--ion-color-primary);\n  height: 35px;\n  font-size: 14px;\n}\n\nion-footer ion-toolbar {\n  --background: var(--ion-color-primary);\n}\n\nion-footer ion-toolbar ion-title {\n  color: white;\n  text-align: center;\n}\n\n.red {\n  color: red;\n}\n\n.white {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDRTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VOOztBREFFO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0VOOztBREFNO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0VWOztBRERVO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dkOztBREVNO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQVY7O0FERU07RUFDSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQVY7O0FES0U7RUFDSSxzQ0FBQTtBQ0ZOOztBREdNO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRFY7O0FETUE7RUFDRSxVQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCwgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmOWY3ZjY7XG59XG4uY2FydC1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbn1cbi5ncmlkLWNvbCB7XG4gIC5pdGVtLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIHBhZGRpbmc6IDAgMTZweCAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxuICAuaXRlbS1wcmljZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAgICAgLmJ1dHRvbnMtZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIC5hZGQtYnRuLCAucmVtb3ZlLWJ0biB7XG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAucXVhaW50eS1idG4ge1xuICAgICAgICAgIC0tY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICB9XG59XG5cbi5yZWR7XG4gIGNvbG9yOiByZWQ7XG4gIFxufVxuLndoaXRle1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59IiwiaW9uLWNvbnRlbnQsIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmN2Y2O1xufVxuXG4uY2FydC1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbn1cblxuLmdyaWQtY29sIC5pdGVtLXRpdGxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgcGFkZGluZzogMCAxNnB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmdyaWQtY29sIC5pdGVtLXByaWNlIHtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ncmlkLWNvbCAuYnV0dG9ucy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5ncmlkLWNvbCAuYnV0dG9ucy1ncmlkIC5hZGQtYnRuLCAuZ3JpZC1jb2wgLmJ1dHRvbnMtZ3JpZCAucmVtb3ZlLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uZ3JpZC1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uZ3JpZC1jb2wgLnF1YWludHktYnRuIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/offers/offers.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/offers/offers.page.ts ***!
  \*********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let OffersPage = class OffersPage {
    constructor(config, fetch) {
        this.config = config;
        this.fetch = fetch;
        this.products = [];
    }
    ngOnInit() {
        this.get_products();
    }
    get_products() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('offers', headers)
            .then((res) => {
            let data;
            if (res.status) {
                data = res.data;
            }
            else {
                this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                this.products = [];
                return;
            }
            console.log("pr ", res.data);
            this.products = data;
            for (let pro of this.products) {
                pro.count = 1;
            }
        }).catch(err => {
            console.log("ERR ", err);
            this.fetch.errorToast();
        });
    }
};
OffersPage.ctorParameters = () => [
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] }
];
OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: __webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/offers/offers.page.html"),
        styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/pages/offers/offers.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"]])
], OffersPage);



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es2015.js.map