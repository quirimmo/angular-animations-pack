import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import { FoldAnimationPattern, foldInAnimation, foldOutAnimation } from './FoldAnimationPattern';
import AnimationPattern from '../../entities/QAnimationPattern';

const instance: FoldAnimationPattern = new FoldAnimationPattern();

describe('FoldAnimationPattern', () => {
  it('should be a class', () => {
    expect(FoldAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof FoldAnimationPattern).toBeTruthy();
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  it('should define the states', () => {
    expect(instance.stateList).toContain(new State('void', new Style({ width: '0', height: '0', overflow: 'hidden' })));
    expect(instance.stateList).toContain(new State('inactive', new Style({ overflow: 'hidden' })));
    expect(instance.stateList).toContain(new State('active', new Style()));
  });

  it('should define the in transition', () => {
    const inInstance: FoldAnimationPattern = new FoldAnimationPattern('foldIn');
    expect(inInstance.transitionList).toContain(new Transition(':enter', new Animation(300, 'ease-in')));
  });

  it('should define the out transition', () => {
    const outInstance: FoldAnimationPattern = new FoldAnimationPattern('foldOut');
    expect(outInstance.transitionList).toContain(new Transition(':leave', new Animation(300, 'ease-out')));
  });
});

describe('foldInAnimation', () => {
  it('should return the trigger', () => {
    expect(foldInAnimation()).toEqual(new FoldAnimationPattern('foldIn', 300, false, false).getTrigger());
  });
});

describe('foldOutAnimation', () => {
  it('should return the trigger', () => {
    expect(foldOutAnimation()).toEqual(new FoldAnimationPattern('foldOut', 300, false, false).getTrigger());
  });
});
