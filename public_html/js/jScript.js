let films = [
    {
        titre: "Avatar",
        realAut: "Tarzan et Jane",
        acteurs: ["Justine", "Pablo Brusset", "Sabrina"],
        dateSort: "1/12/1654",
        synopsis: "Sont Tous tout bleu",
        nbEntre: 97603
    },
    {
        titre: "Equilibrium",
        realAut: "Sabrina Pourcelot",
        //acteurs: ["NeTiJus", "BloPa", "NaBriSa"],
      acteurs: [
            {prenom: "Kevin", nom: "Bateau"},
            {prenom: "Romain", nom: "Plud'Dos"},
            {prenom: "Ruben", nom: "Chateau"}
        ],
        dateSort: "5/9/2067",
        synopsis: "Pablo L'équilibriste",
        nbEntre: 2342
    },
    {
        titre: "La guerre des boutons",
        realAut: "Jo",
        acteurs: ["Thibault", "Nicolas", "Ioanna"],
        dateSort: "14/12/1854",
        synopsis: "Sont Tous tout bleu",
        nbEntre: 97603987543
    }
];



//ajout d'un bouton
//let bouton = document.createElement('button');
//bouton.textContent = "COUCOUCéNOUs";
//bouton.onclick = function () {//fonction "alert" sur pression du bouton
//    alert(films[0].realAut);
//};


//bouton.onclick = function () {
//    document.getElementById('film').insertAdjacentHTML("beforeend", addFilms(newFilm)); //ajouter une box film
//};

//let textBtn = document.createTextNode("bouboubou");
//bouton.appendChild(textBtn);
//document.getElementById('film').appendChild(bouton);




document.getElementById('film').insertAdjacentHTML("beforebegin", '<h1>Ma Liste</h1>');
document.getElementById('film').insertAdjacentHTML("afterend", '<span id="copy">Copyright. All rights reserved.</span>');  //Ajouter un id au span copyright
document.getElementById('film').insertAdjacentHTML("beforebegin", '<h2 id="sous-titre">Mon Film</h2>'); //Rajouter une balise H2 avec un id avant les films
document.getElementById('copy').insertAdjacentText("beforebegin", '@');  //Ajouter un @ au tout début de la phrase
document.getElementById('copy').innerHTML = ('<a href="https://www.google.fr" target="_blanc">nouveau copyright <b><substring>2019</sub></b></a>');  //Comment l'écrit-on entre des balises ?
document.getElementById('copy').insertAdjacentText("afterend", ' Waynes Industries');  //Ajouter le nom de la société à la fin de la phrase
document.getElementById('home-page').innerHTML = ('<a href="index.html">Page d\'Accueil !</a>');
//Ecrire un <p> dans une page :
/*document.getElementById("film").innerHTML = '<p> YOLOOOOOOO </p>';*/


function addFilms(unFilm) { //création de la function pour ajouter un film
    return '<div class="un-film">' +
            '<div>' + unFilm.titre + '</div>' +
            '<div>' + unFilm.realAut + '</div>' +
            '<div>' + unFilm.dateSort + '</div>' +
            '<div>' + unFilm.synopsis + '</div>' +
            '<div>' + unFilm.nbEntre + '</div>' +
            '</div>';
}
;

let newFilm = {//ajout d'un nouveau film
    titre: "king Kong",
    realAut: "Kevin San Martino",
    dateSort: "14/5/5678",
    synopsis: "Un gros oiseau jaune qui chante",
    nbEntre: 3 + " Entrées"
};

//document.getElementById('film').insertAdjacentHTML("beforeend", addFilms(newFilm));
// pagehtml  récupElemParId (dans film) insert a coté  (avant la fin, function ajout film (nouveau film)


films.forEach(function (unFilm) {
    let filmHTML = '<div class="un-film">' +
            '<div>' + unFilm.titre + '</div>' +
            '<div>' + unFilm.realAut + '</div>' +
            '<div>' + unFilm.dateSort + '</div>' +
            '<div>' + unFilm.synopsis + '</div>' +
            '<div>' + unFilm.nbEntre + '</div>' + 
            `<button onclick="alert('${unFilm.acteurs}')">acteurs</button>` + 
    //création d'un bouton en HTML qui ressort la liste des acteurs
'</div>';

    document.getElementById('film').insertAdjacentHTML("beforeend", filmHTML);
});
