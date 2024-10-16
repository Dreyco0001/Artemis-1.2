import { CanActivateFn } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {
  return true;
};
