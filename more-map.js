const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);




const friends = ['tom hanks', 'tom Cruise', 'tom crish', 'tom'];
const firstLetter = friends.map(x => x[0]);
const friendLength = friends.map(x => x.length);
console.log(friendLength);



const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:2, name: 'Mobile', price: 45000},
    {id:3, name: 'Watch', price: 45000},
    {id:4, name: 'Tablet', price: 45000},
    {id:5, name: 'Airpod', price: 45000}
];

const product = products.map(n => n.price);
console.log(product);