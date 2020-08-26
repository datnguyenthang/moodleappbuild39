webpackJsonp([64],{

/***/ 2107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// CONCATENATED MODULE: ./src/core/login/pages/forgotten-password/forgotten-password.ts
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
 * Page to recover a forgotten password.
 */
var forgotten_password_CoreLoginForgottenPasswordPage = /** @class */ (function () {
    function CoreLoginForgottenPasswordPage(navCtrl, navParams, fb, platform, translate, loginHelper, domUtils, eventsProvider, sitesProvider) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.siteUrl = navParams.get('siteUrl');
        this.autoFocus = platform.is('tablet');
        this.myForm = fb.group({
            field: ['username', esm5_forms["u" /* Validators */].required],
            value: [navParams.get('username') || '', esm5_forms["u" /* Validators */].required]
        });
    }
    /**
     * Request to reset the password.
     *
     * @param e Event.
     */
    CoreLoginForgottenPasswordPage.prototype.resetPassword = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var field = this.myForm.value.field, value = this.myForm.value.value;
        if (!value) {
            this.domUtils.showErrorModal('core.login.usernameoremail', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true), isMail = field == 'email';
        this.loginHelper.requestPasswordReset(this.siteUrl, isMail ? '' : value, isMail ? value : '').then(function (response) {
            if (response.status == 'dataerror') {
                // Error in the data sent.
                _this.showError(isMail, response.warnings);
            }
            else if (response.status == 'emailpasswordconfirmnotsent' || response.status == 'emailpasswordconfirmnoemail') {
                // Error, not found.
                _this.domUtils.showErrorModal(response.notice);
            }
            else {
                // Success.
                _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                _this.domUtils.showAlert(_this.translate.instant('core.success'), response.notice);
                _this.navCtrl.pop();
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            modal.dismiss();
        });
    };
    // Show an error from the warnings.
    CoreLoginForgottenPasswordPage.prototype.showError = function (isMail, warnings) {
        for (var i = 0; i < warnings.length; i++) {
            var warning = warnings[i];
            if ((warning.item == 'email' && isMail) || (warning.item == 'username' && !isMail)) {
                this.domUtils.showErrorModal(warning.message);
                break;
            }
        }
    };
    __decorate([
        Object(core["_9" /* ViewChild */])('resetPasswordForm'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], CoreLoginForgottenPasswordPage.prototype, "formElement", void 0);
    CoreLoginForgottenPasswordPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-login-forgotten-password',
            templateUrl: 'forgotten-password.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavController */],
            ionic_angular["u" /* NavParams */],
            esm5_forms["d" /* FormBuilder */],
            ionic_angular["w" /* Platform */],
            _ngx_translate_core["c" /* TranslateService */],
            helper["a" /* CoreLoginHelperProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            events["b" /* CoreEventsProvider */],
            sites["b" /* CoreSitesProvider */]])
    ], CoreLoginForgottenPasswordPage);
    return CoreLoginForgottenPasswordPage;
}());

//# sourceMappingURL=forgotten-password.js.map
// CONCATENATED MODULE: ./src/core/login/pages/forgotten-password/forgotten-password.module.ts
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
var forgotten_password_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var forgotten_password_module_CoreLoginForgottenPasswordPageModule = /** @class */ (function () {
    function CoreLoginForgottenPasswordPageModule() {
    }
    CoreLoginForgottenPasswordPageModule = forgotten_password_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                forgotten_password_CoreLoginForgottenPasswordPage
            ],
            imports: [
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(forgotten_password_CoreLoginForgottenPasswordPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginForgottenPasswordPageModule);
    return CoreLoginForgottenPasswordPageModule;
}());

//# sourceMappingURL=forgotten-password.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

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

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-group.js
var radio_group = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.ngfactory.js
var radio_button_ngfactory = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.js
var radio_button = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(104);

// EXTERNAL MODULE: ./src/directives/auto-focus.ts
var auto_focus = __webpack_require__(387);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/core/login/pages/forgotten-password/forgotten-password.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













































var styles_CoreLoginForgottenPasswordPage = [];
var RenderType_CoreLoginForgottenPasswordPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginForgottenPasswordPage, data: {} });

function View_CoreLoginForgottenPasswordPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { formElement: 0 }), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform_platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](10, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 105, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](18, 0, null, 1, 11, "ion-list", [], null, null, null, null, null)), core["_30" /* ɵdid */](19, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, null, 7, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](22, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_30" /* ɵdid */](26, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](27, 2, ["\n            ", "\n        "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 1, 88, "ion-card", [], null, null, null, null, null)), core["_30" /* ɵdid */](32, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](34, 0, [[1, 0], ["resetPasswordForm", 1]], null, 84, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 36).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 36).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.resetPassword($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](35, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](36, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_30" /* ɵdid */](38, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](40, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](41, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_30" /* ɵdid */](45, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](46, 2, ["\n                ", "\n            "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, null, 39, "div", [["formControlName", "field"], ["radio-group", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), core["_30" /* ɵdid */](50, 1064960, null, 1, radio_group["a" /* RadioGroup */], [core["V" /* Renderer */], core["t" /* ElementRef */], core["j" /* ChangeDetectorRef */]], null, null), core["_52" /* ɵqud */](335544320, 8, { _header: 0 }), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [radio_group["a" /* RadioGroup */]]), core["_30" /* ɵdid */](53, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](55, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](57, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](58, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_30" /* ɵdid */](62, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](64, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](65, 16384, [[9, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](66, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](69, 0, null, 4, 1, "ion-radio", [["value", "username"]], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 70)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_30" /* ɵdid */](70, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](73, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](74, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 12, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 13, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 14, { _icons: 1 }), core["_30" /* ɵdid */](78, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](80, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](81, 16384, [[12, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](82, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](85, 0, null, 4, 1, "ion-radio", [["value", "email"]], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 86)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_30" /* ɵdid */](86, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](90, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](91, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 15, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 16, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 17, { _icons: 1 }), core["_30" /* ɵdid */](95, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](97, 0, null, 3, 6, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "value"], ["name", "value"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](98, 81920, null, 0, auto_focus["a" /* CoreAutoFocusDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils["b" /* CoreUtilsProvider */], [2, nav_controller["a" /* NavController */]]], { coreAutoFocus: [0, "coreAutoFocus"] }, null), core["_30" /* ɵdid */](99, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](101, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](102, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](106, 0, null, null, 11, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](107, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 18, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 19, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 20, { _icons: 1 }), core["_30" /* ɵdid */](111, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](113, 0, null, 2, 3, "button", [["block", ""], ["ion-button", ""], ["text-wrap", ""]], [[8, "disabled", 0]], null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](114, 1097728, [[19, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](115, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_13 = _co.myForm; _ck(_v, 36, 0, currVal_13); var currVal_22 = "field"; _ck(_v, 53, 0, currVal_22); var currVal_25 = "username"; _ck(_v, 70, 0, currVal_25); var currVal_28 = "email"; _ck(_v, 86, 0, currVal_28); var currVal_36 = _co.autoFocus; _ck(_v, 98, 0, currVal_36); var currVal_37 = "value"; _ck(_v, 99, 0, currVal_37); var currVal_38 = "text"; var currVal_39 = "off"; var currVal_40 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 102, 2, core["_44" /* ɵnov */](_v, 103).transform("core.login.usernameoremail")), ""); _ck(_v, 102, 0, currVal_38, currVal_39, currVal_40); var currVal_42 = ""; _ck(_v, 114, 0, currVal_42); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("core.login.passwordforgotten")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_44" /* ɵnov */](_v, 16).statusbarPadding; var currVal_4 = core["_44" /* ɵnov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = core["_56" /* ɵunv */](_v, 27, 0, core["_44" /* ɵnov */](_v, 28).transform("core.login.passwordforgotteninstructions2")); _ck(_v, 27, 0, currVal_5); var currVal_6 = core["_44" /* ɵnov */](_v, 38).ngClassUntouched; var currVal_7 = core["_44" /* ɵnov */](_v, 38).ngClassTouched; var currVal_8 = core["_44" /* ɵnov */](_v, 38).ngClassPristine; var currVal_9 = core["_44" /* ɵnov */](_v, 38).ngClassDirty; var currVal_10 = core["_44" /* ɵnov */](_v, 38).ngClassValid; var currVal_11 = core["_44" /* ɵnov */](_v, 38).ngClassInvalid; var currVal_12 = core["_44" /* ɵnov */](_v, 38).ngClassPending; _ck(_v, 34, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_14 = core["_56" /* ɵunv */](_v, 46, 0, core["_44" /* ɵnov */](_v, 47).transform("core.login.searchby")); _ck(_v, 46, 0, currVal_14); var currVal_15 = core["_44" /* ɵnov */](_v, 55).ngClassUntouched; var currVal_16 = core["_44" /* ɵnov */](_v, 55).ngClassTouched; var currVal_17 = core["_44" /* ɵnov */](_v, 55).ngClassPristine; var currVal_18 = core["_44" /* ɵnov */](_v, 55).ngClassDirty; var currVal_19 = core["_44" /* ɵnov */](_v, 55).ngClassValid; var currVal_20 = core["_44" /* ɵnov */](_v, 55).ngClassInvalid; var currVal_21 = core["_44" /* ɵnov */](_v, 55).ngClassPending; _ck(_v, 49, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_23 = core["_56" /* ɵunv */](_v, 66, 0, core["_44" /* ɵnov */](_v, 67).transform("core.login.username")); _ck(_v, 66, 0, currVal_23); var currVal_24 = core["_44" /* ɵnov */](_v, 70)._disabled; _ck(_v, 69, 0, currVal_24); var currVal_26 = core["_56" /* ɵunv */](_v, 82, 0, core["_44" /* ɵnov */](_v, 83).transform("core.user.email")); _ck(_v, 82, 0, currVal_26); var currVal_27 = core["_44" /* ɵnov */](_v, 86)._disabled; _ck(_v, 85, 0, currVal_27); var currVal_29 = core["_44" /* ɵnov */](_v, 101).ngClassUntouched; var currVal_30 = core["_44" /* ɵnov */](_v, 101).ngClassTouched; var currVal_31 = core["_44" /* ɵnov */](_v, 101).ngClassPristine; var currVal_32 = core["_44" /* ɵnov */](_v, 101).ngClassDirty; var currVal_33 = core["_44" /* ɵnov */](_v, 101).ngClassValid; var currVal_34 = core["_44" /* ɵnov */](_v, 101).ngClassInvalid; var currVal_35 = core["_44" /* ɵnov */](_v, 101).ngClassPending; _ck(_v, 97, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_41 = !_co.myForm.valid; _ck(_v, 113, 0, currVal_41); var currVal_43 = core["_56" /* ɵunv */](_v, 115, 0, core["_44" /* ɵnov */](_v, 116).transform("core.courses.search")); _ck(_v, 115, 0, currVal_43); }); }
function View_CoreLoginForgottenPasswordPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-core-login-forgotten-password", [], null, null, null, View_CoreLoginForgottenPasswordPage_0, RenderType_CoreLoginForgottenPasswordPage)), core["_30" /* ɵdid */](1, 49152, null, 0, forgotten_password_CoreLoginForgottenPasswordPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */], esm5_forms["d" /* FormBuilder */], platform_platform["a" /* Platform */], translate_service["a" /* TranslateService */], helper["a" /* CoreLoginHelperProvider */], dom["b" /* CoreDomUtilsProvider */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */]], null, null)], null, null); }
var CoreLoginForgottenPasswordPageNgFactory = core["_27" /* ɵccf */]("page-core-login-forgotten-password", forgotten_password_CoreLoginForgottenPasswordPage, View_CoreLoginForgottenPasswordPage_Host_0, {}, {}, []);

//# sourceMappingURL=forgotten-password.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(276);

// CONCATENATED MODULE: ./src/core/login/pages/forgotten-password/forgotten-password.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPageModuleNgFactory", function() { return CoreLoginForgottenPasswordPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var CoreLoginForgottenPasswordPageModuleNgFactory = core["_28" /* ɵcmf */](forgotten_password_module_CoreLoginForgottenPasswordPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], CoreLoginForgottenPasswordPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, forgotten_password_module_CoreLoginForgottenPasswordPageModule, forgotten_password_module_CoreLoginForgottenPasswordPageModule, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], forgotten_password_CoreLoginForgottenPasswordPage, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, [])]); });

//# sourceMappingURL=forgotten-password.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=64.js.map