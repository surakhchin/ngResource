'use strict';

angular.module('budgetsApp')

    .controller('JumboController', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {

           // var users_data = $http.get('http://jsonplaceholder.typicode.com/users');
           //
           // users_data.then(function (result) {
           //
           //     $scope.users = result.data;
           // });


        $scope.users = UserService.query();


           $scope.setDataForUser = function (userID) {
                $scope.currentUser = UserService.get({user: userID})
           };

            $scope.addUser = function() {

                // UserService.save({name: 'LtSerge', email: 'thunderbadge@gmail.com'});
                UserService.update({user: 1},{name: 'LtSerge', email: 'thunderbadge@gmail.com'});
            };






        }]);