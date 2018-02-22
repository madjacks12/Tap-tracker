import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
  <select (change)="onChange($event.target.value)">
        <option value="allBrews">All Kegs</option>
        <option value="good">Full Kegs</option>
        <option value="under10">Low Kegs</option>
        <option value="empty" selected="selected">Empty Kegs</option>
      </select>
      <ul>
        <li  *ngFor="let currentBrew of childBrewList | empty:filterByEmptiness">{{currentBrew.name}} {{currentBrew.brand}} <span [class]="priceColor(currentBrew)"> <strong>&#36;{{currentBrew.price}} </strong></span>, ABV: <span [class]="alcoholColor(currentBrew)"><strong>{{currentBrew.alcoholContent}}&#37; </strong></span> pints left: <strong>{{currentBrew.pints}}</strong> <br>
          <label>Empty/Full</label>
          <input *ngIf="currentBrew.done === true" type="checkbox" checked (click)="toggleDone(currentBrew, false)"/>
          <input *ngIf="currentBrew.done === false" type="checkbox" (click)="toggleDone(currentBrew, true)"/><br>
          <button id="edit" (click)="editButtonHasBeenClicked(currentBrew)">Edit!</button>
          <button id="sell" (click)="sellPint(currentBrew)">Sold!</button>
        </li>
      </ul>
  `
})

export class BrewListComponent {

  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();
  @Output() pintSender = new EventEmitter();

  filterByEmptiness: string = "empty";

  editButtonHasBeenClicked(brewToEdit: Brew) {
    this.clickSender.emit(brewToEdit);
  }
  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  alcoholColor(currentBrew){
    if (currentBrew.alcoholContent > 8){
      return "text-danger";
    } else if (currentBrew.alcoholContent > 5 && currentBrew.alcoholContent <= 8) {
      return  "text-warning";
    } else {
      return "text-info";
    }
  }

  priceColor(currentBrew){
    if (currentBrew.price > 8){
      return "text-danger";
    } else if (currentBrew.price > 5 && currentBrew.price <= 8) {
      return  "text-success";
    } else {
      return "text-info";
    }
  }

toggleDone(clickedBrew: Brew, setEmpty: boolean) {
   clickedBrew.done = setEmpty;
 }

 sellPint(soldBrew: Brew) {
   soldBrew.pints -=1;
   this.pintSender.emit(soldBrew);
   console.log(soldBrew.pints);
 }

}
