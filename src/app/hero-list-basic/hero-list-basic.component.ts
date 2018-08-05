import { Component, Input } from '@angular/core';

import { Hero } from './hero.service';
import {
  fadeInAnimation,
  fadeOutAnimation,
  fadeInLeftAnimation,
  fadeInRightAnimation,
  fadeInDownAnimation,
  fadeOutLeftAnimation,
  fadeOutRightAnimation,
  fadeOutUpAnimation,
  fadeOutDownAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  fadeInUpAnimation,
  bounceOutLeftAnimation,
  bounceOutRightAnimation,
  bounceInUpAnimation,
  bounceInDownAnimation,
  bounceOutUpAnimation,
  bounceOutDownAnimation
} from 'projects/angular-animations-library/src/public_api';
import { trigger } from '../../../node_modules/@angular/animations';

bounceInRightAnimation();

@Component({
  selector: 'app-hero-list-basic',
  templateUrl: './hero-list-basic.component.html',
  styleUrls: ['./hero-list-basic.component.css'],
  animations: [
    fadeOutDownAnimation(),
    fadeOutUpAnimation(),
    fadeOutRightAnimation(),
    fadeOutLeftAnimation(),
    fadeInUpAnimation(),
    fadeInDownAnimation(),
    fadeInRightAnimation(),
    fadeInLeftAnimation(),
    fadeInAnimation(),
    fadeOutAnimation(),
    bounceInRightAnimation(),
    // bounceInLeftAnimation(),
    // bounceOutLeftAnimation(),
    // bounceOutRightAnimation(),
    // bounceInUpAnimation(),
    // bounceInDownAnimation(),
    // bounceOutUpAnimation(),
    // bounceOutDownAnimation(),

    // bounceInRightAnimation(),
    // bounceInLeftAnimation(),

    // bounceOutUpAnimation()
    // bounceInUpAnimation()
    // highlightAnimation({}),
    //
    // highlightAnimation
    // appearAnimation(),
    // appearAnimation()
    // // appearAnimationFunzione()
    // highlightAnimation(),
    // scaleAnimation({ includeVoidTransitions: true, scaleVoidValue: 0, duration: 1000 }),
    // appearAnimationFunzione({ duration: 100 })
    //
    // fillWidthAnimation({ size: '100px' }),
    // fillHeightAnimation({ size: '50px' })
    // flyVerticalAnimation({ includeVoidTransitions: true }),
    // flyHorizontalAnimation({ includeVoidTransitions: true })
    // rotateAnimation({ includeVoidTransitions: true })
    // fadeAnimation({ includeVoidTransitions: true, voidFadeValue: 0.5 })
    // bounceVerticalAnimation({
    //   includeVoidTransitions: true,
    //   animationStyleProperties: [
    //     { opacity: 0, translation: '-100%', offset: 0 },
    //     { opacity: 1, translation: '-15px', offset: 0.3 },
    //     { opacity: 1, translation: '0', offset: 1.0 }
    //   ]
    // }),
    // bounceHorizontalAnimation({
    //   includeVoidTransitions: true,
    //   animationStyleProperties: [
    //     { opacity: 0, translation: '-100%', offset: 0 },
    //     { opacity: 1, translation: '-15px', offset: 0.3 },
    //     { opacity: 1, translation: '0', offset: 1.0 }
    //     //
    //   ]
    // })
  ]
})
export class HeroListBasicComponent {
  @Input() heroes: Hero[];
  private isElementVisible = false;
  public buttonText = 'Show';
  public redBlock = 'inactive';
  public elementState = 'inactive';

  showElement(): void {
    this.reset();
    this.isElementVisible = !this.isElementVisible;
    this.buttonText = this.isElementVisible ? 'Hide' : 'Show';
  }

  displayElement(): boolean {
    this.elementState = !this.isElementVisible ? 'active' : 'inactive';

    return this.isElementVisible;
  }

  private reset(): void {
    this.heroes.forEach(hero => {
      hero.state = 'inactive';
    });
  }
}
