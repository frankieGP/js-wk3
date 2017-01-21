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
     <label>Enter Meal Calories:</label>
     <input #newCalorie>
    <button (click)="submitForm(newName.value, newDescription.value, newCalorie.value); newName.value=''; newDescription.value=''; newCalorie.value='';">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, description: string, calorie: number) {
    var newMealToAdd: Meal = new Meal(name, description, calorie);
    this.newMealSender.emit(newMealToAdd);

  }

}
