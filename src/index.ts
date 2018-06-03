import angular from 'angular';
import AppModule from './angularjs';

const rootElement = document.getElementById('root');
angular.bootstrap(rootElement!, [AppModule.name], {strictDi: true});
