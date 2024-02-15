import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaNewPage } from './pizza-new.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaNewPageRoutingModule {}
