import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div class="col-sm-5" id="each-food-block">
    <h4>{{ food.name }}</h4>
    <ul>
      <li>{{ "Calories: " + food.calories + kCal}}</li>
      <li>{{ "Details: $" + food.details}}</li>
    </ul>
  </div>
  `
})
export class FoodComponent {
  public food: Food;
}
