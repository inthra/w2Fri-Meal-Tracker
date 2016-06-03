import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { EditFoodInfoComponent } from './edit-food-info.component';
import { NewFoodComponent } from './new-food.component';
import { DietPipe } from './diet.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [DietPipe],
  directives: [FoodComponent, EditFoodInfoComponent, NewFoodComponent],
  templateUrl: 'app/food-list.view.html'
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public filterCalories: string = "all";
  foodSelected(clickedFood: Food): void {
    this.selectedFood = clickedFood;
  }
  createFood(name: string): void {
    this.foodList.push(
      new Food(name, undefined, "", this.foodList.length)
    );
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
