import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "diet",
  pure: true
})
export class DietPipe implements PipeTransform {
  transform(input: Food[], args) {
    var foodStatus = args[0];
    if(foodStatus === "diet") {
      return input.filter(function(food) {
        return food.diet;
      });
    } else if (foodStatus === "notDiet") {
      return input.filter(function(food) {
        return !food.diet;
      });
    } else {
      return input;
    }
  }
}
