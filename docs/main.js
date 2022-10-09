(self["webpackChunkvuexy_admin_template"] = self["webpackChunkvuexy_admin_template"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 24597:
/*!************************************************!*\
  !*** ./src/@core/animations/core.animation.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInLeft": function() { return /* binding */ fadeInLeft; },
/* harmony export */   "zoomIn": function() { return /* binding */ zoomIn; },
/* harmony export */   "fadeIn": function() { return /* binding */ fadeIn; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 17238);

// Animation: FadeInLeft
var fadeInLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInLeft', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', left: 0, width: '100%', paddingRight: '2rem', paddingLeft: '2rem', opacity: 0 }), {
            optional: true
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)', opacity: 0 }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateX(100%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('800ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateX(0%)' })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()], {
                optional: true
            })
        ])
    ])
]);
// Animation: ZoomIn
var zoomIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('zoomIn', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                left: 0,
                width: '100%',
                paddingRight: '2rem',
                paddingLeft: '2rem',
                opacity: 0,
                transform: 'scale(0.5) translateY(-20%)'
            })
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, paddingRight: '2rem', paddingLeft: '2rem', transform: 'scale(1) translateY(0)' }))
        ], {
            optional: true
        })
    ])
]);
// Animation: FadeIn
var fadeIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeIn', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                left: 0,
                width: '100%',
                paddingRight: '2rem',
                paddingLeft: '2rem',
                opacity: 0
            })
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, paddingRight: '2rem', paddingLeft: '2rem' }))], {
            optional: true
        })
    ])
]);


/***/ }),

/***/ 75078:
/*!************************************!*\
  !*** ./src/@core/common.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreCommonModule": function() { return /* binding */ CoreCommonModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/directives */ 35455);
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/pipes/pipes.module */ 30021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






var CoreCommonModule = /** @class */ (function () {
    function CoreCommonModule() {
    }
    CoreCommonModule.ɵfac = function CoreCommonModule_Factory(t) { return new (t || CoreCommonModule)(); };
    CoreCommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreCommonModule });
    CoreCommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.CorePipesModule], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.CorePipesModule] });
    return CoreCommonModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreCommonModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.CorePipesModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.CorePipesModule] }); })();


/***/ }),

/***/ 34505:
/*!***************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuComponent": function() { return /* binding */ CoreMenuComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 9380);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 86365);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 96315);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 42592);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 17023);












var _c0 = ["core-menu", ""];
function CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 5);
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r3);
} }
var _c1 = function (a0) { return { disabled: a0 }; };
var _c2 = function (a0) { return { exact: a0 }; };
var _c3 = function () { return []; };
var _c4 = function (a0) { return [a0]; };
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c4, item_r10.url));
} }
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 8);
} if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10);
} }
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible");
} }
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r3.children);
} }
function CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, item_r3.disabled === true))("routerLinkActive", !item_r3.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, item_r3.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r3.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c4, item_r3.url));
} }
function CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 8);
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r3);
} }
function CoreMenuComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template, 1, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.type == "collapsible");
} }
function CoreMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_Template, 5, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.menu);
} }
function CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 12);
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r19);
} }
function CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r19)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, item_r19.disabled === true))("routerLinkActive", !item_r19.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, item_r19.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r19.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c4, item_r19.url));
} }
function CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 14);
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r19);
} }
function CoreMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template, 1, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r19.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r19.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r19.type == "collapsible");
} }
function CoreMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.menu);
} }
var CoreMenuComponent = /** @class */ (function () {
    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {CoreMenuService} _coreMenuService
     */
    function CoreMenuComponent(_changeDetectorRef, _coreMenuService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._coreMenuService = _coreMenuService;
        this.layout = 'vertical';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    CoreMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the menu either from the input or from the service
        this.menu = this.menu || this._coreMenuService.getCurrentMenu();
        // Subscribe to the current menu changes
        this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            _this.currentUser = _this._coreMenuService.currentUser;
            // Load menu
            _this.menu = _this._coreMenuService.getCurrentMenu();
            _this._changeDetectorRef.markForCheck();
        });
    };
    CoreMenuComponent.ɵfac = function CoreMenuComponent_Factory(t) { return new (t || CoreMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_0__.CoreMenuService)); };
    CoreMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CoreMenuComponent, selectors: [["", "core-menu", ""]], inputs: { layout: "layout", menu: "menu" }, attrs: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["core-menu-vertical-section", "", "class", "navigation-header", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-section", "", 1, "navigation-header", 3, "item"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"], ["core-menu-horizontal-collapsible", "", "class", "dropdown nav-item", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "nav-item", 3, "item"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]], template: function CoreMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.layout === "vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_1__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_2__.CoreMenuVerticalItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuHorizontalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuHorizontalItemComponent], styles: [".vertical-layout:not(.vertical-overlay-menu) .main-menu:not(.expanded) .nav-item.has-sub.open .menu-content {\n  display: none;\n}\n\n.nav-item.disabled {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTtFQUNFLGFBQUE7QUFIUjs7QUFTRTtFQUNFLGFBQUE7QUFOSiIsImZpbGUiOiJjb3JlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSGlkZSBjb2xsYXBzaWJsZSBtZW51IHdoaWxlIG1lbnUgaXMgY29sbGFwc2VkXG4udmVydGljYWwtbGF5b3V0Om5vdCgudmVydGljYWwtb3ZlcmxheS1tZW51KSB7XG4gIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkge1xuICAgIC5uYXYtaXRlbS5oYXMtc3ViLm9wZW4ge1xuICAgICAgLm1lbnUtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubmF2LWl0ZW0ge1xuICAmLmRpc2FibGVkIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
    return CoreMenuComponent;
}());



/***/ }),

/***/ 64017:
/*!************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* binding */ CoreMenuModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 34505);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 9380);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 86365);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 96315);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 17023);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 42592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);












_core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_2__.CoreMenuVerticalSectionComponent;
_core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalItemComponent;
_core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalCollapsibleComponent;
var CoreMenuModule = /** @class */ (function () {
    function CoreMenuModule() {
    }
    CoreMenuModule.ɵfac = function CoreMenuModule_Factory(t) { return new (t || CoreMenuModule)(); };
    CoreMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreMenuModule });
    CoreMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild(), _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule]] });
    return CoreMenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreMenuModule, { declarations: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_1__.CoreMenuComponent,
        _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_2__.CoreMenuVerticalSectionComponent,
        _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalItemComponent,
        _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalCollapsibleComponent,
        _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuHorizontalItemComponent,
        _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalCollapsibleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule], exports: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_1__.CoreMenuComponent] }); })();


/***/ }),

/***/ 54278:
/*!*************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuService": function() { return /* binding */ CoreMenuService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/auth/service */ 81004);




var CoreMenuService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {AuthenticationService} _authenticationService
     */
    function CoreMenuService(_router, _authenticationService) {
        var _this = this;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._registry = {};
        this._authenticationService.currentUser.subscribe(function (x) { return (_this.currentUser = x); });
        // Set defaults
        this.onItemCollapsed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.onItemCollapseToggled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // Set private defaults
        this._currentMenuKey = null;
        this._onMenuRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this._onMenuUnregistered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this._onMenuChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    Object.defineProperty(CoreMenuService.prototype, "onMenuRegistered", {
        // Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * onMenuRegistered
         *
         * @returns {Observable<any>}
         */
        get: function () {
            return this._onMenuRegistered.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreMenuService.prototype, "onMenuUnregistered", {
        /**
         * onMenuUnregistered
         *
         * @returns {Observable<any>}
         */
        get: function () {
            return this._onMenuUnregistered.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreMenuService.prototype, "onMenuChanged", {
        /**
         * onMenuChanged
         *
         * @returns {Observable<any>}
         */
        get: function () {
            return this._onMenuChanged.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register the provided menu with the provided key
     *
     * @param key
     * @param menu
     */
    CoreMenuService.prototype.register = function (key, menu) {
        // Confirm if the key already used
        if (this._registry[key]) {
            console.error("Menu with the key '" + key + "' already exists. Either unregister it first or use a unique key.");
            return;
        }
        // Add to registry
        this._registry[key] = menu;
        // Notify subject
        this._onMenuRegistered.next([key, menu]);
    };
    /**
     * Unregister the menu from the registry
     *
     * @param key
     */
    CoreMenuService.prototype.unregister = function (key) {
        // Confirm if the menu exists
        if (!this._registry[key]) {
            console.warn("Menu with the key '" + key + "' doesn't exist in the registry.");
        }
        // Unregister sidebar
        delete this._registry[key];
        // Notify subject
        this._onMenuUnregistered.next(key);
    };
    /**
     * Get menu from registry by key
     *
     * @param key
     * @returns {any}
     */
    CoreMenuService.prototype.getMenu = function (key) {
        // Confirm if the menu exists
        if (!this._registry[key]) {
            console.warn("Menu with the key '" + key + "' doesn't exist in the registry.");
            return;
        }
        // Return sidebar
        return this._registry[key];
    };
    /**
     * Get current menu
     *
     * @returns {any}
     */
    CoreMenuService.prototype.getCurrentMenu = function () {
        if (!this._currentMenuKey) {
            console.warn("The current menu is not set.");
            return;
        }
        return this.getMenu(this._currentMenuKey);
    };
    /**
     * Set menu with the key as the current menu
     *
     * @param key
     */
    CoreMenuService.prototype.setCurrentMenu = function (key) {
        // Confirm if the sidebar exists
        if (!this._registry[key]) {
            console.warn("Menu with the key '" + key + "' doesn't exist in the registry.");
            return;
        }
        // Set current menu key
        this._currentMenuKey = key;
        // Notify subject
        this._onMenuChanged.next(key);
    };
    CoreMenuService.ɵfac = function CoreMenuService_Factory(t) { return new (t || CoreMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
    CoreMenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CoreMenuService, factory: CoreMenuService.ɵfac, providedIn: 'root' });
    return CoreMenuService;
}());



/***/ }),

/***/ 42592:
/*!****************************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/collapsible/collapsible.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalCollapsibleComponent": function() { return /* binding */ CoreMenuHorizontalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 17023);












var _c0 = ["core-menu-horizontal-collapsible", ""];
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("ngClass", ctx_r1.item.type == "section" ? "dropdown-toggle nav-link" : "dropdown-item dropdown-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 9);
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", ctx_r6.item.icon);
} }
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.item.title);
} }
var _c1 = function (a0) { return { disabled: a0 }; };
var _c2 = function (a0) { return { exact: a0 }; };
var _c3 = function () { return []; };
var _c4 = function (a0) { return [a0]; };
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", item_r7)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, item_r7.disabled === true))("routerLinkActive", !item_r7.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c2, item_r7.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r7.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c4, item_r7.url));
} }
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "li", 14);
} if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", item_r7);
} }
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.type == "collapsible");
} }
var _c5 = function (a0) { return { show: a0 }; };
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template, 2, 3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c5, ctx_r0.isShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
} }
var CoreMenuHorizontalCollapsibleComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreMenuService} _coreMenuService
     */
    function CoreMenuHorizontalCollapsibleComponent(el, _router, _coreConfigService, _coreMenuService) {
        this.el = el;
        this._router = _router;
        this._coreConfigService = _coreConfigService;
        this._coreMenuService = _coreMenuService;
        this.isShow = false;
        // Conditionally add the active classes if UrlInChildren
        this.isActive = false;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    CoreMenuHorizontalCollapsibleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
        // Subscribe to the current menu changes
        this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            _this.currentUser = _this._coreMenuService.currentUser;
        });
        // Listen for router events and expand
        this._router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(function (event) {
            // Confirm if the urlAfterRedirects can be found in one of the children of this item
            if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
                _this.isActive = true;
            }
            else {
                _this.isActive = false;
            }
        });
        // Check if the url can be found in one of the children of this item
        // Required for onInit case (i.e switching theme customizer menu layout)
        if (this.confirmUrlInChildren(this.item, this._router.url)) {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }
    };
    /**
     * On destroy
     */
    CoreMenuHorizontalCollapsibleComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open
     */
    CoreMenuHorizontalCollapsibleComponent.prototype.show = function () {
        this.isShow = true;
        this.setSubMenuProp();
    };
    /**
     * Close
     */
    CoreMenuHorizontalCollapsibleComponent.prototype.hide = function () {
        this.isShow = false;
    };
    /**
     * Set sub-menu properties based on screen size
     *
     */
    CoreMenuHorizontalCollapsibleComponent.prototype.setSubMenuProp = function () {
        var _this = this;
        setTimeout(function () {
            var nativeElement = _this.el.nativeElement, nativeElementChildren = _this.el.nativeElement.children[1];
            // If element has sub menu
            if (nativeElement.classList.contains('dropdown-submenu')) {
                var innerHeight_1 = window.innerHeight, dropdownTop = nativeElementChildren.getBoundingClientRect().top, dropdownLeft = nativeElementChildren.getBoundingClientRect().left, dropdownHeight = nativeElementChildren.scrollHeight, dropdownWidth = nativeElementChildren.scrollWidth;
                //Set sub-menu height
                if (innerHeight_1 - dropdownTop - dropdownHeight - 28 < 1) {
                    var maxHeight = innerHeight_1 - dropdownTop - 25;
                    nativeElementChildren.setAttribute('style', 'overflow-y: auto; overflow-x: hidden; max-height : ' + maxHeight + 'px');
                }
                // Open sub-menu on left based on screen size (To avoid opn sub-menu outside of the screen)
                if (dropdownLeft + dropdownWidth - (window.innerWidth - 16) >= 0) {
                    nativeElementChildren.parentElement.classList.add('openLeft');
                }
            }
        });
    };
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
    CoreMenuHorizontalCollapsibleComponent.prototype.confirmUrlInChildren = function (parent, url) {
        var children = parent.children;
        // Return false if parent don't have any children
        if (!children) {
            return false;
        }
        // Loop all the children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            // If children has child (Sub to sub item url)
            if (child.children) {
                // Call function again with child
                if (this.confirmUrlInChildren(child, url)) {
                    return true;
                }
            }
            // If child.url is same as provided url
            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }
        return false;
    };
    CoreMenuHorizontalCollapsibleComponent.ɵfac = function CoreMenuHorizontalCollapsibleComponent_Factory(t) { return new (t || CoreMenuHorizontalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_1__.CoreMenuService)); };
    CoreMenuHorizontalCollapsibleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CoreMenuHorizontalCollapsibleComponent, selectors: [["", "core-menu-horizontal-collapsible", ""]], hostVars: 6, hostBindings: function CoreMenuHorizontalCollapsibleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function CoreMenuHorizontalCollapsibleComponent_mouseenter_HostBindingHandler() { return ctx.show(); })("mouseleave", function CoreMenuHorizontalCollapsibleComponent_mouseleave_HostBindingHandler() { return ctx.hide(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.isActive)("open", ctx.isActive)("sidebar-group-active", ctx.isActive);
        } }, inputs: { item: "item" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]], template: function CoreMenuHorizontalCollapsibleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuHorizontalItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, CoreMenuHorizontalCollapsibleComponent], encapsulation: 2 });
    return CoreMenuHorizontalCollapsibleComponent;
}());



/***/ }),

/***/ 17023:
/*!**************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/item/item.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalItemComponent": function() { return /* binding */ CoreMenuHorizontalItemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);






var _c0 = ["core-menu-horizontal-item", ""];
function CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
var _c1 = function (a0) { return [a0]; };
function CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 9);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
} }
function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.title);
} }
function CoreMenuHorizontalItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
} }
var CoreMenuHorizontalItemComponent = /** @class */ (function () {
    function CoreMenuHorizontalItemComponent() {
    }
    CoreMenuHorizontalItemComponent.ɵfac = function CoreMenuHorizontalItemComponent_Factory(t) { return new (t || CoreMenuHorizontalItemComponent)(); };
    CoreMenuHorizontalItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CoreMenuHorizontalItemComponent, selectors: [["", "core-menu-horizontal-item", ""]], inputs: { item: "item" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"]], template: function CoreMenuHorizontalItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FeatherIconDirective], encapsulation: 2 });
    return CoreMenuHorizontalItemComponent;
}());



/***/ }),

/***/ 96315:
/*!**************************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/collapsible/collapsible.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalCollapsibleComponent": function() { return /* binding */ CoreMenuVerticalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 86365);











var _c0 = ["core-menu-vertical-collapsible", ""];
function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.toggleOpen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", ctx_r8.item.icon);
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r9.item.badge.translate)("ngClass", ctx_r9.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.item.badge.title, " ");
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template, 2, 3, "span", 9);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.item.badge);
} }
var _c1 = function (a0) { return { disabled: a0 }; };
var _c2 = function (a0) { return { exact: a0 }; };
var _c3 = function () { return []; };
var _c4 = function (a0) { return [a0]; };
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c4, item_r10.url));
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "li", 16);
} if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r10);
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible");
} }
function CoreMenuVerticalCollapsibleComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template, 2, 2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
} }
var CoreMenuVerticalCollapsibleComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {CoreMenuService} _coreMenuService
     * @param {ChangeDetectorRef} _changeDetectorRef
     */
    function CoreMenuVerticalCollapsibleComponent(_router, _coreMenuService, _changeDetectorRef) {
        this._router = _router;
        this._coreMenuService = _coreMenuService;
        this._changeDetectorRef = _changeDetectorRef;
        this.isOpen = false;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    CoreMenuVerticalCollapsibleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for router events and expand
        this._router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll))
            .subscribe(function (event) {
            // Confirm if the urlAfterRedirects can be found in one of the children of this item
            if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
                _this.expand();
            }
            else {
                _this.collapse();
            }
        });
        // Subscribe to the current menu changes
        this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            _this.currentUser = _this._coreMenuService.currentUser;
        });
        // Listen for collapsing of any menu item
        this._coreMenuService.onItemCollapsed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (clickedItem) {
            if (clickedItem && clickedItem.children) {
                // Check if the clicked item is one of the children of this item
                if (_this.confirmItemInChildren(_this.item, clickedItem)) {
                    return;
                }
                // Check if the url can be found in one of the children of this item
                if (_this.confirmUrlInChildren(_this.item, _this._router.url)) {
                    return;
                }
                // If the clicked item is not this item, collapse...
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
        // Check if the url can be found in one of the children of this item
        // Required for onInit case (i.e switching theme customizer menu layout)
        if (this.confirmUrlInChildren(this.item, this._router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    /**
     * On destroy
     */
    CoreMenuVerticalCollapsibleComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle collapse
     *
     * @param e
     */
    CoreMenuVerticalCollapsibleComponent.prototype.toggleOpen = function (e) {
        e.preventDefault();
        this.isOpen = !this.isOpen;
        // Menu collapse toggled...
        this._coreMenuService.onItemCollapsed.next(this.item);
        this._coreMenuService.onItemCollapseToggled.next();
    };
    /**
     * Expand the collapsible menu
     */
    CoreMenuVerticalCollapsibleComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        // Mark for check
        this._changeDetectorRef.markForCheck();
        this._coreMenuService.onItemCollapseToggled.next();
    };
    /**
     * Collapse the collapsible menu
     */
    CoreMenuVerticalCollapsibleComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        // Mark for check
        this._changeDetectorRef.markForCheck();
        this._coreMenuService.onItemCollapseToggled.next();
    };
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
    CoreMenuVerticalCollapsibleComponent.prototype.confirmUrlInChildren = function (parent, url) {
        var children = parent.children;
        // Return false if parent don't have any children
        if (!children) {
            return false;
        }
        // Loop all the children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            // If children has child (Sub to sub item url)
            if (child.children) {
                // Call function again with child
                if (this.confirmUrlInChildren(child, url)) {
                    return true;
                }
            }
            // If child.url is same as provided url
            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if the provided parent has the provided item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */
    CoreMenuVerticalCollapsibleComponent.prototype.confirmItemInChildren = function (parent, item) {
        var children = parent.children;
        // Return false if parent don't have any children
        if (!children) {
            return false;
        }
        // Return true parent has the provided item in one of its children
        if (children.indexOf(item) > -1) {
            return true;
        }
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            if (child.children) {
                // Call function again with child (for sub to sub item)
                if (this.confirmItemInChildren(child, item)) {
                    return true;
                }
            }
        }
        return false;
    };
    CoreMenuVerticalCollapsibleComponent.ɵfac = function CoreMenuVerticalCollapsibleComponent_Factory(t) { return new (t || CoreMenuVerticalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_0__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
    CoreMenuVerticalCollapsibleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CoreMenuVerticalCollapsibleComponent, selectors: [["", "core-menu-vertical-collapsible", ""]], hostVars: 2, hostBindings: function CoreMenuVerticalCollapsibleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("open", ctx.isOpen);
        } }, inputs: { item: "item" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "click", 4, "ngIf"], ["itemContent", ""], [1, "menu-content"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass", "click"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"]], template: function CoreMenuVerticalCollapsibleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_2__.CoreMenuVerticalItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, CoreMenuVerticalCollapsibleComponent], encapsulation: 2 });
    return CoreMenuVerticalCollapsibleComponent;
}());



/***/ }),

/***/ 86365:
/*!************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/item/item.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalItemComponent": function() { return /* binding */ CoreMenuVerticalItemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);






var _c0 = ["core-menu-vertical-item", ""];
function CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
var _c1 = function (a0) { return [a0]; };
function CoreMenuVerticalItemComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CoreMenuVerticalItemComponent_ng_container_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 10);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
} }
function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", ctx_r8.item.badge.translate)("ngClass", ctx_r8.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.item.badge.title, " ");
} }
function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template, 2, 3, "span", 9);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.item.badge);
} }
function CoreMenuVerticalItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CoreMenuVerticalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
} }
var CoreMenuVerticalItemComponent = /** @class */ (function () {
    function CoreMenuVerticalItemComponent() {
    }
    CoreMenuVerticalItemComponent.ɵfac = function CoreMenuVerticalItemComponent_Factory(t) { return new (t || CoreMenuVerticalItemComponent)(); };
    CoreMenuVerticalItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CoreMenuVerticalItemComponent, selectors: [["", "core-menu-vertical-item", ""]], inputs: { item: "item" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"]], template: function CoreMenuVerticalItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FeatherIconDirective], encapsulation: 2 });
    return CoreMenuVerticalItemComponent;
}());



/***/ }),

/***/ 9380:
/*!******************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/section/section.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalSectionComponent": function() { return /* binding */ CoreMenuVerticalSectionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);




var _c0 = ["core-menu-vertical-section", ""];
function CoreMenuVerticalSectionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", ctx_r0.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data-feather", "more-horizontal");
} }
var CoreMenuVerticalSectionComponent = /** @class */ (function () {
    function CoreMenuVerticalSectionComponent() {
    }
    CoreMenuVerticalSectionComponent.ɵfac = function CoreMenuVerticalSectionComponent_Factory(t) { return new (t || CoreMenuVerticalSectionComponent)(); };
    CoreMenuVerticalSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CoreMenuVerticalSectionComponent, selectors: [["", "core-menu-vertical-section", ""]], inputs: { item: "item" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "navigation-section-text", 3, "translate"], [3, "data-feather"]], template: function CoreMenuVerticalSectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CoreMenuVerticalSectionComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FeatherIconDirective], encapsulation: 2 });
    return CoreMenuVerticalSectionComponent;
}());



/***/ }),

/***/ 9831:
/*!*********************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarComponent": function() { return /* binding */ CoreSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/media.service */ 42826);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 7736);











