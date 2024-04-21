(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chats-chats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chats/chats.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chats/chats.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header2 hide_tail=\"true\" pageName=\"consults\" navHome=\"true\"></app-header2>\n<ion-content padding>\n  <h4 *ngIf=\"fetch_requested && chatData.length==0\">\n    {{\"no_consults\" | translate}}\n  </h4>\n  <ion-list class=\"ion-no-padding\">\n\n    <div class=\"bordered\" style=\"    display: flex; flex-direction: row; justify-content: space-around; align-items: center; margin-top: 10px;\" *ngFor=\"let chat of chatData;index as i\" (click)=\"goforChat(chat)\">\n      <!-- <ion-icon class=\"online\" name=\"done-all\"  slot=\"start\"></ion-icon> -->\n\n      <ion-avatar slot=\"end\">\n        <ion-img class=\"user-img\" src=\"assets/images/logo.png\"></ion-img>\n      </ion-avatar>\n      <ion-label style=\"width: 100%;\">\n\n        <div class=\"withcount\">\n          <div class=\"nameAvatar\">\n            <h2>{{\"consult_number\" | translate}}{{chatData.length-i}}\n            </h2>\n            <!-- <ion-avatar class=\"chatCount\" >{{chat.count}}</ion-avatar> -->\n          </div>\n\n          <div class=\"timeEnd\">\n            <!-- <ion-text  slot=\"end\">{{chat.time}}</ion-text> -->\n          </div>\n        </div>\n        <p *ngIf=\"chat.lastChat\" class=\"widthHalf\"  [ngClass]=\"chat.unseen!=0?'green':'black'\">{{chat.lastChat.msg?chat.lastChat.msg:'image'}}</p>\n        <p *ngIf=\"!chat.lastChat\" class=\"widthHalf\">{{\"new_consult\" | translate}}</p>\n      </ion-label>\n    </div>\n  </ion-list>\n  <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"create_chat()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/chats/chats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "./src/app/pages/chats/chats.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]
    }
];
let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
    })
], ChatsPageModule);



/***/ }),

/***/ "./src/app/pages/chats/chats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plusClass {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nion-header:after {\n  background-image: none;\n  left: 0;\n  bottom: -8px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\";\n}\n\n.contentCenter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.padding_right {\n  padding-right: 8px;\n}\n\n.tab-icon {\n  font-size: 20px;\n}\n\n.withcount {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.chatCount {\n  width: 17px !important;\n  height: 17px !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #bb2525;\n  margin-left: 8px;\n}\n\n.timeEnd {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 50%;\n}\n\n.widthHalf {\n  width: 70%;\n  font-size: 12px;\n}\n\n.nameAvatar {\n  display: -webkit-box;\n  display: flex;\n  /* justify-content: center; */\n  -webkit-box-align: center;\n          align-items: center;\n  width: 50%;\n}\n\n.nameAvatar h2 {\n  font-size: 0.94em;\n  font-weight: bold;\n}\n\nion-text {\n  font-size: 10px;\n}\n\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.online {\n  width: 20px;\n  height: 20px;\n  color: #92ff92;\n  padding: 0px;\n  margin: 0px;\n}\n\n.green {\n  color: #15b915;\n  font-weight: bold;\n}\n\n.black {\n  color: #3a3a3a;\n  font-weight: bold;\n}\n\n.ofline {\n  position: absolute;\n  left: 48px;\n  top: 58%;\n  width: 10px;\n  background: #c1c3c1;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.user-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9jaGF0cy9jaGF0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXRzL2NoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUVBQUE7RUFBQSx5REFBQTtBQ0NKOztBREVJO0VBRUUsc0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBTjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtBQ0RKOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDRTtFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLFVBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0FDR0o7O0FERkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSU47O0FEREU7RUFDRSxlQUFBO0FDSUo7O0FERkU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0tKOztBREZFO0VBS0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFFRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRzL2NoYXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbHVzQ2xhc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIH1cbiAgaW9uLWhlYWRlciB7XG4gICAgJjphZnRlciB7XG4gICAgICAvL2JveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IC04cHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIH1cbiAgXG4gIC5jb250ZW50Q2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5wYWRkaW5nX3JpZ2h0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgLnRhYi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLndpdGhjb3VudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY2hhdENvdW50IHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigxODcsIDM3LCAzNyk7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICBcbiAgLnRpbWVFbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC53aWR0aEhhbGYge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5uYW1lQXZhdGFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDAuOTRlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5vbmxpbmUge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyByaWdodDogNnB4O1xuICAgIC8vIGxlZnQ6IDQ4cHg7XG4gICAgLy8gdG9wOiA1OCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogIzkyZmY5MjtcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBjb2xvcjogICM5MmZmOTI7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmdyZWVue1xuICAgIGNvbG9yOiAgIzE1YjkxNTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYmxhY2t7XG4gICAgY29sb3I6ICAjM2EzYTNhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIH1cbiAgLm9mbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHJpZ2h0OiA2cHg7XG4gICAgbGVmdDogNDhweDtcbiAgICB0b3A6IDU4JTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzFjM2MxO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC51c2VyLWltZyB7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgfSIsIi5wbHVzQ2xhc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG5pb24taGVhZGVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtOHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOHB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY29udGVudENlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFkZGluZ19yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnRhYi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ud2l0aGNvdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdENvdW50IHtcbiAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2JiMjUyNTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnRpbWVFbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogNTAlO1xufVxuXG4ud2lkdGhIYWxmIHtcbiAgd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmFtZUF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xufVxuLm5hbWVBdmF0YXIgaDIge1xuICBmb250LXNpemU6IDAuOTRlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9ubGluZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTJmZjkyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzE1YjkxNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ibGFjayB7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9mbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDhweDtcbiAgdG9wOiA1OCU7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjYzFjM2MxO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXItaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/chats/chats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chats/chats.page.ts ***!
  \*******************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _chatroom_chat_instructions_chat_instructions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chatroom/chat-instructions/chat-instructions.page */ "./src/app/pages/chatroom/chat-instructions/chat-instructions.page.ts");







