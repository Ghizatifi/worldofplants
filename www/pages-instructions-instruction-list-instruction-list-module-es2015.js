(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-instructions-instruction-list-instruction-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instructions/instruction-list/instruction-list.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instructions/instruction-list/instruction-list.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [pageName]=\"is_plants? 'plants' : 'diseases'\"></app-header2>\n<ion-content padding>\n<ion-list>\n  <!-- <div style=\"display: flex;align-items: center;\" class=\"bordered\" *ngFor=\"let plant of plants\"> -->\n    <ion-row class=\"bordered\" *ngFor=\"let item of list\"  (click)=\"details(item.id)\" style=\"margin-top: 10px;\">\n      <ion-col size=\"4\">\n        <img-loader *ngIf=\"is_plants\" useImg  class=\"small_img\" [src]=\"item.image ? fetch.url_storage + item.image : 'assets/images/logo.png'\"  ></img-loader>\n\n        <img-loader *ngIf=\"!is_plants\" useImg  class=\"small_img\" [src]=\"item.images && item.images.length>0 ? fetch.url_storage + item.images[0] : 'assets/images/logo.png'\"  ></img-loader>\n\n      </ion-col>\n      <ion-col size=\"8\" style=\"display: flex;align-items: center;\">\n        <p style=\"margin: 20px;font-size: 18px;font-weight: bold;\">\n         {{config.translate.currentLang!='en'?item.name_ar:item.name_en}}\n        </p>\n      </ion-col>\n    </ion-row>\n   \n  <!-- </div> -->\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/instructions/instruction-list/instruction-list.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/instructions/instruction-list/instruction-list.module.ts ***!
  \********************************************************************************/
/*! exports provided: InstructionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionListPageModule", function() { return InstructionListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _instruction_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instruction-list.page */ "./src/app/pages/instructions/instruction-list/instruction-list.page.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _instruction_list_page__WEBPACK_IMPORTED_MODULE_6__["InstructionListPage"]
    }
];
let InstructionListPageModule = class InstructionListPageModule {
};
InstructionListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_instruction_list_page__WEBPACK_IMPORTED_MODULE_6__["InstructionListPage"]]
    })
], InstructionListPageModule);



/***/ }),

/***/ "./src/app/pages/instructions/instruction-list/instruction-list.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/instructions/instruction-list/instruction-list.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbi1saXN0L2luc3RydWN0aW9uLWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/instructions/instruction-list/instruction-list.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/instructions/instruction-list/instruction-list.page.ts ***!
  \******************************************************************************/
/*! exports provided: InstructionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionListPage", function() { return InstructionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");







let InstructionListPage = class InstructionListPage {
    constructor(config, fetch, routeA, navCtrl) {
        this.config = config;
        this.fetch = fetch;
        this.routeA = routeA;
        this.navCtrl = navCtrl;
        this.loaded = false;
        this.route = 'plants_instructions'; //
        this.list = [];
        this.is_plants = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.routeA.queryParams.subscribe(res => {
                console.log("res is ", res);
                if (res.is_plants == true) {
                    console.log("plants true");
                    this.route = "plants_instructions";
                    this.is_plants = true;
                }
                else {
                    console.log("plants flase");
                    this.route = "diseases"; //disaese list api
                }
            });
            this.loadList();
        });
    }
    loadList() {
        this.loaded = true;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get(this.route, headers)
            .then((res) => {
            this.loaded = true;
            this.list = res.data;
            if (!this.is_plants) {
                this.list.forEach(disease => {
                    disease.images = JSON.parse(disease.images);
                });
            }
        }).catch(err => {
            console.log("there was err ", err);
        });
    }
    details(id) {
        if (this.is_plants)
            this.navCtrl.navigateForward(['instruction-details'], { queryParams: { plant_id: id } });
        else
            this.navCtrl.navigateForward(['instruction-details'], { queryParams: { disease_id: id } });
    }
};
InstructionListPage.ctorParameters = () => [
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
InstructionListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instruction-list',
        template: __webpack_require__(/*! raw-loader!./instruction-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instructions/instruction-list/instruction-list.page.html"),
        styles: [__webpack_require__(/*! ./instruction-list.page.scss */ "./src/app/pages/instructions/instruction-list/instruction-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], InstructionListPage);



/***/ })

}]);
//# sourceMappingURL=pages-instructions-instruction-list-instruction-list-module-es2015.js.map