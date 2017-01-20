import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>MEAL TRACKER</h1>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>

  </div>
  `
})

export class AppComponent {
  selectedMeal = null;

  masterMealList: Meal[] = [
      new Meal('Chips', "half bag", 200, 3),
      new Meal('Soup', "two cups", 400, 2),
      new Meal('Broccoli', "12oz", 120, 1)
    ];




editMeal(clickedMeal) {
  this.selectedMeal = clickedMeal;
}
finishedEditing() {
  this.selectedMeal = null;
}





}
