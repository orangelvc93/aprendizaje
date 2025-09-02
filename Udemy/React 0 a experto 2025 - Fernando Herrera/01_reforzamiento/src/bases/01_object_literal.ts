// Un objeto literal es una forma de declarar y definir un objeto directamente en el código, usando llaves {}. Este método rápido y eficiente permite crear objetos con datos estructurados y acciones asociadas, los cuales pueden contener cualquier tipo de dato, incluyendo otros objetos y funciones.
interface Person{
    firstName: string;
    lastName: string;
    age: number;
}


const ironman : Person ={
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
//     address: {
//         street: 'Malibu',
//         number: 10880,
// }
}

const spiderman = { ...ironman}

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 21;


console.log(ironman, spiderman);



const hulk : Person = {
    firstName: "Hulk",
    lastName: "Hoggan",
    age: 30
}

console.log(hulk);