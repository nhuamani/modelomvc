app

.controller("nomCtrl", function ($scope) {
	//$scope.nombre = "Nilton huamani";
	$scope.save = function () {
		console.log("Hola" + $scope.nombre);
	};
	$scope.lista = [
    {
        "id": 1,
        "nombre": "Revistas",
        "codigo": "001",
        "estado": true
    },
    {
        "id": 2,
        "nombre": "Novelas",
        "codigo": "002",
        "estado": true
    },
    {
        "id": 3,
        "nombre": "Obras Literarias",
        "codigo": "003",
        "estado": true
    },
    {
        "id": 4,
        "nombre": "Cuentos",
        "codigo": "004",
        "estado": true
    },
    {
        "id": 5,
        "nombre": "Humor",
        "codigo": "005",
        "estado": true
    },
    {
        "id": 6,
        "nombre": "Medicina",
        "codigo": "006",
        "estado": false
    },
    {
        "id": 7,
        "nombre": "Desarrollo",
        "codigo": "007",
        "estado": false
    },
    {
        "id": 8,
        "nombre": "Biologia",
        "codigo": "008",
        "estado": false
    },
    {
        "id": 13,
        "nombre": "Artes",
        "codigo": "009",
        "estado": false
    }
];
});