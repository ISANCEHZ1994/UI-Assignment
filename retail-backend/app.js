import { faker } from '@faker-js/faker';

function sayHello(name){
    console.log('Hello ' + name)
};

sayHello('Israel');

console.log('how does this looks?')

let firstName = faker.name.firstName();

console.log(firstName);