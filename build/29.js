webpackJsonp([29],{

/***/ 2140:
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
var providers_courses = __webpack_require__(55);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/addon/block/timeline/providers/timeline.ts
var timeline = __webpack_require__(285);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var helper = __webpack_require__(38);

// EXTERNAL MODULE: ./src/core/course/providers/options-delegate.ts
var options_delegate = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(13);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(203);

// EXTERNAL MODULE: ./src/addon/landing/providers/landing.ts
var landing = __webpack_require__(491);

// CONCATENATED MODULE: ./src/addon/mandatory/pages/my-mandatory/my-mandatory.ts
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
var my_mandatory_AddonMandatoryMyMandatoryPage = /** @class */ (function () {
    function AddonMandatoryMyMandatoryPage(domUtils, landingProvider, coursesProvider, utils, myOverviewProvider, sitesProvider, courseHelper, courseOptionsDelegate, eventsProvider, navCtrl, appProvider) {
        this.domUtils = domUtils;
        this.landingProvider = landingProvider;
        this.coursesProvider = coursesProvider;
        this.utils = utils;
        this.myOverviewProvider = myOverviewProvider;
        this.sitesProvider = sitesProvider;
        this.courseHelper = courseHelper;
        this.courseOptionsDelegate = courseOptionsDelegate;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.courses = {
            selected: 'inprogress',
            loaded: false,
            filter: '',
            past: [],
            inprogress: [],
            future: []
        };
        this.tabShown = 'courses';
        this.showFilter = false;
        this.timeline = {
            sort: 'sortbydates',
            events: [],
            loaded: false,
            canLoadMore: undefined
        };
        this.timelineCourses = {
            courses: [],
            loaded: false,
            canLoadMore: false
        };
        this.prefetchCoursesData = {
            inprogress: {},
            past: {},
            future: {}
        };
        this.prefetchIconsInitialized = false;
        this.courseIds = '';
        this.loadSiteName();
    }
    /**
     * View loaded.
     */
    AddonMandatoryMyMandatoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchEnabled = !this.coursesProvider.isSearchCoursesDisabledInSite();
        this.downloadAllCoursesEnabled = !this.coursesProvider.isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = this.eventsProvider.on(events["b" /* CoreEventsProvider */].SITE_UPDATED, function () {
            var wasEnabled = _this.downloadAllCoursesEnabled;
            _this.searchEnabled = !_this.coursesProvider.isSearchCoursesDisabledInSite();
            _this.downloadAllCoursesEnabled = !_this.coursesProvider.isDownloadCoursesDisabledInSite();
            if (!wasEnabled && _this.downloadAllCoursesEnabled && _this.courses.loaded) {
                // Download all courses is enabled now, initialize it.
                _this.initPrefetchCoursesIcons();
            }
            _this.loadSiteName();
        });
        if (!this.courses.loaded) {
            this.fetchMyOverviewCourses().finally(function () {
                _this.courses.loaded = true;
            });
        }
    };
    /**
     * Fetch the timeline.
     *
     * @param {number} [afterEventId] The last event id.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMandatoryMyMandatoryPage.prototype.fetchMyOverviewTimeline = function (afterEventId) {
        var _this = this;
        return this.myOverviewProvider.getActionEventsByTimesort(afterEventId).then(function (events) {
            _this.timeline.events = events.events;
            _this.timeline.canLoadMore = events.canLoadMore;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Go to search courses.
     */
    AddonMandatoryMyMandatoryPage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * Fetch the timeline by courses.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMandatoryMyMandatoryPage.prototype.fetchMyOverviewTimelineByCourses = function () {
        var _this = this;
        return this.fetchUserCourses().then(function (courses) {
            var today = moment().unix();
            var courseIds;
            courses = courses.filter(function (course) {
                return course.startdate <= today && (!course.enddate || course.enddate >= today);
            });
            _this.timelineCourses.courses = courses;
            if (courses.length > 0) {
                courseIds = courses.map(function (course) {
                    return course.id;
                });
                return _this.myOverviewProvider.getActionEventsByCourses(courseIds).then(function (courseEvents) {
                    _this.timelineCourses.courses.forEach(function (course) {
                        course.events = courseEvents[course.id].events;
                        course.canLoadMore = courseEvents[course.id].canLoadMore;
                    });
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Show or hide the filter.
     */
    AddonMandatoryMyMandatoryPage.prototype.switchFilter = function () {
        var _this = this;
        this.showFilter = !this.showFilter;
        this.courses.filter = '';
        this.filteredCourses = this.courses[this.courses.selected];
        if (this.showFilter) {
            setTimeout(function () {
                _this.searchbar.setFocus();
            });
        }
    };
    /**
     * Fetch the courses for my overview.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMandatoryMyMandatoryPage.prototype.fetchMyOverviewCourses = function () {
        var _this = this;
        return this.fetchUserCourses().then(function (courses) {
            var today = moment().unix(), categoryList = [];
            _this.courses.past = [];
            _this.courses.inprogress = [];
            _this.courses.future = [];
            courses.forEach(function (course) {
                if (course.startdate > today) {
                    // Courses that have not started yet.
                    _this.courses.future.push(course);
                }
                else if (course.enddate && course.enddate < today) {
                    // Courses that have already ended.
                    _this.courses.past.push(course);
                }
                else {
                    // Courses still in progress.
                    _this.courses.inprogress.push(course);
                }
                if (!categoryList.find(function (el) { return el.id == course.category; })) {
                    categoryList.push({ id: course.category,
                        name: course.categoryname,
                        description: course.categorydescription,
                        courses: [] });
                }
            });
            categoryList.forEach(function (category) {
                courses.forEach(function (course) {
                    if (category.id == course.category) {
                        category.courses.push(course);
                    }
                });
            });
            _this.filteredCategory = categoryList;
            // NGHE-TC: select firt category
            if (_this.filteredCategory.length > 0) {
                _this.filteredCategory[0].selected = true;
            }
            //==========================
            _this.courses.filter = '';
            _this.showFilter = false;
            _this.filteredCourses = _this.courses[_this.courses.selected];
            _this.initPrefetchCoursesIcons();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Fetch user courses.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMandatoryMyMandatoryPage.prototype.fetchUserCourses = function () {
        var _this = this;
        return this.landingProvider.getUserCourses(null, null, landing["a" /* AddonLandingProvider */].TYPE_MANDATORY_TRAINING).then(function (courses) {
            var promises = [], courseIds = courses.map(function (course) {
                return course.id;
            });
            if (_this.coursesProvider.canGetAdminAndNavOptions()) {
                // Load course options of the course.
                promises.push(_this.coursesProvider.getCoursesAdminAndNavOptions(courseIds).then(function (options) {
                    courses.forEach(function (course) {
                        course.navOptions = options.navOptions[course.id];
                        course.admOptions = options.admOptions[course.id];
                    });
                }));
            }
            _this.courseIds = courseIds.join(',');
            if (_this.courseIds && _this.coursesProvider.isGetCoursesByFieldAvailable()) {
                // Load course image of all the courses.
                promises.push(_this.coursesProvider.getCoursesByField('ids', _this.courseIds).then(function (coursesInfo) {
                    coursesInfo = _this.utils.arrayToObject(coursesInfo, 'id');
                    courses.forEach(function (course) {
                        if (coursesInfo[course.id] && coursesInfo[course.id].overviewfiles &&
                            coursesInfo[course.id].overviewfiles[0]) {
                            course.imageThumb = coursesInfo[course.id].overviewfiles[0].fileurl;
                        }
                        else {
                            course.imageThumb = false;
                        }
                    });
                }));
            }
            return courses;
        });
    };
    /**
     * Initialize the prefetch icon for selected courses.
     */
    AddonMandatoryMyMandatoryPage.prototype.initPrefetchCoursesIcons = function () {
        var _this = this;
        if (this.prefetchIconsInitialized || !this.downloadAllCoursesEnabled) {
            // Already initialized.
            return;
        }
        this.prefetchIconsInitialized = true;
        Object.keys(this.prefetchCoursesData).forEach(function (filter) {
            if (!_this.courses[filter] || _this.courses[filter].length < 2) {
                // Not enough courses.
                _this.prefetchCoursesData[filter].icon = '';
                return;
            }
            _this.courseHelper.determineCoursesStatus(_this.courses[filter]).then(function (status) {
                var icon = _this.courseHelper.getCourseStatusIconAndTitleFromStatus(status).icon;
                if (icon == 'spinner') {
                    // It seems all courses are being downloaded, show a download button instead.
                    icon = 'cloud-download';
                }
                _this.prefetchCoursesData[filter].icon = icon;
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} refresher Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMandatoryMyMandatoryPage.prototype.refreshMyOverview = function (refresher) {
        var _this = this;
        var promises = [];
        if (this.tabShown == 'timeline') {
            promises.push(this.myOverviewProvider.invalidateActionEventsByTimesort());
            promises.push(this.myOverviewProvider.invalidateActionEventsByCourses());
        }
        promises.push(this.coursesProvider.invalidateUserCourses());
        promises.push(this.courseOptionsDelegate.clearAndInvalidateCoursesOptions());
        if (this.courseIds) {
            promises.push(this.coursesProvider.invalidateCoursesByField('ids', this.courseIds));
        }
        return Promise.all(promises).finally(function () {
            switch (_this.tabShown) {
                case 'timeline':
                    switch (_this.timeline.sort) {
                        case 'sortbydates':
                            return _this.fetchMyOverviewTimeline();
                        case 'sortbycourses':
                            return _this.fetchMyOverviewTimelineByCourses();
                        default:
                    }
                    break;
                case 'courses':
                    _this.prefetchIconsInitialized = false;
                    return _this.fetchMyOverviewCourses();
                default:
            }
        }).finally(function () {
            refresher.complete();
        });
    };
    /**
     * Load the site name.
     */
    AddonMandatoryMyMandatoryPage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
    };
    /**
     * Page destroyed.
     */
    AddonMandatoryMyMandatoryPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(tabs["a" /* CoreTabsComponent */]),
        __metadata("design:type", tabs["a" /* CoreTabsComponent */])
    ], AddonMandatoryMyMandatoryPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(core["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", ionic_angular["A" /* Searchbar */])
    ], AddonMandatoryMyMandatoryPage.prototype, "searchbar", void 0);
    AddonMandatoryMyMandatoryPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mandatory-my-mandatory',
            templateUrl: 'my-mandatory.html',
        }),
        __metadata("design:paramtypes", [dom["b" /* CoreDomUtilsProvider */],
            landing["a" /* AddonLandingProvider */],
            providers_courses["b" /* CoreCoursesProvider */], utils["b" /* CoreUtilsProvider */],
            timeline["a" /* AddonBlockTimelineProvider */], sites["b" /* CoreSitesProvider */],
            helper["b" /* CoreCourseHelperProvider */], options_delegate["a" /* CoreCourseOptionsDelegate */],
            events["b" /* CoreEventsProvider */], ionic_angular["t" /* NavController */], app["b" /* CoreAppProvider */]])
    ], AddonMandatoryMyMandatoryPage);
    return AddonMandatoryMyMandatoryPage;
}());

//# sourceMappingURL=my-mandatory.js.map
// CONCATENATED MODULE: ./src/addon/mandatory/pages/my-mandatory/my-mandatory.module.ts
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
var my_mandatory_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var my_mandatory_module_AddonMandatoryMyMandatoryPageModule = /** @class */ (function () {
    function AddonMandatoryMyMandatoryPageModule() {
    }
    AddonMandatoryMyMandatoryPageModule = my_mandatory_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                my_mandatory_AddonMandatoryMyMandatoryPage,
            ],
            imports: [
                components_components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(my_mandatory_AddonMandatoryMyMandatoryPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMandatoryMyMandatoryPageModule);
    return AddonMandatoryMyMandatoryPageModule;
}());

//# sourceMappingURL=my-mandatory.module.js.map
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

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(126);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(118);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(176);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(52);

// EXTERNAL MODULE: ./src/core/courses/components/course-list-group/course-list-group.ngfactory.js
var course_list_group_ngfactory = __webpack_require__(2193);

// EXTERNAL MODULE: ./src/core/courses/components/course-list-group/course-list-group.ts
var course_list_group = __webpack_require__(1584);

// CONCATENATED MODULE: ./src/addon/mandatory/pages/my-mandatory/my-mandatory.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























































var styles_AddonMandatoryMyMandatoryPage = [];
var RenderType_AddonMandatoryMyMandatoryPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMandatoryMyMandatoryPage, data: {} });

function View_AddonMandatoryMyMandatoryPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSearch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](1, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = "search"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 2).transform("core.courses.searchcourses")); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_44" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); }); }
function View_AddonMandatoryMyMandatoryPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("core.courses.nocoursesinprogress")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMandatoryMyMandatoryPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("core.courses.nocoursesfuture")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMandatoryMyMandatoryPage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("core.courses.nocoursespast")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMandatoryMyMandatoryPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { tabsComponent: 0 }), core["_52" /* ɵqud */](402653184, 2, { searchbar: 0 }), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 4, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_31" /* ɵeld */](10, 16777216, null, 0, 2, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], app["b" /* CoreAppProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_11" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](14, 0, null, 2, 6, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](15, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMandatoryMyMandatoryPage_1)), core["_30" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](24, 0, null, null, 29, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](25, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n   \n    "])), (_l()(), core["_31" /* ɵeld */](27, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshMyOverview($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](28, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](30, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ɵdid */](31, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_31" /* ɵeld */](35, 0, null, 1, 17, "core-loading", [["class", "core-loading-center"]], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](36, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMandatoryMyMandatoryPage_2)), core["_30" /* ɵdid */](39, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMandatoryMyMandatoryPage_3)), core["_30" /* ɵdid */](42, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMandatoryMyMandatoryPage_4)), core["_30" /* ɵdid */](45, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ɵeld */](47, 0, null, 0, 4, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, null, 1, "core-courses-course-list-group", [["class", "madatory"]], null, null, null, course_list_group_ngfactory["b" /* View_CoreCoursesCourseListGroupComponent_0 */], course_list_group_ngfactory["a" /* RenderType_CoreCoursesCourseListGroupComponent */])), core["_30" /* ɵdid */](50, 245760, null, 0, course_list_group["a" /* CoreCoursesCourseListGroupComponent */], [platform["a" /* Platform */]], { categories: [0, "categories"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 11, 0, core["_44" /* ɵnov */](_v, 12).transform("addon.landing.mandatorycourse")), ""); _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.searchEnabled; _ck(_v, 19, 0, currVal_3); var currVal_8 = ((_co.timeline.loaded || _co.timelineCourses.loaded) || _co.courses.loaded); _ck(_v, 28, 0, currVal_8); var currVal_10 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 31, 0, core["_44" /* ɵnov */](_v, 32).transform("core.pulltorefresh")), ""); _ck(_v, 31, 0, currVal_10); var currVal_11 = _co.courses.loaded; _ck(_v, 36, 0, currVal_11); var currVal_12 = ((_co.courses[_co.courses.selected].length == 0) && (_co.courses.selected == "inprogress")); _ck(_v, 39, 0, currVal_12); var currVal_13 = ((_co.courses[_co.courses.selected].length == 0) && (_co.courses.selected == "future")); _ck(_v, 42, 0, currVal_13); var currVal_14 = ((_co.courses[_co.courses.selected].length == 0) && (_co.courses.selected == "past")); _ck(_v, 45, 0, currVal_14); var currVal_15 = _co.filteredCategory; _ck(_v, 50, 0, currVal_15); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_4 = core["_44" /* ɵnov */](_v, 25).statusbarPadding; var currVal_5 = core["_44" /* ɵnov */](_v, 25)._hasRefresher; _ck(_v, 24, 0, currVal_4, currVal_5); var currVal_6 = (core["_44" /* ɵnov */](_v, 28).state !== "inactive"); var currVal_7 = core["_44" /* ɵnov */](_v, 28)._top; _ck(_v, 27, 0, currVal_6, currVal_7); var currVal_9 = core["_44" /* ɵnov */](_v, 31).r.state; _ck(_v, 30, 0, currVal_9); }); }
function View_AddonMandatoryMyMandatoryPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-mandatory-my-mandatory", [], null, null, null, View_AddonMandatoryMyMandatoryPage_0, RenderType_AddonMandatoryMyMandatoryPage)), core["_30" /* ɵdid */](1, 180224, null, 0, my_mandatory_AddonMandatoryMyMandatoryPage, [dom["b" /* CoreDomUtilsProvider */], landing["a" /* AddonLandingProvider */], providers_courses["b" /* CoreCoursesProvider */], utils["b" /* CoreUtilsProvider */], timeline["a" /* AddonBlockTimelineProvider */], sites["b" /* CoreSitesProvider */], helper["b" /* CoreCourseHelperProvider */], options_delegate["a" /* CoreCourseOptionsDelegate */], events["b" /* CoreEventsProvider */], nav_controller["a" /* NavController */], app["b" /* CoreAppProvider */]], null, null)], null, null); }
var AddonMandatoryMyMandatoryPageNgFactory = core["_27" /* ɵccf */]("page-addon-mandatory-my-mandatory", my_mandatory_AddonMandatoryMyMandatoryPage, View_AddonMandatoryMyMandatoryPage_Host_0, {}, {}, []);

