app.controller('FortuneController', ['$scope', '$http', function($scope, $http) {
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.age = "";
	$scope.mySwitch = false;
	$scope.myVar = false;

	$scope.random = Math.round(Math.random() * 50);
	$scope.randomTwo = Math.round(Math.random() * 10);

	$scope.getFortunes = function (index){
		$http.get('./src/data/fortunes.json')
			.then(function (result) {
									$scope.fortuneCookie = result.data.fortune[index].value;
									return $scope.fortuneCookie;
		});
	};

	$scope.number = function () {
		$scope.fortuneValue = Number.parseInt($scope.age) - ($scope.firstName + $scope.lastName).length;
		if ($scope.fortuneValue + $scope.random > 100) {
			$scope.fortune = (100 - $scope.fortuneValue + $scope.random);
		} else {
			$scope.fortune = $scope.fortuneValue + $scope.random;
		}
		return $scope.fortune;
	}

	$scope.luckyOne = function() {
		return $scope.lastName.length * $scope.randomTwo;
	}

	$scope.luckyTwo = function() {
		return Math.floor(1000 / ($scope.firstName.length * $scope.randomTwo));
	}

	$scope.luckyThree = function() {
		$scope.parseAge = Number.parseInt($scope.age);
		return $scope.parseAge + $scope.randomTwo;
	}

	$scope.luckyFour = function () {
		$scope.parseAge = Number.parseInt($scope.age);
		return $scope.randomTwo + ($scope.parseAge + $scope.lastName.length);
	}

	$scope.luckyFive = function () {
		$scope.parseAge = Number.parseInt($scope.age);
		return $scope.randomTwo + ($scope.parseAge + $scope.firstName.length);
	}

	$scope.luckySix = function () {
		$scope.parseAge = Number.parseInt($scope.age);
		return Math.floor(($scope.parseAge * ($scope.lastName.length + $scope.firstName.length)/$scope.randomTwo));
	}

	$scope.submit = function() {
		$scope.myVar = !$scope.myVar;
        $scope.mySwitch = true;
		if ($scope.firstName == "" || $scope.lastName == "" || $scope.age == "") {
			$scope.fortuneCookie = "Please enter all values";
		} else {
			$scope.fortuneCookie = $scope.getFortunes($scope.number());
			$scope.lucky = [$scope.luckyOne(), $scope.luckyTwo(), $scope.luckyThree(), $scope.luckyFour(), $scope.luckyFive(), $scope.luckySix()];
			$scope.luckyNumbers = $scope.lucky.join(' ');
		}
	}
   $scope.reset = function() {
		$scope.firstName = "";
		$scope.lastName = "";
		$scope.age = "";
		$scope.myVar = false;
		$scope.mySwitch = false;
		$scope.random = Math.round(Math.random() * 100)
		$scope.randomTwo = Math.round(Math.random() * 10);
    }
}]);
