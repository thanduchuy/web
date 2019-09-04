import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
const modules = [MatButtonModule, MatSelectModule, MatCheckboxModule, MatInputModule , MatFormFieldModule];

const components = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules, ...components],
  exports: [...modules, ...components, MatButton, MatCheckboxModule, MatTabsModule , MatInputModule, MatFormFieldModule]
})
export class MaterialsModule {}
