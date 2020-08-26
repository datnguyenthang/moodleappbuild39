webpackJsonp([144],{

/***/ 2034:
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

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/addon/evaluate/providers/evaluate.ts
var evaluate = __webpack_require__(500);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// CONCATENATED MODULE: ./src/addon/evaluate/pages/submit-evaluate/submit-evaluate.ts
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
var submit_evaluate_AddonEvaluateSubmitEvaluatePage = /** @class */ (function () {
    function AddonEvaluateSubmitEvaluatePage(domUtils, sitesProvider, navCtrl, appProvider, fb, navParams, evaluateProvider, translate, app) {
        this.domUtils = domUtils;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.app = app;
        this.pageLoaded = false;
        this.courseIds = '';
        this.loadSiteInfo();
        this.evaluateProvider = evaluateProvider;
        this.coursecode = navParams.get('coursecode');
        this.fullname = navParams.get('fullname');
        this.email = navParams.get('email');
        this.cmnd = navParams.get('cmnd');
        this.evaluateQuestion = JSON.parse(navParams.get('detail'));
    }
    /**
     * View loaded.
     */
    AddonEvaluateSubmitEvaluatePage.prototype.ionViewDidLoad = function () {
        this.pageLoaded = true;
    };
    AddonEvaluateSubmitEvaluatePage.prototype.submitEvaluate = function () {
        var _this = this;
        var evaluateInfo = { 'event_id': this.evaluateQuestion['courseid'],
            'fullname': this.fullname,
            'email': this.email,
            'cmnd': this.cmnd
        };
        var points = new Array();
        this.evaluateQuestion['questions']['type1'].forEach(function (value) {
            var submitPoint = (5 - document.getElementById('rating_' + value.id).querySelectorAll('.ion-ios-star-outline').length);
            var point = value.id + '_' + submitPoint + '_';
            points.push(point);
        });
        this.evaluateQuestion['questions']['type2'].forEach(function (value) {
            var submitPoint = (5 - document.getElementById('rating_' + value.id).querySelectorAll('.ion-ios-star-outline').length);
            var point = value.id + '_' + submitPoint + '_' + value.trainer_id;
            points.push(point);
        });
        var comments = new Array();
        this.evaluateQuestion['questions']['type3'].forEach(function (value) {
            var commentid = 'comment_' + value.id;
            var commentvalue = document.getElementById(commentid).querySelector('textarea').value;
            comments.push({ 'id': value.id, 'content': commentvalue });
        });
        var evaluateDetail = { 'point': points, 'comment': comments };
        var submitData = { 'evaluate_info': evaluateInfo, 'evaluate_detail': evaluateDetail };
        var submitDataJson = JSON.stringify(submitData);
        // console.log(submitData);
        // console.log(submitDataJson);
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.evaluateProvider.submitEvaluateCourse(null, submitDataJson).then(function (data) {
            var status = Boolean(data['status']);
            if (status == true) {
                _this.domUtils.showAlert(_this.translate.instant('addon.evaluate.alerttitle'), _this.translate.instant('addon.evaluate.messagesubmitsuccess'), _this.translate.instant('addon.evaluate.btnok'));
                _this.navCtrl.popToRoot();
                _this.navCtrl.parent.select(1);
                // this.navCtrl.setRoot("CoreLoginInitPage"); 
            }
            else {
                _this.domUtils.showErrorModal(_this.translate.instant('addon.evaluate.messagesubmitfailed'), true);
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error, true);
        }).finally(function () {
            modal.dismiss();
        });
        return;
    };
    /**
     * Component being initialized.
     */
    AddonEvaluateSubmitEvaluatePage.prototype.ngOnInit = function () { };
    /**
     * Load the site info.
     */
    AddonEvaluateSubmitEvaluatePage.prototype.loadSiteInfo = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
        this.siteUrl = this.sitesProvider.getCurrentSite().getInfo().siteurl;
    };
    /**
     * Page destroyed.
     */
    AddonEvaluateSubmitEvaluatePage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(tabs["a" /* CoreTabsComponent */]),
        __metadata("design:type", tabs["a" /* CoreTabsComponent */])
    ], AddonEvaluateSubmitEvaluatePage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(core["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", ionic_angular["A" /* Searchbar */])
    ], AddonEvaluateSubmitEvaluatePage.prototype, "searchbar", void 0);
    AddonEvaluateSubmitEvaluatePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-evaluate-submit-evaluate',
            templateUrl: 'submit-evaluate.html',
        }),
        __metadata("design:paramtypes", [dom["b" /* CoreDomUtilsProvider */], sites["b" /* CoreSitesProvider */],
            ionic_angular["t" /* NavController */], app["b" /* CoreAppProvider */],
            esm5_forms["d" /* FormBuilder */], ionic_angular["u" /* NavParams */], evaluate["a" /* AddonEvaluateProvider */],
            _ngx_translate_core["c" /* TranslateService */], app_app["a" /* App */]])
    ], AddonEvaluateSubmitEvaluatePage);
    return AddonEvaluateSubmitEvaluatePage;
}());

