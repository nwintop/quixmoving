(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"text-info\">About Us</h2>\n<p class=\"text-justify\">\nQuiX Moving & Storage being based in New Delhi, India with aim is to provide dedicated and professional relocation services in India and across the globe. The current influx of professionals and their families moving globally has created a need for a relocation service provider, who understands the cultures and diversities, our team of internationally experienced relocation professionals is all set to provide transferees a smooth transition to their new location along with value for money. QuiX Moving & Storages is the complete moving partner of choice in India for corporate relocations. We move people and workplaces skillfully, sensitively and efficiently.</p>\n<p class=\"text-justify\">\nQuiX Moving & Storage is the trusted leader for the design and management of domestic and international relocation and assignment services throughout the world. We passionately believe that our integrity, transparency, flexibility and commitment to our clients and each other enable us to deliver a cost effective Premium Services experience to everyone we serve.</p>\n\n<p class=\"text-justify\">\nClients choose us because we offer them the financial strength, stability and security, combined with the agility, personal feel and intimacy of a smaller, flexible organization. With more than 10 years of experience in mobility management, we have the local knowledge and worldwide network to provide employee relocation solutions in India and around the world.</p>\n\n</div>\n\n<div>\n  \n  \n  <h2 class=\"text-info\">Mission</h2> \n  <p class=\"text-justify\">To be one of the best known relocation company for providing a comprehensive and personalized service, with a single point of contact leading to outstanding results.</p>\n       \n  \n</div>\n\n<div>\n  \n  <h2 class=\"text-info\">Vision</h2> \n  <p> be the global Moving Company most admired for its people, partnership and performance.</p> \n  \t\n  <ul>\n    <li>To offer a complete corporate and individual Relocation Program to suit all needs and budgets.</li>\n    <li>To be regarded by : </li>\n    <ul><li>Our customers as a world class provider of relocation services.</li>\n    <li>Our employees as one of the best places to work.</li>\n    <li>Our competitors as the industry benchmark.</li></ul>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");










