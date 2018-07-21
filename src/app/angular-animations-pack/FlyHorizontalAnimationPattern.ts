import AnimationPattern from "./AnimationPattern";
import State from "./QState";
import Style from "./QStyle";
import Transition from "./QTransition";
import Animation from "./QAnimation";
import { AnimationTriggerMetadata } from "@angular/animations";

export interface FlyHorizontalAnimationParams {
  duration?: number;
  includeVoidTransitions?: boolean;
}

export function flyHorizontalAnimation(
  params: FlyHorizontalAnimationParams = {}
): AnimationTriggerMetadata {
  return new FlyHorizontalAnimationPattern(
    params.duration,
    params.includeVoidTransitions
  ).getTrigger();
}

export class FlyHorizontalAnimationPattern extends AnimationPattern {
  constructor(
    public duration: number = 100,
    public includeVoidTransitions: boolean = false
  ) {
    super(
      "flyHorizontal",
      [
        // new State("void", new Style({ backgroundColor: highlightVoidColor })),
        // new State("inactive", new Style()),
        new State("active", new Style({ transform: "translateX(100%)" }))
      ],
      [
        new Transition(
          "inactive => active",
          new Animation(duration, "ease-in")
        ),
        new Transition(
          "active => inactive",
          new Animation(duration, "ease-out")
        )
      ],
      includeVoidTransitions
    );
  }
}
