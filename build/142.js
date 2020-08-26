webpackJsonp([142],{

/***/ 2036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/courses/components/components.module.ts + 1 modules
var components_module = __webpack_require__(278);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(110);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(203);

// EXTERNAL MODULE: ./src/addon/landing/providers/landing.ts
var landing = __webpack_require__(491);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/mainmenu/providers/mainmenu.ts
var mainmenu = __webpack_require__(495);

// EXTERNAL MODULE: ./src/core/mainmenu/providers/delegate.ts
var delegate = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(79);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var helper = __webpack_require__(38);

// CONCATENATED MODULE: ./src/addon/landing/pages/my-landing/my-landing.ts
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
var my_landing_AddonLandingMyLandingPage = /** @class */ (function () {
    function AddonLandingMyLandingPage(menuDelegate, sitesProvider, landingProvider, navCtrl, domUtils, mainMenuProvider, sanitizer, courseHelper) {
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.landingProvider = landingProvider;
        this.navCtrl = navCtrl;
        this.domUtils = domUtils;
        this.mainMenuProvider = mainMenuProvider;
        this.sanitizer = sanitizer;
        this.courseHelper = courseHelper;
        this.landingLoaded = false;
        this.loadSiteName();
        // this.landingProvider.initPopup();
        this.loadSlideData();
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
        // this.landingProvider.initPopup();
        this.initHandlers();
        this.loadSlideData();
        refresher.complete();
    };
    /**
     * View loaded.
     */
    AddonLandingMyLandingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.landingLoaded = true;
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            _this.allHandlers = handlers;
            _this.initHandlers();
            _this.loadSlideData();
        });
        window.addEventListener('resize', this.initHandlers.bind(this));
    };
    AddonLandingMyLandingPage.prototype.initHandlers = function () {
        if (this.allHandlers) {
            // Calculate the main handlers not to display them in this view.
            var mainHandlers_1 = this.allHandlers.filter(function (handler) {
                return !handler.onlyInMore;
            }).slice(0, this.mainMenuProvider.getNumItems());
            //const mainHandlers = this.allHandlers;
            // Get only the handlers that don't appear in the main view.
            this.handlers = this.allHandlers.filter(function (handler) {
                return mainHandlers_1.indexOf(handler) == -1;
            });
            this.handlersLoaded = this.menuDelegate.areHandlersLoaded();
        }
    };
    AddonLandingMyLandingPage.prototype.loadSlideData = function () {
        var _this = this;
        this.landingProvider.getSlideData().then(function (result) {
            _this.sliders = result;
            _this.slideDatas = _this.sliders.data;
            _this.slideDatas.forEach(function (slide) {
                slide.link = _this.sanitizer.bypassSecurityTrustUrl(slide.link);
            });
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
    AddonLandingMyLandingPage.prototype.openLink = function (moduleid, courseid, modname) {
        if (moduleid)
            this.courseHelper.navigateToModule(moduleid, this.sitesProvider.getCurrentSiteId(), courseid, undefined, modname);
        else if (courseid)
            this.courseHelper.getAndOpenCourse(this.navCtrl, courseid);
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(tabs["a" /* CoreTabsComponent */]),
        __metadata("design:type", tabs["a" /* CoreTabsComponent */])
    ], AddonLandingMyLandingPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(core["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", ionic_angular["A" /* Searchbar */])
    ], AddonLandingMyLandingPage.prototype, "searchbar", void 0);
    AddonLandingMyLandingPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-landing-my-landing',
            templateUrl: 'my-landing.html',
        }),
        __metadata("design:paramtypes", [delegate["a" /* CoreMainMenuDelegate */], sites["b" /* CoreSitesProvider */], landing["a" /* AddonLandingProvider */],
            ionic_angular["t" /* NavController */], dom["b" /* CoreDomUtilsProvider */], mainmenu["a" /* CoreMainMenuProvider */],
            platform_browser["c" /* DomSanitizer */], helper["b" /* CoreCourseHelperProvider */]])
    ], AddonLandingMyLandingPage);
    return AddonLandingMyLandingPage;
}());

