import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimationsLibraryComponent } from './angular-animations-library.component';

describe('AngularAnimationsLibraryComponent', () => {
  let component: AngularAnimationsLibraryComponent;
  let fixture: ComponentFixture<AngularAnimationsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAnimationsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnimationsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
