import { BlogPostComponent } from './blog-post/blog-post.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: MainDashboardComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'table', component: MainTableComponent },
    { path: 'form', component: FormFieldComponent },
    { path: 'blog', component: BlogPostComponent },
    { path: '**', redirectTo: 'blog', pathMatch: 'full' }
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
