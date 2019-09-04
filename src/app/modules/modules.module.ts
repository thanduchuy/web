import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { LabelComponent } from './home/label/label.component';
import { RateComponent } from './home/rate/rate.component';
import { PlanComponent } from './home/plan/plan.component';
import { SharedModule } from '../shared/shared.module';
import { NguiMapModule} from '@ngui/map';
@NgModule({
  declarations: [HomeComponent, LabelComponent, RateComponent, PlanComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY'})
  ]
})
export class ModulesModule { }
