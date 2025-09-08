import { Car } from './car.js'

export class RaceCar extends Car{
  constructor(brand, model, acceleration){
    super(brand, model)
    this.acceleration = acceleration;
  }
  go() {
    if (this.speed >= 300) {
      console.log('Viteză maximă atinsă');
    } else {
      this.speed += this.acceleration;
    }
  }
  openTrunk() {
    console.log('Mașinile de curse nu au portbagaj');
  }

  closeTrunk() {
    console.log('Mașinile de curse nu au portbagaj');
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Acceleration: ${this.acceleration}`);
  }
}
