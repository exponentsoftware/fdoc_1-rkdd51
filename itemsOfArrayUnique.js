const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));

function checkUniqueness(arr) {
  const check = arr.filter((num, pos, array) => {
    return array.indexOf(num) !== pos;
  });
  if (check.length > 0) {
    return false;
  } else {
    return true;
  }
}
