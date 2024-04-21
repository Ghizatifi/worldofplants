(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatroom-chatroom-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chatroom/chatroom.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chatroom/chatroom.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  no-border color='primary' >\n  <ion-toolbar dir=\"rtl\">\n   <ion-buttons slot=\"start\">\n     <!-- <ion-back-button [icon]=\"assets.backward_ios\"></ion-back-button> -->\n     \n    <ion-icon  (click)=\"pop()\"   mode=\"ios\" [name]=\"config.lang=='ar'?'arrow-back':'arrow-back'\"></ion-icon>\n   </ion-buttons>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"{{paramData.image}}\" >\n    </ion-thumbnail>\n    <ion-title color=\"dark\" style=\"font-weight: bold;\">\n      {{'consultant' | translate}}\n    </ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content #IonContent >\n  <ion-list>\n    <div *ngFor=\"let chat of msgList; let i = index; \">\n      <ion-row *ngIf=\"chat.sender == User\">\n      \n        <ion-col class=\"left\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].sender != chat.sender)|| !msgList[i+1])}\">\n          <div class=\"imageAvatarRight\">\n            <div class=\"imageAvatarBottom\">\n            </div>\n            <ion-label color=\"light\">\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].sender == chat.sender) && \n              (msgList[i-1] && msgList[i-1].sender == chat.sender)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].sender == chat.sender),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].sender == chat.sender)}\">\n                <p *ngIf=\"chat.message_type=='text'\" class=\"ion-text-wrap\" style=\"color: black;\" class=\"ion-padding\">{{chat.msg}}\n                </p>\n                <img *ngIf=\"chat.message_type=='image'\" [src]=\"fetch.url_storage+chat.msg\" alt=\"\">\n\n                <!-- <div class=\"corner-parent-right\">\n                  <div class=\"corner-child-right\">\n\n                  </div>\n                </div> -->\n              </div>\n            </ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.sender != User\">\n        <ion-col class=\"right\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].sender != chat.sender)|| !msgList[i+1])}\">\n          <div class=\"imageAvatarLeft\">\n            <ion-label color=\"light\">\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].sender == chat.sender) && \n              (msgList[i-1] && msgList[i-1].sender == chat.sender)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].sender == chat.sender),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].sender == chat.sender)}\">\n              \n              <p class=\"ion-text-wrap\" class=\"ion-padding\" style=\"color: black;\">{{chat.msg}}\n                <img *ngIf='chat.image' [src]=\"fetch.url_storage+chat.image\"  alt=\"\">\n                \n                <!-- <div class=\"corner-parent-left\">\n                  <div class=\"corner-child-left\">\n                  </div>\n                </div> -->\n              </div>\n            </ion-label>\n            \n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"((msgList[i+1] && msgList[i+1].sender != chat.sender)|| !msgList[i+1])\">\n        <ion-col>\n          <ion-text>{{chat.time}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n\n  <ion-fab   vertical=\"bottom\" [horizontal]=\"config.lang=='ar'?'end':'start'\" slot=\"fixed\" >\n    <ion-fab-button (click)=\" sendMsg()\">\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-row *ngIf=\"loader\">\n    <ion-col no-padding class=\"loading-col\">\n      <div class=\"imageAvatarRight\">\n        <div class=\"imageAvatarBottomLoader\">\n          <ion-avatar class=\"avatar\">\n            <div class=\"imageAvatarBottomIcon\">\n            </div>\n            <ion-img src=\"{{paramData.image}}\"></ion-img>\n          </ion-avatar>\n        </div>\n        <ion-label>\n          <div class=\"chatDivLoader\">\n              <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n            <!-- <div class=\"corner-parent-right\">\n              <div class=\"corner-child-right\">\n              </div>\n            </div> -->\n          </div>\n        </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer *ngIf=\"consult\" style=\"background: rgb(255, 255, 255)\">\n  <ion-item *ngIf=\"consult.status==0\">\n    <ion-label style=\"color: rgb(0, 0, 0);font-weight: bold\" class=\"ion-text-center\" text-center >\n      {{\"consult_closed\"  | translate}}\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"consult.status!=0\">\n    <div (click)=\"getPhoto()\" style=\"border-radius: 50%; background: green; width: 40px; aspect-ratio: 1/1; display: flex; justify-content: center; align-items: center;\">\n      <ion-icon slot=\"start\" name=\"ios-camera\" style=\"font-size: 30px;\" expand=\"icon-only\" class=\"footerIcon\" ></ion-icon>\n    </div>\n    <ion-input class=\"input-box\" type=\"text\" placeholder=\"Write a message...\" [(ngModel)]=\"user_input\" (keypress)=\"userTyping($event)\"></ion-input>\n  </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.module.ts ***!
  \***************************************************/
/*! exports provided: ChatroomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomPageModule", function() { return ChatroomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatroom.page */ "./src/app/pages/chatroom/chatroom.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _chatroom_page__WEBPACK_IMPORTED_MODULE_6__["ChatroomPage"]
    }
];
let ChatroomPageModule = class ChatroomPageModule {
};
ChatroomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_chatroom_page__WEBPACK_IMPORTED_MODULE_6__["ChatroomPage"]]
    })
], ChatroomPageModule);



