import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { AuthActionTypes, Login, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { Authenticate } from '../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects {


  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService.login(auth).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );


  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router) { }

}
