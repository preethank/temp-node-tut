// path

const path = require('path');

const filePath = path.join("Folder/", "sub", "test.txt");
// console.log(path.basename(filePath), "filePath");

const absoluteUrl = path.resolve(__dirname, "solder", "sub", "test.txt");
// console.log(absoluteUrl, "absoluteUrl");

// 