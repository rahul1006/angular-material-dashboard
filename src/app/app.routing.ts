import { BlogPostComponent } from './blog-post/blog-post.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { AuthGuard } from './auth/services/auth-guard.service';
import { Nav2Component } from './nav2/nav2.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'nav2', component: Nav2Component },
    { path: 'dashboard', component: MainDashboardComponent, canActivate: [AuthGuard] },
    { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
    { path: 'table', component: MainTableComponent, canActivate: [AuthGuard] },
    { path: 'form', component: FormFieldComponent, canActivate: [AuthGuard] },
    { path: 'blog', component: BlogPostComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
