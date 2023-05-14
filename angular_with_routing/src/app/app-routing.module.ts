import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './comps/crypto-list/crypto-list.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';
import { FoodsComponent } from './comps/foods/foods.component';

const routes: Routes = [
  { path: '', component: CryptoListComponent },
  { path: 'list', component: ItemsListComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'foods/:id', component: FoodsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
