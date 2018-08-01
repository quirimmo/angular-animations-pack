import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { highlightAnimation } from './animations/HighlightAnimationPattern';
import { scaleAnimation } from './animations/ScaleAnimationPattern';
import { flyHorizontalAnimation } from './animations/FlyHorizontalAnimationPattern';
import { flyVerticalAnimation } from './animations/FlyVerticalAnimationPattern';
import { rotateAnimation } from './animations/RotateAnimationPattern';
import { fadeAnimation } from './animations/FadeAnimationPattern';
import { bounceVerticalAnimation } from './animations/BounceVerticalAnimationPattern';
import { bounceHorizontalAnimation } from './animations/BounceHorizontalAnimationPattern';
import { fillWidthAnimation } from './animations/FillWidthAnimationPattern';
import { appearAnimation } from './animations/AppearAnimationPattern';
import { fillHeightAnimation } from './animations/FillHeightAnimationPattern';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [],
  exports: []
})
export class AngularAnimationsLibraryModule {}

export const highlightAnimationFn = highlightAnimation;
export const scaleAnimationFn = scaleAnimation;
export const flyHorizontalAnimationFn = flyHorizontalAnimation;
export const flyVerticalAnimationFn = flyVerticalAnimation;
export const rotateAnimationFn = rotateAnimation;
export const fadeAnimationFn = fadeAnimation;
export const bounceVerticalAnimationFn = bounceVerticalAnimation;
export const bounceHorizontalAnimationFn = bounceHorizontalAnimation;
export const fillWidthAnimationFn = fillWidthAnimation;
export const fillHeightAnimationFn = fillHeightAnimation;
export const appearAnimationFn = appearAnimation;
