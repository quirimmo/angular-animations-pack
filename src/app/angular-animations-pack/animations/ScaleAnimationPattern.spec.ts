import AnimationPattern from '../entities/QAnimationPattern';
import State from '../entities/QState';
import Style from '../entities/QStyle';
import Transition from '../entities/QTransition';
import Animation from '../entities/QAnimation';
import { ScaleAnimationPattern, scaleAnimation } from './ScaleAnimationPattern';

const instance: ScaleAnimationPattern = new ScaleAnimationPattern();

fdescribe('ScaleAnimationPattern', () => {
  it('should be a class', () => {
    expect(ScaleAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof ScaleAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ transform: `scale(0)` })));
    expect(instance.stateList).toContain(new State('inactive', new Style()));
    expect(instance.stateList).toContain(new State('active', new Style({ transform: `scale(1.1)` })));
  });

  it('should define the transitions', () => {
    expect(instance.transitionList).toContain(new Transition('inactive => active', new Animation(100, 'ease-in')));
    expect(instance.transitionList).toContain(new Transition('active => inactive', new Animation(100, 'ease-out')));
  });
});

fdescribe('scaleAnimation', () => {
  it('should return the trigger', () => {
    expect(scaleAnimation()).toEqual(new ScaleAnimationPattern().getTrigger());
  });
});
