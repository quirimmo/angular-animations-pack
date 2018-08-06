import { FadeTranslationAnimationPattern } from './AbstractFadeTranslationAnimationPattern';
import AnimationPattern from '../../entities/QAnimationPattern';
import Trigger from '../../entities/QTrigger';
import State from '../../entities/QState';
import Transition from '../../entities/QTransition';
import Animation from '../../entities/QAnimation';
import Style from '../../entities/QStyle';

class FadeTranslationAnimationPatternMock extends FadeTranslationAnimationPattern {}
const instance: FadeTranslationAnimationPatternMock = new FadeTranslationAnimationPatternMock('trigger');

describe('FadeTranslationAnimationPatternMock', () => {
  it('should be a class', () => {
    expect(FadeTranslationAnimationPatternMock).toEqual(jasmine.any(Function));
  });

  it('should define the exposed methods', () => {
    expect(instance.getTranslation).toEqual(jasmine.any(Function));
    expect(instance.defineAnimationPatternProperties).toEqual(jasmine.any(Function));
  });

  it('should inherit from KeyframeAnimationPattern', () => {
    expect(instance instanceof AnimationPattern).toBeTruthy();
  });

  describe('getTranslation', () => {
    it('should return translateY', () => {
      instance.isHorizontalTranslation = false;
      expect(instance.getTranslation()).toEqual('translateY');
    });

    it('should return translateX', () => {
      instance.isHorizontalTranslation = true;
      expect(instance.getTranslation()).toEqual('translateX');
    });
  });

  describe('getTrigger', () => {
    it('should return the trigger', () => {
      expect(instance.getTrigger()).toEqual(
        new Trigger(
          'trigger',
          [
            new State('void', new Style({ opacity: 1, transform: `translateX(100%)` })),
            new State('inactive', new Style()),
            new State('active', new Style({ opacity: 0, transform: `translateX(0%)` }))
          ],
          [
            new Transition('inactive => active', new Animation(300, 'ease-in')),
            new Transition('active => inactive', new Animation(300, 'ease-out'))
          ]
        ).trigger()
      );
    });
  });
});
