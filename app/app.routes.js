teambuild.config(function( $stateProvider, $urlRouterProvider ){

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider

  .state('lost', {
    url: "/lost",
    templateUrl: "app/components/lost/view.html",
    data: {
      pagetitle: 'Page Not Found'
    }
  })

  .state('home', {
    url: "/",
    controller: "home",
    templateUrl: "app/components/home/view.html",
    data: {
      pagetitle: 'Welcome'
    }
  })

  .state('users', {
    url: "/users",
    controller: "users",
    templateUrl: "app/components/users/view.listing.html",
    data: {
      pagetitle: 'Users'
    }
  })
  .state('users.edit', {
    url: "/users/edit",
    controller: "users.edit",
    templateUrl: "app/components/users/view.detail.edit.html",
    data: {
      pagetitle: 'User Edit'
    }
  })
  .state('users.detail', {
    url: "/users/{userID:int}",
    controller: function( $scope, $stateParams ){
      $scope.userID = $stateParams.userID;
    },
    templateUrl: "app/components/users/view.detail.html",
    data: {
      pagetitle: 'User Profile'
    }
  })


  ;
});
