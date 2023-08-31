// const { readFileSync, writeFileSync } = require('fs');

// const read = readFileSync('./Folder/sub/test.txt', "utf8");
// const read1 = readFileSync('./Folder/sub/testWrite.txt', "utf8");

// writeFileSync("./Folder/sub/testResult.txt", `${read}, ${read1}`, { flag: 'a' });

// console.log(readFileSync('./Folder/sub/testResult.txt', "utf8"));

const { readFile, writeFile } = require('fs');

readFile('./Folder/sub/test.txt', "utf-8", ((err, data) => {
    const read = data;
    readFile('./Folder/sub/testWrite.txt', 'utf8', ((err, data) => {
        const read1 = data;
        console.log(read1, "read1");
        writeFile('./Folder/sub/testResult.txt', `${read} - ${read1}`, 'utf-8', ((err, data) => console.log(data)))
    }));
}));