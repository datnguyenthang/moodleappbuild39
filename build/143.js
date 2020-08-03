webpackJsonp([143],{

/***/ 2014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonEvaluateInputInfoPagePageModule", function() { return AddonEvaluateInputInfoPagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_info__ = __webpack_require__(2181);
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








var AddonEvaluateInputInfoPagePageModule = /** @class */ (function () {
    function AddonEvaluateInputInfoPagePageModule() {
    }
    AddonEvaluateInputInfoPagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__input_info__["a" /* AddonEvaluateInputInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__input_info__["a" /* AddonEvaluateInputInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonEvaluateInputInfoPagePageModule);
    return AddonEvaluateInputInfoPagePageModule;
}());

//# sourceMappingURL=input-info.module.js.map

/***/ }),

/***/ 2181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonEvaluateInputInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_courses_providers_courses__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_user_providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addon_block_timeline_providers_timeline__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_course_providers_helper__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_course_providers_options_delegate__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_evaluate__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(1);
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
var AddonEvaluateInputInfoPage = /** @class */ (function () {
    function AddonEvaluateInputInfoPage(domUtils, coursesProvider, utils, myOverviewProvider, sitesProvider, courseHelper, courseOptionsDelegate, eventsProvider, navCtrl, appProvider, evaluateProvider, fb, translate, alertController, navParams, data, userProvider) {
        var _this = this;
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.utils = utils;
        this.myOverviewProvider = myOverviewProvider;
        this.sitesProvider = sitesProvider;
        this.courseHelper = courseHelper;
        this.courseOptionsDelegate = courseOptionsDelegate;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertController = alertController;
        this.data = data;
        this.userProvider = userProvider;
        this.pageLoaded = false;
        this.boxClass = '';
        this.prefetchIconsInitialized = false;
        this.courseIds = '';
        this.evaluateProvider = evaluateProvider;
        this.loadSiteInfo();
        this.userProvider.getProfile(this.sitesProvider.getCurrentSiteUserId(), 1).then(function (user) {
            _this.credForm.controls['fullname'].setValue(user.fullname);
            _this.credForm.controls['email'].setValue(user.email);
        });
        this.credForm = fb.group({
            coursecode: ['', __WEBPACK_IMPORTED_MODULE_14__angular_forms__["h" /* Validators */].required],
            fullname: [''],
            email: [''],
            cmnd: ['']
        });
        this.boxClass = 'box box-bg';
        this.evaluateCode = navParams.get('evaluateCode');
        this.credForm.controls['coursecode'].setValue(this.evaluateCode);
        // this.events.subscribe('scanner:evaluateCode',(evaluateCode)=>{
        //     console.log(evaluateCode);
        //     this.credForm.controls['coursecode'].setValue(evaluateCode);  
        // });
    }
    /**
     * View loaded.
     */
    AddonEvaluateInputInfoPage.prototype.ionViewDidLoad = function () {
        // if (window['globalVariable'] && window['globalVariable'].evaluateCode) {
        //     // console.log(window['globalVariable'])
        //     this.credForm.controls['coursecode'].setValue(window['globalVariable'].evaluateCode);  
        //     window['globalVariable'].evaluateCode = '';
        // }
        // this.data.currentMessage.subscribe( (message) => {
        //     console.log(message);
        // });
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
        this.pageLoaded = true;
    };
    AddonEvaluateInputInfoPage.prototype.ionViewWillEnter = function () {
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
    };
    AddonEvaluateInputInfoPage.prototype.ionViewDidEnter = function () {
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
    };
    AddonEvaluateInputInfoPage.prototype.focusInSelect = function () {
        this.boxClass = 'box';
    };
    AddonEvaluateInputInfoPage.prototype.focusOutSelect = function () {
        this.boxClass = 'box box-bg';
    };
    AddonEvaluateInputInfoPage.prototype.checkcode = function () {
        var _this = this;
        var coursecode = this.credForm.value.coursecode;
        var fullname = this.credForm.value.fullname;
        var email = this.credForm.value.email;
        var cmnd = this.credForm.value.cmnd;
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.evaluateProvider.checkCourseCode(null, coursecode).then(function (data) {
            var status = Boolean(data['status']);
            if (status == true) {
                var detail = data['detail'];
                _this.navCtrl.push('AddonEvaluateSubmitEvaluatePage', { coursecode: coursecode, fullname: fullname, email: email, cmnd: cmnd, detail: detail });
            }
            else {
                _this.domUtils.showErrorModal(_this.translate.instant('addon.evaluate.messagecoursecodeinvalid'), true);
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error, true);
        }).finally(function () {
            modal.dismiss();
        });
        return;
    };
    /**
     * Load the site info.
     */
    AddonEvaluateInputInfoPage.prototype.loadSiteInfo = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
        this.siteUrl = this.sitesProvider.getCurrentSite().getInfo().siteurl;
    };
    /**
     * Component being initialized.
     */
    AddonEvaluateInputInfoPage.prototype.ngOnInit = function () {
        if (this.data.getOrigin() == 'scanner') {
            this.credForm.controls['coursecode'].setValue(this.data.getData());
        }
    };
    /**
     * Page destroyed.
     */
    AddonEvaluateInputInfoPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_13__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonEvaluateInputInfoPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Searchbar */])
    ], AddonEvaluateInputInfoPage.prototype, "searchbar", void 0);
    AddonEvaluateInputInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-evaluate-input-info',template:/*ion-inline-start:"D:\Project\ATS\moodleapp\src\addon\evaluate\pages\input-info\input-info.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title (click)="exitQR()"><core-format-text [text]="siteName"></core-format-text></ion-title>\n        <ion-buttons end>\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="core-center-view">\n    <div class="box" ion-fixed >\n        <form ion-list [formGroup]="credForm" (ngSubmit)="checkcode()">\n            <div text-wrap text-center margin-bottom>\n                <h3>{{ \'addon.evaluate.evaluate\' | translate }}</h3>\n            </div>\n            <div class="inputs-control">\n                <ion-item>\n                    <ion-input type="text" name="coursecode" placeholder="{{ \'addon.evaluate.coursecode\' | translate }}" formControlName="coursecode" autocapitalize="none" autocorrect="off"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="text" name="fullname" placeholder="{{ \'addon.evaluate.fullname\' | translate }}" formControlName="fullname" autocapitalize="none" autocorrect="off"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="text" name="email" placeholder="{{ \'addon.evaluate.email\' | translate }}" formControlName="email" autocapitalize="none" autocorrect="off" ></ion-input>\n                </ion-item>\n                <ion-item margin-bottom>\n                    <ion-input type="text" name="cmnd" placeholder="{{ \'addon.evaluate.cmnd\' | translate }}" formControlName="cmnd" autocapitalize="none" autocorrect="off" ></ion-input>\n                </ion-item>\n                <button ion-button block [disabled]="!credForm.valid">{{ \'addon.evaluate.btnnext\' | translate }}</button> \n            </div>\n            <img class="thumbs-evaluate" src="assets/img/thumbs-evaluate.svg">\n        </form>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Project\ATS\moodleapp\src\addon\evaluate\pages\input-info\input-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__core_courses_providers_courses__["b" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__addon_block_timeline_providers_timeline__["a" /* AddonBlockTimelineProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_11__core_course_providers_helper__["b" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_12__core_course_providers_options_delegate__["a" /* CoreCourseOptionsDelegate */],
            __WEBPACK_IMPORTED_MODULE_6__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_evaluate__["a" /* AddonEvaluateProvider */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__core_user_providers_user__["b" /* CoreUserProvider */]])
    ], AddonEvaluateInputInfoPage);
    return AddonEvaluateInputInfoPage;
}());

//# sourceMappingURL=input-info.js.map

/***/ })

});
//# sourceMappingURL=143.js.map