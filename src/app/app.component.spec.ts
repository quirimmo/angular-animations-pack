import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { AngularAnimationsPackModule } from './angular-animations-pack/angular-animations-pack.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '../../node_modules/@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeroListBasicComponent],
      imports: [BrowserModule, BrowserAnimationsModule, AngularAnimationsPackModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));

  it('should render an app-hero-list-basic component', async(() => {
    const heroesElement: DebugElement = fixture.nativeElement.querySelector('app-hero-list-basic');
    expect(heroesElement).not.toBeNull();
  }));
});
