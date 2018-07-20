import { Component, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

import { Hero } from "./hero.service";
import { heroStateAnimation, heroStateAnimation2 } from "../angular-animations-pack/angular-animations-pack.module";
import highlightAnimation from "../angular-animations-pack/highlight-animation";


@Component({
  selector: "app-hero-list-basic",
  templateUrl: "./hero-list-basic.component.html",
  styleUrls: ["./hero-list-basic.component.css"],
  animations: [
    heroStateAnimation(),
    heroStateAnimation2(),
    highlightAnimation('red', 'green')
  ]
})
export class HeroListBasicComponent {
  @Input() heroes: Hero[];
}
