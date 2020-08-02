// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================')

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

//require fs (file system)
// const fs = require('fs');
// require page template js file
// const generatePage = require('./src/page-template.js');
// require inquire
const inquirer = require('inquirer');

// this is using inquirer to prompt questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

// This removes the first two arguments that process.argv passes which is the paths of each program, then prints the rest which would be the user input and puts them into an array
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// This defines the first variable in such array with the const as name
// const name = profileDataArgs[0];
// defines second item in array as github
// const github = profileDataArgs[1];

// this is a shorter way to assign variable names to our array from earlier
// const [name, github] = profileDataArgs;

// this displays the user input from the profileDataArgs array
// console.log(name, github);
// this is logging the generatePage function, that is passing the two strings the user enters and is passing them through the function to be displayed
// console.log(generatePage(name, github));

// using the file system to create a file. the three arguments are to create the file, generate the file's context, and throwing the error.
// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check our index.html to see the output!');
// })