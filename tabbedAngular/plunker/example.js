angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'http://localhost:3000/tab1.html' },
    { title:'Dynamic Title 2', content:'tab2.html'}
  ];
});
