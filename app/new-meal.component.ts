import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
  <div>
    <label>Enter Meal Name:</label>
    <input #newMeal>
  </div>
   <div>
     <label>Enter Meal Description:</label>
     <input #newDescription>
   </div>
   <div>
   <div>
     <label>Enter Meal Calories:</label>
     <input #newCalorie>
   </div>
    <label>Meal Calories:</label>
    <select #newPriority>
      <option [value]="1"> Low Calorie </option>
      <option [value]="3"> High Calorie </option>
    </select>
        <button (click)="submitForm(newName.value,newDescription.value, newCalorie.value, newPriority.value)">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, description: string, calorie: number, priority: number) {
    var newMealToAdd: Meal = new Meal(name, description, calorie, priority);
  }

}
