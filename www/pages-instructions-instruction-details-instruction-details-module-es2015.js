(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-instructions-instruction-details-instruction-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instructions/instruction-details/instruction-details.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instructions/instruction-details/instruction-details.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content  *ngIf=\"loaded && disease_id\" padding>\n\n<div  class=\"head\">\n  <div class=\"bar\" dir=\"rtl\">\n    <ion-icon [src]=\"assets.backward_ios\" class=\"backButtonPop\" (click)=\"pop()\" ></ion-icon>\n    <!-- <div [ngClass]=\"config.getItemFromFavourite(product.id)?'is_fevourite':'is_not_fevourite'\">\n    <ion-icon    name=\"heart\" size='large' style=\"--color:red\" (click)=\"config.switchFav(product)\" ></ion-icon>\n  </div> -->\n </div>\n  <img-loader  useImg class=\"image_bar\" [src]=\"result.images.length>0 ? fetch.url_storage+ result.images[0] : 'assets/images/logo.png'\"></img-loader>\n</div>\n    \n\n\n<div class=\"container\">\n  <div class=\"top\">\n    <ion-label class='label'>\n      {{config.translate.currentLang!='en'?result.name_ar:result.name_en}}\n    </ion-label>\n\n\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"pulse\"></ion-icon>\n      <p>\n        {{\"heath_state\" | translate}}\n      </p>\n    </div>\n\n    <div style=\"font-size: 14px;color: #555555;\">\n      <p>\n        {{config.translate.currentLang!='en'?result.name:result.name_en}}\n      </p>\n\n      <p>\n        {{config.translate.currentLang!='en'?result.disease_state_ar:result.disease_state_en}}\n      </p>\n      \n    </div>\n    <ion-slides [options]=\"slideOptsOne\" style=\"direction: ltr;padding: 5px;\" slidesPerView=\"auto\" freeMode=\"true\" >\n\n      <ion-slide class=\"unset_slide\" *ngFor=\"let img of  result.images\">\n        <img-loader (click)=\"utils.viewImage(result.images)\" useImg class=\"slideImage100px\" [src]=\"fetch.url_storage+ img\"></img-loader>\n      </ion-slide>\n    </ion-slides>\n    <div *ngIf=\"show_confirm_result\">\n    <p>\n      {{\"do_you_agree_result\" | translate}}\n    </p>\n    \n    <div  style=\"display: flex;\">\n      <div (click)=\"storeResult('yes')\" class=\"filled_button\">YES</div>\n      <div style=\"width: 5px;\"></div>\n      <div  (click)=\"storeResult('no')\"  class=\"outlined_button\">NO</div>\n    </div>\n  </div>\n    <p class=\"divider\"></p>\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"paper\"></ion-icon>\n      <p>\n        {{\"diseaseDescription\" | translate}}\n      </p>\n    </div>\n\n\n    <p  style=\"font-size: 14px;color: #555555;\">\n      {{config.translate.currentLang!='en'?result.description_ar:result.description_en}}\n    </p>\n\n\n    <p class=\"divider\"></p>\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"medkit\"></ion-icon>\n      <p>\n        {{\"cures\" | translate}}\n      </p>\n    </div>\n\n\n    <ion-slides [options]=\"productSlideOptions\" style=\"direction: ltr;padding: 5px;min-height: 164px !important;\" slidesPerView=\"auto\" freeMode=\"true\" >\n\n      <ion-slide *ngFor='let product of products'   class=\"unset_slide\" >\n        <app-product-card [product]=\"product\"></app-product-card>\n      </ion-slide>\n    </ion-slides>\n   \n\n  </div>\n\n\n \n  </div>\n\n</ion-content>\n\n<ion-content  *ngIf=\"loaded && plant_id\" padding>\n<div  class=\"head\">\n  <div class=\"bar\" dir=\"rtl\">\n    <ion-icon [src]=\"assets.backward_ios\" class=\"backButtonPop\" (click)=\"pop()\" ></ion-icon>\n    <!-- <div [ngClass]=\"config.getItemFromFavourite(product.id)?'is_fevourite':'is_not_fevourite'\">\n    <ion-icon    name=\"heart\" size='large' style=\"--color:red\" (click)=\"config.switchFav(product)\" ></ion-icon>\n  </div> -->\n </div>\n  <img-loader  useImg class=\"image_bar\" [src]=\"result.images? fetch.url_storage+ result.image : 'assets/images/logo.png'\"></img-loader>\n</div>\n    \n\n\n<div class=\"container\">\n  <div class=\"top\">\n    <p class='label'>\n      {{config.translate.currentLang!='en'?result.name_ar:result.name_en}}\n    </p>\n   \n    <p style=\"font-weight: 400;\">\n      {{config.translate.currentLang!='en'?result.description_ar:result.description_en}}\n    </p>\n\n    <ion-row style=\"padding: 0; margin: 0;\" *ngFor=\"let ex of extras\" >\n      <ion-col size=\"3\" style=\"display: flex; align-items: center;\">\n      <ion-avatar>\n        <ion-img [src]=\"ex.icon\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n    <ion-col  size=\"8\" style=\"margin: 0;\">\n        <p style=\"font-weight: bold;margin: 0;\">\n          {{ex.title}}\n        </p>\n        <p  style=\" margin: 0; font-weight: 300;\">\n         {{ex.body}}\n        </p>\n    </ion-col>\n    </ion-row>\n\n\n\n    <div class=\"state_title\">\n      <ion-icon color=\"secondary\" name=\"medkit\"></ion-icon>\n      <p>\n      {{\"products_needed_for_care\" | translate}}\n      </p>\n    </div>\n\n\n    <ion-slides [options]=\"productSlideOptions\" style=\"direction: ltr;padding: 5px;min-height: 164px !important;\" slidesPerView=\"auto\" freeMode=\"true\" >\n\n      <ion-slide *ngFor='let product of products'   class=\"unset_slide\" >\n        <app-product-card [product]=\"product\"></app-product-card>\n      </ion-slide>\n    </ion-slides>\n   \n  </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/instructions/instruction-details/instruction-details.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/instructions/instruction-details/instruction-details.module.ts ***!
  \**************************************************************************************/
/*! exports provided: InstructionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionDetailsPageModule", function() { return InstructionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _instruction_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instruction-details.page */ "./src/app/pages/instructions/instruction-details/instruction-details.page.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _instruction_details_page__WEBPACK_IMPORTED_MODULE_6__["InstructionDetailsPage"]
    }
];
let InstructionDetailsPageModule = class InstructionDetailsPageModule {
};
InstructionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_instruction_details_page__WEBPACK_IMPORTED_MODULE_6__["InstructionDetailsPage"]]
    })
], InstructionDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/instructions/instruction-details/instruction-details.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/instructions/instruction-details/instruction-details.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  display: block;\n  width: 80%;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  border-radius: 22px;\n}\n\n.bar {\n  width: 100%;\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n}\n\n.container {\n  border-radius: 30px 30px 0 0;\n  position: relative;\n  top: -40px;\n  background: white;\n  height: 100%;\n}\n\n.top {\n  padding: 30px 20px 0 0;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.divider {\n  display: block;\n  border-bottom: 1px solid #dbdbdb;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.state_title {\n  display: -webkit-box;\n  display: flex;\n  color: var(--ion-color-secondary);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.state_title p {\n  margin: 0 10px 0 10px;\n  font-size: 18px;\n}\n\n.state_title ion-icon {\n  font-size: 25px;\n}\n\nion-slide {\n  width: unset;\n  --width: unset ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb24tZGV0YWlscy9pbnN0cnVjdGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9uLWRldGFpbHMvaW5zdHJ1Y3Rpb24tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUNJSjs7QURGSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksZUFBQTtBQ0lSOztBREFBO0VBQ0ksWUFBQTtFQUNKLGVBQUE7QUNHQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbi1kZXRhaWxzL2luc3RydWN0aW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbn1cblxuLmJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGFpbmVye1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTQwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvcHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXZpZGVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnN0YXRlX3RpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxufVxuXG5pb24tc2xpZGV7XG4gICAgd2lkdGg6IHVuc2V0IDtcbi0td2lkdGg6IHVuc2V0IDtcbn0iLCIuaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG59XG5cbi5iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3Age1xuICBwYWRkaW5nOiAzMHB4IDIwcHggMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2aWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnN0YXRlX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc3RhdGVfdGl0bGUgcCB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnN0YXRlX3RpdGxlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5pb24tc2xpZGUge1xuICB3aWR0aDogdW5zZXQ7XG4gIC0td2lkdGg6IHVuc2V0IDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/instructions/instruction-details/instruction-details.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/instructions/instruction-details/instruction-details.page.ts ***!
  \************************************************************************************/
/*! exports provided: InstructionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionDetailsPage", function() { return InstructionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");









let InstructionDetailsPage = class InstructionDetailsPage {
    constructor(fetch, config, navCtrl, route, utils) {
        this.fetch = fetch;
        this.config = config;
        this.navCtrl = navCtrl;
        this.route = route;
        this.utils = utils;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["Assets"];
        this.loaded = false;
        this.products = [];
        this.extras = [];
        this.slideOptsOne = {
            freeMode: true,
            initialSlide: 0,
            slidesPerView: 2.3,
            autoplay: false,
            spaceBetween: 5
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.route.queryParams.subscribe(res => {
                this.plant_id = res.plant_id;
                this.disease_id = res.disease_id;
            });
            this.loadResult();
        });
    }
    pop() {
        this.navCtrl.back();
    }
    loadResult() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        let route = this.disease_id ? 'disease/' + this.disease_id : "plant/" + this.plant_id;
        this.fetch.get(route, headers)
            .then((res) => {
            this.loaded = true;
            let data;
            if (res.status) {
                if (res.data.images)
                    res.data.images = JSON.parse(res.data.images);
                else
                    res.data.images = [];
                data = res.data;
                if (data.irrigation_ar || data.irrigation_en) {
                    this.extras.push({ icon: this.assets.humidity, title: this.utils.translator("irrigation"), body: this.config.lang == 'ar' ? data.irrigation_ar : data.irrigation_en });
                }
                if (data.light_ar || data.light_en) {
                    this.extras.push({ icon: this.assets.sun, title: this.utils.translator("light"), body: this.config.lang == 'ar' ? data.light_ar : data.light_en });
                }
                if (data.tempreture_ar || data.tempreture_en) {
                    this.extras.push({ icon: this.assets.tempreture, title: this.utils.translator("tempreture"), body: this.config.lang == 'ar' ? data.tempreture_ar : data.tempreture_en });
                }
            }
            else {
                this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                this.products = [];
                return;
            }
            this.result = data;
            this.products = this.disease_id ? data.medicines : data.products;
            for (let pro of this.products) {
                pro.count = 1;
            }
        }).catch(err => {
            this.loaded = true;
            console.log("ERR ", err);
            this.fetch.errorToast();
        });
    }
};
InstructionDetailsPage.ctorParameters = () => [
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
];
InstructionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instruction-details',
        template: __webpack_require__(/*! raw-loader!./instruction-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instructions/instruction-details/instruction-details.page.html"),
        styles: [__webpack_require__(/*! ./instruction-details.page.scss */ "./src/app/pages/instructions/instruction-details/instruction-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"],
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]])
], InstructionDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-instructions-instruction-details-instruction-details-module-es2015.js.map