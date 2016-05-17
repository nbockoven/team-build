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

  .state('login', {
    url: "/login",
    controller: "login",
    templateUrl: "app/components/login/view.html",
    data: {
      pagetitle: "Login"
    }
  })

  .state('results', {
    url: "/results",
    controller: "results",
    templateUrl: "app/components/results/view.html",
    data: {
      pagetitle: "Results"
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
  .state('profile', {
    url: "/user/:id",
    controller: 'userDetail',
    templateUrl: "app/components/users/view.detail.html",
    data: {
      pagetitle: 'User Profile'
    }
  })
  .state('profile.edit', {
    url: '/user/:id/edit',
    controller: function( $scope, $stateParams ){
      $scope.id = $stateParams.id;
    },
    templateUrl: "app/components/users/view.detail.edit.html",
    data: {
      pagetitle: 'Edit User Profile'
    }
  })



  ;
});
