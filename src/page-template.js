// this creates a const that can be called later, the parameter gives us the ability to input our own information through the command line. this creates an HTML TEMPLATE LITERAL
const generatePage = (name, github) => 
// this allows each string to be on a new line
`
<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
</head>

<body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
</body>
</html>
`;

// this allows us to use this function outside of this js file, we then require at the top of the recieveing file
module.exports = generatePage;