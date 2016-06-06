import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form" id="new-food-form">
    <h3 class="header">Create Food:</h3>
    <input placeholder="Name" class="form-control" #newName>
    <input placeholder="Calories" class="form-control" #newCalories>
    <input placeholder="Details" class="form-control" #newDetails>
    <button (click)="addFood(newName, newCalories, newDetails)" class="btn btn-default" id="add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent {
  public newFoodArray: string[];
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userInputNewFood: HTMLInputElement, userInputNewCalories: HTMLInputElement, userInputNewDetails: HTMLInputElement) {
    this.newFoodArray = [userInputNewFood.value, userInputNewCalories.value, userInputNewDetails.value];
    this.onSubmitNewFood.emit(this.newFoodArray);
    userInputNewFood.value = "";
    userInputNewCalories.value = "";
    userInputNewDetails.value = "";
  }
}
