(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-plant-select-plant-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/select-plant/select-plant.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/select-plant/select-plant.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 [hide_tail]=\"true\" pageName=\"health_diagnosis\"></app-header2>\n<ion-content *ngIf=\"instruction\">\n  <div class=\"card\" *ngFor=\"let ins of instructions;index as i\">\n    <div class=\"pager\">\n      {{i+1}}\n    </div>\n    <ion-grid style=\"display: flex;align-items: center;\" class=\"bordered\">\n      <div>\n        <img *ngIf=\"ins.image\" style=\"padding: 10px; width: 100px;\" [src]=ins.image alt=\"\">\n        <ion-icon *ngIf=\"ins.icon\" style=\"font-size: 40px; margin: 10px;\" [src]=ins.icon ></ion-icon>\n      </div>\n     <div>\n      <div>\n        <h3 style=\"font: 'ralewaybold'; font-size: 18px !important;color:#118B00; font-weight: bolder;\">\n          {{ins.header | translate}}\n        </h3>\n      </div>\n      <div >\n        <h5 style=\"font: 'ralewaybold'; font-size: 16px !important\">{{ins.body | translate}}</h5>\n      </div>\n     </div>\n     \n    </ion-grid>\n  </div>\n  <ion-button class=\"next-btn\" style=\"display: block; margin: auto; margin-top: 30px;\" (click)=\"instruction=false\"> {{\"select_plant\" | translate}}</ion-button>\n</ion-content>\n<ion-content *ngIf=\"loaded && !instruction\">\n  <div style=\"padding: 30px;padding-bottom: 0;\">\n    <p style=\"font-size: 20px; font-weight: bold;\">\n     {{\"what_plant_you_want_to_diagnosis\" | translate}}\n    </p>\n  </div>\n  <ion-grid style=\"padding: 40px;padding-top: 0;\">\n    <ion-row>\n      <ion-col  size=\"4\" *ngFor=\"let plant of plants\" (click)=\"show(plant)\">\n        <ion-img class=\"rounded\" [src]=\"plant.image?  fetch.url_storage + plant.image : 'assets/images/no-image.png'\"></ion-img>\n        <p style=\"text-align: center;padding: 0px;margin-top: 0;\"> {{config.translate.currentLang=='en'?plant.name_en: plant.name_ar}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/select-plant/select-plant.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/select-plant/select-plant.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectPlantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlantPageModule", function() { return SelectPlantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_plant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-plant.page */ "./src/app/pages/select-plant/select-plant.page.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _select_plant_page__WEBPACK_IMPORTED_MODULE_6__["SelectPlantPage"]
    }
];
let SelectPlantPageModule = class SelectPlantPageModule {
};
SelectPlantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_select_plant_page__WEBPACK_IMPORTED_MODULE_6__["SelectPlantPage"]]
    })
], SelectPlantPageModule);



/***/ }),

/***/ "./src/app/pages/select-plant/select-plant.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/select-plant/select-plant.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-img {\n  width: 90%;\n  aspect-ratio: 1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: inherit;\n     object-position: inherit;\n  border-radius: 100px !important;\n  overflow: hidden;\n  margin-bottom: 0px;\n}\n\n.card {\n  position: relative;\n  margin: 16px;\n  border-radius: 5px;\n}\n\n.pager {\n  width: 30px;\n  height: 30px;\n  background: white;\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-secondary);\n  position: absolute;\n  left: -10px;\n  top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9zZWxlY3QtcGxhbnQvc2VsZWN0LXBsYW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VsZWN0LXBsYW50L3NlbGVjdC1wbGFudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwyQkFBQTtLQUFBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZWN0LXBsYW50L3NlbGVjdC1wbGFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1ne1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlcntcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTEwcHg7XG59IiwiaW9uLWltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wYWdlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0xMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/select-plant/select-plant.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/select-plant/select-plant.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectPlantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlantPage", function() { return SelectPlantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _subscribe_subscribe_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subscribe/subscribe.page */ "./src/app/pages/subscribe/subscribe.page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");










let SelectPlantPage = class SelectPlantPage {
    constructor(navCtrl, fetch, config, notificationsService, actionSheetCtrl, modalCtrl, userService) {
        this.navCtrl = navCtrl;
        this.fetch = fetch;
        this.config = config;
        this.notificationsService = notificationsService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_9__["Assets"];
        this.instruction = true;
        this.instructions = [
            {
                header: "select_plant_instructions.take_photo",
                image: "assets/images/home page/diagnosis.png",
                body: "select_plant_instructions.take_photo_body",
            },
            {
                header: "select_plant_instructions.diagnosis",
                icon: this.assets.invoice,
                body: "select_plant_instructions.diagnosis_body",
            },
            {
                header: "select_plant_instructions.get_medicine",
                icon: this.assets.medicine,
                body: "select_plant_instructions.get_medicine_body",
            }
        ];
        this.loaded = false;
        this.plants = [1, 2, 3, 4, 5, 5, 6];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loaded = true;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.get('plants', headers)
                .then((res) => {
                this.loaded = true;
                this.plants = res.data.plants;
            }).catch(err => {
            });
        });
    }
    show(prod) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let lang = this.config.translate.currentLang;
            console.log("curent is ", lang);
            let buttons = [
                {
                    text: lang == 'en' ? "cancel" : "إلغاء",
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ];
            let x = {};
            prod.categories = [
                {
                    name_en: "Fruit",
                    name_ar: "الثمرة",
                    url: prod.fruit
                },
                {
                    name_en: "Leaf",
                    name_ar: "الأوراق",
                    url: prod.leaf
                },
                {
                    name_en: "Root",
                    name_ar: "الجزور",
                    url: prod.root
                },
            ];
            if (prod.categories) {
                prod.categories.forEach(element => {
                    if (element.url) {
                        buttons.push({
                            text: lang == 'en' ? element.name_en : element.name_ar,
                            handler: () => {
                                this.go_detect(element);
                            }
                        });
                    }
                });
            }
            if (prod.vip) {
                this.fetch.errorToast('يجب عليك الإشتراك في إحدى الباقات');
                this.subscribe();
            }
            else {
                let act = yield this.actionSheetCtrl.create({
                    mode: "ios",
                    buttons: buttons
                });
                act.present();
                // this.navCtrl.navigateForward('detect');
            }
        });
    }
    go_detect(prod) {
        this.navCtrl.navigateForward(['detect'], { queryParams: prod });
    }
    subscribe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = this.modalCtrl.create({
                component: _subscribe_subscribe_page__WEBPACK_IMPORTED_MODULE_7__["SubscribePage"]
            });
            (yield modal).present();
        });
    }
};
SelectPlantPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
SelectPlantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-plant',
        template: __webpack_require__(/*! raw-loader!./select-plant.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/select-plant/select-plant.page.html"),
        styles: [__webpack_require__(/*! ./select-plant.page.scss */ "./src/app/pages/select-plant/select-plant.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
], SelectPlantPage);



/***/ })

}]);
//# sourceMappingURL=select-plant-select-plant-module-es2015.js.map