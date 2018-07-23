import Style from './QStyle';
import { keyframes, AnimationKeyframesSequenceMetadata } from '@angular/animations';

class Keyframe {
  constructor(public styles: Array<Style> = []) {}

  keyframe(): AnimationKeyframesSequenceMetadata {
    return keyframes(this.styles.map(el => el.style()));
  }
}

export default Keyframe;
