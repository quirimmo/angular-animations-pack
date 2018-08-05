import { AnimationTriggerMetadata } from '@angular/animations';
import AbstractBounceAnimationPattern, { BounceAnimationParams, BounceAnimationStyleProperties } from './AbstractBounceAnimationPattern';
import { BUILT_IN_ANIMATIONS_TIMING } from '../../entities/QAnimationsMetadata';

export function bounceVerticalAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  return new BounceVerticalAnimationPattern(
    'bounceVertical',
    params.duration,
    params.includeEnterTransition,
    params.includeLeaveTransition,
    params.animationStyleProperties
  ).getTrigger();
}

export function bounceInUpAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '-100%', offset: 0 },
    { opacity: 0.5, translation: '20%', offset: 0.7 },
    { opacity: 1, translation: '0', offset: 1.0 }
  ];

  return new BounceVerticalAnimationPattern('bounceInUp', params.duration, true, false, BOUNCE_PARAMS).getTrigger();
}

export function bounceInDownAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '100%', offset: 0 },
    { opacity: 0.5, translation: '-20%', offset: 0.7 },
    { opacity: 1, translation: '0', offset: 1.0 }
  ];

  return new BounceVerticalAnimationPattern('bounceInDown', params.duration, true, false, BOUNCE_PARAMS).getTrigger();
}

export function bounceOutUpAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '0%', offset: 0 },
    { opacity: 0.5, translation: '20%', offset: 0.7 },
    { opacity: 1, translation: '-100%', offset: 1.0 }
  ];

  return new BounceVerticalAnimationPattern('bounceOutUp', params.duration, false, true, BOUNCE_PARAMS).getTrigger();
}

export function bounceOutDownAnimation(params: BounceAnimationParams = {}): AnimationTriggerMetadata {
  const BOUNCE_PARAMS: Array<BounceAnimationStyleProperties> = [
    { opacity: 0, translation: '0%', offset: 0 },
    { opacity: 0.5, translation: '-20%', offset: 0.7 },
    { opacity: 1, translation: '100%', offset: 1.0 }
  ];

  return new BounceVerticalAnimationPattern('bounceOutDown', params.duration, false, true, BOUNCE_PARAMS).getTrigger();
}

export class BounceVerticalAnimationPattern extends AbstractBounceAnimationPattern {
  constructor(
    public trigger: string = 'bounceVertical',
    public duration: number = BUILT_IN_ANIMATIONS_TIMING,
    public includeEnterTransitions: boolean = false,
    public includeLeaveTransitions: boolean = false,
    public bounceAnimationParams: Array<BounceAnimationStyleProperties> = []
  ) {
    super(trigger, true, duration, includeEnterTransitions, includeLeaveTransitions, bounceAnimationParams);
  }
}
