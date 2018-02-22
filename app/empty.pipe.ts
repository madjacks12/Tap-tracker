import {Pipe, PipeTransform} from '@angular/core';
import {Brew} from './brew.model';

@Pipe({
  name: "empty",
   pure: false
})


export class EmptyPipe implements PipeTransform {
  transform(input: Brew[], desiredLevel) {
    var output: Brew[] = [];
    if(desiredLevel === "good") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false && input[i].pints >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLevel === "under10") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLevel === "empty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    }

    else {
      return input;
    }
  }

}
