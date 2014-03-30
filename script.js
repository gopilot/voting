var app = angular.module('VotingApp', ['ngCookies']);
app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
app.controller('AppController', function($scope, $http, $cookies) {
    console.log($cookies);
    console.log(localStorage);
    if('userName' in localStorage) {
        $scope.userName = localStorage.userName;
        console.log($scope.userName);
    }

    $scope.inputs = {
        typedName: "",
        filter: "",
    }

    $scope.clear = function() {
        $scope.inputs.filter = "";
        $("#search").focus();
    };

    $scope.setName = function() {
        $scope.userName = angular.copy($scope.inputs.typedName);
        localStorage.userName = $scope.userName;
        console.log("set cookies");
    };

    // load teams
    // and set current vote status from backend

    $scope.teams = [
        {name: 'TEam 1', upVoted: true},
        {name: 'Goobers', upVoted: false},
        {name: 'Another', upVoted: false},
        {name: 'TEam 1', upVoted: true},
        {name: 'Goobers', upVoted: false},
        {name: 'Another', upVoted: false},
        {name: 'TEam 1', upVoted: true},
        {name: 'Goobers', upVoted: false},
        {name: 'Another', upVoted: false},
        {name: 'Another', upVoted: false},
        {name: 'TEam 1', upVoted: true},
        {name: 'Goobers', upVoted: false},
        {name: 'Another', upVoted: false},
        {name: 'TEam 1', upVoted: true},
        {name: 'Another', upVoted: false},
        {name: 'TEam 1', upVoted: true},
        {name: 'Goobers', upVoted: false},
        {name: 'Another', upVoted: false},
        {name: 'TEam 1', upVoted: true},
    ];

    $scope.toggleTeamVote = function(team) {
        console.log('toggle vote for', team);
        team.upVoted = !team.upVoted;

        // PERSIST TO SERVER with user
    };

});


window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

