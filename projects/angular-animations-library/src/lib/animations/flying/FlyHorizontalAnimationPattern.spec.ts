import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FlyHorizontalAnimationPattern, flyHorizontalAnimation } from './FlyHorizontalAnimationPattern';
import AbstractFlyAnimationPattern from './AbstractFlyAnimationPattern';

const instance: FlyHorizontalAnimationPattern = new FlyHorizontalAnimationPattern();

describe('FlyHorizontalAnimationPattern', () => {
  it('should be a class', () => {
    expect(FlyHorizontalAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FlyHorizontalAnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractFlyAnimationPattern', () => {
    expect(instance instanceof AbstractFlyAnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ transform: 'translateX(-100%)' })));
    expect(instance.stateList).toContain(new State('inactive', new Style()));
    expect(instance.stateList).toContain(new State('active', new Style({ transform: 'translateX(100%)' })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

describe('flyHorizontalAnimation', () => {
  it('should return the trigger', () => {
    expect(flyHorizontalAnimation()).toEqual(new FlyHorizontalAnimationPattern().getTrigger());
  });
});
