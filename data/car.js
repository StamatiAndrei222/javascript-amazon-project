export class Car {
  #brand;
  #model;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${this.isTrunkOpen ? 'Open' : 'Closed'}`);
  }
  go(){
    if(this.isTrunkOpen){
      console.log('Nu poți porni cu portbagajul deschis')
    }else if(this.speed >= 200){
      console.log('Viteză maximă atinsă')
    }else{
      this.speed += 5;
    }
  }

  brake(){
    if(this.speed <= 0){
      console.log('Vitez minimă atinsă')
    }else{
      this.speed -= 5;
    }
  }

  openTrunk(){
    if(this.speed > 0){
      console.log('Nu se poate de deschis')
    }else if(this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

export const car1 = new Car('Audi', 'A4');
car1.openTrunk();     // 👉 "Nu se poate de deschis" (pentru că merge)
car1.brake();         // scade viteza
car1.brake();
car1.openTrunk();     // 👉 acum merge (viteza e 0)
car1.displayInfo();   // 👉 Audi A4, Speed: 0 km/h, Trunk: Open 

export const car2 = new Car('Toyota', 'Corolla')
car2.displayInfo();