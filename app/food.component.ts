import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  templateUrl: 'app/food.view.html'
})
export class FoodComponent {
  public food: Food;
}