let ChatsPage = class ChatsPage {
    constructor(navCtrl, fetch, config, popOverCtrl) {
        this.navCtrl = navCtrl;
        this.fetch = fetch;
        this.config = config;
        this.popOverCtrl = popOverCtrl;
        this.chatData = [];
        this.fetch_requested = false;
        console.log("user ", config.user);
    }
    ionViewDidEnter() {
        this.getChats();
        this.showConstractions();
    }
    showConstractions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let p = yield this.popOverCtrl.create({
                component: _chatroom_chat_instructions_chat_instructions_page__WEBPACK_IMPORTED_MODULE_6__["ChatInstructionsPage"],
                cssClass: "popover"
            });
            p.present();
        });
    }
    ngOnInit() {
        // this.getChats()
    }
    getChats() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('chats', headers)
            .then((res) => {
            this.fetch_requested = true;
            let data;
            console.log("chats s , ", res);
            this.consults_open = false;
            if (res.status) {
                data = res.data;
            }
            else {
                this.fetch.errorToast(res.msg);
                console.log("ERR ", res);
                this.chatData = [];
                return;
            }
            this.chatData = data;
            this.consults_open = false;
            for (let d of data) {
                if (d.status == 1) {
                    this.consults_open = true;
                    console.log("an open consult");
                    break;
                }
            }
        }).catch(err => {
            this.fetch_requested = true;
            console.log("ERR ", err);
            this.fetch.errorToast();
        });
    }
    goforChat(chat) {
        console.log("chat id ", chat.id);
        this.navCtrl.navigateForward(['chatroom'], { queryParams: chat });
    }
    create_chat() {
        //this functions is fired from the html .. and it will check if there are oppend consults
        if (this.consults_open == true) {
            this.fetch.errorToast("عليك أغلاق الإستشارات المفتوحة");
            return;
        }
        else if (this.chatData.length > 2) {
            this.fetch.errorToast("عليك الإشتراك في إحدى الباقات");
            return;
        }
        else {
            this.createChat();
        }
    }
    createChat() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
        this.fetch.get('chat/create', headers)
            .then((res) => {
            if (res.status) {
                let chat = { id: res.consult_id, consults_open: true, status: 1 };
                this.chatData.push(chat);
                this.goforChat(chat);
            }
            else {
                this.fetch.errorToast();
            }
        });
    }
};
ChatsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ChatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chats',
        template: __webpack_require__(/*! raw-loader!./chats.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chats/chats.page.html"),
        styles: [__webpack_require__(/*! ./chats.page.scss */ "./src/app/pages/chats/chats.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ChatsPage);



/***/ })

}]);
//# sourceMappingURL=pages-chats-chats-module-es2015.js.map