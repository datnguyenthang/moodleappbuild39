webpackJsonp([57],{

/***/ 2176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./src/classes/site.ts
var classes_site = __webpack_require__(57);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(41);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var utils_url = __webpack_require__(22);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/config.ts
var config = __webpack_require__(128);

// EXTERNAL MODULE: ./src/configconstants.ts
var configconstants = __webpack_require__(115);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/singletons/url.ts
var singletons_url = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// CONCATENATED MODULE: ./src/core/login/pages/site/site.ts
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
 * Page to enter or select the site URL to connect to.
 */
var site_CoreLoginSitePage = /** @class */ (function () {
    function CoreLoginSitePage(navParams, navCtrl, fb, appProvider, sitesProvider, loginHelper, modalCtrl, alertCtrl, urlUtils, domUtils, eventsProvider, translate, utils, urlSchemesProvider, textUtils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.urlUtils = urlUtils;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.translate = translate;
        this.utils = utils;
        this.urlSchemesProvider = urlSchemesProvider;
        this.textUtils = textUtils;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
        this.showKeyboard = !!navParams.get('showKeyboard');
        var url = '';
        this.siteSelector = configconstants["a" /* CoreConfigConstants */].multisitesdisplay;
        // Load fixed sites if they're set.
        if (this.loginHelper.hasSeveralFixedSites()) {
            this.fixedSites = this.loginHelper.getFixedSites();
            // Autoselect if not defined.
            if (['list', 'listnourl', 'select', 'buttons'].indexOf(this.siteSelector) < 0) {
                this.siteSelector = this.fixedSites.length > 8 ? 'list' : (this.fixedSites.length > 3 ? 'select' : 'buttons');
            }
            this.filteredSites = this.fixedSites;
            url = this.fixedSites[0].url;
        }
        else if (configconstants["a" /* CoreConfigConstants */].enableonboarding && !this.appProvider.isIOS() && !this.appProvider.isMac()) {
            config["a" /* CoreConfig */].instance.get(helper["a" /* CoreLoginHelperProvider */].ONBOARDING_DONE, false).then(function (onboardingDone) {
                if (!onboardingDone) {
                    // Check onboarding.
                    _this.showOnboarding();
                }
            });
        }
        this.showScanQR = this.utils.canScanQR() && (typeof configconstants["a" /* CoreConfigConstants */]['displayqronsitescreen'] == 'undefined' ||
            !!configconstants["a" /* CoreConfigConstants */]['displayqronsitescreen']);
        this.siteForm = fb.group({
            siteUrl: [url, this.moodleUrlValidator()]
        });
        this.searchFnc = this.utils.debounce(function (search) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        search = search.trim();
                        if (!(search.length >= 3)) return [3 /*break*/, 2];
                        // Update the sites list.
                        _a = this;
                        return [4 /*yield*/, this.sitesProvider.findSites(search)];
                    case 1:
                        // Update the sites list.
                        _a.sites = _b.sent();
                        // UI tweaks.
                        this.sites.forEach(function (site) {
                            site.noProtocolUrl = singletons_url["a" /* CoreUrl */].removeProtocol(site.url);
                            site.country = _this.utils.getCountryName(site.countrycode);
                        });
                        this.hasSites = !!this.sites.length;
                        return [3 /*break*/, 3];
                    case 2:
                        // Not reseting the array to allow animation to be displayed.
                        this.hasSites = false;
                        _b.label = 3;
                    case 3:
                        this.loadingSites = false;
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     */
    CoreLoginSitePage.prototype.connect = function (e, url, foundSite) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.appProvider.closeKeyboard();
        if (!url) {
            this.domUtils.showErrorModal('core.login.siteurlrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        url = url.trim();
        if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
            this.showLoginIssue(null, this.translate.instant('core.login.errorexampleurl'));
            return;
        }
        var modal = this.domUtils.showModalLoading(), siteData = this.sitesProvider.getDemoSiteData(url);
        if (siteData) {
            // It's a demo site.
            this.sitesProvider.getUserToken(siteData.url, siteData.username, siteData.password).then(function (data) {
                return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function () {
                    _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                    return _this.loginHelper.goToSiteInitialPage();
                }, function (error) {
                    _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                    if (error.loggedout) {
                        _this.navCtrl.setRoot('CoreLoginSitesPage');
                    }
                });
            }, function (error) {
                _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _this.navCtrl.setRoot('CoreLoginSitesPage');
                }
            }).finally(function () {
                modal.dismiss();
            });
        }
        else {
            // Not a demo site.
            this.sitesProvider.checkSite(url)
                .catch(function (error) {
                // Attempt guessing the domain if the initial check failed
                var domain = singletons_url["a" /* CoreUrl */].guessMoodleDomain(url);
                if (domain && domain != url) {
                    return _this.sitesProvider.checkSite(domain).catch(function (secondError) {
                        // Try to use the first error.
                        return Promise.reject(error || secondError);
                    });
                }
                return Promise.reject(error);
            })
                .then(function (result) { return _this.login(result, foundSite); })
                .catch(function (error) { return _this.showLoginIssue(url, error); })
                .finally(function () { return modal.dismiss(); });
        }
    };
    /**
     * The filter has changed.
     *
     * @param Received Event.
     */
    CoreLoginSitePage.prototype.filterChanged = function (event) {
        var newValue = event.target.value && event.target.value.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter(function (site) {
                return site.name.toLowerCase().indexOf(newValue) > -1 || site.url.toLowerCase().indexOf(newValue) > -1;
            });
        }
    };
    /**
     * Show a help modal.
     */
    CoreLoginSitePage.prototype.showHelp = function () {
        var modal = this.modalCtrl.create('CoreLoginSiteHelpPage', {}, { cssClass: 'core-modal-fullscreen' });
        modal.present();
    };
    /**
     * Show an onboarding modal.
     */
    CoreLoginSitePage.prototype.showOnboarding = function () {
        var modal = this.modalCtrl.create('CoreLoginSiteOnboardingPage', {}, { cssClass: 'core-modal-fullscreen' });
        modal.present();
    };
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    CoreLoginSitePage.prototype.showLoginIssue = function (url, error) {
        var _this = this;
        error = this.domUtils.getErrorMessage(error);
        if (error == this.translate.instant('core.cannotconnecttrouble')) {
            var found = this.sites.find(function (site) { return site.url == url; });
            if (!found) {
                error += ' ' + this.translate.instant('core.cannotconnectverify');
            }
        }
        var message = '<p>' + error + '</p>';
        if (url) {
            var fullUrl = this.urlUtils.isAbsoluteURL(url) ? url : 'https://' + url;
            message += '<p padding><a href="' + fullUrl + '" core-link>' + url + '</a></p>';
        }
        var buttons = [
            {
                text: this.translate.instant('core.needhelp'),
                handler: function () {
                    _this.showHelp();
                }
            },
            {
                text: this.translate.instant('core.tryagain'),
                role: 'cancel'
            }
        ];
        // @TODO: Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
        this.domUtils.showAlertWithOptions({
            title: this.translate.instant('core.cannotconnect', { $a: classes_site["a" /* CoreSite */].MINIMUM_MOODLE_VERSION }),
            message: message,
            buttons: buttons,
        });
    };
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    CoreLoginSitePage.prototype.searchSite = function (e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                noProtocolUrl: singletons_url["a" /* CoreUrl */].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = null;
        }
        this.searchFnc(search.trim());
    };
    /**
     * Get the demo data for a certain "name" if it is a demo site.
     *
     * @param name Name of the site to check.
     * @return Site data if it's a demo site, undefined otherwise.
     */
    CoreLoginSitePage.prototype.getDemoSiteData = function (name) {
        var demoSites = configconstants["a" /* CoreConfigConstants */].demo_sites;
        if (typeof demoSites != 'undefined' && typeof demoSites[name] != 'undefined') {
            return demoSites[name];
        }
    };
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @return Promise resolved after logging in.
     */
    CoreLoginSitePage.prototype.login = function (response, foundSite) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sitesProvider.checkRequiredMinimumVersion(response.config).then(function () {
                        _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                        if (response.warning) {
                            _this.domUtils.showErrorModal(response.warning, true, 4000);
                        }
                        if (_this.loginHelper.isSSOLoginNeeded(response.code)) {
                            // SSO. User needs to authenticate in a browser.
                            _this.loginHelper.confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, response.config && response.config.launchurl);
                        }
                        else {
                            var pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                            if (foundSite) {
                                pageParams['siteName'] = foundSite.name;
                                pageParams['logoUrl'] = foundSite.imageurl;
                            }
                            _this.navCtrl.push('CoreLoginCredentialsPage', pageParams);
                        }
                    }).catch(function () {
                        // Ignore errors.
                    })];
            });
        });
    };
    /**
     * Validate Url.
     *
     * @return {ValidatorFn} Validation results.
     */
    CoreLoginSitePage.prototype.moodleUrlValidator = function () {
        var _this = this;
        return function (control) {
            var value = control.value.trim();
            var valid = value.length >= 3 && singletons_url["a" /* CoreUrl */].isValidMoodleUrl(value);
            if (!valid) {
                var demo = !!_this.getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    };
    /**
     * Show instructions and scan QR code.
     */
    CoreLoginSitePage.prototype.showInstructionsAndScanQR = function () {
        var _this = this;
        // Show some instructions first.
        this.domUtils.showAlertWithOptions({
            title: this.translate.instant('core.login.faqwhereisqrcode'),
            message: this.translate.instant('core.login.faqwhereisqrcodeanswer', { $image: helper["a" /* CoreLoginHelperProvider */].FAQ_QRCODE_IMAGE_HTML }),
            buttons: [
                {
                    text: this.translate.instant('core.cancel'),
                    role: 'cancel'
                },
                {
                    text: this.translate.instant('core.next'),
                    handler: function () {
                        _this.scanQR();
                    }
                },
            ],
        });
    };
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @return Promise resolved when done.
     */
    CoreLoginSitePage.prototype.scanQR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.scanQR()];
                    case 1:
                        text = _a.sent();
                        if (!text) return [3 /*break*/, 7];
                        if (!this.urlSchemesProvider.isCustomURL(text)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.urlSchemesProvider.handleCustomURL(text)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1 && error_1.data && error_1.data.isAuthenticationURL && error_1.data.siteUrl) {
                            // An error ocurred, but it's an authentication URL and we have the site URL.
                            this.treatErrorInAuthenticationCustomURL(text, error_1);
                        }
                        else {
                            this.urlSchemesProvider.treatHandleCustomURLError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        // Not a custom URL scheme, put the text in the field.
                        this.siteForm.controls.siteUrl.setValue(text);
                        this.connect(new Event('click'), text);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @return Promise resolved when done.
     */
    CoreLoginSitePage.prototype.treatErrorInAuthenticationCustomURL = function (customURL, error) {
        return __awaiter(this, void 0, void 0, function () {
            var siteUrl, modal, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteUrl = error.data.siteUrl;
                        modal = this.domUtils.showModalLoading();
                        // Set the site URL in the input.
                        this.siteForm.controls.siteUrl.setValue(siteUrl);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.sitesProvider.checkSite(siteUrl)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, this.sitesProvider.checkRequiredMinimumVersion(response.config)];
                    case 3:
                        _a.sent();
                        if (!!this.loginHelper.isSSOLoginNeeded(response.code)) return [3 /*break*/, 5];
                        // No SSO, go to credentials page.
                        return [4 /*yield*/, this.navCtrl.push('CoreLoginCredentialsPage', {
                                siteUrl: response.siteUrl,
                                siteConfig: response.config,
                            })];
                    case 4:
                        // No SSO, go to credentials page.
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_2 = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 8:
                        // Now display the error.
                        error.error = this.textUtils.addTextToError(error.error, '<br><br>' + this.translate.instant('core.login.youcanstillconnectwithcredentials'));
                        this.urlSchemesProvider.treatHandleCustomURLError(error);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(core["_9" /* ViewChild */])('siteFormEl'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], CoreLoginSitePage.prototype, "formElement", void 0);
    CoreLoginSitePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-login-site',
            templateUrl: 'site.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["u" /* NavParams */],
            ionic_angular["t" /* NavController */],
            esm5_forms["d" /* FormBuilder */],
            app["b" /* CoreAppProvider */],
            sites["b" /* CoreSitesProvider */],
            helper["a" /* CoreLoginHelperProvider */],
            ionic_angular["r" /* ModalController */],
            ionic_angular["b" /* AlertController */],
            utils_url["b" /* CoreUrlUtilsProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            events["b" /* CoreEventsProvider */],
            _ngx_translate_core["c" /* TranslateService */],
            utils_utils["b" /* CoreUtilsProvider */],
            urlschemes["b" /* CoreCustomURLSchemesProvider */],
            utils_text["b" /* CoreTextUtilsProvider */]])
    ], CoreLoginSitePage);
    return CoreLoginSitePage;
}());