var _c0 = ["*"];
var CoreSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {Renderer2} _renderer
     * @param {ElementRef} _elementRef
     * @param {CoreConfigService} _coreConfigService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {CoreMediaService} _coreMediaService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {AnimationBuilder} _animationBuilder
     * @param {MediaObserver} _mediaObserver
     */
    function CoreSidebarComponent(document, _renderer, _elementRef, _coreConfigService, _changeDetectorRef, _coreMediaService, _coreSidebarService, _animationBuilder, _mediaObserver) {
        this.document = document;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._coreConfigService = _coreConfigService;
        this._changeDetectorRef = _changeDetectorRef;
        this._coreMediaService = _coreMediaService;
        this._coreSidebarService = _coreSidebarService;
        this._animationBuilder = _animationBuilder;
        this._mediaObserver = _mediaObserver;
        this._overlay = null;
        // Set Defaults
        this.isOpened = false;
        this.overlayVisibility = true;
        this.hideOnEsc = false;
        // Layout root element
        this.rootElement =
            this.document.querySelectorAll('.vertical-layout')[0] || this.document.querySelectorAll('.horizontal-layout')[0];
        this.collapsedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.openedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        // Set Private Defaults
        this._collapsed = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    CoreSidebarComponent.prototype.onKeydownHandler = function (event) {
        if (this.hideOnEsc) {
            this.close();
        }
    };
    Object.defineProperty(CoreSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        // Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Collapsed
         *
         * @param {boolean} value
         */
        set: function (value) {
            // Set the collapsed value
            this._collapsed = value;
            // If the sidebar is closed, return
            if (!this.isOpened) {
                this.rootElement.classList.add('menu-expanded'); // Add menu expanded class default
                return;
            }
            // If Collapsed
            if (value) {
                // Collapse the sidebar
                this.collapse();
                // Add menu-collapsed in body and remove menu-expanded
                this.rootElement.classList.add('menu-collapsed');
                this.rootElement.classList.remove('menu-expanded');
            }
            // If Expanded
            else {
                // Expanded the sidebar
                this.expand();
                // Add menu-expanded in body and remove menu-collapsed
                this.rootElement.classList.add('menu-expanded');
                this.rootElement.classList.remove('menu-collapsed');
            }
            // Emit the 'collapsedChangedEvent' event
            this.collapsedChangedEvent.emit(this.collapsed);
        },
        enumerable: false,
        configurable: true
    });
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    CoreSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to app-config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this._coreConfig = config;
            if (config.layout.type == 'vertical') {
                _this.menuClass = 'vertical-menu-modern';
            }
            else {
                _this.menuClass = 'horizontal-menu';
            }
        });
        // Register the sidebar
        this._coreSidebarService.setSidebarRegistry(this.name, this);
        // Setup collapsibleSidebar
        this._setupCollapsibleSidebar();
        // Default collapsed
        this._defaultCollapsed();
    };
    /**
     * On destroy
     */
    CoreSidebarComponent.prototype.ngOnDestroy = function () {
        // If the sidebar is collapsed, expand it to reset changes
        if (this.collapsed) {
            this.expand();
        }
        // Remove sidebar registry
        this._coreSidebarService.removeSidebarRegistry(this.name);
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // Private Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setup the collapsible sidebar handler
     *
     * @private
     */
    CoreSidebarComponent.prototype._setupCollapsibleSidebar = function () {
        var _this = this;
        // Return if the collapsible sidebar breakpoint was not set from the layout
        if (!this.collapsibleSidebar) {
            return;
        }
        // Set the _wasCollapsible false for the first time
        this._wasCollapsible = false;
        // Set the wasCollapsed from the layout
        this._wasCollapsed = this.collapsed;
        // On every media(screen) change
        this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            // Get the collapsible status
            var isCollapsible = _this._mediaObserver.isActive(_this.collapsibleSidebar);
            //! On screen resize set the config collapsed state if we have else this.collapsed
            _this._wasCollapsed = _this._coreConfig.layout.menu.collapsed || _this.collapsed;
            // If sidebar is not collapsible, switch to overlay menu (On page load without resize the window)
            // ? Improve this menu condition
            if (!isCollapsible && _this.name === 'menu') {
                _this.rootElement.classList.remove(_this.menuClass);
                _this.rootElement.classList.add('vertical-overlay-menu');
            }
            // If the both status are the same, then return
            if (_this._wasCollapsible === isCollapsible) {
                return;
            }
            // If isCollapsible is true, use collapsible sidebar
            if (isCollapsible) {
                // Set the collapsibleSidebar status
                _this.iscollapsibleSidebar = true;
                // Set the the opened status to true
                _this.isOpened = true;
                _this.expanded = true; // Adde expanded class init
                // Emit the 'openedChangedEvent' event
                _this.openedChangedEvent.emit(_this.isOpened);
                // If the sidebar was collapsed, forcefully collapse it again
                if (_this._wasCollapsed) {
                    // Collapse
                    _this.collapsed = true;
                    _this.expanded = false; // Remove expanded class
                    // Change detector
                    _this._changeDetectorRef.markForCheck();
                }
                // If sidebar is collapsible, switch to collapsible menu (modern-menu)
                if (_this.name === 'menu') {
                    _this.rootElement.classList.add(_this.menuClass);
                    _this.rootElement.classList.remove('vertical-overlay-menu', 'menu-hide');
                }
                // Hide the overlay if any exists
                _this._hideOverlay();
            }
            // Else use overlay sidebar
            else {
                // Set the collapsibleSidebar status
                _this.iscollapsibleSidebar = false;
                // Expanded the sidebar in case if it was collapsed
                _this.expand();
                // Force the the opened status to close
                _this.isOpened = false;
                // Emit the 'openedChangedEvent' event
                _this.openedChangedEvent.emit(_this.isOpened);
                // If sidebar is not collapsible, switch to overlay menu (On window resize)
                _this.rootElement.classList.remove(_this.menuClass);
                _this.rootElement.classList.add('vertical-overlay-menu');
                // Hide the sidebar
                _this._hideSidebar();
            }
            // Set the new active status
            _this._wasCollapsible = isCollapsible;
        });
    };
    /**
     * Setup the initial collapsed status
     *
     * @private
     */
    CoreSidebarComponent.prototype._defaultCollapsed = function () {
        // Return, if sidebar is not collapsed
        if (!this.collapsed) {
            return;
        }
        // Return if the sidebar is closed
        if (!this.isOpened) {
            return;
        }
        // Collapse the sidebar
        this.collapse();
    };
    /**
     * Show the overlay
     *
     * @private
     */
    CoreSidebarComponent.prototype._showOverlay = function () {
        var _this = this;
        // Create the overlay element
        this._overlay = this._renderer.createElement('div');
        // Add a class to the overlay element and make it visible
        this._overlay.classList.add(this.overlayClass);
        this._overlay.classList.add('show');
        // If overlayVisibility is false, set the bg transparent
        if (!this.overlayVisibility) {
            this._overlay.classList.add('bg-transparent');
        }
        // Append the overlay element to the parent element of the sidebar
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
        // Overlay enter animation and attach it to the animationPlayer
        this._animationPlayer = this._animationBuilder
            .build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 1 }))])
            .create(this._overlay);
        // Play the overlay animation
        this._animationPlayer.play();
        // Add an event listener to the overlay, on click of it close the sidebar
        this._overlay.addEventListener('click', function () {
            _this.close();
        });
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Hide the overlay
     *
     * @private
     */
    CoreSidebarComponent.prototype._hideOverlay = function () {
        var _this = this;
        // If overlay is already hidden, return
        if (!this._overlay) {
            return;
        }
        // Overlay leave animation and attach it to the animationPlayer
        this._animationPlayer = this._animationBuilder
            .build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0 }))])
            .create(this._overlay);
        // Play the overlay leave animation
        this._animationPlayer.play();
        // Once the animation is done...
        this._animationPlayer.onDone(function () {
            // If the overlay still exists...
            if (_this._overlay) {
                // Remove the overlay
                _this._overlay.parentNode.removeChild(_this._overlay);
                _this._overlay = null;
            }
        });
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Change sidebar properties to make it visible
     *
     * @private
     */
    CoreSidebarComponent.prototype._showSidebar = function () {
        // If menu as sidebar, add relevant classes to body to show menu
        if (this.name == 'menu') {
            // Open overlay menu
            this.rootElement.classList.add('menu-open');
            this.rootElement.classList.remove('menu-hide');
        }
        // For default sidebar add show class to make it visible
        else {
            this._renderer.addClass(this._elementRef.nativeElement, 'show');
            // Add .modal-open from body to remove browser scroll
            if (this.overlayClass === 'modal-backdrop') {
                this.rootElement.classList.add('modal-open');
            }
        }
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Change sidebar properties to make it invisible
     *
     * @private
     */
    CoreSidebarComponent.prototype._hideSidebar = function () {
        // If menu as sidebar, add relevant classes to body to show menu
        if (this.name == 'menu') {
            // Hide overlay menu
            this.rootElement.classList.remove('menu-open');
            this.rootElement.classList.add('menu-hide');
        }
        // For default sidebar remove show class to make it visible
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'show');
            // Remove .modal-open from body
            if (this.overlayClass === 'modal-backdrop') {
                this.rootElement.classList.remove('modal-open');
            }
        }
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    // For Collapsible Sidebar
    /**
     * Collapse the temporarily expanded sidebar
     */
    CoreSidebarComponent.prototype.collapseTemporarily = function () {
        // Only work if the sidebar is collapsed
        if (!this.collapsed) {
            return;
        }
        // Collapse the sidebar back
        this.expanded = false;
        this.collapsed = true; // Set the menu collapsed while collapsed temp.
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Expanded the sidebar temporarily
     */
    CoreSidebarComponent.prototype.expandTemporarily = function () {
        // Only work if the sidebar is collapsed
        if (!this.collapsed) {
            return;
        }
        // Expanded the sidebar temporarily
        this.expanded = true;
        this.collapsed = true; // Set the menu collapsed while collapsed temp.
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * On Sidebar's Mouseenter Event
     */
    CoreSidebarComponent.prototype.onMouseEnter = function () {
        // Expand the sidebar temporarily
        this.expandTemporarily();
    };
    /**
     * On Sidebar's Mouseleave Event
     */
    CoreSidebarComponent.prototype.onMouseLeave = function () {
        // Collapse the sidebar temporarily
        this.collapseTemporarily();
    };
    /**
     * Collapse the sidebar permanently
     */
    CoreSidebarComponent.prototype.collapse = function () {
        // If the sidebar is not collapsed
        if (this.collapsed) {
            return;
        }
        // Set collapse true
        this.collapsed = true;
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Expanded the sidebar permanently
     */
    CoreSidebarComponent.prototype.expand = function () {
        // If the sidebar is collapsed
        if (!this.collapsed) {
            return;
        }
        // Set collapse false (expanded)
        this.collapsed = false;
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggle the sidebar expand/collapse permanently
     */
    CoreSidebarComponent.prototype.toggleCollapsible = function () {
        if (this.collapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    // For Overlay Sidebar
    /**
     * Open the sidebar
     */
    CoreSidebarComponent.prototype.open = function () {
        // If sidebar already open or collapsible, then return
        if (this.isOpened || this.iscollapsibleSidebar) {
            return;
        }
        // Show the sidebar
        this._showSidebar();
        // Show the overlay
        this._showOverlay();
        // Set the sidebar opened status
        this.isOpened = true;
        // Emit the 'openedChangedEvent' event
        this.openedChangedEvent.emit(this.isOpened);
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Close the sidebar
     */
    CoreSidebarComponent.prototype.close = function () {
        // If sidebar is not open or collapsible, then return
        if (!this.isOpened || this.iscollapsibleSidebar) {
            return;
        }
        // Hide the overlay
        this._hideOverlay();
        // Set the opened status
        this.isOpened = false;
        // Emit the 'openedChangedEvent' event
        this.openedChangedEvent.emit(this.isOpened);
        // Hide overlay menu
        this._hideSidebar();
        // Change detector
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggle open/close the sidebar
     */
    CoreSidebarComponent.prototype.toggleOpen = function () {
        if (this.isOpened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    CoreSidebarComponent.ɵfac = function CoreSidebarComponent_Factory(t) { return new (t || CoreSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_1__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_6__.AnimationBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.MediaObserver)); };
    CoreSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CoreSidebarComponent, selectors: [["core-sidebar"]], hostVars: 2, hostBindings: function CoreSidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function CoreSidebarComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"])("mouseenter", function CoreSidebarComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function CoreSidebarComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("expanded", ctx.expanded);
        } }, inputs: { name: "name", overlayClass: "overlayClass", collapsibleSidebar: "collapsibleSidebar", overlayVisibility: "overlayVisibility", hideOnEsc: "hideOnEsc", collapsed: "collapsed" }, outputs: { collapsedChangedEvent: "collapsedChangedEvent", openedChangedEvent: "openedChangedEvent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CoreSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        } }, encapsulation: 2 });
    return CoreSidebarComponent;
}());



/***/ }),

/***/ 39698:
/*!******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarModule": function() { return /* binding */ CoreSidebarModule; }
/* harmony export */ });
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


var CoreSidebarModule = /** @class */ (function () {
    function CoreSidebarModule() {
    }
    CoreSidebarModule.ɵfac = function CoreSidebarModule_Factory(t) { return new (t || CoreSidebarModule)(); };
    CoreSidebarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreSidebarModule });
    CoreSidebarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
    return CoreSidebarModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreSidebarModule, { declarations: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.CoreSidebarComponent], exports: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.CoreSidebarComponent] }); })();


/***/ }),

/***/ 66841:
/*!*******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarService": function() { return /* binding */ CoreSidebarService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var CoreSidebarService = /** @class */ (function () {
    function CoreSidebarService() {
        // Private
        this._registry = {};
    }
    /**
     * Get the sidebar with the given key
     *
     * @param key
     * @returns {CoreSidebarComponent}
     */
    CoreSidebarService.prototype.getSidebarRegistry = function (key) {
        // Check if the sidebar registered
        if (!this._registry[key]) {
            console.warn("The sidebar with the key '" + key + "' doesn't exist in the registry.");
            return;
        }
        // Return the sidebar
        return this._registry[key];
    };
    /**
     * Set the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */
    CoreSidebarService.prototype.setSidebarRegistry = function (key, sidebar) {
        // Check if the key already being used
        if (this._registry[key]) {
            console.error("The sidebar with the key '" + key + "' already exists. Either unregister it first or use a unique key.");
            return;
        }
        // Set to the registry
        this._registry[key] = sidebar;
    };
    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */
    CoreSidebarService.prototype.removeSidebarRegistry = function (key) {
        // Check if the sidebar registered
        if (!this._registry[key]) {
            console.warn("The sidebar with the key '" + key + "' doesn't exist in the registry.");
        }
        // Unregister the sidebar
        delete this._registry[key];
    };
    CoreSidebarService.ɵfac = function CoreSidebarService_Factory(t) { return new (t || CoreSidebarService)(); };
    CoreSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreSidebarService, factory: CoreSidebarService.ɵfac, providedIn: 'root' });
    return CoreSidebarService;
}());



/***/ }),

/***/ 71805:
/*!*************************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinComponent": function() { return /* binding */ CoreTouchspinComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);






function CoreTouchspinComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
} }
function CoreTouchspinComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 9);
} }
function CoreTouchspinComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 10);
} }
function CoreTouchspinComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
} }
var _c0 = function (a0, a1) { return { "touchspin-sm": a0, "touchspin-lg": a1 }; };
var _c1 = function (a0, a1, a2, a3) { return { "btn-info": a0, "btn-warning": a1, "btn-success": a2, "btn-danger": a3 }; };
var CoreTouchspinComponent = /** @class */ (function () {
    function CoreTouchspinComponent() {
        this.numberValue = 0;
        this.iconChevron = false;
        this.disabledValue = false;
        this.size = '';
        this.color = '';
        this.maxValue = 9999;
        this.minValue = 0;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.disabledValueIncrement = false;
        this.disabledValueDecrement = false;
    }
    CoreTouchspinComponent.prototype.inputChange = function (inputValue) {
        if (inputValue == this.maxValue || inputValue > this.maxValue) {
            this.disabledValueIncrement = true;
        }
        else {
            this.disabledValueIncrement = false;
        }
        if (inputValue == this.minValue || inputValue < this.minValue) {
            this.disabledValueDecrement = true;
        }
        else {
            this.disabledValueDecrement = false;
        }
        this.emitChange(inputValue);
    };
    CoreTouchspinComponent.prototype.increment = function () {
        if (this.stepValue == undefined) {
            this.numberValue += 1;
        }
        else {
            this.numberValue += this.stepValue;
        }
        this.emitChange(this.numberValue);
        if (!(this.minValue == undefined || this.maxValue == undefined)) {
            if (this.numberValue == this.maxValue || this.numberValue > this.maxValue) {
                this.disabledValueIncrement = true;
            }
            else {
                this.disabledValueIncrement = false;
            }
            if (this.numberValue > this.minValue) {
                this.disabledValueDecrement = false;
            }
            else {
                this.disabledValueDecrement = true;
            }
        }
    };
    CoreTouchspinComponent.prototype.decrement = function () {
        if (this.stepValue == undefined) {
            this.numberValue -= 1;
        }
        else {
            this.numberValue -= this.stepValue;
        }
        this.emitChange(this.numberValue);
        if (!(this.minValue == undefined || this.maxValue == undefined)) {
            if (this.numberValue == this.minValue || this.numberValue < this.minValue) {
                this.disabledValueDecrement = true;
            }
            else {
                this.disabledValueDecrement = false;
            }
            if (this.numberValue < this.maxValue) {
                this.disabledValueIncrement = false;
            }
            else {
                this.disabledValueIncrement = true;
            }
        }
    };
    /**
     * Emit changed value
     * @param value
     */
    CoreTouchspinComponent.prototype.emitChange = function (value) {
        this.onChange.emit(value);
    };
    CoreTouchspinComponent.prototype.ngOnInit = function () {
        this.disabledValueIncrement = this.disabledValue;
        this.disabledValueDecrement = this.disabledValue;
        // Check if current value is equal to min / max value then disable button respectively
        if (this.numberValue === this.minValue) {
            this.disabledValueDecrement = true;
        }
        else if (this.numberValue === this.maxValue) {
            this.disabledValueIncrement = true;
        }
    };
    CoreTouchspinComponent.ɵfac = function CoreTouchspinComponent_Factory(t) { return new (t || CoreTouchspinComponent)(); };
    CoreTouchspinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CoreTouchspinComponent, selectors: [["core-touchspin"]], inputs: { numberValue: "numberValue", iconChevron: "iconChevron", disabledValue: ["disable", "disabledValue"], size: "size", color: "color", stepValue: "stepValue", maxValue: "maxValue", minValue: "minValue" }, outputs: { onChange: "onChange" }, decls: 8, vars: 28, consts: [[1, "btn-group", "touchspin-wrapper", 3, "ngClass"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-down", 3, "disabled", "ngClass", "click"], ["data-feather", "minus", 4, "ngIf"], ["data-feather", "chevron-down", 4, "ngIf"], ["type", "number", "pattern", "\\d*", "maxlength", "4", 1, "form-control", 3, "ngModel", "value", "disabled", "step", "min", "max", "ngModelChange", "input"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-up", 3, "disabled", "ngClass", "click"], ["data-feather", "plus", 4, "ngIf"], ["data-feather", "chevron-up", 4, "ngIf"], ["data-feather", "minus"], ["data-feather", "chevron-down"], ["data-feather", "plus"], ["data-feather", "chevron-up"]], template: function CoreTouchspinComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_1_listener() { return ctx.decrement(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CoreTouchspinComponent_span_2_Template, 1, 0, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CoreTouchspinComponent_span_3_Template, 1, 0, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoreTouchspinComponent_Template_input_ngModelChange_4_listener($event) { return ctx.numberValue = $event; })("input", function CoreTouchspinComponent_Template_input_input_4_listener($event) { return ctx.inputChange($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_5_listener() { return ctx.increment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CoreTouchspinComponent_span_6_Template, 1, 0, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CoreTouchspinComponent_span_7_Template, 1, 0, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.size == "sm", ctx.size == "lg"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabledValueDecrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](18, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.iconChevron);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.numberValue);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.numberValue)("disabled", ctx.disabledValue)("step", ctx.stepValue)("min", ctx.minValue)("max", ctx.maxValue);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabledValueIncrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](23, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.iconChevron);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FeatherIconDirective], styles: [".touchspin-wrapper {\n  width: 8.4rem;\n}\n.touchspin-wrapper .btn-touchspin {\n  z-index: 1;\n  padding: 0;\n  min-width: 20px;\n  height: 20px;\n  border-radius: 5px !important;\n  position: relative;\n  top: 4px;\n}\n.touchspin-wrapper .btn-touchspin span {\n  position: relative;\n  top: 1px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-down {\n  left: 10px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-up {\n  right: 10px;\n}\n.touchspin-wrapper .form-control {\n  padding: 5px;\n  height: auto;\n  border-radius: 5px !important;\n  border: 0 !important;\n  background-color: #f8f8f8;\n  text-align: center;\n  font-weight: 500;\n}\n.touchspin-wrapper .form-control:focus {\n  box-shadow: none;\n}\n.touchspin-wrapper.touchspin-lg {\n  width: 9.375rem;\n}\n.touchspin-wrapper.touchspin-lg .btn-touchspin {\n  min-width: 24px;\n  height: 24px;\n  top: 5px;\n}\n.touchspin-wrapper.touchspin-lg .form-control {\n  padding: 9px;\n  height: auto;\n}\n.touchspin-wrapper.touchspin-sm {\n  width: 6.25rem;\n}\n.touchspin-wrapper.touchspin-sm .btn-touchspin {\n  min-width: 16px;\n  height: 16px;\n  top: 4px;\n}\n.touchspin-wrapper.touchspin-sm .form-control {\n  padding: 2px;\n  height: auto;\n}\n.dark-layout .touchspin-wrapper .form-control {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtdG91Y2hzcGluLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi9zY3NzL2Jhc2UvY29tcG9uZW50cy9fdmFyaWFibGVzLWRhcmsuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRSxhQVowQjtBQUw1QjtBQW1CRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFiNEI7RUFjNUIsWUFiNkI7RUFjN0IsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFqQko7QUFtQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFqQk47QUFtQkk7RUFDRSxVQUFBO0FBakJOO0FBbUJJO0VBQ0UsV0FBQTtBQWpCTjtBQXFCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQ3NETTtFRHJETixrQkFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZ0JBQUE7QUFuQk47QUF1QkU7RUFDRSxlQWpEMkI7QUE0Qi9CO0FBdUJJO0VBQ0UsZUEvQzZCO0VBZ0Q3QixZQS9DOEI7RUFnRDlCLFFBQUE7QUFyQk47QUF3Qkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQXRCTjtBQTBCRTtFQUNFLGNBL0QyQjtBQXVDL0I7QUEwQkk7RUFDRSxlQTVENkI7RUE2RDdCLFlBNUQ4QjtFQTZEOUIsUUFBQTtBQXhCTjtBQTJCSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBekJOO0FBa0NJO0VBQ0UseUJFM0VlO0FGNENyQiIsImZpbGUiOiJjb3JlLXRvdWNoc3Bpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvYmFzZS9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcbkBpbXBvcnQgJy4uLy4uL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIHZhcmlhYmxlIGRlY2xhcmF0aW9uXG4kdG91Y2hzcGluLWJnLWNvbG9yOiAkYm9keS1iZztcbiR0b3VjaHNwaW4tZGFyay1iZy1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1iZztcblxuJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGg6IDguNHJlbTtcbiRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLWxnOiA5LjM3NXJlbTtcbiRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLXNtOiA2LjI1cmVtO1xuXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGg6IDIwcHg7XG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4taGVpZ2h0OiAyMHB4O1xuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLXdpZHRoLWxnOiAyNHB4O1xuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1sZzogMjRweDtcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aC1zbTogMTZweDtcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi1oZWlnaHQtc206IDE2cHg7XG5cbi50b3VjaHNwaW4td3JhcHBlciB7XG4gIHdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi13aWR0aDtcblxuICAuYnRuLXRvdWNoc3BpbiB7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLXdpZHRoO1xuICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMXB4O1xuICAgIH1cbiAgICAmLmJ0bi10b3VjaHNwaW4tZG93biB7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAmLmJ0bi10b3VjaHNwaW4tdXAge1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG91Y2hzcGluLWJnLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYudG91Y2hzcGluLWxnIHtcbiAgICB3aWR0aDogJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGgtbGc7XG5cbiAgICAuYnRuLXRvdWNoc3BpbiB7XG4gICAgICBtaW4td2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aC1sZztcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1sZztcbiAgICAgIHRvcDogNXB4O1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICYudG91Y2hzcGluLXNtIHtcbiAgICB3aWR0aDogJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGgtc207XG5cbiAgICAuYnRuLXRvdWNoc3BpbiB7XG4gICAgICBtaW4td2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aC1zbTtcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1zbTtcbiAgICAgIHRvcDogNHB4O1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyBkYXJrIGxheW91dCBzdHlsZVxuXG4uZGFyay1sYXlvdXQge1xuICAudG91Y2hzcGluLXdyYXBwZXIge1xuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvdWNoc3Bpbi1kYXJrLWJnLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBvdmVycmlkZXMgb2YgQm9vdHN0cmFwIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTUwOiAjZjZmNmY2ICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNiYWJmYzcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXN0XHJcbiRncmF5LTIwMDogI2VkZWRlZCAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlclxyXG4kZ3JheS0zMDA6ICNkYWUxZTcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0XHJcbiRncmF5LTQwMDogIzYzNjM2MyAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICNiOGMyY2MgIWRlZmF1bHQ7IC8vICRncmF5XHJcbiRncmF5LTcwMDogIzRlNTE1NCAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMWUxZTFlICFkZWZhdWx0OyAvLyAkZ3JheS1kYXJrXHJcbiRncmF5LTkwMDogIzJhMmUzMCAhZGVmYXVsdDtcclxuJGJsYWNrOiAjMjIyOTJmICFkZWZhdWx0OyAvLyAyMzFmNDggMjIyOTJmXHJcblxyXG4kcHVycGxlOiAjNzM2N2YwICFkZWZhdWx0OyAvLyRwcmltYXJ5XHJcbiRncmVlbjogIzI4Yzc2ZiAhZGVmYXVsdDsgLy8kc3VjY2Vzc1xyXG4kYmx1ZTogIzAwY2ZlOCAhZGVmYXVsdDsgLy8kaW5mb1xyXG4kb3JhbmdlOiAjZmY5ZjQzICFkZWZhdWx0OyAvLyR3YXJuaW5nXHJcbiRyZWQ6ICNlYTU0NTUgIWRlZmF1bHQ7IC8vJGRhbmdlclxyXG5cclxuJHByaW1hcnk6ICRwdXJwbGUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICM4Mjg2OGIgIWRlZmF1bHQ7XHJcbiRpbmZvOiAkYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XHJcbiRsaWdodDogJGdyYXktNTAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAjNGI0YjRiICFkZWZhdWx0O1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbi8vIHNjc3MtZG9jcy1zdGFydCBjb250YWluZXItbWF4LXdpZHRoc1xyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXHJcblxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIDI1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgICApLFxyXG4gICAgNTA6IChcclxuICAgICAgJHNwYWNlciAqIDAuNVxyXG4gICAgKSxcclxuICAgIDc1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjc1XHJcbiAgICApLFxyXG4gICAgMTogKFxyXG4gICAgICAkc3BhY2VyXHJcbiAgICApLFxyXG4gICAgMjogKFxyXG4gICAgICAkc3BhY2VyICogMS41XHJcbiAgICApLFxyXG4gICAgMzogKFxyXG4gICAgICAkc3BhY2VyICogM1xyXG4gICAgKSxcclxuICAgIDQ6IChcclxuICAgICAgJHNwYWNlciAqIDMuNVxyXG4gICAgKSxcclxuICAgIDU6IChcclxuICAgICAgJHNwYWNlciAqIDRcclxuICAgIClcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuJGJvZHktYmc6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS4yNSAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gc2hhZG93XHJcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcbi8vIFR5cG9ncmFwaHlcclxuXHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDAgIWRlZmF1bHQ7XHJcblxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcclxuXHJcbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xyXG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xyXG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjE0ICFkZWZhdWx0O1xyXG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XHJcbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyBUYWJsZXNcclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xyXG4kdGFibGUtaG92ZXItYmc6ICNmNmY2ZjkgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XHJcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjQ4NnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyIDBzICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybXNcclxuJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogI2Q4ZDZkZTtcclxuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6IDAuNDM4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1zbTogMC4xODhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtc206IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2VmZWZlZiAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogMi43MTRyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtc206IDIuMTQycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LWxnOiAzLjI4NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXItY29sb3IgMHMgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDNweCAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItbWludXMnJTNFJTNDbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHJnYmEoJHByaW1hcnksIDAuNjUpO1xyXG5cclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBub25lO1xyXG5cclxuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogMTBweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtZHJvcGRvd246IDEwICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjI4cmVtICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duX3NwYWNpbmc6IDAuNXJlbTsgLy8gY3VzdG9tXHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjg1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNTU3NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxcmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuNDQzcmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNzQ1cmVtICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1sZzogMS4xNHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQ2FyZHNcclxuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogMC40MjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4vL0FsZXJ0c1xyXG5cclxuJGFsZXJ0LXBhZGRpbmcteTogMC43MXJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtbGluay1mb250LXdlaWdodDogNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gTGlzdCBncm91cFxyXG5cclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXYgdGFic1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmcteTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwLjI1ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gbmF2YmFyXHJcblxyXG4kZmxvYXRpbmctbmF2LW1hcmdpbjogMS4zcmVtO1xyXG5cclxuLy8gVG9vbHRpcHNcclxuXHJcbiR0b29sdGlwLWJnOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy14OiAwLjc3NXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW1heC13aWR0aDogMjIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMS4yMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIFRvYXN0c1xyXG5cclxuJHRvYXN0LW1heC13aWR0aDogMzgwcHggIWRlZmF1bHQ7XHJcbiR0b2FzdC1wYWRkaW5nLXg6IDEuMTRyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMTVyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yODZyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xyXG5cclxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gUHJvZ3Jlc3NcclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogNXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMC44NTcgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC42cmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMCAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xyXG5cclxuLy8gQ2Fyb3VzZWxcclxuXHJcbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjE1IDE4IDkgMTIgMTUgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XHJcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XHJcblxyXG4vLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjhyZW0gMS40cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjRyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXhsOiA5NCUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogNDAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgICBTbGlkZSBJbiBNb2RhbFxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtc206IDI1cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoOiAyOHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1sZzogMzByZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQ2xvc2VcclxuXHJcbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRjbG9zZS1mb250LXdlaWdodDogNDAwICFkZWZhdWx0O1xyXG4kY2xvc2UtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG4ka2JkLWJnOiAjZWVlICFkZWZhdWx0O1xyXG5cclxuLy8gU3dpdGNoXHJcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAzcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vL3N2ZyBjb2xvclxyXG4kc3ZnLWNvbG9yLWxpZ2h0OiAjNjI2MjYyICFkZWZhdWx0O1xyXG5cclxuLy8gU1ZHIGljb25zXHJcbi8vIEZvciBCcmVhZGNydW1iXHJcbiRkb3VibGUtY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbnMtcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxMyAxNyAxOCAxMiAxMyA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiAxNyAxMSAxMiA2IDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4vLyBDaGV2cm9uIEljb25zXHJcbiRjaGV2cm9uLWxlZnQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi11cDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE4IDE1IDEyIDkgNiAxNSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLWRvd246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuXHJcbiRkb3dubG9hZDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItZG93bmxvYWQnJTNFJTNDcGF0aCBkPSdNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCclM0UlM0MvcGF0aCUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNyAxMCAxMiAxNSAxNyAxMCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE1JyB4Mj0nMTInIHkyPSczJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kcmVtb3ZlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci14JyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZWNrOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2lyY2xlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNpcmNsZSclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRpbmZvSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kd2FybmluZ0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItYWxlcnQtdHJpYW5nbGUnJTNFJTNDcGF0aCBkPSdNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6JyUzRSUzQy9wYXRoJTNFJTNDbGluZSB4MT0nMTInIHkxPSc5JyB4Mj0nMTInIHkyPScxMyclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTcnIHgyPScxMi4wMScgeTI9JzE3JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kbWVudTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2Nzcy1pNmR6cTEnJTNFJTNDbGluZSB4MT0nMycgeTE9JzEyJyB4Mj0nMjEnIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPSc2JyB4Mj0nMjEnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzE4JyB4Mj0nMjEnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuXHJcbiRjaGF0LWJnLWxpZ2h0OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl6TGpBdU1Td2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3NkkwVXhSVEJGT1R0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xyXG4kY2hhdC1iZy1kYXJrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3Nkl6RTNNVUV5TkR0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xyXG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy1kYXJrLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gZGFyayB0aGVtZSB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cclxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxyXG4vLyAgVElQOlxyXG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy9Cb2R5XHJcbiR0aGVtZS1kYXJrLWJvZHktYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjogIzNiNDI1MyAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjNDQ0MDVlICFkZWZhdWx0O1xyXG5cclxuLy9UeXBvZ3JhcGh5XHJcbiR0aGVtZS1kYXJrLWhlYWRpbmdzLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGV4dC1tdXRlZC1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuXHJcbi8vQ2FyZFxyXG4kdGhlbWUtZGFyay1jYXJkLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjQpO1xyXG5cclxuLy9JbnB1dFxyXG4kdGhlbWUtZGFyay1pbnB1dC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJvcmRlci1jb2xvcjogIzQwNDY1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYmc6ICMyNDIzM2EgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZy1kaXNhYmxlZDogIzFiMjMzNztcclxuXHJcbi8vVGFibGVcclxuJHRoZW1lLWRhcmstdGFibGUtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZzogIzM0M2Q1NSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1ob3Zlci1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtc3RyaXBlZC1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1kYXJrLW1vZGFsLWhlYWRlci1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXdpZGdldC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuIl19 */"], encapsulation: 2 });
    return CoreTouchspinComponent;
}());



/***/ }),

/***/ 83742:
/*!**********************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinModule": function() { return /* binding */ CoreTouchspinModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.component */ 71805);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





var CoreTouchspinModule = /** @class */ (function () {
    function CoreTouchspinModule() {
    }
    CoreTouchspinModule.ɵfac = function CoreTouchspinModule_Factory(t) { return new (t || CoreTouchspinModule)(); };
    CoreTouchspinModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreTouchspinModule });
    CoreTouchspinModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule]] });
    return CoreTouchspinModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreTouchspinModule, { declarations: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_0__.CoreTouchspinComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule], exports: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_0__.CoreTouchspinComponent] }); })();


/***/ }),

/***/ 69065:
/*!***************************************!*\
  !*** ./src/@core/components/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* reexport safe */ _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule; },
/* harmony export */   "CoreSidebarModule": function() { return /* reexport safe */ _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule; },
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* reexport safe */ _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-menu/core-menu.module */ 64017);
/* harmony import */ var _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-sidebar/core-sidebar.module */ 39698);
/* harmony import */ var _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-customizer/theme-customizer.module */ 43332);
// common components





/***/ }),

/***/ 68347:
/*!*****************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerComponent": function() { return /* binding */ CoreThemeCustomizerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);











function CoreThemeCustomizerComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Semi Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreThemeCustomizerComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Menu Collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { selected: a0 }; };
function CoreThemeCustomizerComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Navbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.navbarColor(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.navbarColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.navbarColor("bg-secondary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.navbarColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.navbarColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.navbarColor("bg-info"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.navbarColor("bg-warning"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.navbarColor("bg-dark"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx_r2.navbarColorValue === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx_r2.navbarColorValue === "bg-primary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx_r2.navbarColorValue === "bg-secondary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx_r2.navbarColorValue === "bg-success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx_r2.navbarColorValue === "bg-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx_r2.navbarColorValue === "bg-info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, ctx_r2.navbarColorValue === "bg-warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c0, ctx_r2.navbarColorValue === "bg-dark"));
} }
function CoreThemeCustomizerComponent_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Navbar Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreThemeCustomizerComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CoreThemeCustomizerComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var CoreThemeCustomizerComponent = /** @class */ (function () {
    /**
     * Constructor
  
     * @param {FormBuilder} _formBuilder
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreSidebarService} _coreSidebarService
     * */
    function CoreThemeCustomizerComponent(_formBuilder, _coreConfigService, _coreSidebarService) {
        this._formBuilder = _formBuilder;
        this._coreConfigService = _coreConfigService;
        this._coreSidebarService = _coreSidebarService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    //  Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    CoreThemeCustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Build theme config form
        this.form = this._formBuilder.group({
            app: this._formBuilder.group({
                appName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                appTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                appLogoImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                appLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
            }),
            layout: this._formBuilder.group({
                skin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                animation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                menu: this._formBuilder.group({
                    hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    collapsed: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
                }),
                navbar: this._formBuilder.group({
                    hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    background: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
                }),
                footer: this._formBuilder.group({
                    hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    background: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                    backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
                }),
                enableLocalStorage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                customizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                scrollTop: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
                buyNow: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
            })
        });
        // Subscribe to the config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            // Update config
            _this.coreConfig = config;
            // Set the config form values
            _this.form.setValue(config, { emitEvent: false });
        });
        // Subscribe to the form layout.type value changes
        this.form
            .get('layout.type')
            .valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(function (value) {
            _this._resetFormValues(value);
        });
        // Subscribe to the form value changes
        this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this._coreConfigService.config = config;
        });
        // Set navbar color
        this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    };
    /**
     * On destroy
     */
    CoreThemeCustomizerComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    //  Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Reset form values based on the selected menu layout
     *
     * @param value
     * @private
     */
    CoreThemeCustomizerComponent.prototype._resetFormValues = function (value) {
        switch (value) {
            case 'vertical': {
                this.form.patchValue({
                    layout: {
                        // skin: 'default',
                        animation: 'fadeIn',
                        menu: {
                            hidden: false,
                            collapsed: false
                        },
                        navbar: {
                            hidden: false,
                            type: 'floating-nav',
                            background: 'navbar-light',
                            customBackgroundColor: true,
                            backgroundColor: ''
                        },
                        footer: {
                            hidden: false,
                            type: 'footer-static',
                            background: 'footer-light',
                            customBackgroundColor: false,
                            backgroundColor: 'bg-primary'
                        }
                    }
                });
            }
            case 'horizontal': {
                this.form.patchValue({
                    layout: {
                        // skin: 'default',
                        animation: 'fadeIn',
                        menu: {
                            hidden: false,
                            collapsed: false
                        },
                        navbar: {
                            hidden: false,
                            type: 'floating-nav',
                            background: 'navbar-light',
                            customBackgroundColor: true,
                            backgroundColor: ''
                        },
                        footer: {
                            hidden: false,
                            type: 'footer-static',
                            background: 'footer-light',
                            customBackgroundColor: false,
                            backgroundColor: 'bg-primary'
                        }
                    }
                });
            }
        }
        // Set navbar color
        this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    };
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Patch selected navbar color value to form
     *
     * @param value
     */
    CoreThemeCustomizerComponent.prototype.navbarColor = function (value) {
        this.navbarColorValue = value;
        this.form.patchValue({
            layout: { navbar: { customBackgroundColor: true, backgroundColor: this.navbarColorValue } }
        });
    };
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    CoreThemeCustomizerComponent.prototype.toggleSidebar = function (key) {
        this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    };
    CoreThemeCustomizerComponent.ɵfac = function CoreThemeCustomizerComponent_Factory(t) { return new (t || CoreThemeCustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarService)); };
    CoreThemeCustomizerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CoreThemeCustomizerComponent, selectors: [["core-theme-customizer"]], decls: 101, vars: 8, consts: [[1, "customizer-content", 3, "perfectScrollbar"], [1, "customizer-header", "px-2", "pt-1", "pb-0", "position-relative"], [1, "mb-0"], [1, "m-0"], [1, "customizer-close", 3, "click"], [3, "data-feather"], [3, "formGroup"], ["formGroupName", "layout"], ["id", "customizer-styling", 1, "px-2"], ["id", "customizer-styling-skin"], [1, "font-weight-bold"], [1, "d-flex"], [1, "custom-control", "custom-radio", "mr-1"], ["type", "radio", "id", "skinlight", "formControlName", "skin", "value", "default", 1, "custom-control-input", "layout-name"], ["for", "skinlight", 1, "custom-control-label"], ["type", "radio", "id", "skinbordered", "formControlName", "skin", "value", "bordered", 1, "custom-control-input", "layout-name"], ["for", "skinbordered", 1, "custom-control-label"], ["type", "radio", "id", "skindark", "formControlName", "skin", "value", "dark", 1, "custom-control-input", "layout-name"], ["for", "skindark", 1, "custom-control-label"], ["class", "custom-control custom-radio", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], ["for", "routeSelect", 1, "font-weight-bold", "mr-auto", "m-0"], ["formControlName", "animation", "id", "routeSelect", 1, "form-control", "w-50"], ["value", "fadeInLeft"], ["value", "zoomIn"], ["value", "fadeIn"], ["value", "none"], [1, "customizer-menu", "px-2"], ["id", "customizer-menu-type"], ["type", "radio", "id", "menu-type-vertical", "value", "vertical", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-vertical", 1, "custom-control-label"], ["type", "radio", "id", "menu-type-horizontal", "value", "horizontal", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-horizontal", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "class", "d-flex mt-2", "formGroupName", "menu", 4, "ngIf"], ["id", "customizer-menu-hidden", "formGroupName", "menu", 1, "d-flex", "mt-2"], [1, "font-weight-bold", "mr-auto", "m-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["type", "checkbox", "id", "collapse-sidebar-hidden", "formControlName", "hidden", 1, "custom-control-input"], ["for", "collapse-sidebar-hidden", 1, "custom-control-label"], ["id", "customizer-navbar", "formGroupName", "navbar", 1, "px-2"], ["id", "customizer-navbar-colors", 4, "ngIf"], ["id", "customizer-navbar-type"], ["class", "navbar-type-text font-weight-bold", 4, "ngIf", "ngIfElse"], ["navbarTypeHorizontal", ""], ["type", "radio", "id", "nav-type-floating", "value", "floating-nav", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-floating", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-sticky", "value", "fixed-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-static", "value", "navbar-static-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-static", 1, "custom-control-label"], ["id", "customizer-footer", "formGroupName", "footer", 1, "px-2", "mb-2"], ["id", "customizer-footer-type"], ["type", "radio", "id", "footer-type-sticky", "value", "footer-sticky", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-static", "value", "footer-static", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-static", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-hidden", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "skinsemidark", "formControlName", "skin", "value", "semi-dark", 1, "custom-control-input", "layout-name"], ["for", "skinsemidark", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "formGroupName", "menu", 1, "d-flex", "mt-2"], ["type", "checkbox", "id", "collapse-sidebar-switch", "formControlName", "collapsed", 1, "custom-control-input"], ["for", "collapse-sidebar-switch", 1, "custom-control-label"], ["id", "customizer-navbar-colors"], [1, "list-inline", "unstyled-list"], [1, "color-box", "bg-white", "border", 3, "ngClass", "click"], [1, "color-box", "bg-primary", 3, "ngClass", "click"], [1, "color-box", "bg-secondary", 3, "ngClass", "click"], [1, "color-box", "bg-success", 3, "ngClass", "click"], [1, "color-box", "bg-danger", 3, "ngClass", "click"], [1, "color-box", "bg-info", 3, "ngClass", "click"], [1, "color-box", "bg-warning", 3, "ngClass", "click"], [1, "color-box", "bg-dark", 3, "ngClass", "click"], [1, "navbar-type-text", "font-weight-bold"], ["type", "radio", "id", "nav-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-hidden", 1, "custom-control-label"]], template: function CoreThemeCustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Theme Customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Customize & Preview in Real Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_Template_a_click_6_listener() { return ctx.toggleSidebar("themeCustomizer"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Skin");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Bordered");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CoreThemeCustomizerComponent_div_28_Template, 4, 0, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Route Transition");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "select", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Fade In Left");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Zoom In");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Fade In");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "None");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Menu Layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CoreThemeCustomizerComponent_div_55_Template, 6, 0, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Menu Hidden");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, CoreThemeCustomizerComponent_div_64_Template, 12, 24, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, CoreThemeCustomizerComponent_p_66_Template, 2, 0, "p", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, CoreThemeCustomizerComponent_ng_template_67_Template, 2, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Floating");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Sticky");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, CoreThemeCustomizerComponent_div_82_Template, 4, 0, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Footer Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "input", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "label", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Sticky");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "label", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Hidden");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical")("ngIfElse", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective], styles: [".customizer.show {\n  box-shadow: 0 15px 30px 0 rgba(34, 41, 47, 0.11), 0 5px 15px 0 rgba(34, 41, 47, 0.08);\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLWN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJ0aGVtZS1jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZXIuc2hvdyB7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMzQsIDQxLCA0NywgMC4wOCk7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */"], encapsulation: 2 });
    return CoreThemeCustomizerComponent;
}());



/***/ }),

/***/ 43332:
/*!**************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* binding */ CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/directives */ 35455);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.module */ 39698);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 68347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
var CoreThemeCustomizerModule = /** @class */ (function () {
    function CoreThemeCustomizerModule() {
    }
    CoreThemeCustomizerModule.ɵfac = function CoreThemeCustomizerModule_Factory(t) { return new (t || CoreThemeCustomizerModule)(); };
    CoreThemeCustomizerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreThemeCustomizerModule });
    CoreThemeCustomizerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarModule,
                _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__.CoreDirectivesModule,
                _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule
            ]] });
    return CoreThemeCustomizerModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreThemeCustomizerModule, { declarations: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarModule,
        _core_directives_directives__WEBPACK_IMPORTED_MODULE_0__.CoreDirectivesModule,
        _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule], exports: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerComponent] }); })();


/***/ }),

/***/ 70460:
/*!**********************************!*\
  !*** ./src/@core/core.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('Import CoreModule in the AppModule only');
        }
    }
    CoreModule.forRoot = function (config) {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CORE_CUSTOM_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12)); };
    CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
    CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
    return CoreModule;
}());



/***/ }),

/***/ 66279:
/*!***********************************************************************!*\
  !*** ./src/@core/directives/core-feather-icons/core-feather-icons.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconDirective": function() { return /* binding */ FeatherIconDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feather-icons */ 66379);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);



var FeatherIconDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     */
    function FeatherIconDirective(_elementRef, _changeDetector) {
        this._elementRef = _elementRef;
        this._changeDetector = _changeDetector;
    }
    FeatherIconDirective.prototype.ngOnChanges = function (changes) {
        // Get the native element
        this._nativeElement = this._elementRef.nativeElement;
        // SVG parameter
        this.name = changes.name ? changes.name.currentValue : '';
        this.size = changes.size ? changes.size.currentValue : '14'; // Set default size 14
        this.class = changes.class ? changes.class.currentValue : '';
        // Create SVG
        var svg = feather_icons__WEBPACK_IMPORTED_MODULE_0__.icons[this.name].toSvg({
            class: this.class,
            width: this.size,
            height: this.size
        });
        // Set SVG
        if (this.inner) {
            this._nativeElement.innerHTML = svg;
        }
        else {
            this._nativeElement.outerHTML = svg;
        }
        this._changeDetector.markForCheck();
    };
    FeatherIconDirective.ɵfac = function FeatherIconDirective_Factory(t) { return new (t || FeatherIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
    FeatherIconDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FeatherIconDirective, selectors: [["", "data-feather", ""]], inputs: { name: ["data-feather", "name"], class: "class", size: "size", inner: "inner" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
    return FeatherIconDirective;
}());



/***/ }),

/***/ 75287:
/*!*********************************************************************************!*\
  !*** ./src/@core/directives/core-ripple-effect/core-ripple-effect.directive.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RippleEffectDirective": function() { return /* binding */ RippleEffectDirective; }
/* harmony export */ });
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-waves */ 85129);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


var RippleEffectDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     */
    function RippleEffectDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    RippleEffectDirective.prototype.ngOnInit = function () {
        // Get the native element
        this._nativeElement = this._elementRef.nativeElement;
        if (
        // Attach ripple with light style i.e solid variant of button
        !this._nativeElement.className.split(' ').some(function (c) {
            return /btn-outline-.*/.test(c);
        }) &&
            !this._nativeElement.className.split(' ').some(function (c) {
                return /btn-flat-.*/.test(c);
            })) {
            node_waves__WEBPACK_IMPORTED_MODULE_0__.attach(this._nativeElement, ['waves-float', 'waves-light']);
        }
        else {
            // Attach ripple with transparent style i.e flat, outline variant of button
            node_waves__WEBPACK_IMPORTED_MODULE_0__.attach(this._nativeElement);
        }
    };
    RippleEffectDirective.ɵfac = function RippleEffectDirective_Factory(t) { return new (t || RippleEffectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
    RippleEffectDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RippleEffectDirective, selectors: [["", "rippleEffect", ""]], inputs: { wave: "wave" } });
    return RippleEffectDirective;
}());



/***/ }),

/***/ 35455:
/*!********************************************!*\
  !*** ./src/@core/directives/directives.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreDirectivesModule": function() { return /* binding */ CoreDirectivesModule; }
/* harmony export */ });
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



var CoreDirectivesModule = /** @class */ (function () {
    function CoreDirectivesModule() {
    }
    CoreDirectivesModule.ɵfac = function CoreDirectivesModule_Factory(t) { return new (t || CoreDirectivesModule)(); };
    CoreDirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreDirectivesModule });
    CoreDirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
    return CoreDirectivesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreDirectivesModule, { declarations: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FeatherIconDirective], exports: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FeatherIconDirective] }); })();


/***/ }),

/***/ 69671:
/*!****************************************!*\
  !*** ./src/@core/pipes/filter.pipe.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @param {string} key
     *
     * @returns {any}
     */
    FilterPipe.prototype.transform = function (items, searchText, key) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it[key].toLowerCase().includes(searchText);
        });
    };
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
    return FilterPipe;
}());



/***/ }),

/***/ 16516:
/*!******************************************!*\
  !*** ./src/@core/pipes/initials.pipe.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialsPipe": function() { return /* binding */ InitialsPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var InitialsPipe = /** @class */ (function () {
    function InitialsPipe() {
    }
    InitialsPipe.prototype.transform = function (fullName) {
        return fullName === null || fullName === void 0 ? void 0 : fullName.split(' ').map(function (n) { return n[0]; }).join('');
    };
    InitialsPipe.ɵfac = function InitialsPipe_Factory(t) { return new (t || InitialsPipe)(); };
    InitialsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "initials", type: InitialsPipe, pure: true });
    return InitialsPipe;
}());



/***/ }),

/***/ 30021:
/*!*****************************************!*\
  !*** ./src/@core/pipes/pipes.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorePipesModule": function() { return /* binding */ CorePipesModule; }
/* harmony export */ });
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 69671);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 16516);
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/safe.pipe */ 16821);
/* harmony import */ var _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/pipes/stripHtml.pipe */ 93798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





var CorePipesModule = /** @class */ (function () {
    function CorePipesModule() {
    }
    CorePipesModule.ɵfac = function CorePipesModule_Factory(t) { return new (t || CorePipesModule)(); };
    CorePipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CorePipesModule });
    CorePipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[]] });
    return CorePipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CorePipesModule, { declarations: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_1__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_3__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe], exports: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_1__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_3__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe] }); })();


/***/ }),

/***/ 16821:
/*!**************************************!*\
  !*** ./src/@core/pipes/safe.pipe.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": function() { return /* binding */ SafePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 39075);


/**
 * Sanitize HTML
 */
var SafePipe = /** @class */ (function () {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    };
    SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
    SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
    return SafePipe;
}());



/***/ }),

/***/ 93798:
/*!*******************************************!*\
  !*** ./src/@core/pipes/stripHtml.pipe.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripHtmlPipe": function() { return /* binding */ StripHtmlPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var StripHtmlPipe = /** @class */ (function () {
    function StripHtmlPipe() {
    }
    StripHtmlPipe.prototype.transform = function (value) {
        return value.replace(/<.*?>/g, ''); // replace tags
    };
    StripHtmlPipe.ɵfac = function StripHtmlPipe_Factory(t) { return new (t || StripHtmlPipe)(); };
    StripHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "striphtml", type: StripHtmlPipe, pure: true });
    return StripHtmlPipe;
}());



/***/ }),

/***/ 52553:
/*!**********************************************!*\
  !*** ./src/@core/services/config.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_CUSTOM_CONFIG": function() { return /* binding */ CORE_CUSTOM_CONFIG; },
/* harmony export */   "CoreConfigService": function() { return /* binding */ CoreConfigService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);







// Injection token for the core custom settings
var CORE_CUSTOM_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('coreCustomConfig');
var CoreConfigService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param _config
     * @param {Router} _router
     */
    function CoreConfigService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Get the config from local storage
        if (_config.layout.enableLocalStorage) {
            this.localConfig = JSON.parse(localStorage.getItem('config'));
        }
        else {
            localStorage.removeItem('config');
        }
        // Set the defaultConfig to localConfig if we have else appConfig (app-config.ts)
        this._defaultConfig = this.localConfig ? this.localConfig : _config;
        // Initialize the config service
        this._initConfig();
    }
    Object.defineProperty(CoreConfigService.prototype, "config", {
        // Get the config
        get: function () {
            return this._configSubject.asObservable();
        },
        //  Accessors
        // -----------------------------------------------------------------------------------------------------
        // Set the config
        set: function (data) {
            var config;
            // Set config = localConfig, If we have else defaultConfig
            if (this.localConfig) {
                config = this.localConfig;
            }
            else {
                config = this._configSubject.getValue();
            }
            // Merge provided data with config, and create new merged config
            config = lodash__WEBPACK_IMPORTED_MODULE_0__.merge({}, config, data);
            // Set config to local storage if enableLocalStorage parameter is true
            if (config.layout.enableLocalStorage) {
                localStorage.setItem('config', JSON.stringify(config));
            }
            // Inform the observers
            this._configSubject.next(config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreConfigService.prototype, "defaultConfig", {
        /**
         * Get default config
         *
         * @returns {any}
         */
        get: function () {
            return this._defaultConfig;
        },
        enumerable: false,
        configurable: true
    });
    // Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    CoreConfigService.prototype._initConfig = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._defaultConfig));
        // On every RoutesRecognized event
        // Check if localDefault (localStorage if we have else defaultConfig) is different form the default one
        this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.ResolveEnd; })).subscribe(function () {
            // Get the local config from local storage
            _this.localConfig = JSON.parse(localStorage.getItem('config'));
            // Set localDefault to localConfig if we have else defaultConfig
            var localDefault = _this.localConfig ? _this.localConfig : _this._defaultConfig;
            // If localDefault is different form the provided config (page config)
            if (!lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual(_this._configSubject.getValue().layout, localDefault.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(_this._configSubject.getValue());
                // Reset the layout from the default config
                config.layout = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(localDefault.layout);
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Set config
     *
     * @param data
     * @param {{emitEvent: boolean}} param
     */
    CoreConfigService.prototype.setConfig = function (data, param) {
        if (param === void 0) { param = { emitEvent: true }; }
        var config;
        // Set config = localConfig, If we have else defaultConfig
        this.localConfig = JSON.parse(localStorage.getItem('config'));
        if (this.localConfig) {
            config = this.localConfig;
        }
        else {
            config = this._configSubject.getValue();
        }
        // Merge provided value with config, and create new merged config
        config = lodash__WEBPACK_IMPORTED_MODULE_0__.merge({}, config, data);
        // Set config to local storage if enableLocalStorage parameter is true
        if (config.layout.enableLocalStorage) {
            localStorage.setItem('config', JSON.stringify(config));
        }
        // If emitEvent option is true...
        if (param.emitEvent === true) {
            // Inform the observers
            this._configSubject.next(config);
        }
    };
    /**
     * Get config
     *
     * @returns {Observable<any>}
     */
    CoreConfigService.prototype.getConfig = function () {
        return this._configSubject.asObservable();
    };
    /**
     * Reset to the default config
     */
    CoreConfigService.prototype.resetConfig = function () {
        this._configSubject.next(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._defaultConfig));
    };
    CoreConfigService.ɵfac = function CoreConfigService_Factory(t) { return new (t || CoreConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CORE_CUSTOM_CONFIG)); };
    CoreConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoreConfigService, factory: CoreConfigService.ɵfac, providedIn: 'root' });
    return CoreConfigService;
}());



/***/ }),

/***/ 35428:
/*!******************************************************!*\
  !*** ./src/@core/services/loading-screen.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreLoadingScreenService": function() { return /* binding */ CoreLoadingScreenService; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







var CoreLoadingScreenService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param _document
     * @param {Router} _router
     * @param {AnimationBuilder} _animationBuilder
     */
    function CoreLoadingScreenService(_document, _router, _animationBuilder) {
        this._document = _document;
        this._router = _router;
        this._animationBuilder = _animationBuilder;
        // Initialize
        this._init();
    }
    // Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    CoreLoadingScreenService.prototype._init = function () {
        var _this = this;
        // Get the loading screen element
        this.loadingScreenEl = this._document.body.querySelector('#loading-bg');
        // If loading screen element
        if (this.loadingScreenEl) {
            // Hide it on the first NavigationEnd event
            this._router.events
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
                .subscribe(function () {
                setTimeout(function () {
                    _this.hide();
                });
            });
        }
    };
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Show the loading screen
     */
    CoreLoadingScreenService.prototype.show = function () {
        var _this = this;
        this.animationPlayer = this._animationBuilder
            .build([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                opacity: '0',
                zIndex: '99999'
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: '1' }))
        ])
            .create(this.loadingScreenEl);
        setTimeout(function () {
            _this.animationPlayer.play();
        }, 0);
    };
    /**
     * Hide the loading screen
     */
    CoreLoadingScreenService.prototype.hide = function () {
        var _this = this;
        this.animationPlayer = this._animationBuilder
            .build([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: '1' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                opacity: '0',
                zIndex: '-10'
            }))
        ])
            .create(this.loadingScreenEl);
        setTimeout(function () {
            _this.loadingScreenEl.remove();
            _this.animationPlayer.play();
        }, 0);
    };
    CoreLoadingScreenService.ɵfac = function CoreLoadingScreenService_Factory(t) { return new (t || CoreLoadingScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder)); };
    CoreLoadingScreenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CoreLoadingScreenService, factory: CoreLoadingScreenService.ɵfac, providedIn: 'root' });
    return CoreLoadingScreenService;
}());



/***/ }),

/***/ 42826:
/*!*********************************************!*\
  !*** ./src/@core/services/media.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMediaService": function() { return /* binding */ CoreMediaService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 7736);




var CoreMediaService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MediaObserver} _mediaObserver
     */
    function CoreMediaService(_mediaObserver) {
        this._mediaObserver = _mediaObserver;
        this.onMediaUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        // Set the defaults
        this.currentMediaQuery = '';
        // Initialize
        this._init();
    }
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    CoreMediaService.prototype._init = function () {
        var _this = this;
        this._mediaObserver.media$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)()).subscribe(function (change) {
            // console.log('subscription: ', change);
            if (_this.currentMediaQuery !== change.mqAlias) {
                _this.currentMediaQuery = change.mqAlias;
                _this.onMediaUpdate.next(change.mqAlias);
            }
        });
    };
    CoreMediaService.ɵfac = function CoreMediaService_Factory(t) { return new (t || CoreMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.MediaObserver)); };
    CoreMediaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CoreMediaService, factory: CoreMediaService.ɵfac, providedIn: 'root' });
    return CoreMediaService;
}());



/***/ }),

/***/ 63305:
/*!***************************************************!*\
  !*** ./src/@core/services/translation.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTranslationService": function() { return /* binding */ CoreTranslationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);



var CoreTranslationService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    function CoreTranslationService(_translateService) {
        this._translateService = _translateService;
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Translate
     *
     * @param {Locale} args
     */
    CoreTranslationService.prototype.translate = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], args);
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument value as true to append translations instead of replacing them
            _this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    };
    CoreTranslationService.ɵfac = function CoreTranslationService_Factory(t) { return new (t || CoreTranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
    CoreTranslationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoreTranslationService, factory: CoreTranslationService.ɵfac, providedIn: 'root' });
    return CoreTranslationService;
}());



/***/ }),

/***/ 45529:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coreConfig": function() { return /* binding */ coreConfig; }
/* harmony export */ });
/**
 * Default App Config
 *
 * ? TIP:
 *
 * Change app config based on your preferences.
 * You can also change them on each component basis. i.e `app/main/pages/authentication/auth-login-v1/auth-login-v1.component.ts`
 *
 * ! IMPORTANT: If the enableLocalStorage option is true then make sure you clear the browser local storage(https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete).
 *  ! Otherwise, it will not take the below config changes and use stored config from local storage.
 *
 */
// prettier-ignore
var coreConfig = {
    app: {
        appName: 'Vuexy',
        appTitle: 'Vuexy - Angular 12+ Bootstrap Admin Template',
        appLogoImage: 'assets/images/logo/logo.svg',
        appLanguage: 'en', // App Default Language (en, fr, de, pt etc..)
    },
    layout: {
        skin: 'default',
        type: 'vertical',
        animation: 'fadeIn',
        menu: {
            hidden: false,
            collapsed: false, // Boolean: true, false
        },
        // ? For horizontal menu, navbar type will work for navMenu type
        navbar: {
            hidden: false,
            type: 'floating-nav',
            background: 'navbar-light',
            customBackgroundColor: true,
            backgroundColor: '' // BS color i.e bg-primary, bg-success
        },
        footer: {
            hidden: false,
            type: 'footer-static',
            background: 'footer-light',
            customBackgroundColor: false,
            backgroundColor: '' // BS color i.e bg-primary, bg-success
        },
        enableLocalStorage: true,
        customizer: false,
        scrollTop: false,
        buyNow: false // Boolean: true, false (Set false in real project, For demo purpose only)
    }
};


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-waves */ 85129);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/menu/menu */ 70318);
/* harmony import */ var app_menu_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/menu/i18n/en */ 43831);
/* harmony import */ var app_menu_i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/menu/i18n/fr */ 813);
/* harmony import */ var app_menu_i18n_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/menu/i18n/de */ 15132);
/* harmony import */ var app_menu_i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/menu/i18n/pt */ 59595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/loading-screen.service */ 35428);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/translation.service */ 63305);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 80836);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 38094);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 68347);























