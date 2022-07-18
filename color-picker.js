angular.module('ngColorPicker', [])
    .directive('ngColorPicker', function() {
        var defaultColors =  [
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
        return {
            scope: {
                selected: '=',
                customizedColors: '=colors',
                onColorChange: '&?'
            },
            restrict: 'AE',
            template: '<div ng-include="contentUrl"></div>',
            link: function (scope, element, attr) {

                scope.contentUrl = 'bower_components/ng-color-picker/color-picker.html';
                if(attr.templateUrl){
                    scope.contentUrl = attr.templateUrl;
                }

                scope.colors = scope.customizedColors || defaultColors;
                scope.selected = scope.selected || scope.colors[0];

                scope.pick = function (color) {
                    scope.selected = color;
                    if(scope.onColorChange){
                        scope.onColorChange({ color: scope.selected });
                    }
                };
            }
        };

    });