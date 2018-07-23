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
      // keyframes([
      //   style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
      //   style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
      //   style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      // ])
    );
  }
}

export default KeyframeAnimation;
