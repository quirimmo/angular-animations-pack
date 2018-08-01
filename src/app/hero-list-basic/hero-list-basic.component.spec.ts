import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListBasicComponent } from './hero-list-basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Hero } from './hero.service';
import { DebugElement } from '@angular/core';

describe('HeroListBasicComponent', () => {
  let component: HeroListBasicComponent;
  let fixture: ComponentFixture<HeroListBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListBasicComponent],
      imports: [BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('binding not provided', () => {
    it('should not display heroes if binding input has not been provided', () => {
      const heroes = fixture.debugElement.query(By.css('.hero-list-item'));
      expect(heroes).toBeNull();
    });
  });

  describe('binding provided', () => {
    beforeEach(() => {
      component.heroes = [new Hero('quirino'), new Hero('chopper')];
      fixture.detectChanges();
    });

    it('should not display heroes if elements are collapsed', () => {
      const heroesElements: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.hero-list-item'));
      expect(heroesElements.length).toBe(0);
    });

    it('should display heroes if elements are not collapsed', () => {
      component.showElement();
      fixture.detectChanges();
      const heroesElements: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.hero-list-item'));
      expect(heroesElements.length).toBe(2);
    });

    it('should display correctly the name of the hero', () => {
      component.showElement();
      fixture.detectChanges();
      const heroesElements: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.hero-list-item'));
      expect(heroesElements[0].nativeElement.textContent.trim()).toBe('quirino');
    });

    describe('displayElement method', () => {
      it('should be false', () => {
        expect(component.displayElement()).toBeFalsy();
      });

      it('should be true if clicking for displaying element', () => {
        const displayElementButton: DebugElement = fixture.debugElement.query(By.css('button'));
        displayElementButton.triggerEventHandler('click', null);
        expect(component.displayElement()).toBeTruthy();
      });
    });

    describe('reset method', () => {
      it('should set all the heroes states to inactive', () => {
        expect(component.heroes.every(hero => hero.state === 'inactive')).toBeTruthy();
      });

      it('should reset all the heroes states to inactive', () => {
        component.heroes[0].state = 'active';
        expect(component.heroes.every(hero => hero.state === 'inactive')).toBeFalsy();
        component.showElement();
        expect(component.heroes.every(hero => hero.state === 'inactive')).toBeTruthy();
      });
    });

    describe('reset method', () => {
      it('should set all the heroes states to inactive', () => {
        expect(component.heroes.every(hero => hero.state === 'inactive')).toBeTruthy();
      });

      it('should reset all the heroes states to inactive', () => {
        component.heroes[0].state = 'active';
        expect(component.heroes.every(hero => hero.state === 'inactive')).toBeFalsy();
        component.showElement();
        expect(component.heroes.every(hero => hero.state === 'inactive')).toBeTruthy();
      });
    });

    describe('buttonText', () => {
      it('should be Show Element by default', () => {
        const displayElementButton: DebugElement = fixture.debugElement.query(By.css('button'));
        expect(displayElementButton.nativeElement.textContent).toContain('Show Element');
      });

      it('should be Show Element by default', () => {
        const displayElementButton: DebugElement = fixture.debugElement.query(By.css('button'));
        displayElementButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(displayElementButton.nativeElement.textContent).toContain('Hide Element');
      });
    });
  });
});
