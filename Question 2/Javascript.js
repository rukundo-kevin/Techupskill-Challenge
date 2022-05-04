const item = [
	{ name: "Bike", price: 100 },
	{ name: "TV", price: 200 },
	{ name: "Album", price: 10 },
	{ name: "Book", price: 5 },
	{ name: "Phone", price: 500 },
	{ name: "Computer", price: 1000 },
];

// Question 1
//find the cheapest item by sorting the object array in ascending order and retrieving the first item
const cheapestItem = item.sort((a,b)=>a.price-b.price);
console.log(
	`Q2. The cheapest product is
		${cheapestItem[0].name}
		with price of 
		${cheapestItem[0].price}`
);


// Question 2
//find the expensive item by sorting the object array in descending order and retrieving the first item
const expensiveItem = item.sort((a,b)=>b.price-a.price);
console.log(
	`Q2. The expensive product is
		${expensiveItem[0].name}
		with price of 
		${expensiveItem[0].price}`
);

// Question 3
/* find the toal price of all the items in the array by reducing the array to a single value and adding the price of each item */
const total = item.reduce((acc, item) => acc + item.price, 0);

console.log(`Q3. The total price of all products is ${total}`);

// Question 4
const totalAboveTen = item.reduce((acc, item) => acc + (item.price >= 10 ? item.price: 0), 0);

console.log(`Q4. The total price of all products whose price is above 10 dollars is: ${totalAboveTen}`);
