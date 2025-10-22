const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
];

const gasCars = [];
const dieselCars = [];
const otherCars = [];

/*

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    if(car.fuel === "benzina") {
        gasCars.push(car);
    } else if(car.fuel === "diesel") {
        dieselCars.push(car);
    } else {
        otherCars.push(car);
    }
}

*/

cars.forEach((car) => {

    if(car.fuel === "benzina") {
        gasCars.push(car);
    } else if(car.fuel === "diesel") {
        dieselCars.push(car);
    } else {
        otherCars.push(car);
    }
})

/*

LOG: ciclo for e forEach

console.log(gasCars);
console.log(dieselCars);
console.log(otherCars);
 */

// Variabili con filter
const filterGas = cars.filter((car) => {
    
    if(car.fuel === "benzina") {
        return true
    }
})

const filterDiesel = cars.filter((car) => {

    if(car.fuel === "diesel") {
        return true
    }
})

const filterOther = cars.filter((car) => {

    if(car.fuel !== "benzina" && car.fuel !== "diesel") {
        return true
    }
})

console.log(filterGas);
console.log(filterDiesel);
console.log(filterOther);




