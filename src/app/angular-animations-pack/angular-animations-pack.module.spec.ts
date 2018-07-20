import { AngularAnimationsPackModule } from './angular-animations-pack.module';

describe('AngularAnimationsPackModule', () => {
  let angularAnimationsPackModule: AngularAnimationsPackModule;

  beforeEach(() => {
    angularAnimationsPackModule = new AngularAnimationsPackModule();
  });

  it('should create an instance', () => {
    expect(angularAnimationsPackModule).toBeTruthy();
  });
});