/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f8f8f8;\n  background: #f8f8f8;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.imageAvatarRight {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.imageAvatarRight .imageAvatarBottom {\n  max-width: 214px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight .avatar {\n  width: 50px;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.imageAvatarRight .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight .chatDiv {\n  text-align: justify;\n  position: relative;\n  background: #fff2db;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n}\n\n.imageAvatarRight ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight .sharper.chatDiv {\n  border-radius: 0;\n}\n\n.imageAvatarRight .sharper-bottom.chatDiv {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarRight .sharper-top.chatDiv {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.imageAvatarLeft {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.imageAvatarLeft .imageAvatarBottom {\n  max-width: 214px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft .avatar {\n  width: 50px;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.imageAvatarLeft .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft .chatDiv {\n  text-align: left;\n  position: relative;\n  background: #e6f0e5;\n  border-radius: 6px;\n  border-bottom-right-radius: 0;\n  max-width: 72vw;\n}\n\n.imageAvatarLeft ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft .sharper.chatDiv {\n  border-radius: 0;\n}\n\n.imageAvatarLeft .sharper-bottom.chatDiv {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarLeft .sharper-top.chatDiv {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab {\n  bottom: -22px !important;\n}\n\n.footerIcon {\n  color: white;\n}\n\nion-input {\n  --placeholder-color: rgb(88, 88, 88);\n}\n\n.chatDivLoader {\n  position: relative;\n  background: #fff2db;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.chatDivLoader .corner-parent-right {\n  background: #fff2db;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: -4px;\n  bottom: -2px;\n  border-radius: 0;\n  border-radius: 5px;\n}\n\n.chatDivLoader .corner-parent-right .corner-child-right {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #fff2db;\n  position: absolute;\n  top: 7px;\n  left: -7px;\n}\n\nion-text {\n  font-size: 12px;\n  color: #d7d8dac7;\n}\n\nion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.loading-col {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.left {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 31px;\n  width: 31px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n  width: 31px;\n  height: 31px;\n  border-radius: 15px;\n  background: transparent;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 31px;\n  width: 31px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n  width: 31px;\n  height: 31px;\n  border-radius: 15px;\n  background: transparent;\n}\n\n.input-box {\n  color: black;\n}\n\n.user-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  border: 2px solid #b8b9ea;\n}\n\nion-footer {\n  background-color: transparent;\n}\n\nion-buttons {\n  padding: 20px;\n}\n\nion-buttons ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy9jaGF0cm9vbS9jaGF0cm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXRyb29tL2NoYXRyb29tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDQUY7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFHQSxlQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1JO0VBQ0UsZ0JBQUE7QUNKTjs7QURRSTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNOTjs7QURVSTtF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Vjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDbEJGOztBRG9CQTtFQUNFLDZCQUFBO0FDakJGOztBRHFCQTtFQUNFLGFBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsZUFBQTtBQ2pCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRyb29tL2NoYXRyb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuXG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmltYWdlQXZhdGFyUmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICAgIG1heC13aWR0aDogMjE0cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIGJhY2tncm91bmQ6ICM1QjI1NzM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIHotaW5kZXg6IDExO1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDEwLjElO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2hhdERpdiB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjJkYjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIC8vIG1pbi13aWR0aDogNzJ2dztcbiAgICBtYXgtd2lkdGg6IDcydnc7XG4gICAgLy9ib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICAuc2hhcnBlciB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG4gIC5zaGFycGVyLWJvdHRvbSB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbiAgLnNoYXJwZXItdG9wIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICAgIG1heC13aWR0aDogMjE0cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIGJhY2tncm91bmQ6ICM1QjI1NzM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIHotaW5kZXg6IDExO1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDEwLjElO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2hhdERpdiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2U2ZjBlNTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAvLyBtaW4td2lkdGg6IDcydnc7XG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xuICAgIC8vYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICAuc2hhcnBlciB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG4gIC5zaGFycGVyLWJvdHRvbSB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbiAgLnNoYXJwZXItdG9wIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbn1cbmlvbi1mYWIge1xuICBib3R0b206IC0yMnB4ICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVySWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYig4OCwgODgsIDg4KTtcbn1cbi5jaGF0RGl2TG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmMmRiO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjJkYjtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00cHg7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjJkYjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogN3B4O1xuICAgICAgbGVmdDogLTdweDtcbiAgICB9XG4gIH1cbn1cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2Q3ZDhkYWM3O1xufVxuaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIHotaW5kZXg6IDExO1xufVxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5sb2FkaW5nLWNvbCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2x1YmJlZCB7XG4gIC5pbWFnZUF2YXRhclJpZ2h0IHtcbiAgICAuY2hhdERpdiB7XG4gICAgICAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gICAgICAgIGhlaWdodDogMzFweDtcbiAgICAgICAgd2lkdGg6IDMxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICAgICAgICAgIHdpZHRoOiAzMXB4O1xuICAgICAgICAgIGhlaWdodDogMzFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbWFnZUF2YXRhckxlZnQge1xuICAgIC5jaGF0RGl2IHtcbiAgICAgIC5jb3JuZXItcGFyZW50LWxlZnQge1xuICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgIHdpZHRoOiAzMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgLmNvcm5lci1jaGlsZC1sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogMzFweDtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmlucHV0LWJveCB7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbi51c2VyLWltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjhiOWVhO1xufVxuaW9uLWZvb3RlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuaW9uLWJ1dHRvbnN7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5pb24tYnV0dG9ucyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmltYWdlQXZhdGFyUmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIHotaW5kZXg6IDExO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAxMC4xJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmNoYXREaXYge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmYyZGI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWF4LXdpZHRoOiA3MnZ3O1xufVxuLmltYWdlQXZhdGFyUmlnaHQgaW9uLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci5jaGF0RGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5zaGFycGVyLWJvdHRvbS5jaGF0RGl2IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci10b3AuY2hhdERpdiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICBtYXgtd2lkdGg6IDIxNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgei1pbmRleDogMTE7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAxMC4xJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2U2ZjBlNTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgbWF4LXdpZHRoOiA3MnZ3O1xufVxuLmltYWdlQXZhdGFyTGVmdCBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLnNoYXJwZXIuY2hhdERpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLWJvdHRvbS5jaGF0RGl2IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLXRvcC5jaGF0RGl2IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDQ3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mYWIge1xuICBib3R0b206IC0yMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXJJY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XG59XG5cbi5jaGF0RGl2TG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmMmRiO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNoYXREaXZMb2FkZXIgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmMmRiO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC00cHg7XG4gIGJvdHRvbTogLTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNoYXREaXZMb2FkZXIgLmNvcm5lci1wYXJlbnQtcmlnaHQgLmNvcm5lci1jaGlsZC1yaWdodCB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmYyZGI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IC03cHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2Q3ZDhkYWM3O1xufVxuXG5pb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZUF2YXRhckJvdHRvbUxvYWRlciB7XG4gIG1heC13aWR0aDogMjE0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxvYWRpbmctY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNsdWJiZWQgLmltYWdlQXZhdGFyUmlnaHQgLmNoYXREaXYgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xuICBoZWlnaHQ6IDMxcHg7XG4gIHdpZHRoOiAzMXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMzBweDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNsdWJiZWQgLmltYWdlQXZhdGFyUmlnaHQgLmNoYXREaXYgLmNvcm5lci1wYXJlbnQtcmlnaHQgLmNvcm5lci1jaGlsZC1yaWdodCB7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNsdWJiZWQgLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdiAuY29ybmVyLXBhcmVudC1sZWZ0IHtcbiAgaGVpZ2h0OiAzMXB4O1xuICB3aWR0aDogMzFweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMHB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQgLmNvcm5lci1jaGlsZC1sZWZ0IHtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dC1ib3gge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi51c2VyLWltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjhiOWVhO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaW9uLWJ1dHRvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.ts ***!
  \*************************************************/
