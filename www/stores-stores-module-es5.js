(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stores-stores-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/stores/stores.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 pageName=\"store\"></app-header2>\n\n<ion-content>\n  <ion-searchbar style=\"padding: 20px;\" animated [(ngModel)]=\"search_key\" (search)=\"search()\"></ion-searchbar>\n  <ion-row class=\"flex_content\">\n    <p class=\"title\">\n      {{\"categories\" | translate}}\n    </p>\n    <p class=\"showAll\" (click)=\"showAllCategories()\" >\n      {{\"view_all\" | translate}}\n    </p>\n    <ion-slides [options]=\"slideOptsOne\" style=\"direction: ltr;padding: 5px;min-height: 164px !important;\"  >\n\n      <ion-slide *ngFor=\"let cat of categories\" style=\"width:60px !important ; height: 200px;border-radius: 0;display: flex;\" (click)=\"showCategoryProducts(cat)\">\n\n        <ion-card class=\"category_card\" (click)=\"showCategoryProducts(cat)\">\n          <img class=\"image\" [src]=\"fetch.url_storage+cat.image\" alt=\"\">\n          <ion-card-header>\n            <ion-card-title>\n              {{config.translate.currentLang!='en'?cat.name:cat.name_en}}\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n\n    \n    </ion-slides>\n\n  </ion-row>\n  <ion-row class=\"flex_content\" >\n    <p class=\"title\">\n      {{\"top_ordered\" | translate}}\n    </p>\n    <p class=\"showAll\"  (click)=\"showTopOrdered()\">\n      {{\"view_all\" | translate}}\n    </p>\n  </ion-row>\n \n  <ion-slides [options]=\"slideOpts\" style=\"direction: rtl;padding: 5px\"  >\n    <ion-slide  *ngFor=\"let product of top_ordered_products\"  class=\"unset_slide\" style=\"border-radius: 0;\">\n     <app-product-card [product]=\"product\"></app-product-card>\n    </ion-slide>\n  </ion-slides>\n\n  \n<ion-row class=\"flex_content\" >\n  <p class=\"title\">\n    {{\"new_products\" | translate}}\n  </p>\n  <p class=\"showAll\" (click)=\"showRecentProducts()\">\n    {{\"view_all\" | translate}}\n  </p>\n</ion-row>\n\n<ion-slides [options]=\"slideOpts\" style=\"direction: rtl;padding: 5px\"  >\n  <ion-slide  *ngFor=\"let product of products\"  class=\"unset_slide\" style=\"border-radius: 0;\">\n   <app-product-card [product]=\"product\"></app-product-card>\n  </ion-slide>\n</ion-slides>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/stores/stores.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.module.ts ***!
  \***********************************************/
/*! exports provided: StoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPageModule", function() { return StoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stores.page */ "./src/app/pages/stores/stores.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _stores_page__WEBPACK_IMPORTED_MODULE_6__["StoresPage"]
    }
];
var StoresPageModule = /** @class */ (function () {
    function StoresPageModule() {
    }
    StoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_stores_page__WEBPACK_IMPORTED_MODULE_6__["StoresPage"]]
        })
    ], StoresPageModule);
    return StoresPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stores/stores.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides ion-slide {\n  display: block;\n  overflow-y: scroll;\n  direction: rtl;\n}\n\n.title {\n  color: black;\n  font-size: 18px !important;\n  font-weight: 300;\n}\n\n.round-button {\n  --border-radius: 2px !important;\n  --background: #FFA400;\n  background: #FFA400;\n  padding: 0px;\n}\n\n.input {\n  background: #FDFDFD;\n  box-shadow: none !important;\n  border: 2px solid #efefefc7;\n  border-radius: 5px;\n}\n\n.showAll {\n  opacity: 0.5;\n  font-size: 14px;\n  text-decoration: underline;\n  color: #000000;\n}\n\n.flex_content {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.title {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9zdG9yZXMvc3RvcmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmVzL3N0b3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRk47O0FEUUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFNBO0VBRUksK0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFVBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDUkY7O0FEVUM7RUFDQyxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1BGOztBRFdDO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yZXMvc3RvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXNsaWRlcyB7XG4gIC8vIGhlaWdodDogOTAlO1xuICBpb24tc2xpZGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgfVxufVxuXG5cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcblxufVxuXG4ucm91bmQtYnV0dG9ue1xuICAvLyBib3JkZXItcmFkaXVzOiAyMCUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQTQwMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZBNDAwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4uaW5wdXR7XG4gIGJhY2tncm91bmQ6ICNGREZERkQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2VmZWZlZmM3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLnNob3dBbGx7XG4gIG9wYWNpdHk6IC41O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbiAuZmxleF9jb250ZW50e1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuIH1cblxuIC50aXRsZXtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJpb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucm91bmQtYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZBNDAwO1xuICBiYWNrZ3JvdW5kOiAjRkZBNDAwO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGREZERkQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2VmZWZlZmM3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaG93QWxsIHtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZsZXhfY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/stores/stores.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/stores/stores.page.ts ***!
  \*********************************************/
/*! exports provided: StoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPage", function() { return StoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");








var StoresPage = /** @class */ (function () {
    function StoresPage(config, fetch, navCtrl, actionSheetCtrl, route, userService, modalCtr) {
        this.config = config;
        this.fetch = fetch;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.route = route;
        this.userService = userService;
        this.modalCtr = modalCtr;
        this.search_key = '';
        this.products = [];
        this.top_ordered_products = [];
        this.categories = [];
        this.noty_counts = 29;
        this.banners = [];
        this.banner_images = [];
        this.stores = [];
        this.slideOptsOne = {
            freeMode: true,
            initialSlide: 0,
            // slidesPerView: 1.5,
            autoplay: false,
            spaceBetween: 4
        };
        this.slideOpts = {
            freeMode: true,
            initialSlide: 0,
            // slidesPerView: 2,
            autoplay: false,
            // speed: 800,
            loop: true,
        };
        this.date = new Date();
        this.currentHour = 0;
        this.currentHour = this.date.getHours() * 60 + this.date.getMinutes();
        console.log(this.date.getHours() * 60);
        console.log(this.date.getMinutes());
    }
    StoresPage.prototype.ionViewDidEnter = function () {
        this.get_categories();
        this.get_products();
        this.get_top_ordered_products();
    };
    StoresPage.prototype.get_products = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('products', headers)
            .then(function (res) {
            var data;
            if (res.status) {
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                _this.products = [];
                return;
            }
            console.log(res.data);
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
    StoresPage.prototype.get_top_ordered_products = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('products/top-odered', headers)
            .then(function (res) {
            var data;
            if (res.status) {
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                _this.top_ordered_products = [];
                return;
            }
            console.log("pr ", res.data);
            _this.top_ordered_products = data;
            for (var _i = 0, _a = _this.top_ordered_products; _i < _a.length; _i++) {
                var pro = _a[_i];
                pro.count = 1;
            }
        }).catch(function (err) {
            console.log("ERR ", err);
            _this.fetch.errorToast();
        });
    };
    StoresPage.prototype.get_categories = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('product/categories', headers)
            .then(function (res) {
            var data;
            if (res.status) {
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                return;
            }
            // let x = '';
            // for(let d of data){
            //   d.image = d.image.split('\\').join('/')
            // d.image = d.image.replace("\\" , "/")
            //  }
            _this.categories = data;
            console.log(data);
        }).catch(function (err) {
            console.log("ERR ", err);
            _this.fetch.errorToast();
        });
    };
    StoresPage.prototype.search = function () {
        console.log("Search ", this.search_key);
        this.navCtrl.navigateForward(['products'], { queryParams: { search: this.search_key } });
    };
    StoresPage.prototype.showAllCategories = function () {
        this.navCtrl.navigateForward(['categories']);
    };
    StoresPage.prototype.showTopOrdered = function () {
        this.navCtrl.navigateForward(['products'], { queryParams: { search: this.config.translate.instant("top_ordered"), top_ordered: true } });
    };
    StoresPage.prototype.showRecentProducts = function () {
        this.navCtrl.navigateForward(['products'], { queryParams: { search: this.config.translate.instant("new_products"), recent: true } });
    };
    StoresPage.prototype.showCategoryProducts = function (cat) {
        console.log("cat is ", cat);
        this.navCtrl.navigateForward(['products'], { queryParams: { name: this.config.lang == 'en' ? cat.name_en : cat.name, id: cat.id } });
    };
    StoresPage.ctorParameters = function () { return [
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgEl', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StoresPage.prototype, "imgEl", void 0);
    StoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stores',
            template: __webpack_require__(/*! raw-loader!./stores.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores.page.html"),
            styles: [__webpack_require__(/*! ./stores.page.scss */ "./src/app/pages/stores/stores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], StoresPage);
    return StoresPage;
}());



/***/ })

}]);
//# sourceMappingURL=stores-stores-module-es5.js.map