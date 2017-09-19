webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<app-mask></app-mask>\n<app-main-container></app-main-container>\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_js_marker_clusterer__ = __webpack_require__("../../../../@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_food_service__ = __webpack_require__("../../../../../src/app/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_accommodation_service__ = __webpack_require__("../../../../../src/app/services/accommodation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_healthcare_service__ = __webpack_require__("../../../../../src/app/services/healthcare.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_other_service__ = __webpack_require__("../../../../../src/app/services/other.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_mask_mask_component__ = __webpack_require__("../../../../../src/app/components/mask/mask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_main_container_main_container_component__ = __webpack_require__("../../../../../src/app/components/main-container/main-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_main_container_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/main-container/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_main_container_team_team_component__ = __webpack_require__("../../../../../src/app/components/main-container/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_main_container_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/main-container/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_mask_map_map_component__ = __webpack_require__("../../../../../src/app/components/mask/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'mask', component: __WEBPACK_IMPORTED_MODULE_15__components_mask_mask_component__["a" /* MaskComponent */] },
    { path: 'main-container', component: __WEBPACK_IMPORTED_MODULE_16__components_main_container_main_container_component__["a" /* MainContainerComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_21__components_mask_map_map_component__["a" /* MapComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_17__components_main_container_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_18__components_main_container_team_team_component__["a" /* TeamComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_19__components_main_container_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'footer', component: __WEBPACK_IMPORTED_MODULE_20__components_footer_footer_component__["a" /* FooterComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_mask_mask_component__["a" /* MaskComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_main_container_main_container_component__["a" /* MainContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_main_container_about_us_about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_main_container_team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_main_container_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_mask_map_map_component__["a" /* MapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyD0Aw_AuBepbQ1imricl1iVdkbu7tw8YWQ'
            }),
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_food_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_11__services_accommodation_service__["a" /* AccommodationService */], __WEBPACK_IMPORTED_MODULE_12__services_healthcare_service__["a" /* HealthcareService */], __WEBPACK_IMPORTED_MODULE_13__services_other_service__["a" /* OtherService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer center-on-small-only\">\n\n  <!--Footer Links-->\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--First column-->\n      <div class=\"col-md-3 offset-md-1\">\n        <h6 class=\"title\">© 2017 Homely-Paws</h6>\n        <p>Monash University <br> FIT5120 Industry Experience Project</p>\n      </div>\n      <!--/.First column-->\n\n      <hr class=\"hidden-md-up\">\n\n      <!--Second column-->\n      <div class=\"col-md-2 offset-md-2\">\n        <h5 class=\"title\">Our Website</h5>\n        <ul>\n          <li><a href=\"#home\">Home</a></li>\n          <li><a href=\"#about-us\">About Us</a></li>\n          <li><a href=\"#our-team\">Team</a></li>\n        </ul>\n      </div>\n      <!--/.Second column-->\n\n    </div>\n  </div>\n  <!--/.Footer Links-->\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-container/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-container/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about-us\" class=\"divider-new\">\n  <h2 class=\"h2-responsive wow fadeInDown\">About Us</h2>\n</div>\n\n<!--Section: About Us-->\n<section>\n  <div class=\"row\">\n    <!--First column-->\n    <div class=\"col-md-5 wow fadeIn\">\n      <h2 class=\"h2-responsive\">Our Mission</h2>\n      <hr>\n      <p>Homely Paws believes in helping the Pets of the Homeless, as the healing power of companion pets and of the human/animal\n        bond are very important in the lives of many homeless. They find solace, safety and companionship through their pets.\n        They care for their pets on limited resources so they themselves have less.\n      </p>\n      <p>Team Supernova aims in providing a web based application, called Homely Paws, which delivers a platform of services\n        for homeless with pets. Some of the services such as emergency boarding, food, basic emergency veterinary care to\n        their pets.</p>\n    </div>\n    <!--/First column-->\n\n    <!--Second column-->\n    <div class=\"col-md-7\">\n      <!--Carousel Wrapper-->\n      <div id=\"carousel-example-2\" class=\"carousel slide carousel-fade no-flex wow fadeIn\" data-wow-delay=\"0.3s\" data-ride=\"carousel\">\n        <!--Indicators-->\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel-example-2\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel-example-2\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carousel-example-2\" data-slide-to=\"2\"></li>\n        </ol>\n        <!--/.Indicators-->\n\n        <!--Slides-->\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"carousel-item active\">\n            <img class=\"img-fluid\" src=\"assets/img/slides/slide1.jpg\" alt=\"First slide\">\n            <div class=\"carousel-caption\">\n              <!-- <h3>Heading</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid\" src=\"assets/img/slides/slide2.jpg\" alt=\"Second slide\">\n            <div class=\"carousel-caption\">\n              <!-- <h3>Heading</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid\" src=\"assets/img/slides/slide3.jpg\" alt=\"Third slide\">\n            <div class=\"carousel-caption\">\n              <!-- <h3>Heading</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->\n            </div>\n          </div>\n        </div>\n        <!--/.Slides-->\n\n        <!--Controls-->\n        <a class=\"left carousel-control\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                    </a>\n        <a class=\"right carousel-control\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"next\">\n                        <span class=\"icon-next\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n        <!--/.Controls-->\n      </div>\n      <!--/.Carousel Wrapper-->\n    </div>\n    <!--/Second column-->\n  </div>\n</section>\n<!--/Section: About Us-->\n"

/***/ }),

/***/ "../../../../../src/app/components/main-container/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__("../../../../../src/app/components/main-container/about-us/about-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-container/about-us/about-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-container/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 310px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-container/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"divider-new\">\n  <h2 class=\"h2-responsive\">Contact Us</h2>\n</div>\n\n<!--Section: Contact-->\n<section id=\"contact\">\n  <div class=\"row\">\n    <!--First column-->\n    <div class=\"col-md-8\">\n      <!-- <div id=\"map-container\" class=\"z-depth-1 wow fadeInUp\" style=\"height: 300px\"></div> -->\n      <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\n            <agm-info-window>\n              <h6><strong>Monash University</strong></h6>900 Dandenong Rd, Caulfield East VIC 3145</agm-info-window>\n          </agm-marker>\n        </agm-map>\n      </div>\n    </div>\n    <!--/First column-->\n\n    <!--Second column-->\n    <div class=\"col-md-4\">\n      <ul class=\"text-center\">\n        <li class=\"wow fadeInUp\" data-wow-delay=\"0.2s\"><a class=\"btn-floating btn-small mdb-color\"><i class=\"fa fa-map-marker\"></i></a>\n          <p>Monash University, Caulfield Campus</p>\n        </li>\n\n        <li class=\"wow fadeInUp\" data-wow-delay=\"0.3s\"><a class=\"btn-floating btn-small mdb-color\" data-toggle=\"modal\" data-target=\"#contact-form\"><i class=\"fa fa-phone\"></i></a>\n          <p>+ 04 525 590 49</p>\n        </li>\n\n        <li class=\"wow fadeInUp\" data-wow-delay=\"0.4s\"><a class=\"btn-floating btn-small mdb-color\" data-toggle=\"modal\" data-target=\"#contact-form\"><i class=\"fa fa-envelope\"></i></a>\n          <p>tqia5@student.monash.edu</p>\n        </li>\n      </ul>\n    </div>\n    <!--/Second column-->\n  </div>\n</section>\n<!--Section: Contact-->\n"

/***/ }),

/***/ "../../../../../src/app/components/main-container/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.zoom = 14;
    }
    ContactComponent.prototype.ngOnInit = function () {
        // Monash University Caulfield Campus Location
        this.latitude = -37.877010;
        this.longitude = 145.044267;
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/main-container/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-container/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-container/main-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-container/main-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <router-outlet></router-outlet> -->\n  <app-about-us></app-about-us>\n  <app-team></app-team>\n  <app-contact></app-contact>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main-container/main-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContainerComponent = (function () {
    function MainContainerComponent() {
    }
    MainContainerComponent.prototype.ngOnInit = function () {
    };
    return MainContainerComponent;
}());
MainContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-container',
        template: __webpack_require__("../../../../../src/app/components/main-container/main-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-container/main-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainContainerComponent);

//# sourceMappingURL=main-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-container/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-container/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"our-team\" class=\"divider-new\">\n  <h2 class=\"h2-responsive wow fadeInDown\">Team Supernova</h2>\n</div>\n\n<!--Section: Team-->\n<section class=\"section team-section pb-4\">\n\n  <!--Grid row-->\n  <div class=\"row mb-lg-4 center-on-small-only\">\n\n    <!--Grid column-->\n    <div class=\"col-lg-6 col-md-6 mb-r\">\n\n      <div class=\"col-md-6 float-left\">\n        <div class=\"avatar\">\n          <img src=\"assets/img/team/Joe.jpeg\" class=\"z-depth-2\" alt=\"Joe\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6 float-right\">\n        <h4><strong>Joe</strong></h4>\n        <h6 class=\"font-bold grey-text mb-4\">Web Developer</h6>\n        <p class=\"grey-text\">Specialization: Distributed Programming, Data Analysis and Processing, Web Development</p>\n\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\" href=\"https://www.facebook.com/joexfactor\"><i class=\"fa fa-facebook\"></i></a>\n        <!--Instagram-->\n        <a class=\"icons-sm ins-ic\" href=\"https://www.instagram.com/joexfactor/\"><i class=\"fa fa-instagram\"> </i></a>\n        <!--GitHub-->\n        <a class=\"icons-sm git-ic\" href=\"https://github.com/joexfactor\"><i class=\"fa fa-github\"> </i></a>\n      </div>\n\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-lg-6 col-md-6 mb-r\">\n\n      <div class=\"col-md-6 float-left\">\n        <div class=\"avatar\">\n          <img src=\"assets/img/team/Ryan.jpeg\" class=\"z-depth-2\" alt=\"Ryan\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6 float-right\">\n        <h4><strong>Ryan</strong></h4>\n        <h6 class=\"font-bold grey-text mb-4\">Video Maker</h6>\n        <p class=\"grey-text\">Specialization: Data analysis, Writing Reports, Project Management, Video Clip</p>\n\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\" href=\"https://www.facebook.com/shice.ruan.3\"><i class=\"fa fa-facebook\"> </i></a>\n        <!--Twitter-->\n        <a class=\"icons-sm tw-ic\" href=\"https://mobile.twitter.com/285718912\"><i class=\"fa fa-twitter\"> </i></a>\n        <!--Instagram-->\n        <a class=\"icons-sm ins-ic\" href=\"https://www.instagram.com/ryanruan1221/\"><i class=\"fa fa-instagram\"> </i></a>\n      </div>\n\n    </div>\n    <!--Grid column-->\n\n  </div>\n  <!--Grid row-->\n\n  <!--Grid row-->\n  <div class=\"row center-on-small-only\">\n\n    <!--Grid column-->\n    <div class=\"col-lg-6 col-md-6 mb-r\">\n\n      <div class=\"col-md-6 float-left\">\n        <div class=\"avatar\">\n          <img src=\"assets/img/team/Nishit.jpeg\" class=\"z-depth-2\" alt=\"Nishit\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6 float-right\">\n        <h4><strong>Nishit</strong></h4>\n        <h6 class=\"font-bold grey-text mb-4\">System Analyst</h6>\n        <p class=\"grey-text\">Specialization: Data Analysis, Data Visualization, Business Analysis, Project Management, People Skill\n        </p>\n\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\" href=\"https://www.facebook.com/nishitrastogi92\"><i class=\"fa fa-facebook\"> </i></a>\n        <!--LinkedIn-->\n        <a class=\"icons-sm li-ic\" href=\"https://www.linkedin.com/in/nishit-rastogi-a5485444/\"><i class=\"fa fa-linkedin\"> </i></a>\n        <!--Instagram-->\n        <a class=\"icons-sm ins-ic\" href=\"https://www.instagram.com/nishit.rastogi/\"><i class=\"fa fa-instagram\"> </i></a>\n      </div>\n\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-lg-6 col-md-6 mb-r\">\n      <div class=\"col-md-6 float-left\">\n        <div class=\"avatar\">\n          <img src=\"assets/img/team/Sonali.jpeg\" class=\"z-depth-2\" alt=\"Fifth sample avatar image\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6 float-right\">\n        <h4><strong>Sonali</strong></h4>\n        <h6 class=\"font-bold grey-text mb-4\">Business Analyst</h6>\n        <p class=\"grey-text\">Specialization: Project Management, System Analysis and Design, People Communication</p>\n\n        <!--Google +-->\n        <a class=\"icons-sm gplus-ic\" href=\"https://plus.google.com/u/0/113338762795814817920\"><i class=\"fa fa-google-plus\"> </i></a>\n        <!--LinkedIn-->\n        <a class=\"icons-sm li-ic\" href=\"https://www.linkedin.com/in/sonali-chaudhary-86a720a0/\"><i class=\"fa fa-linkedin\"> </i></a>\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\" href=\"https://www.facebook.com/sonali.chaudhary.35\"><i class=\"fa fa-facebook\"> </i></a>\n      </div>\n    </div>\n    <!--Grid column-->\n  </div>\n  <!--Grid row-->\n</section>\n<!--Section: Team-->\n"

/***/ }),

/***/ "../../../../../src/app/components/main-container/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/components/main-container/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-container/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mask/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 500px;\n}\n\n#map {\n    height: 500px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mask/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelectedInMap && isFoodServiceInMapVisiable\">\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service on the Map</h2>\n  </div>\n\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestServiceInMap.latitude\" [longitude]=\"nearestServiceInMap.longitude\" (markerClick)=\"clickedMarker()\">\n          <agm-info-window><strong>{{ nearestServiceInMap.name }}</strong></agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n</div>\n\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelectedInMap && isFoodServiceInMapVisiable\">\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service on the Map</h2>\n  </div>\n\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker *ngFor=\"let service of allServicesInMap\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"clickedMarker()\">\n          <agm-info-window><strong>{{ service.name }}</strong></agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/mask/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
        this.zoom = 10;
        console.log("Map Init");
    }
    MapComponent.prototype.clickedMarker = function () {
        console.log('Marker clicked');
    };
    MapComponent.prototype.mapInfo = function () {
        // this.areAllFoodMakersVisiable = false;
        // this.isNearestFoodMakerVisiable = true;
        console.log('---------------------------');
        console.log('isNearestServiceSelectedInMap: ' + this.isNearestServiceSelectedInMap);
        console.log('areAllServicesSelectedInMap: ' + this.areAllServicesSelectedInMap);
        console.log('---------------------------');
        console.log('isFoodServiceInMapVisiable: ' + this.isFoodServiceInMapVisiable);
        console.log('isAccommodationServiceInMapVisiable: ' + this.isAccommodationServiceInMapVisiable);
        console.log('isHealthcareServiceInMapVisiable: ' + this.isHealthcareServiceInMapVisiable);
    };
    // setAllFoodMarkers() {
    //   // this.areAllFoodMakersVisiable = true;
    //   // this.isNearestFoodMakerVisiable = false;
    //   console.log('---------------------------');
    //   console.log('isNearestServiceSelectedInMap: ' + this.isNearestServiceSelectedInMap);
    //   console.log('areAllServicesSelectedInMap: ' + this.areAllServicesSelectedInMap);
    //   console.log('---------------------------');
    //   console.log('isFoodServiceInMapVisiable: ' + this.isFoodServiceInMapVisiable);
    //   console.log('isAccommodationServiceInMapVisiable: ' + this.isAccommodationServiceInMapVisiable);
    //   console.log('isHealthcareServiceInMapVisiable: ' + this.isHealthcareServiceInMapVisiable);
    //   window.location.href = '#service-map';
    // }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current location
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
            _this.isOpen = true;
            console.log('Your current position is:');
            console.log('Latitude:' + _this.latitude);
            console.log('Longitude:' + _this.longitude);
        });
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "nearestServiceInMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapComponent.prototype, "allServicesInMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "isFoodServiceInMapVisiable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "isAccommodationServiceInMapVisiable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "isHealthcareServiceInMapVisiable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "isNearestServiceSelectedInMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "areAllServicesSelectedInMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "foodInMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapComponent.prototype, "foodsInMap", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/components/mask/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mask/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mask/mask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mask/mask.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Mask-->\n<div class=\"view hm-black-strong\">\n  <div class=\"full-bg-img flex-center\">\n    <div class=\"container\">\n      <div class=\"row\" id=\"home\">\n\n        <!--First column-->\n        <div class=\"col-sm-12 col-md-12 col-lg-4\">\n          <div class=\"description\">\n            <h3 class=\"h3-responsive wow fadeInLeft\">Assisting You and Your Pet</h3>\n            <hr class=\"hr-dark\">\n            <p class=\"wow fadeInLeft col-sm-12\" data-wow-delay=\"0.4s\"></p>\n            <br>\n            <a class=\"btn btn-ptc wow fadeInLeft\" href=\"#about-us\" data-wow-delay=\"0.7s\">Learn more</a>\n          </div>\n        </div>\n        <!--/.First column-->\n\n        <!--Second column-->\n        <div class=\"col-sm-12 col-md-12 col-lg-8\">\n\n          <!--Form-->\n          <div class=\"card wow fadeInRight row container\">\n            <div class=\"card-block\">\n              <!--Header-->\n              <div class=\"text-center\">\n                <h3><i class=\"fa\"></i>How can we help?</h3>\n                <hr>\n              </div>\n\n              <ul class=\"nav md-pills nav-justified pills-secondary\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" (click)=\"clickFood($event)\">I'm hungry</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\" (click)=\"clickAccommodation($event)\">I want shelter</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" (click)=\"clickHealthcare($event)\">I want medical help</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" (click)=\"clickOtherServices($event)\">Other services</a>\n                </li>\n              </ul>\n\n              <!--Body-->\n              <form class=\"form-inline\">\n                <!-- Accommodation Radio Button -->\n                <div class=\"row wow fadeInRight container\" *ngIf=\"isAccommodationSelected\">\n\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 form-group\">\n                    <input name=\"accommodationGroup\" type=\"radio\" id=\"accommodationRadio\" checked=\"checked\" (change)=\"tickAccommodationRadioButton($event)\">\n                    <label for=\"accommodationRadio\">For my pet and I</label>\n                  </div>\n\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 form-group\">\n                    <input name=\"accommodationGroup\" type=\"radio\" id=\"emergencyPetBoardingRadio\" (change)=\"tickEmergencyPetBoardingRadioButton($event)\">\n                    <label for=\"emergencyPetBoardingRadio\">For my pet only</label>\n                  </div>\n\n                </div>\n\n                <!-- Healthcare Radio Button -->\n                <div class=\"row wow fadeInRight container\" *ngIf=\"isHealthcareSelected\">\n\n                  <div class=\"col-lg-6 col-md-6 form-group\">\n                    <input name=\"healthcareGroup\" type=\"radio\" id=\"healthcareRadio\" checked=\"checked\" (change)=\"tickHealcareRadioButton($event)\">\n                    <label for=\"healthcareRadio\">For me</label>\n                  </div>\n\n                  <div class=\"col-lg-6 col-md-6 form-group\">\n                    <input name=\"healthcareGroup\" type=\"radio\" id=\"petHealthcareRadio\" (change)=\"tickPetHealthcareRadioButton($event)\">\n                    <label for=\"petHealthcareRadio\">For my pet</label>\n                  </div>\n\n                </div>\n\n                <!-- Health Radio Button -->\n                <div class=\"row wow fadeInRight container\" *ngIf=\"isOtherServicesSelected\">\n\n                  <div class=\"col-lg-6 col-md-6 form-group\">\n                    <input name=\"otherServicesGroup\" type=\"radio\" id=\"wifiRadio\" checked=\"checked\" (change)=\"tickWifiRadioButton($event)\">\n                    <label for=\"wifiRadio\">WIFI</label>\n                  </div>\n\n                  <div class=\"col-lg-6 col-md-6 form-group\">\n                    <input name=\"otherServicesGroup\" type=\"radio\" id=\"eventsRadio\" (change)=\"tickEventsRadioButton($event)\">\n                    <label for=\"eventsRadio\">Events</label>\n                  </div>\n\n                </div>\n\n                <!-- Select Button -->\n                <div class=\"col-md-12 wow fadeInRight\">\n                  <div class=\"text-center\">\n                    <br>\n                    <button type=\"button\" class=\"btn btn-mdb\" (click)=\"searchNearestService($event)\">&nbsp;&nbsp;Closest service provider&nbsp;&nbsp;</button>\n                    <a>\n                      <button type=\"button\" class=\"btn btn-mdb\" (click)=\"searchAllServices($event)\">Show all service providers</button>\n                    </a>\n                  </div>\n                </div>\n              </form>\n              <br>\n            </div>\n          </div>\n          <!--/.Form-->\n        </div>\n        <!--/Second column-->\n      </div>\n    </div>\n  </div>\n</div>\n<!--/.Mask-->\n\n<div id=\"placeholder\">\n  <br>\n</div>\n\n<!-- Initial Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isInitialMapEnabled\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Your Location Information</h2>\n  </div>\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Initial Map  -->\n\n<!-- Nearest Food Service Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelected && isFoodServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service Information</h2>\n  </div>\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }} <br> {{ selectedService.result.phone }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <!-- <small>{{ selectedService.result.phone }}</small> -->\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestService.result.latitude\" [longitude]=\"nearestService.result.longitude\" (markerClick)=\"clickedMarker(nearestService)\">\n          <!-- <agm-info-window>\n            <strong>{{ nearestService.name }}</strong><br> {{ nearestService.address }}<br> {{ nearestService.phone }}\n          </agm-info-window> -->\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Nearest Food Service Map -->\n\n<!-- All Food Services Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelected && isFoodServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Here are service providers within {{ rangeValue }} km</h2>\n  </div>\n\n  <!-- Range -->\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-r\">\n      <form class=\"range-field\">\n        <input type=\"range\" min=\"0\" max=\"50\" step=\"1\" [(ngModel)]=\"rangeValue\" name=\"range\" (change)=\"rangeChange()\" />\n      </form>\n    </div>\n  </div>\n  <!-- End Range -->\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map #agm [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <!-- <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"agm.lastOpen?.close(); agm.lastOpen = infoWindow; clickedMarker(service)\"> -->\n          <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.result.latitude\" [longitude]=\"service.result.longitude\"\n            (markerClick)=\"clickedMarker(service)\">\n            <!-- <agm-info-window #infoWindow>\n              <strong>{{ service.name }}</strong><br> {{ service.address }}<br> {{ service.phone }}\n            </agm-info-window> -->\n          </agm-marker>\n        </agm-marker-cluster>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End All Food Services Map -->\n\n\n\n<!-- Nearest Accommodation Service Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelected && isAccommodationServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service Information</h2>\n  </div>\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestService.result.latitude\" [longitude]=\"nearestService.result.longitude\" (markerClick)=\"clickedMarker(nearestService)\">\n          <!-- <agm-info-window>\n                <strong>{{ nearestService.name }}</strong><br> {{ nearestService.address }}<br> {{ nearestService.phone }}\n              </agm-info-window> -->\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Nearest Accommodation Service Map -->\n\n<!-- All Accommodation Services Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelected && isAccommodationServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Here are service providers within {{ rangeValue }} km</h2>\n  </div>\n\n  <!-- Range -->\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-r\">\n      <form class=\"range-field\">\n        <input type=\"range\" min=\"0\" max=\"50\" step=\"1\" [(ngModel)]=\"rangeValue\" name=\"range\" (change)=\"rangeChange()\" />\n      </form>\n    </div>\n  </div>\n  <!-- End Range -->\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map #agm [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <!-- <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"agm.lastOpen?.close(); agm.lastOpen = infoWindow; clickedMarker(service)\"> -->\n          <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.result.latitude\" [longitude]=\"service.result.longitude\"\n            (markerClick)=\"clickedMarker(service)\">\n            <!-- <agm-info-window #infoWindow>\n                  <strong>{{ service.name }}</strong><br> {{ service.address }}<br> {{ service.phone }}\n                </agm-info-window> -->\n          </agm-marker>\n        </agm-marker-cluster>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End All Accommodation Services Map -->\n\n\n<!-- Nearest EmergencyPetBoarding Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelected && isEmergencyPetBoardingServiceMapVisiable\">\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service Information</h2>\n  </div>\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestService.result.latitude\" [longitude]=\"nearestService.result.longitude\" (markerClick)=\"clickedMarker(nearestService)\">\n          <!-- <agm-info-window>\n                <strong>{{ nearestService.name }}</strong><br> {{ nearestService.address }}<br> {{ nearestService.phone }}\n              </agm-info-window> -->\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Nearest EmergencyPetBoarding Map -->\n\n<!-- All EmergencyPetBoarding Services Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelected && isEmergencyPetBoardingServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Here are service providers within {{ rangeValue }} km</h2>\n  </div>\n\n  <!-- Range -->\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-r\">\n      <form class=\"range-field\">\n        <input type=\"range\" min=\"0\" max=\"50\" step=\"1\" [(ngModel)]=\"rangeValue\" name=\"range\" (change)=\"rangeChange()\" />\n      </form>\n    </div>\n  </div>\n  <!-- End Range -->\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map #agm [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <!-- <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"agm.lastOpen?.close(); agm.lastOpen = infoWindow; clickedMarker(service)\"> -->\n          <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.result.latitude\" [longitude]=\"service.result.longitude\"\n            (markerClick)=\"clickedMarker(service)\">\n            <!-- <agm-info-window #infoWindow>\n                      <strong>{{ service.name }}</strong><br> {{ service.address }}<br> {{ service.phone }}\n                    </agm-info-window> -->\n          </agm-marker>\n        </agm-marker-cluster>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End All EmergencyPetBoarding Services Map -->\n\n\n\n<!-- Nearest Healthcare Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelected && isHealthcareServiceMapVisiable\">\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service Information</h2>\n  </div>\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestService.result.latitude\" [longitude]=\"nearestService.result.longitude\" (markerClick)=\"clickedMarker(nearestService)\">\n          <!-- <agm-info-window>\n                <strong>{{ nearestService.name }}</strong><br> {{ nearestService.address }}<br> {{ nearestService.phone }}\n              </agm-info-window> -->\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Nearest Healthcare Map -->\n\n<!-- All Healthcare Services Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelected && isHealthcareServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Here are service providers within {{ rangeValue }} km</h2>\n  </div>\n\n  <!-- Range -->\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-r\">\n      <form class=\"range-field\">\n        <input type=\"range\" min=\"0\" max=\"50\" step=\"1\" [(ngModel)]=\"rangeValue\" name=\"range\" (change)=\"rangeChange()\" />\n      </form>\n    </div>\n  </div>\n  <!-- End Range -->\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map #agm [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <!-- <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"agm.lastOpen?.close(); agm.lastOpen = infoWindow; clickedMarker(service)\"> -->\n          <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.result.latitude\" [longitude]=\"service.result.longitude\"\n            (markerClick)=\"clickedMarker(service)\">\n            <!-- <agm-info-window #infoWindow>\n                      <strong>{{ service.name }}</strong><br> {{ service.address }}<br> {{ service.phone }}\n                    </agm-info-window> -->\n          </agm-marker>\n        </agm-marker-cluster>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End All Healthcare Services Map -->\n\n\n\n<!-- Nearest PetHealthcare Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelected && isPetHealthcareServiceMapVisiable\">\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service Information</h2>\n  </div>\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestService.result.latitude\" [longitude]=\"nearestService.result.longitude\" (markerClick)=\"clickedMarker(nearestService)\">\n          <!-- <agm-info-window>\n                <strong>{{ nearestService.name }}</strong><br> {{ nearestService.address }}<br> {{ nearestService.phone }}\n              </agm-info-window> -->\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Nearest PetHealthcare Map -->\n\n<!-- All PetHealthcare Services Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelected && isPetHealthcareServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Here are service providers within {{ rangeValue }} km</h2>\n  </div>\n\n  <!-- Range -->\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-r\">\n      <form class=\"range-field\">\n        <input type=\"range\" min=\"0\" max=\"50\" step=\"1\" [(ngModel)]=\"rangeValue\" name=\"range\" (change)=\"rangeChange()\" />\n      </form>\n    </div>\n  </div>\n  <!-- End Range -->\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map #agm [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <!-- <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"agm.lastOpen?.close(); agm.lastOpen = infoWindow; clickedMarker(service)\"> -->\n          <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.result.latitude\" [longitude]=\"service.result.longitude\"\n            (markerClick)=\"clickedMarker(service)\">\n            <!-- <agm-info-window #infoWindow>\n                      <strong>{{ service.name }}</strong><br> {{ service.address }}<br> {{ service.phone }}\n                    </agm-info-window> -->\n          </agm-marker>\n        </agm-marker-cluster>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End All PetHealthcare Services Map -->\n\n\n\n<!-- Nearest Wifi Hotspot Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"isNearestServiceSelected && isWifiServiceMapVisiable\">\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Service Information</h2>\n  </div>\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" (markerClick)=\"clickedMarker()\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker [latitude]=\"nearestService.result.latitude\" [longitude]=\"nearestService.result.longitude\" (markerClick)=\"clickedMarker(nearestService)\">\n          <!-- <agm-info-window>\n                  <strong>{{ nearestService.name }}</strong><br> {{ nearestService.address }}<br> {{ nearestService.phone }}\n                </agm-info-window> -->\n        </agm-marker>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End Nearest Wifi Hotspot Map -->\n\n<!-- All Wifi Hotspot Services Map -->\n<div class=\"container\" id=\"service-map\" *ngIf=\"areAllServicesSelected && isWifiServiceMapVisiable\">\n\n  <div class=\"divider-new\">\n    <h2 class=\"h2-responsive wow fadeInDown\">Here are service providers within {{ rangeValue }} km</h2>\n  </div>\n\n  <!-- Range -->\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-r\">\n      <form class=\"range-field\">\n        <input type=\"range\" min=\"0\" max=\"50\" step=\"1\" [(ngModel)]=\"rangeValue\" name=\"range\" (change)=\"rangeChange()\" />\n      </form>\n    </div>\n  </div>\n  <!-- End Range -->\n\n  <!-- Service Info Panel -->\n  <div class=\"list-group\" *ngIf=\"isMarkerClicked\">\n    <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ selectedService.result.name }}</h5>\n        <a [href]=\"googleMapDirectionUrl\" class=\"white-text\" target=\"_blank\">\n          <h5 class=\"h5-responsive wow fadeInLeft\"><strong>{{ selectedService.distance }} km <br><br>Take Me There</strong></h5>\n        </a>\n      </div>\n      <p class=\"mb-1\">{{ selectedService.result.address }}</p>\n      <small>{{ selectedService.result.phone }}</small>\n    </a>\n  </div>\n  <!-- End Service Info Panel -->\n\n  <!-- Map -->\n  <section>\n    <div id=\"map\" class=\"z-depth-2 wow fadeInUp\">\n      <agm-map #agm [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'assets/img/marker/placeholder.png'\">\n          <agm-info-window [isOpen]=\"isOpen\"><strong>Your Current Position</strong></agm-info-window>\n        </agm-marker>\n        <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <!-- <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" (markerClick)=\"agm.lastOpen?.close(); agm.lastOpen = infoWindow; clickedMarker(service)\"> -->\n          <agm-marker *ngFor=\"let service of allServices\" [latitude]=\"service.result.latitude\" [longitude]=\"service.result.longitude\"\n            (markerClick)=\"clickedMarker(service)\">\n            <!-- <agm-info-window #infoWindow>\n                        <strong>{{ service.name }}</strong><br> {{ service.address }}<br> {{ service.phone }}\n                      </agm-info-window> -->\n          </agm-marker>\n        </agm-marker-cluster>\n      </agm-map>\n    </div>\n  </section>\n  <!-- End Map -->\n</div>\n<!-- End All Wifi Hotspot Services Map -->\n"

