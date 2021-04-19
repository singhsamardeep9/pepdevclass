let fs = require('fs');
let data=fs.readFileSync('abc.txt');
console.log(data.toString());
//line3-It is converted to string becaause it returns the data in buffer which is difficult for user to understand
let wdata = 'This is some demo data that i want to write';
fs.writeFileSync('write.txt',wdata);
fs.appendFileSync('write.txt',' this is append data');
//fs.unlinkSync('write.txt'); //used to delete file 
//fs.mkdirSync('Other');//It creates a new folder with the give name "other"
console.log(fs.existsSync('abc.txt'));
