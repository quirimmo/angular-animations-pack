import Transition from './QTransition';
import { trigger } from '@angular/animations';
import Trigger from './QTrigger';
import State from './QState';
import Style from './QStyle';

const state = new State('state1', new Style());
const states = [state];
const transition = new Transition();
const transitions = [transition];
const instance: Trigger = new Trigger('trigger', states, transitions);

describe('Trigger', () => {
  it('should be a class', () => {
    expect(Trigger).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof Trigger).toBeTruthy();
  });

  it('should define the exposed methods', () => {
    expect(instance.trigger).toEqual(jasmine.any(Function));
  });

  it('should init the instance', () => {
    expect(instance.triggerParams).toEqual([state.state(), transition.transition()]);
  });

  describe('trigger', () => {
    it('should return the AnimationTriggerMetadata', () => {
      expect(instance.trigger()).toEqual(trigger('trigger', [state.state(), transition.transition()]));
    });
  });
});
