import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCheckboxModule, MatTooltipModule, MatToolbarModule, MatSidenavModule,
  MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule

  ],
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule],
  declarations: []
})
export class SharedModule { }
