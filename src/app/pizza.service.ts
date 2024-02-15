import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pizza } from './models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private dbPath = '/pizzas';
  pizzasRef: AngularFirestoreCollection<Pizza>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.pizzasRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.pizzasRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewPizza(pizza: Pizza) : any {
    return new Observable(obs => {
      this.pizzasRef.add({...pizza}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.pizzasRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(pizza:Pizza) {
    return new Observable(obs => {
      this.pizzasRef.doc(pizza.id).update(pizza);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`pizzas/${id}`).delete();
  }
}
