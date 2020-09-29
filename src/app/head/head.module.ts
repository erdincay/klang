import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';

const components: any[] = [
  HeadComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
})
export class HeadModule { }
