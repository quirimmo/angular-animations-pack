import { AnimationTriggerMetadata } from '@angular/animations';
import AbstractBounceAnimationPattern, { BounceAnimationParams, BounceAnimationStyleProperties } from './AbstractBounceAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export function bounceHorizontalAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceHorizontalAnimationPattern(
    'bounceHorizontal',
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition,
    params.animationStyleProperties
  ).getTrigger();
}

export function bounceInLeftAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '-100%', offset: 0 },
    { opacity: 0.5, translation: '20%', offset: 0.7 },
    { opacity: 1, translation: '0', offset: 1.0 }
  ];

  return new BounceHorizontalAnimationPattern('bounceInLeft', params.duration, true, false, BOUNCE_PARAMS).getTrigger();
}

export function bounceInRightAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '100%', offset: 0 },
    { opacity: 0.5, translation: '-20%', offset: 0.7 },
    { opacity: 1, translation: '0', offset: 1.0 }
  ];

  return new BounceHorizontalAnimationPattern('bounceInRight', params.duration, true, false, BOUNCE_PARAMS).getTrigger();
}

export function bounceOutLeftAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '0%', offset: 0 },
    { opacity: 0.5, translation: '20%', offset: 0.7 },
    { opacity: 1, translation: '-100%', offset: 1.0 }
  ];

  return new BounceHorizontalAnimationPattern('bounceOutLeft', params.duration, false, true, BOUNCE_PARAMS).getTrigger();
}

export function bounceOutRightAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '0%', offset: 0 },
    { opacity: 0.5, translation: '-20%', offset: 0.7 },
    { opacity: 1, translation: '100%', offset: 1.0 }
  ];

  return new BounceHorizontalAnimationPattern('bounceOutRight', params.duration, false, true, BOUNCE_PARAMS).getTrigger();
}

export class BounceHorizontalAnimationPattern extends AbstractBounceAnimationPattern {
  constructor(
    public trigger: string = 'bounceHorizontal',
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public includeEnterTransitions: boolean = false,
    public includeLeaveTransitions: boolean = false,
    public bounceAnimationParams: Array<BounceAnimationStyleProperties> = []
  ) {
    super(trigger, false, duration, includeEnterTransitions, includeLeaveTransitions, bounceAnimationParams);
  }
}
