class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'BEEP';
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }
    numWheels = 4;
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }
    honk(){
        return 'VROOM';
    }
    numWheels = 2;
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addNewVehicle(newVehicle) {
        if(!newVehicle instanceof Vehicle) {
            return 'This is not a vehicle'
        }
        if (this.vehicles.length >= this.capacity) {
            return 'Garage is full'
        }
        this.vehicles.push(newVehicle)
    }
}