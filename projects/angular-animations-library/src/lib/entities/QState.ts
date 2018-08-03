import { state, AnimationStateMetadata } from '@angular/animations';
import Style from './QStyle';

class State {
  constructor(public stateName: string, public style: Style) {}

  state(): AnimationStateMetadata {
    return state(this.stateName, this.style.style());
  }
}

export default State;
