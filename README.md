Consignes :

- Pour commencer, vous allez créer une nouvelle page html et inclure AngularJS dans la page, la derniere version d'angular
peut être téléchargé sur https://angularjs.org

- Vous pouvez également inclure le script en utilisant le CDN de google : https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js

( CDN = Content Delivery Network )

    Attention : Vous incluerez le js d'Angular soit à l'intérieur de la balise <head> soit juste aprés la balise <body>
    et non pas à la fin du html comme d'habitude, c'est nécessaire car nous devons d'abord charger Angular avant de
    charger le reste de notre page html.

- Pour continuer, reportez vous à la partie1

______________________________________________________________________________________________________________________

- Faites cela une fois arrivé à la partie 2 du cour et aprés qu'il soit indiqué "repassez à la partie exercice" :

        Ajoutez un nouveau champs de type text et ajoutez un modéle que nous appelerons lastname

        Transformez l'expression qui affiche le prénom de l'utilisateur pour qu'elle affiche également le nom.

______________________________________________________________________________________________________________________


Théorie :

AngularJS est un framework Javascript développé par Google, dans sa dernière version, il est un des frameworks les plus
populaires.

Nous ne verrons que la version 1 écrite en Javascript, une version plus récente et plus performante
 d'Angular existe, celle ci est écrite en Typescript ( un langage qui une fois compilé produit du Javascript ).

Le principal interet d'Angular est de pouvoir utiliser des templates coté client, ces templates sont dynamiquement modifiés
soit en utilisant des données provenant du serveur ( Requete http => Modifications coté client ) soit en liant des données
depuis un élément html présent sur la page vers un autre élément html.

Dans ce cour en plusieurs parties sur Angular, nous allons réaliser la premiere partie d'un plus gros projet , un site qui va permettre aux utilisateurs
de créer des listes de produits culturels ( livres/films/jeux video ) qu'ils souhaitent acheter prochainement.

Nous permettront aux utilisateurs d'avoir une page dédiée affichant leurs liste si ils le désirent.

Coté back, nous aurons donc un systeme de login/mdp, une bdd pour stocker les listes utilisateurs et coté front nous
utiliserons Angular pour dynamiser notre site et gérer la communication client/serveur.

______________________________________________________________________________________________________________________

1ere Partie : Les attributs html utilisés par Angular

. ngapp

Cet attribut permet d'indiquer à Angular l'élément principal de notre nouvelle appli, on l'ajoutera au conteneur principal
( généralement un div )

. ngmodel et ngbind

Ces deux attributs fontionnent ensemble, ngmodel indique l'élément html où nous allons récuperer les données et ngbind
indique l'élément html où nous allons écrire ces données.


Exemple :

<div data-ng-app="">
  <p>Nom: <input type="text" data-ng-model="name"></p>
  <p data-ng-bind="name"></p>
</div>

Copiez collez cet exemple dans votre page html et commencez à remplir le champ de formulaire de type text, les données
 entrées par l'utilisateur s'affiche directement dans l'élément <p>

Pourquoi : Car le champs input contient data-ng-model = "name" , l'élément <p> contient data-ng-bind = "name" , nos deux
 éléments html sont donc liés entre eux !

Il aurait été possible de faire cela en Javascript natif, mais ici sans aucune lignes de codes supplémentaire en utilisant
tout simplement deux attributs html, nous pouvons mettre à jour dynamiquement la page !

Ce que vous venez d'écrire est votre premier template html, Felicitations !

Note : Pour rendre notre page valide du point de vue html, nous ajoutons systematiquement data- aux attributs Angular.


. ng-init

L'attribut data-ng-init va nous permettre de définir des valeurs par défaut, modifions notre exemple précédent pour ajouter
au champs de formulaire une valeur par défaut : "Entrez votre nom svp"

Remplacez : <div data-ng-app="">

Par : <div data-ng-app="" dat-ng-init="name='Entrez votre nom svp'">


Testez la page ...

Notre champ de formulaire contient désormais par défaut Entrez votre nom svp, quand nous entrons du texte dans le champs,
l'élément html lié est bien mis à jour.

Notre code html aprés modifications :

<div data-ng-app="" data-ng-init="name='Entrez votre nom svp'">
  <p>Nom: <input type="text" data-ng-model="name"></p>
  <p data-ng-bind="name"></p>
</div>

_____________________________________________________________________________________________________________________

2eme Partie : Les Expressions

Angular supporte les expressions directement dans les éléments html, pour écrire une expression on utilisera :

{{expression}}

Exemple :

<span>Votre nom est : {{name}}</span>

Ici {{name}} va récuperer la valeur du modele appelé "name", contrairement à ng-bind, il est possible de mélanger du texte
écrit en dur avec une expression dynamique.

Modifions maintenant notre premier exemple pour ajouter cette balise aprés la balise <p>, notre nouveau code va devenir :

<div data-ng-app="" data-ng-init="name='Entrez votre nom svp'">
  <p>Nom: <input type="text" data-ng-model="name"></p>
  <p data-ng-bind="name"></p>
  <span>Votre nom est : {{name}}</span>
