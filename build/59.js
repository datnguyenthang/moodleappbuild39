webpackJsonp([59],{

/***/ 2111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/config.ts
var config = __webpack_require__(128);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(105);

// CONCATENATED MODULE: ./src/core/login/pages/site-onboarding/site-onboarding.ts
// (C) Copyright 2015 Moodle Pty Ltd.
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
 * Component that displays onboarding help regarding the CoreLoginSitePage.
 */
var site_onboarding_CoreLoginSiteOnboardingPage = /** @class */ (function () {
    function CoreLoginSiteOnboardingPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.step = 0;
    }
    /**
     * Go to next step.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.next = function (e) {
        e.stopPropagation();
        this.step++;
    };
    /**
     * Go to previous step.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.previous = function (e) {
        e.stopPropagation();
        if (this.step == 0) {
            this.viewCtrl.dismiss();
        }
        else {
            this.step--;
        }
    };
    /**
     * Close modal.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.skip = function (e) {
        e.stopPropagation();
        this.saveOnboardingDone();
        this.viewCtrl.dismiss();
    };
    /**
     * Create a site.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.gotoWeb = function (e) {
        e.stopPropagation();
        this.saveOnboardingDone();
        utils["a" /* CoreUtils */].instance.openInBrowser('https://moodle.com/getstarted/');
        this.viewCtrl.dismiss();
    };
    /**
     * Saves the onboarding has finished.
     */
    CoreLoginSiteOnboardingPage.prototype.saveOnboardingDone = function () {
        config["a" /* CoreConfig */].instance.set(helper["a" /* CoreLoginHelperProvider */].ONBOARDING_DONE, 1);
    };
    CoreLoginSiteOnboardingPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-login-site-onboarding',
            templateUrl: 'site-onboarding.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["H" /* ViewController */]])
    ], CoreLoginSiteOnboardingPage);
    return CoreLoginSiteOnboardingPage;
}());

//# sourceMappingURL=site-onboarding.js.map
// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// CONCATENATED MODULE: ./src/core/login/pages/site-onboarding/site-onboarding.module.ts
// (C) Copyright 2015 Moodle Pty Ltd.
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
var site_onboarding_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var site_onboarding_module_CoreLoginSiteOnboardingPageModule = /** @class */ (function () {
    function CoreLoginSiteOnboardingPageModule() {
    }
    CoreLoginSiteOnboardingPageModule = site_onboarding_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                site_onboarding_CoreLoginSiteOnboardingPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(site_onboarding_CoreLoginSiteOnboardingPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild(),
            ]
        })
    ], CoreLoginSiteOnboardingPageModule);
    return CoreLoginSiteOnboardingPageModule;
}());

//# sourceMappingURL=site-onboarding.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config_config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./src/core/login/pages/site-onboarding/site-onboarding.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var styles_CoreLoginSiteOnboardingPage = [];
var RenderType_CoreLoginSiteOnboardingPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginSiteOnboardingPage, data: {} });

function View_CoreLoginSiteOnboardingPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 11, "div", [["class", "core-login-onboarding-step"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 3, "a", [["block", ""], ["color", "light"], ["ion-button", ""], ["margin-bottom", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.skip($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](3, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_55" /* ɵted */](4, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, null, 3, "a", [["block", ""], ["color", "light"], ["ion-button", ""], ["margin-bottom", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.next($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](8, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_55" /* ɵted */](9, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = "light"; var currVal_1 = ""; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = "light"; var currVal_4 = ""; _ck(_v, 8, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_2 = core["_56" /* ɵunv */](_v, 4, 0, core["_44" /* ɵnov */](_v, 5).transform("core.login.onboardingimalearner")); _ck(_v, 4, 0, currVal_2); var currVal_5 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.login.onboardingimaneducator")); _ck(_v, 9, 0, currVal_5); }); }
function View_CoreLoginSiteOnboardingPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 15, "div", [["class", "core-login-onboarding-step"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 2, "p", [["class", "core-login-onboarding-text"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](3, null, ["\n                ", "\n            "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, null, 3, "a", [["block", ""], ["color", "light"], ["ion-button", ""], ["margin-bottom", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.skip($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](7, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_55" /* ɵted */](8, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, null, 3, "a", [["block", ""], ["ion-button", ""], ["margin-bottom", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.next($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](12, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](13, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = "light"; var currVal_2 = ""; _ck(_v, 7, 0, currVal_1, currVal_2); var currVal_4 = ""; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 3, 0, core["_44" /* ɵnov */](_v, 4).transform("core.login.onboardingtoconnect")); _ck(_v, 3, 0, currVal_0); var currVal_3 = core["_56" /* ɵunv */](_v, 8, 0, core["_44" /* ɵnov */](_v, 9).transform("core.login.onboardingialreadyhaveasite")); _ck(_v, 8, 0, currVal_3); var currVal_5 = core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 14).transform("core.login.onboardingineedasite")); _ck(_v, 13, 0, currVal_5); }); }
function View_CoreLoginSiteOnboardingPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 27, "div", [["class", "core-login-onboarding-step"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 19, "ul", [["class", "core-login-onboarding-text"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 1, "core-icon", [["name", "fa-check-circle-o"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](6, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config_config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](7, null, [" ", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](11, 0, null, null, 1, "core-icon", [["name", "fa-check-circle-o"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](12, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config_config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](13, null, [" ", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](16, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 1, "core-icon", [["name", "fa-check-circle-o"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](18, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config_config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](19, null, [" ", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_31" /* ɵeld */](23, 0, null, null, 3, "a", [["block", ""], ["ion-button", ""], ["margin-bottom", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoWeb($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](24, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](25, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = "fa-check-circle-o"; _ck(_v, 6, 0, currVal_0); var currVal_2 = "fa-check-circle-o"; _ck(_v, 12, 0, currVal_2); var currVal_4 = "fa-check-circle-o"; _ck(_v, 18, 0, currVal_4); var currVal_6 = ""; _ck(_v, 24, 0, currVal_6); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 7, 0, core["_44" /* ɵnov */](_v, 8).transform("core.login.onboardingcreatemanagecourses")); _ck(_v, 7, 0, currVal_1); var currVal_3 = core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 14).transform("core.login.onboardingenrolmanagestudents")); _ck(_v, 13, 0, currVal_3); var currVal_5 = core["_56" /* ɵunv */](_v, 19, 0, core["_44" /* ɵnov */](_v, 20).transform("core.login.onboardingprovidefeedback")); _ck(_v, 19, 0, currVal_5); var currVal_7 = core["_56" /* ɵunv */](_v, 25, 0, core["_44" /* ɵnov */](_v, 26).transform("core.login.onboardinggetstarted")); _ck(_v, 25, 0, currVal_7); }); }
function View_CoreLoginSiteOnboardingPage_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 30, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 26, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, 3, 11, "ion-buttons", [["step", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](7, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.previous($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](11, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](14, 0, null, 0, 1, "ion-icon", [["name", "arrow-back"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](15, 147456, null, 0, icon_icon["a" /* Icon */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](19, 0, null, 2, 9, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](20, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](23, 0, null, null, 4, "button", [["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.skip($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](24, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](26, 0, ["\n                ", "\n            "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](32, 0, null, null, 23, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](33, 4374528, null, 0, content["a" /* Content */], [config_config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](35, 0, null, 1, 19, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](37, 0, null, null, 3, "div", [["class", "core-login-site-logo"], ["padding", ""], ["text-center", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](39, 0, null, null, 0, "img", [["class", "avatar-full login-logo"], ["role", "presentation"], ["src", "assets/img/login_logo.png"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_31" /* ɵeld */](42, 0, null, null, 2, "h3", [["class", "core-login-onboarding-step"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](43, null, ["\n            ", "\n        "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSiteOnboardingPage_1)), core["_30" /* ɵdid */](47, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSiteOnboardingPage_2)), core["_30" /* ɵdid */](50, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSiteOnboardingPage_3)), core["_30" /* ɵdid */](53, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = "arrow-back"; _ck(_v, 15, 0, currVal_4); var currVal_10 = (_co.step == 0); _ck(_v, 47, 0, currVal_10); var currVal_11 = (_co.step == 1); _ck(_v, 50, 0, currVal_11); var currVal_12 = (_co.step == 2); _ck(_v, 53, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 12).transform("core.back")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_44" /* ɵnov */](_v, 15)._hidden; _ck(_v, 14, 0, currVal_3); var currVal_5 = core["_56" /* ɵunv */](_v, 23, 0, core["_44" /* ɵnov */](_v, 25).transform("core.skip")); _ck(_v, 23, 0, currVal_5); var currVal_6 = core["_56" /* ɵunv */](_v, 26, 0, core["_44" /* ɵnov */](_v, 27).transform("core.skip")); _ck(_v, 26, 0, currVal_6); var currVal_7 = core["_44" /* ɵnov */](_v, 33).statusbarPadding; var currVal_8 = core["_44" /* ɵnov */](_v, 33)._hasRefresher; _ck(_v, 32, 0, currVal_7, currVal_8); var currVal_9 = core["_56" /* ɵunv */](_v, 43, 0, core["_44" /* ɵnov */](_v, 44).transform("core.login.onboardingwelcome")); _ck(_v, 43, 0, currVal_9); }); }
function View_CoreLoginSiteOnboardingPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-core-login-site-onboarding", [], null, null, null, View_CoreLoginSiteOnboardingPage_0, RenderType_CoreLoginSiteOnboardingPage)), core["_30" /* ɵdid */](1, 49152, null, 0, site_onboarding_CoreLoginSiteOnboardingPage, [view_controller["a" /* ViewController */]], null, null)], null, null); }
var CoreLoginSiteOnboardingPageNgFactory = core["_27" /* ɵccf */]("page-core-login-site-onboarding", site_onboarding_CoreLoginSiteOnboardingPage, View_CoreLoginSiteOnboardingPage_Host_0, {}, {}, []);

//# sourceMappingURL=site-onboarding.ngfactory.js.map
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

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/ionic3-star-rating/dist/ionic3-star-rating.module.js
var ionic3_star_rating_module = __webpack_require__(745);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(276);

// CONCATENATED MODULE: ./src/core/login/pages/site-onboarding/site-onboarding.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSiteOnboardingPageModuleNgFactory", function() { return CoreLoginSiteOnboardingPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var CoreLoginSiteOnboardingPageModuleNgFactory = core["_28" /* ɵcmf */](site_onboarding_module_CoreLoginSiteOnboardingPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreLoginSiteOnboardingPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, site_onboarding_module_CoreLoginSiteOnboardingPageModule, site_onboarding_module_CoreLoginSiteOnboardingPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], site_onboarding_CoreLoginSiteOnboardingPage, [])]); });

//# sourceMappingURL=site-onboarding.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=59.js.map