import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

import { PageOverviewComponent } from './pages/overview/overview.component';
import { PageCrudComponent } from './pages/crud/crud.component';
import { PageSettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/overview', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: PageOverviewComponent },
      { path: 'users', component: PageCrudComponent },
      { path: 'settings', component: PageSettingsComponent },
    ]
  },
  { path: 'components', component: ComponentsComponent },
  { path: 'bootstrap', component: BootstrapComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
