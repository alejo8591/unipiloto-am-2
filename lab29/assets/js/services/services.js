/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab29.services', ['ngResource'])
.factory('data', function($resource){

    'use strict';

    return $resource('http://127.0.0.1:3636/data');
});