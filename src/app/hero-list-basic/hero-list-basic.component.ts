import { Component, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

import { Hero } from "./hero.service";
import {
  highlightAnimation,
  scaleAnimation
} from "../angular-animations-pack/angular-animations-pack.module";

@Component({
  selector: "app-hero-list-basic",
  templateUrl: "./hero-list-basic.component.html",
  styleUrls: ["./hero-list-basic.component.css"],
  animations: [highlightAnimation(), scaleAnimation()]
})
export class HeroListBasicComponent {
  @Input() heroes: Hero[];
}
