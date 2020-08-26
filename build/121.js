webpackJsonp([121],{

/***/ 2058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/components.module.ts
var components_components_module = __webpack_require__(758);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(75);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/addon/mod/forum/providers/forum.ts
var forum = __webpack_require__(140);

// EXTERNAL MODULE: ./src/addon/mod/forum/providers/helper.ts
var helper = __webpack_require__(287);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/edit-post/edit-post.ts
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
 * Page that displays a form to edit discussion post.
 */
var edit_post_AddonModForumEditPostPage = /** @class */ (function () {
    function AddonModForumEditPostPage(params, forumProvider, viewCtrl, domUtils, uploaderProvider, forumHelper, translate, sitesProvider) {
        this.forumProvider = forumProvider;
        this.viewCtrl = viewCtrl;
        this.domUtils = domUtils;
        this.uploaderProvider = uploaderProvider;
        this.forumHelper = forumHelper;
        this.translate = translate;
        this.sitesProvider = sitesProvider;
        this.messageControl = new esm5_forms["e" /* FormControl */]();
        this.advanced = false; // Display all form fields.
        this.replyData = {};
        this.originalData = {}; // Object with the original post data. Usually shared between posts.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        var post = params.get('post');
        this.component = params.get('component');
        this.componentId = params.get('componentId');
        this.forum = params.get('forum');
        this.replyData.id = post.id;
        this.replyData.subject = post.subject;
        this.replyData.message = post.message;
        this.replyData.files = post.attachments || [];
        // Delete the local files from the tmp folder if any.
        this.uploaderProvider.clearTmpFiles(this.replyData.files);
        // Update rich text editor.
        this.messageControl.setValue(this.replyData.message);
        // Update original data.
        this.originalData.subject = this.replyData.subject;
        this.originalData.message = this.replyData.message;
        this.originalData.files = this.replyData.files.slice();
        // Show advanced fields if any of them has not the default value.
        this.advanced = this.replyData.files.length > 0;
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModForumEditPostPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.forceLeave) {
            return true;
        }
        var promise;
        if (this.forumHelper.hasPostDataChanged(this.replyData, this.originalData)) {
            // Show confirmation if some data has been modified.
            promise = this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'));
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            // Delete the local files from the tmp folder.
            _this.uploaderProvider.clearTmpFiles(_this.replyData.files);
        });
    };
    /**
     * Message changed.
     *
     * @param text The new text.
     */
    AddonModForumEditPostPage.prototype.onMessageChange = function (text) {
        this.replyData.message = text;
    };
    /**
     * Close modal.
     *
     * @param data Data to return to the page.
     */
    AddonModForumEditPostPage.prototype.closeModal = function (data) {
        if (data) {
            this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        }
        else {
            this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        }
        this.viewCtrl.dismiss(data);
    };
    /**
     * Reply to this post.
     *
     * @param e Click event.
     */
    AddonModForumEditPostPage.prototype.reply = function (e) {
        e.preventDefault();
        e.stopPropagation();
        // Close the modal, sending the input data.
        this.forceLeave = true;
        this.closeModal(this.replyData);
    };
    /**
     * Show or hide advanced form fields.
     */
    AddonModForumEditPostPage.prototype.toggleAdvanced = function () {
        this.advanced = !this.advanced;
    };
    __decorate([
        Object(core["_9" /* ViewChild */])('editFormEl'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], AddonModForumEditPostPage.prototype, "formElement", void 0);
    AddonModForumEditPostPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'addon-mod-forum-edit-post',
            templateUrl: 'addon-mod-forum-edit-post.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["u" /* NavParams */],
            forum["a" /* AddonModForumProvider */],
            ionic_angular["H" /* ViewController */],
            dom["b" /* CoreDomUtilsProvider */],
            fileuploader["a" /* CoreFileUploaderProvider */],
            helper["a" /* AddonModForumHelperProvider */],
            _ngx_translate_core["c" /* TranslateService */],
            sites["b" /* CoreSitesProvider */]])
    ], AddonModForumEditPostPage);
    return AddonModForumEditPostPage;
}());

