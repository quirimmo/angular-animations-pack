import State from './QState';
import Style from './QStyle';
import { state } from '@angular/animations';

const instance: State = new State('state', new Style());

describe('State', () => {
  it('should be a class', () => {
    expect(State).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof State).toBeTruthy();
  });

  it('should define the exposed methods', () => {
    expect(instance.state).toEqual(jasmine.any(Function));
  });

  describe('state', () => {
    it('should return the AnimationStateMetadata', () => {
      expect(instance.state()).toEqual(state('state', new Style().style()));
    });
  });
});
