import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class DietPipe implements PipeTransform {
  transform(input: Food[], args) {
    var foodStatus = args[0];
    if(foodStatus === "more") {
      return input.filter(function(food) {
        return food.calories > 500;
      });
    } else if (foodStatus === "less") {
      return input.filter(function(food) {
        return food.calories <= 500;
      });
    } else {
      return input;
    }
  }
}
