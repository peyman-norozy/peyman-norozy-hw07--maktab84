// const array1 = [5, 6, 2];
// const array2 = [3, 7, 1];
// const array3 = [2, 4, 8];

const array = [
  [5, 6, 2],
  [3, 7, 1],
  [2, 4, 8],
];

function sort(arr) {
  let arrayTotal = [];
  arr.map((item) => arrayTotal.push(...item));
  return arrayTotal.sort((a, b) => b - a).join();
}
console.log(sort(array));
