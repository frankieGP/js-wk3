import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})


export class CaloriesPipe implements PipeTransform {


  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
    if(desiredCalories === "highMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie >= 501) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "lowMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie <= 500) {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }


}
