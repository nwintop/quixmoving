import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from "./contact/contact.component";
import { CareerComponent } from './career/career.component';
import { LoginComponent } from './login/login.component';
var routes = [
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'utilities',
        component: UtilitiesComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'career',
        component: CareerComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map