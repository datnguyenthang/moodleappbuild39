webpackJsonp([113],{

/***/ 2065:
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

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(110);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(46);

// EXTERNAL MODULE: ./src/addon/mod/h5pactivity/providers/h5pactivity.ts
var h5pactivity = __webpack_require__(267);

// CONCATENATED MODULE: ./src/addon/mod/h5pactivity/pages/user-attempts/user-attempts.ts
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Page that displays user attempts of a certain user.
 */
var user_attempts_AddonModH5PActivityUserAttemptsPage = /** @class */ (function () {
    function AddonModH5PActivityUserAttemptsPage(navParams) {
        this.courseId = navParams.get('courseId');
        this.h5pActivityId = navParams.get('h5pActivityId');
        this.userId = navParams.get('userId') || sites["a" /* CoreSites */].instance.getCurrentSiteUserId();
        this.isCurrentUser = this.userId == sites["a" /* CoreSites */].instance.getCurrentSiteUserId();
    }
    /**
     * Component being initialized.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_1, 'Error loading attempts.');
                        return [3 /*break*/, 4];
                    case 3:
                        this.loaded = true;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.doRefresh = function (refresher) {
        this.refreshData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Get quiz data and attempt data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.fetchActivity(),
                            this.fetchAttempts(),
                            this.fetchUserProfile(),
                        ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get activity data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.fetchActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, h5pactivity["a" /* AddonModH5PActivity */].instance.getH5PActivityById(this.courseId, this.h5pActivityId)];
                    case 1:
                        _a.h5pActivity = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get attempts.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.fetchAttempts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, h5pactivity["a" /* AddonModH5PActivity */].instance.getUserAttempts(this.h5pActivityId, { userId: this.userId })];
                    case 1:
                        _a.attemptsData = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get user profile.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.fetchUserProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, user["a" /* CoreUser */].instance.getProfile(this.userId, this.courseId, true)];
                    case 1:
                        _a.user = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all([
                                h5pactivity["a" /* AddonModH5PActivity */].instance.invalidateActivityData(this.courseId),
                                h5pactivity["a" /* AddonModH5PActivity */].instance.invalidateUserAttempts(this.h5pActivityId, this.userId),
                            ])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [4 /*yield*/, this.fetchData()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddonModH5PActivityUserAttemptsPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-h5pactivity-user-attempts',
            templateUrl: 'user-attempts.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["u" /* NavParams */]])
    ], AddonModH5PActivityUserAttemptsPage);
    return AddonModH5PActivityUserAttemptsPage;
}());

//# sourceMappingURL=user-attempts.js.map
// CONCATENATED MODULE: ./src/addon/mod/h5pactivity/pages/user-attempts/user-attempts.module.ts
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
var user_attempts_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var user_attempts_module_AddonModH5PActivityUserAttemptsPageModule = /** @class */ (function () {
    function AddonModH5PActivityUserAttemptsPageModule() {
    }
    AddonModH5PActivityUserAttemptsPageModule = user_attempts_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                user_attempts_AddonModH5PActivityUserAttemptsPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(user_attempts_AddonModH5PActivityUserAttemptsPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild(),
            ],
        })
    ], AddonModH5PActivityUserAttemptsPageModule);
    return AddonModH5PActivityUserAttemptsPageModule;
}());

//# sourceMappingURL=user-attempts.module.js.map
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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(22);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

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
var providers_helper = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./src/directives/user-link.ts
var user_link = __webpack_require__(489);

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

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(217);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(126);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(118);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push.js
var nav_push = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push-anchor.js
var nav_push_anchor = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(119);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(231);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(24);

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

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(176);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// CONCATENATED MODULE: ./src/addon/mod/h5pactivity/pages/user-attempts/user-attempts.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



































































var styles_AddonModH5PActivityUserAttemptsPage = [];
var RenderType_AddonModH5PActivityUserAttemptsPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModH5PActivityUserAttemptsPage, data: {} });

