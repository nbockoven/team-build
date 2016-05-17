teambuild.controller('results', ['$scope', '$http', function( $scope, $http ){

  $http.get("users.php")
    .success(function( data ){
      $scope.users = data;
    })
    .error(function(){
      $scope.users = "Error fetching data";
    });

}]);