</div>

Ecrivons maintenant une expression plus complexe, nous allons afficher également le nom de famille de l'utilisateur.

- Repassez à la partie exercice.

_____________________________________________________________________________________________________________________

3eme partie : Les Modules

Angular utilise des modules pour séparer les différentes applications, un module est associé à un élément html qui va
 contenir notre application Angular.

Dans notre exemple, le premier div contient l'attribut : data-ng-app=""

Celui ci est vide, nous allons lui donner un nom, transformez le code de cette façon :

  <div data-ng-app="" data-ng-init="name='Entrez votre nom svp'">

  va être modifié en :

  <div data-ng-app="monAppli" data-ng-init="name='Entrez votre nom svp'">


- A présent, créer un script js et incluez le dans votre fichier html, vous l'incluerez juste avant la balise </body>

- Dans ce script, vous allez écrire :

var app = angular.module("monAppli", []);


Nous venons de définir un nouveau module, nous lions l'élément html et le code angular grâce à la directive data-ng-app.

Grâce à ce nouveau module, nous allons désormais pouvoir écrire du code javascript utilisant Angular qui sera appliqué à
tout les éléments contenu dans le div.

______________________________________________________________________________________________________________________

4eme partie : Les Controlleurs

Nous avons créé un module, nous allons désormais pouvoir ajouter un ou des controlleurs.

Les controlleurs permettent d'indiquer en utilisant Javascript les données qui vont devoir être traitées par le template.

Pour créer un controlleur, nous allons écrire le code suivant dans le fichier javascript en dessous de var app = ...

app.controller('monControlleur', function($scope) {
    $scope.film1 = "The big lebowsky";
    $scope.film2 = "Fargo";
});

Puis dans notre fichier html, nous allons modifier notre div principal afin de lier le controlleur js avec le template.

<div data-ng-app="monAppli" data-ng-init="name='Entrez votre nom svp'">

va devenir :

<div data-ng-app="monAppli" data-ng-init="name='Entrez votre nom svp'" data-ng-controller="monControlleur">

Pour finir, nous allons ajouter une liste pour lister les données contenu dans le controlleur :

A l'intérieur du <div>, ajoutez :

<ol>
<li>{{film1}}</li>
<li>{{film2}}</li>
</ol>

Important : Avec Angular $scope fait toujours référence à notre application en utilisant $scope.<variable>, je défini
une valeur qui sera accessible dans le template de l'application.


Dans notre exemple les films sont nommés en utilisant film1, film2, etc... , pas genial et pas trés dynamique.

Nous allons modifier le code pour utiliser un tableau, bien plus pratique !

app.controller('monControlleur', function($scope) {
    $scope.film1 = "The big lebowsky";
    $scope.film2 = "Fargo";
});

Va devenir :

