import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaPage } from './pizza.page';

describe('PizzaPage', () => {
  let component: PizzaPage;
  let fixture: ComponentFixture<PizzaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
