import { Hero } from './hero.service';
import { TestBed } from '@angular/core/testing';

describe('hero service', () => {
  let service: Hero;

  beforeEach(() => {
    service = new Hero('quirino');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should set its properties', () => {
    expect(service.name).toBe('quirino');
    expect(service.state).toBe('inactive');
  });

  it('should define its methods', () => {
    expect(service.toggleState).toEqual(jasmine.any(Function));
  });

  describe('toggleState method', () => {
    it('should toggle the state', () => {
      expect(service.state).toBe('inactive');
      service.toggleState();
      expect(service.state).toBe('active');
    });
  });
});
