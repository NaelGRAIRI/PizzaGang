import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzasListPage } from './pizzas-list.page';

describe('PizzasListPage', () => {
  let component: PizzasListPage;
  let fixture: ComponentFixture<PizzasListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PizzasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
