(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-history-results-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/results-history/results-history.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/results-history/results-history.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header2 pageName=\"results_history\" hide_back_button=\"true\"></app-header2>\n<ion-content padding *ngIf=\"loaded\">\n  <div *ngIf=\"history.length==0\" style=\"text-align: center;\">\n  {{\"no_results\" | translate}}\n  </div>\n  <div class=\"bordered\" style=\"display: flex; align-items: center; justify-content: space-between;padding: 10px;    margin-top: 10px;\"  *ngFor=\"let res of history\" (click)=\"openDisease(res)\" >\n    <img [src]=\"fetch.url_storage+res.image\">\n    <p *ngIf=\"res.disease\">{{config.lang=='ar'? res.disease.name_ar :  res.disease.name_en}}</p>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/results-history/results-history.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/results-history/results-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResultsHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsHistoryPageModule", function() { return ResultsHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _results_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results-history.page */ "./src/app/pages/results-history/results-history.page.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _results_history_page__WEBPACK_IMPORTED_MODULE_6__["ResultsHistoryPage"]
    }
];
let ResultsHistoryPageModule = class ResultsHistoryPageModule {
};
ResultsHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_results_history_page__WEBPACK_IMPORTED_MODULE_6__["ResultsHistoryPage"]]
    })
], ResultsHistoryPageModule);



/***/ }),

/***/ "./src/app/pages/results-history/results-history.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/results-history/results-history.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\np {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9yZXN1bHRzLWhpc3RvcnkvcmVzdWx0cy1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzdWx0cy1oaXN0b3J5L3Jlc3VsdHMtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN1bHRzLWhpc3RvcnkvcmVzdWx0cy1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDogODBweDsgXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbnB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsImltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/results-history/results-history.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/results-history/results-history.page.ts ***!
  \***************************************************************/
/*! exports provided: ResultsHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsHistoryPage", function() { return ResultsHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");







let ResultsHistoryPage = class ResultsHistoryPage {
    constructor(fetch, utils, config, navCtrl) {
        this.fetch = fetch;
        this.utils = utils;
        this.config = config;
        this.navCtrl = navCtrl;
        this.history = [];
        this.loaded = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.fetch.url_storage;
        this.getHistory();
    }
    getHistory() {
        let route = "get-results";
        this.utils.loadingPresent();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get(route, headers).then((res) => {
            this.loaded = true;
            this.utils.loadingDismiss();
            if (res.status) {
                this.history = res.data;
            }
        }, err => {
            this.utils.loadingDismiss();
        }).catch((e) => {
            this.loaded = true;
            this.utils.loadingDismiss();
        });
    }
    openDisease(disease) {
        let extra = {
            just_show: true,
            disease_id: disease.disease_id,
            img: this.fetch.url_storage + disease.image
        };
        this.navCtrl.navigateForward(['result'], { state: extra });
    }
};
ResultsHistoryPage.ctorParameters = () => [
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ResultsHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-results-history',
        template: __webpack_require__(/*! raw-loader!./results-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/results-history/results-history.page.html"),
        styles: [__webpack_require__(/*! ./results-history.page.scss */ "./src/app/pages/results-history/results-history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ResultsHistoryPage);



/***/ })

}]);
//# sourceMappingURL=results-history-results-history-module-es2015.js.map