//# sourceMappingURL=my-landing.js.map
// CONCATENATED MODULE: ./src/addon/landing/pages/my-landing/my-landing.module.ts
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
var my_landing_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var my_landing_module_AddonLandingMyLandingPageModule = /** @class */ (function () {
    function AddonLandingMyLandingPageModule() {
    }
    AddonLandingMyLandingPageModule = my_landing_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                my_landing_AddonLandingMyLandingPage,
            ],
            imports: [
                components_components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(my_landing_AddonLandingMyLandingPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonLandingMyLandingPageModule);
    return AddonLandingMyLandingPageModule;
}());

//# sourceMappingURL=my-landing.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1563);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1564);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1565);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1566);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1567);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1568);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1569);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1570);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1571);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-popover.ngfactory.js
var context_menu_popover_ngfactory = __webpack_require__(1572);

// EXTERNAL MODULE: ./src/components/course-picker-menu/course-picker-menu-popover.ngfactory.js
var course_picker_menu_popover_ngfactory = __webpack_require__(1573);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptchamodal.ngfactory.js
var recaptchamodal_ngfactory = __webpack_require__(1574);

// EXTERNAL MODULE: ./src/components/bs-tooltip/bs-tooltip.ngfactory.js
var bs_tooltip_ngfactory = __webpack_require__(1575);

// EXTERNAL MODULE: ./src/core/courses/components/course-options-menu/course-options-menu.ngfactory.js
var course_options_menu_ngfactory = __webpack_require__(1581);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slide.ngfactory.js
var slide_ngfactory = __webpack_require__(768);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slide.js
var slide = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slides.js + 14 modules
var slides = __webpack_require__(262);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slides.ngfactory.js
var slides_ngfactory = __webpack_require__(769);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(22);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(44);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var providers_delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(176);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// CONCATENATED MODULE: ./src/addon/landing/pages/my-landing/my-landing.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






























































var styles_AddonLandingMyLandingPage = [];
var RenderType_AddonLandingMyLandingPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonLandingMyLandingPage, data: {} });

