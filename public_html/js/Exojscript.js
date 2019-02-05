/*
 console.log('Hello world !');
 */

let filmJson = {//Création de notre objet film en json
    titre: "Titre",
    realAut: "Realisateur / Auteur",
    dateSort: "Date de sortie",
    synopsis: "Synopsis",
    nbEntre: 90
};

//Création de notre objet film en tableau.
//let filmTab = [titre="Titre", realAut="Realisateur / Auteur", dateSort= "Date de sortie", synopsis= "Synopsis", nbEntre= 9000000 ];

let titre = "Titre";
let realAut = "Realisateur Auteur";
let dateSort = "Date de Sortie";
let synopsis = "Synopsis";
let nbEntre = "Nombre d'entrées";


let films = [
    {
        titre: "Titre 1",
        realAut: "Realisateur Auteur 1",
        dateSort: "Date de Sortie 1",
        synopsis: "Synopsis 1",
        nbEntre: 9760
    },
    {
        titre: "Titre 2",
        realAut: "Realisateur Auteur 2",
        dateSort: "Date de Sortie 2",
        synopsis: "Synopsis 2",
        nbEntre: 234
    },
    {
        titre: "Titre 3",
        realAut: "Realisateur Auteur 3",
        dateSort: "Date de Sortie 3",
        synopsis: "Synopsis 3",
        nbEntre: 12567
    },
    {
        titre: "Titre 4",
        realAut: "Realisateur Auteur 4",
        dateSort: "Date de Sortie 4",
        synopsis: "Synopsis 4",
        nbEntre: 167
    }
];

let cumul = 0;
films.forEach(function (unfilm){
    cumul += unfilm.nbEntre ; 
});
console.log("cumul "+cumul);


let filmFilter = films.filter(films => films.nbEntre > 1500);        //Filtre qui isole les films avec moins de 1500 entrées du boxOffice.
console.log(filmFilter);

const reducer = (accumulator, films) => accumulator + films.nbEntre; //Addition de TOUTES les entrées du boxOffice.
let nbTotalEnt = films.reduce(reducer, 0);
console.log(nbTotalEnt);

let nbTotalEntFilt = filmFilter.reduce(function (acc, obj) {
    return acc + obj.nbEntre;
}, 0);                                                               //Addition des entrées STRICTEMENT supérieurs a 1500 entrées du boxOffice.
console.log(nbTotalEntFilt);

//console.log(filmJson.dateSort);

//sortie avec juste for 
/*for (let i = 0; i < films.length; i++) {
 console.log(films[i].titre);
 };
 */

//sortie avec forin
/*for (const titres in films) {
 console.log(films[titres].titre);
 };
 */

//sortie avec foreach
/*
 films.forEach (function(film){
 film.titre = "lol";
 console.log(film.titre);
 });
 */


document.getElementById('dom-page').innerHTML = ('<a href="dom.html" target="_self">Accès à la page DOM !</a>');
