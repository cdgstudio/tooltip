import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipModule } from './tooltip';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TooltipModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
