import { AnimationAnimateMetadata, animate } from '@angular/animations';

class Animation {
  constructor(public duration: number = 100, public easing: string = 'ease-in') {}

  animate(): AnimationAnimateMetadata {
    return animate(`${this.duration}ms ${this.easing}`);
  }
}

export default Animation;
