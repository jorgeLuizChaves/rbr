/**
 * Created by jorgeluiz on 18/06/17.
 */
var app = angular.module('idea10', []);

app.controller('OrderController', function ($scope) {

    $scope.form1 = true;
    $scope.form2 = false;
    $scope.form3 = false;
    $scope.form4 = false;
    $scope.form5 = false;

    $scope.secondStep = function () {
        console.log("second step");
        $scope.form1 = false;
        $scope.form2 = true;
    };

    $scope.backToFirstStep = function () {
        console.log("back to first step");
        $scope.form1 = true;
        $scope.form2 = false;
    };

    $scope.backToSecondStep = function () {
        console.log("back to first step");
        $scope.form2 = true;
        $scope.form3 = false;
    };

    $scope.backToThirdStep = function () {
        console.log("back to first step");
        $scope.form3 = true;
        $scope.form4 = false;
    };

    $scope.backToFourthStep = function () {
        console.log("back to first step");
        $scope.form4 = true;
        $scope.form5 = false;
    };



    $scope.thirdStep = function () {
        console.log("third step");
        $scope.form2 = false;
        $scope.form3 = true;
    };


    $scope.fourthStep = function () {
        console.log("fourth step");
        $scope.form3 = false;
        $scope.form4 = true;
    };

    $scope.fifthStep = function () {
        console.log("fifth step");
        $scope.form4 = false;
        $scope.form5 = true;
    };


});