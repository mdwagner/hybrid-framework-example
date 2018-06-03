import angular from 'angular';
import UIRouter from '@uirouter/angularjs';
import { Configuration } from './config';

export default angular.module('app',
  [
    UIRouter
  ])
  .config(Configuration);
