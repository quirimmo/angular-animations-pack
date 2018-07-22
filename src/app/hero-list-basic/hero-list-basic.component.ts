import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Hero } from './hero.service';
import {
  highlightAnimationFn,
  scaleAnimationFn,
  flyHorizontalAnimationFn,
  flyVerticalAnimationFn,
  rotateAnimationFn,
  fadeAnimationFn,
  bounceVerticalAnimationFn
} from '../angular-animations-pack/angular-animations-pack.module';

@Component({
  selector: 'app-hero-list-basic',
  templateUrl: './hero-list-basic.component.html',
  styleUrls: ['./hero-list-basic.component.css'],
  animations: [
    // highlightAnimationFn(),
    // scaleAnimationFn({ includeVoidTransitions: true, scaleVoidValue: 0 }),
    // flyVerticalAnimationFn({ includeVoidTransitions: true }),
    // flyHorizontalAnimationFn({ includeVoidTransitions: true })
    // rotateAnimationFn({ includeVoidTransitions: true })
    // fadeAnimationFn({ includeVoidTransitions: true, voidFadeValue: 0.5 })
    bounceVerticalAnimationFn({ includeVoidTransitions: true })
  ]
})
export class HeroListBasicComponent {
  @Input() heroes: Hero[];
  private isElementVisible = false;
  public buttonText = 'Show';
  public redBlock = 'inactive';

  showElement(): void {
    this.reset();
    this.isElementVisible = !this.isElementVisible;
    this.buttonText = this.isElementVisible ? 'Hide' : 'Show';
  }

  displayElement(): boolean {
    return this.isElementVisible;
  }

  private reset(): void {
    this.heroes.forEach(hero => {
      hero.state = 'inactive';
    });
  }
}
