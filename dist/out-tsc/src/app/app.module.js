import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { LoginComponent } from './login/login.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                WelcomeComponent,
                FooterComponent,
                MenuComponent,
                AboutusComponent,
                UtilitiesComponent,
                ServicesComponent,
                HomeComponent,
                ContactComponent,
                CareerComponent,
                LoginComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map