(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general-info/general-info.component */ "./src/app/components/general-info/general-info.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_corona_latest_info_corona_latest_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/corona-latest-info/corona-latest-info.component */ "./src/app/components/corona-latest-info/corona-latest-info.component.ts");
/* harmony import */ var _components_corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/corona-whatis/corona-whatis.component */ "./src/app/components/corona-whatis/corona-whatis.component.ts");
/* harmony import */ var _components_transmission_transmission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/transmission/transmission.component */ "./src/app/components/transmission/transmission.component.ts");
/* harmony import */ var _components_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/symptoms/symptoms.component */ "./src/app/components/symptoms/symptoms.component.ts");
/* harmony import */ var _components_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/treatment/treatment.component */ "./src/app/components/treatment/treatment.component.ts");
/* harmony import */ var _components_measures_measures_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/measures/measures.component */ "./src/app/components/measures/measures.component.ts");
/* harmony import */ var _components_tips_tips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tips/tips.component */ "./src/app/components/tips/tips.component.ts");
/* harmony import */ var _components_statistics_latest_statistics_latest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/statistics-latest/statistics-latest.component */ "./src/app/components/statistics-latest/statistics-latest.component.ts");
/* harmony import */ var _components_statistics_periodic_statistics_periodic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/statistics-periodic/statistics-periodic.component */ "./src/app/components/statistics-periodic/statistics-periodic.component.ts");
/* harmony import */ var _components_circulars_circulars_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/circulars/circulars.component */ "./src/app/components/circulars/circulars.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/facts/facts.component */ "./src/app/components/facts/facts.component.ts");
/* harmony import */ var _components_corona_general_info_corona_general_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/corona-general-info/corona-general-info.component */ "./src/app/components/corona-general-info/corona-general-info.component.ts");
/* harmony import */ var _components_testing_centres_testing_centres_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/testing-centres/testing-centres.component */ "./src/app/components/testing-centres/testing-centres.component.ts");
/* harmony import */ var _components_comming_comming_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/comming/comming.component */ "./src/app/components/comming/comming.component.ts");
/* harmony import */ var _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/latest-news/latest-news.component */ "./src/app/components/latest-news/latest-news.component.ts");
/* harmony import */ var _components_tech_response_tech_response_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/tech-response/tech-response.component */ "./src/app/components/tech-response/tech-response.component.ts");



























const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'coming', component: _components_comming_comming_component__WEBPACK_IMPORTED_MODULE_22__["CommingComponent"] },
    { path: 'faq', component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_18__["FaqsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'general', component: _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_4__["GeneralInfoComponent"] },
    { path: 'app-about-us', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: 'app-corona-latest-info', component: _components_corona_latest_info_corona_latest_info_component__WEBPACK_IMPORTED_MODULE_7__["CoronaLatestInfoComponent"] },
    { path: 'app-corona-whatis', component: _components_corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_8__["CoronaWhatisComponent"] },
    { path: 'app-transmission', component: _components_transmission_transmission_component__WEBPACK_IMPORTED_MODULE_9__["TransmissionComponent"] },
    { path: 'app-symptoms', component: _components_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_10__["SymptomsComponent"] },
    { path: 'app-treatment', component: _components_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_11__["TreatmentComponent"] },
    { path: 'app-measures', component: _components_measures_measures_component__WEBPACK_IMPORTED_MODULE_12__["MeasuresComponent"] },
    { path: 'app-tips', component: _components_tips_tips_component__WEBPACK_IMPORTED_MODULE_13__["TipsComponent"] },
    { path: 'app-statistics-latest', component: _components_statistics_latest_statistics_latest_component__WEBPACK_IMPORTED_MODULE_14__["StatisticsLatestComponent"] },
    { path: 'app-statistics-periodic', component: _components_statistics_periodic_statistics_periodic_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsPeriodicComponent"] },
    { path: 'app-circulars', component: _components_circulars_circulars_component__WEBPACK_IMPORTED_MODULE_16__["CircularsComponent"] },
    { path: 'app-statistics', component: _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"] },
    { path: 'app-facts', component: _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_19__["FactsComponent"] },
    { path: 'app-corona-general-info', component: _components_corona_general_info_corona_general_info_component__WEBPACK_IMPORTED_MODULE_20__["CoronaGeneralInfoComponent"] },
    { path: 'app-testing-centres', component: _components_testing_centres_testing_centres_component__WEBPACK_IMPORTED_MODULE_21__["TestingCentresComponent"] },
    { path: 'app-latest-news', component: _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_23__["LatestNewsComponent"] },
    { path: 'app-tech-response', component: _components_tech_response_tech_response_component__WEBPACK_IMPORTED_MODULE_24__["TechResponseComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'convid19-esswebsite';
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
            console.log('method fired');
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/general-info/general-info.component */ "./src/app/components/general-info/general-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_corona_latest_info_corona_latest_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/corona-latest-info/corona-latest-info.component */ "./src/app/components/corona-latest-info/corona-latest-info.component.ts");
/* harmony import */ var _components_corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/corona-whatis/corona-whatis.component */ "./src/app/components/corona-whatis/corona-whatis.component.ts");
/* harmony import */ var _components_transmission_transmission_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/transmission/transmission.component */ "./src/app/components/transmission/transmission.component.ts");
/* harmony import */ var _components_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/symptoms/symptoms.component */ "./src/app/components/symptoms/symptoms.component.ts");
/* harmony import */ var _components_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/treatment/treatment.component */ "./src/app/components/treatment/treatment.component.ts");
/* harmony import */ var _components_measures_measures_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/measures/measures.component */ "./src/app/components/measures/measures.component.ts");
/* harmony import */ var _components_tips_tips_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/tips/tips.component */ "./src/app/components/tips/tips.component.ts");
/* harmony import */ var _components_statistics_latest_statistics_latest_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/statistics-latest/statistics-latest.component */ "./src/app/components/statistics-latest/statistics-latest.component.ts");
/* harmony import */ var _components_statistics_periodic_statistics_periodic_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/statistics-periodic/statistics-periodic.component */ "./src/app/components/statistics-periodic/statistics-periodic.component.ts");
/* harmony import */ var _components_circulars_circulars_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/circulars/circulars.component */ "./src/app/components/circulars/circulars.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");
/* harmony import */ var _services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/facts/facts.component */ "./src/app/components/facts/facts.component.ts");
/* harmony import */ var _components_corona_general_info_corona_general_info_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/corona-general-info/corona-general-info.component */ "./src/app/components/corona-general-info/corona-general-info.component.ts");
/* harmony import */ var _components_testing_centres_testing_centres_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/testing-centres/testing-centres.component */ "./src/app/components/testing-centres/testing-centres.component.ts");
/* harmony import */ var _components_comming_comming_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/comming/comming.component */ "./src/app/components/comming/comming.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/latest-news/latest-news.component */ "./src/app/components/latest-news/latest-news.component.ts");
/* harmony import */ var _components_tech_response_tech_response_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/tech-response/tech-response.component */ "./src/app/components/tech-response/tech-response.component.ts");
















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_35__["CoronaWhatisService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"],
            //ngCountTo,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_18__["Ng2SearchPipeModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBBootstrapModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyANVw389Q10N46d9EvyUhbHwSP0KOycikY'
            }),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_19__["GeneralInfoComponent"],
        _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        _components_corona_latest_info_corona_latest_info_component__WEBPACK_IMPORTED_MODULE_24__["CoronaLatestInfoComponent"],
        _components_corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_25__["CoronaWhatisComponent"],
        _components_transmission_transmission_component__WEBPACK_IMPORTED_MODULE_26__["TransmissionComponent"],
        _components_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_27__["SymptomsComponent"],
        _components_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_28__["TreatmentComponent"],
        _components_measures_measures_component__WEBPACK_IMPORTED_MODULE_29__["MeasuresComponent"],
        _components_tips_tips_component__WEBPACK_IMPORTED_MODULE_30__["TipsComponent"],
        _components_statistics_latest_statistics_latest_component__WEBPACK_IMPORTED_MODULE_31__["StatisticsLatestComponent"],
        _components_statistics_periodic_statistics_periodic_component__WEBPACK_IMPORTED_MODULE_32__["StatisticsPeriodicComponent"],
        _components_circulars_circulars_component__WEBPACK_IMPORTED_MODULE_33__["CircularsComponent"],
        _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_34__["StatisticsComponent"],
        _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_37__["FaqsComponent"],
        _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_38__["FactsComponent"],
        _components_corona_general_info_corona_general_info_component__WEBPACK_IMPORTED_MODULE_39__["CoronaGeneralInfoComponent"],
        _components_testing_centres_testing_centres_component__WEBPACK_IMPORTED_MODULE_40__["TestingCentresComponent"],
        _components_comming_comming_component__WEBPACK_IMPORTED_MODULE_41__["CommingComponent"],
        _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_43__["LatestNewsComponent"],
        _components_tech_response_tech_response_component__WEBPACK_IMPORTED_MODULE_44__["TechResponseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"],
        //ngCountTo,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_18__["Ng2SearchPipeModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBRootModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_19__["GeneralInfoComponent"],
                    _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                    _components_corona_latest_info_corona_latest_info_component__WEBPACK_IMPORTED_MODULE_24__["CoronaLatestInfoComponent"],
                    _components_corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_25__["CoronaWhatisComponent"],
                    _components_transmission_transmission_component__WEBPACK_IMPORTED_MODULE_26__["TransmissionComponent"],
                    _components_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_27__["SymptomsComponent"],
                    _components_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_28__["TreatmentComponent"],
                    _components_measures_measures_component__WEBPACK_IMPORTED_MODULE_29__["MeasuresComponent"],
                    _components_tips_tips_component__WEBPACK_IMPORTED_MODULE_30__["TipsComponent"],
                    _components_statistics_latest_statistics_latest_component__WEBPACK_IMPORTED_MODULE_31__["StatisticsLatestComponent"],
                    _components_statistics_periodic_statistics_periodic_component__WEBPACK_IMPORTED_MODULE_32__["StatisticsPeriodicComponent"],
                    _components_circulars_circulars_component__WEBPACK_IMPORTED_MODULE_33__["CircularsComponent"],
                    _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_34__["StatisticsComponent"],
                    _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_37__["FaqsComponent"],
                    _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_38__["FactsComponent"],
                    _components_corona_general_info_corona_general_info_component__WEBPACK_IMPORTED_MODULE_39__["CoronaGeneralInfoComponent"],
                    _components_testing_centres_testing_centres_component__WEBPACK_IMPORTED_MODULE_40__["TestingCentresComponent"],
                    _components_comming_comming_component__WEBPACK_IMPORTED_MODULE_41__["CommingComponent"],
                    _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_43__["LatestNewsComponent"],
                    _components_tech_response_tech_response_component__WEBPACK_IMPORTED_MODULE_44__["TechResponseComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"],
                    //ngCountTo,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_18__["Ng2SearchPipeModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBBootstrapModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyANVw389Q10N46d9EvyUhbHwSP0KOycikY'
                    }),
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
                ],
                providers: [_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_35__["CoronaWhatisService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");




class AboutUsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 28, vars: 0, consts: [[1, "about-us-section"], ["id", "link1"], [1, "img-container"], ["src", "../../../assets/Logos/hack2.png", "alt", "profile"], [2, "padding", "13px"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Namibia COVID-19 Virtual Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " A virtual hackathon kicked off on the 18th March 2020 in Namibia for a COVID 19 tech response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Teams are developing the following Apps: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "An essential info app for Namibia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Realtime data tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Virtual Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Self reporting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "AI solution for health monitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Misinformation and sentiment analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Virtual Hackathon for Namibia\u2019s COVID-19 Tech Response has more than 80 local & international people across projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: [".about-us-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 5rem;\n}\n\n#link1[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 770px) {\n\n  .about-us-section[_ngcontent-%COMP%] {\n    padding: 3rem;\n  }\n\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n\n  }\n}\n\n@media only screen and (max-width: 500px) {\n\n  .about-us-section[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTs7RUFFakI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlOztFQUVqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXVzLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDVyZW07XG59XG5cbiNsaW5rMSB7XG4gIHBhZGRpbmc6IDAgNnJlbTtcbn1cblxuLmltZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xuXG4gIC5hYm91dC11cy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG5cbiAgI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG5cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgLmFib3V0LXVzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuXG4gICNsaW5rMSB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuXG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/circulars/circulars.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/circulars/circulars.component.ts ***!
  \*************************************************************/
/*! exports provided: CircularsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularsComponent", function() { return CircularsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/httpservice.service */ "./src/app/services/httpservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CircularsComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircularsComponent_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const doc_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.download(doc_r16.docid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doc_r16.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Publication Date: ", doc_r16.pubdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", doc_r16.author, "");
} }
function CircularsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircularsComponent_div_9_div_1_Template, 10, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.data);
} }
class CircularsComponent {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.circulars = [];
        this.memo = [];
    }
    ngOnInit() {
        this.http.getCirculars().subscribe((res) => {
            console.log(res);
            res.forEach(data => {
                this.data = res;
                this.circulars.push(res);
                localStorage.setItem('memos', JSON.stringify(this.circulars[0]));
                // console.log(res[1]);
            });
        });
        const memos = JSON.parse(localStorage.getItem('memos'));
    }
    download(docid) {
        console.log(docid);
        console.log('im here');
        this.http.downloadCirculars(docid);
    }
}
CircularsComponent.ɵfac = function CircularsComponent_Factory(t) { return new (t || CircularsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"])); };
CircularsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircularsComponent, selectors: [["app-circulars"]], decls: 10, vars: 1, consts: [[1, "circulars"], [2, "text-align", "center", "font-weight", "bold"], ["id", "services", 1, "services"], [1, "container"], [1, "row"], [1, "col"], ["class", "row", 4, "ngIf"], ["class", "col-lg-3 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "circular", 3, "click"], [1, "fas", "fa-file-pdf", "icon"]], template: function CircularsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " on COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CircularsComponent_div_9_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".circulars[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n\n\n  }\n\n  .services[_ngcontent-%COMP%] {\n    padding: 40px 0 30px;\n    background-color: #F1F1F1;\n    text-align: center;\n}\n\n  .circular[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #343A40;\n}\n\n  .services-body[_ngcontent-%COMP%] {\n    font-family: 'Roboto', sans-serif;\n    padding: 0 15px;\n}\n\n  .circular[_ngcontent-%COMP%] {\n    padding: 10px;\n    line-height: 25px;\n    margin: 20px 0;\n    transition: all .8s ease-out;\n    cursor: pointer;\n}\n\n  .circular[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\n\n  .circular[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\n  .circular[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #DC3545;\n    transition: all .8s ease-out;\n}\n\n  .circular[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgb(85, 85, 85);\n    font-weight: 400;\n    line-height: 24px;\n}\n\n  .circular[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n}\n\n  .circular[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n    transform: scale(1.3);\n}\n\n  \n\n  @media screen and (min-width: 768px) {\n    .services-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 40px;\n    }\n\n    .circular[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaXJjdWxhcnMvY2lyY3VsYXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7OztFQUdoQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksY0FBYztBQUNsQjs7RUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztFQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0VBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDRCQUE0QjtBQUNoQzs7RUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztFQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztFQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztFQUVBLDJCQUEyQjs7RUFFM0I7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NpcmN1bGFycy9jaXJjdWxhcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjdWxhcnMge1xuICBtYXJnaW4tdG9wOiA3cmVtO1xuXG5cbiAgfVxuXG4gIC5zZXJ2aWNlcyB7XG4gICAgcGFkZGluZzogNDBweCAwIDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaXJjdWxhciBoMyB7XG4gICAgY29sb3I6ICMzNDNBNDA7XG59XG5cbi5zZXJ2aWNlcy1ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY2lyY3VsYXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC44cyBlYXNlLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaXJjdWxhciAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2lyY3VsYXIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNpcmN1bGFyIC5pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNEQzM1NDU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC44cyBlYXNlLW91dDtcbn1cblxuLmNpcmN1bGFyIHAge1xuICAgIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNpcmN1bGFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2lyY3VsYXI6aG92ZXIgLmljb24ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLyogU0VSVklDRVMgTUVESUEgUVVFUklFUyAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5zZXJ2aWNlcy1oZWFkIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgIC5jaXJjdWxhciBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircularsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circulars',
                templateUrl: './circulars.component.html',
                styleUrls: ['./circulars.component.css']
            }]
    }], function () { return [{ type: src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/comming/comming.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comming/comming.component.ts ***!
  \*********************************************************/
/*! exports provided: CommingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommingComponent", function() { return CommingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CommingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CommingComponent.ɵfac = function CommingComponent_Factory(t) { return new (t || CommingComponent)(); };
CommingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommingComponent, selectors: [["app-comming"]], decls: 3, vars: 0, consts: [[1, "coming-sect"]], template: function CommingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Coming soon \uD83D\uDE0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".coming-sect[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  background: rgb(250, 250, 250);\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n  padding-top: 50%;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #3d3d3d;\n  font-weight: bold;\n  padding-top: 23%;\n  text-align: center;\n\n}\n\n@media only screen and (max-width: 1025px) {\n  h1[_ngcontent-%COMP%] {\n    padding-top: 55%;\n\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  h1[_ngcontent-%COMP%] {\n    padding-top: 90%;\n\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21taW5nL2NvbW1pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjs7RUFFbEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCOztFQUVsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21taW5nL2NvbW1pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21pbmctc2VjdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTAlO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjM2QzZDNkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDIzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gIGgxIHtcbiAgICBwYWRkaW5nLXRvcDogNTUlO1xuXG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgaDEge1xuICAgIHBhZGRpbmctdG9wOiA5MCU7XG5cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comming',
                templateUrl: './comming.component.html',
                styleUrls: ['./comming.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class ContactComponent {
    constructor() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    }
    ngOnInit() {
    }
    get form() { return this.contactForm.controls; }
    submit() {
        if (this.contactForm.valid) {
            // service method to handle functionality
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 48, vars: 1, consts: [[1, "contact", "text-center", "container"], [1, "mb-3"], [1, "card-body", "col-md-12", "pb-0", "pt-0"], [1, "h1-responsive", "font-weight-bold", "text-center", "my-4"], [1, "text-center", "w-responsive", "mx-auto", "mb-5"], [1, "row"], [1, "col-md-9", "mb-md-0", "mb-5"], ["id", "contact-form", "name", "contact-form", 3, "formGroup"], [1, "col-md-6"], [1, "md-form", "mb-0"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Your name", 1, "form-control"], ["type", "text", "id", "email", "formControlName", "email", "placeholder", "Your email", 1, "form-control"], [1, "col-md-12"], ["type", "text", "id", "subject", "formControlName", "subject", "placeholder", "Subject", 1, "form-control"], [1, "md-form"], ["type", "text", "id", "message", "formControlName", "message", "rows", "2", "placeholder", "Your message", 1, "form-control", "md-textarea"], [1, "text-center", "text-md-left"], ["disabled", "!form.valid", 1, "btn", "btn-primary", "btn-block", "white-text", "mdbWavesEffect"], [1, "status"], [1, "col-md-3", "text-center"], [1, "list-unstyled", "mb-0"], [1, "fas", "fa-phone", "mt-4", "fa-2x"], [1, "fas", "fa-envelope", "mt-4", "fa-2x"], [2, "padding-top", "2rem"], ["href", "#", "role", "button", 1, "mx-2"], [1, "fab", "fa-facebook-f", "black-text", "fa-2x"], [1, "fab", "fa-twitter", "black-text", "fa-2x"], ["href", "", "target", "_blank", "role", "button", 1, "mx-2"], [1, "fab", "fa-instagram", "black-text", "fa-2x"], [2, "padding-top", "1rem"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please visit our frequently asked questions if you have a query about Covid-19. If your question is not answered, please use the Toll Free, email provided below or send us a message to contact us.. Our team will come back to you within a matter of hours to help you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+264 81 111 1111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "contact@who.who");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You can visit our social media pages for more info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".contact[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  float: center;\n\twidth: 100%;\n\tpadding: 60px 60px;\n\theight: 100%;\n  display: flex;\n  background-color: #fff;\n    align-items: center;\n    position: relative;\n}\n\n\n.btn-primary[_ngcontent-%COMP%]{\n  background-color:  #212529 !important;\n  outline: none;\n  outline-color: #fff ;\n  border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixZQUFZO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBmbG9hdDogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogNjBweCA2MHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmJ0bi1wcmltYXJ5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzIxMjUyOSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lLWNvbG9yOiAjZmZmIDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/corona-general-info/corona-general-info.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/corona-general-info/corona-general-info.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CoronaGeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaGeneralInfoComponent", function() { return CoronaGeneralInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../corona-whatis/corona-whatis.component */ "./src/app/components/corona-whatis/corona-whatis.component.ts");
/* harmony import */ var _transmission_transmission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transmission/transmission.component */ "./src/app/components/transmission/transmission.component.ts");
/* harmony import */ var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../symptoms/symptoms.component */ "./src/app/components/symptoms/symptoms.component.ts");
/* harmony import */ var _treatment_treatment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../treatment/treatment.component */ "./src/app/components/treatment/treatment.component.ts");
/* harmony import */ var _measures_measures_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../measures/measures.component */ "./src/app/components/measures/measures.component.ts");
/* harmony import */ var _facts_facts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facts/facts.component */ "./src/app/components/facts/facts.component.ts");
/* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tips/tips.component */ "./src/app/components/tips/tips.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");











function CoronaGeneralInfoComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 3);
} }
class CoronaGeneralInfoComponent {
    constructor() {
    }
    ngOnInit() {
        this.showprogress = true;
        setTimeout(() => {
            this.showprogress = false;
        }, 3000);
    }
}
CoronaGeneralInfoComponent.ɵfac = function CoronaGeneralInfoComponent_Factory(t) { return new (t || CoronaGeneralInfoComponent)(); };
CoronaGeneralInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoronaGeneralInfoComponent, selectors: [["app-corona-general-info"]], decls: 16, vars: 1, consts: [[1, "prgress"], ["mode", "indeterminate", 4, "ngIf"], [1, "general-section"], ["mode", "indeterminate"]], template: function CoronaGeneralInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoronaGeneralInfoComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-corona-whatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-transmission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-symptoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-measures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showprogress);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _corona_whatis_corona_whatis_component__WEBPACK_IMPORTED_MODULE_2__["CoronaWhatisComponent"], _transmission_transmission_component__WEBPACK_IMPORTED_MODULE_3__["TransmissionComponent"], _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_4__["SymptomsComponent"], _treatment_treatment_component__WEBPACK_IMPORTED_MODULE_5__["TreatmentComponent"], _measures_measures_component__WEBPACK_IMPORTED_MODULE_6__["MeasuresComponent"], _facts_facts_component__WEBPACK_IMPORTED_MODULE_7__["FactsComponent"], _tips_tips_component__WEBPACK_IMPORTED_MODULE_8__["TipsComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]], styles: [".stats-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0 8rem 3rem 8rem;\n}\n\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 50px;\n  margin-bottom: 2rem;\n}\n\n.prgress[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 3.5rem 0 0 0;\n}\n\n@media only screen and (max-width: 770px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .stats-section[_ngcontent-%COMP%] {\n    padding: 5rem 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JvbmEtZ2VuZXJhbC1pbmZvL2Nvcm9uYS1nZW5lcmFsLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nvcm9uYS1nZW5lcmFsLWluZm8vY29yb25hLWdlbmVyYWwtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgOHJlbSAzcmVtIDhyZW07XG59XG5cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5wcmdyZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMy41cmVtIDAgMCAwO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5zdGF0cy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cmVtIDA7XG4gIH1cbn1cblxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBoNSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronaGeneralInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-corona-general-info',
                templateUrl: './corona-general-info.component.html',
                styleUrls: ['./corona-general-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/corona-latest-info/corona-latest-info.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/corona-latest-info/corona-latest-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CoronaLatestInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaLatestInfoComponent", function() { return CoronaLatestInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CoronaLatestInfoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CoronaLatestInfoComponent.ɵfac = function CoronaLatestInfoComponent_Factory(t) { return new (t || CoronaLatestInfoComponent)(); };
CoronaLatestInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoronaLatestInfoComponent, selectors: [["app-corona-latest-info"]], decls: 2, vars: 0, template: function CoronaLatestInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "corona-latest-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yb25hLWxhdGVzdC1pbmZvL2Nvcm9uYS1sYXRlc3QtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronaLatestInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-corona-latest-info',
                templateUrl: './corona-latest-info.component.html',
                styleUrls: ['./corona-latest-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/corona-whatis/corona-whatis.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/corona-whatis/corona-whatis.component.ts ***!
  \*********************************************************************/
/*! exports provided: CoronaWhatisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaWhatisComponent", function() { return CoronaWhatisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/httpservice.service */ "./src/app/services/httpservice.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CoronaWhatisComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r3, " ");
} }
class CoronaWhatisComponent {
    constructor(coronaService, http) {
        this.coronaService = coronaService;
        this.http = http;
        this.coronaInfo = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.sendGetRequest().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.coronaInfo = data;
        });
    }
}
CoronaWhatisComponent.ɵfac = function CoronaWhatisComponent_Factory(t) { return new (t || CoronaWhatisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"])); };
CoronaWhatisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoronaWhatisComponent, selectors: [["app-corona-whatis"]], decls: 9, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/virus-small.png", "alt", "profile"], [2, "padding", "13px"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function CoronaWhatisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "What is Coronavirus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CoronaWhatisComponent_mat_card_8_Template, 4, 1, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coronaInfo);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JvbmEtd2hhdGlzL2Nvcm9uYS13aGF0aXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nvcm9uYS13aGF0aXMvY29yb25hLXdoYXRpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmsxIHtcbiAgcGFkZGluZzogMCA2cmVtO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNsaW5rMSB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronaWhatisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-corona-whatis',
                templateUrl: './corona-whatis.component.html',
                styleUrls: ['./corona-whatis.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }, { type: src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/facts/facts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/facts/facts.component.ts ***!
  \*****************************************************/
/*! exports provided: FactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsComponent", function() { return FactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function FactsComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facts_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", facts_r23, " ");
} }
class FactsComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.Facts = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.getFacts().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Facts = data;
        });
    }
}
FactsComponent.ɵfac = function FactsComponent_Factory(t) { return new (t || FactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
FactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FactsComponent, selectors: [["app-facts"]], decls: 9, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/virus-small.png", "alt", "profile"], [2, "padding", "13px"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function FactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Myths and Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FactsComponent_mat_card_8_Template, 4, 1, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Facts);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n\n  \n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYWN0cy9mYWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTs7RUFFZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhY3RzL2ZhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGluazEge1xuICBwYWRkaW5nOiAwIDZyZW07XG5cbiAgLyogcGFkZGluZy10b3A6IDJyZW07ICovXG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjbGluazEge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facts',
                templateUrl: './facts.component.html',
                styleUrls: ['./facts.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/faqs/faqs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.ts ***!
  \***************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");









function FaqsComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} }
function FaqsComponent_mat_accordion_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const faqs_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", faqs_r21.question, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](faqs_r21.answer);
} }
class FaqsComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        // data =  [];
        this.Faqs = [];
    }
    ngOnInit() {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ searchInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required) });
        this.showprogress = true;
        this.coronaService.getFaqs().subscribe((data) => {
            this.Faqs = data;
            this.showprogress = false;
        });
    }
}
FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_2__["CoronaWhatisService"])); };
FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 10, vars: 7, consts: [[1, "prgress"], ["mode", "indeterminate", 4, "ngIf"], [1, "faqs-section"], [2, "padding", "13px"], [1, "search-form", 3, "formGroup"], ["placeholder", "Seach question here", "formControlName", "searchInput", 1, "fo==", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaqsComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Frequently Asked Questions (FAQs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FaqsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FaqsComponent_mat_accordion_8_Template, 8, 2, "mat-accordion", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showprogress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, ctx.Faqs, ctx.search));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: [".faqs-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 100vh;\n  padding: 5rem 8rem 3rem 8rem;\n}\n\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 50px;\n  margin-bottom: 2rem;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 10rem;\n  margin: auto;\n}\n\n.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: inherit;\n  border-radius: 25rem;\n  height: 40px;\n  padding: 20px;\n  border: none;\n  box-shadow: 5px 5px 15px 3px #c9c9c9;\n  outline-style: none;\n}\n\n.prgress[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 3.5rem 0 0 0;\n}\n\nmat-accordion[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n\n@media only screen and (max-width: 770px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .faqs-section[_ngcontent-%COMP%] {\n    padding: 0 5rem 3rem 5rem;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .faqs-section[_ngcontent-%COMP%] {\n    padding: 0 1rem 3rem 1rem;\n  }\n\n  .search-form[_ngcontent-%COMP%] {\n    padding: 0 3rem;\n  }\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXFzLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA1cmVtIDhyZW0gM3JlbSA4cmVtO1xufVxuXG5oNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2VhcmNoLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2VhcmNoLWZvcm0gaW5wdXQge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMjVyZW07XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggM3B4ICNjOWM5Yzk7XG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG59XG5cbi5wcmdyZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMy41cmVtIDAgMCAwO1xufVxuXG5tYXQtYWNjb3JkaW9uIHtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xuICBoNSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmZhcXMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCA1cmVtIDNyZW0gNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAuZmFxcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDFyZW0gM3JlbSAxcmVtO1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtIHtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gIH1cbiAgXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faqs',
                templateUrl: './faqs.component.html',
                styleUrls: ['./faqs.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_2__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");




const _c0 = function () { return ["/coming"]; };
const _c1 = function () { return ["/app-testing-centres"]; };
const _c2 = function () { return ["/app-about-us"]; };
class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 47, vars: 8, consts: [[1, "page-footer", "font-small", "unique-color-dark"], [1, "container", "text-center", "text-md-left", "mt-5"], [1, "row", "mt-3"], [1, "col-md-3", "col-lg-4", "col-xl-3", "mx-auto", "mb-4"], [1, "text-uppercase", "font-weight-bold"], [1, "img-container"], ["src", "../../../assets/Logos/NUSTLogo-2.png", "alt", "profile", 1, "img-container"], ["src", "../../../assets/Logos/min.jpg", "alt", "profile", 1, "img-container"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], [1, "deep-purple", "accent-2", "mb-4", "mt-0", "d-inline-block", "mx-auto", 2, "width", "60px"], [3, "routerLink"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mb-md-0", "mb-4"], ["fas", "", "icon", "home", 1, "mr-3"], ["fas", "", "icon", "envelope", 1, "mr-3"], ["href", "http://fci.nust.na/"], ["fas", "", "icon", "phone", 1, "mr-3"], ["fas", "", "icon", "at", 1, "mr-3"], [1, "footer-copyright", "text-center", "py-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Entities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Useful links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Latest Discoveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Research/Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Testing Centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mdb-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "13 Jackson Kaujeua Street, Windhoek, Namibia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mdb-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "NUST - FCI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mdb-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MoHSS Hotline: 0800 100 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mdb-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "NamibiaCovid19tech@nust.na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A9 2020 Copyright: WHO & MoHSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FasDirective"]], styles: ["footer[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  padding-top: 0.5rem;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100px;\n  margin: 2rem 1rem 0 0;\n}\n\n@media only screen and (max-width: 500px) {\n  .img-container[_ngcontent-%COMP%] {\n    margin-left: 35%;\n    margin-right: 35%;\n    align-items: center;\n    \n  }\n  .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n    height: 100px;\n  }\n\n  .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7O0VBRXJCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG5cbi5pbWctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDJyZW0gMXJlbSAwIDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmltZy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgfVxuICAuaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAuaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/general-info/general-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/general-info/general-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GeneralInfoComponent {
    constructor() {
    }
    ngOnInit() {
        this.showprogress = true;
        // this.coronaService.getSymptoms().subscribe((data: []) => {
        //   console.log('We are here 9999');
        //   console.log(data);
        //   this.Symptoms = data;
        // });
        setTimeout(() => {
            this.showprogress = false;
        }, 2000);
    }
}
GeneralInfoComponent.ɵfac = function GeneralInfoComponent_Factory(t) { return new (t || GeneralInfoComponent)(); };
GeneralInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInfoComponent, selectors: [["app-general-info"]], decls: 123, vars: 0, consts: [[1, "home"], [1, "container"], [1, "general-body"], [1, "hr"], [1, "clr"]], template: function GeneralInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Corona Virus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "What is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Coronavirus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Coronavirus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "How does it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "spread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Person-to-person spread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " The virus is thought to spread mainly from person-to-person. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Between people who are in close contact with one another (within about 6 feet).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Through respiratory droplets produced when an infected person coughs or sneezes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Can someone spread the virus without being sick?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "People are thought to be most contagious when they are most symptomatic (the sickest).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Some spread might be possible before people show symptoms; there have been reports of this occurring with this new coronavirus, but this is not thought to be the main way the virus spreads.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Spread from contact with contaminated surfaces or objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "How easily the virus spreads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "How easily a virus spreads from person-to-person can vary. Some viruses are highly contagious (spread easily), like measles, while other viruses do not spread as easily. Another factor is whether the spread is sustained, spreading continually without stopping. The virus that causes COVID-19 seems to be spreading easily and sustainably in the community (\u201Ccommunity spread\u201D) in some affected geographic areas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Common ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Symptoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Watch for symptoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " The following symptoms may appear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "2-14 days after exposure.*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Fever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Cough");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Shortness of breath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "*This is based on what has been seen previously as the incubation period of MERS-CoV viruses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Vaccine and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Know How it Spreads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "The best way to prevent illness is to avoid being exposed to this virus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "The virus is thought to spread mainly from person-to-person.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Between people who are in close contact with one another (within about 6 feet).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Through respiratory droplets produced when an infected person coughs or sneezes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home[_ngcontent-%COMP%] {\npadding-top: 7rem;\n}\n\n\n\n.home-main[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n\n\n.centerpiece[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 0.7s ease-in both;\n          animation: fadeIn 0.7s ease-in both;\n\n}\n\n\n\n\n\n\n\n.trans-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  height: 100vh;\n}\n\n\n\n.welcome-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n  color: #fff;\n  position: relative;\n  top: 25%;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n\n\n.welcome-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n\n\n.welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #DC3545;\n  font-weight: bold;\n}\n\n\n\n.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 300;\n}\n\n\n\n\n\n\n\n@media screen and (min-width:768px) {\n\n  .welcome-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      font-size: 24px;\n  }\n\n  .welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 70px;\n  }\n\n  .welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 26px;\n  }\n}\n\n\n\n.general[_ngcontent-%COMP%] {\n  padding: 70px 15px;\n}\n\n\n\n.general-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  margin-top: 8rem;\n}\n\n\n\n.general-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n\n\n\n.general-img-cover[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  text-align: center;\n  overflow: hidden;\n  transition: all .5s;\n}\n\n\n\n.general-img-container[_ngcontent-%COMP%]:hover   .general-img-cover[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  top: 48%;\n  padding: 10px;\n  text-decoration: none;\n  color: #fff;\n  font-size: 18px;\n  transition: all .4s;\n}\n\n\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DC3545;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 600;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\n\n\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  float: none;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: rgb(85, 85, 85);\n  line-height: 25px;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n  border-top: 1px dotted rgb(85, 85, 85);\n  margin: 10px auto 0;\n}\n\n\n\ndiv.hr[_ngcontent-%COMP%] {\n  border-top: 1px dotted rgb(85, 85, 85);\n  margin: 10px auto 0;\n}\n\n\n\n\n\n\n\n@media screen and (min-width: 768px) {\n  .general[_ngcontent-%COMP%] {\n      overflow: auto;\n  }\n\n  .general-left[_ngcontent-%COMP%] {\n      margin-top: 32px;\n      width: 40%;\n      float: left;\n      padding: 0 15px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n      width: 60%;\n      float: right;\n      padding: 0 15px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n      margin-bottom: 0;\n  }\n\n  .general-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      padding: 62px 42px;\n  }\n\n}\n\n\n\n@media screen and (min-width: 992px) {\n\n\n  .general-left[_ngcontent-%COMP%] {\n      width: 35%;\n      text-align: right;\n      margin-left: 30px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n      width: 57%;\n  }\n\n  .general-img-container[_ngcontent-%COMP%] {\n      position: relative;\n      top: 20px;\n      left: 5%;\n  }\n\n  .general-img-shadow[_ngcontent-%COMP%] {\n      z-index: -1;\n      border: 8px solid #555555;\n      border-radius: 5px;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      bottom: 6%;\n      right: 8%;\n  }\n\n}\n\n\n\n@media screen and (min-width: 1200px) {\n  .general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n      margin: 20px auto;\n  }\n\n}\n\n\n\n.general[_ngcontent-%COMP%] {\n    padding: 70px 15px;\n}\n\n\n\n.general-img-container[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 10px;\n\n}\n\n\n\n.general-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n\n}\n\n\n\n.general-img-cover[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0%;\n    text-align: center;\n    overflow: hidden;\n    transition: all .5s;\n}\n\n\n\n.general-img-container[_ngcontent-%COMP%]:hover   .general-img-cover[_ngcontent-%COMP%] {\n    height: 100%;\n\n}\n\n\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    top: 48%;\n    padding: 10px;\n    text-decoration: none;\n    color: #fff;\n    font-size: 18px;\n    transition: all .4s;\n}\n\n\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #DC3545;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    font-weight: 600;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 8px;\n    color: #DC3545;\n}\n\n\n\nh4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    color: rgb(85, 85, 85);\n    line-height: 25px;\n}\n\n\n\n.general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n    border-top: 1px dotted rgb(85, 85, 85);\n    margin: 10px auto 0;\n}\n\n\n\n\n\n\n\n@media screen and (min-width: 768px) {\n    .general[_ngcontent-%COMP%] {\n        overflow: auto;\n    }\n\n    .general-left[_ngcontent-%COMP%] {\n        margin-top: 32px;\n        width: 40%;\n        float: left;\n        padding: 0 15px;\n    }\n\n    .general-right[_ngcontent-%COMP%] {\n        width: 60%;\n        float: right;\n        padding: 0 15px;\n    }\n\n    .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n    }\n\n    .general-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        padding: 12px 22px;\n    }\n\n}\n\n\n\n@media screen and (min-width: 992px) {\n\n\n    .general-left[_ngcontent-%COMP%] {\n        width: 35%;\n        text-align: right;\n        margin-left: 30px;\n    }\n\n    .general-right[_ngcontent-%COMP%] {\n        width: 57%;\n    }\n\n    .general-img-container[_ngcontent-%COMP%] {\n        position: relative;\n        top: 20px;\n        left: 5%;\n    }\n\n    .general-img-shadow[_ngcontent-%COMP%] {\n        z-index: -1;\n        border: 8px solid #555555;\n        border-radius: 5px;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        bottom: 6%;\n        right: 8%;\n    }\n\n}\n\n\n\n@media screen and (min-width: 1200px) {\n    .general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n        margin: 20px auto;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsLWluZm8vZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxpQkFBaUI7QUFDakI7Ozs7QUFJQTtFQUNFLFlBQVk7QUFDZDs7OztBQUNBO0VBQ0UsMkNBQW1DO1VBQW5DLG1DQUFtQzs7QUFFckM7Ozs7QUFFQTs7R0FFRzs7OztBQUNIO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwwQ0FBMEM7QUFDNUM7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOzs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7Ozs7QUFFQSx1QkFBdUI7Ozs7QUFFdkI7O0VBRUU7TUFDSSxlQUFlO0VBQ25COztFQUVBO01BQ0ksZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7QUFDRjs7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7Ozs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7Ozs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7Ozs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOzs7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7Ozs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7Ozs7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7Ozs7QUFHQSwwQkFBMEI7Ozs7QUFFMUI7RUFDRTtNQUNJLGNBQWM7RUFDbEI7O0VBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxlQUFlO0VBQ25COztFQUVBO01BQ0ksVUFBVTtNQUNWLFlBQVk7TUFDWixlQUFlO0VBQ25COztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVGOzs7O0FBRUE7OztFQUdFO01BQ0ksVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixpQkFBaUI7RUFDckI7O0VBRUE7TUFDSSxVQUFVO0VBQ2Q7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7RUFDWjs7RUFFQTtNQUNJLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVU7TUFDVixTQUFTO0VBQ2I7O0FBRUY7Ozs7QUFFQTtFQUNFO01BQ0ksbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVGOzs7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCOzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7OztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7Ozs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOzs7O0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7Ozs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7Ozs7QUFJQSwwQkFBMEI7Ozs7QUFFMUI7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUVKOzs7O0FBRUE7OztJQUdJO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFFBQVE7SUFDWjs7SUFFQTtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixTQUFTO0lBQ2I7O0FBRUo7Ozs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsLWluZm8vZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG5wYWRkaW5nLXRvcDogN3JlbTtcbn1cblxuXG5cbi5ob21lLW1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2VudGVycGllY2Uge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjdzIGVhc2UtaW4gYm90aDtcblxufVxuXG4vKiAuaG9tZSAjd29yZCB7XG4gIGNvbG9yOiAjREMzNTQ1O1xufSAqL1xuLnRyYW5zLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cblxuLndlbGNvbWUtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4ud2VsY29tZS1tZXNzYWdlIHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi53ZWxjb21lLW1lc3NhZ2UgaDEge1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiAjREMzNTQ1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4vKiBIT01FIE1FRElBIFFVRVJJRVMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xuXG4gIC53ZWxjb21lLW1lc3NhZ2Ugc3BhbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAud2VsY29tZS1tZXNzYWdlIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuXG4gIC53ZWxjb21lLW1lc3NhZ2UgcCB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cblxuLmdlbmVyYWwge1xuICBwYWRkaW5nOiA3MHB4IDE1cHg7XG59XG5cbi5nZW5lcmFsLWltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhyZW07XG59XG5cblxuLmdlbmVyYWwtaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5nZW5lcmFsLWltZy1jb3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmdlbmVyYWwtaW1nLWNvbnRhaW5lcjpob3ZlciAuZ2VuZXJhbC1pbWctY292ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZW5lcmFsLWltZy1jb3ZlciBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQ4JTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xufVxuXG4uZ2VuZXJhbC1pbWctY292ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuXG4uZ2VuZXJhbC1ib2R5IGgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ2VuZXJhbC1ib2R5IGgyIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY29sb3I6ICNEQzM1NDU7XG59XG5oMyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuXG4uYnRuIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5nZW5lcmFsLWJvZHkgcCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5nZW5lcmFsLWJvZHkgZGl2LmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoODUsIDg1LCA4NSk7XG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XG59XG5kaXYuaHIge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYig4NSwgODUsIDg1KTtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcbn1cblxuXG4vKiBnZW5lcmFsIE1FRElBIFFVRVJJRVMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmdlbmVyYWwge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAuZ2VuZXJhbC1sZWZ0IHtcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICAuZ2VuZXJhbC1yaWdodCB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5nZW5lcmFsLWZvb3RlciBidXR0b24ge1xuICAgICAgcGFkZGluZzogNjJweCA0MnB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuXG4gIC5nZW5lcmFsLWxlZnQge1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cblxuICAuZ2VuZXJhbC1yaWdodCB7XG4gICAgICB3aWR0aDogNTclO1xuICB9XG5cbiAgLmdlbmVyYWwtaW1nLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgICBsZWZ0OiA1JTtcbiAgfVxuXG4gIC5nZW5lcmFsLWltZy1zaGFkb3cge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICBib3JkZXI6IDhweCBzb2xpZCAjNTU1NTU1O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3R0b206IDYlO1xuICAgICAgcmlnaHQ6IDglO1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5nZW5lcmFsLWJvZHkgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5nZW5lcmFsLWJvZHkgZGl2LmhyIHtcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICB9XG5cbn1cbi5nZW5lcmFsIHtcbiAgICBwYWRkaW5nOiA3MHB4IDE1cHg7XG59XG5cbi5nZW5lcmFsLWltZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cblxuLmdlbmVyYWwtaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5nZW5lcmFsLWltZy1jb250YWluZXI6aG92ZXIgLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIGEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQ4JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjREMzNTQ1O1xufVxuXG4uZ2VuZXJhbC1ib2R5IGgyIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmdlbmVyYWwtYm9keSBoMiBoNCBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBjb2xvcjogI0RDMzU0NTtcbn1cblxuaDQgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogI0RDMzU0NTtcbn1cbi5nZW5lcmFsLWJvZHkgcCB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDg1LCA4NSwgODUpO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XG59XG5cblxuXG4vKiBnZW5lcmFsIE1FRElBIFFVRVJJRVMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuZ2VuZXJhbCB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIC5nZW5lcmFsLWxlZnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgIH1cblxuICAgIC5nZW5lcmFsLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5nZW5lcmFsLWZvb3RlciBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIycHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cblxuICAgIC5nZW5lcmFsLWxlZnQge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtcmlnaHQge1xuICAgICAgICB3aWR0aDogNTclO1xuICAgIH1cblxuICAgIC5nZW5lcmFsLWltZy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgbGVmdDogNSU7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtaW1nLXNoYWRvdyB7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjNTU1NTU1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm90dG9tOiA2JTtcbiAgICAgICAgcmlnaHQ6IDglO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuZ2VuZXJhbC1ib2R5IGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuZ2VuZXJhbC1ib2R5IGRpdi5ociB7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-info',
                templateUrl: './general-info.component.html',
                styleUrls: ['./general-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../latest-news/latest-news.component */ "./src/app/components/latest-news/latest-news.component.ts");
/* harmony import */ var _measures_measures_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../measures/measures.component */ "./src/app/components/measures/measures.component.ts");
/* harmony import */ var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../symptoms/symptoms.component */ "./src/app/components/symptoms/symptoms.component.ts");







