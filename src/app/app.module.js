"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_headerComponent_1 = require("./header/app.headerComponent");
var app_footerComponent_1 = require("./footer/app.footerComponent");
var app_navComponent_1 = require("./nav/app.navComponent");
var app_contentComponent_1 = require("./content/app.contentComponent");
var app_aboutComponent_1 = require("./content/about/app.aboutComponent");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'about', component: app_aboutComponent_1.aboutComponent },
                { path: '', component: app_contentComponent_1.contentComponent }
            ])],
        declarations: [app_component_1.AppComponent, app_headerComponent_1.headerComponent, app_footerComponent_1.footerComponent, app_navComponent_1.navComponent, app_contentComponent_1.contentComponent, app_aboutComponent_1.aboutComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map