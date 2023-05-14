import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';
import { CryptoListComponent } from './comps/crypto-list/crypto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodsComponent } from './comps/foods/foods.component';
import { PageError404Component } from './comps/page-error404/page-error404.component';

@NgModule({
  declarations: [AppComponent, ItemsListComponent, CryptoListComponent, FoodsComponent, PageError404Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
