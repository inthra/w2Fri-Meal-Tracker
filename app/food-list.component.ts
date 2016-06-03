import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent],
  template: `
  <div class="row">
    <food-display *ngFor="#currentFood of foodList"
      (click)="foodSelected(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
  </div>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public filterLow: string = "all";
  foodSelected(clickedFood: Food): void {
    this.selectedFood = clickedFood;
  }
  createFood(name: string): void {
    this.foodList.push(
      new Food(name, "000", "details", this.foodList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
