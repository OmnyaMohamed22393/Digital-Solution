import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { WhatMakeUsDifferent } from './what-make-us-different/what-make-us-different';
import { OurExcellentServices } from './our-excellent-services/our-excellent-services';
import { SubscribeSection } from './subscribe-section/subscribe-section';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Header,
    HeroSection,
    WhatMakeUsDifferent,
    OurExcellentServices,
    SubscribeSection,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
