import AnimationPattern from "./AnimationPattern";
import State from "./QState";
import Style from "./QStyle";
import Transition from "./QTransition";
import Animation from "./QAnimation";

class HighlightAnimationPattern extends AnimationPattern {
  constructor(public highlightColor: string = "yellow", public duration: number = 100) {
    super(
      "highlight",
      [
        new State("inactive", new Style()),
        new State(
          "active",
          new Style({ backgroundColor: highlightColor })
        )
      ],
      [
        new Transition("inactive => active", new Animation(duration, "ease-in")),
        new Transition("active => inactive", new Animation(duration, "ease-out"))
      ]
    );
  }
}

export default HighlightAnimationPattern;
