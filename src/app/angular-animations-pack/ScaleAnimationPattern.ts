import AnimationPattern from "./AnimationPattern";
import State from "./QState";
import Style from "./QStyle";
import Transition from "./QTransition";
import Animation from "./QAnimation";

class ScaleAnimationPattern extends AnimationPattern {
  constructor(public scaleValue: number = 1.1, public duration: number = 100) {
    super(
      "scale",
      [
        new State("inactive", new Style()),
        new State(
          "active",
          new Style({ transform: `scale(${scaleValue})` })
        )
      ],
      [
        new Transition("inactive => active", new Animation(duration, "ease-in")),
        new Transition("active => inactive", new Animation(duration, "ease-out"))
      ]
    );
  }
}

export default ScaleAnimationPattern;
