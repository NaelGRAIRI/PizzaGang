import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzasListPage } from './pizzas-list.page';

const routes: Routes = [
  {
    path: '',
    component: PizzasListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./pizza-new/pizza-new.module').then( m => m.PizzaNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzasListPageRoutingModule {}
