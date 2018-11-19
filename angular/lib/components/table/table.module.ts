import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ETableComponent,
  ETablePaginationComponent,
  HeadTemplateDirective,
  CellTemplateDirective } from './table.component';
  
const COMPONENTS = [
  ETableComponent,
  ETablePaginationComponent,
]
const DIRECTIVES = [
  HeadTemplateDirective,
  CellTemplateDirective,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [
    FormsModule,
    ...COMPONENTS,
    ...DIRECTIVES,
  ]
})
export class ETableModule {}
