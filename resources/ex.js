import { readFile, mkdir, rmdir } from "fs";

// import { dir } from "console";

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

// mkdir("dir2", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("dir is formed");
// });

rmdir("dir2", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("dir is removed");
});

const p = "C:UsersDharmMusic\react-nexus\resources";
const path = require("path");

const dirname = path.dirname(p);

const extension = path.extname(p);
console.log(dirname);
console.log(extension);



// Get the path of the folder
const folderPath = path.dirname(p);
console.log(folderPath);

// Get the path of the file
const filePath = path.basename(p);
console.log(filePath);

// Copy the file from source to destination
const sourcePath = "C:UsersDharmMusic\react-nexus\resources\file.txt";
const destinationPath = "/destination/file.txt";

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File copied successfully");
  }
});
