app.controller('numberController', ['$scope', function($scope) {

    $scope.random = Math.round(Math.random() * 10);

    $scope.luckyOne = function() {
      return $scope.lastName.length * $scope.random;
    }

    $scope.luckyTwo = function() {
      return Math.floor(1000 / ($scope.firstName.length * $scope.random));
    }

    $scope.luckyThree = function() {
      $scope.parseAge = Number.parseInt($scope.age);
      return $scope.parseAge + $scope.random;
    }

    $scope.luckyFour = function () {
      $scope.parseAge = Number.parseInt($scope.age);
      return $scope.random * ($scope.parseAge + $scope.lastName.length);
    }

    $scope.luckyFive = function () {
      $scope.parseAge = Number.parseInt($scope.age);
      return $scope.random + ($scope.parseAge + $scope.firstName.length);
    }

    $scope.luckySix = function () {
      $scope.parseAge = Number.parseInt($scope.age);
      return Math.floor(($scope.parseAge * ($scope.lastName.length + $scope.firstName.length)/$scope.random));
    }



    $scope.toggle = function() {
        if ($scope.firstName == "" || $scope.lastName == "" || $scope.age == "") {
            alert("Please enter a value")
        } else {
            $scope.myVar = !$scope.myVar;
            $scope.mySwitch = true;
        }
    }
    $scope.reset = function() {
        $scope.firstName = "",
        $scope.lastName = ""
        $scope.age = "";
        $scope.myVar = false;
        $scope.mySwitch = false;
        $scope.random = Math.round(Math.random() * 10);
    }

}]);
