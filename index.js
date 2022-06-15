var hello_world = new Array("hell", "o wor", "ld!");
var math = new Array(2,3,4);
var fruits = new Array("apple", "banana", "orange");

console.log(hello_world.join(""))
console.log(math.join("+"))
console.log(fruits.join(", "))

function isAdult(value) {
  return value >= 18;
}
var adults = [12, 5, 18, 20, 60, 44].filter(isAdult);

console.log(adults)

console.log(Array.isArray('apple'));
console.log(Array.isArray([1, 2, 4, 0]));

num1 = [1, 2, 3];
num2 = [4, 5, 6];
num3 = [7, 8, 9];

nums1 = num1.concat(num2) 
nums2 = num1.concat(num2,num3) 
console.log(nums1)
console.log(nums2)

var sum = [1, 2, 2, 2].reduce(
  (prevValue,currValue, iteration) => {
  console.log("iteration: ", iteration)
  console.log(prevValue)
  console.log(currValue)
  return prevValue + currValue;
});

console.log("sum: " + sum)

