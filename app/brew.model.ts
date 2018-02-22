export class Brew {
  public done: boolean = false;
  public pints: number = 12;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {
  }
}