//# sourceMappingURL=edit-post.js.map
// EXTERNAL MODULE: ./src/core/editor/components/components.module.ts
var editor_components_components_module = __webpack_require__(202);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/edit-post/edit-post.module.ts
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
var edit_post_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var edit_post_module_AddonModForumEditPostPageModule = /** @class */ (function () {
    function AddonModForumEditPostPageModule() {
    }
    AddonModForumEditPostPageModule = edit_post_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                edit_post_AddonModForumEditPostPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                components_components_module["a" /* AddonModForumComponentsModule */],
                editor_components_components_module["a" /* CoreEditorComponentsModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(edit_post_AddonModForumEditPostPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModForumEditPostPageModule);
    return AddonModForumEditPostPageModule;
}());

//# sourceMappingURL=edit-post.module.js.map
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

// EXTERNAL MODULE: ./src/core/tag/components/feed/feed.ngfactory.js
var feed_ngfactory = __webpack_require__(1582);

// EXTERNAL MODULE: ./src/core/editor/components/rich-text-editor/rich-text-editor.ngfactory.js
var rich_text_editor_ngfactory = __webpack_require__(279);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1609);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/discussion-options-menu/discussion-options-menu.ngfactory.js
var discussion_options_menu_ngfactory = __webpack_require__(1617);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/post-options-menu/post-options-menu.ngfactory.js
var post_options_menu_ngfactory = __webpack_require__(1618);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ngfactory.js
var attachments_ngfactory = __webpack_require__(494);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ts
var attachments = __webpack_require__(326);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/helper.ts
var providers_helper = __webpack_require__(154);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(92);

// EXTERNAL MODULE: ./src/core/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__(253);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(22);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/editor/providers/editor-offline.ts
var editor_offline = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/edit-post/edit-post.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























































var styles_AddonModForumEditPostPage = [];
var RenderType_AddonModForumEditPostPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModForumEditPostPage, data: {} });

function View_AddonModForumEditPostPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["item-start", ""], ["name", "fa-caret-right"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](1, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "fa-caret-right"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonModForumEditPostPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["item-start", ""], ["name", "fa-caret-down"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](1, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "fa-caret-down"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonModForumEditPostPage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "core-attachments", [], null, null, null, attachments_ngfactory["b" /* View_CoreAttachmentsComponent_0 */], attachments_ngfactory["a" /* RenderType_CoreAttachmentsComponent */])), core["_30" /* ɵdid */](1, 114688, null, 0, attachments["a" /* CoreAttachmentsComponent */], [app["b" /* CoreAppProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], fileuploader["a" /* CoreFileUploaderProvider */], translate_service["a" /* TranslateService */], providers_helper["a" /* CoreFileUploaderHelperProvider */]], { files: [0, "files"], maxSize: [1, "maxSize"], maxSubmissions: [2, "maxSubmissions"], component: [3, "component"], componentId: [4, "componentId"], allowOffline: [5, "allowOffline"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.replyData.files; var currVal_1 = _co.forum.maxbytes; var currVal_2 = _co.forum.maxattachments; var currVal_3 = _co.component; var currVal_4 = _co.forum.cmid; var currVal_5 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_AddonModForumEditPostPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumEditPostPage_4)), core["_30" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.forum.id && (_co.forum.maxattachments > 0)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_AddonModForumEditPostPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { formElement: 0 }), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 21, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](10, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](18, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](22, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](28, 0, null, null, 91, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](31, 0, [[1, 0], ["editFormEl", 1]], 1, 87, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 33).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 33).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](32, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](33, 4210688, null, 0, esm5_forms["p" /* NgForm */], [[8, null], [8, null]], null, null), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["p" /* NgForm */]]), core["_30" /* ɵdid */](35, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](37, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](38, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_30" /* ɵdid */](42, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](44, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](45, 16384, [[3, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](46, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, 3, 5, "ion-input", [["name", "subject"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.replyData.subject = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](50, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ɵdid */](52, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](53, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](57, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](58, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_30" /* ɵdid */](62, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](64, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](65, 16384, [[6, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](66, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](69, 0, null, 3, 3, "core-rich-text-editor", [["contextLevel", "module"], ["elementId", "message"], ["item-content", ""]], null, [[null, "contentChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("contentChanged" === en)) {
        var pd_0 = (_co.onMessageChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, rich_text_editor_ngfactory["c" /* View_CoreEditorRichTextEditorComponent_0 */], rich_text_editor_ngfactory["b" /* RenderType_CoreEditorRichTextEditorComponent */])), core["_30" /* ɵdid */](70, 1228800, null, 0, rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], [dom["b" /* CoreDomUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], sites["b" /* CoreSitesProvider */], filepool["b" /* CoreFilepoolProvider */], [2, content["a" /* Content */]], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */], platform["a" /* Platform */], editor_offline["a" /* CoreEditorOfflineProvider */]], { placeholder: [0, "placeholder"], control: [1, "control"], name: [2, "name"], component: [3, "component"], componentId: [4, "componentId"], autoSave: [5, "autoSave"], contextLevel: [6, "contextLevel"], contextInstanceId: [7, "contextInstanceId"], elementId: [8, "elementId"], draftExtraParams: [9, "draftExtraParams"] }, { contentChanged: "contentChanged" }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_48" /* ɵpod */](72, { edit: 0 }), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](75, 0, null, null, 13, "ion-item-divider", [["class", "core-expandable item item-divider"], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleAdvanced() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](76, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_30" /* ɵdid */](80, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumEditPostPage_1)), core["_30" /* ɵdid */](83, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumEditPostPage_2)), core["_30" /* ɵdid */](86, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](87, 2, ["\n            ", "\n        "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumEditPostPage_3)), core["_30" /* ɵdid */](91, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](93, 0, null, null, 24, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_30" /* ɵdid */](94, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](96, 0, null, null, 20, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_30" /* ɵdid */](97, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](99, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_30" /* ɵdid */](100, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](102, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reply($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](103, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](104, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](108, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_30" /* ɵdid */](109, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](111, 0, null, null, 3, "button", [["block", ""], ["color", "light"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](112, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_55" /* ɵted */](113, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_5 = "close"; _ck(_v, 22, 0, currVal_5); var currVal_23 = "subject"; var currVal_24 = _co.replyData.subject; _ck(_v, 50, 0, currVal_23, currVal_24); var currVal_25 = "text"; var currVal_26 = core["_56" /* ɵunv */](_v, 53, 1, core["_44" /* ɵnov */](_v, 54).transform("addon.mod_forum.subject")); _ck(_v, 53, 0, currVal_25, currVal_26); var currVal_28 = core["_56" /* ɵunv */](_v, 70, 0, core["_44" /* ɵnov */](_v, 71).transform("addon.mod_forum.replyplaceholder")); var currVal_29 = _co.messageControl; var currVal_30 = ("mod_forum_reply_" + _co.replyData.id); var currVal_31 = _co.component; var currVal_32 = _co.componentId; var currVal_33 = true; var currVal_34 = "module"; var currVal_35 = _co.forum.cmid; var currVal_36 = "message"; var currVal_37 = _ck(_v, 72, 0, _co.replyData.id); _ck(_v, 70, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_38 = !_co.advanced; _ck(_v, 83, 0, currVal_38); var currVal_39 = _co.advanced; _ck(_v, 86, 0, currVal_39); var currVal_41 = _co.advanced; _ck(_v, 91, 0, currVal_41); var currVal_43 = ""; _ck(_v, 103, 0, currVal_43); var currVal_45 = "light"; var currVal_46 = ""; _ck(_v, 112, 0, currVal_45, currVal_46); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("addon.mod_forum.yourreply")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_56" /* ɵunv */](_v, 17, 0, core["_44" /* ɵnov */](_v, 19).transform("core.close")); _ck(_v, 17, 0, currVal_3); var currVal_4 = core["_44" /* ɵnov */](_v, 22)._hidden; _ck(_v, 21, 0, currVal_4); var currVal_6 = core["_44" /* ɵnov */](_v, 29).statusbarPadding; var currVal_7 = core["_44" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_6, currVal_7); var currVal_8 = core["_44" /* ɵnov */](_v, 35).ngClassUntouched; var currVal_9 = core["_44" /* ɵnov */](_v, 35).ngClassTouched; var currVal_10 = core["_44" /* ɵnov */](_v, 35).ngClassPristine; var currVal_11 = core["_44" /* ɵnov */](_v, 35).ngClassDirty; var currVal_12 = core["_44" /* ɵnov */](_v, 35).ngClassValid; var currVal_13 = core["_44" /* ɵnov */](_v, 35).ngClassInvalid; var currVal_14 = core["_44" /* ɵnov */](_v, 35).ngClassPending; _ck(_v, 31, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = core["_56" /* ɵunv */](_v, 46, 0, core["_44" /* ɵnov */](_v, 47).transform("addon.mod_forum.subject")); _ck(_v, 46, 0, currVal_15); var currVal_16 = core["_44" /* ɵnov */](_v, 52).ngClassUntouched; var currVal_17 = core["_44" /* ɵnov */](_v, 52).ngClassTouched; var currVal_18 = core["_44" /* ɵnov */](_v, 52).ngClassPristine; var currVal_19 = core["_44" /* ɵnov */](_v, 52).ngClassDirty; var currVal_20 = core["_44" /* ɵnov */](_v, 52).ngClassValid; var currVal_21 = core["_44" /* ɵnov */](_v, 52).ngClassInvalid; var currVal_22 = core["_44" /* ɵnov */](_v, 52).ngClassPending; _ck(_v, 49, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_27 = core["_56" /* ɵunv */](_v, 66, 0, core["_44" /* ɵnov */](_v, 67).transform("addon.mod_forum.message")); _ck(_v, 66, 0, currVal_27); var currVal_40 = core["_56" /* ɵunv */](_v, 87, 0, core["_44" /* ɵnov */](_v, 88).transform("addon.mod_forum.advanced")); _ck(_v, 87, 0, currVal_40); var currVal_42 = ((_co.replyData.subject == "") || (_co.replyData.message == null)); _ck(_v, 102, 0, currVal_42); var currVal_44 = core["_56" /* ɵunv */](_v, 104, 0, core["_44" /* ɵnov */](_v, 105).transform("core.savechanges")); _ck(_v, 104, 0, currVal_44); var currVal_47 = core["_56" /* ɵunv */](_v, 113, 0, core["_44" /* ɵnov */](_v, 114).transform("core.cancel")); _ck(_v, 113, 0, currVal_47); }); }
function View_AddonModForumEditPostPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "addon-mod-forum-edit-post", [], null, null, null, View_AddonModForumEditPostPage_0, RenderType_AddonModForumEditPostPage)), core["_30" /* ɵdid */](1, 49152, null, 0, edit_post_AddonModForumEditPostPage, [nav_params["a" /* NavParams */], forum["a" /* AddonModForumProvider */], view_controller["a" /* ViewController */], dom["b" /* CoreDomUtilsProvider */], fileuploader["a" /* CoreFileUploaderProvider */], helper["a" /* AddonModForumHelperProvider */], translate_service["a" /* TranslateService */], sites["b" /* CoreSitesProvider */]], null, null)], null, null); }
var AddonModForumEditPostPageNgFactory = core["_27" /* ɵccf */]("addon-mod-forum-edit-post", edit_post_AddonModForumEditPostPage, View_AddonModForumEditPostPage_Host_0, {}, {}, []);

