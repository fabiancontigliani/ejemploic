import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EjemploIcSharedModule } from 'app/shared/shared.module';
import { EjemploIcCoreModule } from 'app/core/core.module';
import { EjemploIcAppRoutingModule } from './app-routing.module';
import { EjemploIcHomeModule } from './home/home.module';
import { EjemploIcEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EjemploIcSharedModule,
    EjemploIcCoreModule,
    EjemploIcHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EjemploIcEntityModule,
    EjemploIcAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class EjemploIcAppModule {}
