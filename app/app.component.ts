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

  </div>
  `
})

export class AppComponent {
  selectedMeal = null;

  masterMealList: Meal[] = [
      new Meal('Chips', 3),
      new Meal('Soup', 2),
      new Meal('Broccoli', 1)
    ];




editMeal(clickedMeal) {
  this.selectedMeal = clickedMeal;
}
finishedEditing() {
  this.selectedMeal = null;
}





}
