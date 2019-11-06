import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockInvertoryModule } from './stock-inventory/stock-invertory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInvertoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