//# sourceMappingURL=edit-post.ngfactory.js.map
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

// EXTERNAL MODULE: ./src/core/block/components/components.module.ts
var block_components_components_module = __webpack_require__(277);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(73);

// EXTERNAL MODULE: ./src/core/rating/components/components.module.ts
var rating_components_components_module = __webpack_require__(754);

// EXTERNAL MODULE: ./src/core/tag/components/components.module.ts
var tag_components_components_module = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(276);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/edit-post/edit-post.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumEditPostPageModuleNgFactory", function() { return AddonModForumEditPostPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















































var AddonModForumEditPostPageModuleNgFactory = core["_28" /* ɵcmf */](edit_post_module_AddonModForumEditPostPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], only_title_block_ngfactory["a" /* CoreBlockOnlyTitleComponentNgFactory */], pre_rendered_block_ngfactory["a" /* CoreBlockPreRenderedComponentNgFactory */], course_blocks_ngfactory["a" /* CoreBlockCourseBlocksComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], tag_area_ngfactory["a" /* CoreCourseTagAreaComponentNgFactory */], feed_ngfactory["a" /* CoreTagFeedComponentNgFactory */], rich_text_editor_ngfactory["a" /* CoreEditorRichTextEditorComponentNgFactory */], index_ngfactory["a" /* AddonModForumIndexComponentNgFactory */], discussion_options_menu_ngfactory["a" /* AddonForumDiscussionOptionsMenuComponentNgFactory */], post_options_menu_ngfactory["a" /* AddonForumPostOptionsMenuComponentNgFactory */], AddonModForumEditPostPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, block_components_components_module["a" /* CoreBlockComponentsModule */], block_components_components_module["a" /* CoreBlockComponentsModule */], []), core["_41" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_41" /* ɵmpd */](512, rating_components_components_module["a" /* CoreRatingComponentsModule */], rating_components_components_module["a" /* CoreRatingComponentsModule */], []), core["_41" /* ɵmpd */](512, tag_components_components_module["a" /* CoreTagComponentsModule */], tag_components_components_module["a" /* CoreTagComponentsModule */], []), core["_41" /* ɵmpd */](512, editor_components_components_module["a" /* CoreEditorComponentsModule */], editor_components_components_module["a" /* CoreEditorComponentsModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* AddonModForumComponentsModule */], components_components_module["a" /* AddonModForumComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, edit_post_module_AddonModForumEditPostPageModule, edit_post_module_AddonModForumEditPostPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], edit_post_AddonModForumEditPostPage, [])]); });

//# sourceMappingURL=edit-post.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=121.js.map