webpackJsonp([4],{

/***/ 2015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonEvaluateSubmitEvaluatePagePageModule", function() { return AddonEvaluateSubmitEvaluatePagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__submit_evaluate__ = __webpack_require__(2182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic3_star_rating__ = __webpack_require__(2183);
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









var AddonEvaluateSubmitEvaluatePagePageModule = /** @class */ (function () {
    function AddonEvaluateSubmitEvaluatePagePageModule() {
    }
    AddonEvaluateSubmitEvaluatePagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__submit_evaluate__["a" /* AddonEvaluateSubmitEvaluatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__submit_evaluate__["a" /* AddonEvaluateSubmitEvaluatePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonEvaluateSubmitEvaluatePagePageModule);
    return AddonEvaluateSubmitEvaluatePagePageModule;
}());

//# sourceMappingURL=submit-evaluate.module.js.map

/***/ }),

/***/ 2169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);



var HTML_TEMPLATE = "\n<div class=\"ionic3-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic3-star-rating .button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n    }\n";
var StarRating = (function () {
    function StarRating(events) {
        this.events = events;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic
            };
        })();
        this.ratingChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    StarRating.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StarRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StarRating.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent
        this.events.publish("star-rating:changed", this.rating); //common event for all instances included for backwards compatibility
        this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    StarRating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */], args: [{
                    selector: 'ionic3-star-rating',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE],
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                            useExisting: StarRating,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    StarRating.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], },
    ]; };
    StarRating.propDecorators = {
        "rating": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "ratingChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "readonly": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "activeColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "defaultColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "activeIcon": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "defaultIcon": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "halfIcon": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "halfStar": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "maxRating": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "fontSize": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    };
    return StarRating;
}());

//# sourceMappingURL=ionic3-star-rating-component.js.map

/***/ }),

/***/ 2182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonEvaluateSubmitEvaluatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_evaluate__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_app_app__ = __webpack_require__(56);
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
var AddonEvaluateSubmitEvaluatePage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonEvaluateSubmitEvaluatePage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Searchbar */])
    ], AddonEvaluateSubmitEvaluatePage.prototype, "searchbar", void 0);
    AddonEvaluateSubmitEvaluatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-evaluate-submit-evaluate',template:/*ion-inline-start:"D:\Project\ATS\moodleapp\src\addon\evaluate\pages\submit-evaluate\submit-evaluate.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n        <ion-buttons end>\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="core-center-view">\n    <core-loading [hideUntil]="pageLoaded">\n        <div>\n            <div text-wrap text-center margin-bottom>\n                <h2>{{ \'addon.evaluate.evaluate\' | translate }}</h2>\n            </div>\n\n            <form ion-list>\n                    <h6>{{ \'addon.evaluate.courseinfo\' | translate }}</h6>\n                <div  class="box">\n                    \n                    <ion-item>\n                        <ion-label stacked>{{ \'addon.evaluate.coursecode\' | translate }}</ion-label>\n                        <ion-label>{{ coursecode }}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked>{{ \'addon.evaluate.coursename\' | translate }}</ion-label>\n                        <ion-label>{{ evaluateQuestion[\'coursename\'] }}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked>{{ \'addon.evaluate.coursestartdate\' | translate }}</ion-label>\n                        <ion-label>{{ evaluateQuestion[\'timestart\'] }}</ion-label>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label stacked>{{ \'addon.evaluate.fullname\' | translate }}</ion-label>\n                        <ion-label>{{ fullname }}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked>{{ \'addon.evaluate.email\' | translate }}</ion-label>\n                        <ion-label>{{ email }}</ion-label>\n                    </ion-item>\n                    <ion-item class="item-no-border">\n                        <ion-label stacked>{{ \'addon.evaluate.cmnd\' | translate }}</ion-label>\n                        <ion-label>{{ cmnd }}</ion-label>\n                    </ion-item>\n                </div>\n                <h6>{{ \'addon.evaluate.evaluatequestion\' | translate }}</h6>\n                <div  class="box">\n                    \n                    <div *ngFor="let question of evaluateQuestion[\'questions\'][\'type1\']" >\n                        <ion-item>\n                            <span>{{ question.content }}</span>\n                            <ionic3-star-rating id="{{ \'rating_\' + question.id }}" activeIcon = "ios-star"\n                                                defaultIcon = "ios-star-outline"\n                                                activeColor = "#008446"\n                                                defaultColor = "#008446"\n                                                readonly = "false"\n                                                [rating] = "3">\n                            </ionic3-star-rating>\n                        </ion-item>\n                    </div>\n\n                    <ion-item class="item-no-border">\n                        <ion-label>{{ evaluateQuestion[\'questions\'][\'type2\'][0].content }}</ion-label>\n                    </ion-item>\n                    \n                    <div *ngFor="let question of evaluateQuestion[\'questions\'][\'type2\']" >\n                        <ion-item class="type_2">\n                            <span>{{ question.trainer_name }}</span>\n                            <ionic3-star-rating id="{{ \'rating_\' + question.id }}" activeIcon = "ios-star"\n                                                defaultIcon = "ios-star-outline"\n                                                activeColor = "#008446"\n                                                defaultColor = "#008446"\n                                                readonly = "false"\n                                                [rating] = "3">\n                            </ionic3-star-rating>\n                        </ion-item>\n                    </div>\n\n                    <div *ngFor="let question of evaluateQuestion[\'questions\'][\'type3\']; let lst = last;" >\n                        <ion-item>\n                            <ion-label>{{ question.content }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngIf="lst" class="item-no-border">\n                            <ion-textarea rows="3" id="{{ \'comment_\' + question.id }}" placeholder="{{ \'addon.evaluate.placeholdercomment\' | translate }}"></ion-textarea>\n                        </ion-item>\n                        <ion-item *ngIf="!lst">\n                            <ion-textarea rows="3" id="{{ \'comment_\' + question.id }}" placeholder="{{ \'addon.evaluate.placeholdercomment\' | translate }}"></ion-textarea>\n                        </ion-item>\n                    </div>\n\n                </div>\n                <button ion-button block (click)="submitEvaluate()">{{ \'addon.evaluate.btnsubmit\' | translate }}</button>\n            </form>\n        </div>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"D:\Project\ATS\moodleapp\src\addon\evaluate\pages\submit-evaluate\submit-evaluate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_evaluate__["a" /* AddonEvaluateProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_app_app__["a" /* App */]])
    ], AddonEvaluateSubmitEvaluatePage);
    return AddonEvaluateSubmitEvaluatePage;
}());

//# sourceMappingURL=submit-evaluate.js.map

/***/ }),

/***/ 2183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic3_star_rating_module__ = __webpack_require__(2184);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic3_star_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__ = __webpack_require__(2169);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__ = __webpack_require__(2169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);



var StarRatingModule = (function () {
    function StarRatingModule() {
    }
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule,
        };
    };
    StarRatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */]
                    ],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__["a" /* StarRating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__["a" /* StarRating */]
                    ]
                },] },
    ];
    /** @nocollapse */
    StarRatingModule.ctorParameters = function () { return []; };
    return StarRatingModule;
}());

//# sourceMappingURL=ionic3-star-rating.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map