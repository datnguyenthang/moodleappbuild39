webpackJsonp([145],{

/***/ 2033:
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

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(55);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(46);

// EXTERNAL MODULE: ./src/providers/data.service.ts
var data_service = __webpack_require__(761);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/addon/block/timeline/providers/timeline.ts
var timeline = __webpack_require__(285);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var helper = __webpack_require__(38);

// EXTERNAL MODULE: ./src/core/course/providers/options-delegate.ts
var options_delegate = __webpack_require__(106);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/addon/evaluate/providers/evaluate.ts
var evaluate = __webpack_require__(500);

// CONCATENATED MODULE: ./src/addon/evaluate/pages/input-info/input-info.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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

















/**
 * Page that displays the list of calendar events.
 */
var input_info_AddonEvaluateInputInfoPage = /** @class */ (function () {
    function AddonEvaluateInputInfoPage(domUtils, coursesProvider, utils, myOverviewProvider, sitesProvider, courseHelper, courseOptionsDelegate, eventsProvider, navCtrl, appProvider, evaluateProvider, fb, translate, alertController, navParams, data, userProvider) {
        var _this = this;
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.utils = utils;
        this.myOverviewProvider = myOverviewProvider;
        this.sitesProvider = sitesProvider;
        this.courseHelper = courseHelper;
        this.courseOptionsDelegate = courseOptionsDelegate;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertController = alertController;
        this.data = data;
        this.userProvider = userProvider;
        this.pageLoaded = false;
        this.boxClass = '';
        this.prefetchIconsInitialized = false;
        this.courseIds = '';
        this.evaluateProvider = evaluateProvider;
        this.loadSiteInfo();
        this.userProvider.getProfile(this.sitesProvider.getCurrentSiteUserId(), 1).then(function (user) {
            _this.credForm.controls['fullname'].setValue(user.fullname);
            _this.credForm.controls['email'].setValue(user.email);
        });
        this.credForm = fb.group({
            coursecode: ['', esm5_forms["u" /* Validators */].required],
            fullname: [''],
            email: [''],
            cmnd: ['']
        });
        this.boxClass = 'box box-bg';
        this.evaluateCode = navParams.get('evaluateCode');
        this.credForm.controls['coursecode'].setValue(this.evaluateCode);
        // this.events.subscribe('scanner:evaluateCode',(evaluateCode)=>{
        //     console.log(evaluateCode);
        //     this.credForm.controls['coursecode'].setValue(evaluateCode);  
        // });
    }
    /**
     * View loaded.
     */
    AddonEvaluateInputInfoPage.prototype.ionViewDidLoad = function () {
        // if (window['globalVariable'] && window['globalVariable'].evaluateCode) {
        //     // console.log(window['globalVariable'])
        //     this.credForm.controls['coursecode'].setValue(window['globalVariable'].evaluateCode);  
        //     window['globalVariable'].evaluateCode = '';
        // }
        // this.data.currentMessage.subscribe( (message) => {
        //     console.log(message);
        // });
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
        this.pageLoaded = true;
    };
    AddonEvaluateInputInfoPage.prototype.ionViewWillEnter = function () {
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
    };
    AddonEvaluateInputInfoPage.prototype.ionViewDidEnter = function () {
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
    };
    AddonEvaluateInputInfoPage.prototype.focusInSelect = function () {
        this.boxClass = 'box';
    };
    AddonEvaluateInputInfoPage.prototype.focusOutSelect = function () {
        this.boxClass = 'box box-bg';
    };
    AddonEvaluateInputInfoPage.prototype.checkcode = function () {
        var _this = this;
        var coursecode = this.credForm.value.coursecode;
        var fullname = this.credForm.value.fullname;
        var email = this.credForm.value.email;
        var cmnd = this.credForm.value.cmnd;
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.evaluateProvider.checkCourseCode(null, coursecode).then(function (data) {
            var status = Boolean(data['status']);
            if (status == true) {
                var detail = data['detail'];
                _this.navCtrl.push('AddonEvaluateSubmitEvaluatePage', { coursecode: coursecode, fullname: fullname, email: email, cmnd: cmnd, detail: detail });
            }
            else {
                _this.domUtils.showErrorModal(_this.translate.instant('addon.evaluate.messagecoursecodeinvalid'), true);
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error, true);
        }).finally(function () {
            modal.dismiss();
        });
        return;
    };
    /**
     * Load the site info.
     */
    AddonEvaluateInputInfoPage.prototype.loadSiteInfo = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
        this.siteUrl = this.sitesProvider.getCurrentSite().getInfo().siteurl;
    };
    /**
     * Component being initialized.
     */
    AddonEvaluateInputInfoPage.prototype.ngOnInit = function () {
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
    };
    /**
     * Page destroyed.
     */
    AddonEvaluateInputInfoPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(tabs["a" /* CoreTabsComponent */]),
        __metadata("design:type", tabs["a" /* CoreTabsComponent */])
    ], AddonEvaluateInputInfoPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(core["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", ionic_angular["A" /* Searchbar */])
    ], AddonEvaluateInputInfoPage.prototype, "searchbar", void 0);
    AddonEvaluateInputInfoPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-evaluate-input-info',
            templateUrl: 'input-info.html',
        }),
        __metadata("design:paramtypes", [dom["b" /* CoreDomUtilsProvider */],
            courses["b" /* CoreCoursesProvider */], utils_utils["b" /* CoreUtilsProvider */],
            timeline["a" /* AddonBlockTimelineProvider */], sites["b" /* CoreSitesProvider */],
            helper["b" /* CoreCourseHelperProvider */], options_delegate["a" /* CoreCourseOptionsDelegate */],
            events["b" /* CoreEventsProvider */], ionic_angular["t" /* NavController */], app["b" /* CoreAppProvider */],
            evaluate["a" /* AddonEvaluateProvider */], esm5_forms["d" /* FormBuilder */], _ngx_translate_core["c" /* TranslateService */],
            ionic_angular["b" /* AlertController */], ionic_angular["u" /* NavParams */], data_service["a" /* DataService */],
            user["b" /* CoreUserProvider */]])
    ], AddonEvaluateInputInfoPage);
    return AddonEvaluateInputInfoPage;
}());

