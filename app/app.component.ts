import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>MEAL TRACKER</h1>
    <ul>
      <li [class]="priorityColor(currentMeal)" *ngFor="let currentMeal of meals">{{currentMeal.description}} <button (click)="editMeal(currentMeal)">Edit!</button>
      </li>
    </ul>
    <hr>
  <div *ngIf="selectedMeal">                  <h3>{{selectedMeal.description}}</h3>
     <p>Meal Complete? {{selectedMeal.done}}</p>
    <h3>Edit Meal</h3>
    <label>Enter Meal Description:</label>
    <input [(ngModel)]="selectedMeal.description">
     <label>Enter Meal Calorie (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="selectedMeal.priority" [value]="1">1 (Low Calorie)<br>
     <input type="radio" [(ngModel)]="selectedMeal.priority" [value]="2">2 (Medium Calorie)<br>
     <input type="radio" [(ngModel)]="selectedMeal.priority" [value]="3">3 (High Calorie)<br>
     <button (click)="finishedEditing()">Done</button>

    </div>
  </div>
  `
})

export class AppComponent {
  selectedMeal = null;

meals: Meal[] = [
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
priorityColor(currentMeal){
  if (currentMeal.priority === 3){
    return "bg-danger";
  } else if (currentMeal.priority === 2) {
    return  "bg-warning";
  } else {
    return "bg-info";
  }
}




}

export class Meal {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {   }
}
