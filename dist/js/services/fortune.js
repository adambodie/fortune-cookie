app.factory('fortune', ['$http', function($http) {
  return $http.get('./data/fortune.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
