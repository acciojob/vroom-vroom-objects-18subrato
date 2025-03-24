// Complete the js code
function Car(make, model) {
	constructor(make,model){
		this._make = make;
		this._model = model;
	}
	getMakeModel(){
		return `${this._make} ${this._model}`;
	}
}

function SportsCar(make, model, topSpeed) {
	constructor(make,model,topSpeed){
		this.make = make;
		this.model = make;
		this._topSpeed = topSpeed;
	}
	getTopSpeed(){
		return `${this._topSpeed}`;
	}
}

const car = new SportsCar("Ferrari","Testarossa",200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed())


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