const _c0 = function () { return ["/app-tech-response"]; };
const _c1 = function () { return ["/app-statistics"]; };
const _c2 = function () { return ["/app-corona-general-info"]; };
const _c3 = function () { return ["/app-testing-centres"]; };
class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
    scroll($element) {
        // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 88, vars: 10, consts: [["href", "https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css?family=Roboto&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"], [1, "home-section"], ["id", "home", 1, "home"], [1, "trans-background"], [1, "welcome-message"], ["ng-controller", "MyCtrl", 1, "maq"], ["vspace", "20", "direction", "right", 2, "animation", "maq 5s ease-out"], [1, "text-danger"], [1, "img-container-1"], ["src", "../../../assets/Logos/liberity1.jpg", "alt", "profile"], [1, "animated", "bounceInDown", "delay-1s"], [1, "animated", "bounceInDown", "delay-2s"], [1, "about-footer"], ["block", "true", 1, "btn", "btn-danger", 2, "outline-color", "white", "float", "right !important", 3, "routerLink"], ["id", "arrow-style", 1, "row", 3, "click"], [1, "chevron"], [1, "scrollspy-example"], ["general", ""], ["id", "general", 1, "general", "container"], ["id", "link3"], [1, "text-center"], [1, "hr"], ["block", "true", 1, "btn", "btn-danger", 2, "outline-color", "white", "float", "right !important", "margin-top", "1.5rem", 3, "routerLink"], [1, "img-container"], ["src", "../../../assets/img/virus-small.png", "alt", "profile"], [1, "list-group", "list-group-flush"], [1, "list-group-item"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "marquee", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Latest News:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Khomas and Erongo Regions Covid-19 lockdown starts on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Friday, 27 March 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " till ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Thursday, 16 April 2020.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Get your facts right about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Coronavirus disease(COVID-19)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Join Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " News:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-latest-news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-measures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-symptoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Testing Centres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "You can get tested at the following centers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Namibia Institute of Pathology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardTextComponent"], _latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_3__["LatestNewsComponent"], _measures_measures_component__WEBPACK_IMPORTED_MODULE_4__["MeasuresComponent"], _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_5__["SymptomsComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  background-image: url('corona.bin');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100vh;\n  padding-top: 3rem;\n}\n\n.home-section[_ngcontent-%COMP%] {\n  height: 100hv;\n}\n\n.scrollspy-example[_ngcontent-%COMP%] {\n  padding: 5rem 10rem;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.home-main[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.centerpiece[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 0.7s ease-in both;\n          animation: fadeIn 0.7s ease-in both;\n\n}\n\n\n\n.trans-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  height: 100vh;\n}\n\n.maq[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  color: #fff;\n  position: relative;\n  top: 1%;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n@-webkit-keyframes maq {\n  0% {\n  transform: translateX(400%);\n  }\n  100% {\n  transform: translateX(0%);\n  }\n  }\n\n@keyframes maq {\n  0% {\n  transform: translateX(400%);\n  }\n  100% {\n  transform: translateX(0%);\n  }\n  }\n\n.welcome-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n  color: #fff;\n  position: relative;\n  top: 1%;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.welcome-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n  color: #DC3545;\n  font-weight: bold;\n}\n\n.welcome-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #DC3545;\n  font-weight: bold;\n}\n\n.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 300;\n}\n\n\n\n@media screen and (min-width:768px) {\n\n  .welcome-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n\n  .welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n\n.general[_ngcontent-%COMP%] {\n  padding: 50px 15px;\n}\n\n.general-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  margin-top: 8rem;\n}\n\n.general-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n\n.general-img-cover[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  text-align: center;\n  overflow: hidden;\n  transition: all .5s;\n}\n\n.general-img-container[_ngcontent-%COMP%]:hover   .general-img-cover[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  top: 48%;\n  padding: 10px;\n  text-decoration: none;\n  color: #fff;\n  font-size: 18px;\n  transition: all .4s;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\n.btn[_ngcontent-%COMP%] {\n  float: none;\n}\n\n.general-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: rgb(85, 85, 85);\n  line-height: 25px;\n}\n\n.general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n  border-top: 1px dotted rgb(85, 85, 85);\n  margin: 10px auto 0;\n}\n\n\n\n@media screen and (min-width: 768px) {\n  .general[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n\n  .general-left[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    width: 40%;\n    float: left;\n    padding: 0 15px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n    width: 60%;\n    float: right;\n    padding: 0 15px;\n  }\n\n  .measures-left[_ngcontent-%COMP%] {\n    margin-top: 22px;\n    width: 60%;\n    float: left;\n    padding: 0 15px;\n  }\n\n  .measures-right[_ngcontent-%COMP%] {\n    width: 40%;\n    float: right;\n    padding: 0 15px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .general-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 62px 42px;\n  }\n\n}\n\n@media screen and (min-width: 992px) {\n\n\n  .general-left[_ngcontent-%COMP%] {\n    width: 35%;\n    text-align: right;\n    margin-left: 30px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n    width: 57%;\n  }\n\n  .measures-left[_ngcontent-%COMP%] {\n    width: 57%;\n    text-align: right;\n    margin-left: 30px;\n  }\n\n  .measures-right[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n\n  .general-img-container[_ngcontent-%COMP%] {\n    position: relative;\n    top: 20px;\n    left: 5%;\n  }\n\n  .general-img-shadow[_ngcontent-%COMP%] {\n    z-index: -1;\n    border: 8px solid #555555;\n    border-radius: 5px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    bottom: 6%;\n    right: 8%;\n  }\n\n}\n\n.img-container-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 20%;\n}\n\n@media screen and (min-width: 1200px) {\n  .general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n\n}\n\n.general[_ngcontent-%COMP%] {\n  padding: 50px 15px;\n}\n\n.general-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n\n}\n\n.general-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n\n}\n\n.general-img-cover[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  text-align: center;\n  overflow: hidden;\n  transition: all .5s;\n}\n\n.general-img-container[_ngcontent-%COMP%]:hover   .general-img-cover[_ngcontent-%COMP%] {\n  height: 100%;\n\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  top: 48%;\n  padding: 10px;\n  text-decoration: none;\n  color: #fff;\n  font-size: 18px;\n  transition: all .4s;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\nh4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: rgb(85, 85, 85);\n  line-height: 25px;\n}\n\n.general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n  border-top: 1px dotted rgb(85, 85, 85);\n  margin: 10px auto 0;\n}\n\n\n\n@media screen and (min-width: 768px) {\n  .general[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n\n  .general-left[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    width: 40%;\n    float: left;\n    padding: 0 15px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n    width: 60%;\n    float: right;\n    padding: 0 15px;\n  }\n\n  .measures-left[_ngcontent-%COMP%] {\n    margin-top: 22px;\n    width: 60%;\n    float: left;\n    padding: 0 15px;\n  }\n\n  .measures-right[_ngcontent-%COMP%] {\n    width: 40%;\n    float: right;\n    padding: 0 15px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .general-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 12px 22px;\n  }\n\n}\n\n@media screen and (min-width: 992px) {\n\n\n  .general-left[_ngcontent-%COMP%] {\n    width: 35%;\n    text-align: right;\n    margin-left: 30px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n    width: 57%;\n  }\n\n  .measures-left[_ngcontent-%COMP%] {\n    width: 57%;\n    text-align: right;\n    margin-left: 30px;\n  }\n\n  .measures-right[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n\n  .general-img-container[_ngcontent-%COMP%] {\n    position: relative;\n    top: 20px;\n    left: 5%;\n  }\n\n  .general-img-shadow[_ngcontent-%COMP%] {\n    z-index: -1;\n    border: 8px solid #555555;\n    border-radius: 5px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    bottom: 6%;\n    right: 8%;\n  }\n\n}\n\n#link1[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0 6rem;\n\n  \n}\n\n#link2[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n}\n\n#link3[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n\n  \n}\n\nmdb-card[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media screen and (min-width: 1200px) {\n  .general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n\n}\n\n@media only screen and (max-width: 770px) {\n  .scrollspy-example[_ngcontent-%COMP%] {\n    padding: 5rem 6rem;\n  }\n}\n\n@media only screen and (max-width:500px) {\n  .scrollspy-example[_ngcontent-%COMP%] {\n    padding: 5rem 1rem;\n  }\n\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n\n    \n  }\n\n  #link2[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n\n  #link3[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n\n    \n  }\n\n  .scrollspy-example[_ngcontent-%COMP%] {\n    padding: 5rem 1.5rem;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -5%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -5%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 28px;\n  height: 8px;\n  opacity: 0;\n  transform: scale3d(0.5, 0.5, 0.5);\n  -webkit-animation: move 3s ease-out infinite;\n          animation: move 3s ease-out infinite;\n}\n\n.chevron[_ngcontent-%COMP%]:first-child {\n  -webkit-animation: move 3s ease-out 1s infinite;\n          animation: move 3s ease-out 1s infinite;\n}\n\n.chevron[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: move 3s ease-out 2s infinite;\n          animation: move 3s ease-out 2s infinite;\n}\n\n.chevron[_ngcontent-%COMP%]:before, .chevron[_ngcontent-%COMP%]:after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 51%;\n  background: #DC3545;\n}\n\n.chevron[_ngcontent-%COMP%]:before {\n  left: 0;\n  transform: skew(0deg, 30deg);\n}\n\n.chevron[_ngcontent-%COMP%]:after {\n  right: 0;\n  width: 50%;\n  transform: skew(0deg, -30deg);\n}\n\n@-webkit-keyframes move {\n  25% {\n    opacity: 1;\n\n  }\n\n  33% {\n    opacity: 1;\n    transform: translateY(30px);\n  }\n\n  67% {\n    opacity: 1;\n    transform: translateY(40px);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);\n  }\n}\n\n@keyframes move {\n  25% {\n    opacity: 1;\n\n  }\n\n  33% {\n    opacity: 1;\n    transform: translateY(30px);\n  }\n\n  67% {\n    opacity: 1;\n    transform: translateY(40px);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);\n  }\n}\n\n@-webkit-keyframes pulse {\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes pulse {\n  to {\n    opacity: 1;\n  }\n}\n\n#arrow-style[_ngcontent-%COMP%] {\n  padding-top: 12%;\n  padding-left: 47%;\n  margin-right: auto;\n}\n\n#arrow-style[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFpRDtFQUNqRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DOztBQUVyQzs7QUFFQTs7R0FFRzs7QUFDSDtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO0VBQ0EsMkJBQTJCO0VBQzNCO0VBQ0E7RUFDQSx5QkFBeUI7RUFDekI7RUFDQTs7QUFQRjtFQUNFO0VBQ0EsMkJBQTJCO0VBQzNCO0VBQ0E7RUFDQSx5QkFBeUI7RUFDekI7RUFDQTs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCOztBQUV2Qjs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUlBLDBCQUEwQjs7QUFFMUI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjs7QUFFQTs7O0VBR0U7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztFQUNYOztBQUVGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1COztBQUVyQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUlBLDBCQUEwQjs7QUFFMUI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjs7QUFFQTs7O0VBR0U7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztFQUNYOztBQUVGOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7O0FBR0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7O0lBRWpCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjs7SUFFakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLDRDQUFvQztVQUFwQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTs7RUFFWjs7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtEQUFrRDtFQUNwRDtBQUNGOztBQXBCQTtFQUNFO0lBQ0UsVUFBVTs7RUFFWjs7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtEQUFrRDtFQUNwRDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9jb3JvbmEpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuXG4uaG9tZS1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDBodjtcbn1cblxuXG4uc2Nyb2xsc3B5LWV4YW1wbGUge1xuICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuXG5cbi5ob21lLW1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jZW50ZXJwaWVjZSB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuN3MgZWFzZS1pbiBib3RoO1xuXG59XG5cbi8qIC5ob21lICN3b3JkIHtcbiAgY29sb3I6ICNEQzM1NDU7XG59ICovXG4udHJhbnMtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1hcSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG5Aa2V5ZnJhbWVzIG1hcSB7XG4gIDAlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwMCUpO1xuICB9XG4gIDEwMCUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIH1cblxuLndlbGNvbWUtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi53ZWxjb21lLW1lc3NhZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0RDMzU0NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53ZWxjb21lLW1lc3NhZ2UgaDIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjREMzNTQ1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4vKiBIT01FIE1FRElBIFFVRVJJRVMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xuXG4gIC53ZWxjb21lLW1lc3NhZ2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLndlbGNvbWUtbWVzc2FnZSBoMSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG5cbiAgLndlbGNvbWUtbWVzc2FnZSBwIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cblxuLmdlbmVyYWwge1xuICBwYWRkaW5nOiA1MHB4IDE1cHg7XG59XG5cbi5nZW5lcmFsLWltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhyZW07XG59XG5cblxuLmdlbmVyYWwtaW1nLWNvbnRhaW5lciBpbWcgaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uZ2VuZXJhbC1pbWctY29udGFpbmVyOmhvdmVyIC5nZW5lcmFsLWltZy1jb3ZlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDglO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5nZW5lcmFsLWltZy1jb3ZlciBhOmhvdmVyIHtcbiAgY29sb3I6ICNEQzM1NDU7XG59XG5cbi5nZW5lcmFsLWJvZHkgaDIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5nZW5lcmFsLWJvZHkgaDIgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogI0RDMzU0NTtcbn1cblxuLmJ0biB7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uZ2VuZXJhbC1ib2R5IHAge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uZ2VuZXJhbC1ib2R5IGRpdi5ociB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDg1LCA4NSwgODUpO1xuICBtYXJnaW46IDEwcHggYXV0byAwO1xufVxuXG5cblxuLyogZ2VuZXJhbCBNRURJQSBRVUVSSUVTICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5nZW5lcmFsIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5nZW5lcmFsLWxlZnQge1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICAuZ2VuZXJhbC1yaWdodCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLm1lYXN1cmVzLWxlZnQge1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICAubWVhc3VyZXMtcmlnaHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuXG4gIC5nZW5lcmFsLWJvZHkgZGl2LmhyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmdlbmVyYWwtZm9vdGVyIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogNjJweCA0MnB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuXG4gIC5nZW5lcmFsLWxlZnQge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cblxuICAuZ2VuZXJhbC1yaWdodCB7XG4gICAgd2lkdGg6IDU3JTtcbiAgfVxuXG4gIC5tZWFzdXJlcy1sZWZ0IHtcbiAgICB3aWR0aDogNTclO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgLm1lYXN1cmVzLXJpZ2h0IHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG5cbiAgLmdlbmVyYWwtaW1nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuXG4gIC5nZW5lcmFsLWltZy1zaGFkb3cge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICM1NTU1NTU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiA2JTtcbiAgICByaWdodDogOCU7XG4gIH1cblxufVxuXG4uaW1nLWNvbnRhaW5lci0xIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmdlbmVyYWwtYm9keSBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5nZW5lcmFsLWJvZHkgZGl2LmhyIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuXG59XG5cbi5nZW5lcmFsIHtcbiAgcGFkZGluZzogNTBweCAxNXB4O1xufVxuXG4uZ2VuZXJhbC1pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cblxuLmdlbmVyYWwtaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uZ2VuZXJhbC1pbWctY29udGFpbmVyOmhvdmVyIC5nZW5lcmFsLWltZy1jb3ZlciB7XG4gIGhlaWdodDogMTAwJTtcblxufVxuXG4uZ2VuZXJhbC1pbWctY292ZXIgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0OCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIGE6aG92ZXIge1xuICBjb2xvcjogI0RDMzU0NTtcbn1cblxuLmdlbmVyYWwtYm9keSBoMiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmdlbmVyYWwtYm9keSBoMiBoNCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuXG5oNCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuXG4uZ2VuZXJhbC1ib2R5IHAge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uZ2VuZXJhbC1ib2R5IGRpdi5ociB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDg1LCA4NSwgODUpO1xuICBtYXJnaW46IDEwcHggYXV0byAwO1xufVxuXG5cblxuLyogZ2VuZXJhbCBNRURJQSBRVUVSSUVTICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5nZW5lcmFsIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5nZW5lcmFsLWxlZnQge1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICAuZ2VuZXJhbC1yaWdodCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLm1lYXN1cmVzLWxlZnQge1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cblxuICAubWVhc3VyZXMtcmlnaHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuXG4gIC5nZW5lcmFsLWJvZHkgZGl2LmhyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmdlbmVyYWwtZm9vdGVyIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTJweCAyMnB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuXG4gIC5nZW5lcmFsLWxlZnQge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cblxuICAuZ2VuZXJhbC1yaWdodCB7XG4gICAgd2lkdGg6IDU3JTtcbiAgfVxuXG4gIC5tZWFzdXJlcy1sZWZ0IHtcbiAgICB3aWR0aDogNTclO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgLm1lYXN1cmVzLXJpZ2h0IHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG5cbiAgLmdlbmVyYWwtaW1nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuXG4gIC5nZW5lcmFsLWltZy1zaGFkb3cge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICM1NTU1NTU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiA2JTtcbiAgICByaWdodDogOCU7XG4gIH1cblxufVxuXG5cbiNsaW5rMSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IDAgNnJlbTtcblxuICAvKiBwYWRkaW5nLXRvcDogMnJlbTsgKi9cbn1cblxuI2xpbmsyIHtcbiAgcGFkZGluZzogMCA2cmVtO1xufVxuXG4jbGluazMge1xuICBwYWRkaW5nOiAwIDZyZW07XG5cbiAgLyogcGFkZGluZy10b3A6IDJyZW07ICovXG59XG5cblxubWRiLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZ2VuZXJhbC1ib2R5IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICB9XG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gIC5zY3JvbGxzcHktZXhhbXBsZSB7XG4gICAgcGFkZGluZzogNXJlbSA2cmVtO1xuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XG4gIC5zY3JvbGxzcHktZXhhbXBsZSB7XG4gICAgcGFkZGluZzogNXJlbSAxcmVtO1xuICB9XG5cbiAgI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcblxuICAgIC8qIHBhZGRpbmctdG9wOiAycmVtOyAqL1xuICB9XG5cbiAgI2xpbmsyIHtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgfVxuXG4gICNsaW5rMyB7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG5cbiAgICAvKiBwYWRkaW5nLXRvcDogMnJlbTsgKi9cbiAgfVxuXG4gIC5zY3JvbGxzcHktZXhhbXBsZSB7XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNSUsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5cbi5jaGV2cm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLjUsIDAuNSwgMC41KTtcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGVhc2Utb3V0IGluZmluaXRlO1xufVxuXG4uY2hldnJvbjpmaXJzdC1jaGlsZCB7XG4gIGFuaW1hdGlvbjogbW92ZSAzcyBlYXNlLW91dCAxcyBpbmZpbml0ZTtcbn1cblxuLmNoZXZyb246bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGVhc2Utb3V0IDJzIGluZmluaXRlO1xufVxuXG4uY2hldnJvbjpiZWZvcmUsXG4uY2hldnJvbjphZnRlciB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUxJTtcbiAgYmFja2dyb3VuZDogI0RDMzU0NTtcbn1cblxuLmNoZXZyb246YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIDMwZGVnKTtcbn1cblxuLmNoZXZyb246YWZ0ZXIge1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC0zMGRlZyk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcblxuICB9XG5cbiAgMzMlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuXG4gIDY3JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1NXB4KSBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4jYXJyb3ctc3R5bGUge1xuICBwYWRkaW5nLXRvcDogMTIlO1xuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4jYXJyb3ctc3R5bGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.ts ***!
  \*****************************************************************/
/*! exports provided: LatestNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNewsComponent", function() { return LatestNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






function LatestNewsComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", news_r28, " ");
} }
class LatestNewsComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.News = [];
    }
    ngOnInit() {
        console.log('We are here: latest news');
        this.coronaService.getLatestNews().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here news');
            console.log(data);
            this.News = data;
        });
    }
}
LatestNewsComponent.ɵfac = function LatestNewsComponent_Factory(t) { return new (t || LatestNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
LatestNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestNewsComponent, selectors: [["app-latest-news"]], decls: 4, vars: 1, consts: [["id", "link1"], [2, "padding", "13px"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function LatestNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LatestNewsComponent_mat_card_3_Template, 4, 1, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.News);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n    padding: 0 6rem;\n  }\n  \n  .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n  }\n  \n  @media only screen and (max-width: 500px) {\n    #link1[_ngcontent-%COMP%] {\n      padding: 0 1rem;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXRlc3QtbmV3cy9sYXRlc3QtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF0ZXN0LW5ld3MvbGF0ZXN0LW5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaW5rMSB7XG4gICAgcGFkZGluZzogMCA2cmVtO1xuICB9XG4gIFxuICAuaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICNsaW5rMSB7XG4gICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgfVxuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latest-news',
                templateUrl: './latest-news.component.html',
                styleUrls: ['./latest-news.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/measures/measures.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/measures/measures.component.ts ***!
  \***********************************************************/
/*! exports provided: MeasuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasuresComponent", function() { return MeasuresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MeasuresComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measures_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", measures_r11, " ");
} }
class MeasuresComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.Measures = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.getMeasures().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Measures = data;
        });
    }
}
MeasuresComponent.ɵfac = function MeasuresComponent_Factory(t) { return new (t || MeasuresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
MeasuresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeasuresComponent, selectors: [["app-measures"]], decls: 9, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/person-small.png", "alt", "profile"], [1, "text-center"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function MeasuresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Preventative Measures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MeasuresComponent_mat_card_8_Template, 4, 1, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Measures);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n\n  \n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWFzdXJlcy9tZWFzdXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTs7RUFFZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lYXN1cmVzL21lYXN1cmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGluazEge1xuICBwYWRkaW5nOiAwIDZyZW07XG5cbiAgLyogcGFkZGluZy10b3A6IDJyZW07ICovXG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasuresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-measures',
                templateUrl: './measures.component.html',
                styleUrls: ['./measures.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return ["/coming"]; };
const _c1 = function () { return ["/app-circulars"]; };
const _c2 = function () { return ["/app-about-us"]; };
function NavbarComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest Discoveries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Research/Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Statement Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
} }
const _c3 = function () { return ["/home"]; };
const _c4 = function () { return ["/faq"]; };
class NavbarComponent {
    constructor(document) {
        this.document = document;
    }
    ngOnInit() {
        // craating and script element and add it to the body
        const script = this.document.createElement('script');
        script.id = 'mainscript';
        script.src = 'assets/js/main.js';
        script.type = 'text/javascript';
        this.document.body.appendChild(script);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 8, consts: [["SideClass", "navbar navbar-expand-lg navbar-dark unique-color-dark fixed-top"], [1, "navbar-brand", 2, "color", "azure", "float", "right", 3, "routerLink"], [1, "text-danger"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "routerLink"], [1, "nav-item", "btn-group"], ["dropdownToggle", "", "mdbWavesEffect", "", "mdbWavesEffect", "", 1, "nav-link", 3, "routerLink"], ["dropdown", "", 1, "nav-item", "btn-group"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], [1, "caret"], ["class", "dropdown-menu dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu", "dropdown", "dropdown-primary"], ["mdbWavesEffect", "", 1, "dropdown-item", "waves-light", 3, "routerLink"], [1, "dropdown-divider"], ["mdbWavesEffect", "", "routerLinkActive", "active", 1, "dropdown-item", "waves-light", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 Namibia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hotline: 0800 100 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " General Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Testing Centres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_div_28_Template, 10, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/app-corona-general-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/app-statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/app-testing-centres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownMenuDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".navb[_ngcontent-%COMP%] {\n  font-family: karmina;\n  font-size: 16px;\n\n}\n\n.navfloat[_ngcontent-%COMP%] {\nfloat: inline-end;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  width: 90px !important;\n  height: 50px !important;\n}\n\nnav[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.9);\n    transition-duration: 1.2s;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 46px;\n    position: relative;\n    left: 20px;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255,0.7);\n    \n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n    color: #fff;\n    font-weight: bold;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item.activeClick[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: #DC3545;\n}\n\n.home[_ngcontent-%COMP%] {\n  \n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100vh;\n}\n\n\n\n.trans-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  height: 100vh;\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n  color: #fff;\n  position: relative;\n  top: 25%;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.welcome-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #DC3545;\n  font-weight: bold;\n}\n\n.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 300;\n}\n\n\n\n@media screen and (min-width:768px) {\n\n  .welcome-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      font-size: 24px;\n  }\n\n  .welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 70px;\n  }\n\n  .welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 26px;\n  }\n}\n\n.general[_ngcontent-%COMP%] {\n  padding: 70px 15px;\n}\n\n.general-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.general-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n\n.general-img-cover[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  text-align: center;\n  overflow: hidden;\n  transition: all .5s;\n}\n\n.general-img-container[_ngcontent-%COMP%]:hover   .general-img-cover[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  top: 48%;\n  padding: 10px;\n  text-decoration: none;\n  color: #fff;\n  font-size: 18px;\n  transition: all .4s;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: rgb(85, 85, 85);\n  line-height: 25px;\n}\n\n.general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n  border-top: 1px dotted rgb(85, 85, 85);\n  margin: 10px auto 0;\n}\n\n\n\n@media screen and (min-width: 768px) {\n  .general[_ngcontent-%COMP%] {\n      overflow: auto;\n  }\n\n  .general-left[_ngcontent-%COMP%] {\n      margin-top: 32px;\n      width: 40%;\n      float: left;\n      padding: 0 15px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n      width: 60%;\n      float: right;\n      padding: 0 15px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n      margin-bottom: 0;\n  }\n\n  .general-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      padding: 12px 22px;\n  }\n\n}\n\n@media screen and (min-width: 992px) {\n\n\n  .general-left[_ngcontent-%COMP%] {\n      width: 35%;\n      text-align: right;\n      margin-left: 30px;\n  }\n\n  .general-right[_ngcontent-%COMP%] {\n      width: 57%;\n  }\n\n  .general-img-container[_ngcontent-%COMP%] {\n      position: relative;\n      top: 20px;\n      left: 5%;\n  }\n\n  .general-img-shadow[_ngcontent-%COMP%] {\n      z-index: -1;\n      border: 8px solid #555555;\n      border-radius: 5px;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      bottom: 6%;\n      right: 8%;\n  }\n\n}\n\n@media screen and (min-width: 1200px) {\n  .general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n  }\n\n  .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n      margin: 20px auto;\n  }\n\n}\n\n.general[_ngcontent-%COMP%] {\n    padding: 70px 15px;\n}\n\n.general-img-container[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 10px;\n}\n\n.general-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n.general-img-cover[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0%;\n    text-align: center;\n    overflow: hidden;\n    transition: all .5s;\n}\n\n.general-img-container[_ngcontent-%COMP%]:hover   .general-img-cover[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    top: 48%;\n    padding: 10px;\n    text-decoration: none;\n    color: #fff;\n    font-size: 18px;\n    transition: all .4s;\n}\n\n.general-img-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    font-weight: 600;\n}\n\n.general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 8px;\n    color: #DC3545;\n}\n\n.general-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    color: rgb(85, 85, 85);\n    line-height: 25px;\n}\n\n.general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n    border-top: 1px dotted rgb(85, 85, 85);\n    margin: 10px auto 0;\n}\n\n\n\n@media screen and (min-width: 768px) {\n    .general[_ngcontent-%COMP%] {\n        overflow: auto;\n    }\n\n    .general-left[_ngcontent-%COMP%] {\n        margin-top: 32px;\n        width: 40%;\n        float: left;\n        padding: 0 15px;\n    }\n\n    .general-right[_ngcontent-%COMP%] {\n        width: 60%;\n        float: right;\n        padding: 0 15px;\n    }\n\n    .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n    }\n\n    .general-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        padding: 12px 22px;\n    }\n\n}\n\n@media screen and (min-width: 992px) {\n\n\n    .general-left[_ngcontent-%COMP%] {\n        width: 35%;\n        text-align: right;\n        margin-left: 30px;\n    }\n\n    .general-right[_ngcontent-%COMP%] {\n        width: 57%;\n    }\n\n    .general-img-container[_ngcontent-%COMP%] {\n        position: relative;\n        top: 20px;\n        left: 5%;\n    }\n\n    .general-img-shadow[_ngcontent-%COMP%] {\n        z-index: -1;\n        border: 8px solid #555555;\n        border-radius: 5px;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        bottom: 6%;\n        right: 8%;\n    }\n\n}\n\n\n\n.welcome-message[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]  {\n  margin-bottom: 5rem !important;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  padding: 0 0 0 15rem;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: medium;\n  text-transform: capitalize;\n}\n\n#link1[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  \n}\n\n#link2[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  \n}\n\n#link3[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  \n}\n\n#link4[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  \n}\n\n#link5[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  \n}\n\n@media screen and (min-width: 1200px) {\n    .general-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .general-body[_ngcontent-%COMP%]   div.hr[_ngcontent-%COMP%] {\n        margin: 20px auto;\n    }\n\n}\n\n@media screen and (min-width: 768px) {\n    nav[_ngcontent-%COMP%] {\n        background-color: transparent;\n    }\n}\n\n.dropdown[_ngcontent-%COMP%] {\n    float: left;\n    overflow: hidden;\n  }\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n    font-size: 16px;\n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: inherit;\n    margin: 0;\n  }\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n    background-color: red;\n  }\n\n.dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n  }\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ddd;\n  }\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n@media only screen and (max-width: 1025px) {\n    .navbar-nav[_ngcontent-%COMP%] {\n      padding: 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7O0FBRWpCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFJQTtFQUNFLDBEQUEwRDtFQUMxRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBQ0g7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCOztBQUV2Qjs7RUFFRTtNQUNJLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxlQUFlO0VBQ25COztFQUVBO01BQ0ksZUFBZTtFQUNuQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBSUEsMEJBQTBCOztBQUUxQjtFQUNFO01BQ0ksY0FBYztFQUNsQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsV0FBVztNQUNYLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsWUFBWTtNQUNaLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUY7O0FBRUE7OztFQUdFO01BQ0ksVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixpQkFBaUI7RUFDckI7O0VBRUE7TUFDSSxVQUFVO0VBQ2Q7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7RUFDWjs7RUFFQTtNQUNJLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVU7TUFDVixTQUFTO0VBQ2I7O0FBRUY7O0FBRUE7RUFDRTtNQUNJLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFRjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2Qjs7QUFJQSwwQkFBMEI7O0FBRTFCO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjs7QUFFQTs7O0lBR0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtJQUNaOztJQUVBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLFNBQVM7SUFDYjs7QUFFSjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjs7QUFJQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLFNBQVM7RUFDWDs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUdBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmF2YiB7XG4gIGZvbnQtZmFtaWx5OiBrYXJtaW5hO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLm5hdmZsb2F0IHtcbmZsb2F0OiBpbmxpbmUtZW5kO1xufVxuXG5cbmltZyB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjBweDtcbn1cblxuLm5hdmJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LDAuNyk7XG4gICAgLyogZm9udC13ZWlnaHQ6IDEwMDsgKi9cbn1cbi5uYXZiYXIgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmt7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXZiYXIgLm5hdi1pdGVtLmFjdGl2ZUNsaWNrIC5uYXYtbGluayB7XG4gICAgY29sb3I6ICNEQzM1NDU7XG59XG5cblxuXG4uaG9tZSB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlLmpwZyk7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogLmhvbWUgI3dvcmQge1xuICBjb2xvcjogI0RDMzU0NTtcbn0gKi9cbi50cmFucy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5cbi53ZWxjb21lLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSBzcGFuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ud2VsY29tZS1tZXNzYWdlIGgxIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBjb2xvcjogI0RDMzU0NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53ZWxjb21lLW1lc3NhZ2UgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLyogSE9NRSBNRURJQSBRVUVSSUVTICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcblxuICAud2VsY29tZS1tZXNzYWdlIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLndlbGNvbWUtbWVzc2FnZSBoMSB7XG4gICAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cblxuICAud2VsY29tZS1tZXNzYWdlIHAge1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG5cbi5nZW5lcmFsIHtcbiAgcGFkZGluZzogNzBweCAxNXB4O1xufVxuXG4uZ2VuZXJhbC1pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5nZW5lcmFsLWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ2VuZXJhbC1pbWctY292ZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5nZW5lcmFsLWltZy1jb250YWluZXI6aG92ZXIgLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2VuZXJhbC1pbWctY292ZXIgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0OCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIGE6aG92ZXIge1xuICBjb2xvcjogI0RDMzU0NTtcbn1cblxuLmdlbmVyYWwtYm9keSBoMiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmdlbmVyYWwtYm9keSBoMiBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuXG4uZ2VuZXJhbC1ib2R5IHAge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uZ2VuZXJhbC1ib2R5IGRpdi5ociB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDg1LCA4NSwgODUpO1xuICBtYXJnaW46IDEwcHggYXV0byAwO1xufVxuXG5cblxuLyogZ2VuZXJhbCBNRURJQSBRVUVSSUVTICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5nZW5lcmFsIHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmdlbmVyYWwtbGVmdCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLmdlbmVyYWwtcmlnaHQge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuXG4gIC5nZW5lcmFsLWJvZHkgZGl2LmhyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAuZ2VuZXJhbC1mb290ZXIgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMjJweDtcbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cblxuICAuZ2VuZXJhbC1sZWZ0IHtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgLmdlbmVyYWwtcmlnaHQge1xuICAgICAgd2lkdGg6IDU3JTtcbiAgfVxuXG4gIC5nZW5lcmFsLWltZy1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgbGVmdDogNSU7XG4gIH1cblxuICAuZ2VuZXJhbC1pbWctc2hhZG93IHtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgYm9yZGVyOiA4cHggc29saWQgIzU1NTU1NTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm90dG9tOiA2JTtcbiAgICAgIHJpZ2h0OiA4JTtcbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZ2VuZXJhbC1ib2R5IGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZ2VuZXJhbC1ib2R5IGRpdi5ociB7XG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuXG59XG4uZ2VuZXJhbCB7XG4gICAgcGFkZGluZzogNzBweCAxNXB4O1xufVxuXG4uZ2VuZXJhbC1pbWctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4uZ2VuZXJhbC1pbWctY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5nZW5lcmFsLWltZy1jb250YWluZXI6aG92ZXIgLmdlbmVyYWwtaW1nLWNvdmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZW5lcmFsLWltZy1jb3ZlciBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0OCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5nZW5lcmFsLWltZy1jb3ZlciBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0RDMzU0NTtcbn1cblxuLmdlbmVyYWwtYm9keSBoMiB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5nZW5lcmFsLWJvZHkgaDIgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgY29sb3I6ICNEQzM1NDU7XG59XG5cbi5nZW5lcmFsLWJvZHkgcCB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDg1LCA4NSwgODUpO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XG59XG5cblxuXG4vKiBnZW5lcmFsIE1FRElBIFFVRVJJRVMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuZ2VuZXJhbCB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIC5nZW5lcmFsLWxlZnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgIH1cblxuICAgIC5nZW5lcmFsLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5nZW5lcmFsLWZvb3RlciBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIycHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cblxuICAgIC5nZW5lcmFsLWxlZnQge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtcmlnaHQge1xuICAgICAgICB3aWR0aDogNTclO1xuICAgIH1cblxuICAgIC5nZW5lcmFsLWltZy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgbGVmdDogNSU7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtaW1nLXNoYWRvdyB7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjNTU1NTU1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm90dG9tOiA2JTtcbiAgICAgICAgcmlnaHQ6IDglO1xuICAgIH1cblxufVxuXG4vKiBob21lIHNlY3Rpb24gKi9cbi53ZWxjb21lLW1lc3NhZ2Uge1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbn1cblxuLyogbmF2IGJhciBzdHlsaW5nICovXG4ubmF2YmFyICB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW0gIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1uYXYge1xuICBwYWRkaW5nOiAwIDAgMCAxNXJlbTtcbn1cblxuXG4ubmF2YmFyLW5hdiAgbGkgYSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuI2xpbmsxIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC8qIHBhZGRpbmctdG9wOiAycmVtOyAqL1xufVxuXG4jbGluazIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgLyogcGFkZGluZy10b3A6IDJyZW07ICovXG59XG5cbiNsaW5rMyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvKiBwYWRkaW5nLXRvcDogMnJlbTsgKi9cbn1cblxuXG4jbGluazQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgLyogcGFkZGluZy10b3A6IDJyZW07ICovXG59XG5cbiNsaW5rNSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvKiBwYWRkaW5nLXRvcDogMnJlbTsgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmdlbmVyYWwtYm9keSBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmdlbmVyYWwtYm9keSBkaXYuaHIge1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB9XG5cbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbmF2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5cbi5kcm9wZG93biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5cbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cblxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAgIC5uYXZiYXItbmF2IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/statistics-latest/statistics-latest.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/statistics-latest/statistics-latest.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StatisticsLatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsLatestComponent", function() { return StatisticsLatestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StatisticsLatestComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StatisticsLatestComponent.ɵfac = function StatisticsLatestComponent_Factory(t) { return new (t || StatisticsLatestComponent)(); };
StatisticsLatestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsLatestComponent, selectors: [["app-statistics-latest"]], decls: 2, vars: 0, template: function StatisticsLatestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "statistics-latest works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy1sYXRlc3Qvc3RhdGlzdGljcy1sYXRlc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsLatestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics-latest',
                templateUrl: './statistics-latest.component.html',
                styleUrls: ['./statistics-latest.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/statistics-periodic/statistics-periodic.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/statistics-periodic/statistics-periodic.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StatisticsPeriodicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPeriodicComponent", function() { return StatisticsPeriodicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StatisticsPeriodicComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StatisticsPeriodicComponent.ɵfac = function StatisticsPeriodicComponent_Factory(t) { return new (t || StatisticsPeriodicComponent)(); };
StatisticsPeriodicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsPeriodicComponent, selectors: [["app-statistics-periodic"]], decls: 2, vars: 0, template: function StatisticsPeriodicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "statistics-periodic works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy1wZXJpb2RpYy9zdGF0aXN0aWNzLXBlcmlvZGljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsPeriodicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics-periodic',
                templateUrl: './statistics-periodic.component.html',
                styleUrls: ['./statistics-periodic.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/statistics/statistics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class StatisticsComponent {
    constructor(http) {
        this.http = http;
        this.suspectedCount = 0;
        this.confirmedCount = 0;
        this.deathCount = 0;
        this.recoveredCount = 0;
        this.updated = new Date();
        //Chart info setup and configuration for chart
        this.suspectedList = new Array();
        this.confirmedList = new Array();
        this.deadList = new Array();
        this.recoveredList = new Array();
        this.regionsNames = new Array();
        this.isLoaded = false;
        this.chartType = 'bar';
        this.chartDatasets = [
            { data: this.suspectedList, label: 'Suspected' },
            { data: this.confirmedList, label: 'Confirmed' },
            { data: this.recoveredList, label: 'Recovered' },
            { data: this.deadList, label: 'Deaths' }
        ];
        this.chartLabels = this.regionsNames;
        this.chartColors = [
            {
                backgroundColor: this.getColor('orange'),
                borderColor: this.getColor('orange'),
                borderWidth: 2,
            },
            {
                backgroundColor: this.getColor('blue'),
                borderColor: this.getColor('blue'),
                borderWidth: 1,
            },
            {
                backgroundColor: this.getColor('green'),
                borderColor: this.getColor('green'),
                borderWidth: 1,
            },
            {
                backgroundColor: this.getColor('red'),
                borderColor: this.getColor('red'),
                borderWidth: 1,
            }
        ];
        this.chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'COVID-19 Namibia Regional Data',
                position: 'top',
                fontSize: 22,
                fontfamily: "'Arial', 'Helvetica', 'sans-serif'"
            }
        };
        this.data = [];
        this.selected = {
            recovered: 0,
            dead: 0,
            suspected: 0,
            confirmed: 0,
            worldwide: 0
        };
        this.localData = JSON;
        this.localValue = [];
        this.stat_data = [];
    }
    ngOnInit() {
        this.suspectedCount = 0;
        this.datenow = new Date().toLocaleDateString();
        console.log('We are here home 1mmmI ');
        this.http.getStats().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here after request');
            console.log(data);
            this.stat_data = data;
            console.log('Starts');
            console.log('i am in home NEWWWWW');
            console.log(this.stat_data[this.stat_data.length - 1]['date'].toString());
            this.updated = new Date(this.stat_data[this.stat_data.length - 1]['date']);
            console.log(this.stat_data[this.stat_data.length - 1]['recovered']);
            this.startCounter();
        });
        //chart info from service
        this.http.getRegionalData().subscribe((res) => {
            const regions = JSON.parse(JSON.stringify(res)).regions;
            Object.keys(regions).forEach(key => {
                this.regionsNames.push(key.toLocaleUpperCase());
                this.suspectedList.push(regions[key].suspected);
                this.confirmedList.push(regions[key].confirmed);
                this.deadList.push(regions[key].dead);
                this.recoveredList.push(regions[key].recovered);
                console.log(regions[key]);
            });
            this.isLoaded = true;
        });
    }
    startCounter() {
        let Count = 0;
        //let max = Math.max(data[0].suspected,data[0].confirmed,data[0].dead,data[0].recovered);
        let theLoop = (i, type, first) => {
            if (first === true) {
                console.log('Here Count ..');
                this.suspectedCount = 0;
                this.confirmedCount = 0;
                this.recoveredCount = 0;
                this.deathCount = 0;
            }
            console.log(i.toString());
            setTimeout(() => {
                //metronome.play();
                if (i > 0) {
                    theLoop(--i, type, false);
                    if (type === 'suspected') {
                        this.suspectedCount++;
                    }
                    else if (type === 'confirmed') {
                        this.confirmedCount++;
                    }
                    else if (type === 'death') {
                        this.deathCount++;
                    }
                    else if (type === 'recovered') {
                        this.recoveredCount++;
                    }
                    //console.log(i+"=>"+this.suspectedCount)
                }
            }, 5);
        };
        var length = Object.keys(this.stat_data).length;
        console.log('ALL items =>' + length);
        theLoop(Number.parseInt(this.stat_data[length - 1]['suspected']), 'suspected', true);
        theLoop(Number.parseInt(this.stat_data[length - 1]['dead']), 'death', true);
        theLoop(Number.parseInt(this.stat_data[length - 1]['confirmed']), 'confirmed', true);
        theLoop(Number.parseInt(this.stat_data[length - 1]['recovered']), 'recovered', true);
    }
    drawMark() {
    }
    // method that will populate the selected object and update the badges on the html page
    select(date) {
        this.data.forEach(data => {
            if (data.date === date) {
                let value = {
                    recovered: data.recovered,
                    dead: data.dead,
                    suspected: parseInt(data.suspected),
                    confirmed: data.confirmed,
                    worldwide: data.worldwide
                };
                this.selected = value;
            }
        });
    }
    chartClicked(e) { }
    chartHovered(e) { }
    getColor(color) {
        const colorList = new Array(14);
        for (let i = 0; i < colorList.length; i++) {
            colorList[i] = color;
        }
        return colorList;
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], decls: 39, vars: 15, consts: [[1, "stats-section"], [1, "container"], [1, "row"], [1, "col", "text-center", 2, "font-family", "Arial, Helvetica, sans-serif"], [1, "row", "text-center"], [1, "col-md"], [1, "counter", "bg-info"], [1, "count-title"], [1, "count-text"], [1, "counter", "bg-success"], [1, "counter", "bg-danger"], [1, "counter", "bg-warning"], [2, "padding-top", "5em"], [2, "display", "block", 3, "hidden"], ["mdbChart", "", 3, "chartType", "datasets", "labels", "colors", "options", "legend", "chartHover", "chartClick"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirmed Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recovered Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirmed Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Suspected Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function StatisticsComponent_Template_canvas_chartHover_38_listener($event) { return ctx.chartHovered($event); })("chartClick", function StatisticsComponent_Template_canvas_chartClick_38_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("COVID-19 Namibia National Statistics last updated ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 12, ctx.updated, "EEEE, MMMM d, y, H:mm:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recoveredCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.deathCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.suspectedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("datasets", ctx.chartDatasets)("labels", ctx.chartLabels)("colors", ctx.chartColors)("options", ctx.chartOptions)("legend", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".stats-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 5rem;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0rem 2rem 0 3rem;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  margin-left: 8rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 1.5rem;\n}\n\n.primary[_ngcontent-%COMP%] {\n  background: #063bca;\n  color: rgb(255, 255, 255);\n\n}\n\n.success[_ngcontent-%COMP%] {\n  background: #1c8135;\n  color: rgb(255, 255, 255);\n\n}\n\n.danger[_ngcontent-%COMP%] {\n  background: #ca0606;\n  color: rgb(255, 255, 255);\n}\n\n.warning[_ngcontent-%COMP%] {\n  background: #e9ab37;\n  color: rgb(255, 255, 255);\n\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.counter[_ngcontent-%COMP%] {\n  background-color:#f5f5f5;\n  padding: 20px 0;\n  border-radius: 5px;\n}\n\n.count-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: normal;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.count-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight:bold;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.fa-2x[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  float: none;\n  display: table;\n  color: #4ad1e5;\n}\n\n@media only screen and (max-width: 1025px) {\n\n  .buttons[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    margin-left: 3rem;\n  }\n\n  button[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n\n}\n\n@media only screen and (max-width: 500px) {\n\n  .stats-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n\n  mat-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 0.3rem;\n  }\n\n\n  .buttons[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    margin-left: 2rem;\n  }\n\n  button[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    width: 85%;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVGOztBQUVBOztFQUVFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0cy1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiA1cmVtO1xufVxuXG5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMHJlbSAycmVtIDAgM3JlbTtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tbGVmdDogOHJlbTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEuNXJlbTtcbn1cblxuLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMDYzYmNhO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG59XG5cbi5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogIzFjODEzNTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxufVxuXG4uZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogI2NhMDYwNjtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZTlhYjM3O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jb3VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvdW50LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS0yeCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiAjNGFkMWU1O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkge1xuXG4gIC5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAuc3RhdHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICB9XG5cbiAgbWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAwLjNyZW07XG4gIH1cblxuXG4gIC5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICB3aWR0aDogODUlO1xuICB9XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/symptoms/symptoms.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/symptoms/symptoms.component.ts ***!
  \***********************************************************/
/*! exports provided: SymptomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function() { return SymptomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SymptomsComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symptoms_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", symptoms_r7, " ");
} }
class SymptomsComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.Symptoms = [];
    }
    ngOnInit() {
        this.coronaService.getSymptoms().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Symptoms = data;
        });
    }
}
SymptomsComponent.ɵfac = function SymptomsComponent_Factory(t) { return new (t || SymptomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
SymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymptomsComponent, selectors: [["app-symptoms"]], decls: 9, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/symtom-small.png", "alt", "profile"], [2, "padding", "13px"], [2, "text-align", "center"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function SymptomsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Symptoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SymptomsComponent_mat_card_8_Template, 4, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Symptoms);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: [".img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n#link1[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n}\n\n@media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zeW1wdG9tcy9zeW1wdG9tcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N5bXB0b21zL3N5bXB0b21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiNsaW5rMSB7XG4gIHBhZGRpbmc6IDAgNnJlbTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNsaW5rMSB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-symptoms',
                templateUrl: './symptoms.component.html',
                styleUrls: ['./symptoms.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tech-response/tech-response.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tech-response/tech-response.component.ts ***!
  \*********************************************************************/
/*! exports provided: TechResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechResponseComponent", function() { return TechResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");




class TechResponseComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TechResponseComponent.ɵfac = function TechResponseComponent_Factory(t) { return new (t || TechResponseComponent)(); };
TechResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechResponseComponent, selectors: [["app-tech-response"]], decls: 14, vars: 0, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/person-small.png", "alt", "profile"], [1, "text-center"], [2, "font-size", "20px"], [1, "text-danger"]], template: function TechResponseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Namibia COVID-19 Tech Response Virtual Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Virtual Hackathon for Namibia\u2019s COVID-19 Tech Response has more than 80 local & international people across projects. To join the Hackathon please send us an email consisting of your full name, contact details and your area of expertise to the following email address : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "NamibiaCovid19tech@nust.na");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n    padding: 0 6rem;\n  \n    \n  }\n  \n  .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n  }\n  \n  @media only screen and (max-width: 500px) {\n    #link1[_ngcontent-%COMP%] {\n      padding: 0 1rem;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWNoLXJlc3BvbnNlL3RlY2gtcmVzcG9uc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7O0lBRWYsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWNoLXJlc3BvbnNlL3RlY2gtcmVzcG9uc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaW5rMSB7XG4gICAgcGFkZGluZzogMCA2cmVtO1xuICBcbiAgICAvKiBwYWRkaW5nLXRvcDogMnJlbTsgKi9cbiAgfVxuICBcbiAgLmltZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAjbGluazEge1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgIH1cbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechResponseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tech-response',
                templateUrl: './tech-response.component.html',
                styleUrls: ['./tech-response.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/testing-centres/testing-centres.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/testing-centres/testing-centres.component.ts ***!
  \*************************************************************************/
/*! exports provided: TestingCentresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingCentresComponent", function() { return TestingCentresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TestingCentresComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const testing_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", testing_r26.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", testing_r26.about, " ");
} }
class TestingCentresComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.testingCentres = [
            {
                name: "Namibian Institute of Pathology (NIP)",
                about: "NIP is the largest diagnostic pathology service provider in Namibia. For testing, Please bring along a doctor’s referral form. The test results will be forwarded to your doctor who will contact you within 48 hours with your results. Price N$ 1100.00.",
                coordinates: {
                    latitude: -22.552113,
                    longitude: 17.079843
                }
            },
            {
                name: "Pathcare Namibia",
                about: " PathCare Namibia is a private pathology practice which strives to promote the health of the population by providing accessible, affordable, appropriate and equitable quality pathology services to all Namibians. For testing, Please bring along a doctor’s referral form. The turnaround time range between 2 to 5 days for test done by Path-care. Price N$ 1100.00",
                coordinates: {
                    latitude: -22.550549,
                    longitude: 17.090783
                }
            },
            {
                name: "Robert Mugabe Clinic",
                about: "Public healthcare organisation in Windhoek has commenced with the first screening of possible COVID-19 suspected cases.",
                coordinates: {
                    latitude: -22.561359,
                    longitude: 17.085626
                }
            }
        ];
        this.centre = false;
        this.Testing = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.getTestingCentres().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Testing = data;
        });
    }
    onMapClick(event) {
        for (let i = 0; i < this.testingCentres.length; i++) {
            this.testingCentres[i].coordinates.latitude = event.coords.lat;
            this.testingCentres[i].coordinates.longitude = event.coords.lng;
            this.centre = true;
        }
    }
    setTestCentres() {
        switch (this.name) {
            case "Namibian Institute of Pathology (NIP)": {
                ({
                    name: 'Namibian Institute of Pathology (NIP)',
                    latitude: `${this.testingCentres[0].coordinates.latitude}`,
                    longitude: `${this.testingCentres[0].coordinates.longitude}`,
                });
                break;
            }
            case "Pathcare Namibia": {
                ({
                    name: 'Pathcare Namibia',
                    latitude: `${this.testingCentres[0].coordinates.latitude}`,
                    longitude: `${this.testingCentres[0].coordinates.longitude}`,
                });
                break;
            }
            case "Robert Mugabe Clinic":
                {
                    ({
                        name: 'Robert Mugabe Clinic',
                        latitude: `${this.testingCentres[0].coordinates.latitude}`,
                        longitude: `${this.testingCentres[0].coordinates.longitude}`,
                    });
                }
                break;
        }
        console.log(this.name);
    }
    setTestingCentres() {
        for (let i = 0; i < this.testingCentres.length; i++) {
            if (this.name = this.testingCentres[i].name) {
                this.latitude === this.testingCentres[i].coordinates.latitude;
                this.longitude = this.testingCentres[i].coordinates.longitude;
                //this.centre = true;
                console.log(this.longitude);
                console.log(this.latitude);
                console.log(this.name);
            }
        }
    }
}
TestingCentresComponent.ɵfac = function TestingCentresComponent_Factory(t) { return new (t || TestingCentresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
TestingCentresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestingCentresComponent, selectors: [["app-testing-centres"]], decls: 8, vars: 1, consts: [[1, "testing-centres-section"], ["id", "link1"], [2, "padding", "13px"], [2, "text-align", "center"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function TestingCentresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Testing Centres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestingCentresComponent_mat_card_7_Template, 6, 2, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Testing);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: [".testing-centres-section[_ngcontent-%COMP%] {\n    position: relative;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 8rem;\n  }\n  \n  mat-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 0rem 3rem 0 3rem;\n  }\n  \n  agm-map[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  \n  h5[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  \n  .prgress[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 3.5rem 0 0 0;\n}\n  \n  #link1[_ngcontent-%COMP%] {\n    padding: 0 6rem;\n  \n    \n  }\n  \n  @media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n  }\n}\n  \n  @media only screen and (max-width: 1025px) {\n  \n  \n  \n \n  \n  }\n  \n  @media only screen and (max-width: 500px) {\n  \n    .testing-centres-section[_ngcontent-%COMP%] {\n      padding: 1rem 0;\n    }\n  \n    mat-card[_ngcontent-%COMP%] {\n      padding: 1rem;\n      margin: 0.3rem;\n    }\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0aW5nLWNlbnRyZXMvdGVzdGluZy1jZW50cmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFRjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztFQUdFO0lBQ0UsZUFBZTs7SUFFZix1QkFBdUI7RUFDekI7O0VBS0Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFDRjs7RUFLRTs7Ozs7O0VBTUE7O0VBRUE7O0lBRUU7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtNQUNiLGNBQWM7SUFDaEI7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlc3RpbmctY2VudHJlcy90ZXN0aW5nLWNlbnRyZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0aW5nLWNlbnRyZXMtc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogOHJlbTtcbiAgfVxuICBcbiAgbWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAwcmVtIDNyZW0gMCAzcmVtO1xuICB9XG4gIFxuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIFxuICBoNSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4ucHJncmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMuNXJlbSAwIDAgMDtcbn1cblxuICBcbiAgI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDZyZW07XG4gIFxuICAgIC8qIHBhZGRpbmctdG9wOiAycmVtOyAqL1xuICB9XG5cblxuXG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjbGluazEge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuICAuaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuXG5cbiAgXG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICBcbiAgXG4gIFxuIFxuICBcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBcbiAgICAudGVzdGluZy1jZW50cmVzLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgIH1cbiAgXG4gICAgbWF0LWNhcmQge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIG1hcmdpbjogMC4zcmVtO1xuICAgIH1cbiAgXG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestingCentresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testing-centres',
                templateUrl: './testing-centres.component.html',
                styleUrls: ['./testing-centres.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tips/tips.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tips/tips.component.ts ***!
  \***************************************************/
/*! exports provided: TipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsComponent", function() { return TipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TipsComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tips_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tips_r13, " ");
} }
class TipsComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.Tips = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.getTips().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Tips = data;
        });
    }
}
TipsComponent.ɵfac = function TipsComponent_Factory(t) { return new (t || TipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
TipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TipsComponent, selectors: [["app-tips"]], decls: 9, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/virus-small.png", "alt", "profile"], [2, "padding", "13px"], [2, "text-align", "center"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function TipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Advice and Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TipsComponent_mat_card_8_Template, 4, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Tips);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n  padding: 0 6rem;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXBzL3RpcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpcHMvdGlwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmsxIHtcbiAgcGFkZGluZzogMCA2cmVtO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNsaW5rMSB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tips',
                templateUrl: './tips.component.html',
                styleUrls: ['./tips.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/transmission/transmission.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/transmission/transmission.component.ts ***!
  \*******************************************************************/
/*! exports provided: TransmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionComponent", function() { return TransmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function TransmissionComponent_mat_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transmission_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transmission_r5, " ");
} }
class TransmissionComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.Transmission = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.Gettransmission().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Transmission = data;
        });
    }
}
TransmissionComponent.ɵfac = function TransmissionComponent_Factory(t) { return new (t || TransmissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
TransmissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransmissionComponent, selectors: [["app-transmission"]], decls: 12, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/tramission.png", "alt", "profile", 2, "height", "128px"], [2, "padding", "13px"], ["matLine", "", 2, "font-size", "30px"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function TransmissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " How is the virus transmitted? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransmissionComponent_mat_card_11_Template, 4, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Transmission);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n    padding: 0 6rem;\n  \n    \n  }\n\n  .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n  }\n\n  @media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc21pc3Npb24vdHJhbnNtaXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztJQUVmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBR0Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNtaXNzaW9uL3RyYW5zbWlzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDZyZW07XG4gIFxuICAgIC8qIHBhZGRpbmctdG9wOiAycmVtOyAqL1xuICB9XG5cbiAgLmltZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransmissionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transmission',
                templateUrl: './transmission.component.html',
                styleUrls: ['./transmission.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/treatment/treatment.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/treatment/treatment.component.ts ***!
  \*************************************************************/
/*! exports provided: TreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentComponent", function() { return TreatmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/corona-whatis.service */ "./src/app/services/corona-whatis.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TreatmentComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const treatment_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", treatment_r9, " ");
} }
class TreatmentComponent {
    constructor(coronaService) {
        this.coronaService = coronaService;
        this.Treatment = [];
    }
    ngOnInit() {
        console.log('We are here');
        this.coronaService.getTreatment().subscribe((data) => {
            // this.http.getWhatIsInfo().subscribe((data) => {
            console.log('We are here 9999');
            console.log(data);
            this.Treatment = data;
        });
    }
}
TreatmentComponent.ɵfac = function TreatmentComponent_Factory(t) { return new (t || TreatmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"])); };
TreatmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreatmentComponent, selectors: [["app-treatment"]], decls: 9, vars: 1, consts: [["id", "link1"], [1, "img-container"], ["src", "../../../assets/img/virus-small.png", "alt", "profile"], [2, "padding", "13px"], [2, "text-align", "center"], ["style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "font-size", "20px"]], template: function TreatmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreatmentComponent_mat_card_8_Template, 4, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Treatment);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["#link1[_ngcontent-%COMP%] {\n    padding: 0 6rem;\n  \n    \n  }\n\n  .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n  }\n\n  @media only screen and (max-width: 500px) {\n  #link1[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVhdG1lbnQvdHJlYXRtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztJQUVmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBR0Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlYXRtZW50L3RyZWF0bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDZyZW07XG4gIFxuICAgIC8qIHBhZGRpbmctdG9wOiAycmVtOyAqL1xuICB9XG5cbiAgLmltZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2xpbmsxIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreatmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-treatment',
                templateUrl: './treatment.component.html',
                styleUrls: ['./treatment.component.css']
            }]
    }], function () { return [{ type: src_app_services_corona_whatis_service__WEBPACK_IMPORTED_MODULE_1__["CoronaWhatisService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/corona-whatis.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/corona-whatis.service.ts ***!
  \***************************************************/
/*! exports provided: CoronaWhatisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaWhatisService", function() { return CoronaWhatisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CoronaWhatisService {
    constructor(client) {
        this.client = client;
        this.whatisApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/whatis';
        this.transmissionApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/transmission';
        this.symptomsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/symptoms';
        this.treatmentApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/treatment';
        this.measuresApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/measures';
        this.factsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/facts';
        this.tipsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/tips';
        this.faqsApi = 'https://covidservices.nust.na:6551/covid/v1/faq/all';
        this.circulars = 'https://covidservices.nust.na:6552/covid/v1/docs/doc';
        this.newsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/latest';
        this.centresApi = 'https://covidservices.nust.na:6550/covid/v1/centre/all';
        this.statisticsApi = 'https://covidservices.nust.na:6549/covid/v1/statistics/all';
        this.apiURL = 'https://covidservices.nust.na:{port}/covid/v1';
        //     var handler = new ();
        // handler.ClientCertificateOptions = ClientCertificateOption.Manual;
        // handler.SslProtocols = SslProtocols.Tls12;
        // handler.ClientCertificates.Add(new X509Certificate2("cert.crt"));
    }
    getRegionalData() {
        return this.client.get(`${this.apiURL.replace('{port}', '6549')}/statistics/aggregate`);
    }
    sendGetRequest() {
        return this.client.get(this.whatisApi);
    }
    getFaqs() {
        return this.client.get(this.faqsApi);
    }
    Gettransmission() {
        return this.client.get(this.transmissionApi);
    }
    getSymptoms() {
        return this.client.get(this.symptomsApi);
    }
    getTreatment() {
        return this.client.get(this.treatmentApi);
    }
    getMeasures() {
        return this.client.get(this.measuresApi);
    }
    getFacts() {
        return this.client.get(this.factsApi);
    }
    getTips() {
        return this.client.get(this.tipsApi);
    }
    getCirculars() {
        return this.client.get(this.circulars);
    }
    getLatestNews() {
        return this.client.get(this.newsApi);
    }
    getTestingCentres() {
        return this.client.get(this.centresApi);
    }
    getStats() {
        //this.client.
        return this.client.get(this.statisticsApi);
    }
}
CoronaWhatisService.ɵfac = function CoronaWhatisService_Factory(t) { return new (t || CoronaWhatisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CoronaWhatisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoronaWhatisService, factory: CoronaWhatisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronaWhatisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/httpservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/httpservice.service.ts ***!
  \*************************************************/
/*! exports provided: HttpserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpserviceService", function() { return HttpserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class HttpserviceService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://196.216.167.150:6552/covid/v1';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers.append('Access-Control-Allow-Headers', 'Authorization');
    }
    getCirculars() {
        return this.http.get('https://covidservices.nust.na:6552/covid/v1/docs/description');
    }
    downloadCirculars(docid) {
        console.log(docid);
        this.http.get('https://covidservices.nust.na:6552/covid/v1/docs/doc' + '/' + docid, { responseType: 'blob' }).subscribe(res => {
            window.open(window.URL.createObjectURL(res));
        });
    }
    getLatestInfo() {
        return this.http.get(`${this.apiURL}/statistics/latest`);
    }
    getLatestStats() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token',
            })
        };
        httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http
            .get('http://196.216.167.150:6549/covid/v1/statistics/all', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getPeriodicStats() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token',
            })
        };
        httpOptions.headers.append('Access-Control-Allow-Origin', '**');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http
            .get('https://cors-anywhere.herokuapp.com/http://196.216.167.150:6549/covid/v1/statistics/all', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getMeasures() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token',
            })
        };
        return this.http
            .get('http://196.216.167.190/codiv/v1/awareness/measures', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getSymptoms() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http
            .get('http://196.216.167.190/codiv/v1/awareness/symptoms', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getTips() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http
            .get('http://196.216.167.190/codiv/v1/awareness/tips', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getTreatment() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http
            .get('http://196.216.167.190/codiv/v1/awareness/treatment', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getWhatIsInfo() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http
            .get('https://cors-anywhere.herokuapp.com/http://196.216.167.150/covid/v1/awareness/whatis', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getFaqAll() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http
            .get('http://196.216.167.150:6551/covid/v1/faq/all', {
            headers: httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
}
HttpserviceService.ɵfac = function HttpserviceService_Factory(t) { return new (t || HttpserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpserviceService, factory: HttpserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nashandi/covid19-essapp/src/website/Namcovid19/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map