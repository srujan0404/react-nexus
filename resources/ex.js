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

mkdir("dir2", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("dir is formed");
});

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

const folderPath = path.dirname(p);
console.log(folderPath);

const filePath = path.basename(p);
console.log(filePath);

const sourcePath = "C:UsersDharmMusic\react-nexus\resourceshelp.txt";
const destinationPath = "C:UsersDharmMusic\react-nexus\resourcesdir";

copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File copied successfully");
  }
});

const copyFile = (source, destination, cb) => {
  readFile(source, "utf-8", (err, data) => {
    if (err) {
      return cb(err);
    }
    writeFile(destination, data, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    });
  });
}