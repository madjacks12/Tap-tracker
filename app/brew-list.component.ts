import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
  <select (change)="onChange($event.target.value)">
        <option value="allBrews">All Kegs</option>
        <option value="notEmpty">Full Kegs</option>
        <option value="empty" selected="selected">Empty Kegs</option>
      </select>
      <ul>
        <li *ngFor="let currentBrew of childBrewList | empty:filterByEmptiness">{{currentBrew.name}} {{currentBrew.brand}} &#36;{{currentBrew.price}}, {{currentBrew.alcoholContent}}&#37;<br>
          <label>Empty/Full</label>
          <input *ngIf="currentBrew.done === true" type="checkbox" checked (click)="toggleDone(currentBrew, false)"/>
          <input *ngIf="currentBrew.done === false" type="checkbox" (click)="toggleDone(currentBrew, true)"/><br>
          <button (click)="editButtonHasBeenClicked(currentBrew)">Edit!</button>
        </li>
      </ul>
  `
})

export class BrewListComponent {

  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();

  filterByEmptiness: string = "empty";

  editButtonHasBeenClicked(brewToEdit: Brew) {
    this.clickSender.emit(brewToEdit);
  }
  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  alcoholColor(currentBrew){
    if (currentBrew.alcoholContent > 8){
      return "bg-danger";
    } else if (currentBrew.alcoholContent > 5 && currentBrew.alcoholContent <= 8) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

toggleDone(clickedBrew: Brew, setEmpty: boolean) {
   clickedBrew.done = setEmpty;
 }

}
