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
		var one = $scope.lastName.length * $scope.randomTwo;
		if (one > 99) {
			one = Math.floor(one/10);
		}
		return one;
	}

	$scope.luckyTwo = function() {
		var two = Math.floor(1000 / ($scope.firstName.length * $scope.randomTwo));
		if (two > 99) {
			two = Math.floor(three/10);
		}
		return two;
	}

	$scope.luckyThree = function() {
		var three = $scope.parseAge + $scope.randomTwo;
		if (three > 99) {
			three = Math.floor(three/10);
		}
		return three;
	}

	$scope.luckyFour = function () {
		var four = $scope.randomTwo + ($scope.parseAge + $scope.lastName.length);		
		if (four > 99) {
			four = Math.floor(four/10);
		}
		return four;
	}

	$scope.luckyFive = function () {
		var five = $scope.randomTwo + ($scope.parseAge + $scope.firstName.length);			
		if (five > 99) {
			five = Math.floor(five/10);
		}
		return five; 
	}

	$scope.luckySix = function () {
		var six = Math.floor(($scope.parseAge * ($scope.lastName.length + $scope.firstName.length)/$scope.randomTwo));;			
		if (six > 99) {
			six = Math.floor(six/10);
		}
		return six; 
	}

	$scope.submit = function() {
		$scope.parseAge = Number.parseInt($scope.age);		
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
