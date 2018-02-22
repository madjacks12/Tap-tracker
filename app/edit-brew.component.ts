import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './Brew.model';

@Component({
  selector: 'edit-brew',
  template: `
    <div>
      <div *ngIf="childSelectedBrew">
        <h3>{{childSelectedBrew.name}}</h3>
        <p>Is Keg Empty? {{childSelectedBrew.done}}</p>
        <hr>
        <h3>Edit Task</h3>
        <label>Enter Brew Name:</label>
        <input [(ngModel)]="childSelectedBrew.name">
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