function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "vertical-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "horizontal-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} }
function AppComponent_core_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "core-sidebar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_core_sidebar_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r3.toggleSidebar("themeCustomizer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "core-theme-customizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("invisibleOverlay", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"]("spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data-feather", "settings");
} }
var AppComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {Title} _title
     * @param {Renderer2} _renderer
     * @param {ElementRef} _elementRef
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {CoreLoadingScreenService} _coreLoadingScreenService
     * @param {CoreMenuService} _coreMenuService
     * @param {CoreTranslationService} _coreTranslationService
     * @param {TranslateService} _translateService
     */
    function AppComponent(document, _title, _renderer, _elementRef, _coreConfigService, _coreSidebarService, _coreLoadingScreenService, _coreMenuService, _coreTranslationService, _translateService) {
        this.document = document;
        this._title = _title;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._coreConfigService = _coreConfigService;
        this._coreSidebarService = _coreSidebarService;
        this._coreLoadingScreenService = _coreLoadingScreenService;
        this._coreMenuService = _coreMenuService;
        this._coreTranslationService = _coreTranslationService;
        this._translateService = _translateService;
        // Get the application main menu
        this.menu = app_menu_menu__WEBPACK_IMPORTED_MODULE_1__.menu;
        // Register the menu to the menu service
        this._coreMenuService.register('main', this.menu);
        // Set the main menu as our current menu
        this._coreMenuService.setCurrentMenu('main');
        // Add languages to the translation service
        this._translateService.addLangs(['en', 'fr', 'de', 'pt']);
        // This language will be used as a fallback when a translation isn't found in the current language
        this._translateService.setDefaultLang('en');
        // Set the translations for the menu
        this._coreTranslationService.translate(app_menu_i18n_en__WEBPACK_IMPORTED_MODULE_2__.locale, app_menu_i18n_fr__WEBPACK_IMPORTED_MODULE_3__.locale, app_menu_i18n_de__WEBPACK_IMPORTED_MODULE_4__.locale, app_menu_i18n_pt__WEBPACK_IMPORTED_MODULE_5__.locale);
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init wave effect (Ripple effect)
        node_waves__WEBPACK_IMPORTED_MODULE_0__.init();
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
            // Set application default language.
            // Change application language? Read the ngxTranslate Fix
            // ? Use app-config.ts file to set default language
            var appLanguage = _this.coreConfig.app.appLanguage || 'en';
            _this._translateService.use(appLanguage);
            // ? OR
            // ? User the current browser lang if available, if undefined use 'en'
            // const browserLang = this._translateService.getBrowserLang();
            // this._translateService.use(browserLang.match(/en|fr|de|pt/) ? browserLang : 'en');
            /**
             * ! Fix : ngxTranslate
             * ----------------------------------------------------------------------------------------------------
             */
            /**
             *
             * Using different language than the default ('en') one i.e French?
             * In this case, you may find the issue where application is not properly translated when your app is initialized.
             *
             * It's due to ngxTranslate module and below is a fix for that.
             * Eventually we will move to the multi language implementation over to the Angular's core language service.
             *
             **/
            // Set the default language to 'en' and then back to 'fr'.
            setTimeout(function () {
                _this._translateService.setDefaultLang('en');
                _this._translateService.setDefaultLang(appLanguage);
            });
            /**
             * !Fix: ngxTranslate
             * ----------------------------------------------------------------------------------------------------
             */
            // Layout
            //--------
            // Remove default classes first
            _this._elementRef.nativeElement.classList.remove('vertical-layout', 'vertical-menu-modern', 'horizontal-layout', 'horizontal-menu');
            // Add class based on config options
            if (_this.coreConfig.layout.type === 'vertical') {
                _this._elementRef.nativeElement.classList.add('vertical-layout', 'vertical-menu-modern');
            }
            else if (_this.coreConfig.layout.type === 'horizontal') {
                _this._elementRef.nativeElement.classList.add('horizontal-layout', 'horizontal-menu');
            }
            // Navbar
            //--------
            // Remove default classes first
            _this._elementRef.nativeElement.classList.remove('navbar-floating', 'navbar-static', 'navbar-sticky', 'navbar-hidden');
            // Add class based on config options
            if (_this.coreConfig.layout.navbar.type === 'navbar-static-top') {
                _this._elementRef.nativeElement.classList.add('navbar-static');
            }
            else if (_this.coreConfig.layout.navbar.type === 'fixed-top') {
                _this._elementRef.nativeElement.classList.add('navbar-sticky');
            }
            else if (_this.coreConfig.layout.navbar.type === 'floating-nav') {
                _this._elementRef.nativeElement.classList.add('navbar-floating');
            }
            else {
                _this._elementRef.nativeElement.classList.add('navbar-hidden');
            }
            // Footer
            //--------
            // Remove default classes first
            _this._elementRef.nativeElement.classList.remove('footer-fixed', 'footer-static', 'footer-hidden');
            // Add class based on config options
            if (_this.coreConfig.layout.footer.type === 'footer-sticky') {
                _this._elementRef.nativeElement.classList.add('footer-fixed');
            }
            else if (_this.coreConfig.layout.footer.type === 'footer-static') {
                _this._elementRef.nativeElement.classList.add('footer-static');
            }
            else {
                _this._elementRef.nativeElement.classList.add('footer-hidden');
            }
            // Blank layout
            if (_this.coreConfig.layout.menu.hidden &&
                _this.coreConfig.layout.navbar.hidden &&
                _this.coreConfig.layout.footer.hidden) {
                _this._elementRef.nativeElement.classList.add('blank-page');
                // ! Fix: Transition issue while coming from blank page
                _this._renderer.setAttribute(_this._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:none');
            }
            else {
                _this._elementRef.nativeElement.classList.remove('blank-page');
                // ! Fix: Transition issue while coming from blank page
                setTimeout(function () {
                    _this._renderer.setAttribute(_this._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:300ms ease all');
                }, 0);
                // If navbar hidden
                if (_this.coreConfig.layout.navbar.hidden) {
                    _this._elementRef.nativeElement.classList.add('navbar-hidden');
                }
                // Menu (Vertical menu hidden)
                if (_this.coreConfig.layout.menu.hidden) {
                    _this._renderer.setAttribute(_this._elementRef.nativeElement, 'data-col', '1-column');
                }
                else {
                    _this._renderer.removeAttribute(_this._elementRef.nativeElement, 'data-col');
                }
                // Footer
                if (_this.coreConfig.layout.footer.hidden) {
                    _this._elementRef.nativeElement.classList.add('footer-hidden');
                }
            }
            // Skin Class (Adding to body as it requires highest priority)
            if (_this.coreConfig.layout.skin !== '' && _this.coreConfig.layout.skin !== undefined) {
                _this.document.body.classList.remove('default-layout', 'bordered-layout', 'dark-layout', 'semi-dark-layout');
                _this.document.body.classList.add(_this.coreConfig.layout.skin + '-layout');
            }
        });
        // Set the application page title
        this._title.setTitle(this.coreConfig.app.appTitle);
    };
    /**
     * On destroy
     */
    AppComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    AppComponent.prototype.toggleSidebar = function (key) {
        this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_6__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_7__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_8__.CoreLoadingScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_9__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__.CoreTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["name", "themeCustomizer", "class", "customizer d-none d-md-block", 3, "invisibleOverlay", 4, "ngIf"], ["name", "themeCustomizer", 1, "customizer", "d-none", "d-md-block", 3, "invisibleOverlay"], [1, "customizer-toggle", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [3, "data-feather"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AppComponent_core_sidebar_2_Template, 4, 4, "core-sidebar", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.customizer);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_11__.VerticalLayoutComponent, app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_12__.HorizontalLayoutComponent, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_13__.CoreSidebarComponent, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_14__.FeatherIconDirective, _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_15__.CoreThemeCustomizerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 11524);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@core/core.module */ 70460);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app-config */ 45529);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.component */ 55041);
/* harmony import */ var app_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/layout.module */ 4805);
/* harmony import */ var app_main_sample_sample_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/sample/sample.module */ 80394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);







 // For auth after login toast












var appRoutes = [
    {
        path: 'pages',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_main_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/pages/pages.module */ 37478)).then(function (m) { return m.PagesModule; }); }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(appRoutes, {
                    scrollPositionRestoration: 'enabled',
                    relativeLinkResolution: 'legacy'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot(),
                //NgBootstrap
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(),
                // Core modules
                _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule.forRoot(app_app_config__WEBPACK_IMPORTED_MODULE_4__.coreConfig),
                _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule,
                _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule,
                _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreThemeCustomizerModule,
                // App modules
                app_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__.LayoutModule,
                app_main_sample_sample_module__WEBPACK_IMPORTED_MODULE_7__.SampleModule
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, 
        //NgBootstrap
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule,
        _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule,
        _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreThemeCustomizerModule,
        // App modules
        app_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__.LayoutModule,
        app_main_sample_sample_module__WEBPACK_IMPORTED_MODULE_7__.SampleModule] }); })();


/***/ }),

/***/ 43454:
/*!**************************************!*\
  !*** ./src/app/auth/models/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_0__.Role; },
/* harmony export */   "User": function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.User; }
/* harmony export */ });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ 19644);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 95236);




/***/ }),

/***/ 19644:
/*!*************************************!*\
  !*** ./src/app/auth/models/role.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; }
/* harmony export */ });
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Client"] = "Client";
    Role["User"] = "User";
})(Role || (Role = {}));


/***/ }),

/***/ 95236:
/*!*************************************!*\
  !*** ./src/app/auth/models/user.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ 65015:
/*!********************************************************!*\
  !*** ./src/app/auth/service/authentication.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var app_auth_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/auth/models */ 43454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 49344);







var AuthenticationService = /** @class */ (function () {
    /**
     *
     * @param {HttpClient} _http
     * @param {ToastrService} _toastrService
     */
    function AuthenticationService(_http, _toastrService) {
        this._http = _http;
        this._toastrService = _toastrService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        // getter: currentUserValue
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isAdmin", {
        /**
         *  Confirms if user is admin
         */
        get: function () {
            return this.currentUser && this.currentUserSubject.value.role === app_auth_models__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isClient", {
        /**
         *  Confirms if user is client
         */
        get: function () {
            return this.currentUser && this.currentUserSubject.value.role === app_auth_models__WEBPACK_IMPORTED_MODULE_1__.Role.Client;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * User login
     *
     * @param email
     * @param password
     * @returns user
     */
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this._http
            .post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/users/authenticate", { email: email, password: password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                // Display welcome toast!
                setTimeout(function () {
                    _this._toastrService.success('You have successfully logged in as an ' +
                        user.role +
                        ' user to Vuexy. Now you can start to explore. Enjoy! 🎉', '👋 Welcome, ' + user.firstName + '!', { toastClass: 'toast ngx-toastr', closeButton: true });
                }, 2500);
                // notify
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    /**
     * User logout
     *
     */
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // notify
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
    AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
    return AuthenticationService;
}());



/***/ }),

/***/ 81004:
/*!***************************************!*\
  !*** ./src/app/auth/service/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* reexport safe */ _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService; },
/* harmony export */   "UserService": function() { return /* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService; }
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 65015);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 47570);




/***/ }),

/***/ 47570:
/*!**********************************************!*\
  !*** ./src/app/auth/service/user.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



var UserService = /** @class */ (function () {
    /**
     *
     * @param {HttpClient} _http
     */
    function UserService(_http) {
        this._http = _http;
    }
    /**
     * Get all users
     */
    UserService.prototype.getAll = function () {
        return this._http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/users");
    };
    /**
     * Get user by id
     */
    UserService.prototype.getById = function (id) {
        return this._http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/users/" + id);
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());



/***/ }),

/***/ 13282:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": function() { return /* binding */ BreadcrumbComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.name);
} }
function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.name);
} }
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.isLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !link_r1.isLink);
} }
var _c0 = function (a0, a1) { return { "justify-content-center": a0, "justify-content-end": a1 }; };
var _c1 = function (a0, a1, a2, a3, a4, a5) { return { "breadcrumb-slash": a0, "breadcrumb-dots": a1, "breadcrumb-dashes": a2, "breadcrumb-pipes": a3, "breadcrumb-chevron": a4, "mr-1": a5 }; };
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    BreadcrumbComponent.prototype.ngOnInit = function () {
        // concatenate default properties with passed properties
        this.breadcrumb = this.breadcrumb;
    };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
    BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { breadcrumb: "breadcrumb" }, decls: 3, vars: 13, consts: [[1, "breadcrumb-wrapper", "d-flex", 3, "ngClass"], [1, "breadcrumb", 3, "ngClass"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.breadcrumb.alignment == "center", ctx.breadcrumb.alignment == "right"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](6, _c1, ctx.breadcrumb.type == "slash", ctx.breadcrumb.type == "dots", ctx.breadcrumb.type == "dashes", ctx.breadcrumb.type == "pipes", ctx.breadcrumb.type == "chevron", ctx.breadcrumb.alignment == "right"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumb.links);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], encapsulation: 2 });
    return BreadcrumbComponent;
}());



/***/ }),

/***/ 90044:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": function() { return /* binding */ BreadcrumbModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 13282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); };
    BreadcrumbModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
    BreadcrumbModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([])]] });
    return BreadcrumbModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent] }); })();


/***/ }),

/***/ 4810:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderComponent": function() { return /* binding */ ContentHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 13282);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);







var _c0 = function () { return ["/"]; };
function ContentHeaderComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "check-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "message-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "calendar");
} }
function ContentHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ContentHeaderComponent_ng_container_0_ng_container_8_Template, 19, 21, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.contentHeader.headerTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx_r0.contentHeader.breadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.contentHeader.actionButton);
} }
var ContentHeaderComponent = /** @class */ (function () {
    function ContentHeaderComponent() {
    }
    ContentHeaderComponent.prototype.ngOnInit = function () { };
    ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) { return new (t || ContentHeaderComponent)(); };
    ContentHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContentHeaderComponent, selectors: [["app-content-header"]], inputs: { contentHeader: "contentHeader" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "content-header", "row"], [1, "content-header-left", "col-md-9", "col-12", "mb-2"], [1, "row", "breadcrumbs-top"], [1, "col-12", "d-flex"], [1, "content-header-title", "float-left", "mb-0"], [3, "breadcrumb"], [1, "content-header-right", "text-md-right", "col-md-3", "col-12", "d-md-block", "d-none"], [1, "form-group", "breadcrum-right"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", "id", "dropdownSettings", "type", "button", "rippleEffect", "", 1, "btn-icon", "btn", "btn-primary", "btn-round", "btn-sm"], [3, "data-feather"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownSettings"], ["ngbDropdownItem", "", 3, "routerLink"]], template: function ContentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContentHeaderComponent_ng_container_0_Template, 9, 3, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contentHeader);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownItem], encapsulation: 2 });
    return ContentHeaderComponent;
}());



/***/ }),

/***/ 50619:
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderModule": function() { return /* binding */ ContentHeaderModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.module */ 90044);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







var ContentHeaderModule = /** @class */ (function () {
    function ContentHeaderModule() {
    }
    ContentHeaderModule.ɵfac = function ContentHeaderModule_Factory(t) { return new (t || ContentHeaderModule)(); };
    ContentHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContentHeaderModule });
    ContentHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule]] });
    return ContentHeaderModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContentHeaderModule, { declarations: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule], exports: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderComponent] }); })();


/***/ }),

/***/ 24714:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/content/content.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": function() { return /* binding */ ContentComponent; }
/* harmony export */ });
/* harmony import */ var _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/animations/core.animation */ 24597);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);






var ContentComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     *
     */
    function ContentComponent(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    /**
     * Fade In Left Animation
     *
     * @param outlet
     */
    ContentComponent.prototype.fadeInLeft = function (outlet) {
        if (this.animate === 'fadeInLeft') {
            return outlet.activatedRouteData.animation;
        }
        return null;
    };
    /**
     * Zoom In Animation
     *
     * @param outlet
     */
    ContentComponent.prototype.zoomIn = function (outlet) {
        if (this.animate === 'zoomIn') {
            return outlet.activatedRouteData.animation;
        }
        return null;
    };
    /**
     * Fade In Animation
     *
     * @param outlet
     */
    ContentComponent.prototype.fadeIn = function (outlet) {
        if (this.animate === 'fadeIn') {
            return outlet.activatedRouteData.animation;
        }
        return null;
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe config change
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
            _this.animate = _this.coreConfig.layout.animation;
        });
    };
    ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__.CoreConfigService)); };
    ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["content"]], decls: 3, vars: 3, consts: [["outlet", "outlet"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "router-outlet", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@zoomIn", ctx.zoomIn(_r0))("@fadeInLeft", ctx.fadeInLeft(_r0))("@fadeIn", ctx.fadeIn(_r0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], encapsulation: 2, data: { animation: [_core_animations_core_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInLeft, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_0__.zoomIn, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_0__.fadeIn] } });
    return ContentComponent;
}());



/***/ }),

/***/ 92181:
/*!*************************************************************!*\
  !*** ./src/app/layout/components/content/content.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": function() { return /* binding */ ContentModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content/content.component */ 24714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule.ɵfac = function ContentModule_Factory(t) { return new (t || ContentModule)(); };
    ContentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContentModule });
    ContentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule]] });
    return ContentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContentModule, { declarations: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule], exports: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent] }); })();


/***/ }),

/***/ 92223:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 12394);







function FooterComponent_app_scroll_top_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-scroll-top");
} }
function FooterComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var FooterComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function FooterComponent(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        this.year = new Date().getFullYear();
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    FooterComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService)); };
    FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer"]], decls: 13, vars: 6, consts: [[1, "clearfix", "mb-0"], [1, "float-md-left", "d-block", "d-md-inline-block", "mt-25"], ["href", "https://1.envato.market/pixinvent_portfolio", "target", "_blank", 1, "ml-25"], [1, "d-none", "d-sm-inline-block"], [1, "float-md-right", "d-none", "d-md-block"], [3, "data-feather"], [4, "ngIf"], [1, "buy-now"], ["href", "https://1.envato.market/vuexy_admin", "target", "_blank", "class", "btn btn-danger", 4, "ngIf"], ["href", "https://1.envato.market/vuexy_admin", "target", "_blank", 1, "btn", "btn-danger"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Pixinvent");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ", All rights Reserved");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Hand-crafted & Made with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, FooterComponent_app_scroll_top_10_Template, 1, 0, "app-scroll-top", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FooterComponent_a_12_Template, 2, 0, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" COPYRIGHT \u00A9 ", ctx.year, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("pink");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "heart");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.scrollTop);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.buyNow);
        } }, directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__.ScrollTopComponent], encapsulation: 2 });
    return FooterComponent;
}());



/***/ }),

/***/ 73030:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/footer/footer.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": function() { return /* binding */ FooterModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 92223);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 12394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
    FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FooterModule });
    FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule]] });
    return FooterModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__.ScrollTopComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule], exports: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent] }); })();


/***/ }),

/***/ 12394:
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/footer/scroll-to-top/scroll-top.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": function() { return /* binding */ ScrollTopComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);






var _c0 = function (a0) { return { "show-scroll-to-top": a0 }; };
var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent(document) {
        this.document = document;
        this.topOffset = 150; // Top offset to display scroll to top button
    }
    ScrollTopComponent.prototype.onWindowScroll = function () {
        if (window.pageYOffset > this.topOffset ||
            document.documentElement.scrollTop > this.topOffset ||
            document.body.scrollTop > this.topOffset) {
            this.windowScrolled = true;
        }
        else if ((this.windowScrolled && window.pageYOffset) ||
            document.documentElement.scrollTop ||
            document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    };
    ScrollTopComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 8);
            }
        })();
    };
    ScrollTopComponent.prototype.ngOnInit = function () { };
    ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
    ScrollTopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        } }, decls: 2, vars: 4, consts: [["type", "button", "rippleEffect", "", 1, "btn", "btn-primary", "btn-icon", "scroll-to-top", 3, "ngClass", "click"], [3, "data-feather"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_0_listener() { return ctx.scrollToTop(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx.windowScrolled));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data-feather", "arrow-up");
        } }, directives: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_0__.RippleEffectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective], styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 5%;\n  right: 30px;\n  z-index: 99;\n  display: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUlO1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy1zY3JvbGwtdG8tdG9wIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuIl19 */"] });
    return ScrollTopComponent;
}());



/***/ }),

/***/ 71778:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 34505);







var HorizontalMenuComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreMenuService} _coreMenuService
     * @param {CoreSidebarService} _coreSidebarService
     */
    function HorizontalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService) {
        this._coreConfigService = _coreConfigService;
        this._coreMenuService = _coreMenuService;
        this._coreSidebarService = _coreSidebarService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe config change
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
        // Get current menu
        this._coreMenuService.onMenuChanged
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (value) { return value !== null; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll))
            .subscribe(function () {
            _this.menu = _this._coreMenuService.getCurrentMenu();
        });
    };
    /**
     * On Destroy
     */
    HorizontalMenuComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_1__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarService)); };
    HorizontalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["horizontal-menu"]], decls: 2, vars: 0, consts: [[1, "navbar-container", "main-menu-content"], ["id", "main-menu-navigation", "layout", "horizontal", "core-menu", "", 1, "nav", "navbar-nav"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } }, directives: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ 18029:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuModule": function() { return /* binding */ HorizontalMenuModule; }
/* harmony export */ });
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 71778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




var HorizontalMenuModule = /** @class */ (function () {
    function HorizontalMenuModule() {
    }
    HorizontalMenuModule.ɵfac = function HorizontalMenuModule_Factory(t) { return new (t || HorizontalMenuModule)(); };
    HorizontalMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HorizontalMenuModule });
    HorizontalMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_core_components__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule]] });
    return HorizontalMenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HorizontalMenuModule, { declarations: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_2__.HorizontalMenuComponent], imports: [_core_components__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule], exports: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_2__.HorizontalMenuComponent] }); })();


/***/ }),

/***/ 92393:
/*!**********************************************************!*\
  !*** ./src/app/layout/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": function() { return /* binding */ MenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 72951);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 71778);




function MenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "vertical-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function MenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "horizontal-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
var MenuComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    function MenuComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        // Set the default menu
        this._menuType = 'vertical-menu';
    }
    Object.defineProperty(MenuComponent.prototype, "menuType", {
        // Accessors
        // -----------------------------------------------------------------------------------------------------
        //Get the menu type
        get: function () {
            return this._menuType;
        },
        set: function (value) {
            // Remove the old class name from native element
            this._renderer.removeClass(this._elementRef.nativeElement, this.menuType);
            // Store the menuType value
            this._menuType = value;
            // Add the new class name from native element
            this._renderer.addClass(this._elementRef.nativeElement, value);
        },
        enumerable: false,
        configurable: true
    });
    MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
    MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { menuType: "menuType" }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuType === "vertical-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuType === "horizontal-menu");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_0__.VerticalMenuComponent, app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalMenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
    return MenuComponent;
}());



/***/ }),

/***/ 79287:
/*!*******************************************************!*\
  !*** ./src/app/layout/components/menu/menu.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": function() { return /* binding */ MenuModule; }
/* harmony export */ });
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 92393);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.module */ 71307);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.module */ 18029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
    MenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MenuModule });
    MenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuModule]] });
    return MenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent], imports: [_core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuModule], exports: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent] }); })();


/***/ }),

/***/ 72951:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 34505);














var _c0 = function () { return ["/"]; };
var _c1 = function (a0) { return { "d-block": a0 }; };
var VerticalMenuComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreMenuService} _coreMenuService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {Router} _router
     */
    function VerticalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService, _router) {
        this._coreConfigService = _coreConfigService;
        this._coreMenuService = _coreMenuService;
        this._coreSidebarService = _coreSidebarService;
        this._router = _router;
        this.isScrolled = false;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe config change
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
        this.isCollapsed = this._coreSidebarService.getSidebarRegistry('menu').collapsed;
        // Close the menu on router NavigationEnd (Required for small screen to close the menu on select)
        this._router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(function () {
            if (_this._coreSidebarService.getSidebarRegistry('menu')) {
                _this._coreSidebarService.getSidebarRegistry('menu').close();
            }
        });
        // scroll to active on navigation end
        this._router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1))
            .subscribe(function () {
            setTimeout(function () {
                _this.directiveRef.scrollToElement('.navigation .active', -180, 500);
            });
        });
        // Get current menu
        this._coreMenuService.onMenuChanged
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (value) { return value !== null; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(function () {
            _this.menu = _this._coreMenuService.getCurrentMenu();
        });
    };
    /**
     * On Destroy
     */
    VerticalMenuComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Sidebar scroll set isScrolled as true
     */
    VerticalMenuComponent.prototype.onSidebarScroll = function () {
        if (this.directiveRef.position(true).y > 3) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    /**
     * Toggle sidebar expanded status
     */
    VerticalMenuComponent.prototype.toggleSidebar = function () {
        this._coreSidebarService.getSidebarRegistry('menu').toggleOpen();
    };
    /**
     * Toggle sidebar collapsed status
     */
    VerticalMenuComponent.prototype.toggleSidebarCollapsible = function () {
        var _this = this;
        // Get the current menu state
        this._coreConfigService
            .getConfig()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(function (config) {
            _this.isCollapsed = config.layout.menu.collapsed;
        });
        if (this.isCollapsed) {
            this._coreConfigService.setConfig({ layout: { menu: { collapsed: false } } }, { emitEvent: true });
        }
        else {
            this._coreConfigService.setConfig({ layout: { menu: { collapsed: true } } }, { emitEvent: true });
        }
    };
    VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_1__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
    VerticalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["vertical-menu"]], viewQuery: function VerticalMenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 16, vars: 8, consts: [[1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mr-auto"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", 3, "src"], [1, "brand-text", "mb-0"], [1, "nav-item", "nav-toggle"], [1, "nav-link", "modern-nav-toggle", "d-none", "d-xl-block", "pr-0", 3, "click"], [1, "toggle-icon", "feather", "font-medium-4", "collapse-toggle-icon", "text-primary", 3, "ngClass"], [1, "nav-link", "modern-nav-toggle", "d-block", "d-xl-none", "pr-0", 3, "click"], ["data-feather", "x", 1, "font-medium-4", "text-primary", "toggle-icon"], [1, "shadow-bottom", 3, "ngClass"], [1, "main-menu-content", 3, "perfectScrollbar", "scroll"], ["layout", "vertical", "core-menu", "", 1, "navigation", "navigation-main"]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_9_listener() { return ctx.toggleSidebarCollapsible(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_11_listener() { return ctx.toggleSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scroll", function VerticalMenuComponent_Template_div_scroll_14_listener() { return ctx.onSidebarScroll(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "ul", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isCollapsed === true ? "icon-circle" : "icon-disc");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, ctx.isScrolled));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
    return VerticalMenuComponent;
}());



/***/ }),

/***/ 71307:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuModule": function() { return /* binding */ VerticalMenuModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 72951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
var VerticalMenuModule = /** @class */ (function () {
    function VerticalMenuModule() {
    }
    VerticalMenuModule.ɵfac = function VerticalMenuModule_Factory(t) { return new (t || VerticalMenuModule)(); };
    VerticalMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VerticalMenuModule });
    VerticalMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[_core_components__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]] });
    return VerticalMenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VerticalMenuModule, { declarations: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuComponent], imports: [_core_components__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuComponent] }); })();


/***/ }),

/***/ 75361:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarBookmarkComponent": function() { return /* binding */ NavbarBookmarkComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 50442);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 69671);











var _c0 = ["openBookmark"];
function NavbarBookmarkComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("ngbTooltip", page_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", page_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", page_r5.icon);
} }
var _c1 = function (a0) { return { current_item: a0 }; };
function NavbarBookmarkComponent_ng_container_12_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); $event.stopPropagation(); $event.preventDefault(); ctx_r9.closeBookmark(); return ctx_r9.removeOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_button_click_6_listener($event) { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); var page_r7 = restoredCtx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); $event.stopPropagation(); $event.preventDefault(); return ctx_r11.toggleBookmark(page_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, i_r8 === ctx_r6.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", page_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("feather icon-", page_r7.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-warning", page_r7.isBookmarked);
} }
function NavbarBookmarkComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_12_li_1_Template, 8, 10, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.bookmarkText, "title"), 0, 6));
} }
function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); $event.stopPropagation(); $event.preventDefault(); ctx_r16.closeBookmark(); return ctx_r16.removeOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); var page_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); $event.stopPropagation(); $event.preventDefault(); return ctx_r18.toggleBookmark(page_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var i_r14 = ctx_r20.index;
    var page_r13 = ctx_r20.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, i_r14 === ctx_r15.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", page_r13.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("feather icon-", page_r13.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-warning", page_r13.isBookmarked);
} }
function NavbarBookmarkComponent_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template, 8, 10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var page_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", page_r13.isBookmarked);
} }
function NavbarBookmarkComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NavbarBookmarkComponent_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "filter");
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](1, 1, ctx_r4.pages, ctx_r4.bookmarkText, "title"));
} }
var NavbarBookmarkComponent = /** @class */ (function () {
    /**
     *
     * @param document
     * @param _searchService
     */
    function NavbarBookmarkComponent(document, _searchService) {
        this.document = document;
        this._searchService = _searchService;
        // Public
        this.bookmarkText = '';
        this.openBookmarkRef = false;
        this.activeIndex = 0;
        this.pages = [];
    }
    NavbarBookmarkComponent.prototype.fn = function () {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
    };
    NavbarBookmarkComponent.prototype.clickout = function (event) {
        // Close Bookmark if Clicked on Overlay
        if (event.target.className === 'content-overlay') {
            this.removeOverlay();
            this.openBookmarkRef = false;
            this.bookmarkText = '';
        }
        // Close Bookmark if clicked Outside of Container
        if (!(event.target.nodeName === 'INPUT') && this.openBookmarkRef === true) {
            this.removeOverlay();
            this.openBookmarkRef = false;
            this.bookmarkText = '';
        }
    };
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Add Bookmark
     *
     * @param id
     */
    NavbarBookmarkComponent.prototype.addBookmark = function (id) {
        var index = this.pages.findIndex(function (object) {
            return object.id === id;
        });
        this.pages[index].isBookmarked = true;
        this.bookmarkedItems.push(this.pages[index]);
    };
    /**
     * Remove Bookmark
     *
     * @param id
     */
    NavbarBookmarkComponent.prototype.removeBookmark = function (id) {
        var index = this.bookmarkedItems.findIndex(function (object) {
            return object.id === id;
        });
        this.bookmarkedItems[index].isBookmarked = false;
        this.bookmarkedItems.splice(index, 1);
    };
    /**
     * Open Bookmark
     */
    NavbarBookmarkComponent.prototype.openBookmark = function () {
        this.openBookmarkRef = true;
        this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    };
    /**
     * Close Bookmark
     */
    NavbarBookmarkComponent.prototype.closeBookmark = function () {
        this.openBookmarkRef = false;
        this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    };
    /**
     * Remove Overlay
     */
    NavbarBookmarkComponent.prototype.removeOverlay = function () {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
    };
    /**
     * Next Active Match
     */
    NavbarBookmarkComponent.prototype.nextActiveMatch = function () {
        this.activeIndex = this.activeIndex < this.bookmarkSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    };
    /**
     * Previous Active Match
     */
    NavbarBookmarkComponent.prototype.prevActiveMatch = function () {
        this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    };
    /**
     * Auto Suggestion
     *
     * @param event
     */
    NavbarBookmarkComponent.prototype.autoSuggestion = function (event) {
        if (38 === event.keyCode) {
            return this.prevActiveMatch();
        }
        if (40 === event.keyCode) {
            return this.nextActiveMatch();
        }
    };
    /**
     * Toggle Bookmark
     *
     * @param id
     */
    NavbarBookmarkComponent.prototype.toggleBookmark = function (id) {
        var index = this.pages.findIndex(function (object) {
            return object.id === id;
        });
        if (this.pages[index].isBookmarked === true) {
            this.removeBookmark(id);
        }
        else {
            this.addBookmark(id);
        }
    };
    /**
     * Toggle Bookmark Popup
     */
    NavbarBookmarkComponent.prototype.toggleBookmarkPopup = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.openBookmarkRef === false) {
                _this.openBookmark();
            }
            else {
                _this.closeBookmark();
            }
            setTimeout(function () {
                _this._bookmarkElement.nativeElement.focus();
            }, 0);
        }, 0);
    };
    /**
     * Update Bookmark
     *
     * @param event
     */
    NavbarBookmarkComponent.prototype.bookmarkUpdate = function (event) {
        var val = event.target.value.toLowerCase();
        if (val !== '') {
            this.document.querySelector('.app-content').classList.add('show-overlay');
        }
        else {
            this.document.querySelector('.app-content').classList.remove('show-overlay');
        }
        this.autoSuggestion(event);
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    NavbarBookmarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._searchService.onApiDataChange.subscribe(function (res) {
            _this.apiData = res;
            _this.pages = _this.apiData[0].data;
            _this.bookmarkedItems = _this.pages.filter(function (page) { return page.isBookmarked === true; });
            _this.bookmarkSearchLimit = _this.apiData[0].bookmarkLimit;
        });
        this._searchService.onIsBookmarkOpenChange.subscribe(function (res) {
            _this.openBookmarkRef = res;
        });
    };
    NavbarBookmarkComponent.ɵfac = function NavbarBookmarkComponent_Factory(t) { return new (t || NavbarBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService)); };
    NavbarBookmarkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarBookmarkComponent, selectors: [["app-navbar-bookmark"]], viewQuery: function NavbarBookmarkComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._bookmarkElement = _t.first);
        } }, hostBindings: function NavbarBookmarkComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function NavbarBookmarkComponent_keydown_escape_HostBindingHandler() { return ctx.fn(); })("click", function NavbarBookmarkComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
        } }, decls: 15, vars: 10, consts: [[1, "nav", "navbar-nav", "bookmark-icons"], [4, "ngFor", "ngForOf"], [1, "nav", "navbar-nav"], [1, "nav-item", "d-none", "d-lg-block"], [1, "nav-link", "bookmark-star", 3, "click"], [3, "data-feather"], [1, "bookmark-input", "search-input"], [1, "bookmark-input-icon"], ["type", "text", "placeholder", "Bookmark", "tabindex", "0", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openBookmark", ""], [1, "search-list", "search-list-bookmark", "show", 3, "perfectScrollbar"], [4, "ngIf", "ngIfElse"], ["defaultBookmarks", ""], ["placement", "bottom", 1, "nav-link", 3, "routerLink", "ngbTooltip"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click"], [1, "d-flex", "justify-content-start", "align-items-center"], ["type", "button", 1, "btn", "p-0", 3, "click"], [1, "feather", "icon-star"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngIf"]], template: function NavbarBookmarkComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_1_Template, 4, 5, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarBookmarkComponent_Template_a_click_4_listener() { return ctx.toggleBookmarkPopup(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function NavbarBookmarkComponent_Template_input_keyup_9_listener($event) { return ctx.bookmarkUpdate($event); })("ngModelChange", function NavbarBookmarkComponent_Template_input_ngModelChange_9_listener($event) { return ctx.bookmarkText = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NavbarBookmarkComponent_ng_container_12_Template, 4, 9, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NavbarBookmarkComponent_ng_template_13_Template, 2, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bookmarkedItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("ficon text-warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "star");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.openBookmarkRef);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.bookmarkText);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bookmarkText !== "")("ngIfElse", _r3);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe], encapsulation: 2 });
    return NavbarBookmarkComponent;
}());



