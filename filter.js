// const numbers = [12, 3, 43, 54, 6, 7, 67, 87];
// const bigNums = numbers.filter(x => x > 20);
// console.log(bigNums);



// const number = [12, 3, 43, 54, 6, 7, 67, 87];
// const firstNum = numbers.find(x => x > 20);
// console.log(firstNum);



const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:2, name: 'Mobile', price: 30000},
    {id:3, name: 'Watch', price: 45000},
    {id:4, name: 'Tablet', price: 35000},
    {id:5, name: 'Airpod', price: 20000}
];
const product = products.find(x => x.price < 40000);
console.log(product);