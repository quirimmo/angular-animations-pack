import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { AngularAnimationsLibraryModule } from 'projects/angular-animations-library/src/public_api';
// import { AngularAnimationsLibraryModule } from 'angular-animations-library';

@NgModule({
  declarations: [AppComponent, HeroListBasicComponent],
  // imports: [BrowserModule, BrowserAnimationsModule, AngularAnimationsLibraryModule],
  imports: [BrowserModule, BrowserAnimationsModule, AngularAnimationsLibraryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
