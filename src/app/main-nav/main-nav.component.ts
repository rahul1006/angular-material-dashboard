import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/reducers';
import * as fromRoot from '../reducers';
import * as AuthActions from '../auth/actions/auth.actions';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  loggedIn$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<fromRoot.State>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }


  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