function View_AddonLandingMyLandingPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 7, "ion-slide", [], null, null, null, slide_ngfactory["b" /* View_Slide_0 */], slide_ngfactory["a" /* RenderType_Slide */])), core["_30" /* ɵdid */](1, 180224, null, 0, slide["a" /* Slide */], [core["t" /* ElementRef */], core["V" /* Renderer */], slides["a" /* Slides */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, 0, 3, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openLink(_v.context.$implicit.moduleid, _v.context.$implicit.courseid, _v.context.$implicit.modname) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 0, "img", [["class", "lazy-loaded"]], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.imageurl; _ck(_v, 5, 0, currVal_0); }); }
function View_AddonLandingMyLandingPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 5, "ion-slides", [["autoplay", "3000"], ["loop", "true"], ["pager", "true"]], null, null, null, slides_ngfactory["b" /* View_Slides_0 */], slides_ngfactory["a" /* RenderType_Slides */])), core["_30" /* ɵdid */](1, 1228800, null, 0, slides["a" /* Slides */], [config["a" /* Config */], platform["a" /* Platform */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], core["t" /* ElementRef */], core["V" /* Renderer */]], { autoplay: [0, "autoplay"], loop: [1, "loop"], pager: [2, "pager"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonLandingMyLandingPage_2)), core["_30" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "3000"; var currVal_1 = "true"; var currVal_2 = "true"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.slideDatas; _ck(_v, 4, 0, currVal_3); }, null); }
function View_AddonLandingMyLandingPage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "core-icon", [], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](1, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.icon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonLandingMyLandingPage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.icon; _ck(_v, 0, 0, currVal_0); }); }
function View_AddonLandingMyLandingPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 19, "ion-col", [["class", "col"], ["col-3", ""], ["col-sm", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openHandler(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 14, "div", [["class", "tool-element"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, null, 7, "div", [["class", "tool-img"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonLandingMyLandingPage_4)), core["_30" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonLandingMyLandingPage_5)), core["_30" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](16, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "]))], function (_ck, _v) { var currVal_1 = !_v.context.$implicit.icon.includes("http"); _ck(_v, 9, 0, currVal_1); var currVal_2 = _v.context.$implicit.icon.includes("http"); _ck(_v, 12, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 2).transform(_v.context.$implicit.title)), ""); _ck(_v, 0, 0, currVal_0); var currVal_3 = core["_56" /* ɵunv */](_v, 16, 0, core["_44" /* ɵnov */](_v, 17).transform(_v.context.$implicit.title)); _ck(_v, 16, 0, currVal_3); }); }
function View_AddonLandingMyLandingPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { tabsComponent: 0 }), core["_52" /* ɵqud */](402653184, 2, { searchbar: 0 }), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 24, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 20, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_31" /* ɵeld */](10, 16777216, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_app["b" /* CoreAppProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], providers_delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"] }, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-p", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSearch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](18, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](22, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](28, 0, null, null, 117, "ion-content", [["class", "ats-content"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.doRefresh($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](32, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](34, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ɵdid */](35, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](39, 0, null, 1, 105, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](40, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ɵeld */](42, 0, null, 0, 101, "div", [["ion-fixed", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](44, 0, null, null, 62, "ion-grid", [["class", "box grid"]], null, null, null, null, null)), core["_30" /* ɵdid */](45, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](47, 0, null, null, 28, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_30" /* ɵdid */](48, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](50, 0, null, null, 11, "ion-col", [["class", "col"], ["col-6", ""], ["col-sm", ""], ["id", "s-o-s"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openCataloguePage("AddonSchoolOfSalesMySchoolOfSalesPage") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](51, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](53, 0, null, null, 3, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](55, 0, null, null, 0, "img", [["src", "assets/img/landing/sales.svg"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](58, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](59, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](63, 0, null, null, 11, "ion-col", [["class", "col"], ["col-6", ""], ["col-sm", ""], ["id", "s-o-r"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openCataloguePage("AddonSchoolOfRecoveryMySchoolOfRecoveryPage") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](64, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](66, 0, null, null, 3, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](68, 0, null, null, 0, "img", [["src", "assets/img/landing/recovery.svg"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](71, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](72, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](77, 0, null, null, 28, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_30" /* ɵdid */](78, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](80, 0, null, null, 11, "ion-col", [["class", "col"], ["col-6", ""], ["col-sm", ""], ["id", "f-a"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openCataloguePage("AddonFeAcademyMyFeAcademyPage") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](81, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](83, 0, null, null, 3, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](85, 0, null, null, 0, "img", [["src", "assets/img/landing/fe-academy.svg"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](88, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](89, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](93, 0, null, null, 11, "ion-col", [["class", "col"], ["col-6", ""], ["col-sm", ""], ["id", "m-c"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openCataloguePage("AddonMandatoryMyMandatoryPage") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](94, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](96, 0, null, null, 3, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](98, 0, null, null, 0, "img", [["src", "assets/img/landing/mandatory.svg"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](101, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](102, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_31" /* ɵeld */](108, 0, null, null, 12, "div", [["class", "block_slider"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](110, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](112, 0, null, null, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](113, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](114, null, ["\n                        ", "\n                    "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonLandingMyLandingPage_1)), core["_30" /* ɵdid */](119, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_31" /* ɵeld */](122, 0, null, null, 20, "div", [["class", "block_tools"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](124, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](126, 0, null, null, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](127, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](128, null, ["\n                        ", "\n                    "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](132, 0, null, null, 9, "ion-grid", [["class", "tools grid"]], null, null, null, null, null)), core["_30" /* ɵdid */](133, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](135, 0, null, null, 5, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_30" /* ɵdid */](136, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonLandingMyLandingPage_3)), core["_30" /* ɵdid */](139, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.siteName; _ck(_v, 11, 0, currVal_2); var currVal_5 = "search"; _ck(_v, 22, 0, currVal_5); var currVal_10 = _co.landingLoaded; _ck(_v, 32, 0, currVal_10); var currVal_12 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 35, 0, core["_44" /* ɵnov */](_v, 36).transform("core.pulltorefresh")), ""); _ck(_v, 35, 0, currVal_12); var currVal_13 = _co.landingLoaded; _ck(_v, 40, 0, currVal_13); var currVal_19 = (_co.slideDatas && _co.slideDatas.length); _ck(_v, 119, 0, currVal_19); var currVal_21 = _co.handlers; _ck(_v, 139, 0, currVal_21); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_3 = core["_56" /* ɵunv */](_v, 17, 0, core["_44" /* ɵnov */](_v, 19).transform("core.courses.searchcourses")); _ck(_v, 17, 0, currVal_3); var currVal_4 = core["_44" /* ɵnov */](_v, 22)._hidden; _ck(_v, 21, 0, currVal_4); var currVal_6 = core["_44" /* ɵnov */](_v, 29).statusbarPadding; var currVal_7 = core["_44" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_6, currVal_7); var currVal_8 = (core["_44" /* ɵnov */](_v, 32).state !== "inactive"); var currVal_9 = core["_44" /* ɵnov */](_v, 32)._top; _ck(_v, 31, 0, currVal_8, currVal_9); var currVal_11 = core["_44" /* ɵnov */](_v, 35).r.state; _ck(_v, 34, 0, currVal_11); var currVal_14 = core["_56" /* ɵunv */](_v, 59, 0, core["_44" /* ɵnov */](_v, 60).transform("addon.landing.schoolofsale")); _ck(_v, 59, 0, currVal_14); var currVal_15 = core["_56" /* ɵunv */](_v, 72, 0, core["_44" /* ɵnov */](_v, 73).transform("addon.landing.schoolofrecovery")); _ck(_v, 72, 0, currVal_15); var currVal_16 = core["_56" /* ɵunv */](_v, 89, 0, core["_44" /* ɵnov */](_v, 90).transform("addon.landing.feacademy")); _ck(_v, 89, 0, currVal_16); var currVal_17 = core["_56" /* ɵunv */](_v, 102, 0, core["_44" /* ɵnov */](_v, 103).transform("addon.landing.mandatorycourse")); _ck(_v, 102, 0, currVal_17); var currVal_18 = core["_56" /* ɵunv */](_v, 114, 0, core["_44" /* ɵnov */](_v, 115).transform("addon.landing.titleslider")); _ck(_v, 114, 0, currVal_18); var currVal_20 = core["_56" /* ɵunv */](_v, 128, 0, core["_44" /* ɵnov */](_v, 129).transform("addon.landing.titletools")); _ck(_v, 128, 0, currVal_20); }); }
function View_AddonLandingMyLandingPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-landing-my-landing", [], null, null, null, View_AddonLandingMyLandingPage_0, RenderType_AddonLandingMyLandingPage)), core["_30" /* ɵdid */](1, 180224, null, 0, my_landing_AddonLandingMyLandingPage, [delegate["a" /* CoreMainMenuDelegate */], sites["b" /* CoreSitesProvider */], landing["a" /* AddonLandingProvider */], nav_controller["a" /* NavController */], dom["b" /* CoreDomUtilsProvider */], mainmenu["a" /* CoreMainMenuProvider */], platform_browser["c" /* DomSanitizer */], helper["b" /* CoreCourseHelperProvider */]], null, null)], null, null); }
var AddonLandingMyLandingPageNgFactory = core["_27" /* ɵccf */]("page-addon-landing-my-landing", my_landing_AddonLandingMyLandingPage, View_AddonLandingMyLandingPage_Host_0, {}, {}, []);

//# sourceMappingURL=my-landing.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(742);

// EXTERNAL MODULE: ./node_modules/ionic3-star-rating/dist/ionic3-star-rating.module.js
var ionic3_star_rating_module = __webpack_require__(745);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(276);

// CONCATENATED MODULE: ./src/addon/landing/pages/my-landing/my-landing.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonLandingMyLandingPageModuleNgFactory", function() { return AddonLandingMyLandingPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































var AddonLandingMyLandingPageModuleNgFactory = core["_28" /* ɵcmf */](my_landing_module_AddonLandingMyLandingPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], course_options_menu_ngfactory["a" /* CoreCoursesCourseOptionsMenuComponentNgFactory */], AddonLandingMyLandingPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreCoursesComponentsModule */], components_module["a" /* CoreCoursesComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, my_landing_module_AddonLandingMyLandingPageModule, my_landing_module_AddonLandingMyLandingPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], my_landing_AddonLandingMyLandingPage, [])]); });

//# sourceMappingURL=my-landing.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=142.js.map