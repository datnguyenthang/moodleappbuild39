webpackJsonp([82],{

/***/ 2090:
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

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var providers_course = __webpack_require__(14);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(55);

// EXTERNAL MODULE: ./src/singletons/array.ts
var array = __webpack_require__(1664);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(50);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(37);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/singletons/core.singletons.ts + 1 modules
var core_singletons = __webpack_require__(53);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var helper = __webpack_require__(38);

// CONCATENATED MODULE: ./src/addon/storagemanager/pages/courses-storage/courses-storage.ts
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
 * Page that displays downloaded courses and allows the user to delete them.
 */
var courses_storage_AddonStorageManagerCoursesStoragePage = /** @class */ (function () {
    function AddonStorageManagerCoursesStoragePage() {
        this.userCourses = [];
        this.downloadedCourses = [];
        this.completelyDownloadedCourses = [];
        this.totalSize = 0;
        this.loaded = false;
    }
    /**
     * View loaded.
     */
    AddonStorageManagerCoursesStoragePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, downloadedCourseIds, downloadedCourses;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, courses["a" /* CoreCourses */].instance.getUserCourses()];
                    case 1:
                        _a.userCourses = _b.sent();
                        this.courseStatusObserver = events["a" /* CoreEvents */].instance.on(events["b" /* CoreEventsProvider */].COURSE_STATUS_CHANGED, function (_a) {
                            var courseId = _a.courseId, status = _a.status;
                            return _this.onCourseUpdated(courseId, status);
                        });
                        return [4 /*yield*/, providers_course["a" /* CoreCourse */].instance.getDownloadedCourseIds()];
                    case 2:
                        downloadedCourseIds = _b.sent();
                        return [4 /*yield*/, Promise.all(this.userCourses
                                .filter(function (course) { return downloadedCourseIds.indexOf(course.id) !== -1; })
                                .map(function (course) { return _this.getDownloadedCourse(course); }))];
                    case 3:
                        downloadedCourses = _b.sent();
                        this.setDownloadedCourses(downloadedCourses);
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Component destroyed.
     */
    AddonStorageManagerCoursesStoragePage.prototype.ngOnDestroy = function () {
        this.courseStatusObserver && this.courseStatusObserver.off();
    };
    /**
     * Delete all courses that have been downloaded.
     */
    AddonStorageManagerCoursesStoragePage.prototype.deleteCompletelyDownloadedCourses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, modal, deletedCourseIds, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, dom["a" /* CoreDomUtils */].instance.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (!error_1.coreCanceled) {
                            throw error_1;
                        }
                        return [2 /*return*/];
                    case 3:
                        modal = dom["a" /* CoreDomUtils */].instance.showModalLoading();
                        deletedCourseIds = this.completelyDownloadedCourses.map(function (course) { return course.id; });
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, 7, 8]);
                        return [4 /*yield*/, Promise.all(deletedCourseIds.map(function (courseId) { return helper["a" /* CoreCourseHelper */].instance.deleteCourseFiles(courseId); }))];
                    case 5:
                        _a.sent();
                        this.setDownloadedCourses(this.downloadedCourses.filter(function (course) { return !array["a" /* CoreArray */].contains(deletedCourseIds, course.id); }));
                        return [3 /*break*/, 8];
                    case 6:
                        error_2 = _a.sent();
                        dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_2, core_singletons["a" /* Translate */].instance.instant('core.errordeletefile'));
                        return [3 /*break*/, 8];
                    case 7:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete course.
     *
     * @param course Course to delete.
     */
    AddonStorageManagerCoursesStoragePage.prototype.deleteCourse = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3, modal, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, dom["a" /* CoreDomUtils */].instance.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        if (!error_3.coreCanceled) {
                            throw error_3;
                        }
                        return [2 /*return*/];
                    case 3:
                        modal = dom["a" /* CoreDomUtils */].instance.showModalLoading();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, 7, 8]);
                        return [4 /*yield*/, helper["a" /* CoreCourseHelper */].instance.deleteCourseFiles(course.id)];
                    case 5:
                        _a.sent();
                        this.setDownloadedCourses(array["a" /* CoreArray */].withoutItem(this.downloadedCourses, course));
                        return [3 /*break*/, 8];
                    case 6:
                        error_4 = _a.sent();
                        dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_4, core_singletons["a" /* Translate */].instance.instant('core.errordeletefile'));
                        return [3 /*break*/, 8];
                    case 7:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle course updated event.
     *
     * @param courseId Updated course id.
     */
    AddonStorageManagerCoursesStoragePage.prototype.onCourseUpdated = function (courseId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var course, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (courseId == providers_course["b" /* CoreCourseProvider */].ALL_COURSES_CLEARED) {
                            this.setDownloadedCourses([]);
                            return [2 /*return*/];
                        }
                        course = this.downloadedCourses.find(function (course) { return course.id === courseId; });
                        if (!course) {
                            return [2 /*return*/];
                        }
                        course.isDownloading = status === constants["a" /* CoreConstants */].DOWNLOADING;
                        _a = course;
                        return [4 /*yield*/, this.calculateDownloadedCourseSize(course.id)];
                    case 1:
                        _a.totalSize = _b.sent();
                        this.setDownloadedCourses(this.downloadedCourses);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set downloaded courses data.
     *
     * @param courses Courses info.
     */
    AddonStorageManagerCoursesStoragePage.prototype.setDownloadedCourses = function (courses) {
        this.downloadedCourses = courses;
        this.completelyDownloadedCourses = courses.filter(function (course) { return !course.isDownloading; });
        this.totalSize = this.downloadedCourses.reduce(function (totalSize, course) { return totalSize + course.totalSize; }, 0);
    };
    /**
     * Get downloaded course data.
     *
     * @param course Course.
     * @return Course info.
     */
    AddonStorageManagerCoursesStoragePage.prototype.getDownloadedCourse = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            var totalSize, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calculateDownloadedCourseSize(course.id)];
                    case 1:
                        totalSize = _a.sent();
                        return [4 /*yield*/, providers_course["a" /* CoreCourse */].instance.getCourseStatus(course.id)];
                    case 2:
                        status = _a.sent();
                        return [2 /*return*/, __assign({}, course, { totalSize: totalSize, isDownloading: status === constants["a" /* CoreConstants */].DOWNLOADING })];
                }
            });
        });
    };
    /**
     * Calculate the size of a downloaded course.
     *
     * @param courseId Downloaded course id.
     * @return Promise to be resolved with the course size.
     */
    AddonStorageManagerCoursesStoragePage.prototype.calculateDownloadedCourseSize = function (courseId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sections, modules, promisedModuleSizes, moduleSizes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, providers_course["a" /* CoreCourse */].instance.getSections(courseId)];
                    case 1:
                        sections = _a.sent();
                        modules = array["a" /* CoreArray */].flatten(sections.map(function (section) { return section.modules; }));
                        promisedModuleSizes = modules.map(function (module) { return __awaiter(_this, void 0, void 0, function () {
                            var size;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, module_prefetch_delegate["a" /* CoreCourseModulePrefetch */].instance.getModuleDownloadedSize(module, courseId)];
                                    case 1:
                                        size = _a.sent();
                                        return [2 /*return*/, isNaN(size) ? 0 : size];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(promisedModuleSizes)];
                    case 2:
                        moduleSizes = _a.sent();
                        return [2 /*return*/, moduleSizes.reduce(function (totalSize, moduleSize) { return totalSize + moduleSize; }, 0)];
                }
            });
        });
    };
    AddonStorageManagerCoursesStoragePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-storagemanager-courses-storage',
            templateUrl: 'courses-storage.html',
        })
    ], AddonStorageManagerCoursesStoragePage);
    return AddonStorageManagerCoursesStoragePage;
}());

