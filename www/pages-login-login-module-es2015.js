(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content dir=\"ltr\">\n  <img style=\"width: 100%;\" src=\"assets/images/Login.png\"/>\n\n  <div class=\"wrapper\" *ngIf=\"screen == '' && loginRoleId\">\n    <div class=\"buttons\">\n      <img src=\"assets/images/logo.png\"/>\n      <ion-button (click)=\"screen = 'register' ;loginRoleId = 2\">\n        {{\"register_user\"  | translate}}\n      </ion-button>\n      <ion-button   (click)=\"screen = 'login'\">\n        {{\"login\"  | translate}}\n      </ion-button>\n      \n    </div>\n  </div>\n\n  <div class=\"login\" *ngIf=\"screen == 'login'\">\n    <h4 style=\"color: #002F06;font-weight: bolder;\">\n      أهلا و سهلا بك\n    </h4>\n    <p>\n      قم بتسجيل دخول لبدء رحلتك معنا\n    </p>\n    <form [formGroup]=\"loginForm\">\n      <ion-item lines=\"inset\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\" style=\"display: flex;align-items: center\" (click)=\"changeCountry()\">\n                  <img [src]=\"CountryFlag\"  class=\" no-left \" style=\"margin: 0;\" no-padding no-margin>\n                  <h1 style=\"font-size: 16px;margin: 0;font-weight:500;\">{{CountryCode}}</h1>\n             </ion-col>\n            <ion-col size=\"8\">\n              <ion-input formControlName=\"phone\" placeholder=\"79XXXXXXXX\"  type='tel' dir=\"ltr\">\n              </ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n  \n      <ion-item lines=\"inset\">\n          <ion-icon class=\"show-option\" [hidden]=\"showPassword\" name=\"eye-off\" (click)=\"toggleShow()\"></ion-icon>\n          <ion-icon class=\"hide-option\" [hidden]=\"!showPassword\" name=\"eye\"  (click)=\"toggleShow()\"></ion-icon>\n       \n        <ion-input formControlName=\"password\" style=\"--padding-start: 40px;\" dir=\"auto\" \n        [type]=\"showPassword?'text':'password'\" placeholder=\" كلمة المرور\">\n        </ion-input>\n      </ion-item>\n\n      <div style=\"padding-top: 10px;\">\n\n      </div>\n      <ion-button rounded class=\"submit-btn\" [disabled]=\"!loginForm.valid || disableSubmit\" (click)=\"login()\"  >\n        {{\"login\"  | translate}}\n      </ion-button>\n\n      <p class=\"aot-login\" >\n        ليس لديك حساب؟ <a (click)=\"screen = 'register'\">إنشاء حساب</a>\n      </p>\n\n      <!-- <ion-button (click)=\"goToForgetPage()\" style=\"--color: var(--ion-color-danger);--box-shadow: none;--background: transparent;text-decoration: underline;font-size: 12px;margin-top: 20px;\">\n        نسيت كلمة السر؟\n      </ion-button> -->\n    </form>\n  </div>\n\n  \n \n\n  <div class=\"register\" *ngIf=\"screen == 'register'\">\n      <form [formGroup]=\"regForm\">\n\n        <ion-item lines=\"inset\">\n          <ion-icon name=\"md-person\" slot=\"start\"></ion-icon>\n          <ion-input formControlName=\"username\"  type='text' placeholder=\" الإسم\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon  slot=\"start\" name=\"ios-contacts\"></ion-icon>\n          <ion-label> {{\"user_type\" | translate}}</ion-label>\n          <ion-select value=\"2\"   interface=\"popover\" placeholder=\"{{'user_type' | translate}}\" (ionChange)=\"change($event)\" >\n            \n            <ion-select-option  value=\"2\">{{\"user\" | translate}}</ion-select-option>\n            <ion-select-option  value=\"3\">{{\"farmer\" | translate}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div *ngIf=\"loginRoleId==3\">\n          <!-- <ion-item>\n            <ion-label>{{'planted_plants' | translate}} </ion-label>\n            <ion-select formControlName=\"plants\"  multiple=\"true\" placeholder=\"{{'planted_plants' | translate}}\"  >\n              \n              <ion-select-option *ngFor=\"let opt of userService.all_plants\" value=\"{{opt.id}}\">{{opt.name_ar}}</ion-select-option>\n            </ion-select>\n          </ion-item> -->\n\n          <ion-item>\n            <ion-icon name=\"ios-expand\" slot=\"start\"></ion-icon>\n            <ion-label>{{'farm_size' | translate}}</ion-label>\n            <ion-select  formControlName=\"size\" interface=\"popover\"   placeholder=\"{{'farm_size' | translate}}\" >\n              <ion-select-option *ngFor=\"let opt of userService.all_sizes\" value=\"{{opt.id}}\">{{opt.name_ar}}</ion-select-option>\n            </ion-select>\n          </ion-item> \n        </div>\n<!-- \n        <div *ngIf=\"loginRoleId==2\">\n          <ion-item>\n            <ion-label>{{'fev_plants' | translate}}</ion-label>\n            <ion-select formControlName=\"plants\" multiple=\"true\" placeholder=\"{{'fev_plants' | translate}}\" >\n              <ion-select-option *ngFor=\"let opt of userService.all_plants\" value=\"{{opt.id}}\">{{opt.name_ar}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n         -->\n        <ion-item lines=\"inset\">\n          <ion-grid>\n            <ion-row dir=\"rtl\">\n              <!-- <ion-col size=\"2\" style=\"display: flex;align-items: center;\">\n                <ion-icon name=\"call\"></ion-icon>\n              </ion-col> -->\n              <ion-col size=\"8\">\n                <ion-input formControlName=\"phone\" placeholder=\"7XXXXXXX\"  type='tel'>\n                </ion-input>\n              </ion-col>\n              <!-- <ion-col size=\"2\">\n                <p>+123</p>\n              </ion-col> -->\n              <ion-col size=\"4\" style=\"display: flex;align-items: center\" (click)=\"changeCountry()\">\n                <!-- <img [src]=\"CountryFlag\"  class=\"img\" no-padding no-margin> -->\n                <h1 style=\"font-size: 16px;margin: 0;font-weight:900;padding-bottom: 10px;\">{{CountryCode}}</h1>\n               \n                    <img [src]=\"CountryFlag\"  class=\" no-left \" no-padding no-margin>\n                \n               \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <!-- <ion-icon name=\"call\" slot=\"start\"></ion-icon> -->\n        </ion-item>\n    <!-- \n        <ion-item>\n          <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n          <ion-select formControlName=\"home_type\"  multiple=\"false\" placeholder=\"{{'نوع السكن' | translate}}\"  >\n            \n            <ion-select-option *ngFor=\"let opt of homeTypes\" value=\"{{opt.id}}\">{{opt.name_ar}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"inset\">\n          <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n          <ion-input formControlName=\"phone2\"  type='tel' placeholder=\" رقم هاتف اخر\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item lines=\"inset\">\n          <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n          <ion-input formControlName=\"address2\"  type='text' placeholder=\"وصف دقيق للسكن\">\n          </ion-input>\n        </ion-item>\n -->\n        <ion-item lines=\"inset\">\n          <!-- <ion-icon name=\"md-lock\" slot=\"start\"></ion-icon>\n           -->\n           <ion-icon class=\"show-option\" [hidden]=\"showPasswordReg\" name=\"eye-off\" (click)=\"toggleShowReg()\"></ion-icon>\n           <ion-icon class=\"hide-option\" [hidden]=\"!showPasswordReg\" name=\"eye\"  (click)=\"toggleShowReg()\"></ion-icon>\n        \n          <ion-input formControlName=\"password\" style=\"--padding-start: 40px;border-width: 1px; border-radius: 10px;\"   dir=\"auto\" \n         [type]=\"showPasswordReg?'text':'password'\"  placeholder=\" كلمة المرور\">\n          </ion-input>\n        </ion-item>\n        \n        <ion-item lines=\"inset\">\n          <!-- <ion-icon name=\"md-lock\" slot=\"start\"></ion-icon> -->\n          <ion-icon class=\"show-option\" [hidden]=\"showPasswordRegConf\" name=\"eye-off\" (click)=\"toggleShowConf()\"></ion-icon>\n          <ion-icon class=\"hide-option\" [hidden]=\"!showPasswordRegConf\" name=\"eye\"  (click)=\"toggleShowConf()\"></ion-icon>\n       \n          <ion-input formControlName=\"confirmPassword\" style=\"--padding-start: 40px;\" dir=\"auto\" \n         [type]=\"showPasswordRegConf?'text':'password'\"  placeholder=\" تأكيد كلمة المرور\">\n          </ion-input>\n        </ion-item>\n        <ion-item >\n          <ion-label>{{\"acceptTerms\" | translate}}</ion-label>\n          <ion-checkbox slot=\"end\" formControlName=\"acceptTerms\" ></ion-checkbox>\n        </ion-item>\n        <p class=\"aot-login\" >\n          <a (click)=\"terms()\">{{\"terms\" | translate}}</a>\n        </p>\n        <ion-button class=\"submit-btn\" [disabled]=\"!regForm.controls.acceptTerms.value\" (click)=\"signup()\">\n          تسجيل حساب\n        </ion-button>\n  \n        <p class=\"aot-login\" >\n          لديك حساب؟ <a (click)=\"screen = 'login'\">تسجيل الدخول</a>\n        </p>\n        \n      </form>\n  </div>\n\n  <div class=\"register\" *ngIf=\"screen == 'forget'\">\n    <ion-fab horizontal=\"start\" vertical=\"top\">\n      <ion-fab-button style=\"--color: var(--ion-color-danger);--box-shadow: none;--background: transparent;\" (click)=\"screen = '';forgetEmail='';\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <form>\n      <ion-item lines=\"inset\">\n        <ion-icon name=\"md-mail\" slot=\"start\"></ion-icon>\n        <ion-input [(ngModel)]=\"forgetEmail\" [ngModelOptions]=\"{standalone: true}\" type='text' placeholder=\" الإيميل\">\n        </ion-input>\n      </ion-item>\n      <ion-button class=\"submit-btn\" [disabled]=\"!isEmail(forgetEmail) || loading\" (click)=\"forget()\">\n        {{\n          loading\n          ?\n          \"\"\n          :\n          \"إرسال كلمة السر\"\n        }}\n        <ion-spinner *ngIf=\"loading\"></ion-spinner>\n      </ion-button>\n    </form>\n  </div>\n\n  <img [src]=\"imgSrc\" style=\"opacity: none;position: absolute;left:-50%;\" *ngIf=\"imgSrc\"/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper, .login, .register {\n  width: 100%;\n  background: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.wrapper {\n  /* \n  ion-button {\n      margin-top: 10px;\n      margin-bottom: 10px;\n      --background: white;\n      --color: #48a240;\n  }\n\n\n  ion-button:nth-of-type(4) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n      --background: #48a240;;\n      --color: white;\n  } */\n}\n\nimg {\n  width: 50%;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.social-login {\n  text-align: center;\n}\n\n.social-login div {\n  text-align: center;\n}\n\n.social-login ion-icon {\n  font-size: 50px;\n  margin: 15px;\n}\n\nform {\n  text-align: center;\n}\n\nform ion-item {\n  --padding-end: 15px;\n}\n\nimg {\n  margin-bottom: 15px;\n}\n\n.role-id {\n  /* \n  ion-button {\n      width: 50%;\n      --border-radius: 0;\n      border: 2px solid #48a240;\n      --box-shadow: none;\n      height: 50px;\n  }\n  ion-button:nth-of-type(1) {\n      --background: #48a240;\n      --color: white;\n      transform: scale(1.1);\n  }\n  ion-button:nth-of-type(2) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n      --background: white;\n      --color: #48a240;\n  } */\n}\n\n.placeholder-ltr {\n  direction: rtl;\n}\n\n.placeholder-ltr.has-focus {\n  direction: ltr;\n}\n\n.box {\n  height: 90%;\n  border-radius: 10px;\n  padding: 0px;\n  left: 0px;\n  padding-left: 0px;\n}\n\n.no-left {\n  left: 0px;\n  padding-left: 0px !important;\n  margin-left: 0px !important;\n  left: 0px;\n}\n\n.flag {\n  padding: 0px;\n  margin: 0px;\n  left: 0px;\n}\n\n.aot-login {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSTs7Ozs7Ozs7Ozs7Ozs7S0FBQTtBQ2VKOztBRENBO0VBQ0ksVUFBQTtBQ0VKOztBREFBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FERkk7RUFBTSxrQkFBQTtBQ0tWOztBREpJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNNUjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESkk7RUFDSSxtQkFBQTtBQ01SOztBREZBO0VBQ0ksbUJBQUE7QUNLSjs7QURGQTtFQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQTtBQ3dCVjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7QUNPSjs7QURKQTtFQUdJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURHQTtFQUNJLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREo7O0FES0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLCAubG9naW4sIC5yZWdpc3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuLndyYXBwZXIge1xuICAgIC8qIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAtLWNvbG9yOiAjNDhhMjQwO1xuICAgIH1cblxuXG4gICAgaW9uLWJ1dHRvbjpudGgtb2YtdHlwZSg0KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzQ4YTI0MDs7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH0gKi9cbn1cbmltZyB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5idXR0b25zICB7XG4gICAgLy9mbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc29jaWFsLWxvZ2luIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGl2IHsgdGV4dC1hbGlnbjogY2VudGVyIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgIH1cbn1cblxuZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgICB9XG59XG5cbmltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJvbGUtaWQgey8qIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0OGEyNDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBpb24tYnV0dG9uOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNDhhMjQwO1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgICBpb24tYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLS1jb2xvcjogIzQ4YTI0MDtcbiAgICB9ICovXG59XG5cbi5wbGFjZWhvbGRlci1sdHIge1xuICAgIGRpcmVjdGlvbjogcnRsO1xufVxuLnBsYWNlaG9sZGVyLWx0ci5oYXMtZm9jdXMge1xuICAgIGRpcmVjdGlvbjogbHRyO1xufVxuXG4uYm94e1xuICAgIC8vIC0tYmFja2dyb3VuZDogJGl0ZW0tYmFjay1jb2xvcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkaXRlbS1iYWNrLWNvbG9yO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxuXG4uaW1ne1xuICAgIC8vIHdpZHRoOiA0MCU7XG59XG5cblxuLm5vLWxlZnR7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweDtcbn1cblxuLmZsYWd7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICBcbiAgXG4gIH1cbiAgLmFvdC1sb2dpbntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH0iLCIud3JhcHBlciwgLmxvZ2luLCAucmVnaXN0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi53cmFwcGVyIHtcbiAgLyogXG4gIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLS1jb2xvcjogIzQ4YTI0MDtcbiAgfVxuXG5cbiAgaW9uLWJ1dHRvbjpudGgtb2YtdHlwZSg0KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogIzQ4YTI0MDs7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfSAqL1xufVxuXG5pbWcge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc29jaWFsLWxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbC1sb2dpbiBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc29jaWFsLWxvZ2luIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb3JtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJvbGUtaWQge1xuICAvKiBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzQ4YTI0MDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgfVxuICBpb24tYnV0dG9uOm50aC1vZi10eXBlKDEpIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzQ4YTI0MDtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIGlvbi1idXR0b246bnRoLW9mLXR5cGUoMikge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLS1jb2xvcjogIzQ4YTI0MDtcbiAgfSAqL1xufVxuXG4ucGxhY2Vob2xkZXItbHRyIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5wbGFjZWhvbGRlci1sdHIuaGFzLWZvY3VzIHtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi5ib3gge1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubm8tbGVmdCB7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5mbGFnIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uYW90LWxvZ2luIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/pages/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");











