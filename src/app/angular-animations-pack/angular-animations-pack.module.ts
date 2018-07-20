import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

import highlightAnimationPattern from "./highlight-animation";
import scaleAnimationPattern from "./scale-animation";

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: []
})
export class AngularAnimationsPackModule {}
export const highlightAnimation = highlightAnimationPattern;
export const scaleAnimation = scaleAnimationPattern;
