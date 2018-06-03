import { Ng1StateDeclaration, StateProvider } from '@uirouter/angularjs';
import { NgHybridStateDeclaration } from '@uirouter/angular-hybrid';
import { ReactStateDeclaration } from '@uirouter/react';
import { ILocationProvider } from 'angular';
// import Button from '../react/Button';

type StateDeclaration = Ng1StateDeclaration | ReactStateDeclaration | NgHybridStateDeclaration;

export default class Config {
  constructor(
    private $stateProvider: StateProvider
  ) {}

  run() {
    const states: StateDeclaration[] = [
      {
        name: 'index',
        url: '/',
        template: `
          <div>
            Index
            <a ui-sref="index.home">Home</a>
            <a ui-sref="index.home.about">About</a>
            <a ui-sref="index.home.button">React Button</a>
            <a ui-sref="index.home.h1">Ng2 H1</a>
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
      },
      // {
      //   name: 'index.home.button',
      //   url: '/button',
      //   component: Button
      // }
    ];

    states.forEach(state => this.$stateProvider.state(state as Ng1StateDeclaration));
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
