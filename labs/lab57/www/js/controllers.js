'use strict';

angular.module('lab57.Controllers', [])

.controller('ListController', function($scope, $state) {

        $scope.changePage = function(){

            $state.go( 'view', { id: 4 } );

        }
})

.controller('ViewController', function($scope, $stateParams, $ionicHistory) {

        console.log( $stateParams.id );

        if ( parseInt( $stateParams.id )  === 1 ) {

            console.log( 'on id = 1' );

            $scope.elements_ionic = '<div class="list">' +
                                     '<label class="item item-radio">' +
                                        '<input type="radio" name="group">' +
                                        '<div class="item-content">' +
                                            'Go' +
                                        '</div>' +
                                        '<i class="radio-icon ion-checkmark"></i>' +
                                     '</label>' +
                                     '<label class="item item-radio">' +
                                     '<input type="radio" name="group">' +
                                        '<div class="item-content">' +
                                            'C#' +
                                        '</div>' +
                                        '<i class="radio-icon ion-checkmark"></i>' +
                                     '</label>' +
                                     '<label class="item item-radio">' +
                                        '<input type="radio" name="group">' +
                                        '<div class="item-content">' +
                                            'Scala' +
                                        '</div>' +
                                        '<i class="radio-icon ion-checkmark"></i>' +
                                     '</label>' +
                                     '<label class="item item-radio">' +
                                        '<input type="radio" name="group">' +
                                        '<div class="item-content">' +
                                            'F#' +
                                        '</div>' +
                                        '<i class="radio-icon ion-checkmark"></i>' +
                                     '</label>' +
                                 '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 2 ) {

            $scope.elements_ionic = '<div class="list">' +
                                        '<label class="item item-input item-select">' +
                                            '<div class="input-label">' +
                                                'Lightsaber' +
                                            '</div>' +
                                            '<select>' +
                                                '<option>Blue</option>' +
                                                '<option selected>Green</option>' +
                                                '<option>Red</option>' +
                                            '</select>' +
                                        '</label>' +
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 3 ) {

            $scope.elements_ionic = '<div class="list">' +
                                    '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">First Name</span>' +
                                        '<input type="text" placeholder="First Name">' +
                                    '</label>' +
                                    '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">Last Name</span>' +
                                        '<input type="text" placeholder="Last Name">' +
                                    '</label>' +
                                    '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">Email</span>' +
                                        '<input type="text" placeholder="Email">' +
                                    '</label>' +
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else {

            $scope.elements_ionic = '<h4>Grid: Evenly Spaced Columns</h4>' +
                                    '<div class="row">' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                    '</div><br/>' +
                                    '<h4>Grid: Explicit Column Sizes</h4>' +
                                    '<div class="row">'+
                                    '<div class="col col-50">.col.col-50</div>'+
                                    '<div class="col">.col</div>'+
                                    '<div class="col">.col</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col col-75">.col.col-75</div>'+
                                        '<div class="col">.col</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col">.col</div>'+
                                        '<div class="col col-75">.col.col-75</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col">.col</div>'+
                                        '<div class="col">.col</div>'+
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        }


        $scope.goBack = function(){

            $ionicHistory.goBack();

        }
});