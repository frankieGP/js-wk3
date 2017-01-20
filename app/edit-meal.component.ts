import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `

  <div>
  <div *ngIf="childSelectedMeal">                  <h3>{{childSelectedMeal.description}}</h3>
     <p>Meal Complete? {{childSelectedMeal.done}}</p>
    <h3>Edit Meal</h3>
    <label>Enter Meal Name:</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Enter Meal Description:</label>
    <input [(ngModel)]="childSelectedMeal.calorie">
    <label>Enter Meal Calorie:</label>
    <input [(ngModel)]="childSelectedMeal.description">
     <label>Enter Meal Priority (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="childSelectedMeal.priority" [value]="1">1 (Low Calorie)<br>
     <input type="radio" [(ngModel)]="childSelectedMeal.priority" [value]="3">3 (High Calorie)<br>
     <button (click)="doneButtonClicked()">Done</button>


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
