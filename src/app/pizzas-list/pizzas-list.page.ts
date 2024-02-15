import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.page.html',
  styleUrls: ['./pizzas-list.page.scss'],
})
export class PizzasListPage implements OnInit {
  pizzas!: Array<Pizza>;

  constructor(
    private Pizza: PizzaService
  ) { }

  ngOnInit() {
    this.Pizza.getAll().subscribe((data: any) => {
      this.pizzas = data;
    });
  }

}
