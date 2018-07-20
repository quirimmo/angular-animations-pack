import HighlightAnimationPattern from "./HighlightAnimationPattern";
import { AnimationTriggerMetadata } from "@angular/animations";

interface HighlightAnimationParams {
  highlightColor?: string;
  duration?: number;
}

function highlightAnimation(params: HighlightAnimationParams = {}): AnimationTriggerMetadata {
  return new HighlightAnimationPattern(params.highlightColor, params.duration).getTrigger();
}

export default highlightAnimation;
