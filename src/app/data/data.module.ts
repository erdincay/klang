import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';

const components: any[] = [
  DataComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
})
export class DataModule { }
