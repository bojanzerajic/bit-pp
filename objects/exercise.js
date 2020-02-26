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

// function buildProject(description, pl, repository, status) {
//     return {
//         description: description,
//         programmingLanguage: pl,
//         repository: repository,
//         status: status,
//         projectRepo: function () {
//             return this.repository;
//         },
//         isItJSProject: function () {
//             if (this.programmingLanguage === "JS") {
//                 return true;
//             } else { return false; }
//         },
//         isItInDev: function () {
//             return this.status;
//         }

//     }
// }
// var project = buildProject('CSS_Project', 'Python', 'bit-pp', true);
// console.log(project.isItInDev());

// function culinaryRecipe(name, cu, comp, ingr, prepTime, inst) {
//     return {
//         name: name,
//         cuisine: cu,
//         complexity: comp,
//         ingredients: ingr,
//         preparingTime: prepTime,
//         instructions: inst,
//         getIngredients: function () {
//             return this.ingredients;
//         },
//         canItBeDone: function () {
//             if (this.preparingTime <= 15) {
//                 return 'It can be done in less than 15 minutes!'
//             } else {
//                 return 'It can NOT be done in 15 minutes!'
//             }
//         },
//         setTheCuisine: function (cus) {
//             this.cuisine = cus;

//         },
//         removeIngredient: function (remIngr) {
//             var importantIngredients = [];
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (remIngr === this.ingredients[i]) {
//                     continue;
//                 } 
//                     importantIngredients[importantIngredients.length] = this.ingredients[i];

//             }
//             this.ingredients = importantIngredients;

//         }

//     };
// }

// var sarma = culinaryRecipe('Sarma', 'RS', 4, ['cabbage', 'rice', 'carrot', 'ground meat'], 45, 'I can not explain');
// sarma.removeIngredient('carrot');
// sarma.setTheCuisine('Deutch');
// console.log(sarma.canItBeDone());
// sarma.removeIngredient('carrot');

// console.log(sarma.ingredients);

///////////////////////////// TASK 3 ///////////////////////////////////

function Project(desc, proLang, rep, boolean) {
    this.description = desc;
    this.programmingLanguage = proLang;
    this.repository = rep;
    this.boolean = boolean;

    this.getRepository = function () {
        return this.repository;
    }
    this.checkLanguage = function () {
        return this.programmingLanguage;
    }
    this.checkStatus = function () {
        return this.boolean
    }
}
var a = new Project("Bootstrap", "JavaScript", "bit-pp", true);
console.log(a);

