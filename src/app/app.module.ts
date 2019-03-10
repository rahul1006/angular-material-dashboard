import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { DataService } from './blog-post/data.service';
import { PostDialogComponent } from './blog-post/post-dialog/post-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { Nav2Component } from './nav2/nav2.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MainNavComponent,
    MainTableComponent,
    MainDashboardComponent,
    FormFieldComponent,
    BlogPostComponent,
    PostDialogComponent,
    Nav2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    LayoutModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ]
})
export class AppModule { }
