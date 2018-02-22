import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './Brew.model';

@Component({
  selector: 'edit-brew',
  template: `
    <div>
      <div *ngIf="childSelectedBrew">
        <h3>{{childSelectedBrew.name}}</h3>
        <div *ngIf="childSelectedBrew.done === true">
          <p>Is Keg Empty? Yes</p>
        </div>
        <div *ngIf="childSelectedBrew.done === false">
          <p>Is Keg Empty? No</p>
        </div>
        <hr>
        <h3>Edit Beer</h3>
        <label>Enter Beer Name:</label>
        <input [(ngModel)]="childSelectedBrew.name">
        <label>Enter Beer Brand:</label>
        <input [(ngModel)]="childSelectedBrew.brand">
        <label>Enter Beer Price:</label>
        <input [(ngModel)]="childSelectedBrew.price">
        <label>Enter Beer Alcohol Percentage:</label>
        <input [(ngModel)]="childSelectedBrew.alcoholContent">

        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditBrewComponent {
  @Input() childSelectedBrew: Brew;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
}
}