//# sourceMappingURL=site.js.map
// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// CONCATENATED MODULE: ./src/core/login/pages/site/site.module.ts
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
var site_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var site_module_CoreLoginSitePageModule = /** @class */ (function () {
    function CoreLoginSitePageModule() {
    }
    CoreLoginSitePageModule = site_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                site_CoreLoginSitePage
            ],
            imports: [
                directives_module["a" /* CoreDirectivesModule */],
                components_module["a" /* CoreComponentsModule */],
                ionic_angular["m" /* IonicPageModule */].forChild(site_CoreLoginSitePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginSitePageModule);
    return CoreLoginSitePageModule;
}());

//# sourceMappingURL=site.module.js.map
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
var config_config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(104);

// EXTERNAL MODULE: ./src/directives/auto-focus.ts
var auto_focus = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/thumbnail/thumbnail.js
var thumbnail = __webpack_require__(800);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/searchbar/searchbar.ngfactory.js
var searchbar_ngfactory = __webpack_require__(1619);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/searchbar/searchbar.js
var searchbar = __webpack_require__(396);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(215);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push.js
var nav_push = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(503);

// CONCATENATED MODULE: ./src/core/login/pages/site/site.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























































var styles_CoreLoginSitePage = [];
var RenderType_CoreLoginSitePage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginSitePage, data: {} });

