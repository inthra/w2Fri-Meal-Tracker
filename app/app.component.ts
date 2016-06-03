import { Component, EventEmitter } from 'angular2/core';
// import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  // directives: [FoodListComponent],
  template: `
    <div class="header"><h1>Meal Tracker</h1></div>
    <div class="container">
      <food-list
        [foodList]="foods">
      </food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Roasted beef", "315", "Rib lean roasted beef + fat 3oz", 0),
      new Food("Cashew nuts", "785", "Dry roasted cashew nuts 1 cup", 1),
      new Food("Mac and Cheese", "430", "Home recipe 1 cup", 2),
      new Food("Oysters", "160", "Raw oysters 1 cup", 3),
      new Food("Muffins", "160", "English whole grain muffins 2.7 oz", 4),
      new Food("Chicken lasagna", "300", "Chicken lasagna 1 cup", 5),
    ];
  }
}
