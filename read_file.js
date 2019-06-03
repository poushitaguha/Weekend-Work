const filePathArg = process.argv.slice(2);
const fs = require("fs");

// const filePath = "." + filePathArg[0];
// console.log(filePath);
//When we enter "/" in command line, the tmp directory isn't found


function readCallback(data) {
 return "Data: " + data.toString();
}

// fs.readFile(filePath, function (err, data) {
fs.readFile(filePathArg[0], function (err, data) {
 if (err) {
   return console.error(err);
 }
 console.log("Asynchronous read: " + readCallback(data));
});