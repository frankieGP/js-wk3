import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of childMealList"><h3>Meal</h3><p>Name: {{currentMeal.name}}</p><p>Description: {{currentMeal.description}}</p> <p>Calories: {{currentMeal.calorie}}</p>  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
    </li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
