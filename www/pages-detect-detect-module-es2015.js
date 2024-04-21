(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detect-detect-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detect/detect.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detect/detect.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content dir=\"rtl\" class='custom-ion-content'>\n\n  <img src=\"assets/images/scanner.svg\" class='middle' alt=\"\">\n \n\n  <div class=\"ranger\">\n    <!-- <ngx-slider [(value)]=\"value\" [options]=\"sliderOptions\"></ngx-slider> -->\n  <ion-range style=\"direction: rtl;\" min=\"1\" max=\"100\" pin color=\"secondary\" [(ngModel)]=\"setZoom\" (ionChange)=\"changeZoom()\">\n    <ion-icon slot=\"end\" size=\"small\" name=\"add\"></ion-icon>\n    <ion-icon slot=\"start\" name=\"remove\"></ion-icon>\n  </ion-range>\n</div>\n</ion-content>\n\n<ion-footer >\n  <div>\n  <ion-grid fixed>\n    <ion-row text-center justify-content-center item-align-items-center >\n     <ion-col size=\"4\">\n      <ion-chip color=\"secondary\" (click)=\"tips()\" style=\"font-size:18px;\">\n        <ion-label>{{\"tips_camera\" | translate}}</ion-label>\n        <ion-icon name=\"help\"></ion-icon>\n\n      </ion-chip>\n     </ion-col>\n\n     <ion-col size=\"4\"   >\n       <ion-button (click)=\"takePicture()\" color=\"primary\"  expand=\"block\" fill=\"clear\" shape=\"round\"> \n        <ion-icon   name=\"radio-button-on\" color=\"primary\" style=\"font-size:22px;zoom: 2 \"></ion-icon>\n      </ion-button>\n     </ion-col>\n\n     <ion-col size=\"4\" style=\"display: flex;justify-content: center;align-items: center;padding: 0; margin: 0;\">\n     \n       <ion-icon (click)=\"switchFlashMode()\"  name=\"flash\" [color]=\"flashMode=='torch'?'secondary':'dark'\" style=\"font-size:22px;zoom: 2 \"></ion-icon>\n     \n    \n       <div   (click)=\"uploadfn()\"  style=\"display: flex;flex-direction: column;\" >\n        <ion-avatar style=\"width: 40px;height: 40px; padding: 0; margin: 0 \">\n          <ion-img src=\"assets/images/galary.jpg\"></ion-img>\n        </ion-avatar>\n        <p style=\"text-align: center;padding: 0px; margin: 0;\">{{\"studio\" | translate}}</p>\n      </div>\n\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/pages/detect/detect.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/detect/detect.module.ts ***!
  \***********************************************/
/*! exports provided: DetectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectPageModule", function() { return DetectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detect.page */ "./src/app/pages/detect/detect.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/fesm2015/angular-slider-ngx-slider.js");









const routes = [
    {
        path: '',
        component: _detect_page__WEBPACK_IMPORTED_MODULE_6__["DetectPage"]
    }
];
let DetectPageModule = class DetectPageModule {
};
DetectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_8__["NgxSliderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_detect_page__WEBPACK_IMPORTED_MODULE_6__["DetectPage"]]
    })
], DetectPageModule);



/***/ }),

