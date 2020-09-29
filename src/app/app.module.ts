import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { DataModule } from './data/data.module';
import { DataComponent } from './data/data.component';
import { MenuComponent } from './menu/menu.component';
import { HeadModule } from './head/head.module';
import { FeetModule } from './feet/feet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    DataModule,
    HeadModule,
    FeetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
