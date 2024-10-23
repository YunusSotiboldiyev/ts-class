class Vehicle {
     make: string;
     model: string;
 
     constructor(make: string, model: string) {
         this.make = make;
         this.model = model;
     }
 
     getInfo() {
         console.log(`${this.make}'s model: ${this.model}`);
     }
 }
 
 class Car extends Vehicle {
     year: number;
 
     constructor(make: string, model: string, year: number) {
         super(make, model);
         this.year = year;
     }
     getFullInfo(){
          console.log(`${this.make}'s model: ${this.model} made in ${this.year}`);
     }
 }
 

 const newObject = new Vehicle("Bonvi", "M5");
 newObject.getInfo(); 
 

 const newCar = new Car("BMW", "M5", 2024);
newCar.getFullInfo();