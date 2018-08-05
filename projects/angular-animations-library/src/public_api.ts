import { highlightAnimation } from './lib/animations/highlighting/HighlightAnimationPattern';
import { scaleAnimation } from './lib/animations/scaling/ScaleAnimationPattern';
import { flyHorizontalAnimation } from './lib/animations/flying/FlyHorizontalAnimationPattern';
import { flyVerticalAnimation } from './lib/animations/flying/FlyVerticalAnimationPattern';
import { rotateAnimation } from './lib/animations/rotating/RotateAnimationPattern';
import { fillWidthAnimation } from './lib/animations/filling/FillWidthAnimationPattern';
import { fillHeightAnimation } from './lib/animations/filling/FillHeightAnimationPattern';
import { appearAnimation } from './lib/animations/appearing/AppearAnimationPattern';

import { fadeAnimation, fadeInAnimation, fadeOutAnimation } from './lib/animations/fading/FadeAnimationPattern';
import {
  fadeHorizontalTranslationAnimation,
  fadeInLeftAnimation,
  fadeInRightAnimation
} from './lib/animations/fading/FadeHorizontalTranslationAnimationPattern';
import { fadeInDownAnimation } from './lib/animations/fading/FadeInDownAnimationPattern';
import { fadeOutLeftAnimation } from './lib/animations/fading/FadeOutLeftAnimationPattern';
import { fadeOutRightAnimation } from './lib/animations/fading/FadeOutRightAnimationPattern';
import { fadeOutUpAnimation } from './lib/animations/fading/FadeOutUpAnimationPattern';
import { fadeOutDownAnimation } from './lib/animations/fading/FadeOutDownAnimationPattern';

import { bounceVerticalAnimation } from './lib/animations/bouncing/BounceVerticalAnimationPattern';
import { bounceHorizontalAnimation } from './lib/animations/bouncing/BounceHorizontalAnimationPattern';
import { bounceInUpAnimation } from './lib/animations/bouncing/BounceInUpAnimationPattern';
import { bounceOutUpAnimation } from './lib/animations/bouncing/BounceOutUpAnimationPattern';
import { bounceInLeftAnimation } from './lib/animations/bouncing/BounceInLeftAnimationPattern';
import { bounceInRightAnimation } from './lib/animations/bouncing/BounceInRightAnimationPattern';

/*
 * Public API Surface of angular-animations-library
 */
export * from './lib/angular-animations-library.module';

// Highlighting Animations
// ================================================================

export const highlightAnimationFn = highlightAnimation;

// Scaling Animations
// ================================================================

export const scaleAnimationFn = scaleAnimation;

// Flying Animations
// ================================================================

export const flyHorizontalAnimationFn = flyHorizontalAnimation;
export const flyVerticalAnimationFn = flyVerticalAnimation;

// Rotating Animations
// ================================================================

export const rotateAnimationFn = rotateAnimation;

// Fading Animations
// ================================================================

export const fadeAnimationFn = fadeAnimation;
export const fadeInAnimationFn = fadeInAnimation;
export const fadeOutAnimationFn = fadeOutAnimation;

export const fadeHorizontalTranslationAnimationFn = fadeHorizontalTranslationAnimation;
export const fadeInLeftAnimationFn = fadeInLeftAnimation;
export const fadeInRightAnimationFn = fadeInRightAnimation;
export const fadeInDownAnimationFn = fadeInDownAnimation;
export const fadeOutLeftAnimationFn = fadeOutLeftAnimation;
export const fadeOutRightAnimationFn = fadeOutRightAnimation;
export const fadeOutUpAnimationFn = fadeOutUpAnimation;
export const fadeOutDownAnimationFn = fadeOutDownAnimation;

// Bouncing Animations
// ================================================================

export const bounceVerticalAnimationFn = bounceVerticalAnimation;
export const bounceInUpAnimationFn = bounceInUpAnimation;
export const bounceInLeftAnimationFn = bounceInLeftAnimation;
export const bounceInRightAnimationFn = bounceInRightAnimation;
export const bounceOutUpAnimationFn = bounceOutUpAnimation;
export const bounceHorizontalAnimationFn = bounceHorizontalAnimation;

// Filling Animations
// ================================================================

export const fillWidthAnimationFn = fillWidthAnimation;
export const fillHeightAnimationFn = fillHeightAnimation;

// Appearing Animations
// ================================================================

export const appearAnimationFn = appearAnimation;
