import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: []
})
export class AngularAnimationsPackModule {}

export const heroStateAnimation = function() {
  return trigger("heroState", [
    state(
      "inactive",
      style({
        transform: "scale(1)"
      })
    ),
    state(
      "active",
      style({
        transform: "scale(1.1)"
      })
    ),
    transition("inactive => active", animate("100ms ease-in")),
    transition("active => inactive", animate("100ms ease-out"))
  ]);
};

export const heroStateAnimation2 = function() {
  return trigger("heroState2", [
    state(
      "inactive",
      style({
        backgroundColor: "#eee"
      })
    ),
    state(
      "active",
      style({
        backgroundColor: "#cfd8dc"
      })
    ),
    transition("inactive => active", animate("100ms ease-in")),
    transition("active => inactive", animate("100ms ease-out"))
  ]);
};


// export const highlightAnimation = highlightAnimation;
