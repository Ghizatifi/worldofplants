(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/products.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [pageName]=\"category_name\"></app-header2>\n\n<ion-content>\n  <ion-item text-center *ngIf=\"cats.length==0 && dataLoaded\">\n    <ion-label>{{\"no_products\" | translate}}</ion-label>\n  </ion-item>\n \n  <ion-grid >\n    <ion-row>\n      <ion-col size=\"6\" *ngFor='let product of products' class=\"flex\" >\n            <app-product-card (click)=\"openProduct(product)\" [product]=\"product\"></app-product-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/products/products.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, fetch, config, notificationsService, route, userService, modalCtr) {
        this.navCtrl = navCtrl;
        this.fetch = fetch;
        this.config = config;
        this.notificationsService = notificationsService;
        this.route = route;
        this.userService = userService;
        this.modalCtr = modalCtr;
        this.screen = 0;
        this.categories = ["فواكه", "خضراوات", "أعشاب", "تمور", "سلطات"];
        this.cats = [];
        this.category_id = null;
        this.category_name = '';
        this.dataLoaded = false;
        this.products = [];
        this.recent = false;
        this.top_ordered = false;
    }
    ProductsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (res) {
            if (res.search) {
                _this.search = res.search;
                _this.category_name = res.search;
                _this.recent = res.recent;
                _this.top_ordered = res.top_ordered;
                if (!_this.recent && !_this.top_ordered)
                    _this.get_products();
                if (_this.recent)
                    _this.get_recent_products();
                if (_this.top_ordered)
                    _this.get_top_ordered();
                return;
            }
            _this.category_id = res.id;
            _this.category_name = res.name;
            _this.get_products();
        });
    };
    ProductsPage.prototype.get_products = function () {
        var _this = this;
        var link = this.search ? "product/search/" + this.search : 'product/categories/' + this.category_id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get(link, headers)
            .then(function (res) {
            var data;
            console.log("Productr s , ", res);
            if (res.status) {
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                _this.products = [];
                return;
            }
            _this.products = data;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var pro = _a[_i];
                pro.count = 1;
            }
        }).catch(function (err) {
            console.log("ERR ", err);
            _this.fetch.errorToast();
        });
    };
    ProductsPage.prototype.get_recent_products = function () {
        var _this = this;
        var link = 'products';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get(link, headers)
            .then(function (res) {
            var data;
            console.log("Productr s , ", res);
            if (res.status) {
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                _this.products = [];
                return;
            }
            _this.products = data;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var pro = _a[_i];
                pro.count = 1;
            }
        }).catch(function (err) {
            console.log("ERR ", err);
            _this.fetch.errorToast();
        });
    };
    ProductsPage.prototype.get_top_ordered = function () {
        var _this = this;
        var link = 'products/top-odered';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get(link, headers)
            .then(function (res) {
            var data;
            console.log("Productr s , ", res);
            if (res.status) {
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                _this.products = [];
                return;
            }
            _this.products = data;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var pro = _a[_i];
                pro.count = 1;
            }
        }).catch(function (err) {
            console.log("ERR ", err);
            _this.fetch.errorToast();
        });
    };
    ProductsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], ProductsPage.prototype, "slider", void 0);
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es5.js.map