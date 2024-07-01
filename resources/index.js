import { readFileSync, appendFileSync, appendFile } from "fs";

const data = readFileSync('help.txt', "utf-8");
console.group("" + data);

appendFileSync("help.txt", "class is going on", "utf-8");
setTimeout(console.log(data), 1000);

