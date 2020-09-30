import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { HttpClientModule } from '@angular/common/http';

const components: any[] = [
  MenuComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: components,
  exports: components
})
export class MenuModule { }
