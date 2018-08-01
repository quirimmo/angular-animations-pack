import { AngularAnimationsLibraryModule } from './angular-animations-library.module';

describe('AngularAnimationsLibraryModule', () => {
  let angularAnimationsLibraryModule: AngularAnimationsLibraryModule;

  beforeEach(() => {
    angularAnimationsLibraryModule = new AngularAnimationsLibraryModule();
  });

  it('should create an instance', () => {
    expect(AngularAnimationsLibraryModule).toBeTruthy();
  });
});
