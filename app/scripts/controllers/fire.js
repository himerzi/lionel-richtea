'user strict';

angular.module('teastackApp')
  .controller('FireCtrl', function ($scope, $firebase) {
    console.log(' --> Problems LOADING');
    var probRef = new Firebase('https://shanky.firebaseio.com/');
    // Automatically sync everywhere in realtime
    $scope.probs = $firebase(probRef);
    console.log(' <-- Problems retrieved');
  });
