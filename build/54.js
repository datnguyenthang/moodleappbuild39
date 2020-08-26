webpackJsonp([54],{

/***/ 2114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(41);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/mainmenu/providers/delegate.ts
var delegate = __webpack_require__(130);

// EXTERNAL MODULE: ./src/core/mainmenu/providers/mainmenu.ts
var mainmenu = __webpack_require__(495);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(105);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(15);

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.ts
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
 * Page that displays the list of main menu options that aren't in the tabs.
 */
var more_CoreMainMenuMorePage = /** @class */ (function () {
    function CoreMainMenuMorePage(menuDelegate, sitesProvider, navCtrl, mainMenuProvider, eventsProvider, loginHelper, utils, linkHelper, textUtils, urlSchemesProvider, translate) {
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.mainMenuProvider = mainMenuProvider;
        this.loginHelper = loginHelper;
        this.utils = utils;
        this.linkHelper = linkHelper;
        this.textUtils = textUtils;
        this.urlSchemesProvider = urlSchemesProvider;
        this.translate = translate;
        this.langObserver = eventsProvider.on(events["b" /* CoreEventsProvider */].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
        this.updateSiteObserver = eventsProvider.on(events["b" /* CoreEventsProvider */].SITE_UPDATED, this.loadSiteInfo.bind(this), sitesProvider.getCurrentSiteId());
        this.loadSiteInfo();
        this.showScanQR = this.utils.canScanQR() &&
            !this.sitesProvider.getCurrentSite().isFeatureDisabled('CoreMainMenuDelegate_QrReader');
    }
    /**
     * View loaded.
     */
    CoreMainMenuMorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            _this.allHandlers = handlers;
            _this.initHandlers();
        });
        window.addEventListener('resize', this.initHandlers.bind(this));
    };
    /**
     * Page destroyed.
     */
    CoreMainMenuMorePage.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.initHandlers.bind(this));
        this.langObserver && this.langObserver.off();
        this.updateSiteObserver && this.updateSiteObserver.off();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Init handlers on change (size or handlers).
     */
    CoreMainMenuMorePage.prototype.initHandlers = function () {
        if (this.allHandlers) {
            // Calculate the main handlers not to display them in this view.
            var mainHandlers_1 = this.allHandlers.filter(function (handler) {
                return !handler.onlyInMore;
            }).slice(0, this.mainMenuProvider.getNumItems());
            // Get only the handlers that don't appear in the main view.
            this.handlers = this.allHandlers.filter(function (handler) {
                return mainHandlers_1.indexOf(handler) == -1;
            });
            this.handlersLoaded = this.menuDelegate.areHandlersLoaded();
        }
    };
    /**
     * Load the site info required by the view.
     */
    CoreMainMenuMorePage.prototype.loadSiteInfo = function () {
        var _this = this;
        var currentSite = this.sitesProvider.getCurrentSite();
        this.siteInfo = currentSite.getInfo();
        this.siteName = currentSite.getSiteName();
        this.siteUrl = currentSite.getURL();
        this.logoutLabel = this.loginHelper.getLogoutLabel(currentSite);
        this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
        this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
        currentSite.getDocsUrl().then(function (docsUrl) {
            _this.docsUrl = docsUrl;
        });
        this.mainMenuProvider.getCustomMenuItems().then(function (items) {
            _this.customItems = items;
        });
    };
    /**
     * Open a handler.
     *
     * @param handler Handler to open.
     */
    CoreMainMenuMorePage.prototype.openHandler = function (handler) {
        this.navCtrl.push(handler.page, handler.pageParams);
    };
    /**
     * Open an embedded custom item.
     *
     * @param item Item to open.
     */
    CoreMainMenuMorePage.prototype.openItem = function (item) {
        this.navCtrl.push('CoreViewerIframePage', { title: item.label, url: item.url });
    };
    /**
     * Open app settings page.
     */
    CoreMainMenuMorePage.prototype.openAppSettings = function () {
        this.navCtrl.push('CoreAppSettingsPage');
    };
    /**
     * Open site settings page.
     */
    CoreMainMenuMorePage.prototype.openSitePreferences = function () {
        this.navCtrl.push('CoreSitePreferencesPage');
    };
    /**
     * Scan and treat a QR code.
     */
    CoreMainMenuMorePage.prototype.scanQR = function () {
        var _this = this;
        // Scan for a QR code.
        this.utils.scanQR().then(function (text) {
            if (text) {
                if (_this.urlSchemesProvider.isCustomURL(text)) {
                    // Is a custom URL scheme, handle it.
                    _this.urlSchemesProvider.handleCustomURL(text).catch(function (error) {
                        _this.urlSchemesProvider.treatHandleCustomURLError(error);
                    });
                }
                else if (/^[^:]{2,}:\/\/[^ ]+$/i.test(text)) {
                    // Check if the app can handle the URL.
                    _this.linkHelper.handleLink(text, undefined, _this.navCtrl, true, true).then(function (treated) {
                        if (!treated) {
                            // Can't handle it, open it in browser.
                            _this.sitesProvider.getCurrentSite().openInBrowserWithAutoLoginIfSameSite(text);
                        }
                    });
                }
                else {
                    // It's not a URL, open it in a modal so the user can see it and copy it.
                    _this.textUtils.viewText(_this.translate.instant('core.qrscanner'), text, {
                        displayCopyButton: true,
                    });
                }
            }
        });
    };
    /**
     * Logout the user.
     */
    CoreMainMenuMorePage.prototype.logout = function () {
        this.sitesProvider.logout();
    };
    CoreMainMenuMorePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-mainmenu-more',
            templateUrl: 'more.html',
        }),
        __metadata("design:paramtypes", [delegate["a" /* CoreMainMenuDelegate */],
            sites["b" /* CoreSitesProvider */],
            ionic_angular["t" /* NavController */],
            mainmenu["a" /* CoreMainMenuProvider */],
            events["b" /* CoreEventsProvider */],
            helper["a" /* CoreLoginHelperProvider */],
            utils_utils["b" /* CoreUtilsProvider */],
            providers_helper["b" /* CoreContentLinksHelperProvider */],
            utils_text["b" /* CoreTextUtilsProvider */],
            urlschemes["b" /* CoreCustomURLSchemesProvider */],
            _ngx_translate_core["c" /* TranslateService */]])
    ], CoreMainMenuMorePage);
    return CoreMainMenuMorePage;
}());

