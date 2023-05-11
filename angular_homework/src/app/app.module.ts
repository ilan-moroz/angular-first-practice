import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreenDirective } from './dir/green.directive';
import { ListComponent } from './comps/list/list.component';
import { UserInputComponent } from './comps/user-input/user-input.component';

@NgModule({
  declarations: [AppComponent, GreenDirective, ListComponent, UserInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
