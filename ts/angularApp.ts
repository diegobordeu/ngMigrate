// import { angular } from 'angular';
import * as angular from 'angular';


const app = angular.module('heroApp', []);

function MainCtrl() {
  this.message = 'Hello world';
  this.test = 'TypeScript'
}

app.controller('MainCtrl', MainCtrl);

app.directive('tsTest', function() {
    return {
      restrict: 'E',
      scope: {
        id: '@',
      },
      controllerAs: '$ctrl',
      bindToController: true,
      controller: function () {
        this.subtitle = 'Esta semana';
      },
      template: `
      <div>
        dsadsad
        <h1>{{$ctrl.subtitle}}</h1>
        <h1>{{$ctrl.id}}</h1>
      </div>
      `,
      link: function(scope, elem) {
      }
    }
  });

