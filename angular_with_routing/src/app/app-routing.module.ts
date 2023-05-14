import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './comps/crypto-list/crypto-list.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';

const routes: Routes = [
  { path: '', component: CryptoListComponent },
  { path: 'list', component: ItemsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
