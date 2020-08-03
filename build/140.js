webpackJsonp([140],{

/***/ 2017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonLandingMyLandingPageModule", function() { return AddonLandingMyLandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_landing__ = __webpack_require__(2186);
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








var AddonLandingMyLandingPageModule = /** @class */ (function () {
    function AddonLandingMyLandingPageModule() {
    }
    AddonLandingMyLandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__my_landing__["a" /* AddonLandingMyLandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__my_landing__["a" /* AddonLandingMyLandingPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonLandingMyLandingPageModule);
    return AddonLandingMyLandingPageModule;
}());

//# sourceMappingURL=my-landing.module.js.map

/***/ }),

/***/ 2186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonLandingMyLandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_landing__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_mainmenu_providers_mainmenu__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_mainmenu_providers_delegate__ = __webpack_require__(76);
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
 * Page this show up about FE School.
 */
var AddonLandingMyLandingPage = /** @class */ (function () {
    function AddonLandingMyLandingPage(menuDelegate, sitesProvider, landingProvider, navCtrl, domUtils) {
        var _this = this;
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.landingProvider = landingProvider;
        this.navCtrl = navCtrl;
        this.domUtils = domUtils;
        this.landingLoaded = false;
        this.loadSiteName();
        this.landingProvider.initPopup();
        this.landingProvider.getSlideData().then(function (result) {
            _this.sliders = result;
            _this.slideDatas = _this.sliders.data;
        });
    }
    /**
     * Go to specific page.
     */
    AddonLandingMyLandingPage.prototype.openCataloguePage = function (pageAddress) {
        this.navCtrl.push(pageAddress);
    };
    /**
     * Go to search courses.
     */
    AddonLandingMyLandingPage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * Load the site name.
     */
    AddonLandingMyLandingPage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
    };
    /**
     * Page destroyed.
     */
    AddonLandingMyLandingPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    /**
     * Refresh the data.
     *
     * @param  {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonLandingMyLandingPage.prototype.doRefresh = function (refresher) {
        this.landingProvider.initPopup();
        this.loadCustomHandler();
        refresher.complete();
    };
    /**
     * View loaded.
     */
    AddonLandingMyLandingPage.prototype.ionViewDidLoad = function () {
        this.landingLoaded = true;
        this.loadCustomHandler();
        this.loadSlideData();
    };
    AddonLandingMyLandingPage.prototype.loadCustomHandler = function () {
        var _this = this;
        console.log('load Custom Handler');
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            // Calculate the main handlers to not display them in this view.
            var mainHandlers = handlers.filter(function (handler) {
                return !handler.onlyInMore;
            }).slice(0, __WEBPACK_IMPORTED_MODULE_6__core_mainmenu_providers_mainmenu__["a" /* CoreMainMenuProvider */].NUM_MAIN_HANDLERS);
            // Get only the handlers that don't appear in the main view.
            _this.handlers = [];
            handlers.forEach(function (handler) {
                if (mainHandlers.indexOf(handler) == -1) {
                    _this.handlers.push(handler);
                }
            });
            _this.handlersLoaded = _this.menuDelegate.areHandlersLoaded();
        });
    };
    AddonLandingMyLandingPage.prototype.loadSlideData = function () {
        var _this = this;
        this.landingProvider.getSlideData().then(function (result) {
            _this.sliders = result;
            _this.slideDatas = _this.sliders.data;
        });
    };
    /**
     * Open a handler.
     *
     * @param {CoreMainMenuHandlerData} handler Handler to open.
     */
    AddonLandingMyLandingPage.prototype.openHandler = function (handler) {
        this.navCtrl.push(handler.page, handler.pageParams);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonLandingMyLandingPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Searchbar */])
    ], AddonLandingMyLandingPage.prototype, "searchbar", void 0);
    AddonLandingMyLandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-landing-my-landing',template:/*ion-inline-start:"D:\Project\ATS\moodleapp\src\addon\landing\pages\my-landing\my-landing.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="openSearch()" [attr.aria-p]="\'core.courses.searchcourses\' | translate">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="landingLoaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="landingLoaded">\n\n        <div ion-fixed>\n\n            <ion-grid class="box">\n\n                <ion-row>\n\n                    <ion-col id="s-o-s" col-6 col-sm (click)="openCataloguePage(\'AddonSchoolOfSalesMySchoolOfSalesPage\')">\n\n                        <div class="item">\n\n                            <img src="assets/img/landing/sales.svg">\n\n                        </div>\n\n                        <p>{{ \'addon.landing.schoolofsale\' | translate }}</p>\n\n                    </ion-col>\n\n                    <ion-col id="s-o-r" col-6 col-sm (click)="openCataloguePage(\'AddonSchoolOfRecoveryMySchoolOfRecoveryPage\')">\n\n                        <div class="item">\n\n                            <img src="assets/img/landing/recovery.svg">\n\n                        </div>\n\n                        <p>{{ \'addon.landing.schoolofrecovery\' | translate }}</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col id="f-a" col-6 col-sm (click)="openCataloguePage(\'AddonFeAcademyMyFeAcademyPage\')">\n\n                        <div class="item">\n\n                            <img src="assets/img/landing/fe-academy.svg">\n\n                        </div>\n\n                        <p>{{ \'addon.landing.feacademy\' | translate }}</p>\n\n                    </ion-col>\n\n                    <ion-col id="m-c" col-6 col-sm (click)="openCataloguePage(\'AddonMandatoryMyMandatoryPage\')">\n\n                        <div class="item">\n\n                            <img src="assets/img/landing/mandatory.svg">\n\n                        </div>\n\n                        <p>{{ \'addon.landing.mandatorycourse\' | translate }}</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n\n\n            <div class="block_slider">\n\n                <div>\n\n                    <ion-label>\n\n                        {{ \'addon.landing.slider.title\' | translate }}\n\n                    </ion-label>\n\n                </div>\n\n                <ion-slides *ngIf="slideDatas && slideDatas.length" autoplay="3000" loop="true" pager="true">\n\n                    <ion-slide *ngFor="let slide of slideDatas">\n\n                        <a href="{{slide.link}}">\n\n                            <img class="lazy-loaded" src="{{slide.imageurl}}" >\n\n                        </a>\n\n                    </ion-slide>\n\n                </ion-slides>\n\n            </div>\n\n\n\n            <div class="block_tools">\n\n                <div>\n\n                    <ion-label>\n\n                        {{ \'addon.landing.tools.title\' | translate }}\n\n                    </ion-label>\n\n                </div>\n\n                <ion-grid class="tools">\n\n                    <ion-row>\n\n                        <ion-col col-3 col-sm *ngFor="let handler of handlers" (click)="openHandler(handler)" title="{{ handler.title | translate }}">\n\n                            <div class="tool-element">\n\n                                <div class="tool-img">\n\n                                    <core-icon [name]="handler.icon"></core-icon>\n\n                                </div>\n\n                                <p>{{ handler.title | translate}}</p>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </div>\n\n    </core-loading>\n\n</ion-content>'/*ion-inline-end:"D:\Project\ATS\moodleapp\src\addon\landing\pages\my-landing\my-landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__core_mainmenu_providers_delegate__["a" /* CoreMainMenuDelegate */], __WEBPACK_IMPORTED_MODULE_2__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_landing__["a" /* AddonLandingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */]])
    ], AddonLandingMyLandingPage);
    return AddonLandingMyLandingPage;
}());

//# sourceMappingURL=my-landing.js.map

/***/ })

});
//# sourceMappingURL=140.js.map