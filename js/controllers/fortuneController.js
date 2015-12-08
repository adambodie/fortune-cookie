app.controller('fortuneController', ['$scope', function($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe"
    $scope.age = 30;
    $scope.mySwitch = false;
    $scope.myVar = false;
    
    $scope.number = function () {
		return $scope.age - ($scope.firstName + $scope.lastName).length   
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
    }
}]);

