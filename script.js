let salaries = {
  peyman: 333,
  John: 100,
  Pete: 3000,
  Mary: 2500,
};

function topSalary(sls) {
  let maxCash = Object.entries(sls).sort((a, b) => {
    return a[1] - b[1];
  });
  console.log(maxCash);
  const len = maxCash.length;
  return maxCash[len - 1][0];
}
console.log(topSalary(salaries));
// let obj = {};

// function calling() {
//   obj[prompt("enter your key:")] = +prompt("enter your number:");
//   const stop = prompt("enter your situation:");
//   if (stop === "no") {
//     console.log(obj);
//   } else {
//     calling();
//   }
// }

// calling();
