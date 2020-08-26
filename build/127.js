webpackJsonp([127],{

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/addon/mod/data/components/components.module.ts + 2 modules
var components_module = __webpack_require__(490);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/addon/mod/data/providers/fields-delegate.ts
var fields_delegate = __webpack_require__(131);

// EXTERNAL MODULE: ./src/addon/mod/data/providers/helper.ts
var helper = __webpack_require__(220);

// EXTERNAL MODULE: ./src/core/tag/providers/tag.ts
var tag = __webpack_require__(167);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.ts
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
 * Page that displays the search modal.
 */
var search_AddonModDataSearchPage = /** @class */ (function () {
    function AddonModDataSearchPage(params, viewCtrl, fb, utils, domUtils, fieldsDelegate, textUtils, dataHelper, tagProvider, eventsProvider, sitesProvider) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.utils = utils;
        this.domUtils = domUtils;
        this.fieldsDelegate = fieldsDelegate;
        this.textUtils = textUtils;
        this.dataHelper = dataHelper;
        this.tagProvider = tagProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.extraImports = [components_module["a" /* AddonModDataComponentsModule */]];
        this.search = params.get('search');
        this.fields = params.get('fields');
        this.data = params.get('data');
        var advanced = {};
        if (typeof this.search.advanced == 'object') {
            Object.keys(this.search.advanced).forEach(function (index) {
                if (typeof _this.search.advanced[index] != 'undefined' && typeof _this.search.advanced[index].name != 'undefined') {
                    advanced[_this.search.advanced[index].name] = _this.search.advanced[index].value ?
                        _this.textUtils.parseJSON(_this.search.advanced[index].value) : '';
                }
                else {
                    advanced[index] = _this.search.advanced[index] ?
                        _this.textUtils.parseJSON(_this.search.advanced[index]) : '';
                }
            });
        }
        else {
            this.search.advanced.forEach(function (field) {
                advanced[field.name] = field.value ? _this.textUtils.parseJSON(field.value) : '';
            });
        }
        this.search.advanced = advanced;
        this.searchForm = fb.group({
            text: [this.search.text],
            sortBy: [this.search.sortBy || '0'],
            sortDirection: [this.search.sortDirection || 'DESC'],
            firstname: [this.search.advanced['firstname'] || ''],
            lastname: [this.search.advanced['lastname'] || '']
        });
        this.fieldsArray = this.utils.objectToArray(this.fields);
        this.advancedSearch = this.renderAdvancedSearchFields();
    }
    /**
     * Displays Advanced Search Fields.
     *
     * @return Generated HTML.
     */
    AddonModDataSearchPage.prototype.renderAdvancedSearchFields = function () {
        this.jsData = {
            fields: this.fields,
            form: this.searchForm,
            search: this.search.advanced
        };
        var template = this.dataHelper.getTemplate(this.data, 'asearchtemplate', this.fieldsArray), replace, render;
        // Replace the fields found on template.
        this.fieldsArray.forEach(function (field) {
            replace = '[[' + field.name + ']]';
            replace = replace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            replace = new RegExp(replace, 'gi');
            // Replace field by a generic directive.
            render = '<addon-mod-data-field-plugin mode="search" [field]="fields[' + field.id +
                ']" [form]="form" [search]="search"></addon-mod-data-field-plugin>';
            template = template.replace(replace, render);
        });
        // Not pluginable other search elements.
        // Replace firstname field by the text input.
        replace = new RegExp('##firstname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="firstname" \
        [placeholder]="\'addon.mod_data.authorfirstname\' | translate" formControlName="firstname"></ion-input></span>';
        template = template.replace(replace, render);
        // Replace lastname field by the text input.
        replace = new RegExp('##lastname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="lastname" \
        [placeholder]="\'addon.mod_data.authorlastname\' | translate" formControlName="lastname"></ion-input></span>';
        template = template.replace(replace, render);
        // Searching by tags is not supported.
        replace = new RegExp('##tags##', 'gi');
        var message = '<p class="item-dimmed">{{ \'addon.mod_data.searchbytagsnotsupported\' | translate }}</p>';
        template = template.replace(replace, this.tagProvider.areTagsAvailableInSite() ? message : '');
        return template;
    };
    /**
     * Retrieve the entered data in search in a form.
     *
     * @param searchedData Array with the entered form values.
     * @return Array with the answers.
     */
    AddonModDataSearchPage.prototype.getSearchDataFromForm = function (searchedData) {
        var _this = this;
        var advancedSearch = [];
        // Filter and translate fields to each field plugin.
        this.fieldsArray.forEach(function (field) {
            var fieldData = _this.fieldsDelegate.getFieldSearchData(field, searchedData);
            if (fieldData) {
                fieldData.forEach(function (data) {
                    data.value = JSON.stringify(data.value);
                    // WS wants values in Json format.
                    advancedSearch.push(data);
                });
            }
        });
        // Not pluginable other search elements.
        if (searchedData['firstname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'firstname',
                value: JSON.stringify(searchedData['firstname'])
            });
        }
        if (searchedData['lastname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'lastname',
                value: JSON.stringify(searchedData['lastname'])
            });
        }
        return advancedSearch;
    };
    /**
     * Close modal.
     *
     * @param data Data to return to the page.
     */
    AddonModDataSearchPage.prototype.closeModal = function (data) {
        if (typeof data == 'undefined') {
            this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        }
        else {
            this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        }
        this.viewCtrl.dismiss(data);
    };
    /**
     * Toggles between advanced to normal search.
     *
     * @param advanced True for advanced, false for basic.
     */
    AddonModDataSearchPage.prototype.changeAdvanced = function (advanced) {
        this.search.searchingAdvanced = advanced;
    };
    /**
     * Done editing.
     *
     * @param e Event.
     */
    AddonModDataSearchPage.prototype.searchEntries = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var searchedData = this.searchForm.value;
        if (this.search.searchingAdvanced) {
            this.search.advanced = this.getSearchDataFromForm(searchedData);
            this.search.searching = this.search.advanced.length > 0;
        }
        else {
            this.search.text = searchedData.text;
            this.search.searching = this.search.text.length > 0;
        }
        this.search.sortBy = searchedData.sortBy;
        this.search.sortDirection = searchedData.sortDirection;
        this.closeModal(this.search);
    };
    __decorate([
        Object(core["_9" /* ViewChild */])('searchFormEl'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], AddonModDataSearchPage.prototype, "formElement", void 0);
    AddonModDataSearchPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-data-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["u" /* NavParams */],
            ionic_angular["H" /* ViewController */],
            esm5_forms["d" /* FormBuilder */],
            utils_utils["b" /* CoreUtilsProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            fields_delegate["a" /* AddonModDataFieldsDelegate */],
            utils_text["b" /* CoreTextUtilsProvider */],
            helper["a" /* AddonModDataHelperProvider */],
            tag["a" /* CoreTagProvider */],
            events["b" /* CoreEventsProvider */],
            sites["b" /* CoreSitesProvider */]])
    ], AddonModDataSearchPage);
    return AddonModDataSearchPage;
}());