//# sourceMappingURL=submit-evaluate.js.map
// EXTERNAL MODULE: ./node_modules/ionic3-star-rating/dist/index.js
var dist = __webpack_require__(1663);

// CONCATENATED MODULE: ./src/addon/evaluate/pages/submit-evaluate/submit-evaluate.module.ts
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
var submit_evaluate_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var submit_evaluate_module_AddonEvaluateSubmitEvaluatePagePageModule = /** @class */ (function () {
    function AddonEvaluateSubmitEvaluatePagePageModule() {
    }
    AddonEvaluateSubmitEvaluatePagePageModule = submit_evaluate_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                submit_evaluate_AddonEvaluateSubmitEvaluatePage,
            ],
            imports: [
                components_components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
                dist["a" /* StarRatingModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(submit_evaluate_AddonEvaluateSubmitEvaluatePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonEvaluateSubmitEvaluatePagePageModule);
    return AddonEvaluateSubmitEvaluatePagePageModule;
}());

//# sourceMappingURL=submit-evaluate.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic3-star-rating/dist/components/ionic3-star-rating-component.ngfactory.js
var ionic3_star_rating_component_ngfactory = __webpack_require__(1665);

// EXTERNAL MODULE: ./node_modules/ionic3-star-rating/dist/components/ionic3-star-rating-component.js
var ionic3_star_rating_component = __webpack_require__(409);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(215);

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

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(44);

// EXTERNAL MODULE: ./src/providers/events.ts
var providers_events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var providers_helper = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/addon/evaluate/pages/submit-evaluate/submit-evaluate.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























































var styles_AddonEvaluateSubmitEvaluatePage = [];
var RenderType_AddonEvaluateSubmitEvaluatePage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonEvaluateSubmitEvaluatePage, data: {} });

function View_AddonEvaluateSubmitEvaluatePage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSearch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](1, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = "search"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 2).transform("core.courses.searchcourses")); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_44" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); }); }
function View_AddonEvaluateSubmitEvaluatePage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 24, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 1, "span", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](10, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 3, "ionic3-star-rating", [["activeColor", "#008446"], ["activeIcon", "ios-star"], ["defaultColor", "#008446"], ["defaultIcon", "ios-star-outline"], ["readonly", "false"]], [[8, "id", 0]], null, null, ionic3_star_rating_component_ngfactory["b" /* View_StarRating_0 */], ionic3_star_rating_component_ngfactory["a" /* RenderType_StarRating */])), core["_50" /* ɵprd */](5120, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [ionic3_star_rating_component["a" /* StarRating */]]), core["_30" /* ɵdid */](14, 114688, null, 0, ionic3_star_rating_component["a" /* StarRating */], [events["a" /* Events */]], { rating: [0, "rating"], readonly: [1, "readonly"], activeColor: [2, "activeColor"], defaultColor: [3, "defaultColor"], activeIcon: [4, "activeIcon"], defaultIcon: [5, "defaultIcon"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_2 = 3; var currVal_3 = "false"; var currVal_4 = "#008446"; var currVal_5 = "#008446"; var currVal_6 = "ios-star"; var currVal_7 = "ios-star-outline"; _ck(_v, 14, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.content; _ck(_v, 10, 0, currVal_0); var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", ("rating_" + _v.context.$implicit.id), ""); _ck(_v, 12, 0, currVal_1); }); }
function View_AddonEvaluateSubmitEvaluatePage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 14, "ion-item", [["class", "type_2 item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 30, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 1, "span", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](10, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 3, "ionic3-star-rating", [["activeColor", "#008446"], ["activeIcon", "ios-star"], ["defaultColor", "#008446"], ["defaultIcon", "ios-star-outline"], ["readonly", "false"]], [[8, "id", 0]], null, null, ionic3_star_rating_component_ngfactory["b" /* View_StarRating_0 */], ionic3_star_rating_component_ngfactory["a" /* RenderType_StarRating */])), core["_50" /* ɵprd */](5120, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [ionic3_star_rating_component["a" /* StarRating */]]), core["_30" /* ɵdid */](14, 114688, null, 0, ionic3_star_rating_component["a" /* StarRating */], [events["a" /* Events */]], { rating: [0, "rating"], readonly: [1, "readonly"], activeColor: [2, "activeColor"], defaultColor: [3, "defaultColor"], activeIcon: [4, "activeIcon"], defaultIcon: [5, "defaultIcon"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_2 = 3; var currVal_3 = "false"; var currVal_4 = "#008446"; var currVal_5 = "#008446"; var currVal_6 = "ios-star"; var currVal_7 = "ios-star-outline"; _ck(_v, 14, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.trainer_name; _ck(_v, 10, 0, currVal_0); var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", ("rating_" + _v.context.$implicit.id), ""); _ck(_v, 12, 0, currVal_1); }); }
function View_AddonEvaluateSubmitEvaluatePage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 10, "ion-item", [["class", "item-no-border item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 34, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 35, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 36, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 3, 2, "ion-textarea", [["rows", "3"]], [[8, "id", 0]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](8, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { placeholder: [0, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "]))], function (_ck, _v) { var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 8, 0, core["_44" /* ɵnov */](_v, 9).transform("addon.evaluate.placeholdercomment")), ""); _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_34" /* ɵinlineInterpolate */](1, "", ("comment_" + _v.parent.context.$implicit.id), ""); _ck(_v, 7, 0, currVal_0); }); }
function View_AddonEvaluateSubmitEvaluatePage_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 37, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 38, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 39, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 3, 2, "ion-textarea", [["rows", "3"]], [[8, "id", 0]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](8, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { placeholder: [0, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "]))], function (_ck, _v) { var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 8, 0, core["_44" /* ɵnov */](_v, 9).transform("addon.evaluate.placeholdercomment")), ""); _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_34" /* ɵinlineInterpolate */](1, "", ("comment_" + _v.parent.context.$implicit.id), ""); _ck(_v, 7, 0, currVal_0); }); }
function View_AddonEvaluateSubmitEvaluatePage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 19, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 31, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 32, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 33, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](10, 16384, [[31, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](11, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateSubmitEvaluatePage_5)), core["_30" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateSubmitEvaluatePage_6)), core["_30" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_1 = _v.context.last; _ck(_v, 15, 0, currVal_1); var currVal_2 = !_v.context.last; _ck(_v, 18, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.content; _ck(_v, 11, 0, currVal_0); }); }
function View_AddonEvaluateSubmitEvaluatePage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { tabsComponent: 0 }), core["_52" /* ɵqud */](402653184, 2, { searchbar: 0 }), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 19, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 15, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_31" /* ɵeld */](10, 16777216, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], app["b" /* CoreAppProvider */], helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], providers_events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"] }, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 6, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateSubmitEvaluatePage_1)), core["_30" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](23, 0, null, null, 165, "ion-content", [["class", "core-center-view"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](24, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, 1, 161, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](27, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], providers_events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ɵeld */](29, 0, null, 0, 157, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, null, 5, "div", [["margin-bottom", ""], ["text-center", ""], ["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](33, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](34, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_31" /* ɵeld */](38, 0, null, null, 147, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 40).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 40).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](39, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](40, 4210688, null, 0, esm5_forms["p" /* NgForm */], [[8, null], [8, null]], null, null), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["p" /* NgForm */]]), core["_30" /* ɵdid */](42, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](44, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](45, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](48, 0, null, null, 103, "div", [["class", "box"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    \n                    "])), (_l()(), core["_31" /* ɵeld */](50, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](51, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](55, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](57, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](58, 16384, [[4, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](59, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](62, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](63, 16384, [[4, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](64, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](67, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](68, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_30" /* ɵdid */](72, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](74, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](75, 16384, [[7, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](76, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](79, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](80, 16384, [[7, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](81, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](84, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](85, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_30" /* ɵdid */](89, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](91, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](92, 16384, [[10, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](93, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](96, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](97, 16384, [[10, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](98, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), core["_31" /* ɵeld */](101, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](102, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_30" /* ɵdid */](106, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](108, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](109, 16384, [[13, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](110, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](113, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](114, 16384, [[13, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](115, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](118, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](119, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_30" /* ɵdid */](123, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](125, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](126, 16384, [[16, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](127, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](130, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](131, 16384, [[16, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](132, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](135, 0, null, null, 15, "ion-item", [["class", "item-no-border item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](136, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 21, { _icons: 1 }), core["_30" /* ɵdid */](140, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](142, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](143, 16384, [[19, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](144, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](147, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](148, 16384, [[19, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](149, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](153, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](154, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](157, 0, null, null, 22, "div", [["class", "box"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    \n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateSubmitEvaluatePage_2)), core["_30" /* ɵdid */](160, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), core["_31" /* ɵeld */](162, 0, null, null, 10, "ion-item", [["class", "item-no-border item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](163, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 27, { _icons: 1 }), core["_30" /* ɵdid */](167, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](169, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](170, 16384, [[25, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](171, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    \n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateSubmitEvaluatePage_3)), core["_30" /* ɵdid */](175, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonEvaluateSubmitEvaluatePage_4)), core["_30" /* ɵdid */](178, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](181, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submitEvaluate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](182, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](183, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.siteName; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.searchEnabled; _ck(_v, 18, 0, currVal_3); var currVal_6 = _co.pageLoaded; _ck(_v, 27, 0, currVal_6); var currVal_29 = _co.evaluateQuestion["questions"]["type1"]; _ck(_v, 160, 0, currVal_29); var currVal_31 = _co.evaluateQuestion["questions"]["type2"]; _ck(_v, 175, 0, currVal_31); var currVal_32 = _co.evaluateQuestion["questions"]["type3"]; _ck(_v, 178, 0, currVal_32); var currVal_33 = ""; _ck(_v, 182, 0, currVal_33); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_4 = core["_44" /* ɵnov */](_v, 24).statusbarPadding; var currVal_5 = core["_44" /* ɵnov */](_v, 24)._hasRefresher; _ck(_v, 23, 0, currVal_4, currVal_5); var currVal_7 = core["_56" /* ɵunv */](_v, 34, 0, core["_44" /* ɵnov */](_v, 35).transform("addon.evaluate.evaluate")); _ck(_v, 34, 0, currVal_7); var currVal_8 = core["_44" /* ɵnov */](_v, 42).ngClassUntouched; var currVal_9 = core["_44" /* ɵnov */](_v, 42).ngClassTouched; var currVal_10 = core["_44" /* ɵnov */](_v, 42).ngClassPristine; var currVal_11 = core["_44" /* ɵnov */](_v, 42).ngClassDirty; var currVal_12 = core["_44" /* ɵnov */](_v, 42).ngClassValid; var currVal_13 = core["_44" /* ɵnov */](_v, 42).ngClassInvalid; var currVal_14 = core["_44" /* ɵnov */](_v, 42).ngClassPending; _ck(_v, 38, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = core["_56" /* ɵunv */](_v, 45, 0, core["_44" /* ɵnov */](_v, 46).transform("addon.evaluate.courseinfo")); _ck(_v, 45, 0, currVal_15); var currVal_16 = core["_56" /* ɵunv */](_v, 59, 0, core["_44" /* ɵnov */](_v, 60).transform("addon.evaluate.coursecode")); _ck(_v, 59, 0, currVal_16); var currVal_17 = _co.coursecode; _ck(_v, 64, 0, currVal_17); var currVal_18 = core["_56" /* ɵunv */](_v, 76, 0, core["_44" /* ɵnov */](_v, 77).transform("addon.evaluate.coursename")); _ck(_v, 76, 0, currVal_18); var currVal_19 = _co.evaluateQuestion["coursename"]; _ck(_v, 81, 0, currVal_19); var currVal_20 = core["_56" /* ɵunv */](_v, 93, 0, core["_44" /* ɵnov */](_v, 94).transform("addon.evaluate.coursestartdate")); _ck(_v, 93, 0, currVal_20); var currVal_21 = _co.evaluateQuestion["timestart"]; _ck(_v, 98, 0, currVal_21); var currVal_22 = core["_56" /* ɵunv */](_v, 110, 0, core["_44" /* ɵnov */](_v, 111).transform("addon.evaluate.fullname")); _ck(_v, 110, 0, currVal_22); var currVal_23 = _co.fullname; _ck(_v, 115, 0, currVal_23); var currVal_24 = core["_56" /* ɵunv */](_v, 127, 0, core["_44" /* ɵnov */](_v, 128).transform("addon.evaluate.email")); _ck(_v, 127, 0, currVal_24); var currVal_25 = _co.email; _ck(_v, 132, 0, currVal_25); var currVal_26 = core["_56" /* ɵunv */](_v, 144, 0, core["_44" /* ɵnov */](_v, 145).transform("addon.evaluate.cmnd")); _ck(_v, 144, 0, currVal_26); var currVal_27 = _co.cmnd; _ck(_v, 149, 0, currVal_27); var currVal_28 = core["_56" /* ɵunv */](_v, 154, 0, core["_44" /* ɵnov */](_v, 155).transform("addon.evaluate.evaluatequestion")); _ck(_v, 154, 0, currVal_28); var currVal_30 = _co.evaluateQuestion["questions"]["type2"][0].content; _ck(_v, 171, 0, currVal_30); var currVal_34 = core["_56" /* ɵunv */](_v, 183, 0, core["_44" /* ɵnov */](_v, 184).transform("addon.evaluate.btnsubmit")); _ck(_v, 183, 0, currVal_34); }); }
function View_AddonEvaluateSubmitEvaluatePage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-evaluate-submit-evaluate", [], null, null, null, View_AddonEvaluateSubmitEvaluatePage_0, RenderType_AddonEvaluateSubmitEvaluatePage)), core["_30" /* ɵdid */](1, 245760, null, 0, submit_evaluate_AddonEvaluateSubmitEvaluatePage, [dom["b" /* CoreDomUtilsProvider */], sites["b" /* CoreSitesProvider */], nav_controller["a" /* NavController */], app["b" /* CoreAppProvider */], esm5_forms["d" /* FormBuilder */], nav_params["a" /* NavParams */], evaluate["a" /* AddonEvaluateProvider */], translate_service["a" /* TranslateService */], app_app["a" /* App */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonEvaluateSubmitEvaluatePageNgFactory = core["_27" /* ɵccf */]("page-addon-evaluate-submit-evaluate", submit_evaluate_AddonEvaluateSubmitEvaluatePage, View_AddonEvaluateSubmitEvaluatePage_Host_0, {}, {}, []);

//# sourceMappingURL=submit-evaluate.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/evaluate/pages/submit-evaluate/submit-evaluate.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonEvaluateSubmitEvaluatePagePageModuleNgFactory", function() { return AddonEvaluateSubmitEvaluatePagePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































var AddonEvaluateSubmitEvaluatePagePageModuleNgFactory = core["_28" /* ɵcmf */](submit_evaluate_module_AddonEvaluateSubmitEvaluatePagePageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], course_options_menu_ngfactory["a" /* CoreCoursesCourseOptionsMenuComponentNgFactory */], AddonEvaluateSubmitEvaluatePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreCoursesComponentsModule */], components_module["a" /* CoreCoursesComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, submit_evaluate_module_AddonEvaluateSubmitEvaluatePagePageModule, submit_evaluate_module_AddonEvaluateSubmitEvaluatePagePageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], submit_evaluate_AddonEvaluateSubmitEvaluatePage, [])]); });

//# sourceMappingURL=submit-evaluate.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=144.js.map