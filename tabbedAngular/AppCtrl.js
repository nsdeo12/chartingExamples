var app = angular.module('chromeTabsApp', ['ui.bootstrap']);
app
  .controller('AppCtrl', ['$scope', function ($scope) {
    var counter = 1;
    $scope.tabs = [];

    var addTab = function () {
      $scope.tabs.push({ title: 'Applicant Details',content:{
        customerName:"A Customer",
        customerid:"test123"
      }
    });
      $scope.tabs.push({ title: 'Beneficiary Details',test:'partial.html'});

      $scope.tabs.push({ title: 'Shipment Details',content:{
        portDetails:"Chennai"
      }});

      $scope.tabs.push({ title: 'Insurance Details'});
      $scope.tabs.push({ title: 'Document Upload'});
      $scope.tabs.push({ title: 'Final Submission'});

    };


    $scope.addTab    = addTab;


    addTab();


  }])
  .directive('tabHighlight', [function(){
    return {
      restrict: 'A',
      link: function(scope, element) {
        var x, y, initial_background = 'black';

        element
          .removeAttr('style')
          .mousemove(function (e) {
            // Add highlight effect on inactive tabs
            if(!element.hasClass('active'))
            {
              x = e.pageX - this.offsetLeft;
              y = e.pageY - this.offsetTop;

              element


            }
          })

      }
    };
  }]);
