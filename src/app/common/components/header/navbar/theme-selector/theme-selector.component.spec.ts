import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  DARK_MODE_CLASS,
  DARK_MODE_KEY,
  ThemeSelectorComponent,
} from './theme-selector.component';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn(() => ({ matches: false })),
});

describe('ThemeSelectorComponent', () => {
  let fixture: ComponentFixture<ThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorComponent);
    fixture.detectChanges();
  });

  describe('toggle theme', () => {
    let button: DebugElement;

    beforeEach(() => {
      button = fixture.debugElement.query(
        By.css('[data-testid="theme-selector-button"]'),
      );
    });

    describe('when dark mode is enabled', () => {
      beforeEach(() => {
        document.documentElement.classList.add(DARK_MODE_CLASS);
        button.nativeElement.click();
      });

      it('should set light theme', () => {
        expect(document.documentElement).not.toHaveClass(DARK_MODE_CLASS);
      });

      it('should persist light mode', () => {
        expect(localStorage.getItem(DARK_MODE_KEY)).toBe('false');
      });
    });

    describe('when light mode is enabled', () => {
      beforeEach(() => {
        document.documentElement.classList.remove(DARK_MODE_CLASS);
        button.nativeElement.click();
      });

      it('should set dark theme', () => {
        expect(document.documentElement).toHaveClass(DARK_MODE_CLASS);
      });

      it('should persist dark mode', () => {
        expect(localStorage.getItem(DARK_MODE_KEY)).toBe('true');
      });
    });
  });
});
