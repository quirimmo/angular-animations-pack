import { AnimationAnimateMetadata } from '@angular/animations';

abstract class AbstractAnimation {
  constructor(public duration: number = 100) {}

  abstract animate(): AnimationAnimateMetadata;
}

export default AbstractAnimation;
