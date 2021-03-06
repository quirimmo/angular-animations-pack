import { AppearAnimationPattern, appearAnimation } from './AppearAnimationPattern';
import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';

const instance: AppearAnimationPattern = new AppearAnimationPattern(300, 0, 1);

describe('AppearAnimationPattern', () => {
  it('should be a class', () => {
    expect(AppearAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof AppearAnimationPattern).toBeTruthy();
  });

  it('should inherit from AbstractAnimation', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ transform: `scale(0)`, opacity: 0 })));
    expect(instance.stateList).toContain(new State('inactive', new Style()));
    expect(instance.stateList).toContain(new State('active', new Style({ transform: `scale(1)`, opacity: 1 })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(300, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(300, 'ease-out')));
  });
});

describe('appearAnimation', () => {
  it('should return the trigger', () => {
    expect(appearAnimation()).toEqual(new AppearAnimationPattern().getTrigger());
  });
});
