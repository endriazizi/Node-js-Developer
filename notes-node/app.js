console.log('Starting app.js');

// we are using const since we are not gonna be manipulating the code will send back
// so there is not need to use var keyword
// Require let'us load in the modules functionality so we can call it down below 
const fs = require('fs');
const os = require('os');

const notes = require('./notes');

// var to store the result
var user = os.userInfo();
console.log(user);
/* $ node app.js
Starting App
{ uid: -1,
  gid: -1,
  username: 'Utente',
  homedir: 'C:\\Users\\Utente',
  shell: null } */

/*
Built in Modules
https://nodejs.org/api/index.html

an example
https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
*/ 
// Original Line
//we are passing two arguments ('file name','text we wanna append to the file')
// fs.appendFile('greatings.txt', 'Hello world!');
/* 
$ node -v
v7.2.1
$ node app.js
Starting App
(node:14388) DeprecationWarning: Calling an asynchronous function without callback is deprecated. 
we have installed node V7, but still gonna work but it's just warning
*/


// *** WORKS ***
// Option One is adding a callback as third argument to append file
// this callback will be executed when either an error occurs or the file succesfully gets written

//template sting 
fs.appendFile('greatings.txt', 'Hello world ' + user.username + '!', function (err) {
    if (err) {
        console.log('Unable to write to file');
    } else {
        console.log('Text append to the file correctly!');
    }
});
// Another way using Es6 feature known as template string because we are using Node V6 or grater,
// start and ends with back tick oparator 
// `to insert javascritp variable inside of our template string: ${}`
fs.appendFile('greatings.txt', `Hello world  ${user.username}!`, function (err) {
    if (err) {
        console.log('Unable to write to file');
    } else {
        console.log('Text append to the file correctly!');
    }
});

// Option two
// fs.appendFileSync('greatings.txt', 'Hello world!');