import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('login guard');

  if (!authService.isLoggedIn()) {
    return true;
  }
  return router.parseUrl('/');
};
