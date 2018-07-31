import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { FadeAnimationPattern, fadeAnimation } from './FadeAnimationPattern';

const instance: FadeAnimationPattern = new FadeAnimationPattern();

fdescribe('FadeAnimationPattern', () => {
  it('should be a class', () => {
    expect(FadeAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FadeAnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractAnimation', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  // it('should define the states', () => {
  //   expect(instance.stateList).toContain(new State('void', new Style({ transform: `scale(0)`, opacity: 0 })));
  //   expect(instance.stateList).toContain(new State('inactive', new Style()));
  //   expect(instance.stateList).toContain(new State('active', new Style({ transform: `scale(1)`, opacity: 1 })));
  // });

  // it('should define the transitions', () => {
  //   expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
  //   expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  //   expect(instance.transitionList).toContain(new Transition('void => *', new Animation(100, 'ease-in')));
  //   expect(instance.transitionList).toContain(new Transition('* => void', new Animation(100, 'ease-out')));
  // });
});

fdescribe('fadeAnimation', () => {
  it('should return the trigger', () => {
    expect(fadeAnimation()).toEqual(new FadeAnimationPattern().getTrigger());
  });
});
