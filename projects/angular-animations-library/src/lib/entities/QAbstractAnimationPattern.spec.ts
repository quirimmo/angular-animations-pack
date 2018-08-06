import AbstractAnimationPattern from './QAbstractAnimationPattern';
import Trigger from './QTrigger';
import State from './QState';
import Style from './QStyle';
import Transition from './QTransition';
import KeyframeAnimation from './QKeyframeAnimation';
import Animation from './QAnimation';

class AbstractMocked extends AbstractAnimationPattern {}
const instance: AbstractMocked = new AbstractMocked('trigger');

describe('QAbstractAnimationPattern', () => {
  it('should be a class', () => {
    expect(AbstractAnimationPattern).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof AbstractAnimationPattern).toBeTruthy();
  });

  describe('properties', () => {
    it('should set the trigger name', () => {
      expect(instance.triggerName).toBe('trigger');
    });

    it('should set the includeEnterTransition to false', () => {
      expect(instance.includeEnterTransition).toBeFalsy();
    });

    it('should set the includeLeaveTransition to false', () => {
      expect(instance.includeLeaveTransition).toBeFalsy();
    });

    it('should set the stateList', () => {
      expect(instance.stateList).toEqual(jasmine.any(Array));
      expect(instance.stateList.length).toBe(0);
    });

    it('should set the transitionList as empty array', () => {
      expect(instance.transitionList).toEqual(jasmine.any(Array));
      expect(instance.transitionList.length).toBe(0);
    });
  });

  describe('methods', () => {
    it('should define the public methods', () => {
      expect(instance.setupStateList).toEqual(jasmine.any(Function));
      expect(instance.setupTransitionList).toEqual(jasmine.any(Function));
      expect(instance.getTrigger).toEqual(jasmine.any(Function));
      expect(instance.initAnimationPattern).toEqual(jasmine.any(Function));
      expect(instance.addTransition).toEqual(jasmine.any(Function));
    });
  });

  describe('getTrigger', () => {
    it('should return the corresponding AnimationTriggerMetadata', () => {
      const transition = new Transition();
      instance.transitionList = [transition];
      expect(instance.getTrigger()).toEqual(new Trigger('trigger', [], [transition]).trigger());
      instance.transitionList.length = 0;
    });
  });

  describe('setupStateList', () => {
    it('should setup the states', () => {
      const state = new State('state', new Style());
      expect(instance.stateList.length).toBe(0);
      instance.setupStateList([state]);
      expect(instance.stateList.length).toBe(1);
      expect(instance.stateList[0]).toEqual(state);
    });
  });

  describe('setupTransitionList', () => {
    describe('do not include void transitions', () => {
      it('should setup the transitions', () => {
        const transition = new Transition();
        expect(instance.transitionList.length).toBe(0);
        instance.setupTransitionList([transition]);
        expect(instance.transitionList.length).toBe(1);
        expect(instance.transitionList[0]).toEqual(transition);
      });
    });

    describe('include enter and leave transition', () => {
      beforeEach(() => {
        instance.includeEnterTransition = true;
        instance.includeLeaveTransition = true;
      });

      describe('KeyFrameAnimation', () => {
        let animation, transition;
        beforeEach(() => {
          animation = new KeyframeAnimation();
          transition = new Transition('state change', animation);
          instance.setupTransitionList([transition]);
        });

        it('should add enter and leave transition', () => {
          expect(instance.transitionList.length).toBe(3);
        });

        it('should add the enter transition', () => {
          const voidTransition = instance.transitionList[1];
          expect(voidTransition.stateChangeExpression).toBe(':enter');
          expect(voidTransition.animation).toEqual(animation);
        });

        it('should add the leave transition', () => {
          const voidTransition = instance.transitionList[2];
          expect(voidTransition.stateChangeExpression).toBe(':leave');
          expect(voidTransition.animation).toEqual(animation);
        });
      });

      describe('Animation', () => {
        let animation, transition;

        beforeEach(() => {
          animation = new Animation();
          transition = new Transition('state change', animation);
          instance.setupTransitionList([transition]);
        });

        it('should add enter and leave transitions', () => {
          expect(instance.transitionList.length).toBe(3);
        });

        it('should add the enter transition', () => {
          const voidTransitionIn = instance.transitionList[1];
          expect(voidTransitionIn.stateChangeExpression).toBe(':enter');
          expect(voidTransitionIn.animation).toEqual(new Animation());
        });

        it('should add the leave transition', () => {
          const voidTransitionOut = instance.transitionList[2];
          expect(voidTransitionOut.stateChangeExpression).toBe(':leave');
          expect(voidTransitionOut.animation).toEqual(new Animation(100, 'ease-out'));
        });
      });
    });
  });
});
