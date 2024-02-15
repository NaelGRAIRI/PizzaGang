import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaNewPageRoutingModule } from './pizza-new-routing.module';

import { PizzaNewPage } from './pizza-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaNewPageRoutingModule
  ],
  declarations: [PizzaNewPage]
})
export class PizzaNewPageModule {}
