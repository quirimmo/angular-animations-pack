import { AnimationAnimateMetadata, animate, keyframes, style } from '@angular/animations';
import Keyframe from './QKeyframe';
import AbstractAnimation from './QAbstractAnimation';

class KeyframeAnimation extends AbstractAnimation {
  constructor(public duration: number = 100, public keyframe: Keyframe = new Keyframe()) {
    super(duration);
  }

  animate(): AnimationAnimateMetadata {
    return animate(
      this.duration,
      this.keyframe.keyframe()
    );
  }
}

export default KeyframeAnimation;
