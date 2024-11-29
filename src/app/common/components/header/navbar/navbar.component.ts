import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeSelectorComponent } from './theme-selector';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ThemeSelectorComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}