/***/ }),

/***/ "../../../../../src/app/components/mask/mask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_service__ = __webpack_require__("../../../../../src/app/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_accommodation_service__ = __webpack_require__("../../../../../src/app/services/accommodation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_healthcare_service__ = __webpack_require__("../../../../../src/app/services/healthcare.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_other_service__ = __webpack_require__("../../../../../src/app/services/other.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaskComponent = (function () {
    function MaskComponent(foodService, accommodationService, healthcareService, otherService, toastr, vcr) {
        this.foodService = foodService;
        this.accommodationService = accommodationService;
        this.healthcareService = healthcareService;
        this.otherService = otherService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    MaskComponent.prototype.ngOnInit = function () {
        this.isAccommodationSelected = true;
        this.isAccommodationRadioButtonSelected = true;
        this.isHealthcareRadioButtonSelected = true;
        this.isWifiRadioButtonSelected = true;
        this.getCurrentLocation();
        this.isInitialMapEnabled = true;
        this.rangeValue = 5;
    };
    MaskComponent.prototype.getCurrentLocation = function () {
        var _this = this;
        // Get current location
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
            _this.isLocationServiceAvailable = true;
            _this.isOpen = true;
            _this.zoom = 10;
            console.log('Your current position is:');
            console.log('Latitude:' + _this.latitude);
            console.log('Longitude:' + _this.longitude);
        }, function (error) {
            _this.isLocationServiceAvailable = false;
            console.log(error);
            _this.toastr.warning('iOS Devices: Setting - Privacy - Location Services - Find the browser and change to While Using!');
        });
    };
    // If search nearest one button is clicked
    MaskComponent.prototype.searchNearestService = function (event) {
        var _this = this;
        this.isNearestServiceSelected = true;
        this.areAllServicesSelected = false;
        this.isMarkerClicked = false;
        this.isInitialMapEnabled = false;
        window.location.href = '#placeholder';
        // 1. If food tab is selected
        if (this.isFoodSelected) {
            setTimeout(function () {
                _this.foodService.getNearestFood()
                    .subscribe(function (food) {
                    _this.nearestService = food;
                    _this.isFoodServiceMapVisiable = true;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.clickedMarker(_this.nearestService);
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 2. If accommodation tab is selected and accommodation radio button is ticked
        if (this.isAccommodationSelected && this.isAccommodationRadioButtonSelected) {
            setTimeout(function () {
                _this.accommodationService.getNearestAccommodation()
                    .subscribe(function (accommodation) {
                    _this.nearestService = accommodation;
                    _this.isAccommodationServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.clickedMarker(_this.nearestService);
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 3. If accommodation tab is selected and emergencyPetBoarding radio button is ticked
        if (this.isAccommodationSelected && this.isEmergencyPetBoardingRadioButtonSelected) {
            setTimeout(function () {
                _this.accommodationService.getNearestEmergencyPetBoarding()
                    .subscribe(function (emergencyPetBoarding) {
                    _this.nearestService = emergencyPetBoarding;
                    _this.isEmergencyPetBoardingServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.clickedMarker(_this.nearestService);
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 4. If healthcare tab is selected and healthcare radio button is ticked
        if (this.isHealthcareSelected && this.isHealthcareRadioButtonSelected) {
            setTimeout(function () {
                _this.healthcareService.getNearestHealthcare()
                    .subscribe(function (healthcare) {
                    _this.nearestService = healthcare;
                    _this.isHealthcareServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.clickedMarker(_this.nearestService);
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 5. If healthcare tab is selected and petHealthcare radio button is ticked
        if (this.isHealthcareSelected && this.isPetHealthcareRadioButtonSelected) {
            setTimeout(function () {
                _this.healthcareService.getNearestPetHealthcare()
                    .subscribe(function (petHealthcare) {
                    _this.nearestService = petHealthcare;
                    _this.isPetHealthcareServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.clickedMarker(_this.nearestService);
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 6. If other service tab is selected and wifi radio button is ticked
        if (this.isOtherServicesSelected && this.isWifiRadioButtonSelected) {
            setTimeout(function () {
                _this.otherService.getNearestWifiHotspot()
                    .subscribe(function (wifiHotspot) {
                    _this.nearestService = wifiHotspot;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = true;
                    _this.clickedMarker(_this.nearestService);
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
    };
    // If search all button is clicked
    MaskComponent.prototype.searchAllServices = function (event) {
        var _this = this;
        this.isNearestServiceSelected = false;
        this.areAllServicesSelected = true;
        this.isMarkerClicked = false;
        this.isInitialMapEnabled = false;
        window.location.href = '#placeholder';
        // 1. If food tab is selected
        if (this.isFoodSelected) {
            setTimeout(function () {
                _this.foodService.getFoods()
                    .subscribe(function (foods) {
                    _this.allServices = foods;
                    _this.cachedAllServices = foods;
                    _this.isFoodServiceMapVisiable = true;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.rangeChange();
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 2. If accommodation tab is selected and accommodation radio button is ticked
        if (this.isAccommodationSelected && this.isAccommodationRadioButtonSelected) {
            setTimeout(function () {
                _this.accommodationService.getAccommodations()
                    .subscribe(function (accommodations) {
                    _this.allServices = accommodations;
                    _this.cachedAllServices = accommodations;
                    _this.isAccommodationServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.rangeChange();
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 3. If accommodation tab is selected and emergencyPetBoarding radio button is ticked
        if (this.isAccommodationSelected && this.isEmergencyPetBoardingRadioButtonSelected) {
            setTimeout(function () {
                _this.accommodationService.getEmergencyPetBoardings()
                    .subscribe(function (emergencyPetBoardings) {
                    _this.allServices = emergencyPetBoardings;
                    _this.cachedAllServices = emergencyPetBoardings;
                    _this.isAccommodationServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.rangeChange();
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 4. If healthcare tab is selected and healthcare radio button is ticked
        if (this.isHealthcareSelected && this.isHealthcareRadioButtonSelected) {
            setTimeout(function () {
                _this.healthcareService.getHealthcares()
                    .subscribe(function (healthcares) {
                    _this.allServices = healthcares;
                    _this.cachedAllServices = healthcares;
                    _this.isHealthcareServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.rangeChange();
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 5. If healthcare tab is selected and petHealthcare radio button is ticked
        if (this.isHealthcareSelected && this.isPetHealthcareRadioButtonSelected) {
            setTimeout(function () {
                _this.healthcareService.getPetHealthcares()
                    .subscribe(function (petHealthcares) {
                    _this.allServices = petHealthcares;
                    _this.cachedAllServices = petHealthcares;
                    _this.isPetHealthcareServiceMapVisiable = true;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = false;
                    _this.rangeChange();
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
        // 6. If other service tab is selected and wifi radio button is ticked
        if (this.isOtherServicesSelected && this.isWifiRadioButtonSelected) {
            setTimeout(function () {
                _this.otherService.getWifiHotspots()
                    .subscribe(function (wifiHotspots) {
                    _this.allServices = wifiHotspots;
                    _this.cachedAllServices = wifiHotspots;
                    _this.isPetHealthcareServiceMapVisiable = false;
                    _this.isFoodServiceMapVisiable = false;
                    _this.isAccommodationServiceMapVisiable = false;
                    _this.isEmergencyPetBoardingServiceMapVisiable = false;
                    _this.isHealthcareServiceMapVisiable = false;
                    _this.isWifiServiceMapVisiable = true;
                    _this.rangeChange();
                    window.location.href = '#placeholder';
                });
            }, 0);
        }
    };
    MaskComponent.prototype.clickFood = function (event) {
        this.isFoodSelected = true;
        this.isAccommodationSelected = false;
        this.isHealthcareSelected = false;
        this.isOtherServicesSelected = false;
    };
    MaskComponent.prototype.clickAccommodation = function (event) {
        this.isFoodSelected = false;
        this.isAccommodationSelected = true;
        this.isHealthcareSelected = false;
        this.isOtherServicesSelected = false;
    };
    MaskComponent.prototype.clickHealthcare = function (event) {
        this.isFoodSelected = false;
        this.isAccommodationSelected = false;
        this.isHealthcareSelected = true;
        this.isOtherServicesSelected = false;
    };
    MaskComponent.prototype.clickOtherServices = function (event) {
        this.isFoodSelected = false;
        this.isAccommodationSelected = false;
        this.isHealthcareSelected = false;
        this.isOtherServicesSelected = true;
    };
    MaskComponent.prototype.tickAccommodationRadioButton = function (event) {
        if (event.target.checked) {
            this.isAccommodationRadioButtonSelected = true;
            this.isEmergencyPetBoardingRadioButtonSelected = false;
        }
    };
    MaskComponent.prototype.tickEmergencyPetBoardingRadioButton = function (event) {
        if (event.target.checked) {
            this.isAccommodationRadioButtonSelected = false;
            this.isEmergencyPetBoardingRadioButtonSelected = true;
        }
    };
    MaskComponent.prototype.tickHealcareRadioButton = function (event) {
        if (event.target.checked) {
            this.isHealthcareRadioButtonSelected = true;
            this.isPetHealthcareRadioButtonSelected = false;
        }
    };
    MaskComponent.prototype.tickPetHealthcareRadioButton = function (event) {
        if (event.target.checked) {
            this.isHealthcareRadioButtonSelected = false;
            this.isPetHealthcareRadioButtonSelected = true;
        }
    };
    MaskComponent.prototype.tickWifiRadioButton = function (event) {
        if (event.target.checked) {
            this.isWifiRadioButtonSelected = true;
            this.isEventsRadioButtonSelected = false;
        }
    };
    MaskComponent.prototype.tickEventsRadioButton = function (event) {
        if (event.target.checked) {
            this.isWifiRadioButtonSelected = false;
            this.isEventsRadioButtonSelected = true;
        }
    };
    MaskComponent.prototype.rangeChange = function () {
        console.log('rangeValue: ' + this.rangeValue);
        console.log('services: ', this.cachedAllServices);
        var filterServices = [];
        for (var _i = 0, _a = this.cachedAllServices; _i < _a.length; _i++) {
            var eachService = _a[_i];
            if (eachService.distance <= this.rangeValue) {
                filterServices.push(eachService);
            }
        }
        console.log('filterServices: ', filterServices);
        this.allServices = filterServices;
    };
    MaskComponent.prototype.clickedMarker = function (service) {
        console.log('Marker clicked');
        console.log(service);
        this.isMarkerClicked = true;
        this.selectedService = service;
        this.googleMapDirectionUrl = 'https://maps.google.com?saddr=Current+Location&daddr='
            + this.selectedService.result.name + ' ' + this.selectedService.result.address;
        console.log('googleMapDirectionUrl: ' + this.googleMapDirectionUrl);
        window.location.href = '#placeholder';
    };
    return MaskComponent;
}());
MaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mask',
        template: __webpack_require__("../../../../../src/app/components/mask/mask.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mask/mask.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_accommodation_service__["a" /* AccommodationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_accommodation_service__["a" /* AccommodationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_healthcare_service__["a" /* HealthcareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_healthcare_service__["a" /* HealthcareService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_other_service__["a" /* OtherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_other_service__["a" /* OtherService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], MaskComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mask.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<nav class=\"navbar navbar-toggleable-md navbar-dark scrolling-navbar fixed-top\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav1\" aria-controls=\"navbarNav1\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <a class=\"navbar-brand\" href=\"#\">\n            <strong>Homely Paws</strong>\n        </a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav1\">\n      <!--Links-->\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#about-us\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#our-team\">Team</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!--/.Navbar-->"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/accommodation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccommodationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccommodationService = (function () {
    function AccommodationService(http) {
        var _this = this;
        this.http = http;
        // Get current location
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
        });
    }
    AccommodationService.prototype.getAccommodations = function () {
        // const url = 'http://localhost:8080/accommodations/' + this.latitude + '/' + this.longitude;
        var url = 'accommodations/' + this.latitude + '/' + this.longitude;
        console.log('getAccommodations url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    AccommodationService.prototype.getNearestAccommodation = function () {
        // const url = 'http://localhost:8080/accommodation/' + this.latitude + '/' + this.longitude;
        var url = 'accommodation/' + this.latitude + '/' + this.longitude;
        console.log('getNearestAccommodation url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    AccommodationService.prototype.getEmergencyPetBoardings = function () {
        // const url = 'http://localhost:8080/emergencyPetBoardings/' + this.latitude + '/' + this.longitude;
        var url = 'emergencyPetBoardings/' + this.latitude + '/' + this.longitude;
        console.log('getEmergencyPetBoardings url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    AccommodationService.prototype.getNearestEmergencyPetBoarding = function () {
        // const url = 'http://localhost:8080/emergencyPetBoarding/' + this.latitude + '/' + this.longitude;
        var url = 'emergencyPetBoarding/' + this.latitude + '/' + this.longitude;
        console.log('getNearestEmergencyPetBoarding url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return AccommodationService;
}());
AccommodationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AccommodationService);

var _a;
//# sourceMappingURL=accommodation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/food.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodService = (function () {
    function FoodService(http) {
        var _this = this;
        this.http = http;
        // Get current location
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
        });
    }
    FoodService.prototype.getFoods = function () {
        // const url = 'http://localhost:8080/foods/' + this.latitude + '/' + this.longitude;
        var url = 'foods/' + this.latitude + '/' + this.longitude;
        console.log('getFoods url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.getNearestFood = function () {
        // const url = 'http://localhost:8080/food/' + this.latitude + '/' + this.longitude;
        var url = 'food/' + this.latitude + '/' + this.longitude;
        console.log('getNearestFood url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return FoodService;
}());
FoodService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FoodService);

var _a;
//# sourceMappingURL=food.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/healthcare.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthcareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HealthcareService = (function () {
    function HealthcareService(http) {
        var _this = this;
        this.http = http;
        // Get current location
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
        });
    }
    HealthcareService.prototype.getHealthcares = function () {
        // const url = 'http://localhost:8080/healthcares/' + this.latitude + '/' + this.longitude;
        var url = 'healthcares/' + this.latitude + '/' + this.longitude;
        console.log('getHealthcares url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    HealthcareService.prototype.getNearestHealthcare = function () {
        // const url = 'http://localhost:8080/healthcare/' + this.latitude + '/' + this.longitude;
        var url = 'healthcare/' + this.latitude + '/' + this.longitude;
        console.log('getNearestHealthcare url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    HealthcareService.prototype.getPetHealthcares = function () {
        // const url = 'http://localhost:8080/petHealthcares/' + this.latitude + '/' + this.longitude;
        var url = 'petHealthcares/' + this.latitude + '/' + this.longitude;
        console.log('getPetHealthcares url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    HealthcareService.prototype.getNearestPetHealthcare = function () {
        // const url = 'http://localhost:8080/petHealthcare/' + this.latitude + '/' + this.longitude;
        var url = 'petHealthcare/' + this.latitude + '/' + this.longitude;
        console.log('getNearestPetHealthcare url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return HealthcareService;
}());
HealthcareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HealthcareService);

var _a;
//# sourceMappingURL=healthcare.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/other.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtherService = (function () {
    function OtherService(http) {
        var _this = this;
        this.http = http;
        // Get current location
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
        });
    }
    OtherService.prototype.getWifiHotspots = function () {
        // const url = 'http://localhost:8080/wifiHotspots/' + this.latitude + '/' + this.longitude;
        var url = 'wifiHotspots/' + this.latitude + '/' + this.longitude;
        console.log('getWifiHotspots url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    OtherService.prototype.getNearestWifiHotspot = function () {
        // const url = 'http://localhost:8080/wifiHotspot/' + this.latitude + '/' + this.longitude;
        var url = 'wifiHotspot/' + this.latitude + '/' + this.longitude;
        console.log('getNearestWifiHotspot url: ' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return OtherService;
}());
OtherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OtherService);

var _a;
//# sourceMappingURL=other.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map