//# sourceMappingURL=more.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.module.ts
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
var more_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var more_module_CoreMainMenuPageModule = /** @class */ (function () {
    function CoreMainMenuPageModule() {
    }
    CoreMainMenuPageModule = more_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                more_CoreMainMenuMorePage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(more_CoreMainMenuMorePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreMainMenuPageModule);
    return CoreMainMenuPageModule;
}());

//# sourceMappingURL=more.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(114);

// EXTERNAL MODULE: ./src/directives/link.ts
var directives_link = __webpack_require__(177);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(47);

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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(44);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var providers_delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./src/directives/user-link.ts
var user_link = __webpack_require__(489);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(217);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/note/note.js
var note = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























































var styles_CoreMainMenuMorePage = [];
var RenderType_CoreMainMenuMorePage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreMainMenuMorePage, data: {} });

function View_CoreMainMenuMorePage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-center", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 2, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ɵdid */](8, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 8)._paused; _ck(_v, 7, 0, currVal_0); }); }
function View_CoreMainMenuMorePage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 13, "a", [["class", "item item-block"], ["core-link", ""], ["ion-item", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], sites["b" /* CoreSitesProvider */], url["b" /* CoreUrlUtilsProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["b" /* CoreTextUtilsProvider */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { capture: [0, "capture"], inApp: [1, "inApp"] }, null), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 0, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](9, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](12, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_2 = (_v.parent.context.$implicit.type == "app"); var currVal_3 = (_v.parent.context.$implicit.type == "inappbrowser"); _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _v.parent.context.$implicit.icon; _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.url; var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", _v.parent.context.$implicit.label, ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _v.parent.context.$implicit.label; _ck(_v, 12, 0, currVal_5); }); }
function View_CoreMainMenuMorePage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 12, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openItem(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](8, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](11, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.icon; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_34" /* ɵinlineInterpolate */](1, "", _v.parent.context.$implicit.label, ""); _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.parent.context.$implicit.label; _ck(_v, 11, 0, currVal_2); }); }
function View_CoreMainMenuMorePage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 7, "div", [["class", "core-moremenu-customitem"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_3)), core["_30" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_4)), core["_30" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.type != "embedded"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit.type == "embedded"); _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreMainMenuMorePage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 13, "a", [["class", "item item-block"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scanQR() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 1, "core-icon", [["aria-hidden", "true"], ["item-start", ""], ["name", "fa-qrcode"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](8, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](11, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_0 = "fa-qrcode"; _ck(_v, 8, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 11, 0, core["_44" /* ɵnov */](_v, 12).transform("core.scanqr")); _ck(_v, 11, 0, currVal_1); }); }
function View_CoreMainMenuMorePage_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 15, "a", [["autoLogin", "yes"], ["class", "item item-block"], ["core-link", ""], ["ion-item", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], sites["b" /* CoreSitesProvider */], url["b" /* CoreUrlUtilsProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["b" /* CoreTextUtilsProvider */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { autoLogin: [0, "autoLogin"] }, null), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 21, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["aria-hidden", "true"], ["item-start", ""], ["name", "globe"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](10, 147456, [[21, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_2 = "yes"; _ck(_v, 1, 0, currVal_2); var currVal_4 = "globe"; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteInfo.siteurl; var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 0, 1, core["_44" /* ɵnov */](_v, 7).transform("core.mainmenu.website")), ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_44" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_3); var currVal_5 = core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 14).transform("core.mainmenu.website")); _ck(_v, 13, 0, currVal_5); }); }
function View_CoreMainMenuMorePage_7(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 15, "a", [["autoLogin", "no"], ["class", "item item-block"], ["core-link", ""], ["ion-item", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], sites["b" /* CoreSitesProvider */], url["b" /* CoreUrlUtilsProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["b" /* CoreTextUtilsProvider */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { autoLogin: [0, "autoLogin"] }, null), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 24, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["aria-hidden", "true"], ["item-start", ""], ["name", "help-buoy"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](10, 147456, [[24, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_2 = "no"; _ck(_v, 1, 0, currVal_2); var currVal_4 = "help-buoy"; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.docsUrl; var currVal_1 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 0, 1, core["_44" /* ɵnov */](_v, 7).transform("core.mainmenu.help")), ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_44" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_3); var currVal_5 = core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 14).transform("core.mainmenu.help")); _ck(_v, 13, 0, currVal_5); }); }
function View_CoreMainMenuMorePage_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_31" /* ɵeld */](9, 16777216, null, 0, 1, "core-format-text", [["contextLevel", "system"]], null, null, null, null, null)), core["_30" /* ɵdid */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_app["b" /* CoreAppProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], providers_delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"] }, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](14, 0, null, null, 109, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](15, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, 1, 105, "ion-list", [], null, null, null, null, null)), core["_30" /* ɵdid */](18, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](20, 0, null, null, 23, "a", [["class", "item item-block"], ["core-user-link", ""], ["ion-item", ""], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](21, 81920, null, 0, user_link["a" /* CoreUserLinkDirective */], [core["t" /* ElementRef */], [2, nav_controller["a" /* NavController */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { userId: [0, "userId"] }, null), core["_30" /* ɵdid */](22, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_30" /* ɵdid */](26, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](28, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ɵdid */](29, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["b" /* CoreSitesProvider */], utils_utils["b" /* CoreUtilsProvider */], providers_app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"] }, null), core["_30" /* ɵdid */](30, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](32, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](33, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](35, 0, null, 2, 3, "ion-note", [["class", "core-note-block"]], null, null, null, null, null)), core["_30" /* ɵdid */](36, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_31" /* ɵeld */](37, 16777216, null, null, 1, "core-format-text", [["contextLevel", "system"]], null, null, null, null, null)), core["_30" /* ɵdid */](38, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_app["b" /* CoreAppProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], providers_delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], wsNotFiltered: [3, "wsNotFiltered"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](40, 0, null, 2, 2, "ion-note", [["class", "core-note-block"]], null, null, null, null, null)), core["_30" /* ɵdid */](41, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](42, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](45, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](46, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](50, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_1)), core["_30" /* ɵdid */](53, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_2)), core["_30" /* ɵdid */](57, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_5)), core["_30" /* ɵdid */](60, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_6)), core["_30" /* ɵdid */](63, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_7)), core["_30" /* ɵdid */](66, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](68, 0, null, null, 14, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSitePreferences() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](69, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 27, { _icons: 1 }), core["_30" /* ɵdid */](73, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](76, 0, null, 0, 1, "core-icon", [["item-start", ""], ["name", "fa-wrench"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](77, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](79, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](80, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](84, 0, null, null, 14, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](85, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 30, { _icons: 1 }), core["_30" /* ɵdid */](89, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](92, 0, null, 0, 1, "ion-icon", [["aria-hidden", "true"], ["item-start", ""], ["name", "log-out"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](93, 147456, [[30, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](95, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](96, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](100, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](101, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 31, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 32, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 33, { _icons: 1 }), core["_30" /* ɵdid */](105, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](107, 0, null, null, 14, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppSettings() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](108, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 34, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 35, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 36, { _icons: 1 }), core["_30" /* ɵdid */](112, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](115, 0, null, 0, 1, "core-icon", [["item-start", ""], ["name", "fa-cogs"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](116, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](118, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](119, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_2 = _co.siteName; var currVal_3 = "system"; var currVal_4 = 0; _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = _co.siteInfo.userid; _ck(_v, 21, 0, currVal_7); var currVal_8 = _co.siteInfo; _ck(_v, 29, 0, currVal_8); var currVal_10 = _co.siteName; var currVal_11 = "system"; var currVal_12 = 0; var currVal_13 = true; _ck(_v, 38, 0, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_15 = ((!_co.handlers || !_co.handlers.length) && !_co.handlersLoaded); _ck(_v, 53, 0, currVal_15); var currVal_16 = _co.customItems; _ck(_v, 57, 0, currVal_16); var currVal_17 = _co.showScanQR; _ck(_v, 60, 0, currVal_17); var currVal_18 = _co.showWeb; _ck(_v, 63, 0, currVal_18); var currVal_19 = _co.showHelp; _ck(_v, 66, 0, currVal_19); var currVal_21 = "fa-wrench"; _ck(_v, 77, 0, currVal_21); var currVal_25 = "log-out"; _ck(_v, 93, 0, currVal_25); var currVal_28 = "fa-cogs"; _ck(_v, 116, 0, currVal_28); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_5 = core["_44" /* ɵnov */](_v, 15).statusbarPadding; var currVal_6 = core["_44" /* ɵnov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_9 = _co.siteInfo.fullname; _ck(_v, 33, 0, currVal_9); var currVal_14 = _co.siteUrl; _ck(_v, 42, 0, currVal_14); var currVal_20 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 68, 0, core["_44" /* ɵnov */](_v, 74).transform("core.settings.preferences")), ""); _ck(_v, 68, 0, currVal_20); var currVal_22 = core["_56" /* ɵunv */](_v, 80, 0, core["_44" /* ɵnov */](_v, 81).transform("core.settings.preferences")); _ck(_v, 80, 0, currVal_22); var currVal_23 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 84, 0, core["_44" /* ɵnov */](_v, 90).transform(_co.logoutLabel)), ""); _ck(_v, 84, 0, currVal_23); var currVal_24 = core["_44" /* ɵnov */](_v, 93)._hidden; _ck(_v, 92, 0, currVal_24); var currVal_26 = core["_56" /* ɵunv */](_v, 96, 0, core["_44" /* ɵnov */](_v, 97).transform(_co.logoutLabel)); _ck(_v, 96, 0, currVal_26); var currVal_27 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 107, 0, core["_44" /* ɵnov */](_v, 113).transform("core.settings.appsettings")), ""); _ck(_v, 107, 0, currVal_27); var currVal_29 = core["_56" /* ɵunv */](_v, 119, 0, core["_44" /* ɵnov */](_v, 120).transform("core.settings.appsettings")); _ck(_v, 119, 0, currVal_29); }); }
function View_CoreMainMenuMorePage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-core-mainmenu-more", [], null, null, null, View_CoreMainMenuMorePage_0, RenderType_CoreMainMenuMorePage)), core["_30" /* ɵdid */](1, 180224, null, 0, more_CoreMainMenuMorePage, [delegate["a" /* CoreMainMenuDelegate */], sites["b" /* CoreSitesProvider */], nav_controller["a" /* NavController */], mainmenu["a" /* CoreMainMenuProvider */], events["b" /* CoreEventsProvider */], helper["a" /* CoreLoginHelperProvider */], utils_utils["b" /* CoreUtilsProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], utils_text["b" /* CoreTextUtilsProvider */], urlschemes["b" /* CoreCustomURLSchemesProvider */], translate_service["a" /* TranslateService */]], null, null)], null, null); }
var CoreMainMenuMorePageNgFactory = core["_27" /* ɵccf */]("page-core-mainmenu-more", more_CoreMainMenuMorePage, View_CoreMainMenuMorePage_Host_0, {}, {}, []);

//# sourceMappingURL=more.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuPageModuleNgFactory", function() { return CoreMainMenuPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var CoreMainMenuPageModuleNgFactory = core["_28" /* ɵcmf */](more_module_CoreMainMenuPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreMainMenuMorePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, more_module_CoreMainMenuPageModule, more_module_CoreMainMenuPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], more_CoreMainMenuMorePage, [])]); });

//# sourceMappingURL=more.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=54.js.map