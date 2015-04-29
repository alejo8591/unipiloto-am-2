/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab29.controllers', ['lab29.services'])
.controller('lab29Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});