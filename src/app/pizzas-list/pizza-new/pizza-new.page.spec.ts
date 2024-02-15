import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaNewPage } from './pizza-new.page';

describe('PizzaNewPage', () => {
  let component: PizzaNewPage;
  let fixture: ComponentFixture<PizzaNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PizzaNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
