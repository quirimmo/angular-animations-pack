import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { AngularAnimationsPackModule } from './angular-animations-pack/angular-animations-pack.module';

@NgModule({
  declarations: [AppComponent, HeroComponent, HeroListBasicComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AngularAnimationsPackModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
