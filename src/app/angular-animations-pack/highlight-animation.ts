import { trigger, state, style } from "@angular/animations";
import Animation from "./QAnimation";
import Transition from "./QTransition";

function highlightAnimation(initialColor?: string, finalColor?: string) {
  return trigger("highlight", [
    state(
      "inactive",
      style({
        backgroundColor: initialColor || "white"
      })
    ),
    state(
      "active",
      style({
        backgroundColor: finalColor || "yellow"
      })
    ),
    new Transition().transition(),
    new Transition(
      "active => inactive",
      new Animation(100, "ease-out")
    ).transition()
  ]);
}

export default highlightAnimation;
