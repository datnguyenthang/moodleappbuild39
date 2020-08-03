webpackJsonp([139],{

/***/ 2018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonLandingPopupPageModule", function() { return AddonLandingPopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup__ = __webpack_require__(2187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(429);
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






var AddonLandingPopupPageModule = /** @class */ (function () {
    function AddonLandingPopupPageModule() {
    }
    AddonLandingPopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__popup__["a" /* AddonLandingPopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__popup__["a" /* AddonLandingPopupPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonLandingPopupPageModule);
    return AddonLandingPopupPageModule;
}());

//# sourceMappingURL=popup.module.js.map

/***/ }),

/***/ 2187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonLandingPopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_course_providers_helper__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
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
 * Component that displays some help regarding the CoreLoginSitePage.
 */
var AddonLandingPopupPage = /** @class */ (function () {
    function AddonLandingPopupPage(params, viewCtrl, courseHelper, sitesProvider) {
        this.viewCtrl = viewCtrl;
        this.courseHelper = courseHelper;
        this.sitesProvider = sitesProvider;
        this.data = params.get('data');
    }
    /**
     * Close help modal.
     */
    AddonLandingPopupPage.prototype.closeHelp = function () {
        this.viewCtrl.dismiss();
    };
    AddonLandingPopupPage.prototype.openActivity = function (moduleid, courseid, modname) {
        this.courseHelper.navigateToModule(moduleid, this.sitesProvider.getCurrentSiteId(), courseid, undefined, modname);
        this.closeHelp();
    };
    AddonLandingPopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-landing-popup',template:/*ion-inline-start:"D:\Project\ATS\moodleapp\src\addon\landing\pages\popup\addon-landing-popup.html"*/'<ion-content padding class="main-view">\n    <div class="overlay" (click)="closeHelp()"></div>\n    <div class="modal_content">\n        <!--\n        <div class="close" (click)="closeHelp()">\n            <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n        </div>\n        -->\n        <ion-slides class="popup-slides" loop="true" pager="true" autoplay="3000">\n            <ion-slide *ngFor="let slide of data">\n                <a (click)="openActivity(slide.moduleid, slide.courseid, slide.modname)">\n                    <img class="lazy-loaded" src="{{slide.image}}" >\n                </a>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\Project\ATS\moodleapp\src\addon\landing\pages\popup\addon-landing-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__core_course_providers_helper__["b" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */]])
    ], AddonLandingPopupPage);
    return AddonLandingPopupPage;
}());

//# sourceMappingURL=popup.js.map

/***/ })

});
//# sourceMappingURL=139.js.map