/*! exports provided: ChatroomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomPage", function() { return ChatroomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fetch.service */ "./src/app/services/fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var src_app_services_fire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/fire.service */ "./src/app/services/fire.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");















let ChatroomPage = class ChatroomPage {
    constructor(actionSheetCtrl, fetch, config, route, userService, camera, platform, navCtrl, file, filePath, fireService, utils) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.fetch = fetch;
        this.config = config;
        this.route = route;
        this.userService = userService;
        this.camera = camera;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.file = file;
        this.filePath = filePath;
        this.fireService = fireService;
        this.utils = utils;
        this.start_typing = false;
        this.User = ''; // get the user id only
        this.user_input = '';
        this.assets = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_13__["Assets"];
        this.paramData = {
            name: '', image: 'assets/images/logo.png'
        };
        this.msgList = [];
        this.loader = false;
        this.User = config.user.id;
        route.queryParams.subscribe(res => {
            this.chatData = res;
            if (!res.id) {
                return;
            }
            this.consult_id = res.id;
            this.getMessages();
        });
    }
    ngOnInit() {
        this.utils.loadingPresent();
    }
    sendMsgFire(message, type) {
        let msg = {
            sender: this.config.user.id,
            message_type: type,
            type: type,
            msg: message,
            date: new Date()
        };
        this.fireService.sendMsg(this.consult_key, msg);
    }
    sendMsg() {
        if (this.consult.status == 0) {
            this.fetch.errorToast("لقد تم إغلاق هذه الدردشة");
            return;
        }
        if (this.user_input !== '' || this.user_input_image) {
            if (this.user_input_image) {
                this.utils.loadingPresent();
                let payload = new FormData();
                payload.append('image', this.user_input_image);
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set("Authorization", "Bearer " + this.config.token);
                this.fetch.post('upload-file', payload, headers)
                    .subscribe((res) => {
                    this.utils.loadingDismiss();
                    if (res.status) {
                        this.sendMsgFire(res.url, 'image');
                        this.user_input_image = null;
                    }
                }, err => this.utils.loadingDismiss());
            }
            else {
                this.sendMsgFire(this.user_input, 'text');
                this.user_input = '';
            }
        }
    }
    senderSends() {
        this.loader = true;
        setTimeout(() => {
            this.msgList.push({
                userId: this.User,
                userName: this.User,
                userAvatar: "../../assets/chat/chat5.jpg",
                time: "12:01",
                message: "Pagas, this themes support but ionic 3 ionic 4, etc.."
            });
            this.loader = false;
            this.scrollDown();
        }, 2000);
        this.scrollDown();
    }
    scrollDown() {
        console.log("scrol");
        setTimeout(() => {
            this.content.scrollToBottom(50);
        }, 500);
    }
    userTyping(event) {
        // console.log(event);
        this.start_typing = event.target.value;
        this.scrollDown();
    }
    getMessages() {
        this.consult = null;
        this.fireService.getConsult(this.consult_id).subscribe((res) => {
            if (res.length >= 1) {
                this.consult_key = res[0].key;
                this.fireService.getChat(this.consult_key).subscribe((consult) => {
                    this.utils.loadingDismiss();
                    this.consult = consult;
                    console.log("consult ", this.consult);
                    this.msgList = consult.chat ? Object.values(consult.chat) : [];
                    this.scrollDown();
                });
            }
            else {
                this.utils.loadingDismiss();
                this.fireService.createConsult(this.consult_id);
            }
        }, err => {
            this.utils.toast();
            this.utils.loadingDismiss();
        });
    }
    pop() {
        this.navCtrl.back();
    }
    getPhoto() {
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
    TakePhoto() {
        let sourceType = this.camera.PictureSourceType.CAMERA;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(imagePath => {
            this.convertImage('data:image/jpeg;base64,' + imagePath);
        });
    }
    convertImage(photo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield fetch(photo);
            const blob = yield response.blob();
            this.user_input_image = blob;
            this.sendMsg();
        });
    }
    uploadfn() {
        var input = jquery__WEBPACK_IMPORTED_MODULE_7__(document.createElement("input"));
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
                        this.user_input_image = file;
                        this.sendMsg();
                    }
                });
            }
        };
        input.change(trigger);
        input.attr('accept', 'image/x-png,image/png,image/jpeg');
        input.trigger("click");
    }
};
ChatroomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: src_app_services_fire_service__WEBPACK_IMPORTED_MODULE_12__["FireService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_14__["UtilsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('IonContent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], ChatroomPage.prototype, "content", void 0);
ChatroomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatroom',
        template: __webpack_require__(/*! raw-loader!./chatroom.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chatroom/chatroom.page.html"),
        styles: [__webpack_require__(/*! ./chatroom.page.scss */ "./src/app/pages/chatroom/chatroom.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        src_app_services_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"],
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
        src_app_services_fire_service__WEBPACK_IMPORTED_MODULE_12__["FireService"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_14__["UtilsService"]])
], ChatroomPage);



