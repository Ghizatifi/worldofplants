(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-result-result-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/result/result.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/result/result.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"loaded && !showMore\">\n  <app-header2 pageName=\"health_diagnosis\" navHome=\"true\"></app-header2>\n\n  <div style=\"margin-top: 10px;\">\n    <img class=\"image\" useImg   [src]=\"img?img : 'assets/images/logo.png'\" />\n  </div>\n  <div style=\"display: flex; flex-direction: column;justify-content: center; align-items: center; text-align: center;\">\n    <p style=\"font-size: 18px; font-weight: bold ;color: green;\"> {{\"result_succeed_with_percent\" | translate}}  {{(probability*100).toFixed(1)+\"%\"}}</p>\n    <p style=\"font-size: 20px; font-weight: bold ;color: grey;\"> {{\"its_disease_of\" | translate}}  \n      <span style=\"color: var(--ion-color-secondary); font-size: 20px;\">\n        {{config.translate.currentLang!='en'?result.name_ar:result.name_en}}\n      </span>\n    </p>\n\n    <ion-button style=\"--width:200px !important; width:200px !important; font-size: 16px !important;\" (click)=\"showMore=true\" class=\"next-btn\">\n      {{\"learn_more\" | translate}}\n    </ion-button>\n  </div>\n</ion-content>\n\n\n\n<ion-content  *ngIf=\"loaded && showMore\">\n  <!-- <app-header2></app-header2> -->\n<div  class=\"head\">\n  <div class=\"bar\" dir=\"rtl\">\n    <ion-icon [src]=\"assets.backward_ios\" class=\"backButtonPop\" (click)=\"close()\" ></ion-icon>\n </div>\n  <img-loader   (click)=\"utils.viewImage([img])\" useImg class=\"image_bar\" [src]=\"img\"></img-loader>\n</div>\n    \n<div class=\"container\">\n  <div class=\"top\">\n    <ion-label class='label'>\n      {{config.translate.currentLang!='en'?result.name_ar:result.name_en}}\n    </ion-label>\n    <p *ngIf=\"probability\" style=\"font-size: 18px; font-weight: bold ;color: black;margin: 0 ;\"> {{\"result_succeed_with_percent\" | translate}}  <span style=\"color: green;\">{{(probability*100).toFixed(1)+\"%\"}}</span></p>\n    <p class=\"divider\"></p>\n\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"pulse\"></ion-icon>\n      <p>\n        {{\"heath_state\" | translate}}\n      </p>\n    </div>\n\n    <div style=\"font-size: 14px;color: #555555;\">\n      <p>\n        {{config.translate.currentLang!='en'?result.name_ar:result.name_en}}\n      </p>\n\n      <p>\n        {{config.translate.currentLang!='en'?result.disease_state_ar:result.disease_state_en}}\n      </p>\n      \n    </div>\n    <ion-slides [options]=\"slideOptsOne\" style=\"direction: ltr;padding: 5px;\" slidesPerView=\"auto\" freeMode=\"true\" >\n\n      <ion-slide *ngFor=\"let img of  result.images\">\n        <img-loader  (click)=\"utils.viewImage(result.images)\" useImg class=\"slideImage100px\" [src]=\"fetch.url_storage+ img\"></img-loader>\n      </ion-slide>\n    </ion-slides>\n    <div *ngIf=\"show_confirm_result\">\n    <p>\n      {{\"do_you_agree_result\" | translate}}\n    </p>\n    \n    <div  style=\"display: flex;\">\n      <div (click)=\"accept_result('yes')\" class=\"filled_button\">{{\"yes\" | translate}}</div>\n      <div style=\"width: 5px;\"></div>\n      <div  (click)=\"accept_result('no')\"  class=\"outlined_button\">{{\"no\" | translate}}</div>\n    </div>\n  </div>\n    <p class=\"divider\"></p>\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"paper\"></ion-icon>\n      <p>\n        {{\"diseaseDescription\" | translate}}\n      </p>\n    </div>\n\n\n    <p  style=\"font-size: 14px;color: #555555;\">\n      {{config.translate.currentLang!='en'?result.description_ar:result.description_en}}\n    </p>\n\n\n    <p class=\"divider\"></p>\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"medkit\"></ion-icon>\n      <p>\n        {{\"cures\" | translate}}\n      </p>\n    </div>\n\n\n    <ion-slides [options]=\"productSlideOptions\" style=\"direction: ltr;padding: 5px;min-height: 164px !important;\" slidesPerView=\"auto\" freeMode=\"true\" >\n\n      <ion-slide *ngFor='let product of products'   class=\"unset_slide\" >\n        <app-product-card [product]=\"product\"></app-product-card>\n      </ion-slide>\n    </ion-slides>\n   \n\n  </div>\n\n\n \n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/result/result.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/result/result.module.ts ***!
  \***********************************************/
/*! exports provided: ResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result.page */ "./src/app/pages/result/result.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]
    }
];
var ResultPageModule = /** @class */ (function () {
    function ResultPageModule() {
    }
    ResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]]
        })
    ], ResultPageModule);
    return ResultPageModule;
}());



