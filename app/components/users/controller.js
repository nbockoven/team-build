teambuild.controller('users', ['$scope', '$http', function( $scope, $http ){

  $http.get("users.php")
    .success(function( data ){
      $scope.users = data;
    })
    .error(function(){
      $scope.users = "Error fetching data";
    });

}]);

teambuild.controller('userDetail', ['$scope', '$http', '$stateParams', function( $scope, $http, $stateParams ){
  $http.get("users.php")
    .success(function( data ){
      if( data ){
        $.each(data, function( i, v ){
          if( v.id == $stateParams.id ){
            $scope.user = v;
          }
        });
      }
    })
    .error(function(){
      $scope.users = "Error fetching data";
    });
}]);
