let arr = ["nap", "teachers", "PAN", "cheaters", "ear", "era", "hectares"];
function groupAnagrams(strs) {
  let result = {};
  let finall = [];
  for (let word of strs) {
    let cleansed = word.toLowerCase().split("").sort().join("");
    console.log(cleansed);
    if (result[cleansed]) {
      result[cleansed].push(word);
    } else {
      result[cleansed] = [word];
    }
  }
  console.log(result);
  let anagrams = Object.values(result);
  console.log(anagrams);
  anagrams.forEach((item) => finall.push(item[0]));
  return finall.join();
}
alert(groupAnagrams(arr));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// const groupAnagrams = (strs) => {
//   const anagrams = {};

//   for (let i = 0; i < strs.length; i++) {
//     const singleString = strs[i];
//     const sortedString = [...singleString].sort().join("");
//     if (!anagrams[sortedString]) anagrams[sortedString] = [];
//     anagrams[sortedString].push(singleString);
//   }
//   return Object.values(anagrams);
// };

// console.log(groupAnagrams(arr));
