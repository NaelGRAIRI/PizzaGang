import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzasListPageRoutingModule } from './pizzas-list-routing.module';

import { PizzasListPage } from './pizzas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzasListPageRoutingModule
  ],
  declarations: [PizzasListPage]
})
export class PizzasListPageModule {}
