// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

let array = [];

reverseArray(["A", "B", "C"]);

function reverseArray(arr) {
  for (i = arr.length; i >= 0; i--) {
    array.push(arr[i]);
  }
  console.log(array);
  const newArr = array.slice(1);
  console.log(newArr);
}
