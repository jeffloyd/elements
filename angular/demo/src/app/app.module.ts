import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    BootstrapComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