function View_CoreLoginSitePage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 22, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 19, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 1, 4, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](10, 16384, [[3, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_31" /* ɵeld */](11, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](12, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, 3, 5, "ion-input", [["formControlName", "siteUrl"], ["name", "url"], ["placeholder", "https://campus.example.edu"], ["type", "url"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](16, 81920, null, 0, auto_focus["a" /* CoreAutoFocusDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], [2, nav_controller["a" /* NavController */]]], { coreAutoFocus: [0, "coreAutoFocus"] }, null), core["_30" /* ɵdid */](17, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](20, 5423104, null, 0, input["a" /* TextInput */], [config_config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = (_co.showKeyboard && !_co.showScanQR); _ck(_v, 16, 0, currVal_8); var currVal_9 = "siteUrl"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "url"; var currVal_11 = "https://campus.example.edu"; _ck(_v, 20, 0, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 12, 0, core["_44" /* ɵnov */](_v, 13).transform("core.login.siteaddress")); _ck(_v, 12, 0, currVal_0); var currVal_1 = core["_44" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_2 = core["_44" /* ɵnov */](_v, 19).ngClassTouched; var currVal_3 = core["_44" /* ɵnov */](_v, 19).ngClassPristine; var currVal_4 = core["_44" /* ɵnov */](_v, 19).ngClassDirty; var currVal_5 = core["_44" /* ɵnov */](_v, 19).ngClassValid; var currVal_6 = core["_44" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_7 = core["_44" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 15, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_CoreLoginSitePage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 21, "button", [["class", "core-login-entered-site item item-block"], ["detail-push", ""], ["ion-item", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.connect($event, _co.enteredSiteUrl.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 12, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 13, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 14, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 0, 5, "ion-thumbnail", [["item-start", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](9, 16384, null, 0, thumbnail["a" /* Thumbnail */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, null, 1, "core-icon", [["name", "fa-pencil"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](12, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config_config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, 2, 2, "h2", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](16, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), core["_31" /* ɵeld */](19, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](20, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "]))], function (_ck, _v) { var currVal_1 = "fa-pencil"; _ck(_v, 12, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 0, 0, core["_44" /* ɵnov */](_v, 6).transform("core.login.connect")); _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_56" /* ɵunv */](_v, 16, 0, core["_44" /* ɵnov */](_v, 17).transform("core.login.yourenteredsite")); _ck(_v, 16, 0, currVal_2); var currVal_3 = _co.enteredSiteUrl.noProtocolUrl; _ck(_v, 20, 0, currVal_3); }); }
function View_CoreLoginSitePage_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "div", [["class", "core-login-site-list-loading"]], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ɵdid */](2, 114688, null, 0, spinner["a" /* Spinner */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 2)._paused; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginSitePage_8(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, "img", [["onError", "this.src='assets/icon/icon.png'"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.imageurl; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreLoginSitePage_9(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, "img", [["class", "core-login-default-icon"], ["src", "assets/icon/icon.png"]], null, null, null, null, null))], null, null); }
function View_CoreLoginSitePage_10(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, [" (", ")"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.alias; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginSitePage_12(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", " - "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.city; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginSitePage_11(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 3, "p", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_12)), core["_30" /* ɵdid */](2, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.city; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.country; _ck(_v, 3, 0, currVal_1); }); }
function View_CoreLoginSitePage_7(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 27, "button", [["class", "item item-block"], ["detail-push", ""], ["ion-item", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.connect($event, _v.context.$implicit.url, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 15, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 16, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 17, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                                "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 8, "ion-thumbnail", [["item-start", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](8, 16384, null, 0, thumbnail["a" /* Thumbnail */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_8)), core["_30" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_9)), core["_30" /* ɵdid */](14, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                                "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, 2, 3, "h2", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](18, null, ["", ""])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_10)), core["_30" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                                "])), (_l()(), core["_31" /* ɵeld */](22, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](23, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                                "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginSitePage_11)), core["_30" /* ɵdid */](26, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                            "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.imageurl; _ck(_v, 11, 0, currVal_1); var currVal_2 = !_v.context.$implicit.imageurl; _ck(_v, 14, 0, currVal_2); var currVal_4 = _v.context.$implicit.alias; _ck(_v, 20, 0, currVal_4); var currVal_6 = (_v.context.$implicit.country || _v.context.$implicit.city); _ck(_v, 26, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.name; _ck(_v, 18, 0, currVal_3); var currVal_5 = _v.context.$implicit.noProtocolUrl; _ck(_v, 23, 0, currVal_5); }); }
function View_CoreLoginSitePage_13(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "div", [["class", "core-login-site-nolist-loading"]], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ɵdid */](2, 114688, null, 0, spinner["a" /* Spinner */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 2)._paused; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginSitePage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 51, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 19, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 1, 4, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](10, 16384, [[6, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_31" /* ɵeld */](11, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](12, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, 3, 5, "ion-input", [["formControlName", "siteUrl"], ["name", "url"], ["placeholder", "https://campus.example.edu"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionChange" === en)) {
        var pd_0 = (_co.searchSite($event, _co.siteForm.value.siteUrl) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](16, 81920, null, 0, auto_focus["a" /* CoreAutoFocusDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], [2, nav_controller["a" /* NavController */]]], { coreAutoFocus: [0, "coreAutoFocus"] }, null), core["_30" /* ɵdid */](17, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](20, 5423104, null, 0, input["a" /* TextInput */], [config_config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { placeholder: [0, "placeholder"] }, { ionChange: "ionChange" }), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), core["_31" /* ɵeld */](23, 0, null, null, 24, "ion-list", [["class", "core-login-site-list"]], [[2, "hidden", null]], null, null, null, null)), core["_30" /* ɵdid */](24, 16384, null, 0, list["a" /* List */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, null, 8, "ion-item", [["class", "core-login-site-list-title item item-block"], ["no-lines", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](27, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_30" /* ɵdid */](31, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_31" /* ɵeld */](32, 0, null, 2, 2, "h2", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](33, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_5)), core["_30" /* ɵdid */](37, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), core["_31" /* ɵeld */](39, 0, null, null, 7, "div", [["class", "core-login-site-list-found"]], [[2, "hidden", null], [2, "dimmed", null]], null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_6)), core["_30" /* ɵdid */](42, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_7)), core["_30" /* ɵdid */](45, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_13)), core["_30" /* ɵdid */](50, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = (_co.showKeyboard && !_co.showScanQR); _ck(_v, 16, 0, currVal_8); var currVal_9 = "siteUrl"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "https://campus.example.edu"; _ck(_v, 20, 0, currVal_10); var currVal_13 = _co.enteredSiteUrl; _ck(_v, 37, 0, currVal_13); var currVal_16 = _co.loadingSites; _ck(_v, 42, 0, currVal_16); var currVal_17 = _co.sites; _ck(_v, 45, 0, currVal_17); var currVal_18 = (!_co.hasSites && _co.loadingSites); _ck(_v, 50, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 12, 0, core["_44" /* ɵnov */](_v, 13).transform("core.login.siteaddress")); _ck(_v, 12, 0, currVal_0); var currVal_1 = core["_44" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_2 = core["_44" /* ɵnov */](_v, 19).ngClassTouched; var currVal_3 = core["_44" /* ɵnov */](_v, 19).ngClassPristine; var currVal_4 = core["_44" /* ɵnov */](_v, 19).ngClassDirty; var currVal_5 = core["_44" /* ɵnov */](_v, 19).ngClassValid; var currVal_6 = core["_44" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_7 = core["_44" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 15, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_11 = (!_co.hasSites && !_co.enteredSiteUrl); _ck(_v, 23, 0, currVal_11); var currVal_12 = core["_56" /* ɵunv */](_v, 33, 0, core["_44" /* ɵnov */](_v, 34).transform("core.login.selectsite")); _ck(_v, 33, 0, currVal_12); var currVal_14 = !_co.hasSites; var currVal_15 = _co.loadingSites; _ck(_v, 39, 0, currVal_14, currVal_15); }); }
function View_CoreLoginSitePage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_3)), core["_30" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_4)), core["_30" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.siteSelector == "url"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.siteSelector != "url"); _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreLoginSitePage_15(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, [[21, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreLoginSitePage_14(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 24, "ion-item", [["class", "item item-block"], ["margin-vertical", ""], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 18, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 19, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 20, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [["for", "siteSelect"], ["stacked", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](8, 16384, [[18, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 3, 11, "ion-select", [["formControlName", "siteUrl"], ["interface", "action-sheet"], ["name", "url"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 13)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 13)._keyup() !== false);
        ad = (pd_1 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_30" /* ɵdid */](13, 1228800, null, 1, select_select["a" /* Select */], [app_app["a" /* App */], util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { placeholder: [0, "placeholder"], interface: [1, "interface"] }, null), core["_52" /* ɵqud */](603979776, 21, { options: 1 }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_30" /* ɵdid */](17, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_30" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_15)), core["_30" /* ɵdid */](22, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 15).transform("core.login.siteaddress")), ""); var currVal_10 = "action-sheet"; _ck(_v, 13, 0, currVal_9, currVal_10); var currVal_11 = "siteUrl"; _ck(_v, 17, 0, currVal_11); var currVal_12 = _co.fixedSites; _ck(_v, 22, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.login.selectsite")); _ck(_v, 9, 0, currVal_0); var currVal_1 = core["_44" /* ɵnov */](_v, 13)._disabled; var currVal_2 = core["_44" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_3 = core["_44" /* ɵnov */](_v, 19).ngClassTouched; var currVal_4 = core["_44" /* ɵnov */](_v, 19).ngClassPristine; var currVal_5 = core["_44" /* ɵnov */](_v, 19).ngClassDirty; var currVal_6 = core["_44" /* ɵnov */](_v, 19).ngClassValid; var currVal_7 = core["_44" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_8 = core["_44" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CoreLoginSitePage_16(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["no-lines", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 24, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 2, 3, "button", [["block", ""], ["ion-button", ""], ["text-wrap", ""]], [[8, "disabled", 0]], null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](8, 1097728, [[23, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](9, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.siteForm.valid; _ck(_v, 7, 0, currVal_0); var currVal_2 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.login.connect")); _ck(_v, 9, 0, currVal_2); }); }
function View_CoreLoginSitePage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, [[1, 0], ["siteFormEl", 1]], null, 16, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.connect($event, _co.siteForm.value.siteUrl) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](2, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_30" /* ɵdid */](4, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_2)), core["_30" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_14)), core["_30" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_16)), core["_30" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.siteForm; _ck(_v, 2, 0, currVal_7); var currVal_8 = !_co.fixedSites; _ck(_v, 8, 0, currVal_8); var currVal_9 = (_co.fixedSites && (_co.siteSelector == "select")); _ck(_v, 12, 0, currVal_9); var currVal_10 = ((_co.fixedSites && (_co.siteSelector == "select")) || (!_co.fixedSites && (_co.siteSelector == "url"))); _ck(_v, 15, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 4).ngClassUntouched; var currVal_1 = core["_44" /* ɵnov */](_v, 4).ngClassTouched; var currVal_2 = core["_44" /* ɵnov */](_v, 4).ngClassPristine; var currVal_3 = core["_44" /* ɵnov */](_v, 4).ngClassDirty; var currVal_4 = core["_44" /* ɵnov */](_v, 4).ngClassValid; var currVal_5 = core["_44" /* ɵnov */](_v, 4).ngClassInvalid; var currVal_6 = core["_44" /* ɵnov */](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_CoreLoginSitePage_19(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 5, "ion-searchbar", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], [[null, "ngModelChange"], [null, "ionInput"], [null, "ionCancel"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.filter = $event) !== false);
        ad = (pd_0 && ad);
    } if (("ionInput" === en)) {
        var pd_1 = (_co.filterChanged($event) !== false);
        ad = (pd_1 && ad);
    } if (("ionCancel" === en)) {
        var pd_2 = (_co.filterChanged() !== false);
        ad = (pd_2 && ad);
    } return ad; }, searchbar_ngfactory["b" /* View_Searchbar_0 */], searchbar_ngfactory["a" /* RenderType_Searchbar */])), core["_30" /* ɵdid */](1, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ɵdid */](3, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](4, 1294336, null, 0, searchbar["a" /* Searchbar */], [config_config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, esm5_forms["m" /* NgControl */]]], { placeholder: [0, "placeholder"] }, { ionInput: "ionInput", ionCancel: "ionCancel" }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_13 = _co.filter; _ck(_v, 1, 0, currVal_13); var currVal_14 = core["_56" /* ɵunv */](_v, 4, 0, core["_44" /* ɵnov */](_v, 5).transform("core.login.findyoursite")); _ck(_v, 4, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 3).ngClassUntouched; var currVal_1 = core["_44" /* ɵnov */](_v, 3).ngClassTouched; var currVal_2 = core["_44" /* ɵnov */](_v, 3).ngClassPristine; var currVal_3 = core["_44" /* ɵnov */](_v, 3).ngClassDirty; var currVal_4 = core["_44" /* ɵnov */](_v, 3).ngClassValid; var currVal_5 = core["_44" /* ɵnov */](_v, 3).ngClassInvalid; var currVal_6 = core["_44" /* ɵnov */](_v, 3).ngClassPending; var currVal_7 = core["_44" /* ɵnov */](_v, 4)._animated; var currVal_8 = core["_44" /* ɵnov */](_v, 4)._value; var currVal_9 = core["_44" /* ɵnov */](_v, 4)._isActive; var currVal_10 = core["_44" /* ɵnov */](_v, 4)._showCancelButton; var currVal_11 = core["_44" /* ɵnov */](_v, 4)._shouldAlignLeft; var currVal_12 = core["_44" /* ɵnov */](_v, 4)._isFocus; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); }); }
function View_CoreLoginSitePage_21(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.url; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginSitePage_20(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 12, "ion-item", [["class", "item item-block"], ["detail-push", ""], ["text-wrap", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.connect($event, _v.context.$implicit.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 30, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](8, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginSitePage_21)), core["_30" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.siteSelector == "list"); _ck(_v, 11, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 8, 0, currVal_1); }); }
function View_CoreLoginSitePage_18(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 18, "ion-list", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 8, "ion-item", [["class", "item item-block"], ["no-lines", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 27, { _icons: 1 }), core["_30" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 2, "h2", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](10, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_19)), core["_30" /* ɵdid */](14, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_20)), core["_30" /* ɵdid */](17, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.fixedSites.length > 4); _ck(_v, 14, 0, currVal_1); var currVal_2 = _co.filteredSites; _ck(_v, 17, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("core.login.selectsite")); _ck(_v, 10, 0, currVal_0); }); }
function View_CoreLoginSitePage_23(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "a", [["block", ""], ["ion-button", ""], ["margin-bottom", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.connect($event, _v.context.$implicit.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](2, 0, ["", ""]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_2); }); }
function View_CoreLoginSitePage_22(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 2, "p", [["class", "padding no-padding-bottom"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](3, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_23)), core["_30" /* ɵdid */](7, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.fixedSites; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 3, 0, core["_44" /* ɵnov */](_v, 4).transform("core.login.selectsite")); _ck(_v, 3, 0, currVal_0); }); }
function View_CoreLoginSitePage_17(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_18)), core["_30" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_22)), core["_30" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.siteSelector == "list") || (_co.siteSelector == "listnourl")); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.siteSelector == "buttons"); _ck(_v, 8, 0, currVal_1); }, null); }
function View_CoreLoginSitePage_24(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 21, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 2, "div", [["class", "core-login-site-qrcode-separator"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](3, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, null, 14, "ion-item", [["class", "core-login-site-qrcode item item-block"], ["no-lines", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 31, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 32, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 33, { _icons: 1 }), core["_30" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 6, "a", [["block", ""], ["color", "light"], ["icon-start", ""], ["ion-button", ""], ["margin-top", ""], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showInstructionsAndScanQR() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](14, 1097728, [[32, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](16, 0, null, 0, 1, "core-icon", [["aria-hidden", "true"], ["name", "fa-qrcode"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](17, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config_config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](18, 0, ["\n                    ", "\n                "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = "light"; var currVal_2 = ""; _ck(_v, 14, 0, currVal_1, currVal_2); var currVal_3 = "fa-qrcode"; _ck(_v, 17, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 3, 0, core["_44" /* ɵnov */](_v, 4).transform("core.login.or")); _ck(_v, 3, 0, currVal_0); var currVal_4 = core["_56" /* ɵunv */](_v, 18, 0, core["_44" /* ɵnov */](_v, 19).transform("core.scanqr")); _ck(_v, 18, 0, currVal_4); }); }
function View_CoreLoginSitePage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](671088640, 1, { formElement: 0 }), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 26, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 22, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](10, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 12, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 7, "button", [["icon-only", ""], ["ion-button", ""], ["navPush", "CoreAppSettingsPage"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 19).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](18, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](19, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](22, 0, null, 0, 1, "core-icon", [["name", "fa-cogs"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ɵdid */](23, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config_config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](29, 0, null, null, 33, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](30, 4374528, null, 0, content["a" /* Content */], [config_config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](32, 0, null, 1, 29, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](34, 0, null, null, 3, "div", [["class", "core-login-site-logo"], ["margin-bottom", ""], ["padding", ""], ["text-center", ""]], [[2, "hidden", null]], null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](36, 0, null, null, 0, "img", [["class", "avatar-full login-logo"], ["role", "presentation"], ["src", "assets/img/login_logo.png"]], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_1)), core["_30" /* ɵdid */](40, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_17)), core["_30" /* ɵdid */](43, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginSitePage_24)), core["_30" /* ɵdid */](46, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, null, 11, "ion-list", [["margin-top", ""], ["no-lines", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](50, 16384, null, 0, list["a" /* List */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](52, 0, null, null, 7, "a", [["class", "core-login-need-help item item-block"], ["detail-none", ""], ["ion-item", ""], ["text-center", ""], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showHelp() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](53, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 34, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 35, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 36, { _icons: 1 }), core["_30" /* ɵdid */](57, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](58, 2, ["\n                ", "\n            "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_4 = "CoreAppSettingsPage"; _ck(_v, 19, 0, currVal_4); var currVal_5 = "fa-cogs"; _ck(_v, 23, 0, currVal_5); var currVal_9 = (!_co.fixedSites || (_co.siteSelector == "select")); _ck(_v, 40, 0, currVal_9); var currVal_10 = _co.fixedSites; _ck(_v, 43, 0, currVal_10); var currVal_11 = ((_co.showScanQR && !_co.hasSites) && !_co.enteredSiteUrl); _ck(_v, 46, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("core.login.connecttomoodle")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_56" /* ɵunv */](_v, 17, 0, core["_44" /* ɵnov */](_v, 20).transform("core.settings.appsettings")); _ck(_v, 17, 0, currVal_3); var currVal_6 = core["_44" /* ɵnov */](_v, 30).statusbarPadding; var currVal_7 = core["_44" /* ɵnov */](_v, 30)._hasRefresher; _ck(_v, 29, 0, currVal_6, currVal_7); var currVal_8 = (_co.hasSites || _co.enteredSiteUrl); _ck(_v, 34, 0, currVal_8); var currVal_12 = core["_56" /* ɵunv */](_v, 58, 0, core["_44" /* ɵnov */](_v, 59).transform("core.needhelp")); _ck(_v, 58, 0, currVal_12); }); }
function View_CoreLoginSitePage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-core-login-site", [], null, null, null, View_CoreLoginSitePage_0, RenderType_CoreLoginSitePage)), core["_30" /* ɵdid */](1, 49152, null, 0, site_CoreLoginSitePage, [nav_params["a" /* NavParams */], nav_controller["a" /* NavController */], esm5_forms["d" /* FormBuilder */], app["b" /* CoreAppProvider */], sites["b" /* CoreSitesProvider */], helper["a" /* CoreLoginHelperProvider */], modal_controller["a" /* ModalController */], alert_controller["a" /* AlertController */], utils_url["b" /* CoreUrlUtilsProvider */], dom["b" /* CoreDomUtilsProvider */], events["b" /* CoreEventsProvider */], translate_service["a" /* TranslateService */], utils_utils["b" /* CoreUtilsProvider */], urlschemes["b" /* CoreCustomURLSchemesProvider */], utils_text["b" /* CoreTextUtilsProvider */]], null, null)], null, null); }
var CoreLoginSitePageNgFactory = core["_27" /* ɵccf */]("page-core-login-site", site_CoreLoginSitePage, View_CoreLoginSitePage_Host_0, {}, {}, []);

//# sourceMappingURL=site.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/login/pages/site/site.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModuleNgFactory", function() { return CoreLoginSitePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var CoreLoginSitePageModuleNgFactory = core["_28" /* ɵcmf */](site_module_CoreLoginSitePageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreLoginSitePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, ionic3_star_rating_module["a" /* StarRatingModule */], ionic3_star_rating_module["a" /* StarRatingModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, site_module_CoreLoginSitePageModule, site_module_CoreLoginSitePageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], site_CoreLoginSitePage, [])]); });

//# sourceMappingURL=site.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=57.js.map