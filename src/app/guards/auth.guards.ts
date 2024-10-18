import { map } from 'rxjs';
import { inject } from '@angular/core'
import { AuthService } from '../service/auth.service';
import { CanActivateFn, Router } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigate(['/iniciarsesion']);
        return false;
      }
    })
  );
};
