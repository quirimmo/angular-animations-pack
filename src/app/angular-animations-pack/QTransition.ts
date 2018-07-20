import { transition, AnimationTransitionMetadata } from "@angular/animations";
import Animation from "./QAnimation";

class Transition {
  constructor(
    public stateChangeExpression: string = "inactive => active",
    public animation: Animation = new Animation(100)
  ) {}

  transition(): AnimationTransitionMetadata {
    return transition(this.stateChangeExpression, this.animation.animate());
  }
}

export default Transition;
