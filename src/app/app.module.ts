import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NumeriprimiComponent } from './numeriprimi/numeriprimi.component';
import { GriphusComponent } from './griphus/griphus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NumeriprimiComponent,
    GriphusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
