import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `

  <div>
  <div *ngIf="childSelectedMeal">                  <h3>{{childSelectedMeal.name}}</h3>
    <h3>Edit Meal</h3>
    <label>Enter Meal Name:</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Enter Meal Description:</label>
    <input [(ngModel)]="childSelectedMeal.calorie">
    <label>Enter Meal Calorie:</label>
    <input [(ngModel)]="childSelectedMeal.description">



    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