app.controller('monControlleur', function($scope) {
    $scope.films = ["The big Lebowsky","Fargo","O'Brother","The Barber"]
}

- Comment faire à présent pour parcourir ce tableau dans notre template html ?

- La solution : La directive ng-repeat, cette directive va nous permettre de boucler sur un tableau ou un tableau d'objets
et d'afficher les valeurs correspondantes.

- Dans notre fichier html, la partie suivante :

<ol>
<li>{{film1}}</li>
<li>{{film2}}</li>
</ol>

Va devenir :

<ol>
<li data-ng-repeat="film in films">{{film}}</li>
</ol>

Que se passe t'il ici ?

En utilisant la directive ng-repeat = "film in films" , on indique à angular qu'on souhaite créer une boucle sur la variable
films contenant un tableau, chaque entrée du tableau sera plaçée dans la variable film qu'on affiche ensuite à l'intérieur
de notre élément <li>

_______________________________________________________________________________________________________________________

5eme Partie : Le data-binding , les événements , les fonctions de controlleur

- A présent, nous allons voir comment ajouter dynamiquement un film à notre liste en utilisant les fonctions , les événements
et le data-binding à deux entrées ( le model et la vue sont mis à jour de façon synchrone )

Dans notre html, aprés notre <ol>, nous allons ajouter :

<input type="text" name="ajoutFilm" data-ng-model="ajoutFilm">
<button data-ng-click="ajouterFilm()">Ajouter un film</button>


Dans notre script js, à l'intérieur de notre controlleur, nous allons ajouter :

    $scope.ajouterFilm = function()
    {
    $scope.films.push($scope.ajoutFilm);
    }

- Testez maintenant votre code dans le navigateur, lorsque vous cliquez sur le bouton aprés avoir ajouté un film, le template
    est mis à jour, ainsi que les variables du controlleur.

______________________________________________________________________________________________________________________

6eme partie : Le service http d'angular - Envoyer des requetes vers le serveur sans recharger la page

Angular dispose de nombreux services ( si vous souhaitez utiliser angular dans un projet, vous utiliserez certainement
d'autres services. )

Celui que nous allons utiliser est le service http.

Notre objectif va être d'envoyer à un script php présent sur le serveur les films ajoutés par l'utilisateur, il faudra
idéalement modifier notre code plus tard pour récuperer ces films depuis le serveur, mais pour le moment nous allons juste
envoyer les données sans rien recevoir.

- Pour utiliser le service http, nous allons l'ajouter à notre controlleur :

Dans notre javascript, app.controller('myCtrl', function($scope) {

va devenir : app.controller('myCtrl', function($scope,$http) {


- Dans notre fonction ajouterFilm, nous allons effectuer une requete post vers un script php, cette requete va transmettre
 le titre du film que l'utilisateur ajoute via le formulaire.

 Dans notre js, à l'intérieur de la fonction ajouterFilm, en dessous de la ligne $scope.films.push($scope.ajoutFilm);

 Nous allons ajouter le code suivant :

    $http({
    method:"POST",
    url:"test.php",
    data:{nouveauFilm : $scope.ajoutFilm}
    }).then(function Success(response)
    	{
        alert(response.data);
        },
        function Error(response)
        {
        alert(response.statusText);
        });

Ce bout de code va effectuer une requete asynchrone vers le fichier test.php ( vous devrez peut être adapter le chemin vers
        le fichier ou changer le nom du fichier en fonction de votre configuration )

      Il va envoyer à notre script test.php un ensemble de données au format JSON, il faudra convertir ces données reçues
      avec la méthode native php appropriée.

      Ici, nous n'envoyons qu'une seule donnée : le dernier film ajouté par l'utilisateur lorsque celui ci appuie sur le bouton
      du formulaire => $scope.ajoutFilm

Vous noterez l'utilisation du mot clef "then" dans la requete http, il s'agit ici d'une "promise", qui executera soit
       la fonction Success, soit la fonction Error en fonction du résultat de notre requête une fois que notre requete http
       sera terminée.

_______________________________________________________________________________________________________________________

7eme Partie : Le routage avec Angular, créer des single page app.

 Le routage est une fonctionnalité que de nombreux frameworks proposent, dont Angular via du code additionel.

 Grâce à ce module, il va être possible de charger un template html lors du clic sur un lien ( ou un autre élément ) puis de l'injecter
 dans un élément de la page actuelle.

 Dans notre projet, nous affichons des films mais nous allons également afficher des livres et des jeux video.

 Plutôt que de recréer une page html pour chaque type de produit, nous allons utiliser les routes pour afficher l'un
 des trois type de produits, nous associerons un controlleur différent pour chaque produit.

Pour commencer, il faut inclure dans notre page html, le script de routage d'AngularJS, rendez vous sur :

  https://code.angularjs.org/1.7.5

  Puis téléchargez le script suivant : angular-route.min.js

  Une fois que ce script est inclu dans votre page ( dans la balise <head> par exemple ), il va nous falloir modifier
   notre ligne d'instruction Angular.app pour utiliser ce nouveau module :

   Dans notre js : var app = angular.module("myApp", []);

   Va devenir : var app = angular.module("myApp", ["ngRoute"]);


   Puis (idéalement) juste avant notre controlleur ( en dessous de la ligne var app = ... ) , nous allons ajouter
   les instructions de configuration de nos routes :

   app.config(function($routeProvider) {
     $routeProvider
     .when("/", {
       templateUrl : "index.html"
     })
     .when("/films", {
       templateUrl : "films.html",
        controller : "monControlleur"
     })
     .when("/livres", {
       templateUrl : "livres.html",
       controller : "livresControlleur"
     })
     .when("/jeuxvideos", {
       templateUrl : "jeuxvideos.html",
       controller : "jeuxvideosControlleur"
     });
   });

   Grâce à ce code, nous allons pouvoir ajouter des liens spéciaux sur notre page qui vont déclencher l'injection du template
   html correspondant ( exemple , un clic sur le lien /livres va injecter livres.html )

   En dessous de templateUrl pour chaque route, j'ajoute également le nom du controlleur à utiliser, comme nous avons déjà
   écrit un controlleur pour gérer les films appelé "monControlleur", je l'ai spécifié dans la route correspondante mais
   il faudra modifier ce nom en filmsControlleur par la suite pour uniformiser le nomage de nos controlleur ( cela fait
   partie des bonnes pratiques de programmation )

   IMPORTANT : Dans notre page html principale, nous allons ajouter la balise suivante :

   <div class="ng-view"></div>

   Cet élément va contenir nos templates html injectés.


   A vous de jouer !

   Vous allez créer les templates html pour les livres et les jeux videos , copier coller le template de la page principal
   dans une nouvelle page html pour les films , puis ajouter les controlleurs pour les livres, les jeux videos.

   Puis vous allez créer le script PHP qui va stocker en base de donnée nos différentes données ( livres,jeux et films )

   Puisque nous allons stocker en bdd les données utilisateurs, il faudra également modifier nos controlleurs, afin qu'ils
   interrogent le serveur et récuperent les données stockées puis qu'ils mettent à jour nos templates !

   Un brief projet concernant ce projet va être donné sur Slack dans la partie exercice.

   Bon courage !!