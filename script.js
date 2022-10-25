let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
  1,
  1,
  2,
  true,
  true,
  false,
];

function unique(arr) {
  let array = [];
  const ordersSet = new Set(arr);
  ordersSet.forEach((item) => array.push(item));
  return array;
}

console.log(unique(values));
