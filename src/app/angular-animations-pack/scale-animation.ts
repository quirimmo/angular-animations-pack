import ScaleAnimationPattern from "./ScaleAnimationPattern";
import { AnimationTriggerMetadata } from "@angular/animations";

interface ScaleAnimationParams {
  scaleValue?: number;
  duration?: number;
}

function scaleAnimation(params: ScaleAnimationParams = {}): AnimationTriggerMetadata {
  return new ScaleAnimationPattern(params.scaleValue, params.duration).getTrigger();
}

export default scaleAnimation;
