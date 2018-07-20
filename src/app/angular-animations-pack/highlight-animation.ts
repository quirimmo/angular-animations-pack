import { trigger, state, style } from "@angular/animations";
import Animation from "./QAnimation";
import Transition from "./QTransition";
import Style from "./QStyle";
import State from "./QState";
import Trigger from "./QTrigger";

// function highlightAnimation(initialColor?: string, finalColor?: string) {
//   return trigger("highlight", [
//     new State("inactive", new Style({ backgroundColor: "white" })).state(),
//     new State("active", new Style({ backgroundColor: "yellow" })).state(),
//     new Transition().transition(),
//     new Transition(
//       "active => inactive",
//       new Animation(100, "ease-out")
//     ).transition()
//   ]);
// }

function highlightAnimation(initialColor?: string, finalColor?: string) {
  return new Trigger(
    "highlight",
    [
      new State("inactive", new Style({ backgroundColor: "white" })),
      new State(
        "active",
        new Style({ backgroundColor: "red", transform: "scale(1.2)" })
      )
    ],
    [
      new Transition(),
      new Transition("active => inactive", new Animation(100, "ease-out"))
    ]
  ).trigger();
}

export default highlightAnimation;
