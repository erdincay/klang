import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { HttpClientModule } from '@angular/common/http';

const components: any[] = [
  DataComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: components,
  exports: components,
})
export class DataModule { }
