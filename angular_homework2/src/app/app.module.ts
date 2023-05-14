import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BetterGreenDirective } from './dir/better-green.directive';
import { InputUserComponent } from './comps/input-user/input-user.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';
import { CryptoListComponent } from './comps/crypto-list/crypto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BetterGreenDirective,
    InputUserComponent,
    ItemsListComponent,
    CryptoListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
