// var favCoffee = {
//     name: 'Nescafe',
//     strength: 'mild',
//     flavour: 'ordinary',
//     milk: 'yes',
//     sugar: 'one tea spoon'
// };
// var favMovie = {
//     title: 'Snatch',
//     actors: ['Jason Statham', 'Vinnie Jones', 'Rade Serbedzija'],
//     director: 'Guy Ritchie',
//     genre: ['Comedy', 'Crime'],
//     popularity: 'blockbuster',
// };
// console.log(favCoffee);
// console.log(favMovie);
// console.log(favMovie.actors[1]);

//////////////////////////////////////////// TASK 3 /////////////////////////////////////////////////////

// Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function buildProject(description, pl, repository, status) {
    return {
        description: description,
        programmingLanguage: pl,
        repository: repository,
        status: status,
        projectRepo: function () {
            return this.repository;
        },
        isItJSProject: function () {
            if (this.programmingLanguage === "JS") {
                return true;
            } else { return false; }
        },
        isItInDev: function () {
            return this.status;
        }

    }
}
var project = buildProject('CSS_Project', 'Python', 'bit-pp', true);
console.log(project.isItInDev());

