// string sort

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());


//number sort

const roll_numbers = [5,7,3,9,2,4];

console.log(roll_numbers.sort(function(a,b){
    return (a-b);
}));