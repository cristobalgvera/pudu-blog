import { render, screen } from '@testing-library/angular';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await render(NavbarComponent);
  });

  it('should render home page link', () => {
    expect(screen.getByTestId('home-page-link')).toHaveAttribute(
      'routerLink',
      '/',
    );
  });

  it.todo('should navigate to home page when home page link is clicked');

  it('should render theme selector', () => {
    expect(screen.getByTestId('theme-selector-button')).toBeVisible();
  });
});
