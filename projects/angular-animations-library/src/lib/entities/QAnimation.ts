import { AnimationAnimateMetadata, animate } from '@angular/animations';
import AbstractAnimation from './QAbstractAnimation';

class Animation extends AbstractAnimation {
  constructor(public duration: number = 100, public easing: string = 'ease-in') {
    super(duration);
  }

  animate(): AnimationAnimateMetadata {
    return animate(`${this.duration}ms ${this.easing}`);
  }
}

export default Animation;
