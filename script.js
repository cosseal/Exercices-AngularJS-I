var app = angular.module("monAppli",["ngRoute"]);

//créer les routes
app.config(
    function($routeProvider)
    {
        $routeProvider.when("/",
            {templateUrl:"home.html"})
                    .when("/films",
            {templateUrl:"films.html",
            controller:"monControlleur"})
                    .when("/livres",
                {templateUrl:"livres.html",
                    controller:"livresControlleur"})
                    .when("/jeuxvideo",
                {templateUrl:"jeuxvideo.html",
                controller :"jeuxControlleur"})

    }
);


app.controller("monControlleur",function ($scope,$http)
{

    $scope.films = ["The big lebowsky","Fargo", "Luna Nera", "Ragnarok", "Outlander"];
    $scope.ajouterFilm = function()
    {
        $scope.films.push($scope.ajoutFilm);

        $http({
            method:"POST",
            url:"test.php",
            data:{nouveauFilm : $scope.ajoutFilm}
        }).then
        (
            function Success(response)
                    {alert(response.data)},
            function Error(response)
                    {alert(response.statusText);}
        );
    }

});

// $scope permet ici de créer une variable