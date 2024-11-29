import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './navbar';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}