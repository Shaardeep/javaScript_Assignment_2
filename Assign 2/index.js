// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

console.log("Q1 END =====================");

console.log("A1 START====================");

let arrayList = [1, 2, 3, 4, 5, 1, 3];
let emptyArray = [];
for (let i = 0; i < arrayList.length; i++) {
  if (arrayList[i] === 1) {
    emptyArray.push(i);
  }
}
console.log(emptyArray);

console.log("Q2 END =====================");

console.log("A2 START====================");

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

console.log("Q3 END =====================");

console.log("A3 START====================");

var arr = [3, 2, 1, 4, 5, 45];
function compare(a, b) {
  return a - b;
}
console.log(arr.sort(compare));

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

console.log("Q4 END =====================");

console.log("A4 START====================");

function checkAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");

  let result = str1 === str2;
  return result;
}

console.log(checkAnagram("LISTEN", "SILENT"));
console.log(checkAnagram("HELLO", "JELLO"));

// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

console.log("Q5 END =====================");

console.log("A5 START====================");

function reverse1(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

console.log(reverse1("HELLO"));
