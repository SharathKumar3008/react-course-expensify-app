// Object Destructuring
/*const person = {
    name : 'Sharath',
    age : 25,
    loacation : {
        city : 'Karur',
        temp : 36
    }
};
const {name : first_name = 'Anonyomus', age} = person;
//const name = person.name;
//const age = person.age;
console.log(`${first_name} is ${age} years old`);
const {city, temp : temperature} = person.loacation;
if(temperature && city)
console.log(`It's ${temperature} celsius in ${city}`);
const book = {
    title : 'Ego is an enemy',
    author : 'Ryan Holiday',
    publisher : {
        name : 'Penguin'
    }
};
const {name : publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);*/

//
// Array Destructuring
//

//const address = ['20, periya kalipalayam', 'Karur', 'Tamil Nadu', '639004'];
//const [, city, state='Delhi'] = address; 
//console.log(`You are in ${city} ${state}`);

const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [itemName,,mprice] = item;
console.log(`A medium ${itemName} costs ${mprice}`);

