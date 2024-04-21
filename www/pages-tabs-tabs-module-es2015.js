(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    \n    <ion-tab-button tab=\"home\" mode=\"ios\">\n      <ion-icon [src]=\"assets.home\" ></ion-icon>\n      <ion-label>{{\"home\" | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"orders\" mode=\"ios\">\n      <ion-icon  [src]=\"assets.orders\"></ion-icon>\n      <ion-label>{{\"orders\" | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"favourites\" mode=\"ios\">\n      <ion-icon  [src]=\"assets.heart\"></ion-icon>\n      <ion-label>{{\"favourite\" | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"offers\" mode=\"ios\">\n      <ion-icon   [src]=\"assets.offers\" ></ion-icon>\n      <ion-label>{{\"offers\" | translate}}</ion-label>\n    </ion-tab-button>\n\n\n    <ion-tab-button tab=\"results-history\" mode=\"ios\">\n      <ion-icon   [src]=\"assets.success_mark\" ></ion-icon>\n      <ion-label>{{\"results_history\" | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"more\" mode=\"ios\">\n      <ion-icon name=\"ios-more\"></ion-icon>\n      <ion-label>{{\"more\" | translate}}</ion-label>\n    </ion-tab-button>\n\n\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");









const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_8__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  font-size: 22px;\n}\n\nion-tab-button ion-label {\n  font-size: 16px;\n}\n\nion-tab-button.tab-selected ion-icon {\n  -webkit-filter: invert(25%) sepia(40%) saturate(2065%) hue-rotate(70deg) brightness(54%) contrast(95%);\n          filter: invert(25%) sepia(40%) saturate(2065%) hue-rotate(70deg) brightness(54%) contrast(95%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naGl6bGFuZS9Eb3dubG9hZHMvcGxhbnRzX2FwcF9hbmRyb2lkL3dvcmxkb2ZwbGFudHMvc3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENDO0VBRUcsc0dBQUE7VUFBQSw4RkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaW9uLXRhYi1idXR0b24gaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIC8vIGZpbHRlciA6aW52ZXJ0KDMzJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSg3NjUlKSBodWUtcm90YXRlKDYzZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTIlKTtcbiAgICBmaWx0ZXI6aW52ZXJ0KDI1JSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSgyMDY1JSkgaHVlLXJvdGF0ZSg3MGRlZykgYnJpZ2h0bmVzcyg1NCUpIGNvbnRyYXN0KDk1JSk7XG4gIH1cblxuXG4vLyAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4vLyAgICAgZmlsdGVyIDppbnZlcnQoMzMlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDc2NSUpIGh1ZS1yb3RhdGUoNjNkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MiUpO1xuLy8gICB9XG5cbi8vIGlvbi10YWItYnV0dG9uOmFjdGl2ZSA6Zm9jdXN7XG4vLyAgICAgaW9uLWljb257XG4vLyAgICAgICAgIGZpbHRlciA6aW52ZXJ0KDMzJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSg3NjUlKSBodWUtcm90YXRlKDYzZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTIlKTtcbi8vICAgICB9XG4vLyB9XG4vLyBpb24tdGFiLWJ1dHRvbjpmb2N1c3tcbi8vICAgICBpb24taWNvbntcbi8vICAgICAgICAgZmlsdGVyIDppbnZlcnQoMzMlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDc2NSUpIGh1ZS1yb3RhdGUoNjNkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MiUpO1xuLy8gICAgIH1cbi8vIH1cbiIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5pb24tdGFiLWJ1dHRvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4gIGZpbHRlcjogaW52ZXJ0KDI1JSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSgyMDY1JSkgaHVlLXJvdGF0ZSg3MGRlZykgYnJpZ2h0bmVzcyg1NCUpIGNvbnRyYXN0KDk1JSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/app/constants/constants.ts");



;
let TabsPage = class TabsPage {
    constructor() {
        this.assets = _constants_constants__WEBPACK_IMPORTED_MODULE_2__["Assets"];
    }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'more',
                children: [
                    {
                        path: '',
                        loadChildren: '../more/more.module#MorePageModule'
                    }
                ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: '../offers/offers.module#OffersPageModule'
                    }
                ]
            },
            {
                path: 'favourites',
                children: [
                    {
                        path: '',
                        loadChildren: '../favourites/favourites.module#FavouritesPageModule'
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    },
                    { path: 'stores', loadChildren: '../stores/stores.module#StoresPageModule' },
                    { path: 'select-plant', loadChildren: '../select-plant/select-plant.module#SelectPlantPageModule' },
                ]
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: '../orders/orders.module#OrdersPageModule'
                    },
                    { path: 'stores', loadChildren: '../stores/stores.module#StoresPageModule' },
                ]
            },
            {
                path: 'results-history',
                children: [
                    {
                        path: '',
                        loadChildren: '../results-history/results-history.module#ResultsHistoryPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild()
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map