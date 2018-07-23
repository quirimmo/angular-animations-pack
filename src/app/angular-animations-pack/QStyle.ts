import { style, AnimationStyleMetadata } from '@angular/animations';

interface AnimationStyleProperties {
  [key: string]: string | number;
}

class Style {
  constructor(public styleProperties: AnimationStyleProperties = {}) {}

  style(): AnimationStyleMetadata {
    return style(this.styleProperties);
  }
}

export default Style;
