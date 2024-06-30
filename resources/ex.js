import { readFile } from "fs";


function findSum(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

function findSumAll() {
  console.log(findSum(100));
}

setTimeout(findSumAll, 1000);
console.log("Hello Worlds");

readFile("help.txt", "utf-8", function (err, data) {
  console.log(data);
});
