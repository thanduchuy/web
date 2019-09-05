import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './home/carousel/carousel.component';
import { LabelsComponent } from './home/labels/labels.component';
import { CardComponent } from './home/card/card.component';
@NgModule({
  declarations: [HomeComponent,CarouselComponent, LabelsComponent, CardComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MDBBootstrapModule
  ]
})
export class ModulesModule { }
