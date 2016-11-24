(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.items = [];
  $scope.value = 0;
  $scope.printMessage = " ";

  function stringSplit(string){
    var array = string.split(",");
    var length = array.length;
    return length;
  }

  $scope.Check = function(){
    if($scope.items != ""){
      var totalItems = stringSplit($scope.items);
      $scope.value = totalItems;
      if($scope.value <=3){
        $scope.printMessage = "Enjoy!";
      }
      else{
        $scope.printMessage = "Too Much!";
      }
      $scope.myCSS = {
        "color":"green"
      }
      $scope.textBoxCSS = {
        "border-color" : "green"
      }
    }
    else{
      $scope.printMessage = "Please enter data first";
      $scope.myCSS = {
        "color":"red"
      }
      $scope.textBoxCSS = {
        "border-color" : "red"
      }
    }
  };
}

})();
