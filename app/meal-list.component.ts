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


<div *ngFor="let currentMeal of childMealList | calories:filterByCalories">
  <h3>Meal</h3>
    <ul>
      <li>Name: {{currentMeal.name}}</li>
      <li>Description: {{currentMeal.description}}</li>
      <li>Calories: {{currentMeal.calorie}}</li>
    </ul>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
</div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }



}