function View_AddonModH5PActivityUserAttemptsPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 16777216, null, null, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], app["b" /* CoreAppProvider */], helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_26" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.h5pActivity.name; var currVal_1 = "module"; var currVal_2 = _co.h5pActivity.coursemodule; var currVal_3 = _co.courseId; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AddonModH5PActivityUserAttemptsPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "a", [["class", "item item-block"], ["core-user-link", ""], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 81920, null, 0, user_link["a" /* CoreUserLinkDirective */], [core["t" /* ElementRef */], [2, nav_controller["a" /* NavController */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { userId: [0, "userId"], courseId: [1, "courseId"] }, null), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ɵdid */](9, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["b" /* CoreSitesProvider */], utils["b" /* CoreUtilsProvider */], app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"] }, null), core["_30" /* ɵdid */](10, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.user.id; var currVal_2 = _co.courseId; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.user; _ck(_v, 9, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.fullname; _ck(_v, 0, 0, currVal_0); var currVal_4 = _co.user.fullname; _ck(_v, 13, 0, currVal_4); }); }
function View_AddonModH5PActivityUserAttemptsPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ɵdid */](8, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["b" /* CoreSitesProvider */], utils["b" /* CoreUtilsProvider */], app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"] }, null), core["_30" /* ɵdid */](9, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](12, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user; _ck(_v, 8, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 12, 0, core["_44" /* ɵnov */](_v, 13).transform("addon.mod_h5pactivity.myattempts")); _ck(_v, 12, 0, currVal_1); }); }
function View_AddonModH5PActivityUserAttemptsPage_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_AddonModH5PActivityUserAttemptsPage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 9, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](10, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 2, null, View_AddonModH5PActivityUserAttemptsPage_6)), core["_30" /* ɵdid */](14, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["_11" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_48" /* ɵpod */](15, { attempts: 0 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 15, 0, _co.attemptsData.scored.attempts); var currVal_2 = core["_44" /* ɵnov */](_v.parent.parent, 46); _ck(_v, 14, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.attemptsData.scored.title; _ck(_v, 10, 0, currVal_0); }); }
function View_AddonModH5PActivityUserAttemptsPage_8(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_AddonModH5PActivityUserAttemptsPage_7(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 10, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](10, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 2, null, View_AddonModH5PActivityUserAttemptsPage_8)), core["_30" /* ɵdid */](15, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["_11" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_48" /* ɵpod */](16, { attempts: 0 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 16, 0, _co.attemptsData.attempts); var currVal_2 = core["_44" /* ɵnov */](_v.parent.parent, 46); _ck(_v, 15, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("addon.mod_h5pactivity.all_attempts")); _ck(_v, 10, 0, currVal_0); }); }
function View_AddonModH5PActivityUserAttemptsPage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 10, "ion-list", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_5)), core["_30" /* ɵdid */](5, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_7)), core["_30" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.attemptsData.scored; _ck(_v, 5, 0, currVal_0); var currVal_1 = (_co.attemptsData.attempts && _co.attemptsData.attempts.length); _ck(_v, 9, 0, currVal_1); }, null); }
function View_AddonModH5PActivityUserAttemptsPage_9(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 3, "core-empty-box", [["icon", "stats"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("addon.mod_h5pactivity.attempts_none")); var currVal_1 = "stats"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonModH5PActivityUserAttemptsPage_12(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "img", [["src", "assets/img/completion/completion-auto-y.svg"]], [[8, "alt", 0]], null, null, null, null)), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 1).transform("addon.mod_h5pactivity.attempt_completion_yes")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModH5PActivityUserAttemptsPage_13(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "img", [["src", "assets/img/completion/completion-auto-n.svg"]], [[8, "alt", 0]], null, null, null, null)), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 1).transform("addon.mod_h5pactivity.attempt_completion_no")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModH5PActivityUserAttemptsPage_14(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-icon", [["name", "fa-check-circle"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](1, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"], ariaLabel: [1, "ariaLabel"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "fa-check-circle"; var currVal_1 = core["_56" /* ɵunv */](_v, 1, 1, core["_44" /* ɵnov */](_v, 2).transform("addon.mod_h5pactivity.attempt_success_pass")); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonModH5PActivityUserAttemptsPage_15(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-icon", [["name", "fa-circle-o"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](1, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"], ariaLabel: [1, "ariaLabel"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "fa-circle-o"; var currVal_1 = core["_56" /* ɵunv */](_v, 1, 1, core["_44" /* ɵnov */](_v, 2).transform("addon.mod_h5pactivity.attempt_success_fail")); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonModH5PActivityUserAttemptsPage_16(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "img", [["src", "assets/img/icons/empty.svg"]], [[8, "alt", 0]], null, null, null, null)), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 1).transform("addon.mod_h5pactivity.attempt_success_unknown")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModH5PActivityUserAttemptsPage_11(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 62, "a", [["class", "addon-mod_h5pactivity-table-row item item-block"], ["ion-item", ""], ["navPush", "AddonModH5PActivityAttemptResultsPage"], ["text-wrap", ""]], [[1, "aria-label", 0], [1, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 6).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_30" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"], navParams: [1, "navParams"] }, null), core["_48" /* ɵpod */](7, { courseId: 0, h5pActivityId: 1, attemptId: 2 }), core["_30" /* ɵdid */](8, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), core["_48" /* ɵpod */](9, { $a: 0 }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 49, "ion-row", [["align-items-center", ""], ["class", "row"]], null, null, null, null, null)), core["_30" /* ɵdid */](13, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 2, "ion-col", [["class", "col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](16, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](17, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](19, 0, null, null, 3, "ion-col", [["class", "col"], ["col-5", ""], ["col-md-2", ""], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](20, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](21, null, ["", ""])), core["_49" /* ɵppd */](22, 2), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](24, 0, null, null, 5, "ion-col", [["class", "col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](25, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](26, null, ["\n                ", ""])), (_l()(), core["_31" /* ɵeld */](27, 0, null, null, 1, "span", [["class", "hidden-tablet"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](28, null, [" / ", ""])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, null, 2, "ion-col", [["class", "hidden-phone col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](32, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](33, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](35, 0, null, null, 2, "ion-col", [["class", "hidden-phone col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](36, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](37, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](39, 0, null, null, 8, "ion-col", [["class", "hidden-phone col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](40, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_12)), core["_30" /* ɵdid */](43, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_13)), core["_30" /* ɵdid */](46, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, null, 11, "ion-col", [["class", "addon-mod_h5pactivity-table-success-col col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](50, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_14)), core["_30" /* ɵdid */](53, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_15)), core["_30" /* ɵdid */](56, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_16)), core["_30" /* ɵdid */](59, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "AddonModH5PActivityAttemptResultsPage"; var currVal_3 = _ck(_v, 7, 0, _co.courseId, _co.h5pActivityId, _v.context.$implicit.id); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_10 = _v.context.$implicit.completion; _ck(_v, 43, 0, currVal_10); var currVal_11 = !_v.context.$implicit.completion; _ck(_v, 46, 0, currVal_11); var currVal_12 = ((_v.context.$implicit.success !== null) && _v.context.$implicit.success); _ck(_v, 53, 0, currVal_12); var currVal_13 = ((_v.context.$implicit.success !== null) && !_v.context.$implicit.success); _ck(_v, 56, 0, currVal_13); var currVal_14 = (_v.context.$implicit.success === null); _ck(_v, 59, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 10).transform("addon.mod_h5pactivity.viewattempt", _ck(_v, 9, 0, _v.context.$implicit.attempt))); var currVal_1 = core["_44" /* ɵnov */](_v, 8)._href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.attempt; _ck(_v, 17, 0, currVal_4); var currVal_5 = core["_56" /* ɵunv */](_v, 21, 0, _ck(_v, 22, 0, core["_44" /* ɵnov */](_v.parent.parent, 0), _v.context.$implicit.timemodified, "strftimedatetimeshort")); _ck(_v, 21, 0, currVal_5); var currVal_6 = _v.context.$implicit.rawscore; _ck(_v, 26, 0, currVal_6); var currVal_7 = _v.context.$implicit.maxscore; _ck(_v, 28, 0, currVal_7); var currVal_8 = _v.context.$implicit.maxscore; _ck(_v, 33, 0, currVal_8); var currVal_9 = _v.context.$implicit.durationReadable; _ck(_v, 37, 0, currVal_9); }); }
function View_AddonModH5PActivityUserAttemptsPage_10(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 44, "ion-item", [["class", "addon-mod_h5pactivity-table-header item item-block"], ["detail-push", ""], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 36, "ion-row", [["align-items-center", ""], ["class", "row"]], null, null, null, null, null)), core["_30" /* ɵdid */](10, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, null, 2, "ion-col", [["class", "col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](13, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["#"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](16, 0, null, null, 3, "ion-col", [["class", "col"], ["col-5", ""], ["col-md-2", ""], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](17, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](18, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, null, 3, "ion-col", [["class", "col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](22, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](23, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, null, 3, "ion-col", [["class", "hidden-phone col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](27, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](28, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, null, 3, "ion-col", [["class", "hidden-phone col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](32, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](33, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](36, 0, null, null, 3, "ion-col", [["class", "hidden-phone col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](37, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](38, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](41, 0, null, null, 3, "ion-col", [["class", "col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](42, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ɵted */](43, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModH5PActivityUserAttemptsPage_11)), core["_30" /* ɵdid */](50, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_6 = _v.context.attempts; _ck(_v, 50, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 18, 0, core["_44" /* ɵnov */](_v, 19).transform("core.date")); _ck(_v, 18, 0, currVal_0); var currVal_1 = core["_56" /* ɵunv */](_v, 23, 0, core["_44" /* ɵnov */](_v, 24).transform("addon.mod_h5pactivity.score")); _ck(_v, 23, 0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 28, 0, core["_44" /* ɵnov */](_v, 29).transform("addon.mod_h5pactivity.maxscore")); _ck(_v, 28, 0, currVal_2); var currVal_3 = core["_56" /* ɵunv */](_v, 33, 0, core["_44" /* ɵnov */](_v, 34).transform("addon.mod_h5pactivity.duration")); _ck(_v, 33, 0, currVal_3); var currVal_4 = core["_56" /* ɵunv */](_v, 38, 0, core["_44" /* ɵnov */](_v, 39).transform("addon.mod_h5pactivity.completion")); _ck(_v, 38, 0, currVal_4); var currVal_5 = core["_56" /* ɵunv */](_v, 43, 0, core["_44" /* ɵnov */](_v, 44).transform("core.success")); _ck(_v, 43, 0, currVal_5); }); }
function View_AddonModH5PActivityUserAttemptsPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_47" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["b" /* CoreLoggerProvider */], time["b" /* CoreTimeUtilsProvider */]]), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModH5PActivityUserAttemptsPage_1)), core["_30" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 28, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](18, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.doRefresh($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](19, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ɵdid */](22, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, 1, 16, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](27, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModH5PActivityUserAttemptsPage_2)), core["_30" /* ɵdid */](31, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModH5PActivityUserAttemptsPage_3)), core["_30" /* ɵdid */](34, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModH5PActivityUserAttemptsPage_4)), core["_30" /* ɵdid */](37, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModH5PActivityUserAttemptsPage_9)), core["_30" /* ɵdid */](41, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_26" /* ɵand */](0, [["attemptsTemplate", 2]], null, 0, null, View_AddonModH5PActivityUserAttemptsPage_10))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_2 = _co.h5pActivity; _ck(_v, 11, 0, currVal_2); var currVal_7 = _co.loaded; _ck(_v, 19, 0, currVal_7); var currVal_9 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 22, 0, core["_44" /* ɵnov */](_v, 23).transform("core.pulltorefresh")), ""); _ck(_v, 22, 0, currVal_9); var currVal_10 = _co.loaded; _ck(_v, 27, 0, currVal_10); var currVal_11 = (_co.user && !_co.isCurrentUser); _ck(_v, 31, 0, currVal_11); var currVal_12 = (_co.user && _co.isCurrentUser); _ck(_v, 34, 0, currVal_12); var currVal_13 = _co.attemptsData; _ck(_v, 37, 0, currVal_13); var currVal_14 = (_co.attemptsData && (!_co.attemptsData.attempts || !_co.attemptsData.attempts.length)); _ck(_v, 41, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = core["_44" /* ɵnov */](_v, 16).statusbarPadding; var currVal_4 = core["_44" /* ɵnov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = (core["_44" /* ɵnov */](_v, 19).state !== "inactive"); var currVal_6 = core["_44" /* ɵnov */](_v, 19)._top; _ck(_v, 18, 0, currVal_5, currVal_6); var currVal_8 = core["_44" /* ɵnov */](_v, 22).r.state; _ck(_v, 21, 0, currVal_8); }); }
function View_AddonModH5PActivityUserAttemptsPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-h5pactivity-user-attempts", [], null, null, null, View_AddonModH5PActivityUserAttemptsPage_0, RenderType_AddonModH5PActivityUserAttemptsPage)), core["_30" /* ɵdid */](1, 114688, null, 0, user_attempts_AddonModH5PActivityUserAttemptsPage, [nav_params["a" /* NavParams */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonModH5PActivityUserAttemptsPageNgFactory = core["_27" /* ɵccf */]("page-addon-mod-h5pactivity-user-attempts", user_attempts_AddonModH5PActivityUserAttemptsPage, View_AddonModH5PActivityUserAttemptsPage_Host_0, {}, {}, []);

//# sourceMappingURL=user-attempts.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/mod/h5pactivity/pages/user-attempts/user-attempts.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUserAttemptsPageModuleNgFactory", function() { return AddonModH5PActivityUserAttemptsPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var AddonModH5PActivityUserAttemptsPageModuleNgFactory = core["_28" /* ɵcmf */](user_attempts_module_AddonModH5PActivityUserAttemptsPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], AddonModH5PActivityUserAttemptsPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, user_attempts_module_AddonModH5PActivityUserAttemptsPageModule, user_attempts_module_AddonModH5PActivityUserAttemptsPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], user_attempts_AddonModH5PActivityUserAttemptsPage, [])]); });

//# sourceMappingURL=user-attempts.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=113.js.map