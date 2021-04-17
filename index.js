const path           = require('path');
const fs             = require('fs');
const markdownpdf    = require("markdown-pdf");

let inFile  = path.join(__dirname, 'db', 'test.md');
let outFile = path.join(__dirname, 'db', 'test.pdf');
 
fs.createReadStream(inFile)
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(outFile))
