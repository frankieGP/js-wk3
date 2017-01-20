import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {


  transform(input: Meal[], desiredCompleteness) {
    var output: Meal[] = [];
    if(desiredCompleteness === "allMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "highMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "lowMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
