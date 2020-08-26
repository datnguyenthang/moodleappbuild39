webpackJsonp([62],{

/***/ 2109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// CONCATENATED MODULE: ./src/core/login/pages/introduction/introduction.ts
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
var introduction_CoreLoginIntroductionPage = /** @class */ (function () {
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
        Object(core["m" /* Component */])({
            selector: 'page-core-login-introduction',
            templateUrl: 'introduction.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavController */], ionic_angular["u" /* NavParams */]])
    ], CoreLoginIntroductionPage);
    return CoreLoginIntroductionPage;
}());

//# sourceMappingURL=introduction.js.map
// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// CONCATENATED MODULE: ./src/core/login/pages/introduction/introduction.module.ts
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
var introduction_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var introduction_module_CoreLoginIntroductionPageModule = /** @class */ (function () {
    function CoreLoginIntroductionPageModule() {
    }
    CoreLoginIntroductionPageModule = introduction_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                introduction_CoreLoginIntroductionPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(introduction_CoreLoginIntroductionPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginIntroductionPageModule);
    return CoreLoginIntroductionPageModule;
}());

//# sourceMappingURL=introduction.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slides.ngfactory.js
var slides_ngfactory = __webpack_require__(769);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slides.js + 14 modules
var slides = __webpack_require__(262);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slide.ngfactory.js
var slide_ngfactory = __webpack_require__(768);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/slides/slide.js
var slide = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/core/login/pages/introduction/introduction.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_CoreLoginIntroductionPage = [];
var RenderType_CoreLoginIntroductionPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginIntroductionPage, data: {} });

function View_CoreLoginIntroductionPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, "img", [["class", "login-logo-parent"], ["role", "presentation"], ["src", "assets/img/login_logo_fe.png"]], null, null, null, null, null))], null, null); }
function View_CoreLoginIntroductionPage_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 47, "ion-content", [["class", "core-center-view"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](1, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, 1, 43, "div", [["class", "box"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginIntroductionPage_1)), core["_30" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, null, 32, "ion-slides", [["autoplay", "3000"], ["class", "login-slides"], ["pager", "true"]], null, null, null, slides_ngfactory["b" /* View_Slides_0 */], slides_ngfactory["a" /* RenderType_Slides */])), core["_30" /* ɵdid */](9, 1228800, null, 0, slides["a" /* Slides */], [config["a" /* Config */], platform["a" /* Platform */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], core["t" /* ElementRef */], core["V" /* Renderer */]], { autoplay: [0, "autoplay"], pager: [1, "pager"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 0, 8, "ion-slide", [], null, null, null, slide_ngfactory["b" /* View_Slide_0 */], slide_ngfactory["a" /* RenderType_Slide */])), core["_30" /* ɵdid */](12, 180224, null, 0, slide["a" /* Slide */], [core["t" /* ElementRef */], core["V" /* Renderer */], slides["a" /* Slides */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](14, 0, null, 0, 0, "img", [["class", "img-slides"], ["role", "presentation"], ["src", "assets/img/login_slides/slide1.png"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](16, 0, null, 0, 2, "p", [["class", "slogan-text"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](17, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["    \n                "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n                "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, 0, 8, "ion-slide", [], null, null, null, slide_ngfactory["b" /* View_Slide_0 */], slide_ngfactory["a" /* RenderType_Slide */])), core["_30" /* ɵdid */](22, 180224, null, 0, slide["a" /* Slide */], [core["t" /* ElementRef */], core["V" /* Renderer */], slides["a" /* Slides */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    \n                        "])), (_l()(), core["_31" /* ɵeld */](24, 0, null, 0, 0, "img", [["class", "img-slides"], ["role", "presentation"], ["src", "assets/img/login_slides/slide2.png"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, 0, 2, "p", [["class", "slogan-text"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](27, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    \n                "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n                "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 0, 8, "ion-slide", [], null, null, null, slide_ngfactory["b" /* View_Slide_0 */], slide_ngfactory["a" /* RenderType_Slide */])), core["_30" /* ɵdid */](32, 180224, null, 0, slide["a" /* Slide */], [core["t" /* ElementRef */], core["V" /* Renderer */], slides["a" /* Slides */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](34, 0, null, 0, 0, "img", [["class", "img-slides"], ["role", "presentation"], ["src", "assets/img/login_slides/slide3.png"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](36, 0, null, 0, 2, "p", [["class", "slogan-text"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](37, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            \n            \n            "])), (_l()(), core["_31" /* ɵeld */](42, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goLoginPage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](43, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](44, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.logoUrl; _ck(_v, 6, 0, currVal_2); var currVal_3 = "3000"; var currVal_4 = "true"; _ck(_v, 9, 0, currVal_3, currVal_4); var currVal_8 = ""; _ck(_v, 43, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 1).statusbarPadding; var currVal_1 = core["_44" /* ɵnov */](_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = core["_56" /* ɵunv */](_v, 17, 0, core["_44" /* ɵnov */](_v, 18).transform("core.login.introone")); _ck(_v, 17, 0, currVal_5); var currVal_6 = core["_56" /* ɵunv */](_v, 27, 0, core["_44" /* ɵnov */](_v, 28).transform("core.login.introtwo")); _ck(_v, 27, 0, currVal_6); var currVal_7 = core["_56" /* ɵunv */](_v, 37, 0, core["_44" /* ɵnov */](_v, 38).transform("core.login.introthree")); _ck(_v, 37, 0, currVal_7); var currVal_9 = core["_56" /* ɵunv */](_v, 44, 0, core["_44" /* ɵnov */](_v, 45).transform("core.login.loginbutton")); _ck(_v, 44, 0, currVal_9); }); }
function View_CoreLoginIntroductionPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-core-login-introduction", [], null, null, null, View_CoreLoginIntroductionPage_0, RenderType_CoreLoginIntroductionPage)), core["_30" /* ɵdid */](1, 49152, null, 0, introduction_CoreLoginIntroductionPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */]], null, null)], null, null); }
var CoreLoginIntroductionPageNgFactory = core["_27" /* ɵccf */]("page-core-login-introduction", introduction_CoreLoginIntroductionPage, View_CoreLoginIntroductionPage_Host_0, {}, {}, []);

//# sourceMappingURL=introduction.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/login/pages/introduction/introduction.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginIntroductionPageModuleNgFactory", function() { return CoreLoginIntroductionPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var CoreLoginIntroductionPageModuleNgFactory = core["_28" /* ɵcmf */](introduction_module_CoreLoginIntroductionPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreLoginIntroductionPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, introduction_module_CoreLoginIntroductionPageModule, introduction_module_CoreLoginIntroductionPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], introduction_CoreLoginIntroductionPage, [])]); });

//# sourceMappingURL=introduction.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=62.js.map