//# sourceMappingURL=courses-storage.js.map
// CONCATENATED MODULE: ./src/addon/storagemanager/pages/courses-storage/courses-storage.module.ts
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
var courses_storage_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var courses_storage_module_AddonStorageManagerCoursesStoragePageModule = /** @class */ (function () {
    function AddonStorageManagerCoursesStoragePageModule() {
    }
    AddonStorageManagerCoursesStoragePageModule = courses_storage_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                courses_storage_AddonStorageManagerCoursesStoragePage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(courses_storage_AddonStorageManagerCoursesStoragePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonStorageManagerCoursesStoragePageModule);
    return AddonStorageManagerCoursesStoragePageModule;
}());

//# sourceMappingURL=courses-storage.module.js.map
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

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

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

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon_icon = __webpack_require__(85);

// EXTERNAL MODULE: ./src/pipes/bytes-to-size.ts
var bytes_to_size = __webpack_require__(1597);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(52);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-header.js
var card_header = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// CONCATENATED MODULE: ./src/addon/storagemanager/pages/courses-storage/courses-storage.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










































var styles_AddonStorageManagerCoursesStoragePage = [];
var RenderType_AddonStorageManagerCoursesStoragePage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonStorageManagerCoursesStoragePage, data: {} });

function View_AddonStorageManagerCoursesStoragePage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("core.downloading")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonStorageManagerCoursesStoragePage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 28, "ion-item", [["class", "course item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 2, 1, "h2", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](8, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_AddonStorageManagerCoursesStoragePage_2)), core["_30" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 5, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 1, "ion-icon", [["item-start", ""], ["name", "cube"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](16, 147456, [[6, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](17, null, ["\n                        ", "\n                    "])), core["_49" /* ɵppd */](18, 1), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](20, 0, null, 4, 7, "button", [["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteCourse(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](21, 1097728, [[5, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](23, 0, null, 0, 3, "core-icon", [["name", "trash"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](24, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"], ariaLabel: [1, "ariaLabel"] }, null), core["_48" /* ɵpod */](25, { name: 0 }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.isDownloading; _ck(_v, 11, 0, currVal_1); var currVal_3 = "cube"; _ck(_v, 16, 0, currVal_3); var currVal_6 = "trash"; var currVal_7 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 24, 1, core["_44" /* ɵnov */](_v, 26).transform("addon.storagemanager.deletedatafrom", _ck(_v, 25, 0, _v.context.$implicit.name))), ""); _ck(_v, 24, 0, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.displayname; _ck(_v, 8, 0, currVal_0); var currVal_2 = core["_44" /* ɵnov */](_v, 16)._hidden; _ck(_v, 15, 0, currVal_2); var currVal_4 = core["_56" /* ɵunv */](_v, 17, 0, _ck(_v, 18, 0, core["_44" /* ɵnov */](_v.parent, 0), _v.context.$implicit.totalSize)); _ck(_v, 17, 0, currVal_4); var currVal_5 = _v.context.$implicit.isDownloading; _ck(_v, 20, 0, currVal_5); }); }
function View_AddonStorageManagerCoursesStoragePage_0(_l) { return core["_57" /* ɵvid */](0, [core["_47" /* ɵpid */](0, bytes_to_size["a" /* CoreBytesToSizePipe */], [logger["b" /* CoreLoggerProvider */], utils_text["b" /* CoreTextUtilsProvider */]]), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](10, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 63, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](18, 0, null, 1, 59, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](19, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, 0, 44, "ion-card", [], null, null, null, null, null)), core["_30" /* ɵdid */](22, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](24, 0, null, null, 40, "ion-card-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](25, 16384, null, 0, card_header["a" /* CardHeader */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](27, 0, null, null, 2, "h1", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](28, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, null, 2, "p", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](32, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](35, 0, null, null, 28, "ion-item", [["class", "size item item-block"], ["no-padding", ""], ["padding-top", ""], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](36, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_30" /* ɵdid */](40, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](42, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "cube"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](43, 147456, [[3, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](45, 0, null, 2, 2, "h2", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](46, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, 4, 5, "div", [["item-end", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](51, 0, null, null, 2, "p", [["text-end", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](52, null, ["", ""])), core["_49" /* ɵppd */](53, 1), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](56, 0, null, 4, 6, "button", [["icon-only", ""], ["ion-button", ""], ["item-end", ""], ["no-padding", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteCompletelyDownloadedCourses() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](57, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](59, 0, null, 0, 2, "core-icon", [["name", "trash"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](60, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"], ariaLabel: [1, "ariaLabel"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ɵeld */](67, 0, null, 0, 9, "ion-card", [], null, null, null, null, null)), core["_30" /* ɵdid */](68, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](70, 0, null, null, 5, "ion-list", [], null, null, null, null, null)), core["_30" /* ɵdid */](71, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonStorageManagerCoursesStoragePage_1)), core["_30" /* ɵdid */](74, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_5 = _co.loaded; _ck(_v, 19, 0, currVal_5); var currVal_9 = "cube"; _ck(_v, 43, 0, currVal_9); var currVal_13 = "trash"; var currVal_14 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 60, 1, core["_44" /* ɵnov */](_v, 61).transform("addon.storagemanager.deletecourses")), ""); _ck(_v, 60, 0, currVal_13, currVal_14); var currVal_15 = _co.downloadedCourses; _ck(_v, 74, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("addon.storagemanager.managestorage")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_44" /* ɵnov */](_v, 16).statusbarPadding; var currVal_4 = core["_44" /* ɵnov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_6 = core["_56" /* ɵunv */](_v, 28, 0, core["_44" /* ɵnov */](_v, 29).transform("core.courses.courses")); _ck(_v, 28, 0, currVal_6); var currVal_7 = core["_56" /* ɵunv */](_v, 32, 0, core["_44" /* ɵnov */](_v, 33).transform("addon.storagemanager.info")); _ck(_v, 32, 0, currVal_7); var currVal_8 = core["_44" /* ɵnov */](_v, 43)._hidden; _ck(_v, 42, 0, currVal_8); var currVal_10 = core["_56" /* ɵunv */](_v, 46, 0, core["_44" /* ɵnov */](_v, 47).transform("addon.storagemanager.storageused")); _ck(_v, 46, 0, currVal_10); var currVal_11 = core["_56" /* ɵunv */](_v, 52, 0, _ck(_v, 53, 0, core["_44" /* ɵnov */](_v, 0), _co.totalSize)); _ck(_v, 52, 0, currVal_11); var currVal_12 = (_co.completelyDownloadedCourses.length === 0); _ck(_v, 56, 0, currVal_12); }); }
function View_AddonStorageManagerCoursesStoragePage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-storagemanager-courses-storage", [], null, null, null, View_AddonStorageManagerCoursesStoragePage_0, RenderType_AddonStorageManagerCoursesStoragePage)), core["_30" /* ɵdid */](1, 180224, null, 0, courses_storage_AddonStorageManagerCoursesStoragePage, [], null, null)], null, null); }
var AddonStorageManagerCoursesStoragePageNgFactory = core["_27" /* ɵccf */]("page-addon-storagemanager-courses-storage", courses_storage_AddonStorageManagerCoursesStoragePage, View_AddonStorageManagerCoursesStoragePage_Host_0, {}, {}, []);

//# sourceMappingURL=courses-storage.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/storagemanager/pages/courses-storage/courses-storage.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCoursesStoragePageModuleNgFactory", function() { return AddonStorageManagerCoursesStoragePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var AddonStorageManagerCoursesStoragePageModuleNgFactory = core["_28" /* ɵcmf */](courses_storage_module_AddonStorageManagerCoursesStoragePageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], AddonStorageManagerCoursesStoragePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, courses_storage_module_AddonStorageManagerCoursesStoragePageModule, courses_storage_module_AddonStorageManagerCoursesStoragePageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], courses_storage_AddonStorageManagerCoursesStoragePage, [])]); });

//# sourceMappingURL=courses-storage.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=82.js.map