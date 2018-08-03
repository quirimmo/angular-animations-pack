import { highlightAnimation } from './lib/animations/HighlightAnimationPattern';
import { scaleAnimation } from './lib/animations/ScaleAnimationPattern';
import { flyHorizontalAnimation } from './lib/animations/FlyHorizontalAnimationPattern';
import { flyVerticalAnimation } from './lib/animations/FlyVerticalAnimationPattern';
import { rotateAnimation } from './lib/animations/RotateAnimationPattern';
import { fadeAnimation } from './lib/animations/FadeAnimationPattern';
import { bounceVerticalAnimation } from './lib/animations/BounceVerticalAnimationPattern';
import { bounceHorizontalAnimation } from './lib/animations/BounceHorizontalAnimationPattern';
import { fillWidthAnimation } from './lib/animations/FillWidthAnimationPattern';
import { appearAnimation } from './lib/animations/AppearAnimationPattern';
import { fillHeightAnimation } from './lib/animations/FillHeightAnimationPattern';
import { fadeInAnimation } from './lib/animations/FadeInAnimationPattern';
import { fadeOutAnimation } from './lib/animations/FadeOutAnimationPattern';
import { fadeInLeftAnimation } from './lib/animations/FadeInLeftAnimationPattern';
import { fadeInRightAnimation } from './lib/animations/FadeInRightAnimationPattern';
import { fadeInDownAnimation } from './lib/animations/FadeInDownAnimationPattern';
/*
 * Public API Surface of angular-animations-library
 */
export * from './lib/angular-animations-library.module';

export const highlightAnimationFn = highlightAnimation;
export const scaleAnimationFn = scaleAnimation;
export const flyHorizontalAnimationFn = flyHorizontalAnimation;
export const flyVerticalAnimationFn = flyVerticalAnimation;
export const rotateAnimationFn = rotateAnimation;
export const fadeAnimationFn = fadeAnimation;
export const fadeInAnimationFn = fadeInAnimation;
export const fadeInLeftAnimationFn = fadeInLeftAnimation;
export const fadeInRightAnimationFn = fadeInRightAnimation;
export const fadeInDownAnimationFn = fadeInDownAnimation;
export const fadeOutAnimationFn = fadeOutAnimation;
export const bounceVerticalAnimationFn = bounceVerticalAnimation;
export const bounceHorizontalAnimationFn = bounceHorizontalAnimation;
export const fillWidthAnimationFn = fillWidthAnimation;
export const fillHeightAnimationFn = fillHeightAnimation;
export const appearAnimationFn = appearAnimation;
