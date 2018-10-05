import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    { path: 'dashboard', component: MainDashboardComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'table', component: MainTableComponent },
    { path: 'form', component: FormFieldComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