let LoginPage = class LoginPage {
    constructor(iab, fb, config, fetch, navCtrl, userService, popover, actionSheet, utils) {
        this.iab = iab;
        this.fb = fb;
        this.config = config;
        this.fetch = fetch;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.popover = popover;
        this.actionSheet = actionSheet;
        this.utils = utils;
        this.screen = "login";
        this.showPassword = false;
        this.showPasswordReg = false;
        this.showPasswordRegConf = false;
        this.acceptTerms = false;
        this.CountryCode = '+962';
        this.selectedCountry = { name: 'الاردن', name_en: 'Jordan', dial_code: '+962', code: 'AW', flag: '../../../assets/imgs/flags/jordan.png' };
        this.homeTypes = [
            {
                name_ar: "منزل",
                name_en: "House",
                id: 0
            }, {
                name_ar: "شقة",
                name_en: "Apartment",
                id: 1
            }, {
                name_ar: "مكتب",
                name_en: "Office",
                id: 2
            },
        ];
        this.CountryFlag = '../../../assets/images/flags/jordan.png';
        this.CountryJson = [
            { name: 'الولاايات المتحدة', name_en: 'US', dial_code: '+1', code: 'US', flag: '../../../assets/images/flags/saudi.png' },
            { name: 'السودان', name_en: 'SD', dial_code: '+249', code: 'SD', flag: '../../../assets/images/flags/saudi.png' },
            { name: 'السعودية', name_en: 'Saudi Aribia', dial_code: '+966', code: 'SA', flag: '../../../assets/images/flags/saudi.png' },
            { name: 'مصر', name_en: 'Egypt', dial_code: '+20', code: 'EG', flag: '../../../assets/images/flags/egypt.png' },
            { name: 'الامارات', name_en: ' United Arab Emirates', dial_code: '+971', code: 'AE', flag: '../../../assets/images/flags/emarats.png' },
            { name: 'الكويت', name_en: 'Kuwait', dial_code: '+965', code: 'KW', flag: '../../../assets/images/flags/kuwait.png' },
            { name: 'قطر', name_en: 'Qatar', dial_code: '+974', code: 'AS', flag: '../../../assets/images/flags/qatar.png' },
            { name: 'المغرب', name_en: 'Moroco', dial_code: '+212', code: 'AD', flag: '../../../assets/images/flags/morocco.png' },
            { name: 'تركيا', name_en: 'Turkey', dial_code: '+90', code: 'AO', flag: '../../../assets/images/flags/turkey.png' },
            { name: 'البحرين', name_en: 'Bahreen', dial_code: '+973', code: 'AI', flag: '../../../assets/images/flags/bahrain.png' },
            { name: 'الجزائر', name_en: 'Algeria', dial_code: '+213', code: 'AG', flag: '../../../assets/images/flags/algeria.png' },
            { name: 'تونس', name_en: 'Tunisia', dial_code: '+216', code: 'TU', flag: '../../../assets/images/flags/tunisia.png' },
            { name: 'سوريا', name_en: 'Syria', dial_code: '+963', code: 'TU', flag: '../../../assets/images/flags/syria.png' },
            { name: 'العراق', name_en: 'Iraq', dial_code: '+964', code: 'TU', flag: '../../../assets/images/flags/iraq.png' },
            { name: 'فلسطين', name_en: 'Palestine', dial_code: '+970', code: 'AM', flag: '../../../assets/images/flags/palestine.png' },
            { name: 'الاردن', name_en: 'Jordan', dial_code: '+962', code: 'AW', flag: '../../../assets/images/flags/jordan.png' },
        ];
        this.lang = 'ar';
        this.disableSubmit = false;
        this.imgSrc = "";
        this.loginRoleId = 2;
        this.forgetEmail = "";
    }
    toggleShow() {
        this.showPassword = !this.showPassword;
    }
    toggleShowReg() {
        this.showPasswordReg = !this.showPasswordReg;
    }
    toggleShowConf() {
        this.showPasswordRegConf = !this.showPasswordRegConf;
    }
    change(ev) {
        this.loginRoleId = ev.target.value;
    }
    ngOnInit() {
        //load plants to select fevourites
        this.get_plants();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]))
        });
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            plants: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                ,
            ])),
            storeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                ,
            ])),
            open_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])),
            close_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            acceptTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])),
            home_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])),
        });
    }
    get_plants() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userService.all_plants.length > 0)
                return;
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
            yield this.fetch.get('plants', header)
                .then((res) => {
                let data;
                if (res) {
                    data = res.data;
                    this.userService.all_plants = data.plants;
                    this.userService.all_sizes = data.size;
                    this.userService.terms = data.config.terms;
                    console.log("plants ", data);
                }
                else {
                    this.fetch.errorToast();
                    return;
                }
                this.config.all_user_data = data;
                this.config.user = data;
            }, err => { console.log("ERR ", err); });
        });
    }
    login() {
        if (this.loginForm.status == "VALID") {
            this.disableSubmit = true;
            let params = new FormData();
            this.utils.loadingPresent();
            params.append('phone', this.CountryCode.slice(1, this.CountryCode.length) + (this.loginForm.controls.phone.value.length >= "10" ? this.loginForm.controls.phone.value.slice(1, this.loginForm.controls.phone.value.length) : this.loginForm.controls.phone.value));
            params.append('password', this.loginForm.controls.password.value);
            params.append('device_id', this.config.device_id);
            this.fetch.post('auth/login', params)
                .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.utils.loadingDismiss();
                console.log("data ", data);
                this.disableSubmit = false;
                this.disableSubmit = false;
                if (data.access_token) {
                    localStorage.setItem("token", data.access_token);
                    localStorage.setItem("role_id", data.user.role_id);
                    console.log("data ", data);
                    let ph = data.user.phone[0] + data.user.phone[1] + data.user.phone[2];
                    console.log("ph iz ", ph);
                    if (ph == '962') {
                        localStorage.setItem("is_jordan", "1");
                        this.config.is_jordan = true;
                    }
                    else {
                        localStorage.setItem("is_jordan", "0");
                        this.config.is_jordan = false;
                    }
                    console.log("IS JORDAN ", this.config.is_jordan);
                    this.userService.user = data.user;
                    localStorage.setItem("user", JSON.stringify(this.userService.user));
                    this.config.user = data.user;
                    this.preformLogin(data.access_token, data.user.role_id, data.user.user_id);
                }
                else {
                    this.utils.toastTranslate("phone_or_password_wrong");
                }
            }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.utils.loadingDismiss();
                this.disableSubmit = false;
                this.utils.toastTranslate("phone_or_password_wrong");
            }));
        }
    }
    forget() {
        let params = new FormData();
        this.loading = true;
        this.fetch.post('auth/forget', params)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = false;
        }), error => {
            this.loading = false;
            this.fetch.errorToast();
        });
    }
    isEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    signup() {
        if (this.regForm.status == "VALID" && this.regForm.controls.password.value == this.regForm.controls.confirmPassword.value) {
            if (this.regForm.controls.password.value.length < 8) {
                this.fetch.errorToast("كلمة المرور يجب ألا تقل عن 8 خانات");
                return;
            }
            if (this.regForm.controls.phone.value.length !== 9) {
                this.fetch.errorToast("رقم الهاتف يجب ان يتكون من 9 أرقام");
                return;
            }
            this.disableSubmit = true;
            this.utils.loadingPresent();
            let params = new FormData();
            this.config.user.phone = (this.CountryCode + this.regForm.controls.phone.value).split('+')[1];
            params.append('phone', this.CountryCode.slice(1, this.CountryCode.length) + this.regForm.controls.phone.value); //this.regForm.controls.phone.value);
            params.append('name', this.regForm.controls.username.value);
            params.append('storeName', this.regForm.controls.storeName.value);
            params.append('password', this.regForm.controls.password.value);
            params.append('farm_size', this.regForm.controls.size.value);
            params.append('email', this.regForm.controls.email.value);
            params.append('phone2', this.regForm.controls.phone2.value);
            params.append('address2', this.regForm.controls.address2.value);
            params.append('home_type', this.regForm.controls.home_type.value);
            params.append('role_name', this.loginRoleId == 2 ? 'user' : 'farmer');
            params.append('device_id', this.config.device_id);
            // params.append('plants', this.regForm.controls.plants.value.join(','));
            var route = "auth/signup";
            this.fetch.post(route, params)
                .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.utils.loadingDismiss();
                this.disableSubmit = false;
                var user = data.user;
                user.token = data.access_token;
                localStorage.setItem("user", JSON.stringify(user));
                this.config.user = user;
                if (data.access_token) {
                    this.config.all_user_data = data;
                    localStorage.setItem("token", data.access_token);
                    localStorage.setItem("role_id", "2");
                    if (this.CountryCode == '+962') {
                        localStorage.setItem("is_jordan", "1");
                        this.config.is_jordan = true;
                    }
                    else {
                        localStorage.setItem("is_jordan", "0");
                        this.config.is_jordan = false;
                    }
                    this.preformRegister(data.access_token, this.loginRoleId, data.user_id);
                }
                else {
                    this.fetch.errorToast(data.error);
                }
            }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("error", error);
                this.utils.loadingDismiss();
                this.utils.toast(error.error.text);
            }));
        }
        else {
            if (this.regForm.controls.password.value != this.regForm.controls.confirmPassword.value) {
                this.fetch.errorToast("كلمة السر غير متطابقة");
            }
            else if (this.regForm.controls.phone.status != 'VALID') {
                this.fetch.errorToast("رقم الهاتف غير صحيح");
            }
            else {
                this.fetch.errorToast("جميع الحقول مطلوبة");
            }
        }
    }
    preformRegister(access_token, role_id, user_id) {
        this.config.token = access_token;
        this.config.role_id = role_id;
        this.config.user.id = user_id;
        if (!this.config.user.token) {
            this.config.user.token = access_token;
        }
        // this.oneSignal.sendTag('userId', user_id);
        // this.oneSignal.sendTag('roleId', role_id);
        this.navCtrl.navigateRoot(['select-plants'], { queryParams: { role_id } });
    }
    preformLogin(access_token, role_id, user_id) {
        this.config.token = access_token;
        this.config.role_id = role_id;
        // this.config.user.id = user_id;
        if (!this.config.user.token) {
            this.config.user.token = access_token;
        }
        // this.oneSignal.sendTag('userId', user_id);
        // this.oneSignal.sendTag('roleId', role_id);
        this.navCtrl.navigateRoot('tabs/home');
    }
    getUserDetailf(userid) {
    }
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    goToForgetPage() {
        this.navCtrl.navigateForward("forget");
    }
    changeCountry() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let header = '';
            if (this.lang == 'ar')
                header = 'اختر الدولة';
            else
                header = 'Choose Country';
            const actionSheet = yield this.actionSheet.create({
                cssClass: 'action-sheet',
                header: header,
                buttons: []
            });
            actionSheet.buttons = [];
            for (let i = 0; i < this.CountryJson.length; i++) {
                if (this.lang == 'ar') {
                    actionSheet.buttons.push({ 'text': this.CountryJson[i].name + '  ' + this.CountryJson[i].dial_code, role: 'destructive',
                        handler: () => {
                            this.selectCountry(i);
                        }
                    });
                }
                else {
                    actionSheet.buttons.push({ 'text': this.CountryJson[i].name_en + '  ' + this.CountryJson[i].dial_code, role: 'destructive',
                        handler: () => {
                            this.selectCountry(i);
                        }
                    });
                }
            }
            yield actionSheet.present();
        });
    }
    selectCountry(index) {
        this.CountryCode = this.CountryJson[index].dial_code;
        this.CountryFlag = this.CountryJson[index].flag;
        console.log("Country code ", this.CountryCode);
    }
    acceptTermsFunc() {
        console.log("acc ", this.acceptTerms);
        this.acceptTerms = !this.acceptTerms;
    }
    _terms() {
        const browser = this.iab.create('http://slyd4r.net/privacy-policy');
    }
    terms() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = this.popover.create({
                component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyPage"],
                componentProps: {}
            });
            (yield modal).onDidDismiss().then((data) => {
            });
            return (yield modal).present();
        });
    }
    test() {
        this.navCtrl.navigateForward("detect");
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map