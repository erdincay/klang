import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

const components: any[] = [
  MenuComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class MenuModule { }
