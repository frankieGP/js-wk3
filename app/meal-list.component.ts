import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

<select (change)="onChange($event.target.value)">
  <option value="allMeals" selected="selected">All Meals</option>
  <option value="highMeals">High Calorie Meals</option>
  <option value="lowMeals">Low Calorie Meals</option>
</select>

<ul>
  <li (click)="isDone(currentMeal)" *ngFor="let currentMeal of childMealList | completeness:filterByCompleteness"><h3>Meal</h3><p>Name: {{currentMeal.name}}</p><p>Description: {{currentMeal.description}}</p> <p>Calories: {{currentMeal.calorie}}</p>

  <input *ngIf="currentMeal.done === true" type="checkbox" checked (click)="toggleDone(currentMeal, false)"/>
<input *ngIf="currentMeal.done === false" type="checkbox" (click)="toggleDone(currentMeal, true)"/>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
  </li>
</ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }



  toggleDone(clickedMeal: Meal, setCompleteness: boolean) {
     clickedMeal.done = setCompleteness;
   }
}
