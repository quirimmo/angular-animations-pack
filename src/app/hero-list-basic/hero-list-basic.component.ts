import { Component, Input } from '@angular/core';

import { Hero } from './hero.service';
// import { highlightAnimationFn } from 'angular-animations-library';

// import { highlightAnimation } from 'angular-animations-library';
// import { highlightAnimation } from 'angular-animations-library';
// import { appearAnimationFn } from 'projects/angular-animations-library/src/public_api';
// import { appearAnimationFn } from 'angular-animations-library';

// import { appearAnimationFunzione } from 'angular-animations-library';
// import { appearAnimationFunzione } from 'projects/angular-animations-library/src/public_api';
// import { appearAnimationFunzione } from 'dist/angular-animations-library/public_api';
// import { appearAnimationFn } from 'projects/angular-animations-library/src/public_api';
// import { appearAnimationFn } from 'dist/angular-animations-library';
// import { appearAnimationFn } from 'dist/angular-animations-library/';

// import {
//   highlightAnimationFn,
//   scaleAnimationFn,
//   flyHorizontalAnimationFn,
//   flyVerticalAnimationFn,
//   fillWidthAnimationFn,
//   fillHeightAnimationFn,
//   rotateAnimationFn,
//   fadeAnimationFn,
//   bounceVerticalAnimationFn,
//   bounceHorizontalAnimationFn,
//   appearAnimationFn
// } from '../angular-animations-pack/angular-animations-pack.module';

@Component({
  selector: 'app-hero-list-basic',
  templateUrl: './hero-list-basic.component.html',
  styleUrls: ['./hero-list-basic.component.css'],
  animations: [
    // highlightAnimationFn({}),
    //
    // highlightAnimation
    // appearAnimation(),
    // appearAnimationFn()
    // // appearAnimationFunzione()
    // highlightAnimationFn(),
    // scaleAnimationFn({ includeVoidTransitions: true, scaleVoidValue: 0, duration: 1000 }),
    // appearAnimationFunzione({ duration: 100 })
    //
    // fillWidthAnimationFn({ size: '100px' }),
    // fillHeightAnimationFn({ size: '50px' })
    // flyVerticalAnimationFn({ includeVoidTransitions: true }),
    // flyHorizontalAnimationFn({ includeVoidTransitions: true })
    // rotateAnimationFn({ includeVoidTransitions: true })
    // fadeAnimationFn({ includeVoidTransitions: true, voidFadeValue: 0.5 })
    // bounceVerticalAnimationFn({
    //   includeVoidTransitions: true,
    //   animationStyleProperties: [
    //     { opacity: 0, translation: '-100%', offset: 0 },
    //     { opacity: 1, translation: '-15px', offset: 0.3 },
    //     { opacity: 1, translation: '0', offset: 1.0 }
    //   ]
    // }),
    // bounceHorizontalAnimationFn({
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
