import { FillSizeAnimationPattern } from './AbstractFillSizeAnimationPattern';
import AnimationPattern from '../../entities/QAnimationPattern';
import State from '../../entities/QState';
import Style from '../../entities/QStyle';
import Animation from '../../entities/QAnimation';
import Transition from '../../entities/QTransition';

class FillSizeAnimationPatternMock extends FillSizeAnimationPattern {}
const instance: FillSizeAnimationPatternMock = new FillSizeAnimationPatternMock('trigger', '100px');

describe('FillSizeAnimationPattern', () => {
  it('should be a class', () => {
    expect(FillSizeAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should define the exposed methods', () => {
    expect(instance.getSize).toEqual(jasmine.any(Function));
  });

  it('should inherit from AnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  describe('getSize', () => {
    const size = '100px';

    it('should return height', () => {
      instance.isHeight = true;
      expect(instance.getSize()).toEqual({ height: size });
    });

    it('should return width', () => {
      instance.isHeight = false;
      expect(instance.getSize()).toEqual({ width: size });
    });
  });

  describe('stateList', () => {
    it('should setup the state list', () => {
      expect(instance.stateList).toEqual([new State('inactive', new Style()), new State('active', new Style(instance.getSize()))]);
    });

    it('should setup the transition list', () => {
      expect(instance.transitionList).toEqual([
        new Transition('inactive => active', new Animation(this.duration, 'ease-in')),
        new Transition('active => inactive', new Animation(this.duration, 'ease-out'))
      ]);
    });
  });
});
