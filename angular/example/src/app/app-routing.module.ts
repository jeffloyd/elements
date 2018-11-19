import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageOverviewComponent } from './pages/overview/overview.component';
import { PageCrudComponent } from './pages/crud/crud.component';
import { PageSettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/overview', pathMatch: 'full' },
  { path: 'pages/overview', component: PageOverviewComponent },
  { path: 'pages/users', component: PageCrudComponent },
  { path: 'pages/settings', component: PageSettingsComponent },
  { path: '**', redirectTo: 'pages/overview' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