var routes = [
    {
        path: 'aboutus',
        component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"]
    },
    {
        path: 'utilities',
        component: _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__["UtilitiesComponent"]
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    },
    {
        path: 'career',
        component: _career_career_component__WEBPACK_IMPORTED_MODULE_8__["CareerComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n <app-footer ></app-footer>\n  \n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__["AboutusComponent"],
                _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_9__["UtilitiesComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _career_career_component__WEBPACK_IMPORTED_MODULE_13__["CareerComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/career/career.component.css":
/*!*********************************************!*\
  !*** ./src/app/career/career.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/career/career.component.html":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"text-info\">Careers</h2>\n<form action=\"#\" class=\"p-5 bg-white\">\n    <div class=\"row form-group\">\n      \n        <div class=\"col-md-12\">\n          <label class=\"text-black\" for=\"number\">Position Applied for</label> \n          <input type=\"text\" id=\"position\" class=\"form-control\">\n          \n        </div>\n      </div> \n      <div class=\"row form-group\">\n          <div class=\"col-md-12\">\n          <label for=\"exampleFormControlFile1\">Attach Your Resume</label>\n          <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>   \n\n    <div class=\"row form-group\">\n      <div class=\"col-md-6 mb-3 mb-md-0\">\n        <label class=\"text-black\" for=\"fname\">First Name</label>\n        <input type=\"text\" id=\"fname\" class=\"form-control\">\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"text-black\" for=\"lname\">Last Name</label>\n        <input type=\"text\" id=\"lname\" class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"row form-group\">\n      \n        <div class=\"col-md-12\">\n          <label class=\"text-black\" for=\"number\">Phone</label> \n          <input type=\"tel\" id=\"number\" class=\"form-control\">\n          <span class=\"note\">Format: +91-123-456-7890</span>\n        </div>\n      </div>\n\n    <div class=\"row form-group\">\n      \n      <div class=\"col-md-12\">\n        <label class=\"text-black\" for=\"email\">Email</label> \n        <input type=\"email\" id=\"email\" class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"row form-group\">\n        <div class=\"col-md-12\">\n          <label class=\"text-black\" for=\"address\">Address</label> \n          <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\">\n        </div>\n      </div>\n\n    <div class=\"row form-group\">\n      \n        <div class=\"col-md-12\">\n          <label class=\"text-black\" for=\"number\">Current Employer's Name</label> \n          <input type=\"text\" id=\"employer\" class=\"form-control\">\n          \n        </div>\n      </div>\n\n      \n      <div class=\"row form-group\">\n      \n          <div class=\"col-md-12\">\n            <label class=\"text-black\" for=\"number\">Work Experience</label> \n            <input type=\"text\" id=\"experience\" class=\"form-control\">\n            \n          </div>\n        </div>\n    \n    \n\n       \n      <div class=\"row form-group\">\n      \n          <div class=\"col-md-12\">\n            <label class=\"text-black\" for=\"number\">Key Skills </label> \n            <input type=\"text\" id=\"skills\" class=\"form-control\">\n            \n          </div>\n        </div>\n\n        <div class=\"row form-group\">\n      \n            <div class=\"col-md-12\">\n              <label class=\"text-black\" for=\"number\">Gross Salary per Month</label> \n              <input type=\"text\" id=\"salary\" class=\"form-control\">\n              \n            </div>\n          </div>\n\n          \n\n      \n\n    <div class=\"row form-group\">\n      <div class=\"col-md-12\">\n        <input type=\"submit\" value=\"Submit\" class=\"btn btn-dark py-2 px-4 text-white\" style='margin-right:16px'>\n        <input type=\"reset\" value=\"Clear\" class=\"btn btn-dark py-2 px-4 text-white\">\n      </div>\n    </div>\n\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CareerComponent = /** @class */ (function () {
    function CareerComponent() {
    }
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-career',
            template: __webpack_require__(/*! ./career.component.html */ "./src/app/career/career.component.html"),
            styles: [__webpack_require__(/*! ./career.component.css */ "./src/app/career/career.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\r\n  padding: 20px;\r\n  font-size: 30px;\r\n  width: 50px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Add a hover effect if you want */\r\n\r\n.fa:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n/* Set a specific color for each brand */\r\n\r\n/* Facebook */\r\n\r\n/* .fa-facebook {\r\n  background: #3B5998;\r\n  color: white;\r\n}\r\n\r\n\r\n.fa-twitter {\r\n  background: #55ACEE;\r\n  color: white;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsd0NBQXdDOztBQUV4QyxhQUFhOztBQUNiOzs7Ozs7Ozs7R0FTRyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgaWYgeW91IHdhbnQgKi9cclxuLmZhOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXHJcblxyXG4vKiBGYWNlYm9vayAqL1xyXG4vKiAuZmEtZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmZhLXR3aXR0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section bg-light\">\n    <h2 class=\"text-info\">Contact</h2>\n    <div class=\"container\">\n\n       \n      <div class=\"row\">\n        <div class=\"col-md-7 mb-5\">\n\n          \n\n          <form action=\"#\" class=\"p-5 bg-white\">\n           \n\n            <div class=\"row form-group\">\n              <div class=\"col-md-6 mb-3 mb-md-0\">\n                <label class=\"text-black\" for=\"fname\">First Name</label>\n                <input type=\"text\" id=\"fname\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"text-black\" for=\"lname\">Last Name</label>\n                <input type=\"text\" id=\"lname\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              \n                <div class=\"col-md-12\">\n                  <label class=\"text-black\" for=\"number\">Phone</label> \n                  <input type=\"tel\" id=\"number\" class=\"form-control\">\n                  <span class=\"note\">Format: +91-123-456-7890</span>\n                </div>\n              </div>\n\n            <div class=\"row form-group\">\n              \n              <div class=\"col-md-12\">\n                <label class=\"text-black\" for=\"email\">Email</label> \n                <input type=\"email\" id=\"email\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n                <div class=\"col-md-12\">\n                  <label class=\"text-black\" for=\"address\">Address</label> \n                  <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\">\n                </div>\n              </div>\n\n            <div class=\"row form-group\">\n              \n              <div class=\"col-md-12\">\n                <label class=\"text-black\" for=\"subject\">Subject</label> \n                <input type=\"subject\" id=\"subject\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-12\">\n                <label class=\"text-black\" for=\"message\">Message</label> \n                <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Write your notes or questions here...\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-12\">\n                <input type=\"submit\" value=\"Send Message\" class=\"btn btn-dark py-2 px-4 text-white\" style='margin-right:16px'>\n                \n                <input type=\"reset\" value=\"Clear\" class=\"btn btn-dark py-2 px-4 text-white\">\n              </div>\n            </div>\n\n\n          </form>\n        </div>\n        <div class=\"col-md-5\">\n          \n          <div class=\"p-4 mb-3 bg-white\">\n            <p class=\"mb-0 font-weight-bold\">Address</p>\n            <p class=\"mb-4\">\n               Quix Services Private Limited, \n              # J9/13, Rajouri Garden, New Delhi 110027, India</p>\n\n            <p class=\"mb-0 font-weight-bold\">Phone</p>\n            <p class=\"mb-4\"><a href=\"#\">+91-9818896545</a></p>\n\n            <p class=\"mb-0 font-weight-bold\">Email Address</p>\n            <p class=\"mb-0\"><a href=\"#\">youremail@domain.com</a></p>\n\n          </div>\n          \n          <div class=\"p-4 mb-3 bg-white\">\n            <h3 class=\"h5 text-black mb-3\">More Info</h3>\n            <p>Call us on this number.....</p>\n            <p><a href=\"#\" class=\"btn btn-dark px-4 py-2 text-white\">Learn More</a></p>\n          </div>\n\n          <div class=\"p-4 mb-3 bg-white\">\n              <h2 class=\"mb-0 font-weight-bold\">Follow Us</h2>\n              <a href=\"#\" class=\"pl-0 pr-3\"><span class=\"fa fa-facebook\"></span></a>\n              <a href=\"#\" class=\"pl-3 pr-3\"><span class=\"fa fa-twitter\"></span></a>\n              <a href=\"#\" class=\"pl-3 pr-3\"><span class=\"fa fa-instagram\"></span></a>\n              <a href=\"#\" class=\"pl-3 pr-3\"><span class=\"fa fa-linkedin\"></span></a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .footer{\r\n  /* position: absolute; \r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40pxs;\r\n  background-color: black;\r\n} */\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: rgb(8, 8, 8);\r\n  color: white;\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNIO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmZvb3RlcntcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHhzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59ICovXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgOCwgOCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\"> reserved copyright@ NileshKumar</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .carousel-inner img {\r\n  width: 100%;\r\n  height: 100%;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n  </ul>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"./assets/img/test2.jpg\" alt=\"Los Angeles\" width=\"1500\" height=\"500\">\n      <div class=\"carousel-caption\">\n        <h3>QuiX Moving & Storage</h3>\n        <p>“Enriching Lives Globally, with Quality & Affordable Services”</p>\n      </div>   \n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/img/test1.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\n      <div class=\"carousel-caption\">\n        <h3>QuiX Moving & Storage</h3>\n        <p>“Enriching Lives Globally, with Quality & Affordable Services”</p>\n      </div>   \n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/img/test2.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n      <div class=\"carousel-caption\">\n        <h3>QuiX Moving & Storage</h3>\n        <p>“Enriching Lives Globally, with Quality & Affordable Services”</p>\n      </div>   \n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n\n<!-- <div>\n  <h2>About Company</h2>\n  <p class=\"text-justify\"><strong>QuiX Moving & Storage</strong>, A company that has clearly established itself amongst the top relocation & moving companies in the India and with clear focus on Quality, Customer Satisfaction, Value Addition and Business Ethics. QuiX Moving & Storage continues to grow rapidly, receiving patronage from some of the most reputed corporations, diplomatic missions, international agencies, as well as the Relocation & Art Fraternity around the world.</p>\n</div> -->\n\n<!-- <div>\n   <h2> Mission </h2>\n    <p>To be one of the best known relocation company for providing a comprehensive and personalized service, with a single point of contact leading to outstanding results.</p>\n    \n</div> -->\n\n\n<div class=\"col-md-6 order-md-1\" data-aos=\"fade\">\n    \n    <h2 class=\"text-info\">Our History</h2>\n    \n    <p class=\"text-justify\"><strong>QuiX Moving & Storage</strong>, A company that has clearly established itself amongst the top relocation & moving companies in the India and with clear focus on Quality, Customer Satisfaction, Value Addition and Business Ethics. QuiX Moving & Storage continues to grow rapidly, receiving patronage from some of the most reputed corporations, diplomatic missions, international agencies, as well as the Relocation & Art Fraternity around the world.</p>\n\n    \n  </div>\n  \n\n  \n  <div class=\"site-section bg-light\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center mb-5\">\n          <div class=\"col-md-7 text-center border-primary\">\n            <h2 class=\"font-weight-light text-info\">What We Offer</h2>\n            <p class=\"color-black-opacity-5\">We Offer The Following Services</p>\n          </div>\n        </div>\n        <div class=\"row align-items-stretch\">\n          <div class=\"col-md-6 col-lg-4 mb-4 mb-lg-4\">\n            <div class=\"unit-4 d-flex\">\n              <div class=\"unit-4-icon mr-4\"><span class=\"text-info flaticon-travel\"></span></div>\n              <div>\n                <h3>Domestic Moving </h3>\n                <p>If you are planning to relocate your employees, we know that the biggest tension that must be bothering them is how to pack all the household items, transport it safely, reliably, and cost effectively. Well, you need not worry anymore!</p>\n                <p><a href=\"#\">Learn More</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4 mb-lg-4\">\n            <div class=\"unit-4 d-flex\">\n              <div class=\"unit-4-icon mr-4\"><span class=\"text-info flaticon-sea-ship-with-containers\"></span></div>\n              <div>\n                <h3>International Moving  </h3>\n                <p>While any move significantly impacts your life, international relocation can be even more exciting and stressful. To help you make this process go as smoothly as possible, we are here to assist you.\n                    \n                    </p>\n                <p><a href=\"#\">Learn More</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4 mb-lg-4\">\n            <div class=\"unit-4 d-flex\">\n              <div class=\"unit-4-icon mr-4\"><span class=\"text-info flaticon-frontal-truck\"></span></div>\n              <div>\n                <h3>Automobile </h3>\n                <p>We are an ideal choice when you are looking for a dependable, quick and safe car transportation service. We understand your concerns about the safety of your prized possession and therefore we handle it with utmost care so that it is safely delivered to the destination. </p>\n                <p><a href=\"#\">Learn More</a></p>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-6 col-lg-4 mb-4 mb-lg-4\">\n            <div class=\"unit-4 d-flex\">\n              <div class=\"unit-4-icon mr-4\"><span class=\"text-info flaticon-barn\"></span></div>\n              <div>\n                <h3>Pet handling </h3>\n                <p>It may be a hassle to travel with the pet while you are relocating, especially when it involves a long distance or international move. We at QuiX Moving & Storage, provide most comfortable and stress-free way for your pet to be moved. </p>\n                <p><a href=\"#\">Learn More</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4 mb-lg-4\">\n            <div class=\"unit-4 d-flex\">\n              <div class=\"unit-4-icon mr-4\"><span class=\"text-info flaticon-platform\"></span></div>\n              <div>\n                <h3>Industrial Moving</h3>\n                <p>QuiX Moving & Storage is equipped to handle virtually any kind of Industrial relocation such as relocation of capital equipments, delicate & sophisticated equipments, laboratory equipments, machinery and related apparatus and glassware etc</p>\n                <p><a href=\"#\">Learn More</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4 mb-lg-4\">\n            <div class=\"unit-4 d-flex\">\n              <div class=\"unit-4-icon mr-4\"><span class=\"text-info flaticon-car\"></span></div>\n              <div>\n                <h3>Office Moving  </h3>\n                <p>Shifting an entire office setup can be an extremely tedious task. However, we at QuiX Moving & Storage will make it easy for you.</p>\n                <p><a href=\"#\">Learn More</a></p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"Absolute-Center is-Responsive\">\n        <div id=\"logo-container\"></div>\n        <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\n          <form action=\"\" id=\"loginForm\">\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n              <input class=\"form-control\" type=\"text\" name='username' placeholder=\"username\"/>          \n            </div>\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n              <input class=\"form-control\" type=\"password\" name='password' placeholder=\"password\"/>     \n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> I agree to the <a href=\"#\">Terms and Conditions</a>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"button\" class=\"btn btn-def btn-block\">Login</button>\n            </div>\n            <div class=\"form-group text-center\">\n              <a href=\"#\">Forgot Password</a>&nbsp;|&nbsp;<a href=\"#\">Support</a>\n            </div>\n          </form>        \n        </div>  \n      </div>    \n    </div>\n  </div> -->\n\n<form>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <div><a href=\"#\" class=\"navbar-brand\">Quix Moving</a></div>\n\n  <ul class=\"navbar-nav\">\n    <li><a routerLink=\"/home\" class=\"nav-link\">Home</a></li>\n    <li><a routerLink=\"/services\" class=\"nav-link\">Services</a></li>\n    <li><a routerLink=\"/utilities\" class=\"nav-link\">Utilities</a></li>\n    <li><a routerLink=\"/contact\" class=\"nav-link\">Contact</a></li>\n    <li><a routerLink=\"/aboutus\" class=\"nav-link\">About Us</a></li>\n    <li><a routerLink=\"/career\" class=\"nav-link\">Careers</a></li>\n    <div class=\"dropdown\">\n      <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Useful Links\n      </a>\n    \n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n        <a class=\"dropdown-item\" href=\"http://www.cbec.gov.in/\" target=\"_blank\">Central Board of Customs and Excise</a>\n        <a class=\"dropdown-item\" href=\"http://www.timeticker.com/\" target=\"_blank\">World Time</a>\n        \n      </div>\n    </div>\n    \n  </ul>\n\n  <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n    <li><a routerLink=\"/login\" class=\"nav-link\">Login</a></li>\n    <!-- <li><a routerLink=\"/logout\" class=\"nav-link\">Logout</a></li> -->\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"text-info\">Services</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/utilities/utilities.component.css":
/*!***************************************************!*\
  !*** ./src/app/utilities/utilities.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdGllcy91dGlsaXRpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/utilities/utilities.component.html":
/*!****************************************************!*\
  !*** ./src/app/utilities/utilities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <h2 class=\"text-info\">Utilities</h2>\n              \n  <table class=\"table\">\n    <!-- <thead>\n      <tr>\n        <th>Firstname</th>\n        <th></th>\n        <th></th>\n      </tr>\n    </thead> -->\n    <tbody>\n      <tr>\n        <td>1 inch</td>\n        <td>2.54 centimeters</td>\n        <td>25.4 millimeters</td>\n      </tr>\n      <tr>\n        <td>1 foot</td>\n        <td>Moe</td>\n        <td>mary@example.com</td>\n      </tr>\n      <tr>\n        <td>July</td>\n        <td>Dooley</td>\n        <td>july@example.com</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/utilities/utilities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/utilities/utilities.component.ts ***!
  \**************************************************/
/*! exports provided: UtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesComponent", function() { return UtilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilitiesComponent = /** @class */ (function () {
    function UtilitiesComponent() {
    }
    UtilitiesComponent.prototype.ngOnInit = function () {
    };
    UtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-utilities',
            template: __webpack_require__(/*! ./utilities.component.html */ "./src/app/utilities/utilities.component.html"),
            styles: [__webpack_require__(/*! ./utilities.component.css */ "./src/app/utilities/utilities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilitiesComponent);
    return UtilitiesComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <div><a href=\"#\" class=\"navbar-brand\">Quix Moving</a></div>\n\n    <ul class=\"navbar-nav\">\n      <li><a routerLink=\"/welcome/yoyo\" class=\"nav-link\">Home</a></li>\n      <li><a routerLink=\"/todos\" class=\"nav-link\">todos</a></li>\n    </ul>\n\n    <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n      <li><a routerLink=\"/login\" class=\"nav-link\">Login</a></li>\n      <!-- <li><a routerLink=\"/logout\" class=\"nav-link\">Logout</a></li> -->\n    </ul>\n  </nav>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Z0040VKU\Desktop\New folder (3)\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map