webpackJsonp([42],{

/***/ 2090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginIntroductionPageModule", function() { return CoreLoginIntroductionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction__ = __webpack_require__(2260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreLoginIntroductionPageModule = /** @class */ (function () {
    function CoreLoginIntroductionPageModule() {
    }
    CoreLoginIntroductionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* CoreLoginIntroductionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* CoreLoginIntroductionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginIntroductionPageModule);
    return CoreLoginIntroductionPageModule;
}());

//# sourceMappingURL=introduction.module.js.map

/***/ }),

/***/ 2260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginIntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Page to enter the user introduction page.
 */
var CoreLoginIntroductionPage = /** @class */ (function () {
    function CoreLoginIntroductionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.siteUrl = navParams.get('siteUrl');
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
    }
    /**
     * goLoginPage  Login button clicked.
     */
    CoreLoginIntroductionPage.prototype.goLoginPage = function () {
        this.navCtrl.push('CoreLoginCredentialsPage', { siteUrl: this.siteUrl });
        return;
    };
    CoreLoginIntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-introduction',template:/*ion-inline-start:"D:\Project\ATS\moodleapp\src\core\login\pages\introduction\introduction.html"*/'<ion-content class="core-center-view">\n\n        <div class="box">\n\n            <img *ngIf="!logoUrl" src="assets/img/login_logo_fe.png" class="login-logo-parent" role="presentation">\n\n            <ion-slides   class="login-slides" pager="true" autoplay="3000">\n\n                <ion-slide>\n\n                        <img src="assets/img/login_slides/slide1.png" class="img-slides" role="presentation">\n\n                        <p class="slogan-text">{{ \'core.login.introone\' | translate }}</p>    \n\n                </ion-slide>\n\n\n\n                <ion-slide>\n\n                    \n\n                        <img src="assets/img/login_slides/slide2.png" class="img-slides" role="presentation">\n\n                        <p class="slogan-text">{{ \'core.login.introtwo\' | translate }}</p>\n\n                    \n\n                </ion-slide>\n\n\n\n                <ion-slide>\n\n                        <img src="assets/img/login_slides/slide3.png" class="img-slides" role="presentation">\n\n                        <p class="slogan-text">{{ \'core.login.introthree\' | translate }}</p>\n\n                </ion-slide>\n\n            </ion-slides>\n\n            \n\n            \n\n            <button ion-button block  (click)="goLoginPage()" >{{ \'core.login.loginbutton\' | translate }}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\ATS\moodleapp\src\core\login\pages\introduction\introduction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], CoreLoginIntroductionPage);
    return CoreLoginIntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ })

});
//# sourceMappingURL=42.js.map