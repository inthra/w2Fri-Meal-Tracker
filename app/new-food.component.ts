import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3 class="header">Create Food:</h3>
    <input placeholder="Name" class="form-control" #newName>
    <button (click)="addFood(newName, newCalories, newDetails)" class="btn btn-default" id="add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userInputNewName: HTMLInputElement) {
    this.onSubmitNewFood.emit(userInputNewName.value);
    userInputNewName.value = "";
  }
}
