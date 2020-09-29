import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeetComponent } from './feet.component';

const components: any[] = [
  FeetComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
})
export class FeetModule { }
