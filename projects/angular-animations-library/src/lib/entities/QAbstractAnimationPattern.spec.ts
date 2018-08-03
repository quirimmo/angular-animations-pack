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

    it('should set the includeVoidTransition', () => {
      expect(instance.includeVoidTransitions).toBeFalsy();
    });

    it('should set the stateList', () => {
      expect(instance.stateList).toEqual(jasmine.any(Array));
      expect(instance.stateList.length).toBe(0);
    });

    it('should set the transitionList', () => {
      expect(instance.transitionList).toEqual(jasmine.any(Array));
      expect(instance.transitionList.length).toBe(0);
    });
  });

  describe('methods', () => {
    it('should define the public methods', () => {
      expect(instance.setupStateList).toEqual(jasmine.any(Function));
      expect(instance.setupTransitionList).toEqual(jasmine.any(Function));
      expect(instance.getTrigger).toEqual(jasmine.any(Function));
    });
  });

  describe('getTrigger', () => {
    it('should return the corresponding AnimationTriggerMetadata', () => {
      expect(instance.getTrigger()).toEqual(new Trigger('trigger', [], []).trigger());
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

    describe('include void transitions', () => {
      beforeEach(() => {
        instance.includeVoidTransitions = true;
      });

      describe('KeyFrameAnimation', () => {
        let animation, transition;
        beforeEach(() => {
          animation = new KeyframeAnimation();
          transition = new Transition('state change', animation);
          instance.setupTransitionList([transition]);
        });

        it('should add one void transition', () => {
          expect(instance.transitionList.length).toBe(2);
        });

        it('should add the right void transition', () => {
          const voidTransition = instance.transitionList[1];
          expect(voidTransition.stateChangeExpression).toBe('void <=> *');
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

        it('should add two void transitions', () => {
          expect(instance.transitionList.length).toBe(3);
        });

        it('should add the right void to all transition', () => {
          const voidTransitionIn = instance.transitionList[1];
          expect(voidTransitionIn.stateChangeExpression).toBe('void => *');
          expect(voidTransitionIn.animation).toEqual(new Animation());
        });

        it('should add the right all to void transition', () => {
          const voidTransitionOut = instance.transitionList[2];
          expect(voidTransitionOut.stateChangeExpression).toBe('* => void');
          expect(voidTransitionOut.animation).toEqual(new Animation(100, 'ease-out'));
        });
      });
    });
  });
});
