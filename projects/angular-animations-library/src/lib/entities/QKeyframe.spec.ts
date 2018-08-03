import Keyframe from './QKeyframe';
import Style from './QStyle';
import { keyframes } from '@angular/animations';

const style1 = new Style();
const style2 = new Style();
const styles: Array<Style> = [style1, style2];
const instance: Keyframe = new Keyframe(styles);

describe('QKeyframe', () => {
  it('should be a class', () => {
    expect(Keyframe).toEqual(jasmine.any(Function));
  });

  it('should create an instance', () => {
    expect(instance instanceof Keyframe).toBeTruthy();
  });

  it('should define the public methods', () => {
    expect(instance.keyframe).toEqual(jasmine.any(Function));
  });

  describe('keyframe', () => {
    it('should return the AnimationKeyframesSequenceMetadata', () => {
      expect(instance.keyframe()).toEqual(keyframes(instance.styles.map(el => el.style())));
    });
  });
});
