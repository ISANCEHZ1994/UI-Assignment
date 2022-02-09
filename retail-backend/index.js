import { faker } from '@faker-js/faker';
// const testName = faker.name.findName();
// const testNumber = faker.datatype.number({ min: 10, max: 1000 });
// console.log(testName);
// console.log(testNumber);

function generateCustomers(){

    const customers = [];
    
    for(let i = 0; i < 5; i++){  

       let randomName = faker.name.findName();
       let randomPurchase = faker.datatype.number({ min: 10, max: 1500 });

       customers.push({
           name: randomName,
           purchase: randomPurchase
       });
    };
    return { "customers" : customers }
};

let dataObj = generateCustomers();
export default dataObj;

console.log(dataObj);

// const jsonData = JSON.stringify({
//     randomName,
//     randomNumber
// });

// console.log(jsonData);
