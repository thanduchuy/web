import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialsModule } from '../material/materials.module';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [FormComponent]
})
export class ComponentsModule { }
