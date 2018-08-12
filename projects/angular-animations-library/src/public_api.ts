/*
 * Public API Surface of angular-animations-library
 */
export * from './lib/angular-animations-library.module';

// // Highlighting Animations
// // ================================================================
export { highlightAnimation } from './lib/animations/highlighting/HighlightAnimationPattern';

// Scaling Animations
// ================================================================
export { scaleAnimation } from './lib/animations/scaling/ScaleAnimationPattern';

// Flying Animations
// ================================================================
export { flyHorizontalAnimation } from './lib/animations/flying/FlyHorizontalAnimationPattern';
export { flyVerticalAnimation } from './lib/animations/flying/FlyVerticalAnimationPattern';

// Rotating Animations
// ================================================================
export { rotateAnimation } from './lib/animations/rotating/RotateAnimationPattern';

// Filling Animations
// ================================================================
export { fillWidthAnimation } from './lib/animations/filling/FillWidthAnimationPattern';
export { fillHeightAnimation } from './lib/animations/filling/FillHeightAnimationPattern';

// Appearing Animations
// ================================================================
export { appearAnimation } from './lib/animations/appearing/AppearAnimationPattern';

// Fading Animations
// ================================================================
export { fadeAnimation, fadeInAnimation, fadeOutAnimation } from './lib/animations/fading/FadeAnimationPattern';
export {
  fadeHorizontalTranslationAnimation,
  fadeInLeftAnimation,
  fadeInRightAnimation,
  fadeOutLeftAnimation,
  fadeOutRightAnimation
} from './lib/animations/fading/FadeHorizontalTranslationAnimationPattern';
export {
  fadeVerticalTranslationAnimation,
  fadeInUpAnimation,
  fadeInDownAnimation,
  fadeOutUpAnimation,
  fadeOutDownAnimation
} from './lib/animations/fading/FadeVerticalTranslationAnimationPattern';

// Bouncing Animations
// ================================================================
export {
  bounceHorizontalAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  bounceOutLeftAnimation,
  bounceOutRightAnimation
} from './lib/animations/bouncing/BounceHorizontalAnimationPattern';
export {
  bounceVerticalAnimation,
  bounceInUpAnimation,
  bounceInDownAnimation,
  bounceOutUpAnimation,
  bounceOutDownAnimation
} from './lib/animations/bouncing/BounceVerticalAnimationPattern';

// Folding Animations
// ================================================================
export { foldInAnimation, foldOutAnimation } from './lib/animations/folding/FoldingInAnimationPattern';
