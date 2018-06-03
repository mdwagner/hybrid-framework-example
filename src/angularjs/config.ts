import { StateProvider, Ng1StateDeclaration } from '@uirouter/angularjs';
import { ILocationProvider } from 'angular';

export default class Config {
  constructor(
    private $stateProvider: StateProvider
  ) {}

  run() {
    const states: Ng1StateDeclaration[] = [
      {
        name: 'index',
        url: '/',
        template: `
          <div>
            Index
            <a ui-sref="index.home">Home</a>
            <a ui-sref="index.home.about">About</a>
          </div>
          <div ui-view></div>
        `
      },
      {
        name: 'index.home',
        url: 'home',
        template: `
          <div>Home</div>
          <div ui-view></div>
        `
      },
      {
        name: 'index.home.about',
        url: '/about',
        template: `<div>About</div>`
      }
    ];

    states.forEach(state => this.$stateProvider.state(state));
  }
}

export function Configuration(
  $stateProvider: StateProvider,
  $locationProvider: ILocationProvider
) {
  new Config($stateProvider).run();

  $locationProvider.html5Mode(true);
}

Configuration.$inject = [
  '$stateProvider',
  '$locationProvider'
];