//# sourceMappingURL=my-mandatory.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/mandatory/pages/my-mandatory/my-mandatory.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMandatoryMyMandatoryPageModuleNgFactory", function() { return AddonMandatoryMyMandatoryPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































var AddonMandatoryMyMandatoryPageModuleNgFactory = core["_28" /* ɵcmf */](my_mandatory_module_AddonMandatoryMyMandatoryPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], course_options_menu_ngfactory["a" /* CoreCoursesCourseOptionsMenuComponentNgFactory */], AddonMandatoryMyMandatoryPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreCoursesComponentsModule */], components_module["a" /* CoreCoursesComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, my_mandatory_module_AddonMandatoryMyMandatoryPageModule, my_mandatory_module_AddonMandatoryMyMandatoryPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], my_mandatory_AddonMandatoryMyMandatoryPage, [])]); });

//# sourceMappingURL=my-mandatory.module.ngfactory.js.map

/***/ }),

/***/ 2193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreCoursesCourseListGroupComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreCoursesCourseListGroupComponent_0;
/* unused harmony export View_CoreCoursesCourseListGroupComponent_Host_0 */
/* unused harmony export CoreCoursesCourseListGroupComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_icon_icon__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_grid_col__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_label_label__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_grid_grid__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_grid_row__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__course_progress_course_progress_ngfactory__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__course_progress_course_progress__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_nav_controller__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__course_providers_helper__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__course_providers_course__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_events__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_sites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_courses__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_popover_popover_controller__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_providers_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__course_list_group__ = __webpack_require__(1584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__ = __webpack_require__(16);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_CoreCoursesCourseListGroupComponent = [];
var RenderType_CoreCoursesCourseListGroupComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCoursesCourseListGroupComponent, data: { "animation": [{ type: 7, name: "openCloseGroup", definitions: [{ type: 1, expr: "closed => open", animation: [{ type: 4, styles: null, timings: "0.1s" }], options: null }], options: {} }, { type: 7, name: "openCloseCourse", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: { display: "block" }, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { display: "none" }, offset: null }, options: undefined }, { type: 1, expr: "closed => open", animation: [{ type: 4, styles: null, timings: "0.1s" }], options: null }], options: {} }] } });

function View_CoreCoursesCourseListGroupComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCoursesCourseListGroupComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null); }
function View_CoreCoursesCourseListGroupComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](1, 0, null, null, 0, "div", [["class", "thumb-category"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.description; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreCoursesCourseListGroupComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](1, 0, null, null, 4, "div", [["class", "thumb-category"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](3, 0, null, null, 1, "ion-icon", [["name", "ios-photos"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](4, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_1 = "ios-photos"; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵnov */](_v, 4)._hidden; _ck(_v, 3, 0, currVal_0); }); }
function View_CoreCoursesCourseListGroupComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](0, 0, null, null, 13, "ion-col", [["class", "col"], ["col-3", ""], ["col-sm", ""]], [[8, "title", 0], [8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showContent(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_grid_col__["a" /* Col */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            \n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListGroupComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"], ngIfElse: [2, "ngIfElse"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](0, [["description", 2]], null, 0, null, View_CoreCoursesCourseListGroupComponent_5)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](0, [["noDescription", 2]], null, 0, null, View_CoreCoursesCourseListGroupComponent_6)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](10, 0, null, null, 2, "ion-label", [["class", "title-category"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](12, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.description; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵnov */](_v, 6); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵnov */](_v, 8); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵinlineInterpolate */](1, "", _v.context.$implicit.name, ""); var currVal_1 = (_v.context.$implicit.selected ? "active" : _v.context.$implicit.iconClassString); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _v.context.$implicit.name; _ck(_v, 12, 0, currVal_5); }); }
function View_CoreCoursesCourseListGroupComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](1, 0, null, null, 9, "ion-grid", [["class", "tab-category grid"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_grid_grid__["a" /* Grid */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](4, 0, null, null, 5, "ion-row", [["class", "row"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_grid_row__["a" /* Row */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListGroupComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](8, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categories; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreCoursesCourseListGroupComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "course-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](2, 0, null, null, 1, "core-courses-course-progress", [], null, null, null, __WEBPACK_IMPORTED_MODULE_8__course_progress_course_progress_ngfactory__["b" /* View_CoreCoursesCourseProgressComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__course_progress_course_progress_ngfactory__["a" /* RenderType_CoreCoursesCourseProgressComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](3, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__course_progress_course_progress__["a" /* CoreCoursesCourseProgressComponent */], [[2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_11__course_providers_helper__["b" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_13__course_providers_course__["b" /* CoreCourseProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_courses__["b" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_popover_popover_controller__["a" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_18__user_providers_user__["b" /* CoreUserProvider */]], { course: [0, "course"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_CoreCoursesCourseListGroupComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](0, 0, null, null, 7, "div", [["class", "item-group-category"]], [[24, "@openCloseCourse", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](2, 0, null, null, 4, "div", [["class", "list-course"], ["id", "wrap-course"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListGroupComponent_8)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](5, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["  \n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.courses; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.selected ? "open" : "closed"); _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesCourseListGroupComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListGroupComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](0, [["blockcategory", 2]], null, 0, null, View_CoreCoursesCourseListGroupComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_55" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListGroupComponent_7)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](6, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.categories && (_co.categories.length > 2)); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵnov */](_v, 3); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.categories; _ck(_v, 6, 0, currVal_2); }, null); }
function View_CoreCoursesCourseListGroupComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵeld */](0, 0, null, null, 1, "core-courses-course-list-group", [], null, null, null, View_CoreCoursesCourseListGroupComponent_0, RenderType_CoreCoursesCourseListGroupComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵdid */](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_19__course_list_group__["a" /* CoreCoursesCourseListGroupComponent */], [__WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreCoursesCourseListGroupComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵccf */]("core-courses-course-list-group", __WEBPACK_IMPORTED_MODULE_19__course_list_group__["a" /* CoreCoursesCourseListGroupComponent */], View_CoreCoursesCourseListGroupComponent_Host_0, { categories: "categories" }, {}, []);

//# sourceMappingURL=course-list-group.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=29.js.map