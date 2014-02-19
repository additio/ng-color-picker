angular.module('ngColorPicker', [])
.directive('ngColorPicker', [function() {
    var colors = [
        '#7bd148',
        '#5484ed', 
        '#a4bdfc',
        '#46d6db',
        '#7ae7bf', 
        '#51b749',
        '#fbd75b',
        '#ffb878', 
        '#ff887c',
        '#dc2127',
        '#dbadff', 
        '#e1e1e1'
    ];
    function controller($scope) {
        $scope.colors = colors;
        $scope.selected = $scope.selected || '#e1e1e1';

        $scope.pick = function(color) {
            $scope.selected = color;
            $scope.callback({
                color: color
            });
        }
    }
    function link(scope, element, attr) {
    }
    return {
        scope: {
            callback: '&',
            selected: '@'
        },
        restrict: 'AE',
        template: '<span ng-repeat="color in colors" ng-click="pick(color)" style="{{ {true:\'border: 1px solid #333\'}[color===selected] }};background-color:{{color}};box-sizing:border-box;width:20px;height:20px;display:inline-block;"></span>',
        controller: controller,
        link: link
    }
}]);