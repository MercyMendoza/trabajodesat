var Mersii = angular.module('Mersii', []);
Mersii.controller('Operaciones', function($scope) {
$scope.precio = 4000
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 