/***/ }),

/***/ 10578:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/navbar-notification.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarNotificationComponent": function() { return /* binding */ NavbarNotificationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/notifications.service */ 50861);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);







function NavbarNotificationComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", message_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", message_r2.heading, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r2.text);
} }
var _c0 = function (a0, a1, a2) { return { "bg-light-danger": a0, "bg-light-success": a1, "bg-light-warning": a2 }; };
function NavbarNotificationComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var systemMessage_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c0, systemMessage_r3.icon === "x", systemMessage_r3.icon === "check", systemMessage_r3.icon === "alert-triangle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data-feather", systemMessage_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", systemMessage_r3.heading, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](systemMessage_r3.text);
} }
var NavbarNotificationComponent = /** @class */ (function () {
    /**
     *
     * @param {NotificationsService} _notificationsService
     */
    function NavbarNotificationComponent(_notificationsService) {
        this._notificationsService = _notificationsService;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    NavbarNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._notificationsService.onApiDataChange.subscribe(function (res) {
            _this.notifications = res;
        });
    };
    NavbarNotificationComponent.ɵfac = function NavbarNotificationComponent_Factory(t) { return new (t || NavbarNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService)); };
    NavbarNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarNotificationComponent, selectors: [["app-navbar-notification"]], decls: 24, vars: 5, consts: [["ngbDropdown", "", 1, "nav-item", "dropdown-notification", "mr-25"], ["ngbDropdownToggle", "", "id", "navbarNotificationDropdown", 1, "nav-link"], ["data-feather", "bell", 1, "ficon"], [1, "badge", "badge-pill", "badge-danger", "badge-up"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarNotificationDropdown", 1, "dropdown-menu", "dropdown-menu-media", "dropdown-menu-right"], [1, "dropdown-menu-header"], [1, "dropdown-header", "d-flex"], [1, "notification-title", "mb-0", "mr-auto"], [1, "badge", "badge-pill", "badge-light-primary"], [1, "scrollable-container", "media-list", 3, "perfectScrollbar"], ["class", "d-flex", "href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [1, "media", "d-flex", "align-items-center"], [1, "font-weight-bolder", "mr-auto", "mb-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["id", "systemNotification", "type", "checkbox", 1, "custom-control-input", 3, "checked"], ["for", "systemNotification", 1, "custom-control-label"], [1, "dropdown-menu-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-block"], ["href", "javascript:void(0)", 1, "d-flex"], [1, "media", "d-flex", "align-items-start"], [1, "media-left"], [1, "avatar"], ["alt", "avatar", "width", "32", "height", "32", 3, "src"], [1, "media-body"], [1, "media-heading", 3, "innerHTML"], [1, "notification-text"], [1, "avatar", 3, "ngClass"], [1, "avatar-content"], [1, "avatar-icon", 3, "data-feather"]], template: function NavbarNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NavbarNotificationComponent_a_13_Template, 9, 3, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "System Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, NavbarNotificationComponent_a_20_Template, 10, 8, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Read all notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length), " New ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.notifications.system);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications.systemMessages);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective], encapsulation: 2 });
    return NavbarNotificationComponent;
}());



/***/ }),

/***/ 50861:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/notifications.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": function() { return /* binding */ NotificationsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



var NotificationsService = /** @class */ (function () {
    /**
     *
     * @param {HttpClient} _httpClient
     */
    function NotificationsService(_httpClient) {
        this._httpClient = _httpClient;
        // Public
        this.apiData = [];
        this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.getNotificationsData();
    }
    /**
     * Get Notifications Data
     */
    NotificationsService.prototype.getNotificationsData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/notifications-data').subscribe(function (response) {
                _this.apiData = response;
                _this.onApiDataChange.next(_this.apiData);
                resolve(_this.apiData);
            }, reject);
        });
    };
    NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    NotificationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });
    return NotificationsService;
}());



/***/ }),

/***/ 6032:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/navbar-search.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarSearchComponent": function() { return /* binding */ NavbarSearchComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 50442);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 69671);










var _c0 = ["openSearch"];
var _c1 = ["pageList"];
var _c2 = function (a0) { return { current_item: a0 }; };
function NavbarSearchComponent_ng_container_16_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseover_0_listener() { var page_r12 = ctx.$implicit; return page_r12.hover = true; })("mouseout", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseout_0_listener() { var page_r12 = ctx.$implicit; return page_r12.hover = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarSearchComponent_ng_container_16_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.toggleSearch(); })("keyup.enter", function NavbarSearchComponent_ng_container_16_li_1_Template_a_keyup_enter_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); var page_r12 = restoredCtx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r18.navigate(page_r12.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("current_item", page_r12.hover);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, i_r13 === ctx_r11.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", page_r12.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", page_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r12.title);
} }
function NavbarSearchComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_16_li_1_Template, 6, 8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.searchText, "title"), 0, 4));
} }
function NavbarSearchComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NavbarSearchComponent_ng_container_24_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var file_r20 = ctx.$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r19.i === ctx_r19.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", file_r20.file, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r20.by);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r20.size);
} }
function NavbarSearchComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_24_li_1_Template, 12, 7, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 5, ctx_r5.files, ctx_r5.searchText, "title"), 0, 4));
} }
function NavbarSearchComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NavbarSearchComponent_ng_container_32_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", contact_r22.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](contact_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](contact_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](contact_r22.date);
} }
function NavbarSearchComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_32_li_1_Template, 12, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 5, ctx_r8.contacts, ctx_r8.searchText, "title"), 0, 4));
} }
function NavbarSearchComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var NavbarSearchComponent = /** @class */ (function () {
    /**
     *
     * @param document
     * @param router
     * @param _searchService
     */
    function NavbarSearchComponent(document, _elementRef, router, _searchService) {
        this.document = document;
        this._elementRef = _elementRef;
        this.router = router;
        this._searchService = _searchService;
        // Public
        this.searchText = '';
        this.openSearchRef = false;
        this.activeIndex = 0;
        this.pages = [];
        this.files = [];
        this.contacts = [];
    }
    NavbarSearchComponent.prototype.fn = function () {
        this.removeOverlay();
        this.openSearchRef = false;
        this.searchText = '';
    };
    NavbarSearchComponent.prototype.clickout = function (event) {
        if (event.target.className === 'content-overlay') {
            this.removeOverlay();
            this.openSearchRef = false;
            this.searchText = '';
        }
    };
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Next Active Match
     */
    NavbarSearchComponent.prototype.nextActiveMatch = function () {
        this.activeIndex = this.activeIndex < this.pageSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    };
    /**
     * Previous Active Match
     */
    NavbarSearchComponent.prototype.prevActiveMatch = function () {
        this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    };
    /**
     * Remove Overlay
     */
    NavbarSearchComponent.prototype.removeOverlay = function () {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
    };
    /**
     * Auto Suggestion
     *
     * @param event
     */
    NavbarSearchComponent.prototype.autoSuggestion = function (event) {
        var _a;
        if (38 === event.keyCode) {
            return this.prevActiveMatch();
        }
        if (40 === event.keyCode) {
            return this.nextActiveMatch();
        }
        if (13 === event.keyCode) {
            // Navigate to activeIndex
            // ! Todo: Improve this code
            var current_item = this._pageListElement.nativeElement.getElementsByClassName('current_item');
            (_a = current_item[0]) === null || _a === void 0 ? void 0 : _a.children[0].click();
        }
    };
    /**
     * Toggle Search
     */
    NavbarSearchComponent.prototype.toggleSearch = function () {
        var _this = this;
        this._searchService.onIsBookmarkOpenChange.next(false);
        this.removeOverlay();
        this.openSearchRef = !this.openSearchRef;
        this.activeIndex = 0;
        setTimeout(function () {
            _this._inputElement.nativeElement.focus();
        });
        if (this.openSearchRef === false) {
            this.document.querySelector('.app-content').classList.remove('show-overlay');
            this.searchText = '';
        }
    };
    /**
     * Search Update
     *
     * @param event
     */
    NavbarSearchComponent.prototype.searchUpdate = function (event) {
        var val = event.target.value.toLowerCase();
        if (val !== '') {
            this.document.querySelector('.app-content').classList.add('show-overlay');
        }
        else {
            this.document.querySelector('.app-content').classList.remove('show-overlay');
        }
        this.autoSuggestion(event);
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    NavbarSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._searchService.onApiDataChange.subscribe(function (res) {
            _this.apiData = res;
            _this.pages = _this.apiData[0].data;
            _this.pageSearchLimit = _this.apiData[0].searchLimit;
            _this.files = _this.apiData[1].data;
            _this.contacts = _this.apiData[2].data;
        });
    };
    NavbarSearchComponent.ɵfac = function NavbarSearchComponent_Factory(t) { return new (t || NavbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService)); };
    NavbarSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarSearchComponent, selectors: [["app-navbar-search"]], viewQuery: function NavbarSearchComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._pageListElement = _t.first);
        } }, hostBindings: function NavbarSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function NavbarSearchComponent_keydown_escape_HostBindingHandler() { return ctx.fn(); })("click", function NavbarSearchComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
        } }, decls: 36, vars: 28, consts: [[1, "nav-item", "nav-search"], [1, "nav-link", "nav-link-search", 3, "click"], [3, "data-feather"], [1, "search-input"], [1, "search-input-icon"], ["type", "text", "placeholder", "Explore Vuexy...", "tabindex", "-1", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openSearch", ""], [1, "btn", "search-input-close", "p-0", 3, "click"], [1, "search-list", "search-list-main", 3, "perfectScrollbar"], ["pageList", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0)"], [1, "section-label", "mt-75", "mb-0"], [4, "ngIf", "ngIfElse"], ["noResultsPages", ""], ["noResultsFiles", ""], ["noResultsMembers", ""], ["class", "auto-suggestion", 3, "ngClass", "current_item", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass", "mouseover", "mouseout"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click", "keyup.enter"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "mr-75", 3, "data-feather"], [1, "auto-suggestion", "justify-content-between"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "py-50"], [1, "d-flex", "justify-content-start"], ["data-feather", "alert-circle", 1, "mr-25"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex"], [1, "mr-75"], ["alt", "png", "height", "32", 3, "src"], [1, "search-data"], [1, "search-data-title", "mb-0"], [1, "text-muted"], [1, "search-data-size", "mr-50", "text-muted"], ["class", "auto-suggestion", 4, "ngFor", "ngForOf"], [1, "auto-suggestion"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "py-50", "w-100"], [1, "avatar", "mr-75"]], template: function NavbarSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_a_click_1_listener() { return ctx.toggleSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function NavbarSearchComponent_Template_input_keyup_6_listener($event) { return ctx.searchUpdate($event); })("ngModelChange", function NavbarSearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchText = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_button_click_8_listener() { return ctx.toggleSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Pages");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NavbarSearchComponent_ng_container_16_Template, 4, 9, "ng-container", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, NavbarSearchComponent_ng_template_18_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Files");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NavbarSearchComponent_ng_container_24_Template, 4, 9, "ng-container", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, NavbarSearchComponent_ng_template_26_Template, 6, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Members");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, NavbarSearchComponent_ng_container_32_Template, 4, 9, "ng-container", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, NavbarSearchComponent_ng_template_34_Template, 6, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("ficon");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("open", ctx.openSearchRef === true);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.searchText !== "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](17, 16, ctx.pages, ctx.searchText, "title").length)("ngIfElse", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](25, 20, ctx.files, ctx.searchText, "title").length)("ngIfElse", _r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](33, 24, ctx.contacts, ctx.searchText, "title").length)("ngIfElse", _r9);
        } }, directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe], encapsulation: 2 });
    return NavbarSearchComponent;
}());



/***/ }),

/***/ 50442:
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/search.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



var SearchService = /** @class */ (function () {
    /**
     *
     * @param {HttpClient} _httpClient
     */
    function SearchService(_httpClient) {
        this._httpClient = _httpClient;
        // Public
        this.search = '';
        this.apiData = [];
        this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.onIsBookmarkOpenChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.getSearchData();
    }
    /**
     * Get Search Data
     */
    SearchService.prototype.getSearchData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/search-data').subscribe(function (response) {
                _this.apiData = response;
                _this.onApiDataChange.next(_this.apiData);
                resolve(_this.apiData);
            }, reject);
        });
    };
    SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
    return SearchService;
}());



/***/ }),

/***/ 903:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/auth/service */ 81004);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/media.service */ 42826);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);















var _c0 = function () { return ["/"]; };
function NavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.coreConfig.app.appName);
} }
function NavbarComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavbarComponent_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.toggleSidebar("menu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", "menu");
} }
var _c1 = function () { return ["/pages/authentication/login-v2"]; };
var NavbarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {AuthenticationService} _authenticationService
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {CoreMediaService} _coreMediaService
     * @param {MediaObserver} _mediaObserver
     * @param {TranslateService} _translateService
     */
    function NavbarComponent(_router, _authenticationService, _coreConfigService, _coreMediaService, _coreSidebarService, _mediaObserver, _translateService) {
        var _this = this;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._coreConfigService = _coreConfigService;
        this._coreMediaService = _coreMediaService;
        this._coreSidebarService = _coreSidebarService;
        this._mediaObserver = _mediaObserver;
        this._translateService = _translateService;
        this.isFixed = false;
        this.windowScrolled = false;
        this._authenticationService.currentUser.subscribe(function (x) { return (_this.currentUser = x); });
        this.languageOptions = {
            en: {
                title: 'English',
                flag: 'us'
            },
            fr: {
                title: 'French',
                flag: 'fr'
            },
            de: {
                title: 'German',
                flag: 'de'
            },
            pt: {
                title: 'Portuguese',
                flag: 'pt'
            }
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding
    NavbarComponent.prototype.onWindowScroll = function () {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) &&
            this.coreConfig.layout.navbar.type == 'navbar-static-top' &&
            this.coreConfig.layout.type == 'horizontal') {
            this.windowScrolled = true;
        }
        else if ((this.windowScrolled && window.pageYOffset) ||
            document.documentElement.scrollTop ||
            document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    };
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    NavbarComponent.prototype.toggleSidebar = function (key) {
        this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    };
    /**
     * Set the language
     *
     * @param language
     */
    NavbarComponent.prototype.setLanguage = function (language) {
        // Set the selected language for the navbar on change
        this.selectedLanguage = language;
        // Use the selected language id for translations
        this._translateService.use(language);
        this._coreConfigService.setConfig({ app: { appLanguage: language } }, { emitEvent: true });
    };
    /**
     * Toggle Dark Skin
     */
    NavbarComponent.prototype.toggleDarkSkin = function () {
        var _this = this;
        // Get the current skin
        this._coreConfigService
            .getConfig()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll))
            .subscribe(function (config) {
            _this.currentSkin = config.layout.skin;
        });
        // Toggle Dark skin with prevSkin skin
        this.prevSkin = localStorage.getItem('prevSkin');
        if (this.currentSkin === 'dark') {
            this._coreConfigService.setConfig({ layout: { skin: this.prevSkin ? this.prevSkin : 'default' } }, { emitEvent: true });
        }
        else {
            localStorage.setItem('prevSkin', this.currentSkin);
            this._coreConfigService.setConfig({ layout: { skin: 'dark' } }, { emitEvent: true });
        }
    };
    /**
     * Logout method
     */
    NavbarComponent.prototype.logout = function () {
        this._authenticationService.logout();
        this._router.navigate(['/pages/authentication/login-v2']);
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the currentUser details from localStorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // Subscribe to the config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
            _this.horizontalMenu = config.layout.type === 'horizontal';
            _this.hiddenMenu = config.layout.menu.hidden === true;
            _this.currentSkin = config.layout.skin;
            // Fix: for vertical layout if default navbar fixed-top than set isFixed = true
            if (_this.coreConfig.layout.type === 'vertical') {
                setTimeout(function () {
                    if (_this.coreConfig.layout.navbar.type === 'fixed-top') {
                        _this.isFixed = true;
                    }
                }, 0);
            }
        });
        // Horizontal Layout Only: Add class fixed-top to navbar below large screen
        if (this.coreConfig.layout.type == 'horizontal') {
            // On every media(screen) change
            this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
                var isFixedTop = _this._mediaObserver.isActive('bs-gt-xl');
                if (isFixedTop) {
                    _this.isFixed = false;
                }
                else {
                    _this.isFixed = true;
                }
            });
        }
        // Set the selected language from default languageOptions
        this.selectedLanguage = lodash__WEBPACK_IMPORTED_MODULE_0__.find(this.languageOptions, {
            id: this._translateService.currentLang
        });
    };
    /**
     * On destroy
     */
    NavbarComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_3__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService)); };
    NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostVars: 4, hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fixed-top", ctx.isFixed)("navbar-static-style-on-scroll", ctx.windowScrolled);
        } }, decls: 35, vars: 28, consts: [["class", "navbar-header d-xl-block d-none", 4, "ngIf"], [1, "navbar-container", "d-flex", "content"], [1, "bookmark-wrapper", "d-flex", "align-items-center"], ["class", "nav navbar-nav d-xl-none", 4, "ngIf"], [1, "nav-item", "d-none", "d-lg-block"], ["type", "button", 1, "nav-link", "nav-link-style", "btn", 3, "click"], [1, "ficon", "font-medium-5", "feather", 3, "ngClass"], [1, "nav", "navbar-nav", "align-items-center", "ml-auto"], ["ngbDropdown", "", 1, "nav-item", "dropdown-user"], ["id", "dropdown-user", "ngbDropdownToggle", "", "id", "navbarUserDropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "dropdown-user-link"], [1, "user-nav", "d-sm-flex", "d-none"], [1, "user-name", "font-weight-bolder"], [1, "user-status"], [1, "avatar"], ["src", "../../../../assets/images/portrait/small/avatar-s-11.jpg", "alt", "avatar", "height", "40", "width", "40", 1, "round"], [1, "avatar-status-online"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarUserDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["ngbDropdownItem", "", 3, "routerLink"], [3, "data-feather"], [1, "dropdown-divider"], [1, "navbar-header", "d-xl-block", "d-none"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", "width", "36", 3, "src"], [1, "brand-text", "mb-0"], [1, "nav", "navbar-nav", "d-xl-none"], [1, "nav-link", "menu-toggle", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 8, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NavbarComponent_ul_3_Template, 4, 3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() { return ctx.toggleDarkSkin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "John Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Sample");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Inbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " Task");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Chats");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.horizontalMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.menu.hidden);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.currentSkin === "dark" ? "icon-sun" : "icon-moon");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("mr-50");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", "user");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("mr-50");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", "mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("mr-50");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", "check-square");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("mr-50");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", "message-square");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](27, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("mr-50");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", "power");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownItem, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__.FeatherIconDirective], styles: [".dropdown-menu-right {\n  right: 0 !important;\n  left: auto !important;\n}\n\n.touchspin-cart .touchspin-wrapper {\n  width: 6.4rem;\n}\n\n.touchspin-cart:focus-within {\n  box-shadow: none !important;\n}\n\napp-navbar-bookmark {\n  display: flex;\n}\n\n.navbar-static-style-on-scroll {\n  background-color: #fff !important;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px !important;\n}\n\n.dark-layout .navbar-container .search-input .search-list li.auto-suggestion:hover {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb21wb25lbnRzL192YXJpYWJsZXMtZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQVFFO0VBQ0UsYUFBQTtBQUxKOztBQU9FO0VBQ0UsMkJBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsMkRBQUE7QUFQRjs7QUFpQlk7RUFDRSx5QkNwQk87QURNckIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICdAY29yZS9zY3NzL2Jhc2UvY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xuXG4vLyBUbyBvcGVuIGRkIG9uIHJpZ2h0XG4uZHJvcGRvd24tbWVudS1yaWdodCB7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLy8gQ2FydCBUb3VjaHNwaW5cbi50b3VjaHNwaW4tY2FydCB7XG4gIC50b3VjaHNwaW4td3JhcHBlciB7XG4gICAgd2lkdGg6IDYuNHJlbTtcbiAgfVxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmFwcC1uYXZiYXItYm9va21hcmsge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vLyBBcHBseSBzdHlsZSBvbiB3aW5kb3cgc2Nyb2xsIGZvciBuYXZiYXIgc3RhdGljIHR5cGVcbi5uYXZiYXItc3RhdGljLXN0eWxlLW9uLXNjcm9sbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIERhcmsgTGF5b3V0XG4uZGFyay1sYXlvdXQge1xuICAubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAuc2VhcmNoLWxpc3Qge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgJi5hdXRvLXN1Z2dlc3Rpb24ge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktYmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy1kYXJrLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gZGFyayB0aGVtZSB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cclxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxyXG4vLyAgVElQOlxyXG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy9Cb2R5XHJcbiR0aGVtZS1kYXJrLWJvZHktYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjogIzNiNDI1MyAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjNDQ0MDVlICFkZWZhdWx0O1xyXG5cclxuLy9UeXBvZ3JhcGh5XHJcbiR0aGVtZS1kYXJrLWhlYWRpbmdzLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGV4dC1tdXRlZC1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuXHJcbi8vQ2FyZFxyXG4kdGhlbWUtZGFyay1jYXJkLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjQpO1xyXG5cclxuLy9JbnB1dFxyXG4kdGhlbWUtZGFyay1pbnB1dC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJvcmRlci1jb2xvcjogIzQwNDY1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYmc6ICMyNDIzM2EgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZy1kaXNhYmxlZDogIzFiMjMzNztcclxuXHJcbi8vVGFibGVcclxuJHRoZW1lLWRhcmstdGFibGUtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZzogIzM0M2Q1NSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1ob3Zlci1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtc3RyaXBlZC1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1kYXJrLW1vZGFsLWhlYWRlci1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXdpZGdldC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuIl19 */"], encapsulation: 2 });
    return NavbarComponent;
}());



/***/ }),

/***/ 17777:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.module */ 83742);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 903);
/* harmony import */ var app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component */ 75361);
/* harmony import */ var app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/navbar-search.component */ 6032);
/* harmony import */ var app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/navbar-notification.component */ 10578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);










var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule.ɵfac = function NavbarModule_Factory(t) { return new (t || NavbarModule)(); };
    NavbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NavbarModule });
    NavbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_1__.CoreTouchspinModule]] });
    return NavbarModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_4__.NavbarSearchComponent, app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_3__.NavbarBookmarkComponent, app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_5__.NavbarNotificationComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_1__.CoreTouchspinModule], exports: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent] }); })();


/***/ }),

/***/ 41724:
/*!**********************************************!*\
  !*** ./src/app/layout/custom-breakpoints.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomBreakPointsProvider": function() { return /* binding */ CustomBreakPointsProvider; }
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ 7736);

var BS_BREAKPOINTS = [
    { alias: 'bs-xs', overlapping: false, mediaQuery: '(max-width: 575.98px)', suffix: 'BsXs' },
    { alias: 'bs-sm', overlapping: false, mediaQuery: '(min-width: 576px) and (max-width: 767.98px)', suffix: 'BsSm' },
    { alias: 'bs-md', overlapping: false, mediaQuery: '(min-width: 768px) and (max-width: 991.98px)', suffix: 'BsMd' },
    { alias: 'bs-lg', overlapping: false, mediaQuery: '(min-width: 992px) and (max-width: 1199.98px)', suffix: 'BsLg' },
    { alias: 'bs-xl', overlapping: false, mediaQuery: '(min-width: 1200px)', suffix: 'BsXl' },
    { alias: 'bs-gt-sm', overlapping: false, mediaQuery: '(min-width: 576px)', suffix: 'BsGtSm' },
    { alias: 'bs-gt-md', overlapping: false, mediaQuery: '(min-width: 768px)', suffix: 'BsGtMd' },
    { alias: 'bs-gt-lg', overlapping: false, mediaQuery: '(min-width: 992px)', suffix: 'BsGtLg' },
    { alias: 'bs-gt-xl', overlapping: false, mediaQuery: '(min-width: 1200px)', suffix: 'BsGtXl' },
    { alias: 'bs-lt-sm', overlapping: false, mediaQuery: '(max-width: 575.98px)', suffix: 'BsLtSm' },
    { alias: 'bs-lt-md', overlapping: false, mediaQuery: '(max-width: 767.98px)', suffix: 'BsLtMd' },
    { alias: 'bs-lt-lg', overlapping: false, mediaQuery: '(max-width: 991.98px)', suffix: 'BsLtLg' },
    { alias: 'bs-lt-xl', overlapping: false, mediaQuery: '(max-width: 1199.98px)', suffix: 'BsLtXl' }
];
var CustomBreakPointsProvider = {
    provide: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
    useValue: BS_BREAKPOINTS,
    multi: true
};


/***/ }),

/***/ 38094:
/*!******************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutComponent": function() { return /* binding */ HorizontalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content/content.component */ 24714);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 903);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 92393);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 92223);











function HorizontalLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function HorizontalLayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function HorizontalLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 7);
} }
function HorizontalLayoutComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar", 9);
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background);
} }
function HorizontalLayoutComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 1, "app-navbar", 8);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
} }
var _c0 = function (a0, a1) { return [a0, a1]; };
function HorizontalLayoutComponent_ng_template_9_app_menu_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-menu", 13);
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c0, ctx_r11.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type + " " + ctx_r11.coreConfig.layout.navbar.backgroundColor : ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type, ctx_r11.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
} }
var _c1 = function (a0) { return [a0]; };
function HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "core-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collapsed", ctx_r12.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r12.coreConfig.layout.menu.collapsed === true ? "" : "expanded"));
} }
function HorizontalLayoutComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_template_9_app_menu_1_Template, 1, 4, "app-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template, 2, 4, "core-sidebar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
} }
function HorizontalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "footer", 17);
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r13.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type + " " + ctx_r13.coreConfig.layout.footer.backgroundColor : ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type);
} }
function HorizontalLayoutComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 16);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
} }
var HorizontalLayoutComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function HorizontalLayoutComponent(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    HorizontalLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    HorizontalLayoutComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    HorizontalLayoutComponent.ɵfac = function HorizontalLayoutComponent_Factory(t) { return new (t || HorizontalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService)); };
    HorizontalLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HorizontalLayoutComponent, selectors: [["horizontal-layout"]], decls: 13, vars: 4, consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar horizontal-header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "horizontal-header-navbar", "navbar-expand-lg", "navbar", "navbar-fixed", "align-items-center", "navbar-shadow", "navbar-brand-center", 3, "ngClass"], [1, "horizontal-menu-wrapper"], ["menuType", "horizontal-menu", "class", "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-shadow menu-border d-none d-xl-block", 3, "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-light menu-accordio menu-shadow d-xl-none", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["menuType", "horizontal-menu", 1, "header-navbar", "navbar-expand-sm", "navbar", "navbar-horizontal", "navbar-shadow", "menu-border", "d-none", "d-xl-block", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-light", "menu-accordio", "menu-shadow", "d-xl-none", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]], template: function HorizontalLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontalLayoutComponent_div_4_Template, 1, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "content");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HorizontalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, HorizontalLayoutComponent_ng_template_9_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, HorizontalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent], styles: ["/*=========================================================================================\n\tFile Name: horizontal-menu.scss\n\tDescription: A classic horizontal menu for easy navigation & support all devices.\n\tIt support light & dark version, flipped layout, right side icons, borders menu for\n\titem separation.\n\t----------------------------------------------------------------------------------------\n\tItem Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard TemplateTheme\n\tAuthor: PIXINVENT\n\tAuthor URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.horizontal-menu .content {\n  margin-left: 0;\n}\n.horizontal-menu .content.show-overlay .content-overlay {\n  z-index: 998 !important;\n}\n.horizontal-menu .navbar.header-navbar .navbar-container {\n  padding: 0.8rem 2rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n  min-height: 4.45rem;\n}\n.horizontal-menu footer {\n  position: static;\n}\n.horizontal-menu .horizontal-menu-wrapper {\n  position: fixed;\n  top: 62px;\n  z-index: 990;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  padding: 0 1rem;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header {\n  display: none;\n}\n.horizontal-menu .header-navbar {\n  background: #fff;\n  z-index: 999 !important;\n  line-height: 1;\n  min-height: auto;\n}\n.horizontal-menu .header-navbar.navbar-light {\n  background: #fff;\n}\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  left: 0;\n  top: 62px;\n  width: calc(100vw - (100vw - 100%) - calc(2rem * 2));\n  background: #fff;\n}\n.horizontal-menu .header-navbar .navbar-container {\n  border-radius: 0.357rem;\n}\n.horizontal-menu .header-navbar.navbar-fixed {\n  position: fixed;\n  width: 100%;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  position: absolute;\n  left: calc(50% - 56px);\n  padding: 0;\n  z-index: 1000;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  display: flex;\n  align-items: center;\n  margin-right: 0;\n  font-size: inherit;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {\n  max-width: 36px;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  color: #7367f0;\n  padding-left: 1rem;\n  margin-bottom: 0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  left: 0.4rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before {\n  display: none;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  min-width: 215px;\n  border: none;\n  margin-top: 0;\n  min-height: 52px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled {\n  pointer-events: none !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a {\n  color: #b8c2cc;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  left: auto;\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  right: 1rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  font-size: 1rem;\n  padding-top: 0.68rem;\n  padding-bottom: 0.68rem;\n  display: flex;\n  align-items: center;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu {\n  position: relative;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  left: auto !important;\n  right: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  position: absolute;\n  top: 0 !important;\n  left: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu i,\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu svg {\n  height: 11px !important;\n  width: 11px !important;\n  font-size: 11px !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li {\n  padding-top: 0.857rem;\n  padding-bottom: 0.857rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  transition: all 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  background-color: transparent;\n  color: #6e6b7b;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transform: translateX(5px);\n  transition: transform 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  background: #f8f8f8;\n  color: #7367f0;\n  font-weight: 500;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .open.active > a {\n  color: #6e6b7b;\n  font-weight: normal;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i,\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-right: 0.5rem;\n  height: 17px;\n  width: 17px;\n  font-size: 1.2rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  padding: 0.715rem 1.25rem;\n  display: flex;\n  margin-right: 0.715rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:hover > a {\n  background: #f8f8f8;\n  border-radius: 4px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));\n  box-shadow: 0px 0px 6px 1px rgba(115, 103, 240, 0.6);\n  color: #fff;\n  border-radius: 4px;\n}\n.horizontal-menu .navigation-header {\n  font-family: inherit;\n  color: #929292;\n  padding: 8px 20px;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.horizontal-menu .navbar-dark .nav-item.active > a {\n  border-bottom: 2px solid #7367f0;\n  background-color: #313c50;\n}\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n  height: 80px;\n}\n@media (min-width: 1200px) {\n  .horizontal-layout.navbar-floating .header-navbar-shadow {\n    top: 45px;\n  }\n}\n.horizontal-layout.navbar-floating:not(.blank-page) .app-content {\n  padding: calc(2rem + 4.45rem* 2 + 1.3rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n  background-repeat: repeat-x;\n}\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n  }\n}\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n  }\n}\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n  }\n}\n.horizontal-layout.navbar-sticky .app-content {\n  padding: calc(2rem + 4.45rem* 2) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-sticky .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  left: 0;\n  top: 62px;\n  background-color: #fff;\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n  }\n}\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n  }\n}\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n  }\n}\n.horizontal-layout.navbar-static .app-content {\n  padding: calc(2rem + 4.45rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-static .content {\n  min-height: calc(100% - calc(4.45rem + calc(3.35rem + 0.2rem)));\n}\n.horizontal-layout.navbar-static .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper {\n  position: relative;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar {\n  background: #fff;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  left: 0;\n  width: 100%;\n}\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n  }\n}\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n  }\n}\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n  }\n}\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n  }\n}\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n  }\n}\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( 1vh * 100 - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n    height: calc( 1vh * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n  }\n}\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a i,\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a svg {\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n    display: none;\n  }\n  .horizontal-layout .header-navbar {\n    background: #fff;\n  }\n  .horizontal-layout .app-content {\n    padding: calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n@media (max-width: 575.98px) {\n  html body.horizontal-layout.navbar-static .app-content {\n    padding: calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n.horizontal-layout .horizontal-header-navbar .navbar-container ul.navbar-nav li.dropdown .dropdown-menu {\n  top: 41px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy9ob3Jpem9udGFsLW1lbnUuc2NzcyIsImhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvbXBvbmVudHMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWl4aW5zL21haW4tbWVudS1taXhpbi5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWVudS9tZW51LXR5cGVzL3ZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUFDRSxjQUFBO0FDVko7QURZTTtFQUNFLHVCQUFBO0FDVlI7QURpQkk7RUFDRSxvQkFBQTtBQ2ZOO0FEb0JJO0VBQ0UsbUJFUm1CO0FEVnpCO0FEc0JFO0VBQ0UsZ0JBQUE7QUNwQko7QUQwQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDeEJKO0FEMkJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUN6QlI7QUQyQk07RUFDRSxhQUFBO0FDekJSO0FENkJFO0VBQ0UsZ0JHeERJO0VIeURKLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDM0JKO0FENEJJO0VBQ0UsZ0JHN0RFO0FGbUNSO0FEOEJJO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxvREFBQTtFQUNBLGdCR3JFRTtBRnlDUjtBRDhCSTtFQUNFLHVCRzRDVTtBRnhFaEI7QUQ4Qkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQzVCTjtBRCtCTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQzdCUjtBRDhCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzVCVjtBRDZCVTtFQUNFLGVBQUE7QUMzQlo7QUQrQlU7RUFDRSxjR2xGSDtFSG1GRyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDN0JaO0FEc0NVO0VBQ0UsWUFBQTtFQUNBLCtTQUFBO0FDcENaO0FEMENVO0VBQ0UsNFNBQUE7QUN4Q1o7QUQ0Q007RUFDRSxhQUFBO0FDMUNSO0FENENNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDMUNSO0FEMkNRO0VBQ0UsK0JBQUE7QUN6Q1Y7QUQwQ1U7RUFDRSxjRzlIRDtBRnNGWDtBRDJDUTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxnVEFBQTtBQzFDVjtBRDRDUTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDMUNWO0FENENRO0VBQ0Usa0JBQUE7QUMxQ1Y7QUQ2Q1k7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDM0NkO0FEK0NVO0VBQ0UsbUJHekVGO0FGNEJWO0FEZ0RVO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDOUNaO0FEK0NZOztFQUVFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQzdDZDtBRGtETTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNoRFI7QURvRFk7RUFDRSx5QkFBQTtBQ2xEZDtBRG9EWTtFQUNFLDZCQUFBO0VBQ0EsY0duR0Q7QUZpRGI7QURtRGM7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0FDakRoQjtBRHFEVTtFQUNFLG1CRzVHRjtFSDZHRSxjRzFMSDtFSDJMRyxnQkFBQTtBQ25EWjtBRHVEYztFQUNFLGNHbEhIO0VIbUhHLG1CQUFBO0FDckRoQjtBRDBEUTs7RUFFRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN4RFY7QUQwRFE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3hEVjtBRDJEVTtFQUNFLG1CR3ZJRjtFSHdJRSxrQkFBQTtBQ3pEWjtBRDZEVTtFQUNFLHNFQUFBO0VBQ0Esb0RBQUE7RUFDQSxXR3pPSjtFSDBPSSxrQkFBQTtBQzNEWjtBRGtFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDaEVKO0FEcUVNO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQ25FUjtBRDZFSTtFQUNFLFlBQUE7QUMxRU47QUc3SUk7RUowTkU7SUFDRSxTQUFBO0VDMUVOO0FBQ0Y7QUQ2RU07RUFFRSxxREFBQTtBQzVFUjtBRCtFSTtFQUNFLGlJQUFBO0VBTUEsMkJBQUE7QUNsRk47QUQ2RlE7O0VLaFBOLHFGQUFBO0VBTUEseUZBQUE7RUFBQSxvR0FBQTtBSmtKRjtBR2pKSTtFSnlPSTs7SUtqT0YsK0VBQUE7SUFHQSxtRkFBQTtJQUFBLDhGQUFBO0VKNElKO0FBQ0Y7QURpR1E7O0VLaFFOLGtGQUFBO0VBTUEsc0ZBQUE7RUFBQSxpR0FBQTtBSjhKRjtBRzdKSTtFSnlQSTs7SUtqUEYsNEVBQUE7SUFHQSxnRkFBQTtJQUFBLDJGQUFBO0VKd0pKO0FBQ0Y7QURxR1E7O0VLaFJOLHFGQUFBO0VBTUEseUZBQUE7RUFBQSxvR0FBQTtBSjBLRjtBR3pLSTtFSnlRSTs7SUtqUUYsK0VBQUE7SUFHQSxtRkFBQTtJQUFBLDhGQUFBO0VKb0tKO0FBQ0Y7QUQyR0k7RUFDRSw0Q0FBQTtBQ3pHTjtBRDJHSTtFQUNFLHlCR25RSTtFSG9RSixnQkFBQTtBQ3pHTjtBRDRHTTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0Esc0JHcFdBO0VIcVdBLDhDQUFBO0FDMUdSO0FEaUhROztFS3JUTixtRkFBQTtFQU1BLHVGQUFBO0VBQUEsa0dBQUE7QUptTUY7QUdsTUk7RUo4U0k7O0lLdFNGLCtFQUFBO0lBR0EsbUZBQUE7SUFBQSw4RkFBQTtFSjZMSjtBQUNGO0FEcUhROztFS3JVTixnRkFBQTtFQU1BLG9GQUFBO0VBQUEsK0ZBQUE7QUorTUY7QUc5TUk7RUo4VEk7O0lLdFRGLDRFQUFBO0lBR0EsZ0ZBQUE7SUFBQSwyRkFBQTtFSnlNSjtBQUNGO0FEeUhROztFS3JWTixtRkFBQTtFQU1BLHVGQUFBO0VBQUEsa0dBQUE7QUoyTkY7QUcxTkk7RUo4VUk7O0lLdFVGLCtFQUFBO0lBR0EsbUZBQUE7SUFBQSw4RkFBQTtFSnFOSjtBQUNGO0FEOEhJO0VBQ0UseUNBQUE7QUM1SE47QUQ4SEk7RUFDRSwrREFBQTtBQzVITjtBRDhISTtFQUNFLHlCRzFVSTtFSDJVSixnQkFBQTtBQzVITjtBRDhISTtFQUNFLGtCQUFBO0FDNUhOO0FENkhNO0VBQ0UsZ0JHMWFBO0FGK1NSO0FENkhRO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUMzSFY7QURrSVE7O0VLOVhOLGtHQUFBO0VBTUEsc0dBQUE7RUFBQSxpSEFBQTtBSjJQRjtBRzFQSTtFSnVYSTs7SUsvV0YsOEZBQUE7SUFHQSxrR0FBQTtJQUFBLDZHQUFBO0VKcVBKO0FBQ0Y7QURzSVE7O0VLOVlOLGdGQUFBO0VBTUEsb0ZBQUE7RUFBQSwrRkFBQTtBSnVRRjtBR3RRSTtFSnVZSTs7SUsvWEYsNEVBQUE7SUFHQSxnRkFBQTtJQUFBLDJGQUFBO0VKaVFKO0FBQ0Y7QUQwSVE7O0VLOVpOLG1GQUFBO0VBTUEsdUZBQUE7RUFBQSxrR0FBQTtBSm1SRjtBR2xSSTtFSnVaSTs7SUsvWUYsK0VBQUE7SUFHQSxtRkFBQTtJQUFBLDhGQUFBO0VKNlFKO0FBQ0Y7QURrSlE7O0VLbGJOLGdGQUFBO0VBTUEsb0ZBQUE7RUFBQSwrRkFBQTtBSitSRjtBRzlSSTtFSjJhSTs7SUtuYUYsNEVBQUE7SUFHQSxnRkFBQTtJQUFBLDJGQUFBO0VKeVJKO0FBQ0Y7QURzSlE7O0VLbGNOLDZFQUFBO0VBTUEsaUZBQUE7RUFBQSw0RkFBQTtBSjJTRjtBRzFTSTtFSjJiSTs7SUtuYkYseUVBQUE7SUFHQSw2RUFBQTtJQUFBLHdGQUFBO0VKcVNKO0FBQ0Y7QUQwSlE7O0VLbGROLGdGQUFBO0VBTUEsb0ZBQUE7RUFBQSwrRkFBQTtBSnVURjtBR3RUSTtFSjJjSTs7SUtuY0YsNEVBQUE7SUFHQSxnRkFBQTtJQUFBLDJGQUFBO0VKaVRKO0FBQ0Y7QURvS2M7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDbEtoQjtBR25VSTtFSm9mSTtJQUNFLGFBQUE7RUM3S1I7RURpTEU7SUFDRSxnQkd4akJFO0VGeVlOO0VEaUxFO0lBQ0UsaUdBQUE7RUMvS0o7QUFDRjtBRy9VSTtFSnFnQkY7SUFDRSwyRkFBQTtFQ25MRjtBQUNGO0FLN1pBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUROQSxjQ08yQjtBTG9aN0I7QUtoWkk7RURSRixXQUFBO0VBQ0EsWUg2Qm9CO0FEOFh0QjtBSy9ZRTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUpha0I7RUlabEIsWUFBQTtBTGlaSjtBSzVZVTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FMOFlaO0FLN1lZOztFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUxnWmQ7QUloYUk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJDaUJ1QztFRGhCdkMsWUNnQnVDO0VEZnZDLFdDZXVDO0VEZHZDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUprYU47QUkvWk07RUFDRSx3QkFBQTtBSmlhUjtBS3haUTtFQUNFLGFBQUE7QUwwWlY7QUtwWkk7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1REFBQTtBTHNaTjtBSzVkQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VETkEsY0NPMkI7QUxtZDdCO0FLL2NJO0VEUkYsV0FBQTtFQUNBLFlINkJvQjtBRDZidEI7QUs5Y0U7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlKYWtCO0VJWmxCLFlBQUE7QUxnZEo7QUszY1U7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTDZjWjtBSzVjWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FMK2NkO0FJL2RJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQ2lCdUM7RURoQnZDLFlDZ0J1QztFRGZ2QyxXQ2V1QztFRGR2QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FKaWVOO0FJOWRNO0VBQ0Usd0JBQUE7QUpnZVI7QUt2ZFE7RUFDRSxhQUFBO0FMeWRWO0FLbmRJO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdURBQUE7QUxxZE47QUF2aEJBO0VBQ0Usb0JBQUE7QUF5aEJGIiwiZmlsZSI6Imhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdEZpbGUgTmFtZTogaG9yaXpvbnRhbC1tZW51LnNjc3NcclxuXHREZXNjcmlwdGlvbjogQSBjbGFzc2ljIGhvcml6b250YWwgbWVudSBmb3IgZWFzeSBuYXZpZ2F0aW9uICYgc3VwcG9ydCBhbGwgZGV2aWNlcy5cclxuXHRJdCBzdXBwb3J0IGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgYm9yZGVycyBtZW51IGZvclxyXG5cdGl0ZW0gc2VwYXJhdGlvbi5cclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0SXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlVGhlbWVcclxuXHRBdXRob3I6IFBJWElOVkVOVFxyXG5cdEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXHJcbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xyXG5cclxuLy8gSG9yaXpvbnRhbCBNZW51XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uaG9yaXpvbnRhbC1tZW51IHtcclxuICAvLyBDb250ZW50IEFyZWEgbWFyZ2luXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAmLnNob3ctb3ZlcmxheSB7XHJcbiAgICAgIC5jb250ZW50LW92ZXJsYXkge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBOYXZiYXIgY29udGFpbmVyIHNwYWNpbmcgZm9yIGFsbFxyXG4gIC5uYXZiYXIuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDAuOHJlbSAjeyRjb250ZW50LXBhZGRpbmd9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcclxuICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgbWluLWhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLy9cclxuICAvLyBOYXZiYXIgSGVhZGVyIC8vXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0vL1xyXG4gIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICB6LWluZGV4OiA5OTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAmLm5hdmJhci1saWdodCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOYXZiYXItIEJyYW5kIENlbnRlciAtIExvZ29cclxuICAgICYubmF2YmFyLWhvcml6b250YWwuZmxvYXRpbmctbmF2IHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiA2MnB4O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICogMikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgfVxyXG4gICAgJi5uYXZiYXItZml4ZWQge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJi5uYXZiYXItYnJhbmQtY2VudGVyIHtcclxuICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDU2cHgpOyAvLyBsZWZ0IDUwJSAtIGJyYW5kaW5nIHdpZHRoXHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAuYnJhbmQtbG9nbyBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQnJhbmQgVGV4dCBTY3NzXHJcbiAgICAgICAgICAuYnJhbmQtdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubmF2YmFyLWhvcml6b250YWwge1xyXG4gICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICYuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICR3aGl0ZSksICcjJywgJyUyMycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMTVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIC5kaXNhYmxlZCB7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS02MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICAgIC8vIGNvbnRlbnQ6ICdcXGU4NDQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkYm9keS1jb2xvciksICcjJywgJyUyMycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDAuNjhyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC42OHJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24tc3VibWVudSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgJi5vcGVuTGVmdCB7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC44NTdyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuODU3cmVtO1xyXG5cclxuICAgICAgICA+IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XHJcbiAgICAgICAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm9wZW4ge1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGksXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzE1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjcxNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKCRwcmltYXJ5LCAxKSwgcmdiYSgkcHJpbWFyeSwgMC43KSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjYpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZGFyayB7XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAmLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzYzUwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1sYXlvdXQge1xyXG4gIC8vIG5hdmJhciBmbG9hdGluZ1xyXG4gICYubmF2YmFyLWZsb2F0aW5nIHtcclxuICAgIC8vIEhvcml6b250YWwgbGF5b3V0IG5hdmJhciBzaGFkb3cgcG9zaXRpb24gYW5kIGhlaWdodCBmaXhcclxuICAgIC5oZWFkZXItbmF2YmFyLXNoYWRvdyB7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeGwpIHtcclxuICAgICAgLmhlYWRlci1uYXZiYXItc2hhZG93IHtcclxuICAgICAgICB0b3A6IDQ1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bm90KC5ibGFuay1wYWdlKSB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDkuNzVyZW07XHJcbiAgICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skbmF2YmFyLWhlaWdodH0qIDIgKyAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSkgI3skY29udGVudC1wYWRkaW5nfSAwICN7JGNvbnRlbnQtcGFkZGluZ307IC8vICogMiAgYXMgd2UgaGF2ZSAyIG5hdmJhciAobWVudSArIG5hdmJhcikgIGluIGhvcml6b250YWwgbGF5b3V0LlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC45NSkgNDQlLFxyXG4gICAgICAgIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC40NikgNzMlLFxyXG4gICAgICAgIHJnYmEoJHdoaXRlLCAwKSAxMDAlXHJcbiAgICAgICk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgICAgLm5hdmJhci1ob3Jpem9udGFsLmZsb2F0aW5nLW5hdiB7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogJGZsb2F0aW5nLW5hdi1tYXJnaW47XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwIGNvbnRlbnQgYXJlYSB3cmFwcGVyIGhlaWdodFxyXG4gICAgJi5mb290ZXItc3RhdGljIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItaGlkZGVuIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGZsb2F0aW5nLW5hdi1tYXJnaW59LFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1maXhlZCB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmb290ZXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgI3skZmxvYXRpbmctbmF2LW1hcmdpbn0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG5hdmJhciBzdGlja3lcclxuICAmLm5hdmJhci1zdGlja3kge1xyXG4gICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skbmF2YmFyLWhlaWdodH0qIDIpICN7JGNvbnRlbnQtcGFkZGluZ30gMCAjeyRjb250ZW50LXBhZGRpbmd9O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XHJcbiAgICAgIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyLmZpeGVkLXRvcCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDYycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcCBjb250ZW50IGFyZWEgd3JhcHBlciBoZWlnaHRcclxuICAgICYuZm9vdGVyLXN0YXRpYyB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmb290ZXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItaGlkZGVuIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWZpeGVkIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIG5hdmJhciBzdGF0aWNcclxuICAmLm5hdmJhci1zdGF0aWMge1xyXG4gICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0pICN7JGNvbnRlbnQtcGFkZGluZ30gMCAjeyRjb250ZW50LXBhZGRpbmd9O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSBjYWxjKCN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9ICsgY2FsYygjeyRmb290ZXItaGVpZ2h0fSArIDAuMnJlbSkpKTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgLy8gPyBBZGRlZCBmb3IgYW5ndWxhciBmaXggYXMgaXQgYWRkcyB0aGlzIGNsYXNzIHRvIG5hdmJhciBpbiBoeiBsYXlvdXRcclxuICAgICAgICAmLm5hdmJhci1zdGF0aWMtdG9wIHtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFwcCBjb250ZW50IGFyZWEgd3JhcHBlciBoZWlnaHRcclxuICAgICYuZm9vdGVyLXN0YXRpYyB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxyXG4gICAgICAgICAgICBjYWxjKCN7JGZvb3Rlci1oZWlnaHR9ICsgMC4ycmVtKSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItaGlkZGVuIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWZpeGVkIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBuYXZiYXIgSGlkZGVuXHJcbiAgJi5uYXZiYXItaGlkZGVuIHtcclxuICAgICYuZm9vdGVyLXN0YXRpYyB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1maXhlZCB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnZlcnRpY2FsLW92ZXJsYXktbWVudSB7XHJcbiAgICAjbWFpbi1tZW51LW5hdmlnYXRpb24ge1xyXG4gICAgICA+IGxpIHtcclxuICAgICAgICA+IHVsIHtcclxuICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGx5IG1lbnUgJiBjb250ZW50IHdpZHRoIGZvciBtZCBhbmQgZG93biBzY3JlZW5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgLmhvcml6b250YWwtbGF5b3V0IHtcclxuICAgICYuaG9yaXpvbnRhbC1tZW51IHtcclxuICAgICAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcclxuICAgICAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JG5hdmJhci1oZWlnaHR9ICsgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSkgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAwXHJcbiAgICAgICAgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgLy8gRm9yIHN0YXRpYyBuYXZiYXJcclxuICBodG1sIGJvZHkuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuYXBwLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtICsgI3skbmF2YmFyLWhlaWdodH0pIGNhbGMoI3skY29udGVudC1wYWRkaW5nfSAtIDAuOHJlbSkgMFxyXG4gICAgICBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gLSAwLjhyZW0pICFpbXBvcnRhbnQ7IC8vIC0gMC44cmVtIHRvIHJlZHVjZSBwYWRkaW5nIGluIHNtYWxsIHNjcmVlblxyXG4gIH1cclxufVxyXG4vLyBJbXBvcnQgdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MgZm9yIHNtYWxsIHNjcmVlbiBzdXBwb3J0XHJcbkBpbXBvcnQgJ3ZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzJztcclxuIiwiQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWVudS9tZW51LXR5cGVzL2hvcml6b250YWwtbWVudS5zY3NzJztcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy92ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzcyc7XG5cbi8vIERyb3Bkb3duIHBvc2l0aW9uIGZvciBob3Jpem9udGFsIGxheW91dCBvbmx5XG4uaG9yaXpvbnRhbC1sYXlvdXQgLmhvcml6b250YWwtaGVhZGVyLW5hdmJhciAubmF2YmFyLWNvbnRhaW5lciB1bC5uYXZiYXItbmF2IGxpLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiA0MXB4ICFpbXBvcnRhbnQ7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXHJcbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIGNvbXBvbmVudCB2YXJpYWJsZVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kYmFzZS1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XHJcbiRib2R5LWRpcmVjdGlvbjogbHRyICFkZWZhdWx0OyAvLyBEZWZhdWx0IGx0ciwgY2hhbmdlIGl0IHRvIHJ0bCBmb3IgUmlnaHQgVG8gTGVmdCBzdXBwb3J0LlxyXG4kY29udGVudC1wYWRkaW5nOiAycmVtICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBDb2xvcnNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kbmF2LWNvbXBvbmVudC1ib3JkZXItY29sb3I6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG4kc3dpcGVyLWJnOiAjZjJmNGY0ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBOYXZiYXJcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kbmF2YmFyLWhlaWdodDogNC40NXJlbSAhZGVmYXVsdDtcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XHJcbiRmb290ZXItaGVpZ2h0OiAzLjM1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBNYWluIE1lbnVcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9tYWluIG1lbnUgZGFya1xyXG4kbWVudS1kYXJrLWNvbG9yOiAjZGNkY2RjICFkZWZhdWx0O1xyXG4kbWVudS1kYXJrLWJnLWNvbG9yOiAjMTAxNjNhICFkZWZhdWx0O1xyXG5cclxuJG1lbnUtcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweCAhZGVmYXVsdDtcclxuJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDIwcHggIWRlZmF1bHQ7XHJcbiRtZW51LXRoaXJkLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHggIWRlZmF1bHQ7XHJcbiRtZW51LWZvcnRoLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHggIWRlZmF1bHQ7XHJcblxyXG4vLyB2ZXJ0aWNhbCBtZW51XHJcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNjBweCAhZGVmYXVsdDtcclxuJG1lbnUtY29sbGFwc2VkLXdpZHRoOiA4MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBTaWRlYmFyXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRzaWRlYmFyLXdpZHRoOiAyNjBweCAhZGVmYXVsdDtcclxuJGNoYXQtc2lkZWJhci13aWR0aDogMzYwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBBdmF0YXJcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRhdmF0YXItc2l6ZTogMzJweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZS1sZzogMTdweCAhZGVmYXVsdDtcclxuXHJcbiRhdmF0YXItc2l6ZS14bDogNzBweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zaXplLWxnOiA1MHB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXNpemUtc206IDI0cHggIWRlZmF1bHQ7XHJcblxyXG4kYXZhdGFyLWJnOiAjYzNjM2MzO1xyXG4kYXZhdGFyLWdyb3VwLWJvcmRlcjogJHdoaXRlO1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIFByb2dyZXNzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRwcm9ncmVzcy1zaXplLXhsOiAxLjE0cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3Mtc2l6ZS1sZzogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1zaXplLW1kOiAwLjU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3Mtc2l6ZS1zbTogMC4xNDNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgRm9ybVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gJGlucHV0LWhlaWdodCwgJGlucHV0LWhlaWdodC1sZywgJGlucHV0LWhlaWdodC1zbSBhcmUgaW4gdmFyaWFibGVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUteGw6ICgkZm9udC1zaXplLWJhc2UgKyAwLjUpICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQteGw6IDEuNyAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXhzOiAxLjUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXkteGw6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC14bDogMC41cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS14czogMC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXhzOiAwLjI3NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzLXhsOiAwLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy14czogMC4xMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMteGw6ICRib3JkZXItcmFkaXVzLXhsICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy14czogJGJvcmRlci1yYWRpdXMteHMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0LXhsOiAoKCRmb250LXNpemUteGwgKiAkbGluZS1oZWlnaHQteGwpICsgKCRpbnB1dC1wYWRkaW5nLXkteGwgKiAyKSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQteHM6ICgoJGZvbnQtc2l6ZS14cyAqICRsaW5lLWhlaWdodC14cykgKyAoJGlucHV0LXBhZGRpbmcteS14cyAqIDIpKSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1zbTogKCgkZm9udC1zaXplLXNtICogJGxpbmUtaGVpZ2h0LXNtKSArICgkaW5wdXQtcGFkZGluZy15LXNtICogMikpICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEJsYW5rIFBhZ2UgQmcgQ29sb3JcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRibGFuay1iZy1jb2xvcjogI2VmZjJmNyAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBEYXRhIFRhYmxlcyBCZyBDb2xvclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGRhdGF0YWJsZS1iZy1jb2xvcjogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBTd2l0Y2hcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHN3aXRjaC1iZy1jb2xvcjogI2UyZTJlMiAhZGVmYXVsdDtcclxuJHN3aXRjaC1pbmRpY2F0b3ItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBUaW1lbGluZVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kdGltZWxpbmUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRpbWVsaW5lLXBvaW50LXNpemU6IDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itc2l6ZTogMTJweCAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itd3JhcHBlci1zaXplOiAyMHB4ICFkZWZhdWx0O1xyXG5cclxuJHRpbWVsaW5lLWl0ZW0tbWluLWhlaWdodDogNHJlbSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLWl0ZW0taWNvbi1mb250LXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGltZWxpbmUtZXZlbnQtdGltZS1zaXplOiAwLjg1cmVtICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtZXZlbnQtdGltZS1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS01MDogI2Y2ZjZmNiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxyXG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcclxuJGdyYXktMzAwOiAjZGFlMWU3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodFxyXG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjYjhjMmNjICFkZWZhdWx0OyAvLyAkZ3JheVxyXG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xyXG4kZ3JheS05MDA6ICMyYTJlMzAgIWRlZmF1bHQ7XHJcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxyXG5cclxuJHB1cnBsZTogIzczNjdmMCAhZGVmYXVsdDsgLy8kcHJpbWFyeVxyXG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcclxuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cclxuJG9yYW5nZTogI2ZmOWY0MyAhZGVmYXVsdDsgLy8kd2FybmluZ1xyXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcclxuXHJcbiRwcmltYXJ5OiAkcHVycGxlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xyXG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAkb3JhbmdlICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xyXG4kZGFyazogIzRiNGI0YiAhZGVmYXVsdDtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcclxuKSAhZGVmYXVsdDtcclxuLy8gc2Nzcy1kb2NzLWVuZCBjb250YWluZXItbWF4LXdpZHRoc1xyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAyNTogKFxyXG4gICAgICAkc3BhY2VyICogMC4yNVxyXG4gICAgKSxcclxuICAgIDUwOiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjVcclxuICAgICksXHJcbiAgICA3NTogKFxyXG4gICAgICAkc3BhY2VyICogMC43NVxyXG4gICAgKSxcclxuICAgIDE6IChcclxuICAgICAgJHNwYWNlclxyXG4gICAgKSxcclxuICAgIDI6IChcclxuICAgICAgJHNwYWNlciAqIDEuNVxyXG4gICAgKSxcclxuICAgIDM6IChcclxuICAgICAgJHNwYWNlciAqIDNcclxuICAgICksXHJcbiAgICA0OiAoXHJcbiAgICAgICRzcGFjZXIgKiAzLjVcclxuICAgICksXHJcbiAgICA1OiAoXHJcbiAgICAgICRzcGFjZXIgKiA0XHJcbiAgICApXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcbiRib2R5LWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogIzZlNmI3YiAhZGVmYXVsdDtcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lICFkZWZhdWx0O1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAycmVtICFkZWZhdWx0O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuMjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1zbTogMSAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcclxuJGJvcmRlci1jb2xvcjogI2ViZTlmMSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIHNoYWRvd1xyXG4kYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG4vLyBUeXBvZ3JhcGh5XHJcblxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSAhZGVmYXVsdDtcclxuXHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNjAwICFkZWZhdWx0O1xyXG5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDUgIWRlZmF1bHQ7XHJcblxyXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xyXG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjcxNCAhZGVmYXVsdDtcclxuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xyXG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI4NiAhZGVmYXVsdDtcclxuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4wNyAhZGVmYXVsdDtcclxuXHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogaW5oZXJpdCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWNvbG9yOiAjNWU1ODczICFkZWZhdWx0O1xyXG5cclxuJGRpc3BsYXkxLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuJGRpc3BsYXkyLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuJGRpc3BsYXkzLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuJGRpc3BsYXk0LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRsZWFkLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xNCAhZGVmYXVsdDtcclxuJGxlYWQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LW11dGVkOiAjYjliOWMzICFkZWZhdWx0O1xyXG4kaHItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gVGFibGVzXHJcblxyXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAwLjcycmVtICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWFjY2VudC1iZzogI2ZhZmFmYyAhZGVmYXVsdDtcclxuJHRhYmxlLWhvdmVyLWJnOiAjZjZmNmY5ICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1oZWFkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWRhcmstYmc6ICRkYXJrICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtdGgtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBCdXR0b25zICsgRm9ybXNcclxuJGJ0bi1wYWRkaW5nLXk6IDAuNzg2cmVtICFkZWZhdWx0O1xyXG4kYnRuLXBhZGRpbmcteDogMS41cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC40ODZyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC45ICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6IDAuOHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAxICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlciAwcyAhZGVmYXVsdDtcclxuXHJcbi8vIEZvcm1zXHJcbiRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICNkOGQ2ZGU7XHJcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjI4NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAwLjQzOHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktc206IDAuMTg4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNlZmVmZWYgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDIuNzE0cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiAyLjE0MnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1sZzogMy4yODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyLWNvbG9yIDBzICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAzcHggIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5LjUgNy41JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMC43NSA0LjM1IDQuMTggNi43NSA4Ljc1IDAuNzUnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiUyM2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjEuNXB4Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzRSUzQ2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjY1KTtcclxuXHJcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogbm9uZTtcclxuXHJcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDEwcHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwICFkZWZhdWx0O1xyXG4kemluZGV4LWRyb3Bkb3duOiAxMCAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS4yOHJlbSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bl9zcGFjaW5nOiAwLjVyZW07IC8vIGN1c3RvbVxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC44NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjU1NzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjQ0M3JlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjc0NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1mb250LXNpemUtbGc6IDEuMTRyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kcGFnaW5hdGlvbi1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIENhcmRzXHJcbiRjYXJkLXNwYWNlci15OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci14OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDAuNDI4cmVtICFkZWZhdWx0O1xyXG5cclxuLy9BbGVydHNcclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuNzFyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbi8vIExpc3QgZ3JvdXBcclxuXHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2IHRhYnNcclxuXHJcbiRuYXYtbGluay1wYWRkaW5nLXk6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogMC4yNSAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIG5hdmJhclxyXG5cclxuJGZsb2F0aW5nLW5hdi1tYXJnaW46IDEuM3JlbTtcclxuXHJcbi8vIFRvb2x0aXBzXHJcblxyXG4kdG9vbHRpcC1iZzogIzMyMzIzMiAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteDogMC43NzVyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAxICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1tYXgtd2lkdGg6IDIyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJHBvcG92ZXItaGVhZGVyLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDEuMjFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBUb2FzdHNcclxuXHJcbiR0b2FzdC1tYXgtd2lkdGg6IDM4MHB4ICFkZWZhdWx0O1xyXG4kdG9hc3QtcGFkZGluZy14OiAxLjE0cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtcGFkZGluZy15OiAwLjE1cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHRvYXN0LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJHRvYXN0LWJvcmRlci1yYWRpdXM6IDAuMjg2cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcclxuXHJcbiR0b2FzdC1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vIFByb2dyZXNzXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDVyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuODU3ICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWRjcnVtYnNcclxuXHJcbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6IDAuNnJlbSAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDAgIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcclxuXHJcbi8vIENhcm91c2VsXHJcblxyXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNSAxOCA5IDEyIDE1IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xyXG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHRcIj48cG9seWxpbmUgcG9pbnRzPVwiOSAxOCAxNSAxMiA5IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xyXG5cclxuLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNb2RhbFxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC44cmVtIDEuNHJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC44cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS40cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC14bDogOTQlICFkZWZhdWx0O1xyXG4kbW9kYWwtc206IDQwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gICAgU2xpZGUgSW4gTW9kYWxcclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLXNtOiAyNXJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aDogMjhyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtbGc6IDMwcmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIENsb3NlXHJcblxyXG4kY2xvc2UtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xyXG4kY2xvc2UtZm9udC13ZWlnaHQ6IDQwMCAhZGVmYXVsdDtcclxuJGNsb3NlLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb2RlXHJcblxyXG4kY29kZS1mb250LXNpemU6IDkwJSAhZGVmYXVsdDtcclxuJGtiZC1iZzogI2VlZSAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogM3JlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDFyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy9zdmcgY29sb3JcclxuJHN2Zy1jb2xvci1saWdodDogIzYyNjI2MiAhZGVmYXVsdDtcclxuXHJcbi8vIFNWRyBpY29uc1xyXG4vLyBGb3IgQnJlYWRjcnVtYlxyXG4kZG91YmxlLWNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb25zLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTMgMTcgMTggMTIgMTMgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgMTcgMTEgMTIgNiA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuLy8gQ2hldnJvbiBJY29uc1xyXG4kY2hldnJvbi1sZWZ0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tdXA6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxOCAxNSAxMiA5IDYgMTUnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi1kb3duOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcblxyXG4kZG93bmxvYWQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWRvd25sb2FkJyUzRSUzQ3BhdGggZD0nTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTQnJTNFJTNDL3BhdGglM0UlM0Nwb2x5bGluZSBwb2ludHM9JzcgMTAgMTIgMTUgMTcgMTAnJTNFJTNDL3BvbHlsaW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNScgeDI9JzEyJyB5Mj0nMyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJHJlbW92ZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXIteCclM0UlM0NsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGVjazogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzIwIDYgOSAxNyA0IDEyJyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNpcmNsZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaXJjbGUnJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDL3N2ZyUzRVwiO1xyXG4kaW5mb0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItaW5mbyclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE2JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOCcgeDI9JzEyLjAxJyB5Mj0nOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJHdhcm5pbmdJY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFsZXJ0LXRyaWFuZ2xlJyUzRSUzQ3BhdGggZD0nTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAweiclM0UlM0MvcGF0aCUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOScgeDI9JzEyJyB5Mj0nMTMnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE3JyB4Mj0nMTIuMDEnIHkyPScxNyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJG1lbnU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBmaWxsPSdub25lJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdjc3MtaTZkenExJyUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxMicgeDI9JzIxJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nNicgeDI9JzIxJyB5Mj0nNiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxOCcgeDI9JzIxJyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcblxyXG4kY2hhdC1iZy1saWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJekxqQXVNU3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJMFV4UlRCRk9UdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcclxuJGNoYXQtYmctZGFyazogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJekUzTVVFeU5EdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRmlsZSBOYW1lOiBtYWluLW1lbnUtbWl4aW4uc2Nzc1xyXG4vLyBEZXNjcmlwdGlvbjogQ29tbW9uIG1peGluIGZvciBtZW51cywgY29udGFpbiBkYXJrIGFuZCBsaWdodCB2ZXJzaW9uIHNjc3MuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBIZWFkZXIgbmF2YmFyIGNvbnRlbnQgYW5kIGJyYW5kIGV4cGFuZGVkICYgY29sbGFwc2VkIHN0YXRzXHJcbi8vIHNwYWNpbmcgYW5kIHNpemluZy5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBNaXhpbnMgZm9yIHRoZSBtZW51IGFuZCBuYXZiYXIgcG9zaXRpb24sIG1hcmdpbiBhbmQgd2lkdGggY2hhbmdlXHJcbkBtaXhpbiBtYWluLW1lbnUtd2lkdGgoJG1lbnUtd2lkdGgpIHtcclxuICBtYXJnaW4tbGVmdDogJG1lbnUtd2lkdGg7XHJcbn1cclxuQG1peGluIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LXdpZHRoKSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6ICRtZW51LXdpZHRoO1xyXG59XHJcbi8vIE1peGlucyBmb3IgdGhlIG1lbnUgc2hvdyBoaWRlIGJhc2VkIG9uIHdpZHRoXHJcbkBtaXhpbiB2ZXJ0aWNhbC1tZW51LXRyYW5zZm9ybS1zaG93KCR0cmFuc2Zvcm0td2lkdGgpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0cmFuc2Zvcm0td2lkdGgsIDAsIDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwZXJzcGVjdGl2ZTogMTAwMDtcclxufVxyXG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0taGlkZSgpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4vLyBNaXhpbnMgZm9yIHRoZSBzdWIgbWVudSBhcnJvd1xyXG5AbWl4aW4gdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KCRhcnJvdy1mb250LXNpemUpIHtcclxuICAmLmhhcy1zdWIge1xyXG4gICAgPiBhOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1yaWdodCwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkYXJyb3ctZm9udC1zaXplO1xyXG4gICAgICB3aWR0aDogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB0b3A6IDE0cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgICYub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSB7XHJcbiAgICAgID4gYTphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIFVzZWQgZm9yIGFwcHNcclxuQG1peGluIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAkY29udGVudFBhZGRpbmc6IDByZW0sXHJcbiAgJG5hdmJhckhlaWdodDogMHJlbSxcclxuICAkZm9vdGVySGVpZ2h0OiAwcmVtLFxyXG4gICRmbG9hdGluZ05hdk1hcmdpbjogMHJlbSxcclxuICAkaG9yaXpvbnRhbE1lbnVIZWlnaHQ6IDByZW0sXHJcbiAgJHNwYWNpbmdTaWRlczogMSxcclxuICAkaG9yaXpvbnRhbExheW91dDogZmFsc2VcclxuKSB7XHJcbiAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgMTAwdmggLVxyXG4gICAgICBjYWxjKFxyXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICApXHJcbiAgKTtcclxuICBoZWlnaHQ6IGNhbGMoXHJcbiAgICB2YXIoLS12aCwgMXZoKSAqIDEwMCAtXHJcbiAgICAgIGNhbGMoXHJcbiAgICAgICAgY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICsgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgIClcclxuICApO1xyXG4gIC8vIHJlc3BvbnNpdmUgc2l6ZSBoZWlnaHRcclxuICBAaWYgJGhvcml6b250YWxMYXlvdXQge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICAxMDB2aCAtIGNhbGMoY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAtIDAuOHJlbSkgKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9KVxyXG4gICAgICApO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICAgICAgY2FsYyhjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9IC0gMC44cmVtKSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIDEwMHZoIC1cclxuICAgICAgICAgIGNhbGMoXHJcbiAgICAgICAgICAgIGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSAtIGNhbGMoMC44cmVtICogI3skc3BhY2luZ1NpZGVzfSkpICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gK1xyXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICAgICAgY2FsYyhcclxuICAgICAgICAgICAgY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pIC0gY2FsYygwLjhyZW0gKiAjeyRzcGFjaW5nU2lkZXN9KSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArXHJcbiAgICAgICAgICAgICAgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMaWdodCAmIERhcmsgbWVudSBtaXhpblxyXG4vLyAkdGhlbWUtY29sb3IgOiBNZW51IHRleHQgY29sb3JcclxuLy8gJHRoZW1lLWJnICAgIDogTWVudSBiYWNrZ3JvdW5kIGNvbG9yXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWl4aW4gbWVudS10aGVtZSgkdGhlbWUtY29sb3IsICR0aGVtZS1iZykge1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDEwJSk7XHJcbiAgJG1haW4tbWVudS10b3Atb3Blbi1ob3Zlci1iZzogZGFya2VuKCR0aGVtZS1iZywgNiUpO1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpO1xyXG5cclxuICAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpOyAvLyRwcmltYXJ5XHJcblxyXG4gICRtYWluLW1lbnUtc3ViLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgJG1haW4tbWVudS1zdWItaG92ZXItY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCA0JSk7XHJcblxyXG4gICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuXHJcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XHJcblxyXG4gIC5uYXZpZ2F0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1iZztcclxuICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgIGNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgMjEuNSUpO1xyXG4gICAgICBtYXJnaW46IGNhbGMoI3skY29udGVudC1wYWRkaW5nfSArIDAuMjg2cmVtKSAwIDAuOHJlbSAoJGNvbnRlbnQtcGFkZGluZyArIDAuMnJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICYuaGFzLXN1YiB7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UsIGJhY2tncm91bmQgMHMsIGNvbG9yIDBzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogZGFya2VuKCR0aGVtZS1jb2xvciwgNC45JSk7XHJcbiAgICAgICAgcGFkZGluZzogJG1lbnUtcGFkZGluZztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuXHJcbiAgICAgICAgc3Bhbi5tZW51LXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDMwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNZW51IEl0ZW0gSG92ZXIgQW5pbWF0aW9uXHJcbiAgICBsaS5uYXYtaXRlbSB7XHJcbiAgICAgIGE6aG92ZXIgPiAqIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgfVxyXG4gICAgICB1bC5tZW51LWNvbnRlbnQge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGE6aG92ZXIgPiAqIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gbGkge1xyXG4gICAgICA+IGEge1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSxcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgID4gdWwgbGkge1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5oYXMtc3ViKSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5oYXMtc3ViIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgID4gdWwgPiBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZyksXHJcbiAgICAgICYuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS10b3Atb3Blbi1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5vcGVuKSB7XHJcbiAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSgkcHJpbWFyeSwgMSksIHJnYmEoJHByaW1hcnksIDAuNykpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taG92ZXItYmc7XHJcblxyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvdmVyLFxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAkbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJG1lbnUtdGhpcmQtbGV2ZWwtcGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaGFzLXN1YiB7XHJcbiAgICAgICAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3BlbixcclxuICAgICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2ZvciAycmQgbGV2ZWwgbWVudVxyXG4gICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAvL2ZvciAzcmQgbGV2ZWwgbWVudVxyXG4gICAgICAgICAgICAub3BlbiB7XHJcbiAgICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3ZlcixcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1ob3Zlci1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSgkcHJpbWFyeSwgMSksIHJnYmEoJHByaW1hcnksIDAuNykpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gTWVudSBjb250ZW50IGRpc3BsYXkgbWl4aW5cclxuLy8gJG1lbnUtZXhwYW5kZWQtd2lkdGggOiBFeHBhbmRlZCBtZW51IHdpZHRoXHJcbi8vICRtZW51LWNvbGxhcHNlZC13aWR0aDogQ29sbGFwc2VkIG1lbnUgd2lkdGhcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtaXhpbiBtZW51LWNvbnRlbnQoJG1lbnUtZXhwYW5kZWQtd2lkdGgsICRtZW51LWNvbGxhcHNlZC13aWR0aCwgJHRoZW1lLWNvbG9yLCAkdGhlbWUtYmcpIHtcclxuICAubWFpbi1tZW51LWNvbnRlbnQge1xyXG4gICAgPiBzcGFuLm1lbnUtdGl0bGUsXHJcbiAgICBhLm1lbnUtdGl0bGUge1xyXG4gICAgICByaWdodDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcbiAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgICB9XHJcbiAgICA+IHVsLm1lbnUtY29udGVudCB7XHJcbiAgICAgIGxlZnQ6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcclxuICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMHB4IDJweCByZ2JhKCRibGFjaywgMC4xKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjIpO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjAyKTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4IDhweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcclxuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxyXG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZpbHBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcclxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXHJcbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xyXG5cclxuLy8gVmVydGljYWwgT3ZlcmxheSBNZW51XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4udmVydGljYWwtb3ZlcmxheS1tZW51IHtcclxuICAvL0NvbnRlbnQgZXhwYW5kZWRcclxuICAuY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoMCk7XHJcbiAgfVxyXG4gIC8vTmF2YmFyIGV4cGFuZGVkXHJcbiAgLm5hdmJhciB7XHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgIEBpbmNsdWRlIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gTWFpbiBtZW51IGV4cGFuZGVkXHJcbiAgLm1haW4tbWVudSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbiAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICBsZWZ0OiAtKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuXHJcbiAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgID4gbGkge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICA+IHN2ZyxcclxuICAgICAgICAgID4gaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQyOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLm1lbnUtb3BlbiB7XHJcbiAgICAubWFpbi1tZW51IHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkbWVudS1leHBhbmRlZC13aWR0aCwgMCwgMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYubWVudS1oaWRlIHtcclxuICAgIC5tYWluLW1lbnUge1xyXG4gICAgICBAZXh0ZW5kIC5tYWluLW1lbnU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
    return HorizontalLayoutComponent;
}());



/***/ }),

