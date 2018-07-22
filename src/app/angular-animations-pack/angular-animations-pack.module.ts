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

import { scaleAnimation } from "./ScaleAnimationPattern";
import { highlightAnimation } from "./HighlightAnimationPattern";
import { flyHorizontalAnimation } from "./FlyHorizontalAnimationPattern";
import { flyVerticalAnimation } from "./FlyVerticalAnimationPattern";
import { rotateAnimation } from "./RotateAnimationPattern";
import { fadeAnimation } from "./FadeAnimationPattern";

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: []
})
export class AngularAnimationsPackModule {}
export const highlightAnimationFn = highlightAnimation;
export const scaleAnimationFn = scaleAnimation;
export const flyHorizontalAnimationFn = flyHorizontalAnimation;
export const flyVerticalAnimationFn = flyVerticalAnimation;
export const rotateAnimationFn = rotateAnimation;
export const fadeAnimationFn = fadeAnimation;