/***/ "./src/app/pages/detect/detect.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/detect/detect.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper, .login, .register {\n  padding: 20px;\n  background: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.wrapper ion-button:nth-of-type(1) {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  --background: white;\n  --color: #48a240;\n}\n\nimg {\n  width: 50%;\n}\n\n.buttons {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.social-login {\n  text-align: center;\n}\n\n.social-login div {\n  text-align: center;\n}\n\n.social-login ion-icon {\n  font-size: 50px;\n  margin: 15px;\n}\n\nform {\n  text-align: center;\n}\n\nform ion-item {\n  --padding-end: 15px;\n}\n\nimg {\n  margin-bottom: 15px;\n}\n\n.role-id ion-button {\n  width: 50%;\n  --border-radius: 0;\n  border: 2px solid #48a240;\n  --box-shadow: none;\n  height: 50px;\n}\n\n.role-id ion-button:nth-of-type(1) {\n  --background: #48a240;\n  --color: white;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.role-id ion-button:nth-of-type(2) {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  --background: white;\n  --color: #48a240;\n}\n\n.placeholder-ltr {\n  direction: rtl;\n}\n\n.placeholder-ltr.has-focus {\n  direction: ltr;\n}\n\nion-row {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ion-content {\n  padding: 20px;\n}\n\n.fullWidth {\n  text-align: center;\n}\n\n.fullWidth ion-item {\n  --padding-end: 15px;\n}\n\n.custom-ion-content {\n  --background:transparent;\n}\n\n.middle {\n  /* \n   background-repeat: no-repeat;\n   background-size: cover; */\n  position: absolute;\n  width: 100vw;\n  width: 100%;\n  height: 80vh;\n  -o-object-position: top;\n     object-position: top;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-footer {\n  --background:white;\n  background: white;\n}\n\n.scroll-content {\n  margin-bottom: 0 !important;\n}\n\n.foot {\n  --background: white;\n  background: white;\n  position: fixed;\n  bottom: 20px;\n}\n\n.foot ion-chip {\n  --background: white;\n  background: white;\n}\n\n.foot ion-icon {\n  --background: white;\n  background: white;\n  border-radius: 50%;\n}\n\n.ranger {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9kZXRlY3QvZGV0ZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0ZWN0L2RldGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0RKOztBRE1JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURLRTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRko7O0FESUU7RUFDRSxrQkFBQTtBQ0RKOztBREVJO0VBQU0sa0JBQUE7QUNDVjs7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FER0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREVJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ0FSOztBREVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURJRTtFQUNFLGNBQUE7QUNESjs7QURHRTtFQUNFLGNBQUE7QUNBSjs7QURFRTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtBQ0dKOztBREZJO0VBQ0ksbUJBQUE7QUNJUjs7QURERTtFQUNFLHdCQUFBO0FDSUo7O0FERUU7RUFFSTs7NEJBQUE7RUFHQyxrQkFBQTtFQUVBLFlBQUE7RUFJQyxXQUFBO0VBQ0EsWUFBQTtFQUNGLHVCQUFBO0tBQUEsb0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSk47O0FET0U7RUFJRSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEWUE7RUFDRSwyQkFBQTtBQ1RGOztBRFdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDUkY7O0FEU0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURXQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRlY3QvZGV0ZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLCAubG9naW4sIC5yZWdpc3RlciB7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAud3JhcHBlciB7XG4gICAgXG4gIFxuICAgIGlvbi1idXR0b246bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAtLWNvbG9yOiAjNDhhMjQwO1xuICAgIH1cbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmJ1dHRvbnMgIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnNvY2lhbC1sb2dpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpdiB7IHRleHQtYWxpZ246IGNlbnRlciB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIG1hcmdpbjogMTVweDtcbiAgICB9XG4gIH1cbiAgXG4gIGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gICAgfVxuICB9XG4gIFxuICBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5yb2xlLWlkIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDhhMjQwO1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzQ4YTI0MDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIC0tY29sb3I6ICM0OGEyNDA7XG4gICAgfVxuICB9XG4gIFxuICAucGxhY2Vob2xkZXItbHRyIHtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgfVxuICAucGxhY2Vob2xkZXItbHRyLmhhcy1mb2N1cyB7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gIH1cbiAgaW9uLXJvd3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pb24tY29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5mdWxsV2lkdGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gICAgfVxuICB9XG4gIC5jdXN0b20taW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIFxuICAgICAgLy8gLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy8xNS5zdmdcIik7XG4gICAgICAvL2JhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzLzE1LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgXG4gIH1cbiAgLm1pZGRsZXtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zY2FubmVyLnN2ZycpO1xuICAgICAgLyogXG4gICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIFxuXG4gICAgICBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgXG4gIH1cbiAgaW9uLWZvb3RlciB7XG4gICAgLy8gJi5mb290ZXItbWQ6OmJlZm9yZSB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgLy8gfVxuICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50e1xuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG59XG4uc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcbn1cbi5mb290e1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIGlvbi1jaGlwe1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgaW9uLWljb257XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLnJhbmdlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEwcHg7XG5cbn0iLCIud3JhcHBlciwgLmxvZ2luLCAucmVnaXN0ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndyYXBwZXIgaW9uLWJ1dHRvbjpudGgtb2YtdHlwZSgxKSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM0OGEyNDA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b25zIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNvY2lhbC1sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb2NpYWwtbG9naW4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbC1sb2dpbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG59XG5cbmltZyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yb2xlLWlkIGlvbi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OGEyNDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLnJvbGUtaWQgaW9uLWJ1dHRvbjpudGgtb2YtdHlwZSgxKSB7XG4gIC0tYmFja2dyb3VuZDogIzQ4YTI0MDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5yb2xlLWlkIGlvbi1idXR0b246bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjNDhhMjQwO1xufVxuXG4ucGxhY2Vob2xkZXItbHRyIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5wbGFjZWhvbGRlci1sdHIuaGFzLWZvY3VzIHtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbmlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mdWxsV2lkdGggaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xufVxuXG4uY3VzdG9tLWlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xufVxuXG4ubWlkZGxlIHtcbiAgLyogXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmZvb3Qge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG59XG4uZm9vdCBpb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZvb3QgaW9uLWljb24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucmFuZ2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/detect/detect.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/detect/detect.page.ts ***!
  \*********************************************/
