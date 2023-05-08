import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SuccessComponent } from './targil/success/success.component';
import { ErorrComponent } from './targil/erorr/erorr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuccessComponent,
    ErorrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
