import { Component, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'new-brew',
  template: `
  <h1>Enter A New Brew</h1>
   <div>
     <label>Enter Brew name:</label>
     <input #newName> <br>
     <label>Enter Brand:</label>
       <input #newBrand> <br>
     <label>Enter Price:</label>
       <input #newPrice> <br>
       <label>Enter alcohol content:</label>
         <input #newAlcholContent>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcholContent.value);
    newName.value='';
    newBrand.value='';
    newPrice.value='';
    newAlcholContent.value='';
    ">Add</button>
  </div>
  `
})

export class NewBrewComponent {
  @Output() newBrewSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newBrewToAdd: Brew = new Brew(name, brand, price, alcoholContent);
    this.newBrewSender.emit(newBrewToAdd);
  }
}