/***/ }),

/***/ "./src/app/pages/result/result.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/result/result.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  display: block;\n  width: 80%;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  border-radius: 22px;\n}\n\n.bar {\n  width: 100%;\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n}\n\n.container {\n  border-radius: 30px 30px 0 0;\n  position: relative;\n  top: -40px;\n  background: white;\n  height: 100%;\n}\n\n.top {\n  padding: 30px 20px 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.divider {\n  display: block;\n  border-bottom: 1px solid #dbdbdb;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.state_title {\n  display: -webkit-box;\n  display: flex;\n  color: var(--ion-color-secondary);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.state_title p {\n  margin: 0 10px 0 10px;\n  font-size: 18px;\n}\n\n.state_title ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9yZXN1bHQvcmVzdWx0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzdWx0L3Jlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUNLSjs7QURISTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzdWx0L3Jlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogODAlO1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xufVxuLmJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGFpbmVye1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTQwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvcHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXZpZGVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnN0YXRlX3RpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxufVxuIiwiLmltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wIHtcbiAgcGFkZGluZzogMzBweCAyMHB4IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdmlkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zdGF0ZV90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN0YXRlX3RpdGxlIHAge1xuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zdGF0ZV90aXRsZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/result/result.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/result/result.page.ts ***!
  \*********************************************/
/*! exports provided: ResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPage", function() { return ResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");









var ResultPage = /** @class */ (function () {
    function ResultPage(utils, fetch, config, navCtrl, route, modalCtr, router) {
        var _this = this;
        this.utils = utils;
        this.fetch = fetch;
        this.config = config;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalCtr = modalCtr;
        this.router = router;
        this.just_show = false;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_7__["Assets"];
        this.showMore = false;
        this.slideOptsOne = {
            freeMode: true,
            initialSlide: 0,
            slidesPerView: 3,
            autoplay: false,
            spaceBetween: 1
        };
        this.productSlideOptions = {
            freeMode: true,
            initialSlide: 0,
            // slidesPerView: 2.2,
            autoplay: false,
            spaceBetween: 1
        };
        this.show_confirm_result = true;
        this.disease_id = 50;
        this.products = [];
        this.result = {
            name: '',
            description: ''
        };
        this.loaded = false;
        route.queryParams.subscribe(function (res) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.probability = _this.router.getCurrentNavigation().extras.state.probability;
                _this.disease_id = _this.router.getCurrentNavigation().extras.state.disease_id;
                _this.img = _this.router.getCurrentNavigation().extras.state.img;
                if (!_this.router.getCurrentNavigation().extras.state.just_show) {
                    _this.storeResult();
                }
                else {
                    _this.showMore = true;
                    _this.show_confirm_result = false;
                    _this.just_show = true;
                }
                _this.loadResult();
            }
        });
    }
    ResultPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ResultPage.prototype.loadResult = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        this.fetch.get('disease/' + this.disease_id, headers)
            .then(function (res) {
            _this.loaded = true;
            var data;
            if (res.status) {
                if (res.data.images)
                    res.data.images = JSON.parse(res.data.images);
                else
                    res.data.images = [];
                data = res.data;
            }
            else {
                _this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                _this.products = [];
                return;
            }
            _this.result = res.data;
            _this.products = data.medicines;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var pro = _a[_i];
                pro.count = 1;
            }
            for (var _b = 0, _c = _this.result.images; _b < _c.length; _b++) {
                var img = _c[_b];
                console.log("SRC ", img);
                // img.src = img.src.split("\\").join("/")
            }
        }).catch(function (err) {
            _this.loaded = true;
            console.log("ERR ", err);
            _this.fetch.errorToast();
        });
    };
    ResultPage.prototype.close = function () {
        if (this.just_show)
            this.navCtrl.pop();
        else
            this.navCtrl.navigateRoot('tabs/home');
    };
    ResultPage.prototype.storeResult = function () {
        var params = new FormData();
        params.append('user_id', this.config.user.id);
        params.append('disease_id', this.disease_id);
        params.append('confirm_result', "1");
        params.append('base64_image', this.img);
        this.fetch.post('add-result', params).subscribe(function (res) {
            console.log("");
        });
    };
    ResultPage.prototype.accept_result = function (val) {
        this.show_confirm_result = false;
        if (val == 'no') {
            this.modalCtr.dismiss({ chat: true });
            this.navCtrl.navigateRoot("chats");
        }
    };
    ResultPage.ctorParameters = function () { return [
        { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
        { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! raw-loader!./result.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/result/result.page.html"),
            styles: [__webpack_require__(/*! ./result.page.scss */ "./src/app/pages/result/result.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ResultPage);
    return ResultPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-result-result-module-es5.js.map