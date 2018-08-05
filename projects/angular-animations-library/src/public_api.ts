import { highlightAnimation } from './lib/animations/HighlightAnimationPattern';
import { scaleAnimation } from './lib/animations/ScaleAnimationPattern';
import { flyHorizontalAnimation } from './lib/animations/FlyHorizontalAnimationPattern';
import { flyVerticalAnimation } from './lib/animations/FlyVerticalAnimationPattern';
import { rotateAnimation } from './lib/animations/RotateAnimationPattern';
import { bounceVerticalAnimation } from './lib/animations/BounceVerticalAnimationPattern';
import { bounceHorizontalAnimation } from './lib/animations/BounceHorizontalAnimationPattern';
import { fillWidthAnimation } from './lib/animations/FillWidthAnimationPattern';
import { appearAnimation } from './lib/animations/AppearAnimationPattern';
import { fillHeightAnimation } from './lib/animations/FillHeightAnimationPattern';

import { fadeAnimation } from './lib/animations/fading/FadeAnimationPattern';
import { fadeInAnimation } from './lib/animations/fading/FadeInAnimationPattern';
import { fadeOutAnimation } from './lib/animations/fading/FadeOutAnimationPattern';
import { fadeInLeftAnimation } from './lib/animations/fading/FadeInLeftAnimationPattern';
import { fadeInRightAnimation } from './lib/animations/fading/FadeInRightAnimationPattern';
import { fadeInDownAnimation } from './lib/animations/fading/FadeInDownAnimationPattern';
import { fadeOutLeftAnimation } from './lib/animations/fading/FadeOutLeftAnimationPattern';
import { fadeOutRightAnimation } from './lib/animations/fading/FadeOutRightAnimationPattern';
import { fadeOutUpAnimation } from './lib/animations/fading/FadeOutUpAnimationPattern';
import { fadeOutDownAnimation } from './lib/animations/fading/FadeOutDownAnimationPattern';

import { bounceInUpAnimation } from './lib/animations/BounceInUpAnimationPattern';
import { bounceOutUpAnimation } from './lib/animations/BounceOutUpAnimationPattern';
import { bounceInLeftAnimation } from './lib/animations/BounceInLeftAnimationPattern';
import { bounceInRightAnimation } from './lib/animations/BounceInRightAnimationPattern';
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
export const fadeOutLeftAnimationFn = fadeOutLeftAnimation;
export const fadeOutRightAnimationFn = fadeOutRightAnimation;
export const fadeOutUpAnimationFn = fadeOutUpAnimation;
export const fadeOutDownAnimationFn = fadeOutDownAnimation;

export const bounceVerticalAnimationFn = bounceVerticalAnimation;
export const bounceInUpAnimationFn = bounceInUpAnimation;
export const bounceInLeftAnimationFn = bounceInLeftAnimation;
export const bounceInRightAnimationFn = bounceInRightAnimation;
export const bounceOutUpAnimationFn = bounceOutUpAnimation;

export const bounceHorizontalAnimationFn = bounceHorizontalAnimation;
export const fillWidthAnimationFn = fillWidthAnimation;
export const fillHeightAnimationFn = fillHeightAnimation;
export const appearAnimationFn = appearAnimation;
