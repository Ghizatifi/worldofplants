(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header2 pageName=\"profile\"></app-header2>\n<ion-content padding>\n\n  <div class=\"wrapper\" *ngIf=\"config.user\">\n    <ion-thumbnail>\n      <ion-avatar item-start>\n        <img [src]=\"imageEdited ? imgPreview : fetch.url_storage +config.user.avatar\"/>  \n\n        <ion-icon name=\"ios-create\" class=\"edit-img-icon\" (click)=\"editImage()\"></ion-icon>\n    </ion-avatar>\n     \n    </ion-thumbnail>\n\n    <!-- <form> -->\n      <ion-list>\n        <p class=\"bold\">\n        {{\"username\" | translate}}\n         </p>\n        <div class=\"bordered light_tan\">\n          <ion-input type=\"text\" [(ngModel)]=\"config.user.name\"></ion-input>\n        </div>\n\n        <p class=\"bold\">\n          {{\"phone\" | translate}}\n           </p>\n          <div class=\"bordered light_tan\">\n            <ion-input placeholder=\"+9627XXXXXXX\"  type='tel'  [(ngModel)]=\"config.user.phone\"></ion-input>\n          </div>\n\n          <p class=\"bold\">\n            {{\"email\" | translate}}\n          </p>\n            <div class=\"bordered light_tan\">\n              <ion-input placeholder=\"email\"  type='email'  [(ngModel)]=\"config.user.email\"></ion-input>\n            </div>\n  \n        <div *ngIf=\"config.user.role_id==3\">\n          <p class=\"bold\">\n            {{\"farm_size\" | translate}}\n             </p>\n            <div class=\"bordered light_tan\">\n              <ion-select  [(ngModel)]=\"farm_size\" interface=\"popover\"   placeholder=\"{{'farm_size' | translate}}\" >\n                <ion-select-option *ngFor=\"let opt of userService.all_sizes\" value=\"{{opt.id}}\">{{opt.name_ar}}</ion-select-option>\n              </ion-select>\n             </div>\n        </div>\n\n\n        <p class=\"bold\">\n          {{\"city\" | translate}}\n         </p>\n          <div class=\"bordered light_tan\">\n            <ion-select [placeholder]=\"config.user.area? config.user.area.city.name:''\" interface=\"action-sheet\"  (ionChange)=\"changeCity()\" cancelText=\"تراجع \"\n            [(ngModel)]=\"city\">\n              <ion-select-option *ngFor=\"let c of citys\" value=\"{{c.id}}\">{{c.name}}</ion-select-option>\n            </ion-select>\n          </div>\n          \n          <p class=\"bold\">\n           {{\"area\" | translate}}\n           </p>\n          <div  class=\"bordered light_tan\">\n            <ion-select [placeholder]=\"config.user.area?config.user.area.name:''\" interface=\"action-sheet\" cancelText=\"تراجع \"\n            [disabled]=\"!city\" [(ngModel)]=\"city_area\">\n              <ion-select-option *ngFor=\"let a of city_areas\" value=\"{{a.id}}\"  >{{a.name}}</ion-select-option>\n            </ion-select> \n          </div>\n      \n          <p class=\"bold\">\n            {{\"street\" | translate}}\n           </p>\n      \n          <div  class=\"bordered light_tan\">\n            <!-- <ion-icon slot=\"start\" name=\"md-pin\"></ion-icon> -->\n            <ion-input type=\"text\"  [(ngModel)]=\"street\"></ion-input>\n          </div>\n      \n          \n          <p class=\"bold\">\n           {{\"plants\"  | translate}}\n           </p>\n\n          <ion-grid>\n            <ion-row style=\"direction: ltr;\">\n              <ion-col style=\"display: flex;align-items: center;\" size=\"2\"  >\n                <ion-avatar (click)=\"addPlant()\" style=\"position: absolute;width: 45px; height: 45px; margin: 5px;background: var(--ion-color-secondary);\">\n                  <ion-icon class=\"cross_icon\" name=\"add\"></ion-icon>\n                 </ion-avatar>\n                 </ion-col>\n                 <ion-col size=\"10\">\n                  <ion-slides [options]=\"slideOpts\" style=\"padding: 5px;\"  >\n                    <ion-slide  class=\"unset_slide\" *ngFor=\"let plant of plants;index as i\">\n                      <div>\n                       <ion-avatar (click)=\"removePlant(i)\" style=\"width: 45px; height: 45px; margin: 5px;\">\n                        <ion-img class=\"rounded\" [src]=\"plant.image?  fetch.url_storage + plant.image : 'assets/images/no-image.png'\"></ion-img>\n                        <ion-icon class=\"cross_icon\" name=\"close\"></ion-icon>\n                       </ion-avatar>\n                        </div>\n                    </ion-slide>\n                  </ion-slides>\n                 </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n      </ion-list>\n\n      \n      <ion-button  class='next-btn center-block'   *ngIf=\"config.is_jordan\" expand=\"block\" (click)=\"selectLocation()\">\n        <ion-icon name=\"pin\" slot='start'></ion-icon>{{\n          config.user.lat && config.user.lng \n          ?\n          utils.translator(\"change_location\")\n          :\n          utils.translator(\"pick_location\")\n        }}\n        </ion-button>\n\n      <ion-button class='next-btn center-block' (click)=\"edit()\"  style=\"margin-top: 10px;\"\n      [disabled]=\"!config.user.name || !emailIsGood() || !config.user.phone || editing || deletingAccount\">\n      {{editing ? \"\" : utils.translator(\"save\")}}\n      <ion-spinner *ngIf=\"editing\"></ion-spinner>\n    </ion-button>\n\n\n    <ion-button class='next-btn center-block' (click)=\"deleteAccount()\" style=\"margin-top: 10px; --background: red;\"\n    [disabled]=\"editing\">\n    {{deletingAccount ? \"\" : \"delete_account\" | translate}}\n    <ion-spinner *ngIf=\"deletingAccount\"></ion-spinner>\n  </ion-button>\n    <!-- </form> -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.wrapper ion-thumbnail {\n  height: 8rem;\n  width: 50%;\n  position: relative;\n  margin: auto;\n}\n.wrapper ion-thumbnail img {\n  border-radius: 50%;\n}\n.wrapper ion-thumbnail .edit-img-icon {\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  font-size: 20px;\n  color: white;\n  background: var(--ion-color-secondary);\n  border-radius: 50%;\n  padding: 4px 4px 6px 7px;\n}\nion-avatar,\nion-avatar > img {\n  border-radius: 50%;\n  height: 6rem;\n  width: 6rem;\n  margin: auto;\n  position: relative;\n  box-shadow: 5px 10px 10px #80808024;\n}\n.fev_label {\n  border-radius: 25px;\n  margin: 0px !important;\n  padding: 0px !important;\n  text-align: center;\n  align-content: center;\n}\n.light_tan {\n  background: #d2b48c0f;\n}\np {\n  margin-bottom: 0;\n}\n.cross_icon {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 25px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQVE7RUFDSSxrQkFBQTtBQ0VaO0FEQVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNFWjtBREVBOztFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FEQ0E7RUFFSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW9uLXRodW1ibmFpbCB7ICAgXG4gICAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXQtaW1nLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDRweCA2cHggN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWF2YXRhcixcbmlvbi1hdmF0YXIgPiBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzgwODA4MDI0O1xufVxuLmZldl9sYWJlbHtcbiAgICAvL2JhY2tncm91bmQ6IHJnYigxNzAsIDIxNCwgMTY0KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpZ2h0X3RhbntcbiAgICBiYWNrZ3JvdW5kOiNkMmI0OGMwZjtcbn1cblxucHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNyb3NzX2ljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iLCIud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndyYXBwZXIgaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogOHJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG59XG4ud3JhcHBlciBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi53cmFwcGVyIGlvbi10aHVtYm5haWwgLmVkaXQtaW1nLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDRweCA0cHggNnB4IDdweDtcbn1cblxuaW9uLWF2YXRhcixcbmlvbi1hdmF0YXIgPiBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNnJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICM4MDgwODAyNDtcbn1cblxuLmZldl9sYWJlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpZ2h0X3RhbiB7XG4gIGJhY2tncm91bmQ6ICNkMmI0OGMwZjtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jcm9zc19pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_map_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.page */ "./src/app/pages/map/map.page.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _login_select_plants_select_plants_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/select-plants/select-plants.page */ "./src/app/pages/login/select-plants/select-plants.page.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _test_test_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../test/test.page */ "./src/app/pages/test/test.page.ts");








// import { OneSignal } from '@ionic-native/onesignal/ngx';




let ProfilePage = class ProfilePage {
    constructor(alertCtrl, config, fetch, actionSheetCtrl, modalCtrl, loadingCtrl, navCtrl, utils, userService) {
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.fetch = fetch;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.userService = userService;
        this.plants = [];
        this.public_ = 'public/';
        this.deletingAccount = false;
        this.slideOpts = {
            freeMode: false,
            initialSlide: 0,
            slidesPerView: 4,
            autoplay: false,
        };
        this.editing = false;
        this.config.user = JSON.parse(localStorage.getItem('user'));
        this.config.token = localStorage.getItem('token');
    }
    ngOnInit() {
        this.userService.get_plants();
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: this.utils.translator("loading")
            });
            loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            this.fetch.get('auth/user/account', headers)
                .then((res) => {
                let data;
                loading.dismiss();
                if (res.status) {
                    data = res.data;
                }
                else {
                    this.fetch.errorToast(res.msg);
                    return;
                }
                if (this.config.is_jordan) {
                    //this.getAddress();
                }
                if (data.home_type) {
                    data.home_type = data.home_type.toString();
                }
                if (data.farm_size) {
                    this.farm_size = data.farm_size.toString();
                }
                if (data.plants) {
                    let pl = [];
                    data.plants.forEach(p => {
                        pl.push(p.plants);
                    });
                    data.plants = pl;
                }
                this.street = data.address;
                this.plants = data.plants;
                this.config.user = data;
                if (this.config.user.home_type !== null)
                    this.config.user.home_type = this.config.user.home_type.toString();
                this.config.all_user_data = data;
                if (!this.config.user.city)
                    this.config.user.city = "";
                this.fetchAreas();
            }, err => {
                loading.dismiss();
                console.log("ERR ", err);
            });
        });
    }
    fetchAreas() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('auth/areas', headers)
            .then((res) => {
            let data;
            if (res.status) {
                data = res.data;
            }
            else {
                this.fetch.errorToast();
                return;
            }
            this.citys = data.citys;
            this.areas = data.areas;
            if (this.config.user.area) {
                console.log('user ', this.config.user);
                this.city = this.config.user.area.city.id;
                this.city_area = this.config.user.area.id;
            }
            this.oldEmail = this.config.user.email;
            this.oldPhone = this.config.user.phone;
        });
    }
    editImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let buttons = [
                {
                    text: this.utils.translator("take_photo"),
                    icon: 'camera',
                    handler: () => {
                        this.TakePhoto();
                    }
                },
                {
                    text: this.utils.translator("from_studio"),
                    icon: 'images',
                    handler: () => {
                        this.uploadfn();
                    }
                },
                {
                    text: this.utils.translator("cancel"),
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ];
            let actionSheet = yield this.actionSheetCtrl.create({
                buttons: buttons
            });
            actionSheet.present();
        });
    }
    edit() {
        if (this.config.user.lat == null && !this.fetch.url.includes("localhost")) {
            this.utils.toastTranslate("should_add_map_location");
            return;
        }
        if (this.phoneGood() && this.emailIsGood()) {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            let params = new FormData();
            params.append('name', this.config.user.name);
            // params.append('plants', this.plants.join(','));
            params.append('storeName', this.config.user.storeName);
            // if (this.config.user.email != this.oldEmail)
            if (this.config.user.email != null)
                params.append('email', this.config.user.email);
            if (this.config.user.phone != this.oldPhone)
                params.append('phone', this.config.user.phone);
            params.append('city', this.config.user.city);
            if (this.city_area)
                params.append('area_id', this.city_area);
            else {
                this.utils.toastTranslate("should_add_area");
                return;
            }
            params.append('latlng', this.config.user.lng + " " + this.config.user.lat);
            if (this.imageEdited)
                params.append('avatar', this.imgBlob);
            if (this.config.user.other_phone)
                params.append('other_phone', this.config.user.other_phone);
            if (this.config.user.home_type)
                params.append('home_type', this.config.user.home_type);
            params.append('address', this.street);
            if (this.password)
                params.append('password', this.password);
            if (this.plants.length > 0) {
                let ids = [];
                this.plants.forEach(pl => {
                    ids.push(pl.id);
                });
                params.append('plants', ids.join(','));
            }
            if (this.farm_size)
                params.append('farm_size', this.farm_size);
            this.editing = true;
            this.fetch.post('auth/user/edit', params, headers)
                .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data;
                if (res.status) {
                    data = res.data;
                }
                else {
                    this.fetch.errorToast(res.msg);
                }
                this.editing = false;
                if (!data.error) {
                    // this.imageEdited = false;
                    this.config.user = data;
                    this.utils.toastTranslate("account_edited_success");
                    this.config.user.area_id = this.config.user.area_id;
                    localStorage.setItem("user", JSON.stringify(this.config.user));
                    this.oldEmail = this.config.user.email;
                    this.oldPhone = this.config.user.phone;
                    this.navCtrl.pop();
                    if (this.config.user.phone_verified == 0)
                        this.navCtrl.navigateRoot("active-phone");
                }
                else {
                    this.fetch.errorToast(data.error);
                }
            }), error => this.editing = false);
        }
        else {
            this.utils.toastTranslate("phone_not_ok");
        }
    }
    phoneGood() {
        return this.config.user.phone.length >= 3;
    }
    TakePhoto() {
        var input = jquery__WEBPACK_IMPORTED_MODULE_5__(document.createElement("input"));
        input.attr("type", "file");
        input.attr("multiple", false);
        // add onchange handler if you wish to get the file :)
        let trigger = (event) => {
            console.log("CLick triggred");
            let reader = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                let file = event.target.files[0];
                reader.readAsDataURL(file);
                reader.onload = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (file.type == "image/png" || file.type == "image/x-png" || file.type == "image/jpeg") {
                        console.log(file.type);
                        // let x = (data) => this.imgblob = data;
                        this.imgPreview = yield reader.result.toString();
                        this.imgBlob = file;
                        this.imageEdited = true;
                    }
                });
            }
        };
        input.change(trigger);
        input.attr('accept', 'image/*;capture=camera');
        input.trigger("click");
    }
    uploadfn() {
        var input = jquery__WEBPACK_IMPORTED_MODULE_5__(document.createElement("input"));
        input.attr("type", "file");
        input.attr("multiple", false);
        // add onchange handler if you wish to get the file :)
        let trigger = (event) => {
            console.log("CLick triggred");
            let reader = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                let file = event.target.files[0];
                reader.readAsDataURL(file);
                reader.onload = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (file.type == "image/png" || file.type == "image/x-png" || file.type == "image/jpeg") {
                        console.log(file.type);
                        this.imgPreview = yield reader.result.toString();
                        this.imgBlob = file;
                        this.imageEdited = true;
                    }
                });
            }
        };
        input.change(trigger);
        input.attr('accept', 'image/x-png,image/png,image/jpeg');
        input.trigger("click");
    }
    selectLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.config.user.lat, this.config.user.lng);
            let modal = yield this.modalCtrl.create({
                component: _map_map_page__WEBPACK_IMPORTED_MODULE_7__["MapPage"],
                componentProps: {
                    lat: this.config.user.lat,
                    lng: this.config.user.lng,
                    showToast: true
                }
            });
            modal.onDidDismiss().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // console.log("Dismissed with data:", data);
                if (data.data && data.data.lat && data.data.lng) {
                    this.config.user.lat = data.data.lat;
                    this.config.user.lng = data.data.lng;
                    console.log("latln", this.config.user.lat);
                    console.log("latln", this.config.user.lng);
                }
            }));
            modal.present();
        });
    }
    changePasswrod() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _test_test_page__WEBPACK_IMPORTED_MODULE_11__["TestPage"],
            });
            modal.present();
        });
    }
    getAreas() {
        return this.areas ? this.areas.filter(area => area.city_id == this.city) : [];
    }
    emailIsGood() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.config.user.email)
            return true;
        else
            return re.test(this.config.user.email);
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.utils.translator("logout"),
                message: this.utils.translator("areYouSureLogout"),
                buttons: [
                    {
                        role: "cancle",
                        text: this.utils.translator("cancel"),
                    },
                    {
                        role: "cancle",
                        text: this.utils.translator("logout"),
                        handler: () => {
                            localStorage.setItem('token', "");
                            this.navCtrl.navigateRoot('login');
                            this.config.user = [];
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    changeCity() {
        this.city_areas = this.areas.filter((a) => a.city_id == this.city);
    }
    addPlant() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _login_select_plants_select_plants_page__WEBPACK_IMPORTED_MODULE_9__["SelectPlantsPage"],
                componentProps: { selected_plants_pushed: this.plants }
            });
            yield modal.present();
            modal.onDidDismiss().then((res) => {
                this.plants = res.data.plants;
            });
        });
    }
    removePlant(index) {
        console.log("remote");
        this.plants.splice(index, 1);
    }
    deleteAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.config.translateInstant("delete_account"),
                message: this.config.translateInstant("are_you_sure_delete"),
                buttons: [
                    {
                        role: "cancle",
                        text: this.config.translateInstant("cancel"),
                    },
                    {
                        text: this.config.translateInstant("confirm"),
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let lnk = "auth/account/delete";
                            let loading = yield this.loadingCtrl.create({
                                message: this.config.translate.instant("loading")
                            });
                            this.deletingAccount = true;
                            loading.present();
                            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
                            this.fetch.get(lnk, headers)
                                .then((res) => {
                                this.deletingAccount = false;
                                loading.dismiss();
                                localStorage.clear();
                                this.navCtrl.navigateRoot("login");
                            }, err => {
                                this.deletingAccount = false;
                                loading.dismiss();
                            }).catch((e) => {
                                this.deletingAccount = false;
                                loading.dismiss();
                            });
                        })
                    }
                ]
            });
            alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map