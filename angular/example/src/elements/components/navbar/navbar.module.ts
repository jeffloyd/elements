import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ENavbarComponent } from './navbar.component';

const COMPONENTS = [
  ENavbarComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule, NgbModule ]
})
export class ENavbarModule {}
