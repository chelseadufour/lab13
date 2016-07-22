var app = angular.module('sixYearOld', []);

app.controller('wordController', function($scope) {


    $scope.words = ['platypus', 'Coffee', 'smithsonian'];
    $scope.words_dec=['blurt', 'wordings', 'lollipop'];
    $scope.phrases = ['cheeseburger with extra pickles', 'you talkin to me?', 'Save me, coffee'];
    $scope.phrases_dec= ['kick', 'soccer', 'sports']
    $scope.wordArray = [ ];

$scope.addWord=function() {
//start using objects instead of just pulling strings
  var obj={};
  //created object and want to put random word it
  //words array...below: pulling a random number that represents index of word array
  obj.word=$scope.words[Math.floor(Math.random() * $scope.words.length)];
//click addWord an object is created - 2 properties, word and decoration. word will have a value that will pull a word from the array. Decoration property will have empty string as value.
  obj.decoration="";
  //need to push object into word array
  $scope.wordArray.push(obj);
  //when function runs, it creates an obj and gets random number for index and throws random word in wordArray
  };


$scope.addFunWord=function() {
  var obj={};
  obj.word=$scope.words[Math.floor(Math.random() * $scope.words.length)];
  obj.decoration=$scope.words_dec[Math.floor(Math.random() * $scope.words_dec.length)];
  $scope.wordArray.push(obj);
};

$scope.addPhrase=function() {
  var obj={};
  obj.word=$scope.phrases[Math.floor(Math.random()* $scope.phrases.length)];
  obj.decoration="";
  $scope.wordArray.push(obj);
};

$scope.addFunPhrase=function() {
  var obj={};
  obj.word=$scope.phrases[Math.floor(Math.random() * $scope.phrases.length)];
  obj.decoration=$scope.phrases_dec[Math.floor(Math.random() * $scope.phrases_dec.length)];
  $scope.wordArray.push(obj);
};











});