//# sourceMappingURL=input-info.js.map
// CONCATENATED MODULE: ./src/addon/evaluate/pages/input-info/input-info.module.ts
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
var input_info_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var input_info_module_AddonEvaluateInputInfoPagePageModule = /** @class */ (function () {
    function AddonEvaluateInputInfoPagePageModule() {
    }
    AddonEvaluateInputInfoPagePageModule = input_info_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                input_info_AddonEvaluateInputInfoPage,
            ],
            imports: [
                components_components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(input_info_AddonEvaluateInputInfoPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonEvaluateInputInfoPagePageModule);
    return AddonEvaluateInputInfoPagePageModule;
}());

//# sourceMappingURL=input-info.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(22);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(44);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(503);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/addon/evaluate/pages/input-info/input-info.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























































var styles_AddonEvaluateInputInfoPage = [];
var RenderType_AddonEvaluateInputInfoPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonEvaluateInputInfoPage, data: {} });

function View_AddonEvaluateInputInfoPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSearch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](1, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = "search"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 2).transform("core.courses.searchcourses")); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_44" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); }); }
function View_AddonEvaluateInputInfoPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { tabsComponent: 0 }), core["_52" /* ɵqud */](402653184, 2, { searchbar: 0 }), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 19, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 15, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.exitQR() !== false);
        ad = (pd_0 && ad);
    } return ad; }, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_31" /* ɵeld */](10, 16777216, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], app["b" /* CoreAppProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"] }, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 6, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateInputInfoPage_1)), core["_30" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](23, 0, null, null, 89, "ion-content", [["class", "core-center-view"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](24, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, 0, 85, "div", [["class", "box"], ["ion-fixed", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](28, 0, null, null, 82, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 30).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 30).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.checkcode() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](29, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](30, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_30" /* ɵdid */](32, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](34, 0, null, null, 5, "div", [["margin-bottom", ""], ["text-center", ""], ["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](36, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](37, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](41, 0, null, null, 66, "div", [["class", "inputs-control"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](43, 0, null, null, 13, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](44, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](48, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](50, 0, null, 3, 5, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "coursecode"], ["name", "coursecode"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](51, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](53, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](54, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](58, 0, null, null, 13, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](59, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_30" /* ɵdid */](63, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](65, 0, null, 3, 5, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "fullname"], ["name", "fullname"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](66, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](68, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](69, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](73, 0, null, null, 13, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](74, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_30" /* ɵdid */](78, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](80, 0, null, 3, 5, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "email"], ["name", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](81, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](83, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](84, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](88, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["margin-bottom", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](89, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_30" /* ɵdid */](93, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](95, 0, null, 3, 5, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "cmnd"], ["name", "cmnd"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](96, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](98, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](99, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](103, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], [[8, "disabled", 0]], null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](104, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](105, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, [" \n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](109, 0, null, null, 0, "img", [["class", "thumbs-evaluate"], ["src", "assets/img/thumbs-evaluate.svg"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.siteName; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.searchEnabled; _ck(_v, 18, 0, currVal_3); var currVal_13 = _co.credForm; _ck(_v, 30, 0, currVal_13); var currVal_22 = "coursecode"; _ck(_v, 51, 0, currVal_22); var currVal_23 = "text"; var currVal_24 = "off"; var currVal_25 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 54, 2, core["_44" /* ɵnov */](_v, 55).transform("addon.evaluate.coursecode")), ""); _ck(_v, 54, 0, currVal_23, currVal_24, currVal_25); var currVal_33 = "fullname"; _ck(_v, 66, 0, currVal_33); var currVal_34 = "text"; var currVal_35 = "off"; var currVal_36 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 69, 2, core["_44" /* ɵnov */](_v, 70).transform("addon.evaluate.fullname")), ""); _ck(_v, 69, 0, currVal_34, currVal_35, currVal_36); var currVal_44 = "email"; _ck(_v, 81, 0, currVal_44); var currVal_45 = "text"; var currVal_46 = "off"; var currVal_47 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 84, 2, core["_44" /* ɵnov */](_v, 85).transform("addon.evaluate.email")), ""); _ck(_v, 84, 0, currVal_45, currVal_46, currVal_47); var currVal_55 = "cmnd"; _ck(_v, 96, 0, currVal_55); var currVal_56 = "text"; var currVal_57 = "off"; var currVal_58 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 99, 2, core["_44" /* ɵnov */](_v, 100).transform("addon.evaluate.cmnd")), ""); _ck(_v, 99, 0, currVal_56, currVal_57, currVal_58); var currVal_60 = ""; _ck(_v, 104, 0, currVal_60); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_4 = core["_44" /* ɵnov */](_v, 24).statusbarPadding; var currVal_5 = core["_44" /* ɵnov */](_v, 24)._hasRefresher; _ck(_v, 23, 0, currVal_4, currVal_5); var currVal_6 = core["_44" /* ɵnov */](_v, 32).ngClassUntouched; var currVal_7 = core["_44" /* ɵnov */](_v, 32).ngClassTouched; var currVal_8 = core["_44" /* ɵnov */](_v, 32).ngClassPristine; var currVal_9 = core["_44" /* ɵnov */](_v, 32).ngClassDirty; var currVal_10 = core["_44" /* ɵnov */](_v, 32).ngClassValid; var currVal_11 = core["_44" /* ɵnov */](_v, 32).ngClassInvalid; var currVal_12 = core["_44" /* ɵnov */](_v, 32).ngClassPending; _ck(_v, 28, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_14 = core["_56" /* ɵunv */](_v, 37, 0, core["_44" /* ɵnov */](_v, 38).transform("addon.evaluate.evaluate")); _ck(_v, 37, 0, currVal_14); var currVal_15 = core["_44" /* ɵnov */](_v, 53).ngClassUntouched; var currVal_16 = core["_44" /* ɵnov */](_v, 53).ngClassTouched; var currVal_17 = core["_44" /* ɵnov */](_v, 53).ngClassPristine; var currVal_18 = core["_44" /* ɵnov */](_v, 53).ngClassDirty; var currVal_19 = core["_44" /* ɵnov */](_v, 53).ngClassValid; var currVal_20 = core["_44" /* ɵnov */](_v, 53).ngClassInvalid; var currVal_21 = core["_44" /* ɵnov */](_v, 53).ngClassPending; _ck(_v, 50, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_26 = core["_44" /* ɵnov */](_v, 68).ngClassUntouched; var currVal_27 = core["_44" /* ɵnov */](_v, 68).ngClassTouched; var currVal_28 = core["_44" /* ɵnov */](_v, 68).ngClassPristine; var currVal_29 = core["_44" /* ɵnov */](_v, 68).ngClassDirty; var currVal_30 = core["_44" /* ɵnov */](_v, 68).ngClassValid; var currVal_31 = core["_44" /* ɵnov */](_v, 68).ngClassInvalid; var currVal_32 = core["_44" /* ɵnov */](_v, 68).ngClassPending; _ck(_v, 65, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_37 = core["_44" /* ɵnov */](_v, 83).ngClassUntouched; var currVal_38 = core["_44" /* ɵnov */](_v, 83).ngClassTouched; var currVal_39 = core["_44" /* ɵnov */](_v, 83).ngClassPristine; var currVal_40 = core["_44" /* ɵnov */](_v, 83).ngClassDirty; var currVal_41 = core["_44" /* ɵnov */](_v, 83).ngClassValid; var currVal_42 = core["_44" /* ɵnov */](_v, 83).ngClassInvalid; var currVal_43 = core["_44" /* ɵnov */](_v, 83).ngClassPending; _ck(_v, 80, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43); var currVal_48 = core["_44" /* ɵnov */](_v, 98).ngClassUntouched; var currVal_49 = core["_44" /* ɵnov */](_v, 98).ngClassTouched; var currVal_50 = core["_44" /* ɵnov */](_v, 98).ngClassPristine; var currVal_51 = core["_44" /* ɵnov */](_v, 98).ngClassDirty; var currVal_52 = core["_44" /* ɵnov */](_v, 98).ngClassValid; var currVal_53 = core["_44" /* ɵnov */](_v, 98).ngClassInvalid; var currVal_54 = core["_44" /* ɵnov */](_v, 98).ngClassPending; _ck(_v, 95, 0, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54); var currVal_59 = !_co.credForm.valid; _ck(_v, 103, 0, currVal_59); var currVal_61 = core["_56" /* ɵunv */](_v, 105, 0, core["_44" /* ɵnov */](_v, 106).transform("addon.evaluate.btnnext")); _ck(_v, 105, 0, currVal_61); }); }
function View_AddonEvaluateInputInfoPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-evaluate-input-info", [], null, null, null, View_AddonEvaluateInputInfoPage_0, RenderType_AddonEvaluateInputInfoPage)), core["_30" /* ɵdid */](1, 245760, null, 0, input_info_AddonEvaluateInputInfoPage, [dom["b" /* CoreDomUtilsProvider */], courses["b" /* CoreCoursesProvider */], utils_utils["b" /* CoreUtilsProvider */], timeline["a" /* AddonBlockTimelineProvider */], sites["b" /* CoreSitesProvider */], helper["b" /* CoreCourseHelperProvider */], options_delegate["a" /* CoreCourseOptionsDelegate */], events["b" /* CoreEventsProvider */], nav_controller["a" /* NavController */], app["b" /* CoreAppProvider */], evaluate["a" /* AddonEvaluateProvider */], esm5_forms["d" /* FormBuilder */], translate_service["a" /* TranslateService */], alert_controller["a" /* AlertController */], nav_params["a" /* NavParams */], data_service["a" /* DataService */], user["b" /* CoreUserProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonEvaluateInputInfoPageNgFactory = core["_27" /* ɵccf */]("page-addon-evaluate-input-info", input_info_AddonEvaluateInputInfoPage, View_AddonEvaluateInputInfoPage_Host_0, {}, {}, []);

//# sourceMappingURL=input-info.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/evaluate/pages/input-info/input-info.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonEvaluateInputInfoPagePageModuleNgFactory", function() { return AddonEvaluateInputInfoPagePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































var AddonEvaluateInputInfoPagePageModuleNgFactory = core["_28" /* ɵcmf */](input_info_module_AddonEvaluateInputInfoPagePageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], course_options_menu_ngfactory["a" /* CoreCoursesCourseOptionsMenuComponentNgFactory */], AddonEvaluateInputInfoPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreCoursesComponentsModule */], components_module["a" /* CoreCoursesComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, input_info_module_AddonEvaluateInputInfoPagePageModule, input_info_module_AddonEvaluateInputInfoPagePageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], input_info_AddonEvaluateInputInfoPage, [])]); });

//# sourceMappingURL=input-info.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=145.js.map