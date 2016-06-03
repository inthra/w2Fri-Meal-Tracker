import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-info',
  inputs: ['food'],
  templateUrl: 'app/edit-food-info.view.html'
})
export class EditFoodInfoComponent {
  public food: Food;
}
