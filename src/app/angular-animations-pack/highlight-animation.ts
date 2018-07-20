import HighlightAnimationPattern from "./HighlightAnimationPattern";
import { AnimationTriggerMetadata } from "@angular/animations";

interface HighlightAnimationParams {
  finalColor?: string;
  initialColor?: string;
  duration?: number;
}

function highlightAnimation(params: HighlightAnimationParams = {}): AnimationTriggerMetadata {
  return new HighlightAnimationPattern(params.finalColor, params.duration).getTrigger();
}

export default highlightAnimation;
