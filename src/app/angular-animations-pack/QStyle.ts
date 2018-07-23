import { style, AnimationStyleMetadata } from '@angular/animations';
import AnimationStyleProperties from './QAnimationStyleProperties';

class Style {
  constructor(public styleProperties: AnimationStyleProperties = {}) {}

  style(): AnimationStyleMetadata {
    return style(this.styleProperties);
  }
}

export default Style;
