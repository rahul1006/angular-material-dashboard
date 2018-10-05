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
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    Dashboard2Component,
    MainNavComponent,
    MainTableComponent,
    MainDashboardComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
