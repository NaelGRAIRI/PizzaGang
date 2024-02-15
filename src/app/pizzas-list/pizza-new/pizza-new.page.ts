import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PizzaService } from 'src/app/pizza.service';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-pizza-new',
  templateUrl: './pizza-new.page.html',
  styleUrls: ['./pizza-new.page.scss'],
})
export class PizzaNewPage implements OnInit {
  public pizza!: Pizza;

  constructor(
    private Pizza: PizzaService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.pizza = new Pizza();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Pizza enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/pizzas']);
      }, 2000);
    });
  }

  add() {
    this.Pizza.saveNewPizza(this.pizza).subscribe(() => {
      this.pizza = new Pizza();
      this.presentToast();
    });
  }
}
