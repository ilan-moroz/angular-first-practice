import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './comps/crypto-list/crypto-list.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';
import { FoodsComponent } from './comps/foods/foods.component';
import { PageError404Component } from './comps/page-error404/page-error404.component';

const routes: Routes = [
  { path: '', component: CryptoListComponent },
  { path: 'list', component: ItemsListComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'foods/:id', component: FoodsComponent },
  { path: '**', component: PageError404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