//# sourceMappingURL=search.js.map
// EXTERNAL MODULE: ./src/core/compile/components/compile-html/compile-html.module.ts
var compile_html_module = __webpack_require__(488);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.module.ts
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
var search_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var search_module_AddonModDataSearchPageModule = /** @class */ (function () {
    function AddonModDataSearchPageModule() {
    }
    AddonModDataSearchPageModule = search_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                search_AddonModDataSearchPage,
            ],
            imports: [
                directives_module["a" /* CoreDirectivesModule */],
                components_module["a" /* AddonModDataComponentsModule */],
                compile_html_module["a" /* CoreCompileHtmlComponentModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(search_AddonModDataSearchPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModDataSearchPageModule);
    return AddonModDataSearchPageModule;
}());

//# sourceMappingURL=search.module.js.map
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

// EXTERNAL MODULE: ./src/core/block/components/only-title-block/only-title-block.ngfactory.js
var only_title_block_ngfactory = __webpack_require__(1578);

// EXTERNAL MODULE: ./src/core/block/components/pre-rendered-block/pre-rendered-block.ngfactory.js
var pre_rendered_block_ngfactory = __webpack_require__(1579);

// EXTERNAL MODULE: ./src/core/block/components/course-blocks/course-blocks.ngfactory.js
var course_blocks_ngfactory = __webpack_require__(1576);

// EXTERNAL MODULE: ./src/core/course/components/unsupported-module/unsupported-module.ngfactory.js
var unsupported_module_ngfactory = __webpack_require__(1577);

// EXTERNAL MODULE: ./src/core/course/components/tag-area/tag-area.ngfactory.js
var tag_area_ngfactory = __webpack_require__(1580);

// EXTERNAL MODULE: ./src/core/comments/components/comments/comments.ngfactory.js
var comments_ngfactory = __webpack_require__(493);

// EXTERNAL MODULE: ./src/core/tag/components/feed/feed.ngfactory.js
var feed_ngfactory = __webpack_require__(1582);

// EXTERNAL MODULE: ./src/addon/mod/data/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1596);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

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
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-group.js
var radio_group = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.ngfactory.js
var radio_button_ngfactory = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.js
var radio_button = __webpack_require__(160);

// EXTERNAL MODULE: ./src/core/compile/components/compile-html/compile-html.ngfactory.js
var compile_html_ngfactory = __webpack_require__(222);

// EXTERNAL MODULE: ./src/core/compile/components/compile-html/compile-html.ts
var compile_html = __webpack_require__(196);

// EXTERNAL MODULE: ./src/core/compile/providers/compile.ts
var compile = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























































var styles_AddonModDataSearchPage = [];
var RenderType_AddonModDataSearchPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModDataSearchPage, data: {} });

function View_AddonModDataSearchPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModDataSearchPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 5, "optgroup", [], [[8, "label", 0]], null, null, null, null)), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModDataSearchPage_2)), core["_30" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.fieldsArray; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 1).transform("addon.mod_data.fields")), ""); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModDataSearchPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 3, "ion-option", [["value", "-3"]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "-3"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 2, 0, core["_44" /* ɵnov */](_v, 3).transform("addon.mod_data.approved")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModDataSearchPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { formElement: 0 }), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 21, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](10, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](18, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](22, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](28, 0, null, null, 151, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 1, 9, "div", [["class", "fixed-content core-tabs-bar"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](33, 0, null, null, 2, "a", [["class", "tab-slide"]], [[1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeAdvanced(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["_55" /* ɵted */](34, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](37, 0, null, null, 2, "a", [["class", "tab-slide"]], [[1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeAdvanced(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["_55" /* ɵted */](38, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](42, 0, [[1, 0], ["searchFormEl", 1]], 1, 136, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 44).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 44).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.searchEntries($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](43, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](44, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_30" /* ɵdid */](46, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](48, 0, null, null, 118, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](49, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](51, 0, null, null, 13, "ion-item", [["class", "item item-block"]], [[8, "hidden", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](52, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_30" /* ɵdid */](56, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](58, 0, null, 3, 5, "ion-input", [["formControlName", "text"], ["name", "text"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.search.text = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](59, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](61, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](62, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](66, 0, null, null, 51, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](67, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_30" /* ɵdid */](71, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](73, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](74, 16384, [[6, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](75, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](78, 0, null, 3, 38, "ion-select", [["formControlName", "sortBy"], ["interface", "action-sheet"], ["name", "sortBy"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 79)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 79)._keyup() !== false);
        ad = (pd_1 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_30" /* ɵdid */](79, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { placeholder: [0, "placeholder"], interface: [1, "interface"] }, null), core["_52" /* ɵqud */](603979776, 9, { options: 1 }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_30" /* ɵdid */](83, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](85, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModDataSearchPage_1)), core["_30" /* ɵdid */](88, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](90, 0, null, null, 25, "optgroup", [], [[8, "label", 0]], null, null, null, null)), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](93, 0, null, null, 3, "ion-option", [["value", "0"]], null, null, null, null, null)), core["_30" /* ɵdid */](94, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](95, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](98, 0, null, null, 3, "ion-option", [["value", "-4"]], null, null, null, null, null)), core["_30" /* ɵdid */](99, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](100, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](103, 0, null, null, 3, "ion-option", [["value", "-1"]], null, null, null, null, null)), core["_30" /* ɵdid */](104, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](105, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](108, 0, null, null, 3, "ion-option", [["value", "-2"]], null, null, null, null, null)), core["_30" /* ɵdid */](109, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](110, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModDataSearchPage_3)), core["_30" /* ɵdid */](114, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](119, 0, null, null, 40, "ion-list", [["formControlName", "sortDirection"], ["name", "sortDirection"], ["radio-group", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.search.sortDirection = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](120, 1064960, null, 1, radio_group["a" /* RadioGroup */], [core["V" /* Renderer */], core["t" /* ElementRef */], core["j" /* ChangeDetectorRef */]], null, null), core["_52" /* ɵqud */](335544320, 10, { _header: 0 }), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [radio_group["a" /* RadioGroup */]]), core["_30" /* ɵdid */](123, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](125, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](126, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](128, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](129, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_30" /* ɵdid */](133, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](135, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](136, 16384, [[11, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](137, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](140, 0, null, 4, 1, "ion-radio", [["value", "ASC"]], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 141)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_30" /* ɵdid */](141, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](144, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](145, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 16, { _icons: 1 }), core["_30" /* ɵdid */](149, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](151, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](152, 16384, [[14, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](153, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](156, 0, null, 4, 1, "ion-radio", [["value", "DESC"]], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 157)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_30" /* ɵdid */](157, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](161, 0, null, null, 4, "div", [["class", "addon-data-advanced-search"], ["padding", ""]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](163, 0, null, null, 1, "core-compile-html", [], null, null, null, compile_html_ngfactory["b" /* View_CoreCompileHtmlComponent_0 */], compile_html_ngfactory["a" /* RenderType_CoreCompileHtmlComponent */])), core["_30" /* ɵdid */](164, 966656, null, 0, compile_html["a" /* CoreCompileHtmlComponent */], [compile["a" /* CoreCompileProvider */], core["j" /* ChangeDetectorRef */], core["t" /* ElementRef */], [2, nav_controller["a" /* NavController */]], core["F" /* KeyValueDiffers */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */]], { text: [0, "text"], jsData: [1, "jsData"], extraImports: [2, "extraImports"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](168, 0, null, null, 9, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](170, 0, null, null, 6, "button", [["block", ""], ["icon-start", ""], ["ion-button", ""], ["type", "submit"]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](171, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](173, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](174, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](175, 0, ["\n                ", "\n            "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_5 = "close"; _ck(_v, 22, 0, currVal_5); var currVal_19 = _co.searchForm; _ck(_v, 44, 0, currVal_19); var currVal_28 = "text"; var currVal_29 = _co.search.text; _ck(_v, 59, 0, currVal_28, currVal_29); var currVal_30 = "text"; var currVal_31 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 62, 1, core["_44" /* ɵnov */](_v, 63).transform("addon.mod_data.search")), ""); _ck(_v, 62, 0, currVal_30, currVal_31); var currVal_41 = core["_56" /* ɵunv */](_v, 79, 0, core["_44" /* ɵnov */](_v, 81).transform("core.sortby")); var currVal_42 = "action-sheet"; _ck(_v, 79, 0, currVal_41, currVal_42); var currVal_43 = "sortBy"; _ck(_v, 83, 0, currVal_43); var currVal_44 = _co.fieldsArray.length; _ck(_v, 88, 0, currVal_44); var currVal_46 = "0"; _ck(_v, 94, 0, currVal_46); var currVal_48 = "-4"; _ck(_v, 99, 0, currVal_48); var currVal_50 = "-1"; _ck(_v, 104, 0, currVal_50); var currVal_52 = "-2"; _ck(_v, 109, 0, currVal_52); var currVal_54 = _co.data.approval; _ck(_v, 114, 0, currVal_54); var currVal_62 = "sortDirection"; var currVal_63 = _co.search.sortDirection; _ck(_v, 123, 0, currVal_62, currVal_63); var currVal_66 = "ASC"; _ck(_v, 141, 0, currVal_66); var currVal_69 = "DESC"; _ck(_v, 157, 0, currVal_69); var currVal_71 = _co.advancedSearch; var currVal_72 = _co.jsData; var currVal_73 = _co.extraImports; _ck(_v, 164, 0, currVal_71, currVal_72, currVal_73); var currVal_74 = ""; _ck(_v, 171, 0, currVal_74); var currVal_76 = "search"; _ck(_v, 174, 0, currVal_76); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("addon.mod_data.search")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_56" /* ɵunv */](_v, 17, 0, core["_44" /* ɵnov */](_v, 19).transform("core.close")); _ck(_v, 17, 0, currVal_3); var currVal_4 = core["_44" /* ɵnov */](_v, 22)._hidden; _ck(_v, 21, 0, currVal_4); var currVal_6 = core["_44" /* ɵnov */](_v, 29).statusbarPadding; var currVal_7 = core["_44" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_6, currVal_7); var currVal_8 = !_co.search.searchingAdvanced; _ck(_v, 33, 0, currVal_8); var currVal_9 = core["_56" /* ɵunv */](_v, 34, 0, core["_44" /* ɵnov */](_v, 35).transform("addon.mod_data.search")); _ck(_v, 34, 0, currVal_9); var currVal_10 = _co.search.searchingAdvanced; _ck(_v, 37, 0, currVal_10); var currVal_11 = core["_56" /* ɵunv */](_v, 38, 0, core["_44" /* ɵnov */](_v, 39).transform("addon.mod_data.advancedsearch")); _ck(_v, 38, 0, currVal_11); var currVal_12 = core["_44" /* ɵnov */](_v, 46).ngClassUntouched; var currVal_13 = core["_44" /* ɵnov */](_v, 46).ngClassTouched; var currVal_14 = core["_44" /* ɵnov */](_v, 46).ngClassPristine; var currVal_15 = core["_44" /* ɵnov */](_v, 46).ngClassDirty; var currVal_16 = core["_44" /* ɵnov */](_v, 46).ngClassValid; var currVal_17 = core["_44" /* ɵnov */](_v, 46).ngClassInvalid; var currVal_18 = core["_44" /* ɵnov */](_v, 46).ngClassPending; _ck(_v, 42, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_20 = _co.search.searchingAdvanced; _ck(_v, 51, 0, currVal_20); var currVal_21 = core["_44" /* ɵnov */](_v, 61).ngClassUntouched; var currVal_22 = core["_44" /* ɵnov */](_v, 61).ngClassTouched; var currVal_23 = core["_44" /* ɵnov */](_v, 61).ngClassPristine; var currVal_24 = core["_44" /* ɵnov */](_v, 61).ngClassDirty; var currVal_25 = core["_44" /* ɵnov */](_v, 61).ngClassValid; var currVal_26 = core["_44" /* ɵnov */](_v, 61).ngClassInvalid; var currVal_27 = core["_44" /* ɵnov */](_v, 61).ngClassPending; _ck(_v, 58, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_32 = core["_56" /* ɵunv */](_v, 75, 0, core["_44" /* ɵnov */](_v, 76).transform("core.sortby")); _ck(_v, 75, 0, currVal_32); var currVal_33 = core["_44" /* ɵnov */](_v, 79)._disabled; var currVal_34 = core["_44" /* ɵnov */](_v, 85).ngClassUntouched; var currVal_35 = core["_44" /* ɵnov */](_v, 85).ngClassTouched; var currVal_36 = core["_44" /* ɵnov */](_v, 85).ngClassPristine; var currVal_37 = core["_44" /* ɵnov */](_v, 85).ngClassDirty; var currVal_38 = core["_44" /* ɵnov */](_v, 85).ngClassValid; var currVal_39 = core["_44" /* ɵnov */](_v, 85).ngClassInvalid; var currVal_40 = core["_44" /* ɵnov */](_v, 85).ngClassPending; _ck(_v, 78, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_45 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 90, 0, core["_44" /* ɵnov */](_v, 91).transform("addon.mod_data.other")), ""); _ck(_v, 90, 0, currVal_45); var currVal_47 = core["_56" /* ɵunv */](_v, 95, 0, core["_44" /* ɵnov */](_v, 96).transform("addon.mod_data.timeadded")); _ck(_v, 95, 0, currVal_47); var currVal_49 = core["_56" /* ɵunv */](_v, 100, 0, core["_44" /* ɵnov */](_v, 101).transform("addon.mod_data.timemodified")); _ck(_v, 100, 0, currVal_49); var currVal_51 = core["_56" /* ɵunv */](_v, 105, 0, core["_44" /* ɵnov */](_v, 106).transform("addon.mod_data.authorfirstname")); _ck(_v, 105, 0, currVal_51); var currVal_53 = core["_56" /* ɵunv */](_v, 110, 0, core["_44" /* ɵnov */](_v, 111).transform("addon.mod_data.authorlastname")); _ck(_v, 110, 0, currVal_53); var currVal_55 = core["_44" /* ɵnov */](_v, 125).ngClassUntouched; var currVal_56 = core["_44" /* ɵnov */](_v, 125).ngClassTouched; var currVal_57 = core["_44" /* ɵnov */](_v, 125).ngClassPristine; var currVal_58 = core["_44" /* ɵnov */](_v, 125).ngClassDirty; var currVal_59 = core["_44" /* ɵnov */](_v, 125).ngClassValid; var currVal_60 = core["_44" /* ɵnov */](_v, 125).ngClassInvalid; var currVal_61 = core["_44" /* ɵnov */](_v, 125).ngClassPending; _ck(_v, 119, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61); var currVal_64 = core["_56" /* ɵunv */](_v, 137, 0, core["_44" /* ɵnov */](_v, 138).transform("addon.mod_data.ascending")); _ck(_v, 137, 0, currVal_64); var currVal_65 = core["_44" /* ɵnov */](_v, 141)._disabled; _ck(_v, 140, 0, currVal_65); var currVal_67 = core["_56" /* ɵunv */](_v, 153, 0, core["_44" /* ɵnov */](_v, 154).transform("addon.mod_data.descending")); _ck(_v, 153, 0, currVal_67); var currVal_68 = core["_44" /* ɵnov */](_v, 157)._disabled; _ck(_v, 156, 0, currVal_68); var currVal_70 = (!_co.advancedSearch || !_co.search.searchingAdvanced); _ck(_v, 161, 0, currVal_70); var currVal_75 = core["_44" /* ɵnov */](_v, 174)._hidden; _ck(_v, 173, 0, currVal_75); var currVal_77 = core["_56" /* ɵunv */](_v, 175, 0, core["_44" /* ɵnov */](_v, 176).transform("addon.mod_data.search")); _ck(_v, 175, 0, currVal_77); }); }
function View_AddonModDataSearchPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-data-search", [], null, null, null, View_AddonModDataSearchPage_0, RenderType_AddonModDataSearchPage)), core["_30" /* ɵdid */](1, 49152, null, 0, search_AddonModDataSearchPage, [nav_params["a" /* NavParams */], view_controller["a" /* ViewController */], esm5_forms["d" /* FormBuilder */], utils_utils["b" /* CoreUtilsProvider */], dom["b" /* CoreDomUtilsProvider */], fields_delegate["a" /* AddonModDataFieldsDelegate */], utils_text["b" /* CoreTextUtilsProvider */], helper["a" /* AddonModDataHelperProvider */], tag["a" /* CoreTagProvider */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */]], null, null)], null, null); }
var AddonModDataSearchPageNgFactory = core["_27" /* ɵccf */]("page-addon-mod-data-search", search_AddonModDataSearchPage, View_AddonModDataSearchPage_Host_0, {}, {}, []);

//# sourceMappingURL=search.ngfactory.js.map
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

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/core/block/components/components.module.ts
var block_components_components_module = __webpack_require__(277);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(73);

// EXTERNAL MODULE: ./src/core/comments/components/components.module.ts
var comments_components_components_module = __webpack_require__(385);

// EXTERNAL MODULE: ./src/core/tag/components/components.module.ts
var tag_components_components_module = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(276);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataSearchPageModuleNgFactory", function() { return AddonModDataSearchPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














































var AddonModDataSearchPageModuleNgFactory = core["_28" /* ɵcmf */](search_module_AddonModDataSearchPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], only_title_block_ngfactory["a" /* CoreBlockOnlyTitleComponentNgFactory */], pre_rendered_block_ngfactory["a" /* CoreBlockPreRenderedComponentNgFactory */], course_blocks_ngfactory["a" /* CoreBlockCourseBlocksComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], tag_area_ngfactory["a" /* CoreCourseTagAreaComponentNgFactory */], comments_ngfactory["a" /* CoreCommentsCommentsComponentNgFactory */], feed_ngfactory["a" /* CoreTagFeedComponentNgFactory */], index_ngfactory["a" /* AddonModDataIndexComponentNgFactory */], AddonModDataSearchPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, block_components_components_module["a" /* CoreBlockComponentsModule */], block_components_components_module["a" /* CoreBlockComponentsModule */], []), core["_41" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_41" /* ɵmpd */](512, compile_html_module["a" /* CoreCompileHtmlComponentModule */], compile_html_module["a" /* CoreCompileHtmlComponentModule */], []), core["_41" /* ɵmpd */](512, comments_components_components_module["a" /* CoreCommentsComponentsModule */], comments_components_components_module["a" /* CoreCommentsComponentsModule */], []), core["_41" /* ɵmpd */](512, tag_components_components_module["a" /* CoreTagComponentsModule */], tag_components_components_module["a" /* CoreTagComponentsModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* AddonModDataComponentsModule */], components_module["a" /* AddonModDataComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, search_module_AddonModDataSearchPageModule, search_module_AddonModDataSearchPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], search_AddonModDataSearchPage, [])]); });

//# sourceMappingURL=search.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=127.js.map