app.controller('numberController', ['$scope', function($scope) {
    
    $scope.lucky = function () {
		$scope.random = Math.floor(Math.random() * 10 + 6);
		$scope.parseAge = Number.parseInt($scope.age);    	
		$scope.one = $scope.lastName.length * $scope.random;
		$scope.two = $scope.firstName.length * $scope.random;
		$scope.three = $scope.parseAge + $scope.random; 
		$scope.four = Math.floor($scope.one + $scope.parseAge + ($scope.random));
		$scope.five = Math.floor($scope.two + $scope.parseAge + ($scope.random));
		$scope.six = Math.abs($scope.one + $scope.two - $scope.three + $scope.four - $scope.five);
		return $scope.one + " " + $scope.two + " " + $scope.three + " " + $scope.four + " " + $scope.five + " " + $scope.six;   
    
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