/***/ }),

/***/ "./src/app/services/fire.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/fire.service.ts ***!
  \******************************************/
/*! exports provided: FireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireService", function() { return FireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch.service */ "./src/app/services/fetch.service.ts");


// import { AngularFirestore } from '@angular/fire/compat/firestore';




let FireService = class FireService {
    constructor(afs, db, configService, fetchService) {
        this.afs = afs;
        this.db = db;
        this.configService = configService;
        this.fetchService = fetchService;
        this.loading = true;
        // let consults = db.object('consults');
        // consults.set({"chat" : [] , "status": 1 , "user_id" : 1}).then((res)=>{
        //   console.log("res" , res)
        // })
        this.getChat(5);
        // this.db.object('consults/2').valueChanges().subscribe((res)=>{
        //   console.log("consults are ",res)
        // })
        // console.log("init firebase services")
        // this.db.
        // this.ConsultsRef = afs.collection('consults'); 
        // this.chats = this.ConsultsRef.valueChanges();
        // this.changes('consults').subscribe((res)=>{
        // })
        // this.create("consults/1/chats", "hello").then((res)=>console.log("res" ,res))
    }
    getConsult(consult_id) {
        return this.db.list("consults", ref => ref.orderByChild('consult_id').equalTo(consult_id)).snapshotChanges();
    }
    getChat(consult_key) {
        return this.db.object("consults/" + consult_key).valueChanges();
    }
    sendMsg(consult_key, msg) {
        console.log("msg ", msg);
        this.db.list("consults/" + consult_key + "/chat").push(msg);
    }
    createConsult(consult_id) {
        this.db.list("consults").push({ "status": 1, "user_id": this.configService.user.id, "consult_id": consult_id });
    }
    create(path, msg) {
        return this.afs.collection(path).add({ "from": 1, type: "text", msg });
    }
    changes(path) {
        return this.afs.collection(path).snapshotChanges();
    }
    get(path) {
        return this.afs.doc(path).get();
    }
    read(path) {
        return this.afs.collection(path).get();
        // return this.afs.collection(path).snapshotChanges();
    }
    update(path, msg) {
        this.afs.doc(path + '/' + msg).update(msg);
    }
    delete(path, msg) {
        this.afs.doc(path + '/' + msg).delete();
    }
};
FireService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] }
];
FireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]])
], FireService);



/***/ })

}]);
//# sourceMappingURL=pages-chatroom-chatroom-module-es2015.js.map