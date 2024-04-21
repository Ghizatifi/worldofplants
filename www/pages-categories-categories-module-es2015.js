(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categories/categories.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [pageName]=\"'categories'\"></app-header2>\n\n<ion-content padding>\n\n  <div *ngIf=\"categories.length>0\"> \n    <ion-card class=\"category_card\" (click)=\"showCategoryProducts(categories[0])\">\n      <img class=\"image\" [src]=\"fetch.url_storage+categories[0].image\" alt=\"\">\n      <ion-card-header>\n        <ion-card-title>\n          {{config.translate.currentLang!='en'?categories[0].name:categories[0].name_en}}\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n </div> \n\n  <ion-grid *ngIf=\"categories.length>1\">\n    <ion-row>\n      <ion-col style=\"margin: 0; padding: 0;\" size=\"6\" *ngFor=\"let cat of categories.slice(1,categories.length)\">\n\n        <ion-card class=\"category_card\" (click)=\"showCategoryProducts(cat)\">\n          <img class=\"image\" [src]=\"fetch.url_storage+cat.image\" alt=\"\">\n          <ion-card-header>\n            <ion-card-title>\n              {{config.translate.currentLang!='en'?cat.name:cat.name_en}}\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuIiwiLmltYWdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");






let CategoriesPage = class CategoriesPage {
    constructor(config, fetch, navCtrl) {
        this.config = config;
        this.fetch = fetch;
        this.navCtrl = navCtrl;
        this.categories = [];
    }
    ngOnInit() {
        this.get_categories();
    }
    get_categories() {
        this.config.token = localStorage.getItem("token");
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('product/categories', headers)
            .then((res) => {
            let data;
            if (res.status) {
                data = res.data;
            }
            else {
                this.fetch.errorToast(res.msg);
                return;
            }
            let x = '';
            // for(let d of data){
            //   d.image = d.image.split('\\').join('/')
            //   // d.image = d.image.replace("\\" , "/")
            // }
            this.categories = data;
            console.log("cats are ", data);
        }).catch(err => {
            console.log("ERR ", err);
            this.fetch.errorToast();
        });
    }
    showCategoryProducts(cat) {
        this.navCtrl.navigateForward(['products'], { queryParams: { name: this.config.lang == 'en' ? cat.name_en : cat.name, id: cat.id } });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categories/categories.page.html"),
        styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module-es2015.js.map