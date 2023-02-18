const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// while loop that prints out contents
let x = 0;
while(x < ingredients.length){
	console.log(ingredients[x]);
	x++
}
// for loop that prints out contents
for(let i = 0; i < ingredients.length; i++){
	console.log(ingredients[i]);
}
// backwards print of contents
for(let i = ingredients.length - 1; i >= 0; i--){
	console.log(ingredients[i]);
}
