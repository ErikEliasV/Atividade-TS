//Questão 12. Escreva um programa TypeScript que defina uma interface TypeScript Car com as propriedades make e model do tipo string. Crie um type Bus com as propriedades make e model do tipo string e uma propriedade adicional payloadCapacity do tipo number. Agora, crie um type Vehicle que represente um Car ou um Truck usando um union type. 

interface Car {
    make: string;
    model: string;
}

type Bus = Car & {
    payloadCapacity: number;
}

type Vehicle = Car | Bus;

function describeVehicle(vehicle: Vehicle)  {
    console.log(`Marca: ${vehicle.make}\nModelo: ${vehicle.model}`);

    if ("payloadCapacity" in vehicle) {
        console.log(`Capacidade de carga: ${vehicle.payloadCapacity}`);
    }
}

const MyCar: Car = { make: "Fiat", model: "Mobi" };
const MyBus: Bus = { make: "Comil", model: "Campione Invictus 1200", payloadCapacity: 80 }; //Mostrando que se colocar o payloadCapacity ele vai fazer a verificação de que é um Bus

describeVehicle(MyCar);
describeVehicle(MyBus);

export {};