/***/ 43809:
/*!***************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutModule": function() { return /* binding */ HorizontalLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 17777);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.module */ 92181);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 79287);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 73030);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 38094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);









var HorizontalLayoutModule = /** @class */ (function () {
    function HorizontalLayoutModule() {
    }
    HorizontalLayoutModule.ɵfac = function HorizontalLayoutModule_Factory(t) { return new (t || HorizontalLayoutModule)(); };
    HorizontalLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HorizontalLayoutModule });
    HorizontalLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_0__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_3__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule]] });
    return HorizontalLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HorizontalLayoutModule, { declarations: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalLayoutComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_0__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_3__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule], exports: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalLayoutComponent] }); })();


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": function() { return /* binding */ LayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/custom-breakpoints */ 41724);
/* harmony import */ var app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.module */ 16800);
/* harmony import */ var app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.module */ 43809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
    LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LayoutModule });
    LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_0__.CustomBreakPointsProvider], imports: [[_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule.withConfig({ disableDefaultBps: true }), app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_1__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_2__.HorizontalLayoutModule], app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_1__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_2__.HorizontalLayoutModule] });
    return LayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, { imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_1__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_2__.HorizontalLayoutModule], exports: [app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_1__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_2__.HorizontalLayoutModule] }); })();


/***/ }),

/***/ 80836:
/*!**************************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutComponent": function() { return /* binding */ VerticalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content/content.component */ 24714);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 903);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 92393);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 92223);











function VerticalLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function VerticalLayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function VerticalLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 7);
} }
function VerticalLayoutComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
var _c0 = function (a0, a1) { return [a0, a1]; };
function VerticalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar", 9);
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c0, ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type, ctx_r10.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
} }
function VerticalLayoutComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 4, "app-navbar", 8);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
} }
function VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "core-sidebar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collapsed", ctx_r11.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c0, ctx_r11.coreConfig.layout.skin === "semi-dark" || ctx_r11.coreConfig.layout.skin === "dark" ? "menu-dark" : "menu-light", ctx_r11.coreConfig.layout.menu.collapsed ? "" : "expanded"));
} }
function VerticalLayoutComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template, 2, 5, "core-sidebar", 10);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
} }
function VerticalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "footer", 14);
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r12.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type + " " + ctx_r12.coreConfig.layout.footer.backgroundColor : ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type);
} }
function VerticalLayoutComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 13);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
} }
var VerticalLayoutComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function VerticalLayoutComponent(_coreConfigService, _elementRef) {
        this._coreConfigService = _coreConfigService;
        this._elementRef = _elementRef;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    VerticalLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    VerticalLayoutComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    VerticalLayoutComponent.ɵfac = function VerticalLayoutComponent_Factory(t) { return new (t || VerticalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef)); };
    VerticalLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: VerticalLayoutComponent, selectors: [["vertical-layout"]], decls: 13, vars: 4, consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar navbar navbar-expand-lg align-items-center navbar-shadow", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "navbar", "navbar-expand-lg", "align-items-center", "navbar-shadow", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-accordio menu-shadow", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-accordio", "menu-shadow", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]], template: function VerticalLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VerticalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, VerticalLayoutComponent_div_4_Template, 1, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "content");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, VerticalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, VerticalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, VerticalLayoutComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, VerticalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarComponent, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent], styles: ["/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  margin-right: 1.1rem;\n  flex-shrink: 0;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n  box-shadow: none;\n  color: #565656;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n  left: 74px;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    animation: none;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy92ZXJ0aWNhbC1tZW51LnNjc3MiLCJ2ZXJ0aWNhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29tcG9uZW50cy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29yZS9taXhpbnMvbWFpbi1tZW51LW1peGluLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWVudS9tZW51LXR5cGVzL3ZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7MkZBQUE7QUFxQkk7RUFDRSxnRUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1ZOO0FEWVE7RUFDRSxtQkFBQTtBQ1ZWO0FEWVE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ1ZWO0FEY1U7O0VBRUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNaWjtBRHFCTTtFQUNFLFlFTmM7QURidEI7QURzQlk7RUFDRSxhQUFBO0FDcEJkO0FEMkJnQjs7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDeEJsQjtBRVZJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCSG1DMkM7RUdsQzNDLGNIa0MyQztFR2pDM0MsYUhpQzJDO0VHaEMzQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGWU47QUVUTTtFQUNFLHdCQUFBO0FGV1I7QURpQk07RUdoRUosa0JEaUNvQjtBRGlCdEI7QURzQlE7RUdyRU4sV0FBQTtFQUNBLFdEOEJxQjtBRG9CdkI7QURvQlU7RUFDRSxhQUFBO0FDbEJaO0FEb0JVO0VBQ0UsWUU3Q1U7RUY4Q1YsYUFBQTtBQ2xCWjtBRG1CWTtFQUNFLGNBQUE7QUNqQmQ7QURzQlE7RUFFRSxVRXREYTtBRGlDdkI7QUR5Qk07RUFDRSxXRTNEZTtBRG9DdkI7QUR5QlE7O0VBRUUsYUFBQTtBQ3ZCVjtBRDRCVTtFQUNFLG1CQUFBO0FDMUJaO0FEMkJZO0VBQ0UsYUFBQTtBQ3pCZDtBRDJCWTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDekJkO0FENkJZO0VBQ0UsaUNBQUE7QUMzQmQ7QUQ4QmM7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzVCaEI7QURtQ1E7RUFDRSxZRWpHWTtBRGdFdEI7QURvQ2M7RUFDRSxjQUFBO0FDbENoQjtBRG9DYztFQUNFLGFBQUE7QUNsQ2hCO0FFcEZJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCSHFINkM7RUdwSDdDLFlIb0g2QztFR25IN0MsV0htSDZDO0VHbEg3QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGc0ZOO0FFbkZNO0VBQ0Usd0JBQUE7QUZxRlI7QUR1QlU7RUFDRSxlQUFBO0FDckJaO0FEdUJVO0VBQ0UsY0FBQTtBQ3JCWjtBRDBCUTtFQUNFLGlCQUFBO0FDeEJWO0FEMEJZO0VBQ0UsYUFBQTtBQ3hCZDtBRDRCWTtFQUNFLHNCQUFBO0FDMUJkO0FEZ0NNOztFR3hLSixpQkRrQ3FCO0FEMEd2QjtBRGtDUTtFQUNFLG1EQUFBO0FDaENWO0FEbUNRO0VBQ0UsMENBQUE7RUFDQSxVQUFBO0FDakNWO0FEc0NJOztFQUVFLHNCQUFBO0FDcENOO0FEcUNNOztFQUNFLGFBQUE7QUNsQ1I7QUc5R0k7RUowSkU7SUFDRSxZRXZLYztFRCtIcEI7QUFDRjtBR3ZHSTtFSnlKRTtJQUNFLFFBQUE7RUMvQ047RURrRE07SUFDRSxRQUFBO0VDaERSO0VEbURJOztJRzNOSixjSDZOK0I7RUNqRC9CO0VEb0RNOztJQUVFLGNBQUE7RUNsRFI7RURvRE07SUFDRSxRQUFBO0VDbERSO0FBQ0Y7QUcxSEk7RUp1TEU7SUFDRSxRQUFBO0VDMUROO0VENkRNO0lBQ0UsUUFBQTtFQzNEUjtFRDhESTs7SUd6UEosY0gyUCtCO0VDNUQvQjtBQUNGO0FEaUVBO0VBQ0U7SUFDRSxVQUFBO0VDL0RGO0VEaUVBO0lBQ0UsVUFBQTtFQy9ERjtBQUNGO0FEaUVBO0VBQ0U7SUFDRSxVQUFBO0VDL0RGO0VEaUVBO0lBQ0UsVUFBQTtFQy9ERjtBQUNGO0FEa0VBO0VBQ0U7SUFDRSxlQUFBO0VDaEVGO0FBQ0Y7QUlwT0E7Ozs7Ozs7OzsyRkFBQTtBQXFCRTtFRk5BLGNFTzJCO0FKMk43QjtBSXZOSTtFRlJGLFdBQUE7RUFDQSxZRDZCb0I7QURxTXRCO0FJdE5FO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxZSGFrQjtFR1psQixZQUFBO0FKd05KO0FJbk5VOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUpxTlo7QUlwTlk7O0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBSnVOZDtBRXZPSTtFQUNFLFdBQUE7RUFDQSxnVEFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkVpQnVDO0VGaEJ2QyxZRWdCdUM7RUZmdkMsV0VldUM7RUZkdkMscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBRnlPTjtBRXRPTTtFQUNFLHdCQUFBO0FGd09SO0FJL05RO0VBQ0UsYUFBQTtBSmlPVjtBSTNOSTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHVEQUFBO0FKNk5OO0FJblNBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUZOQSxjRU8yQjtBSjBSN0I7QUl0Ukk7RUZSRixXQUFBO0VBQ0EsWUQ2Qm9CO0FEb1F0QjtBSXJSRTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUhha0I7RUdabEIsWUFBQTtBSnVSSjtBSWxSVTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FKb1JaO0FJblJZOztFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUpzUmQ7QUV0U0k7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJFaUJ1QztFRmhCdkMsWUVnQnVDO0VGZnZDLFdFZXVDO0VGZHZDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZ3U047QUVyU007RUFDRSx3QkFBQTtBRnVTUjtBSTlSUTtFQUNFLGFBQUE7QUpnU1Y7QUkxUkk7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1REFBQTtBSjRSTiIsImZpbGUiOiJ2ZXJ0aWNhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW1lbnUuc2Nzc1xyXG4gICAgRGVzY3JpcHRpb246IEEgY2xhc3NpYyB2ZXJ0aWNhbCBtb2Rlcm4gc3R5bGUgbWVudSB3aXRoIGV4cGFuZCBhbmQgY29sbG9wcyBzdXBwb3J0LiBJdCBzdXBwb3J0XHJcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmxpcHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxyXG4gICAgaXRlbSBzZXBhcmF0aW9uLlxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbiAgICBBdXRob3I6IFBJWElOVkVOVFxyXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcclxuXHJcbi8vIEltcG9ydCBmaXJzdCBtYWluIG1lbnUgbWl4aW5cclxuQGltcG9ydCAnLi4vLi4vbWl4aW5zL21haW4tbWVudS1taXhpbic7XHJcblxyXG4vLyAgVmVydGljYWwgbWVudVxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnZlcnRpY2FsLWxheW91dCB7XHJcbiAgJi52ZXJ0aWNhbC1tZW51LW1vZGVybiB7XHJcbiAgICAubWFpbi1tZW51IHtcclxuICAgICAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgYmFja2dyb3VuZCAwcztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgbGkgYSB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IGxpID4gYSBzdmcsXHJcbiAgICAgICAgPiBsaSA+IGEgaSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1Yi1tZW51IGljb24gc2l6ZVxyXG4gICAgICAgIC5tZW51LWNvbnRlbnQge1xyXG4gICAgICAgICAgPiBsaSA+IGEgc3ZnLFxyXG4gICAgICAgICAgPiBsaSA+IGEgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS40NXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vVmVydGljYWwgbWVudSBbRXhwYW5kZWRdXHJcbiAgICAmLm1lbnUtZXhwYW5kZWQge1xyXG4gICAgICAvLyBNYWluIG1lbnUgZXhwYW5kZWRcclxuICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgPiBpLFxyXG4gICAgICAgICAgICAgID4gc3ZnIHtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coJGZvbnQtc2l6ZS1iYXNlICsgMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9Db250ZW50IGV4cGFuZGVkXHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vVmVydGljYWwgbWVudSBbQ29sbGFwc2VkXVxyXG4gICAgJi5tZW51LWNvbGxhcHNlZCB7XHJcbiAgICAgIC8vTmF2YmFyIGNvbGxhcHNlZFxyXG4gICAgICAubmF2YmFyIHtcclxuICAgICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZW51LW5hdmJhci13aWR0aCgkbWVudS1jb2xsYXBzZWQtd2lkdGgpO1xyXG4gICAgICAgICAgLm1vZGVybi1uYXYtdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuZXhwYW5kZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZml4ZWQtdG9wIG5hdmJhciB3aGVuIG1lbnUtY29sbGFwc2VkXHJcbiAgICAgICAgJi5maXhlZC10b3AsXHJcbiAgICAgICAgJi5mbG9hdGluZy1uYXYge1xyXG4gICAgICAgICAgbGVmdDogJG1lbnUtY29sbGFwc2VkLXdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBNYWluIG1lbnUgY29sbGFwc2VkXHJcbiAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgIHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtd2lkdGg7XHJcblxyXG4gICAgICAgIC5uYXZiYXItaGVhZGVyIC5icmFuZC10ZXh0LFxyXG4gICAgICAgIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2hlbiBtZW51IGlzIGNvbGxhcHNlZCBhbmQgbW91c2UgaXMgbm90IGhvdmVyZWQgb3ZlciBtZW51XHJcbiAgICAgICAgJjpub3QoLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi4ycmVtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpIHtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2NTY1NjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdoZW4gbWVudSBpcyBjb2xsYXBzZWQgYnV0IG1vdXNlIGlzIGhvdmVyZWQgb3ZlciBtZW51XHJcbiAgICAgICAgJi5leHBhbmRlZCB7XHJcbiAgICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgID4gbGkubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFyLWhlYWRlciAuYnJhbmQtdGV4dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9OYXZpZ2F0aW9uIGNvbGxhcHNlZFxyXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgPiBsaS5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9CcmFuZCBjZW50ZXIgY29udGVudCBjb2xsYXBzZWRcclxuICAgICAgLmFwcC1jb250ZW50LFxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoJG1lbnUtY29sbGFwc2VkLXdpZHRoKTtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgICAgLy8gRmxvYXRpbmctbmF2YmFyXHJcbiAgICAgICAgJi5mbG9hdGluZy1uYXYge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDQuNHJlbSAtIDc0cHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOYXZiYXItc3RhdGljLXRvcFxyXG4gICAgICAgICYubmF2YmFyLXN0YXRpYy10b3Age1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDc0cHgpO1xyXG4gICAgICAgICAgbGVmdDogNzRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlLWljb24sXHJcbiAgICAuY29sbGFwc2UtdG9nZ2xlLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNDI1cmVtO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsbHkgbWVudSAmIGNvbnRlbnQgd2lkdGggZm9yIGxnIGFuZCB1cCBzY3JlZW5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gIC52ZXJ0aWNhbC1sYXlvdXQge1xyXG4gICAgJi52ZXJ0aWNhbC1tZW51LW1vZGVybiB7XHJcbiAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGx5IG1lbnUgJiBjb250ZW50IHdpZHRoIGZvciBtZCBhbmQgZG93biBzY3JlZW5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgLnZlcnRpY2FsLWxheW91dCB7XHJcbiAgICAmLnZlcnRpY2FsLW1lbnUtbW9kZXJuIHtcclxuICAgICAgLy8gbm90IHVzaW5nIHRoaXMgY2xhc3MgaW4gYmVsb3cgPCA5OTJcclxuICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50LFxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoMCk7XHJcbiAgICAgIH1cclxuICAgICAgJi5tZW51LWNvbGxhcHNlZCB7XHJcbiAgICAgICAgLmFwcC1jb250ZW50LFxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsbHkgbWVudSAmIGNvbnRlbnQgd2lkdGggZm9yIHNtIGFuZCBkb3duIHNjcmVlblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAudmVydGljYWwtbGF5b3V0IHtcclxuICAgICYudmVydGljYWwtbWVudS1tb2Rlcm4ge1xyXG4gICAgICAvLyBub3QgdXNpbmcgdGhpcyBjbGFzcyA8OTkyXHJcbiAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29udGVudCxcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLy8gSUUgU3BlY2lmaWMgQ1NTXHJcbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgLnZlcnRpY2FsLW1lbnUtbW9kZXJuLnZlcnRpY2FsLWxheW91dCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3BhbiB7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbi8vIEltcG9ydCB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2NzcyBmb3Igc21hbGwgc2NyZWVuIHN1cHBvcnRcclxuQGltcG9ydCAndmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MnO1xyXG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBjbGFzc2ljIHZlcnRpY2FsIG1vZGVybiBzdHlsZSBtZW51IHdpdGggZXhwYW5kIGFuZCBjb2xsb3BzIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmxpcHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwYXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSB7XG4gIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGJhY2tncm91bmQgMHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaSBhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSBzdmcsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgaSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5tZW51LWNvbnRlbnQgPiBsaSA+IGEgc3ZnLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5tZW51LWNvbnRlbnQgPiBsaSA+IGEgaSB7XG4gIG1hcmdpbi1yaWdodDogMS40NXJlbTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIHdpZHRoOiAxMXB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUge1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiAubmF2aWdhdGlvbi1oZWFkZXIgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaTpiZWZvcmUsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXNpemU6IDEuNDVyZW07XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmU2YjdiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMXJlbTtcbiAgaGVpZ2h0OiAxLjFyZW07XG4gIHdpZHRoOiAxLjFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5mb290ZXIge1xuICBtYXJnaW4tbGVmdDogMjYwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDgwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm5hdmJhciAubmF2YmFyLWhlYWRlci5leHBhbmRlZCB7XG4gIHdpZHRoOiAyNjBweDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm5hdmJhciAubmF2YmFyLWhlYWRlci5leHBhbmRlZCAubW9kZXJuLW5hdi10b2dnbGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm5hdmJhci5maXhlZC10b3AsIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm5hdmJhci5mbG9hdGluZy1uYXYge1xuICBsZWZ0OiA4MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IHtcbiAgd2lkdGg6IDgwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUgLm5hdmJhci1oZWFkZXIgLmJyYW5kLXRleHQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudTpub3QoLmV4cGFuZGVkKSAubmF2aWdhdGlvbi1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMi4ycmVtO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIC5uYXZpZ2F0aW9uLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudTpub3QoLmV4cGFuZGVkKSAubmF2aWdhdGlvbi1oZWFkZXIgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yODVyZW07XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW0gIWltcG9ydGFudDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudTpub3QoLmV4cGFuZGVkKSAubmF2aWdhdGlvbiBsaS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjNTY1NjU2O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5uYXZpZ2F0aW9uID4gbGkubmF2aWdhdGlvbi1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5uYXZpZ2F0aW9uID4gbGkubmF2aWdhdGlvbi1oZWFkZXIgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2aWdhdGlvbiBsaS5oYXMtc3ViID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmU2YjdiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmlnYXRpb24gbGkuaGFzLXN1Yi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2YmFyLWhlYWRlciAuYnJhbmQtdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubW9kZXJuLW5hdi10b2dnbGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkubmF2aWdhdGlvbi1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEge1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuYXBwLWNvbnRlbnQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5mb290ZXIge1xuICBtYXJnaW4tbGVmdDogODBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmhlYWRlci1uYXZiYXIuZmxvYXRpbmctbmF2IHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDQuNHJlbSAtIDc0cHgpO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuaGVhZGVyLW5hdmJhci5uYXZiYXItc3RhdGljLXRvcCB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA3NHB4KTtcbiAgbGVmdDogNzRweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLnRvZ2dsZS1pY29uLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuY29sbGFwc2UtdG9nZ2xlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNDI1cmVtO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAudG9nZ2xlLWljb246Zm9jdXMsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5jb2xsYXBzZS10b2dnbGUtaWNvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuY29udGVudCxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuYXBwLWNvbnRlbnQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuY29udGVudCxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgLnZlcnRpY2FsLW1lbnUtbW9kZXJuLnZlcnRpY2FsLWxheW91dCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3BhbiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBlcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAuY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSwgLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LWhpZGUgLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG4gIHdpZHRoOiAyNjBweDtcbiAgbGVmdDogLTI2MHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnLFxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaSB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnOmJlZm9yZSxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGk6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XG4gIGZvbnQtc2l6ZTogMS40MjlyZW07XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51Lm1lbnUtb3BlbiAubWFpbi1tZW51IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNjBweCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBlcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAuY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSwgLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LWhpZGUgLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG4gIHdpZHRoOiAyNjBweDtcbiAgbGVmdDogLTI2MHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnLFxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaSB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnOmJlZm9yZSxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGk6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XG4gIGZvbnQtc2l6ZTogMS40MjlyZW07XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51Lm1lbnUtb3BlbiAubWFpbi1tZW51IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNjBweCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG59IiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBjb21wb25lbnQgdmFyaWFibGVcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cclxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxyXG4vLyAgVElQOlxyXG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJGJhc2UtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xyXG4kYm9keS1kaXJlY3Rpb246IGx0ciAhZGVmYXVsdDsgLy8gRGVmYXVsdCBsdHIsIGNoYW5nZSBpdCB0byBydGwgZm9yIFJpZ2h0IFRvIExlZnQgc3VwcG9ydC5cclxuJGNvbnRlbnQtcGFkZGluZzogMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgQ29sb3JzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJG5hdi1jb21wb25lbnQtYm9yZGVyLWNvbG9yOiAjZGRkICFkZWZhdWx0O1xyXG5cclxuJHN3aXBlci1iZzogI2YyZjRmNCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgTmF2YmFyXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJG5hdmJhci1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xyXG4kZm9vdGVyLWhlaWdodDogMy4zNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgTWFpbiBNZW51XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vbWFpbiBtZW51IGRhcmtcclxuJG1lbnUtZGFyay1jb2xvcjogI2RjZGNkYyAhZGVmYXVsdDtcclxuJG1lbnUtZGFyay1iZy1jb2xvcjogIzEwMTYzYSAhZGVmYXVsdDtcclxuXHJcbiRtZW51LXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHggIWRlZmF1bHQ7XHJcbiRtZW51LXNlY29uZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAyMHB4ICFkZWZhdWx0O1xyXG4kbWVudS10aGlyZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xyXG4kbWVudS1mb3J0aC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xyXG5cclxuLy8gdmVydGljYWwgbWVudVxyXG4kbWVudS1leHBhbmRlZC13aWR0aDogMjYwcHggIWRlZmF1bHQ7XHJcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogODBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgU2lkZWJhclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kc2lkZWJhci13aWR0aDogMjYwcHggIWRlZmF1bHQ7XHJcbiRjaGF0LXNpZGViYXItd2lkdGg6IDM2MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgQXZhdGFyXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYXZhdGFyLXNpemU6IDMycHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHggIWRlZmF1bHQ7XHJcblxyXG4kYXZhdGFyLXNpemUteGw6IDcwcHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc2l6ZS1sZzogNTBweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zaXplLXNtOiAyNHB4ICFkZWZhdWx0O1xyXG5cclxuJGF2YXRhci1iZzogI2MzYzNjMztcclxuJGF2YXRhci1ncm91cC1ib3JkZXI6ICR3aGl0ZTtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBQcm9ncmVzc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kcHJvZ3Jlc3Mtc2l6ZS14bDogMS4xNHJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLXNpemUtbGc6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3Mtc2l6ZS1tZDogMC41N3JlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLXNpemUtc206IDAuMTQzcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEZvcm1cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vICRpbnB1dC1oZWlnaHQsICRpbnB1dC1oZWlnaHQtbGcsICRpbnB1dC1oZWlnaHQtc20gYXJlIGluIHZhcmlhYmxlc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXhsOiAoJGZvbnQtc2l6ZS1iYXNlICsgMC41KSAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXhsOiAxLjcgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC14czogMS41ICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy15LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgteGw6IDAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXkteHM6IDAuMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC14czogMC4yNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy14bDogMC4zNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteHM6IDAuMTJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXhsOiAkYm9yZGVyLXJhZGl1cy14bCAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMteHM6ICRib3JkZXItcmFkaXVzLXhzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodC14bDogKCgkZm9udC1zaXplLXhsICogJGxpbmUtaGVpZ2h0LXhsKSArICgkaW5wdXQtcGFkZGluZy15LXhsICogMikpICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXhzOiAoKCRmb250LXNpemUteHMgKiAkbGluZS1oZWlnaHQteHMpICsgKCRpbnB1dC1wYWRkaW5nLXkteHMgKiAyKSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtc206ICgoJGZvbnQtc2l6ZS1zbSAqICRsaW5lLWhlaWdodC1zbSkgKyAoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIpKSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBCbGFuayBQYWdlIEJnIENvbG9yXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYmxhbmstYmctY29sb3I6ICNlZmYyZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgRGF0YSBUYWJsZXMgQmcgQ29sb3JcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRkYXRhdGFibGUtYmctY29sb3I6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgU3dpdGNoXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRzd2l0Y2gtYmctY29sb3I6ICNlMmUyZTIgIWRlZmF1bHQ7XHJcbiRzd2l0Y2gtaW5kaWNhdG9yLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgVGltZWxpbmVcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHRpbWVsaW5lLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0aW1lbGluZS1wb2ludC1zaXplOiAxLjc1cmVtICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXNpemU6IDEycHggIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3ItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXdyYXBwZXItc2l6ZTogMjBweCAhZGVmYXVsdDtcclxuXHJcbiR0aW1lbGluZS1pdGVtLW1pbi1oZWlnaHQ6IDRyZW0gIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1pdGVtLWljb24tZm9udC1zaXplOiAwLjg1cmVtICFkZWZhdWx0O1xyXG5cclxuJHRpbWVsaW5lLWV2ZW50LXRpbWUtc2l6ZTogMC44NXJlbSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLWV2ZW50LXRpbWUtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRmlsZSBOYW1lOiBtYWluLW1lbnUtbWl4aW4uc2Nzc1xyXG4vLyBEZXNjcmlwdGlvbjogQ29tbW9uIG1peGluIGZvciBtZW51cywgY29udGFpbiBkYXJrIGFuZCBsaWdodCB2ZXJzaW9uIHNjc3MuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBIZWFkZXIgbmF2YmFyIGNvbnRlbnQgYW5kIGJyYW5kIGV4cGFuZGVkICYgY29sbGFwc2VkIHN0YXRzXHJcbi8vIHNwYWNpbmcgYW5kIHNpemluZy5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBNaXhpbnMgZm9yIHRoZSBtZW51IGFuZCBuYXZiYXIgcG9zaXRpb24sIG1hcmdpbiBhbmQgd2lkdGggY2hhbmdlXHJcbkBtaXhpbiBtYWluLW1lbnUtd2lkdGgoJG1lbnUtd2lkdGgpIHtcclxuICBtYXJnaW4tbGVmdDogJG1lbnUtd2lkdGg7XHJcbn1cclxuQG1peGluIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LXdpZHRoKSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6ICRtZW51LXdpZHRoO1xyXG59XHJcbi8vIE1peGlucyBmb3IgdGhlIG1lbnUgc2hvdyBoaWRlIGJhc2VkIG9uIHdpZHRoXHJcbkBtaXhpbiB2ZXJ0aWNhbC1tZW51LXRyYW5zZm9ybS1zaG93KCR0cmFuc2Zvcm0td2lkdGgpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0cmFuc2Zvcm0td2lkdGgsIDAsIDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwZXJzcGVjdGl2ZTogMTAwMDtcclxufVxyXG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0taGlkZSgpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4vLyBNaXhpbnMgZm9yIHRoZSBzdWIgbWVudSBhcnJvd1xyXG5AbWl4aW4gdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KCRhcnJvdy1mb250LXNpemUpIHtcclxuICAmLmhhcy1zdWIge1xyXG4gICAgPiBhOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1yaWdodCwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkYXJyb3ctZm9udC1zaXplO1xyXG4gICAgICB3aWR0aDogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB0b3A6IDE0cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgICYub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSB7XHJcbiAgICAgID4gYTphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIFVzZWQgZm9yIGFwcHNcclxuQG1peGluIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAkY29udGVudFBhZGRpbmc6IDByZW0sXHJcbiAgJG5hdmJhckhlaWdodDogMHJlbSxcclxuICAkZm9vdGVySGVpZ2h0OiAwcmVtLFxyXG4gICRmbG9hdGluZ05hdk1hcmdpbjogMHJlbSxcclxuICAkaG9yaXpvbnRhbE1lbnVIZWlnaHQ6IDByZW0sXHJcbiAgJHNwYWNpbmdTaWRlczogMSxcclxuICAkaG9yaXpvbnRhbExheW91dDogZmFsc2VcclxuKSB7XHJcbiAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgMTAwdmggLVxyXG4gICAgICBjYWxjKFxyXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICApXHJcbiAgKTtcclxuICBoZWlnaHQ6IGNhbGMoXHJcbiAgICB2YXIoLS12aCwgMXZoKSAqIDEwMCAtXHJcbiAgICAgIGNhbGMoXHJcbiAgICAgICAgY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICsgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgIClcclxuICApO1xyXG4gIC8vIHJlc3BvbnNpdmUgc2l6ZSBoZWlnaHRcclxuICBAaWYgJGhvcml6b250YWxMYXlvdXQge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICAxMDB2aCAtIGNhbGMoY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAtIDAuOHJlbSkgKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9KVxyXG4gICAgICApO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICAgICAgY2FsYyhjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9IC0gMC44cmVtKSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIDEwMHZoIC1cclxuICAgICAgICAgIGNhbGMoXHJcbiAgICAgICAgICAgIGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSAtIGNhbGMoMC44cmVtICogI3skc3BhY2luZ1NpZGVzfSkpICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gK1xyXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICAgICAgY2FsYyhcclxuICAgICAgICAgICAgY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pIC0gY2FsYygwLjhyZW0gKiAjeyRzcGFjaW5nU2lkZXN9KSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArXHJcbiAgICAgICAgICAgICAgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMaWdodCAmIERhcmsgbWVudSBtaXhpblxyXG4vLyAkdGhlbWUtY29sb3IgOiBNZW51IHRleHQgY29sb3JcclxuLy8gJHRoZW1lLWJnICAgIDogTWVudSBiYWNrZ3JvdW5kIGNvbG9yXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWl4aW4gbWVudS10aGVtZSgkdGhlbWUtY29sb3IsICR0aGVtZS1iZykge1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDEwJSk7XHJcbiAgJG1haW4tbWVudS10b3Atb3Blbi1ob3Zlci1iZzogZGFya2VuKCR0aGVtZS1iZywgNiUpO1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpO1xyXG5cclxuICAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpOyAvLyRwcmltYXJ5XHJcblxyXG4gICRtYWluLW1lbnUtc3ViLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgJG1haW4tbWVudS1zdWItaG92ZXItY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCA0JSk7XHJcblxyXG4gICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuXHJcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XHJcblxyXG4gIC5uYXZpZ2F0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1iZztcclxuICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgIGNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgMjEuNSUpO1xyXG4gICAgICBtYXJnaW46IGNhbGMoI3skY29udGVudC1wYWRkaW5nfSArIDAuMjg2cmVtKSAwIDAuOHJlbSAoJGNvbnRlbnQtcGFkZGluZyArIDAuMnJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICYuaGFzLXN1YiB7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UsIGJhY2tncm91bmQgMHMsIGNvbG9yIDBzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogZGFya2VuKCR0aGVtZS1jb2xvciwgNC45JSk7XHJcbiAgICAgICAgcGFkZGluZzogJG1lbnUtcGFkZGluZztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuXHJcbiAgICAgICAgc3Bhbi5tZW51LXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDMwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNZW51IEl0ZW0gSG92ZXIgQW5pbWF0aW9uXHJcbiAgICBsaS5uYXYtaXRlbSB7XHJcbiAgICAgIGE6aG92ZXIgPiAqIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgfVxyXG4gICAgICB1bC5tZW51LWNvbnRlbnQge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGE6aG92ZXIgPiAqIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gbGkge1xyXG4gICAgICA+IGEge1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSxcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgID4gdWwgbGkge1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5oYXMtc3ViKSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5oYXMtc3ViIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgID4gdWwgPiBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZyksXHJcbiAgICAgICYuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS10b3Atb3Blbi1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5vcGVuKSB7XHJcbiAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSgkcHJpbWFyeSwgMSksIHJnYmEoJHByaW1hcnksIDAuNykpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taG92ZXItYmc7XHJcblxyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvdmVyLFxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAkbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJG1lbnUtdGhpcmQtbGV2ZWwtcGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaGFzLXN1YiB7XHJcbiAgICAgICAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3BlbixcclxuICAgICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2ZvciAycmQgbGV2ZWwgbWVudVxyXG4gICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAvL2ZvciAzcmQgbGV2ZWwgbWVudVxyXG4gICAgICAgICAgICAub3BlbiB7XHJcbiAgICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3ZlcixcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1ob3Zlci1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSgkcHJpbWFyeSwgMSksIHJnYmEoJHByaW1hcnksIDAuNykpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gTWVudSBjb250ZW50IGRpc3BsYXkgbWl4aW5cclxuLy8gJG1lbnUtZXhwYW5kZWQtd2lkdGggOiBFeHBhbmRlZCBtZW51IHdpZHRoXHJcbi8vICRtZW51LWNvbGxhcHNlZC13aWR0aDogQ29sbGFwc2VkIG1lbnUgd2lkdGhcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtaXhpbiBtZW51LWNvbnRlbnQoJG1lbnUtZXhwYW5kZWQtd2lkdGgsICRtZW51LWNvbGxhcHNlZC13aWR0aCwgJHRoZW1lLWNvbG9yLCAkdGhlbWUtYmcpIHtcclxuICAubWFpbi1tZW51LWNvbnRlbnQge1xyXG4gICAgPiBzcGFuLm1lbnUtdGl0bGUsXHJcbiAgICBhLm1lbnUtdGl0bGUge1xyXG4gICAgICByaWdodDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcbiAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgICB9XHJcbiAgICA+IHVsLm1lbnUtY29udGVudCB7XHJcbiAgICAgIGxlZnQ6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcclxuICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMHB4IDJweCByZ2JhKCRibGFjaywgMC4xKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjIpO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjAyKTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4IDhweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzc1xyXG4gICAgRGVzY3JpcHRpb246IEEgb3ZlcmxheSBzdHlsZSB2ZXJ0aWNhbCBtZW51IHdpdGggc2hvdyBhbmQgaGlkZSBzdXBwb3J0LiBJdCBzdXBwb3J0XHJcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxyXG4gICAgaXRlbSBzZXBlcmF0aW9uLlxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbiAgICBBdXRob3I6IFBJWElOVkVOVFxyXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcclxuXHJcbi8vIEltcG9ydCBmaXJzdCBtYWluIG1lbnUgbWl4aW5cclxuQGltcG9ydCAnLi4vLi4vbWl4aW5zL21haW4tbWVudS1taXhpbic7XHJcblxyXG4vLyBWZXJ0aWNhbCBPdmVybGF5IE1lbnVcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUge1xyXG4gIC8vQ29udGVudCBleHBhbmRlZFxyXG4gIC5jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgwKTtcclxuICB9XHJcbiAgLy9OYXZiYXIgZXhwYW5kZWRcclxuICAubmF2YmFyIHtcclxuICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgQGluY2x1ZGUgbWVudS1uYXZiYXItd2lkdGgoJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBNYWluIG1lbnUgZXhwYW5kZWRcclxuICAubWFpbi1tZW51IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcclxuICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgIGxlZnQ6IC0oJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgPiBsaSB7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgID4gc3ZnLFxyXG4gICAgICAgICAgPiBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNDI5cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBAaW5jbHVkZSB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coMXJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYubWVudS1vcGVuIHtcclxuICAgIC5tYWluLW1lbnUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCRtZW51LWV4cGFuZGVkLXdpZHRoLCAwLCAwKTtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcclxuICAgIH1cclxuICB9XHJcbiAgJi5tZW51LWhpZGUge1xyXG4gICAgLm1haW4tbWVudSB7XHJcbiAgICAgIEBleHRlbmQgLm1haW4tbWVudTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
    return VerticalLayoutComponent;
}());



/***/ }),

/***/ 16800:
/*!***********************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutModule": function() { return /* binding */ VerticalLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 17777);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.module */ 92181);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 79287);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 73030);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 80836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);









var VerticalLayoutModule = /** @class */ (function () {
    function VerticalLayoutModule() {
    }
    VerticalLayoutModule.ɵfac = function VerticalLayoutModule_Factory(t) { return new (t || VerticalLayoutModule)(); };
    VerticalLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: VerticalLayoutModule });
    VerticalLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_3__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule]] });
    return VerticalLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](VerticalLayoutModule, { declarations: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_6__.VerticalLayoutComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_3__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule], exports: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_6__.VerticalLayoutComponent] }); })();


/***/ }),

/***/ 66083:
/*!***********************************************!*\
  !*** ./src/app/main/sample/home.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    HomeComponent.prototype.ngOnInit = function () {
        this.contentHeader = {
            headerTitle: 'Home',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Sample',
                        isLink: false
                    }
                ]
            }
        };
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 1, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "home-page"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pb-1"], [1, "card-text"], ["href", "https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation/", "target", "_blank"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-content-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Kick start your project \uD83D\uDE80");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "All the best for your new project.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Please make sure to read our ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Template Documentation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " to understand where to go from here and how to use our template. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
        } }, directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__.ContentHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return HomeComponent;
}());



/***/ }),

/***/ 92701:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/de.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'de',
    data: {
        SAMPLE: {
            AWESOME: 'Erstelle Awesome 🙌'
        }
    }
};


/***/ }),

/***/ 5046:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/en.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'en',
    data: {
        SAMPLE: {
            AWESOME: 'Create Awesome 🙌'
        }
    }
};


/***/ }),

/***/ 30800:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/fr.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'fr',
    data: {
        SAMPLE: {
            AWESOME: 'Créer génial 🙌'
        }
    }
};


/***/ }),

/***/ 65097:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/pt.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'pt',
    data: {
        SAMPLE: {
            AWESOME: 'Crie incrível 🙌'
        }
    }
};


/***/ }),

/***/ 62460:
/*!*************************************************!*\
  !*** ./src/app/main/sample/sample.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleComponent": function() { return /* binding */ SampleComponent; }
/* harmony export */ });
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ 5046);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/fr */ 30800);
/* harmony import */ var _i18n_de__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/de */ 92701);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/pt */ 65097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 63305);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








var SampleComponent = /** @class */ (function () {
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     */
    function SampleComponent(_coreTranslationService) {
        this._coreTranslationService = _coreTranslationService;
        this._coreTranslationService.translate(_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale, _i18n_de__WEBPACK_IMPORTED_MODULE_2__.locale, _i18n_pt__WEBPACK_IMPORTED_MODULE_3__.locale);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    SampleComponent.prototype.ngOnInit = function () {
        this.contentHeader = {
            headerTitle: 'Home',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Sample',
                        isLink: false
                    }
                ]
            }
        };
    };
    SampleComponent.ɵfac = function SampleComponent_Factory(t) { return new (t || SampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.CoreTranslationService)); };
    SampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SampleComponent, selectors: [["app-sample"]], decls: 16, vars: 4, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "sample-page"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pb-1"], [1, "card-text"]], template: function SampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-content-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "This is your second page.");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake drag\u00E9e chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o drag\u00E9e chocolate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 2, "SAMPLE.AWESOME"));
        } }, directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__.ContentHeaderComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SampleComponent;
}());



/***/ }),

/***/ 80394:
/*!**********************************************!*\
  !*** ./src/app/main/sample/sample.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleModule": function() { return /* binding */ SampleModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var _sample_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample.component */ 62460);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ 66083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);








var routes = [
    {
        path: 'sample',
        component: _sample_component__WEBPACK_IMPORTED_MODULE_2__.SampleComponent,
        data: { animation: 'sample' }
    },
    {
        path: 'home',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        data: { animation: 'home' }
    }
];
var SampleModule = /** @class */ (function () {
    function SampleModule() {
    }
    SampleModule.ɵfac = function SampleModule_Factory(t) { return new (t || SampleModule)(); };
    SampleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SampleModule });
    SampleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule]] });
    return SampleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SampleModule, { declarations: [_sample_component__WEBPACK_IMPORTED_MODULE_2__.SampleComponent, _home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule], exports: [_sample_component__WEBPACK_IMPORTED_MODULE_2__.SampleComponent, _home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent] }); })();


/***/ }),

/***/ 15132:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/de.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'de',
    data: {
        MENU: {
            HOME: 'Zuhause',
            SAMPLE: 'Stichprobe'
        }
    }
};


/***/ }),

/***/ 43831:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/en.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'en',
    data: {
        MENU: {
            HOME: 'Home',
            SAMPLE: 'Sample'
        }
    }
};


/***/ }),

/***/ 813:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/fr.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'fr',
    data: {
        MENU: {
            HOME: 'Maison',
            SAMPLE: 'Échantillon'
        }
    }
};


/***/ }),

/***/ 59595:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/pt.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
    lang: 'pt',
    data: {
        MENU: {
            HOME: 'Casa',
            SAMPLE: 'Amostra'
        }
    }
};


/***/ }),

/***/ 70318:
/*!******************************!*\
  !*** ./src/app/menu/menu.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": function() { return /* binding */ menu; }
/* harmony export */ });
var menu = [
    {
        id: 'home',
        title: 'Home',
        translate: 'MENU.HOME',
        type: 'item',
        icon: 'home',
        url: 'home'
    },
    {
        id: 'sample',
        title: 'Sample',
        translate: 'MENU.SAMPLE',
        type: 'item',
        icon: 'file',
        url: 'sample'
    }
];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 84187:
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hmrBootstrap": function() { return /* binding */ hmrBootstrap; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ 52577);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = (0,_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmr */ 84187);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
var bootstrap = function () { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map