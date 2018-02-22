import { Component } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap List For {{month}}/{{day}}/{{year}}</h1>
      <brew-list [childBrewList]="masterBrewList" (clickSender)="editBrew($event)" (pintSender)="sellBrew($event)"></brew-list>
      <hr>
      <edit-brew [childSelectedBrew]="selectedBrew" (doneButtonClickedSender)="finishedEditing()"></edit-brew>
      <new-brew (newBrewSender)="addBrew($event)"></new-brew>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedBrew = null;

  masterBrewList: Brew [] = [
    new Brew('Cool Beer', '10 Barrell', 6, 8),
    new Brew('Good Beer', 'Burnside', 5, 6),
    new Brew('Bad Beer', 'Pyramid', 3, 8)
  ];

  editBrew(clickedBrew) {
    this.selectedBrew = clickedBrew;
  }

  sellBrew(soldBrew) {
    this.selectedBrew = soldBrew;
  }

  finishedEditing() {
    this.selectedBrew = null;
  }

  addBrew(newBrewFromChild: Brew) {
  this.masterBrewList.push(newBrewFromChild);
}

}
