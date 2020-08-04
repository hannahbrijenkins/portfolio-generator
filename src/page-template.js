// // this creates a const that can be called later, the parameter gives us the ability to input our own information through the command line. this creates an HTML TEMPLATE LITERAL
// const generatePage = (name, github) => 
// // this allows each string to be on a new line
// `
// <!DOCTYPE html> 
// <html lang="en"> 
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
// </head>

// <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
// </body>
// </html>
// `;

// // this allows us to use this function outside of this js file, we then require at the top of the recieveing file
// module.exports = generatePage;

// create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
        return '';
    }

    return `
    <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${aboutText}</p>
    </section>
    `;
};

// generate project HTML data
const generateProjects = projectsArr => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
            ${projectsArr
                // this is checking if feature is set to true
                .filter(({ feature }) => feature)
                .map(({ name, description, languages, link }) => {
                return `
                <div class="col-12 mb-2 bg-dark text-light p-3">
                    <h3 class="portfolio-item-title text-light">${name}</h3>
                    <h5 class="portfolio-languages">
                    Built With:
                    ${languages.join(', ')}
                    </h5>
                    <p>${description}</p>
                    <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
                `;
                })
                .join('')}

            ${projectsArr
                .filter(({ feature }) => !feature)
                .map(({ name, description, languages, link }) => {
                return `
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="portfolio-item-title text-light">${name}</h3>
                    <h5 class="portfolio-languages">
                    Built With:
                    ${languages.join(', ')}
                    </h5>
                    <p>${description}</p>
                    <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
                `;
                })
                .join('')}
            </div> 
        </section>
    `;
};
//     //  get array of just featured projects
//     const featuredProjects = projectsArr.filter(project => {
//         if (project.feature) {
//             return true;
//         } else {
//             return false;
//         }
//     });

//     // get array of all non-feature projects
//     const nonFeaturedProjects = projectsArr.filter(project => {
//         if (!project.feature) {
//             return true;
//         } else {
//             return false;
//         }
//     });

//     const featuredProjectHtmlArr = featuredProjects.map(({ name, description, languages, link }) => {
//         return `
//           <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//               Built With:
//               ${languages.join(', ')}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//           </div>
//         `;
//       });
    
//       const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(
//         ({ name, description, languages, link }) => {
//           return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//         }
//       );

//       return `
//         <section class="my-3" id="portfolio">
//             <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//             <div class="flex-row justify-space-between">
//             ${featuredProjectHtmlArr.join('')}
//             ${nonFeaturedProjectHtmlArr.join('')}
//             </div>
//       </section>
//     `;
// };

// this uses template literal data to use the properties of templateData instead of individual parameters
module.exports = templateData => {
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names
    const { projects, about, ...header } = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
                        header.github
                    }">GitHub</a>
                </nav>
            </div>
        </header>
    <main class="container my-5">
        ${generateAbout(about)}
        ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
    </body>
    </html>
    `;
};