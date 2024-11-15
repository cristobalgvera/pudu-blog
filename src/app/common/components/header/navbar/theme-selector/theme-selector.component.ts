import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export const DARK_MODE_KEY = 'dark-mode';
export const DARK_MODE_CLASS = 'dark';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './theme-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  constructor() {
    afterNextRender({
      write: () => {
        const userPreference = () => localStorage[DARK_MODE_KEY] === 'true';
        const osPreference = () =>
          !(DARK_MODE_KEY in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;

        document.documentElement.classList.toggle(
          DARK_MODE_CLASS,
          userPreference() || osPreference(),
        );
      },
    });
  }

  protected toggleTheme() {
    document.documentElement.classList.toggle(DARK_MODE_CLASS);

    localStorage[DARK_MODE_KEY] =
      document.documentElement.classList.contains(DARK_MODE_CLASS);
  }
}