/*! exports provided: DetectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectPage", function() { return DetectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _tips_tips_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tips/tips.page */ "./src/app/pages/tips/tips.page.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");











let DetectPage = class DetectPage {
    constructor(config, fetch, navCtrl, actionSheetCtrl, route, userService, cameraPreview, popover, modalCtrl) {
        this.config = config;
        this.fetch = fetch;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.route = route;
        this.userService = userService;
        this.cameraPreview = cameraPreview;
        this.popover = popover;
        this.modalCtrl = modalCtrl;
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_10__["Assets"];
        this.value = 0;
        this.sliderOptions = {
            floor: 0,
            ceil: 10,
            vertical: true
        };
        this.detecte = 'فحص';
        this.noty_counts = 29;
        this.banners = [];
        this.banner_images = [];
        this.stores = [];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            speed: 800,
            loop: true,
        };
        this.date = new Date();
        this.currentHour = 0;
        this.model_url = 'http://localhost:8000/tensorflow/players/model/'; //as sn example
        this.setZoom = 1;
        this.flashMode = 'off';
        route.queryParams.subscribe(res => {
            this.model_url = res.url;
        });
    }
    ionViewDidEnter() {
        this.startCamera();
    }
    switchFlashMode() {
        if (this.flashMode == 'off')
            this.flashMode = 'torch'; //for ios use 'on'
        else
            this.flashMode = 'off';
        this.cameraPreview.setFlashMode(this.flashMode);
    }
    changeZoom() {
        this.cameraPreview.setZoom(this.setZoom);
    }
    addImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let buttons = [
                {
                    text: "تصوير صورة",
                    icon: 'camera',
                    handler: () => {
                        this.TakePhoto();
                    }
                },
                {
                    text: "إختيار من الإستديو",
                    icon: 'images',
                    handler: () => {
                        this.uploadfn();
                    }
                },
                {
                    text: "إلغاء",
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
    ionViewWillLeave() {
        this.cameraPreview.stopCamera();
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
                        console.log("image preview is :", this.imgPreview);
                        this.imgBlob = file;
                        this.imageEdited = true;
                        this.check();
                    }
                });
            }
        };
        input.change(trigger);
        input.attr('accept', 'image/*;capture=camera');
        input.trigger("click");
    }
    startCamera() {
        let cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: 800,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: true,
            alpha: 1
        };
        this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
        }, (err) => {
        });
        this.cameraPreview.show();
    }
    convertImage(photo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield fetch(photo);
            const blob = yield response.blob();
            this.imgBlob = blob;
            this.imgPreview = photo;
            this.imageEdited = true;
            this.check();
        });
    }
    takePicture() {
        this.cameraPreview.takePicture({
            width: 1280,
            height: 800,
            quality: 85,
        }).then((imageData) => {
            this.convertImage('data:image/jpeg;base64,' + imageData);
            console.log("image ", imageData);
        }, (err) => {
            console.log(err);
        });
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
                        this.check();
                    }
                });
            }
        };
        input.change(trigger);
        input.attr('accept', 'image/x-png,image/png,image/jpeg');
        input.trigger("click");
    }
    check() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward(['detecting'], { queryParams: { img: this.imgPreview, model_url: this.model_url } });
        });
    }
    tips() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = this.modalCtrl.create({
                component: _tips_tips_page__WEBPACK_IMPORTED_MODULE_9__["TipsPage"],
                cssClass: "popover",
                componentProps: {
                    store_name: 'Ali Store',
                    img: 'assets/imgs/logo.png',
                }
            });
            (yield modal).onDidDismiss().then((data) => {
            });
            return (yield modal).present();
        });
    }
};
DetectPage.ctorParameters = () => [
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgEl', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DetectPage.prototype, "imgEl", void 0);
DetectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detect',
        template: __webpack_require__(/*! raw-loader!./detect.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detect/detect.page.html"),
        styles: [__webpack_require__(/*! ./detect.page.scss */ "./src/app/pages/detect/detect.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], DetectPage);



/***/ })

}]);
//# sourceMappingURL=pages-detect-detect-module-es2015.js.map